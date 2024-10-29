---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 2379747e3cefc009c6a00ec52e88d66ff15c5397
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften beschreibt, einschließlich Tests, Operationen und Bias.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und deren Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhangausgaben, führt aber trotzdem Rasterisierung durch und erzeugt Tiefenwerte basierend auf der Vertexposition-Ausgabe. Tiefentests und Stencil-Operationen können dennoch verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Buffers, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus zu ermitteln, wie die Pipeline am effizientesten ausgeführt wird.
        - Ein String `"auto"`, der die Pipeline veranlasst, ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multigesampelten Anhängen eines Renderpass umgeht.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertexeingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und deren Eingabepufferlayouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefenbias darstellt, der zu jedem Fragment hinzugefügt wird. Wenn nicht angegeben, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` eingestellt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenbias eines Fragments darstellt. Wenn nicht angegeben, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefenbias darstellt, der mit der Neigung des Fragments skaliert wird. Wenn nicht angegeben, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment` Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen immer fehl.
    - `"less"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein Boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die `depthStencilAttachment` Tiefenwerte nach der Erstellung ändern kann. Wenn `false` gesetzt ist, kann sie es nicht.
- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Lesen Sie den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärts gerichtete Primitive durchgeführt werden. Dessen Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation festlegt, die beim Testen von Fragmenten gegen `depthStencilAttachment` Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die Eigenschaft `depthCompare`; siehe oben. Wenn nicht angegeben, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation beschreibt, die ausgeführt wird, wenn der Fragmenttiefenvergleich beschrieben durch `depthCompare` fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Der aktuelle Renderzustand-Wert wird dekrementiert und bei 0 geklammert.
        - `"decrement-wrap"`: Der aktuelle Renderzustand-Stencil-Wert wird dekrementiert und auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` gewickelt, wenn der Wert unter 0 fällt.
        - `"invert"`: Der aktuelle Renderzustand-Stencil-Wert wird bitweise invertiert.
        - `"increment-clamp"`: Der aktuelle Renderzustand-Stencil-Wert wird inkrementiert und auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` geklammert.
        - `"increment-wrap"`: Der aktuelle Renderzustand-Stencil-Wert wird inkrementiert und auf null gewickelt, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` überschreitet.
        - `"keep"`: Der aktuelle Stencil-Wert bleibt erhalten.
        - `"replace"`: Der Stencil-Wert wird auf den aktuellen Renderzustand-Stencil-Wert gesetzt.
        - `"zero"`: Der Stencil-Wert wird auf 0 gesetzt.

        Wenn nicht angegeben, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Renderzustand-Stencil-Wert wird zu Beginn eines Renderpass auf 0 gesetzt.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation beschreibt, die ausgeführt wird, wenn der Fragmentstencil-Vergleichstest beschrieben durch `compare` fehlschlägt. Die möglichen und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation beschreibt, die ausgeführt wird, wenn der Fragmentstencil-Vergleichstest beschrieben durch `compare` besteht. Die möglichen und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorwärts gerichtete Primitive durchgeführt werden. Dessen Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment` Stencil-Wert-Bits gelesen werden, wenn Stencil-Vergleichstests durchgeführt werden. Wenn nicht angegeben, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment` Stencil-Wert-Bits geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn nicht angegeben, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass durchzuführen.

### `fragment` Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Folge von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder sonst der Bezeichnername der Konstante.

    Ein Codeausschnitt, der Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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
  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Aufgaben auszuführen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierte Phase ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände darstellen, welche Konfigurationsdetails für die Farben bieten, die von der Fragment-Shader-Phase ausgegeben werden. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten können:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der den Mischfaktor-Operation definiert, der auf Werte aus dem Zielanhäng durchgeführt wird. Mögliche Werte sind:

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
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktor-Operationen erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus bestimmt, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die endgültigen an die Zielanhänge geschriebenen Werte zu berechnen. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn nicht angegeben, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der den Mischfaktor-Operation definiert, der auf Werte aus dem Fragment-Shader ausgeführt wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn nicht angegeben, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation` enumerierten Wert definiert sind, siehe den [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) Abschnitt der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben spezifiziert. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "Bitweise Flaggen")}}, die die Schreibmasken für die Zustände des Farbziels definieren. Mögliche Flaggenwerte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn nicht angegeben, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flaggen durch Trennzeichen mit Pipesymbolen angegeben werden können, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein Boolean. Ein Wert von `true` zeigt an, dass der Alphakanal eines Fragments verwendet werden soll, um eine Beispielabdeckungsmaske zu generieren. Wenn nicht angegeben, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline wird nur mit Anhängtexturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel sein, mit übereinstimmenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn nicht angegeben, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn nicht angegeben, ist `mask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass durchzuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Ausrichtung des Polygons geschnitten wird, wenn überhaupt. Mögliche Werte sind:

    - `"back"`: Rückwärtsgerichtete Polygone werden geschnitten.
    - `"front"`: Vorwärtsgerichtete Polygone werden geschnitten.
    - `"none"`: Keine Polygone werden geschnitten.

    Wenn nicht angegeben, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorwärtsgerichtet angesehen werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn nicht angegeben, ist `frontFace` standardmäßig `"ccw"`.

    > [!NOTE] > `frontFace` und `cullMode` haben keine Auswirkungen auf `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den primären Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primäre Neustartwert gibt an, welcher Indexwert anzeigt, dass ein neues Primäres gestartet werden soll, anstatt den Streifen mit den vorher indexierten Vertices fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen primären Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen primären Neustartwert von `0xFFFFFFFF` an.

    GPU primäre Zustände, die eine Streifenprimäre-Topologie spezifizieren, müssen ein Streifenindexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der primäre Neustartwert, der verwendet werden soll, zum Zeitpunkt der Pipelineerstellung bekannt ist. Pipelines mit listigen primären Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Sie verwenden stattdessen das Indexformat, das beispielsweise an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indiziertes Rendern durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitives definiert, der aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertices definiert ein Linienprimär.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimär zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimär.
    - `"triangle-list"`: Jedes aufeinanderfolgende Tripel von drei Vertices definiert ein Dreiecksprimär.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecksprimär zwischen ihm und den vorherigen zwei Vertices.

    Wenn nicht angegeben, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein Boolean. Ein Wert von `true` zeigt an, dass die Tiefenausklammerung deaktiviert ist. Wenn nicht angegeben, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss, um die Tiefenausklammerung zu steuern.

    > [!NOTE]
    > Die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth`-Eigenschaft erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Folge von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um den Datensatz zu identifizieren oder auszuwählen, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder sonst der Bezeichnername der Konstante.

    Ein Codeausschnitt, der Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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
  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Aufgaben auszuführen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierte Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertexpuffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand, in Bytes, zwischen den verschiedenen Strukturen (z. B. Vertices) innerhalb des Puffers darstellt.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertexattribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Für alle verfügbaren Werte siehe die Definition [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur bis zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut verknüpft ist, die mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) erklärt wird, das in der `module` Eigenschaft des `vertex`-Objekts referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertices oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz – die Adresse wird um `arrayStride` für jede Instanz erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex – die Adresse wird um `arrayStride` für jeden Vertex erhöht und zwischen Instanzen zurückgesetzt.

        Wenn nicht angegeben, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Eine Instanz des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, ansonsten wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` eingestellt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Alpha-Kanal der Quelle nutzen (z.B. `"src-alpha-saturated"`), muss die Ausgabe einen Alpha-Kanal haben (d.h. es muss sich um einen `vec4` handeln).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, muss die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert sein.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, muss die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert sein.

## Beispiele

> [!NOTE]
> Die [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [simples Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Renderpipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
