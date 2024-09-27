---
title: "GainNode: GainNode() Konstruktor"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Web Audio API")}}

Der **`GainNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`GainNode`](/de/docs/Web/API/GainNode) Objekt, welches ein [`AudioNode`](/de/docs/Web/API/AudioNode) ist, das eine Lautstärkeänderung darstellt.

## Syntax

```js-nolint
new GainNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), z. B. einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `gain`
      - : Die Menge des zu applizierenden Verstärkers. Dieser Parameter ist ein- `rate`
        und sein nomineller Bereich ist (-∞,+∞). Der Standardwert ist `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die verwendet wird, um zu bestimmen, wie viele Kanäle beim [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und präzise
        Definition hängen von dem Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie das Audio [hoch- und heruntergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines [`GainNode`](/de/docs/Web/API/GainNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
