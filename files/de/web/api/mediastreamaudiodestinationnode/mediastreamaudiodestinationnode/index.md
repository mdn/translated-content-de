---
title: "MediaStreamAudioDestinationNode: Konstruktor MediaStreamAudioDestinationNode()"
short-title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioDestinationNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt eine neue Instanz eines [`MediaStreamAudioDestinationNode`](/de/docs/Web/API/MediaStreamAudioDestinationNode)-Objekts.

## Syntax

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamAudioDestinationNode` haben soll:

    - `channelCount`
      - : Eine Ganzzahl zur Bestimmung, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        von Verbindungen zu jeglichen Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert des `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abzugleichen sind. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie das Audio
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der
        Standardwerte.)

## Beispiele

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
