---
title: "AudioBufferSourceNode: AudioBufferSourceNode() Konstruktor"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`AudioBufferSourceNode()`**
Konstruktor erstellt eine neue Instanz eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) Objekts.

## Syntax

```js-nolint
new AudioBufferSourceNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `buffer`
      - : Eine Instanz von [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), die abgespielt werden soll.
    - `detune`
      - : Ein Wert in Cent, um die Geschwindigkeit der Audiostream-Wiedergabe zu modulieren. Sein nominaler Bereich ist (-∞ bis +∞). Der Standardwert ist `0`.
    - `loop`
      - : Ein boolescher Wert, der angibt, ob das Audio in einer Schleife abgespielt werden soll.
        Der Standardwert ist `false`. Wenn die Schleife während
        der Wiedergabe dynamisch geändert wird, wird der neue Wert im nächsten Verarbeitungsblock des Audios wirksam.
    - `loopEnd`
      - : Ein optionaler Wert, in Sekunden, wo das Schleifen enden soll, wenn
        das Attribut `loop` `true` ist. Der Standardwert ist `0`. Sein Wert
        ist exklusiv für den Inhalt der Schleife. Die Beispielrahmen, die die Schleife umfassen,
        laufen von den Werten `loopStart` bis
        `loopEnd`-(1/`sampleRate`). Es ist sinnvoll, dies auf einen
        Wert zwischen 0 und der Dauer des Puffers zu setzen. Wenn `loopEnd` kleiner
        als 0 ist, endet die Schleife bei 0. Wenn `loopEnd` größer als
        die Dauer des Puffers ist, endet die Schleife am Ende des Puffers. Dieses Attribut
        wird in ein genaues Beispielrahmenoffset innerhalb des Puffers umgewandelt, indem es mit der
        Abtastrate des Puffers multipliziert und auf den nächsten ganzzahligen Wert gerundet wird. Somit ist sein
        Verhalten unabhängig vom Wert des Parameters `playbackRate`.
    - `loopStart`
      - : Ein optionaler Wert in Sekunden, wo das Schleifen beginnen soll,
        wenn das Attribut `loop` `true` ist. Der Standardwert ist `0`. Es ist
        sinnvoll, dies auf einen Wert zwischen 0 und der Dauer des Puffers zu setzen. Wenn
        `loopStart` kleiner als 0 ist, beginnt die Schleife bei 0. Wenn
        `loopStart` größer als die Dauer des Puffers ist, beginnt die Schleife
        am Ende des Puffers. Dieses Attribut wird in ein genaues Beispielrahmenoffset innerhalb des
        Puffers umgewandelt, indem es mit der Abtastrate des Puffers multipliziert und auf den
        nächsten ganzzahligen Wert gerundet wird. Somit ist sein Verhalten unabhängig vom Wert
        des Parameters `playbackRate`.
    - `playbackRate`
      - : Die Geschwindigkeit, mit der der Audiostream wiedergegeben wird. Sein
        Standardwert ist `1`. Dieser Parameter ist k-rate. Dies ist ein zusammengesetzter
        Parameter mit Detune. Sein nominaler Bereich ist (-∞ bis +∞).
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle bei [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für
        weitere Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
