---
title: "AudioBufferSourceNode: AudioBufferSourceNode() Konstruktor"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Der **`AudioBufferSourceNode()`** Konstruktor erstellt eine neue Instanz des {{domxref("AudioBufferSourceNode")}} Objekts.

## Syntax

```js-nolint
new AudioBufferSourceNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `buffer`
      - : Eine Instanz von {{domxref("AudioBuffer")}}, die abgespielt werden soll.
    - `detune`
      - : Ein Wert in Cent, um die Geschwindigkeit der Audiostream-Wiedergabe zu modulieren. Der nominelle Bereich ist (-∞ bis +∞). Der Standardwert ist `0`.
    - `loop`
      - : Ein boolescher Wert, der angibt, ob das Audio in einer Schleife abgespielt werden soll.
        Der Standardwert ist `false`. Wenn die Schleife während der
        Wiedergabe dynamisch verändert wird, tritt der neue Wert beim nächsten
        Verarbeitungsblock von Audio in Kraft.
    - `loopEnd`
      - : Ein optionaler Wert in Sekunden, der das Ende der Schleife bestimmt, wenn
        das Attribut `loop` `true` ist. Der Standardwert ist `0`. Sein Wert
        ist exklusiv für den Inhalt der Schleife. Die Sample-Frames, die die Schleife
        bilden, reichen von den Werten `loopStart` bis
        `loopEnd`-(1/`sampleRate`). Es ist sinnvoll, diesen Wert
        zwischen 0 und der Dauer des Buffers zu setzen. Wenn `loopEnd` kleiner
        als 0 ist, endet die Schleife bei 0. Wenn `loopEnd` größer als die
        Dauer des Buffers ist, endet die Schleife am Ende des Buffers. Dieses Attribut
        wird in einen exakten Sample-Frame-Versatz innerhalb des Buffers umgewandelt, indem es mit
        der Sample-Rate des Buffers multipliziert und auf den nächsten ganzzahligen Wert gerundet wird. Somit ist
        sein Verhalten unabhängig vom Wert des `playbackRate` Parameters.
    - `loopStart`
      - : Ein optionaler Wert in Sekunden, der den Beginn der Schleife bestimmt,
        wenn das Attribut `loop` `true` ist. Der Standardwert ist `0`. Es ist
        sinnvoll, diesen Wert zwischen 0 und der Dauer des Buffers zu setzen. Wenn
        `loopStart` kleiner als 0 ist, beginnt die Schleife bei 0. Wenn
        `loopStart` größer als die Dauer des Buffers ist, beginnt die Schleife
        am Ende des Buffers. Dieses Attribut wird in einen exakten Sample-Frame-Versatz innerhalb des Buffers
        umgewandelt, indem es mit der Sample-Rate des Buffers multipliziert und
        auf den nächsten ganzzahligen Wert gerundet wird. Somit ist sein Verhalten
        unabhängig vom Wert des `playbackRate` Parameters.
    - `playbackRate`
      - : Die Geschwindigkeit, mit der der Audiostream wiedergegeben wird. Der
        Standardwert ist `1`. Dieser Parameter ist k-rate. Dies ist ein zusammengesetzter
        Parameter mit Detune. Der nominelle Bereich ist (-∞ bis +∞).
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Nodes verwendet werden. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Seine Nutzung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Nodes abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen, einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich
        Standardwerten.)

### Rückgabewert

Eine neue Instanz des {{domxref("AudioBufferSourceNode")}} Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
