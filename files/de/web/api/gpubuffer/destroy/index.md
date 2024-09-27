---
title: "GPUBuffer: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUBuffer/destroy
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`**-Methode der
[`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Schnittstelle zerstört den `GPUBuffer`.

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
