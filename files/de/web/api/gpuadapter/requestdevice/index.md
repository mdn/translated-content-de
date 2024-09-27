---
title: "GPUAdapter: requestDevice()-Methode"
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
  - : Ein Objekt, das folgende Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-[`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts bereitstellt (wie von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standard-Warteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert zuweist. Wird kein Wert angegeben, wird standardmäßig ein leeres Objekt verwendet, und das Label der Standard-Warteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des [`GPUDevice`](/de/docs/Web/API/GPUDevice) verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, die zusätzliche Funktionalitäten darstellen, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der `requestDevice()`-Aufruf wird fehlschlagen, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste der möglichen Funktionen. Dies standardmäßig auf ein leeres Array, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Limits darstellen, welche vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf wird fehlschlagen, wenn der `GPUAdapter` diese Limits nicht bieten kann. Jeder Schlüssel muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein. Dies standardmäßig auf ein leeres Objekt, wenn kein Wert angegeben wird.

> [!NOTE]
> Nicht alle Funktionen und Limits werden für WebGPU in allen Browsern verfügbar sein, die es unterstützen, auch wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz eines [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf machen, z.B. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter), auf dem `requestDevice()` bereits aufgerufen wurde, erfüllt sich das Promise mit einem Gerät, das sofort verloren ist. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn die in der Eigenschaft `requiredLimits` enthaltenen Limits nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil sie keine gültigen Limits sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Limits.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` abgelehnt, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Funktionen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

## Beispiele

### Einfache Beispiel

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

1. Prüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Wenn ja, fügen wir sie in das Array `requiredFeatures` ein.
2. Abfragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unser theoretisches Beispiel benötigt idealerweise 6 Bindungen, also wenn der zurückgegebene Wert >= 6 ist, fügen wir ein maximales Limit von 6 zum Objekt `requiredLimits` hinzu.
3. Fordern wir ein Gerät mit diesen Funktionen und Limitanforderungen sowie einem `defaultQueue`-Label an.

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
