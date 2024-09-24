---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Das `ChannelMergerNode`-Interface, oft in Verbindung mit seinem Gegenstück, dem {{domxref("ChannelSplitterNode")}}, verwendet, vereint verschiedene Monoeingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. um eine Kanalmischung durchzuführen, bei der der Gain für jeden Kanal separat gesteuert werden muss.

![Standard-Channel-Merger-Node mit sechs Monoeingängen, die kombiniert werden, um einen einzelnen Ausgang zu bilden.](webaudiomerger.png)

Ein `ChannelMergerNode` hat einen einzigen Ausgang, aber so viele Eingänge, wie Kanäle zu mergen sind; die Anzahl der Eingänge wird als Parameter des Konstruktors und des Aufrufs von {{domxref("BaseAudioContext/createChannelMerger", "AudioContext.createChannelMerger()")}} definiert. Wenn kein Wert angegeben wird, ist der Standardwert `6`.

Mit einem `ChannelMergerNode` ist es möglich, Ausgänge mit mehr Kanälen zu erstellen, als die Render-Hardware verarbeiten kann. In diesem Fall werden, wenn das Signal an das {{domxref("BaseAudioContext/listener", "AudioContext.listener")}}-Objekt gesendet wird, überzählige Kanäle ignoriert.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td>variabel; Standardwert ist <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Kanalzählmodus</th>
      <td><code>"explicit"</code></td>
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

- {{domxref("ChannelMergerNode.ChannelMergerNode()", "ChannelMergerNode()")}}
  - : Erstellt eine neue Instanz des `ChannelMergerNode`-Objekts.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem übergeordneten Objekt, {{domxref("AudioNode")}}_.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem übergeordneten Objekt, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
