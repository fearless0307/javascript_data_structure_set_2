// Question 1
document.write(`<p><b>Question.1. - </b>Remove any âunorderedâ elments (i.e. leave the list in non-decreasing order).</p>`);

// Initializing link list
head = new Node(1);
append(4);
append(2);
append(3);
append(6);
append(6);
append(10);
append(4);

document.write(`<p>Given List :</p>`);
travelWrite(head);

let current = head;
while(current.next != undefined){
  if(current.next.value < current.value){
    current.next = current.next.next;
    continue;
  }
  current = current.next;
}

document.write(`<p>After processing :</p>`);
travelWrite(head);
