---
title: "AudioBufferSourceNode: AudioBufferSourceNode()-Konstruktor"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 01501e37cc8a84b9193671f348ff2c7b10f5dffe
---

{{APIRef("Web Audio API")}}

Der Konstruktor **`AudioBufferSourceNode()`** erstellt eine neue Instanz des Objekts [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

## Syntax

```js-nolint
new AudioBufferSourceNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Die Optionen sind:
    - `buffer`
      - : Eine Instanz von [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), die abgespielt werden soll.
    - `detune`
      - : Ein Wert in Cent zur Modulation der Geschwindigkeit, mit der der Audiostream gerendert wird. Sein nomineller Wertebereich reicht von −∞ bis +∞. Der Standardwert ist `0`.
    - `loop`
      - : Ein boolescher Wert, der angibt, ob das Audio in einer Schleife abgespielt werden soll. Der Standardwert ist `false`. Wenn `loop` während der Wiedergabe dynamisch geändert wird, wird der neue Wert beim nächsten Verarbeitungsblock des Audios wirksam.
    - `loopEnd`
      - : Ein optionaler Wert in Sekunden, der angibt, wo die Schleife enden soll, wenn das Attribut `loop` den Wert `true` hat. Der Standardwert ist `0`. Der Wert bezeichnet das Ende der Schleife, gehört aber nicht mehr zu ihrem Inhalt. Die Sample-Frames der Schleife reichen von `loopStart` bis `loopEnd` − (1/`sampleRate`). Es ist sinnvoll, hierfür einen Wert zwischen 0 und der Dauer des Puffers festzulegen. Wenn `loopEnd` kleiner als 0 ist, endet die Schleife bei 0. Wenn `loopEnd` größer als die Dauer des Puffers ist, endet die Schleife am Ende des Puffers. Dieses Attribut wird in einen exakten Sample-Frame-Offset innerhalb des Puffers umgerechnet, indem sein Wert mit der Samplerate des Puffers multipliziert und auf die nächste ganze Zahl gerundet wird. Sein Verhalten ist daher unabhängig vom Wert des Parameters `playbackRate`.
    - `loopStart`
      - : Ein optionaler Wert in Sekunden, der angibt, wo die Schleife beginnen soll, wenn das Attribut `loop` den Wert `true` hat. Der Standardwert ist `0`. Es ist sinnvoll, hierfür einen Wert zwischen 0 und der Dauer des Puffers festzulegen. Wenn `loopStart` kleiner als 0 ist, beginnt die Schleife bei 0. Wenn `loopStart` größer als die Dauer des Puffers ist, beginnt die Schleife am Ende des Puffers. Dieses Attribut wird in einen exakten Sample-Frame-Offset innerhalb des Puffers umgerechnet, indem sein Wert mit der Samplerate des Puffers multipliziert und auf die nächste ganze Zahl gerundet wird. Sein Verhalten ist daher unabhängig vom Wert des Parameters `playbackRate`.
    - `playbackRate`
      - : Die Geschwindigkeit, mit der der Audiostream gerendert wird. Der Standardwert ist `1`. Dieser Parameter ist ein k-rate-Parameter und wird mit `detune` kombiniert. Sein nomineller Wertebereich reicht von −∞ bis +∞.

### Rückgabewert

Eine neue Instanz des Objekts [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
