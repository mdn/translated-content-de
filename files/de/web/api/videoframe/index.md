---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoFrame`**-Schnittstelle der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert ein Einzelbild eines Videos.

`VideoFrame` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Konstruktor

- [`VideoFrame()`](/de/docs/Web/API/VideoFrame/VideoFrame)
  - : Erstellt ein neues `VideoFrame`-Objekt.

## Instanzeigenschaften

- [`VideoFrame.format`](/de/docs/Web/API/VideoFrame/format) {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- [`VideoFrame.codedWidth`](/de/docs/Web/API/VideoFrame/codedWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich nicht sichtbarer Auffüllung und bevor mögliche Anpassungen des Seitenverhältnisses berücksichtigt werden.
- [`VideoFrame.codedHeight`](/de/docs/Web/API/VideoFrame/codedHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich nicht sichtbarer Auffüllung und bevor mögliche Anpassungen des Seitenverhältnisses berücksichtigt werden.
- [`VideoFrame.codedRect`](/de/docs/Web/API/VideoFrame/codedRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, dessen Breite und Höhe `codedWidth` und `codedHeight` entsprechen.
- [`VideoFrame.visibleRect`](/de/docs/Web/API/VideoFrame/visibleRect) {{ReadOnlyInline}}
  - : Gibt ein [`DOMRectReadOnly`](/de/docs/Web/API/DOMRectReadOnly) zurück, das den sichtbaren Pixelbereich dieses `VideoFrame` beschreibt.
- [`VideoFrame.displayWidth`](/de/docs/Web/API/VideoFrame/displayWidth) {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` bei der Anzeige nach Anpassung des {{Glossary("aspect_ratio", "Seitenverhältnisses")}} zurück.
- [`VideoFrame.displayHeight`](/de/docs/Web/API/VideoFrame/displayHeight) {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` bei der Anzeige nach Anpassung des Seitenverhältnisses zurück.
- [`VideoFrame.duration`](/de/docs/Web/API/VideoFrame/duration) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die die Dauer des Videos in Mikrosekunden angibt.
- [`VideoFrame.timestamp`](/de/docs/Web/API/VideoFrame/timestamp) {{ReadOnlyInline}}
  - : Gibt eine Ganzzahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.
- [`VideoFrame.colorSpace`](/de/docs/Web/API/VideoFrame/colorSpace) {{ReadOnlyInline}}
  - : Gibt ein [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)-Objekt zurück.
- [`VideoFrame.flip`](/de/docs/Web/API/VideoFrame/flip) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt zurück, ob das `VideoFrame` horizontal gespiegelt ist.
- [`VideoFrame.rotation`](/de/docs/Web/API/VideoFrame/rotation) {{ReadOnlyInline}} {{experimental_inline}}
  - : Gibt die auf das `VideoFrame` angewendete Drehung im Uhrzeigersinn in Grad (0, 90, 180 oder 270) zurück. Beliebige Zahlen (auch negative) werden auf die nächste Vierteldrehung gerundet.

## Instanzmethoden

- [`VideoFrame.allocationSize()`](/de/docs/Web/API/VideoFrame/allocationSize)
  - : Gibt die Anzahl der Bytes zurück, die benötigt werden, um das `VideoFrame` gemäß den an die Methode übergebenen Optionen zu speichern.
- [`VideoFrame.copyTo()`](/de/docs/Web/API/VideoFrame/copyTo)
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- [`VideoFrame.clone()`](/de/docs/Web/API/VideoFrame/clone)
  - : Erstellt ein neues `VideoFrame`-Objekt, das auf dieselbe Medienressource wie das Original verweist.
- [`VideoFrame.close()`](/de/docs/Web/API/VideoFrame/close)
  - : Löscht alle Zustände und gibt die Referenz auf die Medienressource frei.
- [`VideoFrame.metadata()`](/de/docs/Web/API/VideoFrame/metadata) {{experimental_inline}}
  - : Gibt die mit dem `VideoFrame` verknüpften Metadaten zurück.

## Beschreibung

Ein `VideoFrame`-Objekt kann auf verschiedene Weise erstellt oder abgerufen werden. Der [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zerlegt eine Medienspur in einzelne `VideoFrame`-Objekte.

Ein `VideoFrame` ist eine Bildquelle und verfügt über einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein [`SVGImageElement`](/de/docs/Web/API/SVGImageElement),
ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement),
ein [`HTMLCanvasElement`](/de/docs/Web/API/HTMLCanvasElement),
ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap),
ein [`OffscreenCanvas`](/de/docs/Web/API/OffscreenCanvas)
oder ein anderes `VideoFrame`).
Das bedeutet, dass ein Einzelbild aus einem Bild- oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht es, ein `VideoFrame` aus seiner binären Pixeldarstellung in einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}} zu erstellen.

Erstellte Einzelbilder können anschließend in eine Medienspur umgewandelt werden, beispielsweise mit der [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator)-Schnittstelle, die aus einem Strom von Einzelbildern eine Medienspur erstellt.

## Beispiele

Im folgenden Beispiel werden Einzelbilder von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und anschließend codiert. Das vollständige Beispiel und weitere Informationen dazu finden Sie im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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
