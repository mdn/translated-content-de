---
title: GainNode
slug: Web/API/GainNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Die `GainNode`-Schnittstelle repräsentiert eine Veränderung der Lautstärke. Es handelt sich um ein [`AudioNode`](/de/docs/Web/API/AudioNode) Audioverarbeitungsmodul, das einen bestimmten Verstärkungsfaktor auf die Eingangsdaten anwendet, bevor diese an den Ausgang weitergeleitet werden. Ein `GainNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl an Kanälen.

Der Verstärkungsfaktor ist ein einheitsloser Wert, der sich mit der Zeit ändert und mit jeder entsprechenden Probe aller Eingangskanäle multipliziert wird. Wenn er verändert wird, wird der neue Verstärkungsfaktor sofort angewendet, was zu unästhetischen 'Klicks' im resultierenden Audio führen kann. Um dies zu vermeiden, sollte der Wert niemals direkt geändert werden, sondern die exponentiellen Interpolationsmethoden der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle verwendet werden.

![Der GainNode erhöht den Verstärkungsfaktor des Ausgangs.](webaudiogainnode.png)

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
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardzählmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`GainNode()`](/de/docs/Web/API/GainNode/GainNode)
  - : Erstellt und gibt ein neues `GainNode`-Objekt zurück. Alternativ können Sie die [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain) Fabrikmethode verwenden; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`GainNode.gain`](/de/docs/Web/API/GainNode/gain) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das den anzuwendenden Verstärkungsfaktor darstellt. Sie müssen [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) festlegen oder die Methoden von `AudioParam` verwenden, um den Einfluss des Verstärkungsfaktors zu ändern.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für Beispielcode, der zeigt, wie ein `AudioContext` verwendet wird, um einen `GainNode` zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
