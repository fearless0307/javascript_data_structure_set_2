// Question 5
document.write(`<p><b>Question.5. - </b>Write a GetNth() function that \
takes a linked list and an integer index and returns the data value \
stored in the node at that index position.</p>`);

head = new Node(1);
append(10);
append(30);
append(14);

let k = 2;

// printing the linked list
document.write(`<p>Given Linked List :<br>`);
travelWrite(head);

getNth(head, k);

function getNth(element, pos){
  let current = element;
  if(element == undefined){
    document.write(`<p>No data in the list.</p>`);
    return;
  }
  let count = 0;
  do{
    if(count == pos){
      document.write(`<p>Value at ${pos} position is ${current.value}.</p>`);
      return;
    }
    count++;
    current = current.next;
  }while (current != undefined);
  document.write(`<p>No data at ${pos} position.</p>`);
}