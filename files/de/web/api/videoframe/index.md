---
title: VideoFrame
slug: Web/API/VideoFrame
l10n:
  sourceCommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{APIRef("Web Codecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **`VideoFrame`**-Schnittstelle der [Web Codecs API](/de/docs/Web/API/WebCodecs_API) repräsentiert einen Frame eines Videos.

`VideoFrame` ist ein [übertragbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects).

## Beschreibung

Ein `VideoFrame`-Objekt kann auf verschiedene Arten erstellt oder aufgerufen werden. Der {{domxref("MediaStreamTrackProcessor")}} unterteilt einen Medientrack in einzelne `VideoFrame`-Objekte.

Ein `VideoFrame` ist eine Bildquelle und hat einen Konstruktor, der jede andere Canvas-Quelle akzeptiert (
ein {{domxref("SVGImageElement")}},
ein {{domxref("HTMLVideoElement")}},
ein {{domxref("HTMLCanvasElement")}},
ein {{domxref("ImageBitmap")}},
ein {{domxref("OffscreenCanvas")}},
oder ein anderes `VideoFrame`).
Dies bedeutet, dass ein Frame aus einem Bild- oder Videoelement erstellt werden kann.

Ein zweiter Konstruktor ermöglicht die Erstellung eines `VideoFrame` aus seiner binären Pixelrepräsentation in einem {{jsxref("ArrayBuffer")}}, einem {{jsxref("TypedArray")}} oder einem {{jsxref("DataView")}}.

Erstellte Frames können dann in einen Medientrack umgewandelt werden, zum Beispiel mit der {{domxref("MediaStreamTrackGenerator")}}-Schnittstelle, die einen Medientrack aus einem Strom von Frames erstellt.

## Konstruktor

- {{domxref("VideoFrame.VideoFrame", "VideoFrame()")}}
  - : Erstellt ein neues `VideoFrame`-Objekt.

## Instanz-Eigenschaften

- {{domxref("VideoFrame.format")}} {{ReadOnlyInline}}
  - : Gibt das Pixelformat des `VideoFrame` zurück.
- {{domxref("VideoFrame.codedWidth")}} {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich unsichtbaren Abstands, und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
- {{domxref("VideoFrame.codedHeight")}} {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` in Pixeln zurück, möglicherweise einschließlich unsichtbaren Abstands, und bevor mögliche Verhältnis-Anpassungen berücksichtigt werden.
- {{domxref("VideoFrame.codedRect")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("DOMRectReadOnly")}} mit der Breite und Höhe zurück, die `codedWidth` und `codedHeight` entsprechen.
- {{domxref("VideoFrame.visibleRect")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("DOMRectReadOnly")}} zurück, das das sichtbare Rechteck der Pixel für dieses `VideoFrame` beschreibt.
- {{domxref("VideoFrame.displayWidth")}} {{ReadOnlyInline}}
  - : Gibt die Breite des `VideoFrame` zurück, wenn es nach der Anwendung von {{glossary("Aspektverhältnis")}}-Anpassungen angezeigt wird.
- {{domxref("VideoFrame.displayHeight")}} {{ReadOnlyInline}}
  - : Gibt die Höhe des `VideoFrame` zurück, wenn es nach der Anwendung von Aspektverhältnis-Anpassungen angezeigt wird.
- {{domxref("VideoFrame.duration")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die die Dauer des Videos in Mikrosekunden angibt.
- {{domxref("VideoFrame.timestamp")}} {{ReadOnlyInline}}
  - : Gibt eine ganze Zahl zurück, die den Zeitstempel des Videos in Mikrosekunden angibt.
- {{domxref("VideoFrame.colorSpace")}} {{ReadOnlyInline}}
  - : Gibt ein {{domxref("VideoColorSpace")}}-Objekt zurück.

## Instanz-Methoden

- {{domxref("VideoFrame.allocationSize()")}}
  - : Gibt die Anzahl der Bytes zurück, die erforderlich sind, um das `VideoFrame` zu speichern, gefiltert durch die in die Methode übergebenen Optionen.
- {{domxref("VideoFrame.copyTo()")}}
  - : Kopiert den Inhalt des `VideoFrame` in einen `ArrayBuffer`.
- {{domxref("VideoFrame.clone()")}}
  - : Erstellt ein neues `VideoFrame`-Objekt mit Verweis auf dieselbe Medienressource wie das Original.
- {{domxref("VideoFrame.close()")}}
  - : Löscht alle Zustände und gibt den Verweis auf die Medienressource frei.

## Beispiele

Im folgenden Beispiel werden Frames von einem {{domxref("MediaStreamTrackProcessor")}} zurückgegeben und dann codiert. Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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
    // Zu viele Frames in Bearbeitung, der Encoder ist überlastet
    // lassen Sie uns diesen Frame verwerfen.
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
