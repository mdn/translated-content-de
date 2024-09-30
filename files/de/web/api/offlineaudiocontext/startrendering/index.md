---
title: "OfflineAudioContext: Methode startRendering()"
short-title: startRendering()
slug: Web/API/OfflineAudioContext/startRendering
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{ APIRef("Web Audio API") }}

Die `startRendering()`-Methode der [`OfflineAudioContext`](/de/docs/Web/API/OfflineAudioContext)-Schnittstelle beginnt mit dem Rendern des Audio-Graphs, wobei die aktuellen Verbindungen und die geplanten Änderungen berücksichtigt werden.

Das [`complete`](/de/docs/Web/API/OfflineAudioContext/complete_event)-Ereignis (vom Typ [`OfflineAudioCompletionEvent`](/de/docs/Web/API/OfflineAudioCompletionEvent)) wird ausgelöst, wenn das Rendern abgeschlossen ist und enthält den resultierenden [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) in seiner `renderedBuffer`-Eigenschaft.

Browser unterstützen derzeit zwei Versionen der `startRendering()`-Methode — eine ältere ereignisbasierte Version und eine neuere versprechenbasierte Version. Erstere wird schließlich entfernt, aber derzeit werden beide Mechanismen aus Kompatibilitätsgründen bereitgestellt.

## Syntax

```js-nolint
startRendering()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) erfüllt wird.

## Beispiele

### Audio mit einem Offline-Audio-Kontext abspielen

In diesem Beispiel deklarieren wir sowohl ein [`AudioContext`](/de/docs/Web/API/AudioContext)- als auch ein `OfflineAudioContext`-Objekt. Wir verwenden das `AudioContext`, um einen Audiotrack mit [`fetch()`](/de/docs/Web/API/Window/fetch) zu laden, dann das `OfflineAudioContext`, um das Audio in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) zu rendern und den Track abzuspielen. Nachdem der Offline-Audio-Graph eingerichtet ist, rendern wir ihn mit `OfflineAudioContext.startRendering()` in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer).

Wenn das `startRendering()`-Versprechen aufgelöst wird, ist das Rendern abgeschlossen und der ausgegebene `AudioBuffer` wird aus dem Versprechen zurückgegeben.

An diesem Punkt erstellen wir einen weiteren Audio-Kontext, erstellen darin einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode), und setzen dessen Puffer gleich dem Versprechen `AudioBuffer`. Dies wird dann als Teil eines einfachen Standard-Audio-Graphs abgespielt.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausprobieren](https://mdn.github.io/webaudio-examples/offline-audio-context-promise/), oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/offline-audio-context-promise).

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
