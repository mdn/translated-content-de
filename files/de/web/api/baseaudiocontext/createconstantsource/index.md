---
title: "BaseAudioContext: Methode createConstantSource()"
short-title: createConstantSource()
slug: Web/API/BaseAudioContext/createConstantSource
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{APIRef("Web Audio API")}}

Die **`createConstantSource()`**-Eigenschaft der {{domxref("BaseAudioContext")}}-Schnittstelle erzeugt ein {{domxref("ConstantSourceNode")}}-Objekt, das eine Audioquelle darstellt, die kontinuierlich ein monaurales (einkanaliges) Tonsignal ausgibt, dessen Proben alle denselben Wert haben.

> [!NOTE]
> Der {{domxref("ConstantSourceNode.ConstantSourceNode", "ConstantSourceNode()")}}-Konstruktor ist die empfohlene Methode, um ein {{domxref("ConstantSourceNode")}} zu erstellen; siehe [Erstellen eines AudioNode](/de/docs/Web/API/AudioNode#creating_an_audionode).

## Syntax

```js-nolint
createConstantSource()
```

### Parameter

Keine.

### Rückgabewert

Eine Instanz von {{domxref('ConstantSourceNode')}}.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}
