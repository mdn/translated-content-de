---
title: "SVGFEDropShadowElement: Eigenschaft stdDeviationX"
short-title: stdDeviationX
slug: Web/API/SVGFEDropShadowElement/stdDeviationX
l10n:
  sourceCommit: 7527a11a2b7fc7440aa6d518a9f5b4c061794ff3
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`stdDeviationX`** des [`SVGFEDropShadowElement`](/de/docs/Web/API/SVGFEDropShadowElement)-Interfaces spiegelt die (möglicherweise automatisch berechnete) X-Komponente des {{SVGAttr("stdDeviation")}}-Attributs des angegebenen {{SVGElement("feDropShadow")}}-Elements wider.

## Wert

Ein [`SVGAnimatedNumber`](/de/docs/Web/API/SVGAnimatedNumber)-Objekt.

## Beispiele

### Zugriff auf den `stdDeviationX`-Wert

In diesem Beispiel rufen wir die horizontale Standardabweichung für die Unschärfeoperation des `<feDropShadow>`-Elements ab, indem wir die schreibgeschützte Eigenschaft `stdDeviationX` des `SVGFEDropShadowElement`-Interfaces verwenden.

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
    style="fill:red;"
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
