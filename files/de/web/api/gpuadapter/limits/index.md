---
title: "GPUAdapter: limits-Eigenschaft"
short-title: limits
slug: Web/API/GPUAdapter/limits
l10n:
  sourceCommit: 89c435da452257b944b403cc9e45036fcb22590e
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`limits`**-Schreibgeschützte Eigenschaft der {{domxref("GPUAdapter")}}-Schnittstelle gibt ein {{domxref("GPUSupportedLimits")}}-Objekt zurück, das die von dem Adapter unterstützten Grenzen beschreibt.

Sie sollten beachten, dass Browser, anstatt die genauen Grenzen jeder GPU zu melden, wahrscheinlich unterschiedliche Stufenwerte verschiedener Grenzen angeben, um die verfügbaren einzigartigen Informationen zu reduzieren, die Drive-by-Fingerprinting ermöglichen. Zum Beispiel könnten die Stufen einer bestimmten Grenze 2048, 8192 und 32768 sein. Wenn das tatsächliche Limit Ihrer GPU bei 16384 liegt, wird der Browser trotzdem 8192 melden.

Da verschiedene Browser dies unterschiedlich handhaben und sich die Stufenwerte im Laufe der Zeit ändern können, ist es schwer, genaue Angaben darüber zu machen, welche Grenzwerte zu erwarten sind — gründliche Tests werden empfohlen.

## Wert

Eine {{domxref("GPUSupportedLimits")}}-Objektinstanz.

## Beispiele

Im folgenden Code überprüfen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispiel-App benötigt idealerweise 6 Bindungsgruppen. Wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zu dem `requiredLimits`-Objekt hinzu und fordern ein Gerät mit dieser Grenzanforderung unter Verwendung von {{domxref("GPUAdapter.requestDevice()")}} an:

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

  // App benötigt idealerweise 6 Bindungsgruppen, daher werden wir versuchen, zu beantragen, was die App benötigt
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
