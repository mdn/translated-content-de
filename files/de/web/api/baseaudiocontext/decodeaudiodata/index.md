---
title: "BaseAudioContext: Methode decodeAudioData()"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
l10n:
  sourceCommit: b60c5dad8cf10d8492f2aff491abb40bf1851b03
---

{{ APIRef("Web Audio API") }}

Die Methode `decodeAudioData()` des Interfaces [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext) wird verwendet, um Audiodateidaten asynchron zu dekodieren, die in einem {{jsxref("ArrayBuffer")}} enthalten sind und über [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader) geladen wurden. Der dekodierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird auf die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) umgerechnet und anschließend an einen Callback übergeben oder als Ergebnis eines Promise bereitgestellt.

Dies ist die bevorzugte Methode, um aus einer Audiospur eine Audioquelle für die Web Audio API zu erstellen. Die Methode funktioniert nur mit vollständigen Audiodateidaten, nicht mit Fragmenten davon.

Diese Funktion bietet zwei Möglichkeiten, Audiodaten oder Fehlermeldungen asynchron zurückzugeben: Sie gibt ein {{jsxref("Promise")}} zurück, das mit den Audiodaten erfüllt wird, und akzeptiert außerdem Callback-Argumente für den Erfolgs- und Fehlerfall. Die bevorzugte Verwendung erfolgt über den Promise-Rückgabewert; die Callback-Parameter werden aus Gründen der Abwärtskompatibilität bereitgestellt.

## Syntax

```js-nolint
// Promise-based syntax returns a Promise:
decodeAudioData(arrayBuffer)

// Callback syntax has no return value:
decodeAudioData(arrayBuffer, successCallback)
decodeAudioData(arrayBuffer, successCallback, errorCallback)
```

### Parameter

- `arrayBuffer`
  - : Ein ArrayBuffer mit den zu dekodierenden Audiodaten, die üblicherweise über [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader) geladen wurden.
- `successCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die Dekodierung erfolgreich abgeschlossen ist. Ihr einziges Argument ist ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die _decodedData_ (die dekodierten PCM-Audiodaten) enthält. Üblicherweise werden die dekodierten Daten in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) eingefügt, über den sie nach Bedarf wiedergegeben und bearbeitet werden können.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Fehler-Callback, der aufgerufen wird, wenn bei der Dekodierung der Audiodaten ein Fehler auftritt.

### Rückgabewert

Ein {{jsxref("Promise") }}-Objekt, das mit _decodedData_ erfüllt wird. Wenn Sie die XHR-Syntax verwenden, ignorieren Sie diesen Rückgabewert und verwenden stattdessen eine Callback-Funktion.

## Beispiele

In diesem Abschnitt wird zuerst die Promise-basierte Syntax und danach die Callback-Syntax behandelt.

### Promise-basierte Syntax

In diesem Beispiel ruft `loadAudio()` mit [`fetch()`](/de/docs/Web/API/Window/fetch) eine Audiodatei ab und dekodiert sie in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer). Anschließend speichert die Funktion den `audioBuffer` für die spätere Wiedergabe in der globalen Variablen `buffer`.

> [!NOTE]
> Sie können [das vollständige Beispiel ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  }
  // …
});
```

### Callback-Syntax

In diesem Beispiel ruft `loadAudio()` mit [`fetch()`](/de/docs/Web/API/Window/fetch) eine Audiodatei ab und dekodiert sie mithilfe der Callback-basierten Variante von `decodeAudioData()` in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer). Im Callback wird der dekodierte Buffer wiedergegeben.

> [!NOTE]
> Sie können [das vollständige Beispiel ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/callback/) oder [den Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/callback).

```js
let audioCtx;
let source;

function playBuffer(buffer) {
  source = audioCtx.createBufferSource();
  source.buffer = buffer;
  source.connect(audioCtx.destination);
  source.loop = true;
  source.start();
}

async function loadAudio() {
  try {
    // Load an audio file
    const response = await fetch("viper.mp3");
    // Decode it
    audioCtx.decodeAudioData(await response.arrayBuffer(), playBuffer);
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}

play.addEventListener("click", async () => {
  if (!audioCtx) {
    audioCtx = new AudioContext();
    await loadAudio();
  } else {
    playBuffer();
  }
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
