const dias = document.getElementById('dias');
const meses = document.getElementById('meses');
const anos = document.getElementById('anos');



document.getElementById('btn').addEventListener('click', function() {

    const day = parseInt(document.getElementById('DAY').value);
    const month = parseInt(document.getElementById('MONTH').value) - 1; // Mês começa de 0
    const year = parseInt(document.getElementById('YEAR').value);
    
    const birthDate = new Date(year, month, day);
    const today = new Date();
    
    const ageInMilliseconds = today - birthDate;
    
    const millisecondsInOneDay = 24 * 60 * 60 * 1000;
    const millisecondsInOneYear = millisecondsInOneDay * 365.25;
    
    const years = Math.floor(ageInMilliseconds / millisecondsInOneYear);
    const remainingAfterYears = ageInMilliseconds % millisecondsInOneYear;
    
    const months = Math.floor(remainingAfterYears / (millisecondsInOneDay * 30.44));
    const remainingAfterMonths = remainingAfterYears % (millisecondsInOneDay * 30.44);
    
    const days = Math.floor(remainingAfterMonths / millisecondsInOneDay);
    
    dias.textContent = days - 1;
    meses.textContent = months;
    anos.textContent = years;

});