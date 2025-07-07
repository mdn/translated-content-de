---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: 707183bfb6cffe53650c03e7e7c369ad089f55ae
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageData`**-Interface repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines {{HTMLElement("canvas")}}-Elements.

Es wird erzeugt durch den [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)-Konstruktor oder Erzeugermethoden auf dem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt, das mit einem Canvas verbunden ist: [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData). Es kann auch verwendet werden, um einen Teil des Canvas mit [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) zu setzen.

## Konstruktoren

- [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)
  - : Erstellt ein `ImageData`-Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} und der Größe des Bildes, das es enthält. Wenn kein Array angegeben ist, erstellt es ein Bild mit einem transparenten schwarzen Rechteck. Beachten Sie, dass dies die häufigste Methode ist, um ein solches Objekt in Workern zu erstellen, da [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) dort nicht verfügbar ist.

## Instanzeigenschaften

- [`ImageData.data`](/de/docs/Web/API/ImageData/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt und die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich). Die Reihenfolge erfolgt reihenweise vom Pixel oben links bis unten rechts.
- [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) {{ReadOnlyInline}}
  - : Ein String, der den Farbraum der Bilddaten angibt.
- [`ImageData.height`](/de/docs/Web/API/ImageData/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe in Pixeln des `ImageData` darstellt.
- [`ImageData.width`](/de/docs/Web/API/ImageData/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite in Pixeln des `ImageData` darstellt.
- [`ImageData.pixelFormat`](/de/docs/Web/API/ImageData/pixelFormat) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der das Format angibt, das für das `ImageData` verwendet werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und sein zugehöriges Interface, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
