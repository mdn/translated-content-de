---
title: "StereoPannerNode: StereoPannerNode() Konstruktor"
short-title: StereoPannerNode()
slug: Web/API/StereoPannerNode/StereoPannerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Audio API")}}

Der **`StereoPannerNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Objekt, ein [`AudioNode`](/de/docs/Web/API/AudioNode), das einen einfachen Stereo-Panner-Knoten repräsentiert, der verwendet werden kann, um einen Audio-Stream nach links oder rechts zu pannen.

## Syntax

```js-nolint
new StereoPannerNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf ein [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `pan`
      - : Eine Fließkommazahl im Bereich \[-1,1], die die Position eines [`AudioNode`](/de/docs/Web/API/AudioNode) in einem Ausgabebild angibt.
        Der Wert -1 repräsentiert vollständig links und 1 vollständig rechts.
        Der Standardwert ist `0`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die dazu verwendet wird, zu bestimmen, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu beliebigen Eingängen zum Knoten erfolgen.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Seine Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
