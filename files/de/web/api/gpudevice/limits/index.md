---
title: "GPUDevice: limits Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`limits`** schreibgeschützte Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die vom Gerät unterstützten Grenzen beschreibt. Alle Grenzwerte werden einbezogen, und die während der Erstellung des Geräts angeforderten Grenzen (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) spiegeln sich in diesen Werten wider.

> [!NOTE]
> Nicht alle Grenzen werden wie erwartet gemeldet, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) für mehr Details.

## Wert

Eine Instanz des [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem `requiredLimits`-Objekt eine maximale Grenze von 6 hinzu.

Wir überprüfen dann, ob die erwartete Grenze auf dem resultierenden Gerät gesetzt wurde, indem wir dessen Wert in die Konsole protokollieren.

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
  });

  console.log(device.limits.maxBindGroups);

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
