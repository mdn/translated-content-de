---
title: ManagedSourceBuffer
slug: Web/API/ManagedSourceBuffer
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die **`ManagedSourceBuffer`**-Schnittstelle der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ist ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), der von einem [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) erstellt wird, wenn [`addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer) aufgerufen wird. Sie erbt alle Eigenschaften und Methoden von `SourceBuffer` und löst zusätzlich ein [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis aus, wann immer sich die gepufferten Bereiche ändern – einschließlich wenn der Benutzeragent Inhalte als Teil seines Speicherbereinigungsalgorithmus entfernt.

Anwendungen sollten auf das `bufferedchange`-Ereignis hören, um Änderungen an gepufferten Daten zu verfolgen, da ein `ManagedMediaSource` Inhalte jederzeit aus Gründen wie Speicher- oder Hardwarebeschränkungen entfernen kann.

{{InheritanceDiagram}}

## Instanzeigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

## Instanzmethoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

## Ereignisse

_Erbt auch Ereignisse von seiner übergeordneten Schnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) {{experimental_inline}}
  - : Wird ausgelöst, wenn sich der gepufferte Bereich des `ManagedSourceBuffer` ändert, nach einem Aufruf von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove), [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) oder als Konsequenz des Speicherbereinigungsalgorithmus des Benutzeragents.

## Beispiele

### Überwachen von Veränderungen der gepufferten Bereiche

Dieses Beispiel richtet eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) ein, fügt einen `ManagedSourceBuffer` hinzu, ruft eine fragmentierte MP4-Datei ab und hört auf das `bufferedchange`-Ereignis, um alle Änderungen an den gepufferten Bereichen zu protokollieren.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const source = new ManagedMediaSource();
  const video = document.createElement("video");

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      for (let i = 0; i < event.addedRanges.length; i++) {
        console.log(
          `Added: ${event.addedRanges.start(i)}s - ${event.addedRanges.end(i)}s`,
        );
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
