---
title: "GPU: requestAdapter() Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`**-Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objekts erfüllt wird. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, Adapterinformationen, Funktionen und Grenzen.

Beachten Sie, dass der Benutzeragent entscheidet, ob ein Adapter zurückgegeben wird. Wenn ja, wählt er gemäß den bereitgestellten Optionen. Wenn keine Optionen angegeben werden, wird das Gerät Zugriff auf den Standardadapter gewähren, der normalerweise für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `powerPreference` {{optional_inline}}

      - : Ein Aufzählungswert, der verwendet werden kann, um dem Benutzeragenten einen Hinweis zu geben, welche Klasse von Adapter aus den verfügbaren Adaptern des Systems ausgewählt werden soll. Verfügbare Werte sind:

        - `undefined` (oder nicht angegeben), was keinen Hinweis gibt.
        - `"low-power"`, was einen Hinweis gibt, die Energieeinsparung vor die Leistung zu stellen. Wenn Ihre App mit dieser Einstellung gut läuft, wird empfohlen, sie zu verwenden, da dies die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise der Standard, wenn keine Optionen angegeben werden.
        - `"high-performance"`, was einen Hinweis gibt, die Leistung vor den Energieverbrauch zu stellen. Sie werden ermutigt, diesen Wert nur anzugeben, wenn unbedingt notwendig, da er die Akkulaufzeit auf tragbaren Geräten erheblich verringern kann. Es kann auch zu einem erhöhten Verlust des [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen – das System wird manchmal entscheiden, auf einen energieeffizienteren Adapter umzuschalten, um Strom zu sparen.

        Der Hauptzweck dieses Hinweises ist, zu beeinflussen, welche GPU in einem Multi-GPU-System verwendet wird. Beispielsweise haben einige Laptops eine energieeffiziente integrierte GPU und eine leistungsstarke diskrete GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich des Batteriestatus, angeschlossener Displays oder entfernbarer GPUs.

        > [!NOTE]
        > In Chrome auf macOS-Geräten mit zwei GPUs, wenn `requestAdapter()` ohne die Option `powerPreference` aufgerufen wird, wird die leistungsstarke diskrete GPU zurückgegeben, wenn das Gerät des Benutzers an das Stromnetz angeschlossen ist. Andernfalls wird die energieeffiziente integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn dieser bestimmt, dass er die am besten geeignete verfügbare Option ist. Ein Fallback-Adapter hat in der Regel erhebliche Leistungseinschränkungen im Austausch für eine Kombination aus breiterer Kompatibilität, vorhersehbarerem Verhalten oder verbesserter Privatsphäre. Einige Browser bieten zum Beispiel eine softwarebasierte Implementierung der API über einen Fallback-Adapter an. Ein Fallback-Adapter steht nicht auf jedem System zur Verfügung.

Wenn Sie verhindern möchten, dass Ihre Apps auf Fallback-Adaptern ausgeführt werden, sollten Sie das Attribut [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter) überprüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation enthält eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein boolean, der, wenn auf `true` gesetzt, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, wenn einer verfügbar ist. Diese Option wird derzeit von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objekts erfüllt wird, wenn die Anfrage erfolgreich ist.

`requestAdapter()` wird auf `null` aufgelöst, wenn kein geeigneter Adapter verfügbar ist.

### Ausnahmen

Keine.

## Beispiele

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

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
