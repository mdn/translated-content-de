---
title: GainNode
slug: Web/API/GainNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Die `GainNode`-Schnittstelle repräsentiert eine Änderung der Lautstärke. Es handelt sich um ein {{domxref("AudioNode")}}-Audioverarbeitungsmodul, das bewirkt, dass ein bestimmter Gain auf die Eingabedaten angewendet wird, bevor diese an den Ausgang weitergeleitet werden. Ein `GainNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl von Kanälen.

Der Gain ist ein dimensionsloser Wert, der sich im Laufe der Zeit ändert und mit jeder entsprechenden Probe aller Eingangskanäle multipliziert wird. Wird dieser Wert verändert, wird der neue Gain sofort angewendet, was zu unschönen "Klicks" im resultierenden Audio führt. Um dies zu verhindern, sollte der Wert niemals direkt geändert werden, sondern die exponentiellen Interpolationsmethoden auf der {{domxref("AudioParam")}}-Schnittstelle verwendet werden.

![Der GainNode erhöht den Gain des Ausgangs.](webaudiogainnode.png)

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
      <td><code>2</code> (nicht im Standardmodus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("GainNode.GainNode", "GainNode()")}}
  - : Erstellt und liefert ein neues `GainNode`-Objekt. Alternativ kann die {{domxref("BaseAudioContext.createGain()")}}-Fabrikmethode verwendet werden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

- {{domxref("GainNode.gain")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, der die Menge an anwendbarem Gain repräsentiert. Sie müssen {{domxref("AudioParam.value")}} setzen oder die Methoden von `AudioParam` verwenden, um die Wirkung des Gains zu ändern.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für Beispielcode, der zeigt, wie ein `AudioContext` verwendet wird, um einen `GainNode` zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
