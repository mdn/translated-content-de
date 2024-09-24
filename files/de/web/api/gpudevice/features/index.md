---
title: "GPUDevice: Eigenschaften-Eigenschaft"
short-title: Eigenschaften
slug: Web/API/GPUDevice/features
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`features`** Schreibgeschützte Eigenschaft des {{domxref("GPUDevice")}}-Interfaces gibt ein {{domxref("GPUSupportedFeatures")}}-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Gerät unterstützt werden. Nur Funktionen, die während der Erstellung des Geräts angefordert wurden (d.h. wenn {{domxref("GPUAdapter.requestDevice()")}} aufgerufen wird), sind enthalten.

> [!NOTE]
> Nicht alle Funktionen werden in WebGPU in allen unterstützenden Browsern verfügbar sein, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Weitere Einzelheiten finden Sie unter {{domxref("GPUAdapter.features")}}.

## Wert

Eine Instanz eines {{domxref("GPUSupportedFeatures")}}-Objekts. Dies ist ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein {{domxref("GPUAdapter")}} die Funktion `texture-compression-astc` verfügbar hat. Falls ja, fügen wir es dem Array `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung mittels {{domxref("GPUAdapter.requestDevice()")}} an.

Wir protokollieren dann alle Elemente in der `GPUDevice.features`-Menge auf die Konsole. Diese Menge sollte nur ein einziges Element enthalten — `texture-compression-astc` — da dies die einzige Funktion war, die bei der Erstellung des Geräts angefordert wurde.

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

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
