---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoFrame`** Schnittstelle der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Frame eines Videos.

`VideoFrame` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein `VideoFrame`-Objekt kann auf verschiedene Weise erstellt oder abgerufen werden. Der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zerlegt eine Medienspur in einzelne `VideoFrame`-Objekte.

Ein `VideoFrame` ist eine Bildquelle und verfügt über einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
oder ein anderes `VideoFrame`).
Das bedeutet, dass ein Frame aus einem Bild oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht die Erstellung eines `VideoFrame` aus seiner binären Pixelrepräsentation in einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}.

Erstellte Frames können dann in eine Medienspur umgewandelt werden, zum Beispiel mit der [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) Schnittstelle, die eine Medienspur aus einem Stream von Frames erstellt.

## Konstruktor

- [`VideoFrame()`](/de/docs/Web/API/VideoFrame/VideoFrame)
  - : Erstellt ein neues `VideoFrame`-Objekt.

## Instanz-Eigenschaften

- [`VideoFrame.format`](/de/docs/Web/API/VideoFrame/format) {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich unsichtbarer Polsterung und vor Berücksichtigung potenzieller Verhältnis-Anpassungen.
- [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich unsichtbarer Polsterung und vor Berücksichtigung potenzieller Verhältnis-Anpassungen.
- [`VideoFrame.codedRect`](/de/docs/Web/API/VideoFrame/codedRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) mit der Breite und Höhe zurück, die `codedWidth` und `codedHeight` entsprechen.
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das das sichtbare Rechteck der Pixel für dieses `VideoFrame` beschreibt.
- [`VideoFrame.displayWidth`](/de/docs/Web/API/VideoFrame/displayWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` zurück, wenn es nach Anwendung von [Seitenverhältnis](/de/docs/Glossary/aspect_ratio)-Anpassungen angezeigt wird.
- [`VideoFrame.displayHeight`](/de/docs/Web/API/VideoFrame/displayHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` zurück, wenn es nach Anwendung von Seitenverhältnis-Anpassungen angezeigt wird.
- [`VideoFrame.duration`](/de/docs/Web/API/VideoFrame/duration) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Dauer des Videos in Mikrosekunden angibt.
- [`VideoFrame.timestamp`](/de/docs/Web/API/VideoFrame/timestamp) {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.
- [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) {{ReadOnlyInline}}
  - : Gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace) Objekt zurück.

## Instanz-Methoden

- [`VideoFrame.allocationSize()`](/de/docs/Web/API/VideoFrame/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die benötigt werden, um das `VideoFrame` zu halten, gefiltert durch Optionen, die in die Methode übergeben werden.
- [`VideoFrame.copyTo()`](/de/docs/Web/API/VideoFrame/copyTo)
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- [`VideoFrame.clone()`](/de/docs/Web/API/VideoFrame/clone)
  - : Erstellt ein neues `VideoFrame`-Objekt mit Bezug auf die gleiche Medienressource wie das Original.
- [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)
  - : Löscht alle Zustände und gibt die Referenz zur Medienressource frei.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert. Sehen Sie das vollständige Beispiel und lesen Sie mehr darüber in dem Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

```js
let frame_counter = 0;

const track = stream.getVideoTracks()[0];
const media_processor = new MediaStreamTrackProcessor(track);

const reader = media_processor.readable.getReader();
while (true) {
  const result = await reader.read();
  if (result.done) break;

  let frame = result.value;
  if (encoder.encodeQueueSize > 2) {
    // Too many frames in flight, encoder is overwhelmed
    // let's drop this frame.
    frame.close();
  } else {
    frame_counter++;
    const insert_keyframe = frame_counter % 150 === 0;
    encoder.encode(frame, { keyFrame: insert_keyframe });
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
