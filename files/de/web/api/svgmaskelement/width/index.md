---
title: "SVGMaskElement: width-Eigenschaft"
short-title: width
slug: Web/API/SVGMaskElement/width
l10n:
  sourceCommit: 28b589f416a555aa046b3a26e43b4aac3e98fdfb
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der [`SVGMaskElement`](/de/docs/Web/API/SVGMaskElement)-Schnittstelle gibt ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt zurück, das den Wert des {{SVGattr("width")}}-Attributs des {{SVGElement("mask")}} enthält.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, ist sie lediglich ein Container für zwei Werte, die Sie ändern können, [`baseVal`](/de/docs/Web/API/SVGAnimatedLength/baseVal) und [`animVal`](/de/docs/Web/API/SVGAnimatedLength/animVal).

## Wert

Ein [`SVGAnimatedLength`](/de/docs/Web/API/SVGAnimatedLength)-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein [`SVGLength`](/de/docs/Web/API/SVGLength) zurück, dessen Wert den `width`-Wert liefert.

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
    <mask id="mask" x="0" maskUnits="objectBoundingBox">
      <!-- Everything under a white pixel will be visible -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Everything under a black pixel will be invisible -->
      <path
        d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z"
        fill="black" />
      <animate
        attributeName="width"
        values="144;0;144"
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
  const animValue = mask.width.animVal.value;
  const baseValue = mask.width.baseVal.value;
  log.textContent = `The 'width.animVal' is ${animValue}.\n`;
  log.textContent += `The 'width.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}
displayLog();
```

{{EmbedLiveSample('Example', 100, 160)}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
