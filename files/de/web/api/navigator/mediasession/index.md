---
title: "Navigator: mediaSession Eigenschaft"
short-title: mediaSession
slug: Web/API/Navigator/mediaSession
l10n:
  sourceCommit: b71d118ffc6d72b77efad9661110fcc9ede464eb
---

{{APIRef("Media Session API")}}

Die **`mediaSession`** schreibgeschützte Eigenschaft des [`Navigator`](/de/docs/Web/API/Navigator)-Interfaces gibt ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt zurück, das verwendet werden kann, um dem Browser Metadaten und andere Informationen über den aktuellen Wiedergabestatus von Medien bereitzustellen, die von einem Dokument behandelt werden.

Diese Informationen können wiederum mit dem Gerät und/oder Betriebssystem geteilt werden, um die standardmäßige Benutzererfahrung der Medienkontrolle eines Geräts zu beschreiben und die Wiedergabe der Medien zu steuern.

Zusätzlich bietet das `MediaSession`-Interface die Methode [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler), mit der Sie Ereignisse empfangen können, wenn der Benutzer Gerätesteuerungen wie Bildschirmschaltflächen oder physische Steuerungen zum Abspielen, Pausieren, Suchen und andere ähnliche Steuerungen verwendet. Eine Internetradio-App kann beispielsweise `setActionHandler()` verwenden, um die Mediensteuerungen auf einer Tastatur oder an anderer Stelle auf dem Gerät des Benutzers zum Steuern der Medienwiedergabe der App zu nutzen.

## Wert

Ein [`MediaSession`](/de/docs/Web/API/MediaSession)-Objekt, das das aktuelle Dokument verwenden kann, um Informationen über die Medien, die es abspielt, und dessen aktuellen Wiedergabestatus zu teilen. Diese Informationen können typische Metadaten wie den Titel, den Künstler und den Albumnamen des gespielten Liedes sowie möglicherweise eines oder mehrere Bilder enthalten, die Dinge wie Albumcover, Künstlerfotos usw. enthalten.

## Beispiele

In diesem Beispiel werden Metadaten an das `mediaSession`-Objekt übermittelt. Beachten Sie, dass der Code damit beginnt, sicherzustellen, dass die `navigator.mediaSession`-Eigenschaft vorhanden ist, bevor versucht wird, sie zu verwenden.

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
