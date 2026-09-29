---
title: VideoTrackGenerator
slug: Web/API/VideoTrackGenerator
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

Die Schnittstelle **`VideoTrackGenerator`** der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verfügt über eine [`WritableStream`](/de/docs/Web/API/WritableStream)-Eigenschaft, die als Quelle für einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) dient, indem sie einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekten als Eingabe verarbeitet.

## Konstruktor

- [`VideoTrackGenerator()`](/de/docs/Web/API/VideoTrackGenerator/VideoTrackGenerator) {{Experimental_Inline}}
  - : Erstellt ein neues `VideoTrackGenerator`-Objekt, das [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekte entgegennimmt.

## Instanzeigenschaften

- [`VideoTrackGenerator.muted`](/de/docs/Web/API/VideoTrackGenerator/muted) {{Experimental_Inline}}
  - : Eine boolesche Eigenschaft, mit der die Erzeugung von Videoframes im Ausgabetrack vorübergehend angehalten oder fortgesetzt werden kann.
- [`VideoTrackGenerator.track`](/de/docs/Web/API/VideoTrackGenerator/track) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der ausgegebene [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack).
- [`VideoTrackGenerator.writable`](/de/docs/Web/API/VideoTrackGenerator/writable) {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Der [`WritableStream`](/de/docs/Web/API/WritableStream) für die Eingabe.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) einer Kamera zur Verarbeitung an einen Worker. Der Worker erstellt eine Verarbeitungskette, die einen Sepiafilter auf die Videoframes anwendet und sie spiegelt. Die Verarbeitungskette endet in einem `VideoTrackGenerator`, dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und wiedergegeben wird. Die Mediendaten durchlaufen die Transformation nun in Echtzeit außerhalb des {{Glossary("main_thread", "Hauptthreads")}}.

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
