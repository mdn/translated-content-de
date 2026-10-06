---
title: "AudioScheduledSourceNode: Methode start()"
short-title: start()
slug: Web/API/AudioScheduledSourceNode/start
l10n:
  sourceCommit: f4cb3876c5912de1d27ef485b37481d5deb6dc6d
---

{{APIRef("Web Audio API")}}

Die Methode `start()` von [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) legt fest, wann die Wiedergabe eines Tons beginnt.
Wenn kein Zeitpunkt angegeben wird, beginnt die Wiedergabe sofort.

## Syntax

```js-nolint
start()
start(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Der Zeitpunkt in Sekunden, zu dem die Wiedergabe des Tons beginnen soll. Dieser Wert verwendet dasselbe Zeitkoordinatensystem wie das Attribut [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) des [`AudioContext`](/de/docs/Web/API/AudioContext). Ein Wert von 0 (oder das vollständige Weglassen des Parameters `when`) bewirkt, dass die Wiedergabe sofort beginnt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Node bereits gestartet wurde. Dieser Fehler tritt auch dann auf, wenn der Node aufgrund eines vorherigen Aufrufs von [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop) nicht mehr läuft.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der für `when` angegebene Wert negativ ist.

## Beispiele

Dieses Beispiel zeigt, wie ein [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) erstellt wird, dessen Wiedergabe nach 2 Sekunden beginnt und 1 Sekunde später endet. Die Zeitpunkte werden berechnet, indem die gewünschte Anzahl an Sekunden zum aktuellen Zeitwert des Kontexts addiert wird, den [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) zurückgibt.

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
