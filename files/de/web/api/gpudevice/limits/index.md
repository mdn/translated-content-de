---
title: "GPUDevice: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`limits`** Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die von dem Gerät unterstützten Grenzen beschreibt. Alle Grenzwerte werden enthalten sein und die bei der Erstellung des Geräts angeforderten Grenzen (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) werden in diesen Werten widergespiegelt.

> [!NOTE]
> Nicht alle Grenzen werden wie erwartet gemeldet, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Details.

## Wert

Eine Instanz des Objekts [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits).

## Beispiele

Im folgenden Code überprüfen wir den `GPUAdapter.limits` Wert von `maxBindGroups`, um festzustellen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zum `requiredLimits` Objekt hinzu.

Dann überprüfen wir, ob der erwartete Grenzwert auf dem resultierenden Gerät gesetzt wurde, indem wir seinen Wert in die Konsole protokollieren.

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
