---
title: "GPUAdapterInfo: Eigenschaft description"
short-title: description
slug: Web/API/GPUAdapterInfo/description
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die schreibgeschützte **`description`**-Eigenschaft der {{domxref("GPUAdapterInfo")}}-Schnittstelle gibt eine menschenlesbare Zeichenkette zurück, die den Adapter beschreibt, oder eine leere Zeichenkette, wenn sie nicht verfügbar ist.

## Wert

Eine Zeichenkette.

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

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.description);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
