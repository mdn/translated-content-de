---
title: "GainNode: GainNode() Konstruktor"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`GainNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`GainNode`](/de/docs/Web/API/GainNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, welches eine Lautstärkeänderung repräsentiert.

## Syntax

```js-nolint
new GainNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), z. B. einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `gain`
      - : Die Menge an Verstärkung, die angewendet werden soll. Dieser Parameter ist ein- `rate`
        und der nominelle Bereich ist (-∞,+∞). Der Standardwert ist `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) der Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen aufgezählten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen aufgezählten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) stattfinden wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue [`GainNode`](/de/docs/Web/API/GainNode)-Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
