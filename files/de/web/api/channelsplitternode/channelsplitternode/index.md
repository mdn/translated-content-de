---
title: "ChannelSplitterNode: ChannelSplitterNode() Konstruktor"
short-title: ChannelSplitterNode()
slug: Web/API/ChannelSplitterNode/ChannelSplitterNode
l10n:
  sourceCommit: 670f9e44920895045984a458dcd4cae0304e2fe3
---

{{APIRef("Web Audio API")}}

Der **`ChannelSplitterNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)-Objektinstanz, die einen Knoten darstellt, der den Eingang in einen separaten Ausgang für jeden Audiokanal des Quellknotens aufteilt.

## Syntax

```js-nolint
new ChannelSplitterNode(context)
new ChannelSplitterNode(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), das den Audiokontext darstellt, mit dem der Knoten verbunden werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften definiert, die der `ChannelSplitterNode` haben soll:
    - `numberOfOutputs` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Ausgänge definiert, die der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) haben sollte. Wenn nicht angegeben, wird der Standardwert 6 verwendet.
    - `channelCount` {{optional_inline}}
      - : Eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle bei der [Hoch- und Heruntermischung](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode` {{optional_inline}}
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen inklusive Standardwerten.)
    - `channelInterpretation` {{optional_inline}}
      - : Ein String, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie die Audio-[Hoch- und Heruntermischung](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) geschehen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen inklusive Standardwerten.)

### Rückgabewert

Eine neue [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)-Objektinstanz.

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
