---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`VideoFrame`**-Interface der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Frame eines Videos.

`VideoFrame` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein `VideoFrame`-Objekt kann auf verschiedene Weise erstellt oder aufgerufen werden. Der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) unterteilt eine Medienspur in einzelne `VideoFrame`-Objekte.

Ein `VideoFrame` ist eine Bildquelle und hat einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas),
oder ein anderes `VideoFrame`).
Das bedeutet, dass ein Frame von einem Bild- oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht die Erstellung eines `VideoFrame` aus seiner binären Pixel-Darstellung in einem {{jsxref("ArrayBuffer")}}, einer {{jsxref("TypedArray")}}, oder einer {{jsxref("DataView")}}.

Erstellte Frames können dann in eine Mediendatei umgewandelt werden, zum Beispiel mit dem Interface [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator), das eine Mediendatei aus einem Stream von Frames erstellt.

## Konstruktor

- [`VideoFrame()`](/de/docs/Web/API/VideoFrame/VideoFrame)
  - : Erstellt ein neues `VideoFrame`-Objekt.

## Instanz-Eigenschaften

- [`VideoFrame.format`](/de/docs/Web/API/VideoFrame/format) {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, einschließlich eventuell nicht sichtbarer Auffüllungen und vor möglichen Verhältnis-Anpassungen.
- [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, einschließlich eventuell nicht sichtbarer Auffüllungen und vor möglichen Verhältnis-Anpassungen.
- [`VideoFrame.codedRect`](/de/docs/Web/API/VideoFrame/codedRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, dessen Breite und Höhe mit `codedWidth` und `codedHeight` übereinstimmen.
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das das sichtbare Rechteck der Pixel für dieses `VideoFrame` beschreibt.
- [`VideoFrame.displayWidth`](/de/docs/Web/API/VideoFrame/displayWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` zurück, wenn es nach Anwendung der {{Glossary("aspect_ratio", "Seitenverhältnis-")}}Anpassungen angezeigt wird.
- [`VideoFrame.displayHeight`](/de/docs/Web/API/VideoFrame/displayHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` zurück, wenn es nach Anwendung der Seitenverhältnisanpassungen angezeigt wird.
- [`VideoFrame.duration`](/de/docs/Web/API/VideoFrame/duration) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Dauer des Videos in Mikrosekunden angibt.
- [`VideoFrame.timestamp`](/de/docs/Web/API/VideoFrame/timestamp) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.
- [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) {{ReadOnlyInline}}
  - : Gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Objekt zurück.
- [`VideoFrame.flip`](/de/docs/Web/API/VideoFrame/flip) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt zurück, ob das `VideoFrame` horizontal gespiegelt ist.
- [`VideoFrame.rotation`](/de/docs/Web/API/VideoFrame/rotation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die Drehung (0, 90, 180 oder 270) im Uhrzeigersinn angewendet auf das `VideoFrame` zurück. Beliebige Zahlen (einschließlich negativer) werden auf die nächste Vierteldrehung gerundet.

## Instanz-Methoden

- [`VideoFrame.allocationSize()`](/de/docs/Web/API/VideoFrame/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die erforderlich sind, um das `VideoFrame` entsprechend der durch die Methode übergebenen Optionen zu halten.
- [`VideoFrame.copyTo()`](/de/docs/Web/API/VideoFrame/copyTo)
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- [`VideoFrame.clone()`](/de/docs/Web/API/VideoFrame/clone)
  - : Erstellt ein neues `VideoFrame`-Objekt mit Verweis auf die gleiche Medienquelle wie das Original.
- [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)
  - : Löscht alle Zustände und gibt den Verweis auf die Medienquelle frei.

## Beispiele

Im folgenden Beispiel werden Frames aus einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann codiert. Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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
- [WebCodecs-Beispiele](https://w3c.github.io/webcodecs/samples/)
