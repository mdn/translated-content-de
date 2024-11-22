---
title: "GPUDevice: Methode createRenderPipeline()"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 4e696aed1f2478090c1f29ecda0b0b747bc58ff1
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die Methode **`createRenderPipeline()`** des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragmentshader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das folgende Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `depthStencil`-Objekts](#depthstencil_object_structure)), das die Depth-Stencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragmentshader-Einstiegspunkt der Pipeline und deren Ausgabefarben beschreibt. Wenn kein Fragmentshader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbeanhangsausgaben, führt jedoch weiterhin Rasterisierung durch und erzeugt Tiefenwerte basierend auf der Vertex-Position-Ausgabe. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die ein Label bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Eine Zeichenkette `"auto"`, die die Pipeline dazu veranlasst, ein implizites Bindgruppen-Layout basierend auf den im Shadercode definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bindgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multisampled Attachments eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben aufbaut und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertexshader-Einstiegspunkt der Pipeline und deren Eingabepufferlayouts beschreibt.

### Struktur des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann folgende Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Depth-Bias repräsentiert, der jedem Fragment hinzugefügt wird. Wenn weggelassen, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt sein für Linien- und Punkttopologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Depth-Bias eines Fragments repräsentiert. Wenn weggelassen, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Depth-Bias repräsentiert, der mit der Neigung des Fragments skaliert wird. Wenn weggelassen, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen nie.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der gesampelte Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem gesampelten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem gesampelten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der gesampelte Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem gesampelten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem gesampelten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn er auf `false` gesetzt ist, kann sie das nicht.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärts gerichtete Primitive durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencilwerte verwendet wird. Mögliche Werte sind dieselben wie für die Eigenschaft `depthCompare`; siehe oben. Wenn weggelassen, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragmenttiefenvergleich, wie in `depthCompare` beschrieben, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Render-State-Stencilwert, wobei er auf 0 begrenzt bleibt.
        - `"decrement-wrap"`: Verringert den aktuellen Render-State-Stencilwert, wobei er auf den maximal darstellbaren Wert des Stencils-Aspekts von `depthStencilAttachment` zurückgesetzt wird, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Render-State-Stencilwerts.
        - `"increment-clamp"`: Erhöht den aktuellen Render-State-Stencilwert, wobei er auf den maximal darstellbaren Wert des Stencils-Aspekts von `depthStencilAttachment` begrenzt bleibt.
        - `"increment-wrap"`: Erhöht den aktuellen Render-State-Stencilwert, wobei er auf Null zurückgesetzt wird, wenn der Wert den maximal darstellbaren Wert des Stencils-Aspekts von `depthStencilAttachment` überschreitet.
        - `"keep"`: Behält den aktuellen Stencilwert bei.
        - `"replace"`: Setzt den Stencilwert auf den aktuellen Render-State-Stencilwert.
        - `"zero"`: Setzt den Stencilwert auf 0.

        Wenn weggelassen, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Render-State-Stencilwert wird am Anfang eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragmentstencilvergleichstest, wie in `compare` beschrieben, fehlschlägt. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragmentstencilvergleichstest, wie in `compare` beschrieben, besteht. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorwärts gerichtete Primitive durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits beim Durchführen von Stencil-Vergleichstests gelesen werden. Wenn weggelassen, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwert-Bits beim Durchführen von Stencil-Operationen geschrieben werden. Wenn weggelassen, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### Struktur des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) repräsentieren. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL repräsentiert.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` entweder die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

- `entryPoint` {{optional_inline}}

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem `@fragment`-Attribut enthält — der Browser wird diese als Standardeinstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standardeinstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände repräsentieren, die Konfigurationsdetails für die durch die Fragmentshader-Stufe ausgegebenen Farben darstellen. Diese Objekte können folgende Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Überblendmodus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` nehmen ein Objekt als Wert an, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Überblendfaktoroperation definiert, die an den Werten des Zielanhangs vorgenommen werden soll. Mögliche Werte sind:

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

            Wenn weggelassen, ist `dstFactor` standardmäßig `"zero"`.

            > [!NOTE]
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Überblendfaktoroperationen erfolgreich verwendet werden können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielüberblendfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die an die Komponenten des Zielanhangs geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Überblendfaktoroperation definiert, die an den Werten des Fragmentshaders durchgeführt werden soll. Mögliche Werte sind dieselben wie für `dstFactor`. Wenn weggelassen, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation`-enumerierten Wert definiert sind, siehe den Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet werden soll. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem die Werte mit Rohrsymbolen getrennt werden, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### Struktur des `multisample`-Objekts

Das `multisample`-Objekt kann folgende Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass der Alphakanal eines Fragments verwendet werden soll, um eine Beispiel-Abdeckungsmaske zu erzeugen. Wenn weggelassen, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline wird nur mit Anhangstexturen (`colorAttachment`s und `depthStencilAttachment`s) mit passenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)) kompatibel sein.

    Wenn weggelassen, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn weggelassen, ist `mask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### Struktur des `primitive`-Objekts

Das `primitive`-Objekt kann folgende Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung entfernt wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden entfernt.
    - `"front"`: Vorderseitige Polygone werden entfernt.
    - `"none"`: Es werden keine Polygone entfernt.

    Wenn weggelassen, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig angesehen werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn weggelassen, ist `frontFace` standardmäßig `"ccw"`.

    > [!NOTE] > `frontFace` und `cullMode` haben keine Auswirkung auf `"point-list"`, `"line-list"`- oder `"line-strip"`-Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpuffer-Format und den Primitivneustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primitivneustartwert gibt an, welcher Indexwert zeigt, dass ein neues Primär starten soll, anstatt den Streifen mit den vorher indexierten Vertizes fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primitivneustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primitivneustartwert von `0xFFFFFFFF` an.

    GPU-Primitivstaten, die eine Streifen-Primitivtopologie spezifizieren, müssen ein Streifen-Indexformat angeben, wenn sie für indexierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der Primitivneustartwert bei der Erstellung der Pipeline bekannt ist. Pipelines mit Listen-Primitivtopologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen verwenden sie das Indexformat, das, zum Beispiel, an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) beim Durchführen der indexierten Darstellung übergeben wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des zu konstruierenden Primitives aus den angegebenen `vertex`-Eingaben definiert. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertizes definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Triplet von drei Vertizes definiert ein Dreieck-Primitive.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreieck-Primitive zwischen ihm und den vorherigen zwei Vertizes.

    Wenn weggelassen, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die Tiefenabschneidung deaktiviert ist. Wenn weggelassen, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass um die Tiefenabschneidung zu steuern, muss die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden.

    > [!NOTE]
    > Die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, damit die Eigenschaft `unclippedDepth` erfolgreich verwendet werden kann. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### Struktur des `vertex`-Objekts

Das `vertex`-Objekt kann folgende Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) repräsentieren. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL repräsentiert.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` entweder die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

- `entryPoint` {{optional_inline}}

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem `@vertex`-Attribut enthält — der Browser wird diese als Standardeinstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standardeinstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertexpuffers repräsentieren, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertizes) innerhalb des Puffers repräsentiert.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine zahlmäßige Angabe des Offsets in Bytes vom Anfang der Struktur zu den Daten für das Attribut.
        - `shaderLocation`
          - : Die numerische Position, die diesem Attribut zugeordnet ist, welche mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut übereinstimmt, das im WGSL-Code des zugeordneten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert ist, auf das in der `vertex`-Eigenschaft `module` verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen innerhalb des Puffers Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` vorgerückt.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` vorgerückt und zwischen den Instanzen zurückgesetzt.

        Wenn weggelassen, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkttopologien gesetzt, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments`-Limit des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Überblendfaktoroperationen den Alphakanal der Quelle nutzt (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (das heißt, es muss ein `vec4` sein).
  - Wenn `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha`-Überblendfaktoroperationen verwendet werden, ist die `dual-source-blending`-Funktion aktiviert.
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzige Fragmentshader-Einstiegspunktfunktion, die der Browser als Standardeinstiegspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die Eigenschaft `unclippedDepth` verwendet wird, ist die `depth-clip-control`-Funktion aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzige Vertexshader-Einstiegspunktfunktion, die der Browser als Standardeinstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für den Aufbau eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
