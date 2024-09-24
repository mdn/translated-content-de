---
title: "GPUAdapter: Eigenschaften-Property"
short-title: Eigenschaften
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`features`** schreibgeschützte Eigenschaft der {{domxref("GPUAdapter")}}-Schnittstelle gibt ein {{domxref("GPUSupportedFeatures")}}-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Adapter unterstützt werden.

Sie sollten beachten, dass nicht alle Funktionen in allen Browsern für WebGPU verfügbar sein werden, die es unterstützen, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte aufgrund von Einschränkungen im zugrunde liegenden System, Browser oder Adapter der Fall sein. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise die Bereitstellung einer Funktion in einer Weise nicht garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browseranbieter hat möglicherweise noch keinen sicheren Weg gefunden, um die Unterstützung für diese Funktion zu implementieren, oder hat es einfach noch nicht geschafft.

Wenn Sie hoffen, eine bestimmte zusätzliche Funktion in einer WebGPU-App zu nutzen, wird gründliches Testen empfohlen.

## Wert

Eine Instanz des Objekts {{domxref("GPUSupportedFeatures")}}. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein {{domxref("GPUAdapter")}} die `texture-compression-astc`-Funktion zur Verfügung hat. Wenn ja, fügen wir sie dem Array `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung unter Verwendung von {{domxref("GPUAdapter.requestDevice()")}} an.

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
