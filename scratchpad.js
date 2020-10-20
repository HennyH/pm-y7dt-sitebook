(function () {
    const editor = document.getElementById("editor");
    const preview = document.getElementById("preview");
    const newProjectButton = document.getElementById("new-project-button");
    const projectList = document.getElementById("project-list");
    const projects = JSON.parse(localStorage.getItem("projects")) || [];
    let currentProject = undefined;
    let htmlCode = "";
    let cssCode = "";
    let jsCode = "";

    /* project management */
    function addProjectBtn(project) {
        const NOT_ACTIVE_PROJECT_BTN = "open-project-btn";
        const ACTIVE_PROJECT_BTN = "open-project-btn active";
        const projectBtn = document.createElement("button");
        projectBtn.className = NOT_ACTIVE_PROJECT_BTN;
        projectBtn.textContent = `📜 ${project.name}`;
        projectBtn.addEventListener("click", e => {
            e.preventDefault();
            e.stopPropagation();
            openProject(project);

            for (const btn of document.getElementsByClassName("open-project-btn")) {
                btn.className = NOT_ACTIVE_PROJECT_BTN;
            }

            projectBtn.className = ACTIVE_PROJECT_BTN;
        });
        projectList.append(projectBtn);
    }

    function saveCurrentProject() {
        if (currentProject === undefined) return;

        const data = projects.map(project => {
            if (project.name === currentProject.name) {
                return { ...project, html: htmlCode, css: cssCode, js: jsCode };
            }
            return project;
        });
        localStorage.setItem("projects", JSON.stringify(data));
    }

    function createNewProject() {
        let name;
        while (true) {
            name = window.prompt("Name of project: ");
            if (projects.some(p => p.name === name)) {
                alert("This name is already in use");
                continue;
            }

            break;
        }

        return { name, html: "", css: "", js: ""};
    }

    function openProject(project) {
        currentProject = project;
        htmlCode = project.html;
        cssCode = project.css;
        jsCode = project.js;

        editor.className = "editable";
        htmlEditor.setOption("readOnly", false);
        htmlEditor.setValue(htmlCode);
        cssEditor.setOption("readOnly", false);
        cssEditor.setValue(cssCode);
        jsEditor.setOption("readOnly", false);
        jsEditor.setValue(jsCode);
        refreshPreview();
    }

    newProjectButton.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        saveCurrentProject();
        const project = createNewProject();
        projects.push(project);
        addProjectBtn(project);
        openProject(project);
    });

    for (const project of projects) {
        addProjectBtn(project);
    }

    
    /* editor functionality */
    const htmlTextArea = document.getElementById("html");
    const htmlEditor = CodeMirror.fromTextArea(htmlTextArea, {
        mode: {
            name: "xml",
            htmlMode: true,
            matchClosing: true
        },
        readOnly: true,
        lineNumbers: true,
    });

    const cssTextArea = document.getElementById("css");
    const cssEditor = CodeMirror.fromTextArea(cssTextArea, {
        mode: "css",
        lineNumbers: true,
        readOnly: true
    });

    const jsTextArea = document.getElementById("js");
    const jsEditor = CodeMirror.fromTextArea(jsTextArea, {
        mode: "javascript",
        lineNumbers: true,
        readOnly: true
    })

    function refreshPreview() {
        saveCurrentProject();
        preview.srcdoc = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Document</title>
                <style>
                    ${cssCode}
                </style>
            </head>
            <body>
                ${htmlCode}
                <script type="text/javascript"> 
                    ${jsCode}
                </script>
            </body>
            </html>`;
    }

    const refreshButton = document.getElementById("refresh");
    refreshButton.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        refreshPreview();
    });
    
    htmlEditor.on("change", ({from, to, text, removed, origin}) => {
        htmlEditor.save();
        htmlCode = htmlTextArea.value;
        refreshPreview();
    });

    cssEditor.on("change", ({from, to, text, removed, origin}) => {
        cssEditor.save();
        cssCode = cssTextArea.value;
        refreshPreview();
    });

    jsEditor.on("change", ({from, to, text, removed, origin}) => {
        jsEditor.save();
        jsCode = jsTextArea.value;
        refreshPreview();
    });
})();