---
title: "WaveShaperNode: WaveShaperNode() Konstruktor"
short-title: WaveShaperNode()
slug: Web/API/WaveShaperNode/WaveShaperNode
l10n:
  sourceCommit: 532ecbca7b68e7defa4612bc7b00885a13163641
---

{{APIRef("Web Audio API")}}

Der **`WaveShaperNode()`** Konstruktor
der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
{{domxref("WaveShaperNode")}}-Objekt, das ein {{domxref("AudioNode")}} darstellt, welches ein nichtlineares Verzerrer ist.

## Syntax

```js-nolint
new WaveShaperNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Optionen sind wie folgt:

    - `curve`
      - : Die Formungskurve, die für den Wellenformungseffekt verwendet wird. Das Eingangssignal liegt nominal im Bereich \[-1;1].
    - `oversample`
      - : Gibt an, welche Art von Oversampling (falls vorhanden) verwendet werden soll, wenn die Formungskurve angewendet wird. Gültige Werte sind '`none`', '`2x`' oder '`4x`'. Der Standardwert ist '`none`'.
    - `channelCount`
      - : Repräsentiert eine ganze Zahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen mit beliebigen Eingängen des Knotens [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchlaufen. (Siehe
        {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation wird definieren, wie Audio [up-mixing und down-mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines {{domxref("WaveShaperNode")}}-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
