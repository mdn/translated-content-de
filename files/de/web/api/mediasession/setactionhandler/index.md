---
title: "MediaSession: setActionHandler() Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`**-Methode der [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle setzt einen Handler für eine Media-Session-Aktion. Diese Aktionen ermöglichen es einer Web-App, Benachrichtigungen zu empfangen, wenn der Nutzer die eingebauten physischen oder auf dem Bildschirm angezeigten Mediensteuerungen eines Geräts, wie z.B. Play-, Stopp- oder Such-Tasten, verwendet.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp darstellt, auf den gehört werden soll. Es wird einer der folgenden sein:
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Wechselt zur nächsten Folie, wenn ein Folienstapel präsentiert wird.
    - `nexttrack`
      - : Geht zur Wiedergabe des nächsten Titels über.
    - `pause`
      - : Pausiert die Wiedergabe des Mediums.
    - `play`
      - : Beginnt (oder setzt fort) die Wiedergabe des Mediums.
    - `previousslide`
      - : Wechselt zur vorherigen Folie, wenn ein Folienstapel präsentiert wird.
    - `previoustrack`
      - : Geht zum vorherigen Titel zurück.
    - `seekbackward`
      - : Sucht rückwärts durch das Medium ab der aktuellen Position.
        Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, spezifiziert die Zeitspanne, die rückwärts gesucht werden soll.
    - `seekforward`
      - : Sucht vorwärts ab der aktuellen Position durch das Medium.
        Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, spezifiziert die Zeitspanne, die vorwärts gesucht werden soll.
    - `seekto`
      - : Verschiebt die Wiedergabeposition auf die angegebene Zeit innerhalb des Mediums.
        Die zu suchende Zeit ist in der `seekTime`-Eigenschaft angegeben, die an den Callback übergeben wird.
        Wenn Sie planen, mehrere `seekto`-Operationen in schneller Folge durchzuführen, können Sie auch die `fastSeek`-Eigenschaft angeben, die mit einem Wert von `true` an den Callback übergeben wird.
        Dies teilt dem Browser mit, dass er Schritte unternehmen kann, um wiederholte Operationen zu optimieren, was wahrscheinlich zu einer verbesserten Leistung führt.
    - `skipad`
      - : Überspringt die aktuell laufende Werbung oder den Werbespot.
        Diese Aktion kann je nach Plattform und [User Agent](/de/docs/Glossary/user_agent) verfügbar sein oder nicht, oder kann aufgrund des Abonnementlevels oder anderer Umstände deaktiviert sein.
    - `stop`
      - : Stoppt die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Nutzers ein oder aus.
    - `togglemicrophone`
      - : Stummschalten oder Aktivieren des Mikrofons des Nutzers.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der angegebene Aktionstyp ausgelöst wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Wörterbuch mit den folgenden Eigenschaften:
    - `action`
      - : Ein String, der den Aktionstyp darstellt. Diese Eigenschaft ermöglicht es einem einzelnen Callback, mehrere Aktionstypen zu verarbeiten.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann _optional_ diese Eigenschaft enthalten, wobei es sich um einen booleschen Wert handelt, der angibt, ob ein "schnelles" Suchen durchgeführt werden soll.
        Ein "schnelles" Suchen ist ein Suchen, das in schneller Folge durchgeführt wird, beispielsweise beim schnellen Vor- oder Zurückspulen durch das Medium, indem schnell nacheinander durchgesprungen wird.
        Diese Eigenschaft kann verwendet werden, um anzugeben, dass die kürzest mögliche Methode zum Suchen des Mediums verwendet werden sollte.
        `fastSeek` ist bei der letzten Aktion in der Suchsequenz in dieser Situation nicht enthalten.
    - `seekOffset` {{optional_inline}}
      - : Wenn die `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Gleitkommawert, der angibt, um wie viele Sekunden die Wiedergabeposition vor- oder zurückbewegt werden soll.
        Wenn diese Eigenschaft nicht vorhanden ist, sollten diese Aktionen eine angemessene Standarddistanz für das Vor- oder Zurückspringen wählen (zum Beispiel 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn die `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und einen Gleitkommawert darstellen, der die absolute Zeit innerhalb des Mediums angibt, zu der die Wiedergabeposition verschoben werden soll, wobei 0 den Anfang des Mediums darstellt. Diese Eigenschaft ist bei anderen Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor festgelegten Aktions-Handler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben `null` als `callback` an.

Der Aktions-Handler erhält als Eingabe einen einzelnen Parameter: ein Objekt, das sowohl den Aktionstyp als auch die Daten liefert, die zur Durchführung der Aktion benötigt werden, sodass dieselbe Funktion mehrere Aktionstypen verarbeiten kann.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musikplayer

Dieses Beispiel erstellt eine neue Media-Session und weist ihr Aktions-Handler zu, die nichts tun.

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

Das folgende Beispiel richtet zwei Funktionen für das Abspielen und Pausieren ein und verwendet diese als Rückrufe mit den entsprechenden Aktions-Handlern.

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

Dieses Beispiel verwendet geeignete Aktions-Handler, um das Suchen in beide Richtungen durch das spielende Medium zu ermöglichen.

```js
navigator.mediaSession.setActionHandler("seekbackward", (evt) => {
  // User clicked "Seek Backward" media notification icon.
  let skipTime = evt.seekOffset || 10; // Time to skip in seconds
  audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
});

navigator.mediaSession.setActionHandler("seekforward", (evt) => {
  // User clicked "Seek Forward" media notification icon.
  let skipTime = evt.seekOffset || 10; // Time to skip in seconds
  audio.currentTime = Math.min(audio.currentTime + skipTime, audio.duration);
});
```

Um einen Medienaktions-Handler zu entfernen, weisen Sie ihn null zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Unterstützung mehrerer Aktionen in einer Handler-Funktion

Sie können auch, wenn Sie es vorziehen, eine einzige Funktion verwenden, um mehrere Aktionstypen zu verarbeiten, indem Sie den Wert der `action`-Eigenschaft überprüfen:

```js
let skipTime = 7;

navigator.mediaSession.setActionHandler("seekforward", handleSeek);
navigator.mediaSession.setActionHandler("seekbackward", handleSeek);

function handleSeek(details) {
  switch (details.action) {
    case "seekforward":
      audio.currentTime = Math.min(
        audio.currentTime + skipTime,
        audio.duration,
      );
      break;
    case "seekbackward":
      audio.currentTime = Math.max(audio.currentTime - skipTime, 0);
      break;
  }
}
```

Hier verarbeitet die `handleSeek()`-Funktion sowohl `seekbackward`- als auch `seekforward`-Aktionen.

### Verwendung von Aktions-Handlern zur Steuerung einer Folienpräsentation

Die `"previousslide"`- und `"nextslide"`-Aktions-Handler können verwendet werden, um das Vor- und Zurückblättern durch eine Folienpräsentation zu steuern, beispielsweise wenn der Nutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster schiebt und die vom Browser gelieferten Steuerungen zum Navigieren durch die Folien verwendet.

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
