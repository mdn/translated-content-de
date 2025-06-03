---
title: "GPUDevice: createBindGroup() Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 1e1e0c43a7edb8835370e4c9ebc07d60a2372cf3
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Gruppe von Ressourcen definiert, die zusammen in einer Gruppe gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die dem Shader zur Verfügung gestellt werden sollen. Es wird für jeden entsprechenden Eintrag ein Objekt geben, das durch das im `layout` referenzierte [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) beschrieben wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenbindung darstellt, die dem `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrags entspricht. Außerdem stimmt es mit dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)) überein, das in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann eines der folgenden sein:
            - `GPUBufferBinding` (das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) umschließt; siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition)
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView); kann anstelle eines `GPUExternalTexture` verwendet werden, vorausgesetzt, es ist kompatibel (ein 2D-Format mit einem einzigen Subressource, das heißt [`dimension: "2d"`](/de/docs/Web/API/GPUTexture/createView#dimension)).
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindungsgruppe entsprechen werden.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Versatz in Bytes vom Beginn des `buffer` bis zum Beginn des Bereichs, der dem Shader durch die Pufferbindung bereitgestellt wird. Wird es nicht angegeben, beträgt der `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Die Größe in Bytes der Pufferbindung. Wird dies nicht angegeben, wird `size` der Bereich sein, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` nicht angegeben sind, wird der gesamte Puffer dem Shader zur Verfügung gestellt.

### Rückgabewert

Eine Instanz des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den korrekten Ressourcentyp. Beispielsweise hat ein `buffer`-Ressourcenlayoutobjekt ein `GPUBufferBinding`-Objekt, das in der entsprechenden Bindung angegeben ist.
- Wenn das Ressourcenlayoutobjekt ein `buffer` ist:
  - Der entsprechend gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen eingebundenen Teil (wie durch `offset` und `size` angegeben) vollständig in ihm enthalten, mit einer nicht-null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcenlayout.
  - Wenn der `type` des Ressourcenlayoutobjekts `"uniform"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat eine `usage`, die `GPUBufferUsage.UNIFORM` umfasst.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxUniformBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches der `minUniformBufferOffsetAlignment` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der `type` des Ressourcenlayoutobjekts `"storage"` oder `"read-only-storage"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat eine `usage`, die `GPUBufferUsage.STORAGE` umfasst.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxStorageBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Die effektive Größe des gebundenen Puffersegments ist ein Vielfaches von 4.
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches der `minStorageBufferOffsetAlignment` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayoutobjekt ein `storageTexture` ist, hat das entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das dem `sampleType` des Ressourcenlayoutobjekts entspricht.
  - Eine `mipLevelCount` von 1.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.STORAGE_BINDING` umfasst.
- Wenn das Ressourcenlayoutobjekt ein `texture` ist, hat das entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das kompatibel mit dem `sampleType` des Ressourcenlayoutobjekts ist.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.TEXTURE_BINDING` umfasst.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `sampleCount` größer als 1, wenn die `multisampled`-Eigenschaft des Ressourcenlayoutobjekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [Einführendes Computedemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage bei der Erstellung einer Bindungsgruppe.

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
