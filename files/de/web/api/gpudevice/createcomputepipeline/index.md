---
title: "GPUDevice: createComputePipeline() Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die den Compute-Shader-Stage steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `compute`
      - : Ein Objekt, das den Compute-Shader-Einstiegspunkt der Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:
        - `constants` {{optional_inline}}
          - : Eine Sequenz von Aufzeichnungsarten mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl der Aufzeichnung verwendet wird, und die `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

            Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder anderweitig der Bezeichnername der Konstante.

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
          - : Der Name der Funktion im `module`, die diese Stage zur Ausführung ihrer Aufgabe verwenden wird. Die entsprechende Shader-Funktion muss das `@compute`-Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

            Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion enthält, bei der das `@compute`-Attribut gesetzt ist — der Browser wird diese als den Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ist ungültig.

        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stage ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde und es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline veranlasst, ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekt zurückgegeben:

- Die Workgroup-Speichergröße, die von dem innerhalb der `compute`-Eigenschaft referenzierten `module` verwendet wird, ist kleiner oder gleich der `maxComputeWorkgroupStorageSize`-Grenze des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Compute-Aufrufen pro Workgroup, die kleiner oder gleich der `maxComputeInvocationsPerWorkgroup`-Grenze des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Workgroup-Größe des `module` ist kleiner oder gleich der entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ`-Grenze des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Compute-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einbinden des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortige Verwendung dieses Wertes in einem `createComputePipeline()`-Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
