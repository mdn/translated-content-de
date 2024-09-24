---
title: "TextMetrics: ideographicBaseline-Eigenschaft"
short-title: ideographicBaseline
slug: Web/API/TextMetrics/ideographicBaseline
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die schreibgeschützte `ideographicBaseline`-Eigenschaft der {{domxref("TextMetrics")}}-Schnittstelle ist ein `double`, das den Abstand von der durch die {{domxref("CanvasRenderingContext2D.textBaseline")}}-Eigenschaft angegebenen horizontalen Linie zur ideografischen Grundlinie der Zeilenbox in CSS-Pixeln angibt.

## Beispiele

```js
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");
const text = ctx.measureText("foo"); // gibt ein TextMetrics Objekt zurück

text.ideographicBaseline; // -1.201171875;
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("TextMetrics")}}
