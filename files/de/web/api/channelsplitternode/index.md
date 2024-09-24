---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Die `ChannelSplitterNode`-Schnittstelle, die oft in Verbindung mit ihrem Gegenstück {{domxref("ChannelMergerNode")}} verwendet wird, trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von Mono-Ausgängen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. um Kanal-Mixing durchzuführen, bei dem die Verstärkung auf jedem Kanal separat gesteuert werden muss.

![Standard-Channel-Splitter-Node mit einem einzelnen Eingang, der in 6 Mono-Ausgänge aufgeteilt wird.](webaudiosplitter.png)

Wenn Ihr `ChannelSplitterNode` immer nur einen einzigen Eingang hat, wird die Anzahl der Ausgänge durch einen Parameter im Konstruktor und den Aufruf von {{domxref("BaseAudioContext/createChannelSplitter", "AudioContext.createChannelSplitter()")}} definiert. Falls kein Wert angegeben wird, ist der Standardwert `6`. Wenn es weniger Kanäle im Eingang als Ausgänge gibt, sind überzählige Ausgänge still.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td>variabel; Standard ist <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Kanalzählmodus</th>
      <td>
        <code>"explicit"</code> Ältere Implementierungen gemäß früheren
        Versionen der Spezifikation verwenden <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Kanalanzahl</th>
      <td>
        Fixiert auf die Anzahl der Ausgänge. Ältere Implementierungen gemäß
        früheren Versionen der Spezifikation verwenden <code>2</code> (im Standardzählmodus nicht verwendet).
      </td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("ChannelSplitterNode.ChannelSplitterNode()","ChannelSplitterNode()")}}
  - : Erstellt eine neue Instanz eines `ChannelSplitterNode`-Objekts.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elternteil, {{domxref("AudioNode")}}_.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, {{domxref("AudioNode")}}_.

## Beispiel

Siehe [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
