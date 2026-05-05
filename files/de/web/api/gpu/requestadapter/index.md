---
title: "GPU: requestAdapter() Methode"
short-title: requestAdapter()
slug: Web/API/GPU/requestAdapter
l10n:
  sourceCommit: 19b8981ede1bc5dad6e0eb7f5f7c2a0ee0c296f1
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`requestAdapter()`**-Methode der [`GPU`](/de/docs/Web/API/GPU) Schnittstelle gibt ein {{jsxref("Promise")}} zurück, das mit einer Instanz eines [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Objekt erfüllt wird. Von dieser Instanz aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, Adapterinformationen, Funktionen und Grenzen.

Beachten Sie, dass der Benutzeragent entscheidet, ob er einen Adapter zurückgibt. Wenn ja, entscheidet er entsprechend den bereitgestellten Optionen. Wenn keine Optionen angegeben sind, wird das Gerät Zugriff auf den Standard-Adapter gewähren, der in der Regel für die meisten Zwecke ausreichend ist.

## Syntax

```js-nolint
requestAdapter()
requestAdapter(options)
```

### Parameter

- `options` {{optional_inline}}
  - : Ein Objekt, das die folgenden Eigenschaften enthalten kann:
    - `featureLevel` {{optional_inline}}
      - : Ein enumerierter Wert, der die Menge an Funktionen spezifiziert, die der zurückgegebene Adapter unterstützen wird. Verfügbare Werte sind:
        - `core`
          - : Der Standardwert. Gibt an, dass der `GPUAdapter` alle Kern-WebGPU-Funktionen und -Grenzen unterstützt, was es Anwendungen ermöglicht, Geräte mit modernen Grafikplattform-APIs zu unterstützen. Dies wird als "core" WebGPU bezeichnet. Adapter, die core WebGPU unterstützen, werden die Funktion `core-features-and-limits` verfügbar haben (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)).
        - `compatibility`
          - : Gibt an, dass der `GPUAdapter` eine eingeschränkte Teilmenge der WebGPU API unterstützt, die in älteren Grafik-APIs wie OpenGL ES 3.1 und Direct3D 11 lauffähig ist. Diese Einstellung aktiviert den [Kompatibilitätsmodus](/de/docs/Web/API/WebGPU_API#webgpu_compatibility_mode) für WebGPU.
    - `powerPreference` {{optional_inline}}
      - : Ein enumerierter Wert, der verwendet werden kann, um dem Benutzeragenten einen Hinweis darauf zu geben, welche Klasse von Adapter aus den verfügbaren Adaptern des Systems ausgewählt werden sollte. Verfügbare Werte sind:
        - `undefined` (oder nicht spezifiziert)
          - : Gibt keinen Hinweis.
        - `"low-power"`
          - : Gibt einen Hinweis, die Energieeinsparung vor Leistung zu priorisieren. Wenn Ihre App mit dieser Einstellung gut funktioniert, wird empfohlen, sie zu verwenden, da sie die Batteriezeit auf tragbaren Geräten erheblich verbessern kann. Dies ist in der Regel der Standard, wenn keine Optionen bereitgestellt werden.
        - `"high-performance"`
          - : Gibt einen Hinweis, die Leistung vor dem Energieverbrauch zu priorisieren. Es wird empfohlen, diesen Wert nur dann anzugeben, wenn es absolut notwendig ist, da dies die Batteriezeit auf tragbaren Geräten erheblich verringern kann. Es kann auch zu einem erhöhten Verlust von [`GPUDevice`](/de/docs/Web/API/GPUDevice) führen — das System wird manchmal wählen, zu einem Adapter mit niedrigerem Stromverbrauch zu wechseln, um Energie zu sparen.

        Der Hauptzweck dieses Hinweises besteht darin, zu beeinflussen, welche GPU in einem Multi-GPU-System verwendet wird. Einige Laptops verfügen beispielsweise über eine stromsparende integrierte GPU und eine leistungsstarke diskrete GPU. Verschiedene Faktoren können beeinflussen, welcher Adapter zurückgegeben wird, einschließlich Batteriezustand, angeschlossene Displays oder entfernbaren GPUs.

        > [!NOTE]
        > In Chrome auf Dual-GPU-macOS-Geräten wird die leistungsstarke diskrete GPU zurückgegeben, wenn `requestAdapter()` ohne `powerPreference`-Option aufgerufen wird, und das Gerät des Benutzers an Netzstrom angeschlossen ist. Andernfalls wird die stromsparende integrierte GPU zurückgegeben.

### Fallback-Adapter

Der vom Benutzeragenten bereitgestellte Adapter kann ein **Fallback-Adapter** sein, wenn er feststellt, dass dies die am besten geeignete verfügbare Option ist. Ein Fallback-Adapter hat im Allgemeinen erhebliche Leistungseinschränkungen im Austausch für eine Kombination aus breiterer Kompatibilität, vorhersehbarem Verhalten oder verbesserter Privatsphäre. Einige Browser bieten zum Beispiel eine softwarebasierte Implementierung der API über einen Fallback-Adapter. Ein Fallback-Adapter wird nicht auf jedem System verfügbar sein.

Wenn Sie verhindern möchten, dass Ihre Anwendungen auf Fallback-Adaptern laufen, sollten Sie das [`GPUAdapter.isFallbackAdapter`](/de/docs/Web/API/GPUAdapter/isFallbackAdapter)-Attribut prüfen, bevor Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern.

> [!NOTE]
> Die Spezifikation umfasst eine `forceFallbackAdapter`-Option für `requestAdapter()`. Dies ist ein boolescher Wert, der, wenn er auf `true` gesetzt ist, den Benutzeragenten zwingt, einen Fallback-Adapter zurückzugeben, wenn einer verfügbar ist. Dies wird derzeit von keinem Browser unterstützt.

### Rückgabewert

Ein {{jsxref("Promise")}} das mit einer [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) Objektinstanz erfüllt wird, wenn die Anforderung erfolgreich ist.

`requestAdapter()` wird auf `null` aufgelöst, wenn kein geeigneter Adapter verfügbar ist.

### Ausnahmen

Keine.

## Beispiele

### Grundlegende Verwendung

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

### Kompatibilitätsmodus nur bei Bedarf verwenden

Sie können eine Anwendung erstellen, die den Kompatibilitätsmodus nur dann verwendet, wenn es notwendig ist, und auf core WebGPU zu wechseln, wenn die grundlegenden Funktionen verfügbar sind.

Um dies zu tun, sollten Sie zuerst einen Kompatibilitätsmodus-Adapter anfordern:

```js
const adapter = await navigator.gpu.requestAdapter({
  featureLevel: "compatibility",
});
```

Anschließend prüfen Sie, ob die Funktion `core-features-and-limits` verfügbar ist, indem Sie die {{jsxref("Set.has", "has()")}} Methode verwenden, die auf dem [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures) Objekt verfügbar ist. Wenn sie verfügbar ist, fordern Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit `core-features-and-limits` als erforderliche Funktion an. Wenn nicht, geben Sie diese erforderliche Funktion nicht an.

```js
const hasCore = adapter.features.has("core-features-and-limits");
const device = await adapter.requestDevice({
  requiredFeatures: [...(hasCore ? ["core-features-and-limits"] : [])],
});
```

Nachfolgender Code, der prüfen möchte, ob das Gerät ein Core- oder Kompatibilitätsgerät ist, sollte die Funktionen des Geräts überprüfen:

```js
const isCore = device.features.has("core-features-and-limits");
```

Der Wert `isCore` wird auf einem Core-Gerät immer `true` sein.

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
