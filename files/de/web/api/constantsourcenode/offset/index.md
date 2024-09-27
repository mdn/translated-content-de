---
title: "ConstantSourceNode: offset-Eigenschaft"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `offset`-Eigenschaft der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
Schnittstelle gibt ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt zurück, das den numerischen [a-rate](/de/docs/Web/API/AudioParam#a-rate) Wert angibt, der immer vom Quellobjekt zurückgegeben wird, wenn der nächste Sample angefordert wird.

> [!NOTE]
> Während das `AudioParam` namens `offset` schreibgeschützt ist, ist das
> darin enthaltene `value`-Attribut nicht. So können Sie den Wert von
> `offset` ändern, indem Sie den Wert von
> `ConstantSourceNode.offset.value` setzen:
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt, das den [a-rate](/de/docs/Web/API/AudioParam#a-rate) Wert angibt, der für jeden
Sample von diesem Knoten zurückgegeben wird. Der Standardwert ist 1.0.

Um den aktuellen Wert des `offset`-Parameters abzurufen, greifen Sie auf das `value`-Attribut des Parameters zu, wie im obigen Syntaxkasten gezeigt.

## Beispiele

Dieses Beispiel zeigt, wie ein `ConstantSourceNode` eingerichtet wird, sodass sein
`offset` als Eingabe für ein Paar von [`GainNode`](/de/docs/Web/API/GainNode)s verwendet wird; dieser
Schnipsel leitet sich aus dem vollständigen Beispiel ab, das Sie in [Controlling multiple parameters with ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) finden können.

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

Zuerst werden die Gain-Knoten erstellt und konfiguriert, und der Wert eines Schiebereglers wird so eingestellt,
dass er dem Gain auf den beiden Knoten entspricht. Dann erstellen wir einen neuen
[`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und machen ihn zur Quelle für die Gain-Werte der beiden Gain-Knoten
[`GainNode.gain`](/de/docs/Web/API/GainNode/gain). Jeder dieser Werte ist ebenfalls ein
[`AudioParam`](/de/docs/Web/API/AudioParam).

Angenommen, wir haben einen Ereignishandler (für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse in diesem Fall), der auf Änderungen der beiden Gain-Knoten reagieren muss. Mit der obigen Verknüpfung kann das mit diesem einfachen Ereignishandler geschehen:

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

Alles, was diese Funktion tun muss, ist den aktuellen Wert des Schiebereglers abzurufen, den wir zur Steuerung der Gains der gekoppelten Knoten verwenden, und diesen Wert dann im `offset`-Parameter des `ConstantSourceNode` zu speichern. Das geschieht, indem der Inhalt des [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Attributs geändert wird. Die beiden Gain-Knoten übernehmen schnell den neuen Lautstärkepegel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Using the Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`AudioParam`](/de/docs/Web/API/AudioParam)
