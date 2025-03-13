---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 34d725c0f6e65c5712274a0c88ed2c7f5e5f3d5a
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Auf das `GPUSupportedFeatures`-Objekt des aktuellen Adapters wird über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features)-Eigenschaft zugegriffen – verwenden Sie diese, um zu testen, welche Funktionen Ihr aktuelles Setup unterstützt. Um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit einer bestimmten Funktion zu erstellen, müssen Sie es im [`requiredFeatures`](/de/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures)-Array des [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice)-Descriptors angeben.

Bitte beachten Sie, dass nicht alle Funktionen in allen Browsern, die WebGPU unterstützen, verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte auf Einschränkungen im zugrunde liegenden System, Browser oder Adapter zurückzuführen sein. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise keine Exposition einer Funktion in einer Weise garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, die Unterstützung dieser Funktion zu implementieren, oder hat dies einfach noch nicht geschafft.

Wenn Sie planen, in einer WebGPU-Anwendung von einer bestimmten zusätzlichen Funktion zu profitieren, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden zusätzlichen Funktionen sind in WebGPU definiert. Beachten Sie, dass die genaue Menge an verfügbaren Funktionen je nach Implementierung und physischem Gerät unterschiedlich ist und sich im Laufe der Zeit ändert.

| Funktionsname                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bgra8unorm-storage`                 | Wenn aktiviert, ermöglicht `STORAGE_BINDING`-[`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `bgra8unorm`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `clip-distances`                     | Wenn aktiviert, ermöglicht die Verwendung von [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `depth-clip-control`                 | Ermöglicht das Deaktivieren des [Tiefen-Clippings](https://gpuweb.github.io/gpuweb/#depth-clipping). Wenn `depth-clip-control` aktiviert ist, ist die [`unclippedDepth`](/de/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth)-Eigenschaft verfügbar auf dem `primitive`-Objekt, das als Teil des [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)- oder [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Descriptors enthalten ist, wenn ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erstellt wird. `primitive` beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert. Setzen Sie `unclipped-depth` auf `true`, um das Tiefen-Clipping zu deaktivieren.                                                                                                                                                                                                                                                           |
| `depth32float-stencil8`              | Ermöglicht die Erstellung von Texturen mit dem Format `depth32float-stencil8`. Wenn `depth32float-stencil8` aktiviert ist, kann der Wert `depth32float-stencil8` für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `dual-source-blending`               | Wenn aktiviert, ermöglicht die Verwendung von [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL, das beide Pixel-Shader-Ausgaben (`@blend_src(0)` und `@blend_src(1)`) als Eingaben für eine Mischoperation mit der einzigen Farbanhangslinie bei `@location(0)` verwendet. In WebGPU ermöglicht `dual-source-blending` die folgenden Blendfaktor-Operationen (angegeben in den [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor)- und [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor)-Eigenschaften der [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)- und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Descriptors): `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha`.                                                                                                                                                                                    |
| `float32-blendable`                  | Wenn aktiviert, ermöglicht das [Mischen](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `float32-filterable`                 | Wenn aktiviert, ermöglicht das [Filtern](/de/docs/Web/API/GPUDevice/createSampler#magfilter) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `indirect-first-instance`            | Wenn aktiviert, erlaubt die Verwendung von Nicht-Null-`firstInstance`-Werten in der `indirectBuffer`-Eigenschaft der `drawIndirect()`- und `drawIndexedIndirect()`-Methoden, die auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) und [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Instanzen verfügbar sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `rg11b10ufloat-renderable`           | Wenn aktiviert, ermöglicht `RENDER_ATTACHMENT`-[`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `rg11b10ufloat`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s sowie deren Vermischung und Multisampling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `shader-f16`                         | Wenn aktiviert, ermöglicht die Verwendung des Halbpräzisions-Gleitkomma-Typs [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `texture-compression-bc`             | Ermöglicht die Erstellung von zweidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb`.                                                                                                                                                                                                                                                                                                                                                                         |
| `texture-compression-bc-sliced-3d`   | Ermöglicht die Erstellung von dreidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc-sliced-3d` aktiviert ist, muss auch `texture-compression-bc` aktiviert sein, da es die BC-Texturformate zur Verwendung in den ersten beiden Dimensionen aktiviert (siehe `texture-compression-bc` oben). `texture-compression-bc-sliced-3d` ermöglicht die Verwendung dieser Texturen in der dritten Dimension. Adapter, die `texture-compression-bc` unterstützen, unterstützen auch immer `texture-compression-bc-sliced-3d`. **Beachten Sie, dass diese Funktion derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `texture-compression-astc`           | Ermöglicht die Erstellung von zweidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb` und `astc-12x12-unorm`, `astc-12x12-unorm-srgb`.                            |
| `texture-compression-astc-sliced-3d` | Ermöglicht die Erstellung von dreidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc-sliced-3d` aktiviert ist, muss auch `texture-compression-astc` aktiviert sein, da es die ASTC-Texturformate zur Verwendung in den ersten beiden Dimensionen aktiviert (siehe `texture-compression-astc`, oben). `texture-compression-astc-sliced-3d` ermöglicht die Verwendung dieser Texturen in der dritten Dimension. Adapter, die `texture-compression-astc` unterstützen, unterstützen nicht immer `texture-compression-astc-sliced-3d`. **Beachten Sie, dass diese Funktion derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                              |
| `texture-compression-etc2`           | Ermöglicht die Erstellung von zweidimensionalen ETC2-komprimierten Texturen. Wenn `texture-compression-etc2` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm`.                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `timestamp-query`                    | Ermöglicht das Durchführen von Zeitstempelabfragen, die die zur Ausführung von Compute- und Render-Passes benötigte Zeit messen. Wenn `timestamp-query` aktiviert ist, kann der `timestamp`-Wert für die [`type`](/de/docs/Web/API/GPUDevice/createQuerySet#type)-Eigenschaft des [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)-Descriptors verwendet werden, wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) erstellt wird. Darüber hinaus kann die `timestampWrites`-Eigenschaft auf dem [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und dem [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptor gesetzt werden, wenn ein [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) bzw. [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) erstellt wird. `GPUQuerySet`-Objekte werden innerhalb der in der `timestampWrites`-Eigenschaft enthaltenen Objekte referenziert, um anzugeben, wohin Zeitstempel geschrieben werden sollen. |

## Instanz-Eigenschaften

Die folgenden Eigenschaften sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten stehenden Links führen zur {{jsxref("Set")}}-Referenzseite des globalen Objekts).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanz-Methoden

Die folgenden Methoden sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten stehenden Links führen zur {{jsxref("Set")}}-Referenzseite des globalen Objekts).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfüge-Reihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfüge-Reihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft eine bereitgestellte Callback-Funktion einmal für jeden Wert im Set in Einfüge-Reihenfolge auf.

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

  const adapterFeatures = adapter.features;

  // Return the size of the set
  console.log(adapterFeatures.size);

  // Check whether a feature is supported by the adapter
  console.log(adapterFeatures.has("texture-compression-astc"));

  // Iterate through all the set values using values()
  const valueIterator = adapterFeatures.values();
  for (const value of valueIterator) {
    console.log(value);
  }

  // Iterate through all the set values using keys()
  const keyIterator = adapterFeatures.keys();
  for (const value of keyIterator) {
    console.log(value);
  }

  // Iterate through all the set values using entries()
  const entryIterator = adapterFeatures.entries();
  for (const entry of entryIterator) {
    console.log(entry[0]);
  }

  // Iterate through all the set values using forEach()
  adapterFeatures.forEach((value) => {
    console.log(value);
  });

  //...
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- Die Spezifikation [Feature Index](https://gpuweb.github.io/gpuweb/#feature-index)
