---
title: "BaseAudioContext: Methode decodeAudioData()"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `decodeAudioData()`-Methode des [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Interfaces wird verwendet, um Audiodateidaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind und von [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader) geladen wurden, asynchron zu decodieren. Der decodierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird auf die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) umgesampelt und dann an einen Callback oder ein Versprechen übergeben.

Dies ist die bevorzugte Methode, um eine Audioquelle für die Web Audio API aus einem Audiotrack zu erstellen. Diese Methode funktioniert nur mit vollständigen Dateidaten, nicht mit Fragmenten von Audiodateidaten.

Diese Funktion implementiert zwei alternative Möglichkeiten, um die Audiodaten oder Fehlermeldungen asynchron zurückzugeben: Sie gibt ein {{jsxref("Promise")}} zurück, das mit den Audiodaten erfüllt wird, und akzeptiert auch Callback-Argumente, um Erfolg oder Misserfolg zu behandeln. Die primäre Methode zur Verwendung dieser Funktion ist über den Promise-Rückgabewert, und die Callback-Parameter werden aus Kompatibilitätsgründen bereitgestellt.

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
  - : Ein ArrayBuffer, der die zu decodierenden Audiodaten enthält, normalerweise abgerufen von [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader).
- `successCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die Decodierung erfolgreich abgeschlossen ist. Das einzige Argument für diesen Callback ist ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die _decodedData_ (die decodierten PCM-Audiodaten) darstellt. Üblicherweise möchten Sie die decodierten Daten in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) einfügen, von dem sie abgespielt und nach Belieben bearbeitet werden können.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Fehler-Callback, der aufgerufen wird, wenn ein Fehler bei der Decodierung der Audiodaten auftritt.

### Rückgabewert

Ein {{jsxref("Promise")}}-Objekt, das mit den _decodedData_ erfüllt wird. Wenn Sie die XHR-Syntax verwenden, ignorieren Sie diesen Rückgabewert und verwenden stattdessen eine Callback-Funktion.

## Beispiele

In diesem Abschnitt behandeln wir zuerst die Syntax basierend auf Promises und dann die Callback-Syntax.

### Promise-basierte Syntax

In diesem Beispiel verwendet `loadAudio()` [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Audiodatei abzurufen und sie in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu decodieren. Anschließend wird der `audioBuffer` im globalen `buffer`-Variable für die spätere Wiedergabe zwischengespeichert.

> [!NOTE]
> Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

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
```

### Callback-Syntax

In diesem Beispiel verwendet `loadAudio()` [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Audiodatei abzurufen und sie mit der rückrufbasierten Version von `decodeAudioData()` in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu decodieren. Im Callback wird der decodierte Buffer abgespielt.

> [!NOTE]
> Sie können das [vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/callback/) oder den [Quellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/callback).

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
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
