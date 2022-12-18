document.body.innerText.split("\n").filter(Boolean)
    .map(dimensions => ({l: dimensions.split('x')[0], w: dimensions.split('x')[1], h: dimensions.split('x')[2]}))
    .map(dimensionObj => [2 * dimensionObj.l * dimensionObj.w, 2 * dimensionObj.w * dimensionObj.h, 2 * dimensionObj.l * dimensionObj.h].reduce((a, b) => a+b) + Math.min(dimensionObj.l * dimensionObj.w, dimensionObj.w * dimensionObj.h, dimensionObj.l * dimensionObj.h))
    .reduce((a,b) => a+b)