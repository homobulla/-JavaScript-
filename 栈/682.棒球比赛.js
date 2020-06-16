/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let stack = [];
	let num = 0;
	for(let i=0;i<ops.length;i++){
		if(!isNaN(Number(ops[i]))){
			ops[i] = Number(ops[i])
		}
		if(ops[i] =='+'){
			let n = stack[stack.length-1] + stack[stack.length-2]
			num += n;
			stack.push(n)
		} else 
		if(ops[i] === 'D'){
			let n = stack[stack.length-1] * 2;
			num += n;
			stack.push(n)
		} else 
		if(ops[i] === 'C'){
			let n = stack[stack.length-1];
			num -=n;
			stack.pop()
		} else {
			num += Number(ops[i]);
			stack.push(ops[i])
		}
	}
	return num;
};
// @lc code=end

