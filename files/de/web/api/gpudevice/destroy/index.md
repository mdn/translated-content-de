---
title: "GPUDevice: destroy()-Methode"
short-title: destroy()
slug: Web/API/GPUDevice/destroy
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`destroy()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle zerstört das Gerät und verhindert weitere Operationen darauf.

Beachten Sie:

- Alle derzeit im Gerätspeicher {{domxref("GPUQueue")}} eingereihten Befehle werden ausgeführt, bevor das Gerät zerstört wird.
- Alle mit dem Gerät erstellten WebGPU-Ressourcen (Puffer, Texturen usw.) werden ebenfalls zerstört.
- Alle mit dem Gerät erstellten gemappten Puffer werden deaktiviert.

## Syntax

```js-nolint
destroy()
```

### Parameter

Keine.

### Rückgabewert

Keiner ({{jsxref("undefined")}}).

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU nicht unterstützt.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Konnte keinen WebGPU-Adapter anfordern.");
  }

  let device = await adapter.requestDevice();

  // Einige Zeit später

  device.destroy();
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
