---
title: "GPUAdapter: features-Eigenschaft"
short-title: features
slug: Web/API/GPUAdapter/features
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`features`** schreibgeschützte Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekt zurück, das die zusätzlichen Funktionen beschreibt, die vom Adapter unterstützt werden.

Sie sollten beachten, dass nicht alle Funktionen für WebGPU in allen Browsern verfügbar sind, die es unterstützen, auch wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte an Einschränkungen im zugrunde liegenden System, Browser oder Adapter liegen. Zum Beispiel:

- Das zugrunde liegende System könnte nicht garantieren, dass eine Funktion in einer Weise verfügbar gemacht wird, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, um Unterstützung für diese Funktion zu implementieren, oder hat es vielleicht noch nicht geschafft.

Wenn Sie hoffen, in einer WebGPU-Anwendung von einer bestimmten zusätzlichen Funktion zu profitieren, wird gründliches Testen empfohlen.

## Wert

Eine Instanz des [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)-Objekts. Dies ist ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt.

## Beispiele

Im folgenden Code überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die `texture-compression-astc`-Funktion verfügbar hat. Wenn dies der Fall ist, fügen wir sie dem Array der `requiredFeatures` hinzu und fordern ein Gerät mit dieser Funktionsanforderung an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden.

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
