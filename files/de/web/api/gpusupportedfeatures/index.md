---
title: GPUSupportedFeatures
slug: Web/API/GPUSupportedFeatures
l10n:
  sourceCommit: e4ffa5e4befde66732cad271e39154a80477a33c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Das **`GPUSupportedFeatures`**-Interface der [WebGPU API](/de/docs/Web/API/WebGPU_API) ist ein [`Set`-ähnliches Objekt](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis), das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) unterstützt werden.

Auf das `GPUSupportedFeatures`-Objekt des aktuellen Adapters greifen Sie über die Eigenschaft [`GPUAdapter.features`](/de/docs/Web/API/GPUAdapter/features) zu. Damit können Sie prüfen, welche Funktionen Ihre aktuelle Umgebung unterstützt. Um ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) mit einer bestimmten aktivierten Funktion zu erstellen, müssen Sie diese im Array [`requiredFeatures`](/de/docs/Web/API/GPUAdapter/requestDevice#requiredfeatures) des `GPUAdapter.requestDevice()`-Deskriptors angeben.

Nicht alle Funktionen sind in jedem Browser, der WebGPU unterstützt, für WebGPU verfügbar – selbst wenn die zugrunde liegende Hardware sie unterstützt. Dies kann an Einschränkungen des zugrunde liegenden Systems, des Browsers oder des Adapters liegen. Zum Beispiel:

- Das zugrunde liegende System kann möglicherweise nicht gewährleisten, dass eine Funktion auf eine Weise bereitgestellt wird, die mit einem bestimmten Browser kompatibel ist.
- Der Browseranbieter hat möglicherweise noch keinen sicheren Weg gefunden, die Unterstützung für diese Funktion zu implementieren, oder ist noch nicht dazu gekommen.

Wenn Sie eine bestimmte zusätzliche Funktion in einer WebGPU-Anwendung verwenden möchten, testen Sie sie gründlich.

{{InheritanceDiagram}}

## Verfügbare Funktionen

Die folgenden zusätzlichen Funktionen sind in WebGPU definiert. Beachten Sie, dass die genaue Menge der verfügbaren Funktionen je nach Implementierung und physischem Gerät variiert und sich im Laufe der Zeit ändern kann.

- `bgra8unorm-storage`
  - : Wenn aktiviert, ermöglicht diese Funktion `STORAGE_BINDING`-[`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) für [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte mit dem [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `bgra8unorm`.
- `clip-distances`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung von [`clip_distances`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-clip_distances) in WGSL.
- `core-features-and-limits`
  - : Wenn aktiviert, zeigt diese Funktion an, dass der [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) beziehungsweise das [`GPUDevice`](/de/docs/Web/API/GPUDevice) alle „Core“-Funktionen und -Limits von WebGPU verwenden kann. Dadurch können Anwendungen Geräte unterstützen, die moderne Plattform-Grafik-APIs verwenden. Standardmäßig ist `core-features-and-limits` bei allen Adaptern aktiviert; sie unterstützen daher Core WebGPU. Um einen Adapter im „Kompatibilitätsmodus“ zu erstellen, geben Sie beim Aufruf von [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) für [`featureLevel`](/de/docs/Web/API/GPU/requestAdapter#featurelevel) den Wert `compatibility` an. Der Kompatibilitätsmodus unterstützt ältere Grafik-APIs wie Direct3D 11 und OpenGL ES 3.1, allerdings auf Kosten der Leistung und des Funktionsumfangs.

    Beachten Sie, dass ein Adapter im Kompatibilitätsmodus nur auf Geräten erstellt wird, die Core WebGPU nicht unterstützen. Auf Geräten, die Core WebGPU unterstützen, unterstützt auch der Adapter Core WebGPU (`core-features-and-limits` ist aktiviert), und Sie können moderne Funktionen verwenden. Ein Beispiel dazu finden Sie unter [Kompatibilitätsmodus nur bei Bedarf verwenden](/de/docs/Web/API/GPU/requestAdapter#using_compatibility_mode_only_if_necessary).

- `depth-clip-control`
  - : Wenn aktiviert, kann [Depth-Clipping](https://gpuweb.github.io/gpuweb/#depth-clipping) deaktiviert werden. Bei aktiviertem `depth-clip-control` ist die Eigenschaft [`unclippedDepth`](/de/docs/Web/API/GPUDevice/createRenderPipeline#unclippeddepth) auf dem `primitive`-Objekt verfügbar, das beim Erstellen einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Teil des Deskriptors von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) oder [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) ist. `primitive` beschreibt, wie eine Pipeline aus ihren Vertex-Eingaben Primitives erstellt und rasterisiert. Setzen Sie `unclippedDepth` auf `true`, um Depth-Clipping zu deaktivieren.
- `depth32float-stencil8`
  - : Wenn aktiviert, können Texturen mit dem Format `depth32float-stencil8` erstellt werden. Bei aktiviertem `depth32float-stencil8` kann beim Erstellen einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) der Wert `depth32float-stencil8` für die Eigenschaft [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Deskriptors verwendet werden.
- `dual-source-blending`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung von [`dual_source_blending`](https://gpuweb.github.io/gpuweb/wgsl/#extension-dual_source_blending) in WGSL. Dabei werden beide Pixel-Shader-Ausgaben (`@blend_src(0)` und `@blend_src(1)`) als Eingaben für eine Blending-Operation mit dem einzelnen Color-Attachment an `@location(0)` verwendet. In WebGPU aktiviert `dual-source-blending` die folgenden Blend-Faktoren, die in den Eigenschaften [`dstFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) und [`srcFactor`](/de/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) der Deskriptoren von [`createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) und [`createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) angegeben werden: `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha`.
- `float32-blendable`
  - : Wenn aktiviert, ermöglicht diese Funktion [Blending](/de/docs/Web/API/GPUDevice/createRenderPipeline#blend) für [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte mit dem [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `r32float`, `rg32float` oder `rgba32float`.
- `float32-filterable`
  - : Wenn aktiviert, ermöglicht diese Funktion [Filtering](/de/docs/Web/API/GPUDevice/createSampler#magfilter) für [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte mit dem [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `r32float`, `rg32float` oder `rgba32float`.
- `indirect-first-instance`
  - : Wenn aktiviert, können in der Eigenschaft `indirectBuffer` der Methoden `drawIndirect()` und `drawIndexedIndirect()` von [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)- und [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)-Instanzen `firstInstance`-Werte ungleich null verwendet werden.
- `primitive-index`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung der eingebauten Variable [`primitive_index`](https://gpuweb.github.io/gpuweb/wgsl/#built-in-values-primitive_index) in WGSL. Dieser eingebaute Eingabewert stellt Fragment-Shadern auf unterstützter Hardware einen Index pro Primitive bereit, ähnlich den vorhandenen eingebauten Werten [`vertex_index`](https://gpuweb.github.io/gpuweb/wgsl/#vertex-index-builtin-value) und [`instance_index`](https://gpuweb.github.io/gpuweb/wgsl/#instance-index-builtin-value). Die eingebaute Variable `primitive_index` ist für fortgeschrittene Grafiktechniken wie virtualisierte Geometrie nützlich.
- `rg11b10ufloat-renderable`
  - : Wenn aktiviert, ermöglicht diese Funktion `RENDER_ATTACHMENT`-[`usage`](/de/docs/Web/API/GPUDevice/createTexture#usage) für [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte mit dem [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) `rg11b10ufloat` sowie deren Blending und Multisampling.
- `shader-f16`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung des Gleitkommatyps mit halber Genauigkeit [`f16`](https://gpuweb.github.io/gpuweb/wgsl/#extension-f16) in WGSL.
- `subgroups`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung von [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) in WGSL. Subgroups ermöglichen Parallelität auf {{Glossary("SIMD", "SIMD")}}-Ebene: Threads innerhalb einer Workgroup können miteinander kommunizieren, gemeinsame mathematische Operationen wie Summenberechnungen ausführen und Daten effizient austauschen.

    Die Eigenschaften [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) und [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) können hilfreich sein, um zu prüfen, ob der Adapter die für einen Algorithmus fest vorgegebene Subgroup-Größe unterstützt. Sie können f16-Werte mit Subgroups verwenden, wenn Sie ein GPUDevice mit den beiden Funktionen `shader-f16` und `subgroups` anfordern. Wenn `subgroups` aktiviert ist, kann außerdem die WGSL-Sprachfunktion [`subgroup_id`](/de/docs/Web/API/WGSLLanguageFeatures#subgroup_id) verwendet werden.
- `subgroup-size-control`
  - : Wenn aktiviert, ermöglicht diese Funktion die Verwendung von [`subgroups`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroups) und [`subgroup_size_control`](https://gpuweb.github.io/gpuweb/wgsl/#extension-subgroup_size_control) in WGSL (die Funktion `subgroups` wird automatisch aktiviert). Damit können Sie die Subgroup-Größe einer Compute-Pipeline mithilfe des Attributs [`@subgroup_size()`](https://gpuweb.github.io/gpuweb/wgsl/#subgroup-size-attr) in WGSL-Compute-Shadern festlegen. Das ist nützlich, um die Leistung von Compute-Shadern bei Subgroup-Operationen auf bestimmten Plattformen zu optimieren, etwa für KI-Workloads. Die Subgroup-Größe muss eine Zweierpotenz sein und innerhalb des Bereichs von [`subgroupMinSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMinSize) bis [`subgroupMaxSize`](/de/docs/Web/API/GPUAdapterInfo/subgroupMaxSize) des Adapters liegen, einschließlich der Grenzwerte. Weitere Informationen finden Sie unter [Steuerung der Subgroup-Größe](https://developer.chrome.com/blog/new-in-webgpu-151-152#subgroup-size).
- `texture-component-swizzle`
  - : Wenn aktiviert, kann beim Aufruf von `GPUTexture.createView()` die Eigenschaft [`swizzle`](/de/docs/Web/API/GPUTexture/createView#swizzle) festgelegt werden. Dadurch kann eine Texture-View die Werte des Rot-, Grün-, Blau- und Alphakanals einer Textur neu anordnen oder ersetzen, wenn ein Shader darauf zugreift.
- `texture-compression-bc`
  - : Wenn aktiviert, können zweidimensionale BC-komprimierte Texturen erstellt werden. Bei aktiviertem `texture-compression-bc` können beim Erstellen einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) die folgenden Werte für die Eigenschaft [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Deskriptors verwendet werden: `bc1-rgba-unorm`, `bc1-rgba-unorm-srgb`, `bc2-rgba-unorm`, `bc2-rgba-unorm-srgb`, `bc3-rgba-unorm`, `bc3-rgba-unorm-srgb`, `bc4-r-unorm`, `bc4-r-snorm`, `bc5-rg-unorm`, `bc5-rg-snorm`, `bc6h-rgb-ufloat`, `bc6h-rgb-float`, `bc7-rgba-unorm` und `bc7-rgba-unorm-srgb`.
- `texture-compression-bc-sliced-3d`
  - : Wenn aktiviert, können dreidimensionale BC-komprimierte Texturen erstellt werden. Bei aktiviertem `texture-compression-bc-sliced-3d` wird `texture-compression-bc` automatisch aktiviert, da diese Funktion die Verwendung von BC-Texturformaten (siehe `texture-compression-bc` oben) in den ersten beiden Dimensionen ermöglicht. `texture-compression-bc-sliced-3d` ermöglicht die Verwendung derselben Texturen in der dritten Dimension.
- `texture-compression-astc`
  - : Wenn aktiviert, können zweidimensionale ASTC-komprimierte Texturen erstellt werden. Bei aktiviertem `texture-compression-astc` können beim Erstellen einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) die folgenden Werte für die Eigenschaft [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Deskriptors verwendet werden: `astc-4x4-unorm`, `astc-4x4-unorm-srgb`, `astc-5x4-unorm`, `astc-5x4-unorm-srgb`, `astc-5x5-unorm`, `astc-5x5-unorm-srgb`, `astc-6x5-unorm`, `astc-6x5-unorm-srgb`, `astc-6x6-unorm`, `astc-6x6-unorm-srgb`, `astc-8x5-unorm`, `astc-8x5-unorm-srgb`, `astc-8x6-unorm`, `astc-8x6-unorm-srgb`, `astc-8x8-unorm`, `astc-8x8-unorm-srgb`, `astc-10x5-unorm`, `astc-10x5-unorm-srgb`, `astc-10x6-unorm`, `astc-10x6-unorm-srgb`, `astc-10x8-unorm`, `astc-10x8-unorm-srgb`, `astc-10x10-unorm`, `astc-10x10-unorm-srgb`, `astc-12x10-unorm`, `astc-12x10-unorm-srgb`, `astc-12x12-unorm` und `astc-12x12-unorm-srgb`.
- `texture-compression-astc-sliced-3d`
  - : Wenn aktiviert, können dreidimensionale ASTC-komprimierte Texturen erstellt werden. Bei aktiviertem `texture-compression-astc-sliced-3d` wird `texture-compression-astc` automatisch aktiviert, da diese Funktion die Verwendung von ASTC-Texturformaten (siehe `texture-compression-astc` oben) in den ersten beiden Dimensionen ermöglicht. `texture-compression-astc-sliced-3d` ermöglicht die Verwendung derselben Texturen in der dritten Dimension.
- `texture-compression-etc2`
  - : Wenn aktiviert, können zweidimensionale ETC2-komprimierte Texturen erstellt werden. Bei aktiviertem `texture-compression-etc2` können beim Erstellen einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) die folgenden Werte für die Eigenschaft [`format`](/de/docs/Web/API/GPUDevice/createTexture#format) des [`createTexture()`](/de/docs/Web/API/GPUDevice/createTexture)-Deskriptors verwendet werden: `etc2-rgb8unorm`, `etc2-rgb8unorm-srgb`, `etc2-rgb8a1unorm`, `etc2-rgb8a1unorm-srgb`, `etc2-rgba8unorm`, `etc2-rgba8unorm-srgb`, `eac-r11unorm`, `eac-r11snorm`, `eac-rg11unorm` und `eac-rg11snorm`.
- `texture-formats-tier1`
  - : Wenn aktiviert, wird die Funktion `rg11b10ufloat-renderable` automatisch aktiviert. Außerdem können [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte über [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) mit den unter [Tier 1](/de/docs/Web/API/GPUDevice/createTexture#tier_1) angegebenen Formaten erstellt werden. Die Tier-1-Texturformate ermöglichen es Entwicklern, vorhandene Inhalte ins Web zu portieren, ohne sie für die kleinere Menge an Texturformaten umschreiben zu müssen, die Core WebGPU unterstützt.
- `texture-formats-tier2`
  - : Wenn aktiviert, werden die Funktionen `rg11b10ufloat-renderable` und `texture-formats-tier1` automatisch aktiviert. Außerdem können [`GPUTexture`](/de/docs/Web/API/GPUTexture)-Objekte über [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) mit den unter [Tier 2](/de/docs/Web/API/GPUDevice/createTexture#tier2) angegebenen Formaten erstellt werden. Die Tier-2-Texturformate bieten `read-write`-Speicherzugriff auf zusätzliche Texturformate, der für fortgeschrittene Anwendungsfälle erforderlich ist.
- `timestamp-query`
  - : Wenn aktiviert, können Timestamp-Queries ausgeführt werden, die die Ausführungsdauer von Compute- und Render-Passes messen. Bei aktiviertem `timestamp-query` kann beim Erstellen eines [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet) die Eigenschaft [`type`](/de/docs/Web/API/GPUDevice/createQuerySet#type) des [`createQuerySet()`](/de/docs/Web/API/GPUDevice/createQuerySet)-Deskriptors auf `timestamp` gesetzt werden. Außerdem kann beim Erstellen eines [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) beziehungsweise [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) die Eigenschaft `timestampWrites` im Deskriptor von [`beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) beziehungsweise [`beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) festgelegt werden. In den Objekten der Eigenschaft `timestampWrites` wird auf `GPUQuerySet`-Objekte verwiesen, um anzugeben, wohin Timestamps geschrieben werden sollen.

## Instanzeigenschaften

Die folgenden Eigenschaften stehen allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) zur Verfügung (die Links unten führen zur Referenzseite des globalen Objekts {{jsxref("Set")}}).

- {{jsxref("Set.prototype.size", "size")}}
  - : Gibt die Anzahl der Werte in der Menge zurück.

## Instanzmethoden

Die folgenden Methoden stehen allen schreibgeschützten [`Set`-ähnlichen Objekten](/de/docs/Web/JavaScript/Reference/Global_Objects/Set#set-like_browser_apis) zur Verfügung (die Links unten führen zur Referenzseite des globalen Objekts {{jsxref("Set")}}).

- {{jsxref("Set.prototype.has()", "has()")}}
  - : Gibt einen booleschen Wert zurück, der angibt, ob ein Element mit dem angegebenen Wert in der Menge vorhanden ist.
- {{jsxref("Set.prototype.values()", "values()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das die **Werte** der Elemente in der Menge in Einfügereihenfolge liefert.
- {{jsxref("Set.prototype.keys()", "keys()")}}
  - : Ein Alias für {{jsxref("Set.prototype.values()", "values()")}}.
- {{jsxref("Set.prototype.entries()", "entries()")}}
  - : Gibt ein neues Iterator-Objekt zurück, das für jedes Element der Menge **ein Array aus `[value, value]`** in Einfügereihenfolge enthält.
- {{jsxref("Set.prototype.forEach()", "forEach()")}}
  - : Ruft eine bereitgestellte Callback-Funktion für jeden Wert in der Menge einmal auf, und zwar in Einfügereihenfolge.

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
- Der [Funktionsindex der Spezifikation](https://gpuweb.github.io/gpuweb/#feature-index)
