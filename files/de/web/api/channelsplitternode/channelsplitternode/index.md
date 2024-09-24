---
title: "ChannelSplitterNode: ChannelSplitterNode() Konstruktor"
short-title: ChannelSplitterNode()
slug: Web/API/ChannelSplitterNode/ChannelSplitterNode
l10n:
  sourceCommit: 670f9e44920895045984a458dcd4cae0304e2fe3
---

{{APIRef("Web Audio API")}}

Der **`ChannelSplitterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des {{domxref("ChannelSplitterNode")}}-Objekts, das einen Knoten darstellt, der den Eingang in ein separates Ausgangssignal für jeden der Audiokanäle des Quellknotens aufteilt.

## Syntax

```js-nolint
new ChannelSplitterNode(context)
new ChannelSplitterNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("BaseAudioContext")}}, das den Audio-Kontext repräsentiert, mit dem der Knoten verknüpft sein soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften definiert, die der `ChannelSplitterNode` haben soll:
    - `numberOfOutputs` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Ausgänge definiert, die der {{domxref("ChannelSplitterNode")}} haben soll. Wenn nicht angegeben, wird der Standardwert 6 verwendet.
    - `channelCount` {{optional_inline}}
      - : Eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu jeglichen Eingaben zum Knoten genutzt werden.
        (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.)
        Die Nutzung und präzise Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode` {{optional_inline}}
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens angepasst werden müssen.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich Standardwerte.)
    - `channelInterpretation` {{optional_inline}}
      - : Ein String, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie Audio [hochgemischt und heruntergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe {{domxref("AudioNode.channelInterpretation")}} für weitere Informationen einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz des {{domxref("ChannelSplitterNode")}}-Objekts.

## Beispiele

```js
const ac = new AudioContext();

const options = {
  numberOfOutputs: 2,
};

const mySplitter = new ChannelSplitterNode(ac, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
