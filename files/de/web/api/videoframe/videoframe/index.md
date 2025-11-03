---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoFrame()`**-Konstruktor erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekt, das einen Frame eines Videos darstellt.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameter

Der erste Konstruktortyp (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem Bild. Seine Parameter sind:

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
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden darstellt.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der Benutzeragent beim Umgang mit Alphakanälen vorgehen soll. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der Benutzeragent die Alphakanaldaten beibehalten soll.
        - `"discard"`: Gibt an, dass der Benutzeragent die Alphakanaldaten ignorieren oder entfernen soll.
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
      - : Die Breite des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `flip` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird horizontales Spiegeln angewendet. Standardmäßig `false`.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Drehung (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden zur nächsten Vierteldrehung gerundet.

Der zweite Konstruktortyp (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem {{jsxref("ArrayBuffer")}}. Seine Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Ein String, der das Video-Pixelformat darstellt. Einer der folgenden Strings, die auf der Seite der [`format`](/de/docs/Web/API/VideoFrame/format)-Eigenschaft ausführlich beschrieben werden:
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
      - : Breite des `VideoFrame` in Pixel, potenziell einschließlich nicht sichtbarer Polsterung und bevor potenzielle Seitenverhältnis-Anpassungen in Betracht gezogen werden.
    - `codedHeight`
      - : Höhe des `VideoFrame` in Pixel, potenziell einschließlich nicht sichtbarer Polsterung und bevor potenzielle Seitenverhältnis-Anpassungen in Betracht gezogen werden.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden darstellt.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält:
        - `offset`
          - : Ein Integer, der den Versatz in Bytes darstellt, an dem die angegebene Ebene beginnt.
        - `stride`
          - : Ein Integer, der die Anzahl der Bytes (einschließlich Polsterung) darstellt, die von jeder Zeile der Ebene genutzt werden. Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben ist, werden die Ebenen eng gepackt.
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
      - : Die Breite des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Videofarbprimärfarben darstellt, beschrieben auf der Seite der [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries)-Eigenschaft.
        - `transfer`
          - : Ein String, der die Video-Farbübertragungsfunktion darstellt, beschrieben auf der Seite der [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)-Eigenschaft.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix darstellt, beschrieben auf der Seite der [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)-Eigenschaft.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, gibt an, dass vollwertige Farbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}, die `VideoFrame` trennen und übernehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `VideoFrame` diesen Puffer direkt verwenden, anstatt von ihm zu kopieren.
    - `flip` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird horizontales Spiegeln angewendet. Standardmäßig `false`.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Drehung (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden zur nächsten Vierteldrehung gerundet.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` aus einem Canvas erstellt.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// …
const frameFromCanvas = new VideoFrame(cnv, { timestamp: 0 });
```

Im folgenden Beispiel wird ein `VideoFrame` aus einem {{jsxref("TypedArray")}} erstellt.

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
