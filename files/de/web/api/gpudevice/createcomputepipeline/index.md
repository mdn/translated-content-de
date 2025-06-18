---
title: "GPUDevice: createComputePipeline() Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice) Interface erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die das Compute-Shader-Stadium steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `compute`

      - : Ein Objekt, das den Einstiegspunkt des Compute-Shaders der Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:

        - `constants` {{optional_inline}}

          - : Eine Sequenz von Datensatztypen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

            Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder ansonsten der Bezeichnername der Konstante.

            Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

            ```js
            ({
              // …
              constants: {
                0: false,
                1200: 3.0,
                1300: 2.0,
                width: 20,
                depth: -1,
                height: 15,
              },
            });
            ```

        - `entryPoint` {{optional_inline}}

          - : Der Name der Funktion im `module`, die dieses Stadium zur Ausführung seiner Arbeit nutzen wird. Die entsprechende Shader-Funktion muss das `@compute`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Deklaration des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

            Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzige Funktion mit gesetztem `@compute`-Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ist ungültig.

        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den dieses Programmierstadium ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus auszuarbeiten, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der bewirkt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf allen Bindungen, die im Shader-Code definiert sind, generiert. Wenn `"auto"` verwendet wird, dürfen die erstellten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Ein [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objekt wird zurückgegeben:

- Die von `module` innerhalb der `compute` Eigenschaft referenzierte Arbeitsgruppen-Speichergröße ist kleiner oder gleich dem `maxComputeWorkgroupStorageSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Compute-Aufrufen pro Arbeitsgruppe, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich den entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` [Limits](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzelne Compute-Shader-Einstiegspunkt-Funktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einfügen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) zum Erstellen eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout).
- Sofortige Verwendung dieses Wertes in einem `createComputePipeline()` Aufruf zum Erstellen einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline).

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

const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
