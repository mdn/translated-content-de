---
title: "BufferedChangeEvent: removedRanges-Eigenschaft"
short-title: removedRanges
slug: Web/API/BufferedChangeEvent/removedRanges
l10n:
  sourceCommit: aea2d29336c910940abb1f8e71e02158ac51e7c4
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Die schreibgeschützte **`removedRanges`**-Eigenschaft des [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)-Interfaces gibt ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt zurück, das die Zeitbereiche repräsentiert, die aus dem zugehörigen [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer) entfernt wurden. Diese sind die Bereiche, die zwischen den letzten `updatestart`- und `updateend`-Ereignissen entfernt wurden, während des letzten Durchlaufs des kodierten Rahmenentfernungs- oder Kodierungsrahmenräumungsalgorithmus oder als Folge davon, dass der Benutzer-Agent den Speicherbereinigungsalgorithmus ausgeführt hat.

## Wert

Ein [`TimeRanges`](/de/docs/Web/API/TimeRanges)-Objekt.

## Beispiele

### Entfernte Bereiche bei Pufferänderungen protokollieren

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), verbindet sie mit einem {{htmlelement("video")}}-Element, ruft eine fragmentierte MP4-Datei ab und entfernt dann einen Teil der gepufferten Daten. Der `bufferedchange`-Ereignishandler protokolliert alle entfernten Zeitbereiche.

```js
const videoUrl =
  "https://mdn.github.io/shared-assets/videos/flower-fragmented.mp4";
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const video = document.createElement("video");
  const source = new ManagedMediaSource();

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  source.addEventListener("sourceopen", async () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    sourceBuffer.addEventListener("bufferedchange", (event) => {
      const removed = event.removedRanges;
      for (let i = 0; i < removed.length; i++) {
        console.log(`Removed range: ${removed.start(i)}s - ${removed.end(i)}s`);
      }
    });

    const response = await fetch(videoUrl);
    const data = await response.arrayBuffer();
    sourceBuffer.appendBuffer(data);

    // Once appended, remove the first 5 seconds to trigger removedRanges
    sourceBuffer.addEventListener(
      "updateend",
      () => {
        sourceBuffer.remove(0, 5);
      },
      { once: true },
    );
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`BufferedChangeEvent.addedRanges`](/de/docs/Web/API/BufferedChangeEvent/addedRanges)
- [`bufferedchange`](/de/docs/Web/API/ManagedSourceBuffer/bufferedchange_event) Ereignis
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`TimeRanges`](/de/docs/Web/API/TimeRanges)
