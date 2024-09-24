---
title: DelayNode
slug: Web/API/DelayNode
l10n:
  sourceCommit: fa1301aead2cee37516b7ad5a5ec2fb21e004227
---

{{APIRef("Web Audio API")}}

Die **`DelayNode`**-Schnittstelle repräsentiert eine [Verzögerungsleitung](https://en.wikipedia.org/wiki/Digital_delay_line); ein {{domxref("AudioNode")}} Audioverarbeitungsmodul, das eine Verzögerung zwischen dem Eingang von Daten und ihrer Weiterleitung an den Ausgang verursacht.

Ein `DelayNode` hat immer genau einen Eingang und einen Ausgang, beide mit der gleichen Anzahl von Kanälen.

![Das DelayNode fungiert als Verzögerungsleitung, hier mit einem Wert von 1s.](webaudiodelaynode.png)

Beim Erstellen eines Graphen mit einem Zyklus ist es zwingend erforderlich, mindestens einen `DelayNode` im Zyklus zu haben, andernfalls werden die am Zyklus beteiligten Knoten stummgeschaltet.

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
      <td><code>2</code> (nicht im Standardzählmodus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("DelayNode.DelayNode", "DelayNode()")}}
  - : Erstellt eine neue Instanz eines DelayNode-Objekts. Alternativ können Sie die {{domxref("BaseAudioContext.createDelay()")}}-Fabrikmethode verwenden; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seinem übergeordneten {{domxref("AudioNode")}}._

- {{domxref("DelayNode.delayTime")}} {{ReadOnlyInline}}
  - : Ein [a-rate](/de/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, das die anzuwendende Verzögerungszeit in Sekunden darstellt.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem übergeordneten {{domxref("AudioNode")}}._

## Beispiel

Sehen Sie sich das Beispiel für [`BaseAudioContext.createDelay()`](/de/docs/Web/API/BaseAudioContext/createDelay#examples) an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
