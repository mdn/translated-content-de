---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
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
      - : Ein Objekt, das Informationen für die Standard-<code>GPUQueue</code> des Geräts bereitstellt (wie sie durch [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben wird). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert bereitstellt. Wenn kein Wert angegeben wird, wird standardmäßig ein leeres Objekt verwendet und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das [`GPUDevice`](/de/docs/Web/API/GPUDevice) zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, das zusätzliche Funktionalitäten darstellt, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste möglicher Funktionen. Standardmäßig wird ein leeres Array verwendet, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Grenzen darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn der `GPUAdapter` diese Grenzen nicht bereitstellen kann. Jeder Schlüssel muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein. Dieses wird auf ein leeres Objekt zurückgesetzt, wenn kein Wert angegeben wird.

> [!NOTE]
> Nicht alle Funktionen und Grenzen werden für WebGPU in allen unterstützenden Browsern verfügbar sein, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Weitere Informationen finden Sie auf den Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekts erfüllt wird.

Sollten Sie einen doppelten Aufruf ausführen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem `requestDevice()` bereits aufgerufen wurde, wird das Promise mit einem Gerät erfüllt, das sofort verloren geht. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` zurückgewiesen, wenn die in der Eigenschaft `requiredLimits` enthaltenen Grenzen vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt werden, entweder weil sie keine gültigen Grenzen sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Grenzen.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` zurückgewiesen, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Funktionen vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt werden.

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

  // ...
}
```

### Anfordern spezifischer Funktionen und Grenzen

Im folgenden Code:

1. Prüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Wenn ja, fügen wir sie dem Array `requiredFeatures` hinzu.
2. Abfragen des Wertes `maxBindGroups` von `GPUAdapter.limits`, um festzustellen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispiel-App benötigt idealerweise 6 Bindungsgruppen, daher fügen wir ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu, wenn der zurückgegebene Wert >= 6 ist.
3. Anfordern eines Geräts mit diesen Funktions- und Grenzanforderungen sowie einem `defaultQueue`-Label.

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
      label: "myqueue",
    },
    requiredFeatures,
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
