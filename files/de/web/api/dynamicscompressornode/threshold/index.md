---
title: "DynamicsCompressorNode: threshold-Eigenschaft"
short-title: threshold
slug: Web/API/DynamicsCompressorNode/threshold
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `threshold`-Eigenschaft des {{ domxref("DynamicsCompressorNode") }}-Interfaces ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das den Dezibelwert darstellt, oberhalb dessen die Kompression wirksam wird.

Der Standardwert der `threshold`-Eigenschaft ist `-24`, und er kann zwischen `-100` und `0` gesetzt werden.

![Die threshold-Eigenschaft hat keinen Einfluss auf Signale, die niedriger als ihr Wert sind, bewirkt jedoch eine Lautstärkereduzierung bei Signalen, die stärker als ihr Wert sind.](webaudiothreshold.png)

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene {{domxref("AudioParam")}} schreibgeschützt ist, ist der von ihm dargestellte Wert nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.threshold.value = -50;
```

Sehen Sie sich [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für ausführlichere Beispielcodes an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
