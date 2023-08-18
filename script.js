const students = document.getElementById('students');
const month = document.getElementById('month');

let vaqt = new Date();
// console.log(vaqt.getMonth() + 1);
// month.textContent = vaqt.getMonth() + 1;
let monthArr = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun", "Iyul", "Avgust"]

// for (let i = 0; i <= monthArr.length; i++) {
//     if (vaqt.getMonth() + 1 > 0) {
//         console.log(monthArr[i]);
//         month.textContent == monthArr[i]
//     }
// }


// console.log(vaqt.getMonth() + 1);

// console.log(DateTime.now().setZone('America/New_York').minus({weeks:1}).endOf('day').toISO());

fetch(`https://islomapi.uz/api/monthly?region=Jizzax&month=${vaqt.getMonth() + 1}`)
    .then(response => response.json())
    .then((datas) => {
        
        month.innerHTML = monthArr[vaqt.getMonth()]

        datas.map((data) => {
            students.innerHTML += `
                <tr>
                    <td> ${data.day} </td>
                    <td>${data.weekday}  </td>
                    <td> ${data.times.tong_saharlik}  </td>
                    <td> ${data.times.quyosh} </td>
                    <td> ${data.times.peshin} </td>
                    <td> ${data.times.asr} </td>
                    <td> ${data.times.shom_iftor} </td>
                    <td> ${data.times.hufton} </td>
                </tr>
            `
        })

        // console.log(data);
    });


