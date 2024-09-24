---
title: "Navigator: gpu Eigenschaft"
short-title: gpu
slug: Web/API/Navigator/gpu
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`Navigator.gpu`**-Eigenschaft gibt das {{domxref("GPU")}}-Objekt für den aktuellen Browsing-Kontext zurück, das den Einstiegspunkt für die {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}} darstellt.

## Wert

Ein {{domxref("GPU")}}-Objekt.

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

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{domxref("WebGPU_API", "WebGPU API", "", "nocode")}}
