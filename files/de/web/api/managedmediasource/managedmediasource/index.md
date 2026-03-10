---
title: "ManagedMediaSource: ManagedMediaSource() Konstruktor"
short-title: ManagedMediaSource()
slug: Web/API/ManagedMediaSource/ManagedMediaSource
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Der **`ManagedMediaSource()`** Konstruktor der [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) Schnittstelle erstellt und gibt eine neue `ManagedMediaSource`-Objektinstanz ohne zugehörige Quellpuffer zurück.

## Syntax

```js-nolint
new ManagedMediaSource()
```

### Parameter

Keine.

### Rückgabewert

Eine neue [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource) Objektinstanz.

## Beispiele

### Erstellen eines ManagedMediaSource und Anfügen an ein Videoelement

Das folgende Beispiel erzeugt eine neue `ManagedMediaSource`, fügt sie einem {{htmlelement("video")}}-Element hinzu und verwendet das [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event) Ereignis, um das Abrufen von Mediendaten zu starten.

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

- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`ManagedSourceBuffer`](/de/docs/Web/API/ManagedSourceBuffer)
- [`MediaSource()`](/de/docs/Web/API/MediaSource/MediaSource)
