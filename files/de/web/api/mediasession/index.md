---
title: MediaSession
slug: Web/API/MediaSession
l10n:
  sourceCommit: d22284cbba8b64afd6ad8c965d4ac2c927c59550
---

{{APIRef("Media Session API")}}

Das **`MediaSession`** Interface der [Media Session API](/de/docs/Web/API/Media_Session_API) ermöglicht es einer Webseite, benutzerdefinierte Verhaltensweisen für standardmäßige Medienwiedergabe-Interaktionen bereitzustellen und Metadaten zu melden, die vom Benutzeragenten an das Gerät oder Betriebssystem zur Darstellung in standardisierten Benutzerschnittstellenelementen gesendet werden können.

Ein Smartphone könnte beispielsweise ein standardisiertes Panel auf seinem Sperrbildschirm haben, das Steuerungen für die Medienwiedergabe und die Informationsanzeige bietet. Ein Browser auf dem Gerät kann `MediaSession` verwenden, um die Browserwiedergabe von dieser standardisierten/globalen Benutzerschnittstelle aus steuerbar zu machen.

## Instanzeigenschaften

- [`metadata`](/de/docs/Web/API/MediaSession/metadata)
  - : Gibt eine Instanz von [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) zurück, die reichhaltige Medienmetadaten zur Anzeige in einer Plattform-Benutzeroberfläche enthält.
- [`playbackState`](/de/docs/Web/API/MediaSession/playbackState)
  - : Gibt an, ob die aktuelle Mediensitzung läuft. Gültige Werte sind `none`, `paused` oder `playing`.

## Instanzmethoden

- [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler)
  - : Legt einen Aktionshandler für eine Mediensitzungsaktion, wie abspielen oder pausieren, fest.
- [`setCameraActive()`](/de/docs/Web/API/MediaSession/setCameraActive)
  - : Zeigt dem Benutzeragenten an, ob die Kamera des Benutzers als aktiv angesehen wird.
- [`setMicrophoneActive()`](/de/docs/Web/API/MediaSession/setMicrophoneActive)
  - : Zeigt dem Benutzeragenten an, ob das Mikrofon des Benutzers derzeit als stummgeschaltet betrachtet wird.
- [`setPositionState()`](/de/docs/Web/API/MediaSession/setPositionState)
  - : Legt die aktuelle Wiedergabeposition und -geschwindigkeit des derzeit präsentierten Mediums fest.
- [`setScreenshareActive()`](/de/docs/Web/API/MediaSession/setScreenshareActive) {{experimental_inline}}
  - : Zeigt dem Benutzeragenten den von der Seite gewünschten Status der Bildschirmerkennung an.

## Beispiele

### Einrichten von Aktionshandlern für einen Musikplayer

Das folgende Beispiel erstellt eine neue Mediensitzung und weist ihr Aktionshandler zu:

```js
if ("mediaSession" in navigator) {
  navigator.mediaSession.metadata = new MediaMetadata({
    title: "Unforgettable",
    artist: "Nat King Cole",
    album: "The Ultimate Collection (Remastered)",
    artwork: [
      {
        src: "https://dummyimage.com/96x96",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/128x128",
        sizes: "128x128",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/192x192",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/256x256",
        sizes: "256x256",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/384x384",
        sizes: "384x384",
        type: "image/png",
      },
      {
        src: "https://dummyimage.com/512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  });

  navigator.mediaSession.setActionHandler("play", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("pause", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("stop", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekbackward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekforward", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("seekto", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("previoustrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("nexttrack", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("skipad", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglecamera", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("togglemicrophone", () => {
    /* Code excerpted. */
  });
  navigator.mediaSession.setActionHandler("hangup", () => {
    /* Code excerpted. */
  });
}
```

Das folgende Beispiel richtet zwei Funktionen zum Abspielen und Pausieren ein und verwendet sie dann als Rückrufe mit den entsprechenden Aktionshandlern.

```js
const actionHandlers = [
  // play
  [
    "play",
    async () => {
      // play our audio
      await audioEl.play();
      // set playback state
      navigator.mediaSession.playbackState = "playing";
      // update our status element
      updateStatus(allMeta[index], "Action: play  |  Track is playing…");
    },
  ],
  [
    "pause",
    () => {
      // pause out audio
      audioEl.pause();
      // set playback state
      navigator.mediaSession.playbackState = "paused";
      // update our status element
      updateStatus(allMeta[index], "Action: pause  |  Track has been paused…");
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    console.log(`The media session action "${action}" is not supported yet.`);
  }
}
```

### Verwendung von Aktionshandlern zur Steuerung einer Folienpräsentation

Die `"previousslide"` und `"nextslide"` Aktionshandler können verwendet werden, um das Vor- und Zurückblättern durch eine Folienpräsentation zu steuern, zum Beispiel wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API) Fenster legt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch Folien drückt.

```js
try {
  navigator.mediaSession.setActionHandler("previousslide", () => {
    log('> User clicked "Previous Slide" icon.');
    if (slideNumber > 1) slideNumber--;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "previousslide" media session action is not supported.');
}

try {
  navigator.mediaSession.setActionHandler("nextslide", () => {
    log('> User clicked "Next Slide" icon.');
    slideNumber++;
    updateSlide();
  });
} catch (error) {
  log('Warning! The "nextslide" media session action is not supported.');
}
```

Siehe [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
