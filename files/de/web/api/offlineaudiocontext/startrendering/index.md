---
title: "OfflineAudioContext: startRendering()-Methode"
short-title: startRendering()
slug: Web/API/OfflineAudioContext/startRendering
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Audio API") }}

Die `startRendering()`-Methode der {{ domxref("OfflineAudioContext") }}-Schnittstelle startet das Rendern des Audiographen, wobei die aktuellen Verbindungen und die derzeit geplanten Änderungen berücksichtigt werden.

Das {{domxref("OfflineAudioContext/complete_event", "complete")}}-Ereignis (vom Typ {{domxref("OfflineAudioCompletionEvent")}}) wird ausgelöst, wenn das Rendering abgeschlossen ist und das resultierende {{domxref("AudioBuffer")}} in seiner `renderedBuffer`-Eigenschaft enthalten ist.

Browser unterstützen derzeit zwei Versionen der `startRendering()`-Methode: eine ältere, ereignisbasierte Version und eine neuere, auf Versprechen basierende Version. Erstere wird letztendlich entfernt, aber derzeit werden beide Mechanismen aus Gründen der Kompatibilität bereitgestellt.

## Syntax

```js-nolint
startRendering()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem {{domxref("AudioBuffer")}} erfüllt wird.

## Beispiele

### Audio mit einem Offline-Audiokontext abspielen

In diesem Beispiel deklarieren wir sowohl ein {{domxref("AudioContext")}}- als auch ein `OfflineAudioContext`-Objekt. Wir verwenden den `AudioContext`, um einen Audiotrack mit {{domxref("Window/fetch", "fetch()")}} zu laden, und dann das `OfflineAudioContext`, um das Audio in einen {{domxref("AudioBufferSourceNode")}} zu rendern und den Track abzuspielen. Nachdem der Offline-Audiograph eingerichtet ist, rendern wir ihn zu einem {{domxref("AudioBuffer")}} mittels `OfflineAudioContext.startRendering()`.

Wenn das `startRendering()`-Versprechen erfüllt ist, ist das Rendering abgeschlossen und der Ausgabe-`AudioBuffer` wird aus dem Versprechen zurückgegeben.

Zu diesem Zeitpunkt erstellen wir einen weiteren Audiokontext, erstellen darin einen {{domxref("AudioBufferSourceNode")}}, und setzen dessen Buffer gleich dem versprochenen `AudioBuffer`. Dieser wird dann als Teil eines einfachen standardmäßigen Audiographen abgespielt.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/offline-audio-context-promise).

```js
// Definieren Sie sowohl Online- als auch Offline-Audiokontexte
let audioCtx; // Muss nach einer Benutzerinteraktion initialisiert werden
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

// Definieren Sie Konstanten für DOM-Knoten
const play = document.querySelector("#play");

function getData() {
  // Holen Sie einen Audiotrack, decodieren Sie ihn und legen Sie ihn in einen Buffer.
  // Dann legen wir den Buffer in die Quelle und können ihn abspielen.
  fetch("viper.ogg")
    .then((response) => response.arrayBuffer())
    .then((downloadedBuffer) => audioCtx.decodeAudioData(downloadedBuffer))
    .then((decodedBuffer) => {
      console.log("Datei erfolgreich heruntergeladen.");
      const source = new AudioBufferSourceNode(offlineCtx, {
        buffer: decodedBuffer,
      });
      source.connect(offlineCtx.destination);
      return source.start();
    })
    .then(() => offlineCtx.startRendering())
    .then((renderedBuffer) => {
      console.log("Rendering erfolgreich abgeschlossen.");
      play.disabled = false;
      const song = new AudioBufferSourceNode(audioCtx, {
        buffer: renderedBuffer,
      });
      song.connect(audioCtx.destination);

      // Starten Sie das Lied
      song.start();
    })
    .catch((err) => {
      console.error(`Fehler aufgetreten: ${err}`);
    });
}

// Aktivieren Sie die Play-Schaltfläche
play.onclick = () => {
  play.disabled = true;
  // Wir können den Kontext initialisieren, da der Benutzer geklickt hat.
  audioCtx = new AudioContext();

  // Holen Sie die Daten und starten Sie das Lied
  getData();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
