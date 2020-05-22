/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 迭代
// var reverseList = function(head) {
// 	let prev = null;
// 	let cur = head;
// 	while(cur){
// 		// 暂存下一个指针
// 		let str = cur.next;
// 		// 将当前节点指向prev,逐渐局部反转
// 		cur.next = prev;
// 		// 前进一位
// 		prev = cur;
// 		cur = str;
// 	}
// 	return prev;

// };
let link = {
	val:1,
	next:{
		val:2,
		next:{
			val:3,
			next:null;
		}
	}
}
// 递归 
// 这儿的递归是什么
var reverseList = function(head) {
	if(!head || !head.next) return head
	const p = reverseList(head.next)
	const next = head.next
	next.next = head
	head.next = null
	return p
}
console.log(reverseList(link))
// @lc code=end

