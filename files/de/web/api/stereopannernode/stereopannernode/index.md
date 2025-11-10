---
title: "StereoPannerNode: StereoPannerNode()-Konstruktor"
short-title: StereoPannerNode()
slug: Web/API/StereoPannerNode/StereoPannerNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`StereoPannerNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) repräsentiert. Es handelt sich um einen einfachen Stereo-Panner-Knoten, der verwendet werden kann, um einen Audiostream nach links oder rechts zu verschieben.

## Syntax

```js-nolint
new StereoPannerNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `pan`
      - : Eine Gleitkommazahl im Bereich \[-1,1], die die Position eines [`AudioNode`](/de/docs/Web/API/AudioNode) in einem Ausgabebild angibt.
        Der Wert -1 repräsentiert vollständig links und 1 repräsentiert vollständig rechts.
        Der Standardwert ist `0`.
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn [Aufmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) an Eingänge des Knotens angeschlossen werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Seine Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie das [Aufmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) stattfinden wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
