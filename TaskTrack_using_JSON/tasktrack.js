const fs = require("fs");
let JSONLIST = [];
let data = [];
let str = ""
function userINFO_JSON_Function() {
    if (file_Exist_or_Not()) {
        JSONLIST = JSON.parse(fs.readFileSync("task.json", "utf-8"));
    }
    let userINFO = {
        id: JSONLIST.length + 1,
        description: process.argv[3],
        status: "todo", //Status: todo, in-progress, done//
        createdAt: new Date().toLocaleDateString("en-CA") + " at " + new Date().toLocaleTimeString("en-US"),
        updatedAt: "-"
    }
    JSONLIST.push(userINFO);
}
function file_Exist_or_Not() {
    try {
        fs.accessSync("task.json", fs.constants.F_OK)
        return 1;
    } catch (err) {
        return 0;
    }
}
function read_File_to_List_options() {
    try {
        data = JSON.parse(fs.readFileSync("task.json", "utf-8"))
    } catch (err) {
        console.log(err);
    }
    return data;
}
function toggle_Betn_Status(str) {
    let fileData = [];
    let fileDatas = [];
    if (file_Exist_or_Not()) {
        fileData = read_File_to_List_options()
        if (process.argv[3] <= fileData.length) {
            fileDatas = fileData.map((item) => {
                if (item.id == process.argv[3]) {
                    if (str == "in-progress") {
                        item.status = "in-progress";
                        item.updatedAt = new Date().toLocaleDateString("en-CA") + " at " + new Date().toLocaleTimeString("en-US");
                    } else if (str == "done") {
                        item.status = "done";
                        item.updatedAt = new Date().toLocaleDateString("en-CA") + " at " + new Date().toLocaleTimeString("en-US");
                    } else if (str == "todo") {
                        item.status = "todo";
                        item.updatedAt = new Date().toLocaleDateString("en-CA") + " at " + new Date().toLocaleTimeString("en-US");
                    }
                }
                return item;
            })
            try {
                fs.writeFileSync("task.json", JSON.stringify(fileDatas, null, 4));
                console.log("--------------------------------Task Status Changed Sucessfully--------------------------------")
            } catch (err) {
                console.log("Error while changing and writing the status", err)
            }
        } else {
            console.log("\nNo Such task exist check list to find out the Total task list and change status it\n");
            return 0;
        }
    }
}
function tableTitle() {
    console.log("\n" + "S.N.".padEnd(12) + "Tasks".padEnd(70) + "Status".padEnd(22) + "Created At".padEnd(40) + "Updated At".padEnd(40) + "\n");
}

function TODO_DONE_IN_PROGRESS_OPTIONS() {
    let datas = read_File_to_List_options();
    tableTitle();
    datas.forEach((item, index) => {
        if (item.status == process.argv[3]) {
            console.log(`${(index + 1 + ".").padEnd(12)}` + `${item.description.padEnd(70)}` + `${item.status.padEnd(22)}` + `${item.createdAt.padEnd(40)}` + `${item.updatedAt.padEnd(40)}`)
        }
    })
    console.log("\n")
}

function mainmenu() {
    if (process.argv[2] == null) {
        console.log(`\nWhat we have: \n\nAdd: To add task (Example: node tasktracker.js add "Your task here")\nDelete: To remove the task (Example: node tasktracker.js delete 3)\nUpdate: To update the file (Example: node tasktracker.js update 1 "hello there")\nList: To list out the all files (Example: node tasktracker.js list) or (Example: node tasktracker.js list done)\nMark: To change the status of task like change it from todo task into in-progress task and from there into done task (Example: node tasktracker.js mark-in-progress 1) or (Example: node tasktracker.js mark-done 1)\nHelp: it has all instruction to guide you properly (Example: node tasktracker.js help)\n`)
        return 0;
    } else {
        if (process.argv[2] === "add") {
            userINFO_JSON_Function();
            fs.writeFile("task.json", JSON.stringify(JSONLIST, null, 4), (err) => {
                if (err) {
                    console.log(err)
                    return 0;
                } else {
                    console.log("--------------------------------Task Added sucessfully!--------------------------------")
                }
            })
        } else if (process.argv[2] === "delete") {
            let JSONLISTUpdated = [];
            let JSONLIST_Delete = [];
            if (file_Exist_or_Not()) {
                JSONLIST_Delete = JSON.parse(fs.readFileSync("task.json", "utf-8"))
                if (process.argv[3] <= JSONLIST_Delete.length) {
                    JSONLISTUpdated = JSONLIST_Delete.filter((item) => {
                        return item.id != process.argv[3];
                    });
                    JSONLISTUpdated.forEach((item, index) => {
                        item.id = index + 1;
                    })
                    try {
                        fs.writeFileSync("task.json", JSON.stringify(JSONLISTUpdated, null, 4))
                        console.log("--------------------------------Task removed Sucessfully--------------------------------")
                    } catch (err) {
                        console.log("Oh no error while deleting task", err)
                    }
                } else {
                    console.log("\nNo Such task exist check list to find out the Total task list\n");
                    return 0;
                }
            } else {
                console.log("\nThere is no task at a current time :(\n")
            }
        } else if (process.argv[2] === "update") {
            let data = [];
            let datas = [];
            if (file_Exist_or_Not()) {
                try {
                    data = JSON.parse(fs.readFileSync("task.json", "utf-8"))
                    if (process.argv[3] <= data.length) {
                        datas = data.map((item) => {
                            if (item.id == process.argv[3]) {
                                item.description = process.argv[4]
                                item.updatedAt = new Date().toLocaleDateString("en-CA") + " at " + new Date().toLocaleTimeString("en-US");
                            }
                            return item;
                        })
                    } else {
                        console.log("\nNo Such task exist check list to find out the Total task list and update it\n");
                        return 0;
                    }
                } catch (err) {
                    console.log("Error during Updating File\n", err)
                }
                try {
                    fs.writeFileSync("task.json", JSON.stringify(datas, null, 4))
                    console.log("--------------------------------Task Updated Sucessfully--------------------------------")
                } catch (err) {
                    console.log("Error while updating and writing file", err)
                }
            }
        } else if (process.argv[2] === "list") {
            if (file_Exist_or_Not()) {
                if (process.argv[3] == "all" || (process.argv[2] == "list" && process.argv[3] == null)) {
                    let data = read_File_to_List_options();
                    tableTitle();
                    data.forEach((item) => {
                        console.log(`${item.id.toString().padEnd(12)}` + `${item.description.padEnd(70)}` + `${item.status.padEnd(22)}` + `${item.createdAt.padEnd(40)}` + `${item.updatedAt.padEnd(40)}`)
                    })
                    console.log("\n")
                } else if (process.argv[3] == "todo") {
                    TODO_DONE_IN_PROGRESS_OPTIONS();
                } else if (process.argv[3] == "done") {
                    TODO_DONE_IN_PROGRESS_OPTIONS();
                } else if (process.argv[3] == "in-progress") {
                    TODO_DONE_IN_PROGRESS_OPTIONS();
                } else {
                    console.log("\nNo such status task exist\n")
                    return 0;
                }
            }
            else {
                console.log("No Task is present now!")
            }
        } else if (process.argv[2] == "mark-in-progress") {
            toggle_Betn_Status("in-progress")
        } else if (process.argv[2] == "mark-done") {
            toggle_Betn_Status("done")
        } else if (process.argv[2] == "mark-todo") {
            toggle_Betn_Status("todo")
        } else if (process.argv[2] == "help") {
            console.log("\nWe have: \n")
            console.log("Add: use this code to add task in this app\n")
            console.log(`node tasktrack.js add "My first task"\n\n`)
            console.log("List: use this code to list all task in this app\n")
            console.log(`node tasktrack.js list`)
            console.log(`node tasktrack.js list todo \t\t\t [This code list out todo task only]`)
            console.log(`node tasktrack.js list done \t\t\t [This code list out done task only]`)
            console.log(`node tasktrack.js list in-progress \t\t [This code list out in progress task only]\n\n`)
            console.log("Delete: use this code to delete task in this app\n")
            console.log(`node tasktrack.js delete 1\n\n`)
            console.log("Update: use this code to delete task in this app\n")
            console.log(`node tasktrack.js update 1 "My first task is updated with other task"\n\n`)
            console.log("Mark: use this code to change the status of the task in this app\n")
            console.log(`node tasktrack.js mark-todo 1 \t\t\t [This code change status of 1st task into todo task]`)
            console.log(`node tasktrack.js mark-done 3 \t\t\t [This code change status of 3rd task into done task]`)
            console.log(`node tasktrack.js mark-in-progress 5 \t\t [This code change status of 5th task into in progress task]\n\n`)
        } else {
            console.log(`\nWhat we have: \n\nAdd: To add task (Example: node tasktracker.js add "Your task here")\nDelete: To remove the task (Example: node tasktracker.js delete 3)\nUpdate: To update the file (Example: node tasktracker.js update 1 "hello there")\nList: To list out the all files (Example: node tasktracker.js list) or (Example: node tasktracker.js list done)\nMark: To change the status of task like change it from todo task into in-progress task and from there into done task (Example: node tasktracker.js mark-in-progress 1) or (Example: node tasktracker.js mark-done 1)\nHelp: it has all instruction to guide you properly (Example: node tasktracker.js help)\n`)
        }
    }
}
mainmenu()