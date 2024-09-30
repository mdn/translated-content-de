---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoFrame()`** Konstruktor erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekt, das ein Bild eines Videos darstellt.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameter

Der erste Konstruktionstyp (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem Bild. Die Parameter sind:

- `image`
  - : Ein Bild, das die Bilddaten für das neue `VideoFrame` enthält. Es kann eines der folgenden Objekte sein:
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    eine [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    oder ein anderes [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Bildes in Mikrosekunden darstellt.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Bildes in Mikrosekunden darstellt.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der User-Agent mit Alpha-Kanälen umgehen soll. Der Standardwert ist "keep".
        - `"keep"`: Weist darauf hin, dass der User-Agent Alpha-Kanal-Daten beibehalten soll.
        - `"discard"`: Weist darauf hin, dass der User-Agent Alpha-Kanal-Daten ignorieren oder entfernen soll.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Bildes.
        - `height`
          - : Die Höhe des Bildes.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach Anpassungen des Seitenverhältnisses angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anpassungen des Seitenverhältnisses angezeigt wird.

Der zweite Konstruktionstyp (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem {{jsxref("ArrayBuffer")}}. Die Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Ein String, der das Video-Pixelformat darstellt. Einer der folgenden Strings, die auf der Seite für die [`format`](/de/docs/Web/API/VideoFrame/format) Eigenschaft vollständig beschrieben sind:
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
      - : Die Breite des `VideoFrame` in Pixel, die potenziell nicht sichtbare Auffüllung einschließen kann und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
    - `codedHeight`
      - : Die Höhe des `VideoFrame` in Pixel, die potenziell nicht sichtbare Auffüllung einschließen kann und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Bildes in Mikrosekunden darstellt.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Bildes in Mikrosekunden darstellt.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält:
        - `offset`
          - : Ein Integer, der den Versatz in Bytes darstellt, bei dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein Integer, der die Anzahl der Bytes darstellt, einschließlich auffüllendem Daten, die von jeder Zeile der Ebene verwendet werden.
            Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben ist, werden die Ebenen eng gepackt.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Bildes.
        - `height`
          - : Die Höhe des Bildes.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach Anpassungen des Seitenverhältnisses angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anpassungen des Seitenverhältnisses angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Video-Farbprimärfarben darstellt, beschrieben auf der Seite für die [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) Eigenschaft.
        - `transfer`
          - : Ein String, der die Video-Farbübertragungsfunktion darstellt, beschrieben auf der Seite für die [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer) Eigenschaft.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix darstellt, beschrieben auf der Seite für die [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix) Eigenschaft.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, wird angezeigt, dass Vollbereichs-Farbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, das `VideoFrame` abkoppelt und übernimmt. Wenn das Array den {{jsxref("ArrayBuffer")}}, der `data` unterstützt, enthält, wird `VideoFrame` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` aus einem Canvas erstellt.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
let frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

Im folgenden Beispiel wird ein `VideoFrame` aus einem {{jsxref("TypedArray")}} erstellt.

```js
const pixelSize = 4;
let init = {
  timestamp: 0,
  codedWidth: 320,
  codedHeight: 200,
  format: "RGBA",
};
let data = new Uint8Array(init.codedWidth * init.codedHeight * pixelSize);
for (let x = 0; x < init.codedWidth; x++) {
  for (let y = 0; y < init.codedHeight; y++) {
    let offset = (y * init.codedWidth + x) * pixelSize;
    data[offset] = 0x7f; // Red
    data[offset + 1] = 0xff; // Green
    data[offset + 2] = 0xd4; // Blue
    data[offset + 3] = 0x0ff; // Alpha
  }
}
init.transfer = [data.buffer];
let frame = new VideoFrame(data, init);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
