---
title: ChannelSplitterNode
slug: Web/API/ChannelSplitterNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Die `ChannelSplitterNode`-Schnittstelle, die häufig in Verbindung mit ihrem Gegenstück, dem [`ChannelMergerNode`](/de/docs/Web/API/ChannelMergerNode), verwendet wird, trennt die verschiedenen Kanäle einer Audioquelle in eine Reihe von Mono-Ausgängen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z.B. um Kanalmixing durchzuführen, bei dem die Verstärkung für jeden Kanal separat gesteuert werden muss.

![Standard-Kanalsplitter-Knoten mit einem einzelnen Eingang, der in 6 Mono-Ausgänge unterteilt wird.](webaudiosplitter.png)

Wenn Ihr `ChannelSplitterNode` immer einen einzigen Eingang hat, wird die Anzahl der Ausgänge durch einen Parameter in seinem Konstruktor und den Aufruf von [`AudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter) definiert. Falls kein Wert angegeben wird, beträgt der Standardwert `6`. Wenn es weniger Kanäle im Eingang gibt als Ausgänge, sind die zusätzlichen Ausgänge lautlos.

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
      <th scope="row">Channel count mode</th>
      <td>
        <code>"explicit"</code> Ältere Implementierungen gemäß früheren
        Versionen der Spezifikation verwenden <code>"max"</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Channel count</th>
      <td>
        Festgelegt auf die Anzahl der Ausgänge. Ältere Implementierungen
        gemäß früheren Versionen der Spezifikation verwenden <code>2</code> (nicht
        verwendet im Standardzählmodus).
      </td>
    </tr>
    <tr>
      <th scope="row">Channel interpretation</th>
      <td><code>"discrete"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelSplitterNode()`](/de/docs/Web/API/ChannelSplitterNode/ChannelSplitterNode)
  - : Erstellt eine neue `ChannelSplitterNode`-Objektinstanz.

## Instanzeigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanzmethoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Sehen Sie sich [`BaseAudioContext.createChannelSplitter()`](/de/docs/Web/API/BaseAudioContext/createChannelSplitter#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
