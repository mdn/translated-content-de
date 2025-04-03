---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: cc41ecd796870c2b6c77ad0b04fcb8d8c7d877d2
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und ihre Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, gibt die Pipeline keine Farbattachmen-Ausgaben, führt jedoch weiterhin Rasterisierung durch und erzeugt Tiefenwerte basierend auf dem Vertex-Positions-Output. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen identifiziert werden kann.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, etc.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus zu bestimmen, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, basierend auf allen im Shader-Code definierten Bindungen ein implizites Bind-Gruppen-Layout zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bind-Gruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit multisampleten Anhängen in einem Render-Pass interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und die Layouts ihres Eingabepuffers beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenverzerrung darstellt, die jedem Fragment hinzugefügt wird. Wenn weggelassen, wird `depthBias` auf 0 gesetzt.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen für Linien- und Punkt-Topologien auf `0` gesetzt sein, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenbias eines Fragments darstellt. Wenn weggelassen, wird `depthBiasClamp` auf 0 gesetzt.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine mit der Neigung des Fragments skalierte Tiefenverzerrung darstellt. Wenn weggelassen, wird `depthBiasSlopeScale` auf 0 gesetzt.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment` Tiefenwerte zu testen. Mögliche Werte sind:

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

  - : Ein Boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment` Tiefenwerte nach der Erstellung ändern kann. Wird er auf `false` gesetzt, bedeutet das, dass sie es nicht kann.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment` Format spezifiziert, das mit der [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) in der Spezifikation für alle verfügbaren `format` Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärts gerichtete Primitive durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die verwendet wird, wenn Fragmente gegen `depthStencilAttachment` Stencil-Werte getestet werden. Mögliche Werte sind dieselben wie für die `depthCompare` Eigenschaft; siehe oben. Wenn weggelassen, wird `compare` auf `"always"` gesetzt.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, der von `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringern des aktuellen Render-Status-Stencil-Werts, wobei er auf 0 begrenzt wird.
        - `"decrement-wrap"`: Verringern des aktuellen Render-Status-Stencil-Werts, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` gewickelt wird, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Render-Status-Stencil-Werts.
        - `"increment-clamp"`: Erhöhen des aktuellen Render-Status-Stencil-Werts, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` begrenzt wird.
        - `"increment-wrap"`: Erhöhen des aktuellen Render-Status-Stencil-Werts, wobei er auf Null gewickelt wird, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` überschreitet.
        - `"keep"`: Beibehaltung des aktuellen Stencil-Werts.
        - `"replace"`: Setzen des Stencil-Werts auf den aktuellen Wert des Render-Status-Stencils.
        - `"zero"`: Setzen des Stencil-Werts auf 0.

        Wenn weggelassen, wird `depthFailOp` auf `"keep"` gesetzt.

        > [!NOTE]
        > Der Render-Status-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Stencil-Vergleichstest für das Fragment, der von `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Stencil-Vergleichstest für das Fragment, der von `compare` beschrieben wird, erfolgreich ist. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorwärts gerichtete Primitive durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche `depthStencilAttachment` Stencil-Wert-Bits beim Ausführen von Stencil-Vergleichstests gelesen werden. Wenn weggelassen, wird `stencilReadMask` auf `0xFFFFFFFF` gesetzt.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche `depthStencilAttachment` Stencil-Wert-Bits beim Ausführen von Stencil-Operationen geschrieben werden. Wenn weggelassen, wird `stencilWriteMask` auf `0xFFFFFFFF` gesetzt.

> **Anmerkung:** `depthStencilAttachment` Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufen spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `fragment` Objektstruktur

Das `fragment` Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können,](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordneten Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen des Records verwendet wird, und `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@fragment` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint` Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment` Attribut enthält — der Browser verwendet diese als Standard-Einstiegspunkt. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Phase ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die Farben darstellen, die von der Fragment-Shader-Phase ausgegeben werden. Diese Objekte können die folgenden Eigenschaften umfassen:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Ziel-Attachment angewendet wird. Mögliche Werte sind:

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

            Wenn weggelassen, wird `dstFactor` auf `"zero"` gesetzt.

            > [!NOTE]
            > Das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktoroperationen erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die in die Ziel-Attachment-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, wird `operation` auf `"add"` gesetzt.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Fragment-Shader angewendet wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn weggelassen, wird `srcFactor` auf `"one"` gesetzt.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation` enumerierten Wert definiert werden, siehe den [Blend-Bereich](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabe-Farben spezifiziert. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format` Werte.

        > [!NOTE]
        > Um die `r32float`, `rg32float` und `rgba32float` Formate mit [Blending](#blend) verwenden zu können, muss das `float32-blendable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, wird `writeMask` auf `GPUColorWrite.ALL` gesetzt.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem Werte mit Pipesymbolen getrennt werden, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein Boolean. Ein Wert von `true` zeigt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Maskierung der Abdeckung zu erzeugen. Wenn weggelassen, wird `alphaToCoverageEnabled` auf `false` gesetzt.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline ist nur mit Anhänge-Texturen (`colorAttachment`s und `depthStencilAttachment`s) mit passenden `sampleCounts` kompatibel (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn weggelassen, wird `count` auf 1 gesetzt.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn weggelassen, wird `mask` auf `0xFFFFFFFF` gesetzt.

> **Anmerkung:** `colorAttachment` und `depthStencilAttachment` Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufen spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung verworfen wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückwärts gerichtete Polygone werden verworfen.
    - `"front"`: Vorwärts gerichtete Polygone werden verworfen.
    - `"none"`: Keine Polygone werden verworfen.

    Wenn weggelassen, wird `cullMode` auf `"none"` gesetzt.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorwärts gerichtet betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegebener Reihenfolge sind.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in Uhrzeigersinn angegebener Reihenfolge sind.

    Wenn weggelassen, wird `frontFace` auf `"ccw"` gesetzt.

    > [!NOTE]
    > Die `frontFace` und `cullMode` Werte haben keine Auswirkungen auf die `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpuffer-Format und den primären Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primitive Neustartwert spezifiziert, welcher Indexwert angibt, dass ein neues Primitive gestartet werden soll, anstatt den Streifen mit den vorher indizierten Scheitelpunkten weiterzuführen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen primitiven Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen primitiven Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitivezustände, die eine Streifen-Primitive-Topologie spezifizieren, müssen ein Streifenindexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (z.B. über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), sodass der primitive Neustartwert, der verwendet wird, zur Zeit der Pipeline-Erstellung bekannt ist. Pipelines mit Listen-Primitive-Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat` Wert angeben. Sie werden stattdessen das Indexformat verwenden, das z.B. an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indiziertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des zu konstruierenden Primitives aus den angegebenen `vertex` Eingaben definiert. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar aus zwei Scheitelpunkten definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Triplet aus drei Scheitelpunkten definiert ein Dreieck-Primitive.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreieck-Primitive zwischen ihm und den vorherigen beiden Scheitelpunkten.

    Wenn weggelassen, wird `topology` auf `"triangle-list"` gesetzt.

- `unclippedDepth` {{optional_inline}}

  - : Ein Boolean. Ein Wert von `true` zeigt an, dass Tiefen-Clipping deaktiviert ist. Wenn weggelassen, wird `unclippedDepth` auf `false` gesetzt. Beachten Sie, dass zur Steuerung des Tiefen-Clippings das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth` Eigenschaft erfolgreich verwendet werden kann. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können,](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordneten Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen des Records verwendet wird, und `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@vertex` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint` Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex` Attribut enthält — der Browser verwendet diese als Standard-Einstiegspunkt. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand, in Bytes, zwischen den verschiedenen Strukturen (z.B. Vertizes) innerhalb des Puffers darstellt.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Byteversatz vom Beginn der Struktur zu den Daten für das Attribut spezifiziert.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut assoziiert ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut im WGSL-Code des assoziierten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) korrespondiert, auf das in der `module` Eigenschaft des `vertex` Objekts verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen innerhalb des Puffers Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` erhöht und zwischen Instanzen zurückgesetzt.

        Wenn weggelassen, wird `stepMode` auf `"vertex"` gesetzt.

### Rückgabewert

Ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createRenderPipeline()`** erfüllt werden, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objekt zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht ihren Standardwerten entsprechen, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem [Limit](/de/docs/Web/API/GPUSupportedLimits) `maxColorAttachments` des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn einer der verwendeten Mischfaktoroperationen den Quell-Alphakanal verwendet (z.B. `"src-alpha-saturated"`), hat der Output einen Alphakanal (d.h. es muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktoroperationen verwendet werden, ist das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktsfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth` Eigenschaft verwendet wird, ist das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktsfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Grundlegendes Beispiel

Unser [grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()` Aufruf zu erstellen.

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
