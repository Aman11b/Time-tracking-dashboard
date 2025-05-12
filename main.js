// fetching all data
fetch('data.json')
.then(response => response.json())
.then(data =>{
    console.log('Full Data',data);
})
.catch(error => console.error('Error fetching data', error));


// fetech data in format
fetch('data.json')
.then(response => response.json())
.then(data =>{
    const dailyData = data.map(item => ({title: item.title, daily: item.timeframes.daily}));
    console.log('Formated data', dailyData)
})
.catch(error => console.error('Error fetching data',error))

// fetching only daily data
fetch('data.json')
.then(response => response.json())
.then(data =>{
    const dailyData =data.map(item => ({
        title: item.title,
        current: item.timeframes.daily.current,
        previous: item.timeframes.daily.previous
    }));
    console.log("Daily data:",dailyData);
}).catch(error => console.log('Error' , error))

// fetching only weekly data
fetch('data.json')
.then(response => response.json())
.then(data =>{
    const weeklyData =data.map(item => ({
        title: item.title,
        current: item.timeframes.weekly.current,
        previous: item.timeframes.weekly.previous
    }));
    console.log("Weekly data:",weeklyData);
}).catch(error => console.log('Error' , error))

// fetching only monthly data
fetch('data.json')
.then(response => response.json())
.then(data =>{
    const monthlyData =data.map(item => ({
        title: item.title,
        current: item.timeframes.monthly.current,
        previous: item.timeframes.monthly.previous
    }));
    console.log("monthly data:",monthlyData);
}).catch(error => console.log('Error' , error))