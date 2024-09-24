---
title: "GPUDevice: Methode createBindGroupLayout()"
short-title: createBindGroupLayout()
slug: Web/API/GPUDevice/createBindGroupLayout
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createBindGroupLayout()`** Methode des {{domxref("GPUDevice")}} Interfaces erstellt ein {{domxref("GPUBindGroupLayout")}}, das die Struktur und den Zweck von verwandten GPU-Ressourcen wie Puffern definiert, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von {{domxref("GPUBindGroup")}}s verwendet.

## Syntax

```js-nolint
createBindGroupLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von [Eintragsobjekten](#eintragsobjekte), von denen jedes eine einzelne Shader-Ressourcenbindung beschreibt, die in das {{domxref("GPUBindGroupLayout")}} aufgenommen werden soll. Jeder Eintrag entspricht einem Eintrag, der in einem {{domxref("GPUBindGroup")}} (erzeugt über einen {{domxref("GPUDevice.createBindGroup()")}} Aufruf) definiert ist, der dieses {{domxref("GPUBindGroupLayout")}} Objekt als Vorlage verwendet.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in {{domxref("GPUError")}} Meldungen oder Konsolenwarnungen.

### Eintragsobjekte

Ein Eintragsobjekt enthält die folgenden Eigenschaften:

- `binding`
  - : Eine Zahl, die eine eindeutige Kennung für diesen besonderen Eintrag darstellt, die mit dem `binding` Wert eines entsprechenden {{domxref("GPUBindGroup")}} Eintrags übereinstimmt. Außerdem stimmt es mit dem `n` Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attributs im Shader ({{domxref("GPUShaderModule")}}), der in der damit verbundenen Pipeline verwendet wird, überein.
- `visibility`

  - : Ein oder mehrere {{glossary("Bitwise_flags", "bitweise Flags")}}, die die Shader-Stufen definieren, für die ein entsprechender {{domxref("GPUBindGroup")}} Eintrag sichtbar sein wird. Mögliche Werte sind:

    - `GPUShaderStage.COMPUTE`: Der Bind-Group-Eintrag wird für Compute-Shader zugänglich sein.
    - `GPUShaderStage.FRAGMENT`: Der Bind-Group-Eintrag wird für Fragment-Shader zugänglich sein.
    - `GPUShaderStage.VERTEX`: Der Bind-Group-Eintrag wird für Vertex-Shader zugänglich sein.

    Beachten Sie, dass mehrere Stufen angegeben werden können, indem Werte mit Pipe-Symbolen getrennt werden, zum Beispiel:

    ```js
    visibility: GPUShaderStage.FRAGMENT | GPUShaderStage.VERTEX;
    ```

- "Ressourcenlayout-Objekt"
  - : Ein Objekt, das den erforderlichen Bindungsressourcentyp und die Struktur des entsprechenden {{domxref("GPUBindGroup")}} Eintrags definiert. Diese Eigenschaft kann `buffer`, `externalTexture`, `sampler`, `storageTexture` oder `texture` sein, deren Objektstrukturen im nächsten Abschnitt beschrieben werden.

### Ressourcenlayout-Objekte

Das Ressourcenlayout-Objekt kann eines der folgenden sein (siehe auch {{domxref("GPUDevice.createBindGroup()")}} für Details, wie die erforderlichen Ressourcen für jeden Eintrag strukturiert sind):

- `buffer`: Gibt an, dass der entsprechende {{domxref("GPUBindGroup")}} Eintrag ein `GPUBufferBinding` Objekt sein wird, das einen {{domxref("GPUBuffer")}} sowie `offset` und `size` Werte enthält. Ein `buffer` Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `hasDynamicOffset` {{optional_inline}}

    - : Ein boolescher Wert. Wenn auf `true` gesetzt, zeigt dies an, dass diese Bindung einen dynamischen Offset benötigt, zum Beispiel, wie bei einem {{domxref("GPURenderPassEncoder.setBindGroup()")}} Aufruf eingestellt. Wenn weggelassen, lautet der Standardwert von `hasDynamicOffset` `false`.

  - `minBindingSize` {{optional_inline}}

    - : Eine Zahl, die die minimale erlaubte Größe, in Bytes, der gebundenen Puffer angibt. Wenn weggelassen, liegt der Standardwert von `minBindingSize` bei 0. Wenn der Wert 0 ist, wird die Mindestpuffergröße während der Pipeline-Erstellung ignoriert und stattdessen durch ausgegebene Zeichen-/Dispatch-Befehle validiert.

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für {{domxref("GPUBuffer")}}s angibt, die an diese Bindung gebunden sind (siehe {{domxref("GPUDevice.createBuffer()")}} für weitere Informationen über Puffertypen). Mögliche Werte sind:

      - `"read-only-storage"`: Ein schreibgeschützter Puffer, erstellt mit einem `usage` von `GPUBufferUsage.STORAGE`.
      - `"storage"`: Ein beschreibbarer Puffer, erstellt mit einem `usage` von `GPUBufferUsage.STORAGE`.
      - `"uniform"`: Ein Puffer, erstellt mit einem `usage` von `GPUBufferUsage.UNIFORM`.

      Wenn weggelassen, lautet der Standardwert von `type` `"uniform"`.

- `externalTexture`: Gibt an, dass der entsprechende {{domxref("GPUBindGroup")}} Eintrag ein {{domxref("GPUExternalTexture")}} Objekt sein wird. Ein `externalTexture` Ressourcenlayout-Objekt ist leer — `{}`.

- `sampler`: Gibt an, dass der entsprechende {{domxref("GPUBindGroup")}} Eintrag ein {{domxref("GPUSampler")}} Objekt sein wird. Ein `sampler` Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `type` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Typ für {{domxref("GPUSampler")}}s angibt, die an diese Bindung gebunden sind (siehe {{domxref("GPUDevice.createSampler()")}} für weitere Informationen über Samplertypen). Mögliche Werte sind:

      - `"comparison"`: Ein Vergleichssampler.
      - `"filtering"`: Ein Filterungssampler.
      - `"non-filtering"`: Ein nicht filternder Sampler.

      Wenn weggelassen, lautet der Standardwert von `type` `"filtering"`.

- `storageTexture`: Gibt an, dass der entsprechende {{domxref("GPUBindGroup")}} Eintrag ein {{domxref("GPUTextureView")}} Objekt sein wird. Ein `storageTexture` Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `access` {{optional_inline}}
    - : Ein enumerierter Wert, der angibt, ob Textur-Views, die an diese Bindung gebunden sind, für Lese- und/oder Schreibzugriff gebunden werden. Mögliche Werte sind derzeit `"write-only"` und `undefined`, mit der Absicht, in Zukunft mehr Zugriffsmodi hinzuzufügen. Wenn weggelassen, liegt der Standardwert bei `"write-only"`.
  - `format`
    - : Ein enumerierter Wert, der das erforderliche Format von Textur-Views angibt, die an diese Bindung gebunden sind. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format` Werte.
  - `viewDimension` {{optional_inline}}

    - : Ein enumerierter Wert, der die erforderliche Dimension für Textur-Views angibt, die an diese Bindung gebunden sind. Mögliche Werte sind:

      - `"1d"`: Die Textur wird als ein eindimensionales Bild betrachtet.
      - `"2d"`: Die Textur wird als ein einzelnes zweidimensionales Bild betrachtet.
      - `"2d-array"`: Die Textur wird als ein Array von zweidimensionalen Bildern betrachtet.
      - `"cube"`: Die Textur wird als Cubemap betrachtet. Der View hat 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen des Cubemaps.
      - `"cube-array"`: Die Textur wird als gepacktes Array von `n` Cubemaps betrachtet, jede mit 6 Array-Schichten, die den `[+X, -X, +Y, -Y, +Z, -Z]` Flächen des Würfels entsprechen. Abtastung erfolgt nahtlos über die Flächen der Cubemaps.
      - `"3d"`: Die Textur wird als ein dreidimensionales Bild betrachtet.

      Wenn weggelassen, lautet der Standardwert von `viewDimension` `"2d"`.

- `texture`: Gibt an, dass der entsprechende {{domxref("GPUBindGroup")}} Eintrag ein {{domxref("GPUTextureView")}} Objekt sein wird. Ein `texture` Ressourcenlayout-Objekt kann die folgenden Eigenschaften enthalten:

  - `multisampled` {{optional_inline}}

    - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass Textur-Views, die an diese Bindung gebunden sind, multisampled sein müssen. Wenn weggelassen, lautet der Standardwert von `multisampled` `false`.

  - `sampleType` {{optional_inline}}

    - : Ein enumerierter Wert, der den erforderlichen Abtasttyp für Textur-Views angibt, die an diese Bindung gebunden sind (siehe {{domxref("GPUDevice.createTexture()")}} für weitere Informationen über Textur-View-Typen). Mögliche Werte sind:

      - `"depth"`
      - `"float"`
      - `"sint"`
      - `"uint"`
      - `"unfilterable-float"`

      Wenn weggelassen, lautet der Standardwert von `sampleType` `"float"`.

  - `viewDimension` {{optional_inline}}
    - : Ein enumerierter Wert, der die erforderliche Dimension für Textur-Views angibt, die an diese Bindung gebunden sind. Mögliche und Standardwerte sind die gleichen wie für `storageTexture` Ressourcenlayout-Objekte — siehe oben.

### Rückgabewert

Eine {{domxref("GPUBindGroupLayout")}} Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroupLayout()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUBindGroupLayout")}} Objekt zurückgegeben:

- Der `binding` Wert jedes Eintrags ist eindeutig.
- Der `binding` Wert jedes Eintrags ist kleiner als das `maxBindingsPerBindGroup` {{domxref("GPUSupportedLimits", "Limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Die Anzahl der Einträge überschreitet nicht die [Binding-Slot-Limits](https://gpuweb.github.io/gpuweb/#exceeds-the-binding-slot-limits).
- Es wird nur 1 Ressourcenlayout-Objekt pro Eintrag definiert.
- Wenn die `visibility` eines Eintrags `GPUShaderStage.VERTEX` enthält:
  - Wenn sein Ressourcenlayout-Objekt ein `buffer` ist, ist sein `type` nicht `"storage"`.
  - Sein Ressourcenlayout-Objekt ist kein `storageTexture`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `texture` ist und sein `multisampled` Wert `true` ist:
  - Seine `viewDimension` ist `"2d"`.
  - Sein `sampleType` ist nicht `"float"`.
- Wenn das Ressourcenlayout-Objekt eines Eintrags ein `storageTexture` ist:
  - Seine `viewDimension` ist nicht `"cube"` oder `"cube-array"`.
  - Sein `format` ist ein Format, das Speichergebrauch unterstützt.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel dafür, wie ein Bind-Group-Layout erstellt wird und dieses dann als Vorlage zum Erstellen einer Bind-Group verwendet wird.

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
