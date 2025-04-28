---
title: "GPUAdapter: features-Eigenschaft"
short-title: features
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`**-Eigenschaft (nur lesbar) des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das zusätzliche Funktionalitäten beschreibt, die vom Adapter unterstützt werden.

Es sollte beachtet werden, dass nicht alle Funktionen in jedem Browser, der WebGPU unterstützt, verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies kann durch Einschränkungen im zugrunde liegenden System, im Browser oder im Adapter verursacht werden. Beispielsweise:

- Das zugrunde liegende System könnte die Bereitstellung einer Funktion nicht in einer Weise garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, um die Unterstützung für diese Funktion zu implementieren, oder hat es einfach noch nicht umgesetzt.

Wenn Sie hoffen, in einer WebGPU-Anwendung eine bestimmte zusätzliche Funktion zu nutzen, wird eine gründliche Prüfung empfohlen.

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die `texture-compression-astc`-Funktion zur Verfügung hat. Wenn ja, fügen wir sie dem Array der `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden.

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
