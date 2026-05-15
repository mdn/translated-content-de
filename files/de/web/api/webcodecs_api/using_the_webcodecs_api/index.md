---
title: Verwendung der WebCodecs API
slug: Web/API/WebCodecs_API/Using_the_WebCodecs_API
l10n:
  sourceCommit: e81cf36acffe197d01b1ad282c3582ebd7b0b54d
---

{{DefaultAPISidebar("WebCodecs API")}}

Dieser Leitfaden behandelt die grundlegenden Nutzungsmuster der WebCodecs API, einschließlich der Codierung und Dekodierung von Video und Audio sowie der Verwendung von [`VideoFrame`](/de/docs/Web/API/VideoFrame) und [`AudioData`](/de/docs/Web/API/AudioData).

## Videokodierung

Das grundlegende Nutzungsmuster für [`VideoEncoder`](/de/docs/Web/API/VideoEncoder) beginnt mit der Instanziierung, bei der Sie die `output`- und `error`-Callback-Funktionen definieren. Das `output`-Callback erhält ein `EncodedVideoChunk` und einen `metadata`-Parameter — ein `EncodedVideoChunkMetadata`-Wörterbuch, das eine optionale [decoderConfig](/de/docs/Web/API/VideoEncoder/VideoEncoder#decoderconfig)-Eigenschaft enthält. Diese Metadaten werden von Multiplexing-Bibliotheken benötigt, wenn sie in eine Videodatei gemuxt werden sollen.

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

Anschließend müssen Sie den Encoder mit dem Codec-Parameter und verschiedenen anderen Kodierungsparametern wie Breite, Höhe, Bitrate und Bildrate konfigurieren. Siehe den [Leitfaden zur Codec-Auswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection) für Hinweise zur Auswahl eines Codecs.

```js
encoder.configure({
  codec: "vp09.00.40.08.00", // See codec selection guide
  width: 1280,
  height: 720,
  bitrate: 1_000_000, // 1 Mbps
  framerate: 30,
});
```

Dann würden Sie damit beginnen, `VideoFrame`-Objekte zu kodieren, wobei Sie nicht nur das zu kodierende `VideoFrame` angeben, sondern auch den `keyFrame`-Parameter, der angibt, ob das Frame als Keyframe kodiert werden soll oder nicht.

```js
for (let i = 0; i < 60; i++) {
  const timestamp = (i * 1e6) / 30; // 30 fps, in microseconds
  const frame = new VideoFrame(canvas, { timestamp });
  encoder.encode(frame, { keyFrame: i % 60 === 0 });
  frame.close();
}
```

Das erste kodierte Frame sollte ein Keyframe sein — während `VideoEncoder` das erste Frame automatisch als Keyframe erzwingen wird, selbst wenn es nicht explizit gekennzeichnet ist, ist es eine gute Praxis, es explizit festzulegen. Typische Keyframe-Intervalle liegen bei ein Mal alle 30 oder 60 Frames. Die Verwendung von mehr Keyframes erhöht die Dateigröße des Videos, während die Verwendung von weniger Keyframes zu instabiler Videowiedergabe bei einigen Videoplayern führen kann.

Es ist wichtig, `VideoFrame`-Objekte sofort nach dem Senden zur Kodierung zu schließen, um Speicherlecks zu vermeiden. `VideoFrame`-Objekte sind groß genug, dass Anwendungen abstürzen können, wenn weniger als 100 aktive Frames im Speicher sind.

Beachten Sie, dass `VideoEncoder` auch eine Warteschlange für zu kodierende Frames hat, die `encodeQueue` genannt wird. Wenn Sie eine Animation mit 30 fps rendern, führen Sie `encoder.encode(frame)` bei jedem Rendern aus, aber der Encoder kann nur mit 10 fps kodieren, dann wird die Encoder-Warteschlange schließlich so lange wachsen, bis sie keinen Videospeicher mehr hat und der Prozess abstürzt.

Sie müssen daher verwalten, wie und wann Sie Frames an den Encoder senden, indem Sie innerhalb Ihrer Render-Schleife die [`VideoEncoder.encodeQueueSize`](/de/docs/Web/API/VideoEncoder/encodeQueueSize) überprüfen und sicherstellen, dass sie nicht ungebunden wächst.

Es ist möglich, das `dequeue`-Ereignis zu verwenden, um zu erkennen, wann die Encode-Warteschlange reduziert wird, um das Abfragen der `encodeQueueSize` zu vermeiden.

```js
encoder.addEventListener("dequeue", (event) => {
  // Queue up more encoding work
});
```

Sobald Sie alle Frames zur Kodierung gesendet haben, sollten Sie die `flush()`-Methode aufrufen.

```js
await encoder.flush();
```

Je nach Gerät/Browser gibt der Encoder möglicherweise die letzten `EncodedVideoChunk`-Objekte nicht zurück, bis `flush()` aufgerufen wird. Sobald Sie die `VideoEncoder`-Nutzung vollständig abgeschlossen haben, sollten Sie die `close()`-Methode aufrufen, um Systemressourcen freizugeben.

```js
encoder.close();
```

Ein `VideoEncoder` kann während der Kodierung aus verschiedenen Gründen einen Fehler auslösen, wie etwa wenn der Benutzer den Tab wechselt und der Browser die Ressourcen wiedererlangt. Wenn ein Fehler auftritt, wechselt der Encoder dauerhaft in den Zustand `"closed"`. Es ist nicht möglich, einen geschlossenen Encoder neu zu konfigurieren — eine neue `VideoEncoder`-Instanz muss erstellt werden. Das erste von dem neuen Encoder kodierte Frame muss ein Keyframe sein.

```js
if (encoder.state === "closed") {
  // Close the old encoder, instantiate and configure a new encoder
}

encoder.encode(frame, { keyFrame: true });
```

## Videodekodierung

Ebenso beginnen Sie bei der Dekodierung von Videos mit der Instanziierung des [`VideoDecoder`](/de/docs/Web/API/VideoDecoder) mit den `output`- und `error`-Callback-Funktionen, wobei das `output`-Callback `VideoFrame`-Objekte erhält, die vom Decoder zurückgegeben werden.

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

Anschließend müssen Sie den Decoder konfigurieren. Wenn Sie eine Videodatei dekodieren, kann eine Demultiplex-Bibliothek die richtige Decoder-Konfiguration bereitstellen (siehe [Muxing und Demuxing](/de/docs/Web/API/WebCodecs_API#muxing_and_demuxing)). Beim Streaming von Video zwischen einem WebCodecs-Sender und -Empfänger würde die Decoder-Konfiguration identisch mit den Metadaten sein, die von dem `VideoEncoder` zurückgegeben werden, der die kodierten Chunks erzeugt hat.

```js
decoder.configure(/* config */);
```

Wenn Sie eine Videodatei dekodieren, benötigen Sie eine Demultiplex-Bibliothek, um Video-Chunks zu extrahieren. Sie können dann die Chunks zur Dekodierung einreichen. Denken Sie daran, dass Sie nicht nur einen Chunk zur Dekodierung senden und darauf warten sollten, dass das Frame ausgegeben wird, bevor Sie den nächsten Chunk senden. Abhängig vom Browser/Gerät und dem Video selbst müssen Sie möglicherweise mehrere Chunks senden, bevor der Decoder beginnt, Frames zurückzugeben, und die Mindestanzahl von Chunks hängt vom jeweiligen Gerät ab.

```js
let chunkIndex = 0;
// Process chunks in batches, not one at a time nor all at once
for (let i = 0; i < BATCH_LENGTH; i++) {
  decoder.decode(chunks[chunkIndex]);
  chunkIndex++;
}
```

Ähnlich wie `VideoEncoder` unterhält `VideoDecoder` eine Dekodier-Warteschlange, die verwaltet werden muss. Wenn Sie Tausende von Chunks auf einmal an den `VideoDecoder` senden, könnte der Decoder schließen oder fehlschlagen, sodass Ihre Anwendung sicherstellen muss, dass die [`VideoDecoder.decodeQueueSize`](/de/docs/Web/API/VideoDecoder/decodeQueueSize) nicht ungebunden wächst. Wie beim Encoder können Sie auch das `dequeue`-Ereignis verwenden, um bei der Verwaltung der Dekodier-Warteschlange zu helfen.

```js
decoder.addEventListener("dequeue", (event) => {
  // Queue up more decoding work
});
```

Sobald Sie alle Frames zur Dekodierung gesendet haben, können Sie `flush` ausführen.

```js
await decoder.flush();
```

Je nach Gerät/Browser gibt der Decoder die letzten `VideoFrame`-Objekte möglicherweise nicht zurück, bis `flush()` aufgerufen wird. Sobald Sie die `VideoDecoder`-Nutzung vollständig abgeschlossen haben, sollten Sie die `close()`-Methode aufrufen, um Systemressourcen freizugeben.

```js
decoder.close();
```

Ein `VideoDecoder` kann aus verschiedenen Gründen einen Fehler beim Dekodieren auslösen, wie z.B. beschädigte oder fehlende Daten in einem Quell-`EncodedVideoChunk`. Wenn ein Decoder fehlschlägt, wechselt er dauerhaft in den Zustand `"closed"`, und es muss eine neue `VideoDecoder`-Instanz erstellt werden. Der erste von dem neuen Decoder dekodierte Chunk muss ein Keyframe sein, daher muss von der aktuellen Position bis zum nächsten Keyframe gesucht werden, bevor fortgefahren wird.

```js
let chunkIndex = 0;

for (let i = 0; i < BATCH_LENGTH; i++) {
  // Check if decoder failed
  if (decoder.state === "closed") {
    // Seek forward to the next key frame from the current position
    for (let j = chunkIndex; j < chunks.length; j++) {
      if (chunks[j].type === "key") {
        chunkIndex = j;
        break;
      }
    }
    // Close the old decoder, instantiate and configure a new decoder
  }
  decoder.decode(chunks[chunkIndex]);
  chunkIndex++;
}
```

## VideoFrame

Ein [`VideoFrame`](/de/docs/Web/API/VideoFrame) repräsentiert ein einzelnes unkomprimiertes Video-Frame, einschließlich seiner Pixeldaten und Metadaten wie seinem Zeitstempel. Es wird sowohl vom `VideoDecoder` beim Dekodieren codierter Videos zurückgegeben als auch aus einer Vielzahl von Bildquellen erzeugt.

### Erstellung von Videoframes

Ein `VideoFrame` kann aus jeder Bildquelle konstruiert werden. Beachten Sie, dass Zeitstempel in Mikrosekunden angegeben werden.

```js
const bitmapFrame = new VideoFrame(imgBitmap, { timestamp: 0 });
const imageFrame = new VideoFrame(htmlImageEl, { timestamp: 0 });
const videoFrame = new VideoFrame(htmlVideoEl, { timestamp: 0 });
const canvasFrame = new VideoFrame(canvasEl, { timestamp: 0 });
```

Das Erstellen eines `VideoFrame` aus einem `Canvas` ist typischerweise der Weg, wie Sie Video in einer Videobearbeitungsanwendung kodieren würden, wobei Quellvideos und Bilder im Rahmen eines Canvas-Kontextes verwendet werden, um Effekte und Transformationen anzuwenden, und das `Canvas` kann sowohl vom Benutzer vorab betrachtet als auch als Bildquelle für ein zu kodierendes `VideoFrame` verwendet werden.

Sie können auch direkt ein `VideoFrame` aus Binärdaten erstellen, wie z. B. einem `ArrayBuffer`; Sie müssen jedoch das `format` und die Metadaten angeben und sicherstellen, dass die zum Erstellen des Frames verwendeten Daten dem angegebenen [format](/de/docs/Web/API/VideoFrame/format) entsprechen.

```js
const rgbaFrame = new VideoFrame(rgbaData, {
  timestamp: 0,
  format: "RGBA",
  codedWidth: 1920,
  codedHeight: 1080,
});
```

`VideoFrame`-Objekte sind an Daten im Grafikspeicher gebunden. Beim Erstellen eines `VideoFrame` aus einem `Canvas`, `Bitmap`, `Video` oder `Image` werden Daten vom Grafikspeicher zum Grafikspeicher kopiert, was relativ effizienter ist.

Ein aus Binärdaten (z.B. `ArrayBuffer` oder `Uint8ClampedArray`) konstruiertes `VideoFrame` wird eine CPU→Grafikspeicher-Kopieroperation erfordern, was, wenn es wiederholt durchgeführt wird, zu Leistungseinbußen führen kann.

Schließlich können `VideoFrame`-Objekte auch durch das Dekodieren von `EncodedVideoChunk`-Objekten über einen `VideoDecoder` erzeugt werden, wie im Abschnitt [Videodekodierung](#videodekodierung) oben gezeigt.

### Konsum von Videoframes

Dekodiertes Video kann auch im Browser abgespielt werden, indem `VideoFrame`-Objekte über eine der Canvas-Rendering-Methoden in ein `Canvas` gerendert werden. Verschiedene Rendering-Methoden haben unterschiedliche Leistungsmerkmale, die relevant sein könnten, wenn rechenintensive Videoverarbeitungsoperationen ausgeführt werden.

#### Canvas2D

Frames können mit der `drawImage`-Methode auf ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) gezeichnet werden:

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("2d");
ctx.drawImage(frame, 0, 0);
```

Während der 2D-Canvas-Kontext eine einfache, aber flexible API hat, verwenden Browser unter der Haube unterschiedliche Implementierungen, was zu inkonsistenter und im Allgemeinen schlechterer Leistung über verschiedene Browser hinweg führt.

#### BitmapRenderer

Frames können auch über den [`ImageBitmapRenderingContext`](/de/docs/Web/API/ImageBitmapRenderingContext) auf ein Canvas gerendert werden, indem ein [`ImageBitmap`](/de/docs/Web/API/ImageBitmap) aus dem Frame erstellt und es über die Methode `transferFromImageBitmap` auf das Canvas gerendert wird.

```js
const canvas = new OffscreenCanvas(width, height);
const ctx = canvas.getContext("bitmaprenderer");

const bitmap = await createImageBitmap(frame);
ctx.transferFromImageBitmap(bitmap);
frame.close();
```

Diese Methode beinhaltet das Erstellen einer einzigen Kopie des Frames im Grafikspeicher, was zu konsistenterer und im Allgemeinen besserer Leistung über Browser hinweg als die Canvas2D-API führt und gleichzeitig relativ einfach ist.

#### WebGPU

Der effizienteste Weg, ein `VideoFrame` auf ein Canvas zu rendern, ist über die Methode [importExternalTexture](/de/docs/Web/API/GPUDevice/importExternalTexture) in WebGPU.

```js
const externalTexture = device.importExternalTexture({ source: frame });
```

`importExternalTexture` ist effizient, da es einen null kopierenden Vorgang verursacht und genau dasselbe `VideoFrame`-Objekt im Speicher innerhalb einer WebGPU-Pipeline verwendet. Es ist die leistungsstärkste Methode zum Rendern eines `VideoFrame`, aber auch die komplexeste beim Einrichten.

### Speicher

Da `VideoFrame`-Objekte signifikanten GPU-Speicher konsumieren können und die Videobearbeitung das Manipulieren vieler Frames pro Sekunde beinhaltet, sollte besonderer Wert darauf gelegt werden, Speicher zu verwalten und Speicherlecks zu vermeiden, um Abstürze der Anwendung zu vermeiden.

In erster Linie müssen Frames explizit freigegeben werden, wenn sie nicht mehr benötigt werden.

```js
frame.close();
```

Beim Kodieren können Sie das Frame schließen, sobald Sie es zur Kodierung senden.

```js
encoder.encode(frame, { keyFrame: true });
frame.close();
```

Sie sollten die Frames auch unmittelbar nach dem Rendern schließen.

```js
ctx.drawImage(frame, 0, 0);
frame.close();
```

Beim Übertragen eines `VideoFrame` zwischen Threads (z.B. einem Worker) sollte es als [Transferable Object](/de/docs/Web/API/Web_Workers_API/Transferable_objects) übertragen werden.

```js
worker.postMessage(frame, [frame]);
```

## Audio

WebCodecs unterstützt die Kodierung und Dekodierung von Audio über [`AudioEncoder`](/de/docs/Web/API/AudioEncoder) und [`AudioDecoder`](/de/docs/Web/API/AudioDecoder), unter Verwendung der Codecs Opus und AAC. Bevor Sie mit Audio arbeiten, gibt es einige wichtige Hinweise:

- **Durchleitung**: Wenn Sie Video transkodieren und das Audio nicht verändern müssen, brauchen Sie das Audio überhaupt nicht zu dekodieren und neu zu kodieren. `EncodedAudioChunk`-Objekte können direkt von einer Demuxing-Bibliothek zu einer Muxing-Bibliothek übergeben werden, was erheblich effizienter ist.
- **Wiedergabe**: Die WebCodecs API hat keine eingebaute Audiowiedergabe. Für die Wiedergabe verwenden Sie die [Web Audio API](/de/docs/Web/API/Web_Audio_API).
- **Formatunterstützung**: WebCodecs unterstützt nur die Kodierung von Opus und AAC. Für MP3 oder andere Formate ist eine Drittanbieter-Bibliothek erforderlich.

### Wiedergabe

Es gibt keine direkte Verbindung zwischen WebCodecs und der Web Audio API. [`AudioData`](/de/docs/Web/API/AudioData)-Objekte können nicht direkt an die Web Audio API übergeben werden, die [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zur Darstellung roher Audiodaten verwendet.

Der empfohlene Ansatz zur Wiedergabe ist, `EncodedAudioChunk`-Objekte mit einer Muxing-Bibliothek in einen Speicherpuffer zu muxen und dann diesen Puffer über [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) zu dekodieren:

```js
// mux encoded chunks to an ArrayBuffer using a muxing library
const buffer = await muxAudioToBuffer(encodedChunks);
const audioBuffer = await audioContext.decodeAudioData(buffer);
const source = audioContext.createBufferSource();
source.buffer = audioBuffer;
source.connect(audioContext.destination);
source.start();
```

Alternativ können Sie rohe Samples aus `AudioData` über `copyTo()` extrahieren und manuell einen `AudioBuffer` konstruieren, aber dies erfordert eine CPU-seitige Datenkopie für jeden Chunk und ist langsamer.

### Kodierung

Die Audiokodierung ist einfacher als die Videokodierung — es gibt keine Keyframes, keine Hardware-Beschleunigungsprobleme, und jedes `AudioData` erzeugt genau einen `EncodedAudioChunk`. Der Encoder kann als einfacher asynchroner Pipeline behandelt werden.

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

Siehe den [Leitfaden zur Codec-Auswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection#audio_codecs) für Hinweise zur Auswahl zwischen Opus und AAC.

### Dekodierung

Die Audiodekodierung folgt demselben Muster wie die Kodierung. Die Decoder-Konfiguration wird typischerweise von der Demuxing-Bibliothek bereitgestellt und nicht vom Entwickler ausgewählt.

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

Ein [`AudioData`](/de/docs/Web/API/AudioData)-Objekt repräsentiert ein Segment von Rohaudio, typischerweise über einen Zeitraum von 0,2–0,5 Sekunden. Rohe Samples werden als `Float32Array`-Daten mithilfe der Methode [`AudioData.copyTo()`](/de/docs/Web/API/AudioData/copyTo) extrahiert. Das Extraktionsmuster hängt von der `format`-Eigenschaft des `AudioData`-Objekts ab.

Das häufigste Format ist `f32-planar`, bei dem jeder Kanal in einer separaten Ebene gespeichert wird. Verwenden Sie `planeIndex`, um jeden Kanal unabhängig zu kopieren:

```js
// f32-planar: each channel stored separately
const leftChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(leftChannel, { planeIndex: 0 });

const rightChannel = new Float32Array(audioData.numberOfFrames);
audioData.copyTo(rightChannel, { planeIndex: 1 });
```

Das weniger häufige `f32`-Format speichert alle Kanäle ineinander gestaffelt in einem einzigen Array (`[L, R, L, R, ...]`). In diesem Fall kopieren Sie den gesamten ineinander verschachtelten Puffer und de-multiplexieren ihn manuell:

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

Um beide Formate zu verarbeiten:

```js
if (audioData.format.includes("planar")) {
  // f32-planar: copy each channel by planeIndex
} else {
  // f32: copy interleaved, then de-interleave
}
```

Um ein `AudioData` aus rohen Samples zu konstruieren, müssen die Daten für alle Kanäle in einem einzelnen `Float32Array` verkettet werden, wobei die Samples jedes Kanals sequentiell angeordnet werden (entspricht dem `f32-planar`-Layout), und die `numberOfFrames` muss auf die Anzahl der Samples pro Kanal eingestellt werden:

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

Beachten Sie, dass bestimmte AAC-Codec-Zeichenfolgen (`mp4a.40.5`, `mp4a.40.05` und `mp4a.40.29`) Konfigurationen entsprechen, die eine Technik namens Spectral Band Replication (SBR) verwenden, die dazu führt, dass der Decoder Audio mit der doppelten Samplerate ausgibt, die in der Decoder-Konfiguration angegeben ist. Lesen Sie immer `audioData.sampleRate` direkt ab, anstatt anzunehmen, dass es mit dem konfigurierten Wert übereinstimmt.

Wie `VideoFrame`-Objekte müssen `AudioData`-Objekte explizit geschlossen werden, um Speicher freizugeben:

```js
audioData.close();
```

Während `AudioData` viel weniger Speicher als ein `VideoFrame` benötigt, hat rohes Audio immer noch einen erheblichen Speicherbedarf — eine Stunde Stereo-Audio bei 48 kHz liegt bei ungefähr 1,4 GB. Für große Dateien sollte Audio in Chargen dekodiert und verarbeitet werden, anstatt alles auf einmal.

## Siehe auch

- [Konzepte für die Videobearbeitung](/de/docs/Web/API/WebCodecs_API/Video_processing_concepts)
- [Codec-Auswahl](/de/docs/Web/API/WebCodecs_API/Codec_selection)
- [`VideoEncoder`](/de/docs/Web/API/VideoEncoder)
- [`VideoDecoder`](/de/docs/Web/API/VideoDecoder)
- [`AudioEncoder`](/de/docs/Web/API/AudioEncoder)
- [`AudioDecoder`](/de/docs/Web/API/AudioDecoder)
- [`VideoFrame`](/de/docs/Web/API/VideoFrame)
- [`AudioData`](/de/docs/Web/API/AudioData)
- [`EncodedVideoChunk`](/de/docs/Web/API/EncodedVideoChunk)
- [`EncodedAudioChunk`](/de/docs/Web/API/EncodedAudioChunk)
