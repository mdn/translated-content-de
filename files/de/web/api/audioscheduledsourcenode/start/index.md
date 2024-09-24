---
title: "AudioScheduledSourceNode: start()-Methode"
short-title: start()
slug: Web/API/AudioScheduledSourceNode/start
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

Die `start()`-Methode bei {{domxref("AudioScheduledSourceNode")}} plant einen Ton so ein, dass er zu der angegebenen Zeit zu spielen beginnt. Wenn keine Zeit angegeben wird, beginnt der Ton sofort zu spielen.

## Syntax

```js-nolint
start()
start(when)
```

### Parameter

- `when` {{optional_inline}}
  - : Die Zeit in Sekunden, zu der der Ton beginnen soll zu spielen. Dieser Wert wird
    in demselben Zeitkoordinatensystem angegeben, das auch von {{domxref("AudioContext")}}
    für das Attribut {{domxref("BaseAudioContext/currentTime", "currentTime")}} verwendet wird. Ein
    Wert von 0 (oder das vollständige Weglassen des `when` Parameters) bewirkt, dass der Ton
    die Wiedergabe sofort startet.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

### Ausnahmen

- `InvalidStateNode` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Node bereits gestartet wurde. Dieser Fehler tritt auch dann auf, wenn der Node aufgrund eines vorherigen Aufrufs von {{domxref("AudioScheduledSourceNode.stop", "stop()")}} nicht mehr läuft.
- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn der für `when` angegebene Wert negativ ist.

## Beispiele

Dieses Beispiel zeigt, wie man einen {{domxref("OscillatorNode")}} erstellt, der so geplant ist, dass er in 2 Sekunden zu spielen beginnt und eine Sekunde danach wieder aufhört zu spielen. Die Zeiten werden berechnet, indem die gewünschte Anzahl von Sekunden zur aktuellen Zeitmarke des Kontextes hinzugefügt wird, die von {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} zurückgegeben wird.

```js
context = new AudioContext();
osc = context.createOscillator();
osc.connect(context.destination);

/* Planen Sie die Start- und Stopzeiten für den Oszillator */

osc.start(context.currentTime + 2);
osc.stop(context.currentTime + 3);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioBufferSourceNode")}}
- {{domxref("ConstantSourceNode")}}
- {{domxref("OscillatorNode")}}
