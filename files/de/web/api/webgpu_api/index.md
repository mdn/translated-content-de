---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 344afabdeddfcbf36bc0cdb9bb1ca2b365e260ab
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU-API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortgeschrittenere GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web im Hinblick auf grafische Fähigkeiten revolutionierte, als es erstmals um 2011 erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafiksbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, damit diese mit sehr hohen Geschwindigkeiten verarbeitet werden können und das Ergebnis in ein {{htmlelement("canvas")}}-Element gerendert wird.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Apps zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die adressiert werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs erschienen — die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group’s Vulkan](https://www.vulkan.org/) — die eine Vielzahl von neuen Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird künftig neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einer Leinwand. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut handhaben. GPGPU-Berechnungen werden immer wichtiger für viele unterschiedliche Anwendungsfälle, zum Beispiel solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl hinsichtlich der Anzahl der Objekte, die gleichzeitig gerendert werden müssen, als auch der Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte allgemeine Architektur bietet, die mit modernen GPU-APIs kompatibel ist und sich mehr "webartig" anfühlt. Es unterstützt Grafikrendering, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich günstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie compute-basierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfen und Tiefenunschärfen. Zudem kann es teure Berechnungen wie das Aussortieren und Transformieren von skletonierten Modellen direkt auf der GPU ausführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsschichten zwischen einem Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu erlernen:

![Ein grundlegendes Stapeldiagramm zeigt die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:

  - Integrierte GPUs, die sich auf demselben Board wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf einem separaten Board, unabhängig von der CPU befinden.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems (z. B. Metal auf macOS) ist, ist eine Programmierschnittstelle, die native Anwendungen die Nutzung der GPU-Funktionen ermöglicht. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Verfügung hat, um mit der GPU zu kommunizieren, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Die WebGPU-Implementierung des Browsers übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und einen Treiber im zugrunde liegenden System in Ihrem Code.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Webapp auf die GPU-Fähigkeiten in einer unterteilten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Eine physische GPU wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von mehreren Webapps. Jede Webapp muss in der Lage sein, isoliert auf WebGPU zuzugreifen, aus Sicherheits- und Logikgründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Basis, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität innerhalb eines Workers nutzen) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter)-Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen Hochleistungs- oder energieeffizienten Adapter anfordern können. Wenn dies nicht angegeben wird, bietet das Gerät Zugriff auf den Standardadapter, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert auch ein Optionsobjekt (bezeichnet als Deskriptor), das verwendet werden kann, um die genauen Funktionen und Grenzen anzugeben, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige allgemeine Spezifikation haben, die für die meisten Zwecke gut genug ist.

Dies zusammen mit einigen Funktionsprüfungen könnte der obige Prozess wie folgt erreicht werden:

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

  //...
}
```

## Pipelines und Shader: WebGPU-App-Struktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, sie könnte jedoch auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten akzeptiert, die in die GPU eingespeist werden, und sie verwendet, um eine Reihe von Vertexen im 3D-Raum zu positionieren, indem sie spezifizierte Effekte wie Rotation, Translation oder Perspektive anwendet. Die Vertexe werden dann in Primitiven wie Dreiecken (dem grundlegenden Baustein von gerenderten Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes davon auf der Zeichenleinwand abdecken sollte.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den vom Vertex-Shader erzeugten Primitiven bedeckt wird. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter bereitstellen.

- Eine Compute-Pipeline ist für allgemeine Berechnungen. Eine Compute-Pipeline enthält eine einzelne Compute-Stufe, in der ein Compute-Shader allgemeine Daten aufnimmt, sie parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben erwähnten Shader sind eine Sammlung von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer niedrigstufigen, Rust-ähnlichen Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere unterschiedliche Möglichkeiten, wie Sie eine WebGPU-App gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Erstellen von Shader-Modulen](#erstellen_von_shader-modulen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Abrufen und Konfigurieren des Canvas-Kontexts](#abrufen_und_konfigurieren_des_canvas-kontexts): Rufen Sie den `webgpu`-Kontext eines `<canvas>`-Elements ab und konfigurieren Sie ihn so, dass er Informationen über die zu rendernden Grafiken von Ihrem GPU-Logikgerät empfängt. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, beispielsweise eine, die nur Compute-Pipelines verwendet.
3. [Erstellen von Ressourcen, die Ihre Daten enthalten](#erstellen_eines_buffers_und_schreiben_unserer_dreieckdaten_darin): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder Texturen gespeichert werden, um von Ihrer App zugegriffen zu werden.
4. [Erstellen von Pipelines](#definieren_und_erstellen_der_render-pipeline): Definieren Sie Pipeline-Deskriptoren, die die gewünschte Pipeline im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie daraus Pipelines. Unsere einfachen Demos enthalten nur eine einzige Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für unterschiedliche Zwecke.
5. [Ausführen eines Compute-/Rendering-Passes](#ausführen_eines_rendering-passes): Dies umfasst eine Reihe von Unterpunkten:
   1. Erstellen Sie einen Befehls-Encoder, der eine Reihe von Befehlen codieren kann, die an die GPU ausgegeben werden sollen.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Compute-/Render-Befehle ausgegeben werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines zu verwenden sind, aus welchem/welchen Puffer(n) die erforderlichen Daten bezogen werden sollen, wie viele Zeichenoperationen auszuführen sind (im Fall von Render-Pipelines) etc.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einem Befehls-Puffer.
   5. Senden Sie den Befehls-Puffer über die Befehlswarteschlange des Logikgeräts an die GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen die Möglichkeit zu geben, zu erkunden, was es erfordert. Später werden wir auch ein [einfaches Compute-Pipeline](#grundlegende_compute-pipeline) Beispiel untersuchen und sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Erstellen von Shader-Modulen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert ein Datenpaket mit einer Position und einer Farbe, positioniert die Vertexe entsprechend der gegebenen Position, interpoliert die Farbe und gibt die Daten an die Fragment-Shader-Stufe weiter. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt die Vertexe entsprechend der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-Literal, aber Sie können ihn überall speichern, von wo aus er leicht als Text abgerufen werden kann, um in Ihr WebGPU-Programm eingespeist zu werden. Eine andere übliche Praxis ist es beispielsweise, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mittels [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf platzieren, wobei Sie Ihren Shader-Code als eine Eigenschaft innerhalb eines Deskriptorobjekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Abrufen und Konfigurieren des Canvas-Kontexts

In einer Render-Pipeline müssen wir einen Ort festlegen, an dem die Grafiken gerendert werden. In diesem Fall erhalten wir eine Referenz zu einem onscreen `<canvas>`-Element und rufen dann [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um den GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei wir ihm ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen kommen, das Format, das die Texturen haben sollen, und den Alpha-Modus, der beim Rendern halbtransparenter Texturen verwendet werden sollen.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat)-Methode; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Erstellen eines Buffers und Schreiben unserer Dreieckdaten darin

Als Nächstes werden wir unserem WebGPU-Programm unsere Daten bereitstellen, in einer Form, die es verwenden kann. Unsere Daten werden zunächst in einer {{jsxref("Float32Array")}} bereitgestellt, die 8 Datenpunkte für jedes Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in ein [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Im Hintergrund wird dieser Puffer-Typ in Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann auf diesen Speicher von Prozessen, die auf dem Hostsystem laufen, wie dem Browser, nicht zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf der Methode [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe gleich der Länge des `vertices`-Arrays, sodass er alle Daten enthalten kann und `VERTEX`- und `COPY_DST`-Nutzungsflags an anzugeben, dass der Buffer als Vertex-Buffer und als Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten den Weg, unsere Daten in den `GPUBuffer` zu bekommen, ähnlich wie im [Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) mithilfe eines Mapping-Vorgangs handhaben, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall jedoch werden wir die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)-Convenience-Methode verwenden, die als Parameter den Buffer zum Schreiben, die Datenquelle, aus der geschrieben werden soll, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten übernimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser arbeitet dann den effizientesten Weg aus, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Definieren und Erstellen der Render-Pipeline

Jetzt haben wir unsere Daten in einen Buffer bekommen, der nächste Teil der Einrichtung ist das tatsächliche Erstellen unserer Pipeline, bereit zur Verwendung für das Rendering.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir zuvor in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben - jedes Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (was dem WGSL-Typ `vec4<f32>` entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt den Stride an, was die Anzahl von Bytes ist, die jedes Vertex ausmacht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem der relevante Code zu finden ist (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Zusätzlich, im Fall der Vertex-Shader-Stufe, geben wir unser `vertexBuffers`-Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe geben wir eine Reihe von Farb-Zielzuständen an, die das spezifizierte Rendering-Format angeben (dies passt zum zuvor im Canvas-Kontext angegebenen Format).

Wir geben außerdem ein `primitive`-Objekt an, das in diesem Fall nur den Typ des Primitives angibt, das wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller in der Pipeline verwendeten GPU-Ressourcen (Buffer, Texturen etc.). In komplexeren Apps würde dies in Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts vorliegen, erstellt mittels [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) (ein Beispiel sehen Sie in unserer [Basic Compute Pipeline](#grundlegende_compute-pipeline)), was der GPU ermöglicht im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann. Wir spezifizieren jedoch den `auto`-Wert, der die Pipeline dazu veranlasst, ein implizites Bind Group Layout basierend auf den im Shader-Code definierten Bindungen zu generieren.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter zu einem Aufruf der Methode [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Ausführen eines Rendering-Passes

Jetzt, da die Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Zum Kodieren von Befehlen, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, was durch einen Aufruf der Methode [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als Nächstes starten wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter an, dessen einzig obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall geben wir Folgendes an:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht vom `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht zu einer angegebenen Farbe "gelöscht" werden soll, sobald sie geladen ist und bevor das Zeichnen stattfindet. Dies ist das, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Rendering-Passes für diesen Farb-Anhang gespeichert werden soll.

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

Jetzt können wir Methoden des Rendering-Pass-Encoders einsetzen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die zu verwendende Pipeline für den Rendering-Pass anzugeben.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu fungieren, die an die Pipeline zum Rendern übergeben wird. Der erste Parameter ist der Slot, um den Vertex-Buffer festzulegen, und ist ein Verweis auf den Index des Elements in dem `vertexBuffers`-Array, das das Layout dieses Buffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichen in Bewegung. In unserem `vertexBuffer` sind Daten für drei Vertexes vorhanden, also setzen wir einen Wert für die Vertex-Anzahl von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Codierung der Befehlssequenz abzuschließen und sie an die GPU auszugeben, sind noch drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übergeben das [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) zur Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um es an die GPU zu senden. Die Befehlswarteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und eine Liste von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann zur Warteschlange über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) berechnen wir einige Werte auf der GPU, speichern sie in einem Ausgangspuffer, kopieren die Daten auf einen Stage-Puffer und Mappen diesen Stage-Puffer dann, sodass die Daten nach JavaScript gelesen werden können und zur Konsole geloggt werden.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

### Erstellen von Buffern zur Datenverarbeitung

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten: einen `output`-Buffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu speichern, und einen `stagingBuffer`, in den wir den Inhalt des `output`-Buffers kopieren werden, der gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherpuffer angegeben, der die Quelle einer Kopiervorgabe sein wird.
- `stagingBuffer` wird als Puffer angegeben, der zum Lesen durch JavaScript gemappt werden kann und das Ziel einer Kopiervorgabe sein wird.

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

### Erstellen eines Bind-Group-Layouts

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bind-Gruppe, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst das Erstellen einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Buffern, die innerhalb dieser Pipeline verwendet werden, definiert. Dieses Layout wird als Vorlage verwendet, an die sich Bind-Gruppen halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der mit dem Bindungsslot 0 verknüpft ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code - `@binding(0)`), der in der Compute-Stufe der Pipeline verwendbar ist und dessen Zweck als `storage` definiert ist.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bind-Group-Layout spezifiziert, um diese Bind-Gruppe darauf zu basieren, und die Details der Variablen, die an den im Layout definierten Slot zu binden sind. In diesem Fall erklären wir die Bindung 0 und spezifizieren, dass der zuvor definierte `output`-Buffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es beim Erstellen einer Bind-Gruppe zu verwenden, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version, die für Render-Pipelines verfügbar ist: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Erstellen einer Compute-Pipeline

Mit dem oben genannten Platz können wir nun eine Compute-Pipeline durch den Aufruf von [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) erstellen, indem wir ihr ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert auf ähnliche Weise wie das Erstellen einer Render-Pipeline. Wir beschreiben den Compute-Shader, indem wir spezifizieren, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir in diesem Fall ein Layout basierend auf dem zuvor definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellen.

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

Ein Unterschied hier im Vergleich zum Render-Pipeline-Layout ist, dass wir keinen primitiven Typ spezifizieren, da wir nichts zeichnen.

### Ausführen eines Compute-Passes

Das Ausführen eines Compute-Passes ist vom Aufbau her ähnlich wie das Ausführen eines Rendering-Passes, jedoch mit einigen unterschiedlichen Befehlen. Zum Start wird der Pass-Encoder mithilfe von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Wenn wir die Befehle ausgeben, spezifizieren wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor, mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline). Wir verwenden jedoch dann [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten anzugeben, die in der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der zu verwendenden GPU-Arbeitsgruppen zur Durchführung der Berechnungen anzugeben.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mithilfe von [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück zu JavaScript lesen

Bevor wir die gespeicherten Befehle zur Ausführung an die GPU übergeben, indem wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) verwenden, kopieren wir die Inhalte des `output`-Puffers in den `stagingBuffer`-Puffer mithilfe von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten einem Zwischen-Speicher zuzuordnen, holen einen Verweis auf den gemappten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), kopieren die Daten in JavaScript und protokollieren sie dann zur Konsole. Wir heben die Zuordnung des `stagingBuffer` auf, sobald wir damit fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein anderer Aufruf gemacht wird, der auf dem Rückgabewert eines ungültig eingestuften Aufrufs basiert, wird auch dieses Objekt als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerbereichs-Stack. Dieser Stapel ist zunächst leer, aber Sie können beginnen, einen Fehlerbereich auf den Stapel zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie fertig sind mit Fehlererfassung, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stapel und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt aufgelöst wird ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, Ihnen nützliche Informationen bereitzustellen, um Ihnen zu helfen zu verstehen, warum in Ihrem WebGPU-Code Fehler auftreten, in "Validierungs"-Abschnitten, wo immer dies angemessen ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den Abschnitt [`GPUDevice.createBindGroup()` Validation](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; statt die Spezifikation zu wiederholen, haben wir entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptoreigenschaften, die Validierungsfehler verursachen. Es macht keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollen, das korrekte Deskriptor-Objektstruktur zu verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwickler-kontrolliert. Einige der Fehlerkriterien basieren rein auf internen Abläufen und sind für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen über die WebGPU-Fehlerbehandlung im Erklärer finden — siehe [Objektgültigkeit und Zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche praktische Beispiele und Ratschläge.

> [!NOTE]
> Die historische Art, Fehler in WebGL zu handhaben, besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Das ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Performance ist — jeder Aufruf erfordert einen Rundtrip zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code austreten können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Daraus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfiguration von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalitäten zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Grenzen, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfiguration eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — Der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der zum Speichern von Rohdaten verwendet werden kann, die in GPU-Operationen verwendet werden können.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen Schnappschuss eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Ein Verweis auf ein internes Shader-Modul-Objekt, ein Behälter für WGSL-Shader-Code, der an die GPU zur Ausführung durch eine Pipeline übermittelt werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der zum Speichern von 1D-, 2D- oder 3D-Datenarrays, wie Bildern, verwendet wird, um in GPU-Rendering-Operationen verwendet zu werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der Textur-Unterressourcen, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert werden.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die gebunden und in einer Gruppe zusammengefasst werden sollen, und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffern, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert die Compute-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die mit der Pipeline während des Befehls-Codings verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Codierung und Übermittlung von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgezeichnete Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übergeben werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehlscodierer dar, der zum Codieren von Befehlen verwendet wird, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Codiert Befehle im Zusammenhang mit der Steuerung der Compute-Shader-Stufe, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Codierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Kontrolliert die Ausführung von codierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Befehlspakete (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlspakete voraufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode so oft wie benötigt wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Codiert Befehle im Zusammenhang mit der Steuerung der Vertex- und Fragment-Shader-Stufen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Codierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Durchführung von Abfragen zu Rendering-Passes

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen zu Pässen zu protokollieren, wie z.B. Okkulsions- oder Zeitstempelabfragen.

### Debugging von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Eine Liste von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die vom GPU-Shader-Modul-Compiler generiert wurden, um Probleme mit dem Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne informatorische, Warn- oder Fehlermeldung dar, die von dem GPU-Shader-Modul-Compiler generiert wird.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird, mit der Bereitstellung von Informationen darüber, warum das Gerät verloren gegangen ist.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine Art von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Dies weist darauf hin, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlschlug, auch wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine Art von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Dies weist darauf hin, dass nicht genügend freier Speicherplatz vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Versagen. Der Wert, der erhalten wird, wenn ein {{jsxref("Promise")}} zurückgegeben von einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine Art von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Basis-Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beste Praktiken für WebGPU](https://toji.dev/webgpu-best-practices/)
- [WebGPU-Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
