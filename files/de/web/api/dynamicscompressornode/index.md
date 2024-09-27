---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
l10n:
  sourceCommit: 7a349b59aab2659f7c2ee721db05c532981b435a
---

{{ APIRef("Web Audio API") }}

Das `DynamicsCompressorNode`-Interface bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Übersteuerung und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Klänge gleichzeitig abgespielt und gemischt werden. Dies wird häufig in der Musikproduktion und in Spielaudio verwendet. `DynamicsCompressorNode` ist ein [`AudioNode`](/de/docs/Web/API/AudioNode) mit genau einem Eingang und einem Ausgang.

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
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Dezibelwert darstellt, über dem die Kompression zu wirken beginnt.
- [`DynamicsCompressorNode.knee`](/de/docs/Web/API/DynamicsCompressorNode/knee) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das einen Dezibelwert darstellt, der den Bereich über dem Schwellenwert repräsentiert, wo die Kurve sanft in den komprimierten Teil übergeht.
- [`DynamicsCompressorNode.ratio`](/de/docs/Web/API/DynamicsCompressorNode/ratio) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge der Änderung in dB repräsentiert, die im Eingang erforderlich ist, um eine Änderung von 1 dB im Ausgang zu erreichen.
- [`DynamicsCompressorNode.reduction`](/de/docs/Web/API/DynamicsCompressorNode/reduction) {{ReadOnlyInline}}
  - : Ein `float`, das die derzeit vom Kompressor auf das Signal angewendete Verstärkungsreduktion darstellt.
- [`DynamicsCompressorNode.attack`](/de/docs/Web/API/DynamicsCompressorNode/attack) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden repräsentiert, die benötigt wird, um die Verstärkung um 10 dB zu verringern.
- [`DynamicsCompressorNode.release`](/de/docs/Web/API/DynamicsCompressorNode/release) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden repräsentiert, die benötigt wird, um die Verstärkung um 10 dB zu erhöhen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
