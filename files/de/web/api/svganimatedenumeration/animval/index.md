---
title: "SVGAnimatedEnumeration: animVal-Eigenschaft"
short-title: animVal
slug: Web/API/SVGAnimatedEnumeration/animVal
l10n:
  sourceCommit: 7f138099644a02640a903b2abc39e685ca8ca7cd
---

{{APIRef("SVG")}}

Die schreibgeschützte Eigenschaft **`animVal`** der [`SVGAnimatedEnumeration`](/de/docs/Web/API/SVGAnimatedEnumeration)-Schnittstelle repräsentiert den Wert einer SVG-Aufzählung.

In SVG 2 spiegelt `animVal` den nicht animierten Wert des Attributs wider: Es ist derselbe wie [`baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal).

## Wert

Ein ganzzahliger Wert, der den Wert der Aufzählung darstellt.

Die zulässigen Werte hängen von dem Attribut ab, das widergespiegelt wird.
Diese Eigenschaft kann nicht geschrieben werden.

## Ausnahmen

- `NoModificationAllowedError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Eigenschaft ein Wert zugewiesen wird.

## Beispiele

### Grundlegende Verwendung

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

Das folgende JavaScript holt das Element und protokolliert den `animValue` der [`SVGClipPathElement.clipPathUnits`](/de/docs/Web/API/SVGClipPathElement/clipPathUnits)-Eigenschaft.

```js
const clipPath1 = document.getElementById("clip1");
const log = document.getElementById("log");

function displayLog() {
  const animValue = clipPath1.clipPathUnits.animVal;
  const baseValue = clipPath1.clipPathUnits.baseVal;
  log.textContent = `The 'clipPathUnits.animVal' is ${animValue}.\n`;
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

- [`SVGAnimatedEnumeration.baseVal`](/de/docs/Web/API/SVGAnimatedEnumeration/baseVal)
