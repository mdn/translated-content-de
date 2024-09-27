---
title: "MediaElementAudioSourceNode: MediaElementAudioSourceNode() Konstruktor"
short-title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

Der **`MediaElementAudioSourceNode()`** Konstruktor erstellt eine neue Instanz des [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) Objekts.

## Syntax

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audio-Kontext repräsentiert, dem der Knoten zugeordnet werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaElementAudioSourceNode` haben soll:
    - `mediaElement`
      - : Ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), das als Quelle für das Audio verwendet wird.
    - `channelCount`
      - : Eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu jeglichen Eingängen des Knotens [hochgemischt und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens übereinstimmen müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [hochgemischt und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) Objekts.

## Beispiele

```js
const ac = new AudioContext();
const mediaElement = document.createElement("audio");

const myAudioSource = new MediaElementAudioSourceNode(ac, {
  mediaElement,
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
