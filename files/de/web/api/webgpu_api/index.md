---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 2c0f972d873ea2db5163dbcb12987847124751ad
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugang zu fortschrittlicheren GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es erstmals um 2011 erschienen war. WebGL ist eine JavaScript-Implementierung der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafiksprache, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, um sie in sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die für WebGL-Shader-Code verwendete [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die adressiert werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation von nativen GPU-APIs erschienen — die populärsten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass keine dieser neuen Funktionen hinzugefügt werden. WebGPU hingegen wird in Zukunft neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einer Zeichenfläche. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut handhaben. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle, beispielsweise für maschinelles Lernen, immer wichtiger.
- 3D-Grafik-Apps werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte allgemeine Architektur kompatibel mit modernen GPU-APIs bietet, die sich "webbiger" anfühlt. Es unterstützt Grafik-Rendering, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie compute-basierte Partikel und Post-Processing-Filter wie Farbeffekte, Schärfung und Tiefenunschärfesimulation. Außerdem kann es teure Berechnungen wie Aussortierung und Transformation von skinned Modellen direkt auf der GPU durchführen.

## Generelles Modell

Es gibt mehrere Abstraktionsebenen zwischen einem Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist hilfreich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das oben gezeigte Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native Betriebssystem-APIs und Treiber zur Verfügung hat, um mit der GPU zu kommunizieren, obwohl das oben gezeigte Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Eine WebGPU-Implementierung des Browsers übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt effektiv eine physische GPU und einen Treiber im zugrunde liegenden System in Ihrem Code dar.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Webanwendung auf GPU-Funktionen in einer vereinzelten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bieten. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig verwendet, einschließlich potenziell vieler Webanwendungen. Jede Webanwendung muss in der Lage sein, WebGPU isoliert aus Sicherheits- und Logikgründen zu nutzen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — ist die Grundlage, über die eine Webanwendung auf sämtliche WebGPU-Funktionalitäten zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität von innerhalb eines Workers verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter)-Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen Hochleistungs- oder Niedrigenergie-Adapter anfordern können. Wenn dies nicht enthalten ist, wird das Gerät Zugriff auf den Standardadapter bieten, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet), das verwendet werden kann, um die genauen Funktionen und Grenzen anzugeben, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige allgemeine Spezifikation haben, die für die meisten Zwecke ausreichend ist.

Zusammengenommen mit einigen Feature-Erkennungsprüfungen, könnte der obige Prozess wie folgt erreicht werden:

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

## Pipelines und Shader: WebGPU App-Struktur

Eine Pipeline ist eine logische Struktur, die programmgesteuerte Phasen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU ist derzeit in der Lage, zwei Arten von Pipelines zu handhaben:

- Eine Rendering-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptphasen:

  - Eine Vertex-Phase, in der ein Vertex-Shader Positionierungsdaten, die in die GPU eingespeist werden, übernimmt und sie verwendet, um eine Reihe von Vertexen im 3D-Raum durch Anwendung spezifizierter Effekte wie Rotation, Translation oder Perspektive zu positionieren. Die Vertexe werden dann in Primitives wie Dreiecke (den grundlegenden Baustein von gerenderten Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes davon auf der Zeichenfläche abdecken soll.

  - Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes von den Primitives, die vom Vertex-Shader erzeugt wurden, abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe von virtuellen Lichtquellen liefern.

- Eine Compute-Pipeline ist für allgemeine Berechnungen gedacht. Eine Compute-Pipeline enthält eine einzige Compute-Phase, in der ein Compute-Shader allgemeine Daten übernimmt, sie parallel über eine festgelegte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben erwähnten Shader sind Sets von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Sprache, die [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) genannt wird, geschrieben, die Rust-ähnlich ist.

Es gibt verschiedene Möglichkeiten, wie Sie eine WebGPU-App strukturieren könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte umfassen:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Kontext der Zeichenfläche abrufen und konfigurieren](#kontext_der_zeichenfläche_abrufen_und_konfigurieren): Rufen Sie den `webgpu`-Kontext eines `<canvas>`-Elements ab und konfigurieren Sie ihn, um Informationen darüber zu erhalten, welche Grafiken von Ihrem GPU-Logikgerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, wie etwa eine, die nur Compute-Pipelines verwendet.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#einen_puffer_erstellen_und_unsere_dreiecksdaten_hineinschreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder Texturen gespeichert werden, damit sie von Ihrer App abgerufen werden können.
4. [Pipelines erstellen](#die_renderpipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der benötigten Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine Pipeline, aber nicht-triviale Apps werden normalerweise mehrere Pipelines für verschiedene Zwecke enthalten.
5. [Eine Compute/Rendering-Pass ausführen](#einen_rendering-pass_ausführen): Dies umfasst eine Reihe von Unterstufen:
   1. Erstellen Sie einen Befehlscodierer, der eine Reihe von Befehlen kodieren kann, die an die GPU übergeben werden, um ausgeführt zu werden.
   2. Erstellen Sie ein Pass-Codierer-Objekt, auf dem Compute/Render-Befehle ausgeführt werden.
   3. Führen Sie Befehle aus, um festzulegen, welche Pipelines verwendet werden sollen, aus welchem Puffer die erforderlichen Daten stammen sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Rendering-Pipelines) usw.
   4. Schließen Sie die Liste der Befehle ab und kapseln Sie sie in einem Befehls-Puffer.
   5. Übergeben Sie den Befehls-Puffer an die GPU über die Befehlswarteschlange des logischen Geräts.

In den nachfolgenden Abschnitten werden wir uns ein einfaches Renderpipeline-Demo ansehen, damit Sie erkunden können, was dafür erforderlich ist. Später werden wir auch ein [Grundlegendes Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) untersuchen, um zu sehen, worin sich dieses von der Renderpipeline unterscheidet.

## Grundlegende Renderpipeline

In unserem [Grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Phase (`@vertex`-Block) akzeptiert ein Datenstück, das eine Position und eine Farbe enthält, positioniert den Vertex gemäß der angegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Phase. Die Fragment-Shader-Phase (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Phase und färbt den Vertex gemäß der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einer Template-Literal, aber Sie können ihn überall speichern, von wo aus er einfach als Text abgerufen und in Ihr WebGPU-Programm eingefügt werden kann. Eine weitere gängige Praxis besteht beispielsweise darin, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) umwandeln, wobei Ihr Shader-Code als Eigenschaft innerhalb eines Deskriptor-Objekts übergeben wird. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Kontext der Zeichenfläche abrufen und konfigurieren

In einer Renderpipeline müssen wir einen Ort spezifizieren, um die Grafiken zu rendern. In diesem Fall erhalten wir einen Verweis auf ein Onscreen-`<canvas>`-Element und rufen dann [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei wir ihm ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) angibt, von dem die Renderinformationen stammen, das Format, das die Texturen haben werden, und den Alphamodus, der beim Rendern halbtransparenter Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat)-Methode; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecksdaten hineinschreiben

Als nächstes werden wir unserem WebGPU-Programm unsere Daten in einem für es nutzbaren Formular bereitstellen. Unsere Daten werden ursprünglich in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jeden Dreieck-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird diese Art von Puffer im Speicher sehr eng mit den CPU-Kernen integriert gespeichert, um die gewünschte hohe Leistungsfähigkeit zu ermöglichen. Ein Nebeneffekt dieser Speicheranordnung ist, dass dieser Speicher von laufenden Prozessen im Hostsystem, wie dem Browser, nicht zugänglich ist.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, sowie `VERTEX`- und `COPY_DST`-Nutzungsflags, um anzugeben, dass der Puffer als Vertex-Puffer und Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten die Daten in den `GPUBuffer` mit einer Mapping-Operation behandeln, so wie wir es im [Compute-Pipeline-Beispiel](#grundlegende_compute-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)-Convenience-Methode, die als Parameter den Puffer zum Schreiben, die Datenquelle zum Schreiben, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays spezifiziert) entgegennimmt. Der Browser ermittelt dann die effizienteste Methode, um das Schreiben der Daten zu handhaben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Renderpipeline definieren und erstellen

Jetzt haben wir unsere Daten in einem Puffer, der nächste Teil der Konfiguration besteht darin, unsere Pipeline tatsächlich zu erstellen, bereit zur Verwendung für das Rendering.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir vorher in unserem `vertices`-Array und der Vertex-Shader-Phase gesehen haben — jeder Vertex hat Positions- und Farbdaten. Beide sind im Format `float32x4` formatiert (das dem WGSL `vec4<f32>`-Typ entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die Anzahl der Bytes an, die jeden Vertex bilden, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptor-Objekt, das die Konfiguration unserer Render-Pipeline-Stufen angibt. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe fungiert.

Darüber hinaus stellen wir im Fall der Vertex-Shader-Phase unser `vertexBuffers`-Objekt bereit, um den erwarteten Zustand unserer Vertex-Daten zu liefern. Und im Fall unserer Fragment-Shader-Phase stellen wir ein Array von Farb-Zielzuständen bereit, die das spezifizierte Renderformat angeben (dies entspricht dem Format, das früher in unserer Zeichenflächen-Konfiguration angegeben wurde).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall nur angibt, welchen Typ von Primitive wir zeichnen, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller von der Pipeline während der Ausführung verwendeten GPU-Ressourcen (Puffer, Texturen, etc.). In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (siehe ein Beispiel in unserer [Grundlegenden Compute-Pipeline](#grundlegende_compute-pipeline)), was der GPU ermöglicht, im Voraus herauszufinden, wie die Pipeline am effizientesten ausgeführt werden kann. Hier geben wir jedoch den Wert `auto` an, was dazu führt, dass die Pipeline ein implizites Bindgruppenlayout basierend auf allen im Shader-Code definierten Bindungen generiert.

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

Abschließend können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter für einen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Pass ausführen

Nun, da die gesamte Konfiguration erledigt ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um Befehle zu kodieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, die mit einem [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf durchgeführt wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter, bei dem die einzige obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texture-Ansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht einmal geladen und vor jedem Zeichenvorgang auf eine angegebene Farbe "gelöscht" werden soll. Dies ist das, was den blauen Hintergrund hinter dem Dreieck erzeugt.
3. Dass der Wert des aktuellen Rendering-Passes für diesen Farbanhang gespeichert werden soll.

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

Nun können wir Methoden des Rendering-Pass-Codierers aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline für den Rendering-Pass anzugeben.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die zu rendernde Pipeline übergeben wird. Der erste Parameter ist der Steckplatz, der für den Vertex-Buffer festgelegt werden soll, und ist ein Verweis auf den Index des Elements im `vertexBuffers`-Array, das das Layout dieses Buffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Bewegung. Es gibt Daten für drei Vertexe innerhalb unseres `vertexBuffer`, daher setzen wir einen Vertex-Anzahl-Wert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um das Kodieren der Befehlssequenz abzuschließen und sie an die GPU zu übergeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end)-Methode auf, um das Ende der Rendering-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode auf, um die Aufzeichnung der ausgegebenen Befehlssequenz zu vervollständigen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übergeben den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um an die GPU übergeben zu werden. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann der Warteschlange über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf hinzugefügt werden.

Diese drei Schritte können durch die folgenden beiden Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [Grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, speichern sie in einem Ausgangspuffer, kopieren die Daten in einen Zwischenpuffer und mappen diesen Zwischenpuffer dann, sodass die Daten zurück an JavaScript gelesen und in die Konsole geloggt werden können.

Die App hat eine ähnliche Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf. Der Unterschied besteht hier darin, dass unser Shader-Code nur eine Shader-Phase, eine `@compute`-Phase, hat:

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

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu handhaben, einen `output`-Puffer, um die Ergebnisse der GPU-Berechnung mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir die Inhalte von `output` kopieren und der gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherpuffer spezifiziert, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der für das Lesen durch JavaScript gemappt werden kann und das Ziel einer Kopieroperation ist.

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

### Ein Bindgruppenlayout erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindgruppe an, die für die Pipeline verwendet werden soll. Dies beinhaltet das Erstellen eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindgruppen verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzigen Speicherpuffer, der an den Bindungsschlitz 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), benutzbar in der Compute-Phase der Pipeline, mit dem Pufferzweck als `storage` definiert.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptor-Objekt, das das Bindgruppenlayout angibt, auf dem diese Bindgruppe basiert, und die Details der Variablen, die an den im Layout definierten Schlitz gebunden werden soll. In diesem Fall deklarieren wir die Bindung 0 und geben an, dass der zuvor definierte `output`-Buffer an ihn gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es bei der Erstellung einer Bindgruppe zu verwenden, indem Sie die [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout)-Methode aufrufen. Es gibt auch eine verfügbare Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Compute-Pipeline erstellen

Mit all dem zuvor erledigten können wir nun eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ihr ein Pipeline-Deskriptor-Objekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Renderpipeline. Wir beschreiben den Compute-Shader, geben an, in welchem Modul der Code zu finden ist und welcher Einstiegspunkt verwendet wird. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir in diesem Fall ein Layout basierend auf dem `bindGroupLayout`, das wir zuvor definiert haben, über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellen.

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

Ein Unterschied zu dem Layout für die Renderpipeline besteht darin, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Compute-Pass ausführen

Das Ausführen eines Compute-Passes ist ähnlich strukturiert wie das Ausführen eines Rendering-Passes, jedoch mit einigen anderen Befehlen. Für einen Anfang wird der Pass-Codierer mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Wenn die Befehle erteilt werden, spezifizieren wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden jedoch danach [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden wollen, um die in der Berechnung zu verwendenden Daten anzugeben, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der von der GPU verwendeten Arbeitsgruppen anzugeben, um die Berechnungen durchzuführen.

Wir signalisieren dann das Ende der Liste der Rendering-Pass-Befehle mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück an JavaScript lesen

Bevor die kodierten Befehle mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Ausführung an die GPU übergeben werden, kopieren wir die Inhalte des `output`-Buffers in den `stagingBuffer`-Buffer mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Methode, um die Daten in den Zwischenspeicher zu mappen, erhalten eine Referenz auf den gemappten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), kopieren die Daten in JavaScript und loggen sie anschließend in die Konsole. Wir entmappen den `stagingBuffer`, sobald wir mit ihm fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf getätigt wird, der vom Rückgabewert eines ungültig markierten Aufrufs abhängt, wird dieses Objekt ebenfalls als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jedes [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt einen eigenen Fehlerbereichs-Stack. Dieser Stack ist anfänglich leer, Sie können jedoch anfangen, einen Fehlerbereich in den Stack zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stapel und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen sollen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in den "Validierungs"-Abschnitten, wo es angebracht ist, die Kriterien aufzuzählen, um Fehler zu vermeiden. Siehe zum Beispiel den [`GPUDevice.createBindGroup()`-Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschlossen, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler hervorrufen. Es hat keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollten, das korrekte Deskriptor-Objekt-Struktur zu verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwickelgesteuert. Einige der Fehlerkriterien basieren rein auf internen Strukturen und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur WebGPU-Fehlerbehandlung finden Sie im Erklärer — siehe [Objektgültigkeit und -vernichtbarkeit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU-Fehlerbehandlungs-Best-Praktiken](https://toji.dev/webgpu-best-practices/error-handling) bieten nützliche praxisnahe Beispiele und Ratschläge.

> [!NOTE]
> Der historische Weg zur Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert einen Roundtrip zur GPU und erfordert, dass alle vorher ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code durchsickern können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Startpunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Aus diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapter-Informationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### GPUDevices konfigurieren

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist das Hauptinterface, über das der Großteil der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzen.

### Eine darstellende `<canvas>` konfigurieren

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt zurück, das anschließend mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Pipeline-Ressourcen darstellen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der verwendet werden kann, um Rohdaten zu speichern, die in GPU-Operationen verwendet werden sollen.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das eine Momentaufnahme eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, die als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Ein Verweis auf ein internes Shader-Modul-Objekt, ein Container für den WGSL-Shader-Code, der von einer Pipeline an die GPU zur Ausführung übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der zur Speicherung von 1D-, 2D- oder 3D-Arrays von Daten, wie Bildern, in GPU-Rendering-Operationen verwendet wird.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige Teilmengen der von einer bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturunterressourcen.

### Pipelines darstellen

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von zusammen zu bindenden Ressourcen und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und wird als Vorlage verwendet, wenn [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s erstellt werden.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Compute-Shader-Phase und kann in einer [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die von einer Pipeline verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Phasen und kann in einer [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle kodieren und an die GPU übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgezeichnete Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehlscodierer dar, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert mit der Steuerung der Compute-Shader-Phase verbundene Befehle, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgestellt werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung der auf der GPU kodierten Befehle.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Eine Hülle für voraufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um voraufgezeichnete Befehlsbündel zu erstellen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode jederzeit wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert mit der Steuerung der Vertex- und Fragment-Shader-Phasen verbundene Befehle, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgestellt werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen zu Rendering-Pässen ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen zu Pässen wie Okklusions- oder Zeitstempel-Abfragen aufzuzeichnen.

### Fehler debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, generiert vom GPU-Shader-Modul-Compiler, um Probleme mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne Informations-, Warn- oder Fehlermeldung dar, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Das Basis-Interface für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis erfasst werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis erfasst werden. Zeigt an, dass ein Vorgang aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis erfasst werden. Zeigt an, dass nicht genügend freier Speicherplatz vorhanden war, um den angeforderten Vorgang abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der empfangen wird, wenn ein von einer [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebenes {{jsxref("Promise")}} ablehnt.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis erfasst werden. Beschreibt einen Anwendungsfehler, der angibt, dass ein Vorgang die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

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

## Weitere Informationen

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, kein Canvas](https://surma.dev/things/webgpu/)
