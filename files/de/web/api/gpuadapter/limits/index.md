---
title: "GPUAdapter: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`limits`**-Schreibgeschützte Eigenschaft des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Interfaces gibt ein [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekt zurück, das die von diesem Adapter unterstützten Limits beschreibt.

Es sollte beachtet werden, dass Browser anstelle der genauen Grenzen jeder GPU wahrscheinlich unterschiedliche Stufenwerte für verschiedene Limits melden, um die verfügbare eindeutige Information zur Vermeidung von Drive-by-Fingerprinting zu reduzieren. Zum Beispiel könnten die Stufen eines bestimmten Limits 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU 16384 beträgt, wird der Browser dennoch 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwierig, genaue Angaben darüber zu machen, welche Limitwerte zu erwarten sind – gründliches Testen wird empfohlen.

## Wert

Eine Instanz des [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)-Objekts.

## Beispiele

Im folgenden Code prüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispiel-App benötigt idealerweise 6 Bindgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem `requiredLimits`-Objekt ein maximales Limit von 6 hinzu und fordern ein Gerät mit dieser Limitanforderung mithilfe von [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) an:

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
