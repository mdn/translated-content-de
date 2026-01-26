---
title: "AudioBufferSourceNode: Methode start()"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: cbb6b6ba73d24946ca8d0eaf700e3fb52054fe0f
---

{{ APIRef("Web Audio API") }}

Die Methode `start()` der [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
Schnittstelle wird verwendet, um die Wiedergabe der im Puffer enthaltenen Audiodaten zu planen oder
sofort mit der Wiedergabe zu beginnen.

## Syntax

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Sound beginnen soll, im gleichen Zeitkoordinatensystem, das vom [`AudioContext`](/de/docs/Web/API/AudioContext) verwendet wird. Wenn `when`
    kleiner als ([`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)) ist oder wenn es 0 ist, beginnt der Sound sofort zu spielen. **Der Standardwert ist 0.**
- `offset` {{optional_inline}}
  - : Ein Offset, angegeben als Anzahl der Sekunden im gleichen Zeitkoordinatensystem wie
    `AudioContext`, zur Zeit innerhalb des Audiopuffers, bei der die Wiedergabe
    beginnen soll. Zum Beispiel, um die Wiedergabe in der Mitte eines 10-sekündigen Audioclips zu starten,
    sollte `offset` 5 sein. Der Standardwert 0 beginnt die Wiedergabe am
    Anfang des Audiopuffers, und Offsets, die das Ende des abzuspielenden Audios überschreiten (basierend auf der [`duration`](/de/docs/Web/API/AudioBuffer/duration)
    des Audiopuffers und/oder der [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) Eigenschaft), werden
    stillschweigend auf den maximal zulässigen Wert begrenzt. Die Berechnung des Offsets in den
    Sound erfolgt unter Verwendung der natürlichen Abtastrate des Soundpuffers, nicht der
    aktuellen Wiedergabegeschwindigkeit, sodass selbst wenn der Sound mit doppelter Geschwindigkeit gespielt wird, der
    Mittelpunkt eines 10-sekündigen Audiopuffers immer noch bei 5 liegt.
- `duration` {{optional_inline}}
  - : Die Dauer der abzuspielenden Audiodaten, angegeben als Sekunden des gesamten Pufferinhalts.
    Wenn dieser Parameter nicht angegeben ist, spielt der Sound, bis er sein natürliches Ende erreicht oder
    mit der [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) Methode angehalten wird. Der
    Wert ist unabhängig von der [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate), sodass beispielsweise bei einer
    `duration` von 2 Sekunden und einer `playbackRate` von `2` 2 Sekunden der Quelle abgespielt werden,
    was zu einem 1-sekündigen Audioausgang führt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn ein negativer Wert für einen oder mehrere der drei Zeitparameter angegeben wurde. Bitte
    versuchen Sie nicht, die Gesetze der temporalen Physik zu umgehen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `start()` bereits aufgerufen wurde. Sie können diese Funktion nur einmal
    während der Lebensdauer eines `AudioBufferSourceNode` aufrufen.

## Beispiele

Das einfachste Beispiel startet einfach die Wiedergabe des Audiopuffers von Anfang an — in diesem Fall
müssen keine Parameter angegeben werden:

```js
source.start();
```

Das folgende komplexere Beispiel wird 1 Sekunde ab jetzt 10 Sekunden lang
Sound abspielen, der 3 Sekunden in den Audiopuffer startet.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> [!NOTE]
> Für ein vollständigeres Beispiel zur Verwendung von `start()`, schauen Sie sich unser Beispiel zu [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData) an. Sie können auch [das Beispiel live ausprobieren](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/), und einen Blick auf [den Beispielcode](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data) werfen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
