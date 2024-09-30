---
title: "GPUDevice: createComputePipeline()-Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Berechnungsschicht steuern und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `compute`

      - : Ein Objekt, das den Berechnungseintrittspunkt der Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:

        - `constants` {{optional_inline}}

          - : Eine Sequenz von Datensatztypen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

            Abhängig von der Konstante, die Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine spezifiziert ist, oder anderweitig den Bezeichnernamen der Konstante.

            Ein Codeausschnitt, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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
          - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@compute`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die zur Identifikation des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt wird.
        - Ein String "`auto`", der die Pipeline dazu veranlasst, ein implizites Bindungsgruppenlayout basierend auf den im Shader-Code definierten Bindungen zu erzeugen. Wenn "`auto`" verwendet wird, dürfen die generierten Bindungsgruppenlayouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine Instanz des [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekt zurückgegeben:

- Die Arbeitsgruppenspeichergröße, die vom `module` innerhalb der `compute`-Eigenschaft referenziert wird, ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeWorkgroupStorageSize` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
- Das `module` verwendet eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeInvocationsPerWorkgroup` des [`GPUDevice`](/de/docs/Web/API/GPUDevice) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich dem entsprechenden [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungsdemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bindungsgruppenlayouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Verwendung des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortige Nutzung dieses Werts in einem `createComputePipeline()`-Aufruf zur Erstellung einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline).

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
