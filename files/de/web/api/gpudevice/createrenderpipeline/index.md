---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: da15f25d07415ca5dbef311f81c972e67ff787a9
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil-object-structure)), das die Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment-object-structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und seine Ausgabe-Farben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbausgabe, führt aber trotzdem Rasterisierung durch und erzeugt Tiefenwerte basierend auf dem Vertex-Positionsausgang. Tiefenprüfung und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, das zur Identifizierung des Objekts, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen, verwendet werden kann.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, basierend auf allen im Shadercode definierten Bindungen ein implizites Bindgruppendesign zu erzeugen. Wenn `"auto"` verwendet wird, können die generierten Bindgruppendesigns nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample-object-structure)), das beschreibt, wie die Pipeline mit multisample-fähigen Anhängen bei einem Renderdurchgang interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive-object-structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex-object-structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und seine Eingabepufferlayouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenverschiebung darstellt, die zu jedem Fragment hinzugefügt wird. Wenn weggelassen, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkttopologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die die maximale Tiefenverzerrung eines Fragments darstellt. Wenn weggelassen, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine Tiefenverschiebung darstellt, die mit der Neigung des Fragments skaliert. Wenn weggelassen, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen niemals.
    - `"less"`: Ein übergebener Wert besteht den Vergleichstest, wenn er kleiner als der gesampelte Wert ist.
    - `"equal"`: Ein übergebener Wert besteht den Vergleichstest, wenn er gleich dem gesampelten Wert ist.
    - `"less-equal"`: Ein übergebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem gesampelten Wert ist.
    - `"greater"`: Ein übergebener Wert besteht den Vergleichstest, wenn er größer als der gesampelte Wert ist.
    - `"not-equal"`: Ein übergebener Wert besteht den Vergleichstest, wenn er nicht gleich dem gesampelten Wert ist.
    - `"greater-equal"`: Ein übergebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem gesampelten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn es auf `false` gesetzt ist, kann es nicht.
- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel ist. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das beschreibt, wie Stencil-Vergleiche und -Operationen für rückseitige Primitiven durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind dieselben wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn weggelassen, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragmenttiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringern Sie den aktuellen Renderzustand-Stencil-Wert, wobei er auf 0 geklemmt wird.
        - `"decrement-wrap"`: Verringern Sie den aktuellen Renderzustand-Stencil-Wert, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` gewickelt wird, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Renderzustand-Stencil-Wertes.
        - `"increment-clamp"`: Erhöhen Sie den aktuellen Renderzustand-Stencil-Wert, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` geklemmt wird.
        - `"increment-wrap"`: Erhöhen Sie den aktuellen Renderzustand-Stencil-Wert, wobei er auf null gewickelt wird, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` übersteigt.
        - `"keep"`: Behalten Sie den aktuellen Stencil-Wert.
        - `"replace"`: Setzen Sie den Stencil-Wert auf den aktuellen Renderzustand-Stencil-Wert.
        - `"zero"`: Setzen Sie den Stencil-Wert auf 0.

        Wenn weggelassen, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Stencil-Wert des Renderzustands wird zu Beginn eines Renderdurchgangs auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, erfolgreich ist. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das beschreibt, wie Stencil-Vergleiche und -Operationen für frontseitige Primitiven durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die gesteuert, welche `depthStencilAttachment`-Stencil-Wert-Bits gelesen werden, wenn Stencil-Vergleichstests durchgeführt werden. Wenn weggelassen, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die gesteuert, welche `depthStencilAttachment`-Stencil-Wert-Bits geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn weggelassen, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) festgelegt, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchgang auszuführen.

### `fragment` Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}

  - : Eine Sequenz vonAufzeichnungstypen mit der Struktur `(id, value)` stellt Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), dar. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante überschrieben werden soll, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine vorhanden ist, oder andernfalls den Identifizierungsnamen der Konstante.

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

- `entryPoint`
  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Deklaration des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die Farben darstellen, die von der Fragment-Shader-Stufe ausgegeben werden. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alpha-Kanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen jeweils ein Objekt als Wert an, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die an Werten vom Ziel-Anhang durchgeführt werden soll. Mögliche Werte sind:

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

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quelle und Ziel-Mischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die zu den Zielanhangs-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die an Werten vom Fragment-Shader durchgeführt werden soll. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn weggelassen, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation`-enumerierten Wert definiert sind, siehe den [Blend State](https://gpuweb.github.io/gpuweb/#blend-state)-Abschnitt der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere {{Glossary("bitwise_flags", "Bit-Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet werden soll. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem die Werte mit Pipe-Zeichen getrennt werden, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alpha-Kanal eines Fragments zur Generierung einer Sample Coverage Maske verwendet werden soll. Wenn weggelassen, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline ist nur mit Anhangstexturen kompatibel (`colorAttachment`s und `depthStencilAttachment`s), die übereinstimmende `sampleCounts` haben (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn weggelassen, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn weggelassen, ist `mask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment` Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) festgelegt, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchgang auszuführen.

### `primitive` Objektstruktur

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung herausgeschnitten wird, wenn überhaupt. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden herausgeschnitten.
    - `"front"`: Vorderseitige Polygone werden herausgeschnitten.
    - `"none"`: Keine Polygone werden herausgeschnitten.

    Wenn weggelassen, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn weggelassen, ist `frontFace` standardmäßig `"ccw"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den primitiven Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primitive Neustartwert gibt an, welcher Indexwert angibt, dass ein neues Primtiv gestartet werden sollte, anstatt den Streifen mit den zuvor indizierten Vertices fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen primitiven Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen primitiven Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitive-Topologie spezifizieren, müssen ein Streifen-Indexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), sodass der primitive Neustartwert, der verwendet wird, zum Zeitpunkt der Pipelinenerstellung bekannt ist. Pipelines mit Listen-Primitive-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen wird das Indexformat verwendet, das beispielsweise an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wurde, wenn indiziertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ von Primitive definiert, der aus den angegebenen `vertex`-Eingaben konstruiert wird. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertices definiert ein Linienprimitiv.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimitiv zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimitiv.
    - `"triangle-list"`: Jedes aufeinanderfolgende Dreiertripel von Vertices definiert ein Dreiecksprimaintiv.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecksprimaintiv zwischen ihm und den vorherigen beiden Vertexen.

    Wenn weggelassen, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass Tiefen-Clipping deaktiviert ist. Wenn weggelassen, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass zum Steuern des Tiefen-Clippings das `depth-clip-control` [Merkmal](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

> **Hinweis:** `frontFace` und `cullMode` haben keine Auswirkung auf `"point-list"`, `"line-list"`, oder `"line-strip"` Topologien.

### `vertex` Objektstruktur

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, stellt Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), dar. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und `constant` ist ein enumerierter Wert, der einen WGSL darstellt.

    Abhängig davon, welche Konstante überschrieben werden soll, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine vorhanden ist, oder andernfalls den Identifizierungsnamen der Konstante.

    Ein Code-Schnipsel, das Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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
  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt erkannt zu werden. Siehe [Deklaration des Einstiegspunkts](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertexpuffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z. B. Vertices) im Puffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertexattribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertexes festlegt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur bis zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Der numerische Standort, der mit diesem Attribut verbunden ist, der einer [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut in dem zugeordneten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Code entsprechen wird, der in der `vertex`-Objekteigenschaft `module` referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die getrennten Strukturen im Puffer Vertices oder Instanzen repräsentieren. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz – die Adresse wird für jede Instanz um `arrayStride` verschoben.
        - `"vertex"`: Jede Struktur ist ein Vertex – die Adresse wird für jeden Vertex um `arrayStride` verschoben und zwischen Instanzen zurückgesetzt.

        Wenn weggelassen, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen beim Aufruf von **`createRenderPipeline()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt wird zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind für Linien- und Punkttopologien auf <code>0</code> gesetzt, d.h., wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"`, oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn `stencilFront` oder `stencilBack` Eigenschaften nicht ihre Standardwerte haben, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Alpha-Kanal der Quelle verwenden (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h., es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfache Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptorobjekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
