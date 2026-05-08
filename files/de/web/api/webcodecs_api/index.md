---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: 98b1f612078d2716d9330e36c74351bddd77fa05
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs API** ermöglicht es Webentwicklern, Video und Audio im Browser effizient zu kodieren und zu dekodieren (unter Verwendung von Hardwarebeschleunigung) und mit sehr niedrigem Steuerungsaufwand (Verarbeitung pro Frame).

Sie ist nützlich für Webanwendungen, die intensive Medienverarbeitung betreiben oder die eine niedrige Kontrollstufe darüber benötigen, wie Medien kodiert werden. Dies umfasst browserbasierte Video- und Audiobearbeitung sowie Live-Streaming und Videokonferenzen.

## Konzepte

Die WebCodecs API stellt browsernative Schnittstellen zur Verfügung, um rohe Videoframes, kodierte Videoframes sowie rohe und kodierte Audiodateien darzustellen.

|             | Video                                                     | Audio                                                     |
| ----------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Roh**     | [`VideoFrame`](/de/docs/Web/API/VideoFrame)               | [`AudioData`](/de/docs/Web/API/AudioData)                 |
| **Kodiert** | [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) | [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) |

Die WebCodecs API führt ebenfalls die Schnittstellen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) ein, die `EncodedVideoChunk`-Objekte in `VideoFrame`-Objekte und umgekehrt umwandeln.

![VideoEncoder und VideoDecoder](video-encoder-decoder.png)

Gleichermaßen führt die WebCodecs API die Schnittstellen [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) und [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) ein, die `EncodedAudioChunk`-Objekte in `AudioData`-Objekte und umgekehrt umwandeln.

![AudioEncoder und AudioDecoder](audio-encoder-decoder.png)

In der Regel gibt es eine 1:1-Entsprechung zwischen den rohen und kodierten Versionen jedes Medientyps. Das Dekodieren einer Anzahl von `EncodedVideoChunk`-Objekten führt zu derselben Anzahl von `VideoFrame`-Objekten (und dies gilt auch für Audio).

### Video

Ein `VideoFrame` repräsentiert ein Videoframe und ist mit den tatsächlichen Pixeldaten im Grafikspeicher des Geräts sowie Metadaten wie Zeitstempel und Dauer (in Mikrosekunden), Format und Auflösung verbunden. Ein `VideoFrame` kann von jeder Bildquelle konstruiert und mit Hilfe einer der Canvas-Rendering-Methoden auf ein [`Canvas`](/de/docs/Web/API/Canvas_API) gerendert werden.

`EncodedVideoChunk` repräsentiert die kodierte (komprimierte) Version desselben Frames und ist mit Binärdaten im regulären Speicher und denselben Metadaten verbunden. Der einzige Unterschied besteht darin, dass es über ein zusätzliches Feld verfügt: `type`, das entweder "key" oder "delta" sein kann und angibt, ob es einem [Schlüsselframe](https://webcodecsfundamentals.org/basics/encoded-video-chunk/#key-frames) entspricht. Ein `EncodedVideoChunk` speichert in der Regel 10 bis 100 Mal weniger Daten als sein entsprechendes rohes `VideoFrame`.

![VideoFrame und EncodedVideoChunk](video-frame.png)

### Audio

Ein `AudioData`-Objekt repräsentiert eine Anzahl von einzelnen Audiosamples (1024 ist eine typische Anzahl). Audiosample-Daten können über die Methode `copyTo` als {{jsxref("Float32Array")}} extrahiert werden. Es gibt keine direkte Integration mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API); die extrahierten `Float32Array`-Samples können jedoch direkt in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) für die Wiedergabe kopiert werden.

Gleichzeitig repräsentiert das `EncodedAudioChunk` die kodierte (komprimierte) Version eines `AudioData`-Objekts, das komprimierte Audiosample-Daten enthält.

![AudioData und EncodedAudioChunk](audio-data.png)

### Verarbeitungsmodell

Die WebCodecs API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz eines Encoders oder Decoders unterhält eine interne, unabhängige Verarbeitungswarteschlange. Wenn eine beträchtliche Anzahl von kodierten Chunks zur Dekodierung oder von Frames/Samples zur Kodierung in die Warteschlange gestellt werden, ist es wichtig, dieses Modell zu berücksichtigen.

Methoden mit den Namen [`configure()`](/de/docs/Web/API/VideoEncoder/configure), [`encode()`](/de/docs/Web/API/VideoEncoder/encode), [`decode()`](/de/docs/Web/API/VideoDecoder/decode) und [`flush()`](/de/docs/Web/API/VideoEncoder/flush) arbeiten asynchron, indem sie Steuerungsnachrichten ans Ende der Warteschlange anhängen, während Methoden mit den Namen [`reset()`](/de/docs/Web/API/VideoEncoder/reset) und [`close()`](/de/docs/Web/API/VideoEncoder/close) synchron alle ausstehenden Arbeiten abbrechen und die Verarbeitungswarteschlange leeren. Nach `reset()` können nach einem Aufruf von `configure()` weitere Arbeiten eingereiht werden, aber `close()` ist eine dauerhafte Operation. Diese Methoden funktionieren sowohl für Audio- als auch für Video-Decoder/Encoder.

Die Methode `flush()` kann verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zu dem Zeitpunkt ausstehend waren, als `flush()` aufgerufen wurde. Sie sollte jedoch im Allgemeinen nur einmal aufgerufen werden, wenn alle gewünschten Arbeiten in die Warteschlange gestellt sind – sie ist nicht dazu gedacht, den Fortschritt in regelmäßigen Abständen zu erzwingen. Ein unnötiger Aufruf wird die Encoder-Qualität beeinträchtigen und dazu führen, dass Decoder das nächste Eingabe-Frames als Schlüsselframe erfordern.

### Codecs

Ein Codec ist ein spezifischer Algorithmus zum Kodieren (Komprimieren) und Dekodieren (Dekomprimieren) von Video und Audio. Es gibt mehrere Industrienormen für Videocodecs und eine separate Gruppe von Codecs für Audio. Hier sind die wichtigsten, die von der WebCodecs API unterstützt werden:

#### Videocodecs

- H.264 (AVC)
  - : Der am weitesten verbreitete Videocodec. Die meisten MP4-Dateien verwenden H.264.
- VP9
  - : Open Source, entwickelt von Google. Bessere Komprimierung als H.264. Häufig auf YouTube und in WebM-Dateien verwendet.
- AV1
  - : Der neueste Open-Source-Codec mit besserer Kompression als VP9. Breite Decoderunterstützung; die Unterstützung von Hardware-Encodern ist noch begrenzt.
- H.265 (HEVC)
  - : Bessere Komprimierung als H.264, aber mit signifikanten Lücken in der Browserunterstützung außerhalb von Apple-Plattformen.

#### Audiocodecs

- Opus
  - : Open Source, niedrige Latenz. Die empfohlene Wahl für die meisten WebCodecs-Audio-Kodierungen.
- AAC
  - : Weit verbreitet. Häufig in MP4-Dateien.
- MP3
  - : Weit verbreitet zum Dekodieren, aber nicht als Encoder in WebCodecs verfügbar.
- PCM
  - : Unkomprimiertes Audio. Kein Qualitätsverlust, aber große Dateigrößen.

Die WebCodecs-Spezifikation unterstützt eine bestimmte Gruppe von Codecs, und einzelne Geräte und Browser können nur eine Teilmenge dieser unterstützen. Encoder und Decoder müssen mit vollständig spezifizierten Codec-Strings konfiguriert werden (wie `"vp09.00.40.08.00"` für VP9 oder `"avc1.4d0034"` für H.264) anstelle von mehrdeutigen Codec-Namen wie `"vp9"` oder `"h264"`. Der [Codec-Auswahl-Leitfaden](/de/docs/Web/API/WebCodecs_API/Codec_selection) bietet Anleitungen zur Auswahl eines geeigneten Codec-Strings (siehe die [Codec-Support-Tabelle](https://webcodecsfundamentals.org/datasets/codec-support-table/) (webcodecsfundamentals.org) für eine vollständige Liste der Codec-Strings und deren Browserunterstützung).

### Muxing und Demuxing

Die WebCodecs API befasst sich nur mit dem Kodieren und Dekodieren, wobei kodierte Chunks lediglich Binärdaten darstellen. Sie bietet keine eingebaute Möglichkeit, `EncodedVideoChunk`-Objekte aus einer Videodatei zu lesen oder sie in eine abspielbare Videodatei zu schreiben.

Das Lesen von kodierten Chunks aus einer Videodatei ist ein völlig anderer Prozess namens Demuxing. Um `EncodedVideoChunk`-Objekte aus einer Videodatei abzurufen, müssen Sie eine Demuxing-Bibliothek wie [Mediabunny](https://mediabunny.dev/) oder [web-demuxer](https://github.com/bilibili/web-demuxer) verwenden.

![Demuxer](decoder-demuxer.png)

Diese Bibliotheken folgen den Spezifikationen des Videocontainers (z.B. webm, mp4), um die Trackdaten und Byte-Offsets für jeden kodierten Chunk zu extrahieren und Methoden bereitzustellen, um die tatsächlichen Chunks aus der rohen Datei zu extrahieren.

Gleiches gilt für das Schreiben in eine abspielbare Videodatei, für das Sie eine Muxing-Bibliothek benötigen, wobei [Mediabunny](https://mediabunny.dev/) die Hauptoption ist. Muxing-Bibliotheken übernehmen die Formatierung der binären, kodierten Daten und platzieren sie an der richtigen Byte-Position im Ausgabedatenstrom gemäß der Containervorschrift, sodass das Ausgabevideo abspielbar ist.

Weitere Informationen zu Muxing und Demuxing finden Sie im [Muxing und Demuxing Leitfaden](https://webcodecsfundamentals.org/basics/muxing/) (webcodecsfundamentals.org).

## Leitfäden

- [Videobearbeitungskonzepte](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
  - : Eine kurze Einführung in die Videobearbeitung, die Codecs und Container, Muxing und Demuxing sowie konzeptionelle Informationen abdeckt, die erklären, wie die WebCodecs API diese Konzepte implementiert.
- [Die WebCodecs-API verwenden](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
  - : Ein ausführlicher Leitfaden zur tatsächlichen Verwendung der WebCodecs API, einschließlich der Instanziierung und Konfiguration von Encodern und Decodern, der Erstellung und Verwendung von Video-Frames sowie der Extraktion von Samples aus `AudioData`.
- [Codierauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
  - : Die WebCodecs API erfordert Codec-Strings — genaue Bezeichner, die nicht nur die Codec-Familie, sondern auch das Profil, die Ebene und andere Parameter angeben. Dieser Leitfaden erläutert, wie Codec-Strings funktionieren und wie man den richtigen Codec für häufige Anwendungsfälle auswählt.

## Schnittstellen

- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
  - : Dekodiert [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)-Objekte.
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
  - : Dekodiert [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)-Objekte.
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
  - : Kodiert [`AudioData`](/de/docs/Web/API/AudioData)-Objekte.
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
  - : Kodiert [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte.
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
  - : Repräsentiert codec-spezifische kodierte Audio-Bytes.
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
  - : Repräsentiert codec-spezifische kodierte Video-Bytes.
- [`AudioData`](/de/docs/Web/API/AudioData)
  - : Repräsentiert nicht kodierte Audiodaten.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Repräsentiert ein Frame nicht kodierter Videodaten.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Repräsentiert den Farbraum eines Videoframes.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Packt Bilddaten aus und dekodiert sie, ermöglicht den Zugriff auf die Sequenz der Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Repräsentiert die Liste der in dem Bild verfügbaren Spuren.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Repräsentiert eine einzelne Bildspur.

## Beispiele

### Grundlegende Nutzung

Um einen `VideoEncoder` zu instanziieren, übergeben wir ein Objekt, das eine Callback-Funktion spezifiziert, die aufgerufen wird, wenn `EncodedVideoChunk`-Instanzen zur Verarbeitung verfügbar sind, und eine Fehlerfunktion, die aufgerufen wird, wenn es Fehler gibt. Dies wird im folgenden Code gezeigt:

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

Sie können dann beginnen, Frames zum Encoder zu kodieren. Sie können einen `VideoFrame` aus einem `Canvas` konstruieren.

```js
for (let i = 0; i < 60; i++) {
  const frame = new VideoFrame(canvas, { timestamp: (i * 1e6) / 30 }); //30 fps, in microseconds
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
}
```

Weitere Beispiele finden Sie unter [Die WebCodecs-API verwenden](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API).

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API Beispiele](https://w3c.github.io/webcodecs/samples/)
- [WebCodecsFundamentals](https://webcodecsfundamentals.org/)
- [Echtzeit-Videoverarbeitung mit WebCodecs und Streams: Verarbeitungspipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Verarbeitung von Video-Frames im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
