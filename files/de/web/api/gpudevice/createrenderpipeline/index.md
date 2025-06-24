---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das die Depth-Stencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Einstiegspunkt des Fragment-Shaders der Pipeline und seine Ausgabefarben beschreibt. Wenn kein Einstiegspunkt des Fragment-Shaders definiert ist, wird die Pipeline keine Farbanhang-Ausgaben erzeugen, jedoch weiterhin Rasterisierung durchführen und Tiefenwerte basierend auf der Ausgabe der Vertex-Position erzeugen. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen etc.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde und der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt wird.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, ein implizites Bind-Group-Layout basierend auf allen im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den Multisample-Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Einstiegspunkt des Vertex-Shaders der Pipeline und seine Eingabepuffer-Layouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefen-Bias darstellt, der zu jedem Fragment addiert wird. Wenn nicht angegeben, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefen-Bias eines Fragments darstellt. Wenn nicht angegeben, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefen-Bias darstellt, der mit der Neigung des Fragments skaliert wird. Wenn nicht angegeben, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragments-Tiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen immer fehl.
    - `"less"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner ist als der abgetastete Wert.
    - `"equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer ist als der abgetastete Wert.
    - `"not-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn es auf `false` gesetzt wird, bedeutet das, dass sie dies nicht kann.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückseitige Primitive durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind dieselben wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn nicht angegeben, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Tiefenvergleich des Fragments, wie durch `depthCompare` beschrieben, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Renderstatus-Stencil-Wert und klemmt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Renderstatus-Stencil-Wert und setzt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts zurück, wenn der Wert unter 0 sinkt.
        - `"invert"`: Bitweises Invertieren des aktuellen Renderstatus-Stencil-Werts.
        - `"increment-clamp"`: Erhöht den aktuellen Renderstatus-Stencil-Wert und klemmt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts.
        - `"increment-wrap"`: Erhöht den aktuellen Renderstatus-Stencil-Wert und setzt ihn auf null zurück, wenn der Wert den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts überschreitet.
        - `"keep"`: Behält den aktuellen Stencil-Wert bei.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Renderstatus-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn nicht angegeben, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Renderstatus-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 gesetzt.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Stencil-Vergleichstest des Fragments, wie durch `compare` beschrieben, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Stencil-Vergleichstest des Fragments, wie durch `compare` beschrieben, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorderseitige Primitive durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits gelesen werden, wenn Stencil-Vergleichstests durchgeführt werden. Wenn nicht angegeben, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn nicht angegeben, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> [!NOTE] > `depthStencilAttachment`-Werte werden während `GPUCommandEncoder.beginRenderPass()`-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### `fragment` Objektstruktur

Das `fragment` Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften haben können:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten enthält, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). Diese verhalten sich ähnlich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Record zu identifizieren oder auszuwählen, und `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder sonst den Identifier-Namen der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribute haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribute enthält — der Browser verwendet diese als den Standard-Einstiegspunkt. Falls `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände darstellen, welche Konfigurationsdetails für die Farben darstellen, die von der Fragment-Shader-Phase ausgegeben werden. Diese Objekte können die folgenden Eigenschaften umfassen:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Blend-Modus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanal-Wert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` erwarten ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Blend-Faktor-Operation definiert, die auf Werte aus dem Zielanhang angewendet werden soll. Mögliche Werte sind:

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

            Wenn nicht angegeben, ist `dstFactor` standardmäßig `"zero"`.

            > [!NOTE]
            > Die `dual-source-blending` [Fähigkeit](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Blend-Faktor-Operationen `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` erfolgreich genutzt werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Ziel-Blend-Faktoren zu kombinieren, um die endgültigen Werte zu berechnen, die in die Zielanhang-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn nicht angegeben, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Blend-Faktor-Operation definiert, die auf Werte aus dem Fragment-Shader angewendet werden soll. Mögliche Werte sind dieselben wie für `dstFactor`. Wenn nicht angegeben, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die von jedem `dstFactor`/`srcFactor` und `operation`-Wert definiert werden, sehen Sie bitte im Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation nach.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Damit die Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend) verwendet werden können, muss die Fähigkeit `float32-blendable` [feature](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet werden soll. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn nicht angegeben, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem Werte mit [bitweise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUColorWrite.RED | GPUColorWrite.ALPHA`.

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Sample-Abdeckungsmaske zu erzeugen. Wenn nicht angegeben, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline wird nur mit Anhang-Texturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel sein, die übereinstimmende `sampleCounts` aufweisen (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn nicht angegeben, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn nicht angegeben, ist `mask` standardmäßig `0xFFFFFFFF`.

> [!NOTE] > `colorAttachment` und `depthStencilAttachment` Werte werden während `GPUCommandEncoder.beginRenderPass()`-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der festlegt, welche Polygonorientierung gegebenenfalls gekappt wird. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden gekappt.
    - `"front"`: Vorderseitige Polygone werden gekappt.
    - `"none"`: Keine Polygone werden gekappt.

    Wenn nicht angegeben, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der festlegt, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegebener Reihenfolge vorliegen.
    - `"cw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in Uhrzeigersinn angegebener Reihenfolge vorliegen.

    Wenn nicht angegeben, ist `frontFace` standardmäßig `"ccw"`.

    > [!NOTE]
    > Die Werte `frontFace` und `cullMode` haben keine Auswirkungen auf die Topologien `"point-list"`, `"line-list"` oder `"line-strip"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexbuffer-Format und den Primitive-Restart-Wert für Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primitive-Restart-Wert gibt an, welcher Indexwert anzeigt, dass ein neues Primitive gestartet werden soll, anstatt den Streifen mit den vorher indexierten Vertizes fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Byte-Größe von 2 und einen Primitive-Restart-Wert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Byte-Größe von 4 und einen Primitive-Restart-Wert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifenprimitiv-Topologie angeben, müssen ein Streifenindex-Format angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der Primitive-Restart-Wert, der verwendet werden soll, zum Zeitpunkt der Pipeline-Erstellung bekannt ist. Pipelines mit Listenprimitiv-Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen verwenden sie das Indexformat, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wurde, wenn sie indizierte Rendering ausführen.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des zu konstruierenden Primitives aus den angegebenen `vertex`-Eingaben definiert. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertizes definiert ein Linienprimitiv.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimitiv zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimitiv.
    - `"triangle-list"`: Jedes aufeinanderfolgende Tripel aus drei Vertizes definiert ein Dreiecksprimitiv.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecksprimitiv zwischen ihm und den vorhergehenden beiden Vertizes.

    Wenn nicht angegeben, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass Tiefenkappung deaktiviert ist. Wenn nicht angegeben, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass um die Tiefenkappung zu steuern, die Fähigkeit `depth-clip-control` [feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Die Fähigkeit `depth-clip-control` [feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth`-Eigenschaft erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten enthält, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). Diese verhalten sich ähnlich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Record zu identifizieren oder auszuwählen, und `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder sonst den Identifier-Namen der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribute haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex`-Attribute enthält — der Browser verwendet diese als den Standard-Einstiegspunkt. Falls `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertizes) innerhalb des Puffers darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Für alle verfügbaren Werte siehe die Definition der [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur zu den Daten für das Attribut spezifiziert.
        - `shaderLocation`
          - : Der numerische Ort, der diesem Attribut zugeordnet ist und der mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut übereinstimmen wird, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert ist, das in der `module`-Eigenschaft des `vertex`-Objekts referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separate Strukturen im Puffer Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` erhöht und zwischen den Instanzen zurückgesetzt.

        Wenn nicht angegeben, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Eine Instanz des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt wird zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"`, oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Wert von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blend-Faktor-Operationen den Alphakanal der Quelle verwenden (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (d.h. es muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Blend-Faktor-Operationen verwendet werden, ist die Fähigkeit `dual-source-blending` [feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint`-Eigenschaft ausgelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist die Fähigkeit `depth-clip-control` [feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint`-Eigenschaft ausgelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

```js
// …

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

// …
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
