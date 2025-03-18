---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 1d6734ef7332bd16c14c6d3675dd71645ca05865
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`** Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird, welches die primäre Schnittstelle zur Kommunikation mit der GPU darstellt.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-`GPUQueue` des Geräts bereitstellt (wie zurückgegeben von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)). Dieses Objekt hat eine einzelne Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert zuweist. Wenn kein Wert bereitgestellt wird, ist dies standardmäßig ein leeres Objekt, und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des [`GPUDevice`](/de/docs/Web/API/GPUDevice) verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, das zusätzliche Funktionalitäten darstellt, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der `requestDevice()` Aufruf schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste der möglichen Funktionen. Dies ist ein leeres Array, wenn kein Wert bereitgestellt wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Limits darstellen, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der `requestDevice()` Aufruf schlägt fehl, wenn der `GPUAdapter` diese Limits nicht bereitstellen kann. Jeder Schlüssel mit einem nicht-`undefined` Wert muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein.
        > [!NOTE]
        > Sie können unbekannte Limits anfordern, wenn Sie ein GPU-Gerät anfordern, ohne einen Fehler zu verursachen. Solche Limits werden `undefined` sein. Dies ist nützlich, da es WebGPU-Code weniger anfällig macht — eine Codebasis wird nicht funktionsunfähig, weil ein Limit im Adapter nicht mehr existiert.

Nicht alle Funktionen und Limits werden in allen Browsern, die WebGPU unterstützen, zur Verfügung stehen, auch wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf tätigen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem `requestDevice()` bereits aufgerufen wurde, erfüllt sich das Promise mit einem Gerät, das sofort verloren ist. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn die in der Eigenschaft `requiredLimits` enthaltenen Limits nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil sie keine gültigen Limits sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Limits.
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

  // ...
}
```

### Anfordern spezieller Funktionen und Limits

Im folgenden Code:

1. Überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` bereit hat. Wenn ja, fügen wir sie dem Array von `requiredFeatures` hinzu.
2. Fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispielprogramm benötigt idealerweise 6 Bindungsgruppen, also wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zum `requiredLimits` Objekt hinzu.
3. Fordern wir ein Gerät mit diesen Funktions- und Limitanforderungen und einem `defaultQueue`-Label an.

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
