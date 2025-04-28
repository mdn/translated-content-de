---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil`-Objektstruktur](#depthstencil_object_structure)), das Tiefenstencil-Eigenschaften einschließlich Tests, Operationen und Bias beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment`-Objektstruktur](#fragment_object_structure)), das den Eingabepunkt des Fragment-Shaders der Pipeline und seine Ausgabe-Farben beschreibt. Wenn kein Eingabepunkt des Fragment-Shaders definiert ist, erzeugt die Pipeline keine Farbanhang-Ausgaben, führt aber dennoch die Rasterisierung durch und produziert Tiefenwerte basierend auf dem Vertex-Positionsergebnis. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der dazu führt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf in der Shader-Schreiben definierten Bindungen generiert. Wenn `"auto"` verwendet wird, dürfen die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample`-Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den Multi-Sample-Anhängen eines Render-Durchgangs interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive`-Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline primitive Strukturen aus ihren Vertex-Eingaben erstellt und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex`-Objektstruktur](#vertex_object_structure)), das den Eingabepunkt des Vertex-Shaders der Pipeline und seine Eingabepuffer-Layouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenvoreilung darstellt, die jedem Fragment hinzugefügt wird. Wenn weggelassen, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkttopologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenvoreilungswert eines Fragments darstellt. Wenn weggelassen, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine Tiefenvoreilung darstellt, die mit der Neigung des Fragments skaliert. Wenn weggelassen, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragment-Tiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen nie.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn auf `false` gesetzt, kann sie dies nicht.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt der Spezifikation über [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückseitige Primitiven durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn weggelassen, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Stencil-Wert des Render-Zustands und klemmt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Stencil-Wert des Render-Zustands und umwickelt ihn auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment`, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Invertieren des aktuellen Stencil-Wertes des Render-Zustands.
        - `"increment-clamp"`: Erhöht den aktuellen Stencil-Wert des Render-Zustands und klemmt ihn auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment`.
        - `"increment-wrap"`: Erhöht den aktuellen Stencil-Wert des Render-Zustands und umwickelt ihn auf null, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` überschreitet.
        - `"keep"`: Beibehalten des aktuellen Stencil-Wertes.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Stencil-Wert des Render-Zustands.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn weggelassen, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Stencil-Wert des Render-Zustands wird zu Beginn eines Render-Durchgangs auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorderseitige Primitiven durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Bits des `depthStencilAttachment`-Stencil-Wertes beim Durchführen von Stencil-Vergleichstests gelesen werden. Wenn weggelassen, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Bits des `depthStencilAttachment`-Stencil-Wertes beim Durchführen von Stencil-Operationen geschrieben werden. Wenn weggelassen, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Durchgang durchzuführen.

### `fragment` Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), repräsentieren. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder andernfalls den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Eingabepunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Eingabepunkterklärung](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit gesetztem `@fragment`-Attribut enthält — der Browser wird diese als Standard-Eingabepunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Eingabepunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die vom Fragment-Shader-Stadium ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alpha-Kanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` nehmen ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte des Zielanhangs ausgeführt wird. Mögliche Werte sind:

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
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, damit die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktor-Operationen erfolgreich verwendet werden können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Ziel-Mischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die an die Zielanhang-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte des Fragment-Shaders angewendet wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn weggelassen, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Eine detaillierte Erklärung der Algorithmen, die von jedem `dstFactor`/`srcFactor` und `operation` enumerierten Wert definiert werden, finden Sie im Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt der Spezifikation über [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Für die Verwendung der Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend), muss die `float32-blendable` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennung der Werte mit [bitweisem ODER](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, beispielsweise: `GPUColorWrite.RED | GPUColorWrite.ALPHA`.

### `multisample` Objektstruktur

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolean. Ein Wert von `true` zeigt an, dass der Alphakanal eines Fragments zur Generierung einer Probeabdeckungsmaske verwendet werden soll. Wenn weggelassen, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline ist nur mit Anhangs-Texturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel, die mit passenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)) versehen sind.

    Wenn weggelassen, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Wenn weggelassen, ist `mask` standardmäßig `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Durchgang durchzuführen.

### `primitive` Objektstruktur

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonausrichtung ausgeschnitten wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückwärtsgerichtete Polygone werden ausgeschnitten.
    - `"front"`: Vorwärtsgerichtete Polygone werden ausgeschnitten.
    - `"none"`: Keine Polygone werden ausgeschnitten.

    Wenn weggelassen, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorwärtsgerichtet betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegebener Reihenfolge sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten in Uhrzeigersinn angegebener Reihenfolge sind.

    Wenn weggelassen, ist `frontFace` standardmäßig `"ccw"`.

    > [!NOTE]
    > Die `frontFace`- und `cullMode`-Werte haben keinen Effekt auf die `"point-list"`, `"line-list"` oder `"line-strip"`-Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den primitiven Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primitive Neustartwert gibt den Indexwert an, der angibt, dass ein neues Primitive gestartet werden soll, anstatt mit den zuvor indizierten Vertices das Streifen weiter auszubauen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Byte-Größe von 2 und einen primitiven Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Byte-Größe von 4 und einen primitiven Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitive-Zustände, die eine Streifenprimitive-Topologie spezifizieren, müssen ein Streifenindexformat spezifizieren, wenn sie für indizierte Zeichnungen (z.B. über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)) verwendet werden, damit der primitive Neustartwert, der zur Pipeline-Erstellungszeit verwendet wird, bekannt ist. Pipelines mit Listenprimitive-Topologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert spezifizieren. Sie verwenden stattdessen das Indexformat, das beispielsweise an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indexiertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitivs definiert, der aus den angegebenen `vertex`-Eingaben erstellt werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertices definiert ein Linienprimitiv.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimitiv zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimitiv.
    - `"triangle-list"`: Jedes aufeinanderfolgende Trio von drei Vertices definiert ein Dreieckprimitiv.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreieckprimitiv zwischen ihm und den vorherigen zwei Vertices.

    Wenn weggelassen, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolean. Ein Wert von `true` gibt an, dass das Tiefenschneiden deaktiviert ist. Wenn weggelassen, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass, um das Tiefenschneiden zu steuern, die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert werden, damit die `unclippedDepth`-Eigenschaft erfolgreich verwendet werden kann. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### `vertex` Objektstruktur

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), repräsentieren. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder andernfalls den Bezeichnernamen der Konstante.

    Ein Code-Snippet, das Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Eingabepunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Eingabepunkterklärung](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit gesetztem `@vertex`-Attribut enthält — der Browser wird diese als Standard-Eingabepunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Eingabepunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertices) innerhalb des Puffers repräsentiert.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte, siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Abstand in Bytes vom Anfang der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut assoziiert ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut übereinstimmt, das im WGSL-Code des zugeordneten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert ist, auf das in der `vertex`-Eigenschaft des Objekts verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der bestimmt, ob die separaten Strukturen innerhalb des Puffers Vertices oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur stellt einen Vertex dar — die Adresse wird für jeden Vertex um `arrayStride` erhöht und zwischen den Instanzen zurückgesetzt.

        Wenn weggelassen, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Eine Instanz des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekts.

### Gültigkeitsprüfung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> gesetzt für Linien- und Punkttopologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)'s `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Für jedes `target` ist die numerische Entsprechung von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Alpha-Kanal der Quelle verwenden (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h. sie muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, ist die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Eingangspunktfunktion des Fragment-Shaders, die der Browser als Standard-Eingangspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Eingangspunktfunktion des Vertex-Shaders, die der Browser als Standard-Eingangspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) liefert ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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

- Die [WebGPU API](/de/docs/Web/API/WebGPU_API)
