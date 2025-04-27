---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 77d90a23ee0a3b5486a7963f68ad4e56efb06a7b
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu verwenden, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugang zu fortschrittlicheren GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es erstmals um 2011 erschienen ist. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafiksammlung, die es ermöglicht, dass Webseiten Render-Berechnungen direkt an die GPU des Geräts weitergeben, um sie mit sehr hohen Geschwindigkeiten zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element darzustellen.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex, weshalb mehrere WebGL-Bibliotheken erstellt wurden, um das Schreiben von WebGL-Anwendungen zu erleichtern. Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungswerkzeuge, VR- und AR-Erfahrungen und mehr zu erstellen.

WebGL weist jedoch einige grundlegende Probleme auf, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation von nativen GPU-APIs erschienen — die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Für OpenGL (und damit WebGL) sind keine weiteren Updates geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird in Zukunft neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendern auf einer Leinwand. Es behandelt allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, zum Beispiel solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der Objekte, die gleichzeitig gerendert werden müssen, als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme und bietet eine aktualisierte allgemeine Architektur, die mit modernen GPU-APIs kompatibel ist und sich mehr "webbəhaft" anfühlt. Es unterstützt grafisches Rendern, aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendern einzelner Objekte ist auf der CPU-Seite erheblich günstiger und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Schärfentiefe-Simulation. Darüber hinaus kann es teure Berechnungen wie das Ausblenden und die Transformation von geskinnten Modellen direkt auf der GPU verarbeiten.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Unterschiedliche GPU-Typen stehen zur Verfügung:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Befehle werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU verfügbar hat, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/einem Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers kümmert sich um die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und Treiber, die im zugrunde liegenden System verfügbar sind, in Ihrem Code.
- Ein logisches Gerät ist eine Abstraktion, durch die eine einzige Web-App in einer isolierten Weise auf GPU-Funktionen zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Die GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen genutzt, einschließlich potenziell vieler Web-Apps. Jede Web-App muss in der Lage sein, aus Sicherheits- und Logikgründen isoliert auf WebGPU zuzugreifen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — ist die Basis, von der aus eine Webanwendung auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionen von einem Worker aus nutzen) gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen leistungsstarken oder energieeffizienten Adapter anfordern können. Wenn dies nicht enthalten ist, stellt das Gerät den Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Grenzen angeben können, die Sie für das logische Gerät wünschen. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige allgemeine Spezifikation haben, die für die meisten Zwecke gut genug ist.

Diese Schritte mit einigen Funktionsabfragen kombiniert, könnte der oben genannte Prozess wie folgt erreicht werden:

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

  // ...
}
```

## Pipelines und Shaders: Struktur einer WebGPU-Anwendung

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Rendering-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken offline rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten akzeptiert, die in die GPU eingespeist werden, und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Übersetzung oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (dem Grundbaustein der gerenderten Grafiken) zusammengesetzt und von der GPU gerastert, um herauszufinden, welche Pixel jedes auf der Zeichen-Leinwand abdecken soll.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes von den Primitiven abgedeckte Pixel berechnet, die vom Vertex-Shader erzeugt wurden. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Berechnungspipeline ist für allgemeine Berechnungen vorgesehen. Eine Berechnungspipeline enthält eine einzige Berechnungsstufe, in der ein Berechnungsshader allgemeine Daten nimmt, sie parallel in einer bestimmten Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis dann in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben genannten Shaders sind Sammlungen von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shaders werden in einer niedrigstufigen Rust-ähnlichen Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-Anwendung gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Den Canvas-Kontext abrufen und konfigurieren](#canvas-kontext_abrufen_und_konfigurieren): Abrufen des `webgpu`-Kontexts eines `<canvas>`-Elements und Konfigurieren des Kontexts, damit er Informationen darüber erhält, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht notwendig, wenn Ihre Anwendung keine grafische Ausgabe hat, z.B. eine, die nur Pipelines berechnet.
3. [Erstellen von Ressourcen mit Ihren Daten](#einen_puffer_erstellen_und_unsere_dreiecksdaten_hinein_schreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder Texturen gespeichert werden, um von Ihrer Anwendung darauf zugegriffen zu werden.
4. [Erstellen von Pipelines](#die_render-pipeline_definieren_und_erstellen): Definieren von Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shaders und Ressourcenlayouts, und dann Pipelines aus diesen erstellen. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht-triviale Anwendungen enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Durchführung eines Berechnungs-/Rendering-Durchlaufs](#durchführung_eines_rendering-durchlaufs): Dies beinhaltet eine Reihe von Unterschritten:
   1. Erstellen eines Befehlscoders, der eine Reihe von Befehlen kodieren kann, die an die GPU zum Ausführen übergeben werden sollen.
   2. Erstellen eines Pass-Encoder-Objekts, auf dem Berechnungs-/Render-Befehle ausgeführt werden.
   3. Ausführen von Befehlen zur Angabe, welche Pipelines verwendet werden sollen, aus welchen Puffer(n) die erforderlichen Daten abgerufen werden sollen, wie viele Zeichenoperationen (im Fall von Render-Pipelines) ausgeführt werden sollen usw.
   4. Beenden Sie die Liste der Befehle und kapseln Sie sie in einem Befehlsbuffer ein.
   5. Übergeben Sie den Befehlspuffer über die Befehlswarteschlange des logischen Geräts an die GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen zu ermöglichen, zu erforschen, was dafür erforderlich ist. Später werden wir auch ein [grundlegendes Berechnungs-Pipeline](#grundlegende_berechnungs-pipeline)-Beispiel untersuchen und schauen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen soliden blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert ein Datenstück, das eine Position und eine Farbe enthält, positioniert das Vertex gemäß der gegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten der Vertex-Shader-Stufe und färbt das Vertex gemäß der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-Literal, aber Sie können ihn überall speichern, wo er leicht als Text abgerufen und in Ihr WebGPU-Programm eingespeist werden kann. Zum Beispiel ist es eine weitere übliche Praxis, Shaders innerhalb eines {{htmlelement("script")}}-Elements zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) einfügen, indem Sie Ihren Shader-Code als Eigenschaft innerhalb eines Deskriptorobjekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Canvas-Kontext abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafiken gerendert werden sollen. In diesem Fall holen wir uns eine Referenz auf ein sichtbares `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ihm ein Optionsobjekt mit der [`GPUDevice`](/de/docs/Web/API/GPUDevice) übergeben, von der die Rendering-Informationen stammen werden, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zu verwenden; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecksdaten hinein schreiben

Als nächstes werden wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung stellen, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jedes Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird dieser Puffer in einem Speicher gespeichert, der sehr stark in die Kerne der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Ein Nebeneffekt ist, dass dieser Speicher nicht von Prozessen auf dem Host-System, wie dem Browser, zugegriffen werden kann.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, und `VERTEX` und `COPY_DST` Nutzungsflaggen, die angeben, dass der Puffer als Vertex-Puffer und das Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Vorgehen zum Einfügen unserer Daten in den `GPUBuffer` mittels eines Mapping-Vorgangs handhaben, so wie wir es im [Berechnungs-Pipeline-Beispiel](#grundlegende_berechnungs-pipeline) verwenden, um Daten von der GPU zurück nach JavaScript zu lesen. In diesem Fall werden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) Komfortmethode verwenden, die als Parameter den Puffer enthält, in den geschrieben werden soll, die Datenquelle, aus der geschrieben werden soll, einen Offsetwert für jeden und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays angegeben). Der Browser berechnet dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Nachdem wir unsere Daten in einem Puffer haben, besteht der nächste Einrichtungsschritt darin, unsere Pipeline tatsächlich zu erstellen, um sie für das Rendering bereit zu machen.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir zuvor in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben — jedes Vertex hat Positions- und Farbdaten. Beide sind im Format `float32x4` formatiert (was auf den WGSL-Typ `vec4<f32>` abbildet), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt den Schritt an, d.h. die Anzahl der Bytes, aus denen jedes Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollten.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen angibt. Für beide Shader-Stufen spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Darüber hinaus geben wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers` Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe geben wir ein Array von Farbzielen an, die das angegebene Rendering-Format angeben (dieses entspricht dem in unserer Canvas-Kontextkonfiguration vorher angegebenen Format).

Wir spezifizieren auch ein `primitive` Objekt, das in diesem Fall nur den Typ des von uns zu zeichnenden Primitivs angibt und ein `layout` von `auto`. Die `layout` Eigenschaft beschreibt das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Anwendungen würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (Sie können ein Beispiel in unserer [Grundlegenden Berechnungs-Pipeline](#grundlegende_berechnungs-pipeline) sehen), was es der GPU ermöglicht, herauszufinden, wie die Pipeline am effizientesten im Voraus ausgeführt wird. Wir geben den Wert `auto` an, der dazu führen wird, dass die Pipeline ein implizites Bindungslayout basierend auf allen im Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) erstellen, basierend auf unserem `pipelineDescriptor` Objekt, indem wir es als Parameter an einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Aufruf übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Durchführung eines Rendering-Durchlaufs

Nun, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Durchlauf ausführen und etwas auf unser `<canvas>` zeichnen. Um jegliche Befehle zu kodieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Instanz erstellen, die durch einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erstellt wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Durchlauf, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, dessen einzige obligatorische Eigenschaft ein `colorAttachments` Array ist. In diesem Fall geben wir an:

1. Eine Texturansicht zum Rendern; wir erstellen eine neue Ansicht vom `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht einmal geladen und vor dem Zeichnen in eine bestimmte Farbe "gelöscht" werden soll. Dies ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Rendering-Durchlaufs für diesen Farbanhang gespeichert werden soll.

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

Jetzt können wir Methoden des Rendering-Pass-Encoders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline festzulegen, die für den Rendering-Durchlauf verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, das als Datenquelle zum Rendern an die Pipeline übergeben wird. Der erste Parameter ist der Slot, um den Vertex-Puffer dafür festzulegen, und ist eine Referenz auf den Index des Elements im `vertexBuffers` Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Bewegung. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, so dass wir einen Vertex-Zählwert von `3` festlegen, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Sequenz der kodierten Befehle zu bependen und an die GPU zu übergeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Reihenfolge der Renderpassbefehle zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekt zu kapseln.
3. Wir übergeben das [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) der Befehlswarteschlange des Geräts (vertreten durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) Instanz), um es an die GPU zu senden. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) Eigenschaft verfügbar und es können Arrays von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Instanzen über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Warteschlange hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Berechnungs-Pipeline

In unserem [grundlegenden Berechungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, in einem Ausgabepuffer speichern, die Daten in einen Zwischenspeicher kopieren, dann diesen Zwischenspeicher mappen, um die Daten wieder in JavaScript lesen und in der Konsole ausgeben zu können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) durch einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied besteht darin, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

### Puffer zum Bearbeiten unserer Daten erstellen

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Instanzen zum Bearbeiten unserer Daten, einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir die `output`-Inhalte kopieren werden, der gemappt werden kann, um zu ermöglichen, dass JavaScript auf die Werte zugreift.

- `output` wird als Speicherpuffer angegeben, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` wird als Puffer angegeben, der für das Lesen durch JavaScript gemappt werden kann und das Ziel einer Kopieroperation sein wird.

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

### Ein Bindungsgroupenlayout erstellen

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindungsgruppe, die für die Pipeline verwendet werden soll. Dies geschieht durch das Erstellen eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (durch einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck der GPU-Ressourcen wie die Puffer definiert, die in dieser Pipeline verwendet werden. Dieses Layout dient als Vorlage, an die sich Bindungsgruppen halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an den Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), das in der Berechnungsstufe der Pipeline verwendet werden kann und mit dem Zweck des Puffers als `storage` definiert ist.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Aufruf ein Deskriptorobjekt, das das Bindungsgruppenlayout spezifiziert, auf dem diese Bindungsgruppe basieren soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir Bindung 0 und spezifizieren, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout zum Erstellen einer Bindungsgruppe abrufen, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) verwenden. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungs-Pipeline erstellen

Mit allem, was oben bereits in Platz ist, können wir nun eine Berechnungs-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben den Berechnungs-Shader und spezifizieren, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, in diesem Fall basierend auf dem `bindGroupLayout`, das wir zuvor durch einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) definiert haben.

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

Ein Unterschied hier zum Layout der Render-Pipeline ist, dass wir keinen Primitiv-Typ spezifizieren, da wir nichts zeichnen.

### Durchführung eines Berechnungs-Durchlaufs

Das Ausführen eines Berechnungs-Durchlaufs ist in der Struktur ähnlich wie das Ausführen eines Rendering-Durchlaufs mit einigen unterschiedlichen Befehlen. Zum Start wird der Pass-Encoder unter Verwendung von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Wenn die Befehle ausgegeben werden, spezifizieren wir, welche Pipeline verwendet werden soll, auf die gleiche Weise wie zuvor, unter Verwendung von [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline). Wir verwenden jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten für die Berechnung spezifizieren und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen zu spezifizieren, die verwendet werden sollen, um die Berechnungen auszuführen.

Wir signalisieren dann das Ende der Renderpass-Befehlssequenz mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Ergebnisse zurück nach JavaScript lesen

Bevor die kodierten Befehle zur Ausführung an die GPU übergeben werden, verwenden wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit), um den Inhalt des `output`-Puffers in den `stagingBuffer` Puffer zu kopieren, unter Verwendung von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den internen Speicher zuzuordnen, eine Referenz auf den zugeordneten Bereich zu erhalten, mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), die Daten in JavaScript zu kopieren und sie in der Konsole zu protokollieren. Wir lösen auch die Zuordnung des `stagingBuffer`, sobald wir mit ihm fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der Problemaufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf erfolgt, der auf den Rückgabewert eines ungültigen Aufrufs angewiesen ist, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz verwaltet ihren eigenen Fehlerereichstapel. Dieser Stapel ist anfänglich leer, aber Sie können einen Fehlerbereich beginnen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Fehlererfassung fertig sind, können Sie das Ende der Erfassung signalisieren, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich aus dem Stapel und gibt ein {{jsxref("Promise")}} zurück, das sich auf ein Objekt auflöst ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen können zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in den "Validation"-Abschnitten, wo relevant, die Kriterien aufzählen, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den [`GPUDevice.createBindGroup()` Validation section](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur diejenigen Fehlerkriterien aufzuführen, die:

- Nicht offensichtlich sind, z.B. Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es ergibt keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollten, dass Sie die korrekte Deskriptor-Objektstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Von Entwicklern kontrolliert werden. Einige der Fehlerkriterien basieren ausschließlich auf internen Faktoren und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur Fehlerbehandlung in WebGPU finden Sie im Erklärer — siehe [Object validity and destroyed-ness](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Errors](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche praxisnahe Beispiele und Ratschläge.

> [!NOTE]
> Der historische Weg, Fehler in WebGL zu behandeln, ist die Bereitstellung einer Methode [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError), um Fehlerinformationen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Round-Trip zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängenden Codeabschnitten durchsickern können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die auf den Großteil der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [set-ähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützte Funktionalität beschreibt.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzen.

### Konfigurieren einer Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Durch Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` wird eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objektinstanz zurückgegeben, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}} Elements.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um rohe Daten für die Verwendung in GPU-Operationen zu speichern.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das eine [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) Snapshot enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Textur-Ressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Ein Verweis auf ein internes Shader-Modulobjekt, ein Container für WGSL-Shader-Code, der der GPU zur Ausführung durch eine Pipeline übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays zu speichern, wie z.B. Bilder, zur Verwendung in GPU-Rendering-Operationen.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Textur-Subressourcen.

### Darstellung von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Reihe von Ressourcen, die zusammen in einer Gruppe gebunden sind, und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungs-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die in einer Pipeline verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle für die GPU kodieren und einreichen

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung bei einer [`GPUQueue`](/de/docs/Web/API/GPUQueue) eingereicht werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlsencoder, der zum Kodieren von Befehlen verwendet wird, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Berechnungs-Shader-Stufe, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung der kodierten Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Bündel von Befehlen (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel im Voraus aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Vertex- und Fragment-Shader-Stufen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen von Rendering-Passes ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen auf Durchläufen aufzuzeichnen, wie z.B. Okklusions- oder Zeitstempelabfragen.

### Debugging von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Objekten, die vom GPU-Shader-Modul-Compiler generiert werden, um bei der Diagnose von Problemen mit dem Shader-Code zu helfen.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wird.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis angezeigt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis angezeigt werden. Weist darauf hin, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis angezeigt werden. Zeigt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Fehler in der Pipeline. Der Wert, der empfangen wird, wenn ein von einem {{jsxref("Promise")}} zurückgegebenes Ergebnis aus einem [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) Aufruf abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis angezeigt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Grundlegendes Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Explainer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
