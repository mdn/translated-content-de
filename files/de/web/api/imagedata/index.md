---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Das **`ImageData`**-Interface stellt die zugrunde liegenden Pixeldaten eines Bereichs eines {{HTMLElement("canvas")}}-Elements dar.

Es wird mit dem [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)-Konstruktor oder Erzeugermethoden auf dem mit einer Leinwand (canvas) verbundenen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)-Objekt erstellt: [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData). Es kann auch verwendet werden, um einen Teil der Leinwand festzulegen, indem [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) verwendet wird.

## Konstruktoren

- [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)
  - : Erstellt ein `ImageData`-Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} und der Größe des Bildes, das es enthält. Wenn kein Array angegeben ist, erstellt es ein Bild eines transparenten schwarzen Rechtecks. Beachten Sie, dass dies die gebräuchlichste Methode ist, um ein solches Objekt in Arbeitern (workers) zu erstellen, da [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) dort nicht verfügbar ist.

## Instanzeigenschaften

- [`ImageData.data`](/de/docs/Web/API/ImageData/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt, das die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich). Die Reihenfolge erfolgt zeilenweise von oben links nach unten rechts.
- [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) {{ReadOnlyInline}}
  - : Ein String, der den Farbraum der Bilddaten angibt.
- [`ImageData.height`](/de/docs/Web/API/ImageData/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe des `ImageData` in Pixeln darstellt.
- [`ImageData.width`](/de/docs/Web/API/ImageData/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite des `ImageData` in Pixeln darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}}-Element und sein zugehöriges Interface, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
