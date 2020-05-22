/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
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
 * @param {number} n
 * @return {ListNode}
 */
// 倒序删除 n
var removeNthFromEnd = function(head, n) {
	let length = 0,
		now = head;
	while(now){
		length++;
		now = now.next;
	}waq
	if ( length-n=== 0 ) {
		head = head.next;
		return head;
	} else {
		let index = 0;
		let previous;
		let current = head;
		while(index++ <length-n){
			previous = current;
			current = current.next;
		}
		previous.next = current.next;
		return head;
	}

};

// 双指针法 
function removeNthFromEnd(head,n){
	
}

// @lc code=end