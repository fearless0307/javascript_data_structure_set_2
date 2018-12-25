// Question 4
document.write(`<p><b>Question.4. - </b>Given a linked list, swap \
every two adjacent nodes and return its head.</p>`);

// Linked List
head = new Node(1);
append(2);
append(3);
append(4);
append(5);
append(6);

// printing the linked list
document.write(`<p>Given Linked List :</p>`);
travelWrite(head);

head = swapAdjacent(head);

// printing the linked list
document.write(`<p>After swapping adjacent nodes :</p>`);
travelWrite(head);

function swapAdjacent(head){
  let current = head;
  let h;
  if(head.next != undefined){
    h = head.next;
    current.next = h.next;
    h.next = current;
  }else{
    return head;
  }
    
  console.log(h);
  while(current.next != undefined){
    console.log("In");
    if(current.next.next != undefined){
      let t = current.next.next;
      current.next.next = t.next;
      t.next = current.next;
      current.next = t;
      current = current.next.next;
    }else{
      break;
    }
  }
  return h;
}