---
title: "BiquadFilterNode: BiquadFilterNode() Konstruktor"
short-title: BiquadFilterNode()
slug: Web/API/BiquadFilterNode/BiquadFilterNode
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Web Audio API")}}

Der **`BiquadFilterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekt, das einen einfachen Tiefpassfilter niedriger Ordnung darstellt.

## Syntax

```js-nolint
new BiquadFilterNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf einen [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `type`

      - : Einer der folgenden Strings. Die Bedeutung
        der anderen Optionen hängt vom Wert von `type` ab.

        - `lowpass`

          - : Der Standardwert. Erlaubt Frequenzen unterhalb einer Grenzfrequenz durchzulassen und dämpft Frequenzen oberhalb der Grenzfrequenz. Dies ist ein Standard-Zweipol-Resonanz-Tiefpassfilter mit einem Abfall von 12 dB/Oktave. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: kontrolliert, wie spitz die Antwort an der Grenzfrequenz sein wird. Ein großer Wert macht die Antwort spitzer. Beachten Sie bitte, dass dieser Wert für diesen Filtertyp kein traditionelles Q ist, sondern einen Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `highpass`

          - : Ein Hochpassfilter ist das Gegenteil eines Tiefpassfilters.
            Frequenzen oberhalb der Grenzfrequenz werden durchgelassen, aber Frequenzen unterhalb der Grenzfrequenz werden gedämpft. Er implementiert einen Standard-Zweipol-Resonanz-Hochpassfilter mit einem Abfall von 12 dB/Oktave. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: kontrolliert, wie spitz die Antwort an der Grenzfrequenz sein wird. Ein großer Wert macht die Antwort spitzer. Beachten Sie bitte, dass dieser Wert für diesen Filtertyp kein traditionelles Q ist, sondern einen Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `bandpass`

          - : Ein Bandpassfilter lässt einen Frequenzbereich durch und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs. Er implementiert einen Zweipol-Bandpassfilter. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: kontrolliert die Breite des Bandes. Die Breite wird schmaler, wenn der Q-Wert steigt.
            - `frequency`: das Zentrum des Frequenzbandes.
            - `gain`: wird nicht verwendet.

        - `lowshelf`

          - : Der Lowshelf-Filter lässt alle Frequenzen durch, fügt aber einen Boost (oder eine Dämpfung) zu den tieferen Frequenzen hinzu. Er implementiert einen Zweipol-Lowshelf-Filter. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: wird nicht verwendet.
            - `frequency`: die obere Grenze der Frequenzen, bei denen der Boost oder die Dämpfung angewendet wird.
            - `gain`: der Boost, in dB, der angewendet werden soll. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `highshelf`

          - : Der Highshelf-Filter ist das Gegenteil des Lowshelf-Filters und lässt alle Frequenzen durch, fügt aber einen Boost zu den höheren Frequenzen hinzu. Er implementiert einen Zweipol-Highshelf-Filter. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: wird nicht verwendet.
            - `frequency`: die untere Grenze der Frequenzen, bei denen der Boost oder die Dämpfung angewendet wird.
            - `gain`: der Boost, in dB, der angewendet werden soll. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `peaking`

          - : Der Peaking-Filter lässt alle Frequenzen durch und fügt einen Boost oder eine Dämpfung in einem Bereich von Frequenzen hinzu. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: die Breite des Frequenzbandes, das geboostet wird. Ein großer Wert bedeutet eine schmale Breite.
            - `frequency`: die Zentrumfrequenz des Boostbereichs.
            - `gain`: der Boost, in dB, der angewendet werden soll. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `notch`

          - : Der Notch-Filter (auch Band-Stop- oder Band-Rejection-Filter genannt) ist das Gegenteil eines Bandpassfilters. Er lässt alle Frequenzen außer einem Frequenzbereich durch. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: die Breite des Frequenzbandes, das gedämpft wird. Ein großer Wert bedeutet eine schmale Breite.
            - `frequency`: die Zentrumfrequenz des Dämpfungsbereichs.
            - `gain`: wird nicht verwendet.

        - `allpass`

          - : Ein Allpass-Filter lässt alle Frequenzen durch, ändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen. Er implementiert einen Zweipol-Allpass-Filter. Bei diesem Filtertyp bedeuten die anderen Optionen Folgendes:

            - `Q`: die Schärfe des Phasenübergangs bei der Zentrumfrequenz. Ein größerer Wert bedeutet einen schärferen Übergang und eine größere Gruppenlaufzeit.
            - `frequency`: die Frequenz, bei der sich der Phasenübergangszentrum befindet. Aus einer anderen Sichtweise ist dies die Frequenz mit maximaler Gruppenlaufzeit.
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
      - : Repräsentiert eine Ganzzahl, die bestimmt, wie viele Kanäle beim [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für mehr Informationen.) Seine Verwendung und genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Repräsentiert einen [aufgezählten](/de/docs/Glossary/Enumerated) Wert, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgestimmt werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Repräsentiert einen aufgezählten Wert, der die Bedeutung der Kanäle beschreibt. Diese Interpretation definiert, wie das Audio [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) erfolgen wird. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für mehr Informationen einschließlich Standardwerte.)

### Rückgabewert

Eine neue Instanz des [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
