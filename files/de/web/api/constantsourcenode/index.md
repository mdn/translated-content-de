---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Das `ConstantSourceNode`-Interface – Teil der Web Audio API – repräsentiert eine Audioquelle (basierend auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)), deren Ausgabe ein einziger unveränderlicher Wert ist. Dies macht es nützlich für Fälle, in denen Sie einen konstanten Wert von einer Audioquelle benötigen. Darüber hinaus kann es wie ein konstruierbarer [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet werden, indem der Wert seines [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) automatisiert oder ein anderer Knoten damit verbunden wird; siehe [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

Ein `ConstantSourceNode` hat keine Eingänge und genau einen monauralen (einkanaligen) Ausgang. Der Wert des Ausgangs ist immer derselbe wie der Wert des [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters.

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

- [`ConstantSourceNode()`](/de/docs/Web/API/ConstantSourceNode/ConstantSourceNode)
  - : Erstellt und gibt eine neue Instanz von `ConstantSourceNode` zurück und spezifiziert optional ein Objekt, das Anfangswerte für die Eigenschaften des Objekts festlegt. Alternativ können Sie die [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) Factory-Methode verwenden; siehe [Erstellung eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanz-Eigenschaften

_Erbt Eigenschaften von seinem übergeordneten Interface, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), und fügt die folgenden Eigenschaften hinzu:_

- [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)
  - : Ein [`AudioParam`](/de/docs/Web/API/AudioParam), der den Wert angibt, den diese Quelle kontinuierlich ausgibt. Der Standardwert ist 1.0.

### Ereignisse

_Erbt Ereignisse von seinem übergeordneten Interface, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> Die Implementierungen dieser Ereignisse in einigen Browsern sind Teil des [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Interfaces.

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, sobald die `ConstantSourceNode`-Daten nicht mehr abgespielt werden.

## Instanz-Methoden

_Erbt Methoden von seinem übergeordneten Interface, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> Die Implementierungen dieser Methoden in einigen Browsern sind Teil des [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Interfaces.

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant die Wiedergabe eines Tons zu einer genauen Zeit.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant das Anhalten der Wiedergabe eines Tons zu einer genauen Zeit.

## Beispiel

Im Artikel [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) wird ein `ConstantSourceNode` erstellt, um einem einzigen Schieberegler die Möglichkeit zu geben, den Gain von zwei [`GainNode`](/de/docs/Web/API/GainNode)s zu ändern. Die drei Knoten werden wie folgt eingerichtet:

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

Dieser Code beginnt mit der Erstellung der Gain-Knoten, wobei diese und der Lautstärkeregler, der ihren Wert anpasst, alle auf 0,5 gesetzt sind. Dann wird das `ConstantSourceNode` durch Aufruf von [`AudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) erstellt, und die Gain-Parameter jedes der beiden Gain-Knoten werden mit dem `ConstantSourceNode` verbunden. Nachdem die konstante Quelle durch Aufrufen ihrer [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode gestartet wurde. Schließlich werden die beiden Gain-Knoten mit dem Audioziel (typischerweise Lautsprecher oder Kopfhörer) verbunden.

Jetzt, wann immer sich der Wert von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) ändert, wird das Gain bei beiden `gainNode2` und `gainNode3` so geändert, dass es denselben Wert hat.

Um dieses Beispiel in Aktion zu sehen und auch den restlichen Code zu lesen, aus dem diese Code-Snippets abgeleitet wurden, siehe [Steuerung mehrerer Parameter mit ConstantSourceNode.](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
