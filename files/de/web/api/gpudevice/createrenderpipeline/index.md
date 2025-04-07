---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `depthStencil`-Objekts](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und seine Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhängen-Ausgaben, aber sie führt dennoch Rasterisierung durch und erzeugt Tiefenwerte basierend auf dem Vertex-Position-Ausgang. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen, verwendet werden kann.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Buffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde und es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der dazu führt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf den in der Shader-Code definierten Bindings generiert. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den Multisample-Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und ihre Eingabepuffer-Layouts beschreibt.

### Struktur des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefenbias darstellt, der zu jedem Fragment hinzugefügt wird. Wenn nicht angegeben, liegt der Standardwert für `depthBias` bei 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen für Linien- und Punkt-Topologien auf `0` gesetzt sein, d.h. wenn `topology` auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenbias eines Fragments darstellt. Wenn nicht angegeben, liegt der Standardwert für `depthBiasClamp` bei 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefenbias darstellt, der mit der Neigung des Fragments skaliert wird. Wenn nicht angegeben, liegt der Standardwert für `depthBiasSlopeScale` bei 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen immer fehl.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er ungleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` spezifiziert, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung modifizieren kann. Wenn er auf `false` gesetzt ist, kann sie es nicht.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format spezifiziert, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärtige Primitiven durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencilwerte verwendet wird. Mögliche Werte sind dieselben wie für die Eigenschaft `depthCompare`; siehe oben. Wenn nicht angegeben, ist der Standardwert für `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragmenttiefenvergleich, wie in `depthCompare` beschrieben, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Den aktuellen Render-State-Stencilwert dekrementieren, wobei er auf 0 begrenzt wird.
        - `"decrement-wrap"`: Den aktuellen Render-State-Stencilwert dekrementieren und auf den maximal darstellbaren Wert des Stencil-Anteils des `depthStencilAttachment` zurücksetzen, wenn der Wert unter 0 fällt.
        - `"invert"`: Den aktuellen Render-State-Stencilwert bitweise invertieren.
        - `"increment-clamp"`: Den aktuellen Render-State-Stencilwert inkrementieren und auf den maximal darstellbaren Wert des Stencil-Anteils des `depthStencilAttachment` begrenzen.
        - `"increment-wrap"`: Den aktuellen Render-State-Stencilwert inkrementieren und auf null zurücksetzen, wenn der Wert den maximal darstellbaren Wert des Stencil-Anteils des `depthStencilAttachment` überschreitet.
        - `"keep"`: Den aktuellen Stencilwert beibehalten.
        - `"replace"`: Den Stencilwert auf den aktuellen Render-State-Stencilwert setzen.
        - `"zero"`: Den Stencilwert auf 0 setzen.

        Wenn nicht angegeben, ist der Standardwert für `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Render-State-Stencilwert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, wie in `compare` beschrieben, fehlschlägt. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, wie in `compare` beschrieben, besteht. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für frontseitige Primitiven durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits beim Ausführen von Stencil-Vergleichstests gelesen werden. Wenn nicht angegeben, ist der Standardwert für `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits beim Ausführen von Stencil-Operationen geschrieben werden. Wenn nicht angegeben, ist der Standardwert für `stencilWriteMask` `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Override-Werte für [in der Pipeline überschreibbare WGSL-Konstanten](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstanten annehmen, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstanten.

    Ein Codebeispiel, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung verwendet. Die entsprechende Shader-Funktion muss das Attribut `@fragment` haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem Attribut `@fragment` enthält – der Browser verwendet dies als Standardeinstiegspunkt. Wenn `entryPoint` weggelassen wird und der Browser keinen Standardeinstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführt.
- `targets`

  - : ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die von der Fragment-Shader-Stufe ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alpha-Kanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Blendfaktor-Operation definiert, die auf Werte der Zielanhänge durchgeführt werden soll. Mögliche Werte sind:

            - `"constant"`
            - `"dst"`
            - `"dst-alpha"`
            - `"one"`
            - `"one-minus-dst"`
            - `"one-minus-src"`
            - `"one-minus-src1"`
            - `"one-minus-src-alpha"`
            - `"one-minus-src1-alpha"`
            - `"one-minus-dst-alpha"`
            - `"one-minus-constant"`
            - `"src"`
            - `"src1"`
            - `"src-alpha"`
            - `"src1-alpha"`
            - `"src-alpha-saturated"`
            - `"zero"`

            Wenn nicht angegeben, ist der Standardwert für `dstFactor` `"zero"`.

            > [!NOTE]
            > Die `dual-source-blending`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Blendfaktor-Operationen `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Ziel-Blendfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die an die Komponenten der Zielanhänge geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn nicht angegeben, ist der Standardwert für `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Blendfaktor-Operation definiert, die auf Werte aus dem Fragment-Shader durchgeführt werden soll. Mögliche Werte sind dieselben wie für `dstFactor`. Wenn nicht angegeben, ist der Standardwert für `srcFactor` `"one"`.

        > [!NOTE]
        > Eine detaillierte Erklärung der durch jeden `dstFactor`/`srcFactor` und `operation` definierten Algorithmen finden Sie im Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Damit die Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend) verwendet werden können, muss die `float32-blendable`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielstatus angewendet werden soll. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn nicht angegeben, ist der Standardwert für `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennen von Werten mit [bitweisem ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, z. B.: `GPUColorWrite.RED | GPUColorWrite.ALPHA`.

### Struktur des `multisample`-Objekts

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alpha-Kanal eines Fragments verwendet werden soll, um eine Abdeckungsmaske für die Probe zu generieren. Wenn nicht angegeben, ist der Standardwert für `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline wird nur mit Anhangstexturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel sein, die übereinstimmende `sampleCounts` haben (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn nicht angegeben, liegt der Standardwert für `count` bei 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Wenn nicht angegeben, ist der Standardwert für `mask` `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `primitive`-Objekts

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung entfernt wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückwärtige Polygone werden entfernt.
    - `"front"`: Vorderseitige Polygone werden entfernt.
    - `"none"`: Keine Polygone werden entfernt.

    Wenn nicht angegeben, ist der Standardwert für `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als Vorderseite betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben werden.
    - `"cw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben werden.

    Wenn nicht angegeben, ist der Standardwert für `frontFace` `"ccw"`.

    > [!NOTE]
    > Die Werte `frontFace` und `cullMode` haben keinen Einfluss auf die `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Neustartwert der Primitive im Falle von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Neustartwert der Primitive gibt an, welcher Indexwert angibt, dass ein neues Primitive gestartet werden soll, anstatt den Strip mit den vorherigen indizierten Vertizes fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Neustartwert der Primitive von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Neustartwert der Primitive von `0xFFFFFFFF` an.

    GPU-Primitive-Staaten, die eine Streifen-Primitive-Topologie angeben, müssen ein Strip-Indexformat angeben, wenn sie für indizierte Zeichenvorgänge (z. B. über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)) verwendet werden, damit der Neustartwert der Primitive bei der Pipelinenerstellung bekannt ist. Pipelines mit Listen-Primitive-Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen wird das bei der Ausführung des indizierten Renderns an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergebene Indexformat verwendet.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitives definiert, das aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertizes definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Triplett von drei Vertizes definiert ein Dreieck-Primitive.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreieck-Primitive zwischen ihm und den beiden vorherigen Vertizes.

    Wenn nicht angegeben, ist der Standardwert für `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass Tiefe-Clipping deaktiviert ist. Wenn nicht angegeben, ist der Standardwert für `unclippedDepth` `false`. Beachten Sie, dass zur Steuerung des Tiefe-Clipping die `depth-clip-control`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Die `depth-clip-control`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Eigenschaft `unclippedDepth` erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### Struktur des `vertex`-Objekts

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Override-Werte für [in der Pipeline überschreibbare WGSL-Konstanten](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstanten annehmen, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstanten.

    Ein Codebeispiel, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung verwendet. Die entsprechende Shader-Funktion muss das Attribut `@vertex` haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem Attribut `@vertex` enthält – der Browser verwendet dies als Standardeinstiegspunkt. Wenn `entryPoint` weggelassen wird und der Browser keinen Standardeinstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführt.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Buffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die die Breite in Bytes zwischen den verschiedenen Strukturen (z. B. Vertizes) im Buffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Alle verfügbaren Werte finden Sie in der [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Offset, in Bytes, vom Anfang der Struktur bis zu den Daten für das Attribut spezifiziert.
        - `shaderLocation`
          - : Der numerische Ort, der mit diesem Attribut verbunden ist und der mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut übereinstimmen wird, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert ist, auf den in der `module`-Eigenschaft des `vertex`-Objekts verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Buffer Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz – die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex – die Adresse wird für jedes Vertex um `arrayStride` erhöht und zwischen Instanzen zurückgesetzt.

        Wenn nicht angegeben, ist der Standardwert für `stepMode` `"vertex"`.

### Rückgabewert

Ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createRenderPipeline()`** erfüllt werden, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments`- [Grenzwert](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blendfaktor-Operationen den Alphakanal der Quelle verwendet (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (d.h. es muss eine `vec4` sein).
  - Wenn die Blendfaktor-Operationen `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` verwendet werden, ist die `dual-source-blending`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzige Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standardeinstiegspunkt verwendet.
- Für `primitive`-Objekte:
  - Wenn die Eigenschaft `unclippedDepth` verwendet wird, ist die `depth-clip-control`-[Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzige Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standardeinstiegspunkt verwendet.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) durch einen `createRenderPipeline()`-Aufruf zu erstellen.

```js
// ...

const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // position
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // color
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];

const pipelineDescriptor = {
  vertex: {
    module: shaderModule,
    entryPoint: "vertex_main",
    buffers: vertexBuffers,
  },
  fragment: {
    module: shaderModule,
    entryPoint: "fragment_main",
    targets: [
      {
        format: navigator.gpu.getPreferredCanvasFormat(),
      },
    ],
  },
  primitive: {
    topology: "triangle-list",
  },
  layout: "auto",
};

const renderPipeline = device.createRenderPipeline(pipelineDescriptor);

// ...
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
