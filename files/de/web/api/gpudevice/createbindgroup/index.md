---
title: "GPUDevice: createBindGroup()-Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erzeugt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Menge von Ressourcen definiert, die in einer Gruppe gebunden werden sollen, und wie diese Ressourcen in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die dem Shader ausgesetzt werden sollen. Es gibt für jede entsprechende Eintragung, die im `layout`-Attribut durch das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) beschrieben ist, eine Eintragung. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenzuordnung darstellt, und die dem `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrags entspricht. Außerdem entspricht dies dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann eine der folgenden sein:
            - `GPUBufferBinding` (welches einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) umschließt; siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition)
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen, zu identifizieren.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindungsgruppe entsprechen.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset in Bytes vom Beginn des `buffers` bis zum Beginn des Bereichs, der dem Shader durch die Pufferbindung freigelegt wird. Wenn ausgelassen, wird `offset` standardmäßig auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Die Größe in Bytes der Pufferbindung. Wenn ausgelassen, wird `size` der Bereich ab `offset` bis zum Ende des `buffers` sein. Wenn sowohl `offset` als auch `size` weggelassen werden, wird der gesamte Puffer dem Shader ausgesetzt.

### Rückgabewert

Eine Instanz des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout`-[`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout`-[`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den korrekten Ressourcentyp. Zum Beispiel hat ein `buffer`-Ressourcenlayoutobjekt ein `GPUBufferBinding`-Objekt, das in der entsprechenden Bindung angegeben ist.
- Wenn das Ressourcenlayoutobjekt ein `buffer` ist:
  - Der entsprechend gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen gebundenen Teil (wie durch `offset` und `size` angegeben) komplett darin enthalten, mit einer nicht-null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcenlayouts.
  - Wenn der Ressourcenlayoutobjekttyp `"uniform"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) eine `usage`, die `GPUBufferUsage.UNIFORM` umfasst.
    - Ist die effektive Größe des gebundenen Puffersegments kleiner oder gleich der `maxUniformBufferBindingSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist der angegebene `GPUBufferBinding`-`offset` ein Vielfaches der `minUniformBufferOffsetAlignment` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der Ressourcenlayoutobjekttyp `"storage"` oder `"read-only-storage"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) eine `usage`, die `GPUBufferUsage.STORAGE` umfasst.
    - Ist die effektive Größe des gebundenen Puffersegments kleiner oder gleich der `maxStorageBufferBindingSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist die effektive Größe des gebundenen Puffersegments ein Vielfaches von 4.
    - Ist der angegebene `GPUBufferBinding`-`offset` ein Vielfaches der `minStorageBufferOffsetAlignment` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayoutobjekt ein `storageTexture` ist, hat die entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für mehr Details zu den Einstellungen einer Texture-Ansicht).
  - Ein `format`, das den `sampleType` des Ressourcenlayoutobjekts entspricht.
  - Eine `mipLevelCount` gleich 1.
  - Eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture), deren `usage` `GPUTextureUsage.STORAGE_BINDING` umfasst.
- Wenn das Ressourcenlayoutobjekt ein `texture` ist, hat die entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für mehr Details zu den Einstellungen einer Texture-Ansicht).
  - Ein `format`, das mit dem `sampleType` des Ressourcenlayoutobjekts kompatibel ist.
  - Eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture), deren `usage` `GPUTextureUsage.TEXTURE_BINDING` umfasst.
  - Eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `sampleCount`, das größer als 1 ist, wenn die `multisampled`-Eigenschaft des Ressourcenlayoutobjekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und die Verwendung als Vorlage beim Erstellen einer Bindungsgruppe.

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});

const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
