---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU-API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Möglichkeiten revolutioniert hat, seit es um 2011 erstmals erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, der es Webseiten ermöglicht, Render-Berechnungen direkt an die GPU des Geräts zu übergeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu erleichtern. Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL weist jedoch einige grundlegende Probleme auf, die angegangen werden mussten:

- Seit der Einführung von WebGL ist eine neue Generation nativer GPU-APIs erschienen - die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) - die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und daher WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird kontinuierlich mit neuen Funktionen erweitert.
- WebGL ist vollständig um die Verwendung von Grafikzeichnung und deren Rendering in einem Canvas herum aufgebaut. Es kann allgemeine Berechnungen auf der GPU (GPGPU) nicht gut handhaben. Diese Berechnungen werden jedoch für viele verschiedene Anwendungsfälle, z. B. solche, die auf maschinellen Lernmodellen basieren, immer wichtiger.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte und die Nutzung neuer Render-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte, allgemeine Architekturlösung bereitstellt, die mit modernen GPU-APIs kompatibel ist und eine "webbasiert" anmutende Benutzererfahrung bietet. Es unterstützt das Rendern von Grafiken, aber auch GPGPU-Berechnungen als erstklassige Funktion. Das Rendern von einzelnen Objekten ist auf der CPU-Seite deutlich günstiger, und es unterstützt moderne Rendering-Features wie compute-basierte Partikel und Post-Processing-Filter wie Farbeffekte, Schärfen und Tiefenschärfesimulation. Darüber hinaus kann es teure Berechnungen wie Culling und die Transformation von skinnbaren Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Zwischen einer Gerät-GPU und einem Webbrowser, der die WebGPU-API ausführt, gibt es verschiedene Abstraktionsebenen. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Es gibt verschiedene Typen von GPUs:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf einer eigenen Platine befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen erlaubt, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden per Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native Betriebssystem-APIs und Treiber zur Verfügung hat, um mit der GPU zu kommunizieren, auch wenn das obige Diagramm von einem Gerät mit nur einer nativen API/ Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt in Ihrem Code effektiv eine physische GPU und einen Treiber des zugrunde liegenden Systems dar.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzige Web-App auf GPU-Funktionen in einer abgeschotteten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Eine GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen verwendet, möglicherweise auch von vielen Web-Apps. Jede Web-App muss in der Lage sein, WebGPU isoliert aus Sicherheits- und Logikgründen zu nutzen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — bildet die Grundlage, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu) wenn Sie WebGPU-Funktionalitäten innerhalb eines Workers verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen Hochleistungs- oder Energie-sparsamen Adapter anfordern können. Wenn dies nicht angegeben wird, stellt das Gerät den Zugriff auf den Standardadapter zur Verfügung, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als Descriptor bezeichnet), mit dem die genauen Funktionen und Grenzen, die das logische Gerät haben sollte, angegeben werden können. Wenn dies nicht angegeben wird, hat das bereitgestellte Gerät eine angemessene allgemeine Spezifikation, die für die meisten Zwecke ausreichend ist.

Wenn man dies zusammennimmt und einige Feature-Erkennungsprüfungen hinzufügt, könnte der obige Prozess wie folgt erreicht werden:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  const adapter = await navigator.gpu.requestAdapter();
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

## Pipelines und Shader: Struktur einer WebGPU-App

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU ist derzeit in der Lage, zwei Arten von Pipelines zu handhaben:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptphasen:

  - Eine Vertex-Phase, in der ein Vertex-Shader die an die GPU übermittelten Positionsdaten annimmt und verwendet, um eine Reihe von Scheitelpunkten im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Scheitelpunkte werden dann in Primitive wie Dreiecke (der grundlegende Baustein von gerenderten Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jeder auf der Zeichenfläche abdecken sollte.

  - Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes Pixel, das von den vom Vertex-Shader produzierten Primitiven abgedeckt wird, berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter bereitstellen.

- Eine Compute-Pipeline ist für allgemeine Berechnungen zuständig. Eine Compute-Pipeline enthält eine einzige Berechnungsphase, in welcher ein Compute-Shader allgemeine Daten annimmt, diese parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben erwähnten Shader sind Anweisungssätze, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Rust-ähnlichen Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt verschiedene Möglichkeiten, wie Sie eine WebGPU-App gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Erstellen von Shader-Modulen](#erstellen_von_shader-modulen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Abrufen und Konfigurieren des Canvas-Kontexts](#abrufen_und_konfigurieren_des_canvas-kontexts): Holen Sie sich den `webgpu` Kontext eines `<canvas>` Elements und konfigurieren Sie es, um Informationen darüber zu erhalten, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, z. B. eine, die nur Compute-Pipelines verwendet.
3. [Erstellen von Ressourcen, die Ihre Daten enthalten](#erstellen_eines_puffers_und_einschreiben_unserer_dreiecks-daten_darin): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, um von Ihrer App zugegriffen zu werden.
4. [Erstellen von Pipelines](#definieren_und_erstellen_der_render-pipeline): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstrukturen, Bindungen, Shader und Ressourcelayouts, und erstellen Sie dann Pipelines aus ihnen. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht-triviale Apps werden üblicherweise mehrere Pipelines für unterschiedliche Zwecke enthalten.
5. [Durchführen eines Berechnungs-/Rendering-Durchlaufs](#durchführung_eines_render-durchlaufs): Dies umfasst eine Reihe von Unterstufen:
   1. Erstellen Sie einen Befehlscoder, der einen Satz von Befehlen codieren kann, die der GPU zur Ausführung übergeben werden.
   2. Erstellen Sie ein Pass-Coder-Objekt, auf dem Berechnungs-/Render-Befehle erteilt werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchem(n) Puffer(n) die erforderlichen Daten entnommen werden sollen, wie viele Zeichenoperationen ausgeführt werden sollen (bei Render-Pipelines) usw.
   4. Schließen Sie die Befehlsliste ab und kapseln Sie sie in einem Befehlspuffer.
   5. Übermitteln Sie den Befehlspuffer über die Befehlsschlange des logischen Geräts an die GPU.

In den nachstehenden Abschnitten werden wir ein grundlegendes Demo zur Render-Pipeline untersuchen, um Ihnen die Möglichkeit zu geben, zu erkunden, was es erfordert. Später werden wir auch ein [basales Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) untersuchen und darauf eingehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [basalen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen soliden blauen Hintergrund und zeichnen ein Dreieck darauf.

### Erstellen von Shader-Modulen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Phase (`@vertex` Block) akzeptiert einen Datenblock, der eine Position und eine Farbe enthält, positioniert den Scheitelpunkt gemäß der angegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Phase. Die Fragment-Shader-Phase (`@fragment` Block) akzeptiert die Daten von der Vertex-Shader-Phase und färbt den Scheitelpunkt gemäß der angegebenen Farbe.

```js
const shaders = `
struct VertexOut {
  @builtin(position) position : vec4f,
  @location(0) color : vec4f
}

@vertex
fn vertex_main(@location(0) position: vec4f,
               @location(1) color: vec4f) -> VertexOut
{
  var output : VertexOut;
  output.position = position;
  output.color = color;
  return output;
}

@fragment
fn fragment_main(fragData: VertexOut) -> @location(0) vec4f
{
  return fragData.color;
}
`;
```

> [!NOTE]
> In unseren Demos speichern wir unseren Shader-Code in einem Template-Literal, aber Sie können ihn überall dort speichern, von wo aus er leicht als Text abgerufen werden kann, um ihn in Ihr WebGPU-Programm einzuspeisen. Eine andere gängige Praxis besteht darin, Shader in einem {{htmlelement("script")}} Element zu speichern und den Inhalt über [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte Mime-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code der WebGPU zur Verfügung zu stellen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) einfügen, wobei Ihr Shader-Code als Eigenschaft innerhalb eines Deskriptor-Objekts übergeben wird. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Abrufen und Konfigurieren des Canvas-Kontexts

In einer Render-Pipeline müssen wir angeben, wohin die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem sichtbaren `<canvas>`-Element, dann rufen wir [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um den GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Render-Informationen stammen werden, das Format, das die Texturen haben werden, sowie den Alpha-Modus, der beim Rendern von semi-transparenten Texturen verwendet werden soll.

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device: device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

> [!NOTE]
> Die beste Praxis, um das Texturformat zu bestimmen, ist die Verwendung der [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) Methode; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Erstellen eines Puffers und Einschreiben unserer Dreiecks-Daten darin

Als Nächstes versorgen wir unser WebGPU-Programm mit unseren Daten in einer für es nutzbaren Form. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jeden Dreieck-Knoten enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird dieser Puffer-Typ im Speicher gespeichert, der sehr eng mit den Kernen der GPU verknüpft ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher von Prozessen auf dem Host-System, wie dem Browser, nicht direkt verarbeitet werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit es alle Daten enthalten kann, und `VERTEX` und `COPY_DST` Nutzungsflaggen, um anzuzeigen, dass der Puffer als Vertex-Puffer und als Ziel für Kopiervorgänge verwendet werden wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten unsere Daten über eine Mapping-Operation in den `GPUBuffer` einlesen, wie wir es im [Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) verwenden, um Daten vom GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) Komfortmethode, die als Parameter den Puffer annimmt, in den geschrieben werden soll, die Quelldaten, die geschrieben werden sollen, einen Offset-Wert für jeden und die zu schreibende Datenmenge (wir haben die gesamte Länge des Arrays angegeben). Der Browser ermittelt dann die effizienteste Möglichkeit, die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Definieren und Erstellen der Render-Pipeline

Jetzt, da wir unsere Daten in einen Puffer geladen haben, ist der nächste Teil der Einrichtung, unsere Pipeline tatsächlich zu erstellen, um sie für das Rendern bereitzuhalten.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir früher in unserem `vertices`-Array und der Vertex-Shader-Phase gesehen haben — jeder Vertex hat Positions- und Farb-Daten. Beide sind im `float32x4`-Format (was dem WGSL-Typ `vec4<f32>` entspricht), und die Farb-Daten beginnen mit einem Offset von 16 Byte in jedem Vertex. `arrayStride` gibt die Stride an, also die Anzahl von Bytes, aus denen jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro-Vertex abgerufen werden sollen.

```js
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
```

Als nächstes erstellen wir ein Deskriptor-Objekt, das die Konfiguration unserer Render-Pipeline-Stufen angibt. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code zu finden ist (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe fungiert.

Zusätzlich geben wir im Fall der Vertex-Shader-Phase unser `vertexBuffers`-Objekt an, um den erwarteten Status unserer Vertex-Daten bereitzustellen. Und im Fall der Fragment-Shader-Phase geben wir ein Array von Farbzielzuständen an, die das angegebene Rendering-Format angeben (dies entspricht dem in unserer Canvas-Kontextkonfiguration angegebenen Format).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall nur den Typ des Zeichnungsprimitivs angibt, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (ein Beispiel finden Sie in unserer [Grundlegenenden Compute-Pipeline](#grundlegende_compute-pipeline)), die der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt wird. Wir spezifizieren jedoch den `auto`-Wert, der die Pipeline dazu veranlasst, ein implizites Bindungsguppen-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren.

```js
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
```

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) auf Grundlage unseres `pipelineDescriptor`-Objekts erstellen, indem wir ihn als Parameter an einen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Durchführung eines Render-Durchlaufs

Jetzt, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Render-Durchlauf durchführen und etwas auf unser `<canvas>` zeichnen. Um Befehle zu codieren, die später an die GPU erteilt werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, die über einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Render-Durchlauf, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter, dessen einzige obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht zu einer angegebenen Farbe "geleert" werden soll, sobald sie geladen und bevor irgendetwas gezeichnet wird. Das bewirkt den blauen Hintergrund hinter dem Dreieck.
3. Das der Wert des aktuellen Render-Durchlaufs für diesen Farbanhang gespeichert werden soll.

```js
const clearColor = { r: 0.0, g: 0.5, b: 1.0, a: 1.0 };

const renderPassDescriptor = {
  colorAttachments: [
    {
      clearValue: clearColor,
      loadOp: "clear",
      storeOp: "store",
      view: context.getCurrentTexture().createView(),
    },
  ],
};

const passEncoder = commandEncoder.beginRenderPass(renderPassDescriptor);
```

Jetzt können wir die Methoden des Rendering-Pass-Coders verwenden, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline anzugeben, die für den Rendering-Durchlauf verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Datenquelle aufgerufen, das an die Pipeline weitergeleitet wird, um gerendert zu werden. Der erste Parameter ist der Steckplatz, für den der Vertex-Puffer eingestellt werden soll, und ist ein Verweis auf den Index des Elements im `vertexBuffers`-Array, welches das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) startet das Zeichnen. Im `vertexBuffer` sind Daten für drei Scheitelpunkte vorhanden, daher setzen wir einen Vertex-Zählwert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Codierung der Befehlssequenz abzuschließen und sie an die GPU zu übergeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufnahme der ausgegebenen Befehlssequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), damit er an die GPU gesendet wird. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die Warteschlange angefügt werden.

Diese drei Schritte können durch die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [basalen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, diese in einem Ausgabepuffer speichern, die Daten in einen Zwischenspeicher kopieren, dann den Zwischenspeicher so abbilden, dass die Daten zurück zu JavaScript gelesen und in der Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das basale Rendering-Demo. Wir erstellen eine Referenz zu einem [`GPUDevice`](/de/docs/Web/API/GPUDevice) auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Phase hat, eine `@compute`-Phase:

```js
// Define global buffer size
const NUM_ELEMENTS = 1000;
const BUFFER_SIZE = NUM_ELEMENTS * 4; // Buffer size, in bytes

const shader = `
@group(0) @binding(0)
var<storage, read_write> output: array<f32>;

@compute @workgroup_size(64)
fn main(
  @builtin(global_invocation_id)
  global_id : vec3u,

  @builtin(local_invocation_id)
  local_id : vec3u,
) {
  // Avoid accessing the buffer out of bounds
  if (global_id.x >= ${NUM_ELEMENTS}) {
    return;
  }

  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### Erstellen von Puffern zur Handhabung unserer Daten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten, einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, auf den wir die `output`-Inhalte kopieren, der abgebildet werden kann, sodass JavaScript auf die Werte zugreifen kann.

- `output` wird als ein Speicherpuffer angegeben, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als ein Puffer angegeben, der zur Leseverarbeitung durch JavaScript abgebildet werden kann, und das Ziel eines Kopiervorgangs sein wird.

```js
const output = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.STORAGE | GPUBufferUsage.COPY_SRC,
});

const stagingBuffer = device.createBuffer({
  size: BUFFER_SIZE,
  usage: GPUBufferUsage.MAP_READ | GPUBufferUsage.COPY_DST,
});
```

### Erstellen eines Bindegruppenlayouts

Wenn die Pipeline erstellt wird, geben wir eine Bindegruppe an, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst das Erstellen eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (via einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck von GPU-Ressourcen wie Puffern, die in dieser Pipeline verwendet werden, definiert. Dieses Layout wird als Schablone verwendet, welcher Bindegruppen entsprechen müssen. In diesem Fall gewähren wir der Pipeline den Zugriff auf einen einzelnen Speicherpuffer, der an Bindungsschlitz 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), nutzbar in der Berechnungsphase der Pipeline, mit dem Zweck des Puffers als `storage` definiert.

```js
const bindGroupLayout = device.createBindGroupLayout({
  entries: [
    {
      binding: 0,
      visibility: GPUShaderStage.COMPUTE,
      buffer: {
        type: "storage",
      },
    },
  ],
});
```

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindegruppenlayout angibt, auf das diese Bindegruppe basieren soll, und die Details der Variablen, die dem im Layout definierten Schlitz zugeordnet werden sollen. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

```js
const bindGroup = device.createBindGroup({
  layout: bindGroupLayout,
  entries: [
    {
      binding: 0,
      resource: {
        buffer: output,
      },
    },
  ],
});
```

> [!NOTE]
> Sie könnten ein implizites Layout erhalten, das bei der Erstellung einer Bindegruppe verwendet werden kann, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Erstellen einer Compute-Pipeline

Mit dem oben Angegebenen können wir nun eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen, mit Übergabe eines Pipelinedeskriptors. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben den Computeshader, wobei wir angeben, in welchem Modul sich der Code befindet und welcher Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, wobei in diesem Fall ein Layout basierend auf dem zuvor definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird.

```js
const computePipeline = device.createComputePipeline({
  layout: device.createPipelineLayout({
    bindGroupLayouts: [bindGroupLayout],
  }),
  compute: {
    module: shaderModule,
    entryPoint: "main",
  },
});
```

Ein Unterschied hier im Vergleich zum Render-Pipeline-Layout ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Durchführen eines Berechnungsdurchlaufs

Das Ausführen eines Berechnungsdurchlaufs ist in der Struktur dem Ausführen eines Renderdurchlaufs ähnlich, mit einigen unterschiedlichen Befehlen. Zunächst wird der Pass-Coder geschaffen, indem [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) verwendet wird.

Beim Ausführen der Befehle geben wir die Pipeline auf die gleiche Weise wie zuvor an, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden dann jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten für die Berechnung zu spezifizieren, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die für die Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Befehlsliste für den Render-Pass, indem wir [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) verwenden.

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Lesen der Ergebnisse zurück zu JavaScript

Bevor die codierten Befehle zur Ausführung an die GPU über die [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Methode gesendet werden, kopieren wir die Inhalte des `output`-Puffers in den `stagingBuffer`-Puffer mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

```js
// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE, // Length, in bytes
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);
```

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in einen Zwischenspeicher im Speicher zu mappen, holen uns eine Referenz auf den abgebildeten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), kopieren die Daten in JavaScript und protokollieren sie dann in der Konsole. Wir "unmappen" den `stagingBuffer` auch, wenn wir mit ihm fertig sind.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length, in bytes
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU-Fehlerbehandlung

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf GPU-seitig als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der sich auf den Rückgabewert eines als ungültig markierten Aufrufs stützt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz pflegt ihren eigenen Fehlerbereichsstapel. Dieser Stapel ist anfangs leer, aber Sie können anfangen, einen Fehlerbereich an den Stapel zu pushen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies poppt den Bereich vom Stapel und gibt ein {{jsxref("Promise")}} zurück, das sich entweder zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten in diesem Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in den "Validierung"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den [Validierungsabschnitt von `GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikationen zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, z. B. Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es gibt keinen Sinn darin, Ihnen zu sagen, dass Sie sicherstellen sollen, dass Sie die korrekte Deskriptor-Objektstruktur verwenden. Dass ist sowohl offensichtlich als auch vage.
- Entwicklervarienble. Einige der Fehlerkriterien sind rein intern-basiert und für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen über die Fehlerbehandlung von WebGPU im Erklärungsdokument finden — siehe [Objektgültigkeit und Zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [Beste Praxis für WebGPU Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche reale Beispiele und Ratschläge.

> [!NOTE]
> Der historische Weg, Fehler in WebGL zu behandeln, ist die Bereitstellung einer [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode, um Fehlerinformationen zurückzugeben. Das ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist - jeder Aufruf erfordert eine Round-Trip-Verarbeitung zur GPU und erfordert, dass alle zuvor ausgestellten Operationen abgeschlossen sind. Sein Zustandsmodell ist ebenfalls flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchsickern können. Die Macher von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt des aktuellen Kontexts zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um eine [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Von diesem aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, Adapter-Infos, Funktionen und Beschränkungen.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die übergeordnete Schnittstelle, durch die der Großteil der WebGPU-Funktionalität zugänglich ist.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzen.

### Konfigurieren eines Render-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der verwendet werden kann, um rohe Daten zu speichern, die in GPU-Operationen verwendet werden sollen.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das eine Momentaufnahme eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) darstellt, die als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz zu einem internen Shader-Modul-Objekt, ein Container für WGSL-Shader-Code, der an die GPU übergeben werden kann, um von einer Pipeline ausgeführt zu werden.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der zum Speichern von 1D-, 2D- oder 3D-Datenarrays (wie Bildern) verwendet wird, die in GPU-Rendering-Operationen verwendet werden sollen.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige Teilmengen der von einer bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Textur-Subressourcen.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert ein `GPUBindGroup` eine Gruppe von Ressourcen, die in einer Gruppe zusammengebunden und wie diese Ressourcen in Shader-Phasen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck der in einer Pipeline verwendeten verwandten GPU-Ressourcen, wie Puffer, und dient als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert die Compute-Shader-Phase und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die von einer Pipeline verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Phasen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Codierung und Einreichung von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgenommene Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übergeben werden kann.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehlscoder dar, der verwendet wird, um Befehle zu kodieren, die der GPU erteilt werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Compute-Shader-Phase, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Codierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Kontrolliert die Ausführung codierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Bündel von Befehlen (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wiederverwendet werden, so oft wie erforderlich.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Vertex- und Fragment-Shader-Phasen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Codierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Ausführung von Abfragen über Render-Pässe

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen über Pässe zu erfassen, wie z. B. Okkultations- oder Zeitstempelabfragen.

### Fehlerbehebung

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Objekten, die vom GPU-Shader-Modulcompiler generiert wurden, um Probleme mit dem Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne Informations-, Warn- oder Fehlermeldung dar, die vom GPU-Shader-Modulcompiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird, um Informationen darüber bereitzustellen, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt wurden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt wurde. Zeigt an, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt wurde. Gibt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipelinefehler. Der Wert, der zurückgegeben wird, wenn ein von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebenes {{jsxref("Promise")}} abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt wurde. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation nicht den Validierungsbeschränkungen der WebGPU-API entspricht.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Basales Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basales Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU beste Praktiken](https://toji.dev/webgpu-best-practices/)
- [WebGPU-Erklärungsdokument](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, keine Leinwand](https://surma.dev/things/webgpu/)
