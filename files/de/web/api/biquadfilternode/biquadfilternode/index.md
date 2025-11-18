---
title: "BiquadFilterNode: BiquadFilterNode() Konstruktor"
short-title: BiquadFilterNode()
slug: Web/API/BiquadFilterNode/BiquadFilterNode
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("Web Audio API")}}

Der **`BiquadFilterNode()`** Konstruktor der [Web Audio API](/de/docs/Web/API/Web_Audio_API) erstellt ein neues [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekt, das einen einfachen Filter niedriger Ordnung darstellt.

## Syntax

```js-nolint
new BiquadFilterNode(context, options)
```

### Parameter

- `context`
  - : Ein Verweis auf ein [`AudioContext`](/de/docs/Web/API/AudioContext).
- `options` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `type`
      - : Einer der folgenden Strings. Die Bedeutung der anderen Optionen hängt vom Wert von `type` ab.
        - `lowpass`
          - : Der Standardwert. Lässt Frequenzen unterhalb einer Grenzfrequenz durch und dämpft Frequenzen oberhalb der Grenzfrequenz. Dies ist ein Standard-Zweitordnungs-Resonanz-Tiefpassfilter mit einer Dämpfung von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: steuert die Ausgeprägtheit der Antwort bei der Grenzfrequenz. Ein großer Wert macht die Antwort ausgeprägter. Bitte beachten Sie, dass dieser Wert bei diesem Filtertyp kein traditionelles Q ist, sondern einen Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `highpass`
          - : Ein Hochpassfilter ist das Gegenteil eines Tiefpassfilters.
            Frequenzen oberhalb der Grenzfrequenz werden durchgelassen, aber Frequenzen unterhalb der Grenzfrequenz werden gedämpft. Er implementiert einen Standard-Zweitordnungs-Resonanz-Hochpassfilter mit einer Dämpfung von 12 dB/Oktave. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: steuert die Ausgeprägtheit der Antwort bei der Grenzfrequenz. Ein großer Wert macht die Antwort ausgeprägter. Bitte beachten Sie, dass dieser Wert bei diesem Filtertyp kein traditionelles Q ist, sondern einen Resonanzwert in Dezibel darstellt.
            - `frequency`: die Grenzfrequenz.
            - `gain`: wird nicht verwendet.

        - `bandpass`
          - : Ein Bandpassfilter lässt einen Bereich von Frequenzen durch
            und dämpft die Frequenzen unterhalb und oberhalb dieses Frequenzbereichs. Er implementiert einen Zweitordnungs-Bandpassfilter. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: steuert die Breite des Bandes. Die Breite wird schmaler, wenn der Q-Wert erhöht wird.
            - `frequency`: die Mitte des Frequenzbandes.
            - `gain`: wird nicht verwendet.

        - `lowshelf`
          - : Das Tiefregalfilter lässt alle Frequenzen durch, fügt aber
            einen Boost (oder eine Dämpfung) für die tieferen Frequenzen hinzu. Es implementiert ein Zweitordnungs-Tiefregalfilter. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: wird nicht verwendet.
            - `frequency`: die obere Grenze der Frequenzen, bei denen der Boost oder die Dämpfung angewendet wird.
            - `gain`: der Boost in dB, der angewendet wird. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `highshelf`
          - : Das Hochregalfilter ist das Gegenteil des Tiefregalfilters
            und lässt alle Frequenzen durch, fügt jedoch einen Boost für die höheren Frequenzen hinzu. Es implementiert ein Zweitordnungs-Hochregalfilter. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: wird nicht verwendet.
            - `frequency`: die untere Grenze der Frequenzen, bei denen der Boost oder die Dämpfung angewendet wird.
            - `gain`: der Boost in dB, der angewendet wird. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `peaking`
          - : Das Spitzenfilter lässt alle Frequenzen durch und fügt einen
            Boost oder eine Dämpfung für einen Bereich von Frequenzen hinzu. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: die Breite des Frequenzbandes, das geboostet wird. Ein großer Wert bedeutet eine schmale Breite.
            - `frequency`: die Mittelfrequenz des Boost-Bereichs.
            - `gain`: der Boost in dB, der angewendet wird. Wenn der Wert negativ ist, werden die Frequenzen gedämpft.

        - `notch`
          - : Das Kerbfilter (auch Bandstopp- oder Bandsperrfilter genannt) ist das Gegenteil eines Bandpassfilters. Es lässt alle Frequenzen durch, außer einem Bereich von Frequenzen. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: die Breite des Frequenzbandes, das gedämpft wird. Ein großer Wert bedeutet eine schmale Breite.
            - `frequency`: die Mittelfrequenz des Dämpfungsbereichs.
            - `gain`: wird nicht verwendet.

        - `allpass`
          - : Ein Allpassfilter lässt alle Frequenzen durch, ändert jedoch
            die Phasenbeziehung zwischen den verschiedenen Frequenzen. Es implementiert einen Zweitordnungs-Allpassfilter. Bei diesem Filtertyp haben die anderen Optionen folgende Bedeutungen:
            - `Q`: die Schärfe des Phasenübergangs bei der Mittelfrequenz. Ein größerer Wert bedeutet einen schärferen Übergang und eine größere Gruppendelay.
            - `frequency`: die Frequenz, bei der der Phasenübergang im Mittelpunkt steht. Aus einer anderen Perspektive betrachtet, ist dies die Frequenz mit einer maximalen Gruppendelay.
            - `gain`: wird nicht verwendet.

    - `Q`
      - : Standardwert 1. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `detune`
      - : Standardwert 0.
    - `frequency`
      - : Standardwert 350.
    - `gain`
      - : Standardwert 0. Die Bedeutung dieser Option hängt vom Wert von `type` ab.
    - `channelCount`
      - : Stellt einen ganzzahligen Wert dar, der bestimmt, wie viele Kanäle verwendet werden, wenn [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) Verbindungen zu Eingaben des Knoten verwendet werden. (Siehe
        [`AudioNode.channelCount`](/de/docs/Web/API/AudioNode/channelCount) für weitere Informationen.) Die Nutzung und die genaue Definition hängen vom Wert von `channelCountMode` ab.
    - `channelCountMode`
      - : Stellt einen {{Glossary("Enumerated", "enumerierten")}} Wert dar, der beschreibt, wie die Kanäle zwischen den Eingängen und Ausgängen des Knotens abgeglichen werden müssen. (Siehe [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere
        Informationen, einschließlich Standardwerte.)
    - `channelInterpretation`
      - : Stellt einen enumerierten Wert dar, der die Bedeutung der Kanäle beschreibt. Diese
        Interpretation definiert, wie das [Up-Mixing und Down-Mixing](/de/docs/Web/API/Web_Audio_API/Basic_concepts_behind_Web_Audio_API#up-mixing_and_down-mixing) durchgeführt wird.
        Die möglichen Werte sind `"speakers"` oder `"discrete"`. (Siehe
        [`AudioNode.channelCountMode`](/de/docs/Web/API/AudioNode/channelCountMode) für weitere Informationen, einschließlich der Standardwerte.)

### Rückgabewert

Eine neue Instanz eines [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) Objekts.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
