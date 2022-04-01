///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE

const summedPrice = cart.reduce(function(ac, el){
    return el.price + ac
}, 0)

// console.log(summedPrice)

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    return cartTotal * (1 + tax) - couponValue
}

// console.log(calcFinalPrice(12, 4, .06))

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE

    The customer object would have a first name property for identification and i would use a string so that it can be read.
    It would have a last name property so that the employees could filter and search by last name, and it would also be a string for readability.
    It would have a phone number property that would be a string. I would not use a number because i do not see a situation in which the phone number would
    need to be used in mathmatical situations with other numbers.
    It would have a discount property so that, in special siutaions, certain clients or employees would get a all-the-time discount. It would be a number
    so that it can be applied to prices and other number date types. It would be in a decimal representing 1 minus the percentage discount, so that it can 
    be multiplied by the total, the oposite as taxes.

*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer ={
    firstName: 'Greg',
    lastName: 'Mgee',
    phoneNumber: '8005554567',
    discount: .95
}
