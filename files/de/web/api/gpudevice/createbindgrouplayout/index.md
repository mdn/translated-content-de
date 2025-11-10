---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 78c41c9b5211cc5bfba793c72a9adcac852e07f9
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden sollen und als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s dient.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), jedes beschreibt eine einzelne Shader-Ressourcenbindung, die im [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) enthalten sein soll. Jeder Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), die dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das verwendet werden kann, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen zu identifizieren.

### Eintragsobjekte

Ein Eintragsobjekt enthält die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die einen eindeutigen Bezeichner für diesen speziellen Eintrag darstellt, der dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags entspricht. Darüber hinaus stimmt er mit dem `n`-Index-Wert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)) überein, das in der zugehörigen Pipeline verwendet wird.
- `visibility`
  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag, der diesem Eintrag entspricht, sichtbar sein wird. Mögliche Werte sind:
    - `GPUShaderStage.COMPUTE`: Der Bindungseintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindungseintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindungseintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Resource layout object"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`. Die Objektstrukturen werden im nächsten Abschnitt beschrieben.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein `GPUBufferBinding` Objekt sein wird, das ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) sowie `offset` und `size` Werte enthält. Ein `buffer` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `hasDynamicOffset` {{optional_inline}}
    - : Ein boolean. Wenn auf `true` gesetzt, zeigt es an, dass für diese Bindung ein dynamischer Offset erforderlich ist, beispielsweise wie während eines Aufrufs von [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) festgelegt. Wenn nicht angegeben, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}
    - : Eine Zahl, die die minimal zulässige Größe, in Bytes, der gebundenen Puffer angibt. Wenn nicht angegeben, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die Mindestpuffergröße während der Pipelinenerstellung ignoriert und stattdessen durch erteilte Zeichnen/Ausführen-Befehle validiert.

  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Pufferarten). Mögliche Werte sind:
      - `"read-only-storage"`: Ein nur lesbarer Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einer `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn nicht angegeben, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Objekt sein wird. Ein `externalTexture` Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler) Objekt sein wird. Ein `sampler` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Samplertypen). Mögliche Werte sind:
      - `"comparison"`: Ein Vergleichs-Sampler.
      - `"filtering"`: Ein Filterungs-Sampler.
      - `"non-filtering"`: Ein Nicht-Filterungs-Sampler.

      Wenn nicht angegeben, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `storageTexture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob Texturansichten, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:
      - `"read-only"`: Ermöglicht es WGSL-Code, Speichertexturen zu lesen.
      - `"read-write"`: Ermöglicht es WGSL-Code, Speichertexturen zu lesen und zu schreiben.
      - `"write-only"`: Der Standardwert; ermöglicht es WGSL-Code, in Speichertexturen zu schreiben.

      Die `"read-only"` und `"read-write"` Werte können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der an diese Bindung gebundenen Texturansichten angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format` Werte. Siehe auch [Tier 1 und Tier 2 Texturformate](/de/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats).
  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für die an diese Bindung gebundenen Texturansichten angibt. Mögliche Werte sind:
      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als Array zweidimensionaler Bilder betrachtet.
      - `"cube"`: Die Textur wird als Würfelkarte betrachtet. Die Ansicht hat 6 Array-Layer, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen der Würfelkarte.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Würfelkarten betrachtet, jede mit 6 Array-Layern, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen der Würfelkarten.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn nicht angegeben, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `texture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:
  - `multisampled` {{optional_inline}}
    - : Ein boolean. Ein Wert von `true` gibt an, dass Texturansichten, die an diese Bindung gebunden sind, multi-gesampelt sein müssen. Wenn nicht angegeben, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Sample-Typ für die an diese Bindung gebundenen Texturansichten angibt (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für mehr Informationen zu Texturansichtstypen). Mögliche Werte sind:
      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn nicht angegeben, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für die an diese Bindung gebundenen Texturansichten angibt. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcen-Layout-Objekte — siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, sonst wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags ist kleiner als der [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxBindingsPerBindGroup` [Grenzwert](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Einträge überschreitet nicht die [Bindingslot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Nur ein Ressourcen-Layout-Objekt ist pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` umfasst:
  - Ist sein Ressourcen-Layout-Objekt ein `buffer`, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `texture` ist und sein `multisampled` Wert `true` ist:
  - Ist seine `viewDimension` `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `storageTexture` ist:
  - Ist seine `viewDimension` weder `"cube"` noch `"cube-array"`.
  - Sein `format` ist ein Format, das die Benutzung als Speicher unterstützt.

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
