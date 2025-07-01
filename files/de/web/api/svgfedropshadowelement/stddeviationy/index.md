---
title: "SVGFEDropShadowElement: stdDeviationY-Eigenschaft"
short-title: stdDeviationY
slug: Web/API/SVGFEDropShadowElement/stdDeviationY
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`stdDeviationY`** des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Interfaces spiegelt die (möglicherweise automatisch berechnete) Y-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen {{SVGElement("feDropShadow")}}-Elementes wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf den `stdDeviationY`-Wert

In diesem Beispiel rufen wir die vertikale Standardabweichung für die Unschärfeoperation des `<feDropShadow>` ab, indem wir die schreibgeschützte `stdDeviationY`-Eigenschaft des `SVGFEDropShadowElement`-Interfaces verwenden.

```html
<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <filter id="drop-shadow-filter">
      <!-- Drop Shadow with stdDeviationY property set to 10 for vertical blur -->
      <feDropShadow
        in="SourceGraphic"
        dx="10"
        dy="10"
        stdDeviation="5 10"
        flood-color="gray" />
    </filter>
  </defs>

  <!-- Rectangle with a gray shadow -->
  <rect
    x="50"
    y="50"
    width="100"
    height="100"
    fill="red"
    filter="url(#drop-shadow-filter)" />
</svg>
```

```js
const dropShadow = document.querySelector("feDropShadow");

console.log(dropShadow.stdDeviationY.baseVal); // Output: 10
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
