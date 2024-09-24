---
title: MediaSession
slug: Web/API/MediaSession
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}

Das **`MediaSession`**-Interface der {{domxref("Media Session API", "", "", "nocode")}} ermöglicht es einer Webseite, benutzerdefinierte Verhaltensweisen für standardmäßige Medienwiedergabe-Interaktionen bereitzustellen und Metadaten zu melden, die vom Benutzeragenten an das Gerät oder Betriebssystem zur Darstellung in standardisierten Benutzeroberflächen-Elementen gesendet werden können.

Ein Smartphone könnte beispielsweise ein standardmäßiges Bedienfeld auf dem Sperrbildschirm haben, das Steuerungen für die Medienwiedergabe und Informationsanzeigen bietet. Ein Browser auf dem Gerät kann `MediaSession` verwenden, um die Browser-Wiedergabe von dieser standardisierten/globalen Benutzeroberfläche aus steuerbar zu machen.

## Instanzeigenschaften

- {{domxref("MediaSession.metadata", "metadata")}}
  - : Gibt eine Instanz von {{domxref("MediaMetadata")}} zurück, die umfassende Medienmetadaten für die Anzeige in einer Plattform-Benutzeroberfläche enthält.
- {{domxref("MediaSession.playbackState", "playbackState")}}
  - : Zeigt an, ob die aktuelle Medien-Session abgespielt wird. Gültige Werte sind `none`, `paused` oder `playing`.

## Instanzmethoden

- {{domxref("MediaSession.setActionHandler", "setActionHandler()")}}
  - : Legt einen Aktions-Handler für eine Medien-Session-Aktion fest, wie zum Beispiel Abspielen oder Pause.
- {{domxref("MediaSession.setCameraActive", "setCameraActive()")}} {{Experimental_Inline}}
  - : Gibt dem Benutzeragenten an, ob die Kamera des Benutzers als aktiv angesehen wird.
- {{domxref("MediaSession.setMicrophoneActive", "setMicrophoneActive()")}} {{Experimental_Inline}}
  - : Gibt dem Benutzeragenten an, ob das Mikrofon des Benutzers derzeit stummgeschaltet ist.
- {{domxref("MediaSession.setPositionState", "setPositionState()")}}
  - : Legt die aktuelle Wiedergabeposition und -geschwindigkeit der derzeit wiedergegebenen Medien fest.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musikplayer

Das folgende Beispiel erstellt eine neue Media-Session und weist ihr Aktions-Handler zu:

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

Das folgende Beispiel richtet zwei Funktionen zum Abspielen und Pausieren ein und verwendet sie dann als Rückruffunktionen mit den entsprechenden Aktions-Handlern.

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

### Verwendung von Aktions-Handlern zur Steuerung einer Präsentation

Die Aktions-Handler `"previousslide"` und `"nextslide"` können verwendet werden, um das Vor- und Zurückbewegen in einer Präsentation zu handhaben. Zum Beispiel, wenn der Benutzer seine Präsentation in ein {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}}-Fenster verschiebt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch Folien drückt.

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
