---
title: "DynamicsCompressorNode: release-Eigenschaft"
short-title: release
slug: Web/API/DynamicsCompressorNode/release
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `release`-Eigenschaft der [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Schnittstelle ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Zeitspanne in Sekunden darstellt, die benötigt wird, um den Gain um 10 dB zu erhöhen. Sie definiert, wie schnell das Signal angepasst wird, wenn dessen Lautstärke verringert wird.

Der Standardwert der `release`-Eigenschaft ist `0.25` und sie kann zwischen `0` und `1` eingestellt werden.

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene [`AudioParam`](/de/docs/Web/API/AudioParam) schreibgeschützt ist, ist der Wert, den es repräsentiert, dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.release.value = 0.25;
```

Sehen Sie sich die [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigeren Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
