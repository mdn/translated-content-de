---
title: "GPUDevice: createBindGroupLayout()-Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: cf0a0c16ca0a20c87262618d846408162f97dbdb
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer definiert, die in einer Pipeline verwendet werden. Es dient als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die im [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) enthalten sein soll. Jeder Eintrag entspricht einem Eintrag in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (erzeugt mit einem Aufruf der [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup))-Methode, die dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der eine Kennzeichnung bereitstellt, die zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt umfasst die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die einen eindeutigen Bezeichner für diesen bestimmten Eintrag darstellt und den `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags entspricht. Zusätzlich entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der betreffenden Pipeline verwendet wird.
- `visibility`

  - : Eines oder mehrere {{Glossary("Bitwise_flags", "Bitweise Flags")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag, der diesem Eintrag entspricht, sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindgruppen-Eintrag wird für Rechen-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindgruppen-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindgruppen-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen durch Trennzeichen mit dem Pipe-Symbol angegeben werden können, beispielsweise:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Ressourcenlayout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines der folgenden sein: `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture`, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcenlayout-Objekte

Das Ressourcenlayout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details zur Struktur der erforderlichen Ressourcen für jeden Eintrag):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) sowie `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein Boolean. Wenn auf `true` gesetzt, gibt es an, dass diese Bindung einen dynamischen Offset erfordert, z. B. wie während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)-Aufrufs festgelegt. Wenn weggelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimale zulässige Größe in Bytes von gebundenen Puffern angibt. Wenn weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die Mindestpuffergröße während der Pipelinenerstellung ignoriert und stattdessen von ausgeführten Zeichnungs-/Dispatch-Befehlen validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Puffertypen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcenlayout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filtersampler.
      - `"non-filtering"`: Ein nicht filternder Sampler.

      Wenn weggelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}

    - : Ein enumerierter Wert, der angibt, ob Texturansichten, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind:

      - `"read-only"`: Ermöglicht WSGL-Code das Lesen von Speichertexturen.
      - `"read-write"`: Ermöglicht WSGL-Code das Lesen und Schreiben in Speichertexturen.
      - `"write-only"`: Der Standardwert; ermöglicht WSGL-Code das Schreiben in Speichertexturen.

      Die Werte `"read-only"` und `"read-write"` können nur verwendet werden, wenn die [`"readonly_and_readwrite_storage_textures"`](/de/docs/Web/API/WGSLLanguageFeatures#readonly_and_readwrite_storage_textures) WGSL-Spracherweiterung in [`WGSLLanguageFeatures`](/de/docs/Web/API/WGSLLanguageFeatures) vorhanden ist. Ist dies nicht der Fall, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format der Texturansichten angibt, die an diese Bindung gebunden sind. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Cubemap betrachtet. Die Ansicht hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Gesichtspunkten des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Gesichtspunkte der Würfel.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Cubemaps betrachtet, jede mit 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Gesichtspunkten des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Gesichtspunkte der Cubemaps.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein Boolean. Ein Wert von `true` gibt an, dass Texturansichten, die an diese Bindung gebunden sind, Mehrfachabtastung unterstützen müssen. Wenn weggelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Abtasttyp für Texturansichten angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Typen von Texturansichten). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind die gleichen wie für `storageTexture`-Ressourcenlayout-Objekte — siehe oben.

### Rückgabewert

Eine Instanz des [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags liegt unter dem [Limit](/de/docs/Web/API/GPUSupportedLimits) der `maxBindingsPerBindGroup` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Die Anzahl der Einträge überschreitet nicht die [Binding-Slot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Es wird nur 1 Ressourcenlayout-Objekt pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` umfasst:
  - Wenn sein Ressourcenlayout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcenlayout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `texture` ist und dessen `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel dafür, wie man ein Bindgruppenlayout erstellt und es dann als Vorlage beim Erstellen einer Bindgruppe verwendet.

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
