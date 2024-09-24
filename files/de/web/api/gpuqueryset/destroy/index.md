---
title: "GPUQuerySet: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUQuerySet/destroy
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`destroy()`**-Methode der {{domxref("GPUQuerySet")}}-Schnittstelle zerstört das `GPUQuerySet`.

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

// Einige Zeit später

querySet.destroy();
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
