---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: db443a6062d0e858a62af2f9a3a7558335ffd2dd
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`VideoFrame`** Interface der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Frame eines Videos.

`VideoFrame` ist ein [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein `VideoFrame`-Objekt kann auf verschiedene Weisen erstellt oder zugegriffen werden. Der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zerlegt eine Mediatrack in einzelne `VideoFrame`-Objekte.

Ein `VideoFrame` ist eine Bildquelle und hat einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
oder ein anderes `VideoFrame`).
Das bedeutet, dass ein Frame aus einem Bild- oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht die Erstellung eines `VideoFrame` aus seiner binären Pixel-Darstellung in einem {{jsxref("ArrayBuffer")}}, einer {{jsxref("TypedArray")}} oder einer {{jsxref("DataView")}}.

Erstellte Frames können dann in eine Mediatrack umgewandelt werden, beispielsweise mit der [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) Schnittstelle, die eine Mediatrack aus einem Stream von Frames erstellt.

## Konstruktor

- [`VideoFrame()`](/de/docs/Web/API/VideoFrame/VideoFrame)
  - : Erstellt ein neues `VideoFrame`-Objekt.

## Instanzeigenschaften

- [`VideoFrame.format`](/de/docs/Web/API/VideoFrame/format) {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise inklusive nicht sichtbarer Auffüllung, und bevor mögliche Verhältnisänderungen berücksichtigt werden.
- [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, möglicherweise inklusive nicht sichtbarer Auffüllung, und bevor mögliche Verhältnisänderungen berücksichtigt werden.
- [`VideoFrame.codedRect`](/de/docs/Web/API/VideoFrame/codedRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) mit der Breite und Höhe zurück, die `codedWidth` und `codedHeight` entsprechen.
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das das sichtbare Rechteck von Pixeln für dieses `VideoFrame` beschreibt.
- [`VideoFrame.displayWidth`](/de/docs/Web/API/VideoFrame/displayWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` beim Anzeigen nach Anwendung von {{Glossary("aspect_ratio", "Seitenverhältnis")}} Anpassungen zurück.
- [`VideoFrame.displayHeight`](/de/docs/Web/API/VideoFrame/displayHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` beim Anzeigen nach Anwendung von Seitenverhältnis-Anpassungen zurück.
- [`VideoFrame.duration`](/de/docs/Web/API/VideoFrame/duration) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Dauer des Videos in Mikrosekunden angibt.
- [`VideoFrame.timestamp`](/de/docs/Web/API/VideoFrame/timestamp) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.
- [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) {{ReadOnlyInline}}
  - : Gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Objekt zurück.
- [`VideoFrame.flip`](/de/docs/Web/API/VideoFrame/flip) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt zurück, ob das `VideoFrame` horizontal gespiegelt ist.
- [`VideoFrame.rotation`](/de/docs/Web/API/VideoFrame/rotation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn zurück, die auf das `VideoFrame` angewendet wurde. Willkürliche Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.

## Instanzmethoden

- [`VideoFrame.allocationSize()`](/de/docs/Web/API/VideoFrame/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die benötigt werden, um das `VideoFrame` zu speichern, gefiltert nach Optionen, die in die Methode übergeben werden.
- [`VideoFrame.copyTo()`](/de/docs/Web/API/VideoFrame/copyTo)
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- [`VideoFrame.clone()`](/de/docs/Web/API/VideoFrame/clone)
  - : Erstellt ein neues `VideoFrame`-Objekt mit Verweis auf die gleiche Medienquelle wie das Original.
- [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)
  - : Löscht alle Zustände und gibt die Referenz zur Medienquelle frei.
- [`VideoFrame.metadata()`](/de/docs/Web/API/VideoFrame/metadata) {{experimental_inline}}
  - : Gibt die mit dem `VideoFrame` verknüpften Metadaten zurück.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert. Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

```js
let frameCounter = 0;

const track = stream.getVideoTracks()[0];
const mediaProcessor = new MediaStreamTrackProcessor(track);

const reader = mediaProcessor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;

  let frame = result.value;
  if (encoder.encodeQueueSize > 2) {
    // Too many frames in flight, encoder is overwhelmed
    // let's drop this frame.
    frame.close();
  } else {
    frameCounter++;
    const insertKeyframe = frameCounter % 150 === 0;
    encoder.encode(frame, { keyFrame: insertKeyframe });
    frame.close();
  }
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs-Beispiele](https://w3c.github.io/webcodecs/samples/)
