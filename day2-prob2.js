document.body.innerText.split("\n").filter(Boolean)
    .map(dimensions => ({l: dimensions.split('x')[0], w: dimensions.split('x')[1], h: dimensions.split('x')[2]}))
    .map(dimObj => Math.min(...([[dimObj.l, dimObj.w], [dimObj.w, dimObj.h], [dimObj.l, dimObj.h]].map(subArray => subArray.map(numInSub => numInSub * 2).reduce((a, b) => a + b)))) + (dimObj.l * dimObj.w * dimObj.h))
    .reduce((a,b) => a+b) 