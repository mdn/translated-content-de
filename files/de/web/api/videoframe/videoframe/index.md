---
title: "VideoFrame: VideoFrame()-Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
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

Der erste Typ des Konstruktors (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem Bild. Seine Parameter sind:

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
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden repräsentiert.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden repräsentiert.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der Benutzeragent mit Alphakanälen umgehen soll. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der Benutzeragent die Daten des Alphakanals behalten soll.
        - `"discard"`: Gibt an, dass der Benutzeragent die Daten des Alphakanals ignorieren oder entfernen soll.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame`s repräsentiert und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Frames.
        - `height`
          - : Die Höhe des Frames.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`s, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`s, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.

Der zweite Typ des Konstruktors (siehe oben) erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem {{jsxref("ArrayBuffer")}}. Seine Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `format`
      - : Ein String, der das Video-Pixel-Format repräsentiert. Einer der folgenden Strings, die auf der Seite für die [`format`](/de/docs/Web/API/VideoFrame/format)-Eigenschaft vollständig beschrieben sind:
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
      - : Die Breite des `VideoFrame`s in Pixeln, möglicherweise einschließlich nicht sichtbarer Polsterung und vor der Berücksichtigung potenzieller Verhältnis-Anpassungen.
    - `codedHeight`
      - : Die Höhe des `VideoFrame`s in Pixeln, möglicherweise einschließlich nicht sichtbarer Polsterung und vor der Berücksichtigung potenzieller Verhältnis-Anpassungen.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden repräsentiert.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden repräsentiert.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält:
        - `offset`
          - : Ein Integer, der den Offset in Bytes angibt, wo die gegebene Ebene beginnt.
        - `stride`
          - : Ein Integer, der die Anzahl der Bytes einschließlich Polsterung angibt, die von jeder Reihe der Ebene verwendet wird.
            Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben wird, werden die Ebenen dicht gepackt.
    - `visibleRect` {{Optional_Inline}}
      - : Ein Objekt, das das sichtbare Rechteck des `VideoFrame`s repräsentiert und Folgendes enthält:
        - `x`
          - : Die x-Koordinate.
        - `y`
          - : Die y-Koordinate.
        - `width`
          - : Die Breite des Frames.
        - `height`
          - : Die Höhe des Frames.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`s, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`s, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame`s repräsentiert und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Video-Farbprimärwerte beschreibt, wie auf der Seite für die [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries)-Eigenschaft beschrieben.
        - `transfer`
          - : Ein String, der die Video-Farbübertragungsfunktion beschreibt, wie auf der Seite für die [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer)-Eigenschaft beschrieben.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix beschreibt, wie auf der Seite für die [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix)-Eigenschaft beschrieben.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, gibt dies an, dass Vollbereichs-Farbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, das `VideoFrame` abtrennen und übernehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `VideoFrame` diesen Puffer direkt verwenden, statt daraus zu kopieren.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` aus einer Leinwand erstellt.

```js
const cnv = document.createElement("canvas");
// draw something on the canvas
// …
const frame_from_canvas = new VideoFrame(cnv, { timestamp: 0 });
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
