---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{AvailableInWorkers("dedicated")}}

> [!WARNING]
> Browser unterscheiden sich darin, in welchem globalen Kontext sie dieses Interface darstellen (z. B. nur `window` in einigen Browsern und nur dedizierter Worker in anderen), was sie inkompatibel macht. Behalten Sie dies im Hinterkopf, wenn Sie die Unterstützung vergleichen.

Das **`MediaStreamTrackProcessor`**-Interface der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) konsumiert die Quelle eines Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Strom von [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekten.

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor)
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.
- [`window.MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt im {{Glossary("main_thread", "Main-Thread")}}, das sowohl Video als auch Audio verarbeiten kann.

## Instanz-Eigenschaften

- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable)
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) ein Kamera-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepia-Ton-Filter auf die Videoframes anwendet und sie spiegelt. Die Pipeline mündet in einen [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation außerhalb des {{Glossary("main_thread", "Main-Threads")}}.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getVideoTracks();
const worker = new Worker("worker.js");
worker.postMessage({ track }, [track]);
const { data } = await new Promise((r) => {
  worker.onmessage = r;
});
video.srcObject = new MediaStream([data.track]);
```

worker.js:

```js
onmessage = async ({ data: { track } }) => {
  const vtg = new VideoTrackGenerator();
  self.postMessage({ track: vtg.track }, [vtg.track]);
  const { readable } = new MediaStreamTrackProcessor({ track });
  await readable
    .pipeThrough(new TransformStream({ transform }))
    .pipeTo(vtg.writable);
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator)
- [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) auf developer.chrome.com
  > [!NOTE]
  > Dieser Artikel wurde geschrieben, bevor die API auf Worker und Video beschränkt war. Achten Sie auf die Verwendung der nicht standardmäßigen Version von `MediaStreamTrackProcessor`, die auf dem {{Glossary("main_thread", "Main-Thread")}} blockiert.
