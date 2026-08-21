---
title: "GPUAdapter: requestAdapterInfo() Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`requestAdapterInfo()`** Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objekt erfüllt wird, das Identifikationsinformationen über einen Adapter enthält.

`requestAdapterInfo()` wurde aus der WebGPU-Spezifikation entfernt. Verwenden Sie stattdessen [`GPUAdapter.info`](/de/docs/Web/API/GPUAdapter/info), um auf Adapterinformationen zuzugreifen.

## Syntax

```js-nolint
requestAdapterInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objektinstanz erfüllt wird.

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

Nicht länger Teil der [WebGPU-Spezifikation](https://gpuweb.github.io/gpuweb/).

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
