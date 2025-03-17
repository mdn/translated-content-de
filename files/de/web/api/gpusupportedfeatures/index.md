---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: cb55676aaa55c97d098c26cab84dafa0ac75e0d9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedFeatures`** Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Das `GPUSupportedFeatures` Objekt für den aktuellen Adapter wird über die [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features) Eigenschaft aufgerufen - nutzen Sie diese, um zu testen, welche Features Ihre aktuelle Konfiguration unterstützt. Um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit einem bestimmten aktivierten Feature zu erstellen, müssen Sie es im [`requiredFeatures`](/de/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures) Array des [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) Deskriptors angeben.

Sie sollten beachten, dass nicht alle Features für WebGPU in allen unterstützenden Browsern verfügbar sein werden, selbst wenn die Features von der zugrunde liegenden Hardware unterstützt werden. Dies könnte aufgrund von Einschränkungen im zugrunde liegenden System, Browser oder Adapter geschehen. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise nicht die Exposition eines Features in einer Weise garantieren, die mit einem bestimmten Browser kompatibel ist.
- Der Browser-Anbieter hat möglicherweise keinen sicheren Weg gefunden, um die Unterstützung für dieses Feature zu implementieren, oder hat es einfach noch nicht geschafft.

Wenn Sie hoffen, ein bestimmtes zusätzliches Feature in einer WebGPU-Anwendung zu nutzen, wird gründliches Testen empfohlen.

{{InheritanceDiagram}}

## Verfügbare Features

Die folgenden zusätzlichen Features sind in WebGPU definiert. Beachten Sie, dass der genaue Funktionsumfang je nach Implementierung und physischem Gerät variieren und sich im Laufe der Zeit ändern wird.

| Feature-Name                         | Beschreibung                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                |
| ------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `bgra8unorm-storage`                 | Wenn aktiviert, ermöglicht `STORAGE_BINDING` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) des `bgra8unorm`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           |
| `clip-distances`                     | Wenn aktiviert, ermöglicht die Verwendung von [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| `depth-clip-control`                 | Ermöglicht das Deaktivieren des [depth-clipping](https://gpuweb.github.io/gpuweb/#depth-clipping). Wenn `depth-clip-control` aktiviert ist, ist die [`unclippedDepth`](/de/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth) Eigenschaft auf dem `primitive` Objekt verfügbar, das Teil des Deskriptors ist, wenn Sie eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) mit [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) erstellen. `primitive` beschreibt, wie eine Pipeline Primitive aus den Vertex-Eingaben konstruiert und rastert. Setzen Sie `unclipped-depth` auf `true`, um das depth-clipping zu deaktivieren.                                                                                                                                                                                                                                                                                   |
| `depth32float-stencil8`              | Ermöglicht die Erstellung von Texturen mit dem Format `depth32float-stencil8`. Wenn `depth32float-stencil8` aktiviert ist, kann der Wert `depth32float-stencil8` für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Deskriptors verwendet werden, wenn Sie eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellen.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| `dual-source-blending`               | Wenn aktiviert, ermöglicht die Verwendung von [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL, das beide Pixelausgaben (`@blend_src(0)` und `@blend_src(1)`) als Eingaben für eine Mischoperation mit dem Einzel-Farbanhang an `@location(0)` verwendet. In WebGPU ermöglicht `dual-source-blending` die folgenden Blendfaktor-Operationen (angegeben in den [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) und [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) Eigenschaften der [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) Deskriptoren): `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha`.                                                                                                                                                                                                         |
| `float32-blendable`                  | Wenn aktiviert, ermöglicht das [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `float32-filterable`                 | Wenn aktiviert, ermöglicht das [Filtern](/de/docs/Web/API/GPUDevice/createSampler#magfilter) von `r32float`-, `rg32float`- und `rgba32float`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `indirect-first-instance`            | Wenn aktiviert, ermöglicht die Verwendung von nicht-null `firstInstance` Werten in der `indirectBuffer` Eigenschaft der `drawIndirect()` und `drawIndexedIndirect()` Methoden, die auf [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) und [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) Instanzen verfügbar sind.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    |
| `rg11b10ufloat-renderable`           | Wenn aktiviert, ermöglicht `RENDER_ATTACHMENT` [`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) von `rg11b10ufloat`-[`format`](/de/docs/Web/API/GPUDevice/createTexture#format) [`GPUTexture`](/de/docs/Web/API/GPUTexture)s sowie deren Blending und Multisampling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| `shader-f16`                         | Wenn aktiviert, ermöglicht die Verwendung des Halb-Präzisions-Gleitkomma-Typs [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         |
| `subgroups`                          | Wenn aktiviert, ermöglicht die Verwendung von [Subgruppen](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) in WGSL. Subgruppen ermöglichen SIMD-Level-Parallelismus, wodurch Threads in einer Arbeitsgruppe kommunizieren und kollektive mathematische Operationen wie das Berechnen einer Zahlensumme ausführen können, und bieten eine effiziente Methode für das Teilen von Daten zwischen Threads. Beachten Sie, dass die [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) und [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) Eigenschaften nützlich sein können, um zu überprüfen, ob Sie beispielsweise einen fest kodierten Algorithmus haben, der eine Subgruppe mit einer bestimmten Größe erfordert. Sie können `f16` Werte mit Subgruppen verwenden, wenn Sie ein GPUDevice mit beiden `shader-f16` und `subgroups` Features anfordern.                                                                                                                                                     |
| `texture-compression-bc`             | Ermöglicht die Erstellung von zweidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Deskriptors verwendet werden, wenn Sie eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellen: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm`, und `bc7-rgba-unorm-srgb`.                                                                                                                                                                                                                                                                                                                                                                          |
| `texture-compression-bc-sliced-3d`   | Ermöglicht die Erstellung von dreidimensionalen BC-komprimierten Texturen. Wenn `texture-compression-bc-sliced-3d` aktiviert ist, muss `texture-compression-bc` ebenfalls aktiviert sein, da es die BC-Texturformate ermöglicht, in den ersten beiden Dimensionen verwendet zu werden (siehe `texture-compression-bc` oben). `texture-compression-bc-sliced-3d` ermöglicht dieselben Texturen in der dritten Dimension. Adapter, die `texture-compression-bc` unterstützen, unterstützen immer `texture-compression-bc-sliced-3d`. **Beachten Sie, dass dieses Feature derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| `texture-compression-astc`           | Ermöglicht die Erstellung von zweidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Deskriptors verwendet werden, wenn Sie eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellen: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, und `astc-12x12-unorm``astc-12x12-unorm-srgb`.                               |
| `texture-compression-astc-sliced-3d` | Ermöglicht die Erstellung von dreidimensionalen ASTC-komprimierten Texturen. Wenn `texture-compression-astc-sliced-3d` aktiviert ist, muss `texture-compression-astc` ebenfalls aktiviert sein, da es die ASTC-Texturformate ermöglicht, in den ersten beiden Dimensionen verwendet zu werden (siehe `texture-compression-astc` oben). `texture-compression-astc-sliced-3d` ermöglicht dieselben Texturen in der dritten Dimension. Adapter, die `texture-compression-astc` unterstützen, unterstützen nicht immer `texture-compression-astc-sliced-3d`. **Beachten Sie, dass dieses Feature derzeit in keinem Browser unterstützt wird.**                                                                                                                                                                                                                                                                                                                                                                                                                  |
| `texture-compression-etc2`           | Ermöglicht die Erstellung von zweidimensionalen ETC2-komprimierten Texturen. Wenn `texture-compression-etc2` aktiviert ist, können die folgenden Werte für die [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) Eigenschaft des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) Deskriptors verwendet werden, wenn Sie eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) erstellen: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm`, und `eac-rg11snorm`.                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| `timestamp-query`                    | Ermöglicht das Ausführen von Zeitstempelabfragen, die die Zeit messen, die benötigt wird, um Berechnungs- und Renderpassagen auszuführen. Wenn `timestamp-query` aktiviert ist, kann der `timestamp` Wert für die [`type`](/de/docs/Web/API/GPUDevice/createQuerySet#type) Eigenschaft des [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet) Deskriptors beim Erstellen eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) festgelegt werden. Zusätzlich kann die `timestampWrites` Eigenschaft auf dem [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) und [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Deskriptor beim Erstellen eines [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) und [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) festgelegt werden. `GPUQuerySet` Objekte werden innerhalb der Objekte referenziert, die in der `timestampWrites` Eigenschaft enthalten sind, um anzugeben, wo Zeitstempel geschrieben werden sollen. |

## Instanzeigenschaften

Die folgenden Eigenschaften stehen allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) zur Verfügung (die untenstehenden Links verweisen auf die {{jsxref("Set")}} globale Objekt-Referenzseite).

- {{jsxref("Set.prototype.size", "size")}} {{Experimental_Inline}}
  - : Gibt die Anzahl der Werte im Set zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) zur Verfügung (die untenstehenden Links verweisen auf die {{jsxref("Set")}} globale Objekt-Referenzseite).

- {{jsxref("Set.prototype.has()", "has()")}} {{Experimental_Inline}}
  - : Gibt einen Boolean zurück, der angibt, ob ein Element mit dem gegebenen Wert im Set vorhanden ist oder nicht.
- {{jsxref("Set.prototype.values()", "values()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** für jedes Element im Set in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}} {{Experimental_Inline}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}} {{Experimental_Inline}}
  - : Gibt ein neues Iterator-Objekt zurück, das **ein Array von `[value, value]`** für jedes Element im Set in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}} {{Experimental_Inline}}
  - : Ruft eine bereitgestellte Callback-Funktion einmal für jeden Wert auf, der im Set vorhanden ist, in Einfügereihenfolge.

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
- Der Spezifikations-[Feature-Index](https://gpuweb.github.io/gpuweb/#feature-index)
