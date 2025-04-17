---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

> [!WARNING]
> Browser unterscheiden sich darin, in welchem globalen Kontext sie diese Schnittstelle bereitstellen (z. B. nur Window in einigen Browsern und nur dedizierten Workers in anderen), was sie inkompatibel macht. Beachten Sie dies beim Vergleichen der Unterstützung.

Die **`MediaStreamTrackProcessor`** Schnittstelle der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) nutzt die Quelle eines Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Strom von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s.

Diese Schnittstelle ist nur in [`dedizierten Workers`](/de/docs/Web/API/Worker) verfügbar (außer wie angegeben).

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}}

  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.

- [`window.MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt auf dem {{Glossary("main_thread", "Main-Thread")}}, das sowohl Video als auch Audio verarbeiten kann.

## Instanzeigenschaften

- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable) {{Experimental_Inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen Kamera-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu einem Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepia-Filter auf die Videoframes anwendet und sie spiegelt. Die Pipeline mündet in einen [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation abseits des {{Glossary("main_thread", "Main-Threads")}}.

```js
const stream = await navigator.mediaDevices.getUserMedia({ video: true });
const [track] = stream.getVideoTracks();
const worker = new Worker("worker.js");
worker.postMessage({ track }, [track]);
const { data } = await new Promise((r) => (worker.onmessage = r));
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

## Siehe auch

- [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator)
- Der ältere Artikel [Insertable streams for MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) wurde geschrieben, bevor die API auf Workers und Video beschränkt wurde (achten Sie auf die Verwendung der nicht standardisierten Version von [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor), die auf dem {{Glossary("main_thread", "Main-Thread")}} blockiert)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
