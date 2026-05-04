---
title: "VideoFrame: VideoFrame() Konstruktor"
short-title: VideoFrame()
slug: Web/API/VideoFrame/VideoFrame
l10n:
  sourceCommit: e62132e5900aad53470eb84df3b61eacd35f727d
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

Der erste Typ des Konstruktors erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem Bild. Seine Parameter sind:

- `image`
  - : Ein Bild, das die Bilddaten für das neue `VideoFrame` enthält. Es kann sich um eines der folgenden Objekte handeln:
    ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
    ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
    ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
    ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
    ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
    oder ein anderes [`VideoFrame`](/de/docs/Web/API/VideoFrame).
- `options` {{Optional_Inline}}
  - : Ein Objekt, das Folgendes enthält:
    - `alpha` {{Optional_Inline}}
      - : Ein String, der beschreibt, wie der User-Agent beim Umgang mit Alphakanälen vorgehen soll. Der Standardwert ist "keep".
        - `"keep"`: Gibt an, dass der User-Agent die Alphakanaldaten beibehalten soll.
        - `"discard"`: Gibt an, dass der User-Agent die Alphakanaldaten ignorieren oder entfernen soll.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es angezeigt wird, nachdem Seitenverhältnis-Anpassungen vorgenommen wurden.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es angezeigt wird, nachdem Seitenverhältnis-Anpassungen vorgenommen wurden.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden darstellt.
    - `flip` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardmäßig `false`.
    - `metadata` {{optional_inline}}
      - : Ein Objekt, das Metadaten beschreibt, die die Video-Frame-Daten beschreiben, spezifiziert durch das [WebCodecs VideoFrame Metadata Registry](https://w3c.github.io/webcodecs/video_frame_metadata_registry.html), das die folgenden Eigenschaften enthalten kann:
        - `rtpTimestamp` {{optional_inline}}
          - : Der RTP-Zeitstempel des entsprechenden kodierten Frames. Nur Video-Frames, die aus [WebRTC](/de/docs/Web/API/WebRTC_API)-Quellen stammen, sollten `rtpTimestamp`-Metadaten gesetzt haben.

        > [!NOTE]
        > Die `metadata` eines Video-Frames können mit der Methode [`VideoFrame.metadata()`](/de/docs/Web/API/VideoFrame/metadata) zurückgegeben werden.

    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden darstellt.
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

Der zweite Typ des Konstruktors erstellt ein neues [`VideoFrame`](/de/docs/Web/API/VideoFrame) aus einem {{jsxref("ArrayBuffer")}}. Seine Parameter sind:

- `data`
  - : Ein {{jsxref("ArrayBuffer")}}, ein {{jsxref("TypedArray")}} oder ein {{jsxref("DataView")}}, das die Daten für das neue `VideoFrame` enthält.
- `options`
  - : Ein Objekt, das Folgendes enthält:
    - `codedHeight`
      - : Höhe des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarer Polsterung und bevor eventuelle Verhältnis-Anpassungen berücksichtigt werden.
    - `codedWidth`
      - : Breite des `VideoFrame` in Pixeln, möglicherweise einschließlich nicht sichtbarer Polsterung und bevor eventuelle Verhältnis-Anpassungen berücksichtigt werden.
    - `colorSpace`
      - : Ein Objekt, das den Farbraum des `VideoFrame` darstellt und Folgendes enthält:
        - `primaries`
          - : Ein String, der die Farbprimaries des Videos darstellt und auf der Seite für die Eigenschaft [`VideoColorSpace.primaries`](/de/docs/Web/API/VideoColorSpace/primaries) beschrieben wird.
        - `transfer`
          - : Ein String, der die Transferfunktion des Video-Farbraums darstellt und auf der Seite für die Eigenschaft [`VideoColorSpace.transfer`](/de/docs/Web/API/VideoColorSpace/transfer) beschrieben wird.
        - `matrix`
          - : Ein String, der die Farbraummatrix des Videos darstellt und auf der Seite für die Eigenschaft [`VideoColorSpace.matrix`](/de/docs/Web/API/VideoColorSpace/matrix) beschrieben wird.
        - `fullRange`
          - : Ein Boolean. Wenn `true`, zeigt an, dass vollumfängliche Farbwerte verwendet werden.
    - `displayHeight` {{Optional_Inline}}
      - : Die Höhe des `VideoFrame`, wenn es angezeigt wird, nachdem Seitenverhältnis-Anpassungen vorgenommen wurden.
    - `displayWidth` {{Optional_Inline}}
      - : Die Breite des `VideoFrame`, wenn es angezeigt wird, nachdem Seitenverhältnis-Anpassungen vorgenommen wurden.
    - `duration` {{Optional_Inline}}
      - : Ein Integer, der die Dauer des Frames in Mikrosekunden darstellt.
    - `flip` {{optional_inline}}
      - : Ein Boolean. Wenn `true`, wird eine horizontale Spiegelung angewendet. Standardmäßig `false`.
    - `format`
      - : Ein String, der das Pixel-Format des Videos darstellt. Einer der folgenden Strings, die auf der Seite für die Eigenschaft [`format`](/de/docs/Web/API/VideoFrame/format) vollständig beschrieben sind:
        - `"I420"`
        - `"I420A"`
        - `"I422"`
        - `"I444"`
        - `"NV12"`
        - `"RGBA"`
        - `"RGBX"`
        - `"BGRA"`
        - `"BGRX"`
    - `layout` {{Optional_Inline}}
      - : Eine Liste, die die folgenden Werte für jede Ebene im `VideoFrame` enthält:
        - `offset`
          - : Ein Integer, der den Versatz in Bytes darstellt, ab dem die jeweilige Ebene beginnt.
        - `stride`
          - : Ein Integer, der die Anzahl von Bytes darstellt, einschließlich der Polsterung, die von jeder Zeile der Ebene verwendet wird.
            Ebenen dürfen sich nicht überlappen. Wenn kein `layout` angegeben ist, werden die Ebenen eng gepackt.
    - `metadata` {{optional_inline}}
      - : Ein Objekt, das Metadaten beschreibt, die die Video-Frame-Daten beschreiben, spezifiziert durch das [WebCodecs VideoFrame Metadata Registry](https://w3c.github.io/webcodecs/video_frame_metadata_registry.html), das die folgenden Eigenschaften enthalten kann:
        - `rtpTimestamp` {{optional_inline}}
          - : Der RTP-Zeitstempel des entsprechenden kodierten Frames.
    - `rotation` {{optional_inline}}
      - : Ein Integer, der die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn darstellt. Standardmäßig `0`. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.
    - `timestamp`
      - : Ein Integer, der den Zeitstempel des Frames in Mikrosekunden darstellt.
    - `transfer`
      - : Ein Array von {{jsxref("ArrayBuffer")}}s, die `VideoFrame` abtrennen und übernehmen wird. Wenn das Array den `ArrayBuffer` enthält, der `data` unterstützt, wird `VideoFrame` dieses Puffer direkt verwenden, anstatt davon zu kopieren.
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

## Beispiele

Die folgenden Beispiele stammen aus dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs). In diesem ersten Beispiel wird ein `VideoFrame` aus einer Leinwand erstellt.

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
