---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{APIRef("Web Audio API")}}

Das `ConstantSourceNode`-Interface - Teil der Web Audio API - stellt eine Audioquelle dar (basierend auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)), deren Ausgabe einen einzigen unveränderlichen Wert hat. Dies ist nützlich in Fällen, in denen Sie einen konstanten Wert von einer Audioquelle benötigen. Außerdem kann es wie ein konstruierbares [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet werden, indem der Wert seines [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) automatisiert oder ein anderer Knoten damit verbunden wird; siehe [Controlling multiple parameters with ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

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
  - : Erstellt und gibt eine neue `ConstantSourceNode`-Instanz zurück, wobei optional ein Objekt angegeben wird, das Anfangswerte für die Eigenschaften des Objekts festlegt. Alternativ können Sie die [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource)-Fabrikmethode verwenden; siehe [Creating an AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften von seiner übergeordneten Schnittstelle, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode), und fügt die folgenden Eigenschaften hinzu:_

- [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)
  - : Ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den Wert angibt, den diese Quelle kontinuierlich ausgibt. Der Standardwert ist 1.0.

### Ereignisse

_Erbt Ereignisse von seiner übergeordneten Schnittstelle, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> Die Implementierung dieser Ereignisse in einigen Browsern ist Teil der [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Schnittstelle.

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, wann immer die `ConstantSourceNode`-Daten nicht mehr abgespielt werden.

## Instanzmethoden

_Erbt Methoden von seiner übergeordneten Schnittstelle, [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> Die Implementierung dieser Methoden in einigen Browsern ist Teil der [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Schnittstelle.

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant die Wiedergabe eines Tons zu einem bestimmten Zeitpunkt.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant das Beenden der Wiedergabe eines Tons zu einem bestimmten Zeitpunkt.

## Beispiel

Im Artikel [Controlling multiple parameters with ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) wird ein `ConstantSourceNode` erstellt, um zu ermöglichen, dass ein Slider die Verstärkung von zwei [`GainNode`](/de/docs/Web/API/GainNode)s ändert. Die drei Knoten sind wie folgt eingerichtet:

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

Dieser Code beginnt mit der Erstellung der Gain-Knoten und setzt sie und die Lautstärkeregelung, die ihren Wert anpasst, auf 0,5. Dann wird das `ConstantSourceNode` durch Aufruf von [`AudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) erstellt, und die Gain-Parameter jedes der beiden Gain-Knoten werden mit dem `ConstantSourceNode` verbunden. Nachdem die konstante Quelle durch Aufrufen ihrer [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode gestartet wurde, werden schließlich die beiden Gain-Knoten mit der Audioausgabe (typischerweise Lautsprecher oder Kopfhörer) verbunden.

Jetzt, wann immer sich der Wert von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) ändert, ändert sich die Verstärkung sowohl bei `gainNode2` als auch `gainNode3` zu diesem Wert.

Um dieses Beispiel in Aktion zu sehen und den Rest des Codes zu lesen, aus dem diese Schnipsel stammen, siehe [Controlling multiple parameters with ConstantSourceNode.](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
