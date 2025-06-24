---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für universelle GPU-Berechnungen, schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Nutzung

Es ist angemessen zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web im Hinblick auf grafische Fähigkeiten revolutioniert hat, seit es um 2011 erstmals erschien. WebGL ist eine JavaScript-Portierung der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek. Sie ermöglicht es Webseiten, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, um diese mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element darzustellen.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die verwendet wird, um WebGL-Shader-Code zu schreiben, sind komplex. Daher wurden mehrere WebGL-Bibliotheken erstellt, um WebGL-Anwendungen einfacher schreiben zu können: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

Allerdings hat WebGL einige grundlegende Probleme, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL sind eine neue Generation von nativen GPU-APIs erschienen — die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und daher WebGL) geplant, sodass diese keine dieser neuen Funktionen erhalten werden. WebGPU hingegen wird in Zukunft neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und des Renderns auf eine Leinwand. Es kann mit universellen GPU-Berechnungen (GPGPU) nicht gut umgehen. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, z. B. solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch in Bezug auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte universelle Architektur bietet, die mit modernen GPU-APIs kompatibel ist und sich "web-freundlicher" anfühlt. Es unterstützt das Rendern von Grafiken, bietet aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite deutlich kostengünstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie compute-basierte Partikel und Post-Processing-Filter wie Farbeffekte, Schärfung und Tiefenunschärfesimulation. Darüber hinaus kann es teure Berechnungen wie das Aussortieren von nicht sichtbaren Objekten und die Transformation von skinned Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Gerät-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stack-Diagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Es sind verschiedene GPU-Typen verfügbar:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden und von der CPU getrennt sind.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Ein System kann mehrere native Betriebssystem-APIs und Treiber verfügbar haben, um mit der GPU zu kommunizieren, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Eine WebGPU-Implementierung des Browsers kümmert sich um die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System verfügbar sind, in Ihrem Code.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App auf die GPU-Funktionen in einer gekapselten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von vielen Web-Apps. Jede Web-App muss aus Sicherheits- und logischen Gründen in der Lage sein, isoliert auf WebGPU zuzugreifen.

## Zugriff auf ein Gerät

Ein logisches Gerät, repräsentiert durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz, ist die Grundlage, von der aus eine Web-App auf alle WebGPU-Funktionalitäten zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, beispielsweise einen leistungsstarken oder energiesparenden Adapter anzufordern. Wenn dieses nicht enthalten ist, stellt das Gerät Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert auch ein Optionsobjekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Limits spezifizieren können, die das logische Gerät haben sollte. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine angemessene universelle Spezifikation haben, die für die meisten Zwecke ausreichend ist.

Wenn Sie dies mit einigen Feature-Erkennungsprüfungen kombinieren, könnte der obige Prozess wie folgt erreicht werden:

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

## Pipelines und Shader: WebGPU-App-Struktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipeline verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in einem {{htmlelement("canvas")}} Element, aber sie könnte Grafiken auch außerhalb des Bildschirms rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten akzeptiert, die in die GPU eingespeist werden, und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann in Primitive wie Dreiecke (der grundlegende Baustein von gerenderten Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Zeichenfläche abdecken sollte.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den Primitive abgedeckt wird, die vom Vertex-Shader erzeugt wurden. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bieten.

- Eine Compute-Pipeline ist für allgemeine Berechnungen vorgesehen. Eine Compute-Pipeline enthält eine einzelne Compute-Stufe, in der ein Compute-Shader allgemeine Daten nimmt, sie parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis dann in einem oder mehreren Puffern zurückgibt. Die Puffer können beliebige Daten enthalten.

Die oben genannten Shader sind Sätze von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Rust-ähnlichen Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-App erstellen könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in ein oder mehrere Shader-Module.
2. [Den Canvas-Kontext abrufen und konfigurieren](#den_canvas-kontext_abrufen_und_konfigurieren): Holen Sie den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn so, dass er Informationen darüber erhält, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, wie eine, die nur Compute-Pipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#einen_puffer_erstellen_und_unsere_dreiecks-daten_hineinschreiben): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, um von Ihrer App darauf zugegriffen werden zu können.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Pipeline-Deskriptoren definieren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und dann Pipelines daraus erstellen. Unsere grundlegenden Demos enthalten nur eine einzelne Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Eine Compute-/Rendering-Pass ausführen](#eine_rendering-pass_ausführen): Dies umfasst eine Reihe von Unteraufgaben:
   1. Einen Kommando-Encoder erstellen, der eine Reihe von Befehlen kodieren kann, die zur Ausführung an die GPU übermittelt werden sollen.
   2. Ein Pass-Encoder-Objekt erstellen, auf dem Compute-/Render-Befehle ausgeführt werden.
   3. Befehle ausführen, um anzugeben, welche Pipelines verwendet werden sollen, von welchen Puffer(n) die erforderlichen Daten abgerufen werden sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Die Befehlsliste finalisieren und in einem Kommando-Puffer kapseln.
   5. Den Kommando-Puffer an die GPU über die Befehlswarteschlange des logischen Geräts übermitteln.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen zu zeigen, was es erfordert. Später werden wir auch ein Beispiel für eine [einfache Compute-Pipeline](#grundlegende_compute-pipeline) betrachten, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen darauf ein Dreieck.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenchunk, der eine Position und eine Farbe enthält, positioniert den Vertex gemäß der gegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) nimmt die Daten von der Vertex-Shader-Stufe an und färbt den Vertex gemäß der angegebenen Farbe ein.

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
> In unseren Demos speichern wir unseren Shader-Code innerhalb eines Template-Strings, aber Sie können ihn überall speichern, von wo er leicht als Text abgerufen werden kann, um in Ihr WebGPU-Programm eingespeist zu werden. Eine andere gängige Praxis ist es, Shader innerhalb eines {{htmlelement("script")}}-Elements zu speichern und die Inhalte mithilfe von [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice>CreateShaderModule) packen, indem Sie Ihren Shader-Code als Eigenschaft in einem Deskriptorobjekt übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Den Canvas-Kontext abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafik gerendert werden soll. In diesem Fall beziehen wir uns auf ein `<canvas>`-Element auf dem Bildschirm und rufen dann [`HTMLCanvasElement.getContext()`](/de/docs/Web>APl/HTMLCanvasElement/getContext) mit dem Parameter `webgpu` auf, um seinen GPU Kon zu erhalten (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz).

Von dort konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) und übergeben ihm ein Optionsobjekt, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen stammen sollen, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern semi-transparenter Texturen verwendet werden soll.

```js
const canvas = document.querySelector("#gpuCanvas");
const context = canvas.getContext("webgpu");

context.configure({
  device,
  format: navigator.gpu.getPreferredCanvasFormat(),
  alphaMode: "premultiplied",
});
```

> [!NOTE]
> Die beste Praxis zur Bestimmung des Texturformats besteht darin, die Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zu verwenden; dies wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecks-Daten hineinschreiben

Als Nächstes stellen wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, der 8 Datenpunkte für jeden Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben hier jedoch ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bringen. Hinter den Kulissen wird dieser Puffer-Typ im Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann auf diesen Speicher nicht von auf dem Host-System laufenden Prozessen wie dem Browser zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des Arrays `vertices` entspricht, damit er alle Daten enthalten kann, und `VERTEX`- und `COPY_DST`-Nutzungsflags, um anzuzeigen, dass der Puffer als Vertex-Puffer und als Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten unsere Daten mit einer Mapping-Operation in den `GPUBuffer` bringen, wie wir es im [Beispiel zur Compute-Pipeline](#grundlegende_compute-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer), die als Parameter den zu beschreibenden Puffer, die Datenquelle, von der geschrieben werden soll, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays angegeben) übernimmt. Der Browser ermittelt dann die effizienteste Vorgehensweise zum Schreiben der Daten.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Nachdem wir unsere Daten in einen Puffer überführt haben, ist der nächste Teil des Setups, unsere Pipeline tatsächlich zu erstellen, um sie für das Rendering verwenden zu können.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir zuvor in unserem `vertices` Array und der Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Position- und Farbdaten. Beide sind im `float32x4` Format (das auf den WGSL Typ `vec4<f32>` abgebildet wird), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt den Abstand an, d.h. die Anzahl der Bytes, aus denen jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als Nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem sich der relevante Code befindet (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Darüber hinaus stellen wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers` Objekt bereit, um den erwarteten Zustand unserer Vertex-Daten anzugeben. Im Fall unserer Fragment-Shader-Stufe stellen wir ein Array von Farbzielzuständen bereit, die das angegebene Rendering-Format angeben (dies entspricht dem Format, das wir zuvor in unserer Canvas-Kontextkonfiguration angegeben haben).

Wir geben auch ein `primitive` Objekt an, das in diesem Fall nur den Typ des zu zeichnenden Primitives angibt, und ein `layout` von `auto`. Die `layout` Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies in Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekts geschehen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (siehe ein Beispiel in unserer [einfachen Compute-Pipeline](#grundlegende_compute-pipeline)), das es der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus effizient ausgeführt werden kann. Wir geben jedoch den Wert `auto` an, der dazu führt, dass die Pipeline ein implizites Bindungsgruppenlayout basierend auf den im Shader-Code definierten Bindungen erzeugt.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor` Objekt erstellen, indem wir es als Parameter an einen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Eine Rendering-Pass ausführen

Da nun alles eingerichtet ist, können wir tatsächlich eine Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um alle an die GPU auszugebenden Befehle zu kodieren, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Instanz erstellen, was mit einem Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) geschieht.

```js
const commandEncoder = device.createCommandEncoder();
```

Als Nächstes starten wir die Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, dessen einzig obligatorische Eigenschaft ein `colorAttachments` Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht zum Rendern; wir erstellen über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView) eine neue Ansicht aus dem `<canvas>`.
2. Dass die Ansicht beim Laden und vor jeder Zeichnung auf eine angegebene Farbe "geleert" werden soll. Dies ist das, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert der aktuellen Rendering-Pass für diesen Farbanhang gespeichert werden soll.

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

Jetzt können wir Methoden des Render-Pass-Encoders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline` Objekt als Parameter aufgerufen, um die Pipeline für die Rendering-Pass anzugeben.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer` Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline übergeben werden soll, die gerendert werden soll. Der erste Parameter ist der Slot, für den der Vertex-Puffer festgelegt werden soll, und ist ein Verweis auf den Index des Elements im `vertexBuffers` Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) startet das Zeichnen. Es sind Daten für drei Vertices in unserem `vertexBuffer` vorhanden, daher setzen wir einen Vertex-Anzahl-Wert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Befehle abzuschließen und sie an die GPU zu übermitteln, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlslist zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekt zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) Instanz), um zur GPU geschickt zu werden. Die Warteschlange des Geräts ist über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Warteschlange hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, sie in einem Ausgabepuffer speichern, die Daten auf einen Staging-Puffer kopieren und diesen Staging-Puffer dann so abbilden, dass die Daten in JavaScript zurückgelesen und in der Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

### Puffer erstellen, um unsere Daten zu handhaben

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Instanzen, um unsere Daten zu handhaben, einen `output` Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir die `output` Inhalte kopieren, der so abgebildet werden kann, dass JavaScript auf die Werte zugreifen kann.

- `output` wird als Speicherpuffer angegeben, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` wird als Puffer angegeben, der für das Lesen durch JavaScript abgebildet werden kann und das Ziel einer Kopieroperation sein wird.

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

### Eine Bindungsgruppenlayout erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindungsgruppe an, die in der Pipeline verwendet werden soll. Dies beinhaltet zunächst die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden sollen. Dieses Layout wird als Schablone verwendet, an die sich Bindungsgruppen halten müssen. In diesem Fall gewähren wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an den Bindungs-Slot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), verwendbar in der Compute-Stufe der Pipeline und mit dem als `storage` definierten Zweck des Puffers.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) über einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindungsgruppenlayout spezifiziert, auf dem diese Bindungsgruppe basieren soll, und die Details der Variable, die an den im Layout definierten Slot gebunden werden soll. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der vorher festgelegte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout bei der Erstellung einer Bindungsgruppe abrufen, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Compute-Pipeline erstellen

Mit all dem oben Gesagten können wir jetzt eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ihm ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie die Erstellung einer Render-Pipeline. Wir beschreiben den Compute-Shader, geben an, in welchem Modul der Code gefunden werden soll und was der Einstiegspunkt ist. Wir geben auch ein `Layout` für die Pipeline an, in diesem Fall erstellen wir ein Layout basierend auf dem vorher definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout).

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

Ein Unterschied hier im Vergleich zum Layout der Render-Pipeline besteht darin, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Eine Compute-Pass ausführen

Das Ausführen einer Compute-Pass ähnelt strukturell dem Ausführen einer Rendering-Pass, wobei einige unterschiedliche Befehle verwendet werden. Beginnen wir damit, dass der Pass-Encoder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt wird.

Beim Ausgeben der Befehle spezifizieren wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor, wobei wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die zu verwendenden Daten in der Berechnung anzugeben, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die zur Durchführung der Berechnungen verwendet werden sollen.

Dann signalisieren wir das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Lesen der Ergebnisse zurück nach JavaScript

Bevor die codierten Befehle zur Ausführung an die GPU übermittelt werden, verwenden wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit), um die Inhalte des `output`-Puffers an den `stagingBuffer` Puffer zu kopieren, indem wir [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer) verwenden.

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenwerten abzubilden, eine Referenz auf den abgebildeten Bereich mithilfe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) abzurufen, die Daten in JavaScript zu kopieren und sie dann in der Konsole zu protokollieren. Außerdem markieren wir den `stagingBuffer`, nachdem wir mit ihm fertig sind, zurück.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler erkannt werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein anderer Aufruf gemacht wird, der sich auf den Rückgabewert eines ungültigen Aufrufs verlässt, wird dieses Objekt ebenfalls als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz führt ihren eigenen Fehlerskop-Stack. Dieser Stack ist zunächst leer, aber Sie können beginnen, einen Fehlerskop auf den Stack zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/XMLHttpRequest.send) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Skop aus dem Stack und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten im Skop erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen, warum in Ihrem WebGPU-Code Fehler auftreten, in "Validation"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den [Verifizierungsabschnitt zu GPUDevice.createBindGroup()](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex. Anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, Fehlerkriterien nur aufzulisten, die:

- Nicht offensichtlich sind, z. B. Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es macht keinen Sinn, Ihnen zu sagen, dass Sie die richtige Struktur des Deskriptorobjekts verwenden sollen. Das ist sowohl offensichtlich als auch vage.
- Entwicklerspezifisch sind. Einige der Fehlerkriterien basieren rein auf Interna und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur WebGPU-Fehlerbehandlung finden Sie im Erklärer — siehe [Objektgültigkeit und -zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU-Fehlerbehandlungs-Best-Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche Praxisbeispiele und Ratschläge.

> [!NOTE]
> Die historische Art der Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) Methode bereitzustellen, die Fehlerinformationen zurückgibt. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Rundreise zur GPU und alle zuvor ausgegebenen Operationen müssen abgeschlossen sein. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen unabhängigem Code durchsickern können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Verwendung von WebGPU. Er kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von diesem aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält Identifizierungsinformationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Limits, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfigurieren eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Der Aufruf von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}} Elements.

### Repräsentieren von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der zum Speichern unstrukturierter Daten verwendet werden kann, die in GPU-Operationen verwendet werden sollen.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Snapshot enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modulobjekt, einen Container für WGSL-Shader-Code, der der GPU zur Ausführung durch eine Pipeline übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der dazu verwendet wird, 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, die in GPU-Rendering-Operationen verwendet werden sollen.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige der durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturunterressourcen.

### Repräsentieren von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die in einer Gruppe gebunden und wie diese Ressourcen in Shader-Stufen verwendet werden sollen.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden sollen, und wird als Schablone verwendet, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Compute-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU kodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung in eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) eingereicht werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Kommando-Encoder, der verwendet wird, um Befehle zu kodieren, die der GPU übermittelt werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die die Steuerung der Compute-Shader-Stufe betreffen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung kodierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Bündel von Befehlen (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Bündel von Befehlen voraufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) Methode so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die die Steuerung der Vertex- und Fragment-Shader-Stufen betreffen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen bei Rendering-Passes ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen auf Durchläufen zu erfassen, wie etwa Oklusations- oder Zeitstempelabfragen.

### Debugging-Fehler

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Objekten, die von dem GPU-Shader-Modulcompiler generiert werden, um Probleme mit dem Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die von dem GPU-Shader-Modulcompiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} auflöst und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgegeben werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgegeben werden. Weist darauf hin, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, obwohl alle Validierungsanforderungen erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgegeben werden. Weist darauf hin, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Versagen. Der Wert, der empfangen wird, wenn eine von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebene {{jsxref("Promise")}} fehlschlägt.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis ausgegeben werden. Beschreibt ein Anwendungsfehler, das darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Grundlegendes Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
