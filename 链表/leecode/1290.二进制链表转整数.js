/*
 * @lc app=leetcode.cn id=1290 lang=javascript
 *
 * [1290] 二进制链表转整数
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
// 101
// 
var getDecimalValue = function(head) {
	let index = 0;
	let str = '';
	while(head){
		str = `${str}${head.val}`
		console.log(str,'str')
		index++;
		head = head.next;
		
	}
	return parseInt(str,2)
	let result = 0
    do{
		// 这里是反转运算，
		// 乘以2+余数=被除数 即十进制数
        result = result * 2 + head.val
        head = head.next
    }while(head)
    return result


};
// @lc code=end

