---
title: "GPUDevice: createBindGroupLayout() Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: aaca2635c0a1a430db74a1e9fcdb69e4ed5bad06
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden und als Vorlage dient, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Resource-Bindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jeder Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)), der dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen verwendet werden kann.

### Eintragsobjekte

Ein Eintragsobjekt beinhaltet die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die eine eindeutige Kennung für diesen speziellen Eintrag darstellt und dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags entspricht. Zusätzlich entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `visibility`
  - : Ein oder mehrere {{Glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag sichtbar sein wird, der diesem Eintrag entspricht. Mögliche Werte sind:
    - `GPUShaderStage.COMPUTE`: Der Bindungseintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindungseintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindungseintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX`.

- "Ressourcenlayout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungs-Ressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcenlayout-Objekte

Das Ressourcenlayout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details zur Strukturierung der erforderlichen Ressourcen für jeden Eintrag):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein `GPUBufferBinding` Objekt sein wird, das ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) sowie `offset` und `size` Werte enthält. Ein `buffer`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:
  - `hasDynamicOffset` {{optional_inline}}
    - : Ein boolean. Wenn auf `true` gesetzt, wird angezeigt, dass diese Bindung einen dynamischen Offset erfordert, wie er beispielsweise während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup) Aufrufs gesetzt wird. Wenn ausgelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}
    - : Eine Zahl, die die minimal zulässige Größe in Bytes von gebundenen Puffern angibt. Wird sie weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die minimale Puffergröße während der Pipeline-Erstellung ignoriert und stattdessen durch ausgegebene Zeichnen/Verteilen-Befehle validiert.

  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s festlegt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Pufferarten). Mögliche Werte sind:
      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einer `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wird sie ausgelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture) Objekt sein wird. Ein `externalTexture`-Ressourcenlayout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler) Objekt sein wird. Ein `sampler`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:
  - `type` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s festlegt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:
      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filtersampler.
      - `"non-filtering"`: Ein nicht filternder Sampler.

      Wird sie ausgelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `storageTexture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:
  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob die an diese Bindung gebundenen Texturansichten für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:
      - `"read-only"`: Ermöglicht WGSL-Code das Lesen von Speichertexturen.
      - `"read-write"`: Ermöglicht WGSL-Code das Lesen und Schreiben in Speichertexturen.
      - `"write-only"`: Der Standardwert; Ermöglicht WGSL-Code das Schreiben in Speichertexturen.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Sprachenerweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format von Texturansichten angibt, die an diese Bindung gebunden werden. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte. Siehe auch [Tier 1 und Tier 2 Texturformate](/de/docs/Web/API/GPUDevice/createTexture#tier_1_and_tier_2_texture_formats).
      > [!NOTE]
      > Die Verwendung des `bgra8unorm` Formats für schreibgeschützte Speichertexturen ist veraltet. Die Spezifikation untersagt dies ausdrücklich, da dieses Format für den Schreibzugriff vorgesehen und nicht portabel ist. Jede Browserunterstützung für diese Kombination wird als Fehler angesehen.
  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden werden. Mögliche Werte sind:
      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild angesehen.
      - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Kubauszug betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Kubus entsprechen. Das Sampling erfolgt nahtlos über die Flächen des Kubauszugs.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Kubauszügen betrachtet, von denen jeder 6 Array-Ebenen hat, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Kubus entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Kubauszüge hinweg.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wird sie ausgelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView) Objekt sein wird. Ein `texture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:
  - `multisampled` {{optional_inline}}
    - : Ein boolean. Ein Wert von `true` gibt an, dass Texturansichten, die an diese Bindung gebunden werden, mehrmals abgetastet werden müssen. Wird sie ausgelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}
    - : Ein enumerierter Wert, der den erforderlichen Probentyp für Texturansichten festlegt, die an diese Bindung gebunden werden (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:
      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wird sie ausgelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden werden. Mögliche und Standardwerte sind die gleichen wie für `storageTexture`-Ressourcenlayout-Objekte — siehe oben.

### Rückgabewert

Eine Instanz eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objektes.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) Objekt zurückgegeben:

- Der `binding` Wert jedes Eintrags ist einzigartig.
- Der `binding` Wert jedes Eintrags ist kleiner als das `maxBindingsPerBindGroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Die Anzahl der Einträge überschreitet nicht die [binding slot limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Pro Eintrag wird nur ein Ressourcenlayout-Objekt definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` umfasst:
  - Wenn sein Ressourcenlayout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcenlayout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `texture` ist und sein `multisampled` Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist weder `"cube"` noch `"cube-array"`.
  - Sein `format` ist ein Format, das die Nutzung für Speicher unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bind Group Layouts und dessen Verwendung als Vorlage bei der Erstellung einer Bind Group.

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
