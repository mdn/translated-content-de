---
title: "GPUDevice: createBindGroup() Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), welches eine Gruppe von Ressourcen definiert, die zusammen gebunden und in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die im Shader verfügbar gemacht werden sollen. Es wird eines für jeden entsprechenden Eintrag geben, der im [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) referenziert wird, das in `layout` angegeben ist. Jedes Eintragsobjekt hat folgende Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenbindung darstellt und den `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Eintrags entspricht. Außerdem entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann eine der folgenden sein:
            - `GPUBufferBinding` (das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) umschließt; siehe [GPUBufferBinding-Objekte](#gpubufferbinding-objekte) für eine Definition)
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView); kann anstelle einer `GPUExternalTexture` verwendet werden, vorausgesetzt, es ist kompatibel (ein 2D-Format mit einer einzelnen Subressource, d.h. [`dimension: "2d"`](/de/docs/Web/API/GPUTexture/createView#dimension)).
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, welches verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindungsgruppe entsprechen.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann folgende Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset, in Bytes, vom Beginn des `buffer` bis zum Beginn des Bereichs, der vom Pufferelement im Shader sichtbar gemacht wird. Wenn weggelassen, beträgt `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Die Größe, in Bytes, der Pufferelementbindung. Wenn weggelassen, ist `size` der Bereich, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` weggelassen werden, wird der gesamte Puffer dem Shader sichtbar gemacht.

### Rückgabewert

Eine Instanz eines [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den richtigen Ressourcentyp. Zum Beispiel hat ein `buffer`-Ressourcenlayoutobjekt ein `GPUBufferBinding`-Objekt, das im entsprechenden Binding angegeben ist.
- Wenn das Ressourcenlayoutobjekt ein `buffer` ist:
  - Der entsprechende gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen gebundenen Teil (wie durch `offset` und `size` angegeben) vollständig innerhalb und mit einer nicht-null Grösse enthalten.
    - Hat eine Größe, die größer ist als `minBindingSize` des `buffer`-Ressourcenlayout.
  - Wenn der `type` des Ressourcenlayoutobjekts `"uniform"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) einen `usage`, der `GPUBufferUsage.UNIFORM` enthält.
    - Ist die effektive Größe des gebundenen Puffersegments kleiner oder gleich dem `maxUniformBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist der spezifizierte `GPUBufferBinding`-`offset` ein Vielfaches des `minUniformBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der `type` des Ressourcenlayoutobjekts `"storage"` oder `"read-only-storage"` ist:
    - Hat der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) einen `usage`, der `GPUBufferUsage.STORAGE` enthält.
    - Ist die effektive Größe des gebundenen Puffersegments kleiner oder gleich dem `maxStorageBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Ist die effektive Größe des gebundenen Puffersegments ein Vielfaches von 4.
    - Ist der spezifizierte `GPUBufferBinding`-`offset` ein Vielfaches des `minStorageBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayoutobjekt ein `storageTexture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für mehr Details zu den Einstellungen einer Texture-View).
  - Ein `format`, das dem `sampleType` des Ressourcenlayoutobjekts entspricht.
  - Eine `mipLevelCount` von 1.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.STORAGE_BINDING` enthält.
- Wenn das Ressourcenlayoutobjekt eine `texture` ist, hat die entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Eine `dimension`, die der `viewDimension` des Ressourcenlayoutobjekts entspricht (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für mehr Details zu den Einstellungen einer Texture-View).
  - Ein `format`, das mit dem `sampleType` des Ressourcenlayoutobjekts kompatibel ist.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `usage`, die `GPUTextureUsage.TEXTURE_BINDING` enthält.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einer `sampleCount` größer 1, wenn die `multisampled`-Eigenschaft des Ressourcenlayoutobjekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Berechnungsdemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage beim Erstellen einer Bindungsgruppe.

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
