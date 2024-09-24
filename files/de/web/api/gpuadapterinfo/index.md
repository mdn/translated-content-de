---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`GPUAdapterInfo`** Schnittstelle der {{domxref("WebGPU API", "WebGPU API", "", "nocode")}} enthält identifizierende Informationen über einen {{domxref("GPUAdapter")}}.

Eine Instanz eines `GPUAdapterInfo`-Objekts wird mit der {{domxref("GPUAdapter.requestAdapterInfo()")}} Methode angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- {{domxref("GPUAdapterInfo.architecture", "architecture")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- {{domxref("GPUAdapterInfo.description", "description")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine menschenlesbare Zeichenkette, die den Adapter beschreibt. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- {{domxref("GPUAdapterInfo.device", "device")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine anbieterabhängige Kennung für den Adapter. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.
- {{domxref("GPUAdapterInfo.vendor", "vendor")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name des Adapter-Anbieters. Gibt einen leeren String zurück, wenn diese Information nicht verfügbar ist.

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
  console.log(adapterInfo.architecture);
  console.log(adapterInfo.vendor);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
