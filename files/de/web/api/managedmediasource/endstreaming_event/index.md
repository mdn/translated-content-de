---
title: "ManagedMediaSource: endstreaming-Ereignis"
short-title: endstreaming
slug: Web/API/ManagedMediaSource/endstreaming_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Das **`endstreaming`**-Ereignis der Schnittstelle [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) wird ausgelöst, wenn die Eigenschaft [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming) von `true` zu `false` wechselt. Dies zeigt an, dass der User Agent genügend Daten gepuffert hat, um eine unterbrechungsfreie Wiedergabe zu gewährleisten. Die Anwendung kann daher aufhören, neue Mediensegmente abzurufen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("endstreaming", (event) => {});
```

Alternativ können Sie die [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle zuweisen:

```js-nolint
onendstreaming = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Abrufe als Reaktion auf endstreaming pausieren

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), verknüpft sie mit einem {{htmlelement("video")}}-Element und verwendet die Ereignisse `startstreaming` und `endstreaming`, um zu steuern, wann Mediensegmente abgerufen werden.

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

- [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event)-Ereignis
- [`ManagedMediaSource.streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
