---
title: AudioParam
slug: Web/API/AudioParam
l10n:
  sourceCommit: 4adfb71916dac6948dd4aafc8e2bf95f00f1def3
---

{{APIRef("Web Audio API")}}

Das `AudioParam`-Interface der Web Audio API repräsentiert einen audiobezogenen Parameter, in der Regel einen Parameter eines [`AudioNode`](/de/docs/Web/API/AudioNode) (wie z.B. [`GainNode.gain`](/de/docs/Web/API/GainNode/gain)).

Ein `AudioParam` kann auf einen bestimmten Wert oder eine Wertänderung eingestellt werden, und diese Änderung kann so geplant werden, dass sie zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster erfolgt.

Jedes `AudioParam` hat eine Liste von Ereignissen, die zunächst leer ist und definiert, wann und wie sich die Werte ändern. Wenn diese Liste nicht leer ist, werden Änderungen mit den `AudioParam.value`-Attributen ignoriert. Diese Ereignisliste ermöglicht es uns, Änderungen zu planen, die zu sehr präzisen Zeiten erfolgen müssen, indem beliebige, zeitlinienbasierte Automatisierungskurven verwendet werden. Die verwendete Zeit ist die in [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) definierte.

## AudioParam-Arten

Es gibt zwei Arten von `AudioParam`: _a-rate_ und _k-rate_ Parameter. Jeder [`AudioNode`](/de/docs/Web/API/AudioNode) definiert in der Spezifikation, welcher seiner Parameter _a-rate_ oder _k-rate_ ist.

### a-rate

Ein _a-rate_ `AudioParam` nimmt den aktuellen Audioparameterwert für jedes [Sample-Frame](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) des Audiosignals.

### k-rate

Ein _k-rate_ `AudioParam` verwendet denselben anfänglichen Audioparameterwert für den gesamten verarbeiteten Block; das entspricht 128 Sample-Frames. Mit anderen Worten, derselbe Wert gilt für jedes Frame im Audio, während es vom Knoten verarbeitet wird.

## Instanz-Eigenschaften

- [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) {{ReadOnlyInline}}
  - : Repräsentiert den Anfangswert des Attributs, wie er vom spezifischen [`AudioNode`](/de/docs/Web/API/AudioNode), der das `AudioParam` erstellt, definiert wurde.
- [`AudioParam.maxValue`](/de/docs/Web/API/AudioParam/maxValue) {{ReadOnlyInline}}
  - : Repräsentiert den maximal möglichen Wert im nominalen (effektiven) Bereich des Parameters.
- [`AudioParam.minValue`](/de/docs/Web/API/AudioParam/minValue) {{ReadOnlyInline}}
  - : Repräsentiert den minimal möglichen Wert im nominalen (effektiven) Bereich des Parameters.
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)
  - : Repräsentiert den aktuellen Wert des Parameters zur aktuellen Zeit; initial auf den Wert von [`defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) gesetzt.

## Instanz-Methoden

- [`AudioParam.setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime)
  - : Plant eine sofortige Änderung des Werts des `AudioParam` zu einem genauen Zeitpunkt, gemessen gegen [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime). Der neue Wert wird durch den `value`-Parameter festgelegt.
- [`AudioParam.linearRampToValueAtTime()`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime)
  - : Plant eine allmähliche lineare Änderung des Werts des `AudioParam`. Die Änderung beginnt zum Zeitpunkt des _vorherigen_ Ereignisses, folgt einer linearen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime`-Parameter angegebenen Zeit.
- [`AudioParam.exponentialRampToValueAtTime()`](/de/docs/Web/API/AudioParam/exponentialRampToValueAtTime)
  - : Plant eine allmähliche exponentielle Änderung des Werts des `AudioParam`. Die Änderung beginnt zum Zeitpunkt des _vorherigen_ Ereignisses, folgt einer exponentiellen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime`-Parameter angegebenen Zeit.
- [`AudioParam.setTargetAtTime()`](/de/docs/Web/API/AudioParam/setTargetAtTime)
  - : Plant den Beginn einer Änderung des Werts des `AudioParam`. Die Änderung beginnt zur im `startTime` angegebenen Zeit und bewegt sich exponentiell in Richtung des durch den `target`-Parameter angegebenen Werts. Die exponentielle Abklingrate wird durch den `timeConstant`-Parameter definiert, der eine in Sekunden gemessene Zeit ist.
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime)
  - : Plant, dass die Werte des `AudioParam` einer festgelegten Wertemenge folgen, die durch ein Array von Gleitkommazahlen definiert ist, die in das angegebene Intervall skaliert sind, beginnend zu einer gegebenen Startzeit und sich über eine gegebene Zeitdauer erstrecken.
- [`AudioParam.cancelScheduledValues()`](/de/docs/Web/API/AudioParam/cancelScheduledValues)
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf.
- [`AudioParam.cancelAndHoldAtTime()`](/de/docs/Web/API/AudioParam/cancelAndHoldAtTime)
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf, hält aber den Wert zu einem bestimmten Zeitpunkt, bis weitere Änderungen mit anderen Methoden vorgenommen werden.

## Beispiele

Zuerst ein einfaches Beispiel, das einen [`GainNode`](/de/docs/Web/API/GainNode) zeigt, bei dem der `gain`-Wert eingestellt wird. `gain` ist ein Beispiel für ein _a-rate_ `AudioParam`, da der Wert potenziell für jedes Sample-Frame des Audios unterschiedlich eingestellt werden kann.

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

Als nächstes ein Beispiel, das einen [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) zeigt, dessen Parameterwerte manipuliert werden. Diese sind Beispiele für _k-rate_ `AudioParam`-Typen, da die Werte für den gesamten Audio-Block auf einmal eingestellt werden.

```js
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.setValueAtTime(-50, audioCtx.currentTime);
compressor.knee.setValueAtTime(40, audioCtx.currentTime);
compressor.ratio.setValueAtTime(12, audioCtx.currentTime);
compressor.attack.setValueAtTime(0, audioCtx.currentTime);
compressor.release.setValueAtTime(0.25, audioCtx.currentTime);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
