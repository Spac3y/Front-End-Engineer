
var endDate = '10/04/2023'

function getCurentDate() {
    var today = new Date();
    var dd= String(today.getDate()).padStart(2,'0');
    var mm= String(today.getMonth()+1).padStart(2,'0'); 
    var yyyy = today.getFullYear();

    today = dd + '/' + mm + '/' + yyyy;
}

function dateDifference() {
    splitDateList = endDate.split('/');
    console.log(splitDateList);
}
