---
title: "ManagedMediaSource: startstreaming-Ereignis"
short-title: startstreaming
slug: Web/API/ManagedMediaSource/startstreaming_event
l10n:
  sourceCommit: 2f34ca590baf2d5447d42fc79002a70b9cb65e73
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}{{SeeCompatTable}}

Das **`startstreaming`**-Ereignis der [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)-Schnittstelle wird ausgelöst, wenn sich die [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)-Eigenschaft von `false` zu `true` ändert. Dies zeigt an, dass der User Agent weitere Daten benötigt, um eine unterbrechungsfreie Wiedergabe sicherzustellen. Die Anwendung sollte daher beginnen, Mediensegmente abzurufen und anzuhängen.

## Syntax

Verwenden Sie den Ereignisnamen in [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener):

```js-nolint
addEventListener("startstreaming", (event) => {});
```

Alternativ können Sie der [Event-Handler-Eigenschaft](/de/docs/Web/API/Document_Object_Model/Events#using_onevent_properties) der Schnittstelle einen Wert zuweisen:

```js-nolint
onstartstreaming = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Daten als Reaktion auf startstreaming abrufen

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), verknüpft sie mit einem {{htmlelement("video")}}-Element und verwendet das `startstreaming`-Ereignis, um mit dem Abrufen und Anhängen von Mediendaten zu beginnen.

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

  source.addEventListener("sourceopen", () => {
    const sourceBuffer = source.addSourceBuffer(mediaType);

    source.addEventListener("startstreaming", async () => {
      console.log("startstreaming — fetching media data");
      const response = await fetch(videoUrl);
      const data = await response.arrayBuffer();
      sourceBuffer.appendBuffer(data);
    });
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event)-Ereignis
- [`ManagedMediaSource.streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
