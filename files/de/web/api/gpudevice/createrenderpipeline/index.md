---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 153807f839ecfc45fd73ef12f92cc8e8012eb004
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Stufen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

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
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und deren Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbanlagen, führt jedoch weiterhin Rasterisierung durch und produziert Tiefenwerte basierend auf der Ausgabe der Vertex-Position. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label zur Identifizierung des Objekts bereitstellt, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Buffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das der GPU ermöglicht, im Voraus zu bestimmen, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der dazu führt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf allen im Shader-Code definierten Bindungen generiert. Wenn `"auto"` verwendet wird, können die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multi-sampled Attachments eines Renderpasses interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rastert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und deren Eingabepufferlayouts beschreibt.

### Struktur des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefen-Bias darstellt, der zu jedem Fragment hinzugefügt wird. Wenn nicht angegeben, beträgt der Standardwert von `depthBias` 0.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefen-Bias eines Fragments darstellt. Wenn nicht angegeben, beträgt der Standardwert von `depthBiasClamp` 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefen-Bias darstellt, der mit der Neigung des Fragments skaliert wird. Wenn nicht angegeben, beträgt der Standardwert von `depthBiasSlopeScale` 0.
- `depthCompare`

  - : Ein aufgezählter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen mit `depthStencilAttachment`-Tiefenwerten zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen nie.
    - `"less"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein angegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) den `depthStencilAttachment`-Tiefenwert nach der Erstellung ändern kann. Wird er auf `false` gesetzt, kann er dies nicht.
- `format`
  - : Ein aufgezählter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe die [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat)-Sektion der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für rückseitige Primitiven durchgeführt werden. Seine Eigenschaften können folgende beinhalten:

    - `compare` {{optional_inline}}
      - : Ein aufgezählter Wert, der die Vergleichsoperation angibt, die bei der Prüfung von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn nicht angegeben, ist der Standardwert von `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein aufgezählter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Renderzustand-Stencil-Wert und beschränkt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Renderzustand-Stencil-Wert und umhüllt ihn zur maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweise Umkehrung des aktuellen Renderzustand-Stencil-Wertes.
        - `"increment-clamp"`: Erhöht den aktuellen Renderzustand-Stencil-Wert und beschränkt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts.
        - `"increment-wrap"`: Erhöht den aktuellen Renderzustand-Stencil-Wert und umhüllt ihn zu null, wenn der Wert den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts überschreitet.
        - `"keep"`: Behalten Sie den aktuellen Stencil-Wert.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Renderzustand-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn nicht angegeben, beträgt der Standardwert von `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Renderzustand-Stencil-Wert wird zu Beginn eines Renderpasses auf 0 gesetzt.

    - `failOp` {{optional_inline}}
      - : Ein aufgezählter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein aufgezählter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für vorderseitige Primitiven durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche `depthStencilAttachment`-Stencilwert-Bits beim Testen von Stencil-Vergleichstests gelesen werden. Wenn nicht angegeben, beträgt der Standardwert von `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche `depthStencilAttachment`-Stencilwert-Bits bei der Durchführung von Stencil-Operationen geschrieben werden. Wenn nicht angegeben, beträgt der Standardwert von `stencilWriteMask` `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass auszuführen.

### Struktur des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Datensätzen, mit der Struktur `(id, value)`, die überschreibbare Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und der `constant` ist ein aufgezählter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann die `id` die numerische ID der Konstante sein, wenn eine angegeben ist, oder alternativ der Name des Bezeichners der Konstante.

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
  - : Der Name der Funktion im `module`, die von dieser Stufe verwendet wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbzustände darstellen, die Konfigurationsdetails für die Farben angeben, die von der Fragment-Shader-Stufe ausgegeben werden. Diese Objekte können folgende Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanalwert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` nehmen ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein aufgezählter Wert, der die Mischfaktoroperation definiert, die bei Werten vom Zielanhang durchgeführt wird. Mögliche Werte sind:

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

            Wenn nicht angegeben, beträgt der Standardwert von `dstFactor` `"zero"`.

        - `operation` {{optional_inline}}

          - : Ein aufgezählter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die in die Zielanhangskomponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn nicht angegeben, beträgt der Standardwert von `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein aufgezählter Wert, der die Mischfaktoroperation definiert, die bei Werten vom Fragment-Shader durchgeführt wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn nicht angegeben, beträgt der Standardwert von `srcFactor` `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation`-aufgezählten Wert definiert werden, siehe die [Mischzustand](https://gpuweb.github.io/gpuweb/#blend-state)-Sektion der Spezifikation.

    - `format`
      - : Ein aufgezählter Wert, der das erforderliche Format für ausgabefarbige Farben angibt. Siehe die [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat)-Sektion der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Ein oder mehrere [bitweise Flags](/de/docs/Glossary/bitwise_flags), die die Schreibmaske auf den Farbzielzustand anwenden. Mögliche Flaggenwerte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn nicht angegeben, beträgt der Standardwert von `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennzeichen mit Pipesymbolen angegeben werden können, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### Struktur des `multisample`-Objekts

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolean. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Abdeckungsmaskenabdeckung zu erstellen. Wenn nicht angegeben, beträgt der Standardwert von `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline wird nur mit Texturanhängen (`colorAttachment`s und `depthStencilAttachment`s) mit übereinstimmenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)) kompatibel sein.

    Wenn nicht angegeben, beträgt der Standardwert von `count` 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Wenn nicht angegeben, beträgt der Standardwert von `mask` `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment`- und `depthStencilAttachment`-Werte werden während der Aufrufe von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass auszuführen.

### Struktur des `primitive`-Objekts

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein aufgezählter Wert, der definiert, welche Polygonorientierung verworfen wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden verworfen.
    - `"front"`: Vorderseitige Polygone werden verworfen.
    - `"none"`: Es werden keine Polygone verworfen.

    Wenn nicht angegeben, beträgt der Standardwert von `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein aufgezählter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn nicht angegeben, beträgt der Standardwert von `frontFace` `"ccw"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein aufgezählter Wert, der das Indexpufferformat und den Primitive-Reset-Wert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primitive-Reset-Wert gibt an, welcher Indexwert anzeigt, dass ein neues Primitive gestartet werden soll, anstatt das Streifen mit den vorherigen indizierten Vertices fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primitive-Reset-Wert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primitive-Reset-Wert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifenprimär-Topologie angeben, müssen ein Streifenindexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der Primitive-Reset-Wert, der verwendet wird, zur Erstellungszeit der Pipeline bekannt ist. Pipelines mit List-Primär-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Sie verwenden stattdessen das Indexformat, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) bei der indizierten Wiedergabe übergeben wird.

- `topology` {{optional_inline}}

  - : Ein aufgezählter Wert, der den Typ des Primitives definiert, der aus den angegebenen `vertex`-Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Vertices definiert ein Linien-Primitive.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linien-Primitive zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punkt-Primitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Dreiertriplet von Vertices definiert ein Dreiecks-Primitiv.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecks-Primitiv zwischen ihm und den vorherigen beiden Vertices.

    Wenn nicht angegeben, beträgt der Standardwert von `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : Ein boolean. Ein Wert von `true` gibt an, dass das Abschneiden der Tiefe deaktiviert ist. Wenn nicht angegeben, beträgt der Standardwert von `unclippedDepth` `false`. Beachten Sie, dass zur Steuerung des Tiefenabschneidens das `depth-clip-control`-[Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

> **Hinweis:** `frontFace` und `cullMode` haben keine Auswirkungen auf `"point-list"`, `"line-list"`, oder `"line-strip"`-Topologien.

### Struktur des `vertex`-Objekts

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Datensätzen, mit der Struktur `(id, value)`, die überschreibbare Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel zur Identifizierung oder Auswahl des Datensatzes, und der `constant` ist ein aufgezählter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann die `id` die numerische ID der Konstante sein, wenn eine angegeben ist, oder alternativ der Name des Bezeichners der Konstante.

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
  - : Der Name der Funktion im `module`, die von dieser Stufe verwendet wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.
- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, von denen jedes das erwartete Layout eines Vertex-Puffers beschreibt, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertices) im Puffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein aufgezählter Wert, der das Format des Vertexes angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Offset in Bytes vom Beginn der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die diesem Attribut zugeordnet ist und die mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) übereinstimmt, das in der `module`-Eigenschaft des `vertex`-Objekts referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein aufgezählter Wert, der definiert, ob die separaten Strukturen im Puffer Vertices oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` weitergefahren.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex um `arrayStride` weitergefahren und zwischen den Instanzen zurückgesetzt.

        Wenn nicht angegeben, beträgt der Standardwert von `stepMode` `"vertex"`.

### Rückgabewert

Eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, da sonst ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt wird und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben wird:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht ihre Standardwerte haben, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxColorAttachments`-Limit.
  - Für jedes `target` ist der numerische Wert von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktoroperationen den Quell-Alphakanal verwendet (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (das heißt, es muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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
