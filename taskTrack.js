const fs = require('fs');
const readline = require('readline');
let index = 0;
let finaloutput = "";
let flagStatus;
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
function continueORexit() {
    console.log("\nWould you like to continue or not?")
    rl.question("Type 'Y' to go to main menu and 'N' or 'any key' to exit: ", (response) => {
        if (response == "y" || response == "Y") {
            console.clear();
            mainmenue();
        } else {
            console.log("\n------------------Exited Sucessfully!------------------\n")
            rl.close();
            return 0;
        }
    });
}

function file_Exist_or_Not_Check() {
    try {
        fs.accessSync("./indexnum.txt", fs.constants.F_OK)
    } catch (err) {
        return 0;
    }
    return 1;
}

function readData() {
    let output = "";
    const resu = "";
    const filedata = fs.readFileSync("./tasklist.txt", "utf-8");
    console.log("\nYour Task are: \n")
    const datas = filedata.split("\n");
    datas.forEach((element, index) => {
        if (index < datas.length - 1) {
            const resu = output.concat(index + 1, ". ", element)
            console.log(resu);
        }
    })
    return filedata;
}

function mainmenue() {
    console.log("\t\n---------------------Welcome to TASK TRACKER---------------------\n")
    console.log("1. Add Task\t2. View Task\t3. Remove Task\t4.Update Task\t5. Exit\n")
    rl.question(`Please Enter your option?\n`, (task) => {
        if (task == 1) {
            rl.question(`Enter your Task:\n`, (content) => {
                //--------------------------File exist or not check start-------------------
                flagStatus = file_Exist_or_Not_Check();
                if (flagStatus) {
                    try {
                        const datafile = fs.readFileSync("./indexnum.txt", "utf-8")
                        index = datafile.length
                    } catch (err) {
                        console.error(err);
                        return 0;
                    }
                }
                index++;
                try {
                    fs.appendFile("./indexnum.txt", index.toString(), function (err) {
                        if (err) {
                            console.log(err)
                        }
                    })
                } catch (err) {
                    console.error(err);
                    return 0;
                }
                //---------------------------File exist or not check end-----------------------

                result = finaloutput.concat(content, "\n");
                try {
                    fs.appendFileSync("./tasklist.txt", result)
                    console.log("\n------------------Data Added sucessfully!------------------\n")
                    continueORexit();
                } catch (err) {
                    console.error(err);
                    return 0;
                }
            })
        } else if (task == 2) {
            if (file_Exist_or_Not_Check()) {
                try {
                    readData();
                    continueORexit();
                } catch (err) {
                    console.log("\nError occur while reading the file")
                    console.error(err);
                    return 0;
                }
            } else {
                console.log("\nNo Task is present so write a task first\n")
                continueORexit();
            }
        } else if (task == 3) {
            flagStatus = file_Exist_or_Not_Check();
            let newremoveList = [];
            if (flagStatus) {
                const filedata = readData();
                rl.question("\nPlease Enter the index no.(Example: 1 or 2 or 3 etc) of task which you want to remove\n", (indexselect) => {
                    const taskListAlone = filedata.split("\n") //split make array with index 0 to nth size
                    if (taskListAlone.length >= indexselect && indexselect > 0) {
                        newremoveList = taskListAlone.filter((line) => taskListAlone[indexselect - 1].trim() !== line)
                        const data = newremoveList.join("\n")
                        try {
                            fs.writeFileSync("tasklist.txt", data)
                            console.log(`"${taskListAlone[indexselect - 1]}" Task removed sucessfully!`)
                            continueORexit();
                        } catch (err) {
                            console.log("\nError occur while removing the file")
                            console.error(err);
                            return 0;
                        }
                    } else {
                        (taskListAlone.length == 0) ? console.log("\nThere is no task exist\n") : console.log(`\nNo such task exist please select the index from 1 to ${taskListAlone.length - 1}\n`)
                        continueORexit();
                    }
                })
            } else {
                console.log("\nNo Task is present to Remove so write a task first\n")
                continueORexit();
            }
        } else if (task == 4) {
            flagStatus = file_Exist_or_Not_Check();
            if (!flagStatus) {
                console.log("\nNo Task is present to Update so write a task first\n")
                continueORexit();
            } else {
                try {
                    filedata = readData();
                    rl.question("\nPlease Enter the index no.(Example: 1 or 2 or 3 etc) of task which you want to edit\n", (indexselect) => {
                        const taskListAlone = filedata.split("\n") //split make array with index 0 to nth size
                        if (taskListAlone.length - 1 >= indexselect && indexselect > 0) {
                            rl.question("\nEnter the task your want to update with: \n", (UpdateData) => {
                                taskListAlone[indexselect - 1] = UpdateData;
                                const UpdateDatainFile = taskListAlone.join("\n");
                                try {
                                    fs.writeFileSync("tasklist.txt", UpdateDatainFile)
                                    console.log("\n------------------Data Updated Sucessfully!------------------\n")
                                    continueORexit();
                                } catch (err) {
                                    console.log("\nError occur while updating the file")
                                    console.error(err);
                                    return 0;
                                }
                            })
                        } else {
                            if (taskListAlone.length == 0) {
                                console.log("\nThere is no task exist\n");
                            } else if (taskListAlone.length - 1 == 1) {
                                console.log(`\nNo such task exist. Please select the index ${taskListAlone.length - 1}\n`);
                            } else {
                                console.log(`\nNo such task exist. Please select the index range from 1 to ${taskListAlone.length - 1}\n`);
                            }
                            continueORexit();
                        }
                    })
                } catch (err) {
                    console.log("\nError occur while reading the file")
                    console.error(err);
                    return 0;
                }
            }
        } else if (task == 5) {
            rl.close();
            console.log("\n\n--------------------Program exited Sucessfully!--------------------\n\n")
            return 0;
        } else {
            console.log("\n\nPlease enter 1 or 2 or 3 or 4 or 5 number")
            mainmenue();
        }
    });
}
mainmenue();