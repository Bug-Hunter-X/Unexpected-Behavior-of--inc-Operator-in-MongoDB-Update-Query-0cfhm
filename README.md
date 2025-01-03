# Unexpected Behavior of $inc Operator in MongoDB Update Query

This repository demonstrates an uncommon error related to the usage of the `$inc` operator in MongoDB update queries. The `$inc` operator is used to increment or decrement a numeric field. However, when used incorrectly, it can lead to unexpected behavior.

## Problem
The provided code snippet shows incorrect usage of the `$inc` operator. When used with a negative value and the field doesn't exist, the behavior might be unexpected.  This can be especially tricky to debug, as it might not immediately throw an error but cause silent data corruption.

## Solution
To avoid unexpected behavior, ensure that the field exists before using `$inc` with a negative value. You might consider using the `$setOnInsert` operator for new documents or checking for the field's existence before updating.

## How to reproduce
1. Clone this repository.
2. Create a MongoDB collection named `myCollection`.  
3. Insert at least one document, ensuring there is no field named 'count'.
4. Run `bug.js` using your MongoDB driver.
5. Observe the unexpected result (most likely no field is updated)
6. Run `bugSolution.js` to see the corrected implementation.
