---
title: "GPUQuerySet: destroy()-Methode"
short-title: destroy()
slug: Web/API/GPUQuerySet/destroy
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`**-Methode der [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle zerstört das `GPUQuerySet`.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("Undefined")}}).

## Beispiele

```js
const querySet = device.createQuerySet({
  type: "occlusion",
  count: 32,
});

// Some time later

querySet.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
