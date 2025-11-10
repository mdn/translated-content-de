---
title: "HTMLCanvasElement: width-Eigenschaft"
short-title: width
slug: Web/API/HTMLCanvasElement/width
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Canvas API")}}

Die **`HTMLCanvasElement.width`**-Eigenschaft ist ein positiver `integer`, der das [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width)-HTML-Attribut des {{HTMLElement("canvas")}}-Elements widerspiegelt und in CSS-Pixeln interpretiert wird. Wenn das Attribut nicht angegeben ist oder auf einen ungültigen Wert, wie eine negative Zahl, gesetzt wird, wird der Standardwert `300` verwendet.

Das Setzen der `width`-Eigenschaft setzt den gesamten Rendering-Kontext auf seinen Standardzustand zurück. Dies umfasst das Löschen der Leinwand (Backing Buffer), das Zurücksetzen des aktuellen Pfades und das Zurücksetzen _aller_ Eigenschaften wie `fillStyle` und `globalCompositeOperation`. Dieser Reset tritt bei allen Kontexttypen auf und tritt sogar ein, wenn `width` auf seinen aktuellen Wert gesetzt wird. Um den vorherigen Inhalt nach einer Änderungs des `width` wiederherzustellen, verwenden Sie [`CanvasRenderingContext2D.getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData) und [`CanvasRenderingContext2D.putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData). Kontext-Eigenschaften müssen separat verfolgt und wiederhergestellt werden.

Dies ist eine von zwei Eigenschaften, die andere ist [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height), die die Größe der Leinwand kontrollieren.

## Wert

Eine Zahl.

## Beispiele

Für dieses {{HTMLElement("canvas")}}-Element:

```html
<canvas id="canvas" width="300" height="300"></canvas>
```

Sie können die Breite der Leinwand mit dem folgenden Code abfragen:

```js
const canvas = document.getElementById("canvas");
console.log(canvas.width); // 300
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement): Schnittstelle zur Definition der `HTMLCanvasElement.width`-Eigenschaft
- [`HTMLCanvasElement.height`](/de/docs/Web/API/HTMLCanvasElement/height): Andere Eigenschaft zur Kontrolle der Größe der Leinwand
- [`HTMLEmbedElement.width`](/de/docs/Web/API/HTMLEmbedElement/width)
- [`HTMLIFrameElement.width`](/de/docs/Web/API/HTMLIFrameElement/width)
- [`HTMLImageElement.width`](/de/docs/Web/API/HTMLImageElement/width)
- [`HTMLObjectElement.width`](/de/docs/Web/API/HTMLObjectElement/width)
- [`HTMLSourceElement.width`](/de/docs/Web/API/HTMLSourceElement/width)
- [`HTMLVideoElement.width`](/de/docs/Web/API/HTMLVideoElement/width)
