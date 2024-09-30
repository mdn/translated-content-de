---
title: "ConstantSourceNode: offset-Eigenschaft"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `offset`-Eigenschaft der [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)-Schnittstelle gibt ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt zurück, das den numerischen [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der von der Quelle immer zurückgegeben wird, wenn nach dem nächsten Sample gefragt wird.

> [!NOTE]
> Während das `AudioParam` namens `offset` schreibgeschützt ist, ist es die
> `value`-Eigenschaft darin nicht. Sie können also den Wert von
> `offset` ändern, indem Sie den Wert von
> `ConstantSourceNode.offset.value` festlegen:
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam)-Objekt, das den [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der für jedes
Sample von diesem Knoten zurückgegeben wird. Der Standardwert ist 1,0.

Um den aktuellen Wert des `offset`-Parameters abzurufen, greifen Sie auf die `value`-Eigenschaft des Parameters zu, wie im obigen Syntaxkasten gezeigt.

## Beispiele

Dieses Beispiel zeigt, wie man einen `ConstantSourceNode` einrichtet, sodass dessen
`offset` als Eingabe für ein Paar [`GainNode`](/de/docs/Web/API/GainNode)s verwendet wird; dieses
Code-Snippet stammt aus dem vollständigen Beispiel, das Sie unter [Controlling multiple parameters with ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) finden können.

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

Zuerst werden die Gain-Knoten erstellt und konfiguriert, und der Wert eines Schieberegler-Steuerelements wird so eingestellt, dass er dem Gain auf den beiden Knoten entspricht. Dann erstellen wir einen neuen
[`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode) und machen ihn zur Quelle für die `GainNode.gain`-Werte der beiden Gain-Knoten. Jeder dieser Werte ist auch ein
[`AudioParam`](/de/docs/Web/API/AudioParam).

Angenommen, wir haben einen Ereignishandler (für [`click`](/de/docs/Web/API/Element/click_event)-Ereignisse in diesem Fall), der darauf reagieren muss, indem er den Wert der beiden Gain-Knoten ändert. Mit der obigen Verbindung kann dies mit diesem einfachen Ereignishandler geschehen:

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

Alles, was diese Funktion tun muss, ist, den aktuellen Wert des Schieberegler-Steuerelements abzurufen, das wir verwenden, um die Gains der gepaarten Knoten zu steuern, und diesen Wert dann im `offset`-Parameter des `ConstantSourceNode` zu speichern. Dies geschieht durch Ändern des Inhalts seiner [`AudioParam.value`](/de/docs/Web/API/AudioParam/value)-Eigenschaft. Die beiden Gain-Knoten übernehmen schnell das neue Lautstärkeniveau.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [`ConstantSourceNode`](/de/docs/Web/API/ConstantSourceNode)
- [`AudioNode`](/de/docs/Web/API/AudioNode)
- [`AudioParam`](/de/docs/Web/API/AudioParam)
