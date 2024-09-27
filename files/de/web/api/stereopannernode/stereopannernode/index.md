---
title: "StereoPannerNode: StereoPannerNode() Konstruktor"
short-title: StereoPannerNode()
slug: Web/API/StereoPannerNode/StereoPannerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Audio API")}}

Der **`StereoPannerNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Objekt. Dies ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das einen einfachen Stereo-Panning-Knoten darstellt, mit dem ein Audiostream nach links oder rechts gepannt werden kann.

## Syntax

```js-nolint
new StereoPannerNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `pan`
      - : Eine Gleitkommazahl im Bereich \[-1,1], die die Position eines [`AudioNode`](/de/docs/Web/API/AudioNode) in einem Ausgabebild angibt.
        Der Wert -1 repräsentiert volle Linksausrichtung und 1 repräsentiert volle Rechtsausrichtung.
        Der Standardwert ist `0`.
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu den Eingängen des Knotens [hochgemischt und heruntergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) werden.
        (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.)
        Die Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation wird definieren, wie das Audio [hochgemischt und heruntergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`StereoPannerNode`](/de/docs/Web/API/StereoPannerNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
