---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`GPUSupportedFeatures`**-Schnittstelle der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [Set-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Das `GPUSupportedFeatures`-Objekt für den aktuellen Adapter wird über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features)-Eigenschaft abgerufen — verwenden Sie diese, um zu testen, welche Features Ihr aktuelles Setup unterstützt. Um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit einem bestimmten aktivierten Feature zu erstellen, müssen Sie es im [`requiredFeatures`](/de/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures)-Array der [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice)-Beschreibung angeben.

Sie sollten beachten, dass nicht alle Features für WebGPU in allen Browsern verfügbar sein werden, die es unterstützen, selbst wenn die Features von der zugrunde liegenden Hardware unterstützt werden. Dies könnte durch Einschränkungen im zugrunde liegenden System, im Browser oder im Adapter verursacht werden. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise nicht garantieren, dass ein Feature so bereitgestellt wird, dass es mit einem bestimmten Browser kompatibel ist.
- Der Browser-Hersteller hat möglicherweise keinen sicheren Weg gefunden, die Unterstützung für dieses Feature zu implementieren, oder hat es einfach noch nicht getan.

Wenn Sie hoffen, ein bestimmtes zusätzliches Feature in einer WebGPU-Anwendung zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Features

Die folgenden zusätzlichen Features sind in WebGPU definiert. Beachten Sie, dass sich der genaue Satz verfügbarer Features zwischen Implementierungen und physischen Geräten unterscheiden wird und sich im Laufe der Zeit ändern kann.

| Feature-Name                         | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `bgra8unorm-storage`                 | Wenn aktiviert, erlaubt es `STORAGE_BINDING` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `bgra8unorm`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `clip-distances`                     | Wenn aktiviert, ermöglicht es die Verwendung von [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `depth-clip-control`                 | Erlaubt das Deaktivieren von [depth-clipping](https://gpuweb.github.io/gpuweb/#depth-clipping). Wenn `depth-clip-control` aktiviert ist, ist die [`unclippedDepth`](/de/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth)-Eigenschaft auf dem `primitive`-Objekt verfügbar, das Teil der [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Beschreibung bei der Erstellung einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist. `primitive` beschreibt, wie eine Pipeline Primitiven aus den Vertex-Eingaben erstellt und rastert. Setzen Sie `unclipped-depth` auf `true`, um depth-clipping zu deaktivieren.                                                                                                                                                                                                                                                                                                            |
| `depth32float-stencil8`              | Erlaubt die Erstellung von Texturen mit dem Format `depth32float-stencil8`. Wenn `depth32float-stencil8` aktiviert ist, kann der `depth32float-stencil8`-Wert für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft der [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Beschreibung beim Erstellen einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) verwendet werden.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `dual-source-blending`               | Wenn aktiviert, ermöglicht es die Verwendung von [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL, das beide Pixel-Shader-Ausgaben (`@blend_src(0)` und `@blend_src(1)`) als Eingaben für eine Blend-Operation mit dem einzelnen Farbattachement bei `@location(0)` verwendet. In WebGPU ermöglicht `dual-source-blending` die folgenden Blend-Faktor-Operationen (spezifiziert in den [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) und [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor)-Eigenschaften von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Beschreibungen): `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha`.                                                                                                                                                                                           |
| `float32-blendable`                  | Wenn aktiviert, erlaubt es das [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `float32-filterable`                 | Wenn aktiviert, erlaubt es das [Filtern](/de/docs/Web/API/GPUDevice/createSampler#magfilter) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `indirect-first-instance`            | Wenn aktiviert, erlaubt es die Verwendung von nicht-null `firstInstance`-Werten in der `indirectBuffer`-Eigenschaft der `drawIndirect()`- und `drawIndexedIndirect()`-Methoden, die auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) und [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Instanzen verfügbar sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| `rg11b10ufloat-renderable`           | Wenn aktiviert, erlaubt es `RENDER_ATTACHMENT` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `rg11b10ufloat`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s, sowie deren Blending und Multisampling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `shader-f16`                         | Wenn aktiviert, erlaubt es die Verwendung des halbgenauen Fließkomma-Typs [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `subgroups`                          | Wenn aktiviert, erlaubt es die Verwendung von [subgroups](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) in WGSL. Subgroups ermöglichen SIMD-level Parallelität, indem Threads in einer Arbeitsgruppe kommunizieren und kollektive mathematische Operationen ausführen, wie das Berechnen einer Summe von Zahlen, und bieten eine effiziente Methode zum Teilen von Daten zwischen Threads. Beachten Sie, dass die [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) und [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize)-Eigenschaften nützlich sein können, um zu überprüfen, ob beispielsweise ein fest kodierter Algorithmus, der eine Subgroup einer bestimmten Größe erfordert, vorhanden ist. Sie können `f16`-Werte mit Subgroups verwenden, wenn Sie ein GPUDevice mit den Features `shader-f16` und `subgroups` anfordern.                                                                                                                                                                                  |
| `texture-compression-bc`             | Erlaubt die Erstellung von zweidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft der [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Beschreibung bei der Erstellung einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) verwendet werden: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, und `bc7-rgba-unorm-srgb`.                                                                                                                                                                                                                                                                                                                                                                                         |
| `texture-compression-bc-sliced-3d`   | Erlaubt die Erstellung von dreidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc-sliced-3d` aktiviert ist, muss auch `texture-compression-bc` aktiviert sein, da es die BC-Texturformate ermöglicht, die in den ersten beiden Dimensionen verwendet werden (siehe `texture-compression-bc`, oben). `texture-compression-bc-sliced-3d` ermöglicht es, diese Texturen auch in der dritten Dimension zu verwenden. Adapter, die `texture-compression-bc` unterstützen, unterstützen immer `texture-compression-bc-sliced-3d`. **Beachten Sie, dass dieses Feature derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `texture-compression-astc`           | Erlaubt die Erstellung von zweidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft der [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Beschreibung bei der Erstellung einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) verwendet werden: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, und `astc-12x12-unorm` `astc-12x12-unorm-srgb`.                                             |
| `texture-compression-astc-sliced-3d` | Erlaubt die Erstellung von dreidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc-sliced-3d` aktiviert ist, muss auch `texture-compression-astc` aktiviert sein, da es die ASTC-Texturformate ermöglicht, die in den ersten beiden Dimensionen verwendet werden (siehe `texture-compression-astc`, oben). `texture-compression-astc-sliced-3d` ermöglicht es, diese Texturen auch in der dritten Dimension zu verwenden. Adapter, die `texture-compression-astc` unterstützen, unterstützen nicht immer `texture-compression-astc-sliced-3d`. **Beachten Sie, dass dieses Feature derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `texture-compression-etc2`           | Erlaubt die Erstellung von zweidimensionalen ETC2-komprimierten Texturen. Wenn `texture-compression-etc2` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format)-Eigenschaft der [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Beschreibung bei der Erstellung einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) verwendet werden: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, und `eac-rg11snorm`.                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `timestamp-query`                    | Erlaubt die Ausführung von Zeitstempelabfragen, die die Zeit messen, die zur Ausführung von Rechen- und Rendering-Passagen benötigt wird. Wenn `timestamp-query` aktiviert ist, kann der `timestamp`-Wert für die [`type`](/de/docs/Web/API/GPUDevice/createQuerySet#type)-Eigenschaft der [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)-Beschreibung beim Erstellen eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) festgelegt werden. Zusätzlich kann die `timestampWrites`-Eigenschaft auf der [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass)- und [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Beschreibung festgelegt werden, wenn ein [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) und ein [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) erstellt werden. `GPUQuerySet`-Objekte werden innerhalb der Objekte referenziert, die in der `timestampWrites`-Eigenschaft enthalten sind, um anzugeben, wo Zeitstempel geschrieben werden sollen. |

## Instanzeigenschaften

Die folgenden Eigenschaften sind für alle schreibgeschützten [Set-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die untenstehenden Links führen zur {{jsxref("Set")}}-Referenzseite für das globale Objekt).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden sind für alle schreibgeschützten [Set-ähnlichen Objekte](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) verfügbar (die untenstehenden Links führen zur {{jsxref("Set")}}-Referenzseite für das globale Objekt).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem angegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft für jeden im Set vorhandenen Wert in Einfügereihenfolge einmal eine bereitgestellte Callback-Funktion auf.

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
- Die Spezifikation [Feature-Index](https://gpuweb.github.io/gpuweb/#feature-index)
