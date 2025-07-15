---
title: "SVGMaskElement: y Eigenschaft"
short-title: y
slug: Web/API/SVGMaskElement/y
l10n:
  sourceCommit: 28b589f416a555aa046b3a26e43b4aac3e98fdfb
---

{{APIRef("SVG")}}

Die schreibgeschützte **`y`**-Eigenschaft der Schnittstelle [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement) gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das den Wert des {{SVGattr("y")}}-Attributs des {{SVGElement("mask")}} enthält. Es repräsentiert die y-Achsen-Koordinate der oberen linken Ecke des Maskierungsbereichs.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, ist sie lediglich ein Container für zwei Werte, die Sie ändern können: [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal).

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGLength`](/de/docs/Web/API/SVGLength) zurück, dessen Wert den `y`-Wert zurückgibt.

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
        attributeName="y"
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
  const animValue = mask.y.animVal.value;
  const baseValue = mask.y.baseVal.value;
  log.textContent = `The 'y.animVal' is ${animValue}.\n`;
  log.textContent += `The 'y.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
