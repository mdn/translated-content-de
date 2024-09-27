---
title: GainNode
slug: Web/API/GainNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{ APIRef("Web Audio API") }}

Das `GainNode`-Interface repräsentiert eine Änderung der Lautstärke. Es handelt sich um ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audioverarbeitungsmodul, das einen bestimmten Verstärkungswert auf die Eingangsdaten anwendet, bevor diese an den Ausgang weitergeleitet werden. Ein `GainNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl von Kanälen.

Die Verstärkung ist ein einheitenloser Wert, der sich mit der Zeit ändert und mit jedem entsprechenden Sample aller Eingabekanäle multipliziert wird. Wird dieser verändert, wird die neue Verstärkung sofort angewendet, was unästhetische 'Klicks' im resultierenden Audio verursachen kann. Um dies zu verhindern, sollte der Wert nicht direkt geändert werden, sondern die exponentiellen Interpolationsmethoden der [`AudioParam`](/de/docs/Web/API/AudioParam)-Schnittstelle verwendet werden.

![Der GainNode erhöht die Verstärkung des Ausgangs.](webaudiogainnode.png)

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
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`GainNode()`](/de/docs/Web/API/GainNode/GainNode)
  - : Erstellt und gibt ein neues `GainNode`-Objekt zurück. Alternativ können Sie die [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain)-Fabrikmethode verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

- [`GainNode.gain`](/de/docs/Web/API/GainNode/gain) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Höhe der anzuwendenden Verstärkung repräsentiert. Sie müssen [`AudioParam.value`](/de/docs/Web/API/AudioParam/value) festlegen oder die Methoden von `AudioParam` verwenden, um die Wirkung der Verstärkung zu ändern.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createGain()`](/de/docs/Web/API/BaseAudioContext/createGain#examples) für Beispielcode, der zeigt, wie man einen `AudioContext` verwendet, um ein `GainNode` zu erstellen.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
