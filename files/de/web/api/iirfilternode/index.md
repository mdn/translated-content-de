---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: 5f76b99045f87349ed030bbd6a3c2e43badb3c22
---

{{APIRef("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR)-Filter implementiert. Diese Art von Filter kann auch zur Implementierung von Tonsteuergeräten und grafischen Equalizern verwendet werden. Er ermöglicht es, die Parameter der Filterantwort anzugeben, sodass sie nach Bedarf angepasst werden kann.

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
      <th scope="row">Kanalmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
      <td>Gleich wie beim Eingang</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

In der Regel ist es am besten, das [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interface zu verwenden, um höherordige Filter zu implementieren. Es gibt mehrere Gründe dafür:

- Biquad-Filter sind in der Regel weniger anfällig für numerische Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle IIR-Filter mit geradem Grad können mit [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erstellt werden.

Falls Sie jedoch einen IIR-Filter mit ungeradem Grad erstellen müssen, müssen Sie `IIRFilterNode` verwenden. Sie können dieses Interface auch nützlich finden, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Node erstellt wurde, können Sie seine Koeffizienten nicht mehr ändern.

`IIRFilterNode`s haben eine Tail-Time-Referenz; sie geben weiterhin nicht-silent Audio mit null Eingabe aus. Als IIR-Filter wird die nicht-null Eingabe für immer fortgesetzt, dies kann jedoch in der Praxis nach einer endlichen Zeit begrenzt werden, wenn die Ausgabe null ausreichend nahe kommt. Die tatsächliche Zeit, die dafür benötigt wird, hängt von den bereitgestellten Filterkoeffizienten ab.

## Konstruktor

- [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanz-Eigenschaften

_Dieses Interface hat keine eigenen Eigenschaften, erbt jedoch Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode). Es hat auch die folgenden zusätzlichen Methoden:_

- [`getFrequencyResponse()`](/de/docs/Web/API/IIRFilterNode/getFrequencyResponse)
  - : Verwendet die aktuellen Parametereinstellungen des Filters, um die Antwort für die in dem bereitgestellten Array von Frequenzen angegebenen Frequenzen zu berechnen.

## Beispiele

Ein einfaches IIR-Filter-Demo finden Sie live auf [CodePen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

Siehe auch unseren [Using IIR filters](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) Leitfaden für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
