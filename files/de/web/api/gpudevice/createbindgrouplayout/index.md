---
title: "GPUDevice: Methode createBindGroupLayout()"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 06e6e54baef7032c4e81ca93291fde0a0585de8b
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck von verbundenen GPU-Ressourcen wie Buffern definiert, die in einer Pipeline verwendet werden, und wird als Vorlage verwendet, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jeder Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (erstellt durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)) definiert wurde, die dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung angibt, die zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt beinhaltet die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die einen eindeutigen Bezeichner für diesen spezifischen Eintrag darstellt, der dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags entspricht. Darüber hinaus entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
- `visibility`
  - : Ein oder mehrere {{Glossary("Bitwise_flags", "Bitmaskenflags")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag sichtbar ist, der diesem Eintrag entspricht. Mögliche Werte sind:
    - `GPUShaderStage.COMPUTE`: Der Bindungseintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindungseintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindungseintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen spezifiziert werden können, indem Werte mit [bitweise ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Ressourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines von `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt ist, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset`- und `size`-Werte enthält. Ein `buffer` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `hasDynamicOffset` {{optional_inline}}
    - : Ein Boolean. Wenn auf `true` gesetzt, zeigt es an, dass diese Bindung einen dynamischen Offset erfordert, beispielsweise wenn er während eines Aufrufs von [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) festgelegt wird. Wenn ausgelassen, wird `hasDynamicOffset` standardmäßig auf `false` gesetzt.

  - `minBindingSize` {{optional_inline}}
    - : Eine Zahl, die die minimal zulässige Größe, in Bytes, gebundener Buffer angibt. Wenn ausgelassen, wird `minBindingSize` standardmäßig auf 0 gesetzt. Wenn der Wert 0 ist, wird die minimale Buffergröße während der Pipelinenerstellung ignoriert und stattdessen von ausgegebenen Zeichen-/Verteilkommandos validiert.

  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Buffer-Typen). Mögliche Werte sind:
      - `"read-only-storage"`: Ein Nur-Lese-Buffer, erstellt mit einer `usage` von `GPUBufferUsage.STORAGE`.
      - `"storage"`: Ein beschreibbarer Buffer, erstellt mit einer `usage` von `GPUBufferUsage.STORAGE`.
      - `"uniform"`: Ein Buffer, erstellt mit einer `usage` von `GPUBufferUsage.UNIFORM`.

      Wenn ausgelassen, wird `type` standardmäßig auf `"uniform"` gesetzt.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt ist. Ein `externalTexture` Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt ist. Ein `sampler` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:
      - `"comparison"`: Ein Vergleichs-Sampler.
      - `"filtering"`: Ein Filter-Sampler.
      - `"non-filtering"`: Ein Nicht-Filter-Sampler.

      Wenn ausgelassen, wird `type` standardmäßig auf `"filtering"` gesetzt.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt ist. Ein `storageTexture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob die an diese Bindung gebundenen Texturansichten für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:
      - `"read-only"`: Ermöglicht WGSL-Code, Speichertexturen zu lesen.
      - `"read-write"`: Ermöglicht WGSL-Code, Speichertexturen zu lesen und zu schreiben.
      - `"write-only"`: Der Standardwert; ermöglicht WGSL-Code, in Speichertexturen zu schreiben.

      Die `"read-only"` und `"read-write"` Werte können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Wenn dies nicht der Fall ist, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der an diese Bindung gebundenen Texturansichten spezifiziert. Siehe die Spezifikation im Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) für alle verfügbaren `format`-Werte. Siehe auch [Tier 1 und Tier 2 Texturformate](/de/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats).
      > [!NOTE]
      > Die Verwendung des `bgra8unorm`-Formats für Nur-Lese-Speichertexturen ist veraltet. Die Spezifikation verbietet dies explizit, da dieses Format für Schreibzugriff gedacht ist und nicht portabel ist. Jegliche Browserunterstützung für diese Kombination wird als Bug angesehen.
  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten spezifiziert. Mögliche Werte sind:
      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Würfelkarte betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Abtasten erfolgt nahtlos über die Flächen der Würfelkarte.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Würfelkarten betrachtet, jede mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Abtasten erfolgt nahtlos über die Flächen der Würfelkarten.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn ausgelassen, wird `viewDimension` standardmäßig auf `"2d"` gesetzt.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt ist. Ein `texture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `multisampled` {{optional_inline}}
    - : Ein Boolean. Ein Wert von `true` gibt an, dass die an diese Bindung gebundenen Texturansichten multi-abgetastet sein müssen. Wenn ausgelassen, wird `multisampled` standardmäßig auf `false` gesetzt.

  - `sampleType` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Abtasttyp für an diese Bindung gebundene Texturansichten spezifiziert (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen über Texturansichtstypen). Mögliche Werte sind:
      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn ausgelassen, wird `sampleType` standardmäßig auf `"float"` gesetzt.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für an diese Bindung gebundene Texturansichten spezifiziert. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcen-Layout-Objekte — siehe oben.

### Rückgabewert

Eine Instanz des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt, und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt wird zurückgegeben:

- Jeder Eintrag hat einen eindeutigen `binding`-Wert.
- Jeder Eintrag hat einen `binding`-Wert, der kleiner als das `maxBindingsPerBindGroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Anzahl der Einträge überschreitet nicht die [Bindungsslotbeschränkungen](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Nur ein Ressourcen-Layout-Objekt ist pro Eintrag definiert.
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

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage bei der Erstellung einer Bindungsgruppe.

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
