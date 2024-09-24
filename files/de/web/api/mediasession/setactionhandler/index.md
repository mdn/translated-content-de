---
title: "MediaSession: setActionHandler() Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`** Methode des {{domxref("MediaSession")}}-Interfaces setzt einen Handler für eine Mediensteuerungsaktion. Diese Aktionen ermöglichen es einer Webanwendung, Benachrichtigungen zu erhalten, wenn ein Benutzer die physischen oder virtuellen Mediensteuerungen eines Geräts wie Wiedergabe-, Stopp- oder Such-Tasten nutzt.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp angibt, für den zu lauschen ist. Es wird einer der folgenden sein:
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Wechselt zur nächsten Folie, wenn eine Präsentation gehalten wird.
    - `nexttrack`
      - : Geht zur nächsten Spur in der Wiedergabeliste.
    - `pause`
      - : Pausiert die Wiedergabe des Mediums.
    - `play`
      - : Startet (oder setzt) die Wiedergabe des Mediums (fort).
    - `previousslide`
      - : Geht zur vorherigen Folie in einer Präsentation.
    - `previoustrack`
      - : Geht zur vorherigen Spur zurück.
    - `seekbackward`
      - : Spult rückwärts durch das Medium vom aktuellen Standpunkt aus. Die Eigenschaft `seekOffset`, die an den Callback übergeben wird, gibt an, um wieviel Zeit zurückgespult werden soll.
    - `seekforward`
      - : Spult vorwärts durch das Medium vom aktuellen Standpunkt aus. Die Eigenschaft `seekOffset`, die an den Callback übergeben wird, gibt an, um wieviel Zeit vorgespult werden soll.
    - `seekto`
      - : Springt zu einem bestimmten Zeitpunkt innerhalb des Mediums. Die Zeit, zu der gesprungen werden soll, wird in der Eigenschaft `seekTime` angegeben, die an den Callback übergeben wird. Wenn Sie vorhaben, mehrere `seekto`-Operationen in schneller Abfolge auszuführen, können Sie auch die Eigenschaft `fastSeek` mit einem Wert von `true` angeben, die an den Callback übergeben wird. Dies lässt den Browser wissen, dass er Maßnahmen zur Optimierung wiederholter Operationen ergreifen kann, was wahrscheinlich zu einer verbesserten Leistung führt.
    - `skipad`
      - : Überspringt die derzeit laufende Werbung. Diese Aktion kann je nach Plattform und {{Glossary("user agent")}} verfügbar oder nicht verfügbar sein, oder sie kann aufgrund des Abonnementlevels oder anderer Umstände deaktiviert sein.
    - `stop`
      - : Beendet die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Benutzers ein oder aus.
    - `togglemicrophone`
      - : Stummschalten oder Aktivieren des Mikrofons des Benutzers.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn die spezifizierte Aktion ausgeführt wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Wörterbuch mit den folgenden Eigenschaften:
    - `action`
      - : Ein String, der den Aktionstyp darstellt. Diese Eigenschaft ermöglicht es einem einzigen Callback, mehrere Aktionstypen zu behandeln.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann _optional_ diese Eigenschaft enthalten, die ein boolescher Wert ist, der angibt, ob eine "schnelle" Suche durchgeführt werden soll. Eine "schnelle" Suche erfolgt in schneller Abfolge, wie z. B. beim schnellen Vor- oder Rücklauf durch das Medium. Diese Eigenschaft kann verwendet werden, um anzugeben, dass Sie die kürzest mögliche Methode zur Suche im Medium verwenden sollten. `fastSeek` wird bei der letzten Aktion in der Suchabfolge in dieser Situation nicht einbezogen.
    - `seekOffset` {{optional_inline}}
      - : Wenn die `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Gleitkommawert, der die Anzahl der Sekunden angibt, um die die Wiedergabeposition vor- oder zurückgehen soll. Wenn diese Eigenschaft nicht vorhanden ist, sollten für diese Aktionen vernünftige Standardabstände zum Vor- oder Zurückspringen gewählt werden (wie z. B. 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn die `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und muss ein Gleitkommawert sein, der die absolute Zeit innerhalb des Mediums angibt, zu der die Wiedergabeposition bewegt werden soll, wobei 0 den Anfang des Mediums anzeigt. Diese Eigenschaft ist bei anderen Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor eingerichteten Aktions-Handler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben `null` als `callback` an.

Der Aktions-Handler erhält als Eingabe einen einzelnen Parameter: ein Objekt, das sowohl den Aktionstyp (damit dieselbe Funktion mehrere Aktionstypen behandeln kann) als auch die Daten bereitstellt, die erforderlich sind, um die Aktion durchzuführen.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musik-Player

Dieses Beispiel erstellt eine neue Mediensitzung und weist ihr Aktions-Handler zu (die nichts tun).

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

Das folgende Beispiel richtet zwei Funktionen zum Abspielen und Pausieren ein und verwendet sie dann als Callbacks mit den entsprechenden Aktions-Handlern.

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

Dieses Beispiel verwendet geeignete Aktions-Handler, um die Möglichkeit zu bieten, in beide Richtungen durch das abgespielte Medium zu spulen.

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

Um einen Medienaktions-Handler zu entfernen, weisen Sie ihm null zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Unterstützung mehrerer Aktionen in einer Handler-Funktion

Sie können auch, wenn Sie es bevorzugen, eine einzige Funktion verwenden, um mehrere Aktionstypen zu behandeln, indem Sie den Wert der `action`-Eigenschaft prüfen:

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

Hier behandelt die `handleSeek()`-Funktion sowohl `seekbackward` als auch `seekforward` Aktionen.

### Verwendung von Aktions-Handlern zur Steuerung einer Präsentation

Die `"previousslide"` und `"nextslide"` Aktions-Handler können verwendet werden, um das Vor- und Zurückblättern in einer Präsentation zu steuern, zum Beispiel wenn der Benutzer seine Präsentation in ein {{domxref("Picture-in-Picture API", "Picture-in-Picture", "", "nocode")}} Fenster legt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch Folien verwendet.

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

## Browserkompatibilität

{{Compat}}
