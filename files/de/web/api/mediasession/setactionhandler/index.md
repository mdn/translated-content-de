---
title: "MediaSession: setActionHandler() Methode"
short-title: setActionHandler()
slug: Web/API/MediaSession/setActionHandler
l10n:
  sourceCommit: e1f2821ac79708a5f7fcc895e2a4ff66ab75c41a
---

{{APIRef("Media Session API")}}

Die **`setActionHandler()`** Methode der [`MediaSession`](/de/docs/Web/API/MediaSession) Schnittstelle legt einen Handler für eine Medien-Sitzungsaktion fest. Diese Aktionen ermöglichen es einer Webanwendung, Benachrichtigungen zu empfangen, wenn der Benutzer die eingebauten physischen oder Bildschirm-Mediensteuerungen eines Geräts, wie Abspiel-, Stopp- oder Suchknöpfe, bedient.

## Syntax

```js-nolint
setActionHandler(type, callback)
```

### Parameter

- `type`
  - : Ein String, der einen Aktionstyp repräsentiert, auf den gehört werden soll. Er wird einer der folgenden sein:
    - `hangup`
      - : Beendet einen Anruf.
    - `nextslide`
      - : Wechselt zur nächsten Folie, wenn ein Foliensatz präsentiert wird.
    - `nexttrack`
      - : Schaltet die Wiedergabe zum nächsten Titel weiter.
    - `pause`
      - : Pausiert die Wiedergabe der Medien.
    - `play`
      - : Startet (oder setzt) die Wiedergabe der Medien fort.
    - `previousslide`
      - : Geht zur vorherigen Folie, wenn ein Foliensatz präsentiert wird.
    - `previoustrack`
      - : Geht zum vorherigen Titel zurück.
    - `seekbackward`
      - : Sucht von der aktuellen Position rückwärts durch die Medien. Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitspanne an, die rückwärts gesucht werden soll.
    - `seekforward`
      - : Sucht von der aktuellen Position vorwärts durch die Medien. Die `seekOffset`-Eigenschaft, die an den Callback übergeben wird, gibt die Zeitspanne an, die vorwärts gesucht werden soll.
    - `seekto`
      - : Bewegt die Wiedergabeposition zur angegebenen Zeit innerhalb der Medien. Die Zeit, zu der gesprungen werden soll, wird in der `seekTime`-Eigenschaft festgelegt, die an den Callback übergeben wird. Wenn Sie beabsichtigen, mehrere `seekto`-Operationen in schneller Folge auszuführen, können Sie auch die `fastSeek`-Eigenschaft übergeben, die an den Callback mit dem Wert `true` übergeben wird. Dies signalisiert dem Browser, dass er Schritte unternehmen kann, um wiederholte Operationen zu optimieren, was wahrscheinlich zu einer verbesserten Leistung führt.
    - `skipad`
      - : Überspringt die derzeit abgespielte Werbung oder den Werbespot. Diese Aktion kann je nach Plattform und {{Glossary("user_agent", "User-Agent")}} verfügbar oder deaktiviert sein oder aufgrund des Abonnementlevels oder anderer Umstände nicht verfügbar sein.
    - `stop`
      - : Beendet die Wiedergabe vollständig.
    - `togglecamera`
      - : Schaltet die aktive Kamera des Benutzers ein oder aus.
    - `togglemicrophone`
      - : Stummschalten oder Stummschalten des Mikrofons des Benutzers aufheben.
    - `togglescreenshare`
      - : Schaltet die aktive Bildschirmfreigabe des Benutzers ein oder aus.
- `callback`
  - : Eine Funktion, die aufgerufen wird, wenn der angegebene Aktionstyp aktiviert wird. Der Callback sollte keinen Wert zurückgeben. Der Callback erhält ein Wörterbuch mit den folgenden Eigenschaften:
    - `action`
      - : Ein String, der den Aktionstyp repräsentiert. Diese Eigenschaft ermöglicht es einem einzelnen Callback, mehrere Aktionstypen zu bearbeiten.
    - `fastSeek` {{optional_inline}}
      - : Eine [`seekto`](#seekto)-Aktion kann _optional_ diese Eigenschaft enthalten, die ein Boolescher Wert ist, der angibt, ob ein "schnelles" Suchen durchgeführt werden soll. Ein "schnelles" Suchen ist ein Suchen, das in schneller Folge durchgeführt wird, wie beim schnellen Vor- oder Zurückspulen durch die Medien, wobei schnell durch sie gesprungen wird. Diese Eigenschaft kann verwendet werden, um anzuzeigen, dass die kürzestmögliche Methode verwendet werden sollte, um in den Medien zu suchen. `fastSeek` ist in der letzten Aktion der Suchsequenz in dieser Situation nicht enthalten.
    - `seekOffset` {{optional_inline}}
      - : Wenn die `action` entweder [`seekforward`](#seekforward) oder [`seekbackward`](#seekbackward) ist und diese Eigenschaft vorhanden ist, handelt es sich um einen Gleitkommawert, der angibt, um wie viele Sekunden die Wiedergabeposition vorwärts oder rückwärts verschoben werden soll. Ist diese Eigenschaft nicht vorhanden, sollten diese Aktionen eine angemessene Standarddistanz wählen, um vorwärts oder rückwärts zu springen (wie 7 oder 10 Sekunden).
    - `seekTime` {{optional_inline}}
      - : Wenn die `action` [`seekto`](#seekto) ist, muss diese Eigenschaft vorhanden sein und ein Gleitkommawert sein, der die absolute Zeit innerhalb der Medien angibt, zu der die Wiedergabeposition verschoben werden soll, wobei 0 den Beginn der Medien angibt. Diese Eigenschaft ist für andere Aktionstypen nicht vorhanden.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beschreibung

Um einen zuvor festgelegten Aktionshandler zu entfernen, rufen Sie `setActionHandler()` erneut auf und geben `null` als `callback` an.

Der Aktionshandler erhält als Eingabe einen einzelnen Parameter: ein Objekt, das sowohl den Aktionstyp bereitstellt (sodass dieselbe Funktion mehrere Aktionstypen behandeln kann) als auch die Daten, die zur Ausführung der Aktion benötigt werden.

## Beispiele

### Einrichten von Aktionshandlern für einen Musikplayer

Dieses Beispiel erstellt eine neue Mediensitzung und weist ihr Aktionshandler zu, die nichts tun.

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

Das folgende Beispiel richtet zwei Funktionen für das Abspielen und Pausieren ein und verwendet sie dann als Callbacks mit den entsprechenden Aktionshandlern.

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

Dieses Beispiel verwendet geeignete Aktionshandler, um das Suchen in beide Richtungen durch die abspielenden Medien zu ermöglichen.

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

Um einen Medienaktionshandler zu entfernen, weisen Sie ihm `null` zu.

```js
navigator.mediaSession.setActionHandler("nexttrack", null);
```

### Unterstützung mehrerer Aktionen in einer Handlerfunktion

Sie können auch, wenn Sie es bevorzugen, eine einzelne Funktion verwenden, um mehrere Aktionstypen zu handhaben, indem Sie den Wert der `action`-Eigenschaft überprüfen:

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

Hier behandelt die Funktion `handleSeek()` sowohl die Aktionen `seekbackward` als auch `seekforward`.

### Verwendung von Aktionshandlern zur Steuerung einer Präsentation

Die Aktionshandler `"previousslide"` und `"nextslide"` können verwendet werden, um das Vorwärts- und Rückwärtsbewegen durch eine Präsentation zu steuern, beispielsweise wenn der Benutzer seine Präsentation in ein [Bild-im-Bild](/de/docs/Web/API/Picture-in-Picture_API)-Fenster legt und die vom Browser bereitgestellten Steuerungen zum Navigieren durch die Folien drückt.

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

Siehe [Präsentation von Folien / Mediensitzungsbeispiel](https://googlechrome.github.io/samples/media-session/slides.html) für ein funktionierendes Beispiel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
