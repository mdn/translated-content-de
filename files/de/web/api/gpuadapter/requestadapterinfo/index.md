---
title: "GPUAdapter: requestAdapterInfo() Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}{{AvailableInWorkers}}

Die **`requestAdapterInfo()`** Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo) Objekt erfüllt wird. Dieses Objekt enthält identifizierende Informationen über einen Adapter.

Der Zweck dieser Methode ist es, Entwicklern die Möglichkeit zu geben, spezifische Details über die GPU des Nutzers anzufragen, damit sie im Voraus Workarounds für GPU-spezifische Fehler anwenden oder unterschiedliche Codepfade bereitstellen können, um verschiedenen GPU-Architekturen besser gerecht zu werden. Das Bereitstellen solcher Informationen stellt jedoch ein Sicherheitsrisiko dar — sie könnten zum Fingerprinting genutzt werden — daher sollten die geteilten Informationen auf ein Minimum beschränkt werden, und verschiedene Browseranbieter werden wahrscheinlich unterschiedliche Informationstypen und -granularitäten teilen.

> [!NOTE]
> Die Spezifikation enthält einen `unmaskHints` Parameter für `requestAdapterInfo()`, der dazu gedacht ist, das oben erwähnte Sicherheitsrisiko zu mindern. Sobald er unterstützt wird, können Entwickler die Werte angeben, die sie wirklich wissen müssen, und die Benutzer erhalten eine Berechtigungsaufforderung, die sie fragt, ob sie mit der Weitergabe dieser Informationen einverstanden sind, wenn die Methode aufgerufen wird. Browseranbieter sind wahrscheinlich eher bereit, nützlichere Informationen zu teilen, wenn sie durch eine Berechtigungsaufforderung geschützt sind, da dies die Methode zu einem weniger attraktiven Ziel für Fingerprinting macht.

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
