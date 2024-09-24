---
title: "GPU: requestAdapter()-Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`requestAdapter()`**-Methode der {{domxref("GPU")}}-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des {{domxref("GPUAdapter")}}-Objekts erfüllt wird. Von diesem können Sie ein {{domxref("GPUDevice")}}, Adapterinformationen, Funktionen und Limits anfordern.

Beachten Sie, dass der Benutzeragent entscheidet, ob er einen Adapter zurückgibt. Wenn dies der Fall ist, erfolgt die Auswahl gemäß den angegebenen Optionen. Wenn keine Optionen angegeben werden, bietet das Gerät Zugriff auf den Standardadapter, der normalerweise für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `powerPreference` {{optional_inline}}

      - : Ein enumerierter Wert, der verwendet werden kann, um dem Benutzeragenten einen Hinweis zu geben, welche Art von Adapter aus den verfügbaren Adaptern des Systems ausgewählt werden sollte. Verfügbare Werte sind:

        - `undefined` (oder nicht angegeben), was keinen Hinweis gibt.
        - `"low-power"`, was einen Hinweis gibt, Energieeinsparungen über Leistung zu priorisieren. Wenn Ihre App mit dieser Einstellung gut läuft, wird empfohlen, sie zu verwenden, da sie die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise der Standard, wenn keine Optionen angegeben sind.
        - `"high-performance"`, was einen Hinweis gibt, Leistung über Energieverbrauch zu priorisieren. Es wird empfohlen, diesen Wert nur dann anzugeben, wenn es unbedingt erforderlich ist, da er die Akkulaufzeit auf tragbaren Geräten erheblich verkürzen kann. Es kann auch zu einem erhöhten {{domxref("GPUDevice")}} Verlust führen — das System wird manchmal wählen, zu einem energieeffizienteren Adapter zu wechseln, um Strom zu sparen.

        Der primäre Zweck dieses Hinweises ist es zu beeinflussen, welche GPU in einem Multi-GPU-System verwendet wird. Zum Beispiel haben einige Laptops eine energieeffiziente integrierte GPU und eine leistungsstarke diskrete GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich des Batteriestatus, angeschlossener Displays oder entfernbarer GPUs.

        > [!NOTE]
        > Unter Chrome, das auf dual-GPU-macOS-Geräten läuft, wird bei einem Aufruf von `requestAdapter()` ohne `powerPreference`-Option die leistungsstarke diskrete GPU zurückgegeben, wenn das Gerät des Benutzers an Netzstrom angeschlossen ist. Andernfalls wird die energieeffiziente integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn er als die geeignetste verfügbare Option erachtet wird. Ein Fallback-Adapter weist in der Regel erhebliche Leistungseinschränkungen auf, um eine Kombination aus größerer Kompatibilität, vorhersehbareren Verhalten oder verbessertem Datenschutz zu erreichen. Beispielsweise können einige Browser eine softwarebasierte Implementierung der API über einen Fallback-Adapter anbieten. Ein Fallback-Adapter wird nicht auf jedem System verfügbar sein.

Wenn Sie verhindern möchten, dass Ihre Apps auf Fallback-Adaptern laufen, sollten Sie das {{domxref("GPUAdapter.isFallbackAdapter")}}-Attribut überprüfen, bevor Sie ein {{domxref("GPUDevice")}} anfordern.

> [!NOTE]
> Die Spezifikation enthält eine `forceFallbackAdapter`-Option für `requestAdapter()`. Diese ist ein boolescher Wert, der, wenn er auf `true` gesetzt ist, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, falls einer verfügbar ist. Dies wird von keinem Browser bisher unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das mit einer Instanz des {{domxref("GPUAdapter")}}-Objekts erfüllt wird, wenn die Anfrage erfolgreich ist.

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

  //...
}
```

## Spezifikationen

{{Specifications}}

## Kompatibilität der Browser

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
