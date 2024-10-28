---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUAdapterInfo`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Eine `GPUAdapterInfo`-Objektinstanz wird über die [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info)-Eigenschaft abgerufen.

{{InheritanceDiagram}}

## Instanzeigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn er nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn er nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn sie nicht verfügbar ist.
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name des Adapterherstellers. Gibt einen leeren String zurück, wenn er nicht verfügbar ist.

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

- [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info)
- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
