---
title: "GPUDevice: createBindGroup()-Methode"
short-title: createBindGroup()
slug: Web/API/GPUDevice/createBindGroup
l10n:
  sourceCommit: d8f04d843dd81ab8cea1cfc0577ae3c5c9b77d5c
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die **`createBindGroup()`**-Methode der {{domxref("GPUDevice")}}-Schnittstelle erstellt eine {{domxref("GPUBindGroup")}} basierend auf einem {{domxref("GPUBindGroupLayout")}}, das eine Menge von Ressourcen definiert, die in einer Gruppe zusammengebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.

## Syntax

```js-nolint
createBindGroup(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `entries`
      - : Ein Array von Eintragsobjekten, die die Ressourcen beschreiben, die dem Shader zur Verfügung gestellt werden sollen. Es wird für jeden entsprechenden Eintrag geben, der im `layout` referenzierten {{domxref("GPUBindGroupLayout")}} beschrieben wird. Jedes Eintragsobjekt hat die folgenden Eigenschaften:
        - `binding`
          - : Eine Zahl, die eine eindeutige Kennung für diese Ressourcenbindung darstellt, die dem `binding`-Wert eines entsprechenden {{domxref("GPUBindGroupLayout")}}-Eintrags entspricht. Zusätzlich entspricht sie dem `n`-Indexwert des entsprechenden [`@binding(n)`](https://gpuweb.github.io/gpuweb/wgsl/#attribute-binding)-Attributs im Shader ({{domxref("GPUShaderModule")}}), der in der zugehörigen Pipeline verwendet wird.
        - `resource`
          - : Die zu bindende Ressource. Dies kann eine der folgenden sein:
            - `GPUBufferBinding` (die einen {{domxref("GPUBuffer")}} umschließt; siehe [GPUBufferBinding objects](#gpubufferbinding-objekte) für eine Definition)
            - {{domxref("GPUExternalTexture")}}
            - {{domxref("GPUSampler")}}
            - {{domxref("GPUTextureView")}}
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in {{domxref("GPUError")}}-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Das {{domxref("GPUBindGroupLayout")}}, dem die `entries` dieser Bindungsgruppe entsprechen werden.

### GPUBufferBinding-Objekte

Ein `GPUBufferBinding`-Objekt kann die folgenden Eigenschaften enthalten:

- `buffer`
  - : Das {{domxref("GPUBuffer")}}-Objekt, das Sie binden möchten.
- `offset` {{optional_inline}}
  - : Der Offset in Bytes vom Anfang des `buffer` bis zum Anfang des Bereichs, der durch die Pufferbindung dem Shader zugänglich gemacht wird. Wenn er weggelassen wird, ist der `offset` standardmäßig 0.
- `size` {{optional_inline}}
  - : Die Größe in Bytes der Pufferbindung. Wenn sie weggelassen wird, ist `size` der Bereich, der am `offset` beginnt und am Ende des `buffer` endet. Wenn sowohl `offset` als auch `size` weggelassen werden, wird der gesamte Puffer dem Shader zugänglich gemacht.

### Rückgabewert

Eine Instanz des {{domxref("GPUBindGroup")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createBindGroup()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} generiert und ein ungültiges {{domxref("GPUBindGroup")}}-Objekt zurückgegeben:

- Die Anzahl der Einträge im `layout`-{{domxref("GPUBindGroupLayout")}} entspricht der Anzahl der Eintragsobjekte in `entries`.
- Für jeden Eintrag im `layout`-{{domxref("GPUBindGroupLayout")}} bindet das entsprechende Eintragsobjekt in `entries` den richtigen Ressourcentyp. Zum Beispiel hat ein `buffer`-Ressourcenlayoutobjekt ein `GPUBufferBinding`-Objekt, das in der entsprechenden Bindung spezifiziert ist.
- Wenn das Ressourcenlayoutobjekt ein `buffer` ist:
  - Der entsprechende gebundene {{domxref("GPUBuffer")}}:
    - Hat seinen gesamten gebundenen Teil (wie durch `offset` und `size` spezifiziert) vollständig in sich enthalten, mit einer nicht-null Größe.
    - Hat eine Größe, die größer ist als die `minBindingSize` des `buffer`-Ressourcenlayout.
  - Wenn der `type` des Ressourcenlayoutobjekts `"uniform"` ist:
    - Hat der gebundene {{domxref("GPUBuffer")}} eine `usage`, die `GPUBufferUsage.UNIFORM` enthält.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxUniformBufferBindingSize` des {{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
    - Der angegebene `GPUBufferBinding`-`offset` ist ein Vielfaches des `minUniformBufferOffsetAlignment` des {{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
  - Wenn der `type` des Ressourcenlayoutobjekts `"storage"` oder `"read-only-storage"` ist:
    - Hat der gebundene {{domxref("GPUBuffer")}} eine `usage`, die `GPUBufferUsage.STORAGE` enthält.
    - Die effektive Größe des gebundenen Puffersegments ist kleiner oder gleich dem `maxStorageBufferBindingSize` des {{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
    - Die effektive Größe des gebundenen Puffersegments ist ein Vielfaches von 4.
    - Der angegebene `GPUBufferBinding`-`offset` ist ein Vielfaches des `minStorageBufferOffsetAlignment` des {{domxref("GPUDevice")}}-{{domxref("GPUSupportedLimits", "limit", "", "nocode")}}.
- Wenn das Ressourcenlayoutobjekt ein `storageTexture` ist, der entsprechende gebundene {{domxref("GPUTextureView")}}:
  - Hat eine `dimension`, die gleich der `viewDimension` des Ressourcenlayoutobjekts ist (siehe {{domxref("GPUTexture.createView()")}} für mehr Details zu den Einstellungen einer Texturansicht).
  - Hat ein `format`, das dem `sampleType` des Ressourcenlayoutobjekts entspricht.
  - Hat eine `mipLevelCount` gleich 1.
  - Ist eine Ansicht einer {{domxref("GPUTexture")}} mit einer `usage`, die `GPUTextureUsage.STORAGE_BINDING` enthält.
- Wenn das Ressourcenlayoutobjekt ein `texture` ist, der entsprechende gebundene {{domxref("GPUTextureView")}}:
  - Hat eine `dimension`, die gleich der `viewDimension` des Ressourcenlayoutobjekts ist (siehe {{domxref("GPUTexture.createView()")}} für mehr Details zu den Einstellungen einer Texturansicht).
  - Hat ein `format`, das mit dem `sampleType` des Ressourcenlayoutobjekts kompatibel ist.
  - Ist eine Ansicht einer {{domxref("GPUTexture")}} mit einer `usage`, die `GPUTextureUsage.TEXTURE_BINDING` enthält.
  - Ist eine Ansicht einer {{domxref("GPUTexture")}} mit einer `sampleCount`, die größer als 1 ist, wenn das `multisampled`-Eigenschaft des Ressourcenlayoutobjekts `true` ist, oder gleich 1, wenn es `false` ist.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) zeigt ein Beispiel für das Erstellen eines Bindungsgruppenlayouts und dessen Verwendung als Vorlage beim Erstellen einer Bindungsgruppe.

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
