# Javascript _this_
### Every function, while executing, has a reference to its execution context, called _this_.

Execution context - How the function is called when it's called.

There are 4 rules for how the this keyword gets bound, and they all depend on the callsite.

Callsite - the place in the code where the function is executed.

Default binding
If in strict mode, then the this keyword is defaulted to undefined.
If not in strict mode, then the this keyword is defaulted to the global/window object.

Implicit binding
The object at the callsite (the base object) becomes the this keyword. It has an owning or containing context object at the callsite. 

Explicit binding
If you use .call or .apply at the callsite, both functions take as their first parameter a this binding.

Hard binding
When you use the .bind method on a function, you are hard binding the this keyword

new Keyword
Any time we put the new keyword in front of a function call, it turns that function call into what we call a constructor call.

When we do that, 4 things will happen. 
1. A brand new empty object is created out of thin air. 
2. That object gets linked to a different object.
3. That new object gets bound as the this keyword. 
4. If a return is not included in the function, it will implicitly insert a `return this`.

