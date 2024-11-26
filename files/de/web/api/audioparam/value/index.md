---
title: "AudioParam: Wert-Eigenschaft"
short-title: value
slug: Web/API/AudioParam/value
l10n:
  sourceCommit: 6f586f9ddb933defaacac2784409fff0a56adf34
---

{{APIRef("Web Audio API")}}

Die **`value`**-Eigenschaft der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle liest oder setzt den Wert dieses `AudioParam` zur aktuellen Zeit.
Anfangs ist der Wert auf [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) gesetzt.

Das Setzen von `value` hat die gleiche Wirkung wie ein Aufruf von [`AudioParam.setValueAtTime`](/de/docs/Web/API/AudioParam/setValueAtTime) mit der Zeit, die von der `AudioContext`-Eigenschaft [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) zurückgegeben wird.

## Wert

Eine Gleitkommazahl ({{jsxref("Number")}}), die den Wert des Parameters zur aktuellen Zeit angibt.
Dieser Wert liegt zwischen den Werten, die durch die Eigenschaften [`minValue`](/de/docs/Web/API/AudioParam/minValue) und [`maxValue`](/de/docs/Web/API/AudioParam/maxValue) festgelegt sind.

## Beschreibung

### Präzision und Variation des Wertes

Der Datentyp, der intern zum Speichern des `value` verwendet wird, ist eine einfache (32-Bit) Gleitkommazahl, während JavaScript 64-Bit Gleitkommazahlen mit doppelter Präzision verwendet.
Folglich muss der Wert, den Sie aus der `value`-Eigenschaft lesen, nicht immer exakt dem entsprechen, den Sie gesetzt haben.

Betrachten Sie dieses Beispiel:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

Der Log-Ausgang wird `false` sein, weil der Wiedergaberate-Parameter, `rate`, in die nächste 32-Bit Gleitkommazahl zu 5.3 umgewandelt wurde, was 5.300000190734863 ergibt.
Eine Lösung besteht darin, die Methode {{jsxref("Math.fround()")}} zu verwenden, die den gleichwertigen Einzelpräzisionswert für den angegebenen 64-Bit JavaScript-Wert zurückgibt—beim Setzen von `value`, wie folgt:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

In diesem Fall wird der Log-Ausgang `true` sein.

### Wert einer Eigenschaft, die sich im Laufe der Zeit ändert

Der `value` eines `AudioParam` kann entweder fest oder variabel im Laufe der Zeit sein.
Dies wird durch den `value`-Getter widergespiegelt, der den Wert des Parameters entsprechend des letzten **render quantum** der Audio-Rendering-Engine zurückgibt, also dem Moment, in dem Audiopuffer verarbeitet und aktualisiert werden.
Neben der Verarbeitung von Audiopuffern aktualisiert jedes Render quantum den `value` jedes `AudioParam` nach Bedarf, unter Berücksichtigung der aktuellen Zeit und etwaiger festgelegter zeitbasierter Parameterwertänderungen.

Bei der ersten Erstellung des Parameters ist sein Wert auf den Standardwert gesetzt, der durch [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) angegeben wird.
Dies ist der Wert des Parameters zur Zeit von 0,0 Sekunden und bleibt der Wert des Parameters, bis zum ersten Render quantum, in dem sich der Wert ändert.

Während jedes Render quantum führt der Browser folgende Aufgaben im Zusammenhang mit der Verwaltung des Wertes eines Parameters aus:

- Wenn der `value`-Setter verwendet wurde, wird der Wert des Parameters auf den angegebenen Wert geändert.
- Wenn die aktuelle Zeit der oder die von einem vorherigen Aufruf von [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) angegebenen Zeit entspricht oder sie überschreitet, wird der `value` auf den Wert geändert, der in `setValueAtTime()` eingegeben wurde.
- Wenn graduierte oder über Rampen veränderte Wertänderungsmethoden aufgerufen wurden und die aktuelle Zeit innerhalb des Zeitbereichs liegt, über den die graduierte Änderung stattfinden soll, wird der Wert basierend auf dem entsprechenden Algorithmus aktualisiert.
  Zu diesen gerampften oder gradierten Wertänderungsmethoden gehören [`linearRampToValueAtTime()`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime), [`setTargetAtTime()`](/de/docs/Web/API/AudioParam/setTargetAtTime) und [`setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime).

Somit wird der `value` eines Parameters aufrechterhalten, um den Zustand des Parameters über die Zeit genau widerzuspiegeln.

## Beispiele

Dieses Beispiel ändert sofort die Lautstärke eines [`GainNode`](/de/docs/Web/API/GainNode) auf 40%.

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

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
