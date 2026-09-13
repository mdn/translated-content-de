---
title: WebCodecs API
slug: Web/API/WebCodecs_API
l10n:
  sourceCommit: ad01ed9218be15d7aeaa0666ec0bc2a2d17f3574
---

{{DefaultAPISidebar("WebCodecs API")}}{{AvailableInWorkers("window_and_dedicated")}}

Die **WebCodecs-API** ermöglicht es Webentwicklern, Video- und Audiomaterial im Browser effizient zu kodieren und zu dekodieren (unter Verwendung der Hardwarebeschleunigung) und bietet sehr detaillierte Steuerungsmöglichkeiten (Verarbeitung auf Frame-Basis).

Sie ist nützlich für Webanwendungen, die eine umfangreiche Medienverarbeitung durchführen oder die eine detaillierte Kontrolle darüber erfordern, wie Medien kodiert werden. Dies schließt browserbasierte Video- und Audiobearbeitung sowie Livestreaming und Videokonferenzen ein.

## Konzepte

Die WebCodecs-API stellt browsernative Schnittstellen bereit, um rohe Videoframes, kodierte Videoframes sowie rohe und kodierte Audiodaten zu repräsentieren.

|             | Video                                                     | Audio                                                     |
| ----------- | --------------------------------------------------------- | --------------------------------------------------------- |
| **Roh**     | [`VideoFrame`](/de/docs/Web/API/VideoFrame)               | [`AudioData`](/de/docs/Web/API/AudioData)                 |
| **Kodiert** | [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk) | [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk) |

Die WebCodecs-API führt auch die Schnittstellen [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) und [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) ein, die `EncodedVideoChunk`-Objekte in `VideoFrame`-Objekte und umgekehrt transformieren.

![VideoEncoder und VideoDecoder](video-encoder-decoder.png)

Ebenso führt die WebCodecs-API auch die Schnittstellen [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) und [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) ein, die `EncodedAudioChunk`-Objekte in `AudioData`-Objekte und umgekehrt transformieren.

![AudioEncoder und AudioDecoder](audio-encoder-decoder.png)

Normalerweise gibt es eine 1:1-Entsprechung zwischen den rohen und kodierten Versionen jedes Medientyps. Das Dekodieren einer Anzahl von `EncodedVideoChunk`-Objekten ergibt die gleiche Anzahl von `VideoFrame`-Objekten (und dies gilt auch für Audio).

### Video

Ein `VideoFrame` repräsentiert ein Videoframe und ist mit den tatsächlichen Pixel-Daten im Grafikspeicher des Geräts sowie Metadaten wie dem Zeitstempel und der Dauer (in Mikrosekunden), Format und Auflösung verknüpft. Ein `VideoFrame` kann aus jeder Bildquelle erstellt werden und kann auch mit jeder der Canvas-Rendering-Methoden auf eine [`Canvas`](/de/docs/Web/API/Canvas_API) gerendert werden.

`EncodedVideoChunk` repräsentiert die kodierte (komprimierte) Version desselben Frames, verknüpft mit Binärdaten im regulären Speicher und denselben Metadaten. Der einzige Unterschied besteht darin, dass es ein zusätzliches Feld hat: `type`, das "key" oder "delta" sein kann und darstellt, ob es einem [Keyframe](https://webcodecsfundamentals.org/basics/encoded-video-chunk/#key-frames) entspricht oder nicht. Ein `EncodedVideoChunk` speichert typischerweise 10 bis 100 Mal weniger Daten als sein entsprechendes rohes `VideoFrame`.

![VideoFrame und EncodedVideoChunk](video-frame.png)

### Audio

Ein `AudioData`-Objekt repräsentiert eine Anzahl von individuellen Audiosamples (1024 ist eine typische Anzahl). Audiosample-Daten können über die `copyTo`-Methode als {{jsxref("Float32Array")}} extrahiert werden. Es gibt keine direkte Integration mit der [Web Audio API](/de/docs/Web/API/Web_Audio_API); jedoch können die extrahierten `Float32Array`-Samples direkt in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) für die Wiedergabe kopiert werden.

Ebenso repräsentiert `EncodedAudioChunk` die kodierte (komprimierte) Version eines `AudioData`-Objekts, die komprimierte Audiosample-Daten enthält.

![AudioData und EncodedAudioChunk](audio-data.png)

### Verarbeitungsmodell

Die WebCodecs-API verwendet ein asynchrones [Verarbeitungsmodell](https://w3c.github.io/webcodecs/#codec-processing-model-section). Jede Instanz eines Encoders oder Decoders unterhält eine interne, unabhängige Verarbeitungswarteschlange. Wenn eine beträchtliche Anzahl von kodierten Chunks zum Dekodieren oder Frames/Samples zum Kodieren in die Warteschlange gestellt wird, ist es wichtig, dieses Modell im Auge zu behalten.

Methoden mit den Namen [`configure()`](/de/docs/Web/API/VideoEncoder/configure), [`encode()`](/de/docs/Web/API/VideoEncoder/encode), [`decode()`](/de/docs/Web/API/VideoDecoder/decode) und [`flush()`](/de/docs/Web/API/VideoEncoder/flush) arbeiten asynchron, indem sie Kontrollnachrichten ans Ende der Warteschlange anhängen, während Methoden mit den Namen [`reset()`](/de/docs/Web/API/VideoEncoder/reset) und [`close()`](/de/docs/Web/API/VideoEncoder/close) synchron alle anstehenden Arbeiten abbrechen und die Verarbeitungswarteschlange löschen. Nach `reset()` kann mehr Arbeit nach einem Aufruf von `configure()` in die Warteschlange gestellt werden, aber `close()` ist eine dauerhafte Operation. Diese Methoden funktionieren sowohl für Audio- als auch für Video-Encoder/Decoder.

Die `flush()`-Methode kann verwendet werden, um auf den Abschluss aller Arbeiten zu warten, die zum Zeitpunkt des Aufrufs von `flush()` ausstanden. Sie sollte jedoch im Allgemeinen nur aufgerufen werden, wenn alle gewünschten Arbeiten in die Warteschlange gestellt sind — sie ist nicht dazu gedacht, den Fortschritt in regelmäßigen Abständen zu erzwingen. Ein unnötiger Aufruf wird die Qualität des Encoders beeinträchtigen und dazu führen, dass Decoder das nächste Eingangsmaterial als Keyframe benötigen.

### Codecs

Ein Codec ist ein spezifischer Algorithmus zum Kodieren (Komprimieren) und Dekodieren (Dekomprimieren) von Video- und Audiodaten. Es gibt mehrere Industriestandards für Videocodecs und ein separates Set von Codecs für Audio. Hier sind die Haupt-Codecs, die von der WebCodecs-API unterstützt werden:

#### Video-Codecs

- H.264 (AVC)
  - : Der am weitesten verbreitete Videocodec. Die meisten MP4-Dateien verwenden H.264.
- VP9
  - : Open Source, entwickelt von Google. Bessere Kompression als H.264. Häufig auf YouTube und in WebM-Dateien genutzt.
- AV1
  - : Der neueste Open-Source-Codec mit besserer Kompression als VP9. Breite Decoder-Unterstützung; Hardware-Encoder-Unterstützung ist noch begrenzt.
- H.265 (HEVC)
  - : Bessere Kompression als H.264, jedoch mit erheblichen Lücken in der Browserunterstützung außerhalb von Apple-Plattformen.

#### Audio-Codecs

- Opus
  - : Open Source, niedrige Latenz. Die empfohlene Wahl für die meisten WebCodecs-Audiokodierungen.
- AAC
  - : Weit verbreitet. Häufig in MP4-Dateien anzutreffen.
- MP3
  - : Weit verbreitet für das Dekodieren, aber nicht als Encoder in WebCodecs verfügbar.
- PCM
  - : Unkomprimiertes Audio. Kein Qualitätsverlust, aber große Dateigrößen.

Die WebCodecs-Spezifikation unterstützt eine bestimmte Reihe von Codecs, und einzelne Geräte und Browser unterstützen möglicherweise nur eine Teilmenge davon. Encoder und Decoder müssen mit vollständig angegebenen Codec-Strings (wie `"vp09.00.40.08.00"` für VP9 oder `"avc1.4d0034"` für H.264) konfiguriert werden, anstatt mit vagen Codec-Namen wie `"vp9"` oder `"h264"`. Der [Codec-Auswahl-Leitfaden](/de/docs/Web/API/WebCodecs_API/Codec_selection) bietet Anleitungen zur Auswahl eines geeigneten Codec-Strings (siehe die [Codec Support Table](https://webcodecsfundamentals.org/datasets/codec-support-table/) (webcodecsfundamentals.org) für eine vollständige Liste der Codec-Strings und ihrer Browserunterstützung).

### Multiplexen und Demultiplexen

Die WebCodecs-API befasst sich nur mit dem Kodieren und Dekodieren, wobei kodierte Chunks lediglich Binärdaten darstellen. Sie bietet keine integrierte Möglichkeit, `EncodedVideoChunk`-Objekte aus einer Videodatei zu lesen oder sie in eine abspielbare Videodatei zu schreiben.

Das Lesen kodierter Chunks aus einer Videodatei ist ein völlig anderer Prozess, der als Demultiplexen bezeichnet wird. Um `EncodedVideoChunk`-Objekte aus einer Videodatei zu extrahieren, müssen Sie eine Demultiplexing-Bibliothek wie [Mediabunny](https://mediabunny.dev/) oder [web-demuxer](https://github.com/bilibili/web-demuxer) verwenden.

![Demultiplexer](decoder-demuxer.png)

Diese Bibliotheken folgen den Videocontainer-Spezifikationen (z. B. webm, mp4), um die Trackdaten und Byte-Offsets für jeden kodierten Chunk zu extrahieren und bieten Methoden zum Extrahieren der tatsächlichen Chunks aus der Rohdatei.

Ebenso benötigen Sie eine Multiplexing-Bibliothek, um in eine abspielbare Videodatei zu schreiben, wobei [Mediabunny](https://mediabunny.dev/) die primäre Wahl ist. Multiplexing-Bibliotheken kümmern sich um die Formatierung der binären kodierten Daten und deren Platzierung an der richtigen Byte-Position im Ausgabedatenstrom gemäß der Containerspezifikation, sodass das Ausgabevideo abspielbar ist.

Weitere Informationen zum Multiplexen und Demultiplexen finden Sie im [Multiplexing- und Demultiplexing-Leitfaden](https://webcodecsfundamentals.org/basics/muxing/) (webcodecsfundamentals.org).

## Leitfäden

- [Videoprozessierungskonzepte](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
  - : Ein kurzer Überblick über die Videoverarbeitung, einschließlich Codecs und Container, Multiplexing und Demultiplexing sowie konzeptionelle Informationen, die erklären, wie die WebCodecs-API diese Konzepte umsetzt.
- [Verwendung der WebCodecs-API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API)
  - : Ein ausführlicher Leitfaden zur eigentlichen Verwendung der WebCodecs-API, einschließlich der Instanziierung und Konfiguration von Encodern und Decodern, der Erstellung und Nutzung von Videoframes sowie der Extraktion von Samples aus `AudioData`.
- [Codecauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
  - : Die WebCodecs-API erfordert Codec-Strings — präzise Bezeichner, die nicht nur die Codec-Familie, sondern auch das Profil, Level und andere Parameter spezifizieren. Dieser Leitfaden erklärt, wie Codec-Strings funktionieren und wie man den richtigen Codec für gängige Anwendungsfälle auswählt.

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
  - : Repräsentiert unkodierte Audiodaten.
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
  - : Repräsentiert ein Frame von unkodierten Videodaten.
- [`VideoColorSpace`](/de/docs/Web/API/VideoColorSpace)
  - : Repräsentiert den Farbraum eines Videoframes.
- [`ImageDecoder`](/de/docs/Web/API/ImageDecoder)
  - : Entpackt und dekodiert Bilddaten und ermöglicht den Zugriff auf die Sequenz von Frames in einem animierten Bild.
- [`ImageTrackList`](/de/docs/Web/API/ImageTrackList)
  - : Repräsentiert die Liste der in einem Bild verfügbaren Tracks.
- [`ImageTrack`](/de/docs/Web/API/ImageTrack)
  - : Repräsentiert einen einzelnen Bildtrack.

## Beispiele

### Grundlegende Verwendung

Um einen `VideoEncoder` zu instanziieren, übergeben wir ein Objekt, das eine Callback-Funktion angibt, die aufgerufen wird, wenn `EncodedVideoChunk`-Instanzen zur Verarbeitung bereitstehen, und eine Fehlerfunktion, die aufgerufen wird, wenn Fehler auftreten. Dies wird im folgenden Code gezeigt:

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

Sie können dann beginnen, Frames an den Encoder zu kodieren. Sie können ein `VideoFrame` aus einer `Canvas` erstellen.

```js
for (let i = 0; i < 60; i++) {
  const frame = new VideoFrame(canvas, { timestamp: (i * 1e6) / 30 }); // 30 fps, in microseconds
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
}
```

Weitere Beispiele finden Sie unter [Verwendung der WebCodecs-API](/de/docs/Web/API/WebCodecs_API/Using_the_WebCodecs_API).

## Siehe auch

- [Videobearbeitung mit WebCodecs](https://developer.chrome.com/docs/web-platform/best-practices/webcodecs)
- [WebCodecs API-Beispiele](https://w3c.github.io/webcodecs/samples/)
- [WebCodecsFundamentals](https://webcodecsfundamentals.org/)
- [Echtzeit-Videobearbeitung mit WebCodecs und Streams: Verarbeitungspipelines](https://webrtchacks.com/real-time-video-processing-with-webcodecs-and-streams-processing-pipelines-part-1/)
- [Video Frame Processing im Web – WebAssembly, WebGPU, WebGL, WebCodecs, WebNN und WebTransport](https://webrtchacks.com/video-frame-processing-on-the-web-webassembly-webgpu-webgl-webcodecs-webnn-and-webtransport/)
