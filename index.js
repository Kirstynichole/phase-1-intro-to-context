// Your code here
sample = [
    [ 
    "Kirstyn",
    "Canull",
    "Student",
    0,
],
    [
    "Caleb",
    "Siegel",
    "Student",
    0
    ]
]
function createEmployeeRecord(employeeRecord) {

    const newEmployeeRecord = {
        firstName: employeeRecord[0],
        familyName: employeeRecord[1],
        title: employeeRecord[2],
        payPerHour: employeeRecord[3],
        timeInEvents: [],
        timeOutEvents: []
        }

        
    return(newEmployeeRecord);
}

function createEmployeeRecords (arrayOfArrays){
const employeeRecords = [];

    for (let i = 0; i < arrayOfArrays.length; i++) {
        const record = createEmployeeRecord(arrayOfArrays[i]);
        employeeRecords.push(record);
    }
    return employeeRecords
}
// console.log(sample[1]);
// console.log(createEmployeeRecords(sample));

function createTimeInEvent (object, stamp) {
 const stampArray = stamp.split(" ")
 const hourStamp = stampArray[1]
 const dateStamp = stampArray[0]
 const timeInObject = {
        type : "TimeIn",
        hour: parseInt(hourStamp),
        date: dateStamp
    }
    object.timeInEvents.push(timeInObject)
    return object
}
// console.log(createTimeInEvent(employeeRecords.firstName("Kirstyn"), "2024-01-16 1451"))
function createTimeOutEvent (object, stamp) {
    const stampArray = stamp.split(" ")
    const hourStamp = stampArray[1]
    const dateStamp = stampArray[0]
    const timeOutObject = {
           type : "TimeOut",
           hour: parseInt(hourStamp),
           date: dateStamp
       }
       object.timeOutEvents.push(timeOutObject)
       return object
   }

function hoursWorkedOnDate (object, date) {
    let timeStarted;
    let timeEnded;
    object.timeInEvents.forEach(Element => {
        if (date === Element.date) {
            timeStarted = Element.hour
        } 
        return timeStarted
    });
    object.timeOutEvents.forEach(Element => {
        if (date === Element.date) {
            timeEnded = Element.hour
        } 
        return timeEnded
    });
    const timeWorked = (timeEnded - timeStarted)/(100);
    return parseInt(timeWorked);
}
function wagesEarnedOnDate (object, date){
    let timeWorked = hoursWorkedOnDate(object, date);
    let payPerHour = object.payPerHour;
    let payOwed = timeWorked * payPerHour;
    return parseInt(payOwed)
}
function allWagesFor (object) {
    let allPayOwed = [];
    object.timeInEvents.forEach(Element => {
        let payOwed = wagesEarnedOnDate(object, Element.date)
        allPayOwed.push(payOwed)
    })
    const finalPay = allPayOwed.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return parseInt(finalPay);
}
function calculatePayroll (array) {
    let payroll = [];
    array.forEach(Element => {
        let singlePayroll = allWagesFor(Element)
        payroll.push(singlePayroll)
    })
    const finalTotalPayroll = payroll.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    return parseInt(finalTotalPayroll);
}