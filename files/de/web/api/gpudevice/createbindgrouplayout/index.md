---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffer definiert, die in einer Pipeline verwendet werden sollen, und dient als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Entry-Objekten](#entry-objekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) eingeschlossen werden soll. Jedes Entry entspricht einem Entry, das in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf), das dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifikation des Objekts, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen, verwendet werden kann.

### Entry-Objekte

Ein Entry-Objekt umfasst die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die einen eindeutigen Bezeichner für dieses spezielle Entry darstellt, das mit dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entries übereinstimmt. Zusätzlich stimmt es mit dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird, überein.
- `visibility`

  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, denen ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry entsprechend diesem Entry sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bind-Group-Eintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bind-Group-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bind-Group-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem die Werte mit [bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) verknüpft werden, z. B.: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Ressourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entries entsprechend diesem Entry definiert. Diese Eigenschaft kann eines von `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, die Objektstruktur wird im nächsten Abschnitt beschrieben.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details zur Struktur der erforderlichen Ressourcen für jedes Entry):

- `buffer`: Gibt an, dass das entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry ein `GPUBufferBinding`-Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset`- und `size`-Werte enthält. Ein `buffer` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein Boolean. Wenn auf `true` gesetzt, gibt dies an, dass diese Bindung einen dynamischen Offset erfordert, beispielsweise während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)-Aufrufs festgelegt wird. Wenn weggelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimal zulässige Größe in Bytes der gebundenen Buffer angibt. Wenn weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die minimale Buffer-Größe während der Pipeline-Erstellung ignoriert und stattdessen durch ausgegebene Zeichen-/Verteilbefehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Buffer-Typen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Buffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Buffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Buffer, der mit einer `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass das entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture` Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass das entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filterungssampler.
      - `"non-filtering"`: Ein Nicht-Filterungssampler.

      Wenn weggelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass das entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der angibt, ob Texturbilder, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Erlaubt WGSL-Code, Speichertexturen zu lesen.
      - `"read-write"`: Erlaubt WGSL-Code, Speichertexturen zu lesen und zu schreiben.
      - `"write-only"`: Der Standardwert; Erlaubt WGSL-Code, Speichertexturen zu schreiben.

      Die `"read-only"` und `"read-write"` Werte können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der an diese Bindung gebundenen Texturbilder angibt. Siehe den „Texture Formats“ Abschnitt der Spezifikation für alle verfügbaren `format` Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturbilder, die an diese Bindung gebunden sind, angibt. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Das Samplen erfolgt nahtlos über die Flächen des Cubemaps hinweg.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Cubemaps betrachtet, jede mit 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Das Samplen erfolgt nahtlos über die Flächen der Cubemaps hinweg.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass das entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Entry ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein Boolean. Ein Wert von `true` gibt an, dass Texturbilder, die an diese Bindung gebunden sind, mehrfach abgetastet werden müssen. Wenn weggelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Abtasttyp für die an diese Bindung gebundenen Texturbilder angibt (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturbilder, die an diese Bindung gebunden sind, angibt. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcen-Layout-Objekte – siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen eingehalten werden, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Der `binding`-Wert jedes Entries ist einzigartig.
- Der `binding`-Wert jedes Entries ist kleiner als das [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxBindingsPerBindGroup` [Limit](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Entries überschreitet nicht die [binding slot limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Es ist nur ein Ressourcen-Layout-Objekt pro Entry definiert.
- Wenn die `visibility` eines Entries `GPUShaderStage.VERTEX` umfasst:
  - Wenn sein Ressourcen-Layout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Entries ein `texture` ist und sein `multisampled` Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Entries ein `storageTexture` ist:
  - Seine `viewDimension` ist weder `"cube"` noch `"cube-array"`.
  - Sein `format` ist ein Format, das die Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU Samples](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bind-Group-Layouts und dessen Verwendung als Vorlage bei der Erstellung einer Bind-Group.

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
