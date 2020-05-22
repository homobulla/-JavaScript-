/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	// 先判断头结点,然后一层一层迭代追加
	let newListNode = new ListNode(null);
	let prev = newListNode;
	while (l1 && l2){
		if(l1.val <=l2.val){
			prev.next = l1;
			// console.log(prev.next)
			l1 = l1.next
		} else {
			prev.next = l2;
			l2 = l2.next;
		}
		prev = prev.next;

	}
	prev.next = !l1? l2 : l1;
	return newListNode.next;
};

// @lc code=end

