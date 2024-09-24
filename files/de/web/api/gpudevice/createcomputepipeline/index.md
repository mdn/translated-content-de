---
title: "GPUDevice: Methode createComputePipeline()"
short-title: createComputePipeline()
slug: Web/API/GPUDevice/createComputePipeline
l10n:
  sourceCommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createComputePipeline()`** Methode des {{domxref("GPUDevice")}} Interfaces erstellt eine {{domxref("GPUComputePipeline")}}, die die Berechnungs-Shader-Stufe steuern kann und in einem {{domxref("GPUComputePassEncoder")}} verwendet werden kann.

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

          - : Eine Sequenz von Datensätzen, mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und die `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

            Abhängig davon, welche Konstante Sie überschreiben möchten, kann die `id` entweder die numerische ID der Konstante annehmen, falls eine angegeben ist, oder andernfalls den Bezeichnernamen der Konstante.

            Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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
          - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@compute` Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Eintrittspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.
        - `module`
          - : Ein {{domxref("GPUShaderModule")}} Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Stufe ausführen wird.

    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}} Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Buffer, Texturen, etc.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein {{domxref("GPUPipelineLayout")}} Objekt, erstellt mit {{domxref("GPUDevice.createPipelineLayout()")}}, was der GPU erlaubt, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline veranlasst, ein implizites Bind-Group-Layout basierend auf allen im Shader-Code definierten Bindings zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.

### Rückgabewert

Eine {{domxref("GPUComputePipeline")}} Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createComputePipeline()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUComputePipeline")}} Objekt zurückgegeben:

- Die von dem im `compute` Eigenschaft referenzierten `module` verwendete Arbeitsgruppen-Speichergröße ist kleiner oder gleich der `maxComputeWorkgroupStorageSize` {{domxref("GPUSupportedLimits", "Grenze", "", "nocode")}} des {{domxref("GPUDevice")}}.
- Das `module` verwendet eine Anzahl von Compute-Invokationen pro Arbeitsgruppe, die kleiner oder gleich der `maxComputeInvocationsPerWorkgroup` {{domxref("GPUSupportedLimits", "Grenze", "", "nocode")}} des {{domxref("GPUDevice")}} ist.
- Die Arbeitsgruppengröße des `module` ist kleiner oder gleich der entsprechenden `maxComputeWorkgroupSizeX`, `maxComputeWorkgroupSizeY` oder `maxComputeWorkgroupSizeZ` {{domxref("GPUSupportedLimits", "Grenze", "", "nocode")}} des {{domxref("GPUDevice")}}.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Berechnungsbeispiel](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt einen Prozess von:

- Erstellen eines Bind-Group-Layouts mit {{domxref("GPUDevice.createBindGroupLayout()")}}.
- Übergeben des `bindGroupLayout` an {{domxref("GPUDevice.createPipelineLayout()")}}, um ein {{domxref("GPUPipelineLayout")}} zu erstellen.
- Verwenden dieses Wertes unmittelbar in einem `createComputePipeline()` Aufruf, um eine {{domxref("GPUComputePipeline")}} zu erstellen.

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
