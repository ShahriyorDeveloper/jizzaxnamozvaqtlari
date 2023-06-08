const students = document.getElementById('students');
const month = document.getElementById('month');

let vaqt = new Date();
month.textContent = vaqt.getMonth() + 1;
let monthArr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust"]

for (let i = 0; i <= monthArr.length; i++) {
    if (vaqt.getMonth() + 1) {
        month.textContent = "Iyun"
    } else if( vaqt.getMonth() + 1){
        month.textContent = "Iyul"
    }
}

console.log(vaqt.getMonth() + 1);

// console.log(DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO());

fetch(`https://islomapi.uz/api/monthly?region=Jizzax&month=${vaqt.getMonth() + 1}`)
    .then(response => response.json())
    .then((data) => {
        studentsShow(data)
        console.log(data);
    });

function studentsShow(dates) {
    dates.map((post) => {
        students.innerHTML += `
                <tr>
                    <td> ${post.day} </td>
                    <td>${post.weekday}  </td>
                    <td> ${post.times.tong_saharlik}  </td>
                    <td> ${post.times.quyosh} </td>
                    <td> ${post.times.peshin} </td>
                    <td> ${post.times.asr} </td>
                    <td> ${post.times.shom_iftor} </td>
                    <td> ${post.times.hufton} </td>
                </tr>
        `
    })
}
