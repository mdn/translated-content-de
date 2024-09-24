---
title: "MediaElementAudioSourceNode: MediaElementAudioSourceNode()-Konstruktor"
short-title: MediaElementAudioSourceNode()
slug: Web/API/MediaElementAudioSourceNode/MediaElementAudioSourceNode
l10n:
  sourceCommit: eab4066e72d5478de920e4020e5db71214dcffa6
---

{{APIRef("Web Audio API")}}

Der **`MediaElementAudioSourceNode()`**-Konstruktor erzeugt eine neue Instanz eines {{domxref("MediaElementAudioSourceNode")}}-Objekts.

## Syntax

```js-nolint
new MediaElementAudioSourceNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("AudioContext")}}, das den Audiokontext darstellt, mit dem der Knoten verknüpft werden soll.
- `options`
  - : Ein Objekt, das die Eigenschaften definiert, die der `MediaElementAudioSourceNode` haben soll:
    - `mediaElement`
      - : Ein {{domxref("HTMLMediaElement")}}, das als Quelle für das Audio verwendet wird.
    - `channelCount`
      - : Eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Ein String, der beschreibt, wie Kanäle zwischen den
        Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für
        weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Ein String, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Audio erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelInterpretation")}} für zusätzliche Informationen, einschließlich der
        Standardwerte.)

### Rückgabewert

Eine neue Instanz eines {{domxref("MediaElementAudioSourceNode")}}-Objekts.

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
