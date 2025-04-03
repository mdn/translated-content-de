---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}

Die `ChannelSplitterNode`-Schnittstelle, oft in Verbindung mit ihrem Gegenstück [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode) verwendet, trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von Mono-Ausgängen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z. B. für das Mischen von Kanälen, bei dem der Verstärkungsgrad auf jedem Kanal separat gesteuert werden muss.

![Standard-Channel-Splitter-Node mit einem einzelnen Eingang, der in 6 Mono-Ausgänge aufgeteilt wird.](webaudiosplitter.png)

Wenn Ihr `ChannelSplitterNode` immer nur einen einzigen Eingang hat, wird die Anzahl der Ausgänge durch einen Parameter bei seinem Konstruktor und den Aufruf von [`AudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter) definiert. Falls kein Wert angegeben wird, ist der Standardwert `6`. Wenn es weniger Kanäle im Eingang als Ausgänge gibt, sind überzählige Ausgänge stumm.

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
      <th scope="row">Kanäle-Zählmodus</th>
      <td>
        <code>"explicit"</code> Ältere Implementierungen gemäß früheren Versionen
        der Spezifikation verwenden <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Kanäle</th>
      <td>
        Festgelegt auf die Anzahl der Ausgänge. Ältere Implementierungen gemäß früheren
        Versionen der Spezifikation verwenden <code>2</code> (wird im Standardzählmodus
        nicht verwendet).
      </td>
    </tr>
    <tr>
      <th scope="row">Kanalauslegung</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelSplitterNode()`](/de/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode)
  - : Erstellt eine neue Instanz des `ChannelSplitterNode`-Objekts.

## Instanz-Eigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
