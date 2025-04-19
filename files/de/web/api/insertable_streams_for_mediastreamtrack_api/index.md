---
title: Insertable Streams for MediaStreamTrack API
slug: Web/API/Insertable_Streams_for_MediaStreamTrack_API
l10n:
  sourceCommit: c486da8298cdfdba0556a190d8e3f92e9aa117bb
---

{{DefaultAPISidebar("Insertable Streams for MediaStreamTrack API")}}{{SeeCompatTable}}{{AvailableInWorkers("dedicated")}}

Die **Insertable Streams für die MediaStreamTrack API** bietet eine Möglichkeit, die Videoframes eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zu verarbeiten, während sie konsumiert werden.

## Konzepte und Verwendung

Beim Verarbeiten von Echtzeitvideos möchten Sie manchmal visuelle Elemente einfügen oder den Videoframe-Stream anderweitig verarbeiten. Beispielsweise könnte eine Anwendung zwei Tracks enthalten, die kombiniert werden müssen, wie eine Wetterkarte und ein Video eines Präsentators, der die Karte erklärt. Oder Sie möchten eine Verarbeitung auf einem Track durchführen, um Hintergründe zu verwischen oder andere Elemente einzuführen (wie das Hinzufügen lustiger Hüte zu Personen usw.). Die hier beschriebenen APIs bieten direkten Zugriff auf den Videostream und ermöglichen es Ihnen, diesen in Echtzeit zu manipulieren.

Um optimale Leistung zu gewährleisten, sind die APIs nur in [dedizierten Workern](/de/docs/Web/API/DedicatedWorkerGlobalScope) verfügbar (sofern nicht anders angegeben).

## Schnittstellen

- [`MediaStreamTrackProcessor`](/de/docs/Web/API/MediaStreamTrackProcessor) {{Experimental_Inline}}
  - : Konsumiert die Quelle eines [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Stream von Videoframes.
- [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator) {{Experimental_Inline}}
  - : Erstellt einen [`WritableStream`](/de/docs/Web/API/WritableStream), der als [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Videoquelle fungiert.
- [`MediaStreamTrackGenerator`](/de/docs/Web/API/MediaStreamTrackGenerator) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt einen [`WritableStream`](/de/docs/Web/API/WritableStream), der als [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Quelle für entweder Video oder Audio fungiert. Nur im {{Glossary("main_thread", "Hauptthread")}} verfügbar.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) eine Kamera [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) an einen Worker zur Verarbeitung. Der Worker erstellt eine Pipeline, die einen Sepiaton-Filter auf die Videoframes anwendet und sie spiegelt. Die Pipeline endet in einem [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und abgespielt wird. Die Medien fließen nun in Echtzeit durch die Transformation außerhalb des {{Glossary("main_thread", "Hauptthreads")}}.

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
