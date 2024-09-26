---
title: "SVGMaskElement: width-Eigenschaft"
short-title: Breite
slug: Web/API/SVGMaskElement/width
l10n:
  sourceCommit: 22080a7cc403f7f45c8e85065b182c9f0d4d383c
---

{{APIRef("SVG")}}

Die schreibgeschützte **`width`**-Eigenschaft der {{domxref("SVGMaskElement")}}-Schnittstelle gibt ein {{domxref("SVGAnimatedLength")}}-Objekt zurück, das den Wert des {{SVGattr("width")}}-Attributs des {{SVGElement("marker")}} enthält.

> [!NOTE]
> Obwohl diese Eigenschaft schreibgeschützt ist, handelt es sich lediglich um einen Container für zwei Werte, die Sie ändern können: {{domxref("SVGAnimatedLength.baseVal", "baseVal")}} und {{domxref("SVGAnimatedLength.animVal", "animVal")}}.

## Wert

Ein {{domxref("SVGAnimatedLength")}}-Objekt. Die `baseVal`-Eigenschaft dieses Objekts gibt ein {{domxref("SVGLength")}} zurück, dessen Wert den `width`-Wert zurückgibt.

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
      <!-- Alles unter einem weißen Pixel wird sichtbar sein -->
      <rect x="0" y="0" width="100" height="100" fill="white" />

      <!-- Alles unter einem schwarzen Pixel wird unsichtbar sein -->
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

    <!-- Mit dieser Maske wird ein herzförmiges Loch in den Kreis gestanzt -->
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