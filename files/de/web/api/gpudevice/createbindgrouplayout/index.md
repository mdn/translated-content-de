---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden. Es dient auch als Vorlage, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jeder Eintrag entspricht einem Eintrag in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (erstellt über einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), das dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Eine Zeichenfolge, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt enthält die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die eine eindeutige Kennung für diesen speziellen Eintrag darstellt, die mit dem `binding` Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags übereinstimmt. Darüber hinaus entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Einer oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, denen ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag, der diesem Eintrag entspricht, sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bind-Group-Eintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bind-Group-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bind-Group-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen durch Trennen der Werte mit [bitweise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Ressourcenlayout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungs-Ressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcenlayout-Objekte

Das Ressourcenlayout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details zur Strukturierung der erforderlichen Ressourcen für jeden Eintrag):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolescher Wert. Wenn auf `true` gesetzt, zeigt es an, dass diese Bindung einen dynamischen Offset erfordert, zum Beispiel, wie während eines Aufrufs von [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) gesetzt. Wenn weggelassen, wird `hasDynamicOffset` auf `false` gesetzt.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimal erlaubte Größe, in Bytes, der gebundenen Puffer angibt. Wenn weggelassen, wird `minBindingSize` auf 0 gesetzt. Wenn der Wert 0 ist, wird die minimale Puffergröße während der Pipeline-Erstellung ignoriert und stattdessen durch ausgegebene Zeichnungs-/Verteilungsbefehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Pufferarten). Mögliche Werte sind:

      - `"read-only-storage"`: Ein nur-lesbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, wird `type` auf `"uniform"` standardmäßig gesetzt.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcenlayout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Samplertypen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filterungssampler.
      - `"non-filtering"`: Ein Nicht-Filterungssampler.

      Wenn weggelassen, wird `type` auf `"filtering"` standardmäßig gesetzt.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der angibt, ob an diese Bindung gebundene Texturansichten für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Ermöglicht WGSL-Code das Lesen von Speichertexturen.
      - `"read-write"`: Ermöglicht WGSL-Code das Lesen und Schreiben in Speichertexturen.
      - `"write-only"`: Der Standardwert; Ermöglicht WGSL-Code das Schreiben in Speichertexturen.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die WGSL-Spracherweiterung [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der an diese Bindung gebundenen Texturansichten angibt. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten angibt. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als ein eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als ein einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als ein Würfelmap betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen des Würfelmaps.
      - `"cube-array"`: Die Textur wird als ein gepacktes Array von `n` Würfelmaps betrachtet, jede mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen der Würfelmaps.
      - `"3d"`: Die Textur wird als ein dreidimensionales Bild betrachtet.

      Wenn weggelassen, wird `viewDimension` auf `"2d"` standardmäßig gesetzt.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass an diese Bindung gebundene Texturansichten multi-sampled sein müssen. Wenn weggelassen, wird `multisampled` auf `false` standardmäßig gesetzt.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Probenahmetyp für an diese Bindung gebundene Texturansichten angibt (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, wird `sampleType` auf `"float"` standardmäßig gesetzt.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten angibt. Mögliche und Standardwerte sind die gleichen wie für `storageTexture`-Ressourcenlayout-Objekte — siehe oben.

### Rückgabewert

Eine [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags ist kleiner als das `maxBindingsPerBindGroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Die Anzahl der Einträge überschreitet nicht die [Binding-Slot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Für jeden Eintrag ist nur 1 Ressourcenlayout-Objekt definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` einschließt:
  - Wenn sein Ressourcenlayout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcenlayout-Objekt ist kein `storageTexture`.
- Wenn ein Eintragsressourcenlayout-Objekt eine `texture` ist und sein `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn ein Eintragsressourcenlayout-Objekt ein `storageTexture` ist:
  - Seine `viewDimension` ist weder `"cube"` noch `"cube-array"`.
  - Sein `format` ist ein Format, das die Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bind-Group-Layouts und die Verwendung dieses als Vorlage beim Erstellen einer Bind-Group.

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
