/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
// 核心在于判断链表中某项的next指针是否指向了之前的元素
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
	// 时间复杂度: O(n)
	// 标记
	while(head.next){
		if(head.tag) return true;
		head.tag = true;
		head = head.next;
	}
	return false;
};
// 双指针，
// 使用两个一快一慢的指针，只要快的碰到慢的肯定是环形链表。
// 时间复杂度分析： 我们将慢指针的移动过程划分为两个阶段：非环部分与环形部分：

// 慢指针在走完非环部分阶段后将进入环形部分：此时，快指针已经进入环中 \text{迭代次数} = \text{非环部分长度} = N迭代次数=非环部分长度=N

// 两个指针都在环形区域中：考虑两个在环形赛道上的运动员 - 快跑者每次移动两步而慢跑者每次只移动一步。其速度的差值为 1，因此需要经过 \dfrac{\text{二者之间距离}}{\text{速度差值}} 
// 速度差值
// 二者之间距离
​	
//   次循环后，快跑者可以追上慢跑者。这个距离几乎就是 "\text{环形部分长度 K}环形部分长度 K" 且速度差值为 1，我们得出这样的结论 \text{迭代次数} = \text{近似于}迭代次数=近似于 "\text{环形部分长度 K}环形部分长度 K".

// 因此，在最糟糕的情形下，时间复杂度为 O(N+K)O(N+K)，也就是 O(n)O(n)。

// 空间复杂度：O(1)，我们只使用了慢指针和快指针两个结点，所以空间复杂度为 O(1)O(1)。


var hasCycle = function(head) {
    if(!head || !head.next){
        return false;
    }
    let slow = head;
    let fast = head.next;
    while(slow != fast){
        if(fast == null || fast.next == null){
            return false
        }
        slow = slow.next;
        fast = fast.next.next;
    }
    return true;
};
// 返回环形链表的初始节点
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null;
    }
    let slow = head,
		fast = head.next,
		tag = null;
    while(slow != fast){
		if (!fast || !fast.next) return null;
		tag = slow;
		slow = slow.next;
        fast = fast.next.next;
	}
	return tag
    
};
// @lc code=end

