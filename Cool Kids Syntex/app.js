// V8 upgrades

// Nullish Coalescing

// before node 14
const someInitWithDeafult1 = (value)=>{
    return value || "Deafult Value";
}

// after node 14
const someInitWithDeafult2=(value)=>{
    return value ?? "Deafult Value";
}


const expectedResult = ()=>{
    //https://medium.com/engineering-housing/nan-is-not-equal-to-nan-771321379694 
    // NaN!=NaN ??!?
    const result = {}
    result[""] =(val)=>{return val!= ""?"❌":"✅"}
    result[0] =(val)=>{return val!=0 ?"❌":"✅"}
    result[NaN] =(val)=>{return typeof val === 'string' ?"❌":"✅"}
    result[null] =(val)=>{return val!=null ? "✅":"❌"}
    result[undefined] =(val)=>{return val!=undefined?"✅":"❌"}
    return result   
}




const nestyValues = ["",0,NaN,null,undefined]



const runFunctionOnValues=(fn,values,operator)=>{
    const expectedResults = expectedResult()
    console.log(`\nRunning values with ${operator}\n`)
    values.forEach(element => {
        const result = fn(element) 
        console.log(`${expectedResults[element](result)}|Fn value for ${element} ==> ${result}`)
    });
    console.log(`\n\n`)
}

runFunctionOnValues(someInitWithDeafult1,nestyValues,"||")


runFunctionOnValues(someInitWithDeafult2,nestyValues,"??")




