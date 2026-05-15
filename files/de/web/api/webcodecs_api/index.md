---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs API** ermöglicht es Webentwicklern, Video und Audio im Browser effizient zu enkodieren und dekodieren (unter Verwendung von Hardware-Beschleunigung) und mit sehr niedrigem Kontrollniveau (Verarbeitung auf Einzelbild-Basis).

Sie ist nützlich für Webanwendungen, die umfangreiche Medienverarbeitung durchführen oder bei denen eine niedrige Steuerungsebene darüber, wie Medien enkodiert werden, erforderlich ist. Dazu gehören browserbasierte Video- und Audiobearbeitung, sowie Live-Streaming und Videokonferenzen.

## Konzepte

Die WebCodecs API stellt browsernative Schnittstellen zur Verfügung, um rohe Videoframes, kodierte Videoframes sowie rohe und kodierte Audioinhalte darzustellen.

|             | Video                                                     | Audio                                                     |
| ----------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Raw**     | [`VideoFrame`](/de/docs/Web/API/VideoFrame)               | [`AudioData`](/de/docs/Web/API/AudioData)                 |
| **Encoded** | [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) | [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) |

Die WebCodecs API führt auch die Schnittstellen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) ein, die `EncodedVideoChunk`-Objekte in `VideoFrame`-Objekte und umgekehrt umwandeln.

![VideoEncoder und VideoDecoder](video-encoder-decoder.png)

Ebenso führt die WebCodecs API die Schnittstellen [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) und [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) ein, die `EncodedAudioChunk`-Objekte in `AudioData`-Objekte und umgekehrt umwandeln.

![AudioEncoder und AudioDecoder](audio-encoder-decoder.png)

Im Allgemeinen gibt es eine 1:1-Korrespondenz zwischen der rohen und kodierten Version jedes Medientyps. Das Dekodieren einer Anzahl von `EncodedVideoChunk`-Objekten ergibt die gleiche Anzahl von `VideoFrame`-Objekten (dies gilt auch für Audio).

### Video

Ein `VideoFrame` stellt ein Videoframe dar und ist mit den tatsächlichen Pixeldaten im Grafikspeicher des Geräts sowie mit Metadaten wie Zeitstempel und Dauer (in Mikrosekunden), Format und Auflösung verknüpft. Ein `VideoFrame` kann aus jeder Bildquelle konstruiert werden und kann auch mit einer der Canvas-Rendering-Methoden auf einen [`Canvas`](/de/docs/Web/API/Canvas_API) gerendert werden.

`EncodedVideoChunk` repräsentiert die kodierte (komprimierte) Version desselben Frames, verknüpft mit Binärdaten im regulären Speicher und denselben Metadaten. Der einzige Unterschied besteht darin, dass es ein zusätzliches Feld `type` hat, das entweder "key" oder "delta" sein kann und anzeigt, ob es einem [Schlüsselframe](https://webcodecsfundamentals.org/basics/encoded-video-chunk/#key-frames) entspricht. Ein `EncodedVideoChunk` speichert typischerweise 10 bis 100 Mal weniger Daten als sein entsprechendes rohes `VideoFrame`.

![VideoFrame und EncodedVideoChunk](video-frame.png)

### Audio

Ein `AudioData`-Objekt stellt eine Anzahl individueller Audiosamples dar (1024 ist eine typische Anzahl). Audiosample-Daten können als {{jsxref("Float32Array")}} über die Methode `copyTo` extrahiert werden. Es gibt keine direkte Integration mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API); jedoch können die extrahierten `Float32Array`-Samples direkt in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) für die Wiedergabe kopiert werden.

Ebenso repräsentiert das `EncodedAudioChunk` die kodierte (komprimierte) Version eines `AudioData`-Objekts, das komprimierte Audiosample-Daten enthält.

![AudioData und EncodedAudioChunk](audio-data.png)

### Verarbeitungsmodell

Die WebCodecs API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz eines Encoders oder Decoders unterhält eine interne, unabhängige Verarbeitungswarteschlange. Wenn Sie eine erhebliche Anzahl kodierter Chunks zur Dekodierung oder Frames/Samples zur Kodierung in die Warteschlange stellen, ist es wichtig, dieses Modell im Auge zu behalten.

Methoden mit den Namen [`configure()`](/de/docs/Web/API/VideoEncoder/configure), [`encode()`](/de/docs/Web/API/VideoEncoder/encode), [`decode()`](/de/docs/Web/API/VideoDecoder/decode) und [`flush()`](/de/docs/Web/API/VideoEncoder/flush) arbeiten asynchron, indem sie Steuerungsmeldungen ans Ende der Warteschlange anhängen, während Methoden mit den Namen [`reset()`](/de/docs/Web/API/VideoEncoder/reset) und [`close()`](/de/docs/Web/API/VideoEncoder/close) synchron alle ausstehenden Arbeiten abbrechen und die Verarbeitungswarteschlange löschen. Nach einem `reset()` kann weitere Arbeit eingeplant werden, nachdem `configure()` aufgerufen wurde, aber `close()` ist eine endgültige Operation. Diese Methoden funktionieren sowohl für Audio- als auch für Video-Decoder/Encoder.

Die Methode `flush()` kann verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zu dem Zeitpunkt, an dem `flush()` aufgerufen wurde, ausstehend waren. Im Allgemeinen sollte sie jedoch nur aufgerufen werden, wenn alle gewünschten Arbeiten eingeplant sind – sie ist nicht dazu gedacht, Fortschritt in regelmäßigen Abständen zu erzwingen. Ein unnötiger Aufruf würde die Encoder-Qualität beeinflussen und bei Decodern erfordern, dass der nächste Eingang ein Schlüsselframe ist.

### Codecs

Ein Codec ist ein spezifischer Algorithmus zum Kodieren (Komprimieren) und Dekodieren (Dekomprimieren) von Video und Audio. Es gibt mehrere Industriestandards für Video-Codecs und eine separate Reihe von Audio-Codecs. Hier sind die wichtigsten, die von der WebCodecs API unterstützt werden:

#### Video-Codecs

- H.264 (AVC)
  - : Der am weitesten verbreitete Video-Codec. Die meisten MP4-Dateien verwenden H.264.
- VP9
  - : Open Source, entwickelt von Google. Bessere Komprimierung als H.264. Häufig auf YouTube und in WebM-Dateien verwendet.
- AV1
  - : Der neueste Open-Source-Codec mit besserer Komprimierung als VP9. Breite Dekoder-Unterstützung; die Unterstützung von Hardware-Encodern ist jedoch noch begrenzt.
- H.265 (HEVC)
  - : Bessere Komprimierung als H.264, aber mit erheblichen Lücken in der Browserunterstützung außerhalb von Apple-Plattformen.

#### Audio-Codecs

- Opus
  - : Open Source, niedrige Latenz. Die empfohlene Wahl für die meisten WebCodecs-Audio-Enkodierungen.
- AAC
  - : Weit verbreitet. Häufig in MP4-Dateien.
- MP3
  - : Weit verbreitet für das Dekodieren, aber nicht als Encoder in WebCodecs verfügbar.
- PCM
  - : Unkomprimiertes Audio. Kein Qualitätsverlust, aber große Dateigrößen.

Die WebCodecs-Spezifikation unterstützt eine bestimmte Auswahl an Codecs, und einzelne Geräte und Browser können nur eine Teilmenge davon unterstützen. Encoder und Decoder müssen mit vollständig spezifizierten Codec-Strings (wie `"vp09.00.40.08.00"` für VP9 oder `"avc1.4d0034"` für H.264) anstelle von ungenauen Codec-Namen wie `"vp9"` oder `"h264"` konfiguriert werden. Der [Leitfaden zur Auswahl des richtigen Codecs](/de/docs/Web/API/WebCodecs_API/Codec_selection) bietet Anleitung bei der Auswahl des richtigen Codec-Strings (siehe die [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) (webcodecsfundamentals.org) für eine vollständige Liste von Codec-Strings und deren Browserunterstützung).

### Muxing und Demuxing

Die WebCodecs API befasst sich nur mit dem Kodieren und Dekodieren, wobei kodierte Chunks nur binäre Daten darstellen. Sie bietet keine integrierte Möglichkeit, `EncodedVideoChunk`-Objekte aus einer Videodatei zu lesen oder sie in eine abspielbare Videodatei zu schreiben.

Das Lesen kodierter Chunks aus einer Videodatei ist ein völlig anderer Prozess namens Demuxing, und um `EncodedVideoChunk`-Objekte aus einer Videodatei abzurufen, müssen Sie eine Demuxing-Bibliothek wie [Mediabunny](https://mediabunny.dev/) oder [web-demuxer](https://github.com/bilibili/web-demuxer) verwenden.

![Demuxer](decoder-demuxer.png)

Diese Bibliotheken befolgen die Spezifikationen des Videocontainers (z.B. webm, mp4), um die Track-Daten und Byte-Offsets für jeden kodierten Chunk zu extrahieren und Methoden bereitzustellen, um die tatsächlichen Chunks aus der Rohdatei zu extrahieren.

Ebenso benötigen Sie zum Schreiben in eine abspielbare Videodatei eine Muxing-Bibliothek, wobei [Mediabunny](https://mediabunny.dev/) die Hauptoption ist. Muxing-Bibliotheken handhaben das Formatieren der binären kodierten Daten und das Platzieren an der richtigen Byte-Position im Ausgabedatenstrom gemäß der Containerspezifikation, sodass das Ausgabevideo abspielbar ist.

Weitere Informationen zu Muxing und Demuxing finden Sie im [Leitfaden zu Muxing und Demuxing](https://webcodecsfundamentals.org/basics/muxing/) (webcodecsfundamentals.org).

## Leitfäden

- [Videobearbeitungskonzepte](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
  - : Ein kurzer Leitfaden zur Videobearbeitung, behandelt Codecs und Container, Muxing und Demuxing sowie konzeptionelle Informationen, die erklären, wie die WebCodecs API diese Konzepte implementiert.
- [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
  - : Ein ausführlicher Leitfaden zur tatsächlichen Nutzung der WebCodecs API, einschließlich der Erstellung und Konfiguration von Encodern und Decodern, der Erstellung und Nutzung von Videoframes und der Extraktion von Samples aus `AudioData`.
- [Codec-Auswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
  - : Die WebCodecs API erfordert Codec-Strings — präzise Bezeichner, die nicht nur die Codec-Familie, sondern auch das Profil, die Ebene und andere Parameter spezifizieren. Dieser Leitfaden erklärt, wie Codec-Strings funktionieren und wie man den richtigen Codec für häufige Anwendungsfälle auswählt.

## Schnittstellen

- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
  - : Dekodiert [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekte.
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
  - : Dekodiert [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte.
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
  - : Enkodiert [`AudioData`](/de/docs/Web/API/AudioData)-Objekte.
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
  - : Enkodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte.
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
  - : Repräsentiert codec-spezifische kodierte Audio-Bytes.
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
  - : Repräsentiert codec-spezifische kodierte Video-Bytes.
- [`AudioData`](/de/docs/Web/API/AudioData)
  - : Repräsentiert unkodierte Audio-Daten.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Repräsentiert ein Frame unkodierter Videodaten.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Repräsentiert den Farbraum eines Videoframes.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Packt und dekodiert Bilddaten aus und ermöglicht den Zugriff auf die Sequenz von Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Repräsentiert die Liste der in einem Bild verfügbaren Tracks.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Repräsentiert einen einzelnen Bild-Track.

## Beispiele

### Grundlegende Nutzung

Um einen `VideoEncoder` zu instanziieren, übergeben wir ein Objekt, das eine Rückruffunktion spezifiziert, die aufgerufen wird, wenn `EncodedVideoChunk`-Instanzen zur Verarbeitung verfügbar sind, und eine Fehlerfunktion, die aufgerufen wird, wenn Fehler auftreten.
Dies wird im folgenden Code gezeigt:

```js
const encoder = new VideoEncoder({
  output(chunk, meta) {
    // Do something with chunk, typically send to muxing library
  },
  error(e) {
    console.warn(e);
  },
});
```

Sie müssen dann den Encoder mit dem Codec-Parameter und verschiedenen anderen Feldern konfigurieren.

```js
encoder.configure({
  codec: "vp09.00.40.08.00", // See codec selection guide
  width: 1280,
  height: 720,
  bitrate: 1_000_000, // 1 Mbps
  framerate: 30,
});
```

Anschließend können Sie mit dem Kodieren von Frames zum Encoder beginnen. Sie können ein `VideoFrame` von einem `Canvas` aus konstruieren.

```js
for (let i = 0; i < 60; i++) {
  const frame = new VideoFrame(canvas, { timestamp: (i * 1e6) / 30 }); // 30 fps, in microseconds
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
}
```

Siehe [Verwendung der WebCodecs API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API) für weitere Beispiele.

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
- [WebCodecsFundamentals](https://webcodecsfundamentals.org/)
- [Echtzeit-Videobearbeitung mit WebCodecs und Streams: Verarbeitungs-Pipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Videoframe-Webverarbeitung – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
