---
title: "GPUDevice: Methode createBindGroupLayout()"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: e3c2148d226a4a1143fbe0dbde1af50a7400b971
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createBindGroupLayout()`** der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck der zugehörigen GPU-Ressourcen beschreibt, wie z.B. Puffer, die in einer Pipeline verwendet werden sollen. Es wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [entry objects](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jedes Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt über einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt umfasst die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die eine eindeutige Kennung für diesen bestimmten Eintrag darstellt und mit dem `binding`-Wert des entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags übereinstimmt. Darüber hinaus entspricht sie dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitwise flags")}}, die die Shader-Stufen definieren, die einem [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag entsprechen, der für diesen Eintrag sichtbar ist. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindgruppen-Eintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindgruppen-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindgruppen-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen durch Trennsymbole festgelegt werden können, zum Beispiel:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Ressourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details dazu, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) sowie `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolean. Wenn auf `true` gesetzt, zeigt es an, dass diese Bindung einen dynamischen Offset erfordert, z.B. wie während eines Aufrufs von [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) festgelegt. Wenn ausgelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimal erlaubte Größe in Bytes von gebundenen Puffern angibt. Wenn ausgelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die Mindestpuffergröße bei der Erstellung der Pipeline ignoriert und stattdessen durch ausgegebene Zeichnungen/Dispatched-Kommandos validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s spezifiziert, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Puffertypen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn ausgelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s spezifiziert, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichs-Sampler.
      - `"filtering"`: Ein Filter-Sampler.
      - `"non-filtering"`: Ein Nicht-Filter-Sampler.

      Wenn ausgelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der spezifiziert, ob die an diese Bindung gebundenen Texturansichten für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Ermöglicht WGSL-Code das Lesen von Speicher-Texturen.
      - `"read-write"`: Ermöglicht WGSL-Code das Lesen und Schreiben in Speicher-Texturen.
      - `"write-only"`: Der Standardwert; Ermöglicht WGSL-Code das Schreiben in Speicher-Texturen.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures)-WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Falls dies nicht der Fall ist, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der an diese Bindung gebundenen Texturansichten angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten angibt. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array zweidimensionaler Bilder betrachtet.
      - `"cube"`: Die Textur wird als Kubenkarte betrachtet. Die Ansicht hat 6 Array-Ebenen, entsprechend den Gesichtstypen `[+X, -X, +Y, -Y, +Z, -Z]` des Würfels. Die Abtastung erfolgt nahtlos über die Flächen des Kubus hinweg.
      - `"cube-array"`: Die Textur wird als ein gepacktes Array von `n` Kubenkarten betrachtet, jede mit 6 Array-Ebenen, die den Gesichtstypen `[+X, -X, +Y, -Y, +Z, -Z]` des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Kuben hinweg.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn ausgelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolean. Ein Wert von `true` gibt an, dass an diese Bindung gebundene Texturansichten multi-sampled sein müssen. Wenn ausgelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Abtasttyp für an diese Bindung gebundene Texturansichten bestimmt (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn ausgelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten angibt. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcen-Layout-Objekte — siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createBindGroupLayout()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags ist kleiner als das `maxBindingsPerBindGroup`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [Limits](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Einträge überschreitet nicht die [binding slot limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Nur 1 Ressourcen-Layout-Objekt ist pro Eintrag definiert.
- Wenn das `visibility` eines Eintrags `GPUShaderStage.VERTEX` umfasst:
  - Wenn sein Ressourcen-Layout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `texture` ist und sein `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das die Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bind-Group-Layouts und dessen Verwendung als Vorlage beim Erstellen einer Bind-Group.

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
