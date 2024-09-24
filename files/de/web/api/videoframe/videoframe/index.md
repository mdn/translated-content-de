---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: 3789de65bd11453c4cb24625723f81a7e8fcdd56
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`VideoFrame()`** Konstruktor erstellt ein neues {{domxref("VideoFrame")}} Objekt, das einen Frame eines Videos darstellt.

## Syntax

```js-nolint
new VideoFrame(image)
new VideoFrame(image, options)
new VideoFrame(data, options)
```

### Parameter

Der erste Konstruktor-Typ (siehe oben) erstellt ein neues {{domxref("VideoFrame")}} aus einem Bild. Die Parameter sind:

- `image`
  - : Ein Bild, das die Bilddaten für den neuen `VideoFrame` enthält. Es kann eines der folgenden Objekte sein:
    ein {{domxref("SVGImageElement")}},
    ein {{domxref("HTMLVideoElement")}},
    ein {{domxref("HTMLCanvasElement")}},
    ein {{domxref("ImageBitmap")}},
    ein {{domxref("OffscreenCanvas")}},
    oder ein weiteres {{domxref("VideoFrame")}}.
- `options` {{Optional_Inline}}
  - : Ein Objekt mit den folgenden Parametern:
    - `duration` {{Optional_Inline}}
      - : Ein Ganzzahlwert, der die Dauer des Frames in Mikrosekunden darstellt.
    - `timestamp`
      - : Ein Ganzzahlwert, der den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der User Agent mit Alpha-Kanälen umgehen soll. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der User Agent die Alpha-Kanal-Daten behalten soll.
        - `"discard"`: Gibt an, dass der User Agent die Alpha-Kanal-Daten ignorieren oder entfernen soll.
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
      - : Die Breite des `VideoFrame`, wenn dieser nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn dieser nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.

Der zweite Konstruktor-Typ (siehe oben) erstellt ein neues {{domxref("VideoFrame")}} aus einem {{jsxref("ArrayBuffer")}}. Die Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}}, oder ein {{jsxref("DataView")}}, das die Daten für den neuen `VideoFrame` enthält.
- `options`
  - : Ein Objekt mit den folgenden Parametern:
    - `format`
      - : Ein String, der das Video-Pixelformat darstellt. Einer der folgenden Strings, die auf der Seite für die {{domxref("VideoFrame.format","format")}} Eigenschaft vollständig beschrieben sind:
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
      - : Breite des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarer Auffüllung und vor der Berücksichtigung potenzieller Verhältnis-Anpassungen.
    - `codedHeight`
      - : Höhe des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarer Auffüllung und vor der Berücksichtigung potenzieller Verhältnis-Anpassungen.
    - `timestamp`
      - : Ein Ganzzahlwert, der den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `duration` {{Optional_Inline}}
      - : Ein Ganzzahlwert, der die Dauer des Frames in Mikrosekunden darstellt.
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene des `VideoFrame` enthält:
        - `offset`
          - : Ein Ganzzahlwert, der den Offset in Bytes darstellt, bei dem die gegebene Ebene beginnt.
        - `stride`
          - : Ein Ganzzahlwert, der die Anzahl von Bytes darstellt, einschließlich Auffüllung, die von jeder Zeile der Ebene verwendet werden.
            Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben ist, werden die Ebenen dicht gepackt.
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
      - : Die Breite des `VideoFrame`, wenn dieser nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn dieser nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Video-Farbprimärfarben darstellt, beschrieben auf der Seite für die {{domxref("VideoColorSpace.primaries")}} Eigenschaft.
        - `transfer`
          - : Ein String, der die Video-Übertragungsfunktion darstellt, beschrieben auf der Seite für die {{domxref("VideoColorSpace.transfer")}} Eigenschaft.
        - `matrix`
          - : Ein String, der die Video-Farbmatrix darstellt, beschrieben auf der Seite für die {{domxref("VideoColorSpace.matrix")}} Eigenschaft.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, gibt dies an, dass vollständige Farbwerte verwendet werden.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}, die `VideoFrame` lösen und übernehmen wird. Wenn das Array den {{jsxref("ArrayBuffer")}} enthält, der `data` unterstützt, wird `VideoFrame` diesen Puffer direkt verwenden, anstatt ihn zu kopieren.

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). Im ersten Beispiel wird ein `VideoFrame` aus einer Leinwand erstellt.

```js
const cnv = document.createElement("canvas");
// Zeichnen Sie etwas auf die Leinwand
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
    data[offset] = 0x7f; // Rot
    data[offset + 1] = 0xff; // Grün
    data[offset + 2] = 0xd4; // Blau
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
