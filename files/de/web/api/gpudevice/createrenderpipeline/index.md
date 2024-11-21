---
title: "GPUDevice: Methode createRenderPipeline()"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `depthStencil`-Objekts](#depthstencil_object_structure)), das die Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verzerrungen beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und ihre Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhängerausgaben, führt aber dennoch Rasterung durch und erzeugt Tiefenwerte basierend auf der Vertex-Position-Angabe. Tiefen-Tests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Etikett bereitstellt, das zur Identifizierung des Objekts verwendet werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, etc.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, vorzeitig herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline veranlasst, ein implizites Bind-Group-Layout basierend auf allen in den Shader-Code definierten Bindings zu erzeugen. Bei Verwendung von `"auto"` können die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den Multisample-Anhängern eines Renderpass interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitives aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und seine Eingabepuffer-Layouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenverzerrung darstellt, die zu jedem Fragment hinzugefügt wird. Wenn weggelassen, ist der Standardwert von `depthBias` 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d. h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die die maximale Tiefenverzerrung eines Fragments darstellt. Wenn weggelassen, ist der Standardwert von `depthBiasClamp` 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine Tiefenverzerrung darstellt, die mit der Neigung des Fragments skaliert. Wenn weggelassen, ist der Standardwert von `depthBiasSlopeScale` 0.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen immer fehl.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner ist als der abgetastete Wert.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer ist als der abgetastete Wert.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Ist er auf `false` gesetzt, kann sie es nicht.
- `format`
  - : Ein enumerierter Wert, der das Format des `depthStencilAttachment` angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel ist. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für rückseitige Primitives durchgeführt werden. Seine Eigenschaften können Folgendes umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, wenn Fragmente gegen `depthStencilAttachment`-Stencil-Werte getestet werden. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn weggelassen, ist der Standardwert von `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Tiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Renderzustand-Stencil-Wert und klemmt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Renderzustand-Stencil-Wert und umwickelt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Renderzustand-Stencil-Werts.
        - `"increment-clamp"`: Erhöht den aktuellen Renderzustand-Stencil-Wert und klemmt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts.
        - `"increment-wrap"`: Erhöht den aktuellen Renderzustand-Stencil-Wert und umwickelt ihn auf 0, wenn der Wert den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts überschreitet.
        - `"keep"`: Behält den aktuellen Stencil-Wert bei.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Renderzustand-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn weggelassen, ist der Standardwert von `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Renderzustand-Stencil-Wert wird zu Beginn eines Renderdurchlaufs auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für frontseitige Primitives durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwertbits gelesen werden, wenn Stencil-Vergleichstests durchgeführt werden. Wenn weggelassen, ist der Standardwert von `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencilwertbits geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn weggelassen, ist der Standardwert von `stencilWriteMask` `0xFFFFFFFF`.

> **Beachten Sie:** `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchlauf auszuführen.

### `fragment` Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und die `constant` ist ein enumerierter Wert, der eine WGSL repräsentiert.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann die `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribut enthält — der Browser wird dies als den Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbszustände darstellen, die Konfigurationsdetails für die vom Fragment-Shader-Stufe ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der den Mischfaktor-Operation für Werte vom Zielanhang definiert. Mögliche Werte sind:

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

            Wenn weggelassen, ist der Standardwert von `dstFactor` `"zero"`.

            > [!NOTE]
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktor-Operationen erfolgreich verwendet werden können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die an die Zielanhangskomponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist der Standardwert von `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation für Werte vom Fragment-Shader definiert. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn weggelassen, ist der Standardwert von `srcFactor` `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der von jedem `dstFactor`/`srcFactor` und `operation` definierten Algorithmen, siehe den [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) Abschnitt der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die an den Farbzielzustand anzuwendende Schreibmaske definieren. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist der Standardwert von `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennung der Werte mit Pipe-Symbolen angegeben werden können, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Abdeckungsmaske für Muster zu erzeugen. Wenn weggelassen, ist der Standardwert von `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Muster pro Pixel definiert. Die Pipeline wird nur mit Anhängert texturen (`colorAttachment`s und `depthStencilAttachment`s) mit passenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)) kompatibel sein.

    Wenn weggelassen, ist der Standardwert von `count` 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Muster geschrieben werden. Wenn weggelassen, ist der Standardwert von `mask` `0xFFFFFFFF`.

> **Beachten Sie:** `colorAttachment` und `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchlauf auszuführen.

### `primitive` Objektstruktur

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung entfernt wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden entfernt.
    - `"front"`: Vorderseitige Polygone werden entfernt.
    - `"none"`: Keine Polygone werden entfernt.

    Wenn weggelassen, ist der Standardwert von `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn weggelassen, ist der Standardwert von `frontFace` `"ccw"`.

    > [!NOTE] > `frontFace` und `cullMode` haben keinen Effekt auf `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Neustartwert für Primitives in Fällen von Pipelines mit Streifen-Topologien (`"line-strip"` oder `"triangle-strip"`) festlegt. Der Primitive-Neustartwert gibt an, welcher Indexwert angibt, dass ein neues Primitive gestartet werden soll, anstatt den Streifen mit den vorher indexierten Vertizes fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primitive-Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primitive-Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitiv-Topologie spezifizieren, müssen ein Streifen-Indexformat angeben, wenn sie für indexierte Draws verwendet werden (zum Beispiel, über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), sodass der Primitive-Neustartwert bei der Pipelinenerstellung bekannt ist. Pipelines mit Listen-Primitiv-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Sie verwenden stattdessen das Indexformat, das an `GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bei der Verwendung von indexiertem Rendering übergeben wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitives definiert, das aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Scheitelpunkten definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linien-Primitive zwischen dem und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Triplett aus drei Scheitelpunkten definiert ein Dreieck-Primitive.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreieck-Primitive zwischen dem und den vorherigen zwei Scheitelpunkten.

    Wenn weggelassen, ist der Standardwert von `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die Tiefenabschneidung deaktiviert ist. Wenn weggelassen, ist der Standardwert von `unclippedDepth` `false`. Beachten Sie, dass die Kontrolle der Tiefenabschneidung die Aktivierung der `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) erfordert.

    > [!NOTE]
    > Die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth` Eigenschaft erfolgreich verwendet werden kann. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### `vertex` Objektstruktur

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibwerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist die `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und die `constant` ist ein enumerierter Wert, der eine WGSL repräsentiert.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann die `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibwerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex`-Attribut enthält — der Browser wird dies als den Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers repräsentieren, das in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen im Inneren des Puffers darstellt (z. B. Scheitelpunkte).
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertizes angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Abstand in Bytes vom Beginn der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Der numerische Ort, der mit diesem Attribut verbunden ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut korrespondiert, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), auf das in der `vertex`-Eigenschaft `module`, referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` vorgerückt.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jeden Vertex um `arrayStride` vorgerückt und zwischen Instanzen zurückgesetzt.

        Wenn weggelassen, ist der Standardwert von `stepMode` `"vertex"`.

### Rückgabewert

Eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objekt zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d. h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn `stencilFront` oder `stencilBack` Eigenschaften nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Für jedes `target` ist der numerische Wert von `writeMask` kleiner als 16.
  - Wenn einer der verwendeten Mischfaktor-Operationen den Alphakanal der Quelle verwendet (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (das heißt, sie muss ein `vec4` sein).
  - Wenn `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, ist die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Funktion für den Einstiegspunkt des Fragment-Shaders, die der Browser als Standard-Einstiegspunkt verwendet.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Funktion für den Einstiegspunkt des Vertex-Shaders, die der Browser als Standard-Einstiegspunkt verwendet.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Renderdemos](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für den Aufbau eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()` Aufruf zu erstellen.

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
