---
title: "GPUDevice: Methode createBindGroup()"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Menge von Ressourcen definiert, die in einer Gruppe zusammengebunden werden sollen, und wie diese in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die dem Shader zugänglich gemacht werden sollen. Es gibt eins für jeden entsprechenden Eintrag, der vom [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) in `layout` beschrieben wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenbindung darstellt, die dem `binding`-Wert eines entsprechenden Eintrags im [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht. Darüber hinaus entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die Ressource, die gebunden werden soll. Dies kann eines der folgenden sein:
            - `GPUBufferBinding` (das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) umschließt; siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition)
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindgruppe entsprechen.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset in Bytes vom Beginn des `buffer` bis zum Beginn des Bereichs, der dem Shader durch die Pufferbindung zugänglich gemacht wird. Wenn nicht angegeben, ist `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Die Größe in Bytes der Pufferbindung. Wenn nicht angegeben, ist `size` der Bereich, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` nicht angegeben sind, wird der gesamte Puffer dem Shader zugänglich gemacht.

### Rückgabewert

Eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, da sonst ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert wird und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Objekt zurückgegeben wird:

- Die Anzahl der Einträge im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den korrekten Ressourcentyp. Ein Beispiel wäre, dass ein `buffer`-Ressourcen-Layout-Objekt ein `GPUBufferBinding`-Objekt im entsprechenden Binding spezifiziert hat.
- Wenn das Ressourcen-Layout-Objekt ein `buffer` ist:
  - Der entsprechende gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen gebundenen Teil (wie durch `offset` und `size` angegeben) vollständig innerhalb von ihm enthalten, mit einer nicht-null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcen-Layout.
  - Wenn das `type` des Ressourcen-Layout-Objekts `"uniform"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat eine `usage`, die `GPUBufferUsage.UNIFORM` einschließt.
    - Die effektive Größe des gebundenen Pufferausschnitts ist kleiner oder gleich der `maxUniformBufferBindingSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Der angegebene `GPUBufferBinding`-`offset` ist ein Vielfaches der `minUniformBufferOffsetAlignment` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn das `type` des Ressourcen-Layout-Objekts `"storage"` oder `"read-only-storage"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat eine `usage`, die `GPUBufferUsage.STORAGE` einschließt.
    - Die effektive Größe des gebundenen Pufferausschnitts ist kleiner oder gleich der `maxStorageBufferBindingSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Die effektive Größe des gebundenen Pufferausschnitts ist ein Vielfaches von 4.
    - Der angegebene `GPUBufferBinding`-`offset` ist ein Vielfaches der `minStorageBufferOffsetAlignment` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcen-Layout-Objekt ein `storageTexture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die dem `viewDimension` des Ressourcen-Layout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Textursicht).
  - Ein `format`, das dem `sampleType` des Ressourcen-Layout-Objekts entspricht.
  - Eine `mipLevelCount` von 1.
  - Eine Sicht auf eine [`GPUTexture`](/de/docs/Web/API/GPUTexture), die eine `usage` hat, welche `GPUTextureUsage.STORAGE_BINDING` einschließt.
- Wenn das Ressourcen-Layout-Objekt eine `texture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die `viewDimension` des Ressourcen-Layout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Textursicht).
  - Ein mit dem `sampleType` des Ressourcen-Layout-Objekts kompatibles `format`.
  - Eine Sicht auf eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.TEXTURE_BINDING` einschließt.
  - Eine Sicht auf eine [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `sampleCount` größer als 1, wenn die `multisampled`-Eigenschaft des Ressourcen-Layout-Objekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Grundlegendes Beispiel

Unser [grundlegendes Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bind-Group-Layouts und dessen Verwendung als Vorlage beim Erstellen einer Bindgruppe.

```js
// ...

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

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
