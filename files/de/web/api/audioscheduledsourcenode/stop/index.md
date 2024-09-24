---
title: "AudioScheduledSourceNode: stop()-Methode"
short-title: stop()
slug: Web/API/AudioScheduledSourceNode/stop
l10n:
  sourceCommit: ec1006afdf68a5808a48ab6301f9ccff3cd7ecc2
---

{{ APIRef("Web Audio API") }}

Die `stop()`-Methode auf {{domxref("AudioScheduledSourceNode")}} plant, dass ein Sound zu einer angegebenen Zeit aufhört abzuspielen. Wenn keine Zeit angegeben wird, stoppt der Sound sofort.

Jedes Mal, wenn Sie `stop()` auf demselben Node aufrufen, ersetzt die angegebene Zeit jede zuvor geplante Stoppzeit, die noch nicht eingetreten ist. Wenn der Node bereits gestoppt wurde, hat diese Methode keine Wirkung.

> [!NOTE]
> Wenn eine geplante Stoppzeit vor der geplanten Startzeit des Nodes eintritt, beginnt der Node niemals zu spielen.

## Syntax

```js-nolint
stop()
stop(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Sound aufhören soll zu spielen. Dieser Wert wird im selben Zeitkoordinatensystem angegeben, das der {{domxref("AudioContext")}} für sein {{domxref("BaseAudioContext/currentTime", "currentTime")}}-Attribut verwendet. Wenn dieser Parameter weggelassen wird, 0 angegeben wird oder ein negativer Wert übergeben wird, stoppt der Sound sofort die Wiedergabe.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateNode` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Node nicht durch Aufruf von {{domxref("AudioScheduledSourceNode.start", "start()")}} gestartet wurde.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der angegebene Wert für `when` negativ ist.

## Beispiele

Dieses Beispiel zeigt, wie ein Oszillator-Node gestartet wird, der sofort zu spielen beginnt und nach einer Sekunde aufhört. Die Stoppzeit wird bestimmt, indem die aktuelle Zeit des Audiokontexts von {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} genommen und 1 Sekunde hinzugefügt wird.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Lassen Sie uns eine Sinuswelle für eine Sekunde spielen. */

osc.start();
osc.stop(context.currentTime + 1);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.start", "start()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
