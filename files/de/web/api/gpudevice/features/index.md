---
title: "GPUDevice: features-Eigenschaft"
short-title: features
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`features`**-Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden. Nur Funktionen, die während der Erstellung des Geräts angefordert wurden (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird), sind enthalten.

> [!NOTE]
> Nicht alle Funktionen werden in WebGPU in allen unterstützenden Browsern verfügbar sein, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Weitere Details finden Sie unter [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features).

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) über die `texture-compression-astc`-Funktion verfügt. Wenn ja, fügen wir sie in das Array von `requiredFeatures` ein und fordern ein Gerät mit dieser Funktionsanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden.

Anschließend protokollieren wir alle Elemente im `GPUDevice.features`-Set in der Konsole. Dieses Set sollte nur ein einzelnes Element enthalten — `texture-compression-astc` — da dies die einzige angeforderte Funktion war, als das Gerät erstellt wurde.

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredFeatures = [];

  if (adapter.features.has("texture-compression-astc")) {
    requiredFeatures.push("texture-compression-astc");
  }

  const device = await adapter.requestDevice({
    requiredFeatures,
  });

  device.features.forEach((value) => {
    console.log(value);
  });

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
