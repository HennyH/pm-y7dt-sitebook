(function () {
    const editor = document.getElementById("editor");
    let previewPane = document.getElementById("preview-pane");
    const newProjectButton = document.getElementById("new-project-button");
    const projectListElement = document.getElementById("project-list");
    const previewPaneTitle = document.getElementById("preview-title");
    const downloadButton = document.getElementById("download");
    let projects = JSON.parse(localStorage.getItem("projects")) || [];
    let openedProject = undefined;

    /* project management */
    function createProjectOpenButton(project) {
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

        projectListElement.append(projectBtn);
        return projectBtn;
    }

    function createNewProject() {
        let name;
        while (true) {
            name = window.prompt("Name of project: ");
            if (!projects.some(p => p.name === name)) {
                break;
            }

            alert("This name is already in use");
        }

        return { name, html: "", css: "", js: ""};
    }

    function openProject(project) {
        openedProject = project;

        editor.className = "editable";
        htmlEditor.setOption("readOnly", false);
        htmlEditor.setValue(openedProject.html);
        cssEditor.setOption("readOnly", false);
        cssEditor.setValue(openedProject.css);
        jsEditor.setOption("readOnly", false);
        jsEditor.setValue(openedProject.js);
        refreshPreview();
    }

    function saveProjects() {
        localStorage.setItem("projects", JSON.stringify(projects));
    }

    newProjectButton.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const newProject = createNewProject();
        projects.push(newProject);
        const openButtonElement = createProjectOpenButton(newProject);
        openButtonElement.click();
    });

    for (const project of projects) {
        createProjectOpenButton(project);
    }
    
    /* editor functionality */
    const commonEditorSettings = {
        readOnly: true,
        lineNumbers: true,
        lint: true,
        gutters: ["CodeMirror-lint-markers"],

    }
    const htmlTextArea = document.getElementById("html");
    const htmlEditor = CodeMirror.fromTextArea(htmlTextArea, {
        mode: {
            name: "xml",
            htmlMode: true,
            matchClosing: true
        },
        ...commonEditorSettings
    });

    const cssTextArea = document.getElementById("css");
    const cssEditor = CodeMirror.fromTextArea(cssTextArea, {
        mode: "css",
        ...commonEditorSettings
    });

    const jsTextArea = document.getElementById("js");
    const jsEditor = CodeMirror.fromTextArea(jsTextArea, {
        mode: "jsx",
        ...commonEditorSettings,
        lint: {
            esversion: 6
        }
    })

    function refreshPreview() {
        saveProjects();

        let preview = document.getElementById("preview");
        previewPane.removeChild(preview);

        preview = document.createElement("iframe");
        preview.id = "preview";
        preview.srcdoc = openedProject.html;
        preview.addEventListener("load", e => {
            const previewDocument = preview.contentDocument;
            
            /* add in the styles */
            const styleElement = previewDocument.createElement("style");
            styleElement.innerHTML = openedProject.css;
            previewDocument.head.append(styleElement);
            previewDocument.head.remov
            
            /* add in the script */
            const jsElement = previewDocument.createElement("script");
            jsElement.type = "text/javascript";
            jsElement.innerHTML = openedProject.js;
            previewDocument.body.append(jsElement);

            /* grab out the title and put it in the editor tab */
            const maybeTitle = preview.contentDocument.querySelector("title")
            previewPaneTitle.textContent = !!maybeTitle ? maybeTitle.textContent : "Preview";
        });
        previewPane.append(preview);
    }

    const refreshButton = document.getElementById("refresh");
    refreshButton.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        refreshPreview();
    });
    
    htmlEditor.on("change", ({from, to, text, removed, origin}) => {
        htmlEditor.save();
        openedProject.html = htmlTextArea.value;
        refreshPreview();
    });

    cssEditor.on("change", ({from, to, text, removed, origin}) => {
        cssEditor.save();
        openedProject.css = cssTextArea.value;
        refreshPreview();
    });

    jsEditor.on("change", ({from, to, text, removed, origin}) => {
        jsEditor.save();
        openedProject.js = jsTextArea.value;
        refreshPreview();
    });

    /* taken from https://stackoverflow.com/questions/35038884/download-file-from-bytes-in-javascript */
     function saveByteArray(filename, bytes, mime) {
        var blob = new Blob([bytes], {type: mime});
        var link = document.createElement('a');
        link.href = window.URL.createObjectURL(blob);
        var fileName = filename;
        link.download = fileName;
        link.click();
    };

    downloadButton.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();

        const preview = document.getElementById("preview");
        const html = preview.contentDocument.documentElement.innerHTML;
        const formattedHtml = tidy_html5(html);
        saveByteArray("index.html", formattedHtml, "text/html");
    });
})();