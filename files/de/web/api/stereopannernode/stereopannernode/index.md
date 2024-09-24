---
title: "StereoPannerNode: StereoPannerNode() Konstruktor"
short-title: StereoPannerNode()
slug: Web/API/StereoPannerNode/StereoPannerNode
l10n:
  sourceCommit: 101ffc9479db6aaa530f2aac3992734dd97d1b86
---

{{APIRef("Web Audio API")}}

Der **`StereoPannerNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues {{domxref("StereoPannerNode")}} Objekt, das einen einfachen Stereo-Panner-Knoten darstellt, der verwendet werden kann, um einen Audio-Stream nach links oder rechts zu verschieben.

## Syntax

```js-nolint
new StereoPannerNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `pan`
      - : Eine Gleitkommazahl im Bereich \[-1,1], die die Position eines {{domxref("AudioNode")}} in einem Ausgabebild angibt.
        Der Wert -1 steht für volle Links-Ausrichtung und 1 für volle Rechts-Ausrichtung.
        Der Standardwert ist `0`.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) der Verbindungen zu allen Eingängen des Knotens verwendet werden.
        (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.)
        Die Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt.
        Diese Interpretation definiert, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`.
        (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz eines {{domxref("StereoPannerNode")}} Objekts.

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}
