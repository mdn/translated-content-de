---
title: "GPUAdapter: requestAdapterInfo()-Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die Methode **`requestAdapterInfo()`** des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt erfüllt wird, das identifizierende Informationen über einen Adapter enthält.

`requestAdapterInfo()` wurde aus der WebGPU-Spezifikation entfernt. Verwenden Sie stattdessen [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info), um auf Adapterinformationen zuzugreifen.

## Syntax

```js-nolint
requestAdapterInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekts erfüllt wird.

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
  console.log(adapterInfo.vendor);
  console.log(adapterInfo.architecture);

  // …
}
```

## Spezifikationen

Nicht mehr Teil der [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
