---
title: "SVGFEOffsetElement: dx-Eigenschaft"
short-title: dx
slug: Web/API/SVGFEOffsetElement/dx
l10n:
  sourceCommit: f9c8cab62b7d0349327fa0f56f09c9d3193f2db3
---

{{APIRef("SVG")}}

Die **`dx`** schreibgeschützte Eigenschaft der [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Schnittstelle spiegelt das {{SVGAttr("dx")}}-Attribut des gegebenen {{SVGElement("feOffset")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `dx`-Attribut

In diesem Beispiel greifen wir auf die Menge der Verschiebung, oder der horizontalen Verschiebung, des `<feOffset>`-Elements zu, mithilfe der schreibgeschützten `dx`-Eigenschaft der `SVGFEOffsetElement`-Schnittstelle.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="offsetFilter">
      <!-- Applies an offset to the SourceGraphic -->
      <feOffset in="SourceGraphic" dx="15" dy="10" />
    </filter>
  </defs>
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    style="fill:lightblue;"
    filter="url(#offsetFilter)" />
</svg>
```

```js
// Select the feOffset element
const offsetElement = document.querySelector("feOffset");

// Access the dx property
console.log(offsetElement.dx.baseVal); // Output: 15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
