/* N1 */

const array  = [16, 456, 25, 200, 301, 250, 170];
//let newArr = [];
// for (let i = 0, len = array.length; i <= len; i++) {
// 	if(array[i] > 15 && array[i] < 200) {
// 		newArr.push(array[i])
// 	}
// }
//console.log(newArr)
const newArr = array.filter(item => {
	return item > 15 && item < 200;
})
console.log(newArr);

/* N2 */


const city = ["Madrid", "London", "Moscow", "Saint Petersburg", "New York"];
let count = 0;
let string;
for (let i = 0, len = city.length; i < len; i++){
	if(city[i].length > count){
		count = city[i].length;
		string  =city[i];
	}
}
console.log(string)


/* N3 */
const text = "This is a homework";
const newa  = text.split(" ");
console.log(newa);




/* N4 */
const massiv = ["Madrid", "London", "Moscow", "Saint Petersburg", "New York"];
const change = massiv.join(":");
console.log(change);


/* N5 */


const numbers = [1, 2, 9, 4, 9, 6, 9, 9, 25];
const index = numbers.indexOf(9);
console.log(index);

for (let i = 0, len = numbers.length; i < len; i++) {
	if (numbers[i] === 9) {
		console.log(i);
		break;
	} 
}

/* N6 */
const te_xt = "Vanadzor";
const newText = te_xt.slice(0, te_xt.length / 2);
const new_Text = te_xt.slice(te_xt.length / 2, te_xt.length)
console.log(new_Text + newText);

/* N7 */


const arrayText = ["M", "O", "N", "A", "C", "O"];
const newArrayText = arrayText.splice(0, arrayText.length / 2);
const new_arrayText = arrayText.splice(arrayText.length / 2 - 1, arrayText.length);
console.log(new_arrayText.concat(newArrayText));