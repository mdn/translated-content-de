---
title: "OscillatorNode: OscillatorNode() Konstruktor"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
l10n:
  sourceCommit: dcbb1d99185118360cc84b3a0e935e77fe0a03e3
---

{{APIRef("Web Audio API")}}

Der **`OscillatorNode()`**-Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erzeugt ein neues
[`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt und eine periodische Wellenform, wie eine Sinuswelle, repräsentiert. Dabei werden optional die Werte der Eigenschaften des Knotens an die in einem angegebenen Objekt spezifizierten Werte angepasst.

Wenn die Standardwerte der Eigenschaften akzeptabel sind, können Sie optional die
[`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) Fabrik-Methode verwenden; siehe
[Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
new OscillatorNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt, dessen Eigenschaften die Anfangswerte für die Eigenschaften des Oszillatorknotens festlegen. Alle Eigenschaften, die im Objekt nicht angegeben sind, übernehmen die Standardwerte, wie dokumentiert.

    - `type`
      - : Die Form der vom Knoten erzeugten Welle. Gültige Werte sind
        `"sine"`, `"square"`, `"sawtooth"`,
        `"triangle"` und `"custom"`. Der Standardwert ist
        `"sine"`.
    - `detune`
      - : Ein Verstimmungswert (in Cent), der
        die `frequency` um den angegebenen Betrag versetzt. Der Standardwert ist 0.
    - `frequency`
      - : Die Frequenz (in [Hertz](https://en.wikipedia.org/wiki/Hertz)) der periodischen
        Wellenform. Der Standardwert ist 440.
    - `periodicWave`
      - : Eine willkürliche periodische Wellenform, die durch ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave)-Objekt beschrieben wird.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle beim [Hoch- und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) der Verbindungen zu Eingängen des Knotens verwendet werden. (Weitere Informationen finden Sie unter
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount).) Die Nutzung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den
        Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [hoch- und heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Weitere Informationen, einschließlich der Standardwerte, finden Sie unter
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode).)

### Rückgabewert

Eine neue Instanz des [`OscillatorNode`](/de/docs/Web/API/OscillatorNode)-Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
