---
title: "AudioScheduledSourceNode: stop() Methode"
short-title: stop()
slug: Web/API/AudioScheduledSourceNode/stop
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `stop()`-Methode von [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) plant das Stoppen der Wiedergabe eines Klangs zu einer angegebenen Zeit. Wenn keine Zeit angegeben wird, stoppt der Klang sofort.

Jedes Mal, wenn Sie `stop()` auf demselben Knoten aufrufen, ersetzt die angegebene Zeit jede zuvor geplante Stoppzeit, die noch nicht eingetreten ist. Wenn der Knoten bereits gestoppt wurde, hat diese Methode keine Wirkung.

> [!NOTE]
> Wenn eine geplante Stoppzeit vor der geplanten Startzeit des Knotens auftritt, beginnt der Knoten nie zu spielen.

## Syntax

```js-nolint
stop()
stop(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Klang aufhören soll zu spielen. Dieser Wert wird im selben Zeitkoordinatensystem angegeben, das der [`AudioContext`](/de/docs/Web/API/AudioContext) für sein [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime)-Attribut verwendet. Wenn Sie diesen Parameter weglassen, einen Wert von 0 angeben oder einen negativen Wert übergeben, wird die Wiedergabe des Klangs sofort gestoppt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateNode` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Knoten nicht gestartet wurde, indem [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) aufgerufen wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der für `when` angegebene Wert negativ ist.

## Beispiele

Dieses Beispiel zeigt das Starten eines Oszillatorknotens, der geplant ist, sofort zu beginnen, und nach einer Sekunde zu stoppen. Die Stoppzeit wird bestimmt, indem die aktuelle Zeit des Audiokontexts von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) genommen und 1 Sekunde hinzugefügt wird.

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
