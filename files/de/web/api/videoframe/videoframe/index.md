---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 4c4e14a03ff66ad7fcdcef2a4c149bd892aacbce
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoFrame()`** Konstruktor erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekt, das ein Einzelbild eines Videos darstellt.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameter

Der erste Konstruktor-Typ (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) von einem Bild. Seine Parameter sind:

- `image`
  - : Ein Bild, das die Bilddaten für das neue `VideoFrame` enthält. Es kann eines der folgenden Objekte sein:
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
    oder ein anderes [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Einzelbildes in Mikrosekunden darstellt.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Einzelbildes in Mikrosekunden darstellt.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der Benutzeragent mit Alphakanälen umgehen sollte. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der Benutzeragent die Alphakanaldaten beibehalten soll.
        - `"discard"`: Gibt an, dass der Benutzeragent die Alphakanaldaten ignorieren oder entfernen soll.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Einzelbildes.
        - `height`
          - : Die Höhe des Einzelbildes.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnisanpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnisanpassungen angezeigt wird.
    - `flip` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardwert ist `false`.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Drehung (0, 90, 180 oder 270) im Uhrzeigersinn in Grad darstellt. Standardwert ist `0`. Willkürliche Zahlen (einschließlich negativer) werden zur nächsten Vierteldrehung gerundet.

Der zweite Konstruktor-Typ (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) von einem {{jsxref("ArrayBuffer")}}. Seine Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Ein String, der das Video-Pixelformat darstellt. Einer der folgenden Strings, die auf der Seite für die [`format`](/de/docs/Web/API/VideoFrame/format) Eigenschaft vollständig beschrieben werden:
        - `"I420"`
        - `"I420A"`
        - `"I422"`
        - `"I444"`
        - `"NV12"`
        - `"RGBA"`
        - `"RGBX"`
        - `"BGRA"`
        - `"BGRX"`
    - `codedWidth`
      - : Breite des `VideoFrame` in Pixeln, potenziell einschließlich nicht sichtbarer Polsterung, und vor Berücksichtigung potenzieller Verhältnisänderungen.
    - `codedHeight`
      - : Höhe des `VideoFrame` in Pixeln, potenziell einschließlich nicht sichtbarer Polsterung, und vor Berücksichtigung potenzieller Verhältnisänderungen.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Einzelbildes in Mikrosekunden darstellt.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Einzelbildes in Mikrosekunden darstellt.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die für jede Ebene im `VideoFrame` die folgenden Werte enthält:
        - `offset`
          - : Ein Integer, der den Offset in Bytes darstellt, an dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein Integer, der die Anzahl der Bytes, einschließlich Polsterung, darstellt, die von jeder Zeile der Ebene verwendet werden.
            Ebenen dürfen sich nicht überschneiden. Wenn kein `layout` angegeben ist, werden die Ebenen eng gepackt.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Einzelbildes.
        - `height`
          - : Die Höhe des Einzelbildes.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnisanpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnisanpassungen angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Video-Farbprimärfarben darstellt, beschrieben auf der Seite für die [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) Eigenschaft.
        - `transfer`
          - : Ein String, der die Video-Farbübertragungsfunktion darstellt, beschrieben auf der Seite für die [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer) Eigenschaft.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix darstellt, beschrieben auf der Seite für die [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix) Eigenschaft.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, wird angezeigt, dass Vollbereichsfarbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `VideoFrame` abtrennen und in Besitz nehmen wird. Wenn das Array den für `data` unterstützenden {{jsxref("ArrayBuffer")}} enthält, wird `VideoFrame` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.
    - `flip` {{optional_inline}}
      - : Ein boolescher Wert. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardwert ist `false`.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Drehung (0, 90, 180 oder 270) im Uhrzeigersinn in Grad darstellt. Standardwert ist `0`. Willkürliche Zahlen (einschließlich negativer) werden zur nächsten Vierteldrehung gerundet.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` aus einem Canvas erstellt.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// …
const frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

Im folgenden Beispiel wird ein `VideoFrame` von einem {{jsxref("TypedArray")}} erstellt.

```js
const pixelSize = 4;
const init = {
  timestamp: 0,
  codedWidth: 320,
  codedHeight: 200,
  format: "RGBA",
};
const data = new Uint8Array(init.codedWidth * init.codedHeight * pixelSize);
for (let x = 0; x < init.codedWidth; x++) {
  for (let y = 0; y < init.codedHeight; y++) {
    const offset = (y * init.codedWidth + x) * pixelSize;
    data[offset] = 0x7f; // Red
    data[offset + 1] = 0xff; // Green
    data[offset + 2] = 0xd4; // Blue
    data[offset + 3] = 0x0ff; // Alpha
  }
}
init.transfer = [data.buffer];
const frame = new VideoFrame(data, init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
