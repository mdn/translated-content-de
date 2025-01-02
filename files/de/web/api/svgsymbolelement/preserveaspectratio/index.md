---
title: "SVGSymbolElement: preserveAspectRatio-Eigenschaft"
short-title: preserveAspectRatio
slug: Web/API/SVGSymbolElement/preserveAspectRatio
l10n:
  sourceCommit: e4dae88f147cd8a57f2e69feca9e63566662ddcc
---

{{APIRef("SVG")}}

Die schreibgeschützte **`preserveAspectRatio`**-Eigenschaft der [`SVGSymbolElement`](/de/docs/Web/API/SVGSymbolElement)-Schnittstelle spiegelt das {{SVGAttr("preserveAspectRatio")}}-Attribut des angegebenen {{SVGElement("symbol")}}-Elements wider. Sie definiert, wie der Inhalt des `symbol`-Elements skaliert werden soll, um in den verfügbaren Raum zu passen, wobei das Seitenverhältnis beibehalten wird.

## Wert

Ein [`SVGAnimatedPreserveAspectRatio`](/de/docs/Web/API/SVGAnimatedPreserveAspectRatio)-Objekt.

## Beispiele

Angenommen, wir haben folgendes SVG, können wir die `preserveAspectRatio`-Eigenschaft verwenden, um das Skalierungsverhalten für das `symbol`-Element abzurufen:

```html
<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200">
  <defs>
    <symbol
      id="exampleSymbol"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMinYMin meet">
      <circle cx="50" cy="50" r="50" fill="blue" />
    </symbol>
  </defs>
  <use href="#exampleSymbol" x="50" y="50" width="100" height="100" />
</svg>
```

Wir können auf das `preserveAspectRatio`-Attribut zugreifen:

```js
const symbolElement = document.getElementById("exampleSymbol");

// Access the preserveAspectRatio property
const aspectRatio = symbolElement.preserveAspectRatio.baseVal;

console.log(aspectRatio.align); // Output: 2 (xMinYMin)
console.log(aspectRatio.meetOrSlice); // Output: 1 (meet)
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{SVGAttr("preserveAspectRatio")}}
