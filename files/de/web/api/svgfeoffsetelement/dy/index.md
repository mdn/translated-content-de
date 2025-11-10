---
title: "SVGFEOffsetElement: dy-Eigenschaft"
short-title: dy
slug: Web/API/SVGFEOffsetElement/dy
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`dy`**-Schreibgeschützte Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement)-Interfaces spiegelt das {{SVGAttr("dy")}}-Attribut des angegebenen {{SVGElement("feOffset")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf das `dy`-Attribut

In diesem Beispiel greifen wir auf den vertikalen Offset oder die Verschiebung des `<feOffset>`-Elements zu, indem wir die schreibgeschützte `dy`-Eigenschaft des `SVGFEOffsetElement`-Interfaces verwenden.

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
    fill="lightblue"
    filter="url(#offsetFilter)" />
</svg>
```

```js
// Select the feOffset element
const offsetElement = document.querySelector("feOffset");

// Access the dy property
console.log(offsetElement.dy.baseVal); // Output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
