---
title: "GPUDevice: createComputePipeline()-Methode"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createComputePipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline), die die Berechnungsshader-Stufe steuern kann und in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden kann.

## Syntax

```js-nolint
createComputePipeline(descriptor)
```

### Parameter

- `descriptor`

  - : Ein Objekt, das die folgenden Eigenschaften enthält:

    - `compute`

      - : Ein Objekt, das den Einstiegsunkt des Berechnungsshaders der Pipeline beschreibt. Dieses Objekt kann die folgenden Eigenschaften enthalten:

        - `constants` {{optional_inline}}

          - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und der `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

            Je nachdem, welche Konstante Sie überschreiben möchten, kann das `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

            Ein Code-Ausschnitt, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

          - : Der Name der Funktion im `module`, die diese Stufe nutzen wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@compute`-Attribut haben, um als dieser Einstiegsunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.

            Sie können die `entryPoint`-Eigenschaft auslassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@compute`-Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) wird ungültig.

        - `module`
          - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.

    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, z.B. in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Eine Zeichenkette `"auto"`, die dazu führt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen generiert. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine Instanz des [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)-Objekt zurückgegeben:

- Die im `compute`-Eigentum referenzierte `module`-Arbeitsgruppenspeichergröße ist kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-`maxComputeWorkgroupStorageSize`-[Grenze](/de/docs/Web/API/GPUSupportedLimits).
- Das `module` verwendet eine Anzahl von Berechnungsaufrufen pro Arbeitsgruppe, die kleiner oder gleich der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-`maxComputeInvocationsPerWorkgroup`-[Grenze](/de/docs/Web/API/GPUSupportedLimits) ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich der entsprechenden [`GPUDevice`](/de/docs/Web/API/GPUDevice)-`maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ`-[Grenze](/de/docs/Web/API/GPUSupportedLimits).
- Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Berechnungsshader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout).
- Einfügen des `bindGroupLayout` in [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), um ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) zu erstellen.
- Sofortige Verwendung dieses Werts in einem `createComputePipeline()`-Aufruf, um eine [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) zu erstellen.

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
