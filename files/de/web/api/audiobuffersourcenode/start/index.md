---
title: "AudioBufferSourceNode: start()-Methode"
short-title: start()
slug: Web/API/AudioBufferSourceNode/start
l10n:
  sourceCommit: 4bb8f0d1f9cb2d0e23b9e19f798a7ff39ac34a49
---

{{ APIRef("Web Audio API") }}

Die Methode `start()` des Interfaces [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) wird verwendet, um die Wiedergabe der im Puffer enthaltenen Audiodaten zu planen oder sofort zu starten.

## Syntax

```js-nolint
start(when)
start(when, offset)
start(when, offset, duration)
```

### Parameter

- `when` {{optional_inline}}
  - : Der Zeitpunkt in Sekunden, zu dem die Wiedergabe beginnen soll, im selben Zeitkoordinatensystem, das auch der [`AudioContext`](/de/docs/Web/API/AudioContext) verwendet. Wenn `when` kleiner als [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) oder gleich 0 ist, beginnt die Wiedergabe sofort. **Der Standardwert ist 0.**
- `offset` {{optional_inline}}
  - : Ein Versatz in Sekunden innerhalb des Audiopuffers, ab dem die Wiedergabe beginnen soll. Er wird im selben Zeitkoordinatensystem wie der `AudioContext` angegeben. Soll die Wiedergabe beispielsweise in der Mitte eines 10 Sekunden langen Audioclips beginnen, muss `offset` den Wert 5 haben. Beim Standardwert 0 beginnt die Wiedergabe am Anfang des Audiopuffers. Versätze, die über das Ende des wiederzugebenden Audiomaterials hinausgehen – bestimmt durch die [`duration`](/de/docs/Web/API/AudioBuffer/duration) des Audiopuffers und/oder die Eigenschaft [`loopEnd`](/de/docs/Web/API/AudioBufferSourceNode/loopEnd) –, werden ohne Fehlermeldung auf den maximal zulässigen Wert begrenzt. Der Versatz innerhalb des Audiomaterials wird anhand der ursprünglichen Abtastrate des Puffers berechnet, nicht anhand der aktuellen Wiedergabegeschwindigkeit. Selbst wenn das Audiomaterial mit doppelter Geschwindigkeit wiedergegeben wird, liegt die Mitte eines 10 Sekunden langen Audiopuffers daher weiterhin bei 5.
- `duration` {{optional_inline}}
  - : Die Dauer der wiederzugebenden Audiodaten, angegeben in Sekunden des Pufferinhalts. Wird dieser Parameter nicht angegeben, läuft die Wiedergabe bis zum natürlichen Ende oder bis sie mit der Methode [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) angehalten wird. Der Wert ist unabhängig von [`AudioBufferSourceNode.playbackRate`](/de/docs/Web/API/AudioBufferSourceNode/playbackRate): Bei einer `duration` von 2 Sekunden und einer `playbackRate` von `2` werden beispielsweise 2 Sekunden des Quellmaterials wiedergegeben, woraus 1 Sekunde Audioausgabe entsteht.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- {{jsxref("TypeError")}}
  - : Wird ausgelöst, wenn für mindestens einen der drei Zeitparameter ein negativer Wert angegeben wurde. Versuchen Sie bitte nicht, die Gesetze der Zeitphysik außer Kraft zu setzen.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn `start()` bereits aufgerufen wurde. Diese Funktion kann während der Lebensdauer eines `AudioBufferSourceNode` nur einmal aufgerufen werden.

## Beispiele

Das einfachste Beispiel startet die Wiedergabe des Audiopuffers am Anfang. Dafür müssen Sie keine Parameter angeben:

```js
source.start();
```

Das folgende, komplexere Beispiel beginnt in 1 Sekunde mit der Wiedergabe von 10 Sekunden Audiomaterial, beginnend 3 Sekunden nach dem Anfang des Audiopuffers.

```js
source.start(audioCtx.currentTime + 1, 3, 10);
```

> [!NOTE]
> Ein ausführlicheres Beispiel für die Verwendung von `start()` finden Sie in unserem Beispiel zu [`AudioContext.decodeAudioData()`](/de/docs/Web/API/BaseAudioContext/decodeAudioData). Sie können das [Beispiel auch direkt ausprobieren](https://mdn.github.io/webaudio-examples/decode-audio-data/promise/) und sich den [Quellcode des Beispiels](https://github.com/mdn/webaudio-examples/tree/main/decode-audio-data) ansehen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
