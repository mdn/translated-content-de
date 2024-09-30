---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs API** bietet Webentwicklern Low-Level-Zugriff auf die einzelnen Frames eines Videostreams und Audio-Chunks.
Sie ist nützlich für Webanwendungen, die volle Kontrolle darüber benötigen, wie Medien verarbeitet werden.
Zum Beispiel Video- oder Audio-Editoren und Videokonferenzen.

## Konzepte und Anwendung

Viele Web-APIs verwenden intern Mediencodecs.
Zum Beispiel die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und die [WebRTC API](/de/docs/Web/API/WebRTC_API).
Diese APIs erlauben es Entwicklern jedoch nicht, mit einzelnen Frames eines Videostreams und ungemischten, kodierten Audio- oder Videodaten zu arbeiten.

Webentwickler haben typischerweise WebAssembly verwendet, um diese Einschränkung zu umgehen
und mit Mediencodecs im Browser zu arbeiten.
Dies erfordert jedoch zusätzlichen Bandbreitenverbrauch, um bereits im Browser vorhandene Codecs herunterzuladen,
was die Leistung und Energieeffizienz reduziert und zusätzlichen Entwicklungsaufwand verursacht.

Die WebCodecs API bietet Zugriff auf Codecs, die bereits im Browser vorhanden sind.
Sie ermöglicht den Zugriff auf rohe Video-Frames, Audio-Daten-Chunks, Bild-Dekoder, Audio- und Video-Encoder und -Dekoder.

### Verarbeitungsmodell

Die WebCodecs API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz
eines Encoders oder Decoders pflegt eine interne, unabhängige Verarbeitungsschlange. Bei der Warteschlange einer erheblichen Menge an Arbeit ist es wichtig, dieses Modell im Hinterkopf zu behalten.

Methoden mit den Namen `configure()`, `encode()`, `decode()` und `flush()` arbeiten asynchron, indem sie Steuerungsnachrichten
ans Ende der Warteschlange anhängen, während Methoden mit den Namen `reset()` und `close()` synchron alle wartenden Aufgaben abbrechen und die
Verarbeitungsschlange leeren. Nach `reset()` kann mehr Arbeit nach einem Aufruf von `configure()` in die Warteschlange gestellt werden, aber `close()` ist eine endgültige Operation.

Methoden mit dem Namen `flush()` können verwendet werden, um auf die Fertigstellung aller Arbeiten zu warten, die zum Zeitpunkt des Aufrufs von `flush()` anstanden. Es sollte jedoch im Allgemeinen nur aufgerufen werden, wenn alle gewünschten Arbeiten in der Warteschlange sind. Es ist nicht dazu gedacht, Fortschritte in regelmäßigen Abständen zu erzwingen. Ein übermäßiger Aufruf beeinträchtigt die Encoder-Qualität und führt dazu, dass Decoder das nächste Eingabesignal als Keyframe erwarten.

### Demuxing

Derzeit gibt es keine API für das Demuxing von Mediencontainern. Entwickler, die mit containerisierten Medien arbeiten, müssen entweder ihre eigenen Implementierungen entwickeln oder Drittanbieter-Bibliotheken verwenden. Zum Beispiel können [MP4Box.js](https://github.com/gpac/mp4box.js/) oder [jswebm](https://github.com/jscodec/jswebm) verwendet werden, um Audio- und Videodaten in [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) und [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte zu demuxen.

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
  - : Repräsentiert unkodierte Audio-Daten.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Repräsentiert einen Frame unkodierter Video-Daten.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Repräsentiert den Farbraum eines Video-Frames.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Entpackt und dekodiert Bilddaten und ermöglicht den Zugriff auf die Sequenz von Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Repräsentiert die Liste der im Bild verfügbaren Tracks.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Repräsentiert einen individuellen Bild-Track.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert.
Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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

## Siehe auch

- [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API-Beispiele](https://w3c.github.io/webcodecs/samples/)
- [Echtzeit-Videobearbeitung mit WebCodecs und Streams: Verarbeitungs-Pipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video-Frame-Verarbeitung im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
