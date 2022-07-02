let amount = 100;
let monday = [
    ['Write a tutorial',180],
    ['Some web development',120]
];
let tuesday = [
    ['Keep writing that tutorial',240],
    ['Some more web development',360],
    ['A whole lot of nothing',240]
];

let сoncatArr = monday.concat(tuesday)
.map(
    function(time) {
        time[1] /= 60;
        return time;
    }
)
.filter(
    function(filterTime) {
        return filterTime[1] > 2;
    }
) 
.map(
    function(item) {
        let value = item[1] * amount;
        item.push(value);
        return item;
    }
)
.map(
    function(displayItem) {
        return `<tr>
                    <td>Task name: ${displayItem[0]}</td>
                    <td>Taks duration: ${displayItem[1]}</td>
                    <td>Task amount: ${displayItem[2]}</td>
                </tr>`
    }
)
.join("");

document.write(`<table>${сoncatArr}</table>`);


