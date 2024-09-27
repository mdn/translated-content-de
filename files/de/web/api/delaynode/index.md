---
title: DelayNode
slug: Web/API/DelayNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

Die **`DelayNode`**-Schnittstelle repräsentiert eine [Delay-Leitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein [`AudioNode`](/de/docs/Web/API/AudioNode)-Audiomodul, das eine Verzögerung zwischen der Ankunft von Eingabedaten und deren Weiterleitung zum Ausgang verursacht.

Ein `DelayNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl an Kanälen.

![Das DelayNode wirkt als Delay-Leitung, hier mit einem Wert von 1s.](webaudiodelaynode.png)

Beim Erstellen eines Graphen mit einem Zyklus ist es zwingend erforderlich, mindestens einen `DelayNode` im Zyklus zu haben, ansonsten werden die an der Schleife beteiligten Knoten stummgeschaltet.

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
      <th scope="row">Kanalanzahl-Modus</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td><code>2</code> (nicht verwendet im Standardmodus)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`DelayNode()`](/de/docs/Web/API/DelayNode/DelayNode)
  - : Erstellt eine neue Instanz eines DelayNode-Objekts. Alternativ können Sie die Fabrikmethode [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay) verwenden; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Übernimmt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

- [`DelayNode.delayTime`](/de/docs/Web/API/DelayNode/delayTime) {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Verzögerungszeit darstellt, angegeben in Sekunden.

## Instanz-Methoden

_Keine speziellen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)._

## Beispiel

Siehe [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
