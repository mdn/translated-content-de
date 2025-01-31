---
title: "SVGFEDropShadowElement: dx-Eigenschaft"
short-title: dx
slug: Web/API/SVGFEDropShadowElement/dx
l10n:
  sourceCommit: 7527a11a2b7fc7440aa6d518a9f5b4c061794ff3
---

{{APIRef("SVG")}}

Die **`dx`**-Schreibgeschützte Eigenschaft der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle spiegelt das {{SVGAttr("dx")}}-Attribut des gegebenen {{SVGElement("feDropShadow")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf den `dx`-Wert

In diesem Beispiel rufen wir die horizontale Verschiebung des `<feDropShadow>`-Elements ab, indem wir die schreibgeschützte `dx`-Eigenschaft der `SVGFEDropShadowElement`-Schnittstelle verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with dx property set to 10 -->
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
    style="fill:red;"
    filter="url(#drop-shadow-filter)" />

  <!-- Circle with a red shadow -->
  <circle
    cx="100"
    cy="100"
    r="50"
    style="fill:blue;"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.dx.baseVal); // Output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
