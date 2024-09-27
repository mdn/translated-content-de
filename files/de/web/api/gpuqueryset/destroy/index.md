---
title: "GPUQuerySet: destroy() Methode"
short-title: destroy()
slug: Web/API/GPUQuerySet/destroy
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`destroy()`**-Methode der
[`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)-Schnittstelle zerstört das `GPUQuerySet`.

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
