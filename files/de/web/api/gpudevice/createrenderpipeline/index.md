---
title: "GPUDevice: createRenderPipeline()-Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
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
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und dessen Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbattachment-Ausgaben, führt jedoch weiterhin Rasterisierungen durch und erzeugt Tiefenwerte basierend auf der Vertex-Position-Ausgabe. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen zum Identifizieren des Objekts verwendet werden kann.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das der GPU ermöglicht, im Voraus zu bestimmen, wie die Pipeline am effizientesten läuft.
        - Ein String `"auto"`, der bewirkt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen generiert. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit multisample-fähigen Attachments eines Render Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und dessen Eingabepuffer-Layouts beschreibt.

### Struktur des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefenbias darstellt, der zu jedem Fragment hinzugefügt wird. Wenn weggelassen, wird `depthBias` auf 0 gesetzt.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenbias eines Fragments darstellt. Wenn weggelassen, wird `depthBiasClamp` auf 0 gesetzt.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefenbias skaliert mit der Steigung des Fragments darstellt. Wenn weggelassen, wird `depthBiasSlopeScale` auf 0 gesetzt.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation festlegt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen niemals.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Das Festlegen auf `false` bedeutet, dass sie das nicht kann.
- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das festlegt, wie Stencil-Vergleiche und -Operationen für rückwärtige Primitive durchgeführt werden. Seine Eigenschaften können beinhalten:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Test von Fragmenten gegen `depthStencilAttachment`-Stencilwerte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn weggelassen, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, den `depthCompare` beschreibt, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Renderstate-Stencilwert, wobei auf 0 geklemmt wird.
        - `"decrement-wrap"`: Verringert den aktuellen Renderstate-Stencilwert, wobei dieser zum maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` gewickelt wird, wenn der Wert unter 0 sinkt.
        - `"invert"`: Führt eine bitweise Invertierung des aktuellen Renderstate-Stencilwerts durch.
        - `"increment-clamp"`: Erhöht den aktuellen Renderstate-Stencilwert, wobei auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` geklemmt wird.
        - `"increment-wrap"`: Erhöht den aktuellen Renderstate-Stencilwert, wobei dieser auf null gewickelt wird, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` überschreitet.
        - `"keep"`: Behält den aktuellen Stencil-Wert bei.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Renderstate-Stencilwert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn weggelassen, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Renderstate-Stencilwert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der beim Vergleich von Fragmenten beschriebene Vergleichstest fehlschlägt. Mögliche und Standardwerte sind die gleichen wie bei `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der beim Vergleich von Fragmenten beschriebene Vergleichstest erfolgreich ist. Mögliche und Standardwerte sind die gleichen wie bei `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das festlegt, wie Stencil-Vergleiche und -Operationen für vorderseitige Primitive durchgeführt werden. Seine Eigenschaften sind die gleichen wie bei `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwertbits gelesen werden, wenn Stencil-Vergleichstests durchgeführt werden. Wenn weggelassen, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwertbits geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn weggelassen, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen festgelegt, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Records verwendet wird, und das `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann die `id` in Form der numerischen ID der Konstante vorliegen, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet zur Bereitstellung von Überschreibwerten für mehrere überschreibbare Konstanten könnte wie folgt aussehen:

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
  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung ihrer Arbeit verwendet. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Erklärung des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführt.
- `targets`

  - : Ein Array von Objekten, die Farbzustände darstellen und Konfigurationsdetails für die Farben sind, die durch die Fragment-Shader-Stufe ausgegeben werden. Diese Objekte können folgende Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabe verwendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alpha-Kanal-Wert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert an, das folgende Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der den Blendfaktorbetrieb definiert, der auf Werte aus dem Zielattachment angewendet wird. Mögliche Werte sind:

            - `"constant"`
            - `"dst"`
            - `"dst-alpha"`
            - `"one"`
            - `"one-minus-dst"`
            - `"one-minus-src"`
            - `"one-minus-src-alpha"`
            - `"one-minus-dst-alpha"`
            - `"one-minus-constant"`
            - `"src"`
            - `"src-alpha"`
            - `"src-alpha-saturated"`
            - `"zero"`

            Wenn weggelassen, ist `dstFactor` standardmäßig `"zero"`.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielblendfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die an die Zielattachment-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der den Blendfaktorbetrieb definiert, der auf Werte aus dem Fragment-Shader angewendet wird. Die möglichen Werte sind die gleichen wie bei `dstFactor`. Wenn weggelassen, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der durch jeden `dstFactor`/`srcFactor` und `operation` definierten Algorithmen siehe den Abschnitt [Blendzustand](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere [bitweise Flags](/de/docs/Glossary/bitwise_flags), die die Schreibmaske definieren, die auf den Farbzielzustand angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem die Werte mit Pipesymbolen getrennt werden, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### Struktur des `multisample`-Objekts

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolean. Ein Wert von `true` gibt an, dass der Alpha-Kanal eines Fragments verwendet werden sollte, um eine Sample-Coverage-Maske zu generieren. Wenn weggelassen, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline wird nur mit Attachment-Texturen (wie `colorAttachment`s und `depthStencilAttachment`s) kompatibel sein, deren `sampleCounts` übereinstimmen (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn weggelassen, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die festlegt, welche Samples geschrieben werden. Wenn weggelassen, ist `mask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen festgelegt, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `primitive`-Objekts

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der festlegt, welche Polygongestaltung ausgesondert wird, wenn überhaupt. Mögliche Werte sind:

    - `"back"`: Rückwärtige Polygone werden ausgesondert.
    - `"front"`: Vorderwärtige Polygone werden ausgesondert.
    - `"none"`: Keine Polygone werden ausgesondert.

    Wenn weggelassen, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der festlegt, welche Polygone als vorderwärtig gelten. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Eckpunkten, deren Framepufferkoordinaten in gegen den Uhrzeigersinn angeordnet sind.
    - `"cw"`: Polygone mit Eckpunkten, deren Framepufferkoordinaten im Uhrzeigersinn angeordnet sind.

    Wenn weggelassen, ist `frontFace` standardmäßig `"ccw"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den primitiven Restart-Wert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) festlegt. Der primitive Restart-Wert gibt an, welcher Indexwert anzeigt, dass ein neues Primitiv gestartet werden soll, anstatt den Streifen mit den vorher indizierten Eckpunkten fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Zeigt eine Bytegröße von 2 und einen primitiven Restart-Wert von `0xFFFF` an.
    - `"uint32"`: Zeigt eine Bytegröße von 4 und einen primitiven Restart-Wert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitive-Topologie spezifizieren, müssen ein Streifen-Indexformat spezifizieren, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), sodass der Restart-Wert des primitiven Neustarts bereits zur Pipelineschaffung bekannt ist. Pipelines mit Listen-Primitive-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Sie verwenden stattdessen das Indexformat, das beispielsweise an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indiziertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitivs definiert, das aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar aus zwei Eckpunkten definiert ein Linienprimitiv.
    - `"line-strip"`: Jeder Eckpunkt nach dem ersten definiert ein Linienprimitiv zwischen ihm und dem vorhergehenden Eckpunkt.
    - `"point-list"`: Jeder Eckpunkt definiert ein Punktprimitiv.
    - `"triangle-list"`: Jedes aufeinanderfolgende Tripel aus drei Eckpunkten definiert ein Dreieckprimitiv.
    - `"triangle-strip"`: Jeder Eckpunkt nach den ersten beiden definiert ein Dreieckprimitiv zwischen ihm und den vorhergehenden beiden Eckpunkten.

    Wenn weggelassen, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : Ein boolean. Ein Wert von `true` gibt an, dass Tiefen-Clipping deaktiviert ist. Wenn weggelassen, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass zur Steuerung des Tiefen-Clippings das `depth-clip-control`-Merkmal in der [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

> **Hinweis:** `frontFace` und `cullMode` haben keinen Einfluss auf `"point-list"`, `"line-list"`, oder `"line-strip"`-Topologien.

### Struktur des `vertex`-Objekts

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Records verwendet wird, und das `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Je nachdem, welche Konstante Sie überschreiben möchten, kann die `id` in Form der numerischen ID der Konstante vorliegen, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet zur Bereitstellung von Überschreibwerten für mehrere überschreibbare Konstanten könnte wie folgt aussehen:

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
  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung ihrer Arbeit verwendet. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Erklärung des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführt.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, von denen jedes das erwartete Layout eines Vertex-Puffers darstellt, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Eckpunkten) innerhalb des Puffers repräsentiert.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Abstand in Bytes vom Anfang der Struktur zu den Daten für das Attribut spezifiziert.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut verbunden ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut im WGSL-Code des zugeordneten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), das in der `vertex`-Eigenschaft des `module`-Objekts referenziert wird, übereinstimmt.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der festlegt, ob die einzelnen Strukturen innerhalb des Puffers Vertices oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` fortgeschaltet.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` fortgeschaltet und zwischen den Instanzen zurückgesetzt.

        Wenn weggelassen, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufrufen von **`createRenderPipeline()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten stehen, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments`- [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Gegenwert von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Blendfaktorbetrieb auf den Quell-Alpha-Kanal zugreift (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (das heißt, sie muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Descriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
