---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: c655f38c10ba17b853b0e66b43cf4cf2b176e424
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{AvailableInWorkers("dedicated")}}

> [!WARNING]
> Browser unterscheiden sich darin, in welchem globalen Kontext sie dieses Interface bereitstellen (z.B. nur window in einigen Browsern und nur dedizierter Worker in anderen), was sie inkompatibel macht. Beachten Sie dies beim Vergleich der Unterstützung.

Das **`MediaStreamTrackProcessor`**-Interface der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) konsumiert die Quelle eines Video-`MediaStreamTrack`-Objekts und erzeugt einen Stream von `VideoFrame`-Objekten.

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor)
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.
- [`window.MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt im {{Glossary("main_thread", "Haupt-Thread")}}, das sowohl Video als auch Audio verarbeiten kann.

## Instanzeigenschaften

- [`MediaStreamTrackProcessor.discardedFrames`](/de/docs/Web/API/MediaStreamTrackProcessor/discardedFrames)
  - : Eine Zahl, die angibt, wie viele Frames vom Prozessor verworfen wurden.
- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable)
  - : Gibt einen `ReadableStream` zurück.
- [`MediaStreamTrackProcessor.totalFrames`](/de/docs/Web/API/MediaStreamTrackProcessor/totalFrames)
  - : Eine Zahl, die angibt, wie viele Frames insgesamt vom Prozessor empfangen wurden.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) eine Kamera-`MediaStreamTrack` an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepiatonfilter auf die Video-Frames anwendet und diese spiegelt. Die Pipeline mündet in einem `VideoTrackGenerator`, dessen `MediaStreamTrack` zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation abseits des {{Glossary("main_thread", "Haupt-Threads")}}.

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
  > Dieser Artikel wurde verfasst, bevor die API auf Worker und Video beschränkt wurde. Achten Sie auf die Verwendung der nicht-standardisierten Version von `MediaStreamTrackProcessor`, die den {{Glossary("main_thread", "Haupt-Thread")}} blockiert.
