/**
 * Initialize your data structure here.
 */
function Node(val) {
	this.val = val;
	this.next = null;
  };
  var MyLinkedList = function() {
	  this.head = null;
	  this.length = 0;
  };
  
  /**
   * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
   * @param {number} index
   * @return {number}
   */
  MyLinkedList.prototype.get = function(index) {
	  let current = this.head;
	  let tag = 0;
	  console.log(this.head,'hed')
	  if(index == 0) return current.val;
	  if(index >this.length) return -1;
	  while(current){
		if(tag === index) {
		}

		  if(tag === index) return current.val;
		  tag++;
		  current = current.next;
	  }
	  return -1
  };
  
  /**
   * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtHead = function(val) {
	  let node = new Node(val);
	  node.next = this.head;
	  this.head = node;
	  this.length++;
  };
  
  /**
   * Append a node of value val to the last element of the linked list. 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtTail = function(val) {
	  let node = new Node(val);
	  let current = this.head;
	  while(current.next){
		  current = current.next;
	  }
	  current.next = node;
	  this.length++;
  };
  
  /**
   * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
   * @param {number} index 
   * @param {number} val
   * @return {void}
   */
  MyLinkedList.prototype.addAtIndex = function(index, val) {
	  if(index>this.length) return;
	  if(index <= 0) return this.addAtHead(val)
	  let node = new Node(val),
		idx = 0,
		current = this.head,
		previous;
		if(!this.head){
			return this.addAtHead(val)
		}
		while(idx++ < index){
			previous = current;
			current = current.next;
		}
		previous.next = node;
		node.next = current;
  };
  
  /**
   * Delete the index-th node in the linked list, if the index is valid. 
   * @param {number} index
   * @return {void}
   */
  MyLinkedList.prototype.deleteAtIndex = function(index) {
	if(index <= this.length && index >= 0){
		let idx = 0,
		current = this.head,
		previous;
		if(index === 0) {
			current = current.next;
			this.head = current;
		} else {
			while(idx++ <index){
				previous = current;
				current = current.next;
			}
			previous.next = current ? current.next:null;
	
			this.length--;
		}
		
	}
	
  };
  MyLinkedList.prototype.print = function(){
	let str = '',current = this.head;
	while(current){
		str += ' ' + current.val
		current = current.next;
		
	}
	console.log( str);
}
  
  /**
   * Your MyLinkedList object will be instantiated and called as such:
   * var obj = new MyLinkedList()
   * var param_1 = obj.get(index)
   * obj.addAtHead(val)
   * obj.addAtTail(val)
   * obj.addAtIndex(index,val)
   * obj.deleteAtIndex(index)
   */
let list = new MyLinkedList();
list.addAtIndex(0,2);
list.addAtIndex(0,20);
list.print();

// list.addAtIndex(1,200);
list.print();

console.log(list.get(0),'这儿');

list.deleteAtIndex(0);

console.log(list.get(0),'结局');