---
title: Verwendung der WebCodecs API
slug: Web/API/WebCodecs_API/Using_the_WebCodecs_API
l10n:
  sourceCommit: 98b1f612078d2716d9330e36c74351bddd77fa05
---

{{DefaultAPISidebar("WebCodecs API")}}

Dieser Leitfaden behandelt die grundlegenden Nutzungsmuster der WebCodecs API, einschließlich der Codierung und Dekodierung von Video und Audio sowie der Verwendung von [`VideoFrame`](/de/docs/Web/API/VideoFrame) und [`AudioData`](/de/docs/Web/API/AudioData).

## Videocodierung

Das grundlegende Nutzungsmuster für [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) beginnt mit der Instanziierung, bei der Sie die `output`- und `error`-Callback-Funktionen definieren. Der `output`-Callback erhält ein `EncodedVideoChunk` und einen `metadata`-Parameter — ein `EncodedVideoChunkMetadata`-Wörterbuch, das eine optionale [decoderConfig](/de/docs/Web/API/VideoEncoder/VideoEncoder#decoderconfig)-Eigenschaft enthält. Diese Metadaten werden von Multiplexing-Bibliotheken benötigt, wenn sie in eine Videodatei multiplexen.

```js
const encoder = new VideoEncoder({
  output(chunk, meta) {
    // Do something with chunk, typically send to muxing library
  },
  error(e) {
    // Handle the error
  },
});
```

Sie müssen dann den Encoder mit dem Codec-Parameter und verschiedenen anderen Codierungsparametern wie Breite, Höhe, Bitrate und Framerate konfigurieren. Siehe den [Leitfaden zur Codecauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection) für Hinweise zur Auswahl eines Codecs.

```js
encoder.configure({
  codec: "vp09.00.40.08.00", // See codec selection guide
  width: 1280,
  height: 720,
  bitrate: 1_000_000, // 1 Mbps
  framerate: 30,
});
```

Sie würden dann mit der Codierung von `VideoFrame`-Objekten beginnen, wobei Sie nicht nur das zu codierende `VideoFrame` angeben, sondern auch den `keyFrame`-Parameter, der angibt, ob der Frame als Schlüsselbild codiert werden soll.

```js
for (let i = 0; i < 60; i++) {
  const timestamp = (i * 1e6) / 30; //30 fps, in microseconds
  const frame = new VideoFrame(canvas, { timestamp });
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
  frame.close();
}
```

Der erste codierte Frame sollte ein Schlüsselbild sein — während `VideoEncoder` automatisch den ersten Frame als Schlüsselbild erzwingt, auch wenn er nicht explizit markiert ist, ist es eine gute Praxis, es explizit festzulegen. Typische Schlüsselbildintervalle sind alle 30 oder 60 Frames. Die Verwendung von mehr Schlüsselbildern erhöht die Videodateigröße, während die Verwendung von weniger Schlüsselbildern zu instabilen Video-Wiedergaben bei einigen Videoplayern führen kann.

Es ist wichtig, `VideoFrame`-Objekte zu schließen, sobald sie zur Codierung gesendet werden, um Speicherlecks zu vermeiden. `VideoFrame`-Objekte sind groß genug, dass Anwendungen mit weniger als 100 aktiven Frames im Speicher abstürzen können.

Beachten Sie, dass `VideoEncoder` auch eine Warteschlange von zu codierenden Frames namens `encodeQueue` hat. Wenn Sie eine Animation mit 30 fps rendern, führen Sie `encoder.encode(frame)` bei jedem Rendern aus, aber der Encoder kann nur mit 10 fps codieren, wird die Encoder-Warteschlange schließlich wachsen, bis sie keinen Videospeicher mehr hat und der Prozess abstürzt.

Sie müssen also verwalten, wie und wann Sie Frames an den Encoder senden, indem Sie [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) in Ihrer Render-Schleife überprüfen und sicherstellen, dass sie nicht unendlich wächst.

Es ist möglich, das `dequeue`-Ereignis zu verwenden, um zu erkennen, wann die Codierungswarteschlange reduziert wird, um die Notwendigkeit des Abfragens von `encodeQueueSize` zu vermeiden.

```js
encoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

Sobald Sie das Senden aller Frames zur Codierung abgeschlossen haben, sollten Sie die `flush()`-Methode aufrufen.

```js
await encoder.flush();
```

Abhängig vom Gerät/Browser kann der Encoder die letzten `EncodedVideoChunk`-Objekte möglicherweise nicht zurückgeben, bis `flush()` aufgerufen wird. Sobald Sie die `VideoEncoder`-Funktion vollständig verwendet haben, sollten Sie die `close()`-Methode aufrufen, um Systemressourcen freizugeben.

```js
encoder.close();
```

Ein `VideoEncoder` kann während der Codierung aus verschiedenen Gründen einen Fehler auslösen, zum Beispiel wenn der Benutzer die Registerkarte wechselt und der Browser die Ressourcen freigibt. Wenn ein Fehler auftritt, wechselt der Encoder dauerhaft in den Zustand `"closed"`. Es ist nicht möglich, einen geschlossenen Encoder neu zu konfigurieren — es muss eine neue `VideoEncoder`-Instanz erstellt werden. Der erste von dem neuen Encoder codierte Frame muss ein Schlüsselbild sein.

```js
if (encoder.state === "closed") {
  // Close the old encoder, instantiate and configure a new encoder
}

encoder.encode(frame, { keyFrame: true });
```

## Videodekodierung

Ebenso starten Sie für die Videodekodierung, indem Sie den [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) mit den `output`- und `error`-Callback-Funktionen instanziieren, wobei der `output`-Callback `VideoFrame`-Objekte erhält, die vom Decoder zurückgegeben werden.

```js
const decoder = new VideoDecoder({
  output(frame) {
    // Do something with the VideoFrame
  },
  error(e) {
    /** Handle the error */
  },
});
```

Sie müssen dann den Decoder konfigurieren. Wenn Sie eine Videodatei dekodieren, kann eine Demultiplexing-Bibliothek die richtige Decoder-Konfiguration bereitstellen (siehe [Multiplexing und Demultiplexing](/de/docs/Web/API/WebCodecs_API#muxing_and_demuxing)). Beim Streaming von Video zwischen einem WebCodecs-Sender und -Empfänger wäre die Decoder-Konfiguration identisch mit den Metadaten, die vom `VideoEncoder` zurückgegeben werden, der die codierten Chunks erzeugt hat.

```js
decoder.configure(/**config */);
```

Wenn Sie eine Videodatei dekodieren, benötigen Sie eine Demultiplexing-Bibliothek, um Video-Chunks zu extrahieren. Sie können die Chunks dann zur Dekodierung übermitteln. Beachten Sie, dass Sie nicht nur einen Chunk zur Dekodierung senden und warten sollten, bis der Frame ausgegeben wird, bevor Sie den nächsten Chunk einspeisen. Abhängig vom Browser/Gerät und dem Video selbst müssen Sie möglicherweise mehrere Chunks senden, bevor der Decoder beginnt, Frames zurückzugeben, und die Mindestanzahl von Chunks hängt vom Gerät ab.

```js
let chunk_index = 0;
// Process chunks in batches, not one at a time nor all at once
for (let i = 0; i < BATCH_LENGTH; i++) {
  decoder.decode(chunks[chunk_index]);
  chunk_index++;
}
```

Ähnlich wie `VideoEncoder` behält `VideoDecoder` eine Dekodierungswarteschlange, die verwaltet werden muss. Wenn Sie Tausende von Chunks gleichzeitig an den `VideoDecoder` senden, könnte der Decoder schließen oder fehlschlagen, daher muss Ihre Anwendung sicherstellen, dass [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) nicht unendlich wächst. Wie beim Encoder können Sie auch das `dequeue`-Ereignis verwenden, um bei der Verwaltung der Dekodierungswarteschlange zu helfen.

```js
decoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

Sobald Sie das Senden aller Frames zur Dekodierung abgeschlossen haben, können Sie `flush` ausführen.

```js
await decoder.flush();
```

Abhängig vom Gerät/Browser kann der Decoder die letzten `VideoFrame`-Objekte möglicherweise nicht zurückgeben, bis `flush()` aufgerufen wird. Sobald Sie die `VideoDecoder`-Funktion vollständig verwendet haben, sollten Sie die `close()`-Methode aufrufen, um Systemressourcen freizugeben.

```js
decoder.close();
```

Ein `VideoDecoder` kann beim Dekodieren aus verschiedenen Gründen einen Fehler auslösen, z.B. bei beschädigten oder fehlenden Daten in einem Quell-`EncodedVideoChunk`. Wenn ein Decoder ausfällt, wechselt er dauerhaft in den Zustand `"closed"` und eine neue `VideoDecoder`-Instanz muss erstellt werden. Der erste von dem neuen Decoder dekodierte Chunk muss ein Schlüsselbild sein, daher ist es notwendig, von der aktuellen Position zum nächsten Schlüsselbild vorwärts zu suchen, bevor man fortfährt.

```js
let chunk_index = 0;

for (let i = 0; i < BATCH_LENGTH; i++) {
  // Check if decoder failed
  if (decoder.state === "closed") {
    // Seek forward to the next key frame from the current position
    for (let j = chunk_index; j < chunks.length; j++) {
      if (chunks[j].type === "key") {
        chunk_index = j;
        break;
      }
    }
    // Close the old decoder, instantiate and configure a new decoder
  }
  decoder.decode(chunks[chunk_index]);
  chunk_index++;
}
```

## VideoFrame

Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) stellt einen einzelnen unkomprimierten Videoframe dar, einschließlich seiner Pixel-Daten und Metadaten wie seinem Zeitstempel. Er wird sowohl vom `VideoDecoder` zurückgegeben, wenn codiertes Video dekodiert wird, als auch aus einer Vielzahl von Bildquellen generiert.

### Erstellen von Video-Frames

Ein `VideoFrame` kann aus einer beliebigen Bildquelle konstruiert werden. Beachten Sie, dass Zeitstempel in Mikrosekunden angegeben werden.

```js
const bitmapFrame = new VideoFrame(imgBitmap, { timestamp: 0 });
const imageFrame = new VideoFrame(htmlImageEl, { timestamp: 0 });
const videoFrame = new VideoFrame(htmlVideoEl, { timestamp: 0 });
const canvasFrame = new VideoFrame(canvasEl, { timestamp: 0 });
```

Das Konstruieren eines `VideoFrame` aus einem `Canvas` ist typischerweise die Methode, um Video in einer Videoschnittanwendung zu codieren, in der Quellvideos und Bilder in einem Canvas-Kontext verwendet werden, Effekte und Transformationen angewendet werden, und das `Canvas` sowohl von Benutzern angesehen als auch als Bildquelle für ein zu codierendes `VideoFrame` verwendet werden kann.

Sie können auch direkt ein `VideoFrame` aus Binärdaten erstellen, wie etwa einem `ArrayBuffer`; Sie müssen jedoch das `format` und die Metadaten angeben und sicherstellen, dass die Daten, die zum Konstruieren des Frames verwendet werden, dem angegebenen [Format](/de/docs/Web/API/VideoFrame/format) folgen.

```js
const rgbaFrame = new VideoFrame(rgbaData, {
  timestamp: 0,
  format: "RGBA",
  codedWidth: 1920,
  codedHeight: 1080,
});
```

`VideoFrame`-Objekte sind mit Daten im Grafikspeicher verbunden. Wenn Sie ein `VideoFrame` aus einem `Canvas`, einem `Bitmap`, einem `Video` oder einem `Image` erstellen, werden Daten vom Grafikspeicher in den Grafikspeicher kopiert, was relativ effizienter ist.

Ein `VideoFrame`, das aus Binärdaten (z.B. `ArrayBuffer` oder `Uint8ClampedArray`) konstruiert wird, führt eine CPU→Grafikspeicher-Kopieroperation aus, die, wenn sie wiederholt durchgeführt wird, eine Leistungseinbuße bedeuten kann.

Schließlich können `VideoFrame`-Objekte auch durch Dekodieren von `EncodedVideoChunk`-Objekten über einen `VideoDecoder` generiert werden, wie im Abschnitt [Videodekodierung](#decoding-video) oben gezeigt.

### Verbrauch von Video-Frames

Dekodiertes Video kann auch im Browser wiedergegeben werden, indem `VideoFrame`-Objekte über eine der Canvas-Rendering-Methoden auf ein `Canvas` gerendert werden. Verschiedene Rendering-Methoden haben unterschiedliche Leistungseigenschaften, die relevant sein können, wenn rechenintensive Videoverarbeitungsoperationen ausgeführt werden.

#### Canvas2D

Frames können mit der `drawImage`-Methode auf ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) gezeichnet werden:

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("2d");
ctx.drawImage(frame, 0, 0);
```

Während der 2D-Canvas-Kontext eine einfache, aber flexible API hat, verwenden Browser unterschiedliche Implementierungen im Hintergrund, was zu inkonsistenter und generell schlechterer Leistung über Browser hinweg führt.

#### BitmapRenderer

Frames können auch über den [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) auf ein Canvas gerendert werden, indem ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aus dem Frame erstellt und es über die `transferFromImageBitmap`-Methode auf das Canvas gerendert wird.

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("bitmaprenderer");

const bitmap = await createImageBitmap(frame);
ctx.transferFromImageBitmap(bitmap);
frame.close();
```

Diese Methode beinhaltet das Erstellen einer einzigen Kopie des Frames im Grafikspeicher, was zu einer konsistenteren und generell besseren Leistung über Browser hinweg führt als die Canvas2D API, während sie relativ einfach bleibt.

#### WebGPU

Die effizienteste Methode, ein `VideoFrame` auf ein Canvas zu rendern, ist über die [importExternalTexture](/de/docs/Web/API/GPUDevice/importExternalTexture)-Methode in WebGPU.

```js
const externalTexture = device.importExternalTexture({ source: frame });
```

`importExternalTexture` ist effizient, da es eine null-Kopie-Operation beinhaltet und genau das gleiche `VideoFrame`-Objekt im Speicher innerhalb einer WebGPU-Pipeline verwendet. Es ist die leistungsfähigste Methode zum Rendern eines `VideoFrame`, aber auch die komplexeste zum Einrichten.

### Speicher

Da `VideoFrame`-Objekte erhebliche GPU-Speicherressourcen verbrauchen können und die Videobearbeitung das Verarbeiten vieler Frames pro Sekunde umfasst, sollte besonders sorgfältig darauf geachtet werden, den Speicher zu verwalten und Speicherlecks zu vermeiden, um Abstürze von Anwendungen zu vermeiden.

Zuallererst müssen Frames ausdrücklich freigegeben werden, wenn sie nicht mehr benötigt werden.

```js
frame.close();
```

Beim Codieren können Sie den Frame schließen, sobald Sie ihn zur Codierung senden.

```js
encoder.encode(frame, { keyFrame: true });
frame.close();
```

Sie sollten auch die Frames sofort nach dem Rendern schließen.

```js
ctx.drawImage(frame, 0, 0);
frame.close();
```

Beim Übertragen eines `VideoFrame` zwischen Threads (z.B. einem Worker) sollte es als [transferierbares Objekt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) übertragen werden.

```js
worker.postMessage(frame, [frame]);
```

## Audio

WebCodecs unterstützt die Codierung und Dekodierung von Audio über [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder) unter Verwendung der Codecs Opus und AAC. Bevor Sie mit Audio arbeiten, gibt es einige wichtige Punkte zu beachten:

- **Durchführung**: Wenn Sie Video transcodieren und das Audio nicht modifizieren müssen, müssen Sie das Audio überhaupt nicht dekodieren und erneut codieren. `EncodedAudioChunk`-Objekte können direkt von einer Demultiplexing-Bibliothek an eine Multiplexing-Bibliothek übergeben werden, was erheblich effizienter ist.
- **Wiedergabe**: Die WebCodecs API hat keine eingebaute Audiowiedergabe. Zur Wiedergabe verwenden Sie die [Web Audio API](/de/docs/Web/API/Web_Audio_API).
- **Formatunterstützung**: WebCodecs unterstützt nur die Codierung von Opus und AAC. Für MP3 oder andere Formate wird eine Drittanbieterbibliothek benötigt.

### Wiedergabe

Es gibt keine direkte Brücke zwischen WebCodecs und der Web Audio API. [`AudioData`](/de/docs/Web/API/AudioData)-Objekte können nicht direkt an die Web Audio API übergeben werden, die [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) verwendet, um rohes Audio darzustellen.

Der empfohlene Ansatz für die Wiedergabe besteht darin, `EncodedAudioChunk`-Objekte in einen In-Memory-Puffer mit einer Multiplexing-Bibliothek zu multiplexen und diesen Puffer dann über [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zu dekodieren:

```js
// mux encoded chunks to an ArrayBuffer using a muxing library
const buffer = await muxAudioToBuffer(encodedChunks);
const audioBuffer = await audioContext.decodeAudioData(buffer);
const source = audioContext.createBufferSource();
source.buffer = audioBuffer;
source.connect(audioContext.destination);
source.start();
```

Alternativ können Sie rohe Samples aus `AudioData` über `copyTo()` extrahieren und manuell einen `AudioBuffer` erstellen, aber dies erfordert eine Datenkopie auf der CPU-Seite für jeden Chunk und ist langsamer.

### Codierung

Die Audiocodierung ist einfacher als die Videocodierung — es gibt keine Schlüsselbilder, keine Hardware-Beschleunigungskonflikte, und jedes `AudioData` erzeugt genau einen `EncodedAudioChunk`. Der Encoder kann als eine einfache asynchrone Pipeline behandelt werden.

```js
const encoder = new AudioEncoder({
  output(chunk) {
    // send to muxer
  },
  error(e) {
    console.error(e);
  },
});

encoder.configure({
  codec: "opus",
  sampleRate: 48000,
  numberOfChannels: 2,
});

for (const audioData of rawAudio) {
  encoder.encode(audioData);
  audioData.close();
}

await encoder.flush();
```

Siehe den [Leitfaden zur Codecauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection#audio-codecs) für Hinweise zur Auswahl zwischen Opus und AAC.

### Dekodierung

Die Audiodekodierung folgt dem gleichen Muster wie die Codierung. Die Decoder-Konfiguration wird typischerweise von der Demultiplexing-Bibliothek bereitgestellt und nicht vom Entwickler ausgewählt.

```js
const decoder = new AudioDecoder({
  output(audioData) {
    // process AudioData
    audioData.close();
  },
  error(e) {
    console.error(e);
  },
});

// config comes from demuxer library
decoder.configure(decoderConfig);

for (const chunk of encodedChunks) {
  decoder.decode(chunk);
}

await decoder.flush();
```

### AudioData

Ein [`AudioData`](/de/docs/Web/API/AudioData)-Objekt stellt ein Segment von Roh-Audio dar, das typischerweise 0,2–0,5 Sekunden abdeckt. Rohe Samples werden als `Float32Array`-Daten mit der Methode [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo) extrahiert. Das Extraktionsmuster hängt von der `format`-Eigenschaft des `AudioData`-Objekts ab.

Das häufigste Format ist `f32-planar`, bei dem jeder Kanal in einer separaten Ebene gespeichert wird. Verwenden Sie `planeIndex`, um jeden Kanal unabhängig zu kopieren:

```js
// f32-planar: each channel stored separately
const leftChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(leftChannel, { planeIndex: 0 });

const rightChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(rightChannel, { planeIndex: 1 });
```

Das weniger häufige `f32`-Format speichert alle Kanäle ineinander verschachtelt in einem einzigen Array (`[L, R, L, R, ...]`). In diesem Fall kopieren Sie den vollständigen ineinander verschachtelten Puffer und entflechten ihn manuell:

```js
// f32: channels interleaved in a single array
const interleaved = new Float32Array(
  audioData.numberOfFrames * audioData.numberOfChannels,
);
audioData.copyTo(interleaved, { planeIndex: 0 });

const leftChannel = new Float32Array(audioData.numberOfFrames);
const rightChannel = new Float32Array(audioData.numberOfFrames);

for (let i = 0; i < audioData.numberOfFrames; i++) {
  leftChannel[i] = interleaved[i * 2];
  rightChannel[i] = interleaved[i * 2 + 1];
}
```

Um beide Formate zu handhaben:

```js
if (audioData.format.includes("planar")) {
  // f32-planar: copy each channel by planeIndex
} else {
  // f32: copy interleaved, then de-interleave
}
```

Um ein `AudioData` aus rohen Samples zu konstruieren, müssen die Daten für alle Kanäle in einem einzigen `Float32Array` verkettet werden, wobei die Samples jedes Kanals sequentiell (entsprechend der `f32-planar` Anordnung) platziert werden, und `numberOfFrames` muss auf die Anzahl der Samples pro Kanal gesetzt werden:

```js
const framesPerChunk = 1024;
const data = new Float32Array(framesPerChunk * 2); // 2 channels
data.set(leftChannel, 0);
data.set(rightChannel, framesPerChunk);

const audioData = new AudioData({
  format: "f32-planar",
  sampleRate: 48000,
  numberOfFrames: framesPerChunk,
  numberOfChannels: 2,
  timestamp: sourceAudioData.timestamp,
  data,
});
```

Beachten Sie, dass bestimmte AAC Codec-Strings (`mp4a.40.5`, `mp4a.40.05` und `mp4a.40.29`) Konfigurationen entsprechen, die eine Technik namens Spektrale Bandreplikation (SBR) verwenden, die dazu führt, dass der Decoder Audio mit der doppelten Rate ausgibt, die in der Decoder-Konfiguration angegeben ist. Lesen Sie immer direkt `audioData.sampleRate` anstatt anzunehmen, dass sie dem konfigurierten Wert entspricht.

Wie `VideoFrame` müssen auch `AudioData`-Objekte explizit geschlossen werden, um Speicher freizugeben:

```js
audioData.close();
```

Während `AudioData` viel weniger Speicher benötigt als ein `VideoFrame`, hat rohes Audio dennoch einen signifikanten Speicherbedarf — eine Stunde Stereo-Audio bei 48 kHz beträgt ungefähr 1,4 GB. Für große Dateien sollte Audio in Chargen dekodiert und verarbeitet werden anstatt alles auf einmal.

## Siehe auch

- [Videoverarbeitungs-Konzepte](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Codecauswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- [`AudioData`](/de/docs/Web/API/AudioData)
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
