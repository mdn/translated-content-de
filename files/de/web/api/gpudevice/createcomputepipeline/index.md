---
title: "GPUDevice: createComputePipeline()-Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Berechnungs-Shader-Stufe steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `compute`

      - : Ein Objekt, das den Berechnungs-Shader-Einstiegspunkt der Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:

        - `constants` {{optional_inline}}

          - : Eine Sequenz von Datensätzen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und die `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

            Abhängig von der zu überschreibenden Konstante kann die `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder sonst den Bezeichnernamen der Konstante.

            Ein Code-Schnipsel, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte wie folgt aussehen:

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

        - `entryPoint`
          - : Der Name der Funktion im `module`, die diese Stufe zur Durchführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@compute`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmatische Stufe ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String von `"auto"`, was bewirkt, dass die Pipeline ein implizites Bind-Gruppenlayout basierend auf den im Shader-Code definierten Bindungen erzeugt. Wenn `"auto"` verwendet wird, können die generierten Bind-Gruppenlayouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createComputePipeline()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekt zurückgegeben:

- Die von dem im `compute`-Eigentum referenzierten `module` verwendete Arbeitsgruppenspeichergröße muss kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeWorkgroupStorageSize` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) sein.
- Das `module` verwendet eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeInvocationsPerWorkgroup` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) sein muss.
- Die Arbeitsgruppengröße des `modules` muss kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) sein.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Gruppenlayouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Übergabe des `bindGroupLayout` an [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortige Nutzung dieses Wertes in einem `createComputePipeline()`-Aufruf zur Erstellung einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline).

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
