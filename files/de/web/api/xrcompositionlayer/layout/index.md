---
title: "XRCompositionLayer: layout-Eigenschaft"
short-title: layout
slug: Web/API/XRCompositionLayer/layout
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`layout`**-Eigenschaft der {{domxref("XRCompositionLayer")}}-Schnittstelle ist der Layout-Typ der Ebene.

Um den Layout-Typ einer Ebene festzulegen, verwenden Sie eine der Methoden zur Erzeugung von Ebenen und deren `layout`-Option:

- {{domxref("XRWebGLBinding.createQuadLayer()")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}

## Wert

Ein String. Mögliche Werte:

- `default`
  - : Die Ebene umfasst alle Ansichten der Sitzung. Es wird empfohlen, den Texturtyp `texture-array` für `default`-Layouts zu verwenden.
- `mono`
  - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen und beiden Augen präsentiert.
- `stereo`
  - : Der Benutzeragent entscheidet, wie das {{domxref("XRSubImage")}} zugewiesen wird (eins oder zwei) und das Layout (oben/unten oder links/rechts). Es wird empfohlen, den Texturtyp `texture-array` für `stereo`-Layouts zu verwenden.
- `stereo-left-right`
  - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, die Anzahl der Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
- `stereo-top-bottom`
  - : Ein einzelnes {{domxref("XRSubImage")}} wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, die Anzahl der Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).

## Beispiele

### Setzen und Abrufen des Layouts einer Ebene

Um das Layout einer Ebene festzulegen, verwenden Sie eine Methode zur Erstellung von Ebenen (wie {{domxref("XRWebGLBinding.createQuadLayer()")}}) und deren `layout`-Option. Um den Typ des Ebenenlayouts abzurufen, verwenden Sie die `layout`-Eigenschaft:

```js
const layer = xrGlBinding.createQuadLayer({
  pixelWidth: 1024,
  pixelHeight: 768,
  layout: "stereo",
});

layer.layout; // "stereo"
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("XRSubImage")}}
- {{domxref("XRWebGLBinding.createQuadLayer()")}}
- {{domxref("XRWebGLBinding.createCylinderLayer()")}}
- {{domxref("XRWebGLBinding.createEquirectLayer()")}}
- {{domxref("XRWebGLBinding.createCubeLayer()")}}
