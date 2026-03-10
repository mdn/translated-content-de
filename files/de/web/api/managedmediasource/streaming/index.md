---
title: "ManagedMediaSource: streaming-Eigenschaft"
short-title: streaming
slug: Web/API/ManagedMediaSource/streaming
l10n:
  sourceCommit: 4be29f6917b698805c919c5d290359bc13c62384
---

{{APIRef("Media Source Extensions")}}{{AvailableInWorkers("window_and_dedicated")}}

Die schreibgeschützte Eigenschaft **`streaming`** des [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)-Interfaces ist ein boolescher Wert, der angibt, ob die Anwendung aktiv Mediendaten abrufen und anhängen soll.

Der Wert dieser Eigenschaft wird durch den Überwachungsalgorithmus des Benutzeragenten aktualisiert. Wenn sich der Wert ändert, wird das entsprechende [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event)- oder [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event)-Ereignis ausgelöst.

## Wert

Ein boolescher Wert, der anfänglich `false` ist. Wenn `true`, benötigt der Benutzeragent mehr Daten, um eine unterbrechungsfreie Wiedergabe zu gewährleisten. Wenn `false`, hat der Benutzeragent genügend Daten gepuffert und die Anwendung kann das Abrufen neuer Segmente einstellen.

## Beispiele

### Überprüfung des Streaming-Zustands

Dieses Beispiel erstellt eine [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource), verbindet sie mit einem {{htmlelement("video")}}-Element und protokolliert den Wert von `streaming`, wann immer er zwischen `true` und `false` wechselt.

```js
const mediaType = 'video/mp4; codecs="avc1.64001F, mp4a.40.2"';

if (ManagedMediaSource.isTypeSupported(mediaType)) {
  const video = document.createElement("video");
  const source = new ManagedMediaSource();

  video.controls = true;
  video.disableRemotePlayback = true;
  video.src = URL.createObjectURL(source);
  document.body.appendChild(video);

  console.log(source.streaming); // false

  source.addEventListener("startstreaming", () => {
    console.log(source.streaming); // true — start fetching data
  });

  source.addEventListener("endstreaming", () => {
    console.log(source.streaming); // false — stop fetching data
  });

  source.addEventListener("sourceopen", () => {
    source.addSourceBuffer(mediaType);
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`startstreaming`](/de/docs/Web/API/ManagedMediaSource/startstreaming_event)-Ereignis
- [`endstreaming`](/de/docs/Web/API/ManagedMediaSource/endstreaming_event)-Ereignis
- [`ManagedMediaSource`](/de/docs/Web/API/ManagedMediaSource)
- [`MediaSource`](/de/docs/Web/API/MediaSource)
