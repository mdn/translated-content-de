---
title: "MediaElementAudioSourceNode: MediaElementAudioSourceNode() Konstruktor"
short-title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

Der **`MediaElementAudioSourceNode()`** Konstruktor erstellt eine neue [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) Objektinstanz.

## Syntax

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein [`AudioContext`](/de/docs/Web/API/AudioContext), der den Audiokontext darstellt, mit dem der Knoten assoziiert werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die das `MediaElementAudioSourceNode` haben soll:
    - `mediaElement`
      - : Ein [`HTMLMediaElement`](/de/docs/Web/API/HTMLMediaElement), das als Quelle für den Ton verwendet wird.
    - `channelCount`
      - : Ein Integer, der bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für mehr Informationen.) Seine Nutzung und präzise
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen inklusive Standardwerte.)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio `up-mixing` und `down-mixing` erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation) für mehr Informationen inklusive Standardwerte.)

### Rückgabewert

Eine neue [`MediaElementAudioSourceNode`](/de/docs/Web/API/MediaElementAudioSourceNode) Objektinstanz.

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
