---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Das `GPUSupportedFeatures`-Objekt für den aktuellen Adapter kann über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features)-Eigenschaft abgerufen werden — verwenden Sie dies, um zu überprüfen, welche Funktionen Ihre aktuelle Konfiguration unterstützt. Um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit einer bestimmten aktivierten Funktion zu erstellen, müssen Sie diese im [`requiredFeatures`](/de/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures)-Array des [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice)-Descriptors angeben.

Beachten Sie, dass nicht alle Funktionen in WebGPU in allen unterstützenden Browsern verfügbar sein werden, selbst wenn die Funktionen von der zugrunde liegenden Hardware unterstützt werden. Dies könnte auf Einschränkungen im zugrunde liegenden System, Browser oder Adapter zurückzuführen sein. Zum Beispiel:

- Das zugrunde liegende System kann nicht garantieren, dass eine Funktion auf eine Weise freigegeben wird, die mit einem bestimmten Browser kompatibel ist.
- Der Browseranbieter hat möglicherweise keinen sicheren Weg gefunden, um die Unterstützung dieser Funktion zu implementieren, oder hat es einfach noch nicht getan.

Wenn Sie hoffen, eine bestimmte zusätzliche Funktion in einer WebGPU-App zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden zusätzlichen Funktionen sind in WebGPU definiert. Beachten Sie, dass der genaue Umfang der verfügbaren Funktionen zwischen verschiedenen Implementierungen und physischen Geräten variieren und sich im Laufe der Zeit ändern wird.

| Funktionsname                        | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bgra8unorm-storage`                 | Wenn aktiviert, erlaubt die `STORAGE_BINDING` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `bgra8unorm`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| `clip-distances`                     | Wenn aktiviert, erlaubt die Verwendung von [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `depth-clip-control`                 | Erlaubt, [depth-clipping](https://gpuweb.github.io/gpuweb/#depth-clipping) zu deaktivieren. Wenn `depth-clip-control` aktiviert ist, steht die [`unclippedDepth`](/de/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth)-Eigenschaft auf dem `primitive`-Objekt zur Verfügung, das als Teil des [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Descriptors beim Erstellen eines [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) enthalten ist. `primitive` beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert. Stellen Sie `unclipped-depth` auf `true`, um depth-clipping zu deaktivieren.                                                                                                                                                                                                                                                                                             |
| `depth32float-stencil8`              | Erlaubt die Erstellung von Texturen mit dem Format `depth32float-stencil8`. Wenn `depth32float-stencil8` aktiviert ist, kann der Wert `depth32float-stencil8` für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `dual-source-blending`               | Wenn aktiviert, erlaubt die Verwendung von [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL, das beide Pixel-Shader-Ausgaben (`@blend_src(0)` und `@blend_src(1)`) als Eingaben zu einer Mischoperation mit dem einzigen Farbanhang bei `@location(0)` verwendet. In WebGPU ermöglicht `dual-source-blending` die folgenden Blendfaktor-Operationen (die in den [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) und [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor)-Eigenschaften von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Descriptoren angegeben werden): `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha`.                                                                                                                                                                                                          |
| `float32-blendable`                  | Wenn aktiviert, erlaubt das [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von `r32float`-, `rg32float`-, und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `float32-filterable`                 | Wenn aktiviert, erlaubt das [Filtern](/de/docs/Web/API/GPUDevice/createSampler#magfilter) von `r32float`-, `rg32float`-, und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| `indirect-first-instance`            | Wenn aktiviert, erlaubt die Verwendung von nicht-null `firstInstance` Werten in der `indirectBuffer`-Eigenschaft der `drawIndirect()` und `drawIndexedIndirect()`-Methoden, die auf Instanzen von [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) und [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verfügbar sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `rg11b10ufloat-renderable`           | Wenn aktiviert, erlaubt die `RENDER_ATTACHMENT` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `rg11b10ufloat`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s sowie deren Blending und Multisampling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `shader-f16`                         | Wenn aktiviert, erlaubt die Verwendung des Halbgleitkomma-Datentyps [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `subgroups`                          | Wenn aktiviert, erlaubt die Verwendung von [subgroups](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) in WGSL. Subgroups ermöglichen SIMD-Level-Parallelismus, wobei Threads in einer Arbeitsgruppe kommunizieren und kollektive mathematische Operationen wie die Berechnung einer Summe von Zahlen ausführen können. Subgroups bieten eine effiziente Methode zum Thread-übergreifenden Datenaustausch. Beachten Sie, dass die [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize)- und [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize)-Eigenschaften nützlich sein können, um zu überprüfen, ob Sie beispielsweise einen fest programmierten Algorithmus haben, der eine Subgroup einer bestimmten Größe erfordert. Sie können f16-Werte mit Subgroups verwenden, wenn Sie ein GPUDevice mit beiden Funktionen, `shader-f16` und `subgroups`, anfordern.                                                                                                                                                                   |
| `texture-compression-bc`             | Erlaubt die Erstellung von zweidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, und `bc7-rgba-unorm-srgb`.                                                                                                                                                                                                                                                                                                                                                                                                  |
| `texture-compression-bc-sliced-3d`   | Erlaubt die Erstellung von dreidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc-sliced-3d` aktiviert ist, muss auch `texture-compression-bc` aktiviert sein, da es die BC-Texturformate erlaubt, in den ersten beiden Dimensionen verwendet zu werden (siehe `texture-compression-bc`, oben). `texture-compression-bc-sliced-3d` ermöglicht, dass diese Texturen in der dritten Dimension verwendet werden. Adapter, die `texture-compression-bc` unterstützen, unterstützen immer `texture-compression-bc-sliced-3d`. **Beachten Sie, dass diese Funktion derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `texture-compression-astc`           | Erlaubt die Erstellung von zweidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, und `astc-12x12-unorm`, `astc-12x12-unorm-srgb`.                                                     |
| `texture-compression-astc-sliced-3d` | Erlaubt die Erstellung von dreidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc-sliced-3d` aktiviert ist, muss auch `texture-compression-astc` aktiviert sein, da es die ASTC-Texturformate erlaubt, in den ersten beiden Dimensionen verwendet zu werden (siehe `texture-compression-astc`, oben). `texture-compression-astc-sliced-3d` ermöglicht, dass diese Texturen in der dritten Dimension verwendet werden. Adapter, die `texture-compression-astc` unterstützen, unterstützen nicht immer `texture-compression-astc-sliced-3d`. **Beachten Sie, dass diese Funktion derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `texture-compression-etc2`           | Erlaubt die Erstellung von zweidimensionalen ETC2-komprimierten Texturen. Wenn `texture-compression-etc2` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Descriptors verwendet werden, wenn ein [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellt wird: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, und `eac-rg11snorm`.                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `timestamp-query`                    | Erlaubt das Ausführen von Zeitstempelabfragen, die die Zeit messen, die für die Ausführung von Berechnungs- und Renderpässe benötigt wird. Wenn `timestamp-query` aktiviert ist, kann der Wert `timestamp` für die [`type`](/de/docs/Web/API/GPUDevice/createQuerySet#type)-Eigenschaft des [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)-Descriptors gesetzt werden, wenn ein [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) erstellt wird. Darüber hinaus kann die `timestampWrites`-Eigenschaft auf den [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Descriptors gesetzt werden, wenn ein [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) und [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) bzw. erstellt werden. `GPUQuerySet`-Objekte werden innerhalb der Objekte referenziert, die in der `timestampWrites`-Eigenschaft enthalten sind, um anzugeben, wohin die Zeitstempel geschrieben werden sollen. |

## Instanzeigenschaften

Die folgenden Eigenschaften sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten stehenden Links führen zur Referenzseite des {{jsxref("Set")}}-globalen Objekts).

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [`Set`-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die unten stehenden Links führen zur Referenzseite des {{jsxref("Set")}}-globalen Objekts).

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen Booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das die **Werte** für jedes Element im Set in der Einfügereihenfolge durchläuft.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iteratorobjekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in der Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft eine bereitgestellte Callback-Funktion für jeden im Set vorhandenen Wert in Einfügereihenfolge einmal auf.

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

  // …
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
- Der Spezifikations-[Feature-Index](https://gpuweb.github.io/gpuweb/#feature-index)
