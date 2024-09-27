---
title: "GPUAdapter: requestAdapterInfo() Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`requestAdapterInfo()`** Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objekt erfüllt wird, das identifizierende Informationen zu einem Adapter enthält.

Die Absicht hinter dieser Methode ist es, Entwicklern die Möglichkeit zu geben, spezifische Details über die GPU des Nutzers abzufragen, damit sie proaktiv Umgehungslösungen für GPU-spezifische Fehler anwenden oder unterschiedliche Codepfade bereitstellen können, um besser zu verschiedenen GPU-Architekturen zu passen. Diese Informationen bereitzustellen, stellt jedoch ein Sicherheitsrisiko dar — sie könnten für das Fingerprinting verwendet werden — daher sollten die geteilten Informationen auf ein Minimum beschränkt werden, und verschiedene Browseranbieter werden wahrscheinlich unterschiedliche Arten und Granularitäten von Informationen teilen.

> [!NOTE]
> Die Spezifikation beinhaltet einen `unmaskHints` Parameter für `requestAdapterInfo()`, der das oben genannte Sicherheitsrisiko mindern soll. Sobald er unterstützt wird, können Entwickler angeben, welche Werte sie wirklich wissen müssen, und Nutzer erhalten eine Berechtigungsaufforderung, die sie fragt, ob sie bereit sind, diese Informationen zu teilen, wenn die Methode aufgerufen wird. Browseranbieter werden wahrscheinlich nützlichere Informationen teilen, wenn diese durch eine Berechtigungsaufforderung geschützt sind, da dies die Methode zu einem weniger geeigneten Ziel für das Fingerprinting macht.

## Syntax

```js-nolint
requestAdapterInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objektinstanz erfüllt wird.

## Beispiele

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const adapterInfo = await adapter.requestAdapterInfo();
  console.log(adapterInfo.vendor);
  console.log(adapterInfo.architecture);

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
