---
title: VideoTrackGenerator
slug: Web/API/VideoTrackGenerator
l10n:
  sourceCommit: f2dc3d5367203c860cf1a71ce0e972f018523849
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

Das **`VideoTrackGenerator`**-Interface der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) hat eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft, die als Quelle eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient, indem sie einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)s als Eingabe verarbeitet.

## Konstruktor

- [`VideoTrackGenerator()`](/de/docs/Web/API/VideoTrackGenerator/VideoTrackGenerator) {{Experimental_Inline}}
  - : Erstellt ein neues `VideoTrackGenerator` Objekt, das [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte akzeptiert.

## Instanzeigenschaften

- [`VideoTrackGenerator.muted`](/de/docs/Web/API/VideoTrackGenerator/muted) {{Experimental_Inline}}
  - : Eine Boole'sche Eigenschaft, um die Erzeugung von Videoframes im Ausgabetrack vorübergehend zu stoppen oder fortzusetzen.
- [`VideoTrackGenerator.track`](/de/docs/Web/API/VideoTrackGenerator/track) {{Experimental_Inline}}
  - : Der Ausgabe-`MediaStreamTrack`.
- [`VideoTrackGenerator.writable`](/de/docs/Web/API/VideoTrackGenerator/writable) {{Experimental_Inline}}
  - : Der Eingabe-`WritableStream`.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen Kamera-`MediaStreamTrack` an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepia-Ton-Filter auf die Videoframes anwendet und diese spiegelt. Die Pipeline endet in einem `VideoTrackGenerator`, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und gespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation fern des {{Glossary("main_thread", "Haupt-Threads")}}.

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

- [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor)
