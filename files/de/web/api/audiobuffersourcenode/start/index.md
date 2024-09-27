---
title: "AudioBufferSourceNode: start() Methode"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `start()`-Methode der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Schnittstelle wird verwendet, um die Wiedergabe der im Puffer enthaltenen Audiodaten zu planen oder um die Wiedergabe sofort zu beginnen.

## Syntax

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Ton beginnen sollte, im gleichen Zeitkoordinatensystem, das vom [`AudioContext`](/de/docs/Web/API/AudioContext) verwendet wird. Wenn `when` kleiner ist als ([`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)) oder wenn es 0 ist, beginnt der Ton sofort abzuspielen. **Der Standardwert ist 0.**
- `offset` {{optional_inline}}
  - : Ein Versatz, angegeben als Anzahl von Sekunden im gleichen Zeitkoordinatensystem wie das `AudioContext`, zu der Zeit innerhalb des Audiopuffers, an der die Wiedergabe beginnen sollte. Beispielsweise sollte `offset` 5 sein, um die Wiedergabe in der Mitte eines 10-Sekunden-Audioclips zu starten. Der Standardwert 0 wird die Wiedergabe am Anfang des Audiopuffers beginnen, und Versätze, die über das Ende des zu spielenden Audios hinausgehen (basierend auf der [`duration`](/de/docs/Web/API/AudioBuffer/duration) des Audiopuffers und/oder der [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd)-Eigenschaft), werden stillschweigend auf den maximal zulässigen Wert geklammert. Die Berechnung des Versatzes in den Klang erfolgt mit der natürlichen Samplerate des Klangpuffers und nicht mit der aktuellen Wiedergaberate, sodass auch dann, wenn der Klang doppelt so schnell spielt, der Mittelpunkt eines 10-Sekunden-Audiopuffers immer noch 5 ist.
- `duration` {{optional_inline}}
  - : Die Dauer des zu spielenden Klangs, angegeben in Sekunden. Wenn dieser Parameter nicht angegeben wird, spielt der Ton, bis er seinen natürlichen Abschluss erreicht oder mit der [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)-Methode gestoppt wird. Die Verwendung dieses Parameters ist funktional identisch mit dem Aufruf von `start(when, offset)` und anschließendem Aufruf von `stop(when+duration)`.

### Rückgabewert

Kein Wert ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein negativer Wert für einen oder mehrere der drei Zeitparameter angegeben wurde. Bitte versuchen Sie nicht, die Gesetze der zeitlichen Physik zu manipulieren.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `start()` bereits aufgerufen wurde. Sie können diese Funktion während der Lebensdauer eines `AudioBufferSourceNode` nur einmal aufrufen.

## Beispiele

Das einfachste Beispiel startet einfach die Wiedergabe des Audiobuffers von Anfang an – Sie müssen in diesem Fall keine Parameter angeben:

```js
source.start();
```

Das folgende, komplexere Beispiel startet in 1 Sekunde die Wiedergabe von 10 Sekunden Ton, beginnend bei 3 Sekunden in den Audiopuffer.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> [!NOTE]
> Für ein vollständigeres Beispiel zur Verwendung von `start()`, schauen Sie sich unser Beispiel zu [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) an. Sie können auch [das Beispiel live ausprobieren](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) und [den Quellcode des Beispiels](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data) ansehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
