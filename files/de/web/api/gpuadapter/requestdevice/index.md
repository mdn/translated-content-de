---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: bff3a6a2e6b3c13dd8bb0c80a1eb9da08cce5dc6
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`** Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objekt erfüllt wird, welches die primäre Schnittstelle zur Kommunikation mit der GPU darstellt.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen über die Standard-[`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts bereitstellt (wie sie von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben wird). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label) Wert zuweist. Wird kein Wert angegeben, ist dies standardmäßig ein leeres Objekt und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das [`GPUDevice`](/de/docs/Web/API/GPUDevice) zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, das zusätzliche Funktionalitäten darstellt, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der `requestDevice()` Aufruf schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste möglicher Funktionen. Standardmäßig ist dies ein leeres Array, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Limits darstellen, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der `requestDevice()` Aufruf schlägt fehl, wenn der `GPUAdapter` diese Limits nicht bereitstellen kann. Jeder Schlüssel muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein. Standardmäßig ist dies ein leeres Objekt, wenn kein Wert angegeben wird.

> [!NOTE]
> Nicht alle Funktionen und Limits werden in allen Browsern, die WebGPU unterstützen, verfügbar sein, selbst wenn sie durch die zugrunde liegende Hardware unterstützt werden. Weitere Informationen finden Sie auf den Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits).

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz eines [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf machen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem `requestDevice()` bereits aufgerufen wurde, wird das Versprechen mit einem Gerät erfüllt, das sofort verloren gegangen ist. Sie können dann über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) Informationen darüber erhalten, wie das Gerät verloren ging.

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit einem `OperationError` abgelehnt, wenn die in der Eigenschaft `requiredLimits` enthaltenen Limits nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil sie keine gültigen Limits sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Limits.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Versprechen wird mit einem `TypeError` abgelehnt, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Funktionen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

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

### Anforderung spezifischer Funktionen und Limits

Im folgenden Code:

1. Überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` zur Verfügung hat. Falls ja, fügen wir sie dem Array `requiredFeatures` hinzu.
2. Fragen wir den `GPUAdapter.limits` Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen, daher fügen wir ein maximales Limit von 6 dem Objekt `requiredLimits` hinzu, wenn der zurückgegebene Wert >= 6 ist.
3. Fordern wir ein Gerät mit diesen Feature- und Limit-Anforderungen sowie einem `defaultQueue` Label an.

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

  // ...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
