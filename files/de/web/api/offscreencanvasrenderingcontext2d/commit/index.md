---
title: "OffscreenCanvasRenderingContext2D: commit()-Methode"
short-title: commit()
slug: Web/API/OffscreenCanvasRenderingContext2D/commit
l10n:
  sourceCommit: 95036ee8bdd7ae80519c726f501aa032ad93585f
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}{{deprecated_header}}{{non-standard_header}}

Die
**`OffscreenCanvasRenderingContext2D.commit()`**
Methode der [Canvas 2D API](/de/docs/Web/API/OffscreenCanvasRenderingContext2D) sollte ursprünglich das Bitmap des Rendering-Kontexts auf das Bitmap des Platzhalter-{{HtmlElement("canvas")}}-Elements des zugehörigen `OffscreenCanvas`-Objekts kopieren.
Der Kopiervorgang ist synchron. Das Aufrufen dieser Methode ist für die Übertragung nicht erforderlich, da dies automatisch während der Ausführung der Ereignisschleife geschieht.

## Syntax

```js-nolint
commit()
```

## Beispiele

```js
const placeholder = document.createElement("canvas");
const offscreen = placeholder.transferControlToOffscreen();
const ctx = offscreenCanvas.getContext("2d");

// Führen Sie einige Zeichnungen mit dem 2d-Kontext durch
ctx.fillStyle = "blue";
ctx.fillRect(0, 0, 10, 10);

// Übertragen Sie den Platzhalter auf das Canvas-Element
ctx.commit();
```

## Spezifikationen

Teil keiner Spezifikation.

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Das Interface, das diese Methode definiert: {{domxref("OffscreenCanvasRenderingContext2D")}}
