---
title: "GPUDevice: features-Eigenschaft"
short-title: features
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`**-Eigenschaft des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces ist eine schreibgeschützte Eigenschaft, die ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurückgibt. Dieses Objekt beschreibt zusätzliche Funktionalitäten, die vom Gerät unterstützt werden. Es sind nur die Funktionen enthalten, die während der Erstellung des Geräts (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird) angefordert wurden.

> [!NOTE]
> Nicht alle Funktionen werden in WebGPU in allen Browsern verfügbar sein, die diese unterstützen, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Weitere Informationen finden Sie unter [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features).

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die `texture-compression-astc`-Funktion verfügbar hat. Falls ja, fügen wir es dem Array der `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung mittels [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an.

Wir protokollieren dann alle Elemente im `GPUDevice.features`-Set in der Konsole. Dieses Set sollte nur ein einziges Element enthalten — `texture-compression-astc` — da dies die einzige Funktion war, die bei der Erstellung des Geräts angefordert wurde.

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
