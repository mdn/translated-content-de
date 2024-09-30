---
title: "GPUAdapter: features-Eigenschaft"
short-title: features
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`** Eigenschaft des schreibgeschützten [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalität beschreibt, die vom Adapter unterstützt wird.

Es sollte beachtet werden, dass nicht alle Funktionen in WebGPU in allen unterstützenden Browsern verfügbar sein werden, selbst wenn diese Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte auf Einschränkungen des zugrunde liegenden Systems, des Browsers oder des Adapters zurückzuführen sein. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise die Bereitstellung einer Funktion auf eine Weise garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browseranbieter hat möglicherweise keinen sicheren Weg gefunden, um die Unterstützung für diese Funktion zu implementieren, oder hat es einfach noch nicht geschafft.

Wenn Sie hoffen, eine bestimmte zusätzliche Funktion in einer WebGPU-Anwendung nutzen zu können, sind gründliche Tests ratsam.

## Wert

Ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objektinstanz. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Falls ja, fügen wir es in das Array der `requiredFeatures` ein und fordern ein Gerät mit dieser Funktionsanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden.

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
