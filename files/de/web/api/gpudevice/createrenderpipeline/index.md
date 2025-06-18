---
title: "GPUDevice: createRenderPipeline()-Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{APIRef("WebGPU API")}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode der [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Schnittstelle erstellt eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), die die Vertex- und Fragment-Shader-Phasen steuern und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [Aufbau des `depthStencil`-Objekts](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verzerrung beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [Aufbau des `fragment`-Objekts](#fragment_object_structure)), das den Einstiegspunkt des Fragment-Shaders der Pipeline und deren Ausgabe-Farben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, erzeugt die Pipeline keine Farbausgabe-Anhänge, führt aber dennoch Rasterisierung durch und erzeugt Tiefenwerte basierend auf der Ausgabe der Vertex-Position. Tiefentests und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label bereitstellt, mit dem das Objekt identifiziert werden kann, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String `"auto"`, der die Pipeline veranlasst, ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, können die generierten Bind-Group-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Aufbau des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multisample-Texturen eines Renderpasses interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Aufbau des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive mit ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [Aufbau des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und deren Eingabepuffer-Layouts beschreibt.

### Aufbau des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefen-Verzerrung darstellt, die zu jedem Fragment hinzugefügt wird. Wenn weggelassen, ist der Standardwert von `depthBias` 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die die maximale Tiefen-Verzerrung eines Fragments darstellt. Wenn weggelassen, ist der Standardwert von `depthBiasClamp` 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine Tiefen-Verzerrung darstellt, die mit der Neigung des Fragments skaliert. Wenn weggelassen, ist der Standardwert von `depthBiasSlopeScale` 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die verwendet wird, um Fragment-Tiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests bestehen nie.
    - `"less"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er ungleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein bereitgestellter Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

    `depthCompare` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat oder wenn die Vergleichsoperation nicht verwendet wird.

- `depthWriteEnabled` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) nach der Erstellung `depthStencilAttachment`-Tiefenwerte modifizieren kann. Wenn er auf `false` gesetzt ist, bedeutet dies, dass es nicht möglich ist.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen bei rückseitigen Primitiven durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation spezifiziert, die bei der Prüfung von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind dieselben wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn weggelassen, ist der Standardwert von `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Tiefenvergleich, beschrieben durch `depthCompare`, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Stencil-Wert des Render-Zustands, unter Beachtung einer Begrenzung auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Stencil-Wert des Render-Zustands, dabei wird er auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts gewickelt, wenn der Wert unter 0 fällt.
        - `"invert"`: Führt eine bitweise Invertierung des aktuellen Stencil-Werts des Render-Zustands durch.
        - `"increment-clamp"`: Erhöht den aktuellen Stencil-Wert des Render-Zustands, unter Beachtung einer Begrenzung auf den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts.
        - `"increment-wrap"`: Erhöht den aktuellen Stencil-Wert des Render-Zustands, wickelt ihn auf null, wenn der Wert den maximal darstellbaren Wert des `depthStencilAttachment`-Stencil-Aspekts überschreitet.
        - `"keep"`: Behält den aktuellen Stencil-Wert bei.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Stencil-Wert des Render-Zustands.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn weggelassen, ist der Standardwert von `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Stencil-Wert des Render-Zustands wird zu Beginn eines Renderpasses auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, beschrieben durch `compare`, fehlschlägt. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation spezifiziert, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, beschrieben durch `compare`, besteht. Mögliche und Standardwerte sind dieselben wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen bei vorderseitigen Primitiven durchgeführt werden. Seine Eigenschaften sind dieselben wie bei `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Ein Bitmaske, die kontrolliert, welche `depthStencilAttachment`-Stencilwertbits beim Ausführen von Stencil-Vergleichstests gelesen werden. Wenn weggelassen, ist der Standardwert von `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Ein Bitmaske, die kontrolliert, welche `depthStencilAttachment`-Stencilwertbits während der Ausgabe von Stencil-Operationen geschrieben werden. Wenn weggelassen, ist der Standardwert von `stencilWriteMask` `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass durchzuführen.

### Aufbau des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten darstellt, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). Diese verhalten sich wie [geordneten Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel zur Identifikation oder Auswahl des Records, und das `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann das `id` die Form der numerischen ID der Konstante annehmen, falls eine spezifiziert ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Schnipsel, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbstati repräsentieren, die Konfigurationsdetails für die von der Fragment-Shader-Phase ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet werden soll. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Wert des Alpha-Kanals.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen jeweils ein Objekt als Wert an, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte von der Zielanhang ausgeführt wird. Mögliche Werte sind:

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
            > Die Funktion `dual-source-blending` [feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die Blendfaktor-Operationen `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` erfolgreich verwendet werden können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die finalen Werte zu berechnen, die in die Zielanhangskomponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn weggelassen, ist der Standardwert von `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktor-Operation definiert, die auf Werte vom Fragment-Shader ausgeführt wird. Mögliche Werte sind dieselben wie für `dstFactor`. Wenn weggelassen, ist der Standardwert von `srcFactor` `"one"`.

        > [!NOTE]
        > Eine detaillierte Erklärung der durch jeden `dstFactor`/`srcFactor` und `operation` definierten Algorithmen finden Sie im Abschnitt [Blendzustand](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.

        > [!NOTE]
        > Um die Formate `r32float`, `rg32float` und `rgba32float` mit [Blending](#blend) zu verwenden, muss die `float32-blendable`-Funktion [feature](/de/docs/Web/API/GPUSupportedFeatures) im Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Eine oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzieltzustand angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn weggelassen, ist der Standardwert von `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem Werte mit [bitwise OR](/de/docs/Web/JavaScript/Reference/Operators/Bitwise_OR) getrennt werden, zum Beispiel: `GPUColorWrite.RED | GPUColorWrite.ALPHA`.

### Aufbau des `multisample`-Objekts

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alpha-Kanal eines Fragments verwendet werden soll, um eine Sample-Coverage-Maske zu erzeugen. Wenn weggelassen, ist der Standardwert von `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline ist nur mit Anhangstexturen kompatibel (`colorAttachment`s und `depthStencilAttachment`s) mit übereinstimmenden `sampleCounts` (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn weggelassen, ist der Standardwert von `count` 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn weggelassen, ist der Standardwert von `mask` `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment`-Werte werden während [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufen angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Renderpass durchzuführen.

### Aufbau des `primitive`-Objekts

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygon-Orientierung, wenn überhaupt, ausgeschlossen wird. Mögliche Werte sind:

    - `"back"`: Rückwärtig gerichtete Polygone werden ausgeschlossen.
    - `"front"`: Vorwärtig gerichtete Polygone werden ausgeschlossen.
    - `"none"`: Keine Polygone werden ausgeschlossen.

    Wenn weggelassen, ist der Standardwert von `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn gegebener Ordnung liegen.
    - `"cw"`: Polygone mit Vertizes, deren Framebuffer-Koordinaten in Uhrzeigersinn gegebener Ordnung liegen.

    Wenn weggelassen, ist der Standardwert von `frontFace` `"ccw"`.

    > [!NOTE]
    > Die `frontFace`- und `cullMode`-Werte haben keine Wirkung auf die `"point-list"`, `"line-list"` oder `"line-strip"`-Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Primitivneustartwert im Fall von Pipelines mit Streifentopologien ( `"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primitivneustartwert gibt an, welcher Indexwert anzeigt, dass ein neues Primitive gestartet werden soll, anstatt das Streifen mit den vorher indexierten Vertizes weiter zu konstruieren. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primitivneustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primitivneustartwert von `0xFFFFFFFF` an.

    GPU-Primitiv-Funktionalitäten, die eine Streifentopologie angeben, müssen ein Streifenindexformat angeben, wenn sie für indexierte Zeichnungen verwendet werden (zum Beispiel, über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der Primitivneustartwert bekannt ist, wenn die Pipeline erzeugt wird. Pipelines mit Listentopologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Sie werden stattdessen das Indexformat verwenden, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indiziertes Rendern durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der die Art des Primitivs definiert, das aus den angegebenen `vertex`-Eingaben konstruiert wird. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar zweier Vertizes definiert ein Linienprimitive.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimitive zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Triplett von drei Vertizes definiert ein Dreieckprimitive.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreieckprimitive zwischen ihm und den vorhergehenden zwei Vertizes.

    Wenn weggelassen, ist der Standardwert von `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` zeigt an, dass Tiefenüberschneidung deaktiviert ist. Wenn weggelassen, ist der Standardwert von `unclippedDepth` `false`. Beachten Sie, dass, um die Tiefenüberschneidung zu steuern, die `depth-clip-control`-Funktion [feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Die `depth-clip-control`-Funktion [feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth`-Eigenschaft erfolgreich verwendet werden kann. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### Aufbau des `vertex`-Objekts

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Überschreibungswerte für [WGSL-Konstanten darstellen, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue). Diese verhalten sich wie [geordneten Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist das `id` ein Schlüssel zur Identifikation oder Auswahl des Records, und das `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann das `id` die Form der numerischen ID der Konstante annehmen, falls eine spezifiziert ist, oder ansonsten den Bezeichnernamen der Konstante.

    Ein Code-Schnipsel, der Überschreibungswerte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für mehr Informationen.

    Sie können die Eigenschaft `entryPoint` weglassen, wenn Ihr Shader-Code eine einzige Funktion mit dem `@vertex`-Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt bestimmen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers, der in der Pipeline verwendet wird, darstellen. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die die Anzahl der Bytes zwischen den verschiedenen Strukturen (z.B. Vertizes) im Puffer repräsentiert.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Offset, in Bytes, vom Anfang der Struktur zu den Daten für das Attribut spezifiziert.
        - `shaderLocation`
          - : Die numerische Position, die diesem Attribut zugeordnet ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut im WGSL-Code des assoziierten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) übereinstimmt, auf das in der `vertex`-Objekteigenschaft `module` verwiesen wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen innerhalb des Puffers Vertizes oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` vorgerückt.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex um `arrayStride` vorgerückt und zwischen den Instanzen zurückgesetzt.

        Wenn weggelassen, ist der Standardwert von `stepMode` `"vertex"`.

### Rückgabewert

Eine Instanz des [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale)-Eigenschaften sind auf <code>0</code> gesetzt für Linien- und Punkt-Topologien, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich der `maxColorAttachments`-Grenze [limit](/de/docs/Web/API/GPUSupportedLimits) des [`GPUDevice`](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Quell-Alpha-Kanal verwendet (zum Beispiel `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h. sie muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, ist die `dual-source-blending`-Funktion [feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzelne Fragmentshader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die Eigenschaft `unclippedDepth` verwendet wird, ist die `depth-clip-control`-Funktion [feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die Eigenschaft `entryPoint` weggelassen wird, enthält der Shader-Code eine einzelne Vertexshader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Descriptor-Objekts, welches verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erzeugen.

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
