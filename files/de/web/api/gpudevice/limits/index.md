---
title: "GPUDevice: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`limits`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die von der Gerätes unterstützten Limits beschreibt. Alle Grenzwerte werden enthalten sein, und die während der Erstellung des Geräts angeforderten Limits (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) werden in diesen Werten widergespiegelt.

> [!NOTE]
> Nicht alle Limits werden wie erwartet gemeldet, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) für mehr Details.

## Wert

Eine Instanz eines [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code überprüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu.

Wir überprüfen dann, ob das erwartete Limit auf dem resultierenden Gerät festgelegt wurde, indem wir seinen Wert in die Konsole protokollieren.

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
