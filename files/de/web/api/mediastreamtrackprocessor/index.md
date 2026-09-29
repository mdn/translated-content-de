---
title: MediaStreamTrackProcessor
slug: Web/API/MediaStreamTrackProcessor
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Insertable Streams for MediaStreamTrack API")}}{{AvailableInWorkers("dedicated")}}

> [!WARNING]
> Browser unterscheiden sich darin, in welchem globalen Kontext sie diese Schnittstelle bereitstellen (z. B. in manchen Browsern nur im Fenster und in anderen nur in einem Dedicated Worker). Dadurch sind die Implementierungen nicht miteinander kompatibel. Beachten Sie dies beim Vergleich der Unterstützung.

Die Schnittstelle **`MediaStreamTrackProcessor`** der [Insertable Streams for MediaStreamTrack API](/de/docs/Web/API/Insertable_Streams_for_MediaStreamTrack_API) verarbeitet die Quelle eines Video-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Objekts und erzeugt einen Stream von [`VideoFrame`](/de/docs/Web/API/VideoFrame)-Objekten.

## Konstruktor

- [`MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor)
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt.
- [`window.MediaStreamTrackProcessor()`](/de/docs/Web/API/MediaStreamTrackProcessor/MediaStreamTrackProcessor) {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Erstellt ein neues `MediaStreamTrackProcessor`-Objekt auf dem {{Glossary("main_thread", "Hauptthread")}}, das sowohl Video als auch Audio verarbeiten kann.

## Instanzeigenschaften

- [`MediaStreamTrackProcessor.discardedFrames`](/de/docs/Web/API/MediaStreamTrackProcessor/discardedFrames) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Frames der Prozessor verworfen hat.
- [`MediaStreamTrackProcessor.readable`](/de/docs/Web/API/MediaStreamTrackProcessor/readable) {{ReadOnlyInline}}
  - : Gibt einen [`ReadableStream`](/de/docs/Web/API/ReadableStream) zurück.
- [`MediaStreamTrackProcessor.totalFrames`](/de/docs/Web/API/MediaStreamTrackProcessor/totalFrames) {{ReadOnlyInline}} {{experimental_inline}}
  - : Eine Zahl, die angibt, wie viele Frames der Prozessor insgesamt empfangen hat.

## Beispiele

Das folgende Beispiel stammt aus dem Artikel [Unbundling MediaStreamTrackProcessor and VideoTrackGenerator](https://blog.mozilla.org/webrtc/unbundling-mediastreamtrackprocessor-and-videotrackgenerator/). Es [überträgt](/de/docs/Web/API/Web_Workers_API/Transferable_objects) einen Kamera-[`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zur Verarbeitung an einen Worker. Der Worker erstellt eine Verarbeitungskette, die einen Sepiafilter auf die Videoframes anwendet und sie spiegelt. Die Verarbeitungskette endet in einem [`VideoTrackGenerator`](/de/docs/Web/API/VideoTrackGenerator), dessen [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) zurückübertragen und wiedergegeben wird. Die Mediendaten durchlaufen nun in Echtzeit die Transformation außerhalb des {{Glossary("main_thread", "Hauptthreads")}}.

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
- [Einfügbare Streams für MediaStreamTrack](https://developer.chrome.com/docs/capabilities/web-apis/mediastreamtrack-insertable-media-processing) auf developer.chrome.com
  > [!NOTE]
  > Dieser Artikel wurde geschrieben, bevor die API auf Worker und Video beschränkt wurde. Beachten Sie, dass darin die nicht standardisierte Version von `MediaStreamTrackProcessor` verwendet wird, die den {{Glossary("main_thread", "Hauptthread")}} blockiert.
