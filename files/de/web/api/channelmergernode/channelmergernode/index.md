---
title: "ChannelMergerNode: ChannelMergerNode() Konstruktor"
short-title: ChannelMergerNode()
slug: Web/API/ChannelMergerNode/ChannelMergerNode
l10n:
  sourceCommit: f9f48866f02963e752717310b76a70d5bdaf554c
---

{{APIRef("Web Audio API")}}

Der **`ChannelMergerNode()`** Konstruktor erstellt eine neue Instanz eines {{domxref("ChannelMergerNode")}} Objekts.

## Syntax

```js-nolint
new ChannelMergerNode(context)
new ChannelMergerNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("BaseAudioContext")}}, das den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Eigenschaften definiert, die Sie dem `ChannelMergerNode` zuweisen möchten:
    - `numberOfInputs` {{optional_inline}}
      - : Eine Zahl, die die Anzahl der Eingänge definiert, die der {{domxref("ChannelMergerNode")}} haben soll. Wenn nicht angegeben, wird der Standardwert 6 verwendet.
    - `channelCount` {{optional_inline}}
      - : Ein Integer, der bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu Eingängen des Knotens herstellt.
        (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.)
        Seine Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode` {{optional_inline}}
      - : Ein String, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation` {{optional_inline}}
      - : Ein String, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie Audio
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines {{domxref("ChannelMergerNode")}} Objekts.

### Ausnahmen

- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn eine Option wie `channelCount` oder `channelCountMode` einen ungültigen Wert erhalten hat.

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
