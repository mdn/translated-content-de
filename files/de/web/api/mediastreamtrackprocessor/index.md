---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

> [!WARNING]
> Browser unterscheiden sich darin, in welchem globalen Kontext sie diese Schnittstelle bereitstellen (z. B. nur im Fenster in einigen Browsern und nur im dedizierten Worker in anderen), wodurch sie inkompatibel werden. Beachten Sie dies beim Vergleich der Unterstützung.

Die **`MediaStreamTrackProcessor`**-Schnittstelle der [Insertable Streams für MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verarbeitet die Quelle eines Video-`MediaStreamTrack`-Objekts und erzeugt einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekten.

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.
- [`window.MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt im {{Glossary("main_thread", "Main-Thread")}}, das sowohl Video als auch Audio verarbeiten kann.

## Instanzeigenschaften

- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable) {{Experimental_Inline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen Kamera-`MediaStreamTrack` an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen sepiafarbenen Filter auf die Videobilder anwendet und sie spiegelt. Die Pipeline endet in einem [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen `MediaStreamTrack` zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation außerhalb des {{Glossary("main_thread", "Main-Thread")}}.

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator)
- [Insertable streams für MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) auf developer.chrome.com
  > [!NOTE]
  > Dieser Artikel wurde geschrieben, bevor die API auf Worker und Video beschränkt wurde. Achten Sie auf die Verwendung der nicht standardisierten Version von `MediaStreamTrackProcessor`, die den {{Glossary("main_thread", "Main-Thread")}} blockiert.
