---
title: AudioParam
slug: Web/API/AudioParam
l10n:
  sourceCommit: 4adfb71916dac6948dd4aafc8e2bf95f00f1def3
---

{{APIRef("Web Audio API")}}

Das `AudioParam`-Interface der Web Audio API repräsentiert einen audio-bezogenen Parameter, üblicherweise einen Parameter eines [`AudioNode`](/de/docs/Web/API/AudioNode) (wie zum Beispiel [`GainNode.gain`](/de/docs/Web/API/GainNode/gain)).

Ein `AudioParam` kann auf einen spezifischen Wert oder eine Wertänderung gesetzt und geplant werden, um zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster zu erfolgen.

Jedes `AudioParam` hat eine Liste von Ereignissen, die anfangs leer ist und definiert, wann und wie sich Werte ändern. Wenn diese Liste nicht leer ist, werden Änderungen mit dem `AudioParam.value`-Attribut ignoriert. Diese Ereignisliste ermöglicht es uns, Änderungen zu planen, die zu sehr genauen Zeiten stattfinden müssen, unter Verwendung beliebiger zeitbasierten Automationskurven. Die verwendete Zeit ist die, die in [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime) definiert ist.

## AudioParam-Typen

Es gibt zwei Arten von `AudioParam`: _a-rate_ und _k-rate_ Parameter. Jedes [`AudioNode`](/de/docs/Web/API/AudioNode) definiert in der Spezifikation, welche seiner Parameter _a-rate_ oder _k-rate_ sind.

### a-rate

Ein _a-rate_ `AudioParam` nimmt den aktuellen Audio-Parameterwert für jeden [Sample-Frame](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) des Audiosignals.

### k-rate

Ein _k-rate_ `AudioParam` verwendet denselben anfänglichen Audio-Parameterwert für den gesamten verarbeiteten Block, das heißt, 128 Sample-Frames. Mit anderen Worten, derselbe Wert gilt für jeden Frame im Audio, während er vom Knoten verarbeitet wird.

## Instanz-Eigenschaften

- [`AudioParam.defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) {{ReadOnlyInline}}
  - : Repräsentiert den Anfangswert des Attributs, wie er vom spezifischen [`AudioNode`](/de/docs/Web/API/AudioNode), der das `AudioParam` erstellt, definiert ist.
- [`AudioParam.maxValue`](/de/docs/Web/API/AudioParam/maxValue) {{ReadOnlyInline}}
  - : Repräsentiert den maximal möglichen Wert im nominalen (effektiven) Bereich des Parameters.
- [`AudioParam.minValue`](/de/docs/Web/API/AudioParam/minValue) {{ReadOnlyInline}}
  - : Repräsentiert den minimal möglichen Wert im nominalen (effektiven) Bereich des Parameters.
- [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)
  - : Repräsentiert den aktuellen Wert des Parameters zu der aktuellen Zeit; anfangs auf den Wert von [`defaultValue`](/de/docs/Web/API/AudioParam/defaultValue) gesetzt.

## Instanz-Methoden

- [`AudioParam.setValueAtTime()`](/de/docs/Web/API/AudioParam/setValueAtTime)
  - : Plant eine sofortige Änderung des Wertes des `AudioParam` zu einem genauen Zeitpunkt, gemessen an [`AudioContext.currentTime`](/de/docs/Web/API/BaseAudioContext/currentTime). Der neue Wert wird durch den `value`-Parameter angegeben.
- [`AudioParam.linearRampToValueAtTime()`](/de/docs/Web/API/AudioParam/linearRampToValueAtTime)
  - : Plant eine allmähliche lineare Änderung des Wertes des `AudioParam`. Die Änderung beginnt zur für das _vorherige_ Ereignis angegebenen Zeit, folgt einer linearen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime`-Parameter angegebenen Zeit.
- [`AudioParam.exponentialRampToValueAtTime()`](/de/docs/Web/API/AudioParam/exponentialRampToValueAtTime)
  - : Plant eine allmähliche exponentielle Änderung des Wertes des `AudioParam`. Die Änderung beginnt zur für das _vorherige_ Ereignis angegebenen Zeit, folgt einer exponentiellen Rampe zum neuen Wert, der im `value`-Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime`-Parameter angegebenen Zeit.
- [`AudioParam.setTargetAtTime()`](/de/docs/Web/API/AudioParam/setTargetAtTime)
  - : Plant den Beginn einer Änderung des Wertes des `AudioParam`. Die Änderung beginnt zur im `startTime` angegebenen Zeit und bewegt sich exponentiell auf den im `target`-Parameter angegebenen Wert zu. Die exponentielle Abfallrate wird durch den `timeConstant`-Parameter definiert, der eine in Sekunden gemessene Zeit ist.
- [`AudioParam.setValueCurveAtTime()`](/de/docs/Web/API/AudioParam/setValueCurveAtTime)
  - : Plant, dass die Werte des `AudioParam` einem Satz von Werten folgen, der durch ein Array von Gleitkommazahlen definiert ist, welche angepasst werden, um in das gegebene Intervall zu passen, beginnend zu einer gegebenen Startzeit und über einen gegebenen Zeitraum.
- [`AudioParam.cancelScheduledValues()`](/de/docs/Web/API/AudioParam/cancelScheduledValues)
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf.
- [`AudioParam.cancelAndHoldAtTime()`](/de/docs/Web/API/AudioParam/cancelAndHoldAtTime)
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf, hält aber seinen Wert zu einer gegebenen Zeit, bis weitere Änderungen mit anderen Methoden vorgenommen werden.

## Beispiele

Zuerst ein einfaches Beispiel, das zeigt, wie ein [`GainNode`](/de/docs/Web/API/GainNode) seinen `gain`-Wert gesetzt bekommt. `gain` ist ein Beispiel für ein _a-rate_ `AudioParam`, da der Wert potenziell für jeden Sample-Frame des Audiomaterials anders gesetzt werden kann.

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

Als nächstes ein Beispiel, das zeigt, wie ein [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode) mit einigen Parameterwerten manipuliert wird. Diese sind Beispiele für _k-rate_ `AudioParam`-Typen, da die Werte für den gesamten Audioblock auf einmal gesetzt werden.

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
