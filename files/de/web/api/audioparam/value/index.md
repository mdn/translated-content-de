---
title: "AudioParam: value-Eigenschaft"
short-title: value
slug: Web/API/AudioParam/value
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

Die Eigenschaft **`value`** des [`AudioParam`](/de/docs/Web/API/AudioParam)-Interfaces der [Web Audio API](/de/docs/Web/API/Web_Audio_API) gibt den Wert dieses [`AudioParam`](/de/docs/Web/API/AudioParam) zur aktuellen Zeit zurück oder setzt ihn. Anfangs ist der Wert auf [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) festgelegt.

Das Setzen von `value` hat denselben Effekt wie ein Aufruf von [`AudioParam.setValueAtTime`](/de/docs/Web/API/AudioParam/setValueAtTime) mit der durch die `AudioContext`-Eigenschaft [`currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) zurückgegebenen Zeit.

## Wert

Eine Gleitkommazahl ({{jsxref("Number")}}), die den aktuellen Wert des Parameters angibt. Dieser Wert liegt zwischen den durch die Eigenschaften [`minValue`](/de/docs/Web/API/AudioParam/minValue) und [`maxValue`](/de/docs/Web/API/AudioParam/maxValue) festgelegten Werten.

## Verwendungshinweise

### Präzision und Variation des Wertes

Der Datentyp, der intern zur Speicherung von `value` verwendet wird, ist eine Gleitkommazahl mit einfacher Präzision (32-Bit), während JavaScript 64-Bit-Gleitkommazahlen mit doppelter Präzision verwendet. Daher entspricht der Wert, den Sie von der `value`-Eigenschaft ablesen, möglicherweise nicht immer genau dem, den Sie gesetzt haben.

Betrachten Sie dieses Beispiel:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

Die Protokollausgabe wird `false` sein, weil der Wiedergaberaten-Parameter `rate` in die nächstgelegene 32-Bit-Gleitkommazahl zu 5,3 umgewandelt wurde, was 5.300000190734863 ergibt. Eine Lösung ist die Verwendung der Methode {{jsxref("Math.fround()")}}, die den Wert mit einfacher Präzision zurückgibt, der dem angegebenen 64-Bit-JavaScript-Wert entspricht—beim Setzen von `value`, wie folgt:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

In diesem Fall wird die Protokollausgabe `true` sein.

### Wert einer sich über die Zeit ändernden Eigenschaft

Der `value` eines `AudioParam` kann entweder fest oder zeitlich variabel sein. Dies wird durch den `value`-Getter widergespiegelt, der den Wert des Parameters zum Zeitpunkt des letzten **Renderquanten** der Audio-Rendering-Engine zurückgibt, oder zum Zeitpunkt, an dem Audiopuffer verarbeitet und aktualisiert werden. Zusätzlich zur Verarbeitung von Audiopuffern aktualisiert jedes Renderquanten den `value` jedes `AudioParam`, soweit dies erforderlich ist, angesichts der aktuellen Zeit und der festgelegten zeitabhängigen Parameterwertänderungen.

Beim ersten Erstellen des Parameters wird sein Wert auf seinen Standardwert gesetzt, der durch [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) angegeben wird. Dies ist der Wert des Parameters zu einem Zeitpunkt von 0,0 Sekunden und bleibt der Wert des Parameters bis zum ersten Renderquanten, in dem sich der Wert ändert.

Während jedes Renderquanten führt der Browser die folgenden Vorgänge im Zusammenhang mit der Verwaltung des Wertes eines Parameters durch:

- Wenn der `value`-Setter verwendet wurde, wird der Parameterwert auf den angegebenen Wert geändert.
- Wenn die aktuelle Zeit gleich oder größer ist als die durch einen vorherigen Aufruf von [`setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime) angegebene Zeit, wird der `value` auf den Wert geändert, der an `setValueAtTime()` übergeben wurde.
- Wenn irgendwelche abgestuften oder übergangsweisen Wertänderungsmethoden aufgerufen wurden und die aktuelle Zeit innerhalb des Zeitbereichs liegt, in dem die abgestufte Änderung stattfinden sollte, wird der Wert basierend auf dem entsprechenden Algorithmus aktualisiert. Diese abgestuften oder übergangsweisen Wertänderungsmethoden umfassen [`linearRampToValueAtTime()`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime), [`setTargetAtTime()`](/de/docs/Web/API/AudioParam/setTargetAtTime), und [`setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime).

Daher wird der `value` eines Parameters so aufrechterhalten, dass er den Zustand des Parameters im Zeitverlauf genau widerspiegelt.

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

Beim Ändern des Lautstärkewerts eines [`GainNode`](/de/docs/Web/API/GainNode) führte Google Chrome vor Version 64 (Januar 2018) eine glatte Interpolation durch, um Dezippering zu verhindern. Ab Version 64 wird der Wert sofort geändert, um ihn mit der Web Audio-Spezifikation in Einklang zu bringen. Siehe [Chrome Platform Status](https://chromestatus.com/feature/5287995770929152) für Details.

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
