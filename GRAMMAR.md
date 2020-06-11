# Summary

These are just some notes I'm keeping about extending the grammar.

1. The `objects` variable does not contain `+arrays+` for a reason. It would lead to a lot of recursion which might cause test cases to time out more often. To counteract this, anywhere you use `+objects+`, think about whether `+arrays` also makes sense, and if it does, duplicate the `+objects+` line and do a `:s/+objects+/+arrays+/g`.

# Adding new objects to the grammar

If you are going to add a new type to object, you have to add it to a few places. 

1. For starters, you should create a new commented section for this object (use one of the other sections as a template). 
2. Then, go all the way to the bottom and add it as a variable within the variables section. If you need to make use of any other values in Dharma that is specific to this object, create them within this object's section. 
3. Next, go all the way to the top where all the `objects`, `arrays`, `maps`, etc values are and create two new values for it. Let's say you are implementing a new object called "apple". You would create an `apples` value and an `applesExpr` value. Use the template of the other values to figure out what needs to go here.
4. Ensure that you add this object into the `objects`, `objectsExpr`, and `objectsCopy` variables accordingly.
5. If you need to have some recursion in the definition of this object in the `apples` and `applesExpr` values, then you should create an `applesCopy` value to prevent recursion past a depth of 2. Again, check one of the other objects to see how this has been done.
6. Go to this new object's section and create values for all the prototype methods, static methods, prototype properties, and static properties. Use the MDN documentation for this, you can refer to some other objects that are already defined in the grammar for help.
7. Go to the Interactions section and add in two new interactions for this object. In our case, it would be `AppleInteractions` and `AppleForLoopInteractions`. Use the other interactions values as templates to set these.
8. Add this object into the `initializableObjects` value.
9. Add a new loop for this object within the `forLoopInit` value.
10. Add the interactions accordingly to the `interactions` and `forLoopInteractions` values.
