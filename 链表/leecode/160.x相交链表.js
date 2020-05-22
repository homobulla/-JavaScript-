/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// 核心点是非公共A+公共部分+非公共部分B = 非公共B+公共部分+非公共部分A
// 通过补全来使得长度相同，清除长度的差。
var getIntersectionNode = function(headA, headB) {
	// 循环A，如果A结束后还是没有与B相同的则返回null;
	let listA = headA,
		listB = headB;
	while (listA || listB){
		if(listA == listB) return listA
		listA = listA ? listA.next : headB;
		listB = listB ? listB.next : headA;
	}
	return null;
};
// 时间复杂度 O(n)
// 空间复杂度 O(1)
// @lc code=end

