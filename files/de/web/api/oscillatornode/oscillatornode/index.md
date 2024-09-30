---
title: "OscillatorNode: OscillatorNode() Konstruktor"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`OscillatorNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt ein neues
[`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekt, welches ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt, das eine periodische Wellenform, wie z.B. eine Sinuswelle, repräsentiert und optional die Eigenschaften des Knotens so einstellt, dass sie den Werten eines angegebenen Objekts entsprechen.

Wenn die Standardwerte der Eigenschaften akzeptabel sind, können Sie alternativ die [`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
new OscillatorNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf ein [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften die anfänglichen Werte für die Eigenschaften des Oszillator-Knotens festlegen. Jede weggelassene Eigenschaft des Objekts nimmt den Standardwert an, wie dokumentiert.

    - `type`
      - : Die Form der vom Knoten erzeugten Welle. Gültige Werte sind
        `"sine"`, `"square"`, `"sawtooth"`,
        `"triangle"` und `"custom"`. Der Standardwert ist
        `"sine"`.
    - `detune`
      - : Ein Verstimmungswert (in Cent), der die `frequency` um den angegebenen Betrag verschiebt. Der Standardwert ist 0.
    - `frequency`
      - : Die Frequenz (in [Hertz](https://en.wikipedia.org/wiki/Hertz)) der periodischen Wellenform. Der Standardwert ist 440.
    - `periodicWave`
      - : Eine beliebige periodische Wellenform, die durch ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekt beschrieben wird.
    - `channelCount`
      - : Stellt eine ganze Zahl dar, die angibt, wie viele Kanäle bei der [Aufmischung und Abmischung](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu Eingängen des Knotens verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen Aufzählungswert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen Aufzählungswert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie Audio [aufgemischt und abgemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
