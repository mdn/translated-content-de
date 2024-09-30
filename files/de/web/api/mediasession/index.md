---
title: MediaSession
slug: Web/API/MediaSession
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}

Das **`MediaSession`** Interface der [Media Session API](/de/docs/Web/API/Media_Session_API) ermöglicht es einer Webseite, benutzerdefinierte Verhaltensweisen für standardmäßige Medienwiedergabe-Interaktionen bereitzustellen und Metadaten zu melden, die vom Benutzeragenten an das Gerät oder das Betriebssystem zur Darstellung in standardisierten Benutzerschnittstellenelementen gesendet werden können.

Ein Smartphone hat beispielsweise ein standardmäßiges Panel im Sperrbildschirm, das Steuerungen für Medienwiedergabe und Informationsanzeige bietet. Ein Browser auf dem Gerät kann `MediaSession` verwenden, um die Browser-Wiedergabe von dieser standardmäßigen/globalen Benutzerschnittstelle aus steuerbar zu machen.

## Instanz-Eigenschaften

- [`metadata`](/de/docs/Web/API/MediaSession/metadata)
  - : Gibt eine Instanz von [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) zurück, die umfangreiche Medienmetadaten zur Anzeige in einer Plattform-Benutzeroberfläche enthält.
- [`playbackState`](/de/docs/Web/API/MediaSession/playbackState)
  - : Gibt an, ob die aktuelle Mediensitzung abgespielt wird. Gültige Werte sind `none`, `paused` oder `playing`.

## Instanz-Methoden

- [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler)
  - : Setzt einen Aktion-Handler für eine Medienaktions-Sitzung, wie z. B. Play oder Pause.
- [`setCameraActive()`](/de/docs/Web/API/MediaSession/setCameraActive) {{Experimental_Inline}}
  - : Gibt dem Benutzeragenten an, ob die Kamera des Benutzers als aktiv betrachtet wird.
- [`setMicrophoneActive()`](/de/docs/Web/API/MediaSession/setMicrophoneActive) {{Experimental_Inline}}
  - : Gibt dem Benutzeragenten an, ob das Mikrofon des Benutzers momentan stummgeschaltet ist.
- [`setPositionState()`](/de/docs/Web/API/MediaSession/setPositionState)
  - : Setzt die aktuelle Wiedergabeposition und -geschwindigkeit des derzeit wiedergegebenen Mediums.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musikplayer

Das folgende Beispiel erstellt eine neue Mediensitzung und weist dieser Aktion-Handler zu:

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

Das folgende Beispiel richtet zwei Funktionen zum Abspielen und Pausieren ein und verwendet sie dann als Rückrufe mit den entsprechenden Aktion-Handlern.

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

Die `"previousslide"` und `"nextslide"` Aktion-Handler können verwendet werden, um vorwärts und rückwärts durch eine Folienpräsentation zu navigieren, zum Beispiel, wenn der Benutzer seine Präsentation in ein [Bild-im-Bild](/de/docs/Web/API/Picture-in-Picture_API) Fenster legt und die vom Browser bereitgestellten Steuerungen für die Navigation durch Folien verwendet.

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

Sehen Sie sich [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
