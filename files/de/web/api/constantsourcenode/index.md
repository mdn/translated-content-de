---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Das `ConstantSourceNode` Interface – ein Teil der Web Audio API – repräsentiert eine Audioquelle (basierend auf {{domxref("AudioScheduledSourceNode")}}), deren Ausgabe ein einzelner unveränderlicher Wert ist. Dies ist nützlich in Situationen, in denen Sie einen konstanten Wert von einer Audioquelle benötigen. Darüber hinaus kann es wie ein konstruierbares {{domxref("AudioParam")}} verwendet werden, indem der Wert seines {{domxref("ConstantSourceNode.offset", "offset")}} automatisiert oder ein anderer Knoten daran angeschlossen wird; siehe [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

Ein `ConstantSourceNode` hat keine Eingänge und genau einen monauralen (einzelkanaligen) Ausgang. Der Wert der Ausgabe entspricht immer dem Wert des {{domxref("ConstantSourceNode.offset", "offset")}} Parameters.

{{InheritanceDiagram}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Anzahl der Eingänge</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Anzahl der Ausgänge</th>
      <td><code>1</code></td>
    </tr>
  </tbody>
</table>

## Konstruktor

- {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}}
  - : Erstellt und gibt eine neue `ConstantSourceNode` Instanz zurück, wobei optional ein Objekt angegeben wird, das Anfangswerte für die Eigenschaften des Objekts festlegt. Alternativ können Sie die {{domxref("BaseAudioContext.createConstantSource()")}} Fabrikmethode verwenden; siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, {{domxref("AudioScheduledSourceNode")}}, und fügt die folgenden Eigenschaften hinzu:_

- {{domxref("ConstantSourceNode.offset", "offset")}}
  - : Ein {{domxref("AudioParam")}}, das den kontinuierlich ausgegebenen Wert dieser Quelle spezifiziert. Der Standardwert ist 1.0.

### Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, {{domxref("AudioScheduledSourceNode")}}._

> [!NOTE]
> Einige Browser implementieren diese Ereignisse als Teil des {{domxref("AudioScheduledSourceNode")}} Interfaces.

- {{domxref("AudioScheduledSourceNode.ended_event","ended")}}
  - : Wird ausgelöst, wenn die `ConstantSourceNode`-Daten nicht mehr abgespielt werden.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, {{domxref("AudioScheduledSourceNode")}}._

> [!NOTE]
> Einige Browser implementieren diese Methoden als Teil des {{domxref("AudioScheduledSourceNode")}} Interfaces.

- {{domxref("AudioScheduledSourceNode.start", "start()")}}
  - : Plant die Wiedergabe eines Sounds zu einer genauen Zeit.
- {{domxref("AudioScheduledSourceNode.stop", "stop()")}}
  - : Plant das Stoppen der Wiedergabe eines Sounds zu einer genauen Zeit.

## Beispiel

Im Artikel [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) wird ein `ConstantSourceNode` erstellt, um es einem Schieberegler zu ermöglichen, die Verstärkung von zwei {{domxref("GainNode")}}s zu ändern. Die drei Knoten werden wie folgt eingerichtet:

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;
volumeSliderControl.value = gainNode2.gain.value;

constantNode = context.createConstantSource();
constantNode.connect(gainNode2.gain);
constantNode.connect(gainNode3.gain);
constantNode.start();

gainNode2.connect(context.destination);
gainNode3.connect(context.destination);
```

Dieser Code beginnt mit der Erstellung der Gain-Knoten und der Einstellung dieser sowie der Lautstärkesteuerung auf 0.5. Dann wird das `ConstantSourceNode` durch Aufruf von {{domxref("BaseAudioContext/createConstantSource", "AudioContext.createConstantSource()")}} erstellt, und die Gain-Parameter jedes der beiden Gain-Knoten werden mit dem `ConstantSourceNode` verbunden. Nach dem Starten der Konstanten Quelle durch Aufrufen seiner {{domxref("AudioScheduledSourceNode.start", "start()")}} Methode, werden die beiden Gain-Knoten schließlich mit dem Audioziel (typischerweise Lautsprecher oder Kopfhörer) verbunden.

Jetzt, immer wenn sich der Wert von {{domxref("ConstantSourceNode.offset", "constantNode.offset")}} ändert, wird sich die Verstärkung sowohl von `gainNode2` als auch `gainNode3` ändern, um diesen gleichen Wert anzunehmen.

Um dieses Beispiel in Aktion zu sehen und den restlichen Code zu lesen, aus dem diese Ausschnitte stammen, siehe [Steuerung mehrerer Parameter mit ConstantSourceNode.](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("AudioScheduledSourceNode")}}
- {{domxref("AudioNode")}}
