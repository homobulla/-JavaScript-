/*
 * @Author: your name
 * @Date: 2020-06-04 10:33:49
 * @LastEditTime: 2020-06-05 10:56:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Learning-JavaScript-Data-Structures-and-Algorithms\栈\十进制到二进制.js
 */ 

function divideBy2(decNumber){
	let stack = new Stack(),
		rem, //余数
		binaryString = '';
	while(decNumber != 0){
		rem = decNumber % 2;
		stack.push(rem);
		decNumber = Math.floor(decNumber / 2)
	}
	while(!stack.isEmpty()){
		binaryString +=stack.pop().toString();
	}
	return binaryString;
}