---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffer definiert, die in einer Pipeline verwendet werden. Es wird als Vorlage verwendet, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) eingeschlossen werden soll. Jeder Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt über einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), der dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen zur Identifikation des Objekts verwendet werden kann.

### Eintragsobjekte

Ein Eintragsobjekt umfasst die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die einen eindeutigen Bezeichner für diesen bestimmten Eintrag darstellt, der dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags entspricht. Zusätzlich entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stadien definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag, der diesem Eintrag entspricht, sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindegruppen-Eintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindegruppen-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindegruppen-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stadien durch Trennen von Werten mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Resourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann entweder `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Einzelheiten darüber, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolescher Wert. Wenn auf `true` gesetzt, zeigt er an, dass diese Bindung einen dynamischen Offset erfordert, zum Beispiel, wie er während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)-Aufrufs gesetzt wird. Wenn weggelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimal zulässige Größe in Bytes von gebundenen Buffern angibt. Wenn weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die minimale Buffergröße während der Erstellung der Pipeline ignoriert und stattdessen durch ausgegebene Zeichen- oder Abgabe-Befehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Buffer-Typen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Buffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Buffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Buffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filter-Sampler.
      - `"non-filtering"`: Ein Nicht-Filter-Sampler.

      Wenn weggelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der angibt, ob Texturansichten, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Ermöglicht WGSL-Code, Speichertexturen zu lesen.
      - `"read-write"`: Ermöglicht WGSL-Code, Speichertexturen zu lesen und zu schreiben.
      - `"write-only"`: Der Standardwert; Ermöglicht WGSL-Code, in Speichertexturen zu schreiben.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die WGSL-Spracherweiterung [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der Texturansichten angibt, die an diese Bindung gebunden sind. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Layer, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen des Cubemaps hinweg.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Cubemaps betrachtet, jeweils mit 6 Array-Layern, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Cubemaps hinweg.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass Texturansichten, die an diese Bindung gebunden sind, multi-abgetastet werden müssen. Wenn weggelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für Texturansichten angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind dieselben wie für `storageTexture`-Ressourcen-Layer-Objekte — siehe oben.

### Rückgabewert

Eine Instanz eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Jeder `binding`-Wert des Eintrags ist eindeutig.
- Jeder `binding`-Wert des Eintrags ist kleiner als das `maxBindingsPerBindGroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Die Anzahl der Einträge überschreitet nicht die [Binding-Slot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Es ist nur ein Ressourcen-Layout-Objekt pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` enthält:
  - Wenn das Ressourcen-Layout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `texture` ist und sein `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bind-Group-Layouts und anschließende Verwendung als Vorlage bei der Erstellung einer Bind-Group.

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
