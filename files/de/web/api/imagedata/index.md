---
title: ImageData
slug: Web/API/ImageData
l10n:
  sourceCommit: daeff1a2efaae366bcc8b6d911d86985646e665e
---

{{APIRef("Canvas API")}}{{AvailableInWorkers}}

Die **`ImageData`**-Schnittstelle repräsentiert die zugrunde liegenden Pixeldaten eines Bereichs eines {{HTMLElement("canvas")}}-Elements.

Sie wird erstellt mithilfe des {{domxref("ImageData.ImageData", "ImageData()")}}-Konstruktors oder Erstellermethoden des mit einem Canvas verbundenen {{domxref("CanvasRenderingContext2D")}}-Objekts: {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} und {{domxref("CanvasRenderingContext2D.getImageData", "getImageData()")}}. Sie kann auch verwendet werden, um einen Teil des Canvas festzulegen, indem {{domxref("CanvasRenderingContext2D.putImageData", "putImageData()")}} verwendet wird.

## Konstruktoren

- {{domxref("ImageData.ImageData", "ImageData()")}}
  - : Erstellt ein `ImageData`-Objekt aus einem gegebenen {{jsxref("Uint8ClampedArray")}} und der Größe des darin enthaltenen Bildes. Wenn kein Array angegeben ist, erzeugt es ein Bild eines transparenten schwarzen Rechtecks. Beachten Sie, dass dies die gebräuchlichste Methode ist, um ein solches Objekt in Workern zu erstellen, da {{domxref("CanvasRenderingContext2D.createImageData", "createImageData()")}} dort nicht verfügbar ist.

## Instanz-Eigenschaften

- {{domxref("ImageData.data")}} {{ReadOnlyInline}}
  - : Ein {{jsxref("Uint8ClampedArray")}}, der ein eindimensionales Array darstellt und die Daten in der RGBA-Reihenfolge mit Ganzzahlen zwischen `0` und `255` (einschließlich) enthält. Die Reihenfolge erfolgt zeilenweise vom oben linken Pixel bis zum unten rechten.
- {{domxref("ImageData.colorSpace")}} {{ReadOnlyInline}}
  - : Ein String, der den Farbraum der Bilddaten angibt.
- {{domxref("ImageData.height")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Höhe, in Pixeln, des `ImageData` darstellt.
- {{domxref("ImageData.width")}} {{ReadOnlyInline}}
  - : Ein `unsigned long`, der die tatsächliche Breite, in Pixeln, des `ImageData` darstellt.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("CanvasRenderingContext2D")}}
- Das {{HTMLElement("canvas")}}-Element und seine zugehörige Schnittstelle, {{domxref("HTMLCanvasElement")}}.
