---
title: "GPUDevice: features-Eigenschaft"
short-title: features
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`**-Schreibgeschützte Eigenschaft der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das die zusätzliche Funktionalität beschreibt, die vom Gerät unterstützt wird. Nur die Funktionen, die während der Erstellung des Geräts angefordert wurden (d.h. wenn [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) aufgerufen wird), sind enthalten.

> [!NOTE]
> Nicht alle Funktionen werden in WebGPU in allen Browsern verfügbar sein, die es unterstützen, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Weitere Informationen finden Sie unter [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features).

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) über die Funktion `texture-compression-astc` verfügt. Wenn ja, fügen wir sie dem Array `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung mithilfe von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an.

Wir protokollieren dann alle Elemente im `GPUDevice.features`-Set in der Konsole. Dieses Set sollte nur einen einzigen Eintrag enthalten — `texture-compression-astc` —, da dies die einzige bei der Erstellung des Geräts angeforderte Funktion war.

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
