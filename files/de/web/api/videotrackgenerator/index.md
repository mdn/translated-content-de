---
title: VideoTrackGenerator
slug: Web/API/VideoTrackGenerator
l10n:
  sourceCommit: 62e6088450ab10db4697d190dd54d09dd9a0791a
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}

Das **`VideoTrackGenerator`** Interface der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verfügt über eine [`WritableStream`](/de/docs/Web/API/WritableStream) Eigenschaft, die als [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) Quelle dient, indem sie einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s als Eingabe verarbeitet.

Dieses Interface ist nur in [`dedicated workers`](/de/docs/Web/API/Worker) verfügbar.

## Konstruktor

- [`VideoTrackGenerator()`](/de/docs/Web/API/VideoTrackGenerator/VideoTrackGenerator) {{Experimental_Inline}}
  - : Erstellt ein neues `VideoTrackGenerator` Objekt, das [`VideoFrame`](/de/docs/Web/API/VideoFrame) Objekte akzeptiert.

## Instanz-Eigenschaften

- [`VideoTrackGenerator.muted`](/de/docs/Web/API/VideoTrackGenerator/muted) {{Experimental_Inline}}

  - : Eine boolesche Eigenschaft, um die Erzeugung von Video-Frames im Ausgabetrack vorübergehend zu stoppen oder fortzusetzen.

- [`VideoTrackGenerator.track`](/de/docs/Web/API/VideoTrackGenerator/track) {{Experimental_Inline}}

  - : Der Ausgabe [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).

- [`VideoTrackGenerator.writable`](/de/docs/Web/API/VideoTrackGenerator/writable) {{Experimental_Inline}}
  - : Der Eingabe [`WritableStream`](/de/docs/Web/API/WritableStream).

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen Kamera-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepia-Filter auf die Video-Frames anwendet und diese spiegelt. Die Pipeline endet in einem [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Umwandlung abseits des {{Glossary("main_thread", "Hauptthreads")}}.

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

- [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
