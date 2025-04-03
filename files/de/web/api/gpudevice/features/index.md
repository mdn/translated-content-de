---
title: "GPUDevice: features-Eigenschaft"
short-title: features
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`** schreibgeschützte Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die von dem Gerät unterstützt werden. Nur Funktionen, die während der Erstellung des Geräts angefordert wurden (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird), sind enthalten.

> [!NOTE]
> Nicht alle Funktionen werden in WebGPU in allen unterstützenden Browsern verfügbar sein, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Siehe [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features) für weitere Details.

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` zur Verfügung hat. Wenn ja, fügen wir sie in das Array von `requiredFeatures` ein und fordern ein Gerät mit dieser Funktionalitätsanforderung unter Verwendung von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an.

Wir protokollieren dann alle Elemente in der Menge `GPUDevice.features` in der Konsole. Diese Menge sollte nur ein einziges Element enthalten — `texture-compression-astc` — da dies die einzige Funktion war, die bei der Erstellung des Geräts angefordert wurde.

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
