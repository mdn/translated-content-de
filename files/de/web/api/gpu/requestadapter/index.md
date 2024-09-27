---
title: "GPU: requestAdapter()-Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`**-Methode des [`GPU`](/de/docs/Web/API/GPU)-Interfaces gibt ein {{jsxref("Promise")}} zurück, das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapter-Informationen, Funktionen und Grenzen anfordern.

Beachten Sie, dass der User-Agent entscheidet, ob ein Adapter zurückgegeben wird. Falls ja, erfolgt die Auswahl gemäß der angegebenen Optionen. Wenn keine Optionen bereitgestellt werden, wird der Standardadapter verwendet, der normalerweise für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `powerPreference` {{optional_inline}}

      - : Ein enumerierter Wert, der dem User-Agent einen Hinweis darauf gibt, welche Art von Adapter aus den verfügbaren Adaptern des Systems gewählt werden soll. Verfügbare Werte sind:

        - `undefined` (oder nicht angegeben), was keinen Hinweis gibt.
        - `"low-power"`, was einen Hinweis zur Priorisierung von Energieeinsparung gegenüber Leistung gibt. Wenn Ihre App mit dieser Einstellung gut funktioniert, wird empfohlen, sie zu verwenden, da sie die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise die Standardeinstellung, wenn keine Optionen angegeben sind.
        - `"high-performance"`, was einen Hinweis zur Priorisierung der Leistung gegenüber dem Energieverbrauch gibt. Es wird empfohlen, diesen Wert nur dann anzugeben, wenn es absolut notwendig ist, da er die Akkulaufzeit auf tragbaren Geräten erheblich verringern kann. Es kann auch zu vermehrtem Verlust von [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen — das System kann manchmal entscheiden, auf einen energieeffizienteren Adapter zu wechseln, um Strom zu sparen.

        Das Hauptziel dieses Hinweises ist es, zu beeinflussen, welche GPU in einem Multi-GPU-System verwendet wird. Beispielsweise haben einige Laptops eine energieeffiziente integrierte GPU und eine leistungsstarke diskrete GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich Batteriestatus, angeschlossene Bildschirme oder entfernbarer GPUs.

        > [!NOTE]
        > In Chrome auf Dual-GPU-macOS-Geräten wird beim Aufruf von `requestAdapter()` ohne `powerPreference`-Option die leistungsstarke diskrete GPU zurückgegeben, wenn das Gerät des Benutzers mit Netzstrom betrieben wird. Andernfalls wird die energieeffiziente integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom User-Agent bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn dieser als die geeignetste verfügbare Option angesehen wird. Ein Fallback-Adapter weist in der Regel erhebliche Leistungseinschränkungen auf, bietet jedoch eine Kombination aus höherer Kompatibilität, vorhersehbarerem Verhalten oder verbesserter Privatsphäre. Beispielsweise können einige Browser eine softwarebasierte Implementierung der API über einen Fallback-Adapter anbieten. Ein Fallback-Adapter ist nicht auf jedem System verfügbar.

Wenn Sie verhindern möchten, dass Ihre Apps auf Fallback-Adaptern laufen, sollten Sie das [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter)-Attribut überprüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation enthält eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein boolean, der, wenn er auf `true` gesetzt ist, den User-Agent dazu zwingt, einen Fallback-Adapter zurückzugeben, falls einer verfügbar ist. Dies wird derzeit von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei erfolgreichem Abschluss mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird.

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

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
