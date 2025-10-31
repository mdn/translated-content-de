---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`** Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice) Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das die Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verzerrung beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und seine Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanhang-Ausgaben, führt jedoch weiterhin Rasterisierung durch und erzeugt Tiefenwerte basierend auf dem Vertex-Positionsausgang. Tiefentests und Stencil-Operationen können weiterhin genutzt werden.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung liefert, mit der das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus zu bestimmen, wie die Pipeline am effizientesten ausgeführt wird.
        - Ein String `"auto"`, der die Pipeline dazu bringt, basierend auf allen in den Shader-Code definierten Bindungen ein implizites Bindungsgruppen-Layout zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bindungsgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit einer renderpass's multisampled Anhängen interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und seine Eingabepuffer-Layouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenverzerrung darstellt, die zu jedem Fragment hinzugefügt wird. Wenn nicht angegeben, ist `depthBias` standardmäßig 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden, wenn lineare und punktförmige Topologien verwendet werden, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefenverzerrungswert eines Fragments darstellt. Wenn nicht angegeben, ist `depthBiasClamp` standardmäßig 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine Tiefenverzerrung darstellt, die mit der Neigung des Fragments skaliert wird. Wenn nicht angegeben, ist `depthBiasSlopeScale` standardmäßig 0.
- `depthCompare` {{optional_inline}}
  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die zur Prüfung von Fragmenttiefen gegen `depthStencilAttachment`-Tiefenwerte verwendet wird. Mögliche Werte sind:
    - `"never"`: Vergleichstests schlagen nie zu.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Wenn sie auf `false` gesetzt ist, bedeutet dies, dass sie dies nicht kann.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, das mit der [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärtige Primitiven durchgeführt werden. Seine Eigenschaften können sein:
    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn nicht angegeben, ist `compare` standardmäßig `"always"`.
    - `depthFailOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragmenttiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:
        - `"decrement-clamp"`: Verringert den aktuellen Renderstatus-Stencilwert, indem er auf 0 geklemmt wird.
        - `"decrement-wrap"`: Verringert den aktuellen Renderstatus-Stencilwert, indem er auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` umgeschlagen wird, wenn der Wert unter 0 geht.
        - `"invert"`: Bitweises Invertieren des aktuellen Renderstatus-Stencilwerts.
        - `"increment-clamp"`: Erhöht den aktuellen Renderstatus-Stencilwert, indem er auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` geklemmt wird.
        - `"increment-wrap"`: Erhöht den aktuellen Renderstatus-Stencilwert, indem er auf 0 umgeschlagen wird, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` übersteigt.
        - `"keep"`: Beibehaltung des aktuellen Stencil-Werts.
        - `"replace"`: Setzen des Stencil-Werts auf den aktuellen Renderstatus-Stencilwert.
        - `"zero"`: Setzen des Stencil-Werts auf 0.

        Wenn nicht angegeben, ist `depthFailOp` standardmäßig `"keep"`.

        > [!NOTE]
        > Der Renderstatus-Stencilwert ist am Anfang eines Renderdurchgangs auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für frontseitige Primitives durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Stencil-Wert-Bits von `depthStencilAttachment` beim Ausführen von Stencil-Vergleichstests gelesen werden. Wenn nicht angegeben, ist `stencilReadMask` standardmäßig `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Stencil-Wert-Bits von `depthStencilAttachment` beim Ausführen von Stencil-Operationen geschrieben werden. Wenn nicht angegeben, ist `stencilWriteMask` standardmäßig `0xFFFFFFFF`.

> [!NOTE]
> Die `depthStencilAttachment`-Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufe angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchgang auszuführen.

### `fragment` Objektstruktur

Das `fragment` Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}
  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese Verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstanten Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, sofern eine festgelegt ist, oder anderweitig den Bezeichnernamen der Konstante.

    Ein Codeausschnitt, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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
  - : Der Name der Funktion im `module`, die diese Stufe zur Durchführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Erklärung](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribut enthält — der Browser wird diese als Standardeinstiegspunkt verwenden. Wenn `entryPoint` ausgelassen wird und der Browser keinen Standardeinstiegspunkt ermitteln kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, der in dieser programmierbaren Stufe ausgeführt wird.
- `targets`
  - : Ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die Farben, die von der Fragment-Shader-Stufe ausgegeben werden, darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:
    - `blend` {{optional_inline}}
      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabe-Farbe angewendet wird. `blend` hat zwei Eigenschaften:
        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert an, das die folgenden Eigenschaften haben kann:
        - `dstFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte aus dem Zielanhang ausgeführt werden soll. Mögliche Werte sind:
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
            > Die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Mischfaktoroperationen `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}
          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Ziel-Mischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die den Zielanhang-Komponenten geschrieben werden. Mögliche Werte sind:
            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn nicht angegeben, ist `operation` standardmäßig `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte aus dem Fragment-Shader ausgeführt wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn nicht angegeben, ist `srcFactor` standardmäßig `"one"`.

        > [!NOTE]
        > Eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor`- und `operation`-enumerierten Wert definiert sind, finden Sie im Abschnitt [Mischzustand](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Damit die Formate `r32float`, `rg32float` und `rgba32float` mit [Mischung](#blend) verwendet werden können, muss die `float32-blendable` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}
      - : Eine oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielzustand angewendet wird. Mögliche Flag-Werte sind:
        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn nicht angegeben, ist `writeMask` standardmäßig `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennen von Werten mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) angegeben werden können, zum Beispiel: `GPUColorWrite.RED | GPUColorWrite.ALPHA`.

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Abdeckungsmaske für Proben zu generieren. Wenn nicht angegeben, ist `alphaToCoverageEnabled` standardmäßig `false`.
- `count` {{optional_inline}}
  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline ist nur mit Anhängatexturen (`colorAttachment`s und `depthStencilAttachment`s) mit passenden `sampleCounts` kompatibel (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn nicht angegeben, ist `count` standardmäßig 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Wenn nicht angegeben, ist `mask` standardmäßig `0xFFFFFFFF`.

> [!NOTE]
> Die `colorAttachment` und `depthStencilAttachment`-Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufe angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderdurchgang auszuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}
  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung, falls vorhanden, ausgeschnitten wird. Mögliche Werte sind:
    - `"back"`: Rückwärtige Polygone werden ausgeschnitten.
    - `"front"`: Vordere Polygone werden ausgeschnitten.
    - `"none"`: Keine Polygone werden ausgeschnitten.

    Wenn nicht angegeben, ist `cullMode` standardmäßig `"none"`.

- `frontFace` {{optional_inline}}
  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig gelten. Mögliche Werte sind:
    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn nicht angegeben, ist `frontFace` standardmäßig `"ccw"`.

    > [!NOTE]
    > Die Werte `frontFace` und `cullMode` haben keine Auswirkung auf die `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}
  - : Ein enumerierter Wert, der das Indexpufferformat und den primitiven Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der primitive Neustartwert gibt an, welcher Indexwert angibt, dass ein neues Primitive gestartet werden sollte, anstatt den Streifen mit den vorherigen indizierten Scheitelpunkten fortzusetzen. Mögliche Werte sind:
    - `"uint16"`: Gibt eine Bytegröße von 2 und einen primitiven Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen primitiven Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitivtopologie angeben, müssen ein Streifenindexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der primitive Neustartwert, der verwendet wird, zum Zeitpunkt der Pipeline-Erstellung bekannt ist. Pipelines mit Listenprimitivtopologien (`"line-list"`, `"point-list"` oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen wird das Indexformat verwendet, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) beim Durchführen der indizierten Wiedergabe übergeben wird.

- `topology` {{optional_inline}}
  - : Ein enumerierter Wert, der den Typ des Primitives definiert, das aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:
    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Scheitelpunkten definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Trio von drei Scheitelpunkten definiert ein Dreieck-Primitive.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreieck-Primitive zwischen ihm und den vorherigen beiden Scheitelpunkten.

    Wenn nicht angegeben, ist `topology` standardmäßig `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass das Tiefenclippen deaktiviert ist. Wenn nicht angegeben, ist `unclippedDepth` standardmäßig `false`. Beachten Sie, dass zur Steuerung des Tiefenclippings die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Die Funktion `depth-clip-control` [feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Eigenschaft `unclippedDepth` erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}
  - : Eine Sequenz von Aufzeichnungstypen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zum Identifizieren oder Auswählen der Aufzeichnung verwendet wird, und das `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstanten Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, wenn eine angegeben ist, oder andernfalls den Bezeichnernamen der Konstante.

    Ein Codeausschnitt, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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
  - : Der Name der Funktion im `module`, die diese Stufe zur Durchführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Erklärung](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex`-Attribut enthält — der Browser wird diese als Standardeinstiegspunkt verwenden. Wenn `entryPoint` ausgelassen wird und der Browser keinen Standardeinstiegspunkt ermitteln kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, der in dieser programmierbaren Stufe ausgeführt wird.
- `buffers` {{optional_inline}}
  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertexpuffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:
    - `arrayStride`
      - : Eine Zahl, die die Schrittweite in Bytes zwischen den verschiedenen Strukturen (z. B. Vertices) innerhalb des Puffers darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Offset in Bytes vom Beginn der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die mit diesem Attribut verbunden ist, die mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut übereinstimmt, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) deklariert ist, auf den in der `module`-Eigenschaft des `vertex`-Objekts verwiesen wird.
    - `stepMode` {{optional_inline}}
      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertices oder Instanzen darstellen. Mögliche Werte sind:
        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz durch `arrayStride` vorangetrieben.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex durch `arrayStride` vorangetrieben und zwischen Instanzen zurückgesetzt.

        Wenn nicht angegeben, ist `stepMode` standardmäßig `"vertex"`.

### Rückgabewert

Ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt wird zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf `0` gesetzt, wenn lineare und punktförmige Topologien verwendet werden, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht ihre Standardwerte haben, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist `writeMask` numerisch kleiner als 16.
  - Wenn einer der verwendeten Mischfaktoroperationen den Alphakanal der Quelle verwenden (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (d.h. es muss ein `vec4` sein).
  - Wenn die Mischfaktoroperationen `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` verwendet werden, ist die `dual-source-blending` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die Eigenschaft `entryPoint` ausgelassen wird, enthält der Shader-Code eine einzige Fragment-Shader-Einstiegspunkt-Funktion, die der Browser als Standardeinstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die Eigenschaft `unclippedDepth` verwendet wird, ist die `depth-clip-control` [Funktion](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die Eigenschaft `entryPoint` ausgelassen wird, enthält der Shader-Code eine einzige Vertex-Shader-Einstiegspunkt-Funktion, die der Browser als Standardeinstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptorobjekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()` Aufruf zu erstellen.

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
