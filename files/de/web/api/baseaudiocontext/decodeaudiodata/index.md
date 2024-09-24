---
title: "BaseAudioContext: decodeAudioData()-Methode"
short-title: decodeAudioData()
slug: Web/API/BaseAudioContext/decodeAudioData
l10n:
  sourceCommit: 0c3f18aca2c8a93d3982183f64bf7762c2c310b0
---

{{ APIRef("Web Audio API") }}

Die `decodeAudioData()`-Methode der {{ domxref("BaseAudioContext") }}-Schnittstelle wird verwendet, um Audiodateidaten, die in einem {{jsxref("ArrayBuffer")}} enthalten sind und von {{domxref("Window/fetch", "fetch()")}}, {{domxref("XMLHttpRequest")}} oder {{domxref("FileReader")}} geladen wurden, asynchron zu dekodieren. Das dekodierte {{domxref("AudioBuffer")}} wird auf die Abtastrate des {{domxref("AudioContext")}} umgesampelt und dann an einen Rückruf oder ein Promise übergeben.

Dies ist die bevorzugte Methode, um eine Audioquelle für die Web Audio API aus einer Audiospur zu erstellen. Diese Methode funktioniert nur mit vollständigen Dateidaten, nicht mit Fragmenten von Audiodateidaten.

Diese Funktion implementiert zwei alternative Wege, um die Audiodaten oder Fehlermeldungen asynchron zurückzugeben: Sie gibt ein {{jsxref("Promise")}} zurück, das sich mit den Audiodaten erfüllt, und akzeptiert auch Callback-Argumente, um Erfolg oder Misserfolg zu behandeln. Die primäre Methode, um mit dieser Funktion zu interagieren, ist über den Promise-Rückgabewert, während die Callback-Parameter aus Gründen der Abwärtskompatibilität bereitgestellt werden.

## Syntax

```js-nolint
// Syntax basierend auf Promises gibt ein Promise zurück:
decodeAudioData(arrayBuffer)

// Callback-Syntax hat keinen Rückgabewert:
decodeAudioData(arrayBuffer, successCallback)
decodeAudioData(arrayBuffer, successCallback, errorCallback)
```

### Parameter

- `arrayBuffer`
  - : Ein ArrayBuffer, der die zu dekodierenden Audiodaten enthält, normalerweise von {{domxref("Window/fetch", "fetch()")}}, {{domxref("XMLHttpRequest")}} oder {{domxref("FileReader")}} bezogen.
- `successCallback` {{optional_inline}}
  - : Eine Callback-Funktion, die aufgerufen wird, wenn die Dekodierung erfolgreich abgeschlossen wird. Das einzige Argument für diesen Callback ist ein {{domxref("AudioBuffer")}}, das die _decodedData_ (die dekodierten PCM-Audiodaten) darstellt. Normalerweise möchten Sie die dekodierten Daten in einen {{domxref("AudioBufferSourceNode")}} einfügen, von dem aus sie abgespielt und nach Belieben manipuliert werden können.
- `errorCallback` {{optional_inline}}
  - : Ein optionaler Error-Callback, der aufgerufen wird, wenn beim Dekodieren der Audiodaten ein Fehler auftritt.

### Rückgabewert

Ein {{jsxref("Promise") }}-Objekt, das sich mit den _decodedData_ erfüllt. Wenn Sie die XHR-Syntax verwenden, ignorieren Sie diesen Rückgabewert und verwenden stattdessen eine Callback-Funktion.

## Beispiele

In diesem Abschnitt behandeln wir zunächst die syntaxbasierte Nutzung von Promises und anschließend die Callback-Syntax.

### Syntax basierend auf Promises

In diesem Beispiel verwendet `loadAudio()` {{domxref("Window/fetch", "fetch()")}}, um eine Audiodatei abzurufen, und dekodiert sie in ein {{domxref("AudioBuffer")}}. Anschließend wird `audioBuffer` für die spätere Wiedergabe in der globalen `buffer`-Variable zwischengespeichert.

> [!NOTE]
> Sie können [das vollständige Beispiel live ausführen](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) oder [den Quellcode anzeigen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data/promise).

```js
let audioCtx;
let buffer;
let source;

async function loadAudio() {
  try {
    // Laden Sie eine Audiodatei
    const response = await fetch("viper.mp3");
    // Dekodieren Sie sie
    buffer = await audioCtx.decodeAudioData(await response.arrayBuffer());
  } catch (err) {
    console.error(`Unable to fetch the audio file. Error: ${err.message}`);
  }
}
```

### Callback-Syntax

In diesem Beispiel verwendet `loadAudio()` {{domxref("Window/fetch", "fetch()")}}, um eine Audiodatei abzurufen, und dekodiert sie mithilfe der Callback-basierten Version von `decodeAudioData()` in ein {{domxref("AudioBuffer")}}. Im Callback wird der dekodierte Buffer abgespielt.

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
    // Laden Sie eine Audiodatei
    const response = await fetch("viper.mp3");
    // Dekodieren Sie sie
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
