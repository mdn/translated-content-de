---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`**-Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird, welches die primäre Schnittstelle zur Kommunikation mit der GPU darstellt.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-[`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts bereitstellt (wie sie von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben wird). Dieses Objekt hat eine einzelne Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert liefert. Wenn kein Wert angegeben wird, ist dies standardmäßig ein leeres Objekt, und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifikation des [`GPUDevice`](/de/docs/Web/API/GPUDevice) verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, das zusätzliche Funktionalitäten darstellt, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste möglicher Funktionen. Dies ist standardmäßig ein leeres Array, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Grenzwerte darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Grenzwerte nicht bereitstellen kann. Jeder Schlüssel mit einem nicht `undefined` Wert muss der Name eines Members von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein.
        > [!NOTE]
        > Sie können unbekannte Grenzwerte anfordern, wenn Sie ein GPU-Gerät anfordern, ohne einen Fehler zu verursachen. Solche Grenzwerte werden `undefined` sein. Dies ist nützlich, da es den WebGPU-Code weniger anfällig macht – eine Codebasis wird nicht aufhören zu arbeiten, weil ein Grenzwert im Adapter nicht mehr existiert.

Nicht alle Funktionen und Grenzwerte sind für WebGPU in allen Browsern verfügbar, die es unterstützen, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz erfüllt wird.

Wenn Sie einen doppelten Aufruf durchführen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, bei dem bereits `requestDevice()` aufgerufen wurde, wird das Promise mit einem Gerät erfüllt, das sofort verloren geht. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn die in der Eigenschaft `requiredLimits` enthaltenen Grenzwerte nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil es sich nicht um gültige Grenzwerte handelt, oder weil ihre Werte höher sind als die Werte des Adapters für diese Grenzwerte.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` abgelehnt, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Funktionen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

## Beispiele

### Einfaches Beispiel

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

### Anfordern bestimmter Funktionen und Grenzwerte

Im folgenden Code:

1. Prüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Falls ja, fügen wir sie dem Array der `requiredFeatures` hinzu.
2. Fragen wir den `GPUAdapter.limits` Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen, also wenn der zurückgegebene Wert ≥ 6 ist, fügen wir ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu.
3. Fordern wir ein Gerät mit diesen Funktions- und Grenzwertanforderungen sowie einem `defaultQueue`-Label an.

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

  const requiredLimits = {};

  // App ideally needs 6 bind groups, so we'll try to request what the app needs
  if (adapter.limits.maxBindGroups >= 6) {
    requiredLimits.maxBindGroups = 6;
  }

  const device = await adapter.requestDevice({
    defaultQueue: {
      label: "my_queue",
    },
    requiredFeatures,
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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
