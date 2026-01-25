---
title: ChannelMergerNode
slug: Web/API/ChannelMergerNode
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("Web Audio API")}}

Die `ChannelMergerNode`-Schnittstelle, die oft zusammen mit ihrem Gegenstück, dem [`ChannelSplitterNode`](/de/docs/Web/API/ChannelSplitterNode), verwendet wird, vereint verschiedene Mono-Eingaben zu einem einzelnen Ausgang. Jede Eingabe wird verwendet, um einen Kanal des Ausgangs zu füllen. Dies ist nützlich, um auf jeden Kanal separat zuzugreifen, z. B. für das Kanal-Mixing, bei dem die Verstärkung auf jedem Kanal separat gesteuert werden muss.

![Standard-Channel-Merger-Node mit sechs Mono-Eingaben, die zu einem einzigen Ausgang kombiniert werden.](webaudiomerger.png)

Der `ChannelMergerNode` hat einen einzigen Ausgang, jedoch so viele Eingaben, wie es zu kombinierende Kanäle gibt; die Anzahl der Eingaben wird als Parameter seines Konstruktors und dem Aufruf von [`AudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger) definiert. Falls kein Wert angegeben wird, ist der Standardwert `6`.

Mit einem `ChannelMergerNode` ist es möglich, Ausgänge mit mehr Kanälen zu erzeugen, als die Render-Hardware verarbeiten kann. In diesem Fall werden beim Senden des Signals an das [`AudioContext.listener`](/de/docs/Web/API/BaseAudioContext/listener)-Objekt überzählige Kanäle ignoriert.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingaben</th>
      <td>variabel; Standardwert ist <code>6</code>.</td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgaben</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Zählmodus</th>
      <td><code>"explicit"</code></td>
    </tr>
    <tr>
      <th scope="row">Channel-Zählung</th>
      <td><code>2</code> (wird im Standard-Zählmodus nicht verwendet)</td>
    </tr>
    <tr>
      <th scope="row">Channel-Interpretation</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- [`ChannelMergerNode()`](/de/docs/Web/API/ChannelMergerNode/ChannelMergerNode)
  - : Erstellt eine neue `ChannelMergerNode`-Objektinstanz.

## Instanz-Eigenschaften

_Keine spezifische Eigenschaft; erbt Eigenschaften von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Instanz-Methoden

_Keine spezifische Methode; erbt Methoden von ihrem Elternteil, [`AudioNode`](/de/docs/Web/API/AudioNode)_.

## Beispiel

Sehen Sie sich [`BaseAudioContext.createChannelMerger()`](/de/docs/Web/API/BaseAudioContext/createChannelMerger#examples) für Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
