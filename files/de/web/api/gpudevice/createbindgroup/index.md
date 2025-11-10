---
title: "GPUDevice: createBindGroup()-Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 591a2a2c593e468c9898c9cc310a455ae2542f05
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Gruppe von zu bindenden Ressourcen und deren Verwendung in Shaderstufen definiert.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Objekten, die die Ressourcen beschreiben, die für den Shader verfügbar gemacht werden sollen. Es gibt eines für jeden entsprechenden Eintrag, der durch das im `layout` referenzierte [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) beschrieben wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenbindung darstellt, die dem `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrags entspricht. Außerdem entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann eine der folgenden sein:
            - `GPUBufferBinding`: Umfasst ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer); siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition.
            - [`GPUBuffer`](/de/docs/Web/API/GPUBuffer): Kann direkt verwendet werden, ohne in ein `GPUBufferBinding` eingebunden zu werden, vorausgesetzt, die Standardwerte für [`offset`](#offset) und [`size`](#size) werden verwendet.
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView): Kann anstelle einer `GPUExternalTexture` verwendet werden, sofern sie kompatibel ist (ein 2D-Format mit einer einzigen Subresource, das heißt [`dimension: "2d"`](/de/docs/Web/API/GPUTexture/createView#dimension)).
            - [`GPUTexture`](/de/docs/Web/API/GPUTexture): Kann anstelle einer `GPUTextureView` verwendet werden, sofern eine Standardansicht gewünscht wird. Wenn in diesem Kontext verwendet, ist `GPUTexture` äquivalent zu einem `GPUTextureView`-Objekt, das mit einem Aufruf von [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) ohne angegebenes Argument erstellt wurde.
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindgruppe entsprechen.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset in Bytes vom Anfang des `buffer` bis zum Anfang des durch die Pufferbindung dem Shader bereitgestellten Bereichs. Wenn weggelassen, ist der Standardwert für `offset` 0.
- `size` {{optional_inline}}
  - : Die Größe in Bytes der Pufferbindung. Wird sie weggelassen, umfasst `size` den Bereich, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` weggelassen werden, wird der gesamte Puffer dem Shader bereitgestellt.

### Rückgabewert

Eine Instanz des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert, und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekt wird zurückgegeben:

- Die Anzahl der Einträge im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den richtigen Ressourcentyp. Zum Beispiel hat ein `buffer`-Ressourcenlayout-Objekt ein `GPUBufferBinding`-Objekt, das in der entsprechenden Bindung angegeben ist.
- Wenn das Ressourcenlayout-Objekt ein `buffer` ist:
  - Der entsprechende gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Der gebundene Teil (wie durch `offset` und `size` angegeben) ist vollständig innerhalb des Puffers enthalten und hat eine nicht null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcenlayouts.
  - Wenn der `type` des Ressourcenlayout-Objekts `"uniform"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat einen `usage`, der `GPUBufferUsage.UNIFORM` einschließt.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxUniformBufferBindingSize`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches des `minUniformBufferOffsetAlignment`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der `type` des Ressourcenlayout-Objekts `"storage"` oder `"read-only-storage"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat einen `usage`, der `GPUBufferUsage.STORAGE` einschließt.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxStorageBufferBindingSize`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Die effektive Größe des gebundenen Puffersegments ist ein Vielfaches von 4.
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches des `minStorageBufferOffsetAlignment`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayout-Objekt ein `storageTexture` ist, hat das entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das dem `sampleType` des Ressourcenlayout-Objekts entspricht.
  - Eine `mipLevelCount` von 1.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `usage`, das `GPUTextureUsage.STORAGE_BINDING` einschließt.
- Wenn das Ressourcenlayout-Objekt ein `texture` ist, hat das entsprechend gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayout-Objekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Ein `format`, das mit dem `sampleType` des Ressourcenlayout-Objekts kompatibel ist.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `usage`, das `GPUTextureUsage.TEXTURE_BINDING` einschließt.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `sampleCount`, der größer als 1 ist, wenn die `multisampled`-Eigenschaft des Ressourcenlayout-Objekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bindgruppenlayouts und die Verwendung dieses Layouts als Vorlage für das Erstellen einer Bindgruppe.

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
