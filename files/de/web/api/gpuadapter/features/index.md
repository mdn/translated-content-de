---
title: "GPUAdapter: features-Eigenschaft"
short-title: features
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte Eigenschaft **`features`** der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Adapter unterstützt werden.

Bitte beachten Sie, dass nicht alle Funktionen in allen Browsern, die WebGPU unterstützen, verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte an Einschränkungen im zugrunde liegenden System, Browser oder Adapter liegen. Zum Beispiel:

- Das zugrunde liegende System kann nicht garantieren, dass eine Funktion in einer Weise verfügbar gemacht wird, die mit einem bestimmten Browser kompatibel ist.
- Der Browseranbieter hat möglicherweise noch keinen sicheren Weg gefunden, um die Unterstützung für diese Funktion zu implementieren, oder hat es einfach noch nicht geschafft.

Wenn Sie hoffen, in einer WebGPU-App eine bestimmte zusätzliche Funktion nutzen zu können, wird gründliches Testen empfohlen.

## Wert

Eine Instanz eines [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekt.

## Beispiele

Im folgenden Code prüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Falls ja, fügen wir sie dem Array `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktion über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an.

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

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
