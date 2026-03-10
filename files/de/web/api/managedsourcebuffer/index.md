---
title: ManagedSourceBuffer
slug: Web/API/ManagedSourceBuffer
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`ManagedSourceBuffer`**-Interface der [Media Source Extensions API](/de/docs/Web/API/Media_Source_Extensions_API) ist ein [`SourceBuffer`](/de/docs/Web/API/SourceBuffer), das von einer [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) erstellt wird, wenn [`addSourceBuffer()`](/de/docs/Web/API/MediaSource/addSourceBuffer) aufgerufen wird. Es erbt alle Eigenschaften und Methoden von `SourceBuffer` und löst zusätzlich ein [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)-Ereignis aus, wann immer sich die gepufferten Bereiche ändern – einschließlich der Fälle, in denen der User Agent Inhalte im Rahmen seines Speicherbereinigungsalgorithmus entfernt.

Anwendungen sollten auf das `bufferedchange`-Ereignis hören, um Änderungen an gepufferten Daten zu verfolgen, da eine `ManagedMediaSource` Inhalte jederzeit aus Gründen wie Speicher- oder Hardwarebeschränkungen entfernen kann.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

_Erbt Eigenschaften von seiner Elternschnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

## Instanz-Methoden

_Erbt Methoden von seiner Elternschnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

## Ereignisse

_Erbt auch Ereignisse von seiner Elternschnittstelle, [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)._

- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event)
  - : Wird ausgelöst, wenn sich der gepufferte Bereich des `ManagedSourceBuffer` ändert, nachdem ein Aufruf von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove), [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream), oder als Folge des Speicherbereinigungsalgorithmus des User Agents erfolgt.

## Beispiele

### Überwachung von Änderungen der gepufferten Bereiche

Dieses Beispiel richtet eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) ein, fügt einen `ManagedSourceBuffer` hinzu, ruft eine fragmentierte MP4-Datei ab und überwacht das `bufferedchange`-Ereignis, um Änderungen an den gepufferten Bereichen zu protokollieren.

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
