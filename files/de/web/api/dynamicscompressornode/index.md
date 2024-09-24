---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
l10n:
  sourceCommit: 7a349b59aab2659f7c2ee721db05c532981b435a
---

{{ APIRef("Web Audio API") }}

Die `DynamicsCompressorNode`-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Clipping und Verzerrung zu verhindern, die auftreten können, wenn mehrere Sounds gleichzeitig abgespielt und multiplexiert werden. Dies wird häufig in der Musikproduktion und Spielaudio verwendet. `DynamicsCompressorNode` ist ein {{domxref("AudioNode")}}, das genau einen Eingang und einen Ausgang hat.

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

- {{domxref("DynamicsCompressorNode.DynamicsCompressorNode", "DynamicsCompressorNode()")}}
  - : Erstellt eine neue Instanz eines `DynamicsCompressorNode`-Objekts.

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("DynamicsCompressorNode.threshold")}} {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}-Wert, der den Dezibelwert repräsentiert, ab dem die Kompression beginnt, wirksam zu werden.
- {{domxref("DynamicsCompressorNode.knee")}} {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}-Wert, der einen Dezibelwert enthält, der den Bereich über dem Schwellenwert darstellt, in dem die Kurve sanft in den komprimierten Bereich übergeht.
- {{domxref("DynamicsCompressorNode.ratio")}} {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}-Wert, der die Menge an Änderung in dB darstellt, die im Eingang erforderlich ist, um eine 1 dB-Änderung im Ausgang zu erzielen.
- {{domxref("DynamicsCompressorNode.reduction")}} {{ReadOnlyInline}}
  - : Ein `float`, der die Menge an Verstärkungsreduktion darstellt, die der Kompressor aktuell auf das Signal anwendet.
- {{domxref("DynamicsCompressorNode.attack")}} {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}-Wert, der die benötigte Zeit in Sekunden darstellt, um die Verstärkung um 10 dB zu reduzieren.
- {{domxref("DynamicsCompressorNode.release")}} {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}-Wert, der die benötigte Zeit in Sekunden darstellt, um die Verstärkung um 10 dB zu erhöhen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
