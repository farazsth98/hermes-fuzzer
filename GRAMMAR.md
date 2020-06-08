# Summary

These are just some notes I'm keeping about extending the grammar.

1. The `objects` variable does not contain `+arrays+` for a reason. It would lead to a lot of recursion which might cause test cases to time out more often. To counteract this, anywhere you use `+objects+`, think about whether `+arrays` also makes sense, and if it does, duplicate the `+objects+` line and do a `:s/+objects+/+arrays+/g`.
