---
title: "GPUAdapter: info-Eigenschaft"
short-title: info
slug: Web/API/GPUAdapter/info
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`info`**-Eigenschaft des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt zurück, das identifizierende Informationen über den Adapter enthält.

Der Zweck dieser Eigenschaft besteht darin, Entwicklern zu ermöglichen, spezifische Details über die GPU des Benutzers abzufragen, damit sie vorbeugend Workarounds für GPU-spezifische Fehler anwenden können oder unterschiedliche Codepfade bereitstellen, die besser zu verschiedenen GPU-Architekturen passen. Das Bereitstellen solcher Informationen birgt ein Sicherheitsrisiko — es könnte zum Fingerprinting verwendet werden — daher sollten die geteilten Informationen auf ein Minimum beschränkt werden, und verschiedene Browseranbieter werden wahrscheinlich unterschiedliche Informationstypen und -granularitäten bereitstellen.

## Wert

Eine Instanz eines [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objekts.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.vendor);
console.log(adapterInfo.architecture);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
