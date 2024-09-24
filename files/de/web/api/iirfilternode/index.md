---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: d16706e4e930c57161d473287374a9286c663147
---

{{APIRef("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein {{domxref("AudioNode")}} Prozessor, der eine allgemeine **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) Filter implementiert; dieser Filtertyp kann auch zur Implementierung von Tonkontrollgeräten und grafischen Equalizern verwendet werden. Er erlaubt die Spezifikation der Parameter der Filterantwort, damit er nach Bedarf abgestimmt werden kann.

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
      <th scope="row">Kanalzählmodus</th>
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

Typischerweise ist es am besten, die {{domxref("BiquadFilterNode")}}-Schnittstelle zu verwenden, um Filter höherer Ordnung zu implementieren. Es gibt mehrere Gründe dafür:

- Biquad-Filter sind typischerweise weniger empfindlich gegenüber numerischen Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle geraden IIR-Filter können mit {{domxref("BiquadFilterNode")}} erstellt werden.

Wenn Sie jedoch einen ungeraden IIR-Filter erstellen müssen, benötigen Sie `IIRFilterNode`. Diese Schnittstelle kann auch nützlich sein, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Knoten erstellt wurde, können seine Koeffizienten nicht mehr geändert werden.

`IIRFilterNode`s haben eine Nachlaufzeit-Referenz; sie geben weiterhin nicht-stille Audiodaten mit null Eingaben aus. Als IIR-Filter setzt sich die nicht-null Eingabe unendlich fort, kann aber in der Praxis nach einer endlichen Zeit begrenzt werden, wenn die Ausgabe null ausreichend nahekommt. Die tatsächliche Dauer hängt von den angegebenen Filterkoeffizienten ab.

## Konstruktor

- {{domxref("IIRFilterNode.IIRFilterNode", "IIRFilterNode()")}}
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanz-Eigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch Eigenschaften von ihrem Elternteil, {{domxref("AudioNode")}}_.

## Instanz-Methoden

_Erbt Methoden von ihrem Elternteil, {{domxref("AudioNode")}}. Sie hat auch die folgenden zusätzlichen Methoden:_

- {{domxref("IIRFilterNode.getFrequencyResponse", "getFrequencyResponse()")}}
  - : Verwendet die aktuellen Parameter des Filters, um die Antwort für die in dem bereitgestellten Frequenzarray angegebenen Frequenzen zu berechnen.

## Beispiele

Sie finden ein einfaches IIR-Filter-Demo live [auf Codepen](https://codepen.io/Rumyra/pen/oPxvYB/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der Konstanten `filterNumber` auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

Sehen Sie sich auch unseren [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) Leitfaden für eine vollständige Erklärung an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioNode")}}
- {{domxref("BiquadFilterNode")}}
