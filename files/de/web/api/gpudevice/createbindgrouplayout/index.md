---
title: "GPUDevice: createBindGroupLayout()-Methode"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck von verbundenen GPU-Ressourcen wie z.B. Puffern definiert, die in einer Pipeline verwendet werden, und dient als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) aufgenommen werden soll. Jeder Eintrag entspricht einem Eintrag, der in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) definiert ist (erstellt über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup)-Aufruf), der dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, um das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen zu identifizieren.

### Eintragsobjekte

Ein Eintragsobjekt enthält die folgenden Eigenschaften:

- `binding`
  - : Eine Nummer, die einen eindeutigen Bezeichner für diesen speziellen Eintrag darstellt, der dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags entspricht. Zusätzlich entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), der in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Ein oder mehrere [Bitweise-Flags](/de/docs/Glossary/Bitwise_flags), die die Shader-Stufen definieren, für die ein entsprechender [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindgruppeneintrag wird für Rechenshader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindgruppeneintrag wird für Fragmentshader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindgruppeneintrag wird für Vertexshader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem die Werte mit Pipe-Symbolen getrennt werden, beispielsweise:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Ressourcenlayout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungstyp und die Struktur des entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert. Diese Eigenschaft kann eines von `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcenlayout-Objekte

Das Ressourcenlayout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) plus `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolescher Wert. Wenn auf `true` gesetzt, zeigt es an, dass diese Bindung einen dynamischen Offset erfordert, zum Beispiel, wie er während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)-Aufrufs festgelegt wird. Wenn weggelassen, ist `hasDynamicOffset` standardmäßig `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimal zulässige Größe in Bytes gebundener Puffer angibt. Wenn weggelassen, ist `minBindingSize` standardmäßig 0. Wenn der Wert 0 ist, wird die minimale Puffergröße während der Pipeline-Erstellung ignoriert und stattdessen durch ausgegebene Zeichen-/Dispatch-Befehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für mehr Informationen über Puffer-Typen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einem `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einem `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, ist `type` standardmäßig `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcenlayout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für mehr Informationen über Sampler-Typen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filterungssampler.
      - `"non-filtering"`: Ein nicht filternder Sampler.

      Wenn weggelassen, ist `type` standardmäßig `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob gebundene Textur-Ansichten für Lese- und/oder Schreibzugriffe gebunden werden. Mögliche Werte sind derzeit `"write-only"` und `undefined`, mit der Absicht, in Zukunft mehr Zugriffsmodi hinzuzufügen. Wenn weggelassen, ist der Standardwert `"write-only"`.
  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format von Textur-Ansichten angibt, die an diese Bindung gebunden sind. Siehe dazu den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Textur-Ansichten angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Würfelkarte betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Würfelkarte hinweg.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Würfelkarten betrachtet, von denen jede 6 Array-Ebenen hat, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Das Sampling erfolgt nahtlos über die Flächen der Würfelkarten hinweg.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, ist `viewDimension` standardmäßig `"2d"`.

- `texture`: Gibt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass Textur-Ansichten, die an diese Bindung gebunden sind, Multi-Sampling verwenden müssen. Wenn weggelassen, ist `multisampled` standardmäßig `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für Samples von Textur-Ansichten angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für mehr Informationen über Textur-Ansicht-Typen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, ist `sampleType` standardmäßig `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Textur-Ansichten angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind die gleichen wie für die `storageTexture`-Ressourcenlayout-Objekte — siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Der `binding`-Wert jedes Eintrags ist eindeutig.
- Der `binding`-Wert jedes Eintrags ist kleiner als das `maxBindingsPerBindGroup`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice) [limit](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Einträge überschreitet nicht die [Grenzen der Bindungsslots](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Nur 1 Ressourcenlayout-Objekt ist pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` umfasst:
  - Wenn das Ressourcenlayout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Das Ressourcenlayout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `texture` ist und sein `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das die Verwendung als Speicher unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Samples](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demonstrationsprogramm](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bindgruppenlayouts und dessen Verwendung als Vorlage beim Erstellen einer Bindgruppe.

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
