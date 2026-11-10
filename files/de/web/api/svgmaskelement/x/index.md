---
title: "SVGMaskElement: x-Eigenschaft"
short-title: x
slug: Web/API/SVGMaskElement/x
l10n:
  sourceCommit: 7cabe7010a0ccfcf587ddac1571963eba102090d
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`x`** der Schnittstelle [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement) gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das den Wert des Attributs {{SVGattr("x")}} des Elements {{SVGElement("mask")}} enthält. Sie gibt die x-Koordinate der _oberen linken_ Ecke des Maskierungsbereichs an.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, dient sie lediglich als Container für zwei Werte, die Sie ändern können: [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal).

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt im Koordinatensystem, das durch [`SVGMaskElement.maskUnits`](/de/docs/Web/API/SVGMaskElement/maskUnits) definiert wird. Die Eigenschaft `baseVal` dieses Objekts gibt einen [`SVGLength`](/de/docs/Web/API/SVGLength) zurück, dessen Wert der ursprüngliche `x`-Wert ist.

## Beispiele

```css hidden
html,
body,
svg {
  height: 100%;
}
```

```html
<div>
  <svg viewBox="-10 -10 120 120" width="100" height="100">
    <mask id="mask" x="0" maskUnits="userSpaceOnUse">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
      <animate
        attributeName="x"
        values="0;80;0"
        dur="5s"
        repeatCount="indefinite" />
    </mask>

    <polygon points="-10,110 110,110 110,-10" fill="orange" />

    <!-- with this mask applied, we "punch" a heart shape hole into the circle -->
    <circle cx="50" cy="50" r="50" mask="url(#mask)" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const mask = document.getElementById("mask");

function displayLog() {
  const animValue = mask.x.animVal.value;
  const baseValue = mask.x.baseVal.value;
  log.textContent = `The 'x.animVal' is ${animValue}.\n`;
  log.textContent += `The 'x.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('examples', 100, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
