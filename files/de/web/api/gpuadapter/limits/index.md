---
title: "GPUAdapter: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die schreibgeschützte **`limits`**-Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die durch den Adapter unterstützten Grenzen beschreibt.

Sie sollten beachten, dass Browser, anstatt die genauen Grenzen jeder GPU zu melden, wahrscheinlich verschiedene Stufenwerte unterschiedlicher Grenzen angeben, um die einzigartige Information zu reduzieren, die für Drive-by-Fingerprinting verfügbar ist. Beispielsweise könnten die Stufen einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 ist, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwierig, einen genauen Überblick darüber zu geben, welche Grenzwerte zu erwarten sind — gründliches Testen wird empfohlen.

## Wert

Eine Instanz eines [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Beispielcode fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um festzustellen, ob er gleich oder größer als 6 ist. Unser theoretisches Anwendungsbeispiel benötigt idealerweise 6 Bind-Gruppen, daher fügen wir, wenn der zurückgegebene Wert >= 6 ist, ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu und fordern ein Gerät mit diesem Limit an, indem wir [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) verwenden:

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
