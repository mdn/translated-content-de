---
title: "GPUDevice: createRenderPipeline()-Methode"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: dad9fbcaff755c9bf81808e294ce239028b681f5
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}{{AvailableInWorkers}}

Die **`createRenderPipeline()`**-Methode des [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Interfaces erstellt ein [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline), das die Vertex- und Fragment-Shader-Stufen kontrollieren kann und in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [`depthStencil`-Objektstruktur](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verschiebungen beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [`fragment`-Objektstruktur](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und ihre Ausgangsfarben beschreibt. Falls kein Fragment-Shader-Einstiegspunkt definiert ist, wird die Pipeline keine Farb-Anhangsausgaben erzeugen, sie führt jedoch weiterhin Rasterisierung durch und erzeugt Tiefenwerte basierend auf der Vertex-Position-Ausgabe. Tiefenprüfung und Stencil-Operationen können weiterhin verwendet werden.
    - `label` {{optional_inline}}
      - : Ein String, der eine Bezeichnung bereitstellt, die verwendet werden kann, um das Objekt zu identifizieren, beispielsweise in [`GPUError`](/de/docs/Web/API/GPUError)-Meldungen oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekt, erstellt mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout), das es der GPU ermöglicht, im Voraus zu ermitteln, wie die Pipeline am effizientesten ausgeführt werden kann.
        - Ein String mit dem Wert `"auto"`, welcher dazu führt, dass die Pipeline ein implizites Bindgruppen-Layout basierend auf den im Shader-Code definierten Bindungen generiert. Wenn `"auto"` verwendet wird, können die generierten Bindgruppen-Layouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [`multisample`-Objektstruktur](#multisample_object_structure)), das beschreibt, wie die Pipeline mit einem Renderdurchgangs-Multisample-Anhängen interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [`primitive`-Objektstruktur](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitiven aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [`vertex`-Objektstruktur](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und deren Eingabepuffer-Layouts beschreibt.

### `depthStencil`-Objektstruktur

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die einen konstanten Tiefen-Versatz darstellt, der zu jedem Fragment hinzugefügt wird. Falls weggelassen, wird `depthBias` auf 0 gesetzt.
    > [!NOTE]
    > Die Eigenschaften `depthBias`, `depthBiasClamp` und `depthBiasSlopeScale` müssen auf `0` gesetzt werden für Linien- und Punkt-Topologien, d.h., wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die zurückgegebene [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die den maximalen Tiefen-Versatz eines Fragments darstellt. Falls weggelassen, wird `depthBiasClamp` auf 0 gesetzt.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die einen Tiefen-Versatz darstellt, der mit der Neigung des Fragments skaliert wird. Falls weggelassen, wird `depthBiasSlopeScale` auf 0 gesetzt.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragment-Tiefen gegen `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen immer fehl.
    - `"less"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er nicht gleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Setzt man ihn auf `false`, so kann sie dies nicht.
- `format`
  - : Ein enumerierter Wert, der das Format des `depthStencilAttachment` spezifiziert, mit dem die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für rückwärts gerichtete Primitiven durchgeführt werden. Seine Eigenschaften können beinhalten:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Falls weggelassen, wird `compare` auf `"always"` gesetzt.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Tiefenvergleich, wie durch `depthCompare` beschrieben, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Render-Status-Stencil-Wert, begrenzt ihn auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Render-Status-Stencil-Wert, umwickelt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`'s Stencil-Aspekts, wenn der Wert unter 0 fällt.
        - `"invert"`: Bitweises Umkehren des aktuellen Render-Status-Stencil-Werts.
        - `"increment-clamp"`: Erhöht den aktuellen Render-Status-Stencil-Wert, begrenzt ihn auf den maximal darstellbaren Wert des `depthStencilAttachment`'s Stencil-Aspekts.
        - `"increment-wrap"`: Erhöht den aktuellen Render-Status-Stencil-Wert, umwickelt ihn auf null, wenn der Wert den maximal darstellbaren Wert des `depthStencilAttachment`'s Stencil-Aspekts überschreitet.
        - `"keep"`: Beibehalten des aktuellen Stencil-Wertes.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Render-Status-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Falls weggelassen, wird `depthFailOp` auf `"keep"` gesetzt.

        > [!NOTE]
        > Der Render-Status-Stencil-Wert wird zu Beginn eines Renderdurchgangs auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, wie durch `compare` beschrieben, fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die durchgeführt wird, wenn der Fragment-Stencil-Vergleichstest, wie durch `compare` beschrieben, besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und -Operationen für vorwärts gerichtete Primitiven durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencil-Wert-Bits beim Durchführen von Stencil-Vergleichstests gelesen werden. Falls weggelassen, wird `stencilReadMask` auf `0xFFFFFFFF` gesetzt.
- `stencilWriteMask` {{optional_inline}}
  - : Eine Bitmaske, die steuert, welche `depthStencilAttachment`-Stencil-Wert-Bits beim Durchführen von Stencil-Operationen geschrieben werden. Falls weggelassen, wird `stencilWriteMask` auf `0xFFFFFFFF` gesetzt.

> **Hinweis:** `depthStencilAttachment`-Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufe spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Rendering-Durchgang auszuführen.

### `fragment`-Objektstruktur

Das `fragment`-Objekt enthält ein Array von Objekten, die jeweils die folgenden Eigenschaften enthalten können:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen, mit der Struktur `(id, value)`, welche Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und die `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig von der Konstante, die Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder andernfalls der Identifier-Name der Konstante.

    Ein Codeschnipsel, der Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@fragment`-Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt ermitteln kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `targets`

  - : Ein Array von Objekten, die Farbstaaten repräsentieren und Konfigurationsdetails für die vom Fragment-Shader-Stufe ausgegebenen Farben darstellen. Diese Objekte können folgende Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanal-Wert.
        - `color`
          - : Beschreibt den Farbwert.

        `alpha` und `color` übernehmen beide ein Objekt als Wert, das die folgenden Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Durchführungsoperation des Mischfaktores für Werte vom Ziel-Anhang definiert. Mögliche Werte sind:

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
            > Das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die `src1`, `one-minus-src1`, `src1-alpha` und `one-minus-src1-alpha` Mischfaktor-Operationen erfolgreich nutzen zu können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um den Quell- und Zielmischfaktor zu kombinieren, um die endgültigen Werte zu berechnen, die an die Zielanhangskomponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Falls weggelassen, wird `operation` auf `"add"` gesetzt.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Durchführungsoperation des Mischfaktors für Werte vom Fragment-Shader definiert. Mögliche Werte sind die gleichen wie für `dstFactor`. Falls weggelassen, wird `srcFactor` auf `"one"` gesetzt.

        > [!NOTE]
        > Für eine detaillierte Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation` enumerierten Wert definiert sind, siehe den [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) Abschnitt der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben spezifiziert. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Eins oder mehrere {{Glossary("bitwise_flags", "bitweise Flags")}}, die die Schreibmaske definieren, welche auf den Farbanhangszustand angewendet werden. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Falls weggelassen, wird `writeMask` auf `GPUColorWrite.ALL` gesetzt.

        Beachten Sie, dass mehrere Flags angegeben werden können, indem sie durch Pipesymbole getrennt werden, z.B.:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### `multisample`-Objektstruktur

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Probenabdeckungmaske zu erzeugen. Falls weggelassen, wird `alphaToCoverageEnabled` auf `false` gesetzt.
- `count` {{optional_inline}}

  - : Eine Nummer, die die Anzahl der Proben pro Pixel definiert. Die Pipeline wird nur mit Anhangs-Texturen (`colorAttachment`s und `depthStencilAttachment`s) mit übereinstimmenden `sampleCounts` kompatibel sein (siehe [`GPUTexture`](/de/docs/Web/API/GPUTexture)).

    Falls weggelassen, wird `count` auf 1 gesetzt.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Proben geschrieben werden. Falls weggelassen, wird `mask` auf `0xFFFFFFFF` gesetzt.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment`-Werte werden während der [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufrufe spezifiziert, wenn die [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) tatsächlich verwendet wird, um einen Rendering-Durchgang auszuführen.

### `primitive`-Objektstruktur

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygonorientierung, falls vorhanden, gekürzt wird. Mögliche Werte sind:

    - `"back"`: Rückwärts gerichtete Polygone werden gekürzt.
    - `"front"`: Vorwärts gerichtete Polygone werden gekürzt.
    - `"none"`: Keine Polygone werden gekürzt.

    Falls weggelassen, wird `cullMode` auf `"none"` gesetzt.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorwärts gerichtet betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten in gegen den Uhrzeigersinn geordnet sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im Uhrzeigersinn geordnet sind.

    Falls weggelassen, wird `frontFace` auf `"ccw"` gesetzt.

    > [!NOTE] > `frontFace` und `cullMode` haben keinen Effekt bei `"point-list"`, `"line-list"` oder `"line-strip"` Topologien.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Primärrückfahrwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primärrückfahrwert spezifiziert, welcher Indexwert anzeigt, dass ein neues Primär beginnen sollte, anstatt mit den vorher indexierten Vertices fortzufahren. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Byte-Größe von 2 und einen Primärrückfahrwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Byte-Größe von 4 und einen Primärrückfahrwert von `0xFFFFFFFF` an.

    GPU-Primitive-Zustände, die eine Streifenprimär-Topologie spezifizieren, müssen ein Streifenindexformat spezifizieren, wenn sie für indexierte Zeichnungen verwendet werden (z.B. über [`GPURenderPassEncoder.drawIndexed()`](/de/docs/Web/API/GPURenderPassEncoder/drawIndexed)), sodass der Primärrückfahrwert, der verwendet wird, zum Zeitpunkt der Pipelinenerstellung bekannt ist. Pipelines mit Listen-Primär-Topologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert spezifizieren. Stattdessen verwenden sie das Indexformat, das zum Beispiel an [`GPURenderPassEncoder.setIndexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setIndexBuffer) übergeben wird, wenn indexiertes Rendering durchgeführt wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primärs definiert, das aus den angegebenen `vertex`-Eingaben konstruiert wird. Mögliche Werte sind:

    - `"line-list"`: Jeder aufeinanderfolgende Paar von zwei Vertices definiert ein Linienprimär.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimär zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimär.
    - `"triangle-list"`: Jeder aufeinanderfolgende Drilling aus drei Vertices definiert ein Dreiecksprimär.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecksprimär zwischen ihm und den vorherigen beiden Vertices.

    Falls weggelassen, wird `topology` auf `"triangle-list"` gesetzt.

- `unclippedDepth` {{optional_inline}}

  - : Ein boolescher Wert. Ein Wert von `true` gibt an, dass die Tiefenbeschneidung deaktiviert ist. Falls weggelassen, wird `unclippedDepth` auf `false` gesetzt. Beachten Sie, dass zur Steuerung der Tiefenbeschneidung das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) im [`GPUDevice`](/de/docs/Web/API/GPUDevice) aktiviert sein muss.

    > [!NOTE]
    > Das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) muss aktiviert sein, um die `unclippedDepth`-Eigenschaft erfolgreich verwenden zu können. Wenn nicht, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert.

### `vertex`-Objektstruktur

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Sequenz von Record-Typen, mit der Struktur `(id, value)`, welche Override-Werte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue), darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der verwendet wird, um das Record zu identifizieren oder auszuwählen, und die `constant` ist ein enumerierter Wert, der ein WGSL darstellt.

    Abhängig von der Konstante, die Sie überschreiben möchten, kann `id` die Form der numerischen ID der Konstante annehmen, falls eine angegeben ist, oder andernfalls der Identifier-Name der Konstante.

    Ein Codeschnipsel, der Override-Werte für mehrere überschreibbare Konstanten bereitstellt, könnte so aussehen:

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

  - : Der Name der Funktion im `module`, die diese Stufe verwenden wird, um ihre Arbeit auszuführen. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Siehe [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl) für weitere Informationen.

    Sie können die `entryPoint`-Eigenschaft weglassen, wenn Ihr Shader-Code eine einzelne Funktion mit dem `@vertex`-Attribut enthält — der Browser wird diese als Standard-Einstiegspunkt verwenden. Wenn `entryPoint` weggelassen wird und der Browser keinen Standard-Einstiegspunkt ermitteln kann, wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und die resultierende [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) wird ungültig sein.

- `module`
  - : Ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, den diese programmierbare Stufe ausführen wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers repräsentieren, das in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z.B. Vertices) im Puffer darstellt.
    - `attributes`
      - : Ein Array von Objekten, das das Layout der Vertex-Attribute innerhalb jeder Struktur definiert. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex spezifiziert. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Die numerische Lage, die mit diesem Attribut assoziiert ist, welche mit einem [`@location`](https://gpuweb.github.io/gpuweb/wgsl/#input-output-locations)-Attribut im WGSL-Code des assoziierten [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) übereinstimmen wird, das in der `vertex`-Objekt-`module`-Eigenschaft referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen im Puffer Vertices oder Instanzen repräsentieren. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz um `arrayStride` erhöht.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex um `arrayStride` erhöht und zwischen Instanzen zurückgesetzt.

        Falls weggelassen, wird `stepMode` auf `"vertex"` gesetzt.

### Rückgabewert

Ein [GPURenderPipeline](/de/docs/Web/API/GPURenderPipeline)-Objektinstanz.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein [`GPUValidationError`](/de/docs/Web/API/GPUValidationError) generiert und ein ungültiges [GPURenderPipeline](/de/docs/Web/API/GPURenderPipeline)-Objekt wird zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Die Eigenschaften [`depthBias`](#depthbias), [`depthBiasClamp`](#depthbiasclamp) und [`depthBiasSlopeScale`](#depthbiasslopescale) sind auf <code>0</code> für Linien- und Punkt-Topologien gesetzt, d.h., wenn [`topology`](#topology) auf `"line-list"`, `"line-strip"` oder `"point-list"` gesetzt ist.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn `stencilFront` oder `stencilBack`-Eigenschaften nicht auf ihren Standardwerten sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` [Limit](/de/docs/Web/API/GPUSupportedLimits) des [GPUDevice](/de/docs/Web/API/GPUDevice).
  - Für jedes `target` ist das numerische Äquivalent des `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktor-Operationen den Quell-Alphakanal verwendet (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alphakanal (d.h., es muss ein `vec4` sein).
  - Wenn die `src1`, `one-minus-src1`, `src1-alpha` oder `one-minus-src1-alpha` Mischfaktor-Operationen verwendet werden, ist das `dual-source-blending` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzige Fragmentshader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.
- Für `primitive`-Objekte:
  - Wenn die `unclippedDepth`-Eigenschaft verwendet wird, ist das `depth-clip-control` [Feature](/de/docs/Web/API/GPUSupportedFeatures) aktiviert.
- Für `vertex`-Objekte:
  - Wenn die `entryPoint`-Eigenschaft weggelassen wird, enthält der Shader-Code eine einzelne Vertexshader-Einstiegspunktfunktion, die der Browser als Standard-Einstiegspunkt verwenden kann.

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten viele weitere Beispiele.

### Einfaches Beispiel

Unser [grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskripturobjekts, das dann verwendet wird, um eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) mittels eines `createRenderPipeline()`-Aufrufs zu erstellen.

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
