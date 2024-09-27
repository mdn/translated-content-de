---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Das `ChannelSplitterNode`-Interface, das häufig in Verbindung mit seinem Gegenstück, dem [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), verwendet wird, trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von Mono-Ausgängen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. um Kanal-Mixing durchzuführen, bei dem die Verstärkung auf jedem Kanal separat gesteuert werden muss.

![Standard-ChannelSplitterNode mit einem einzelnen Eingang, der in 6 Mono-Ausgänge aufgeteilt wird.](webaudiosplitter.png)

Wenn Ihr `ChannelSplitterNode` immer nur einen einzelnen Eingang hat, wird die Anzahl der Ausgänge durch einen Parameter im Konstruktor und den Aufruf von [`AudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter) definiert. Falls kein Wert angegeben wird, ist der Standardwert `6`. Wenn es weniger Kanäle im Eingang gibt als Ausgänge, sind überzählige Ausgänge stummgeschaltet.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td>variabel; Standardwert <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Channel-Zählmodus</th>
      <td>
        <code>"explicit"</code> Ältere Implementierungen entsprechen früheren Versionen
        der Spezifikation und verwenden <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Channel-Zahl</th>
      <td>
        Festgelegt auf die Anzahl der Ausgänge. Ältere Implementierungen, entsprechend früherer
        Versionen der Spezifikation, verwenden <code>2</code> (nicht im Standardzählmodus verwendet).
      </td>
    </tr>
    <tr>
      <th scope="row">Channel-Interpretation</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelSplitterNode()`](/de/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode)
  - : Erstellt eine neue Instanz eines `ChannelSplitterNode`-Objekts.

## Instanzeigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
