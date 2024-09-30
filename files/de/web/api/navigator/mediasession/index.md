---
title: "Navigator: mediaSession-Eigenschaft"
short-title: mediaSession
slug: Web/API/Navigator/mediaSession
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Session API")}}

Die schreibgeschützte **`mediaSession`**-Eigenschaft der [`Navigator`](/de/docs/Web/API/Navigator)-Schnittstelle gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um mit dem Browser Metadaten und andere Informationen über den aktuellen Wiedergabestatus von Medien zu teilen, die von einem Dokument verarbeitet werden.

Diese Informationen können wiederum mit dem Gerät und/oder Betriebssystem geteilt werden, um die standardmäßige Mediensteuerungsbenutzererfahrung eines Geräts zu beschreiben und die Wiedergabe der Medien zu steuern.

Darüber hinaus bietet die `MediaSession`-Schnittstelle die Methode [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler), die es Ihnen ermöglicht, Ereignisse zu empfangen, wenn der Benutzer Geräte-Steuerelemente wie eingeblendete oder physische Start-, Pause-, Such- und ähnliche Steuerelemente verwendet. Eine Internetradio-App kann zum Beispiel `setActionHandler()` verwenden, damit die Mediensteuerelemente auf einer Tastatur oder anderswo auf dem Gerät des Benutzers zur Steuerung der Medienwiedergabe der App verwendet werden können.

## Wert

Ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt, das das aktuelle Dokument verwenden kann, um Informationen über die Medien, die es abspielt, und deren aktuellen Wiedergabestatus zu teilen. Diese Informationen können typische Metadaten wie den Titel, den Künstler und den Albumnamen des gespielten Songs sowie potenziell ein oder mehrere Bilder mit Dingen wie Albumcover, Künstlerfotos usw. enthalten.

## Beispiele

In diesem Beispiel werden Metadaten an das `mediaSession`-Objekt übermittelt. Beachten Sie, dass der Code zunächst sicherstellt, dass die `navigator.mediaSession`-Eigenschaft verfügbar ist, bevor versucht wird, sie zu verwenden.

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
