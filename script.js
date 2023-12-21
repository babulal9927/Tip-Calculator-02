function tipcal() {
    let billamount = document.getElementById('bill').value;
    let serviceQuality = document.getElementById('service').value;
    let numberofperson = document.getElementById('numofperson').value;

    if(billamount === '' || serviceQuality == 0){
        alert('Please enter required values')
        return;
    }

    if(numberofperson === '' || numberofperson <=1){
        numberofperson = 1;
        document.getElementById('each').style.display = 'none';
    }else{
        document.getElementById('each').style.display = 'block';
    }

    let totalAmount = (billamount * serviceQuality) / numberofperson;
    totalAmount = Math.round(totalAmount * 100) / 100;
    totalAmount = totalAmount.toFixed(2);
    document.getElementById('tip-container').style.display = 'block';
    document.getElementById('tip').innerHTML = totalAmount;
}

document.getElementById('tip-container').style.display = 'none';
document.getElementById('each').style.display = 'none';

document.getElementById('cal-btn').onclick = function(){
    tipcal()
};