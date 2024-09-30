---
title: "ChannelMergerNode: ChannelMergerNode()-Konstruktor"
short-title: ChannelMergerNode()
slug: Web/API/ChannelMergerNode/ChannelMergerNode
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Web Audio API")}}

Der **`ChannelMergerNode()`**-Konstruktor erstellt eine neue [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)-Objektinstanz.

## Syntax

```js-nolint
new ChannelMergerNode(context)
new ChannelMergerNode(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), das den Audio-Kontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Eigenschaften definiert, die der `ChannelMergerNode` haben soll:
    - `numberOfInputs` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Eingänge definiert, die der [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) haben soll. Wenn nicht angegeben, wird der Standardwert 6 verwendet.
    - `channelCount` {{optional_inline}}
      - : Eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Die Verwendung und genaue Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode` {{optional_inline}}
      - : Ein String, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation` {{optional_inline}}
      - : Ein String, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation wird definieren, wie das Audio
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode)-Objektinstanz.

### Ausnahmen

- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Ausgelöst, wenn eine Option wie `channelCount` oder `channelCountMode` einen ungültigen Wert erhalten hat.

## Beispiele

```js
const ac = new AudioContext();

const options = {
  numberOfInputs: 2,
};

const myMerger = new ChannelMergerNode(ac, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
