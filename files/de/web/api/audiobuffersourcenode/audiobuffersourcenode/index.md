---
title: "AudioBufferSourceNode: AudioBufferSourceNode() Konstruktor"
short-title: AudioBufferSourceNode()
slug: Web/API/AudioBufferSourceNode/AudioBufferSourceNode
l10n:
  sourceCommit: 135b8311a5e3d12789e8421845be3ce026ef72b8
---

{{APIRef("Web Audio API")}}

Der **`AudioBufferSourceNode()`**
Konstruktor erstellt eine neue Instanz des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) Objekts.

## Syntax

```js-nolint
new AudioBufferSourceNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `buffer`
      - : Eine Instanz von [`AudioBuffer`](/de/docs/Web/API/AudioBuffer), die abgespielt werden soll.
    - `detune`
      - : Ein Wert in Cent, um die Geschwindigkeit des Audio-Stream-Renderings zu modulieren. Der nominale Bereich ist (-∞ bis +∞). Der Standardwert ist `0`.
    - `loop`
      - : Ein boolescher Wert, der angibt, ob das Audio in einer Schleife abgespielt werden soll.
        Der Standardwert ist `false`. Wenn die Schleife während der
        Wiedergabe dynamisch modifiziert wird, tritt der neue Wert im nächsten Verarbeitungsblock des Audios in Kraft.
    - `loopEnd`
      - : Ein optionaler Wert in Sekunden, wo das Schleifen enden soll, wenn
        das Schleifenattribut `true` ist. Der Standardwert ist `0`. Sein Wert
        ist exklusiv für den Inhalt der Schleife. Die Sample-Frames, die die Schleife bilden,
        laufen von den Werten `loopStart` bis
        `loopEnd`-(1/`sampleRate`). Es ist sinnvoll, diesen Wert auf einen
        Wert zwischen 0 und der Dauer des Buffers zu setzen. Wenn `loopEnd` kleiner
        als 0 ist, endet die Schleife bei 0. Wenn `loopEnd` größer als die
        Dauer des Buffers ist, endet die Schleife am Ende des Buffers. Dieses Attribut
        wird in einen exakten Sample-Frame-Versatz innerhalb des Buffers umgewandelt, indem es mit
        der Sample-Rate des Buffers multipliziert und auf den nächsten ganzzahligen Wert gerundet wird. So ist sein
        Verhalten unabhängig vom Wert des `playbackRate` Parameters.
    - `loopStart`
      - : Ein optionaler Wert in Sekunden, wo das Schleifen beginnen soll,
        wenn das Schleifenattribut `true` ist. Der Standardwert ist `0`. Es ist
        sinnvoll, diesen Wert auf einen Wert zwischen 0 und der Dauer des Buffers zu setzen. Wenn
        `loopStart` kleiner als 0 ist, beginnt die Schleife bei 0. Wenn
        `loopStart` größer als die Dauer des Buffers ist, beginnt die
        Schleife am Ende des Buffers. Dieses Attribut wird in einen exakten Sample
        Frame-Versatz innerhalb des Buffers umgewandelt, indem es mit der Sample-Rate des Buffers multipliziert und
        auf den nächsten ganzzahligen Wert gerundet wird. So ist sein Verhalten unabhängig vom
        Wert des `playbackRate` Parameters.
    - `playbackRate`
      - : Die Geschwindigkeit, mit der der Audio-Stream gerendert werden soll. Der
        Standardwert ist `1`. Dieser Parameter ist k-rate. Dies ist ein zusammengesetzter
        Parameter mit Detune. Der nominale Bereich ist (-∞ bis +∞).
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden sollen. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und präzise
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen aufgezählten Wert dar, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen aufgezählten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`AudioBufferSourceNode`](/de/docs/Web/API/AudioBufferSourceNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
