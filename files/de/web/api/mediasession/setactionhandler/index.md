---
title: "MediaSession: setActionHandler()-Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: f4c221962681b1472cd57da60379ad7825fe5081
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`**-Methode des [`MediaSession`](/de/docs/Web/API/MediaSession)-Interfaces legt einen Handler für eine Medienaktions einer Media Session fest.
Diese Aktionen ermöglichen es einer Web-App, Benachrichtigungen zu erhalten, wenn der Benutzer die integrierten physischen oder Bildschirm-Mediensteuerungen eines Geräts verwendet, beispielsweise Wiedergabe-, Stopp- oder Suchschaltflächen.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp darstellt, auf den überwacht werden soll. Er ist einer der folgenden:
    - `enterpictureinpicture`
      - : Öffnet die Medien in einem [Picture-in-picture](/de/docs/Web/API/Picture-in-Picture_API)- oder [Document Picture-in-picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster.
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Wechselt bei der Präsentation eines Foliensatzes zur nächsten Folie.
    - `nexttrack`
      - : Setzt die Wiedergabe mit dem nächsten Titel fort.
    - `pause`
      - : Pausiert die Wiedergabe der Medien.
    - `play`
      - : Startet (oder setzt fort) die Wiedergabe der Medien.
    - `previousslide`
      - : Wechselt bei der Präsentation eines Foliensatzes zur vorherigen Folie.
    - `previoustrack`
      - : Wechselt zurück zum vorherigen Titel.
    - `seekbackward`
      - : Sucht von der aktuellen Position aus rückwärts durch die Medien.
        Die an den Callback übergebene Eigenschaft `seekOffset` gibt die Dauer an, um die rückwärts gesucht werden soll.
    - `seekforward`
      - : Sucht von der aktuellen Position aus vorwärts durch die Medien.
        Die an den Callback übergebene Eigenschaft `seekOffset` gibt die Dauer an, um die vorwärts gesucht werden soll.
    - `seekto`
      - : Verschiebt die Wiedergabeposition an die angegebene Zeit innerhalb der Medien.
        Die anzusteuernde Zeit wird in der an den Callback übergebenen Eigenschaft `seekTime` angegeben.
        Wenn Sie beabsichtigen, mehrere `seekto`-Operationen schnell nacheinander auszuführen, können Sie außerdem für die an den Callback übergebene Eigenschaft `fastSeek` den Wert `true` angeben.
        Dadurch weiß der Browser, dass er Maßnahmen zur Optimierung wiederholter Operationen ergreifen kann, was wahrscheinlich zu einer besseren Performance führt.
    - `skipad`
      - : Überspringt die aktuell wiedergegebene Werbung.
        Diese Aktion kann abhängig von der Plattform und dem {{Glossary("user_agent", "User-Agent")}} verfügbar oder nicht verfügbar sein oder aufgrund des Abonnementlevels oder anderer Umstände deaktiviert sein.
    - `stop`
      - : Beendet die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Benutzers ein oder aus.
    - `togglemicrophone`
      - : Schaltet das Mikrofon des Benutzers stumm oder hebt die Stummschaltung auf.
    - `togglescreenshare`
      - : Schaltet die aktive Bildschirmfreigabe des Benutzers ein oder aus.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der angegebene Aktionstyp ausgelöst wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Dictionary mit den folgenden Eigenschaften:
    - `action`
      - : Ein String, der den Aktionstyp darstellt. Diese Eigenschaft ermöglicht es einem einzelnen Callback, mehrere Aktionstypen zu verarbeiten.
    - `enterPictureInPictureReason` {{optional_inline}}
      - : Diese Eigenschaft ist verfügbar, wenn die Aktion [`enterpictureinpicture`](#enterpictureinpicture) lautet.
        Sie ist ein Aufzählungswert, der den Grund angibt, warum der Browser diese Aktion ausgelöst hat. Mögliche Werte sind:
        - `contentoccluded`
          - : Die Seite, die die Medien anzeigt, wurde verdeckt, beispielsweise durch einen Tabwechsel oder eine Minimierung.
        - `useraction`
          - : Der Benutzer hat eine explizite Aktion ausgeführt, um den Picture-in-Picture-Modus auszulösen, beispielsweise durch Auswahl einer Option „Picture-in-picture“ aus einem Kontextmenü oder der Browser-Chrome.
        - `other`
          - : Der Grund für das Aktivieren des Picture-in-Picture-Modus wird nicht durch die anderen Werte abgedeckt.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann diese Eigenschaft _optional_ enthalten. Sie ist ein boolescher Wert, der angibt, ob ein „schnelles“ Suchen durchgeführt werden soll.
        Ein „schnelles“ Suchen ist ein Suchen, das in schneller Folge durchgeführt wird, beispielsweise beim schnellen Vor- oder Zurückspulen durch die Medien oder beim schnellen Überspringen.
        Diese Eigenschaft kann verwendet werden, um anzugeben, dass Sie die schnellstmögliche Methode zum Suchen in den Medien verwenden sollten.
        `fastSeek` ist in dieser Situation bei der letzten Aktion der Suchsequenz nicht enthalten.
    - `seekOffset` {{optional_inline}}
      - : Wenn `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Gleitkommawert, der die Anzahl Sekunden angibt, um die die Wiedergabeposition vor- oder zurückbewegt werden soll.
        Wenn diese Eigenschaft nicht vorhanden ist, sollten diese Aktionen eine angemessene Standarddistanz für das Vor- oder Zurückspringen wählen (beispielsweise 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und ein Gleitkommawert sein, der die absolute Zeit innerhalb der Medien angibt, zu der die Wiedergabeposition verschoben werden soll, wobei 0 den Beginn der Medien angibt. Diese Eigenschaft ist bei anderen Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor eingerichteten Action Handler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben `null` als `callback` an.

Der Action Handler erhält als Eingabe einen einzelnen Parameter: ein Objekt, das sowohl den Aktionstyp enthält (sodass dieselbe Funktion mehrere Aktionstypen verarbeiten kann) als auch die Daten, die zum Ausführen der Aktion erforderlich sind.

## Beispiele

### Action Handler für einen Musikplayer einrichten

Dieses Beispiel erstellt eine neue Media Session und weist ihr Action Handler zu, die nichts tun.

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

Das folgende Beispiel richtet zwei Funktionen für die Wiedergabe und das Pausieren ein und verwendet sie dann als Callbacks mit den entsprechenden Action Handlern.

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

Dieses Beispiel verwendet geeignete Action Handler, um das Suchen in beide Richtungen durch die wiedergegebenen Medien zu ermöglichen.

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

Um einen Media Action Handler zu entfernen, weisen Sie ihm `null` zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Mehrere Aktionen in einer Handler-Funktion unterstützen

Wenn Sie möchten, können Sie auch eine einzelne Funktion verwenden, um mehrere Aktionstypen zu verarbeiten, indem Sie den Wert der Eigenschaft `action` überprüfen:

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

Hier verarbeitet die Funktion `handleSeek()` sowohl die Aktionen `seekbackward` als auch `seekforward`.

### Action Handler zur Steuerung einer Folienpräsentation verwenden

Die Action Handler `"previousslide"` und `"nextslide"` können verwendet werden, um das Vor- und Zurückgehen in einer Folienpräsentation zu verarbeiten, beispielsweise wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster versetzt und die vom Browser bereitgestellten Steuerelemente verwendet, um durch die Folien zu navigieren.

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
