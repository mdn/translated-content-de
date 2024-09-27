---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{APIRef("Web Audio API")}}

Das `ChannelMergerNode`-Interface, häufig in Verbindung mit seinem Gegenstück, dem [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), verwendet, kombiniert verschiedene mono Eingänge zu einem einzigen Ausgang. Jeder Eingang wird verwendet, um einen Kanal des Ausganges zu füllen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z. B. für das Mischen von Kanälen, bei dem die Verstärkung für jeden Kanal separat gesteuert werden muss.

![Standard Channel Merger Node mit sechs mono Eingängen, die zu einem einzigen Ausgang kombiniert werden.](webaudiomerger.png)

Das `ChannelMergerNode` hat einen einzigen Ausgang, aber so viele Eingänge wie Kanäle zusammengeführt werden sollen; die Anzahl der Eingänge wird als Parameter seines Konstruktors und dem Aufruf von [`AudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger) definiert. Falls kein Wert angegeben wird, beträgt der Standardwert `6`.

Mit einem `ChannelMergerNode` ist es möglich, Ausgänge mit mehr Kanälen zu erstellen, als die Wiedergabehardware verarbeiten kann. In diesem Fall, wenn das Signal an das [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Objekt gesendet wird, werden überzählige Kanäle ignoriert.

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
      <th scope="row">Channel Count Mode</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel Count</th>
      <td><code>2</code> (nicht im Standard-Channel-Count Mode verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Kanalinterpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)
  - : Erstellt eine neue `ChannelMergerNode`-Objektinstanz.

## Instanz-Eigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von seinem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Sehen Sie sich [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
