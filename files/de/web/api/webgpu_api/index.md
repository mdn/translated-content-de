---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API), bietet bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web im Hinblick auf grafische Fähigkeiten revolutionierte, nachdem es erstmals um 2011 erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafiksammlung, die es ermöglicht, dass Webseiten Rendering-Berechnungen direkt an die GPU des Geräts übergeben, die dann in sehr hoher Geschwindigkeit verarbeitet werden, und das Ergebnis in einem {{htmlelement("canvas")}}-Element gerendert wird.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache zur Erstellung von WebGL-Shader-Code sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um die Entwicklung von WebGL-Anwendungen zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive, webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und vieles mehr zu erstellen.

Jedoch weist WebGL einige grundlegende Probleme auf, die angesprochen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs entstanden – die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [Vulkan von der Khronos Group](https://www.vulkan.org/) – die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit für WebGL) geplant, so dass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird in Zukunft neue Funktionen hinzugefügt.
- WebGL ist vollständig auf den Anwendungsfall des Zeichnens und Renderns von Grafiken auf eine Leinwand ausgerichtet. Es kann allgemeine GPU (GPGPU)-Berechnungen nicht gut handhaben. GPGPU-Berechnungen werden immer wichtiger für viele verschiedene Anwendungsfälle, zum Beispiel solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden immer anspruchsvoller, sowohl hinsichtlich der Anzahl der Objekte, die gleichzeitig gerendert werden sollen, als auch hinsichtlich der Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme durch Bereitstellung einer aktualisierten, allgemeinen Architektur, die mit modernen GPU-APIs kompatibel ist und sich "webartiger" anfühlt. Es unterstützt Grafik-Rendering, besitzt jedoch auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite signifikant günstiger und unterstützt moderne GPU-Rendering-Funktionen wie rechenbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Tiefenunschärfesimulation. Zudem kann es teure Berechnungen wie Culling und skinnierte Modelltransformationen direkt auf der GPU ausführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Geräte-GPU und einem Browser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, während Sie beginnen, WebGPU zu lernen:

![Ein grundlegendes Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, einige jedoch mehr als eine. Es gibt verschiedene GPU-Typen:

  - Integrierte GPUs, die auf derselben Platine wie die CPU liegen und deren Speicher teilen.
  - Diskrete GPUs, die auf ihrer eigenen Platine, getrennt von der CPU, leben.
  - Software-„GPUs“, die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU verfügbar hat, obwohl das obenstehende Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt effektiv eine physische GPU und einen Treiber dar, die auf dem zugrunde liegenden System in Ihrem Code verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App auf GPU-Funktionen in einer abgeschlossenen Weise zugreifen kann. Logische Geräte müssen Multiplexing-Funktionen bereitstellen. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von vielen Web-Apps. Jede Web-App muss WebGPU isoliert für Sicherheits- und Logikgründe nutzen können.

## Zugriff auf ein Gerät

Ein logisches Gerät – dargestellt durch eine Instanz des Objekts [`GPUDevice`](/de/docs/Web/API/GPUDevice) – ist die Basis, auf der eine Web-App auf alle Funktionen von WebGPU zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die Eigenschaft [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität aus einem Worker verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen Hochleistungs- oder Niedrigenergieadapter anfordern können. Wenn dies nicht enthalten ist, bietet das Gerät Zugriff auf den Standardadapter, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Grenzen angeben können, die Sie für das logische Gerät wünschen. Wenn dies nicht enthalten ist, hat das bereitgestellte Gerät eine vernünftige, allgemeine Spezifikation, die für die meisten Zwecke ausreichend ist.

Zusammengefügt mit einigen Funktionsprüfungen könnte der obige Prozess wie folgt erreicht werden:

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

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, kann jedoch auch Grafiken unsichtbar rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten, die in die GPU eingespeist werden, verwendet, um eine Reihe von Vertexen im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertexe werden dann in Primitiven wie Dreiecke (den grundlegenden Baustein gerenderter Grafiken) zusammengefügt und von der GPU gerastert, um herauszufinden, welche Pixel jedes auf der Zeichenleinwand abdecken soll.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den vom Vertex-Shader erzeugten Primitiven abgedeckt wird. Diese Berechnungen nutzen häufig Eingabedaten wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Compute-Pipeline ist für allgemeine Berechnungen gedacht. Eine Compute-Pipeline enthält eine einzige Compute-Stufe, in der ein Compute-Shader allgemeine Daten verarbeitet, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben erwähnten Shader sind Sätze von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer niedrigen Sprache mit Rust-ähnlicher Syntax namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt verschiedene Möglichkeiten, wie Sie eine WebGPU-App architektonisch gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Erstellen Sie Shader-Module](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Holen und konfigurieren Sie den Canvas-Kontext](#holen_und_konfigurieren_sie_den_canvas-kontext): Holen Sie den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn, um Informationen darüber zu erhalten, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, wie beispielsweise eine, die nur Compute-Pipelines verwendet.
3. [Erstellen Sie Ressourcen, die Ihre Daten enthalten](#erstellen_sie_einen_puffer_und_schreiben_sie_unsere_dreiecks-daten_hinein): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Erstellen Sie Pipelines](#definieren_und_erstellen_sie_die_render-pipeline): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine einzelne Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines zu unterschiedlichen Zwecken.
5. [Führen Sie einen Compute/Rendering-Durchlauf durch](#einen_rendering-durchgang_durchführen): Dieser beinhaltet eine Anzahl an Teilschritten:
   1. Erstellen Sie einen Befehlscodierer, der eine Reihe von Befehlen kodieren kann, um an die GPU zur Ausführung übergeben zu werden.
   2. Erstellen Sie ein Pass-Codierobjekt, in dem Compute/Render-Befehle ausgegeben werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, welche Puffer die erforderlichen Daten erhalten, wie viele Zeichenvorgänge ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einem Befehls-Puffer.
   5. Übergeben Sie den Befehls-Puffer der GPU über die Befehlswarteschlange des logischen Geräts.

In den unten stehenden Abschnitten werden wir uns eine grundlegende Render-Pipeline-Demo anschauen, um Ihnen zu ermöglichen, zu erkunden, was sie erfordert. Später werden wir auch ein [einfaches Compute-Pipeline](#grundlegende_compute-pipeline)-Beispiel untersuchen und betrachten, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert ein Datenstück, das eine Position und eine Farbe enthält, positioniert die Vertex entsprechend der gegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt die Vertex entsprechend der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-String, aber Sie können ihn überall speichern, von wo er leicht als Text abgerufen werden kann, um ihn in Ihr WebGPU-Programm einzuspeisen. Zum Beispiel ist eine andere gängige Praxis, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einfügen, indem Sie einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) verwenden, indem Sie Ihren Shader-Code als Eigenschaft in einem Deskriptor-Objekt übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Holen und konfigurieren Sie den Canvas-Kontext

In einer Render-Pipeline müssen wir einen Ort angeben, wohin die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem sichtbaren `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine Instanz von [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ihm ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Renderinformationen stammen, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern halbdurchsichtiger Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat); diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Erstellen Sie einen Puffer und schreiben Sie unsere Dreiecks-Daten hinein

Als nächstes werden wir unser WebGPU-Programm mit unseren Daten versorgen, in einer Form, die es verwenden kann. Unsere Daten werden zunächst in einer {{jsxref("Float32Array")}} bereitgestellt, die 8 Datenpunkte für jede Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Jedoch haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Im Hintergrund wird dieser Puffertyp im Speicher sehr eng mit den Kernen der GPU integriert gespeichert, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann auf diesen Speicher nicht von Prozessen zugegriffen werden, die auf dem Hostsystem laufen, wie beispielsweise dem Browser.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe an, die der Länge des `vertices`-Arrays entspricht, damit es alle Daten enthalten kann, sowie `VERTEX`- und `COPY_DST`-Nutzungsflaggen, um anzugeben, dass der Puffer als Vertex-Puffer und das Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten unsere Daten in den `GPUBuffer` mithilfe einer Zuordnungsoperation erhalten, wie wir im [Beispiel für die Compute-Pipeline](#grundlegende_compute-pipeline) verwenden, um Daten von der GPU zurück nach JavaScript zu lesen. In diesem Fall jedoch nutzen wir die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)-Verfahrensweise, die als Parameter den Puffer, in den geschrieben werden soll, die Datenquelle, von der geschrieben werden soll, sowie einen Offsetwert für jeden und die Größe der zu schreibenden Daten nimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser arbeitet dann heraus, wie die Daten am effizientesten geschrieben werden können.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Definieren und erstellen Sie die Render-Pipeline

Jetzt, wo wir unsere Daten in einem Puffer haben, ist der nächste Teil der Einrichtung, unsere Pipeline tatsächlich zu erstellen, bereit sie zum Rendern zu verwenden.

Zunächst einmal erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir früher in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format (was dem WGSL-Typ `vec4<f32>` entspricht) formatiert, und die Farbdaten beginnen bei einem Vorsprung von 16 Bytes in jedem Vertex. `arrayStride` gibt die Schrittweite an, also die Anzahl der Bytes, aus denen jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptor-Objekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem sich der relevante Code befindet (`shaderModule`) und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Zusätzlich liefern wir im Falle der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Falle unserer Fragment-Shader-Stufe liefern wir ein Array von Farbzielzuständen, die das spezifizierte Rendering-Format angeben (dies entspricht dem Format, das wir zuvor in unserem Canvas-Kontext konfiguriert haben).

Wir spezifizieren auch einen `primitive`-Zustand, der in diesem Fall nur die Art des Primitivs angibt, das wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [einfachen Compute-Pipeline](#grundlegende_compute-pipeline) sehen), das es der GPU ermöglicht, herauszufinden, wie die Pipeline am effizientesten im Voraus ausgeführt werden kann. Hier allerdings geben wir den Wert `auto` an, sodass die Pipeline automatisch ein implizites Bindungsgruppenlayout generieren wird, basierend auf allen Bindungen, die im Shader-Code definiert sind.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter an einen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Durchgang durchführen

Jetzt, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Durchgang durchführen und etwas auf unser `<canvas>` zeichnen. Um irgendwelche Befehle zu kodieren, die später an die GPU ausgestellt werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, die durch einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erstellt wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Durchgang, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode akzeptiert ein Deskriptor-Objekt als Parameter, dessen einzige verpflichtende Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht zum Rendern; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht auf eine angegebene Farbe „gelöscht“ werden soll, sobald sie geladen ist und bevor irgendeine Zeichnung stattfindet. Dies erzeugt den blauen Hintergrund hinter dem Dreieck.
3. Dass der Wert des aktuellen Rendering-Durchgangs für diesen Farbausstattungsgegenstand gespeichert werden soll.

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

Nun können wir die Methoden des Rendering-Pass-Codierers aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline anzugeben, die für den Rendering-Pass verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline zum Rendern übergeben wird. Der erste Parameter ist der Steckplatz, um den Vertex-Puffer festzulegen, und bezieht sich auf den Index des Elements im `vertexBuffers`-Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Bewegung. Es gibt Daten für drei Vertexe in unserem `vertexBuffer`, also setzen wir einen Vertexanzahlwert von `3`, um alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Sequenz der kodierten Befehle zu vervollständigen und an die GPU zu übermitteln, sind drei weitere Schritte erforderlich:

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz) zur Ausführung an die GPU. Die Warteschlange des Geräts ist über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Warteschlange hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) veranlassen wir die GPU, einige Werte zu berechnen, sie in einem Ausgabe-Puffer zu speichern, die Daten in einen Zwischenpuffer zu kopieren und diesen Zwischenpuffer dann so zu mappen, dass die Daten in JavaScript gelesen und in die Konsole geloggt werden können.

Die App folgt einer ähnlichen Struktur wie das einfache Rendering-Demo. Wir erstellen in gleicher Weise wie zuvor eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz und kapseln unseren Shader-Code in einer [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) mithilfe eines Aufrufs von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) ein. Der Unterschied hier besteht darin, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

```js
// Define global buffer size
const BUFFER_SIZE = 1000;

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
  if (global_id.x >= ${BUFFER_SIZE}) {
    return;
  }

  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### Erstellen Sie Puffer, die unsere Daten verarbeiten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten, einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, an den wir die Inhalte von `output` kopieren, der gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherpuffer spezifiziert, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der zum Lesen von JavaScript gemappt werden kann und das Ziel eines Kopiervorgangs sein wird.

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

### Erstellen Sie ein Bindungsgruppenlayout

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindungsgruppe, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst das Erstellen einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Diese Layout dient als Vorlage, an die sich Bindungsgruppen halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzigen Speicherpuffer, der an Bindungsschlitz 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), verwendbar in der Compute-Stufe der Pipeline, und mit dem definierten Zweck des Puffers als `storage`.

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

Dann erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Dieser Methode übergeben wir ein Deskriptor-Objekt, das das zu verwendende Bindungsgruppenlayout angibt und die Details der zu bindenden Variablen an den im Layout definierten Slot. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, das verwendet wird, wenn Sie eine Bindungsgruppe durch Aufrufen der Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) erstellen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Erstellen Sie eine Compute-Pipeline

Mit dem obrigen allem können wir nun eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen, und ein Pipelinedeskriptor-Objekt übergeben. Dies funktioniert ähnlich wie die Erstellung einer Render-Pipeline. Wir beschreiben den Compute-Shader, spezifizierend, in welches Modul der Code zu finden ist und welchen Einstiegspunkt wir haben. Wir geben auch ein `layout` für die Pipeline an, indem wir in diesem Fall ein Layout basierend auf dem zuvor definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellen.

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

Ein Unterschied hier im Vergleich zur Render-Pipeline ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Compute-Durchlauf durchführen

Das Durchführen eines Compute-Durchlaufs ähnelt der Struktur eines Rendering-Durchlaufs mit einigen unterschiedlichen Befehlen. Zum Start wird der Pass-Codierer mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Wenn die Befehle ausgegeben werden, verwenden wir die Pipeline in ähnlicher Weise wie zuvor, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) nutzen. Wir verwenden dann jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten anzugeben, die in der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die verwendet werden sollen, um die Berechnungen auszuführen.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### Lesen der Ergebnisse zurück zu JavaScript

Bevor wir die kodierten Befehle zur Ausführung an die GPU übermitteln, indem wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) verwenden, kopieren wir den Inhalt des `output`-Puffers in den `stagingBuffer`-Puffer mithilfe von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

```js
// Copy output buffer to staging buffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Source offset
  stagingBuffer,
  0, // Destination offset
  BUFFER_SIZE,
);

// End frame by passing array of command buffers to command queue for execution
device.queue.submit([commandEncoder.finish()]);
```

Sobald die Ausgangsdaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten auf den Zwischenbereich zu mappen, eine Referenz auf den gemappten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu erhalten, die Daten in JavaScript zu kopieren und sie dann in die Konsole zu protokollieren. Wir heben die Zuordnung des `stagingBuffer` auch auf, wenn wir fertig sind.

```js
// map staging buffer to read results back to JS
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Length
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU-Fehlerbehandlung

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der auf den Rückgabewert eines ungültigen Aufrufs angewiesen ist, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als „ansteckend“ bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerbereichs-Stack. Dieser Stack ist zunächst leer, aber Sie können einen Fehlerbereich in den Stack schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies poppt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das in ein Objekt aufgelöst wird ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in „Validierungs“-Abschnitten, wo angebracht, die Kriterien zur Vermeidung von Fehlern auflisten. Siehe zum Beispiel den [`GPUDevice.createBindGroup()`-Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, z. B. Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es gibt keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollen, dass Sie die korrekte Deskriptor-Objektstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwicklerkontrolliert sind. Einige der Fehlerkriterien basieren ausschließlich auf internen Faktoren und sind für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen über die Fehlerbehandlung von WebGPU im Erklärer finden — siehe [Objektgültigkeit und Zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [Beste Praktiken zur Fehlerbehandlung bei WebGPU](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche Praxisbeispiele und Ratschläge.

> [!NOTE]
> Die historische Art und Weise, Fehler in WebGL zu handhaben, ist die Bereitstellung einer Methode [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) zur Rückgabe von Fehlerinformationen. Problematisch daran ist, dass sie synchron Fehler zurückgibt, was schlecht für die Performance ist – jeder Aufruf erfordert eine Hin- und Rückfahrt zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Ihr Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängenden Code-Stücken durchlecken können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Startpunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapter-Informationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität genutzt wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setartiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Grenzen, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfigurieren eines Renderings `<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Repräsentieren von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um Rohdaten zu speichern, die bei GPU-Operationen verwendet werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnappschuss enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz zu einem internen Shader-Modulobjekt, ein Container für WGSL-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU gesendet werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, die bei GPU-Rendering-Operationen verwendet werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige Unterressourcen der Texturen, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert wird.

### Repräsentieren von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen in einer Gruppe gebunden werden und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und dient als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert die Compute-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die bei der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Kodieren und Übermitteln von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlscodierer, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die mit der Kontrolle der Compute-Shader-Stufe in Verbindung stehen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung kodierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um vorab Befehlsbündel aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die mit der Kontrolle der Vertex- und Fragment-Shader-Stufen zu tun haben, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der allgemeinen Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Ausführen von Abfragen auf Rendering-Passes

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen auf Pässen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempel-Abfragen.

### Fehler beim Debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, generiert vom GPU-Shader-Modulcompiler, um Probleme im Zusammenhang mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warnungs- oder Fehlermeldung, die vom GPU-Shader-Modulcompiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis empfunden werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis empfunden werden. Zeigt an, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlschlug, selbst wenn alle Validierungsanforderungen erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis empfunden werden. Zeigt an, dass nicht genügend freier Speicher verfügbar war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Ausfall. Der Wert, der bei einer retournierten {{jsxref("Promise")}}, die durch einen Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird, erhalten wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Event-Objekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Event empfunden werden. Beschreibt einen Anwendungsfehler, der angibt, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU beste Praktiken](https://toji.dev/webgpu-best-practices/)
- [WebGPU-Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
