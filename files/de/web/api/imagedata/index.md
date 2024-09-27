---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageData`** Schnittstelle repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines {{HTMLElement("canvas")}} Elements.

Sie wird erzeugt mit dem [`ImageData()`](/de/docs/Web/API/ImageData/ImageData) Konstruktor oder Methoden zum Erstellen auf dem [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) Objekt, das mit einem Canvas verbunden ist: [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) und [`getImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/getImageData). Sie kann auch verwendet werden, um einen Teil des Canvas mit [`putImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/putImageData) zu setzen.

## Konstruktoren

- [`ImageData()`](/de/docs/Web/API/ImageData/ImageData)
  - : Erstellt ein `ImageData` Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} und der Größe des enthaltenen Bildes. Wenn kein Array angegeben wird, erzeugt es ein Bild eines transparenten schwarzen Rechtecks. Beachten Sie, dass dies die häufigste Methode ist, um ein solches Objekt in Arbeitern zu erstellen, da [`createImageData()`](/de/docs/Web/API/CanvasRenderingContext2D/createImageData) dort nicht verfügbar ist.

## Instanz-Eigenschaften

- [`ImageData.data`](/de/docs/Web/API/ImageData/data) {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}}, das ein eindimensionales Array darstellt und die Daten in der RGBA-Reihenfolge enthält, mit ganzzahligen Werten zwischen `0` und `255` (einschließlich). Die Reihenfolge verläuft zeilenweise vom oberen linken Pixel zum unteren rechten.
- [`ImageData.colorSpace`](/de/docs/Web/API/ImageData/colorSpace) {{ReadOnlyInline}}
  - : Ein Zeichenfolgenwert, der den Farbraum der Bilddaten angibt.
- [`ImageData.height`](/de/docs/Web/API/ImageData/height) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe in Pixeln der `ImageData` darstellt.
- [`ImageData.width`](/de/docs/Web/API/ImageData/width) {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite in Pixeln der `ImageData` darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D)
- Das {{HTMLElement("canvas")}} Element und seine zugehörige Schnittstelle, [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement).
