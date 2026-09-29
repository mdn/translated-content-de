---
title: ConstantSourceNode
slug: Web/API/ConstantSourceNode
l10n:
  sourceCommit: 4ccd81240a6d531962fab92886631885a90bfa3c
---

{{APIRef("Web Audio API")}}

Das `ConstantSourceNode`-Interface ist Teil der Web Audio API und stellt eine Audioquelle dar, die auf [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) basiert und als Ausgabe einen einzigen, unveränderlichen Wert liefert. Es ist daher nützlich, wenn Sie einen konstanten Wert von einer Audioquelle benötigen. Außerdem kann es ähnlich wie ein instanziierbares [`AudioParam`](/de/docs/Web/API/AudioParam) verwendet werden: Sie können den Wert seines [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters automatisieren oder einen anderen Knoten damit verbinden. Weitere Informationen finden Sie unter [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

Ein `ConstantSourceNode` hat keine Eingänge und genau einen monauralen (einkanaligen) Ausgang. Der Wert der Ausgabe entspricht immer dem Wert des [`offset`](/de/docs/Web/API/ConstantSourceNode/offset)-Parameters.

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
  - : Erstellt eine neue `ConstantSourceNode`-Instanz und gibt sie zurück. Optional können Sie ein Objekt angeben, das die Anfangswerte ihrer Eigenschaften festlegt. Alternativ können Sie die Factory-Methode [`BaseAudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) verwenden; siehe [Einen AudioNode erstellen](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Instanzeigenschaften

_Erbt Eigenschaften vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode) und ergänzt die folgende Eigenschaft:_

- [`offset`](/de/docs/Web/API/ConstantSourceNode/offset) {{ReadOnlyInline}}
  - : Ein [`AudioParam`](/de/docs/Web/API/AudioParam), das den Wert festlegt, den diese Quelle kontinuierlich ausgibt. Der Standardwert ist 1.0.

### Ereignisse

_Erbt Ereignisse vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> In einigen Browsern sind diese Ereignisse als Teil des [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Interfaces implementiert.

- [`ended`](/de/docs/Web/API/AudioScheduledSourceNode/ended_event)
  - : Wird ausgelöst, wenn die Wiedergabe der Daten des `ConstantSourceNode` beendet wurde.

## Instanzmethoden

_Erbt Methoden vom übergeordneten Interface [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)._

> [!NOTE]
> In einigen Browsern sind diese Methoden als Teil des [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)-Interfaces implementiert.

- [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)
  - : Plant den Beginn der Tonwiedergabe zu einem genauen Zeitpunkt.
- [`stop()`](/de/docs/Web/API/AudioScheduledSourceNode/stop)
  - : Plant das Ende der Tonwiedergabe zu einem genauen Zeitpunkt.

## Beispiel

Im Artikel [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) wird ein `ConstantSourceNode` erstellt, damit ein einzelner Schieberegler die Verstärkung von zwei [`GainNode`](/de/docs/Web/API/GainNode)-Knoten ändern kann. Die drei Knoten werden folgendermaßen eingerichtet:

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

Dieser Code erstellt zunächst die Gain-Knoten und setzt sowohl diese als auch den Lautstärkeregler, der ihre Werte anpasst, auf 0.5. Anschließend wird der `ConstantSourceNode` durch Aufruf von [`AudioContext.createConstantSource()`](/de/docs/Web/API/BaseAudioContext/createConstantSource) erstellt und mit den Gain-Parametern der beiden Gain-Knoten verbunden. Danach wird die konstante Quelle durch Aufruf ihrer [`start()`](/de/docs/Web/API/AudioScheduledSourceNode/start)-Methode gestartet. Schließlich werden die beiden Gain-Knoten mit dem Audioausgabegerät verbunden (in der Regel Lautsprecher oder Kopfhörer).

Wenn sich nun der Wert von [`constantNode.offset`](/de/docs/Web/API/ConstantSourceNode/offset) ändert, wird die Verstärkung von `gainNode2` und `gainNode3` auf denselben Wert gesetzt.

Wenn Sie das Beispiel in Aktion sehen und den übrigen Code lesen möchten, aus dem diese Ausschnitte stammen, lesen Sie [Mehrere Parameter mit ConstantSourceNode steuern](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode).

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Die Web Audio API verwenden](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`AudioScheduledSourceNode`](/de/docs/Web/API/AudioScheduledSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
