---
title: "AudioBufferSourceNode: AudioBufferSourceNode() Konstruktor"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Der **`AudioBufferSourceNode()`**
Konstruktor erstellt eine neue Instanz eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Objekts.

## Syntax

```js-nolint
new AudioBufferSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `buffer`
      - : Eine Instanz von [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), die abgespielt werden soll.
    - `detune`
      - : Ein Wert in Cent, um die Geschwindigkeit des Rendervorgangs des Audiostreams zu modulieren. Der nominale Bereich ist (-∞ bis +∞). Der Standardwert ist `0`.
    - `loop`
      - : Ein boolescher Wert, der angibt, ob das Audio in einer Schleife abgespielt werden soll. Der Standardwert ist `false`. Wenn die Schleife während der Wiedergabe dynamisch modifiziert wird, wird der neue Wert im nächsten Audiobearbeitungsblock wirksam.
    - `loopEnd`
      - : Ein optionaler Wert in Sekunden, wo die Schleife enden soll, falls das Attribut `loop` `true` ist. Der Standardwert ist `0`. Sein Wert bezieht sich ausschließlich auf den Inhalt der Schleife. Die Beispielrahmen, die die Schleife umfassen, laufen von den Werten `loopStart` bis `loopEnd`-(1/`sampleRate`). Es ist sinnvoll, diesen Wert zwischen 0 und der Dauer des Puffers festzulegen. Wenn `loopEnd` kleiner als 0 ist, endet die Schleife bei 0. Wenn `loopEnd` größer als die Dauer des Puffers ist, endet die Schleife am Ende des Puffers. Dieses Attribut wird in einen genauen Beispielrahmenoffset innerhalb des Puffers umgewandelt, indem es mit der Abtastrate des Puffers multipliziert und auf den nächsten ganzzahligen Wert gerundet wird. Sein Verhalten ist somit unabhängig von dem Wert des `playbackRate`-Parameters.
    - `loopStart`
      - : Ein optionaler Wert in Sekunden, wo die Schleife beginnen soll, falls das Attribut `loop` `true` ist. Der Standardwert ist `0`. Es ist sinnvoll, diesen Wert zwischen 0 und der Dauer des Puffers festzulegen. Wenn `loopStart` kleiner als 0 ist, beginnt die Schleife bei 0. Wenn `loopStart` größer als die Dauer des Puffers ist, beginnt die Schleife am Ende des Puffers. Dieses Attribut wird in einen genauen Beispielrahmenoffset innerhalb des Puffers umgewandelt, indem es mit der Abtastrate des Puffers multipliziert und auf den nächsten ganzzahligen Wert gerundet wird. Sein Verhalten ist somit unabhängig von dem Wert des `playbackRate`-Parameters.
    - `playbackRate`
      - : Die Geschwindigkeit, mit der der Audiostream gerendert wird. Der Standardwert ist `1`. Dieser Parameter ist k-rate. Dies ist ein zusammengesetzter Parameter mit Detune. Sein nominaler Bereich ist (-∞ bis +∞).
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu den Eingängen des Knotens vorgenommen werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Nutzung und präzise Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen aufzählbaren Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen aufzählbaren Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
