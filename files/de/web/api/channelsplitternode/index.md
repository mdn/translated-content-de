---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Web Audio API")}}

Das `ChannelSplitterNode`-Interface, das häufig in Verbindung mit seinem Gegenstück, [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), verwendet wird, trennt die unterschiedlichen Kanäle einer Audioquelle in eine Reihe von Mono-Ausgängen auf. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. für das Durchführen von Kanal-Mixing, bei dem der Pegel jedes Kanals separat gesteuert werden muss.

![Standard-Channel-Splitter-Knoten mit einem einzelnen Eingang, der 6 Mono-Ausgänge bildet.](webaudiosplitter.png)

Wenn Ihr `ChannelSplitterNode` immer einen einzigen Eingang hat, wird die Anzahl der Ausgänge durch einen Parameter im Konstruktor und den Aufruf von [`AudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter) definiert. Wenn kein Wert angegeben wird, ist der Standardwert `6`. Falls es weniger Kanäle im Eingang als Ausgänge gibt, sind überzählige Ausgänge stumm.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td>variabel; Standardwert ist <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Channel Count Mode</th>
      <td>
        <code>"explicit"</code>. Ältere Implementierungen, gemäß früheren
        Versionen der Spezifikation, verwenden <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Channel Count</th>
      <td>
        Festgelegt auf die Anzahl der Ausgänge. Ältere Implementierungen, gemäß
        früheren Versionen der Spezifikation, verwenden <code>2</code> (nicht
        verwendet im Standard-Count-Mode).
      </td>
    </tr>
    <tr>
      <th scope="row">Channel Interpretation</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelSplitterNode()`](/de/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode)
  - : Erstellt eine neue `ChannelSplitterNode`-Objektinstanz.

## Instanzeigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanzmethoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
