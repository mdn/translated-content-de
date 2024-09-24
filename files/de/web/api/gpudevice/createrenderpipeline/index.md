---
title: "GPUDevice: Methode createRenderPipeline()"
short-title: createRenderPipeline()
slug: Web/API/GPUDevice/createRenderPipeline
l10n:
  sourceCommit: 942bbbe848b4b742a689de970f697d4c5b355bde
---

{{APIRef("WebGPU API")}}{{SeeCompatTable}}{{SecureContext_Header}}

Die Methode **`createRenderPipeline()`** der {{domxref("GPUDevice")}}-Schnittstelle erstellt eine {{domxref("GPURenderPipeline")}}, die die Vertex- und Fragment-Shader-Phasen steuern und in einem {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} verwendet werden kann.

## Syntax

```js-nolint
createRenderPipeline(descriptor)
```

### Parameter

- `descriptor`
  - : Ein Objekt, das die folgenden Eigenschaften enthält:
    - `depthStencil` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `depthStencil`-Objekts](#depthstencil_object_structure)), das Tiefen-Stencil-Eigenschaften einschließlich Tests, Operationen und Verzerrung beschreibt.
    - `fragment` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `fragment`-Objekts](#fragment_object_structure)), das den Fragment-Shader-Einstiegspunkt der Pipeline und deren Ausgabefarben beschreibt. Wenn kein Fragment-Shader-Einstiegspunkt definiert ist, produziert die Pipeline keine Farbausgabe, führt jedoch weiterhin Rasterung durch und erzeugt Tiefenwerte basierend auf der Vertex-Positionsausgabe. Tiefentests und Stencil-Operationen können trotzdem verwendet werden.
    - `label` {{optional_inline}}
      - : Eine Zeichenkette, die eine Kennzeichnung bereitstellt, um das Objekt zu identifizieren, beispielsweise in {{domxref("GPUError")}}-Nachrichten oder Konsolenwarnungen.
    - `layout`
      - : Definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, usw.), die während der Ausführung der Pipeline verwendet werden. Mögliche Werte sind:
        - Ein {{domxref("GPUPipelineLayout")}}-Objekt, erstellt mit {{domxref("GPUDevice.createPipelineLayout()")}}, das der GPU erlaubt, im Voraus die effizienteste Ausführung der Pipeline zu bestimmen.
        - Eine Zeichenkette `"auto"`, die dazu führt, dass die Pipeline automatisch ein implizites Bindungsgrupppenlayout basierend auf in dem Shader-Code definierten Bindungen erstellt. Wenn `"auto"` verwendet wird, können die erzeugten Bindungsgrupppenlayouts nur mit der aktuellen Pipeline verwendet werden.
    - `multisample` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `multisample`-Objekts](#multisample_object_structure)), das beschreibt, wie die Pipeline mit den multisample Anhängen eines Render-Passes interagiert.
    - `primitive` {{optional_inline}}
      - : Ein Objekt (siehe [Struktur des `primitive`-Objekts](#primitive_object_structure)), das beschreibt, wie eine Pipeline Primitive aus ihren Vertex-Eingaben konstruiert und rasterisiert.
    - `vertex`
      - : Ein Objekt (siehe [Struktur des `vertex`-Objekts](#vertex_object_structure)), das den Vertex-Shader-Einstiegspunkt der Pipeline und ihre Eingabepufferlayouts beschreibt.

### Struktur des `depthStencil`-Objekts

Das `depthStencil`-Objekt kann die folgenden Eigenschaften enthalten:

- `depthBias` {{optional_inline}}
  - : Eine Zahl, die eine konstante Tiefenverzerrung darstellt, die zu jedem Fragment hinzugefügt wird. Wenn ausgelassen, ist der Standardwert von `depthBias` 0.
- `depthBiasClamp` {{optional_inline}}
  - : Eine Zahl, die die maximale Tiefenverzerrung eines Fragments angibt. Wenn ausgelassen, ist der Standardwert von `depthBiasClamp` 0.
- `depthBiasSlopeScale` {{optional_inline}}
  - : Eine Zahl, die eine mit der Steigung des Fragments skalierte Tiefenverzerrung darstellt. Wenn ausgelassen, ist der Standardwert von `depthBiasSlopeScale` 0.
- `depthCompare`

  - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die verwendet wird, um Fragmenttiefen gegen die `depthStencilAttachment`-Tiefenwerte zu testen. Mögliche Werte sind:

    - `"never"`: Vergleichstests schlagen nie durch.
    - `"less"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner als der abgetastete Wert ist.
    - `"equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er gleich dem abgetasteten Wert ist.
    - `"less-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er kleiner oder gleich dem abgetasteten Wert ist.
    - `"greater"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer als der abgetastete Wert ist.
    - `"not-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er ungleich dem abgetasteten Wert ist.
    - `"greater-equal"`: Ein gegebener Wert besteht den Vergleichstest, wenn er größer oder gleich dem abgetasteten Wert ist.
    - `"always"`: Vergleichstests bestehen immer.

- `depthWriteEnabled`
  - : Ein Boolean, der bestimmt, ob die {{domxref("GPURenderPipeline")}} `depthStencilAttachment`-Tiefenwerte nach der Erstellung ändern kann. Bei `false` bedeutet dies, dass sie es nicht kann.
- `format`
  - : Ein enumerierter Wert, der das `depthStencilAttachment`-Format angibt, mit dem die {{domxref("GPURenderPipeline")}} kompatibel sein wird. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
- `stencilBack` {{optional_inline}}

  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für rückseitige Primitive durchgeführt werden. Seine Eigenschaften können enthalten:

    - `compare` {{optional_inline}}
      - : Ein enumerierter Wert, der die Vergleichsoperation angibt, die beim Testen von Fragmenten gegen `depthStencilAttachment`-Stencil-Werte verwendet wird. Mögliche Werte sind die gleichen wie für die `depthCompare`-Eigenschaft; siehe oben. Wenn ausgelassen, ist der Standard von `compare` `"always"`.
    - `depthFailOp` {{optional_inline}}

      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der Tiefenvergleich des Fragments, beschrieben durch `depthCompare`, fehlschlägt. Mögliche Werte sind:

        - `"decrement-clamp"`: Verringert den aktuellen Renderzustands-Stencil-Wert unter Begrenzung auf 0.
        - `"decrement-wrap"`: Verringert den aktuellen Renderzustands-Stencil-Wert, wobei er auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` umschlägt, wenn der Wert unter 0 geht.
        - `"invert"`: Bitweise Invertierung des aktuellen Renderzustands-Stencil-Werts.
        - `"increment-clamp"`: Erhöht den aktuellen Renderzustands-Stencil-Wert, unter Begrenzung auf den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment`.
        - `"increment-wrap"`: Erhöht den aktuellen Renderzustands-Stencil-Wert, wobei er auf null umschlägt, wenn der Wert den maximal darstellbaren Wert des Stencil-Aspekts des `depthStencilAttachment` übersteigt.
        - `"keep"`: Beibehalten des aktuellen Stencil-Werts.
        - `"replace"`: Setzt den Stencil-Wert auf den aktuellen Renderzustands-Stencil-Wert.
        - `"zero"`: Setzt den Stencil-Wert auf 0.

        Wenn ausgelassen, ist der Standard von `depthFailOp` `"keep"`.

        > [!NOTE]
        > Der Renderzustands-Stencil-Wert wird zu Beginn eines Render-Passes auf 0 initialisiert.

    - `failOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der in `compare` beschriebene Stencil-Vergleichstest des Fragments fehlschlägt. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.
    - `passOp` {{optional_inline}}
      - : Ein enumerierter Wert, der die Stencil-Operation angibt, die ausgeführt wird, wenn der in `compare` beschriebene Stencil-Vergleichstest des Fragments besteht. Mögliche und Standardwerte sind die gleichen wie für `depthFailOp`.

- `stencilFront` {{optional_inline}}
  - : Ein Objekt, das definiert, wie Stencil-Vergleiche und Operationen für vorderseitige Primitive durchgeführt werden. Seine Eigenschaften sind die gleichen wie für `stencilBack`.
- `stencilReadMask` {{optional_inline}}
  - : Ein Bitmaske, die steuert, welche Bits des `depthStencilAttachment`-Stencil-Werts gelesen werden, wenn Stencil-Vergeichstests durchgeführt werden. Wenn ausgelassen, ist der Standard von `stencilReadMask` `0xFFFFFFFF`.
- `stencilWriteMask` {{optional_inline}}
  - : Ein Bitmaske, die steuert, welche Bits des `depthStencilAttachment`-Stencil-Werts geschrieben werden, wenn Stencil-Operationen durchgeführt werden. Wenn ausgelassen, ist der Standard von `stencilWriteMask` `0xFFFFFFFF`.

> **Hinweis:** Die `depthStencilAttachment`-Werte werden während der {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufe angegeben, wenn die {{domxref("GPURenderPipeline")}} tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `fragment`-Objekts

Das `fragment`-Objekt enthält ein Array von Objekten, von denen jedes die folgenden Eigenschaften enthalten kann:

- `constants` {{optional_inline}}

  - : Eine Folge von Datensatztypen mit der Struktur `(id, value)`, die Überschreibewerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Abhängig von der konstante, die Sie überschreiben möchten, kann die `id` die numerische ID der Konstanten sein, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet, das Überschreibewerte für mehrere überschreibbare Konstanten bereitstellt, könnte wie folgt aussehen:

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
  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@fragment`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
- `module`
  - : Ein {{domxref("GPUShaderModule")}}-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, der von dieser programmierbaren Phase ausgeführt wird.
- `targets`

  - : ein Array von Objekten, die Farbzustände repräsentieren und Konfigurationsdetails für die von der Fragment-Shader-Phase ausgegebenen Farben darstellen. Diese Objekte können die folgenden Eigenschaften enthalten:

    - `blend` {{optional_inline}}

      - : Ein Objekt, das einen Mischmodus beschreibt, der auf die Ausgabefarbe angewendet wird. `blend` hat zwei Eigenschaften:

        - `alpha`
          - : Beschreibt den Alphakanal-Wert.
        - `color`
          - : Beschreibt den Farbwert.

        Sowohl `alpha` als auch `color` nehmen ein Objekt als Wert, das folgende Eigenschaften enthalten kann:

        - `dstFactor` {{optional_inline}}

          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Zielanhang angewendet werden soll. Mögliche Werte sind:

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

            Wenn ausgelassen, ist der Standard von `dstFactor` `"zero"`.

        - `operation` {{optional_inline}}

          - : Ein enumerierter Wert, der den Algorithmus definiert, der verwendet wird, um Quell- und Zielmischfaktoren zu kombinieren, um die endgültigen Werte zu berechnen, die in die Zielanhangskomponenten geschrieben werden. Mögliche Werte sind:

            - `"add"`
            - `"max"`
            - `"min"`
            - `"reverse-subtract"`
            - `"subtract"`

            Wenn ausgelassen, ist der Standard von `operation` `"add"`.

        - `srcFactor` {{optional_inline}}
          - : Ein enumerierter Wert, der die Mischfaktoroperation definiert, die auf Werte aus dem Fragment-Shader angewendet wird. Mögliche Werte sind die gleichen wie für `dstFactor`. Wenn ausgelassen, ist der Standard von `srcFactor` `"one"`.

        > [!NOTE]
        > Eine ausführliche Erklärung der Algorithmen, die durch jeden `dstFactor`/`srcFactor` und `operation` enumerierten Wert definiert sind, finden Sie im Abschnitt [Blend State](https://gpuweb.github.io/gpuweb/#blend-state) der Spezifikation.

    - `format`
      - : Ein enumerierter Wert, der das erforderliche Format für Ausgabefarben angibt. Siehe den Abschnitt [Texturformate](https://gpuweb.github.io/gpuweb/#enumdef-gputextureformat) der Spezifikation für alle verfügbaren `format`-Werte.
    - `writeMask` {{optional_inline}}

      - : Eine oder mehr {{glossary("bitweise Flags")}} definieren die Schreibmaske, die auf den Farbzielzustand anzuwenden ist. Mögliche Flag-Werte sind:

        - `GPUColorWrite.RED`
        - `GPUColorWrite.GREEN`
        - `GPUColorWrite.BLUE`
        - `GPUColorWrite.ALPHA`
        - `GPUColorWrite.ALL`

        Wenn ausgelassen, ist der Standard von `writeMask` `GPUColorWrite.ALL`.

        Beachten Sie, dass mehrere Flags durch Trennen der Werte mit Pipesymbolen angegeben werden können, zum Beispiel:

        ```js
        writeMask: GPUColorWrite.RED | GPUColorWrite.ALPHA;
        ```

### Struktur des `multisample`-Objekts

Das `multisample`-Objekt kann die folgenden Eigenschaften enthalten:

- `alphaToCoverageEnabled` {{optional_inline}}
  - : Ein Boolean. Ein Wert von `true` gibt an, dass der Alphakanal eines Fragments verwendet werden sollte, um eine Sample-Abdeckungsmaske zu erzeugen. Wenn ausgelassen, ist der Standard von `alphaToCoverageEnabled` `false`.
- `count` {{optional_inline}}

  - : Eine Zahl, die die Anzahl der Samples pro Pixel definiert. Die Pipeline ist nur mit Anhangstexturen (`colorAttachment`s und `depthStencilAttachment`s) kompatibel, die mit `sampleCount`s (siehe {{domxref("GPUTexture")}}) übereinstimmen.

    Wenn ausgelassen, ist der Standard von `count` 1.

- `mask` {{optional_inline}}
  - : Eine Bitmaske, die bestimmt, welche Samples geschrieben werden. Wenn ausgelassen, ist der Standard von `mask` `0xFFFFFFFF`.

> **Hinweis:** `colorAttachment` und `depthStencilAttachment`-Werte werden während der {{domxref("GPUCommandEncoder.beginRenderPass()")}}-Aufrufe angegeben, wenn die {{domxref("GPURenderPipeline")}} tatsächlich verwendet wird, um einen Render-Pass durchzuführen.

### Struktur des `primitive`-Objekts

Das `primitive`-Objekt kann die folgenden Eigenschaften enthalten:

- `cullMode` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygon-Orientierung, falls vorhanden, entfernt wird. Mögliche Werte sind:

    - `"back"`: Rückseitige Polygone werden entfernt.
    - `"front"`: Vorderseitige Polygone werden entfernt.
    - `"none"`: Keine Polygone werden entfernt.

    Wenn ausgelassen, ist der Standard von `cullMode` `"none"`.

- `frontFace` {{optional_inline}}

  - : Ein enumerierter Wert, der definiert, welche Polygone als vorderseitig betrachtet werden. Mögliche Werte sind:

    - `"ccw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten gegen den Uhrzeigersinn angegeben sind.
    - `"cw"`: Polygone mit Vertices, deren Framebuffer-Koordinaten im Uhrzeigersinn angegeben sind.

    Wenn ausgelassen, ist der Standard von `frontFace` `"ccw"`.

- `stripIndexFormat` {{optional_inline}}

  - : Ein enumerierter Wert, der das Indexpufferformat und den Primitive-Neustartwert im Fall von Pipelines mit Streifentopologien (`"line-strip"` oder `"triangle-strip"`) bestimmt. Der Primitive-Neustartwert gibt an, welcher Indexwert angibt, dass ein neues Primitive gestartet werden soll, anstatt die Streifenkonstruktion mit den vorherigen indizierten Vertices fortzusetzen. Mögliche Werte sind:

    - `"uint16"`: Gibt eine Bytegröße von 2 und einen Primitive-Neustartwert von `0xFFFF` an.
    - `"uint32"`: Gibt eine Bytegröße von 4 und einen Primitive-Neustartwert von `0xFFFFFFFF` an.

    GPU-Primitive-Zustände, die eine Streifenprimitive-Topologie angeben, müssen ein Streifenindexformat angeben, wenn sie für indizierte Zeichnungen verwendet werden (zum Beispiel über {{domxref("GPURenderPassEncoder.drawIndexed()")}}), damit der Primitive-Neustartwert, der verwendet wird, zum Zeitpunkt der Pipeline-Erstellung bekannt ist. Pipelines mit Listen-Primitivtopologien (`"line-list"`, `"point-list"`, oder `"triangle-list"`) sollten keinen `stripIndexFormat`-Wert angeben. Stattdessen wird das Indexformat verwendet, das zum Beispiel an {{domxref("GPURenderPassEncoder.setIndexBuffer()")}} beim indizierten Rendering übergeben wird.

- `topology` {{optional_inline}}

  - : Ein enumerierter Wert, der den Typ des Primitives definiert, der aus den angegebenen `vertex`-Eingaben konstruiert wird. Mögliche Werte sind:

    - `"line-list"`: Jedes aufeinanderfolgende Paar zwei Vertices definiert ein Linienprimitive.
    - `"line-strip"`: Jeder Vertex nach dem ersten definiert ein Linienprimitive zwischen ihm und dem vorherigen Vertex.
    - `"point-list"`: Jeder Vertex definiert ein Punktprimitive.
    - `"triangle-list"`: Jedes aufeinanderfolgende Tripel aus drei Vertices definiert ein Dreiecksprimitive.
    - `"triangle-strip"`: Jeder Vertex nach den ersten beiden definiert ein Dreiecksprimitive zwischen ihm und den beiden vorherigen Vertices.

    Wenn ausgelassen, ist der Standard von `topology` `"triangle-list"`.

- `unclippedDepth` {{optional_inline}}
  - : Ein Boolean. Ein Wert von `true` gibt an, dass das Tiefen-Clipping deaktiviert ist. Wenn ausgelassen, ist der Standard von `unclippedDepth` `false`. Beachten Sie, dass zur Steuerung des Tiefen-Clippings das `depth-clip-control` {{domxref("GPUSupportedFeatures", "feature", "", "nocode")}} im {{domxref("GPUDevice")}} aktiviert sein muss.

> **Hinweis:** `frontFace` und `cullMode` haben keinen Effekt auf `"point-list"`, `"line-list"` oder `"line-strip"`-Topologien.

### Struktur des `vertex`-Objekts

Das `vertex`-Objekt kann die folgenden Eigenschaften enthalten:

- `constants` {{optional_inline}}

  - : Eine Folge von Datensatztypen mit der Struktur `(id, value)`, die Überschreibewerte für [WGSL-Konstanten, die in der Pipeline überschrieben werden können](https://gpuweb.github.io/gpuweb/#typedefdef-gpupipelineconstantvalue) darstellen. Diese verhalten sich wie [geordnete Karten](/de/docs/Web/JavaScript/Reference/Global_Objects/Map). In jedem Fall ist `id` ein Schlüssel, der zur Identifizierung oder Auswahl des Datensatzes verwendet wird, und `constant` ist ein enumerierter Wert, der eine WGSL darstellt.

    Abhängig von der konstante, die Sie überschreiben möchten, kann die `id` die numerische ID der Konstanten sein, wenn eine angegeben ist, oder andernfalls der Bezeichnername der Konstante.

    Ein Code-Snippet, das Überschreibewerte für mehrere überschreibbare Konstanten bereitstellt, könnte wie folgt aussehen:

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
  - : Der Name der Funktion im `module`, die diese Phase zur Ausführung ihrer Arbeit verwenden wird. Die entsprechende Shader-Funktion muss das `@vertex`-Attribut haben, um als dieser Einstiegspunkt identifiziert zu werden. Weitere Informationen finden Sie unter [Einstiegspunktdeklaration](https://gpuweb.github.io/gpuweb/wgsl/#entry-point-decl).
- `module`
  - : Ein {{domxref("GPUShaderModule")}}-Objekt, das den [WGSL](https://gpuweb.github.io/gpuweb/wgsl/)-Code enthält, der von dieser programmierbaren Phase ausgeführt wird.
- `buffers` {{optional_inline}}

  - : Ein Array von Objekten, die jeweils das erwartete Layout eines Vertex-Puffers darstellen, der in der Pipeline verwendet wird. Jedes Objekt kann die folgenden Eigenschaften enthalten:

    - `arrayStride`
      - : Eine Zahl, die den Abstand in Bytes zwischen den verschiedenen Strukturen (z. B. Vertices) innerhalb des Puffers repräsentiert.
    - `attributes`
      - : Ein Array von Objekten, die das Layout der Vertex-Attribute innerhalb jeder Struktur definieren. Jedes Objekt hat die folgenden Eigenschaften:
        - `format`
          - : Ein enumerierter Wert, der das Format des Vertex angibt. Für alle verfügbaren Werte siehe die [`GPUVertexFormat`](https://gpuweb.github.io/gpuweb/#enumdef-gpuvertexformat)-Definition in der Spezifikation.
        - `offset`
          - : Eine Zahl, die den Versatz in Bytes vom Anfang der Struktur zu den Daten für das Attribut angibt.
        - `shaderLocation`
          - : Der numerische Ort, der diesem Attribut zugeordnet ist und {{domxref("GPUShaderModule")}} im `vertex`-Objekt der WGSL-Code entspricht, das in der `module`-Eigenschaft referenziert wird.
    - `stepMode` {{optional_inline}}

      - : Ein enumerierter Wert, der definiert, ob die separaten Strukturen innerhalb des Puffers Vertices oder Instanzen repräsentieren. Mögliche Werte sind:

        - `"instance"`: Jede Struktur ist eine Instanz — die Adresse wird für jede Instanz durch `arrayStride` weitergeführt.
        - `"vertex"`: Jede Struktur ist ein Vertex — die Adresse wird für jedes Vertex durch `arrayStride` weitergeführt und zwischen Instanzen zurückgesetzt.

        Wenn ausgelassen, ist der Standard von `stepMode` `"vertex"`.

### Rückgabewert

Eine Instanz des {{domxref("GPURenderPipeline")}}-Objekts.

### Validierung

Die folgenden Kriterien müssen erfüllt sein, wenn **`createRenderPipeline()`** aufgerufen wird, andernfalls wird ein {{domxref("GPUValidationError")}} erzeugt und ein ungültiges {{domxref("GPURenderPipeline")}}-Objekt zurückgegeben:

- Für `depthStencil`-Objekte:
  - `format` ist ein [`depth-or-stencil`](https://gpuweb.github.io/gpuweb/#depth-or-stencil-format)-Format.
  - Wenn `depthWriteEnabled` `true` ist oder `depthCompare` nicht `"always"` ist, hat `format` eine Tiefenkomponente.
  - Wenn die Eigenschaften von `stencilFront` oder `stencilBack` nicht auf ihre Standardwerte gesetzt sind, hat `format` eine Stencil-Komponente.
- Für `fragment`-Objekte:
  - `targets.length` ist kleiner oder gleich dem `maxColorAttachments` {{domxref("GPUSupportedLimits", "limit", "", "nocode")}} des {{domxref("GPUDevice")}}.
  - Für jedes `target` ist der numerische Äquivalent von `writeMask` kleiner als 16.
  - Wenn eine der verwendeten Mischfaktoroperationen den Alpha-Kanal der Quelle verwenden (z.B. `"src-alpha-saturated"`), hat die Ausgabe einen Alpha-Kanal (d.h. sie muss ein `vec4` sein).

## Beispiele

> [!NOTE]
> Die [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/) bieten noch viele mehr Beispiele.

### Einfaches Beispiel

Unser [einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) bietet ein einfaches Beispiel für die Konstruktion eines gültigen Render-Pipeline-Deskriptorobjekts, das dann zum Erstellen einer {{domxref("GPURenderPipeline")}} über einen `createRenderPipeline()`-Aufruf verwendet wird.

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
