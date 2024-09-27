---
title: "GPUAdapter: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`limits`**-Eigenschaft der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die vom Adapter unterstützten Grenzen beschreibt.

Es ist zu beachten, dass Browser, anstatt die genauen Grenzen jeder GPU zu melden, wahrscheinlich unterschiedliche Tier-Werte verschiedener Grenzen melden, um die einzigartige Information zu reduzieren, die für Drive-by-Fingerprinting verfügbar ist. Zum Beispiel könnten die Tiers einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 beträgt, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Tier-Werte im Laufe der Zeit ändern können, ist es schwierig, eine genaue Angabe darüber zu machen, welche Grenzwerte zu erwarten sind — gründliches Testen wird empfohlen.

## Wert

Ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objektinstanz.

## Beispiele

Im folgenden Code fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispiel-App benötigt idealerweise 6 Bind-Gruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu und fordern mithilfe von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) ein Gerät mit dieser Limitanforderung an:

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
