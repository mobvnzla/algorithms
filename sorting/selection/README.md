## An example of selection sort.

### The algorithm divides the input list into two parts:

> 1.  a sorted sublist of items which is built up from left to right
>     at the front (left) of the list and
>
> 2.  a sublist of the remaining
>     unsorted items that occupy the rest of the list.

> Initially, the sorted sublist is empty and the unsorted sublist
> is the entire input list. The algorithm proceeds by finding the smallest
> (or largest, depending on sorting order) element in the unsorted sublist,
> exchanging (swapping) it with the leftmost unsorted element
> (putting it in sorted order), and moving the sublist boundaries one element to the right.
