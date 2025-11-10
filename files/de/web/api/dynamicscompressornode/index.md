---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("Web Audio API") }}

Die `DynamicsCompressorNode`-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals verringert, um das Clipping und die Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und gemischt werden. Dies wird häufig in der Musikproduktion und bei Spiel-Audio verwendet. `DynamicsCompressorNode` ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der genau einen Eingang und einen Ausgang hat.

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
      <td><code>"clamped-max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`DynamicsCompressorNode()`](/de/docs/Web/API/DynamicsCompressorNode/DynamicsCompressorNode)
  - : Erstellt eine neue Instanz eines `DynamicsCompressorNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`DynamicsCompressorNode.threshold`](/de/docs/Web/API/DynamicsCompressorNode/threshold) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Dezibelwert darstellt, oberhalb dessen die Kompression zu wirken beginnt.
- [`DynamicsCompressorNode.knee`](/de/docs/Web/API/DynamicsCompressorNode/knee) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das einen Dezibelwert enthält, der den Bereich oberhalb des Schwellenwerts darstellt, in dem die Kurve sanft in den komprimierten Bereich übergeht.
- [`DynamicsCompressorNode.ratio`](/de/docs/Web/API/DynamicsCompressorNode/ratio) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge an Veränderung in dB darstellt, die im Eingang erforderlich ist, um eine 1-dB-Veränderung im Ausgang zu bewirken.
- [`DynamicsCompressorNode.reduction`](/de/docs/Web/API/DynamicsCompressorNode/reduction) {{ReadOnlyInline}}
  - : Ein `float`, das die Menge an derzeit durch den Kompressor auf das Signal angewandter Verstärkungsreduktion darstellt.
- [`DynamicsCompressorNode.attack`](/de/docs/Web/API/DynamicsCompressorNode/attack) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden darstellt, die benötigt wird, um die Verstärkung um 10 dB zu verringern.
- [`DynamicsCompressorNode.release`](/de/docs/Web/API/DynamicsCompressorNode/release) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden darstellt, die benötigt wird, um die Verstärkung um 10 dB zu erhöhen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe Beispielcode [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
