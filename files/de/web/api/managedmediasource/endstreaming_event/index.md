---
title: "ManagedMediaSource: endstreaming Ereignis"
short-title: endstreaming
slug: Web/API/ManagedMediaSource/endstreaming_event
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`endstreaming`**-Ereignis des [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)-Interfaces wird ausgelöst, wenn sich die [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)-Eigenschaft von `true` auf `false` ändert. Dies zeigt an, dass der User-Agent genügend Daten gepuffert hat, um eine unterbrechungsfreie Wiedergabe zu gewährleisten, und die Anwendung das Abrufen neuer Mediensegmente beenden kann.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignishandler-Eigenschaft.

```js-nolint
addEventListener("endstreaming", (event) => {});

onendstreaming = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Anhalten des Abrufens als Reaktion auf endstreaming

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), hängt sie an ein {{htmlelement("video")}}-Element an und verwendet die `startstreaming`- und `endstreaming`-Ereignisse, um zu steuern, wann Mediensegmente abgerufen werden.

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

  let shouldFetch = false;

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data");
      shouldFetch = true;
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      if (shouldFetch) {
        sourceBuffer.appendBuffer(data);
      }
    });

    source.addEventListener("endstreaming", () => {
      console.log("endstreaming — enough data buffered");
      shouldFetch = false;
    });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event) Ereignis
- [`ManagedMediaSource.streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
