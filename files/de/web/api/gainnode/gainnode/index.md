---
title: "GainNode: GainNode() Konstruktor"
short-title: GainNode()
slug: Web/API/GainNode/GainNode
l10n:
  sourceCommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{APIRef("Web Audio API")}}

Der **`GainNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
{{domxref("GainNode")}}-Objekt, das einen {{domxref("AudioNode")}} darstellt und eine Lautstärkeänderung repräsentiert.

## Syntax

```js-nolint
new GainNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen {{domxref("BaseAudioContext")}}, z. B. einen {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Die Optionen sind wie folgt:

    - `gain`
      - : Die Menge an Verstärkung, die angewendet werden soll. Dieser Parameter ist - „rate“
        und sein nominaler Bereich ist (-∞,+∞). Der Standardwert ist `1`.
    - `channelCount`
      - : Stellt einen Ganzzahlwert dar, um zu bestimmen, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu Eingängen des Knotens erfolgen. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Nutzung und genaue
        Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen
        den Eingängen und Ausgängen des Knotens angepasst werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere
        Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation legt fest, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen einschließlich der
        Standardwerte.)

### Rückgabewert

Eine neue Instanz des {{domxref("GainNode")}}-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
