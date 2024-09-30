---
title: "GainNode: GainNode() Konstruktor"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Web Audio API")}}

Der **`GainNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`GainNode`](/de/docs/Web/API/GainNode)-Objekt, welches ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt und eine
Änderung der Lautstärke repräsentiert.

## Syntax

```js-nolint
new GainNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), z.B. einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `gain`
      - : Die anzuwendende Verstärkung. Dieser Parameter ist ein `rate`, und sein nominaler Bereich ist (-∞,+∞). Der Standardwert ist `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Up- und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Nutzung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der die Art und Weise beschreibt, wie Kanäle zwischen den
        Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das Audio [Up- und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`GainNode`](/de/docs/Web/API/GainNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
