---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Audio API")}}

Das `OfflineAudioContext`-Interface ist ein {{domxref("AudioContext")}}-Interface, das einen Audio-Verarbeitungsgraphen repräsentiert, der aus miteinander verbundenen {{domxref("AudioNode")}}s besteht. Im Gegensatz zu einem standardmäßigen {{domxref("AudioContext")}} rendert ein `OfflineAudioContext` den Ton nicht an die Gerätehardware, sondern erzeugt ihn so schnell wie möglich und gibt das Ergebnis an einen {{domxref("AudioBuffer")}} aus.

{{InheritanceDiagram}}

## Konstruktor

- {{domxref("OfflineAudioContext.OfflineAudioContext()", "OfflineAudioContext()")}}
  - : Erstellt eine neue Instanz von `OfflineAudioContext`.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem Elterninterface, {{domxref("BaseAudioContext")}}._

- {{domxref('OfflineAudioContext.length')}} {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Größe des Puffers in Sample-Frames darstellt.

## Instanz-Methoden

_Erbt auch Methoden von seinem Elterninterface, {{domxref("BaseAudioContext")}}._

- {{domxref("OfflineAudioContext.suspend()")}}
  - : Plant eine Unterbrechung des Zeitfortschritts im Audio-Context zur angegebenen Zeit und gibt ein Promise zurück.
- {{domxref("OfflineAudioContext.startRendering()")}}
  - : Startet das Rendern des Audios unter Berücksichtigung der aktuellen Verbindungen und geplanten Änderungen. Diese Seite behandelt sowohl die ereignisbasierte als auch die promise-basierte Version.

### Veraltete Methoden

- {{domxref("OfflineAudioContext.resume()")}}
  - : Setzt den Zeitfortschritt in einem Audio-Context fort, der zuvor unterbrochen wurde.

> [!NOTE]
> Die `resume()`-Methode ist weiterhin verfügbar — sie ist nun im {{domxref("BaseAudioContext")}}-Interface definiert (siehe {{domxref("AudioContext.resume")}}) und kann somit von sowohl dem {{domxref("AudioContext")}} als auch dem `OfflineAudioContext`-Interface aufgerufen werden.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) gehört werden, oder indem ein Event-Listener der `oneventname`-Eigenschaft dieses Interfaces zugewiesen wird:

- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Wird ausgelöst, wenn das Rendern eines Offline-Audio-Contexts abgeschlossen ist.

## Beispiele

### Abspielen von Audio mit einem Offline-Audio-Context

In diesem Beispiel deklarieren wir sowohl ein {{domxref("AudioContext")}} als auch ein `OfflineAudioContext`-Objekt. Wir verwenden das `AudioContext`, um einen Audiotrack mit {{domxref("Window/fetch", "fetch()")}} zu laden, und dann das `OfflineAudioContext`, um das Audio in einen {{domxref("AudioBufferSourceNode")}} zu rendern und den Track abzuspielen. Nachdem der Offline-Audiograph eingerichtet ist, rendern wir ihn mit `OfflineAudioContext.startRendering()` in einen {{domxref("AudioBuffer")}}.

Wenn das `startRendering()`-Promise aufgelöst wird, ist das Rendern abgeschlossen und der Ausgabe-`AudioBuffer` wird aus dem Promise zurückgegeben.

An diesem Punkt erstellen wir einen weiteren Audio-Context, erstellen einen {{domxref("AudioBufferSourceNode")}} darin und setzen dessen Puffer gleich dem Promise-`AudioBuffer`. Dieser wird dann als Teil eines einfachen Standard-Audiographen abgespielt.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/offline-audio-context-promise).

```js
// Define both online and offline audio contexts
let audioCtx; // Must be initialized after a user interaction
const offlineCtx = new OfflineAudioContext(2, 44100 * 40, 44100);

// Define constants for dom nodes
const play = document.querySelector("#play");

function getData() {
  // Fetch an audio track, decode it and stick it in a buffer.
  // Then we put the buffer into the source and can play it.
  fetch("viper.ogg")
    .then((response) => response.arrayBuffer())
    .then((downloadedBuffer) => audioCtx.decodeAudioData(downloadedBuffer))
    .then((decodedBuffer) => {
      console.log("File downloaded successfully.");
      const source = new AudioBufferSourceNode(offlineCtx, {
        buffer: decodedBuffer,
      });
      source.connect(offlineCtx.destination);
      return source.start();
    })
    .then(() => offlineCtx.startRendering())
    .then((renderedBuffer) => {
      console.log("Rendering completed successfully.");
      play.disabled = false;
      const song = new AudioBufferSourceNode(audioCtx, {
        buffer: renderedBuffer,
      });
      song.connect(audioCtx.destination);

      // Start the song
      song.start();
    })
    .catch((err) => {
      console.error(`Error encountered: ${err}`);
    });
}

// Activate the play button
play.onclick = () => {
  play.disabled = true;
  // We can initialize the context as the user clicked.
  audioCtx = new AudioContext();

  // Fetch the data and start the song
  getData();
};
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
