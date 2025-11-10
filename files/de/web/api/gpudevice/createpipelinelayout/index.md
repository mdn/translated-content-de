---
title: "GPUDevice: createPipelineLayout() Methode"
short-title: createPipelineLayout()
slug: Web/API/GPUDevice/createPipelineLayout
l10n:
  sourceCommit: a854d5e4b61010664db37056555ab25ab4908192
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createPipelineLayout()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout), das die von einer Pipeline verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s definiert. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.

## Syntax

```js-nolint
createPipelineLayout(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `bindGroupLayouts`
      - : Ein Array von Werten, die die Bind-Group-Layouts für eine Pipeline darstellen. Jeder Wert kann sein:
        - Ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekt, erstellt durch einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout). Jedes Objekt entspricht einem [`@group`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding) Attribut im Shader-Code, der im verwandten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) verwendet wird.
        - `null`, was ein leeres Bind-Group-Layout darstellt. `null`-Werte werden beim Erstellen eines Pipeline-Layouts ignoriert.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.

### Rückgabewert

Eine Instanz des [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createPipelineLayout()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt zurückgegeben:

- Die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` sind gültig.
- Die Anzahl der [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Objekte in `bindGroupLayouts` ist kleiner als das `maxBindGroups` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Mehrere Bind-Group-Layouts, Bind-Group und Pipeline-Layout

Der folgende Codeausschnitt:

- Erstellt ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), das eine Bindung mit einem Puffer, einer Textur und einem Sampler beschreibt.
- Erstellt ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) basierend auf dem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout).

```js
// …

const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.VERTEX | GPUShaderStage.FRAGMENT,
      buffer: {},
    },
    {
      binding: 1,
      visibility: GPUShaderStage.FRAGMENT,
      texture: {},
    },
    {
      binding: 2,
      visibility: GPUShaderStage.FRAGMENT,
      sampler: {},
    },
  ],
});

const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bindGroupLayout],
});

// …
```

### Ein leeres Bind-Group-Layout spezifizieren

In diesem Ausschnitt erstellen wir drei Bind-Group-Layouts, wobei Bind-Group-Layout 1 Fragmentdaten und Bind-Group-Layout 2 Vertexdaten repräsentiert. Wenn wir eine Pipeline erstellen möchten, die nur Bind-Group-Layouts 0 und 2 verwendet, können wir `null` für Bind-Group-Layout 1 übergeben und dann ohne einen Fragment-Shader rendern.

```js
const bgl0 = device.createBindGroupLayout({ entries: myGlobalEntries });
const bgl1 = device.createBindGroupLayout({ entries: myFragmentEntries });
const bgl2 = device.createBindGroupLayout({ entries: myVertexEntries });

// pipeline layout can be used to render without a fragment shader
const pipelineLayout = device.createPipelineLayout({
  bindGroupLayouts: [bgl0, null, bgl2],
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
