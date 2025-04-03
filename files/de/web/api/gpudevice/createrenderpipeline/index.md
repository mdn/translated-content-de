---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Versatz beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Einstiegspunkt des Fragment-Shader der Pipeline und dessen Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhang-Ausgaben, führt jedoch weiterhin Rasterung durch und erzeugt Tiefenwerte basierend auf der Vertex-Positionsausgabe. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError) Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, anhand der in den Shader-Code definierten Bindungen ein implizites Bindungsgruppen-Layout zu erstellen. Wenn `"auto"` verwendet wird, dürfen die generierten Bindungsgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multisamplten Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Einstiegspunkt des Vertex-Shader der Pipeline und dessen Eingabepufferlayouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefenversatz darstellt, der zu jedem Fragment hinzugefügt wird. Falls weggelassen, wird `depthBias` auf 0 gesetzt.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenversatz eines Fragments darstellt. Falls weggelassen, wird `depthBiasClamp` auf 0 gesetzt.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefenversatz darstellt, der mit der Neigung des Fragments skaliert. Falls weggelassen, wird `depthBiasSlopeScale` auf 0 gesetzt.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment` Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen niemals.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er ungleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) nach der Erstellung `depthStencilAttachment` Tiefenwerte ändern kann. Das Setzen auf `false` bedeutet, dass sie dies nicht kann.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das Format des `depthStencilAttachment` angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) in der Spezifikation für alle verfügbaren `format` Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für rückseitige Primitiven durchgeführt werden. Seine Eigenschaften können enthalten:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment` Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die Eigenschaft `depthCompare`; siehe oben. Falls weggelassen, wird `compare` auf `"always"` gesetzt.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die durchzuführende Stencil-Operation angibt, wenn der Fragment-Tiefenvergleich, beschrieben durch `depthCompare`, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringern des aktuellen Render-Status-Stencil-Wertes und Klammern auf 0.
        - `"decrement-wrap"`: Verringern des aktuellen Render-Status-Stencil-Wertes und Umwickeln auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment`, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Render-Status-Stencil-Wertes.
        - `"increment-clamp"`: Erhöhen des aktuellen Render-Status-Stencil-Wertes und Klammern auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment`.
        - `"increment-wrap"`: Erhöhen des aktuellen Render-Status-Stencil-Wertes und Umwickeln auf null, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` überschreitet.
        - `"keep"`: Beibehaltung des aktuellen Stencil-Wertes.
        - `"replace"`: Setzen des Stencil-Wertes auf den aktuellen Render-Status-Stencil-Wert.
        - `"zero"`: Setzen des Stencil-Wertes auf 0.

        Falls weggelassen, wird `depthFailOp` auf `"keep"` gesetzt.

        > [!NOTE]
        > Der Render-Status-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die durchzuführende Stencil-Operation angibt, wenn der Fragment-Stencil-Vergleichstest, beschrieben durch `compare`, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die durchzuführende Stencil-Operation angibt, wenn der Fragment-Stencil-Vergleichstest, beschrieben durch `compare`, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für vorderseitige Primitiven durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Bits des `depthStencilAttachment` Stencil-Wertes beim Durchführen von Stencil-Vergleichstests gelesen werden. Falls weggelassen, wird `stencilReadMask` auf `0xFFFFFFFF` gesetzt.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Bits des `depthStencilAttachment` Stencil-Wertes beim Durchführen von Stencil-Operationen geschrieben werden. Falls weggelassen, wird `stencilWriteMask` auf `0xFFFFFFFF` gesetzt.

> **Hinweis:** `depthStencilAttachment` Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufe spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### `fragment` Objektstruktur

Das `fragment` Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Folge von Datensätzen, mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und der `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder anderweitig der Bezeichnername der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die dieser Stufe verwenden wird, um ihre Arbeit zu erledigen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierte Stufe ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände repräsentieren, die Konfigurationsdetails für die vom Fragment-Shader erreichbaren Ausgabefarben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Wert des Alphakanals.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die mit Werten aus dem Zielanhang durchgeführt werden soll. Mögliche Werte sind:

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

            Falls weggelassen, wird `dstFactor` auf `"zero"` gesetzt.

            > [!NOTE]
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktoroperationen erfolgreich genutzt werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der zur Kombination von Quell- und Zielmischfaktoren verwendet wird, um die endgültigen Werte zu berechnen, die an die Zielanhang-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Falls weggelassen, wird `operation` auf `"add"` gesetzt.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, die die Mischfaktoroperation definiert, die mit Werten aus dem Fragmentshader durchgeführt werden soll. Mögliche Werte sind die gleichen wie für `dstFactor`. Falls weggelassen, wird `srcFactor` auf `"one"` gesetzt.

        > [!NOTE]
        > Für eine detaillierte Erklärung der von jedem `dstFactor`/`srcFactor` und `operation` definierten Algorithmen, siehe den [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) Abschnitt der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für die Ausgabefarben angibt. Siehe den Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) in der Spezifikation für alle verfügbaren `format` Werte.

        > [!NOTE]
        > Damit die Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend) verwendet werden können, muss die `float32-blendable` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) auf dem Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "Bitweise Flags")}}, die die Schreibmaske definieren, die auf den FarbeZielzustand angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Falls weggelassen, wird `writeMask` auf `GPUColorWrite.ALL` gesetzt.

        Beachten Sie, dass mehrere Flags durch Trennen der Werte mit Pipe-Symbolen spezifiziert werden können, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden soll, um eine Probenabdeckungsmaske zu erzeugen. Falls weggelassen, wird `alphaToCoverageEnabled` auf `false` gesetzt.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline wird nur mit Anhangs-Texturen (`colorAttachment`s und `depthStencilAttachment`s) mit passenden `sampleCounts` kompatibel sein (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Falls weggelassen, wird `count` auf 1 gesetzt.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Falls weggelassen, wird `mask` auf `0xFFFFFFFF` gesetzt.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment` Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufe spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass auszuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygon-Orientierung ausgelöscht wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden ausgelöscht.
    - `"front"`: Vorderseitige Polygone werden ausgelöscht.
    - `"none"`: Keine Polygone werden ausgelöscht.

    Falls weggelassen, wird `cullMode` auf `"none"` gesetzt.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Falls weggelassen, wird `frontFace` auf `"ccw"` gesetzt.

    > [!NOTE]
    > Die Werte `frontFace` und `cullMode` haben keine Auswirkung auf die Topologien `"point-list"`, `"line-list"` oder `"line-strip"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Primär-Neustartwert im Fall von Pipelines mit Streifen-Topologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primär-Neustartwert gibt an, welcher Indexwert anzeigt, dass ein neues primitives begonnen werden soll, anstatt das Streifen mit den vorher indexierten Scheitelpunkten fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primär-Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primär-Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitiv-Topologie angeben, müssen ein Streifenindexformat spezifizieren, wenn sie für indexierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der zu verwendende Primär-Neustartwert zum Zeitpunkt der Pipeline-Erstellung bekannt ist. Pipelines mit List-Primitiv-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat` Wert angeben. Sie werden stattdessen das Indexformat verwenden, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bei der indexierten Wiedergabe übergeben wurde.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitivs definiert, das aus den angegebenen `vertex` Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Scheitelpunkten definiert ein Linienprimitiv.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linienprimitiv zwischen ihm und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punktprimitiv.
    - `"triangle-list"`: Jedes aufeinanderfolgende Dreiertriplett von drei Scheitelpunkten definiert ein Dreieckprimitiv.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreieckprimitiv zwischen ihm und den vorherigen zwei Scheitelpunkten.

    Falls weggelassen, wird `topology` auf `"triangle-list"` gesetzt.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die Tiefenabscheidung deaktiviert ist. Falls weggelassen, wird `unclippedDepth` auf `false` gesetzt. Beachten Sie, dass zur Steuerung der Tiefenabscheidung die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden muss.

    > [!NOTE]
    > Die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth` Eigenschaft erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Folge von Datensätzen, mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und der `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder anderweitig der Bezeichnername der Konstante.

    Ein Code-Snippet, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die dieser Stage verwenden wird, um ihre Arbeit zu erledigen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Entry Point Declaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex`-Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierte Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers, der in der Pipeline verwendet wird, darstellen. Jedes Objekt kann folgende Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertizes) innerhalb des Puffers darstellt.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat folgende Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Offset in Bytes vom Beginn der Struktur bis zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut assoziiert ist und die einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut entspricht, das im WGSL Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), referenziert im `vertex` Objekt's `module` Eigenschaft, deklariert ist.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen innerhalb des Puffers Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird pro Instanz um `arrayStride` vorwärts bewegt.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird pro Vertex um `arrayStride` vorwärts bewegt und zwischen den Instanzen zurückgesetzt.

        Falls weggelassen, wird `stepMode` auf `"vertex"` gesetzt.

### Rückgabewert

Eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objekt zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) Eigenschaften sind auf `0` gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn einer der verwendeten Mischfaktor-Operationen den Quell-Alphakanal verwendet (zum Beispiel `"src-alpha-saturated"`), muss die Ausgabe einen Alphakanal haben (das heißt, es muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, ist die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunkt-Funktion, die der Browser als Standardeinstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth` Eigenschaft verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunkt-Funktion, die der Browser als Standardeinstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für den Aufbau eines gültigen Render-Pipeline-Deskriptors, der dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()` Aufruf zu erstellen.

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
