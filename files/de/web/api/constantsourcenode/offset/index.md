---
title: "ConstantSourceNode: offset-Eigenschaft"
short-title: offset
slug: Web/API/ConstantSourceNode/offset
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte `offset`-Eigenschaft der {{ domxref("ConstantSourceNode") }}-Schnittstelle gibt ein {{domxref("AudioParam")}}-Objekt zurück, das den numerischen [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der von der Quelle immer zurückgegeben wird, wenn nach der nächsten Probe gefragt wird.

> [!NOTE]
> Während das `AudioParam` namens `offset` schreibgeschützt ist, ist es die
> `value`-Eigenschaft darin nicht. Sie können also den Wert von
> `offset` ändern, indem Sie den Wert von
> `ConstantSourceNode.offset.value` setzen:
>
> ```js
> myConstantSourceNode.offset.value = newValue;
> ```

## Wert

Ein {{ domxref("AudioParam") }}-Objekt, das den [a-rate](/de/docs/Web/API/AudioParam#a-rate)-Wert angibt, der von diesem Knoten für jede Probe zurückgegeben wird. Der Standardwert ist 1,0.

Um den aktuellen Wert des `offset`-Parameters zuzugreifen, greifen Sie auf die `value`-Eigenschaft des Parameters zu, wie im obigen Syntaxfeld gezeigt.

## Beispiele

Dieses Beispiel zeigt, wie Sie einen `ConstantSourceNode` einrichten, sodass sein
`offset` als Eingabe für ein Paar von {{domxref("GainNode")}}s verwendet wird; dieses Snippet ist aus dem vollständigen Beispiel entnommen, das Sie in [Steuern mehrerer Parameter mit ConstantSourceNode](/de/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode) finden können.

```js
gainNode2 = context.createGain();
gainNode3 = context.createGain();
gainNode2.gain.value = gainNode3.gain.value = 0.5;

volumeSliderControl.value = gainNode2.gain.value;

constantSource = context.createConstantSource();
constantSource.connect(gainNode2.gain);
constantSource.connect(gainNode3.gain);
```

Zuerst werden die Gain-Nodes erstellt und konfiguriert, und der Wert eines Schiebereglers wird so festgelegt, dass er dem Gain der beiden Nodes entspricht. Dann erstellen wir einen neuen
{{domxref("ConstantSourceNode")}} und verwenden ihn als Quelle für die {{domxref("GainNode.gain")}}-Werte der beiden Gain-Nodes. Jeder dieser Werte ist ebenfalls ein
{{domxref("AudioParam")}}.

Angenommen, wir haben einen Ereignishandler (in diesem Fall für {{domxref("Element/click_event", "click")}}-Ereignisse), der auf die Änderung der Werte der beiden Gain-Nodes reagieren muss. Mit der oben genannten Verknüpfung kann dies mit diesem einfachen Ereignishandler erfolgen:

```js
function handleClickEvent(event) {
  constantSource.offset.value = volumeSliderControl.value;
}
```

Alles, was diese Funktion tun muss, ist, den aktuellen Wert des Schiebereglers abzurufen, den wir zum Steuern der Gaains der verbundenen Nodes verwenden, und dann diesen Wert im `offset`-Parameter des `ConstantSourceNode` zu speichern. Dies erfolgt durch Ändern des Inhalts seiner {{domxref("AudioParam.value")}}-Eigenschaft. Die beiden Gain-Nodes übernehmen schnell die neue Lautstärke.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- {{domxref("ConstantSourceNode")}}
- {{domxref("AudioNode")}}
- {{domxref("AudioParam")}}
