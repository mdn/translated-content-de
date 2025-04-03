---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrundeliegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeinere GPU-Berechnungen, schnellere Operationen und Zugang zu fortschrittlicheren GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es etwa 2011 zum ersten Mal erschien. WebGL ist ein JavaScript-Port der Grafikbibliothek [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/), der es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex. Daher wurden mehrere WebGL-Bibliotheken geschaffen, um das Schreiben von WebGL-Apps zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu erstellen.

Allerdings gibt es bei WebGL einige grundlegende Probleme, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation von nativen GPU-APIs erschienen – die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [Vulkan der Khronos Group](https://www.vulkan.org/), die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird in Zukunft neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall, Grafiken zu zeichnen und in ein Canvas zu rendern. Es behandelt allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, zum Beispiel für solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme und bietet eine aktualisierte, allgemeine Architektur, die mit modernen GPU-APIs kompatibel ist und sich "webfreundlicher" anfühlt. Es unterstützt Grafikrasterung, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich günstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfen und Tiefenschärfesimulation. Darüber hinaus kann es teure Berechnungen wie das Aussortieren und die Transformation von skinnerten Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie anfangen, WebGPU zu lernen:

![Ein grundlegendes Stack-Diagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und ihren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden und von der CPU getrennt sind.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obenstehende Diagramm geht davon aus, dass das Gerät nur eine GPU hat.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU zur Verfügung hat, obwohl das obenstehende Diagramm davon ausgeht, dass das Gerät nur eine native API/einen Treiber hat.
- Die WebGPU-Implementierung eines Browsers kümmert sich um die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt in Ihrem Code effektiv eine physische GPU und einen Treiber dar, die auf dem zugrunde liegenden System verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Webanwendung auf die GPU-Fähigkeiten in einer abgeschotteten Weise zugreifen kann. Logische Geräte müssen Multiple-Access-Fähigkeiten bereitstellen. Eine physische GPU wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, einschließlich möglicherweise vieler Webanwendungen. Jede Webanwendung muss in der Lage sein, isoliert auf WebGPU zuzugreifen, aus Sicherheits- und Logikgründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Basis, von der eine Webanwendung ausgehend auf alle WebGPU-Funktionalitäten zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie die WebGPU-Funktionalität aus einem Worker heraus nutzen) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das Ihnen ermöglicht, beispielsweise einen Hochleistungs- oder energieeffizienten Adapter anzufordern. Wenn dies nicht enthalten ist, stellt das Gerät Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein options-Objekt (als Deskriptor bezeichnet), das verwendet werden kann, um die genauen Funktionen und Grenzen zu spezifizieren, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, hat das bereitgestellte Gerät eine angemessene allgemein verwendbare Spezifikation, die für die meisten Zwecke ausreichend ist.

In Kombination mit einigen Feature-Erkennungstests könnte der obige Prozess wie folgt umgesetzt werden:

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

## Pipelines und Shader: Struktur von WebGPU-Anwendungen

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, sie könnte aber auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader die Positionsdaten, die der GPU zugeführt werden, verwendet, um eine Reihe von Vertikalen im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitives wie Dreiecken (dem grundlegenden Baustein von gerenderten Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel jede auf der Zeichnungsleinwand abdecken sollte.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den durch den Vertex-Shader erzeugten Primitives abgedeckt wird. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails sowie die Position und Farbe virtueller Lichter bereitstellen.

- Eine Berechnungspipeline ist für allgemeine Berechnungen gedacht. Eine Berechnungspipeline enthält eine einzige Berechnungsstufe, in der ein Berechnungs-Shader allgemeine Daten entgegennimmt, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen hinweg verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben erwähnten Shader sind Mengen von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Rust-ähnlichen Sprache auf niedriger Ebene mit dem Namen [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, eine WebGPU-App zu gestalten, aber der Prozess wird wahrscheinlich die folgenden Schritte umfassen:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Kontext des Canvas abrufen und konfigurieren](#kontext_des_canvas_abrufen_und_konfigurieren): Holen Sie den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie es, um Informationen darüber zu erhalten, welche Grafiken von Ihrem logischen GPU-Gerät gerendert werden sollen. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, beispielsweise eine, die nur Berechnungspipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#einen_puffer_erstellen_und_unsere_dreiecksdaten_hineinschreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder -Texturen gespeichert werden, um von Ihrer App darauf zuzugreifen.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie daraus Pipelines. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Berechnung/Rendering-Durchgang ausführen](#einen_rendering-durchgang_ausführen): Dies umfasst mehrere Unterschritte:
   1. Erstellen Sie einen Befehlscodierer, der einen Satz von Befehlen codieren kann, die an die GPU ausgeführt werden sollen.
   2. Erstellen Sie ein Durchgangscodierobjekt, auf dem Berechnungs-/Rendering-Befehle ausgegeben werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchen Puffer(n) die erforderlichen Daten genommen werden sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Falle von Rendering-Pipelines) usw.
   4. Schließen Sie die Befehlsliste ab und kapseln Sie sie in einem Befehlsbuffer ein.
   5. Übergeben Sie den Befehlsbuffer über die Befehlsschlange des logischen Geräts an die GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen zu ermöglichen, zu erkunden, was es erfordert. Später werden wir auch ein Beispiel für eine [grundlegende Berechnungspipeline](#grundlegende_berechnungspipeline) ansehen, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenblock, der eine Position und eine Farbe enthält, positioniert den Vertex entsprechend der angegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und koloriert den Vertex entsprechend der angegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einer Template-Literal, aber Sie können ihn überall speichern, von wo aus er leicht abgerufen werden kann, um ihn in Ihr WebGPU-Programm einzulesen. Ein weiteres häufiges Vorgehen ist es, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code WebGPU zur Verfügung zu stellen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf packen und dabei Ihren Shader-Code als Eigenschaft innerhalb eines Deskriptorobjekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Kontext des Canvas abrufen und konfigurieren

In einer Render-Pipeline müssen wir angeben, wohin die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem onscreen `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ein options-Objekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, aus dem die Renderinformationen stammen werden, das Format, das die Texturen haben werden, und den Alphamodus, der beim Rendern halbtransparenter Texturen verwendet werden soll.

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

### Einen Puffer erstellen und unsere Dreiecksdaten hineinschreiben

Als nächstes versorgen wir unser WebGPU Programm mit unseren Daten in einer Form, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, der 8 Datenpunkte für jede Dreiecks-Vertex enthält — X, Y, Z, W für Position, und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bringen. Im Hintergrund wird diese Art von Puffer im Speicher sehr eng in die Kerne der GPU integriert gespeichert, um das gewünschte Hochleistungsverarbeitung zu ermöglichen. Ein Nebeneffekt ist, dass dieser Speicher nicht von Prozessen zugänglich ist, die auf dem Hostsystem laufen, wie z.B. dem Browser.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, und `VERTEX` und `COPY_DST`-Nutzungsflags, um anzugeben, dass der Puffer als Vertex-Puffer und Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Einbringen unserer Daten in den `GPUBuffer` mit einer Mapping-Operation handhaben, wie wir es im [Beispiel der Berechnungspipeline](#grundlegende_berechnungspipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) Convenience-Methode, die als Parameter den Puffer zum Schreiben, die Datenquelle, aus der geschrieben werden soll, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays angegeben) entgegennimmt. Der Browser ermittelt dann die effizienteste Möglichkeit, die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Jetzt, da wir unsere Daten in einen Puffer gebracht haben, ist der nächste Teil der Einrichtung die tatsächliche Erstellung unserer Pipeline, um sie zum Rendern zu verwenden.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir zuvor in unserem `vertices`-Array und unserer Vertex-Shader-Stufe gesehen haben – jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (das dem WGSL-Typ `vec4<f32>` entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in den jeweiligen Vertex. `arrayStride` gibt die Schrittweite an, was bedeutet, dass die Anzahl der Bytes, die jeden Vertex ausmachen, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code zu finden ist (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Darüber hinaus stellen wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt zur Verfügung, um den erwarteten Zustand unserer Vertex-Daten anzugeben. Im Fall unserer Fragment-Shader-Stufe geben wir ein Array von Farbzielen an, die das angegebene Rendering-Format angeben (dies stimmt mit dem zuvor in unserer Canvas-Kontextkonfiguration angegebenen Format überein).

Wir geben auch ein `primitive`-Objekt an, das in diesem Fall nur den Typ der Primitiven angibt, die wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [grundlegenden Berechnungspipeline](#grundlegende_berechnungspipeline) sehen), die es der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus am effizientesten ausgeführt wird. Wir geben jedoch den Wert `auto` an, der die Pipeline dazu veranlasst, ein implizites Bindungsgruppenlayout basierend auf allen Bindungen im Shader-Code zu generieren.

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

### Einen Rendering-Durchgang ausführen

Jetzt, da alle Setups abgeschlossen sind, können wir tatsächlich einen Rendering-Durchgang ausführen und etwas auf unser `<canvas>` zeichnen. Um Befehle zu kodieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, was durch einen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf erfolgen kann.

```js
const commandEncoder = device.createCommandEncoder();
```

Als Nächstes starten wir den Rendering-Durchgang, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, dessen einzige verpflichtende Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht einmal geladen und vor dem Zeichnen auf eine bestimmte Farbe "gelöscht" werden soll. Dies ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Rendering-Durchgangs für diese Farbbeilage gespeichert werden soll.

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

Jetzt können wir Methoden des Rendering-Durchgangscodierers aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline anzugeben, die für den Rendering-Durchgang verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle verwendet zu werden, die an die Pipeline übergeben werden soll, um sie zu rendern. Der erste Parameter ist der Slot, für den der Vertex-Puffer gesetzt werden soll, und ist eine Referenz auf das Element im `vertexBuffers`-Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, daher setzen wir einen Wert für die Vertices-Zählung auf `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Befehlssequenz abzuschließen und sie an die GPU auszugeben, sind noch drei weitere Schritte nötig.

1. Wir rufen die [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end)-Methode auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish)-Methode auf, um die Aufnahme der ausgeführten Befehlssequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz zu kapseln.
3. Wir reichen den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) über die Befehlsschlange des Geräts (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz) zur Ausführung bei der GPU ein. Die Geräteschlange ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann der Schlange über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf hinzugefügt werden.

Diese drei Schritte können durch die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Berechnungspipeline

In unserem [grundlegenden Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, diese in einem Ausgabepuffer speichern, die Daten in einen Staging-Puffer kopieren und dann diesen Staging-Puffer so abbilden, dass die Daten zurück ins JavaScript eingelesen und in der Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten: einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, auf den wir den `output`-Inhalt kopieren, der abgebildet werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` ist als ein Speicherpuffer angegeben, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` ist als Puffer angegeben, der für das Lesen durch JavaScript abgebildet werden kann und das Ziel einer Kopieroperation sein wird.

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

### Eine Bindungslayoutgruppe erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindungsgruppe an, die für die Pipeline verwendet werden soll. Dies beinhaltet zunächst die Erstellung einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindungsgruppen verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzigen Speicherpuffer, der an den Bindungsslot 0 gebunden ist (dies stimmt mit der relevanten Bindungsnummer im Shader-Code überein – `@binding(0)`), der in der Berechnungsstufe der Pipeline verwendet werden kann, und mit dem als `storage` definierten Zweck des Puffers.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindungslayout angibt, auf das sich diese Bindungsgruppe stützen soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir die Bindung 0 und spezifizieren, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es bei der Erstellung einer Bindungsgruppe zu verwenden, indem Sie die [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout)-Methode aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungspipeline erstellen

Mit all dem oben genannten an Ort und Stelle können wir jetzt eine Berechnungspipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie die Erstellung einer Render-Pipeline. Wir beschreiben den Berechnungs-Shader, indem wir angeben, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir geben auch ein `layout` für die Pipeline an, in diesem Fall erstellen wir ein Layout basierend auf dem zuvor definierten `bindGroupLayout` durch einen [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout)-Aufruf.

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

### Einen Berechnungsdurchgang ausführen

Das Ausführen eines Berechnungsdurchgangs ähnelt im Aufbau einem Rendering-Durchgang, mit einigen unterschiedlichen Befehlen. Zum Anfang wird der Durchgangscodierer mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle geben wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) an. Wir verwenden dann jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die für die Berechnung zu verwendenden Daten anzugeben, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die zur Durchführung der Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück zu JavaScript lesen

Bevor die kodierten Befehle mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Ausführung an die GPU übergeben werden, kopieren wir den Inhalt des `output`-Puffers in den `stagingBuffer`-Puffer mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Methode, um die Daten auf den Zwischenbereich abzubilden, eine Referenz auf den abgebildeten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu erhalten, die Daten in JavaScript zu kopieren und sie dann in der Konsole zu protokollieren. Wir heben auch die Abbildung des `stagingBuffer` auf, sobald wir damit fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wird ein weiterer Aufruf gemacht, der vom Rückgabewert eines ungültig gemachten Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz hält ihren eigenen Fehlerscopes-Stack. Dieser Stack ist zunächst leer, aber Sie können beginnen, einen Fehlerscope auf den Stack zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Scope vom Stack und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) aufgelöst wird, das den ersten Fehler beschreibt, der im Scope erfasst wurde, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validierung"-Abschnitten, wo es angebracht ist, die Kriterien auflisten, um Fehler zu vermeiden. Siehe beispielsweise den [Validation-Bereich zu `GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschlossen, nur Fehlerkriterien aufzulisten, die:

- Nicht-offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es bringt nichts zu sagen, dass Sie sicherstellen sollen, dass das korrekte Deskriptorobjektstruktur genutzt wird. Dies ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert werden. Einige der Fehlerkriterien basieren rein auf internen und sind für Webentwickler nicht wirklich relevant.

Mehr Informationen zur WebGPU-Fehlerbehandlung finden Sie im Erklärungsdokument – siehe [Objektgültigkeit und zerstörungsfreier Zustand](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [Best Practices zur WebGPU-Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling) bieten nützliche Beispiele aus der Praxis und Ratschläge.

> [!NOTE]
> Der historische Weg zur Fehlerbehandlung in WebGL ist die Bereitstellung einer [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da sie Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Round-Trip zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Ihr Zustandsmodell ist außerdem flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchsickern können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

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

### GPUDevices konfigurieren

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die auf die meisten WebGPU-Funktionalitäten zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setliken](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Grenzen, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Ein Rendering-`<canvas>` konfigurieren

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objektinstanz zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Ressourcen der Pipeline repräsentieren

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der zum Speichern roher Daten verwendet werden kann, um in GPU-Operationen verwendet zu werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das eine Momentaufnahme eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, die als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Textur-Ressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modulobjekt, einen Container für WGSL-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU übermittelt werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays, z.B. Bilder, zu speichern, um sie in GPU-Rendering-Operationen zu verwenden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Textur-Subressourcen.

### Pipelines darstellen

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die in einer Gruppe gebunden werden sollen und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck von zugehörigen GPU-Ressourcen wie Puffern, die in einer Pipeline verwendet werden, und wird als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungsshader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlskodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU enkodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgezeichnete Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übergeben werden kann.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehlscodierer dar, der zum Kodieren von Befehlen verwendet wird, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die sich auf die Steuerung der Berechnungsshader-Stufe beziehen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung von kodierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel vorzukodieren. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode wiederverwendet werden, so oft wie erforderlich.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen auf Rendering-Durchgängen durchführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen auf Durchgängen aufzuzeichnen, wie Okkulsions- oder Zeitstempelabfragen.

### Fehler Debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, das vom GPU-Shader-Modulkompilierer erzeugt wird, um Probleme mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modulkompilierer erzeugt wird.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost){{jsxref("Promise")}} aufgelöst wird und Informationen darüber bereitstellt, warum das Gerät verloren wurde.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Zeigt an, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Zeigt an, dass nicht genügend freier Speicherplatz vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Fehlschlagen. Der Wert, den man erhält, wenn ein {{jsxref("Promise")}} zurückzugeben, angezeigt durch einen [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Aufruf, ablehnt.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice)[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice)[`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis aufgedeckt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Grundlegendes Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Grundlegendes Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beste Praktiken für WebGPU](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärungsdokument](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
