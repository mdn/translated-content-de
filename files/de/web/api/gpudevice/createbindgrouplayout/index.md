---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck der zugehörigen GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden. Es dient als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Entry-Objekten](#entry-objekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jedes Entry entspricht einem im [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definierten Eintrag (erstellt über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) Aufruf), das dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen zur Identifizierung des Objekts verwendet werden kann.

### Entry-Objekte

Ein Entry-Objekt umfasst die folgenden Eigenschaften:

- `binding`
  - : Eine Nummer, die einen eindeutigen Bezeichner für diesen speziellen Eintrag darstellt, der dem `binding` Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags entspricht. Außerdem entspricht es dem `n` Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag sichtbar ist, der diesem Eintrag entspricht. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindgruppeeintrag wird für Compute Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindgruppeeintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindgruppeeintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem Werte mit bitweisem OR [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Ressourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungstyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eine der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`. Die Objektstrukturen sind im nächsten Abschnitt beschrieben.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details zur Strukturierung der erforderlichen Ressourcen für jeden Eintrag):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein `GPUBufferBinding` Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset` und `size` Werte enthält. Ein `buffer` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein Boolescher Wert. Wenn auf `true` gesetzt, wird angezeigt, dass diese Bindung einen dynamischen Offset erfordert, zum Beispiel, wie es während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) Aufrufs festgelegt wird. Wenn weggelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Nummer, die die minimal erlaubte Größe in Bytes der gebundenen Puffer angibt. Wenn weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die minimale Puffergröße während der Pipelineerstellung ignoriert und stattdessen durch ausgegebene Zeichen-/Dispatch-Befehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Pufferarten). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Objekt sein wird. Ein `externalTexture` Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler) Objekt sein wird. Ein `sampler` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichs-Sampler.
      - `"filtering"`: Ein Filter-Sampler.
      - `"non-filtering"`: Ein Nichtfilter-Sampler.

      Wenn weggelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `storageTexture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der angibt, ob Texturansichten, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Ermöglicht WGSL-Code, Speicher-Texturen zu lesen.
      - `"read-write"`: Ermöglicht WGSL-Code, Speicher-Texturen zu lesen und zu schreiben.
      - `"write-only"`: Der Standardwert; ermöglicht WGSL-Code, Speicher-Texturen zu schreiben.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format von Texturansichten angibt, die an diese Bindung gebunden sind. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) in der Spezifikation für alle verfügbaren `format` Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen des Cubemaps.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Cubemaps betrachtet, jede mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Cubemaps.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `texture` Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass Texturansichten, die an diese Bindung gebunden sind, multisampled sein müssen. Wenn weggelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den für Texturansichten an diese Bindung erforderlichen Stichprobentyp angibt (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcen-Layout-Objekte — siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createBindGroupLayout()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags ist kleiner als die [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxBindingsPerBindGroup` [Grenze](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Einträge überschreitet nicht die [Binding-Slot-Grenzen](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Es ist nur ein Ressourcen-Layout-Objekt pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` enthält:
  - Wenn sein Ressourcen-Layout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `texture` ist und sein `multisampled` Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das die Speicher-Nutzung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten noch mehr Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindgruppen-Layouts und dessen Verwendung als Vorlage beim Erstellen einer Bindgruppe.

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
