---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der eine allgemeine **[unendliche Impulsantwort](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR)-Filter implementiert; dieser Filtertyp kann auch verwendet werden, um Tonsteuergeräte und grafische Equalizer zu implementieren. Er ermöglicht es, die Parameter der Filterantwort anzugeben, sodass diese nach Bedarf angepasst werden kann.

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
      <th scope="row">Kanalanzahlmodus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td>Gleich wie am Eingang</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Typischerweise ist es am besten, die [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle zur Implementierung höherer Ordnung Filter zu verwenden. Es gibt mehrere Gründe dafür:

- Biquadratische Filter sind im Allgemeinen weniger anfällig für numerische Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle IIR-Filter gerader Ordnung können mit [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erstellt werden.

Wenn Sie jedoch einen IIR-Filter ungerader Ordnung erstellen müssen, müssen Sie `IIRFilterNode` verwenden. Diese Schnittstelle kann auch nützlich sein, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Node erstellt wurde, können Sie seine Koeffizienten nicht mehr ändern.

`IIRFilterNode`s haben eine Nachlaufzeit-Referenz; sie geben weiterhin nicht-stille Audioausgabe mit null Eingabe aus. Als IIR-Filter setzt die nicht-null Eingabe für immer fort, aber dies kann nach einer gewissen endlichen Zeit begrenzt werden, wenn die Ausgabe nahe genug an null kommt. Die tatsächlich benötigte Zeit hängt von den bereitgestellten Filterkoeffizienten ab.

## Konstruktor

- [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch Eigenschaften von ihrem Eltern-Interface, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanzmethoden

_Erbt Methoden von ihrem Eltern-Interface, [`AudioNode`](/de/docs/Web/API/AudioNode). Sie hat auch die folgenden zusätzlichen Methoden:_

- [`getFrequencyResponse()`](/de/docs/Web/API/IIRFilterNode/getFrequencyResponse)
  - : Verwendet die aktuellen Parametereinstellungen des Filters, um die Antwort für die in dem bereitgestellten Frequenzarray angegebenen Frequenzen zu berechnen.

## Beispiele

Sie finden eine einfache IIR-Filter-Demo live [auf Codepen](https://codepen.io/Rumyra/pen/oPxvYB/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige verschiedene Koeffizientenwerte für verschiedene Tiefpassfrequenzen – Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte zu überprüfen.

Siehe auch unseren [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters)-Leitfaden für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
