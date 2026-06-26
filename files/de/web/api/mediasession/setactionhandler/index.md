---
title: "MediaSession: setActionHandler()-Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: 74c92544977217347d3c461f9386bb2d32cdf99d
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`**-Methode der [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle setzt einen Handler für eine Media-Session-Aktion.
Diese Aktionen ermöglichen es einer Web-App, Benachrichtigungen zu erhalten, wenn der Benutzer die eingebauten physischen oder Bildschirm-Mediensteuerungen eines Geräts verwendet, wie z.B. Play-, Stop- oder Such-Tasten.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp repräsentiert, auf den gehört werden soll. Er wird einer der folgenden sein:
    - `enterpictureinpicture`
      - : Öffnet das Medium in einem [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)- oder [Document Picture-in-Picture](/de/docs/Web/API/Document_Picture-in-Picture_API)-Fenster.
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Geht zur nächsten Folie, wenn ein Foliensatz präsentiert wird.
    - `nexttrack`
      - : Wechselt zur nächsten Wiedergabespur.
    - `pause`
      - : Hält die Wiedergabe des Mediums an.
    - `play`
      - : Beginnt (oder setzt) die Wiedergabe des Mediums fort.
    - `previousslide`
      - : Geht zur vorherigen Folie, wenn ein Foliensatz präsentiert wird.
    - `previoustrack`
      - : Geht zur vorherigen Wiedergabespur zurück.
    - `seekbackward`
      - : Sucht rückwärts durch das Medium von der aktuellen Position.
        Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitmenge an, die rückwärts gesucht werden soll.
    - `seekforward`
      - : Sucht vorwärts von der aktuellen Position durch das Medium.
        Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitmenge an, die vorwärts gesucht werden soll.
    - `seekto`
      - : Verschiebt die Wiedergabeposition zur angegebenen Zeit innerhalb des Mediums.
        Die Zeit, zu der verschoben werden soll, ist in der `seekTime`-Eigenschaft angegeben, die an den Callback übergeben wird.
        Wenn Sie beabsichtigen, mehrere `seekto`-Operationen in schneller Folge durchzuführen, können Sie auch die `fastSeek`-Eigenschaft an den Callback mit einem Wert von `true` übergeben.
        Dies ermöglicht dem Browser, Maßnahmen zur Optimierung wiederholter Operationen zu ergreifen, was wahrscheinlich zu einer verbesserten Leistung führt.
    - `skipad`
      - : Überspringt die aktuell spielende Werbung oder den Werbespot.
        Diese Aktion kann je nach Plattform und {{Glossary("user_agent", "Benutzer-Agent")}} verfügbar oder nicht verfügbar sein oder kann aufgrund von Abonnementstufe oder anderen Umständen deaktiviert sein.
    - `stop`
      - : Beendet die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Benutzers ein oder aus.
    - `togglemicrophone`
      - : Stummt oder entstummt das Mikrofon des Benutzers.
    - `togglescreenshare`
      - : Schaltet das aktive Screensharing des Benutzers ein oder aus.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der angegebene Aktionstyp aufgerufen wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Dictionary, das die folgenden Eigenschaften enthält:
    - `action`
      - : Ein String, der den Aktionstyp repräsentiert. Diese Eigenschaft ermöglicht es einem einzelnen Callback, mehrere Aktionstypen zu behandeln.
    - `enterPictureInPictureReason` {{optional_inline}}
      - : Diese Eigenschaft wird verfügbar sein, wenn die Aktion [`enterpictureinpicture`](#enterpictureinpicture) ist.
        Es handelt sich um einen enumerierten Wert, der den Grund angibt, warum der Browser diese Aktion ausgelöst hat. Mögliche Werte sind:
        - `contentoccluded`
          - : Die Seite, die das Medium anzeigt, wurde verdeckt, z.B. durch Tab-Wechsel oder Minimierung.
        - `useraction`
          - : Der Benutzer hat eine explizite Aktion durchgeführt, um den Bild-in-Bild-Modus zu aktivieren, z.B. durch Auswahl einer "Bild-in-Bild"-Option aus einem Kontextmenü oder der Browseroberfläche.
        - `other`
          - : Der Grund für den Bild-in-Bild-Modus ist etwas, das von den anderen Werten nicht abgedeckt wird.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann _optional_ diese Eigenschaft enthalten, die ein Boolean-Wert ist, der anzeigt, ob eine "schnelle" Suche durchgeführt werden soll oder nicht.
        Eine "schnelle" Suche ist eine Suche, die in schneller Folge durchgeführt wird, etwa beim schnellen Vor- oder Zurückspulen durch das Medium, beim schnellen Überspringen.
        Diese Eigenschaft kann verwendet werden, um anzuzeigen, dass die kürzest mögliche Methode verwendet werden sollte, um im Medium zu suchen.
        `fastSeek` ist bei der letzten Aktion in der Suchsequenz in dieser Situation nicht enthalten.
    - `seekOffset` {{optional_inline}}
      - : Wenn die `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Gleitkommawert, der die Anzahl der Sekunden angibt, um die die Wiedergabeposition vorwärts oder rückwärts verschoben werden soll.
        Wenn diese Eigenschaft nicht vorhanden ist, sollten diese Aktionen eine vernünftige Standarddistanz wählen, um vorwärts oder rückwärts zu springen (z.B. 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn die `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und muss ein Gleitkommawert sein, der die absolute Zeit innerhalb des Mediums angibt, zu der die Wiedergabeposition verschoben werden soll, wobei 0 den Beginn des Mediums anzeigt. Diese Eigenschaft ist bei anderen Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor festgelegten Aktions-Handler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben Sie `null` als `callback` an.

Der Aktions-Handler erhält als Eingabe einen einzigen Parameter: ein Objekt, das sowohl den Aktionstyp (damit die gleiche Funktion mehrere Aktionstypen behandeln kann) als auch die Daten enthält, die erforderlich sind, um die Aktion auszuführen.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musik-Player

Dieses Beispiel erstellt eine neue Media-Session und weist ihr Aktions-Handler (die nichts tun) zu.

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

Das folgende Beispiel richtet zwei Funktionen für das Abspielen und Anhalten ein und verwendet sie dann als Callbacks mit den entsprechenden Aktions-Handlern.

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

Dieses Beispiel verwendet geeignete Aktions-Handler, um das Suchen in beide Richtungen durch die spielenden Medien zu ermöglichen.

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

Um einen Medienaktions-Handler zu entfernen, weisen Sie ihm `null` zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Unterstützung mehrerer Aktionen in einer Handler-Funktion

Sie können auch, falls Sie es vorziehen, eine einzelne Funktion verwenden, um mehrere Aktionstypen zu behandeln, indem Sie den Wert der `action`-Eigenschaft überprüfen:

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

Hier behandelt die `handleSeek()`-Funktion sowohl `seekbackward`- als auch `seekforward`-Aktionen.

### Verwenden von Aktions-Handlern zur Steuerung einer Präsentation

Die `"previousslide"`- und `"nextslide"`-Aktions-Handler können verwendet werden, um das Vor- und Zurückspringen durch eine Präsentation zu steuern, beispielsweise wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster versetzt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch die Folien verwendet.

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
