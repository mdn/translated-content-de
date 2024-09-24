---
title: WebCodecs-API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: c29cee3dcb0d0e66093dd0c18aa82e0eab9d6d14
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs-API** bietet Webentwicklern Low-Level-Zugriff auf die einzelnen Frames eines Videostreams und Stücke von Audio.
Sie ist nützlich für Webanwendungen, die vollständige Kontrolle darüber benötigen, wie Medien verarbeitet werden.
Zum Beispiel Video- oder Audioeditoren und Videokonferenzen.

## Konzepte und Verwendung

Viele Web-APIs verwenden intern Mediencodecs.
Zum Beispiel die [Web Audio API](/de/docs/Web/API/Web_Audio_API) und die [WebRTC API](/de/docs/Web/API/WebRTC_API).
Diese APIs erlauben Entwicklern jedoch nicht, mit einzelnen Frames eines Videostreams und ungemischten Stücken von codiertem Audio oder Video zu arbeiten.

Webentwickler haben typischerweise WebAssembly verwendet, um diese Einschränkung zu umgehen und um mit Mediencodecs im Browser zu arbeiten.
Dies erfordert jedoch zusätzliche Bandbreite, um Codecs herunterzuladen, die bereits im Browser vorhanden sind, was die Leistung und Energieeffizienz reduziert und zusätzlichen Entwicklungsaufwand verursacht.

Die WebCodecs-API bietet Zugriff auf Codecs, die bereits im Browser vorhanden sind.
Sie bietet Zugriff auf rohe Videoframes, Audiostückdaten, Bilddecoder, Audio- und Videocodierer und -decoder.

### Verarbeitungsmodell

Die WebCodecs-API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz
eines Codierers oder Decoders hat eine interne, unabhängige Verarbeitungsschlange. Wenn eine beträchtliche Menge Arbeit in die Warteschlange gestellt wird, ist es wichtig, dieses Modell im Auge zu behalten.

Methoden mit den Namen `configure()`, `encode()`, `decode()` und `flush()` funktionieren asynchron, indem sie Steuerungsnachrichten an das Ende der Warteschlange anhängen, während Methoden mit den Namen `reset()` und `close()` synchron alle ausstehenden Arbeiten abbrechen und die Verarbeitungsschlange leeren. Nach `reset()` kann weitere Arbeit nach einem Aufruf von `configure()` in die Warteschlange gestellt werden, aber `close()` ist eine permanente Operation.

Methoden mit dem Namen `flush()` können verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zum Zeitpunkt des Aufrufs von `flush()` ausstanden. Es sollte jedoch im Allgemeinen nur aufgerufen werden, wenn alle gewünschten Arbeiten in die Warteschlange gestellt wurden. Es ist nicht dazu gedacht, in regelmäßigen Abständen Fortschritte zu erzwingen. Ein unnötiger Aufruf beeinträchtigt die Codiererqualität und zwingt Decoder dazu, dass der nächste Eingang ein Schlüsselbild sein muss.

### Demuxing

Derzeit gibt es keine API zum Demuxen von Mediencontainern. Entwickler, die mit containerisierten Medien arbeiten, müssen ihre eigenen Implementierungen entwickeln oder Drittanbieterbibliotheken verwenden. Zum Beispiel können [MP4Box.js](https://github.com/gpac/mp4box.js/) oder [jswebm](https://github.com/jscodec/jswebm) verwendet werden, um Audio- und Videodaten in {{domxref("EncodedAudioChunk")}} und {{domxref("EncodedVideoChunk")}} Objekte zu demuxen.

## Schnittstellen

- {{domxref("AudioDecoder")}}
  - : Dekodiert {{domxref("EncodedAudioChunk")}} Objekte.
- {{domxref("VideoDecoder")}}
  - : Dekodiert {{domxref("EncodedVideoChunk")}} Objekte.
- {{domxref("AudioEncoder")}}
  - : Kodiert {{domxref("AudioData")}} Objekte.
- {{domxref("VideoEncoder")}}
  - : Kodiert {{domxref("VideoFrame")}} Objekte.
- {{domxref("EncodedAudioChunk")}}
  - : Repräsentiert codecspezifische kodierte Audiobytes.
- {{domxref("EncodedVideoChunk")}}
  - : Repräsentiert codecspezifische kodierte Videobytes.
- {{domxref("AudioData")}}
  - : Repräsentiert nicht kodierte Audiodaten.
- {{domxref("VideoFrame")}}
  - : Repräsentiert einen Frame von nicht kodierten Videodaten.
- {{domxref("VideoColorSpace")}}
  - : Repräsentiert den Farbraum eines Videoframes.
- {{domxref("ImageDecoder")}}
  - : Packt Bilddaten aus und dekodiert sie, um auf die Sequenz von Frames in einem animierten Bild zuzugreifen.
- {{domxref("ImageTrackList")}}
  - : Repräsentiert die Liste der in dem Bild verfügbaren Tracks.
- {{domxref("ImageTrack")}}
  - : Repräsentiert einen einzelnen Bildtrack.

## Beispiele

Im folgenden Beispiel werden Frames von einem {{domxref("MediaStreamTrackProcessor")}} zurückgegeben und dann kodiert.
Sehen Sie das vollständige Beispiel und lesen Sie mehr darüber im Artikel [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs).

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
    // Zu viele Frames in Bearbeitung, Codierer ist überlastet
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

## Siehe auch

- [Videoverarbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs-API-Beispiele](https://w3c.github.io/webcodecs/samples/)
- [Echtzeit-Videobearbeitung mit WebCodecs und Streams: Verarbeitungspipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Videoframe-Verarbeitung im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
