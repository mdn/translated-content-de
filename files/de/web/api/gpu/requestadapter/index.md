---
title: "GPU: requestAdapter() Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`**-Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird. Von diesem Adapter können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Limits anfordern.

Beachten Sie, dass der Benutzeragent entscheidet, ob er einen Adapter zurückgibt. Falls ja, wird er entsprechend den angegebenen Optionen ausgewählt. Wenn keine Optionen angegeben sind, stellt das Gerät den Standardadapter zur Verfügung, der normalerweise für die meisten Zwecke ausreicht.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `powerPreference` {{optional_inline}}
      - : Ein enumerierter Wert, der dem Benutzeragenten einen Hinweis geben kann, welche Klasse von Adapter aus den verfügbaren Adaptern des Systems ausgewählt werden soll. Verfügbare Werte sind:
        - `undefined` (oder nicht spezifiziert), was keinen Hinweis gibt.
        - `"low-power"`, was einen Hinweis gibt, Energieeinsparungen gegenüber der Leistung zu priorisieren. Wenn Ihre Anwendung mit dieser Einstellung gut funktioniert, wird empfohlen, sie zu nutzen, da sie die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise die Standardeinstellung, wenn keine Optionen angegeben sind.
        - `"high-performance"`, was einen Hinweis gibt, die Leistung gegenüber dem Energieverbrauch zu priorisieren. Es wird empfohlen, diesen Wert nur anzugeben, wenn es absolut notwendig ist, da er die Akkulaufzeit auf tragbaren Geräten erheblich verringern kann. Es kann auch zu einem höheren Verlust von [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen – das System wird manchmal beschließen, zu einem energiesparenderen Adapter zu wechseln, um Energie zu sparen.

        Der Hauptzweck dieses Hinweises besteht darin, zu beeinflussen, welche GPU in einem System mit mehreren GPUs verwendet wird. Beispielsweise haben einige Laptops eine energiesparende integrierte GPU und eine leistungsstarke dedizierte GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich Batteriestatus, angeschlossene Bildschirme oder entfernbaren GPUs.

        > [!NOTE]
        > Unter Chrome auf Dual-GPU macOS-Geräten wird, wenn `requestAdapter()` ohne eine `powerPreference`-Option aufgerufen wird, die leistungsstarke dedizierte GPU zurückgegeben, wenn das Gerät des Benutzers am Netzstrom angeschlossen ist. Andernfalls wird die energiesparende integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn er als die am besten geeignete verfügbare Option bestimmt wird. Ein Fallback-Adapter hat im Allgemeinen erhebliche Leistungseinschränkungen im Austausch für eine Kombination aus größerer Kompatibilität, vorhersehbarerem Verhalten oder verbessertem Datenschutz. Zum Beispiel können einige Browser eine softwarebasierte Implementierung der API über einen Fallback-Adapter anbieten. Ein Fallback-Adapter wird nicht auf jedem System verfügbar sein.

Wenn Sie verhindern möchten, dass Ihre Apps auf Fallback-Adaptern ausgeführt werden, sollten Sie das Attribut [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter) überprüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation enthält eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein Boolean, der, wenn auf `true` gesetzt, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, wenn einer verfügbar ist. Dies wird jedoch noch von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird, wenn die Anfrage erfolgreich ist.

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
