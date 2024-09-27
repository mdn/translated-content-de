---
title: GPUAdapterInfo
slug: Web/API/GPUAdapterInfo
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUAdapterInfo`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) enthält identifizierende Informationen über einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter).

Eine Instanz eines `GPUAdapterInfo`-Objekts wird mit der Methode [`GPUAdapter.requestAdapterInfo()`](/de/docs/Web/API/GPUAdapter/requestAdapterInfo) angefordert.

{{InheritanceDiagram}}

## Instanz-Eigenschaften

- [`architecture`](/de/docs/Web/API/GPUAdapterInfo/architecture) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name der Familie oder Klasse von GPUs, zu der der Adapter gehört. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`description`](/de/docs/Web/API/GPUAdapterInfo/description) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Ein menschenlesbarer String, der den Adapter beschreibt. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`device`](/de/docs/Web/API/GPUAdapterInfo/device) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Eine herstellerspezifische Kennung für den Adapter. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.
- [`vendor`](/de/docs/Web/API/GPUAdapterInfo/vendor) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Der Name des Adapter-Herstellers. Gibt einen leeren String zurück, wenn es nicht verfügbar ist.

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
