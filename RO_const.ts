const content = "This is a constant text";

// The line below will give following error at transpile time
// "erroe TS2588: cannot assign to 'content' because it is a constant"

//content = "this is new text.";

//Read only are those types who are initialized at the time of decalration
// and have a read only state.
//Read only applies to properties of a class.

// Decalring a readonly property in a class
class user {
  public readonly name: string = "Faisal";
}
let newUser = new user();
//newUser.name = "Jafri";   //Error
//The line above will throw an error with code TS2540
//which means cannot assign to a read-only property
console.log(newUser.name);

/**In angular, you can have a constant array and perform array operations on it
 * like push, pop. means you can add new elements in array and you can pop old ones
 * BUT, you can not overwrite a constant array object.
 */
/**But if the array is made read-Only, you can not even perform basic array operation on it.
 * means, you can not push pot or assign index values to a read-only array.
 */

/**Overall sump is that const and readonly can be modified in different ways, but the approaches are restricted.
 * Constant can be applied to variables, while readonly are only applied to properties.
 * constants are initialized whren they are declared, read-only can declared without assign values.
 * constant can not be re-assigned, read-only can be assigned.
 */
