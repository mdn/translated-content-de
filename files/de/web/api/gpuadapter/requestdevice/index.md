---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`** Methode des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objekt erfüllt wird, welches die primäre Schnittstelle zur Kommunikation mit der GPU darstellt.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-`GPUQueue` des Gerätes bereitstellt (wie von [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label) Wert zuweist. Wenn kein Wert angegeben wird, ist dies standardmäßig ein leeres Objekt, und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, das ein Label bereitstellt, das genutzt werden kann, um das [`GPUDevice`](/de/docs/Web/API/GPUDevice) zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, die zusätzliche Funktionalitäten darstellen, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der Aufruf von `requestDevice()` wird fehlschlagen, wenn der `GPUAdapter` diese Features nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste möglicher Features. Dies ist standardmäßig ein leeres Array, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt mit Eigenschaften, die die Grenzen darstellen, die Sie vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt haben möchten. Der Aufruf von `requestDevice()` wird fehlschlagen, wenn der `GPUAdapter` diese Grenzen nicht bereitstellen kann. Jeder Schlüssel mit einem nicht-`undefined` Wert muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein.
        > [!NOTE]
        > Sie können unbekannte Limits anfordern, wenn Sie ein GPU-Gerät anfordern, ohne einen Fehler zu verursachen. Solche Limits werden `undefined` sein. Dies ist nützlich, weil es den WebGPU-Code weniger anfällig macht — ein Codebestand wird nicht aufhören zu funktionieren, weil ein Limit im Adapter nicht mehr existiert.

Nicht alle Features und Limits werden in allen Browsern, die WebGPU unterstützen, verfügbar sein, selbst wenn sie von der darunterliegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf tätigen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem `requestDevice()` bereits aufgerufen wurde, wird das Promise mit einem Gerät erfüllt, das sofort verloren geht. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost).

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn die in der Eigenschaft `requiredLimits` enthaltenen Grenzen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil sie keine gültigen Grenzen sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Grenzen.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` abgelehnt, wenn die in der Eigenschaft `requiredFeatures` enthaltenen Features nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

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

### Anfordern spezifischer Features und Grenzen

Im folgenden Code:

1. Überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) das `texture-compression-astc` Feature verfügbar hat. Wenn ja, fügen wir es dem `requiredFeatures` Array hinzu.
2. Fragen wir den `GPUAdapter.limits` Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispielanwendung benötigt idealerweise 6 Bindungsgruppen, daher fügen wir ein maximales Limit von 6 dem `requiredLimits` Objekt hinzu, wenn der zurückgegebene Wert >= 6 ist.
3. Fordern wir ein Gerät mit diesen Feature- und Grenzanforderungen sowie einem `defaultQueue` Label an.

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
