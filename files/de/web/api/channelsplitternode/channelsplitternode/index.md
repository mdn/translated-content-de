---
title: "ChannelSplitterNode: ChannelSplitterNode() Konstruktor"
short-title: ChannelSplitterNode()
slug: Web/API/ChannelSplitterNode/ChannelSplitterNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`ChannelSplitterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)-Objekts, das einen Knoten darstellt, der den Eingang in einen separaten Ausgang für jeden der Audiokanäle des Quellknotens aufteilt.

## Syntax

```js-nolint
new ChannelSplitterNode(context)
new ChannelSplitterNode(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), das den Audiokontext repräsentiert, mit dem der Knoten verbunden werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Eigenschaften definiert, die der `ChannelSplitterNode` haben soll:
    - `numberOfOutputs` {{optional_inline}}
      - : Eine Zahl, die definiert, wie viele Ausgänge der [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode) haben soll. Wenn nicht angegeben, wird der Standardwert 6 verwendet.
    - `channelCount` {{optional_inline}}
      - : Eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode` {{optional_inline}}
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation` {{optional_inline}}
      - : Ein String, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation bestimmt, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode)-Objekts.

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
