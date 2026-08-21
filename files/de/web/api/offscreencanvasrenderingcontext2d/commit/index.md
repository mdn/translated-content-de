---
title: "OffscreenCanvasRenderingContext2D: commit() Methode"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{non-standard_header}}

Die
**`OffscreenCanvasRenderingContext2D.commit()`**
Methode der [Canvas 2D API](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) war dazu gedacht, das Bitmap des Rendering-Kontexts auf das Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements des zugehörigen `OffscreenCanvas`-Objekts zu kopieren.
Der Kopiervorgang ist synchron. Der Aufruf dieser Methode ist für die Übertragung nicht erforderlich, da diese automatisch während der Ausführung der Ereignisschleife erfolgt.

## Syntax

```js-nolint
commit()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
const placeholder = document.createElement("canvas");
const offscreen = placeholder.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext("2d");

// Perform some drawing using the 2d context
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);

// Push placeholder to the canvas element
ctx.commit();
```

## Spezifikationen

Nicht Teil einer Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: [`OffscreenCanvasRenderingContext2D`](/de/docs/Web/API/OffscreenCanvasRenderingContext2D)
