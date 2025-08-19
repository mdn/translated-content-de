---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: eba7ce08cf50c5d9e344652748f6bcfb19f3a396
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageData`**-Interface repräsentiert die zugrunde liegenden Pixel-Daten eines Bereichs eines {{HTMLElement("canvas")}}-Elements.

Es wird mithilfe des [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)-Konstruktors oder durch Erstellmethoden des [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekts erstellt, das mit einem Canvas verknüpft ist: [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData). Es kann auch verwendet werden, um einen Teil des Canvas festzulegen, indem [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwendet wird.

## Konstruktoren

- [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)
  - : Erstellt ein `ImageData`-Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} oder {{jsxref("Float16Array")}} und der Größe des Bildes, das es enthält. Wenn kein Array angegeben ist, wird ein Bild eines transparenten schwarzen Rechtecks erstellt. Dies ist der häufigste Weg, um ein solches Objekt in Arbeitern zu erstellen, da [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) dort nicht verfügbar ist.

## Instanz-Eigenschaften

- [`ImageData.data`](/de/docs/Web/API/ImageData/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}} oder {{jsxref("Float16Array")}}, das ein eindimensionales Array darstellt, welches die Daten in der RGBA-Reihenfolge enthält. Die Reihenfolge erfolgt zeilenweise vom Pixel oben links bis unten rechts.
- [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) {{ReadOnlyInline}}
  - : Ein String, der den Farbraum der Bilddaten angibt.
- [`ImageData.height`](/de/docs/Web/API/ImageData/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe des `ImageData` in Pixeln darstellt.
- [`ImageData.width`](/de/docs/Web/API/ImageData/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite des `ImageData` in Pixeln darstellt.
- [`ImageData.pixelFormat`](/de/docs/Web/API/ImageData/pixelFormat) {{ReadOnlyInline}} {{experimental_inline}}
  - : Ein String, der das Format angibt, das für das `ImageData` verwendet werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
