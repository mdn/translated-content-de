---
title: MediaSession
slug: Web/API/MediaSession
l10n:
  sourceCommit: e0f9d50e9d81a00f6059b6d496014ad417ac9b61
---

{{APIRef("Media Session API")}}

Die **`MediaSession`**-Schnittstelle der [Media Session API](/de/docs/Web/API/Media_Session_API) ermöglicht es einer Webseite, benutzerdefinierte Verhaltensweisen für Standardinteraktionen bei der Medienwiedergabe bereitzustellen und Metadaten zu melden, die vom User-Agent an das Gerät oder Betriebssystem zur Darstellung in standardisierten Benutzeroberflächenelementen gesendet werden können.

Beispielsweise kann ein Smartphone auf seinem Sperrbildschirm ein Standardpanel haben, das Steuerelemente für die Medienwiedergabe und die Anzeige von Informationen bereitstellt. Ein Browser auf dem Gerät kann `MediaSession` verwenden, damit die Wiedergabe im Browser über diese standardisierte/globale Benutzeroberfläche gesteuert werden kann.

## Instanzeigenschaften

- [`metadata`](/de/docs/Web/API/MediaSession/metadata)
  - : Gibt eine Instanz von [`MediaMetadata`](/de/docs/Web/API/MediaMetadata) zurück, die umfangreiche Medienmetadaten zur Anzeige in einer Plattform-Benutzeroberfläche enthält.
- [`playbackState`](/de/docs/Web/API/MediaSession/playbackState)
  - : Gibt an, ob die aktuelle Mediensitzung wiedergegeben wird. Gültige Werte sind `none`, `paused` oder `playing`.

## Instanzmethoden

- [`setActionHandler()`](/de/docs/Web/API/MediaSession/setActionHandler)
  - : Legt einen Action-Handler für eine Mediensitzungsaktion fest, beispielsweise Wiedergabe oder Pause.
- [`setCameraActive()`](/de/docs/Web/API/MediaSession/setCameraActive)
  - : Gibt dem User-Agent an, ob die Kamera des Benutzers als aktiv betrachtet wird.
- [`setMicrophoneActive()`](/de/docs/Web/API/MediaSession/setMicrophoneActive)
  - : Gibt dem User-Agent an, ob das Mikrofon des Benutzers als derzeit stummgeschaltet betrachtet wird.
- [`setPositionState()`](/de/docs/Web/API/MediaSession/setPositionState)
  - : Legt die aktuelle Wiedergabeposition und -geschwindigkeit der derzeit dargestellten Medien fest.
- [`setScreenshareActive()`](/de/docs/Web/API/MediaSession/setScreenshareActive) {{experimental_inline}}
  - : Gibt dem User-Agent den von der Seite gewünschten Erfassungsstatus der Bildschirmfreigabe an.

## Beispiele

### Action-Handler für einen Musikplayer einrichten

Das folgende Beispiel erstellt eine neue Mediensitzung und weist ihr Action-Handler zu:

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

### Audio wiedergeben und pausieren

Das folgende Beispiel richtet zwei Funktionen für Wiedergabe und Pausieren ein und verwendet sie anschließend als Callbacks mit den entsprechenden Action-Handlern.

#### HTML

```html
<audio id="audio" controls src="/shared-assets/audio/guitar.mp3"></audio>
<p><output id="status">No media session action received yet.</output></p>
```

#### JavaScript

Die Action-Handler aktualisieren das Ausgabeelement, wenn sie ausgeführt werden.

```js
const audioEl = document.getElementById("audio");
const statusEl = document.getElementById("status");

const actionHandlers = [
  [
    "play",
    async () => {
      // Play our audio; with a custom play handler, this doesn't happen
      // automatically
      try {
        await audioEl.play();
        statusEl.textContent = "Action: play | Track is playing…";
      } catch (error) {
        statusEl.textContent = `Unable to play audio: ${error.message}`;
      }
    },
  ],
  [
    "pause",
    () => {
      // Pause our audio
      audioEl.pause();
      statusEl.textContent = "Action: pause | Track has been paused…";
    },
  ],
];

for (const [action, handler] of actionHandlers) {
  try {
    navigator.mediaSession.setActionHandler(action, handler);
  } catch (error) {
    statusEl.textContent = `Unable to register the "${action}" action: ${error.message}`;
  }
}
```

#### Ergebnis

Starten Sie die Wiedergabe über die Audiosteuerung und verwenden Sie dann die Medientasten Ihres Geräts oder die Mediensteuerung des Browsers oder Betriebssystems, um die Audiowiedergabe abzuspielen oder zu pausieren. Die verfügbaren Steuerelemente hängen von Ihrem Browser und Gerät ab. Das Ausgabeelement zeigt an, welcher Mediensitzungs-Action-Handler ausgeführt wurde.

{{EmbedLiveSample("Playing and pausing audio", "100%", 150)}}

### Action-Handler zur Steuerung einer Folienpräsentation verwenden

Die Action-Handler `"previousslide"` und `"nextslide"` können verwendet werden, um das Vor- und Zurückblättern in einer Folienpräsentation zu handhaben, beispielsweise wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster verschiebt und die vom Browser bereitgestellten Steuerelemente zur Navigation durch Folien betätigt.

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

Ein funktionierendes Beispiel finden Sie unter [Presenting Slides / Media Session Sample](https://googlechrome.github.io/samples/media-session/slides.html).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
