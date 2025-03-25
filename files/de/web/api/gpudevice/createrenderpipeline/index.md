---
title: "GPUDevice: createRenderPipeline()-Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: e13b6ffe7c9cb05c6a89fcb3c8fcbc987eb05211
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt mit den folgenden Eigenschaften:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil`-Objektstruktur](#depthstencil_object_structure)), das die Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verzerrungen beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment`-Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und deren Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhänge-Ausgaben, führt aber weiterhin Rasterisierung durch und erzeugt Tiefenwerte basierend auf der Ausgabeposition der Vertices. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller während der Pipeline-Ausführung verwendeten GPU-Ressourcen (Puffer, Texturen usw.). Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde und es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, ein implizites Bindgruppen-Layout basierend auf allen im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bindgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample`-Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit multisample-behafteten Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive`-Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex`-Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und deren Eingabepuffer-Layouts beschreibt.

### `depthStencil`-Objektstruktur

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einem konstanten Tiefenversatz entspricht, der zu jedem Fragment hinzugefügt wird. Wenn ausgelassen, hat `depthBias` standardmäßig den Wert 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologie, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenversatz eines Fragments darstellt. Wenn ausgelassen, hat `depthBiasClamp` standardmäßig den Wert 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefenversatz darstellt, der mit der Neigung des Fragments skaliert wird. Wenn ausgelassen, hat `depthBiasSlopeScale` standardmäßig den Wert 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen nie.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner ist als der abgetastete Wert.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer ist als der abgetastete Wert.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn der Wert auf `false` gesetzt ist, kann sie es nicht.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation, um alle verfügbaren `format`-Werte zu sehen.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für hinten liegende Primitiven ausgeführt werden. Seine Eigenschaften können beinhalten:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, wenn Fragmente gegen `depthStencilAttachment`-Stencil-Werte getestet werden. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn ausgelassen, ist `compare` standardmäßig auf `"always"` gesetzt.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringern des aktuellen Renderstatus-Stencil-Werts, wobei er auf 0 geklemmt wird.
        - `"decrement-wrap"`: Verringern des aktuellen Renderstatus-Stencil-Werts, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` ge wickelt wird, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Renderstatus-Stencil-Werts.
        - `"increment-clamp"`: Erhöhen des aktuellen Renderstatus-Stencil-Werts, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` geklemmt wird.
        - `"increment-wrap"`: Erhöhen des aktuellen Renderstatus-Stencil-Werts, wobei er auf null gewickelt wird, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` übersteigt.
        - `"keep"`: Beibehaltung des aktuellen Stencil-Werts.
        - `"replace"`: Setzen des Stencil-Werts auf den aktuellen Renderstatus-Stencil-Wert.
        - `"zero"`: Setzen des Stencil-Werts auf 0.

        Wenn ausgelassen, ist `depthFailOp` standardmäßig auf `"keep"` gesetzt.

        > [!NOTE]
        > Der Renderstatus-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie bei `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie bei `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorderseitige Primitiven ausgeführt werden. Seine Eigenschaften sind die gleichen wie bei `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencil-Wert-Bits bei der Ausführung von Stencil-Vergleichstests gelesen werden. Wenn ausgelassen, hat `stencilReadMask` standardmäßig den Wert `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencil-Wert-Bits bei der Durchführung von Stencil-Operationen geschrieben werden. Wenn ausgelassen, hat `stencilWriteMask` standardmäßig den Wert `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden bei Aufrufen von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `fragment`-Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}

  - : Eine Folge von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel, der zur Identifizierung oder Auswahl der Aufzeichnung verwendet wird, und der `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem `@fragment`-Attribut enthält — der Browser verwendet diese als Standard-Einstiegspunkt. Wenn `entryPoint` ausgelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den zugehörigen [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbzustände repräsentieren, die Konfigurationsdetails für die Farben darstellen, die von der Fragment-Shader-Phase ausgegeben werden. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` nehmen ein Objekt als Wert an, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Zielanhang angewendet wird. Mögliche Werte sind:

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

            Wenn ausgelassen, hat `dstFactor` standardmäßig den Wert `"zero"`.

            > [!NOTE]
            > Das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Mischfaktoroperationen `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der zur Kombination von Quell- und Ziel-Mischfaktoren verwendet wird, um die endgültigen Werte zu berechnen, die auf die Komponenten des Zielanhangs geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn ausgelassen, hat `operation` standardmäßig den Wert `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Fragment-Shader angewendet wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn ausgelassen, hat `srcFactor` standardmäßig den Wert `"one"`.

        > [!NOTE]
        > Eine detaillierte Erklärung der Algorithmen, die von jedem `dstFactor`/`srcFactor` und `operation`-enumerierten Wert definiert werden, finden Sie im Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Damit die Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend) verwendet werden können, muss das `float32-blendable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere {{Glossary("bitwise_flags", "Bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet werden soll. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn ausgelassen, hat `writeMask` standardmäßig den Wert `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennzeichen mit Pipe-Symbolen angegeben werden können, beispielsweise:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample`-Objektstruktur

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden soll, um eine Abdeckungsmaske zu generieren. Wenn ausgelassen, hat `alphaToCoverageEnabled` standardmäßig den Wert `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline ist nur mit Anhangs-Texturen (`colorAttachment`s und `depthStencilAttachment`s) mit übereinstimmenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)) kompatibel.

    Wenn ausgelassen, hat `count` standardmäßig den Wert 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden sollen. Wenn ausgelassen, hat `mask` standardmäßig den Wert `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden bei Aufrufen von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `primitive`-Objektstruktur

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung verworfen wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden verworfen.
    - `"front"`: Vorderseitige Polygone werden verworfen.
    - `"none"`: Keine Polygone werden verworfen.

    Wenn ausgelassen, hat `cullMode` standardmäßig den Wert `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig angesehen werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in entgegen dem Uhrzeigersinn angegebener Reihenfolge sind.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten im Uhrzeigersinn angegebener Reihenfolge sind.

    Wenn ausgelassen, hat `frontFace` standardmäßig den Wert `"ccw"`.

    > [!NOTE]
    > Die Werte `frontFace` und `cullMode` haben keinen Einfluss auf die `"point-list"`, `"line-list"` oder `"line-strip"`-Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpuffer-Format und den primitiven Neustartwert im Fall von Pipelines mit Streich-Topologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primitive Neustartwert gibt den Indexwert an, der angibt, dass ein neues Primitive gestartet werden soll, anstatt mit den vorherigen indizierten Scheitelpunkten fortzufahren. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Byte-Größe von 2 und einen primitiven Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Byte-Größe von 4 und einen primitiven Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitiv-Zustände, die eine Streich-Primitiv-Topologie angeben, müssen ein Streich-Index-Format angeben, wenn sie für indiziertes Zeichnen verwendet werden (z. B. über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der primitive Neustartwert, der verwendet wird, bereits bei der Erstellung der Pipeline bekannt ist. Pipelines mit Listen-Primitiv-Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen wird das Index-Format verwendet, das beim Index-Rendering an z. B. [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitives definiert, das aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinander folgende Paar von zwei Scheitelpunkten definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinander folgende Tripel aus drei Scheitelpunkten definiert ein Dreiecks-Primitive.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreiecks-Primitive zwischen ihm und den vorherigen zwei Scheitelpunkten.

    Wenn ausgelassen, hat `topology` standardmäßig den Wert `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass die Tiefenbeschneidung deaktiviert ist. Wenn ausgelassen, hat `unclippedDepth` standardmäßig den Wert `false`. Beachten Sie, dass um die Tiefenbeschneidung zu steuern, das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth`-Eigenschaft erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### `vertex`-Objektstruktur

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Folge von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel, der zur Identifizierung oder Auswahl der Aufzeichnung verwendet wird, und der `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem `@vertex`-Attribut enthält — der Browser verwendet diese als Standard-Einstiegspunkt. Wenn `entryPoint` ausgelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den zugehörigen [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, das jeweils das erwartete Layout eines in der Pipeline verwendeten Vertex-Puffers darstellt. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertizes) im Puffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die Definition von [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Abstand in Bytes vom Anfang der Struktur bis zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Der numerische Ort, der diesem Attribut zugeordnet ist und dem ein [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut entspricht, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert wird, auf das in der `module`-Eigenschaft des `vertex`-Objekts verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` erhöht und zwischen den Instanzen zurückgesetzt.

        Wenn ausgelassen, hat `stepMode` standardmäßig den Wert `"vertex"`.

### Rückgabewert

Ein [GPURenderPipeline](/de/docs/Web/API/GPURenderPipeline)-Objektexemplar.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt wird zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, verfügt `format` über eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich der `maxColorAttachments` [Grenze](/de/docs/Web/API/GPUSupportedLimits) von [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktoroperationen den Quell-Alphakanal verwendet (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (d.h. es muss sich um einen `vec4` handeln).
  - Wenn die Mischfaktoroperationen `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` verwendet werden, ist das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint`-Eigenschaft ausgelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft ausgelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für den Bau eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
