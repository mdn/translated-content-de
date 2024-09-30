---
title: "BiquadFilterNode: BiquadFilterNode() Konstruktor"
short-title: BiquadFilterNode()
slug: Web/API/BiquadFilterNode/BiquadFilterNode
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Web Audio API")}}

Der **`BiquadFilterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekt, das einen einfachen Filter niedriger Ordnung repräsentiert.

## Syntax

```js-nolint
new BiquadFilterNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `type`

      - : Einer der folgenden Strings. Die Bedeutung der anderen Optionen hängt vom Wert von `type` ab.

        - `lowpass`

          - : Der Standardwert. Erlaubt Frequenzen unterhalb einer Grenzfrequenz, passiert zu werden, und dämpft Frequenzen oberhalb dieser. Dies ist ein standardmäßiger resonanter Tiefpassfilter zweiter Ordnung mit einer Absenkung von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: steuert, wie stark die Resonanz bei der Grenzfrequenz ausgeprägt ist. Ein großer Wert macht die Resonanz stärker ausgeprägt. Bitte beachten Sie, dass dieser Wert für diesen Filtertyp kein traditioneller Q-Wert ist, sondern ein Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `highpass`

          - : Ein Hochpassfilter ist das Gegenteil eines Tiefpassfilters. Frequenzen oberhalb der Grenzfrequenz werden passiert, aber Frequenzen unterhalb der Grenzfrequenz werden gedämpft. Er implementiert einen standardmäßigen resonanten Hochpassfilter zweiter Ordnung mit einer Absenkung von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: steuert, wie stark die Resonanz bei der Grenzfrequenz ausgeprägt ist. Ein großer Wert macht die Resonanz stärker ausgeprägt. Bitte beachten Sie, dass dieser Wert für diesen Filtertyp kein traditioneller Q-Wert ist, sondern ein Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `bandpass`

          - : Ein Bandpassfilter lässt einen Frequenzbereich passieren und dämpft die Frequenzen darunter und darüber. Es implementiert einen Bandpassfilter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: steuert die Breite des Bandes. Die Breite wird schmaler, wenn der Q-Wert zunimmt.
            - `frequency`: das Zentrum der Frequenzband.
            - `gain`: wird nicht verwendet.

        - `lowshelf`

          - : Der Lowshelf-Filter lässt alle Frequenzen passieren, fügt jedoch einen Verstärkungs- oder Dämpfungseffekt zu den unteren Frequenzen hinzu. Er implementiert einen Lowshelf-Filter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: wird nicht verwendet.
            - `frequency`: das obere Limit der Frequenzen, auf die der Verstärkungs- oder Dämpfungseffekt angewendet wird.
            - `gain`: die anzuwendende Verstärkung, in dB. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `highshelf`

          - : Der Highshelf-Filter ist das Gegenteil des Lowshelf-Filters und lässt alle Frequenzen durch, fügt jedoch den höheren Frequenzen einen Verstärkungseffekt hinzu. Er implementiert einen Highshelf-Filter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: wird nicht verwendet.
            - `frequency`: das untere Limit der Frequenzen, auf die der Verstärkungs- oder Dämpfungseffekt angewendet wird.
            - `gain`: die anzuwendende Verstärkung, in dB. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `peaking`

          - : Der Peaking-Filter lässt alle Frequenzen durch, fügt jedoch einem Bereich von Frequenzen einen Verstärkungs- oder Dämpfungseffekt hinzu. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: die Breite des Frequenzbands, das verstärkt wird. Ein großer Wert impliziert eine schmale Breite.
            - `frequency`: die Mittelfrequenz des Verstärkungsbereichs.
            - `gain`: die anzuwendende Verstärkung, in dB. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `notch`

          - : Der Notch-Filter (auch als Bandsperr- oder Bandunterdrückungsfilter bekannt) ist das Gegenteil eines Bandpassfilters. Er lässt alle Frequenzen durch, außer für einen bestimmten Frequenzbereich. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: die Breite des Frequenzbands, das gedämpft wird. Ein großer Wert impliziert eine schmale Breite.
            - `frequency`: die zentrale Frequenz des Dämpfungsbereichs.
            - `gain`: wird nicht verwendet.

        - `allpass`

          - : Ein Allpass-Filter lässt alle Frequenzen durch, verändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen. Er implementiert einen Allpassfilter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:

            - `Q`: die Schärfe des Phasenübergangs bei der Zentrumfrequenz. Ein größerer Wert impliziert einen schärferen Übergang und eine größere Gruppenzahlungsverzögerung.
            - `frequency`: die Frequenz, bei der das Zentrum des Phasenübergangs auftritt. Aus einem anderen Blickwinkel betrachtet, ist dies die Frequenz mit maximaler Gruppenverzögerung.
            - `gain`: wird nicht verwendet.

    - `Q`
      - : Standardmäßig 1. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `detune`
      - : Standardmäßig 0.
    - `frequency`
      - : Standardmäßig 350.
    - `gain`
      - : Standardmäßig 0. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `channelCount`
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle verwendet werden, wenn Verbindungen zu den Eingängen des Knotens [hoch- und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Verwendung und genaue Definition hängt vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen [aufzählbaren](/de/docs/Glossary/Enumerated) Wert, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen aufzählbaren Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio [hoch- und runtergemischt](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
