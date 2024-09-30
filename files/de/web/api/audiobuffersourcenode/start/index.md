---
title: "AudioBufferSourceNode: start()-Methode"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `start()`-Methode des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
Interface wird verwendet, um die Wiedergabe der Audiodaten im Puffer zu planen oder
die Wiedergabe sofort zu beginnen.

## Syntax

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Ton beginnen soll, im gleichen Zeitkoordinatensystem wie das [`AudioContext`](/de/docs/Web/API/AudioContext). Wenn `when` kleiner ist als ([`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)) oder wenn er 0 ist, beginnt der Ton sofort zu spielen. **Der Standardwert ist 0.**
- `offset` {{optional_inline}}
  - : Ein Offset, in Sekunden angegeben, im gleichen Zeitkoordinatensystem wie das `AudioContext`, zur Zeit innerhalb des Audiopuffers, bei der die Wiedergabe beginnen soll. Um beispielsweise die Wiedergabe in der Mitte eines 10-Sekunden-Audioclips zu starten, sollte `offset` 5 sein. Der Standardwert 0 startet die Wiedergabe am Anfang des Audiopuffers, und Offsets, die über das Ende des abzuspielenden Audios hinausgehen (basierend auf der [`duration`](/de/docs/Web/API/AudioBuffer/duration) des Audiopuffers und/oder der [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd)-Eigenschaft), werden stillschweigend auf den maximal zulässigen Wert begrenzt. Die Berechnung des Offsets im Klang erfolgt mit der natürlichen Abtastrate des Klangpuffers, anstatt mit der aktuellen Wiedergaberate, sodass, auch wenn der Klang doppelt so schnell abgespielt wird, der Mittelpunkt eines 10-Sekunden-Audiopuffers immer noch bei 5 liegt.
- `duration` {{optional_inline}}
  - : Die Dauer des abzuspielenden Tons, in Sekunden angegeben. Wenn dieser Parameter nicht angegeben ist, spielt der Ton bis zum natürlichen Ende oder wird mit der [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode gestoppt. Die Verwendung dieses Parameters ist funktional identisch mit dem Aufruf von `start(when, offset)` und anschließendem Aufruf von `stop(when+duration)`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein negativer Wert für einen der drei Zeitparameter angegeben wurde. Bitte versuchen Sie nicht, die Gesetze der temporalen Physik zu manipulieren.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `start()` bereits aufgerufen wurde. Sie können diese Funktion nur einmal während der Lebensdauer eines `AudioBufferSourceNode` aufrufen.

## Beispiele

Das einfachste Beispiel startet einfach die Wiedergabe des Audiopuffers von Anfang an — in diesem Fall müssen keine Parameter angegeben werden:

```js
source.start();
```

Das folgende, komplexere Beispiel beginnt in 1 Sekunde mit der Wiedergabe von 10 Sekunden Ton, wobei 3 Sekunden in den Audiopuffer hineingespielt werden.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> [!NOTE]
> Ein vollständigeres Beispiel zur Verwendung von `start()` finden Sie in unserem Beispiel zu [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData). Sie können auch [das Beispiel live ausprobieren](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) und sich [den Beispielquellcode ansehen](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
