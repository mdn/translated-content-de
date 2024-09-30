---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der eine allgemeine **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) Filter implementiert; diese Art von Filter kann auch für die Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden. Es ermöglicht die Spezifikation der Parameter der Filterantwort, sodass diese nach Bedarf angepasst werden kann.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count Mode</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count</th>
      <td>Gleich wie beim Eingang</td>
    </tr>
    <tr>
      <th scope="row">Channel Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Typischerweise ist es am besten, das [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interface für die Implementierung von Filtern höherer Ordnung zu verwenden. Es gibt mehrere Gründe dafür:

- Biquad-Filter sind typischerweise weniger empfindlich gegenüber numerischen Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle geraden IIR-Filter können mit [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erstellt werden.

Wenn Sie jedoch einen ungeraden IIR-Filter erstellen müssen, sollten Sie `IIRFilterNode` verwenden. Diese Schnittstelle kann auch nützlich sein, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Node erstellt wurde, können die Koeffizienten nicht mehr geändert werden.

`IIRFilterNode`s haben eine Nachlaufzeitreferenz; sie geben weiterhin nicht-stille Audiodaten mit Null-Eingabe aus. Als IIR-Filter bleibt die Nicht-Null-Eingabe für immer bestehen, aber dies kann in der Praxis nach einiger endlicher Zeit begrenzt werden, wenn sich die Ausgabe dem Nullpunkt ausreichend angenähert hat. Die tatsächliche Zeit hängt von den bereitgestellten Filterkoeffizienten ab.

## Konstruktor

- [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch Eigenschaften von ihrem Eltern-Interface, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Erbt Methoden von ihrem Eltern-Interface, [`AudioNode`](/de/docs/Web/API/AudioNode). Sie hat auch die folgenden zusätzlichen Methoden:_

- [`getFrequencyResponse()`](/de/docs/Web/API/IIRFilterNode/getFrequencyResponse)
  - : Verwendet die aktuellen Parametereinstellungen des Filters, um die Antwort für die in dem bereitgestellten Frequenz-Array angegebenen Frequenzen zu berechnen.

## Beispiele

Ein einfaches IIR-Filter-Demo finden Sie [bei Codepen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält verschiedene Koeffizientenwerte für unterschiedliche Tiefpassfrequenzen — Sie können den Wert der Konstanten `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

Siehe auch unseren [IIR-Filter verwenden](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)-Leitfaden für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
