---
title: "GPUAdapterInfo: description-Eigenschaft"
short-title: description
slug: Web/API/GPUAdapterInfo/description
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`description`**-Eigenschaft der [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Schnittstelle gibt einen menschenlesbaren String zurück, der den Adapter beschreibt, oder einen leeren String, wenn dieser nicht verfügbar ist.

## Wert

Ein String.

## Beispiele

```js
const adapter = await navigator.gpu.requestAdapter();
if (!adapter) {
  throw Error("Couldn't request WebGPU adapter.");
}

const adapterInfo = adapter.info;
console.log(adapterInfo.description);
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
