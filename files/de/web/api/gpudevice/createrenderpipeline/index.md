---
title: "GPUDevice: createRenderPipeline() Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 34d725c0f6e65c5712274a0c88ed2c7f5e5f3d5a
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
      - : Ein Objekt (siehe [`depthStencil` Objektstruktur](#depthstencil_object_structure)), das die Eigenschaften des Tiefen-Stencils beschreibt, einschließlich Tests, Operationen und Bias.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment` Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und ihre Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, wird die Pipeline keine Farbe-Anhang-Ausgaben erzeugen, jedoch Rasterisierung durchführen und Tiefenwerte basierend auf der Vertex-Position ausgeben. Tiefentests und Stencil-Operationen können trotzdem verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der ein Label angibt, das verwendet werden kann, um das Objekt zu identifizieren, zum Beispiel in [`GPUError`](/de/docs/Web/API/GPUError)-Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, etc.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus festzulegen, wie die Pipeline am effizientesten ausgeführt wird.
        - Ein String `"auto"`, der die Pipeline dazu veranlasst, ein implizites Layout für die Bindungsgruppe basierend auf den im Shader-Code definierten Bindungen zu generieren. Wenn `"auto"` verwendet wird, dürfen die generierten Bindungsgruppenlayouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample` Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den mehrfach abgetasteten Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive` Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex` Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und seine Eingabepuffer-Layouts beschreibt.

### `depthStencil` Objektstruktur

Das `depthStencil` Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefen-Bias darstellt, der jedem Fragment hinzugefügt wird. Wenn ausgelassen, beträgt der Standardwert für `depthBias` 0.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen bei Topologien für Linien und Punkte auf `0` gesetzt sein, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefen-Bias eines Fragments darstellt. Wenn ausgelassen, beträgt der Standardwert für `depthBiasClamp` 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefen-Bias darstellt, der mit der Steigung des Fragments skaliert wird. Wenn ausgelassen, beträgt der Standardwert für `depthBiasSlopeScale` 0.
- `depthCompare` {{optional_inline}}

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragementtiefen mit `depthStencilAttachment`-Tiefenwerten zu testen. Mögliche Werte sind:

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

  - : Ein Boolean. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) die `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Mit `false` kann sie dies nicht.

    `depthWriteEnabled` ist nicht erforderlich, wenn das angegebene `format` keine Tiefenkomponente hat.

- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment` Format angibt, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Sehen Sie im Abschnitt [Texture Formats](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation nach, um alle verfügbaren `format` Werte zu sehen.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückseitig ausgerichtete Primitiven durchgeführt werden. Seine Eigenschaften können umfassen:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind dieselben wie für die Eigenschaft `depthCompare`; siehe oben. Wenn ausgelassen, ist der Standardwert für `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Tiefen-Vergleich, der durch `depthCompare` beschrieben wird, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Render-Status-Stencil-Wert, klemmt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Render-Status-Stencil-Wert, wickelt ihn auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment`, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweise invertiert den aktuellen Render-Status-Stencil-Wert.
        - `"increment-clamp"`: Erhöht den aktuellen Render-Status-Stencil-Wert, klemmt ihn auf den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment`.
        - `"increment-wrap"`: Erhöht den aktuellen Render-Status-Stencil-Wert, wickelt ihn auf null, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts von `depthStencilAttachment` überschreitet.
        - `"keep"`: Behält den aktuellen Stencil-Wert.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Render-Status-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn ausgelassen, ist der Standardwert für `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Render-Status-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Fragment-Stencil-Vergleichstest, der durch `compare` beschrieben wird, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorderseitig ausgerichtete Primitiven durchgeführt werden. Seine Eigenschaften sind dieselben wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Stencil-Wert-Bits von `depthStencilAttachment` beim Ausführen von Stencil-Vergleichstests gelesen werden. Wenn ausgelassen, beträgt der Standardwert für `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche Stencil-Wert-Bits von `depthStencilAttachment` beim Ausführen von Stencil-Operationen geschrieben werden. Wenn ausgelassen, beträgt der Standardwert für `stencilWriteMask` `0xFFFFFFFF`.

> **Hinweis:** `depthStencilAttachment` Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufe angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `fragment` Objektstruktur

Das `fragment` Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Records verwendet wird, und `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` in Form der numerischen ID der Konstante vorliegen, falls eine angegeben ist, oder sonst der Bezeichnername der Konstante.

    Ein Codebeispiel, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@fragment` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint` Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment` Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt feststellen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Phase ausführen wird.
- `targets`

  - : ein Array von Objekten, die Farbstati repräsentieren und Konfigurationsdetails für die von der Fragment-Shader-Phase ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alpha-Kanal-Wert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` nehmen beide ein Objekt als Wert an, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der den Blendfaktor-Operation definiert, der auf Werte vom Ziel-Anhang ausgeführt wird. Mögliche Werte sind:

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

            Wenn ausgelassen, ist der Standardwert für `dstFactor` `"zero"`.

            > [!NOTE]
            > Das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `src1`, `one-minus-src1`, `src1-alpha`, und `one-minus-src1-alpha` Blendfaktor-Operationen erfolgreich verwendet werden können. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Ziel-Blendfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die auf die Ziel-Anhang-Komponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn ausgelassen, ist der Standardwert für `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der den Blendfaktor-Operation definiert, der auf Werte aus dem Fragment-Shader ausgeführt wird. Mögliche Werte sind dieselben wie für `dstFactor`. Wenn ausgelassen, ist der Standardwert für `srcFactor` `"one"`.

        > [!NOTE]
        > Für eine detaillierte Erklärung der durch jeden `dstFactor`/`srcFactor` und `operation` enumerierten Wert definierten Algorithmen siehe den Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`

      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Sehen Sie sich den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation an, um alle verfügbaren `format` Werte zu sehen.

        > [!NOTE]
        > Damit die `r32float`, `rg32float`, und `rgba32float` Formate zusammen mit [Blending](#blend) verwendet werden können, muss das `float32-blendable` [Feature](/de/docs/Web/API/GPUSupportedFeatures) auf dem Gerät verfügbar sein.

    - `writeMask` {{optional_inline}}

      - : Einer oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, die auf den Farbzielstatus angewendet wird. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn ausgelassen, ist der Standardwert für `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem Werte mit Pipe-Symbolen getrennt werden, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample` Objektstruktur

Das `multisample` Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein Boolean. Ein Wert von `true` zeigt an, dass der Alpha-Kanal eines Fragments verwendet werden sollte, um eine Probenabdeckmask zu erzeugen. Wenn ausgelassen, beträgt der Standardwert für `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Proben pro Pixel definiert. Die Pipeline wird nur mit Anhangstexturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel sein, die übereinstimmende `sampleCounts` haben (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Wenn ausgelassen, beträgt der Standardwert für `count` 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Wenn ausgelassen, beträgt der Standardwert für `mask` `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment` Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufrufe angegeben, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### `primitive` Objektstruktur

Das `primitive` Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygon-Orientierung ausgesiebt wird, falls vorhanden. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden ausgesiebt.
    - `"front"`: Vorderseitige Polygone werden ausgesiebt.
    - `"none"`: Keine Polygone werden ausgesiebt.

    Wenn ausgelassen, lautet der Standardwert für `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn angegebener Reihenfolge vorliegen.
    - `"cw"`: Polygone mit Scheitelpunkten, deren Framebuffer-Koordinaten in Uhrzeigersinn angegebener Reihenfolge vorliegen.

    Wenn ausgelassen, lautet der Standardwert für `frontFace` `"ccw"`.

    > [!NOTE] > `frontFace` und `cullMode` haben keine Wirkung auf `"point-list"`, `"line-list"`, oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Primärtstartwert bei Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primärtstartwert gibt an, welche Indexwerte darauf hinweisen, dass ein neues Primät gestartet werden sollte, statt das Streifen mit den zuvor indizierten Scheitelpunkten fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Byte-Größe von 2 und einen Primärtstartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Byte-Größe von 4 und einen Primärtstartwert von `0xFFFFFFFF` an.

    GPU-Primitivzustände, die eine Streifen-Primitivtopologie angeben, müssen ein Streifen-Indexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), damit der verwendete Primärtstartwert zum Zeitpunkt der Erstellung der Pipeline bekannt ist. Pipelines mit Listen-Primitivtopologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat` Wert angeben. Sie verwenden stattdessen das Indexformat, das z.B. an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indexiertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitivs definiert, das aus den angegebenen `vertex` Eingaben konstruiert werden soll. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar von zwei Scheitelpunkten definiert ein Linien-Primär.
    - `"line-strip"`: Jeder Scheitelpunkt nach dem ersten definiert ein Linien-Primär zwischen ihm und dem vorherigen Scheitelpunkt.
    - `"point-list"`: Jeder Scheitelpunkt definiert ein Punkt-Primär.
    - `"triangle-list"`: Jedes aufeinanderfolgende Tripel von drei Scheitelpunkten definiert ein Dreieck-Primär.
    - `"triangle-strip"`: Jeder Scheitelpunkt nach den ersten beiden definiert ein Dreieck-Primär zwischen ihm und den beiden vorherigen Scheitelpunkten.

    Wenn ausgelassen, lautet der Standardwert für `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}

  - : Ein Boolean. Ein Wert von `true` zeigt an, dass die Tiefen-Clipping deaktiviert ist. Wenn ausgelassen, lautet der Standardwert für `unclippedDepth` `false`. Beachten Sie, dass zur Steuerung des Tiefen-Clippings das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) auf dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert werden muss.

    > [!NOTE]
    > Das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, damit die `unclippedDepth` Eigenschaft erfolgreich verwendet werden kann. Andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt.

### `vertex` Objektstruktur

Das `vertex` Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen mit der Struktur `(id, value)`, die Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellt. Diese verhalten sich wie [geordnete Maps](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Records verwendet wird, und `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig davon, welche Konstante Sie überschreiben möchten, kann `id` in Form der numerischen ID der Konstante vorliegen, falls eine angegeben ist, oder sonst der Bezeichnername der Konstante.

    Ein Codebeispiel, das Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte folgendermaßen aussehen:

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

  - : Der Name der Funktion im `module`, die diese Phase verwenden wird, um ihre Arbeit zu verrichten. Die entsprechende Shader-Funktion muss das `@vertex` Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie in der [Einstiegspunkt-Deklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).

    Sie können die `entryPoint` Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex` Attribut enthält — der Browser wird dies als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt feststellen kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ist ungültig.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/) Code enthält, den diese programmierbare Phase ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, von denen jedes das erwartete Layout eines Vertex-Puffers darstellt, das in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertexen) im Puffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertexes angibt. Alle verfügbaren Werte sehen Sie in der [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat) Definition der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Position, die diesem Attribut zugeordnet ist und mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations) Attribut übereinstimmen wird, das im WGSL-Code des zugehörigen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), das in der `module` Eigenschaft des `vertex` Objekts referenziert wird, deklariert ist.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertexe oder Instanzen darstellen. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` weitergeschoben.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex um `arrayStride` weitergeschoben und zwischen Instanzen zurückgesetzt.

        Wenn ausgelassen, lautet der Standardwert für `stepMode` `"vertex"`.

### Rückgabewert

Ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objektinstanz.

### Validierung

Die folgenden Kriterien müssen bei einem Aufruf von **`createRenderPipeline()`** erfüllt sein, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) erzeugt und ein ungültiges [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) Objekt zurückgegeben:

- Für `depthStencil` Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format) Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h. wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"`, oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"`, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment` Objekte:
  - `targets.length` ist kleiner oder gleich dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits).
  - Für jedes `target` ist das numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn einer der verwendeten Blendfaktor-Operationen den Alpha-Kanal der Quelle verwendet (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h. es muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha`, oder `one-minus-src1-alpha` Blendfaktor-Operationen verwendet werden, ist das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Fragment-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive` Objekte:
  - Wenn die `unclippedDepth` Eigenschaft verwendet wird, ist das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex` Objekte:
  - Wenn die `entryPoint` Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertex-Shader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) enthalten viele weitere Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptor-Objekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) über einen `createRenderPipeline()`-Aufruf zu erstellen.

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

- Die [WebGPU-API](/de/docs/Web/API/WebGPU_API)
