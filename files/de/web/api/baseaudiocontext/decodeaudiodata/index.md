---
title: "BaseAudioContext: decodeAudioData() Methode"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `decodeAudioData()`-Methode der [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext)-Schnittstelle wird verwendet, um Audiodateidaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind, asynchron zu dekodieren. Diese Daten werden von [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader) geladen. Der dekodierte [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) wird auf die Abtastrate des [`AudioContext`](/de/docs/Web/API/AudioContext) umgesampelt und anschließend an einen Callback oder ein Promise übergeben.

Dies ist die bevorzugte Methode, um eine Audioquelle für die Web Audio API von einem Audiotrack zu erstellen. Diese Methode funktioniert nur mit vollständigen Dateien, nicht mit Fragmenten von Audiodateien.

Diese Funktion implementiert zwei alternative Möglichkeiten, die Audiodaten oder Fehlermeldungen asynchron zurückzugeben: Sie gibt ein {{jsxref("Promise")}} zurück, das mit den Audiodaten erfüllt wird, und akzeptiert auch Callback-Argumente, um den Erfolg oder das Scheitern zu handhaben. Die primäre Methode der Interaktion mit dieser Funktion ist über den Promise-Rückgabewert, und die Callback-Parameter werden aus Kompatibilitätsgründen bereitgestellt.

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
  - : Ein ArrayBuffer, der die zu dekodierenden Audiodaten enthält, normalerweise von [`fetch()`](/de/docs/Web/API/Window/fetch), [`XMLHttpRequest`](/de/docs/Web/API/XMLHttpRequest) oder [`FileReader`](/de/docs/Web/API/FileReader) abgerufen.
- `successCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die Dekodierung erfolgreich abgeschlossen ist. Das einzige Argument für diesen Callback ist ein [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), der die _decodedData_ (die dekodierten PCM-Audiodaten) darstellt. In der Regel möchten Sie die dekodierten Daten in einen [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) einfügen, von dem es abgespielt und nach Ihren Wünschen manipuliert werden kann.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Fehler-Callback, der aufgerufen wird, wenn ein Fehler bei der Dekodierung der Audiodaten auftritt.

### Rückgabewert

Ein {{jsxref("Promise") }}-Objekt, das mit den _decodedData_ erfüllt wird. Wenn Sie die XHR-Syntax verwenden, ignorieren Sie diesen Rückgabewert und verwenden stattdessen eine Callback-Funktion.

## Beispiele

In diesem Abschnitt behandeln wir zunächst die auf Promise basierende Syntax und dann die Callback-Syntax.

### Auf Promise basierende Syntax

In diesem Beispiel verwendet `loadAudio()` [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Audiodatei abzurufen und sie in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu dekodieren. Es speichert dann den `audioBuffer` im globalen `buffer`-Variable-Cache für die spätere Wiedergabe.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

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

In diesem Beispiel verwendet `loadAudio()` [`fetch()`](/de/docs/Web/API/Window/fetch), um eine Audiodatei abzurufen und sie mit der callback-basierten Version von `decodeAudioData()` in einen [`AudioBuffer`](/de/docs/Web/API/AudioBuffer) zu dekodieren. Im Callback wird der dekodierte Buffer abgespielt.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/callback/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/callback).

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
