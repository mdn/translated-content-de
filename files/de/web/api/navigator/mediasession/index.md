---
title: "Navigator: mediaSession-Eigenschaft"
short-title: mediaSession
slug: Web/API/Navigator/mediaSession
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Session API")}}

Die schreibgeschützte **`mediaSession`**-Eigenschaft des {{domxref("Navigator")}}-Interfaces gibt ein {{domxref("MediaSession")}}-Objekt zurück, das verwendet werden kann, um mit dem Browser Metadaten und andere Informationen über den aktuellen Wiedergabestatus von Medien, die von einem Dokument verarbeitet werden, zu teilen.

Diese Informationen können wiederum mit dem Gerät und/oder Betriebssystem geteilt werden, um das standardmäßige Mediensteuerungserlebnis eines Geräts zu beschreiben und die Wiedergabe der Medien zu steuern.

Außerdem bietet das `MediaSession`-Interface die Methode {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}, mit der Sie Ereignisse empfangen können, wenn der Benutzer Gerätebedienelemente wie Bildschirmlayouts oder physische Tasten für Wiedergabe, Pause, Suchlauf und ähnliche Steuerungen betätigt. Eine Internetradio-App kann zum Beispiel `setActionHandler()` verwenden, um die Mediensteuerung auf einer Tastatur oder an anderer Stelle auf dem Gerät des Benutzers zu nutzen, um die Medienwiedergabe der App zu steuern.

## Wert

Ein {{domxref("MediaSession")}}-Objekt, das das aktuelle Dokument verwenden kann, um Informationen über die Medien, die es abspielt, und seinen aktuellen Wiedergabestatus zu teilen. Diese Informationen können typische Metadaten wie der Titel, der Künstler und der Albumname des gespielten Songs sowie möglicherweise ein oder mehrere Bilder enthalten, die beispielsweise Albumcover, Künstlerfotos und Ähnliches umfassen.

## Beispiele

In diesem Beispiel werden Metadaten an das `mediaSession`-Objekt übermittelt. Beachten Sie, dass der Code damit beginnt, sicherzustellen, dass die `navigator.mediaSession`-Eigenschaft verfügbar ist, bevor versucht wird, sie zu verwenden.

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Podcast Episode Title",
    artist: "Podcast Host",
    album: "Podcast Name",
    artwork: [{ src: "podcast.jpg" }],
  });
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
