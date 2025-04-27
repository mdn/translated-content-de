---
title: "GPU: requestAdapter() Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`** Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objekts erfüllt wird. Von diesem aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Einschränkungen anfordern.

Beachten Sie, dass der Benutzeragent entscheidet, ob ein Adapter zurückgegeben wird. Falls ja, wird er gemäß den angegebenen Optionen ausgewählt. Wenn keine Optionen angegeben sind, stellt das Gerät Zugriff auf den Standardadapter bereit, der in der Regel für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `powerPreference` {{optional_inline}}

      - : Ein enumerierter Wert, der verwendet werden kann, um dem Benutzeragenten einen Hinweis zu geben, welche Klasse von Adapter aus den verfügbaren Adaptern des Systems ausgewählt werden soll. Verfügbare Werte sind:

        - `undefined` (oder nicht angegeben), was keinen Hinweis liefert.
        - `"low-power"`, was einen Hinweis gibt, die Energieeinsparung gegenüber der Leistung zu priorisieren. Wenn Ihre App mit dieser Einstellung gut läuft, wird empfohlen, sie zu verwenden, da sie die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise die Standardeinstellung, wenn keine Optionen angegeben sind.
        - `"high-performance"`, was einen Hinweis gibt, die Leistung gegenüber dem Energieverbrauch zu priorisieren. Sie werden ermutigt, diesen Wert nur anzugeben, wenn dies absolut notwendig ist, da dies die Akkulaufzeit auf tragbaren Geräten erheblich verringern kann. Es kann auch zu einem erhöhten Verlust von [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen — das System wird manchmal einen Wechsel zu einem energieeffizienteren Adapter vornehmen, um Energie zu sparen.

        Der Hauptzweck dieses Hinweises besteht darin, zu beeinflussen, welche GPU in einem System mit mehreren GPUs verwendet wird. Beispielsweise haben einige Laptops eine energieeffiziente integrierte GPU und eine leistungsstarke dedizierte GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich des Akkustatus, angeschlossener Bildschirme oder abnehmbarer GPUs.

        > [!NOTE]
        > In Chrome, das auf macOS-Geräten mit zwei GPUs läuft, wird die leistungsstarke dedizierte GPU zurückgegeben, wenn `requestAdapter()` ohne `powerPreference`-Option aufgerufen wird und das Gerät des Benutzers mit Netzstrom betrieben wird. Andernfalls wird die energieeffiziente integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn er bestimmt, dass dies die am besten geeignete verfügbare Option ist. Ein Fallback-Adapter hat im Allgemeinen erhebliche Leistungseinschränkungen im Austausch für eine Kombination aus breiterer Kompatibilität, vorhersehbareren Verhalten oder verbesserter Privatsphäre. Beispielsweise bieten einige Browser möglicherweise eine softwarebasierte Implementierung der API über einen Fallback-Adapter an. Ein Fallback-Adapter wird nicht auf jedem System verfügbar sein.

Wenn Sie verhindern möchten, dass Ihre Apps auf Fallback-Adaptern laufen, sollten Sie das [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter)-Attribut überprüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation enthält eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein Boolean, der, wenn er auf `true` gesetzt ist, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, falls einer verfügbar ist. Dies wird derzeit von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird, wenn die Anforderung erfolgreich ist.

`requestAdapter()` wird zu `null` aufgelöst, wenn kein geeigneter Adapter verfügbar ist.

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
