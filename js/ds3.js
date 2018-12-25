// Question 3
document.write(`<p><b>Question.3. - </b>Given a linked list and a \
number k. Reverse every k nodes in the list.</p>`);

// Initializing link list
head = new Node(1);
append(2);
append(3);
append(4);
append(5);

let k = 6;

// printing the linked list
document.write(`<p>Given Linked List :</p>`);
travelWrite(head);

document.write(`<p>Value of k is ${k}.</p>`);

try {
  reverseListToK(k);
  document.write(`<p>After reversing the linked list : </p>`);
  travelWrite(head);
} catch (error) {
  document.write(`<p>Something went wrong! Either value of k is not in range of length of linked list.</p>`); 
}


function reverseListToK(k){
  let util = {
    count: 1,
    num: k
  };
  let current = head;
  let t = reverseList(current, util);
  t.next = util.end;
}

function reverseList(current, util){
  
  console.log(util);
  console.log(current);

  if(util.count == util.num){
    head = current;
    util.end = current.next;
    return current;
  }  
  util.count++;
  let tt = reverseList(current.next, util);
  tt.next = current;
  return current;
}
