---
title: "GPUAdapter: requestAdapterInfo() Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: 225431159da2ef74dca5984e6f07bd8c5cae4df8
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`requestAdapterInfo()`**-Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)-Objekt erfüllt wird, welches identifizierende Informationen über einen Adapter enthält.

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

  // ...
}
```

## Spezifikationen

Nicht mehr Teil der [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
