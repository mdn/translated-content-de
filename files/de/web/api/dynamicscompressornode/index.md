---
title: DynamicsCompressorNode
slug: Web/API/DynamicsCompressorNode
l10n:
  sourceCommit: 7a349b59aab2659f7c2ee721db05c532981b435a
---

{{ APIRef("Web Audio API") }}

Die `DynamicsCompressorNode`-Schnittstelle bietet einen Kompressionseffekt, der die Lautstärke der lautesten Teile des Signals senkt, um Clipping und Verzerrungen zu verhindern, die auftreten können, wenn mehrere Klänge gleichzeitig abgespielt und gemultiplext werden. Dies wird häufig in der Musikproduktion und bei Spielgeräuschen verwendet. `DynamicsCompressorNode` ist ein [`AudioNode`](/de/docs/Web/API/AudioNode), der genau einen Eingang und einen Ausgang hat.

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
      <th scope="row">Kanalzählenmodus</th>
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
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den Dezibelwert repräsentiert, über dem die Kompression wirksam wird.
- [`DynamicsCompressorNode.knee`](/de/docs/Web/API/DynamicsCompressorNode/knee) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das einen Dezibelwert darstellt, der den Bereich über der Schwelle angibt, in dem die Kurve sanft zur komprimierten Portion übergeht.
- [`DynamicsCompressorNode.ratio`](/de/docs/Web/API/DynamicsCompressorNode/ratio) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge der Änderung in dB repräsentiert, die im Eingang für eine 1 dB Änderung im Ausgang erforderlich ist.
- [`DynamicsCompressorNode.reduction`](/de/docs/Web/API/DynamicsCompressorNode/reduction) {{ReadOnlyInline}}
  - : Ein `float`, das die derzeit vom Kompressor auf das Signal angewendete Gain-Reduktion darstellt.
- [`DynamicsCompressorNode.attack`](/de/docs/Web/API/DynamicsCompressorNode/attack) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden angibt, die benötigt wird, um den Gain um 10 dB zu reduzieren.
- [`DynamicsCompressorNode.release`](/de/docs/Web/API/DynamicsCompressorNode/release) {{ReadOnlyInline}}
  - : Ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeit in Sekunden angibt, die benötigt wird, um den Gain um 10 dB zu erhöhen.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe Beispielcode unter [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
