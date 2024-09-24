---
title: "OscillatorNode: OscillatorNode() Konstruktor"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Web Audio API")}}

Der **`OscillatorNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues {{domxref("OscillatorNode")}} Objekt, welches ein {{domxref("AudioNode")}} darstellt, das eine periodische Wellenform, wie eine Sinuswelle, repräsentiert und dabei optional die Eigenschaftswerte des Knotens mit den Werten eines angegebenen Objekts festlegt.

Wenn die Standardwerte der Eigenschaften akzeptabel sind, können Sie optional die {{domxref("BaseAudioContext.createOscillator()")}} Fabrikmethode anstelle verwenden; siehe [Erstellen eines AudioNodes](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
new OscillatorNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz auf einen {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften die anfänglichen Werte für die Eigenschaften des Oszillator-Knotens festlegen. Alle im Objekt nicht enthaltenen Eigenschaften nehmen den dokumentierten Standardwert an.

    - `type`
      - : Die Form der vom Knoten erzeugten Welle. Gültige Werte sind '`sine`', '`square`', '`sawtooth`', '`triangle`' und '`custom`'. Der Standardwert ist '`sine`'.
    - `detune`
      - : Ein Verstimmungswert (in Cent), der die `frequency` um den angegebenen Betrag verschiebt. Der Standardwert ist 0.
    - `frequency`
      - : Die Frequenz (in [Hertz](https://de.wikipedia.org/wiki/Hertz)) der periodischen Wellenform. Der Standardwert ist 440.
    - `periodicWave`
      - : Eine beliebige periodische Wellenform, die durch ein {{domxref("PeriodicWave")}} Objekt beschrieben wird.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Hoch- und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen des Knotens verwendet werden. (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Die Verwendung und die genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen enumerierten Wert, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich Standardwerten.)
    - `channelInterpretation`
      - : Repräsentiert einen enumerierten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das [Hoch- und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) des Audios stattfinden wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich Standardwerten.)

### Rückgabewert

Eine neue Instanz eines {{domxref("OscillatorNode")}} Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
