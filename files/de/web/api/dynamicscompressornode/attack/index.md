---
title: "DynamicsCompressorNode: Eigenschaft 'attack'"
short-title: attack
slug: Web/API/DynamicsCompressorNode/attack
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `attack` Eigenschaft der {{ domxref("DynamicsCompressorNode") }} Schnittstelle ist ein {{domxref("AudioParam")}} mit [k-rate](/de/docs/Web/API/AudioParam#k-rate), das die Zeit in Sekunden darstellt, die benötigt wird, um die Verstärkung um 10 dB zu reduzieren. Sie definiert, wie schnell das Signal angepasst wird, wenn seine Lautstärke erhöht wird.

Der Standardwert der `attack` Eigenschaft ist `0.003` und kann zwischen `0` und `1` gesetzt werden.

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene {{domxref("AudioParam")}} schreibgeschützt ist, ist der dargestellte Wert dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.attack.value = 0;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für einen vollständigeren Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)