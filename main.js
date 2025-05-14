// fetching all data

// fetch('data.json')
// .then(response => response.json())
// .then(data =>{
//     console.log('Full Data',data);
// })
// .catch(error => console.error('Error fetching data', error));


// fetech data in format

// fetch('data.json')
// .then(response => response.json())
// .then(data =>{
//     const dailyData = data.map(item => ({title: item.title, daily: item.timeframes.daily}));
//     console.log('Formated data', dailyData)
// })
// .catch(error => console.error('Error fetching data',error))

// fetching only daily data

// fetch('data.json')
// .then(response => response.json())
// .then(data =>{
//     const dailyData =data.map(item => ({
//         title: item.title,
//         current: item.timeframes.daily.current,
//         previous: item.timeframes.daily.previous
//     }));
//     console.log("Daily data:",dailyData);
// }).catch(error => console.log('Error' , error))

// fetching only weekly data

// fetch('data.json')
// .then(response => response.json())
// .then(data =>{
//     const weeklyData =data.map(item => ({
//         title: item.title,
//         current: item.timeframes.weekly.current,
//         previous: item.timeframes.weekly.previous
//     }));
//     console.log("Weekly data:",weeklyData);
// }).catch(error => console.log('Error' , error))

// fetching only monthly data

// fetch('data.json')
// .then(response => response.json())
// .then(data =>{
//     const monthlyData =data.map(item => ({
//         title: item.title,
//         current: item.timeframes.monthly.current,
//         previous: item.timeframes.monthly.previous
//     }));
//     console.log("monthly data:",monthlyData);
// }).catch(error => console.log('Error' , error))

// fetching data as per buttons


// function fetchData(timeframe){
//     fetch('data.json')
//     .then(response => response.json())
//     .then(data => {
//         const filterData = data.map(item =>({
//             title: item.title,
//             current: item.timeframes[timeframe].current,
//             previous: item.timeframes[timeframe].previous
//         }));
//         console.log(filterData);
//     })
//     .catch(error => console.log('error',error));
// }
// document.getElementById("daily_btn").addEventListener('click',()=>fetchData('daily'));
// document.getElementById("week_btn").addEventListener('click',()=>fetchData('weekly'));
// document.getElementById("Monthly_btn").addEventListener('click',()=>fetchData('monthly'));


// actual code

const timeframeLabels ={
    daily: "Yesterday",
    weekly: "Last week",
    monthly: "Last Month"
};
const taskGrid = document.getElementById('task_grid');
function fetchData(timeframe ='weekly'){
    fetch('data.json')
    .then(response => response.json())
    .then(data =>{
        taskGrid.innerHTML ='';

        data.forEach(item=>{
            const {title, timeframes} = item;
            const current =timeframes[timeframe].current;

            const previous = timeframes[timeframe].previous;

            const timeframeLabel = timeframeLabels[timeframe];

            const cardHTML =`
            <div class="task_card | ${title.toLowerCase()}_task ">
              <div class="card_secondary">
                <h3>${title}</h3>
                <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.5 0a2.5 2.5 0 1 1 0 5
                  2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5
                  2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5
                  2.5 2.5 0 0 1 0-5Z"
                    fill="#BBC0FF"
                    fill-rule="evenodd"
                  />
                </svg>
              </div>
              <div class ='card_content'>
                <h1>${current} hrs</h1>
                <p>${timeframeLabel} - ${previous}</p>
              </div>
            </div>`;
            taskGrid.insertAdjacentHTML("beforeend", cardHTML);
        });
    })
    .catch(error => console.log('Fetch error: ',error))
}

fetchData('weekly');

document
  .getElementById("daily_btn")
  .addEventListener("click", () => fetchData("daily"));
document
  .getElementById("week_btn")
  .addEventListener("click", () => fetchData("weekly"));
document
  .getElementById("Monthly_btn")
  .addEventListener("click", () => fetchData("monthly"));
