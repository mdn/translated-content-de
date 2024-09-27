---
title: OfflineAudioContext
slug: Web/API/OfflineAudioContext
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("Web Audio API")}}

Das `OfflineAudioContext` Interface ist ein [`AudioContext`](/de/docs/Web/API/AudioContext) Interface, das einen Audiobearbeitungs-Graph repräsentiert, der aus miteinander verbundenen [`AudioNode`](/de/docs/Web/API/AudioNode)s aufgebaut ist. Im Gegensatz zu einem standardmäßigen [`AudioContext`](/de/docs/Web/API/AudioContext) rendert ein `OfflineAudioContext` den Ton nicht auf der Gerätehardware; stattdessen erzeugt es diesen so schnell wie möglich und gibt das Ergebnis an einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) aus.

{{InheritanceDiagram}}

## Konstruktor

- [`OfflineAudioContext()`](/de/docs/Web/API/OfflineAudioContext/OfflineAudioContext)
  - : Erstellt eine neue Instanz von `OfflineAudioContext`.

## Instanz-Eigenschaften

_Erbt auch Eigenschaften von seinem übergeordneten Interface [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`OfflineAudioContext.length`](/de/docs/Web/API/OfflineAudioContext/length) {{ReadOnlyInline}}
  - : Eine Ganzzahl, die die Größe des Buffers in Sample-Frames darstellt.

## Instanz-Methoden

_Erbt auch Methoden von seinem übergeordneten Interface [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)._

- [`OfflineAudioContext.suspend()`](/de/docs/Web/API/OfflineAudioContext/suspend)
  - : Plant eine Aussetzung des Zeitfortschritts im Audiokontext zu einem bestimmten Zeitpunkt und gibt ein Versprechen zurück.
- [`OfflineAudioContext.startRendering()`](/de/docs/Web/API/OfflineAudioContext/startRendering)
  - : Beginnt mit dem Rendern des Audios, unter Berücksichtigung der aktuellen Verbindungen und der aktuell geplanten Änderungen. Diese Seite behandelt sowohl die ereignisbasierte als auch die versprechensbasierte Version.

### Veraltete Methoden

- [`OfflineAudioContext.resume()`](/de/docs/Web/API/OfflineAudioContext/resume)
  - : Setzt den Zeitfortschritt in einem Audiokontext fort, der zuvor ausgesetzt wurde.

> [!NOTE]
> Die Methode `resume()` ist weiterhin verfügbar — sie ist nun im [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) Interface definiert (siehe [`AudioContext.resume`](/de/docs/Web/API/AudioContext/resume)) und kann somit von den Interfaces [`AudioContext`](/de/docs/Web/API/AudioContext) und `OfflineAudioContext` aufgerufen werden.

## Ereignisse

Diese Ereignisse können mit [`addEventListener()`](/de/docs/Web/API/EventTarget/addEventListener) abgehört werden oder durch Zuweisen eines Ereignis-Listeners zur `oneventname` Eigenschaft dieses Interfaces:

- [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)
  - : Wird ausgelöst, wenn das Rendern eines offline Audiokontexts abgeschlossen ist.

## Beispiele

### Abspielen von Audio mit einem Offline-Audiokontext

In diesem Beispiel deklarieren wir sowohl ein [`AudioContext`](/de/docs/Web/API/AudioContext) als auch ein `OfflineAudioContext` Objekt. Wir nutzen das `AudioContext`, um eine Audiospur mit [`fetch()`](/de/docs/Web/API/Window/fetch) zu laden, und dann das `OfflineAudioContext`, um das Audio in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) zu rendern und die Spur abzuspielen. Nachdem der Offline-Audiograph eingerichtet ist, rendern wir ihn mit `OfflineAudioContext.startRendering()` in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer).

Wenn das `startRendering()` Versprechen erfüllt ist, ist das Rendern abgeschlossen und der Ausgabe-`AudioBuffer` wird aus dem Versprechen zurückgegeben.

An diesem Punkt erstellen wir einen weiteren Audiokontext, erstellen einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) darin und setzen dessen Buffer gleich dem Versprechen-`AudioBuffer`. Dieser wird dann als Teil eines einfachen standardmäßigen Audiographs abgespielt.

> [!NOTE]
> Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/offline-audio-context-promise).

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

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
