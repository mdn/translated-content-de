---
title: "GPUDevice: createComputePipeline() Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: dad9fbcaff755c9bf81808e294ce239028b681f5
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interfaces erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Steuerung der Compute-Shader-Stufe ermöglicht und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `compute`

      - : Ein Objekt, das den Einstiegspunkt des Compute-Shaders für die Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:

        - `constants` {{optional_inline}}

          - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich ähnlich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Records verwendet wird, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

            Abhängig davon, welche Konstante Sie überschreiben möchten, kann das `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder anderweitig der Bezeichnername der Konstante.

            Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte wie folgt aussehen:

            ```js
            {
              // ...
              constants: {
                0: false,
                1200: 3.0,
                1300: 2.0,
                width: 20,
                depth: -1,
                height: 15,
              }
            }
            ```

        - `entryPoint` {{optional_inline}}

          - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@compute` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

            Sie können die `entryPoint` Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@compute` Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) wird ungültig.

        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Stufe ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline dazu bringt, ein implizites Bindgruppen-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bindgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Ein [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objekt zurückgegeben:

- Die im `module`, das im `compute` Eigenschaft referenziert wird, genutzte Workgroup-Speichergröße ist kleiner oder gleich der `maxComputeWorkgroupStorageSize` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Compute-Aufrufen pro Workgroup, die kleiner oder gleich der `maxComputeInvocationsPerWorkgroup` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Workgroup-Größe des `module` ist kleiner oder gleich der entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` [Grenze](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Compute-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bindgruppen-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Führen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Verwenden dieses Wertes sofort in einem `createComputePipeline()` Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
