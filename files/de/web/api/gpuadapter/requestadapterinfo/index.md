---
title: "GPUAdapter: requestAdapterInfo()-Methode"
short-title: requestAdapterInfo()
slug: Web/API/GPUAdapter/requestAdapterInfo
l10n:
  sourceCommit: c28529c0cc75eb5d2de857c923f0a1ebd5145313
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{deprecated_header}}{{non-standard_header}}

Die **`requestAdapterInfo()`**-Methode der {{domxref("GPUAdapter")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das bei Erfüllung ein {{domxref("GPUAdapterInfo")}}-Objekt enthält, das identifizierende Informationen über einen Adapter umfasst.

Der Zweck dieser Methode besteht darin, Entwicklern zu ermöglichen, spezifische Details über die GPU des Benutzers anzufordern, damit sie präventiv Workarounds für GPU-spezifische Bugs anwenden oder unterschiedliche Codepfade anbieten können, um besser auf verschiedene GPU-Architekturen einzugehen. Die Bereitstellung solcher Informationen stellt jedoch ein Sicherheitsrisiko dar — sie könnte zum Fingerprinting verwendet werden — daher sollen die gemeinsam genutzten Informationen auf das Minimum beschränkt werden, und verschiedene Browseranbieter werden voraussichtlich unterschiedliche Informationsarten und -granularitäten bereitstellen.

> [!NOTE]
> Die Spezifikation enthält einen `unmaskHints`-Parameter für `requestAdapterInfo()`, der dazu gedacht ist, das oben erwähnte Sicherheitsrisiko zu mindern. Sobald er unterstützt wird, können Entwickler die Werte angeben, die sie wirklich wissen müssen, und die Benutzer erhalten eine Berechtigungsaufforderung, in der sie gefragt werden, ob sie mit der Weitergabe dieser Informationen einverstanden sind, wenn die Methode aufgerufen wird. Browseranbieter werden voraussichtlich nützlichere Informationen teilen, wenn sie durch eine Berechtigungsaufforderung geschützt sind, da dies die Methode als Ziel für Fingerprinting weniger attraktiv macht.

## Syntax

```js-nolint
requestAdapterInfo()
```

### Parameter

Keine.

### Rückgabewert

Ein {{jsxref("Promise")}}, das sich mit einer Instanz eines {{domxref("GPUAdapterInfo")}}-Objekts erfüllt.

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
