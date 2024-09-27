---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs API** gibt Webentwicklern einfachen Zugriff auf die einzelnen Frames eines Videostreams und Abschnitte von Audio.
Sie ist nützlich für Webanwendungen, die eine vollständige Kontrolle über die Art und Weise der Medienverarbeitung erfordern.
Beispielsweise Video- oder Audio-Editoren und Videokonferenzen.

## Konzepte und Verwendung

Viele Web-APIs nutzen intern Medien-Codecs.
Zum Beispiel die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und die [WebRTC API](/de/docs/Web/API/WebRTC_API).
Diese APIs erlauben es Entwicklern jedoch nicht, mit einzelnen Frames eines Videostreams und ungemischten Abschnitten von kodiertem Audio oder Video zu arbeiten.

Webentwickler haben typischerweise WebAssembly verwendet, um diese Einschränkung zu umgehen und um mit Medien-Codecs im Browser zu arbeiten.
Dies erfordert jedoch zusätzliche Bandbreite, um Codecs herunterzuladen, die bereits im Browser vorhanden sind,
wodurch die Leistung und Energieeffizienz verringert und zusätzlicher Entwicklungsaufwand verursacht wird.

Die WebCodecs API bietet Zugriff auf Codecs, die bereits im Browser vorhanden sind.
Sie ermöglicht den Zugriff auf rohe Videoframes, Abschnitte von Audiodaten, Bilddekomprimierer, Audio- und Videokodierer und Dekodierer.

### Verarbeitungsmodell

Die WebCodecs API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz
eines Kodierers oder Dekodierers verwaltet eine interne, unabhängige Verarbeitungswarteschlange. Wenn eine erhebliche Menge an Arbeit eingereiht wird, ist es wichtig, dieses Modell im Hinterkopf zu behalten.

Methoden mit den Namen `configure()`, `encode()`, `decode()` und `flush()` arbeiten asynchron, indem sie Steuerungsnachrichten ans Ende der Warteschlange anhängen, während Methoden mit den Namen `reset()` und `close()` alle ausstehenden Arbeiten synchron abbrechen und die
Verarbeitungswarteschlange löschen. Nach `reset()` können nach einem Aufruf von `configure()` weitere Arbeiten eingereiht werden, `close()` ist jedoch ein permanenter Vorgang.

Methoden mit dem Namen `flush()` können verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zum Zeitpunkt des Aufrufs von `flush()` anstanden. Es sollte jedoch generell nur dann aufgerufen werden, wenn alle gewünschten Arbeiten eingereiht sind. Es ist nicht dafür gedacht, Fortschritte in regelmäßigen Abständen zu erzwingen. Ein unnötiger Aufruf beeinträchtigt die Qualität des Kodierers und zwingt Dekodierer dazu, dass der nächste Eingang ein Schlüsselbild sein muss.

### Demultiplexen

Derzeit gibt es keine API zum Demultiplexen von Mediencontainern. Entwickler, die mit containerisierten Medien arbeiten, müssen ihre eigenen Implementierungen erstellen oder Drittanbieter-Bibliotheken verwenden. Beispielsweise können [MP4Box.js](https://github.com/gpac/mp4box.js/) oder [jswebm](https://github.com/jscodec/jswebm) zum Demultiplexen von Audio- und Videodaten in [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) und [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte verwendet werden.

## Schnittstellen

- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
  - : Decodiert [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) Objekte.
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
  - : Decodiert [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) Objekte.
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
  - : Kodiert [`AudioData`](/de/docs/Web/API/AudioData) Objekte.
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
  - : Kodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekte.
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
  - : Stellt codecspezifische kodierte Audio-Bytes dar.
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
  - : Stellt codecspezifische kodierte Video-Bytes dar.
- [`AudioData`](/de/docs/Web/API/AudioData)
  - : Stellt nicht kodierte Audiodaten dar.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Stellt einen Frame nicht kodierter Videodaten dar.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Stellt den Farbraum eines Video-Frames dar.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Entpackt und decodiert Bilddaten und gibt Zugriff auf die Sequenz von Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Stellt die Liste der verfügbaren Tracks im Bild dar.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Stellt einen einzelnen Bildtrack dar.

## Beispiele

Im folgenden Beispiel werden Frames von einem [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) zurückgegeben und dann kodiert.
Sehen Sie sich das vollständige Beispiel an und lesen Sie mehr darüber im Artikel [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
- [Echtzeit-Videoverarbeitung mit WebCodecs und Streams: Verarbeitungspipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Videoframe-Verarbeitung im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
