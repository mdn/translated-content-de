---
title: "GPUAdapter: requestDevice() Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestDevice()`**-Methode der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekt erfüllt wird, welches die primäre Schnittstelle für die Kommunikation mit der GPU ist.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-[`GPUQueue`](/de/docs/Web/API/GPUQueue) des Geräts bereitstellt (wie durch [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) zurückgegeben). Dieses Objekt hat eine einzelne Eigenschaft – `label` – die der Standardwarteschlange einen [`label`](/de/docs/Web/API/GPUQueue/label)-Wert zuweist. Wenn kein Wert angegeben ist, ist das Standard ein leeres Objekt und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das [`GPUDevice`](/de/docs/Web/API/GPUDevice) identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, die zusätzliche Funktionalitäten darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn das `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) für eine vollständige Liste möglicher Funktionen. Falls kein Wert angegeben ist, wird standardmäßig ein leeres Array verwendet.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Grenzen darstellen, die vom zurückgegebenen [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden sollen. Der `requestDevice()`-Aufruf schlägt fehl, wenn das `GPUAdapter` diese Grenzen nicht bereitstellen kann. Jeder Schlüssel mit einem nicht-`undefined`-Wert muss der Name eines Mitglieds von [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits) sein.
        > [!NOTE]
        > Sie können unbekannte Grenzen anfordern, wenn Sie ein GPU-Gerät anfordern, ohne einen Fehler zu verursachen. Solche Grenzen werden `undefined` sein. Dies ist nützlich, da es den WebGPU-Code weniger anfällig macht – ein Codebase wird nicht aufhören zu funktionieren, weil eine Grenze im Adapter nicht mehr existiert.

Nicht alle Funktionen und Grenzen werden in allen Browsern verfügbar sein, die WebGPU unterstützen, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Siehe die Seiten zu [`features`](/de/docs/Web/API/GPUAdapter/features) und [`limits`](/de/docs/Web/API/GPUAdapter/limits) für weitere Informationen.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz eines [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf machen, d.h. `requestDevice()` auf einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) aufrufen, auf dem `requestDevice()` bereits aufgerufen wurde, wird das Promise mit einem Gerät erfüllt, das sofort verloren ist. Sie können dann über [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) Informationen darüber erhalten, wie das Gerät verloren ging.

### Ausnahmen

- `OperationError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `OperationError` abgelehnt, wenn die in der `requiredLimits`-Eigenschaft enthaltenen Grenzen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden, entweder weil sie keine gültigen Grenzen sind oder weil ihre Werte höher sind als die Werte des Adapters für diese Grenzen.
- `TypeError` [`DOMException`](/de/docs/Web/API/DOMException)
  - : Das Promise wird mit einem `TypeError` abgelehnt, wenn die in der `requiredFeatures`-Eigenschaft enthaltenen Funktionen nicht vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

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

1. Überprüfen wir, ob ein [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) die Funktion `texture-compression-astc` verfügbar hat. Wenn ja, fügen wir es zum Array der `requiredFeatures` hinzu.
2. Abfragen wir den `GPUAdapter.limits`-Wert von `maxBindGroups`, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen, also wenn der zurückgegebene Wert >= 6 ist, fügen wir dem `requiredLimits`-Objekt eine Maximalgrenze von 6 hinzu.
3. Fordern wir ein Gerät mit diesen Funktions- und Grenzanforderungen sowie einem `defaultQueue`-Label an.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
