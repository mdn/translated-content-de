---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: f74ea09f0510e670be74f76dc86d6e17e063d063
---

{{APIRef("Web Audio API")}}

Das Interface `ConstantSourceNode` ist Teil der Web Audio API und stellt eine Audioquelle dar, die auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert und als Ausgabe einen einzelnen, unveränderlichen Wert liefert. Es eignet sich daher für Fälle, in denen Sie einen konstanten Wert von einer Audioquelle benötigen. Außerdem kann es wie ein konstruierbarer [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet werden, indem Sie den Wert seines [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) automatisieren oder einen anderen Node damit verbinden. Siehe [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

Ein `ConstantSourceNode` hat keine Eingänge und genau einen monauralen Ausgang (einen Kanal). Der Wert des Ausgangs entspricht immer dem Wert des Parameters [`offset`](/de/docs/Web/API/ConstantSourceNode/offset).

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
  - : Erstellt eine neue `ConstantSourceNode`-Instanz und gibt sie zurück. Optional kann ein Objekt angegeben werden, das Anfangswerte für die Eigenschaften der Instanz festlegt. Alternativ können Sie die Factory-Methode [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) verwenden. Siehe [Einen AudioNode erstellen](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) und ergänzt die folgende Eigenschaft:_

- [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) {{ReadOnlyInline}}
  - : Ein [`AudioParam`](/de/docs/Web/API/AudioParam), der den Wert angibt, den diese Quelle kontinuierlich ausgibt. Der Standardwert ist 1,0.

## Instanzmethoden

_Erbt Methoden vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> In einigen Browsern sind diese Methoden als Teil des Interfaces [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) implementiert.

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant den Beginn der Tonwiedergabe zu einem genauen Zeitpunkt.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant das Ende der Tonwiedergabe zu einem genauen Zeitpunkt.

## Ereignisse

_Erbt Ereignisse vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> In einigen Browsern sind diese Ereignisse als Teil des Interfaces [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) implementiert.

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe der Daten des `ConstantSourceNode` beendet ist.

## Beispiel

Im Artikel [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) wird ein `ConstantSourceNode` erstellt, damit ein Schieberegler den Gain von zwei [`GainNode`](/de/docs/Web/API/GainNode)-Instanzen ändern kann. Die drei Nodes werden folgendermaßen eingerichtet:

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

Der Code erstellt zunächst die Gain-Nodes und setzt sowohl sie als auch den Lautstärkeregler, der ihre Werte anpasst, auf 0,5. Anschließend wird der `ConstantSourceNode` durch Aufrufen von [`AudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) erstellt. Die Gain-Parameter der beiden Gain-Nodes werden mit dem `ConstantSourceNode` verbunden. Danach wird die konstante Quelle durch Aufrufen ihrer Methode [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start) gestartet. Schließlich werden die beiden Gain-Nodes mit dem Audioausgang verbunden (üblicherweise Lautsprecher oder Kopfhörer).

Wenn sich nun der Wert von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) ändert, nehmen die Gain-Werte von `gainNode2` und `gainNode3` denselben Wert an.

Wenn Sie das Beispiel in Aktion sehen und den übrigen Code lesen möchten, aus dem diese Ausschnitte stammen, lesen Sie [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
