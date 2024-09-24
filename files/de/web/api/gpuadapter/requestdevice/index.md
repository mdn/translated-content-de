---
title: "GPUAdapter: requestDevice()-Methode"
short-title: requestDevice()
slug: Web/API/GPUAdapter/requestDevice
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestDevice()`**-Methode der {{domxref("GPUAdapter")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einem {{domxref("GPUDevice")}}-Objekt erfüllt wird, welches die primäre Schnittstelle für die Kommunikation mit der GPU darstellt.

## Syntax

```js-nolint
requestDevice()
requestDevice(descriptor)
```

### Parameter

- `descriptor` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `defaultQueue` {{optional_inline}}
      - : Ein Objekt, das Informationen für die Standard-{{domxref("GPUQueue")}} des Geräts bereitstellt (wie von {{domxref("GPUDevice.queue")}} zurückgegeben). Dieses Objekt hat eine einzige Eigenschaft — `label` — die der Standardwarteschlange einen {{domxref("GPUQueue.label", "Label")}}-Wert zuweist. Wenn kein Wert angegeben wird, ist das Standard ein leeres Objekt, und das Label der Standardwarteschlange wird ein leerer String sein.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des {{domxref("GPUDevice")}} verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `requiredFeatures` {{optional_inline}}
      - : Ein Array von Strings, das zusätzliche Funktionalität darstellt, die vom zurückgegebenen {{domxref("GPUDevice")}} unterstützt werden soll. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Funktionen nicht bereitstellen kann. Siehe {{domxref("GPUSupportedFeatures")}} für eine vollständige Liste möglicher Funktionen. Dies ist als leeres Array voreingestellt, wenn kein Wert angegeben wird.
    - `requiredLimits` {{optional_inline}}
      - : Ein Objekt, das Eigenschaften enthält, die die Limits darstellen, die vom zurückgegebenen {{domxref("GPUDevice")}} unterstützt werden sollen. Der Aufruf von `requestDevice()` schlägt fehl, wenn der `GPUAdapter` diese Limits nicht bereitstellen kann. Jeder Schlüssel muss der Name eines Mitglieds von {{domxref("GPUSupportedLimits")}} sein. Dies ist als leeres Objekt voreingestellt, wenn kein Wert angegeben wird.

> [!NOTE]
> Nicht alle Funktionen und Limits werden in allen Browsern verfügbar sein, die WebGPU unterstützen, selbst wenn sie von der zugrunde liegenden Hardware unterstützt werden. Weitere Informationen finden Sie auf den Seiten {{domxref("GPUAdapter.features", "features")}} und {{domxref("GPUAdapter.limits", "limits")}}.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des {{domxref("GPUDevice")}}-Objekts erfüllt wird.

Wenn Sie einen doppelten Aufruf machen, d.h. `requestDevice()` auf einem {{domxref("GPUAdapter")}} aufrufen, bei dem `requestDevice()` bereits aufgerufen wurde, wird das Versprechen mit einem Gerät erfüllt, das sofort verloren geht. Sie können dann Informationen darüber erhalten, wie das Gerät verloren ging, über {{domxref("GPUDevice.lost")}}.

### Ausnahmen

- `OperationError` {{domxref("DOMException")}}
  - : Das Versprechen wird mit einem `OperationError` abgelehnt, wenn die in der `requiredLimits`-Eigenschaft enthaltenen Limits vom {{domxref("GPUAdapter")}} nicht unterstützt werden, entweder weil es sich um nicht gültige Limits handelt oder weil ihre Werte höher sind als die Werte des Adapters für diese Limits.
- `TypeError` {{domxref("DOMException")}}
  - : Das Versprechen wird mit einem `TypeError` abgelehnt, wenn die in der `requiredFeatures`-Eigenschaft enthaltenen Funktionen vom {{domxref("GPUAdapter")}} nicht unterstützt werden.

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

### Anfordern spezifischer Funktionen und Limits

Im folgenden Code:

1. Überprüfen wir, ob ein {{domxref("GPUAdapter")}} die `texture-compression-astc`-Funktion verfügbar hat. Wenn ja, fügen wir sie dem Array `requiredFeatures` hinzu.
2. Wir fragen den `GPUAdapter.limits`-Wert von `maxBindGroups` ab, um zu sehen, ob er gleich oder größer als 6 ist. Unsere theoretische Beispiel-App benötigt idealerweise 6 Bindungsgruppen, daher fügen wir, wenn der zurückgegebene Wert >= 6 ist, ein maximales Limit von 6 zum `requiredLimits`-Objekt hinzu.
3. Wir fordern ein Gerät mit diesen Funktions- und Limitanforderungen sowie einem `defaultQueue`-Label an.

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
