---
title: "GPUDevice: createBindGroup() Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: 95502efc40f9d13628024bc35d876c440bf84c95
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroup()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces erstellt eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Gruppe von Ressourcen definiert, die zusammen gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die für den Shader verfügbar gemacht werden sollen. Es wird einen Eintrag für jeden entsprechenden Eintrag geben, der vom im `layout` referenzierten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) beschrieben wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die einen eindeutigen Bezeichner für diese Ressourcenbindung darstellt, der dem `binding`-Wert eines entsprechenden [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Eintrags entspricht. Zusätzlich stimmt er mit dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)) überein, der in der zusammengehörigen Pipeline verwendet wird.
        - `resource`
          - : Die Ressource, die gebunden werden soll. Dies kann eine der folgenden sein:
            - `GPUBufferBinding`: Umschließt einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer); siehe [GPUBufferBinding Objekte](#gpubufferbinding_objekte) für eine Definition.
            - [`GPUBuffer`](/de/docs/Web/API/GPUBuffer): Kann direkt verwendet werden, anstatt in einem `GPUBufferBinding` eingeschlossen zu sein, vorausgesetzt, die Standardwerte für [`offset`](#offset) und [`size`](#size) werden verwendet.
            - [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
            - [`GPUTextureView`](/de/docs/Web/API/GPUTextureView): Kann anstelle eines `GPUExternalTexture` verwendet werden, vorausgesetzt es ist kompatibel (ein 2D-Format mit einer einzigen Subressource, das heißt [`dimension: "2d"`](/de/docs/Web/API/GPUTexture/createView#dimension)).
            - [`GPUSampler`](/de/docs/Web/API/GPUSampler)
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), dem die `entries` dieser Bindungsgruppe entsprechen sollen.

### GPUBufferBinding Objekte

Ein `GPUBufferBinding` Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Versatz, in Bytes, vom Anfang des `buffer` bis zum Beginn des Bereichs, der durch die Pufferbindung für den Shader sichtbar gemacht wird. Falls weggelassen, wird `offset` standardmäßig auf 0 gesetzt.
- `size` {{optional_inline}}
  - : Die Größe, in Bytes, der Pufferbindung. Falls weggelassen, wird `size` der Bereich sein, der bei `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` weggelassen werden, wird der gesamte Puffer dem Shader verfügbar gemacht.

### Rückgabewert

Eine Instanz des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout` [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) bindet das entsprechende Eintragsobjekt in `entries` den richtigen Ressourcentyp. Beispielsweise hat ein `buffer`-Ressourcenlayoutobjekt ein `GPUBufferBinding` Objekt im entsprechenden Eintrag angegeben.
- Falls das Ressourcenlayoutobjekt ein `buffer` ist:
  - Der entsprechende gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer):
    - Hat seinen gebundenen Teil (wie durch `offset` und `size` spezifiziert) vollständig innerhalb von sich selbst enthalten, mit einer nicht-null Größe.
    - Hat eine Größe, die größer ist als die `buffer`-Ressourcenlayout `minBindingSize`.
  - Wenn der `type` des Ressourcenlayoutobjekts `"uniform"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat einen `usage`, der `GPUBufferUsage.UNIFORM` einschließt.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxUniformBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches des `minUniformBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Wenn der `type` des Ressourcenlayoutobjekts `"storage"` oder `"read-only-storage"` ist:
    - Der gebundene [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) hat einen `usage`, der `GPUBufferUsage.STORAGE` einschließt.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxStorageBufferBindingSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
    - Die effektive Größe des gebundenen Puffersegments ist ein Vielfaches von 4.
    - Der angegebene `GPUBufferBinding` `offset` ist ein Vielfaches des `minStorageBufferOffsetAlignment` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn das Ressourcenlayoutobjekt ein `storageTexture` ist, der entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Hat eine `dimension` gleich der `viewDimension` des Ressourcenlayoutobjekts (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Hat ein `format` gleich dem `sampleType` des Ressourcenlayoutobjekts.
  - Hat einen `mipLevelCount` gleich 1.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `usage`, der `GPUTextureUsage.STORAGE_BINDING` einschließt.
- Wenn das Ressourcenlayoutobjekt ein `texture` ist, der entsprechende gebundene [`GPUTextureView`](/de/docs/Web/API/GPUTextureView):
  - Hat eine `dimension` gleich der `viewDimension` des Ressourcenlayoutobjekts (siehe [`GPUTexture.createView()`](/de/docs/Web/API/GPUTexture/createView) für weitere Details zu den Einstellungen einer Texturansicht).
  - Hat ein `format`, das mit dem `sampleType` des Ressourcenlayoutobjekts kompatibel ist.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `usage`, der `GPUTextureUsage.TEXTURE_BINDING` einschließt.
  - Ist eine Ansicht eines [`GPUTexture`](/de/docs/Web/API/GPUTexture) mit einem `sampleCount` größer als 1, wenn die `multisampled` Eigenschaft des Ressourcenlayoutobjekts `true` ist, oder gleich 1, wenn sie `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bindungsgruppenlayouts und die Verwendung dessen als Vorlage beim Erstellen einer Bindungsgruppe.

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
