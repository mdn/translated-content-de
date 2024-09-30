---
title: DelayNode
slug: Web/API/DelayNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingangsdaten und deren Weiterleitung an den Ausgang verursacht.

Ein `DelayNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl von Kanälen.

![Der DelayNode fungiert als Verzögerungsleitung, hier mit einem Wert von 1s.](webaudiodelaynode.png)

Wenn Sie ein Graph erstellen, der einen Zyklus enthält, muss mindestens ein `DelayNode` im Zyklus vorhanden sein, andernfalls werden die am Zyklus beteiligten Knoten stummgeschaltet.

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
      <td><code>2</code> (nicht verwendet im Standardanzahlmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanainterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`DelayNode()`](/de/docs/Web/API/DelayNode/DelayNode)
  - : Erstellt eine neue Instanz eines DelayNode-Objekts. Alternativ können Sie die [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay) Fabrikmethode verwenden; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`DelayNode.delayTime`](/de/docs/Web/API/DelayNode/delayTime) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die anzuwendende Verzögerung, in Sekunden angegeben, darstellt.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Beispiel

Siehe [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
