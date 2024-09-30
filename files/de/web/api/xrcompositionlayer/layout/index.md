---
title: "XRCompositionLayer: layout-Eigenschaft"
short-title: layout
slug: Web/API/XRCompositionLayer/layout
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`layout`**-Eigenschaft des [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Interfaces ist der Layout-Typ der Ebene.

Um den Layout-Typ einer Ebene anzugeben, verwenden Sie eine der Ebenenerstellungsmethoden und deren `layout`-Option:

- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer)
- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer)
- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer)
- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer)

## Wert

Ein String. Mögliche Werte:

- `default`
  - : Die Ebene passt sich allen Ansichten der Sitzung an. Es wird empfohlen, den `texture-array`-Texturtyp für `default`-Layouts zu verwenden.
- `mono`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen und beiden Augen präsentiert.
- `stereo`
  - : Der Benutzeragent entscheidet, wie er das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eines oder zwei) zuweist und das Layout (oben/unten oder links/rechts). Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
- `stereo-left-right`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist darauf ausgelegt, die Anzahl der Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel stereoskopische Videos oder Bilder).
- `stereo-top-bottom`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist darauf ausgelegt, die Anzahl der Zeichenaufrufe für Inhalte zu minimieren, die bereits in Stereo vorliegen (zum Beispiel stereoskopische Videos oder Bilder).

## Beispiele

### Festlegen und Abrufen des Layouts einer Ebene

Um das Layout einer Ebene festzulegen, verwenden Sie eine Ebenenerstellungsmethode (wie [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer)) und deren `layout`-Option. Um den Typ des Ebenenlayouts abzurufen, verwenden Sie die `layout`-Eigenschaft:

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

- [`XRSubImage`](/de/docs/Web/API/XRSubImage)
- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer)
- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer)
- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer)
- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer)
