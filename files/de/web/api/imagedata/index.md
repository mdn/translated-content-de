---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: 7ed95bd9e3e72ec095fd2dc9bc0deab0801b2e6e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageData`**-Interface repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines {{HTMLElement("canvas")}}-Elements.

Es wird erstellt mithilfe des [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) Konstruktors oder Erstellermethoden auf dem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, das mit einem Canvas verbunden ist: [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData). Es kann auch verwendet werden, um einen Teil des Canvas mithilfe von [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) festzulegen.

## Konstruktoren

- [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)
  - : Erstellt ein `ImageData`-Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} und der Größe des Bildes, das es enthält. Wenn kein Array angegeben ist, wird ein Bild eines transparenten schwarzen Rechtecks erstellt. Beachten Sie, dass dies die häufigste Art ist, ein solches Objekt in Workern zu erstellen, da [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) dort nicht verfügbar ist.

## Instanz-Eigenschaften

- [`ImageData.data`](/de/docs/Web/API/ImageData/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array repräsentiert, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich). Die Reihenfolge verläuft zeilenweise vom oberen linken Pixel zum unteren rechten.
- [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) {{ReadOnlyInline}}
  - : Ein String, der den Farbraum der Bilddaten angibt.
- [`ImageData.height`](/de/docs/Web/API/ImageData/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe in Pixeln des `ImageData` darstellt.
- [`ImageData.width`](/de/docs/Web/API/ImageData/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite in Pixeln des `ImageData` darstellt.
- [`ImageData.pixelFormat`](/de/docs/Web/API/ImageData/pixelFormat) {{ReadOnlyInline}}
  - : Ein String, der das Format angibt, das für das `ImageData` verwendet werden soll.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und sein zugehöriges Interface, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
