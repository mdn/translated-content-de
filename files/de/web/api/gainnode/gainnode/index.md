---
title: "GainNode: GainNode()-Konstruktor"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: af6e47973201416260911ee6444cf315b2ba6d89
---

{{APIRef("Web Audio API")}}

Der **`GainNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt ein neues
[`GainNode`](/de/docs/Web/API/GainNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, welcher eine
Änderung der Lautstärke bewirkt.

## Syntax

```js-nolint
new GainNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`BaseAudioContext`](/de/docs/Web/API/BaseAudioContext), z.B. einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Optionen sind wie folgt:
    - `gain`
      - : Die Menge an Verstärkung, die angewendet werden soll. Dieser Parameter ist ein `rate`
        und sein nomineller Bereich ist (-∞,+∞). Der Standardwert ist `1`.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu Eingängen des Knotens [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchführen. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Seine Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den
        Eingängen und Ausgängen des Knotens angepasst werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation wird definieren, wie [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Audio durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelInterpretation`](/de/docs/Web/API/AudioNode/channelInterpretation) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`GainNode`](/de/docs/Web/API/GainNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
