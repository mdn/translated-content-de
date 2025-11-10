---
title: DelayNode
slug: Web/API/DelayNode
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("Web Audio API")}}

Das **`DelayNode`**-Interface repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiobearbeitungsmodul, das eine Verzögerung zwischen dem Eintreffen von Eingabedaten und deren Weiterleitung an den Ausgang verursacht.

Ein `DelayNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl an Kanälen.

![Der DelayNode fungiert als Verzögerungsleitung, hier mit einem Wert von 1s.](webaudiodelaynode.png)

Beim Erstellen eines Graphen, der einen Zyklus enthält, muss mindestens ein `DelayNode` im Zyklus vorhanden sein, sonst werden die Knoten, die am Zyklus teilnehmen, stummgeschaltet.

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
      <td><code>2</code> (nicht im Standardanzahlmodus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`DelayNode()`](/de/docs/Web/API/DelayNode/DelayNode)
  - : Erstellt eine neue Instanz eines DelayNode-Objekts. Alternativ können Sie die [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay)-Fabrikmethode verwenden; siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`DelayNode.delayTime`](/de/docs/Web/API/DelayNode/delayTime) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate)-[`AudioParam`](/de/docs/Web/API/AudioParam), der die anzuwendende Verzögerung in Sekunden angibt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Beispiel

Siehe [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
