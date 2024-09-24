---
title: "SVGAnimatedEnumeration: Eigenschaft animVal"
short-title: animVal
slug: Web/API/SVGAnimatedEnumeration/animVal
l10n:
  sourceCommit: b7c9a25bc747b8a4a3dfd91a37ac1b2193414c3a
---

{{APIRef("SVG")}}

Die **`animVal`**-Eigenschaft der {{domxref("SVGAnimatedEnumeration")}}-Schnittstelle enthält den aktuellen Wert einer SVG-Enumeration. Wenn keine Animation vorhanden ist, entspricht sie dem gleichen Wert wie {{domxref("SVGAnimatedEnumeration.baseVal", "baseVal")}}.

## Wert

Ein ganzzahliger Wert, der den aktuellen Wert der Enumeration enthält

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
  <svg viewBox="0 0 100 100" width="200" height="200">
    <clipPath id="clip1" clipPathUnits="userSpaceOnUse">
      <animate
        attributeName="clipPathUnits"
        values="userSpaceOnUse;objectBoundingBox;userSpaceOnUse"
        dur="2s"
        repeatCount="indefinite" />
      <circle cx="50" cy="50" r="25" />
    </clipPath>

    <rect id="r1" x="0" y="0" width="50" height="100" />

    <use clip-path="url(#clip1)" href="#r1" fill="lightblue" />
  </svg>
</div>
<pre id="log"></pre>
```

```js
const clipPath1 = document.getElementById("clip1");
const log = document.getElementById("log");

function displayLog() {
  const animValue = clipPath1.clipPathUnits.animVal;
  const baseValue = clipPath1.clipPathUnits.baseVal;
  log.textContent = `The 'clipPathUnits.animVal' is ${animValue}.\n`;
  log.textContent += `The 'clipPathUnits.baseVal' is ${baseValue}.`;
  requestAnimationFrame(displayLog);
}

displayLog();
```

{{EmbedLiveSample("Examples", "280", "260")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("SVGAnimatedEnumeration.baseVal")}}
