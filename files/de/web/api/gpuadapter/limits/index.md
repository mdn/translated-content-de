---
title: "GPUAdapter: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`limits`**-Eigenschaft des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die vom Adapter unterstützten Grenzwerte beschreibt.

Sie sollten beachten, dass Browser wahrscheinlich anstelle der genauen Grenzen jeder GPU unterschiedliche Stufenwerte verschiedener Grenzen melden, um die eindeutigen Informationen zu reduzieren, die für Drive-by-Fingerprinting verfügbar sind. Zum Beispiel könnten die Stufen eines bestimmten Grenzwertes 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und die Stufenwerte sich im Laufe der Zeit ändern können, ist es schwierig, eine genaue Angabe darüber zu machen, welche Grenzwerte zu erwarten sind — gründliche Tests werden empfohlen.

## Wert

Eine Instanz des [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen, sodass wir, wenn der zurückgegebene Wert >= 6 ist, ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzufügen und ein Gerät mit dieser Grenzanforderung mittels [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) anfordern:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    requiredLimits,
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
