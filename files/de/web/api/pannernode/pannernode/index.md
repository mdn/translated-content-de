---
title: "PannerNode: PannerNode() Konstruktor"
short-title: PannerNode()
slug: Web/API/PannerNode/PannerNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`PannerNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue [`PannerNode`](/de/docs/Web/API/PannerNode)-Objektinstanz.

## Syntax

```js-nolint
new PannerNode(context)
new PannerNode(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), der den Audiokontext repräsentiert, mit dem der Knoten verknüpft werden soll.
- `options` {{optional_inline}}
  - : Ein [`PannerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PannerOptions) Dictionary-Objekt, das die Eigenschaften definiert, die der `PannerNode` haben soll:
    - `panningModel`
      - : Das [`PannerNode.panningModel`](/de/docs/Web/API/PannerNode/panningModel), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `equalpower`.)
    - `distanceModel`
      - : Das [`PannerNode.distanceModel`](/de/docs/Web/API/PannerNode/distanceModel), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `inverse`.)
    - `positionX`
      - : Das [`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `positionY`
      - : Das [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `positionZ`
      - : Das [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `orientationX`
      - : Das [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `1`.)
    - `orientationY`
      - : Das [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `orientationZ`
      - : Das [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `refDistance`
      - : Das [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `1`, und negative Werte sind nicht erlaubt.
    - `maxDistance`
      - : Das [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `10000`, und nicht-positive Werte sind nicht erlaubt.
    - `rolloffFactor`
      - : Das [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `1`, und negative Werte sind nicht erlaubt.
    - `coneInnerAngle`
      - : Das [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `360`.)
    - `coneOuterAngle`
      - : Das [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `360`.)
    - `coneOuterGain`
      - : Das [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `0`, und der Wert kann im Bereich 0–1 liegen.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu den Eingängen des Knotens erfolgen. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Nutzung und genaue
        Definition hängen vom Wert des `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen den
        Eingängen und Ausgängen des Knotens abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr
        Informationen einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen einschließlich Standardwerte.)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn die Eigenschaften `refDistance`, `maxDistance` oder `rolloffFactor` einen Wert haben, der außerhalb des zulässigen Bereichs liegt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn die Eigenschaft `coneOuterGain` einen Wert außerhalb des zulässigen Bereichs (0–1) hat.

## Beispiele

```js
const ctx = new AudioContext();

const options = {
  positionX: 1,
  maxDistance: 5000,
};

const myPanner = new PannerNode(ctx, options);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
