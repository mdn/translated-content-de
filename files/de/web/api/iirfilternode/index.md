---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Das **`IIRFilterNode`**-Interface der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR) Filter implementiert; dieser Filtertyp kann auch zur Implementierung von Klangregelgeräten und grafischen Equalizern verwendet werden. Es ermöglicht, die Parameter der Filterantwort festzulegen, sodass es nach Bedarf abgestimmt werden kann.

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
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td>Gleiche wie am Eingang</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Typischerweise ist es am besten, das [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Interface zur Implementierung höherwertiger Filter zu verwenden. Dafür gibt es mehrere Gründe:

- Biquad-Filter sind typischerweise weniger anfällig für numerische Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle gerade-ordnigen IIR-Filter können mittels [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erstellt werden.

Wenn Sie jedoch einen ungerade-ordnigen IIR-Filter erstellen müssen, müssen Sie `IIRFilterNode` verwenden. Sie könnten dieses Interface auch nützlich finden, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Node erstellt wurde, können die Koeffizienten nicht mehr geändert werden.

`IIRFilterNode`s besitzen eine Nachlaufzeit-Referenz; sie geben nicht-stille Audiodaten mit null Eingabe weiter. Als IIR-Filter setzt sich die nicht-nulllige Eingabe unendlich fort, kann jedoch in der Praxis nach einer endlichen Zeit begrenzt werden, wenn der Ausgang nahe genug an null herangekommen ist. Die tatsächliche Dauer hängt von den bereitgestellten Filterkoeffizienten ab.

## Konstruktor

- [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanz-Eigenschaften

_Dieses Interface hat keine eigenen Eigenschaften; es erbt jedoch Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode). Es besitzt auch die folgenden zusätzlichen Methoden:_

- [`getFrequencyResponse()`](/de/docs/Web/API/IIRFilterNode/getFrequencyResponse)
  - : Verwendet die aktuellen Parametereinstellungen des Filters, um die Antwort für Frequenzen zu berechnen, die im bereitgestellten Frequenzarray angegeben sind.

## Beispiele

Sie finden eine [einfache IIR-Filter-Demo live](https://mdn.github.io/webaudio-examples/iirfilter-node/). Siehe auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node). Es enthält einige unterschiedliche Koeffizientenwerte für verschiedene Tiefpassfrequenzen – Sie können den Wert der `filterNumber`-Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

Siehe auch unser [Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) Leitfaden für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
