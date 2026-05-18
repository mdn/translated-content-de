---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
l10n:
  sourceCommit: a293f02fe42b2e81240bb75edf818c164473e0b0
---

{{ APIRef("Web Audio API") }}

Das Interface `DynamicsCompressorNode` bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile eines Signals verringert.
Kompression kann helfen, Clipping und Verzerrungen zu verhindern, wenn mehrere Klänge kombiniert werden, und wird auch in der Musikproduktion und bei Spielesound für dynamische Kontrolle, Klangformung und kreative Effekte eingesetzt.
`DynamicsCompressorNode` ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), das genau einen Eingang und einen Ausgang hat.

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
      <th scope="row">Channel-Count-Modus</th>
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Anzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`DynamicsCompressorNode()`](/de/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode)
  - : Erstellt eine neue Instanz eines `DynamicsCompressorNode`-Objektes.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`DynamicsCompressorNode.threshold`](/de/docs/Web/API/DynamicsCompressorNode/threshold) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Dezibelwert darstellt, oberhalb dessen die Kompression wirksam wird.
- [`DynamicsCompressorNode.knee`](/de/docs/Web/API/DynamicsCompressorNode/knee) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das einen Dezibelwert enthält, der den Bereich oberhalb der Schwelle darstellt, in dem die Kurve sanft in den komprimierten Teil übergeht.
- [`DynamicsCompressorNode.ratio`](/de/docs/Web/API/DynamicsCompressorNode/ratio) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Änderung in dB angibt, die im Eingang erforderlich ist, um eine Änderung von 1 dB im Ausgang zu bewirken.
- [`DynamicsCompressorNode.reduction`](/de/docs/Web/API/DynamicsCompressorNode/reduction) {{ReadOnlyInline}}
  - : Ein `float`, das die Menge der momentan durch den Kompressor auf das Signal angewendeten Pegelabsenkung darstellt.
- [`DynamicsCompressorNode.attack`](/de/docs/Web/API/DynamicsCompressorNode/attack) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeitdauer in Sekunden angibt, die erforderlich ist, um den Pegel um 10 dB zu verringern.
- [`DynamicsCompressorNode.release`](/de/docs/Web/API/DynamicsCompressorNode/release) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeitdauer in Sekunden angibt, die erforderlich ist, um den Pegel um 10 dB zu erhöhen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe Beispielcode bei [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
