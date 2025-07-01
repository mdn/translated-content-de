---
title: "SVGFEOffsetElement: dx-Eigenschaft"
short-title: dx
slug: Web/API/SVGFEOffsetElement/dx
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`dx`** schreibgeschützte Eigenschaft des [`SVGFEOffsetElement`](/de/docs/Web/API/SVGFEOffsetElement) Interfaces spiegelt das {{SVGAttr("dx")}} Attribut des angegebenen {{SVGElement("feOffset")}} Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt.

## Beispiele

### Zugriff auf das `dx` Attribut

In diesem Beispiel greifen wir auf den Betrag zu, um den das `<feOffset>` Element verschoben wird, oder die horizontale Verschiebung, unter Verwendung der schreibgeschützten Eigenschaft `dx` des `SVGFEOffsetElement` Interfaces.

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

// Access the dx property
console.log(offsetElement.dx.baseVal); // Output: 15
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
