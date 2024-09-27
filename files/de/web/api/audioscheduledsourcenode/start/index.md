---
title: "AudioScheduledSourceNode: start() Methode"
short-title: start()
slug: Web/API/AudioScheduledSourceNode/start
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

Die `start()`-Methode des [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) plant einen Klang so ein, dass er zu einem bestimmten Zeitpunkt mit der Wiedergabe beginnt.
Wenn kein Zeitpunkt angegeben wird, beginnt der Klang sofort zu spielen.

## Syntax

```js-nolint
start()
start(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Klang beginnen soll zu spielen. Dieser Wert wird in demselben Zeitkoordinatensystem angegeben, das auch der [`AudioContext`](/de/docs/Web/API/AudioContext) für sein Attribut [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) verwendet. Ein Wert von 0 (oder das vollständige Weglassen des `when`-Parameters) lässt den Klang sofort mit der Wiedergabe beginnen.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateNode` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Node bereits gestartet wurde. Dieser Fehler tritt auch auf, wenn der Node aufgrund eines vorherigen Aufrufs von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) nicht mehr läuft.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der für `when` angegebene Wert negativ ist.

## Beispiele

Dieses Beispiel demonstriert, wie ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, der so geplant ist, dass er in 2 Sekunden mit der Wiedergabe beginnt und 1 Sekunde danach aufhört zu spielen. Die Zeiten werden berechnet, indem die gewünschte Anzahl von Sekunden zur aktuellen Zeitmarke des Kontexts hinzugefügt wird, die von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) zurückgegeben wird.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Schedule the start and stop times for the oscillator */

osc.start(context.currentTime + 2);
osc.stop(context.currentTime + 3);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
