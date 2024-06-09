const dias = document.getElementById('dias');
const meses = document.getElementById('meses');
const anos = document.getElementById('anos');
/*INPUTS*/
const DAY = document.getElementById('DAY');
const MONTH = document.getElementById('MONTH');
const YEAR = document.getElementById('YEAR');
/*LABELS*/
const DAYL = document.getElementById('DAYL');
const MONTHL = document.getElementById('MONTHL');
const YEARL = document.getElementById('YEARL');
/*ERRORS*/
const InvalidDay = document.getElementById('InvalidDay');
const InvalidMonth = document.getElementById('InvalidMonth');
const InvalidYear = document.getElementById('InvalidYear');
const NULL1 = document.getElementById('NULL1');
const NULL2 = document.getElementById('NULL2');
const NULL3 = document.getElementById('NULL3');
const InvalidDate1 = document.getElementById('InvalidDate1');


DAY.addEventListener('input', ()=> {
 DAY.classList.remove('ERROR');
 DAYL.classList.remove('ERROR');
 InvalidDay.classList.add('hide');
 InvalidDate1.classList.add('hide');
 NULL1.classList.add('hide');
})
MONTH.addEventListener('input', ()=> {
 MONTH.classList.remove('ERROR');
 MONTHL.classList.remove('ERROR');
 NULL2.classList.add('hide');
 InvalidMonth.classList.add('hide');
})
YEAR.addEventListener('input', ()=> {
 YEAR.classList.remove('ERROR');
 YEARL.classList.remove('ERROR');
 NULL3.classList.add('hide');
 InvalidYear.classList.add('hide');
})

document.getElementById('btn').addEventListener('click', function() {
    const day = document.getElementById('DAY').value;
    const month = document.getElementById('MONTH').value - 1; 
    const year = document.getElementById('YEAR').value;

    const birthDate = new Date(year, month, day);
    const today = new Date();
    const now = new Date();
    
    const YearNow = now.getFullYear();
   
   if(day == ''){
    DAY.classList.add('ERROR');
    DAYL.classList.add('ERROR');
    NULL1.classList.remove('hide');
   }
   if(MONTH.value == ''){
   MONTH.classList.add('ERROR');
   MONTHL.classList.add('ERROR');
   NULL2.classList.remove('hide');
   }
   if(year == ''){
   YEAR.classList.add('ERROR');
   YEARL.classList.add('ERROR');
   NULL3.classList.remove('hide');
   }
   if(year > YearNow){
   YEAR.classList.add('ERROR');
   YEARL.classList.add('ERROR'); 
   InvalidYear.classList.remove('hide');   
    }
    if(MONTH.value > 12){
    MONTH.classList.add('ERROR');
    MONTHL.classList.add('ERROR');
    InvalidMonth.classList.remove('hide');
    }
    if(day > 31){
     DAY.classList.add('ERROR');
     DAYL.classList.add('ERROR');
     InvalidDay.classList.remove('hide')
    }
    if(day > 29 && month == 1 || day > 30 && month == 3 || day > 30 && month == 5 || day > 30 && month == 8 || day > 30 && month == 10){
    DAY.classList.add('ERROR');
    DAYL.classList.add('ERROR');
    MONTH.classList.add('ERROR');
    MONTHL.classList.add('ERROR');
    YEAR.classList.add('ERROR');
    YEARL.classList.add('ERROR'); 
    InvalidDate1.classList.remove('hide');
    return
    }
    if(day == '' || MONTH.value == '' || year == '' || year > YearNow || MONTH.value > 12 || day > 31){
    return
    }



    const ageInMilliseconds = today - birthDate;
    
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const millisecondsInOneYear = millisecondsInOneDay * 365.25;
    
    const years = Math.floor(ageInMilliseconds / millisecondsInOneYear);
    const remainingAfterYears = ageInMilliseconds % millisecondsInOneYear;
    
    const months = Math.floor(remainingAfterYears / (millisecondsInOneDay * 30.44));
    const remainingAfterMonths = remainingAfterYears % (millisecondsInOneDay * 30.44);
    
    const days = Math.floor(remainingAfterMonths / millisecondsInOneDay);
    
    dias.textContent = days;
    meses.textContent = months;
    anos.textContent = years;

});