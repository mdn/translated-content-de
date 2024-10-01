---
title: "GPUDevice: Methode createBindGroupLayout()"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createBindGroupLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffern definiert, die in einer Pipeline verwendet werden und dient als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die im [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) enthalten sein soll. Jeder Eintrag entspricht einem in einer [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) (erstellt über einen [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) Aufruf) definierten Eintrag, der dieses [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt enthält die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die eine eindeutige Kennung für diesen speziellen Eintrag darstellt, die mit dem `binding`-Wert eines entsprechenden [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags übereinstimmt. Zusätzlich entspricht es dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ([`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)), das in der zugehörigen Pipeline verwendet wird.
- `visibility`

  - : Ein oder mehrere {{Glossary("Bitwise_flags", "Bitweise Flaggen")}}, die die Shader-Stufen definieren, für die ein [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag sichtbar sein wird, der diesem Eintrag entspricht. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bindungsgruppeneintrag wird für Compu-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bindungsgruppeneintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bindungsgruppeneintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen durch Trennzeichen mit Pipe-Symbolen angegeben werden können, zum Beispiel:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Ressourcen-Layout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrags definiert, der diesem Eintrag entspricht. Diese Eigenschaft kann eines von `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcen-Layout-Objekte

Das Ressourcen-Layout-Objekt kann eines der folgenden sein (siehe auch [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) für Details, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Zeigt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein `GPUBufferBinding`-Objekt sein wird, das einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) sowie `offset`- und `size`-Werte enthält. Ein `buffer`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolescher Wert. Wenn auf `true` gesetzt, zeigt dies an, dass diese Bindung einen dynamischen Offset erfordert, beispielsweise wie während eines [`GPURenderPassEncoder.setBindGroup()`](/de/docs/Web/API/GPURenderPassEncoder/setBindGroup)-Aufrufs festgelegt. Wenn weggelassen, wird `hasDynamicOffset` auf `false` gesetzt.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimale erlaubte Größe in Bytes von gebundenen Buffern angibt. Wenn weggelassen, wird `minBindingSize` auf 0 gesetzt. Wenn der Wert 0 ist, wird die Mindestpuffergröße während der Pipelinenerstellung ignoriert und stattdessen durch ausgegebene Zeichen/Distributionsbefehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) für weitere Informationen zu Pufferarten). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"storage"`: Ein beschreibbarer Puffer, der mit einer `usage` von `GPUBufferUsage.STORAGE` erstellt wurde.
      - `"uniform"`: Ein Puffer, der mit einer `usage` von `GPUBufferUsage.UNIFORM` erstellt wurde.

      Wenn weggelassen, wird `type` auf `"uniform"` gesetzt.

- `externalTexture`: Zeigt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)-Objekt sein wird. Ein `externalTexture`-Ressourcen-Layout-Objekt ist leer — `{}`.

- `sampler`: Zeigt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUSampler`](/de/docs/Web/API/GPUSampler)-Objekt sein wird. Ein `sampler`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für [`GPUSampler`](/de/docs/Web/API/GPUSampler)s angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createSampler()`](/de/docs/Web/API/GPUDevice/createSampler) für weitere Informationen zu Sampler-Arten). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filtersampler.
      - `"non-filtering"`: Ein nicht filternder Sampler.

      Wenn weggelassen, wird `type` auf `"filtering"` gesetzt.

- `storageTexture`: Zeigt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `storageTexture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob Texturansichten, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Derzeit sind die möglichen Werte `"write-only"` und `undefined`, mit der Absicht, in Zukunft weitere Zugriffsmodi hinzuzufügen. Wenn weggelassen, ist der Standardwert `"write-only"`.
  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format von Texturansichten angibt, die an diese Bindung gebunden sind. Siehe den [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat)-Abschnitt der Spezifikation für alle verfügbaren `format`-Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array zweidimensionaler Bilder betrachtet.
      - `"cube"`: Die Textur wird als Kubemap betrachtet. Die Ansicht hat 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Kubemap.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Kubemaps betrachtet, jede mit 6 Array-Ebenen, die den `[+X, -X, +Y, -Y, +Z, -Z]`-Flächen des Würfels entsprechen. Die Abtastung erfolgt nahtlos über die Flächen der Kubemaps.
      - `"3d"`: Die Textur wird als dreidimensionales Bild betrachtet.

      Wenn weggelassen, wird `viewDimension` auf `"2d"` gesetzt.

- `texture`: Zeigt an, dass der entsprechende [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)-Eintrag ein [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)-Objekt sein wird. Ein `texture`-Ressourcen-Layout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass Texturansichten, die an diese Bindung gebunden sind, multiplabgenommen sein müssen. Wenn weggelassen, wird `multisampled` auf `false` gesetzt.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Stichprobentyp für Texturansichten angibt, die an diese Bindung gebunden sind (siehe [`GPUDevice.createTexture()`](/de/docs/Web/API/GPUDevice/createTexture) für weitere Informationen zu Texturansichtstypen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, wird `sampleType` auf `"float"` gesetzt.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Texturansichten angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind die gleichen wie für `storageTexture`-Ressourcen-Layout-Objekte – siehe oben.

### Rückgabewert

Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt zurückgegeben:

- Jeder `binding`-Wert eines Eintrags ist eindeutig.
- Jeder `binding`-Wert eines Eintrags ist kleiner als das [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxBindingsPerBindGroup`-[Limit](/de/docs/Web/API/GPUSupportedLimits).
- Die Anzahl der Einträge überschreitet nicht die [Bindungs-Slot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Pro Eintrag ist nur 1 Ressourcen-Layout-Objekt definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` enthält:
  - Wenn sein Ressourcen-Layout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcen-Layout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `texture` ist und sein `multisampled`-Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcen-Layout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das Speicherverwendung unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für die Erstellung eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage bei der Erstellung einer Bindungsgruppe.

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
