---
title: "GPUAdapter: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 2eb88572e8e972bb87a446f17a4a9a23de0108b5
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`requestDevice()`** der Schnittstelle [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) gibt eine {{jsxref("Promise")}} zurück, die mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird. Dieses Objekt ist die primäre Schnittstelle für die Kommunikation mit der GPU.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt mit Informationen für die standardmäßige [`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts (wie von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben). Dieses Objekt hat eine einzige Eigenschaft – `label` –, die der Standard-Queue einen Wert für [`label`](/de/docs/Web/API/GPUQueue/label) zuweist. Wird kein Wert angegeben, ist der Standardwert ein leeres Objekt und das Label der Standard-Queue eine leere Zeichenfolge.
    - `label` {{optional_inline}}
      - : Eine Zeichenfolge, die ein Label zur Identifizierung des [`GPUDevice`](/de/docs/Web/API/GPUDevice) bereitstellt, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Zeichenfolgen, die zusätzliche Funktionen angeben, die das zurückgegebene [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützen soll. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Eine vollständige Liste möglicher Funktionen finden Sie unter [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures). Wird kein Wert angegeben, ist der Standardwert ein leeres Array.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt mit Eigenschaften, die die Limits angeben, die das zurückgegebene [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützen soll. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Limits nicht bereitstellen kann. Jeder Schlüssel mit einem Wert ungleich `undefined` muss dem Namen eines Members von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) entsprechen.
        > [!NOTE]
        > Sie können beim Anfordern eines GPU-Geräts unbekannte Limits angeben, ohne dass ein Fehler auftritt. Solche Limits haben den Wert `undefined`. Das macht WebGPU-Code robuster: Eine Codebasis funktioniert nicht plötzlich nicht mehr, nur weil ein Limit im Adapter nicht mehr existiert.

Nicht alle Funktionen und Limits sind in jedem Browser, der WebGPU unterstützt, für WebGPU verfügbar – selbst wenn die zugrunde liegende Hardware sie unterstützt. Weitere Informationen finden Sie auf den Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits).

### Rückgabewert

Eine {{jsxref("Promise")}}, die mit einer [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz erfüllt wird.

Wenn Sie `requestDevice()` erneut auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem die Methode bereits aufgerufen wurde, wird die Promise mit einem `OperationError` zurückgewiesen. Der zugehörige `GPUAdapter` wird beim Erstellen eines `GPUDevice` aufgebraucht.

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Die Promise wird mit einem `OperationError` zurückgewiesen, wenn einer der folgenden Fälle eintritt:
    - Die in der Eigenschaft `requiredLimits` angegebenen Limits werden vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt, weil sie entweder keine gültigen Limits sind oder ihre Werte über den entsprechenden Werten des Adapters liegen.
    - Der `GPUAdapter` wurde bereits durch einen früheren Aufruf von `requestDevice()` aufgebraucht.
- {{jsxref("TypeError")}}
  - : Die Promise wird mit einem `TypeError` zurückgewiesen, wenn die in der Eigenschaft `requiredFeatures` angegebenen Funktionen vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) nicht unterstützt werden.

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

### Bestimmte Funktionen und Limits anfordern

Im folgenden Code:

1. Prüfen wir, ob für einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar ist. Falls ja, fügen wir sie dem Array `requiredFeatures` hinzu.
2. Fragen wir den Wert von `maxBindGroups` in `GPUAdapter.limits` ab, um festzustellen, ob er mindestens 6 beträgt. Unsere hypothetische Beispielanwendung benötigt idealerweise 6 Bind Groups. Wenn der zurückgegebene Wert >= 6 ist, fügen wir dem Objekt `requiredLimits` daher ein maximales Limit von 6 hinzu.
3. Fordern wir ein Gerät mit diesen Anforderungen an Funktionen und Limits sowie einem Label für `defaultQueue` an.

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
