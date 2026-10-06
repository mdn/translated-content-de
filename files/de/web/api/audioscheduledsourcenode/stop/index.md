---
title: "AudioScheduledSourceNode: Methode stop()"
short-title: stop()
slug: Web/API/AudioScheduledSourceNode/stop
l10n:
  sourceCommit: f4cb3876c5912de1d27ef485b37481d5deb6dc6d
---

{{ APIRef("Web Audio API") }}

Die Methode `stop()` von [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) legt fest, wann die Wiedergabe eines Tons endet. Wird kein Zeitpunkt angegeben, endet die Wiedergabe sofort.

Wenn Sie `stop()` erneut für denselben Node aufrufen, ersetzt der angegebene Zeitpunkt einen zuvor festgelegten Stoppzeitpunkt, sofern dieser noch nicht erreicht wurde. Wenn der Node bereits gestoppt wurde, hat die Methode keine Wirkung.

> [!NOTE]
> Liegt der geplante Stoppzeitpunkt vor dem geplanten Startzeitpunkt des Nodes, beginnt die Wiedergabe nie.

## Syntax

```js-nolint
stop()
stop(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Der Zeitpunkt in Sekunden, zu dem die Wiedergabe des Tons enden soll. Dieser Wert wird im selben Zeitkoordinatensystem angegeben, das [`AudioContext`](/de/docs/Web/API/AudioContext) für sein Attribut [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) verwendet. Wenn Sie diesen Parameter weglassen oder den Wert 0 angeben, endet die Wiedergabe sofort.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Node noch nicht durch einen Aufruf von [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) gestartet wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der für `when` angegebene Wert negativ ist.

## Beispiele

Dieses Beispiel zeigt, wie ein Oszillator-Node gestartet wird, der sofort mit der Wiedergabe beginnt und nach einer Sekunde stoppt. Der Stoppzeitpunkt wird berechnet, indem zum aktuellen Zeitpunkt des Audio-Kontexts aus [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) eine Sekunde addiert wird.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Let's play a sine wave for one second. */

osc.start();
osc.stop(context.currentTime + 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
