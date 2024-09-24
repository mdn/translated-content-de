---
title: "AudioBufferSourceNode: start()-Methode"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `start()`-Methode der {{ domxref("AudioBufferSourceNode") }}-Schnittstelle wird verwendet, um die Wiedergabe der Audiodaten im Puffer zu planen oder die Wiedergabe sofort zu beginnen.

## Syntax

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Ton beginnen soll zu spielen, im gleichen Zeitkoordinatensystem, das von der {{domxref("AudioContext")}} verwendet wird. Wenn `when` kleiner ist als ({{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}, oder wenn es 0 ist, beginnt der Ton sofort zu spielen. **Der Standardwert ist 0.**
- `offset` {{optional_inline}}
  - : Ein Offset, angegeben als Anzahl von Sekunden im gleichen Zeitkoordinatensystem wie das `AudioContext`, zur Zeit innerhalb des Audio-Puffers, ab der die Wiedergabe beginnen soll. Zum Beispiel, um die Wiedergabe in der Mitte eines 10-sekündigen Audioclips zu starten, sollte `offset` 5 sein. Der Standardwert 0 startet die Wiedergabe am Anfang des Audio-Puffers, und Offsets, die über das Ende des zu spielenden Audios hinausgehen (basierend auf der {{domxref("AudioBuffer.duration", "Dauer")}} des Audio-Puffers und/oder der {{domxref("AudioBufferSourceNode.loopEnd", "loopEnd")}}-Eigenschaft) werden stumm auf den maximal zulässigen Wert begrenzt. Die Berechnung des Offsets in den Ton wird unter Verwendung der natürlichen Abtastrate des Soundpuffers durchgeführt, anstatt der aktuellen Wiedergaberate, sodass selbst wenn der Ton mit doppelter Geschwindigkeit abgespielt wird, der Mittelpunkt eines 10-sekündigen Audio-Puffers immer noch 5 ist.
- `duration` {{optional_inline}}
  - : Die Dauer des zu spielenden Tons, angegeben in Sekunden. Wenn dieser Parameter nicht angegeben wird, spielt der Ton, bis er sein natürliches Ende erreicht oder mit der {{domxref("AudioScheduledSourceNode.stop", "stop()")}}-Methode gestoppt wird. Die Verwendung dieses Parameters ist funktional identisch mit dem Aufruf von `start(when, offset)` und anschließendem Aufrufen von `stop(when+duration)`.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein negativer Wert für einen oder mehrere der drei Zeitparameter angegeben wurde. Bitte versuchen Sie nicht, die Gesetze der temporalen Physik zu manipulieren.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn `start()` bereits aufgerufen wurde. Sie können diese Funktion nur einmal während der Lebensdauer eines `AudioBufferSourceNode` aufrufen.

## Beispiele

Das einfachste Beispiel startet einfach die Wiedergabe des Audio-Puffers von Beginn an – Sie müssen in diesem Fall keine Parameter angeben:

```js
source.start();
```

Das folgende komplexere Beispiel wird in 1 Sekunde 10 Sekunden Ton abspielen, beginnend 3 Sekunden in den Audio-Puffer.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> [!NOTE]
> Für ein vollständigeres Beispiel, das die Verwendung von `start()` zeigt, sehen Sie sich unser {{domxref("BaseAudioContext/decodeAudioData", "AudioContext.decodeAudioData()")}}-Beispiel an. Sie können auch [das Beispiel live ausprobieren](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), und werfen Sie einen Blick auf [den Beispiel-Code](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
