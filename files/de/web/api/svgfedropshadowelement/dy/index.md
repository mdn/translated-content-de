---
title: "SVGFEDropShadowElement: dy-Eigenschaft"
short-title: dy
slug: Web/API/SVGFEDropShadowElement/dy
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`dy`** schreibgeschützte Eigenschaft der Schnittstelle [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement) spiegelt das {{SVGAttr("dy")}} Attribut des gegebenen {{SVGElement("feDropShadow")}} Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber) Objekt.

## Beispiele

### Zugriff auf den `dy`-Wert

In diesem Beispiel rufen wir die vertikale Verschiebung des `<feDropShadow>`-Elements ab, indem wir die schreibgeschützte Eigenschaft `dy` der `SVGFEDropShadowElement` Schnittstelle verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with dy property set to 10 -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5"
        flood-color="red" />
    </filter>
  </defs>

  <!-- Rectangle with a red shadow -->
  <rect
    x="20"
    y="20"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />

  <!-- Circle with a red shadow -->
  <circle
    cx="100"
    cy="100"
    r="50"
    fill="blue"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.dy.baseVal); // Output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
