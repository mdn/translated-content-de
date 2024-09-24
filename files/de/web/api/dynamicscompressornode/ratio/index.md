---
title: "DynamicsCompressorNode: ratio-Eigenschaft"
short-title: ratio
slug: Web/API/DynamicsCompressorNode/ratio
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die Eigenschaft `ratio` der {{ domxref("DynamicsCompressorNode") }}-Schnittstelle ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das die Menge an Änderung in dB darstellt, die im Eingang erforderlich ist, um eine 1 dB-Änderung im Ausgang zu erreichen.

Der Standardwert der `ratio`-Eigenschaft ist `12` und sie kann zwischen `1` und `20` eingestellt werden.

![Beschreibt die Wirkung verschiedener Verhältnisse auf das Ausgangssignal](webaudioratio.png)

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene {{domxref("AudioParam")}} schreibgeschützt ist, ist der Wert, den es repräsentiert, dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.ratio.value = 12;
```

Sehen Sie sich [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigeres Beispielcode an.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwenden der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
