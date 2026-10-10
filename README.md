# 🔗 Singly Linked List in JavaScript

> A custom Singly Linked List data structure implemented from scratch in vanilla JavaScript for **The Odin Project**.

## 📌 Overview
A fundamental linear data structure built without relying on built-in array methods. This project explores dynamic node linking, pointer traversal, and sequential data manipulation.

## 🚀 Key Features
- **Flexible Insertion:**
  - `prepend(value)`: $O(1)$ fast insertion at the start of the list.
  - `append(value)`: appends values to the end.
  - `insertAt(index, ...values)`: supports inserting one or multiple nodes at any target index with bounds checking.
- **Node Access & Metrics:** Retrieve boundary values via `head()` and `tail()`, element lookup by position with `at(index)`, and total length using `size()`.
- **Search & Removal:**
  - `pop()`: removes and returns the head node.
  - `contains(value)` & `findIndex(value)`: sequential checks for value existence and index resolution.
- **String Formatting:** Built-in `toString()` method rendering the list as `( value ) -> ( value ) -> null`.

## 💻 Usage
```javascript
const list = new LinkedList();

list.append("dog");
list.prepend("cat");
list.insertAt(1, "hamster", "parrot");

console.log(list.toString());
// ( cat ) -> ( hamster ) -> ( parrot ) -> ( dog ) -> null

console.log(list.size());             // 4
console.log(list.contains("parrot")); // true
console.log(list.findIndex("dog"));   // 3