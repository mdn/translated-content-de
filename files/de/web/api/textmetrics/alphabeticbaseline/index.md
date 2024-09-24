---
title: "TextMetrics: alphabeticBaseline-Eigenschaft"
short-title: alphabeticBaseline
slug: Web/API/TextMetrics/alphabeticBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `alphabeticBaseline`-Eigenschaft des {{domxref("TextMetrics")}}-Interfaces ist ein `double`, der den Abstand von der durch die {{domxref("CanvasRenderingContext2D.textBaseline")}}-Eigenschaft angegebenen horizontalen Linie zur alphabetischen Grundlinie des Zeilenkästchens in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics-Objekt zurück

text.alphabeticBaseline; // -0;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
