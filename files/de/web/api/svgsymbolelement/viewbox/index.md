---
title: "SVGSymbolElement: viewBox-Eigenschaft"
short-title: viewBox
slug: Web/API/SVGSymbolElement/viewBox
l10n:
  sourceCommit: e4dae88f147cd8a57f2e69feca9e63566662ddcc
---

{{APIRef("SVG")}}

Die **`viewBox`**-Eigenschaft der [`SVGSymbolElement`](/de/docs/Web/API/SVGSymbolElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die das {{SVGAttr("viewBox")}}-Attribut des angegebenen {{SVGElement("symbol")}}-Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedRect`](/de/docs/Web/API/SVGAnimatedRect)-Objekt.

## Beispiele

### Zugriff auf die `viewBox`-Eigenschaft

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol id="exampleSymbol" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

```js
const symbolElement = document.getElementById("exampleSymbol");

// Access the viewBox property
const viewBox = symbolElement.viewBox.baseVal;

console.log(viewBox.x); // Output: 0
console.log(viewBox.y); // Output: 0
console.log(viewBox.width); // Output: 100
console.log(viewBox.height); // Output: 100
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("viewBox")}}
