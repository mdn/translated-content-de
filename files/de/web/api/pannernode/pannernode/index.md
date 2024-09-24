---
title: "PannerNode: PannerNode() Konstruktor"
short-title: PannerNode()
slug: Web/API/PannerNode/PannerNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}

Der **`PannerNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt eine neue {{domxref("PannerNode")}} Objektinstanz.

## Syntax

```js-nolint
new PannerNode(context)
new PannerNode(context, options)
```

### Parameter

- `context`
  - : Ein {{domxref("BaseAudioContext")}}, das den Audiokontext repräsentiert, mit dem der Knoten verbunden werden soll.
- `options` {{optional_inline}}

  - : Ein [`PannerOptions`](https://webaudio.github.io/web-audio-api/#idl-def-PannerOptions) Wörterbuchobjekt, das die Eigenschaften definiert, die Sie für den `PannerNode` festlegen möchten:

    - `panningModel`
      - : Das {{domxref("PannerNode.panningModel")}}, das Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `equalpower`).
    - `distanceModel`
      - : Das {{domxref("PannerNode.distanceModel")}}, das Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `inverse`).
    - `positionX`
      - : Der {{domxref("PannerNode.positionX")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `0`).
    - `positionY`
      - : Der {{domxref("PannerNode.positionY")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `0`).
    - `positionZ`
      - : Der {{domxref("PannerNode.positionZ")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `0`).
    - `orientationX`
      - : Der {{domxref("PannerNode.orientationX")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `1`).
    - `orientationY`
      - : Der {{domxref("PannerNode.orientationY")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `0`).
    - `orientationZ`
      - : Der {{domxref("PannerNode.orientationZ")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `0`).
    - `refDistance`
      - : Die {{domxref("PannerNode.refDistance")}}, die Sie für den {{domxref("PannerNode")}} festlegen möchten. Die Standardeinstellung ist `1`, und negative Werte sind nicht erlaubt.
    - `maxDistance`
      - : Die {{domxref("PannerNode.maxDistance")}}, die Sie für den {{domxref("PannerNode")}} festlegen möchten. Die Standardeinstellung ist `10000`, und nicht positive Werte sind nicht erlaubt.
    - `rolloffFactor`
      - : Der {{domxref("PannerNode.rolloffFactor")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten. Die Standardeinstellung ist `1`, und negative Werte sind nicht erlaubt.
    - `coneInnerAngle`
      - : Der {{domxref("PannerNode.coneInnerAngle")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `360`).
    - `coneOuterAngle`
      - : Der {{domxref("PannerNode.coneOuterAngle")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten (die Standardeinstellung ist `360`).
    - `coneOuterGain`
      - : Der {{domxref("PannerNode.coneOuterGain")}}, den Sie für den {{domxref("PannerNode")}} festlegen möchten. Die Standardeinstellung ist `0`, und der Wert kann im Bereich 0–1 liegen.
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) stattfinden wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)

### Ausnahmen

- {{jsxref("RangeError")}}
  - : Wird ausgelöst, wenn den Eigenschaften `refDistance`, `maxDistance` oder `rolloffFactor` ein Wert außerhalb des akzeptierten Bereichs zugewiesen wurde.
- `InvalidStateError` {{domxref("DOMException")}}
  - : Wird ausgelöst, wenn der Eigenschaft `coneOuterGain` ein Wert außerhalb des akzeptierten Bereichs (0–1) zugewiesen wurde.

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

## Kompatibilität der Browser

{{Compat}}
