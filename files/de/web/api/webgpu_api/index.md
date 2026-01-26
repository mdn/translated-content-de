---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: d66e6bc8eab45062f3ce5caed05994440b836f62
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um hochperformante Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für GPU-Berechnungen zu allgemeinen Zwecken, schnellere Operationen und Zugriff auf fortgeschrittenere GPU-Funktionen.

## Konzepte und Nutzung

Es ist durchaus fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) die Weblandschaft in Bezug auf grafische Fähigkeiten revolutionierte, nachdem es um 2011 erstmals erschien. WebGL ist eine JavaScript-Portierung der Grafikenbibliothek [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/), die es Webseiten ermöglicht, Renderingsberechnungen direkt an die GPU des Geräts zu übermitteln, um mit sehr hohen Geschwindigkeiten verarbeitet zu werden und das Ergebnis innerhalb eines {{htmlelement("canvas")}}-Elements zu rendern.

WebGL und die darin verwendete Sprache [GLSL](<https://wikis.khronos.org/opengl/Core_Language_(GLSL)>) zur Erstellung von Shader-Code sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um die Entwicklung von WebGL-Anwendungen zu vereinfachen: Bekannte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs aufgetaucht — die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [Vulkan der Khronos Group](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass es keine dieser neuen Funktionen mehr erhalten wird. WebGPU hingegen wird künftig neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf der Verwendung von Gezeichneten Grafiken und dem Rendern auf eine Leinwand. Es kann Berechnungen zu allgemeinen Zwecken auf der GPU (GPGPU) nicht sehr gut verarbeiten. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, beispielsweise solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte Architektur für allgemeine Zwecke bereitstellt, die mit modernen GPU-APIs kompatibel ist und sich "weborientierter" anfühlt. Es unterstützt das grafische Rendering, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendern einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger und es unterstützt moderne GPU-Rendering-Funktionen wie computergestützte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfen und Tiefenschärfe-Simulation. Darüber hinaus kann es kostspielige Berechnungen wie Ausschnittsberechnungen und Animationstransformationen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein grundlegendes Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte verfügen über GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:
  - Integrierte GPUs, die auf dem gleichen Board wie die CPU sitzen und dessen Speicher teilen.
  - Diskrete GPUs, die auf ihrem eigenen Board leben, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU verfügbar hat, obwohl das oben genannte Diagramm von einem Gerät mit nur einer nativen API/treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers verwaltet die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System in Ihrem Code verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App auf GPU-Funktionen in einer separaten Weise zugreifen kann. Logische Geräte müssen Multiplex-Fähigkeiten bereitstellen. Die GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen genutzt, darunter potenziell viele Web-Apps. Jede Web-App muss in der Lage sein, WebGPU isoliert aus Sicherheits- und Logikgründen zuzugreifen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Basis, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die Eigenschaft [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie die WebGPU-Funktion aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, zum Beispiel einen leistungsstarken oder energiearmen Adapter anzufordern. Wenn dieses nicht enthalten ist, stellt das Gerät den Zugang zu dem Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode nimmt ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet) an, mit dem Sie die genauen Funktionen und Limits spezifizieren können, die das logische Gerät haben soll. Wenn dieses nicht enthalten ist, wird das gelieferte Gerät über eine vernünftige Spezifikation für allgemeine Zwecke verfügen, die für die meisten Zwecke ausreicht.

In Kombination mit ein paar Feature-Erkennungsprüfungen könnte der oben beschriebene Prozess wie folgt umgesetzt werden:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  let adapter;
  try {
    adapter = await navigator.gpu.requestAdapter();
  } catch (error) {
    console.error(error);
  }
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

## Pipelines und Shader: WebGPU-App-Struktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die durchlaufen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptphasen:
  - Eine Vertex-Phase, bei der ein Vertex-Shader Positionierungsdaten verwendet, die in die GPU eingespeist werden, und diese nutzt, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (das grundlegende Bauelement gerenderter Grafiken) zusammengesetzt und durch die GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Leinwand abdecken soll.

  - Eine Fragment-Phase, bei der ein Fragment-Shader die Farbe für jedes von den durch den Vertex-Shader erzeugten Primitiven abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Compute-Pipeline dient allgemeinen Berechnungen. Eine Compute-Pipeline enthält eine einzelne Berechnungsstufe, bei der ein Compute-Shader allgemeine Daten verarbeitet, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können Daten jeglicher Art enthalten.

Die oben genannten Shader sind Satz von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Sprache geschrieben, die [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) genannt wird und Rust-ähnlich ist.

Es gibt verschiedene Möglichkeiten, wie Sie eine WebGPU-App architektonisch gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Den Canvas-Kontext erhalten und konfigurieren](#den_canvas-kontext_erhalten_und_konfigurieren): Holen Sie sich den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn so, dass er Informationen darüber erhält, welche Grafiken von Ihrem GPU-Logikgerät gerendert werden sollen. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, wie eine, die nur Compute-Pipelines verwendet.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#einen_puffer_erstellen_und_unsere_dreiecks-daten_reinschreiben): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen wollen, müssen in GPU-Puffern oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipelinesbeschreibungen, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines aus ihnen. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht-triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Eine Berechnungs-/Render-Pass ausführen](#einen_render-pass_ausführen): Dies umfasst eine Anzahl von Unter-Schritten:
   1. Erstellen Sie einen Command-Encoder, der einen Satz von Befehlen kodieren kann, der an die GPU übergeben werden soll, um ausgeführt zu werden.
   2. Erstellen Sie ein Pass-Encoder-Objekt, bei dem Berechnungs-/Render-Befehle erteilt werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, von welchen Puffer(n) die erforderlichen Daten bezogen werden sollen, wie viele Zeichenoperationen durchzuführen sind (im Fall von Render-Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einen Command-Buffer ein.
   5. Übergeben Sie den Command-Buffer an die GPU über die Befehlswarteschlange des logischen Geräts.

In den nachfolgenden Abschnitten werden wir uns ein grundlegendes Render-Pipeline-Demo ansehen, um zu erkunden, was es erfordert. Später werden wir auch ein [grundlegendes Compute-Pipeline](#grundlegende_compute-pipeline)-Beispiel untersuchen, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen soliden blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenchunk, der eine Position und eine Farbe enthält, positioniert den Vertex gemäß der gegebenen Position, interpoliert die Farbe und gibt die Daten dann an die Fragment-Shader-Stufe weiter. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten aus der Vertex-Shaderstufe und färbt den Vertex gemäß der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einer Template-Literal, aber Sie können ihn überall speichern, wo er leicht als Text abgerufen werden kann, um in Ihr WebGPU-Programm eingespeist zu werden. Zum Beispiel ist eine andere übliche Praxis, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt über [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code WebGPU zur Verfügung zu stellen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf verpacken, wobei Sie Ihren Shader-Code als Eigenschaft innerhalb eines Deskriptorobjekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Den Canvas-Kontext erhalten und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an den die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem auf dem Bildschirm angezeigten `<canvas>`-Element und rufen dann [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um dessen GPU-Kont EXT (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzubekommen.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei wir ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen stammen, das Format der Texturen und den Alphamodus, der beim Rendern halbtransparenter Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat); diese wählt das effizienteste Format für das Gerät des Benutzers (entweder `bgra8unorm` oder `rgba8unorm`).

### Einen Puffer erstellen und unsere Dreiecks-Daten reinschreiben

Als nächstes werden wir unser WebGPU-Programm mit unseren Daten in einer Form versehen, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, der für jedes Dreieck-Vertex 8 Datenpunkte enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben hier jedoch ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Im Hintergrund wird dieser Puffer-Typ in einem sehr eng an die GPU-Kerne angebundenen Speicher gespeichert, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann auf diesen Speicher von Prozessen, die auf dem Hostsystem laufen, wie dem Browser, nicht zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, sowie `VERTEX`- und `COPY_DST`-Nutzungsflags, um anzugeben, dass der Puffer als Vertex-Puffer und als Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten den Vorgang, unsere Daten in den `GPUBuffer` zu bekommen, mit einem Mapping-Operationen handhaben, wie wir es im [Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)-Methode, die als Parameter den Puffer, in den geschrieben werden soll, die Datenquelle, aus der geschrieben werden soll, einen Offset-Wert für jeden und die zu schreibende Datengröße annimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser ermittelt dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Nachdem wir unsere Daten in einen Puffer bekommen haben, besteht der nächste Teil der Einrichtung darin, unsere Pipeline tatsächlich zu erstellen, damit sie zum Rendern verwendet werden kann.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Daten beschreibt. Dies beschreibt perfekt das, was wir zuvor in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (das dem WGSL-Typ `vec4<f32>` entspricht) und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt den Speicherbedarf an, das heißt die Anzahl der Bytes, aus denen jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro-Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem sich der relevante Code befindet (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Darüber hinaus geben wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe geben wir ein Array von Farbziel-Zuständen an, das das spezifizierte Rendering-Format angibt (dies entspricht dem Format, das wir zuvor in unserer Canvas-Kontextkonfiguration angegeben haben).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall nur den Typ des Bildprimitivs definiert, den wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies in Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts vorliegen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (ein Beispiel finden Sie in unserer [grundlegenden Compute-Pipeline](#grundlegende_compute-pipeline)), was der GPU ermöglicht, herauszufinden, wie die Pipeline effizient im Voraus ausgeführt wird. Wir jedoch geben den Wert `auto` an, wodurch die Pipeline ein implizites Bindunggruppen-Layout basierend auf allen in den Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter an einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methodenaufruf übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Render-Pass ausführen

Jetzt, da alle Vorbereitungen abgeschlossen sind, können wir tatsächlich einen Render-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um irgendwelche Befehle zu kodieren, die später der GPU ausgestellt werden, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, was über einen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Render-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, wobei die einzig obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView) eine neue Ansicht aus dem `<canvas>`.
2. Dass die Ansicht zu einer bestimmten Farbe "bereinigt" werden soll, sobald sie geladen ist und bevor irgendeine Zeichnung stattgefunden hat. Dies ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Render-Passes für diesen Farbaufsatz gespeichert werden soll.

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

Nun können wir Methoden des Render-Pass-Encoders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline anzugeben, die für den Render-Pass verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu fungieren, die an die Pipeline zum Rendern weitergegeben wird. Der erste Parameter ist der Slot, für den der Vertex-Puffer gesetzt werden soll, und ist eine Referenz auf den Index des Elements im `vertexBuffers`-Array, das dieses Puffer-Layout beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, also setzen wir einen Vertex-Zählwert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Befehlsabfolge abzuschließen und sie an die GPU zu übermitteln, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste anzuzeigen.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufnahme der erteilten Befehlsfolge abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um an die GPU gesendet zu werden. Die Warteschlange des Geräts ist über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann der Warteschlange über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, sie in einem Ausgabe-Puffer speichern, die Daten in einen Zwischen-Puffer kopieren und diesen dann so mappen, dass die Daten nach JavaScript gelesen und in der Konsole ausgegeben werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor, und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf ein. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

### Puffer erstellen, um unsere Daten zu verarbeiten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten. Ein Ausgabe-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu speichern, und einen Zwischen-Puffer, in den wir die Ausgabe-Inhalte kopieren, der dann gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherpuffer spezifiziert, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der für das Lesen durch JavaScript gemappt werden kann und das Ziel eines Kopiervorgangs sein wird.

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

### Eine Bind-Gruppe erstellen

Beim Erstellen der Pipeline spezifizieren wir eine Bind-Gruppe, die für die Pipeline verwendet werden soll. Dies beinhaltet die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (via eines [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)-Aufrufs), der die Struktur und den Zweck GPU-Ressourcen wie Büffer definiert, die in dieser Pipeline verwendet werden. Dieses Layout dient als Vorlage, an die sich Bind-Gruppen halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an den Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer im Shader-Code — `@binding(0)`), zur Verwendung in der Barechnungsstufe der Pipeline und mit dem Zweck des Puffers als Speicher.

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

Dann erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bind-Group-Layout, auf dem diese Bind-Gruppe basieren soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen, spezifiziert. In diesem Fall erklären wir die Bindung 0 und geben an, dass der früher definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es zu verwenden, während Sie eine Bind-Gruppe erstellen, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Compute-Pipeline erstellen

Nachdem das oben Genannte vorhanden ist, können wir jetzt eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen, um ein Pipeline-Deskriptorobjekt zu übergeben. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben den Compute-Shader, indem wir angeben, in welchem Modul der Code zu finden ist und welcher der Einstiegspunkt ist. Wir geben auch ein `layout` für die Pipeline an, in diesem Fall ein Layout basierend auf dem zuvor definierten `bindGroupLayout`, indem wir [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) aufrufen.

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

Ein Unterschied hier zur Render-Pipeline ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Compute-Pass ausführen

Das Ausführen eines Compute-Passes ist im Aufbau ähnlich dem Ausführen eines Render-Passes, mit einigen unterschiedlichen Befehlen. Zum einen wird der Pass-Encoder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle spezifizieren wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Danach verwenden wir jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die zu verwendenden Daten in der Berechnung zu spezifizieren, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der zu verwendenden GPU-Arbeitsgruppen zu spezifizieren, um die Berechnung durchzuführen.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse nach JavaScript zurücklesen

Bevor wir die kodierten Befehle zur Ausführung mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die GPU übergeben, kopieren wir die Inhalte des `output`-Buffers in den Buffer `stagingBuffer` mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in einen Zwischenspeicher zu mappen, eine Referenz auf den gemappten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu holen, die Daten in JavaScript zu kopieren und dann in der Konsole auszugeben. Wir entkoppeln den `stagingBuffer`, sobald wir mit ihm fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein anderer Aufruf gemacht wird, der sich auf den Rückgabewert eines ungültig gemachten Aufrufs verlässt, wird dieses Objekt ebenfalls als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz verwaltet ihren eigenen Fehlerbereichsstapel. Dieser Stapel ist anfangs leer, aber Sie können einen Fehlerbereich auf den Stapel drücken, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie diese durch Aufrufen von [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) beenden. Diese Methode entfernt den Bereich aus dem Stapel und gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt aufgelöst wird ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validierungs"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den [`GPUDevice.createBindGroup()`]-Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler produzieren. Es macht keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollen, dass Sie die korrekte Deskriptorstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwickler-gesteuert. Einige der Fehlerkriterien basieren rein auf internen Vorgängen und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur WebGPU-Fehlerbehandlung finden Sie im Erklärer — siehe [Objektgültigkeit und Zerstörtsein](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche praxisnahe Beispiele und Ratschläge.

> [!NOTE]
> Der historische Weg, mit Fehlern in WebGL umzugehen, bestand darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, um Fehlermeldungen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Roundtrip zur GPU und erfordert, dass alle vorher erteilten Operationen abgeschlossen sind. Sein Zustandsmodell ist ebenfalls flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchsickern können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfiguration von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalität genutzt wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die vom [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Limits.

### Konfiguration eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Darstellung von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um rohe Daten zu speichern, die in GPU-Operationen verwendet werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen Schnappschuss eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz zu einem internen Shader-Modul-Objekt, einem Container für WGSL-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der 1D-, 2D- oder 3D-Datenarrays, wie Bilder, speichert, die in GPU-Rendering-Operationen verwendet werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der Textur-Unterressourcen, die durch einen bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert sind.

### Darstellung von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen gebunden werden und wie diese Ressourcen in Shaderstufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck von zugehörigen GPU-Ressourcen wie Puffern, die in einer Pipeline verwendet werden, und dient als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungs-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlscodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU kodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) zur Ausführung übermittelt werden kann.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlsencoder, der verwendet wird, um Befehle zu kodieren, die an die GPU erteilt werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle zur Steuerung der Berechnungs-Shaderphase, ausgestellt von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline). Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung von codierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um vorab aufgezeichnete Befehlsbündel zu erstellen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wiederverwendet werden, so oft wie erforderlich.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle zur Steuerung der Vertex- und Fragment-Shaderstufen, ausgestellt von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline). Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen auf Rendering-Passes ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen bei Passes aufzuzeichnen, wie Occlusion oder Zeitstempelabfragen.

### Fehler debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, generiert vom GPU-Shader-Modul-Compiler, um Probleme mit dem Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzige Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Deutet darauf hin, dass ein Vorgang aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Gibt an, dass nicht genügend freier Speicher verfügbar war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der erhalten wird, wenn ein von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebenes {{jsxref("Promise")}} zurückgewiesen wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignis-Objekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungseinschränkungen der WebGPU-API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar.

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
