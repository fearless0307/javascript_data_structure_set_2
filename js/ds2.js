// Question 2
document.write(`<p><b>Question.2. - </b>Given a linked list and two \
integers M and N. Traverse the linked list such that you retain M \
nodes then delete next N nodes, continue the same until end of the \
linked list.</p>`);

// Initializing link list
head = new Node(1);
append(2);
append(3);
append(4);
append(5);
append(6);
append(7);
append(8);
append(9);

let m = 2, n = 2;
let current = head;
let count = 0;

// given list
document.write(`<p>Given List : </p>`);
travelWrite(head);

while(current != undefined){
  console.log(current.value);
  count++;
  if(count == m){
    let t = 0;
    while(t < n){
      if(current.next != undefined && current.next.next != undefined)
        current.next = current.next.next;
      else{
        if(current.next != undefined)
          current.next = undefined;
      }
      t++;
    }
    count = 0;
  }
  current = current.next;
}

// given list
document.write(`<p>After processing : </p>`);
travelWrite(head);