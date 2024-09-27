---
title: "XRCompositionLayer: layout-Eigenschaft"
short-title: layout
slug: Web/API/XRCompositionLayer/layout
l10n:
  sourceCommit: 76637f9517e4b0a57a3096a36f66b5e33a3f1051
---

{{APIRef("WebXR Device API")}}{{SeeCompatTable}}

Die schreibgeschützte **`layout`**-Eigenschaft der [`XRCompositionLayer`](/de/docs/Web/API/XRCompositionLayer)-Schnittstelle ist der Layout-Typ der Schicht.

Um den Layout-Typ einer Schicht zu spezifizieren, verwenden Sie eine der Methoden zur Schichterstellung und deren `layout`-Option:

- [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer)
- [`XRWebGLBinding.createCylinderLayer()`](/de/docs/Web/API/XRWebGLBinding/createCylinderLayer)
- [`XRWebGLBinding.createEquirectLayer()`](/de/docs/Web/API/XRWebGLBinding/createEquirectLayer)
- [`XRWebGLBinding.createCubeLayer()`](/de/docs/Web/API/XRWebGLBinding/createCubeLayer)

## Wert

Ein Zeichenfolgenwert. Mögliche Werte:

- `default`
  - : Die Schicht berücksichtigt alle Ansichten der Sitzung. Es wird empfohlen, den `texture-array`-Texturtyp für `default`-Layouts zu verwenden.
- `mono`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird beiden Augen zugewiesen und angezeigt.
- `stereo`
  - : Der User Agent entscheidet, wie das [`XRSubImage`](/de/docs/Web/API/XRSubImage) (eins oder zwei) zugewiesen und das Layout (oben/unten oder links/rechts) gestaltet wird. Es wird empfohlen, den `texture-array`-Texturtyp für `stereo`-Layouts zu verwenden.
- `stereo-left-right`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den linken Bereich der Textur, das rechte Auge den rechten. Dieses Layout ist so konzipiert, dass es die Anzahl der Zeichnungsaufrufe für Inhalte minimiert, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).
- `stereo-top-bottom`
  - : Ein einzelnes [`XRSubImage`](/de/docs/Web/API/XRSubImage) wird zugewiesen. Das linke Auge erhält den oberen Bereich der Textur, das rechte Auge den unteren. Dieses Layout ist so konzipiert, dass es die Anzahl der Zeichnungsaufrufe für Inhalte minimiert, die bereits in Stereo vorliegen (zum Beispiel Stereo-Videos oder -Bilder).

## Beispiele

### Festlegen und Abrufen des Layouts einer Schicht

Um das Layout einer Schicht festzulegen, verwenden Sie eine Schichterstellungsmethode (wie [`XRWebGLBinding.createQuadLayer()`](/de/docs/Web/API/XRWebGLBinding/createQuadLayer)) und deren `layout`-Option. Um den Layout-Typ der Schicht abzurufen, verwenden Sie die `layout`-Eigenschaft:

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
