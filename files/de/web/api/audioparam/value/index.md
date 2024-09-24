---
title: "AudioParam: Wert-Eigenschaft"
short-title: Wert
slug: Web/API/AudioParam/value
l10n:
  sourceCommit: 0a881eea07f0cec6ca4ed85a24af43b367a9f80d
---

{{APIRef("Web Audio API")}}

Die Eigenschaft **`value`** der [Web Audio API](/de/docs/Web/API/Web_Audio_API)-Schnittstelle {{domxref("AudioParam")}} dient dazu, den Wert dieses {{domxref("AudioParam")}} zum aktuellen Zeitpunkt zu erhalten oder zu setzen. Der Wert ist anfänglich auf {{domxref("AudioParam.defaultValue")}} festgelegt.

Das Setzen von `value` hat die gleiche Wirkung wie der Aufruf von {{domxref("AudioParam.setValueAtTime")}} mit dem Zeitwert, der von der `AudioContext`-Eigenschaft {{domxref("BaseAudioContext/currentTime", "currentTime")}} zurückgegeben wird.

## Wert

Eine Gleitkommazahl vom Typ {{jsxref("Number")}}, die den Parameterwert zum aktuellen Zeitpunkt angibt. Dieser Wert liegt zwischen den Werten, die durch die Eigenschaften {{domxref("AudioParam.minValue", "minValue")}} und {{domxref("AudioParam.maxValue", "maxValue")}} festgelegt sind.

## Anwendungsnotizen

### Wertpräzision und Variationen

Der intern verwendete Datentyp zum Speichern von `value` ist eine Einzelpräzisions- (32-Bit) Gleitkommazahl, während JavaScript 64-Bit-Doppelpräzisions-Gleitkommazahlen verwendet. Daher kann der Wert, den Sie von der Eigenschaft `value` lesen, nicht immer genau dem entsprechen, was Sie gesetzt haben.

Betrachten Sie dieses Beispiel:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = 5.3;
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

Die Konsolenausgabe wird `false` sein, weil der Wiedergaberatenparameter `rate` in die der 32-Bit-Gleitkommazahl, die am nächsten an 5.3 liegt, umgewandelt wurde, was 5.300000190734863 ergibt. Eine Lösung ist die Verwendung der Methode {{jsxref("Math.fround()")}}, die den Einzelpräzisionswert zurückgibt, der dem angegebenen 64-Bit-JavaScript-Wert entspricht – beim Setzen von `value` wie folgt:

```js
const source = new AudioBufferSourceNode(/* … */);
const rate = Math.fround(5.3);
source.playbackRate.value = rate;
console.log(source.playbackRate.value === rate);
```

In diesem Fall wird die Konsolenausgabe `true` sein.

### Wert einer sich über die Zeit ändernden Eigenschaft

Der `value` eines `AudioParam` kann entweder fest sein oder sich im Laufe der Zeit ändern. Dies wird durch den `value`-Getter widergespiegelt, der den Wert des Parameters zum Zeitpunkt des letzten **Render-Quantums** der Audio-Rendering-Engine zurückgibt, also des Moments, in dem Audiopuffer verarbeitet und aktualisiert werden. Zusätzlich zur Verarbeitung der Audiopuffer wird der `value` jedes `AudioParam` während jedes Render-Quantums anhand der aktuellen Zeit und etwaiger festgelegter zeitbasierter Parameterwertänderungen nach Bedarf aktualisiert.

Beim erstmaligen Erstellen des Parameters ist sein Wert auf seinen Standardwert festgelegt, der durch {{domxref("AudioParam.defaultValue")}} gegeben ist. Dies ist der Wert des Parameters bei einer Zeit von 0,0 Sekunden und bleibt sein Wert, bis zum ersten Render-Quantum, in dem der Wert geändert wird.

Während jedes Render-Quantums führt der Browser die folgenden Schritte in Bezug auf die Verwaltung des Wertes eines Parameters durch:

- Wenn der `value`-Setter verwendet wurde, wird der Wert des Parameters auf den angegebenen Wert geändert.
- Wenn die aktuelle Zeit gleich der oder größer ist als die bei einem vorherigen Aufruf von {{domxref("AudioParam.setValueAtTime", "setValueAtTime()")}} angegebene Zeit, wird `value` auf den Wert geändert, der an `setValueAtTime()` übergeben wurde.
- Wenn graduelle oder stufenweise Wertänderungsmethoden aufgerufen wurden und sich die aktuelle Zeit im Zeitbereich befindet, in dem die abgestufte Änderung erfolgen soll, wird der Wert anhand des entsprechenden Algorithmus aktualisiert. Diese stufenweise oder abgestufte Wertänderungsmethoden umfassen {{domxref("AudioParam.linearRampToValueAtTime", "linearRampToValueAtTime()")}}, {{domxref("AudioParam.setTargetAtTime", "setTargetAtTime()")}}, und {{domxref("AudioParam.setValueCurveAtTime", "setValueCurveAtTime()")}}.

Daher wird der `value` eines Parameters so verwaltet, dass er den Zustand des Parameters über die Zeit hinweg genau widerspiegelt.

## Beispiele

Dieses Beispiel ändert sofort die Lautstärke eines {{domxref("GainNode")}} auf 40 %.

```js
const audioCtx = new AudioContext();
const gainNode = audioCtx.createGain();
gainNode.gain.value = 0.4;
// was identisch ist mit:
gainNode.gain.setValueAtTime(0.4, audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

Beim Ändern des Verstärkungswertes eines {{domxref("GainNode")}} führte Google Chrome vor Version 64 (Januar 2018) eine reibungslose Interpolation durch, um De-Zippering zu verhindern. Ab Version 64 wird der Wert sofort geändert, um ihn mit der Web-Audio-Spezifikation in Einklang zu bringen. Details finden Sie im [Chrome Platform Status](https://chromestatus.com/feature/5287995770929152).

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
