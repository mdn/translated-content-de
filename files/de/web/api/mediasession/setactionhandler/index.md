---
title: "MediaSession: setActionHandler() Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: 201edb14234b7c58ff16532c3da1bde6bd26804f
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`**-Methode der [`MediaSession`](/de/docs/Web/API/MediaSession)-Schnittstelle legt einen Handler für eine Media-Session-Aktion fest.
Diese Aktionen ermöglichen es einer Web-App, Benachrichtigungen zu empfangen, wenn der Benutzer physische oder virtuelle Mediensteuerungen eines Geräts, wie z.B. Wiedergabe-, Stopp- oder Suchlauf-Tasten, aktiviert.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp darstellt, auf den zugehört werden soll. Er wird einer der folgenden sein:
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Wechselt zur nächsten Folie bei der Präsentation eines Folien-Sets.
    - `nexttrack`
      - : Springt zur nächsten Wiedergabespur.
    - `pause`
      - : Pausiert die Wiedergabe der Medien.
    - `play`
      - : Beginnt (oder setzt) die Wiedergabe der Medien fort.
    - `previousslide`
      - : Wechselt zur vorherigen Folie bei der Präsentation eines Folien-Sets.
    - `previoustrack`
      - : Geht zur vorherigen Wiedergabespur zurück.
    - `seekbackward`
      - : Sucht rückwärts durch die Medien von der aktuellen Position. Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitspanne an, um die rückwärts gesucht werden soll.
    - `seekforward`
      - : Sucht vorwärts von der aktuellen Position durch die Medien. Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitspanne an, um die vorwärts gesucht werden soll.
    - `seekto`
      - : Verschiebt die Wiedergabeposition zu einer angegebenen Zeit innerhalb der Medien. Die Zeit, zu der gesucht werden soll, wird in der `seekTime`-Eigenschaft angegeben, die an den Callback übergeben wird. Wenn Sie beabsichtigen, mehrere `seekto`-Operationen in schneller Abfolge durchzuführen, können Sie auch die `fastSeek`-Eigenschaft mit einem Wert von `true` an den Callback übergeben. Dies teilt dem Browser mit, dass er Schritte zur Optimierung der wiederholten Operationen unternehmen kann, was wahrscheinlich zu einer verbesserten Leistung führt.
    - `skipad`
      - : Überspringt die derzeit abgespielte Werbung oder den Werbespot. Diese Aktion kann je nach Plattform und [User-Agent](/de/docs/Glossary/user_agent) möglicherweise nicht verfügbar sein oder aufgrund von Abonnementstufen oder anderen Umständen deaktiviert sein.
    - `stop`
      - : Beendet die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Benutzers ein oder aus.
    - `togglemicrophone`
      - : Schaltet das Mikrofon des Benutzers stumm oder ein.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der angegebene Aktionstyp ausgelöst wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Wörterbuch, das die folgenden Eigenschaften enthält:
    - `action`
      - : Ein String, der den Aktionstyp darstellt. Diese Eigenschaft ermöglicht es, dass ein einzelner Callback mehrere Aktionstypen behandeln kann.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann _optional_ diese Eigenschaft enthalten, die einen Boolean-Wert darstellt, der angibt, ob ein "schneller" Suchlauf durchgeführt werden soll. Ein "schneller" Suchlauf wird in einer schnellen Abfolge durchgeführt, wie zum Beispiel beim schnellen Vor- oder Rücklauf durch die Medien, beim schnellen Durchblättern. Diese Eigenschaft kann verwendet werden, um anzuzeigen, dass die kürzestmögliche Methode zur Durchführung des Suchlaufs verwendet werden sollte. `fastSeek` ist bei der letzten Aktion in der Suchabfolge in dieser Situation nicht enthalten.
    - `seekOffset` {{optional_inline}}
      - : Wenn die `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Fließkommawert, der angibt, um wie viele Sekunden die Wiedergabeposition vorwärts oder rückwärts verschoben werden soll. Wenn diese Eigenschaft nicht vorhanden ist, sollten diese Aktionen eine vernünftige Standarddistanz zum Überspringen vorwärts oder rückwärts wählen (z. B. 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn die `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und einen Fließkommawert darstellen, der die absolute Zeit innerhalb der Medien angibt, zu der die Wiedergabeposition verschoben werden soll, wobei 0 den Anfang der Medien angibt. Diese Eigenschaft ist bei anderen Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor festgelegten Aktions-Handler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben `null` als `callback` an.

Der Aktions-Handler erhält als Eingabe einen einzigen Parameter: ein Objekt, das sowohl den Aktionstyp enthält (damit dieselbe Funktion mehrere Aktionstypen behandeln kann), als auch Daten, die zur Durchführung der Aktion erforderlich sind.

## Beispiele

### Einrichten von Aktions-Handlern für einen Musik-Player

Dieses Beispiel erstellt eine neue Medien-Session und weist ihr Aktions-Handler zu, die nichts tun.

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

Das folgende Beispiel richtet zwei Funktionen für Wiedergabe und Pause ein und verwendet sie dann als Callbacks mit den entsprechenden Aktions-Handlern.

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

Dieses Beispiel verwendet geeignete Aktions-Handler, um das Suchen in beide Richtungen durch die abgespielten Medien zu ermöglichen.

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

Um einen Medien-Aktions-Handler zu entfernen, weisen Sie ihm `null` zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Unterstützung mehrerer Aktionen in einer Handler-Funktion

Sie können auch, wenn Sie möchten, eine einzelne Funktion verwenden, um mehrere Aktionstypen zu behandeln, indem Sie den Wert der `action`-Eigenschaft überprüfen:

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

Hier behandelt die `handleSeek()`-Funktion sowohl `seekbackward` als auch `seekforward`-Aktionen.

### Verwenden von Aktions-Handlern zur Steuerung einer Folienpräsentation

Die `"previousslide"`- und `"nextslide"`-Aktions-Handler können verwendet werden, um das Vorwärts- und Rückwärtsblättern durch eine Folienpräsentation zu handhaben, beispielsweise wenn der Benutzer seine Präsentation in ein [Picture-in-Picture](/de/docs/Web/API/Picture-in-Picture_API)-Fenster legt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch die Folien drückt.

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

Siehe [Präsentation von Folien / Medien-Session-Beispiel](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
