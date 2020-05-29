/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function(head) {
	// 先确定中间分割点?如何确定一个链表的中间间隔点?????

	// 然后慢指针重回起点，然后一一比较。 
	// 直到快指针结束，如果一直相同则为true
	// if(!head || !head.next) return false;
	// let fast = head.next;
	// let slow = head;
	// let tag = true;
	// while(fast){
	// 	if(tag && fast.val == slow.val) {
	// 		tag = false;
	// 		slow = head;
	// 		fast = fast.next;
	// 	} else {
	// 		fast = fast.next;
	// 		slow = slow.next;
	// 	}
	// }

	// 将链表每项存为字符串,然后反转看
	// 错误: 还有复数,不能用字符串,改数组
	let cur = head;
	let arr = '';
	while(cur){
		Array.push(cur.val)
		cur = cur.next;
	}
	return arr.toString() === arr.reverse().toString();
};
// @lc code=end

