---
title: "GPUAdapter: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 7a7a63589adf9ea861b1c3604c20de5809498619
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

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
      - : Ein Objekt, das Informationen für die Standard-`GPUQueue` des Geräts bereitstellt (wie durch [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert bereitstellt. Wenn kein Wert bereitgestellt wird, wird dies auf ein leeres Objekt gesetzt, und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein Zeichenfolgenwert, der ein Label bereitstellt, das verwendet werden kann, um das [`GPUDevice`](/de/docs/Web/API/GPUDevice) zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, die zusätzliche Funktionalitäten darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste der möglichen Funktionen. Dies wird auf ein leeres Array gesetzt, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Limits darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn der `GPUAdapter` diese Limits nicht bereitstellen kann. Jeder Schlüssel mit einem nicht-`undefined` Wert muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein.
        > [!NOTE]
        > Sie können unbekannte Limits anfordern, wenn Sie ein GPU-Gerät anfordern, ohne einen Fehler zu verursachen. Solche Limits werden `undefined` sein. Dies ist nützlich, da es den WebGPU-Code weniger anfällig macht — ein Code wird nicht aufhören zu funktionieren, weil ein Limit nicht mehr im Adapter existiert.

Nicht alle Funktionen und Limits werden in allen Browsern, die WebGPU unterstützen, zur Verfügung stehen, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz erfüllt wird.

Wenn Sie denselben Aufruf duplizieren, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem bereits `requestDevice()` aufgerufen wurde, wird das Promise mit einem `OperationError` abgelehnt, da der zugehörige `GPUAdapter` verbraucht ist, wenn ein `GPUDevice` erstellt wird.

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn entweder:
    - Die in der Eigenschaft `requiredLimits` enthaltenen Limits vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt werden, entweder weil sie keine gültigen Limits sind oder weil ihre Werte höher sind als die Adapterwerte für diese Limits.
    - Der `GPUAdapter` wurde verbraucht, da `requestDevice()` zuvor aufgerufen wurde.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` abgelehnt, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Funktionen vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt werden.

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

### Anfordern spezifischer Funktionen und Limits

Im folgenden Code:

1. Überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die `texture-compression-astc`-Funktion verfügbar hat. Falls ja, fügen wir diese dem Array der `requiredFeatures` hinzu.
2. Fragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu prüfen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bind-Gruppen, daher fügen wir bei einem rückgabewert >= 6 ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu.
3. Fordern wir ein Gerät mit diesen Funktions- und Limitanforderungen sowie einem `defaultQueue`-Label an.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
