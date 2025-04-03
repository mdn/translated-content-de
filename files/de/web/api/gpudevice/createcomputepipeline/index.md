---
title: "GPUDevice: createComputePipeline() Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Compute-Shader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

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

          - : Eine Folge von Datensatztypen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und das `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

            Abhängig davon, welche Konstante Sie überschreiben möchten, kann das `id` die Form der numerischen ID der Konstante annehmen, falls angegeben, oder ansonsten der Name des Konstantenidentifikators.

            Ein Codeausschnitt, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

            ```js
            ({
              // ...
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

          - : Der Name der Funktion im `module`, die von dieser Stufe zur Durchführung ihrer Arbeit verwendet wird. Die entsprechende Shader-Funktion muss das `@compute` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Deklaration des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

            Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit gesetztem `@compute` Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) wird ungültig sein.

        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Stufe ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ), aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde, und es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der dazu führt, dass die Pipeline basierend auf allen im Shader-Code definierten Bindungen einen impliziten Bind-Group-Layout generiert. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine Instanz des [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) Objekt wird zurückgegeben:

- Die in der `compute` Eigenschaft referenzierte `module` nutzt weniger oder gleich viel Arbeitsgruppenspeichergröße als das `maxComputeWorkgroupStorageSize` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Compute-Aufrufen pro Arbeitsgruppe, die kleiner oder gleich dem `maxComputeInvocationsPerWorkgroup` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich dem entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzige Funktion für den Compute-Shader-Einstiegspunkt, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess des:

- Erstellens eines Bind-Group-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einfügen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortiges Verwenden dieses Wertes in einem `createComputePipeline()` Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
