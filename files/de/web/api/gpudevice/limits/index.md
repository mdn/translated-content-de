---
title: "GPUDevice: limits Eigenschaft"
short-title: limits
slug: Web/API/GPUDevice/limits
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`limits`** schreibgeschützte Eigenschaft der {{domxref("GPUDevice")}} Schnittstelle gibt ein {{domxref("GPUSupportedLimits")}} Objekt zurück, das die vom Gerät unterstützten Grenzen beschreibt. Alle Grenzwerte werden einbezogen, und die während der Erstellung des Geräts angeforderten Grenzen (d. h. wenn {{domxref("GPUAdapter.requestDevice()")}} aufgerufen wird) werden in diesen Werten reflektiert.

> [!NOTE]
> Nicht alle Grenzen werden wie erwartet gemeldet, auch wenn sie von der zugrunde liegenden Hardware unterstützt werden. Weitere Einzelheiten finden Sie unter {{domxref("GPUAdapter.limits")}}.

## Wert

Eine Instanz des {{domxref("GPUSupportedLimits")}} Objekts.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits` Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungen, daher fügen wir ein maximales Limit von 6 zum Objekt `requiredLimits` hinzu, wenn der zurückgegebene Wert >= 6 ist.

Anschließend überprüfen wir, ob das erwartete Limit auf dem resultierenden Gerät gesetzt wurde, indem wir seinen Wert in die Konsole protokollieren.

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

  // App benötigt idealerweise 6 Bindungen, also versuchen wir, das zu beantragen, was die App benötigt
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
