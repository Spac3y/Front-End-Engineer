
var endDate = '10/04/2023'

function getCurentDate() {
    var today = new Date();
    var dd= String(today.getDate()).padStart(2,'0');
    var mm= String(today.getMonth()+1).padStart(2,'0'); 
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function dateDifference() {
    splitDateEndList = endDate.split('/');
    splitDateCurrentList = getCurentDate().split('/');
    console.log(splitDateCurrentList);
    daysLeft = (splitDateEndList[2]-splitDateCurrentList[2])*365 + (splitDateEndList[1]-splitDateCurrentList[1])*31 + splitDateEndList[0] - splitDateCurrentList[0]
}
const neededMoney = 2500;