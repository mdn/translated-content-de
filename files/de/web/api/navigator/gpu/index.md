---
title: "Navigator: gpu-Eigenschaft"
short-title: gpu
slug: Web/API/Navigator/gpu
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`Navigator.gpu`**-Eigenschaft ist schreibgeschützt und liefert das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Browsing-Kontext, welches der Einstiegspunkt für die [WebGPU API](/de/docs/Web/API/WebGPU_API) ist.

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
