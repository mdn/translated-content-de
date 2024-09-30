---
title: "MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode()-Konstruktor"
short-title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioDestinationNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekts.

## Syntax

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audio-Kontext darstellt, mit dem der Knoten verbunden werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamAudioDestinationNode` haben soll:

    - `channelCount`
      - : Eine Ganzzahl, die angibt, wie viele Kanäle beim
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        von Verbindungen zu Eingängen des Knotens verwendet werden. (Weitere Informationen finden Sie unter
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).) Seine Verwendung und präzise
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie Audio
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        erfolgen wird. Mögliche Werte sind `"speakers"` oder `"discrete"`. (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

## Beispiele

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
