---
title: "MediaStreamTrack: stop()-Methode"
short-title: stop()
slug: Web/API/MediaStreamTrack/stop
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`stop()`**-Methode der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack)-Schnittstelle stoppt den Track.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("undefined")}}).

## Beschreibung

Durch den Aufruf von `stop()` wird dem [User-Agent](/de/docs/Glossary/user_agent) mitgeteilt, dass die Quelle des Tracks – ganz gleich, welche Quelle das ist, einschließlich Dateien, Netzwerkstreams oder eine lokale Kamera oder ein Mikrofon – nicht mehr von der [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack) benötigt wird. Da mehrere Tracks dieselbe Quelle verwenden können (zum Beispiel, wenn zwei Tabs das Mikrofon des Geräts verwenden), wird die Quelle selbst nicht unbedingt sofort gestoppt. Stattdessen wird sie vom Track gelöst und das Track-Objekt gestoppt. Sobald keine Medientracks die Quelle mehr verwenden, kann die Quelle tatsächlich vollständig gestoppt werden.

Unmittelbar nach dem Aufruf von `stop()` wird die [`readyState`](/de/docs/Web/API/MediaStreamTrack/readyState)-Eigenschaft auf `ended` gesetzt. Beachten Sie, dass das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis in dieser Situation nicht ausgelöst wird.

## Beispiele

### Stoppen eines Videostreams

In diesem Beispiel sehen wir eine Funktion, die einen gestreamten Video-Inhalt stoppt, indem sie `stop()` für jeden Track auf einem gegebenen {{HTMLElement("video")}} aufruft.

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

Dies funktioniert, indem der Stream des Videoelements von dessen [`srcObject`](/de/docs/Web/API/HTMLMediaElement/srcObject)-Eigenschaft abgerufen wird. Dann wird die Trackliste des Streams durch den Aufruf seiner [`getTracks()`](/de/docs/Web/API/MediaStream/getTracks)-Methode erhalten. Von dort aus bleibt nur noch, über die Trackliste mit {{jsxref("Array.forEach", "forEach()")}} zu iterieren und die `stop()`-Methode jedes Tracks aufzurufen.

Schließlich wird `srcObject` auf `null` gesetzt, um die Verbindung zum [`MediaStream`](/de/docs/Web/API/MediaStream)-Objekt zu trennen, damit es freigegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [`MediaStreamTrack`](/de/docs/Web/API/MediaStreamTrack), die Schnittstelle, zu der es gehört.
- [`MediaStreamTrack.readyState`](/de/docs/Web/API/MediaStreamTrack/readyState)
- [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)
