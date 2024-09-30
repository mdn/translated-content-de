---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Die `ChannelMergerNode`-Schnittstelle wird häufig in Verbindung mit ihrem Gegenstück, dem [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), verwendet, um verschiedene mono Eingänge zu einem einzigen Ausgang zusammenzuführen. Jeder Eingang wird verwendet, um einen Kanal des Ausgangs zu füllen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. für das Kanal-Mischen, bei dem der Verstärkungsgrad separat für jeden Kanal kontrolliert werden muss.

![Standard Channel Merger Node mit sechs mono Eingängen, die kombiniert werden, um einen einzigen Ausgang zu bilden.](webaudiomerger.png)

Der `ChannelMergerNode` hat einen einzelnen Ausgang, jedoch genauso viele Eingänge wie es Kanäle zum Zusammenführen gibt; die Anzahl der Eingänge wird als Parameter seines Konstruktors und des Aufrufs von [`AudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger) definiert. Falls kein Wert angegeben wird, beträgt der Standardwert `6`.

Mit einem `ChannelMergerNode` ist es möglich, Ausgänge mit mehr Kanälen zu erstellen, als die Wiedergabe-Hardware verarbeiten kann. In diesem Fall werden bei der Signalübertragung zum [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Objekt überzählige Kanäle ignoriert.

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
      <th scope="row">Channel-Modus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Anzahl</th>
      <td><code>2</code> (wird im Standard-Zählmodus nicht benutzt)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)
  - : Erzeugt eine neue `ChannelMergerNode`-Objektinstanz.

## Instanz-Eigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
