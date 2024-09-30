---
title: "GPUDevice: createBindGroup()-Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das einen Satz von Ressourcen definiert, die in einer Gruppe zusammengebunden werden sollen und wie diese Ressourcen in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die dem Shader zugänglich gemacht werden sollen. Es gibt ein Eintragsobjekt für jeden entsprechenden Eintrag, der durch das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) beschrieben wird, das in `layout` referenziert wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die einen eindeutigen Bezeichner für diese Ressourcenbindung darstellt, der mit dem `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrags übereinstimmt. Darüber hinaus stimmt er mit dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)) überein, der in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann einer der folgenden Typen sein:
            - `GPUBufferBinding` (das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) umschließt; siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition)
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bind-Gruppe entsprechen werden.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset, in Bytes, vom Anfang des `buffer` bis zum Anfang des Bereichs, der durch die Buffer-Bindung dem Shader zugänglich gemacht wird. Wenn nicht angegeben, beträgt der `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Die Größe, in Bytes, der Buffer-Bindung. Wenn nicht angegeben, ist `size` der Bereich, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` fehlen, wird der gesamte Buffer dem Shader zugänglich gemacht.

### Rückgabewert

Ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout`-[`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout`-[`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den korrekten Ressourcentyp. Beispielsweise hat ein `buffer`-Ressourcenlayout-Objekt ein `GPUBufferBinding`-Objekt im entsprechenden Binding spezifiziert.
- Wenn das Ressourcenlayout-Objekt ein `buffer` ist:
  - Der entsprechende gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen gebundenen Teil (wie durch `offset` und `size` angegeben) komplett in sich enthalten, mit einer nicht null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcenlayout.
  - Wenn der `type` des Ressourcenlayout-Objekts `"uniform"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) eine `usage`, die `GPUBufferUsage.UNIFORM` enthält.
    - Ist die effektive Größe des gebundenen Buffer-Segments kleiner oder gleich dem `maxUniformBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist der angegebene `GPUBufferBinding`-`offset` ein Vielfaches des `minUniformBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der `type` des Ressourcenlayout-Objekts `"storage"` oder `"read-only-storage"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) eine `usage`, die `GPUBufferUsage.STORAGE` enthält.
    - Ist die effektive Größe des gebundenen Buffer-Segments kleiner oder gleich dem `maxStorageBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist die effektive Größe des gebundenen Buffer-Segments ein Vielfaches von 4.
    - Ist der angegebene `GPUBufferBinding`-`offset` ein Vielfaches des `minStorageBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayout-Objekt ein `storageTexture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die dem `viewDimension` des Ressourcenlayout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das dem `sampleType` des Ressourcenlayout-Objekts entspricht.
  - Eine `mipLevelCount` von 1.
  - Ist eine Ansicht einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.STORAGE_BINDING` enthält.
- Wenn das Ressourcenlayout-Objekt eine `texture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die dem `viewDimension` des Ressourcenlayout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das mit dem `sampleType` des Ressourcenlayout-Objekts kompatibel ist.
  - Ist eine Ansicht einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.TEXTURE_BINDING` enthält.
  - Ist eine Ansicht einer [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `sampleCount` größer als 1, wenn die `multisampled`-Eigenschaft des Ressourcenlayout-Objekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bind-Group-Layouts und dessen Verwendung als Vorlage bei der Erstellung einer Bind-Gruppe.

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
