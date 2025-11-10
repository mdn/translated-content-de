---
title: "SVGFEDropShadowElement: stdDeviationX-Eigenschaft"
short-title: stdDeviationX
slug: Web/API/SVGFEDropShadowElement/stdDeviationX
l10n:
  sourceCommit: a9063bb88f28dc2a9b32e39f060ab6930663da52
---

{{APIRef("SVG")}}

Die **`stdDeviationX`**-Eigenschaft der [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Schnittstelle ist eine schreibgeschützte Eigenschaft, die die (möglicherweise automatisch berechnete) X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des gegebenen {{SVGElement("feDropShadow")}}-Elements widerspiegelt.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Auf den `stdDeviationX`-Wert zugreifen

In diesem Beispiel rufen wir die horizontale Standardabweichung für die Unschärfeoperation des `<feDropShadow>` ab, indem wir die schreibgeschützte Eigenschaft `stdDeviationX` der `SVGFEDropShadowElement`-Schnittstelle verwenden.

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

console.log(dropShadow.stdDeviationX.baseVal); // Output: 5
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)
