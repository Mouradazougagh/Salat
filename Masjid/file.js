 async function getPrayerTimes() {
    const city = document.getElementById('select').value;
    const country = 'Morocco';

     const response =await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${city}&country=${country}`);
      const data1 =await response.json();
        var time =await data1.data.timings;
        const prayerTimesDiv = document.getElementById('prayerTimes');
        prayerTimesDiv.innerHTML = `
          <p>  صلاة الفجر:<span>${time.Fajr}</span></p>
          <p>صلاة الظهر:  <span>${time.Dhuhr}</span></p>
          <p>صلاة العصر:  <span>${time.Asr}</span></p>
          <p>صلاة المغرب:  <span>${time.Maghrib}</span></p>
          <p>صلاة العشاء:  <span>${time.Isha}</span></p>

        `;}

getPrayerTimes();