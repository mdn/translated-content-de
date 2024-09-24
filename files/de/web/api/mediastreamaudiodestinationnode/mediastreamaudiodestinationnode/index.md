---
title: "MediaStreamAudioDestinationNode: MediaStreamAudioDestinationNode()-Konstruktor"
short-title: MediaStreamAudioDestinationNode()
slug: Web/API/MediaStreamAudioDestinationNode/MediaStreamAudioDestinationNode
l10n:
  sourceCommit: 84f8672adab0fdb783d02676c42a2b7ae16b3606
---

{{APIRef("Web Audio API")}}

Der **`MediaStreamAudioDestinationNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des Objekts {{domxref("MediaStreamAudioDestinationNode")}}.

## Syntax

```js-nolint
new MediaStreamAudioDestinationNode(context)
new MediaStreamAudioDestinationNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("AudioContext")}}, das den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}

  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaStreamAudioDestinationNode` haben soll:

    - `channelCount`
      - : Eine Ganzzahl, die bestimmt, wie viele Kanäle beim
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Verwendung und die genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Eine Zeichenkette, die beschreibt, wie Kanäle zwischen
        den Eingängen und Ausgängen des Knotens zugeordnet werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Eine Zeichenkette, die die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie
        [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing)
        erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)

## Beispiele

```js
const ac = new AudioContext();

const myDestination = new MediaStreamAudioDestinationNode(ac);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
