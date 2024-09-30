---
title: "AudioParam: value-Eigenschaft"
short-title: value
slug: Web/API/AudioParam/value
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

Die [Web Audio API](/de/docs/Web/API/Web_Audio_API)
Eigenschaft des Interfaces [`AudioParam`](/de/docs/Web/API/AudioParam) **`value`** ermittelt oder setzt den Wert dieses [`AudioParam`](/de/docs/Web/API/AudioParam) zur aktuellen Zeit. Anfangs ist der Wert auf [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) gesetzt.

Das Setzen von `value` hat die gleiche Wirkung wie der Aufruf von [`AudioParam.setValueAtTime`](/de/docs/Web/API/AudioParam/setValueAtTime) mit der Zeit, die von der Eigenschaft [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) des `AudioContext` zurückgegeben wird.

## Wert

Eine Gleitkommazahl ({{jsxref("Number")}}), die den Wert des Parameters zur aktuellen Zeit angibt. Dieser Wert liegt zwischen den in den Eigenschaften [`minValue`](/de/docs/Web/API/AudioParam/minValue) und [`maxValue`](/de/docs/Web/API/AudioParam/maxValue) angegebenen Werten.

## Hinweis zur Verwendung

### Wertpräzision und -variation

Der intern zur Speicherung von `value` verwendete Datentyp ist eine einfachgenaue (32-Bit) Gleitkommazahl, während JavaScript 64-Bit doppelgenaue Gleitkommazahlen verwendet. Daher entspricht der Wert, den Sie aus der Eigenschaft `value` lesen, möglicherweise nicht immer genau dem, was Sie gesetzt haben.

Betrachten Sie folgendes Beispiel:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

Die Protokollausgabe wird `false` sein, da der Abspielratenparameter, `rate`, in die 32-Bit-Gleitkommazahl umgewandelt wurde, die 5.3 am nächsten kommt, was 5.300000190734863 ergibt. Eine Lösung besteht darin, die Methode {{jsxref("Math.fround()")}} zu verwenden, die den einfachgenauen Wert zurückgibt, der dem angegebenen 64-Bit-JavaScript-Wert entspricht, wenn `value` gesetzt wird, wie folgt:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

In diesem Fall wird die Protokollausgabe `true` sein.

### Wert einer sich über die Zeit ändernden Eigenschaft

Der `value` eines `AudioParam` kann entweder fest oder sich im Laufe der Zeit ändernd sein. Dies wird durch den `value`-Getter widergespiegelt, der den Wert des Parameters basierend auf dem jüngsten **Render-Quantum** der Audio-Rendering-Engine zurückgibt, also dem Moment, an dem Audiopuffer verarbeitet und aktualisiert werden. Zusätzlich zur Verarbeitung von Audiopuffern aktualisiert jedes Render-Quantum den `value` jedes `AudioParam` nach Bedarf, basierend auf der aktuellen Zeit und allen festgelegten zeitbasierten Parameterwertänderungen.

Beim ersten Erstellen des Parameters ist sein Wert auf seinen Standardwert gesetzt, der von [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) vorgegeben ist. Dies ist der Wert des Parameters zum Zeitpunkt von 0,0 Sekunden und bleibt der Wert des Parameters bis zum ersten Render-Quantum, in dem der Wert geändert wird.

Während jedes Render-Quanta führt der Browser folgende Aufgaben im Zusammenhang mit der Verwaltung des Wertes eines Parameters aus:

- Wenn der `value`-Setter verwendet wurde, wird der Wert des Parameters auf den angegebenen Wert geändert.
- Wenn die aktuelle Zeit gleich oder größer ist als die durch einen vorherigen Aufruf von [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) angegebene Zeit, wird der `value` auf den Wert geändert, der in `setValueAtTime()` übergeben wurde.
- Wenn Methoden zum Ändern von Werten mit schrittweisem oder Rampeffekt aufgerufen wurden und die aktuelle Zeit innerhalb des Zeitbereichs liegt, über den die schrittweise Änderung erfolgen soll, wird der Wert basierend auf dem entsprechenden Algorithmus aktualisiert. Diese Methoden zum Ändern von Werten mit Rampeffekt oder schrittweise sind unter anderem [`linearRampToValueAtTime()`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime), [`setTargetAtTime()`](/de/docs/Web/API/AudioParam/setTargetAtTime) und [`setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime).

Somit wird der `value` eines Parameters so verwaltet, dass er den Zustand des Parameters im Laufe der Zeit genau widerspiegelt.

## Beispiele

Dieses Beispiel ändert sofort die Lautstärke eines [`GainNode`](/de/docs/Web/API/GainNode) auf 40 %.

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.4;
// which is identical to:
gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Beim Ändern des Gain-Werts eines [`GainNode`](/de/docs/Web/API/GainNode) führte Google Chrome vor Version 64 (Januar 2018) eine glatte Interpolation durch, um Entzerrung zu verhindern. Ab Version 64 wird der Wert sofort geändert, um mit der Web-Audio-Spezifikation übereinzustimmen. Einzelheiten finden Sie im [Chrome Platform Status](https://chromestatus.com/feature/5287995770929152).

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
