---
title: "GPUBuffer: destroy()-Methode"
short-title: destroy()
slug: Web/API/GPUBuffer/destroy
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`**-Methode der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle zerstört den `GPUBuffer`.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keine ({{jsxref("Undefined")}}).

## Beispiele

```js
const output = device.createBuffer({
  size: 1000,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

// some time later

output.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
