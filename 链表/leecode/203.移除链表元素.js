/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
	let newList = new ListNode(0);
	newList.next = head;
	let cur = head;
	let prev = newList;
	while(cur){
		if(cur.val == val){
			prev.next = cur.next;
			cur = cur.next;
		} else {
			prev = cur;
			cur = cur.next;
		}
	}
	return newList.next;
};
// @lc code=end

