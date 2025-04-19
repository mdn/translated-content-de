---
title: VideoTrackGenerator
slug: Web/API/VideoTrackGenerator
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

Die **`VideoTrackGenerator`**-Schnittstelle der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verfügt über eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft, die als Quelle für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient, indem sie einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s als Eingabe konsumiert.

## Konstruktor

- [`VideoTrackGenerator()`](/de/docs/Web/API/VideoTrackGenerator/VideoTrackGenerator) {{Experimental_Inline}}
  - : Erstellt ein neues `VideoTrackGenerator`-Objekt, das [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte akzeptiert.

## Instanz-Eigenschaften

- [`VideoTrackGenerator.muted`](/de/docs/Web/API/VideoTrackGenerator/muted) {{Experimental_Inline}}
  - : Eine Boolesche Eigenschaft, um die Erzeugung von Videobildern im Ausgabetrack vorübergehend zu unterbrechen oder fortzusetzen.
- [`VideoTrackGenerator.track`](/de/docs/Web/API/VideoTrackGenerator/track) {{Experimental_Inline}}
  - : Der Ausgabestream [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).
- [`VideoTrackGenerator.writable`](/de/docs/Web/API/VideoTrackGenerator/writable) {{Experimental_Inline}}
  - : Der Eingabe- [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) eine Kamera- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepia-Ton-Filter auf die Videobilder anwendet und diese spiegelt. Die Pipeline endet in einem `VideoTrackGenerator`, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation abseits des {{Glossary("main_thread", "Hauptthreads")}}.

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

- [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)
