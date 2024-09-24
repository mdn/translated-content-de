---
title: AudioParam
slug: Web/API/AudioParam
l10n:
  sourceCommit: 4adfb71916dac6948dd4aafc8e2bf95f00f1def3
---

{{APIRef("Web Audio API")}}

Die `AudioParam`-Schnittstelle der Web Audio API repräsentiert ein Audioparameter, üblicherweise ein Parameter eines {{domxref("AudioNode")}} (wie etwa {{ domxref("GainNode.gain") }}).

Ein `AudioParam` kann auf einen bestimmten Wert oder eine Wertänderung gesetzt werden und kann so geplant werden, dass es zu einem bestimmten Zeitpunkt und nach einem bestimmten Muster passiert.

Jedes `AudioParam` hat eine Liste von Ereignissen, die anfänglich leer ist und definiert, wann und wie sich Werte ändern. Wenn diese Liste nicht leer ist, werden Änderungen unter Verwendung der `AudioParam.value`-Attribute ignoriert. Diese Liste von Ereignissen ermöglicht es uns, Änderungen zu planen, die zu sehr präzisen Zeiten erfolgen müssen, unter Verwendung beliebiger, zeitbasierter Automatisierungskurven. Die verwendete Zeit ist die, die in {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}} definiert ist.

## AudioParam-Typen

Es gibt zwei `AudioParam`-Arten: _a-rate_ und _k-rate_ Parameter. Jedes {{domxref("AudioNode")}} definiert, welche seiner Parameter im Spezifikation _a-rate_ oder _k-rate_ sind.

### a-rate

Ein _a-rate_ `AudioParam` nimmt den aktuellen Audioparameterwert für jede [Sample-Frame](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#audio_buffers_frames_samples_and_channels) des Audiosignals.

### k-rate

Ein _k-rate_ `AudioParam` verwendet denselben anfänglichen Audioparameterwert für den gesamten verarbeiteten Block; das bedeutet, 128 Sample-Frames. Mit anderen Worten, derselbe Wert gilt für jeden Frame im Audio, während er vom Node verarbeitet wird.

## Instanzeigenschaften

- {{domxref("AudioParam.defaultValue")}} {{ReadOnlyInline}}
  - : Repräsentiert den Anfangswert des Attributs, wie er vom spezifischen {{domxref("AudioNode")}} definiert wird, der das `AudioParam` erstellt.
- {{domxref("AudioParam.maxValue")}} {{ReadOnlyInline}}
  - : Repräsentiert den maximal möglichen Wert für den nominalen (effektiven) Bereich des Parameters.
- {{domxref("AudioParam.minValue")}} {{ReadOnlyInline}}
  - : Repräsentiert den minimal möglichen Wert für den nominalen (effektiven) Bereich des Parameters.
- {{domxref("AudioParam.value")}}
  - : Repräsentiert den aktuellen Wert des Parameters zur aktuellen Zeit; zunächst auf den Wert von {{domxref("AudioParam.defaultValue", "defaultValue")}} gesetzt.

## Instanzmethoden

- {{domxref("AudioParam.setValueAtTime()")}}
  - : Plant eine sofortige Änderung des Werts des `AudioParam` zu einer präzisen Zeit, gemessen an {{domxref("BaseAudioContext/currentTime", "AudioContext.currentTime")}}. Der neue Wert wird durch den `value` Parameter gegeben.
- {{domxref("AudioParam.linearRampToValueAtTime()")}}
  - : Plant eine allmähliche lineare Änderung des Werts des `AudioParam`. Die Änderung beginnt zu dem für das _vorhergehende_ Ereignis angegebenen Zeitpunkt, folgt einer linearen Rampe zum neuen Wert, der im `value` Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime` Parameter angegebenen Zeit.
- {{domxref("AudioParam.exponentialRampToValueAtTime()")}}
  - : Plant eine allmähliche exponentielle Änderung des Werts des `AudioParam`. Die Änderung beginnt zu dem für das _vorhergehende_ Ereignis angegebenen Zeitpunkt, folgt einer exponentiellen Rampe zum neuen Wert, der im `value` Parameter angegeben ist, und erreicht den neuen Wert zur im `endTime` Parameter angegebenen Zeit.
- {{domxref("AudioParam.setTargetAtTime()")}}
  - : Plant den Beginn einer Änderung des Werts des `AudioParam`. Die Änderung beginnt zu der im `startTime` angegebenen Zeit und bewegt sich exponentiell auf den im `target` Parameter angegebenen Wert zu. Die Rate des exponentiellen Abfalls wird durch den `timeConstant` Parameter definiert, welcher eine in Sekunden gemessene Zeit ist.
- {{domxref("AudioParam.setValueCurveAtTime()")}}
  - : Plant die Werte des `AudioParam`, um einer Reihe von Werten zu folgen, die durch ein Array von Gleitkommazahlen definiert sind, das in das gegebene Intervall skaliert wird, beginnend zu einer gegebenen Startzeit und über einen gegebenen Zeitraum.
- {{domxref("AudioParam.cancelScheduledValues()")}}
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf.
- {{domxref("AudioParam.cancelAndHoldAtTime()")}}
  - : Hebt alle geplanten zukünftigen Änderungen des `AudioParam` auf, hält aber seinen Wert zu einer gegebenen Zeit, bis weitere Änderungen durch andere Methoden vorgenommen werden.

## Beispiele

Zuerst ein einfaches Beispiel, das zeigt, wie ein {{domxref("GainNode")}} seinen `gain` Wert gesetzt hat. `gain` ist ein Beispiel für ein _a-rate_ `AudioParam`, da der Wert möglicherweise bei jedem Sample-Frame des Audios anders gesetzt werden kann.

```js
const audioCtx = new AudioContext();

const gainNode = audioCtx.createGain();
gainNode.gain.value = 0;
```

Als nächstes ein Beispiel, das zeigt, wie einige Parameterwerte eines {{ domxref("DynamicsCompressorNode") }} manipuliert werden. Dies sind Beispiele für _k-rate_ `AudioParam`-Typen, da die Werte für den gesamten Audio-Block auf einmal gesetzt werden.

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
