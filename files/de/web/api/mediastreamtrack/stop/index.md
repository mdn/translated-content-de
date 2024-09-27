---
title: "MediaStreamTrack: stop() Methode"
short-title: stop()
slug: Web/API/MediaStreamTrack/stop
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`stop()`** Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle stoppt den Track.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Ein Aufruf von `stop()` informiert den [User-Agent](/de/docs/Glossary/user_agent), dass die Quelle des Tracks—unabhängig davon, was diese Quelle ist, einschließlich Dateien, Netzwerkstreams oder einer lokalen Kamera oder eines Mikrofons—von der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) nicht mehr benötigt wird. Da mehrere Tracks dieselbe Quelle verwenden können (zum Beispiel, wenn zwei Tabs das Mikrofon des Geräts nutzen), wird die Quelle selbst nicht unbedingt sofort gestoppt. Sie wird stattdessen vom Track getrennt, und das Track-Objekt wird gestoppt. Sobald keine Medientracks mehr die Quelle nutzen, kann die Quelle tatsächlich vollständig gestoppt werden.

Unmittelbar nach dem Aufruf von `stop()` wird die Eigenschaft [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState) auf `ended` gesetzt. Beachten Sie, dass in dieser Situation das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis nicht ausgelöst wird.

## Beispiele

### Stoppen eines Videostreams

In diesem Beispiel sehen wir eine Funktion, die einen gestreamten Video durch den Aufruf von `stop()` auf jedem Track eines angegebenen {{HTMLElement("video")}} stoppt.

```js
function stopStreamedVideo(videoElem) {
  const stream = videoElem.srcObject;
  const tracks = stream.getTracks();

  tracks.forEach((track) => {
    track.stop();
  });

  videoElem.srcObject = null;
}
```

Dies funktioniert, indem der Stream des Videoelements aus seiner [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft abgerufen wird. Dann wird die Track-Liste des Streams durch Aufrufen seiner [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode ermittelt. Von dort aus bleibt nur, über die Track-Liste mit {{jsxref("Array.forEach", "forEach()")}} zu iterieren und die `stop()`-Methode jedes Tracks aufzurufen.

Schließlich wird `srcObject` auf `null` gesetzt, um die Verbindung zum [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zu trennen, damit es freigegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die Schnittstelle, zu der sie gehört.
- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState)
- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
