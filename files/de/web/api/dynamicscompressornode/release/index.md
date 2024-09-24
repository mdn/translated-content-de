---
title: "DynamicsCompressorNode: release Eigenschaft"
short-title: release
slug: Web/API/DynamicsCompressorNode/release
l10n:
  sourceCommit: d0b23f3f26637aa405ee9ee0a0892fc6e9b742ef
---

{{ APIRef("Web Audio API") }}

Die `release`-Eigenschaft des {{ domxref("DynamicsCompressorNode") }}-Interfaces ist ein [k-rate](/de/docs/Web/API/AudioParam#k-rate) {{domxref("AudioParam")}}, das die Zeitspanne, in Sekunden, darstellt, die benötigt wird, um den Gewinn um 10 dB zu erhöhen. Es definiert, wie schnell das Signal angepasst wird, wenn dessen Lautstärke reduziert wird.

Der Standardwert der `release`-Eigenschaft ist `0.25` und kann zwischen `0` und `1` eingestellt werden.

## Wert

Ein {{domxref("AudioParam")}}.

> [!NOTE]
> Obwohl das zurückgegebene {{domxref("AudioParam")}} schreibgeschützt ist, ist der repräsentierte Wert es nicht.

## Beispiele

```js
const audioCtx = new AudioContext();
const compressor = audioCtx.createDynamicsCompressor();
compressor.release.value = 0.25;
```

Siehe [`BaseAudioContext.createDynamicsCompressor()`](/de/docs/Web/API/BaseAudioContext/createDynamicsCompressor#examples) für vollständigere Beispielcode.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der Web Audio API](/de/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
