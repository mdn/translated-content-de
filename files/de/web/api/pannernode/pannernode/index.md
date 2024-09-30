---
title: "PannerNode: PannerNode() Konstruktor"
short-title: PannerNode()
slug: Web/API/PannerNode/PannerNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}

Der **`PannerNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue Instanz des [`PannerNode`](/de/docs/Web/API/PannerNode)-Objekts.

## Syntax

```js-nolint
new PannerNode(context)
new PannerNode(context, options)
```

### Parameter

- `context`
  - : Ein [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), welches den Audio-Kontext darstellt, mit dem der Knoten verbunden werden soll.
- `options` {{optional_inline}}

  - : Ein [`PannerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PannerOptions) Dictionary-Objekt, das die Eigenschaften definiert, die der `PannerNode` haben soll:

    - `panningModel`
      - : Das [`PannerNode.panningModel`](/de/docs/Web/API/PannerNode/panningModel), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `equalpower`.)
    - `distanceModel`
      - : Das [`PannerNode.distanceModel`](/de/docs/Web/API/PannerNode/distanceModel), das der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `inverse`.)
    - `positionX`
      - : Die [`PannerNode.positionX`](/de/docs/Web/API/PannerNode/positionX), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `positionY`
      - : Die [`PannerNode.positionY`](/de/docs/Web/API/PannerNode/positionY), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `positionZ`
      - : Die [`PannerNode.positionZ`](/de/docs/Web/API/PannerNode/positionZ), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `orientationX`
      - : Die [`PannerNode.orientationX`](/de/docs/Web/API/PannerNode/orientationX), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `1`.)
    - `orientationY`
      - : Die [`PannerNode.orientationY`](/de/docs/Web/API/PannerNode/orientationY), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `orientationZ`
      - : Die [`PannerNode.orientationZ`](/de/docs/Web/API/PannerNode/orientationZ), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `0`.)
    - `refDistance`
      - : Die [`PannerNode.refDistance`](/de/docs/Web/API/PannerNode/refDistance), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `1`, und negative Werte sind nicht erlaubt.
    - `maxDistance`
      - : Die [`PannerNode.maxDistance`](/de/docs/Web/API/PannerNode/maxDistance), die der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `10000`, und nicht-positive Werte sind nicht erlaubt.
    - `rolloffFactor`
      - : Der [`PannerNode.rolloffFactor`](/de/docs/Web/API/PannerNode/rolloffFactor), den der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `1`, und negative Werte sind nicht erlaubt.
    - `coneInnerAngle`
      - : Der [`PannerNode.coneInnerAngle`](/de/docs/Web/API/PannerNode/coneInnerAngle), den der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `360`.)
    - `coneOuterAngle`
      - : Der [`PannerNode.coneOuterAngle`](/de/docs/Web/API/PannerNode/coneOuterAngle), den der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll (Standard ist `360`.)
    - `coneOuterGain`
      - : Der [`PannerNode.coneOuterGain`](/de/docs/Web/API/PannerNode/coneOuterGain), den der [`PannerNode`](/de/docs/Web/API/PannerNode) haben soll. Standard ist `0`, und der Wert kann im Bereich von 0 bis 1 liegen.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) stattfinden wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich Standardwerten.)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn den Eigenschaften `refDistance`, `maxDistance` oder `rolloffFactor` ein Wert zugewiesen wurde, der außerhalb des zulässigen Bereichs liegt.
- `InvalidStateError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Wird ausgelöst, wenn der `coneOuterGain`-Eigenschaft ein Wert außerhalb des zulässigen Bereichs (0–1) zugewiesen wurde.

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
