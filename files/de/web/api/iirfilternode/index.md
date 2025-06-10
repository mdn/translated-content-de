---
title: IIRFilterNode
slug: Web/API/IIRFilterNode
l10n:
  sourceCommit: 4ac938c14e06a9cf0e322fc614576f0f9819e674
---

{{APIRef("Web Audio API")}}

Die **`IIRFilterNode`**-Schnittstelle der [Web Audio API](/de/docs/Web/API/Web_Audio_API) ist ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Prozessor, der einen allgemeinen **[Infinite Impulse Response](https://en.wikipedia.org/wiki/Infinite_impulse_response)** (IIR)-Filter implementiert; dieser Filtertyp kann auch verwendet werden, um Klangregelgeräte und grafische Equalizer zu implementieren. Sie ermöglicht es, die Parameter der Filterantwort zu spezifizieren, sodass sie je nach Bedarf angepasst werden kann.

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
      <td>Gleich wie beim Eingang</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

Typischerweise ist es am besten, die [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)-Schnittstelle zu verwenden, um höherwertige Filter zu implementieren. Dafür gibt es mehrere Gründe:

- Biquad-Filter sind typischerweise weniger anfällig für numerische Eigenheiten.
- Die Filterparameter von Biquad-Filtern können automatisiert werden.
- Alle gerade geordneten IIR-Filter können mit [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode) erstellt werden.

Wenn Sie jedoch einen ungerade geordneten IIR-Filter erstellen müssen, müssen Sie `IIRFilterNode` verwenden. Diese Schnittstelle kann auch nützlich sein, wenn Sie keine Automatisierung benötigen oder aus anderen Gründen.

> [!NOTE]
> Sobald der Knoten erstellt wurde, können Sie seine Koeffizienten nicht mehr ändern.

`IIRFilterNode`s haben eine Tail-Time-Referenz; sie geben weiterhin nicht-stille Audiodaten mit Null-Eingang aus. Als IIR-Filter setzt sich der nicht-null Input theoretisch unendlich fort, aber dies kann in der Praxis nach einer begrenzten Zeit begrenzt werden, wenn die Ausgabe nahe genug an Null herangekommen ist. Die tatsächliche Dauer hängt von den bereitgestellten Filterkoeffizienten ab.

## Konstruktor

- [`IIRFilterNode()`](/de/docs/Web/API/IIRFilterNode/IIRFilterNode)
  - : Erstellt eine neue Instanz eines IIRFilterNode-Objekts.

## Instanzeigenschaften

_Diese Schnittstelle hat keine eigenen Eigenschaften; sie erbt jedoch Eigenschaften von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanzmethoden

_Erbt Methoden von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode). Sie hat auch die folgenden zusätzlichen Methoden:_

- [`getFrequencyResponse()`](/de/docs/Web/API/IIRFilterNode/getFrequencyResponse)
  - : Nutzt die aktuellen Parametereinstellungen des Filters, um die Antwort für die in dem bereitgestellten Frequenzarray angegebenen Frequenzen zu berechnen.

## Beispiele

Sie finden eine [einfache IIR-Filter-Demo live](https://mdn.github.io/webaudio-examples/iirfilter-node/). Sehen Sie sich auch den [Quellcode auf GitHub](https://github.com/mdn/webaudio-examples/tree/main/iirfilter-node) an. Es enthält einige verschiedene Koeffizientenwerte für verschiedene Tiefpassfrequenzen — Sie können den Wert der `filterNumber` Konstante auf einen Wert zwischen 0 und 3 ändern, um die verschiedenen verfügbaren Effekte auszuprobieren.

Siehe auch unseren [Leitfaden zur Verwendung von IIR-Filtern](/de/docs/Web/API/Web_Audio_API/Using_IIR_filters) für eine vollständige Erklärung.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`BiquadFilterNode`](/de/docs/Web/API/BiquadFilterNode)
