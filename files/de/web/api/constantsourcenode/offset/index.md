---
title: "ConstantSourceNode: offset-Eigenschaft"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `offset`-Eigenschaft der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Schnittstelle gibt ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt zurück, das den numerischen [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der immer von der Quelle zurückgegeben wird, wenn der nächste Sample angefordert wird.

> [!NOTE]
> Während das `AudioParam` namens `offset` schreibgeschützt ist, ist die
> `value`-Eigenschaft darin nicht. Sie können also den Wert von
> `offset` ändern, indem Sie den Wert von
> `ConstantSourceNode.offset.value` setzen:
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt, das den [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der von diesem Knoten für jeden
Sample zurückgegeben wird. Der Standardwert ist 1.0.

Um den aktuellen Wert des `offset`-Parameters zuzugreifen, greifen Sie über die `value`-Eigenschaft des Parameters zu, wie im obigen Syntaxkasten gezeigt.

## Beispiele

Dieses Beispiel zeigt, wie man eine `ConstantSourceNode` einrichtet, sodass deren
`offset` als Eingabe für ein Paar von [`GainNode`](/de/docs/Web/API/GainNode)s verwendet wird; dieser Code-Ausschnitt stammt aus dem vollständigen Beispiel, das Sie in [Steuerung mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) finden können.

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

Zuerst werden die Gain-Knoten erstellt und konfiguriert, und der Wert eines Schiebereglers wird so gesetzt, dass er mit dem Gain auf den beiden Knoten übereinstimmt. Dann erstellen wir eine neue
[`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und machen sie zur Quelle für die `[`GainNode.gain`](/de/docs/Web/API/GainNode/gain)` Werte der beiden Gain-Knoten. Jeder dieser Werte ist ebenfalls ein
[`AudioParam`](/de/docs/Web/API/AudioParam).

Angenommen, wir haben einen Ereignishandler (für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse in diesem Fall), der darauf reagieren muss, indem er den Wert der beiden Gain-Knoten ändert. Bei der oben genannten Verknüpfung kann dies mit diesem einfachen Ereignishandler geschehen:

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

Alles, was diese Funktion tun muss, ist den aktuellen Wert der Schiebereglersteuerung abzurufen, die wir zur Steuerung der Gains der gekoppelten Knoten verwenden, und dann diesen Wert in den `offset`-Parameter der `ConstantSourceNode` zu speichern. Dies geschieht, indem der Inhalt seiner [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft geändert wird. Die beiden Gain-Knoten übernehmen schnell den neuen Lautstärkepegel.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`AudioParam`](/de/docs/Web/API/AudioParam)
