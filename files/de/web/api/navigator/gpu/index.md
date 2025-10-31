---
title: "Navigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/Navigator/gpu
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}

Die schreibgeschützte **`Navigator.gpu`**-Eigenschaft gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext zurück, welcher der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist.

## Wert

Ein [`GPU`](/de/docs/Web/API/GPU)-Objekt.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU API](/de/docs/Web/API/WebGPU_API)
