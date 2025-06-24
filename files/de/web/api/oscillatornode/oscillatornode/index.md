---
title: "OscillatorNode: OscillatorNode() Konstruktor"
short-title: OscillatorNode()
slug: Web/API/OscillatorNode/OscillatorNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`OscillatorNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues
[`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Objekt, das ein [`AudioNode`](/de/docs/Web/API/AudioNode) darstellt und eine periodische Wellenform erzeugt, wie zum Beispiel eine Sinuswelle. Dabei können optional die Eigenschaften der Node so gesetzt werden, dass sie mit den in einem angegebenen Objekt enthaltenen Werten übereinstimmen.

Wenn die Standardwerte der Eigenschaften akzeptabel sind, können Sie optional die
[`BaseAudioContext.createOscillator()`](/de/docs/Web/API/BaseAudioContext/createOscillator) Factory-Methode verwenden; siehe
[Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
new OscillatorNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Ein Objekt, dessen Eigenschaften die Anfangswerte für die Eigenschaften der Oszillator-Node spezifizieren. Alle im Objekt ausgelassenen Eigenschaften nehmen den in der Dokumentation angegebenen Standardwert an.
    - `type`
      - : Die Form der von der Node erzeugten Welle. Gültige Werte sind
        `"sine"`, `"square"`, `"sawtooth"`,
        `"triangle"` und `"custom"`. Der Standardwert ist
        `"sine"`.
    - `detune`
      - : Ein Verstimmungswert (in Cent), der die `frequency` um den angegebenen Betrag verschiebt. Der Standardwert ist 0.
    - `frequency`
      - : Die Frequenz (in [Hertz](https://en.wikipedia.org/wiki/Hertz)) der periodischen Wellenform. Der Standardwert ist 440.
    - `periodicWave`
      - : Eine willkürliche periodische Wellenform, die durch ein [`PeriodicWave`](/de/docs/Web/API/PeriodicWave) Objekt beschrieben wird.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu allen Eingängen der Node verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue
        Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen enumerierten Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen der Node abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen einschließlich der Standardwerte.)

### Rückgabewert

Eine neue [`OscillatorNode`](/de/docs/Web/API/OscillatorNode) Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
