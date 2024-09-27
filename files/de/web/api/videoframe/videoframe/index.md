---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoFrame()`** Konstruktor erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt, das einen Frame eines Videos darstellt.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameter

Der erste Typ des Konstruktors (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem Bild. Seine Parameter sind:

- `image`
  - : Ein Bild, das die Bilddaten für das neue `VideoFrame` enthält. Es kann eines der folgenden Objekte sein:
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    oder ein anderes [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `duration` {{Optional_Inline}}
      - : Eine ganze Zahl, die die Dauer des Frames in Mikrosekunden darstellt.
    - `timestamp`
      - : Eine ganze Zahl, die den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der Benutzeragent beim Umgang mit Alphakanälen verfahren soll. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der Benutzeragent Alphakanaldaten beibehalten soll.
        - `"discard"`: Gibt an, dass der Benutzeragent Alphakanaldaten ignorieren oder entfernen soll.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Frames.
        - `height`
          - : Die Höhe des Frames.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach der Anwendung von Anpassungen des Seitenverhältnisses angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach der Anwendung von Anpassungen des Seitenverhältnisses angezeigt wird.

Der zweite Typ des Konstruktors (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem {{jsxref("ArrayBuffer")}}. Seine Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, der die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Ein String, der das Video-Pixelformat darstellt. Einer der folgenden Strings, die auf der Seite für die [`format`](/de/docs/Web/API/VideoFrame/format)-Eigenschaft vollständig beschrieben sind:
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
      - : Breite des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarem Padding und bevor potenzielle Verhältnis-Anpassungen berücksichtigt werden.
    - `codedHeight`
      - : Höhe des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarem Padding und bevor potenzielle Verhältnis-Anpassungen berücksichtigt werden.
    - `timestamp`
      - : Eine ganze Zahl, die den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `duration` {{Optional_Inline}}
      - : Eine ganze Zahl, die die Dauer des Frames in Mikrosekunden darstellt.
    - `layout` {{Optional_Inline}}
      - : Eine Liste mit den folgenden Werten für jede Ebene im `VideoFrame`:
        - `offset`
          - : Eine ganze Zahl, die die Verschiebung in Bytes darstellt, wo die gegebene Ebene beginnt.
        - `stride`
          - : Eine ganze Zahl, die die Anzahl der Bytes, einschließlich Padding, darstellt, die von jeder Zeile der Ebene verwendet werden.
            Ebenen dürfen sich nicht überschneiden. Wenn kein `layout` angegeben ist, werden die Ebenen eng gepackt.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame` darstellt und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Frames.
        - `height`
          - : Die Höhe des Frames.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es nach der Anwendung von Anpassungen des Seitenverhältnisses angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach der Anwendung von Anpassungen des Seitenverhältnisses angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Video-Farbprimärfarben darstellt, auf der Seite für die [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries)-Eigenschaft beschrieben.
        - `transfer`
          - : Ein String, der die Video-Farbübertragungsfunktion darstellt, auf der Seite für die [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)-Eigenschaft beschrieben.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix darstellt, auf der Seite für die [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)-Eigenschaft beschrieben.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, zeigt an, dass Vollbereichs-Farbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `VideoFrame` abkoppeln und in Besitz nehmen wird. Wenn das Array den `ArrayBuffer` enthält, der `data` unterstützt, wird `VideoFrame` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` von einem Canvas erstellt.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// ...
let frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
```

Im folgenden Beispiel wird ein `VideoFrame` von einem {{jsxref("TypedArray")}} erstellt.

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
