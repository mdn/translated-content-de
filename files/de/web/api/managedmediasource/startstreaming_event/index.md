---
title: "ManagedMediaSource: startstreaming Ereignis"
short-title: startstreaming
slug: Web/API/ManagedMediaSource/startstreaming_event
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Das **`startstreaming`**-Ereignis der [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)-Schnittstelle wird ausgelöst, wenn die [`streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)-Eigenschaft von `false` zu `true` wechselt. Dies zeigt an, dass der User-Agent mehr Daten benötigt, um eine unterbrechungsfreie Wiedergabe zu gewährleisten, und die Anwendung sollte damit beginnen, Mediensegmente abzurufen und anzufügen.

## Syntax

Verwenden Sie den Ereignisnamen in Methoden wie [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) oder setzen Sie eine Ereignis-Handler-Eigenschaft.

```js-nolint
addEventListener("startstreaming", (event) => {});

onstartstreaming = (event) => {};
```

## Ereignistyp

Ein generisches [`Event`](/de/docs/Web/API/Event).

## Beispiele

### Datenabruf als Reaktion auf startstreaming

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), hängt sie an ein {{htmlelement("video")}}-Element an und nutzt das `startstreaming`-Ereignis, um mit dem Abrufen und Anfügen von Mediendaten zu beginnen.

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

- [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event) Ereignis
- [`ManagedMediaSource.streaming`](/de/docs/Web/API/ManagedMediaSource/streaming)
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
