---
title: "GPUDevice: `features`-Eigenschaft"
short-title: features
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`features`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden. Nur Funktionen, die während der Erstellung des Geräts angefordert wurden (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird), sind enthalten.

> [!NOTE]
> Nicht alle Funktionen werden in allen Browsern, die WebGPU unterstützen, verfügbar sein, auch wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Weitere Details finden Sie unter [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features).

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Wenn ja, fügen wir sie dem Array `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung unter Verwendung von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an.

Wir protokollieren dann alle Elemente im `GPUDevice.features`-Set in die Konsole. Dieses Set sollte nur ein einzelnes Element enthalten — `texture-compression-astc` — da dies die einzige Funktion war, die bei der Erstellung des Geräts angefordert wurde.

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
