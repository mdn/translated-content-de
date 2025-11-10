---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("Web Audio API")}}

Das `ChannelMergerNode`-Interface, das häufig in Verbindung mit seinem Gegenteil, dem [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), verwendet wird, vereint verschiedene Mono-Eingänge zu einem einzigen Ausgang. Jeder Eingang wird genutzt, um einen Kanal des Ausgangs zu füllen. Dies ist nützlich, um auf jede der Kanäle separat zugreifen zu können, z.B. für das Kanal-Mixing, bei dem der Gain separat auf jedem Kanal gesteuert werden muss.

![Standard-Channel-Merger-Knoten mit sechs Mono-Eingängen, die zu einem einzigen Ausgang zusammengeführt werden.](webaudiomerger.png)

Der `ChannelMergerNode` hat einen einzigen Ausgang, aber so viele Eingänge, wie es Kanäle zum Zusammenführen gibt; die Anzahl der Eingänge wird als Parameter des Konstruktors und des Aufrufs von [`AudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger) definiert. Wenn kein Wert angegeben wird, beträgt der Standardwert `6`.

Mit einem `ChannelMergerNode` ist es möglich, Ausgaben mit mehr Kanälen zu erstellen, als die Wiedergabe-Hardware verarbeiten kann. In diesem Fall werden beim Signalesenden an das [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Objekt überzählige Kanäle ignoriert.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td>variabel; Standard ist <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count Mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count</th>
      <td><code>2</code> (nicht im Standardzählmodus verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)
  - : Erstellt eine neue Instanz eines `ChannelMergerNode`-Objekts.

## Instanz-Eigenschaften

_Keine spezifischen Eigenschaften; erbt Eigenschaften von seinem Elternobjekt, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Keine spezifischen Methoden; erbt Methoden von seinem Elternobjekt, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Siehe [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger#examples) für Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
