---
title: "GPUDevice: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`limits`** schreibgeschützte Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die vom Gerät unterstützten Grenzen beschreibt. Alle Grenzwerte werden enthalten sein, und die beim Erstellen des Geräts angeforderten Grenzen (d. h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) werden in diesen Werten widergespiegelt.

> [!NOTE]
> Nicht alle Grenzen werden wie erwartet gemeldet, auch wenn sie von der zugrunde liegenden Hardware unterstützt werden. Weitere Details finden Sie unter [`GPUAdapter.limits`](/de/docs/Web/API/GPUAdapter/limits).

## Wert

Eine Instanz des [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code überprüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen, daher fügen wir, wenn der zurückgegebene Wert >= 6 ist, ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu.

Anschließend überprüfen wir, ob das erwartete Limit auf dem resultierenden Gerät festgelegt wurde, indem wir seinen Wert in der Konsole protokollieren.

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
