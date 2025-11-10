---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs API** gibt Webentwicklern Zugriff auf niedriger Ebene auf die einzelnen Frames eines Videostreams und Stücke von Audio.
Sie ist nützlich für Webanwendungen, die volle Kontrolle darüber benötigen, wie Medien verarbeitet werden.
Zum Beispiel Video- oder Audioeditoren und Videokonferenzen.

## Konzepte und Verwendung

Viele Web-APIs verwenden intern Mediencodecs.
Zum Beispiel die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und die [WebRTC API](/de/docs/Web/API/WebRTC_API).
Diese APIs erlauben es Entwicklern jedoch nicht, mit einzelnen Frames eines Videostreams und ungemischten Stücken von kodiertem Audio oder Video zu arbeiten.

Webentwickler haben typischerweise WebAssembly verwendet, um diese Einschränkung zu umgehen,
und um mit Mediencodecs im Browser zu arbeiten.
Dies erfordert jedoch zusätzliche Bandbreite, um Codecs herunterzuladen, die bereits im Browser existieren,
was die Leistung und Energieeffizienz reduziert und zusätzlichen Entwicklungsaufwand verursacht.

Die WebCodecs API bietet Zugriff auf Codecs, die bereits im Browser vorhanden sind.
Sie bietet Zugriff auf rohe Video-Frames, Audio-Datenblöcke, Bilddecoder sowie Audio- und Videokodierer und -dekodierer.

### Verarbeitungsmodell

Die WebCodecs API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz
eines Kodierers oder Dekodierers unterhält eine interne, unabhängige Verarbeitungswarteschlange. Bei der Warteschlange einer erheblichen Menge an Arbeit ist es wichtig, dieses Modell im Kopf zu behalten.

Methoden mit den Namen `configure()`, `encode()`, `decode()` und `flush()` arbeiten asynchron, indem sie Steuerbefehle
an das Ende der Warteschlange anhängen, während Methoden mit den Namen `reset()` und `close()` synchron alle anstehenden Arbeiten abbrechen und die
Verarbeitungswarteschlange löschen. Nach `reset()` kann nach einem Aufruf von `configure()` weitere Arbeit in die Warteschlange gestellt werden, aber `close()` ist eine permanente Operation.

Methoden mit dem Namen `flush()` können verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zum Zeitpunkt des Aufrufs von `flush()` anstanden. Sie sollte jedoch generell nur dann aufgerufen werden, wenn alle gewünschten Arbeiten in die Warteschlange gestellt wurden. Sie ist nicht gedacht, um Fortschritt in regelmäßigen Abständen zu erzwingen. Ein unnötiger Aufruf wird die Qualität des Kodierers beeinflussen und dazu führen, dass Dekodierer erfordern, dass der nächste Input ein Schlüsselbild ist.

### Demultiplexing

Derzeit gibt es keine API für das Demultiplexen von Mediencontainern. Entwickler, die mit containerisierter Medien arbeiten, müssen eigene Lösungen implementieren oder Drittanbieter-Bibliotheken verwenden. Z.B. können [MP4Box.js](https://github.com/gpac/mp4box.js/) oder [jswebm](https://github.com/jscodec/jswebm) verwendet werden, um Audio- und Videodaten in [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) und [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte zu demultiplexen.

## Schnittstellen

- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
  - : Dekodiert [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) Objekte.
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
  - : Dekodiert [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte.
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
  - : Kodiert [`AudioData`](/de/docs/Web/API/AudioData) Objekte.
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
  - : Kodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekte.
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
  - : Repräsentiert codec-spezifische kodierte Audio-Bytes.
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
  - : Repräsentiert codec-spezifische kodierte Video-Bytes.
- [`AudioData`](/de/docs/Web/API/AudioData)
  - : Repräsentiert unkodierte Audiodaten.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Repräsentiert einen Frame von unkodierten Videodaten.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Repräsentiert den Farbraum eines Videoframes.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Entpackt und dekodiert Bilddaten und gibt Zugriff auf die Sequenz von Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Repräsentiert die Liste der verfügbaren Spuren im Bild.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Repräsentiert eine einzelne Bildspur.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert.
Sehen Sie das vollständige Beispiel und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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

## Siehe auch

- [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API-Beispiele](https://w3c.github.io/webcodecs/samples/)
- [Echtzeit-Videoverarbeitung mit WebCodecs und Streams: Verarbeitungspipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video-Frame-Verarbeitung im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
