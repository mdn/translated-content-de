---
title: "MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode() Konstruktor"
short-title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioDestinationNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz eines [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekts.

## Syntax

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), das den Audio-Kontext repräsentiert, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein Objekt, das die Eigenschaften definiert, die Sie dem `MediaStreamAudioDestinationNode` zuweisen möchten:
    - `channelCount`
      - : Eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu beliebigen Eingängen des Knotens
        [hoch- und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese Interpretation wird definieren, wie das Audio
        [hoch- und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        werden wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

## Beispiele

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
