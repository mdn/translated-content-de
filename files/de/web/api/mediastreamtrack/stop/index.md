---
title: "MediaStreamTrack: stop() Methode"
short-title: stop()
slug: Web/API/MediaStreamTrack/stop
l10n:
  sourceCommit: ac67e6f05d337e52e39f02a978b8c00bc43d583b
---

{{APIRef("Media Capture and Streams")}}

Die **`stop()`**-Methode der {{domxref("MediaStreamTrack")}}-Schnittstelle stoppt den Track.

## Syntax

```js-nolint
stop()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Das Aufrufen von `stop()` teilt dem {{glossary("user agent")}} mit, dass die Quelle des Tracks – unabhängig davon, was diese Quelle ist, einschließlich Dateien, Netzwerkstreams oder einer lokalen Kamera oder eines Mikrofons – nicht mehr vom {{domxref("MediaStreamTrack")}} benötigt wird. Da mehrere Tracks dieselbe Quelle verwenden können (zum Beispiel, wenn zwei Tabs das Mikrofon des Geräts nutzen), wird die Quelle nicht unbedingt sofort gestoppt. Stattdessen wird sie vom Track getrennt und das Track-Objekt wird angehalten. Sobald keine Medientracks mehr die Quelle verwenden, kann die Quelle tatsächlich vollständig gestoppt werden.

Unmittelbar nach dem Aufrufen von `stop()` wird die Eigenschaft {{domxref("MediaStreamTrack.readyState", "readyState")}} auf `ended` gesetzt. Beachten Sie, dass das [`ended`](/de/docs/Web/API/MediaStreamTrack/ended_event)-Ereignis in dieser Situation nicht ausgelöst wird.

## Beispiele

### Anhalten eines Videostreams

In diesem Beispiel sehen wir eine Funktion, die einen gestreamten Video durch Aufrufen von `stop()` auf jedem Track eines gegebenen {{HTMLElement("video")}} anhält.

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

Dies funktioniert, indem der Stream des Videoelements über seine {{domxref("HTMLMediaElement.srcObject", "srcObject")}}-Eigenschaft abgerufen wird. Dann wird die Trackliste des Streams durch Aufrufen seiner {{domxref("MediaStream.getTracks", "getTracks()")}}-Methode erhalten. Von dort aus bleibt nur noch, über die Trackliste mit {{jsxref("Array.forEach", "forEach()")}} zu iterieren und die `stop()`-Methode jedes Tracks aufzurufen.

Schließlich wird `srcObject` auf `null` gesetzt, um die Verbindung zum {{domxref("MediaStream")}}-Objekt zu trennen, damit es freigegeben werden kann.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("MediaStreamTrack")}}, die Schnittstelle, zu der sie gehört.
- {{domxref("MediaStreamTrack.readyState")}}
- {{domxref("MediaStreamTrack/ended_event", "ended")}}
