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
// var removeNthFromEnd = function(head, n) {
// 	let length = 0,
// 		now = head;
// 	while(now){
// 		length++;
// 		now = now.next;
// 	}waq
// 	if ( length-n=== 0 ) {
// 		head = head.next;
// 		return head;
// 	} else {
// 		let index = 0;
// 		let previous;
// 		let current = head;
// 		while(index++ <length-n){
// 			previous = current;
// 			current = current.next;
// 		}
// 		previous.next = current.next;
// 		return head;
// 	}

// };
// 也可以增加一个哑节点，用哑节点来fix一些特殊情况，比如删除头部节点，或只有一个节点。即上面函数中 line28 的处理


// 双指针法 
// 快慢两个指针，first先走 n+1步，second从开头出发，中间间隔n,当first走到尾节点，second.next此时恰好指向n.
var  removeNthFromEnd = function(head,n) {
	// 哑节点
	let empty = new ListNode(0);
	empty.next = head;
	let first = empty;
	let second = empty;
	// 多了哑节点，所以循环多一次达到n
	for (let i = 0; i <= n; i++){
		first = first.next;
	}
	while(first){
		first = first.next;
		second = second.next;
	}
	second.next = second.next.next;
	return empty.next;
}

// @lc code=end