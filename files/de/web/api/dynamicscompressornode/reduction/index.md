---
title: "DynamicsCompressorNode: reduction-Eigenschaft"
short-title: reduction
slug: Web/API/DynamicsCompressorNode/reduction
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ APIRef("Web Audio API") }}

Die schreibgeschützte Eigenschaft **`reduction`** des [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Interfaces ist ein Float, der die Menge an derzeit vom Kompressor auf das Signal angewandter Verstärkungsreduktion darstellt.

Für Messzwecke vorgesehen, gibt es einen Wert in dB zurück, oder `0` (keine Verstärkungsreduktion), wenn kein Signal in den `DynamicsCompressorNode` eingespeist wird. Der Wertebereich liegt zwischen `-20` und `0` (in dB).

## Wert

Ein Float.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
const myReduction = compressor.reduction;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigeren Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
