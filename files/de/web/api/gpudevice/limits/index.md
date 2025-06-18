---
title: "GPUDevice: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`limits`** des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die vom Gerät unterstützten Grenzen beschreibt. Alle Grenzwerte werden einbezogen, und die bei der Erstellung des Geräts angeforderten Grenzen (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) werden in diesen Werten reflektiert.

> [!NOTE]
> Nicht alle Grenzen werden wie erwartet gemeldet, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Details.

## Wert

Eine Instanz des [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem `requiredLimits`-Objekt ein maximales Limit von 6 hinzu.

Dann prüfen wir, ob der erwartete Grenzwert auf dem resultierenden Gerät gesetzt wurde, indem wir seinen Wert in der Konsole protokollieren.

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
