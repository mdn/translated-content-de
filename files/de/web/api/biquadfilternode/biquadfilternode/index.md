---
title: "BiquadFilterNode: BiquadFilterNode() Konstruktor"
short-title: BiquadFilterNode()
slug: Web/API/BiquadFilterNode/BiquadFilterNode
l10n:
  sourceCommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{APIRef("Web Audio API")}}

Der **`BiquadFilterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues {{domxref("BiquadFilterNode")}}-Objekt, das einen einfachen Tiefpassfilter niedriger Ordnung darstellt.

## Syntax

```js-nolint
new BiquadFilterNode(context, options)
```

### Parameter

- `context`
  - : Eine Referenz zu einem {{domxref("AudioContext")}}.
- `options` {{optional_inline}}

  - : Ein Objekt mit den folgenden Eigenschaften:

    - `type`

      - : Einer der folgenden Zeichenfolgen. Die Bedeutung der anderen Optionen hängt vom Wert von `type` ab.

        - `lowpass`

          - : Der Standardwert. Erlaubt Frequenzen unterhalb einer Grenzfrequenz durchzulassen und schwächt Frequenzen oberhalb der Grenzfrequenz ab. Dies ist ein standardmäßiger resonanter Tiefpassfilter zweiter Ordnung mit einer Abnahme von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Steuert, wie spitz die Reaktion an der Grenzfrequenz sein wird. Ein großer Wert bedeutet eine spitzere Reaktion. Beachten Sie, dass dieser Wert für diesen Filtertyp kein traditionelles Q ist, sondern ein Resonanzwert in Dezibel.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `highpass`

          - : Ein Hochpassfilter ist das Gegenteil eines Tiefpassfilters. Frequenzen oberhalb der Grenzfrequenz werden durchgelassen, aber Frequenzen unterhalb der Grenzfrequenz werden abgeschwächt. Er implementiert einen standardmäßigen resonanten Hochpassfilter zweiter Ordnung mit einer Abnahme von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Steuert, wie spitz die Reaktion an der Grenzfrequenz sein wird. Ein großer Wert bedeutet eine spitzere Reaktion. Beachten Sie, dass dieser Wert für diesen Filtertyp kein traditionelles Q ist, sondern ein Resonanzwert in Dezibel.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `bandpass`

          - : Ein Bandpassfilter lässt einen Frequenzbereich passieren und schwächt die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs ab. Er implementiert einen Bandpassfilter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Steuert die Breite des Bands. Die Breite wird schmaler, wenn der Q-Wert steigt.
            - `frequency`: das Zentrum des Frequenzbereichs.
            - `gain`: wird nicht verwendet.

        - `lowshelf`

          - : Der Lowshelf-Filter lässt alle Frequenzen passieren, fügt aber eine Verstärkung (oder Absenkung) zu den niedrigeren Frequenzen hinzu. Er implementiert einen Lowshelf-Filter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: wird nicht verwendet.
            - `frequency`: die obere Grenze der Frequenzen, bei denen die Verstärkung oder Absenkung angewendet wird.
            - `gain`: die anzuwendende Verstärkung in dB. Wenn der Wert negativ ist, werden die Frequenzen abgeschwächt.

        - `highshelf`

          - : Der Highshelf-Filter ist das Gegenteil des Lowshelf-Filters und lässt alle Frequenzen passieren, fügt jedoch eine Verstärkung zu den höheren Frequenzen hinzu. Er implementiert einen Highshelf-Filter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: wird nicht verwendet.
            - `frequency`: die untere Grenze der Frequenzen, bei denen die Verstärkung oder Absenkung angewendet wird.
            - `gain`: die anzuwendende Verstärkung in dB. Wenn der Wert negativ ist, werden die Frequenzen abgeschwächt.

        - `peaking`

          - : Der Peaking-Filter lässt alle Frequenzen passieren und fügt einem Frequenzbereich eine Verstärkung oder Absenkung hinzu. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Die Breite des Frequenzbands, das verstärkt wird. Ein großer Wert impliziert eine schmale Breite.
            - `frequency`: die Mittenfrequenz des Verstärkungsbereichs.
            - `gain`: die anzuwendende Verstärkung in dB. Wenn der Wert negativ ist, werden die Frequenzen abgeschwächt.

        - `notch`

          - : Der Notch-Filter (auch als Bandsperren- oder Bandablehnungsfilter bekannt) ist das Gegenteil eines Bandpassfilters. Er lässt alle Frequenzen außer einem Satz von Frequenzen durch. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Die Breite des Frequenzbands, das abgeschwächt wird. Ein großer Wert impliziert eine schmale Breite.
            - `frequency`: die Mittenfrequenz des Dämpfungsbereichs.
            - `gain`: wird nicht verwendet.

        - `allpass`

          - : Ein Allpassfilter lässt alle Frequenzen passieren, verändert jedoch die Phasenbeziehung zwischen den verschiedenen Frequenzen. Er implementiert einen Allpassfilter zweiter Ordnung. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutung:

            - `Q`: Die Schärfe des Phasenübergangs bei der Mittenfrequenz. Ein größerer Wert impliziert einen schärferen Übergang und eine größere Gruppenlaufzeit.
            - `frequency`: die Frequenz, an der der Mittelpunkt des Phasenübergangs auftritt. Aus einer anderen Perspektive betrachtet, ist dies die Frequenz mit maximaler Gruppenlaufzeit.
            - `gain`: wird nicht verwendet.

    - `Q`
      - : Standardwert ist 1. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `detune`
      - : Standardwert ist 0.
    - `frequency`
      - : Standardwert ist 350.
    - `gain`
      - : Standardwert ist 0. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `channelCount`
      - : Stellt eine Ganzzahl dar, die bestimmt, wie viele Kanäle beim [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) von Verbindungen zu den Eingängen des Knotens verwendet werden. (Siehe {{domxref("AudioNode.channelCount")}} für weitere Informationen.) Der Gebrauch und die genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen [aufgezählten](/de/docs/Glossary/Enumerated) Wert dar, der beschreibt, wie Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese Interpretation bestimmt, wie [Hochmischen und Heruntermischen](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) vorgenommen werden. Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe {{domxref("AudioNode.channelCountMode")}} für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue {{domxref("BiquadFilterNode")}} Objektinstanz.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
