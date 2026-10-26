---
title: "ManagedSourceBuffer: bufferedchange-Ereignis"
short-title: bufferedchange
slug: Web/API/ManagedSourceBuffer/bufferedchange_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Das **`bufferedchange`**-Ereignis der [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)-Schnittstelle wird ausgelöst, wenn sich der gepufferte Bereich des `ManagedSourceBuffer` ändert. Dies kann nach einem Aufruf von [`appendBuffer()`](/de/docs/Web/API/SourceBuffer/appendBuffer), [`remove()`](/de/docs/Web/API/SourceBuffer/remove) oder [`endOfStream()`](/de/docs/Web/API/MediaSource/endOfStream) geschehen oder dadurch, dass der User Agent den Algorithmus zur Speicherbereinigung ausführt.

Dieses Ereignis ist für Anwendungen wichtig, die eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) verwenden, da der User Agent gepufferte Inhalte jederzeit verwerfen kann. Indem Anwendungen auf dieses Ereignis reagieren, können sie erkennen, wann gepufferte Daten entfernt wurden, und Ersatzsegmente abrufen, um Unterbrechungen bei der Wiedergabe zu vermeiden.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("bufferedchange", (event) => {});
```

Alternativ können Sie ihn der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onbufferedchange = (event) => {};
```

## Ereignistyp

Ein [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent). Erbt von [`Event`](/de/docs/Web/API/Event).

{{InheritanceDiagram("BufferedChangeEvent")}}

## Beispiele

### Änderungen der gepufferten Bereiche verfolgen

Dieses Beispiel richtet eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) ein, fügt einen Source Buffer hinzu, ruft eine fragmentierte MP4-Datei ab und reagiert auf das `bufferedchange`-Ereignis, um Änderungen an den gepufferten Bereichen zu protokollieren.

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
      for (let i = 0; i < event.removedRanges.length; i++) {
        console.log(
          `Removed: ${event.removedRanges.start(i)}s - ${event.removedRanges.end(i)}s`,
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

- [`BufferedChangeEvent`](/de/docs/Web/API/BufferedChangeEvent)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`SourceBuffer`](/de/docs/Web/API/SourceBuffer)
