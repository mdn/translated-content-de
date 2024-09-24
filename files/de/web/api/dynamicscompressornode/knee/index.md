---
title: "DynamicsCompressorNode: knee-Eigenschaft"
short-title: knee
slug: Web/API/DynamicsCompressorNode/knee
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `knee`-Eigenschaft der {{ domxref("DynamicsCompressorNode") }}-Schnittstelle ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das einen Dezibelwert enthält, der die Bandbreite über dem Schwellenwert darstellt, bei der die Kurve sanft in den komprimierten Bereich übergeht.

Der Standardwert der `knee`-Eigenschaft ist `30` und kann zwischen `0` und `40` gesetzt werden.

![Beschreibt die Wirkung eines "Knee", zeigt zwei Kurven, eine für ein hartes "Knee" und die andere für ein weiches "Knee".](webaudioknee.png)

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene {{domxref("AudioParam")}} schreibgeschützt ist, ist der von ihm dargestellte Wert dies nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.knee.value = 40;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigeren Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
