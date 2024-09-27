---
title: "DynamicsCompressorNode: ratio-Eigenschaft"
short-title: ratio
slug: Web/API/DynamicsCompressorNode/ratio
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `ratio`-Eigenschaft der [`DynamicsCompressorNode`](/de/docs/Web/API/DynamicsCompressorNode)-Schnittstelle ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) [`AudioParam`](/de/docs/Web/API/AudioParam), das die Menge an Änderung in dB darstellt, die im Eingangspegel erforderlich ist, um eine Änderung von 1 dB im Ausgangspegel zu bewirken.

Der Standardwert der `ratio`-Eigenschaft ist `12` und kann zwischen `1` und `20` eingestellt werden.

![Beschreibt die Auswirkung verschiedener Ratios auf das Ausgangssignal](webaudioratio.png)

## Wert

Ein [`AudioParam`](/de/docs/Web/API/AudioParam).

> [!NOTE]
> Obwohl das zurückgegebene [`AudioParam`](/de/docs/Web/API/AudioParam) schreibgeschützt ist, ist der Wert, den es darstellt, nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.ratio.value = 12;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigere Beispielcodes.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
