---
title: "GPU: Methode requestAdapter()"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`**-Methode der [`GPU`](/de/docs/Web/API/GPU)-Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz des [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objekts erfüllt wird. Hieraus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, Informationen zum Adapter sowie Funktionen und Grenzen abrufen.

Bitte beachten Sie, dass der Benutzeragent entscheidet, ob ein Adapter zurückgegeben wird. Wenn ja, wählt er entsprechend den angegebenen Optionen aus. Wenn keine Optionen angegeben werden, bietet das Gerät Zugriff auf den Standardadapter, der normalerweise für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `powerPreference` {{optional_inline}}

      - : Ein enumerierter Wert, der verwendet werden kann, um dem Benutzeragenten einen Hinweis zu geben, welche Klasse von Adapter aus den verfügbaren Adaptern des Systems gewählt werden sollte. Verfügbare Werte sind:

        - `undefined` (oder nicht angegeben), was keinen Hinweis gibt.
        - `"low-power"`, was einen Hinweis gibt, Energiesparfunktionen über die Leistung zu priorisieren. Wenn Ihre App mit dieser Einstellung gut funktioniert, wird empfohlen, sie zu verwenden, da sie die Akkulaufzeit auf tragbaren Geräten erheblich verbessern kann. Dies ist normalerweise der Standardwert, wenn keine Optionen angegeben werden.
        - `"high-performance"`, was einen Hinweis gibt, die Leistung über den Energieverbrauch zu priorisieren. Es wird empfohlen, diesen Wert nur anzugeben, wenn es absolut notwendig ist, da er die Akkulaufzeit auf tragbaren Geräten erheblich verringern kann. Dies kann auch zu einem erhöhten Verlust des [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen – das System kann manchmal entscheiden, auf einen energiesparenderen Adapter umzuschalten, um Energie zu sparen.

        Der Hauptzweck dieses Hinweises besteht darin, zu beeinflussen, welche GPU in einem Multi-GPU-System verwendet wird. Beispielsweise haben einige Laptops eine energiesparende integrierte GPU und eine leistungsstarke diskrete GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich Akkustatus, angeschlossener Bildschirme oder entfernbarer GPUs.

        > [!NOTE]
        > Auf Chrome, das auf macOS-Geräten mit dualer GPU läuft, wird, wenn `requestAdapter()` ohne die Option `powerPreference` aufgerufen wird, die leistungsstarke diskrete GPU zurückgegeben, wenn das Gerät des Benutzers mit Netzstrom betrieben wird. Andernfalls wird die energiesparende integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn dies als die am besten geeignete verfügbare Option erachtet wird. Ein Fallback-Adapter hat in der Regel erhebliche Leistungseinschränkungen im Austausch für eine Kombination aus größerer Kompatibilität, vorhersehbarem Verhalten oder verbesserter Privatsphäre. Beispielsweise können einige Browser eine softwarebasierte Implementierung der API über einen Fallback-Adapter bereitstellen. Ein Fallback-Adapter wird nicht auf jedem System verfügbar sein.

Wenn Sie verhindern möchten, dass Ihre Anwendungen auf Fallback-Adaptern ausgeführt werden, sollten Sie das Attribut [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter) überprüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation umfasst eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein boolescher Wert, der, wenn auf `true` gesetzt, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, falls einer verfügbar ist. Dies wird derzeit von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}}, das bei Erfolg der Anfrage mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)-Objektinstanz erfüllt wird.

`requestAdapter()` wird zu `null`, wenn kein geeigneter Adapter verfügbar ist.

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
