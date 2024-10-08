---
title: "TextMetrics: width-Eigenschaft"
short-title: width
slug: Web/API/TextMetrics/width
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte **`width`**-Eigenschaft des [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Interfaces enthält die Vorschubreite des Textes (die Breite dieses Inline-Blocks) in CSS-Pixeln.

## Beispiele

Beginnen Sie mit diesem {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas"></canvas>
```

Sie können ein [`TextMetrics`](/de/docs/Web/API/TextMetrics)-Objekt mit dem folgenden Code erhalten:

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let text = ctx.measureText("foo"); // TextMetrics object
text.width; // 16;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`TextMetrics`](/de/docs/Web/API/TextMetrics)
