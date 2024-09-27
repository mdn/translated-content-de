---
title: "AudioScheduledSourceNode: stop() Methode"
short-title: stop()
slug: Web/API/AudioScheduledSourceNode/stop
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `stop()` Methode auf dem [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) plant das Ende der Soundwiedergabe zur angegebenen Zeit. Wenn keine Zeit angegeben wird, stoppt der Sound sofort.

Jedes Mal, wenn Sie `stop()` auf demselben Node aufrufen, ersetzt die angegebene Zeit eine zuvor geplante Stopzeit, die noch nicht eingetreten ist. Wenn der Node bereits gestoppt wurde, hat diese Methode keine Wirkung.

> [!NOTE]
> Wenn eine geplante Stopzeit vor der geplanten Startzeit des Nodes eintritt, beginnt der Node nie zu spielen.

## Syntax

```js-nolint
stop()
stop(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Sound aufhören soll zu spielen. Dieser Wert wird im gleichen Zeitkoordinatensystem angegeben, das auch der [`AudioContext`](/de/docs/Web/API/AudioContext) für sein Attribut [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) verwendet. Das Auslassen dieses Parameters, das Angeben eines Werts von 0 oder das Übergeben eines negativen Werts führt dazu, dass der Sound sofort stoppt.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateNode` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der Node nicht durch Aufrufen von [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) gestartet wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Wert für `when` negativ ist.

## Beispiele

Dieses Beispiel zeigt, wie ein Oszillator-Node gestartet wird, der so geplant ist, dass er sofort zu spielen beginnt und nach einer Sekunde aufhört. Die Stopzeit wird bestimmt, indem die aktuelle Zeit des Audiokontexts von [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) genommen und eine Sekunde hinzugefügt wird.

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

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)
