---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: ef6215cdb0472ba6bff093e2dcfb0e1434483db5
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`VideoFrame`** Interface der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Frame eines Videos.

`VideoFrame` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein `VideoFrame` Objekt kann auf verschiedene Weise erstellt oder aufgerufen werden. Der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zerlegt einen Medientrack in einzelne `VideoFrame` Objekte.

Ein `VideoFrame` ist eine Bildquelle und hat einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
oder ein anderes `VideoFrame`).
Das bedeutet, dass ein Frame aus einem Bild- oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht die Erstellung eines `VideoFrame` aus seiner binären Pixelrepräsentation in einem {{jsxref("ArrayBuffer")}}, einer {{jsxref("TypedArray")}}, oder einer {{jsxref("DataView")}}.

Erstellte Frames können dann in einen Medientrack umgewandelt werden, zum Beispiel mit dem [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) Interface, das einen Medientrack aus einem Stream von Frames erstellt.

## Konstruktor

- [`VideoFrame()`](/de/docs/Web/API/VideoFrame/VideoFrame)
  - : Erstellt ein neues `VideoFrame` Objekt.

## Instanz-Eigenschaften

- [`VideoFrame.format`](/de/docs/Web/API/VideoFrame/format) {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich nicht sichtbarer Auffüllungen, und bevor potenzielle Verhältnis-Anpassungen betrachtet werden.
- [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich nicht sichtbarer Auffüllungen, und bevor potenzielle Verhältnis-Anpassungen betrachtet werden.
- [`VideoFrame.codedRect`](/de/docs/Web/API/VideoFrame/codedRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) mit der Breite und Höhe zurück, die `codedWidth` und `codedHeight` entsprechen.
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das das sichtbare Rechteck der Pixel für dieses `VideoFrame` beschreibt.
- [`VideoFrame.displayWidth`](/de/docs/Web/API/VideoFrame/displayWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` beim Anzeigen nach Anwendung von {{Glossary("aspect_ratio", "Seitenverhältnis")}} Anpassungen zurück.
- [`VideoFrame.displayHeight`](/de/docs/Web/API/VideoFrame/displayHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` beim Anzeigen nach Anwendung der Seitenverhältnis-Anpassungen zurück.
- [`VideoFrame.duration`](/de/docs/Web/API/VideoFrame/duration) {{ReadOnlyInline}}
  - : Gibt ein Integer zurück, das die Dauer des Videos in Mikrosekunden angibt.
- [`VideoFrame.timestamp`](/de/docs/Web/API/VideoFrame/timestamp) {{ReadOnlyInline}}
  - : Gibt ein Integer zurück, das den Zeitstempel des Videos in Mikrosekunden angibt.
- [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) {{ReadOnlyInline}}
  - : Gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Objekt zurück.
- [`VideoFrame.flip`](/de/docs/Web/API/VideoFrame/flip) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt zurück, ob das `VideoFrame` horizontal gespiegelt ist.
- [`VideoFrame.rotation`](/de/docs/Web/API/VideoFrame/rotation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Rotation (0, 90, 180 oder 270) in Grad im Uhrzeigersinn an, die auf das `VideoFrame` angewendet wird. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.

## Instanz-Methoden

- [`VideoFrame.allocationSize()`](/de/docs/Web/API/VideoFrame/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die erforderlich sind, um das `VideoFrame` zu halten, gefiltert durch Optionen, die in die Methode übergeben werden.
- [`VideoFrame.copyTo()`](/de/docs/Web/API/VideoFrame/copyTo)
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- [`VideoFrame.clone()`](/de/docs/Web/API/VideoFrame/clone)
  - : Erstellt ein neues `VideoFrame` Objekt mit Bezug auf die gleiche Medienressource wie das Original.
- [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)
  - : Löscht alle Zustände und gibt die Referenz zur Medienressource frei.
- [`VideoFrame.metadata()`](/de/docs/Web/API/VideoFrame/metadata) {{experimental_inline}}
  - : Gibt die Metadaten zurück, die mit dem `VideoFrame` verbunden sind.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert. Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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

- [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs Beispiele](https://w3c.github.io/webcodecs/samples/)
