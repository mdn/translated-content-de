---
title: WebGPU-API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU-API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger der {{domxref("WebGL_API", "WebGL", "", "nocode")}}, bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen (GPGPU), schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Verwendung

Es ist nicht übertrieben zu sagen, dass {{domxref("WebGL_API", "WebGL", "", "nocode")}} das Web in Bezug auf grafische Fähigkeiten revolutionierte, als es erstmals um 2011 erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikschnittstelle, die es ermöglicht, Rendering-Berechnungen direkt zur GPU des Geräts zu übergeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die [GLSL](https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)) Sprache, die zur Erstellung von WebGL-Shader-Code verwendet wird, sind komplex, weshalb mehrere WebGL-Bibliotheken entwickelt wurden, um die Erstellung von WebGL-Anwendungen zu vereinfachen: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu entwickeln.

WebGL weist jedoch einige grundlegende Probleme auf, die behoben werden mussten:

- Seit der Veröffentlichung von WebGL sind neue Generationen von nativen GPU-APIs erschienen — die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [Vulkan der Khronos Group](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Für OpenGL (und damit WebGL) sind keine weiteren Updates geplant, sodass keine dieser neuen Funktionen hinzugefügt wird. WebGPU hingegen wird künftig neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einem Canvas. Es verarbeitet allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut. GPGPU-Berechnungen werden immer wichtiger für viele verschiedene Anwendungsfälle, beispielsweise für solche, die auf maschinellem Lernen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der Objekte, die gleichzeitig gerendert werden müssen, als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU begegnet diesen Problemen, indem es eine aktualisierte, allgemeine Architektur bereitstellt, die mit modernen GPU-APIs kompatibel ist und sich mehr „webbasiert“ anfühlt. Sie unterstützt das Rendern von Grafiken, bietet jedoch auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger, und sie unterstützt moderne GPU-Rendering-Funktionen wie auf Berechnungen basierende Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Tiefenschärfensimulation. Darüber hinaus kann sie aufwendige Berechnungen wie das Kulling und die Transformation von animierten Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsschichten zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist hilfreich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein grundlegendes Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte verfügen über GPUs. Die meisten Geräte haben nur eine GPU, einige haben jedoch mehr als eine. Es gibt verschiedene GPU-Typen:

  - Integrierte GPUs, die auf derselben Platine wie die CPU integriert sind und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden, getrennt von der CPU.
  - Software-„GPUs“, implementiert auf der CPU.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber zur GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU zur Verfügung hat, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers sorgt für die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt effektiv eine physische GPU und einen Treiber dar, die im zugrunde liegenden System in Ihrem Code verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App auf GPU-Fähigkeiten in einer abgeschotteten Weise zugreifen kann. Logische Geräte werden benötigt, um Multiplexing-Fähigkeiten bereitzustellen. Eine GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen verwendet, möglicherweise auch von vielen Web-Apps. Jede Web-App muss WebGPU isoliert für Sicherheits- und Logikzwecke nutzen können.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine {{domxref("GPUDevice")}} Objektinstanz — ist die Basis, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die {{domxref("Navigator.gpu")}} Eigenschaft (oder {{domxref("WorkerNavigator.gpu")}}, wenn Sie WebGPU-Funktionen aus einem Worker heraus verwenden) gibt das {{domxref("GPU")}} Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die {{domxref("GPU.requestAdapter", "GPU.requestAdapter()")}} Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen Adapter mit hoher Leistung oder niedrigem Energieverbrauch anfordern können. Wenn dies nicht angegeben wird, stellt das Gerät Zugang zum Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über {{domxref("GPUAdapter.requestDevice()")}} angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als „Descriptor“ bezeichnet), das verwendet werden kann, um die genauen Funktionen und Grenzen anzugeben, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät über eine vernünftige Spezifikation für allgemeine Zwecke verfügen, die für die meisten Zwecke geeignet ist.

Wenn man diese Schritte zusammen mit einigen Funktionsüberprüfungen zusammenfasst, könnte der obige Prozess wie folgt aussehen:

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

## Pipelines und Shader: Struktur einer WebGPU-App

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines behandeln:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, sie könnte aber auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptstufen:

  - Eine Vertix-Stufe, in der ein Vertex-Shader die Positionsdaten entgegennimmt, die in die GPU eingespeist werden, und sie verwendet, um eine Reihe von Vertizes im dreidimensionalen Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertizes werden dann in Primitive wie Dreiecke (den grundlegenden Baustein gerenderter Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf dem Zeichnungs-Canvas abdecken soll.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den vom Vertex-Shader erzeugten Primitiven abgedeckt wird. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Compute-Pipeline ist für allgemeine Berechnungen. Eine Compute-Pipeline enthält eine einzelne Berechnungsstufe, in der ein Compute-Shader allgemeine Daten verarbeitet, diese in einer bestimmten Anzahl von Arbeitsgruppen parallel verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können beliebige Daten enthalten.

Die oben genannten Shader sind Satz von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer niederleveligen, an Rust erinnernden Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-App gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte beinhalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und packen Sie ihn in ein oder mehrere Shader-Module.
2. [Canvas-Kontext abrufen und konfigurieren](#den_canvas-kontext_abrufen_und_konfigurieren): Rufen Sie den `webgpu`-Kontext eines `<canvas>`-Elements ab und konfigurieren Sie ihn so, dass Informationen darüber, welche Grafiken von Ihrem GPU-Logikgerät gerendert werden sollen, empfangen werden können. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, beispielsweise eine, die nur Compute-Pipelines verwendet.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#einen_puffer_erstellen_und_unsere_dreiecksdaten_hineinschreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffer oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine einzelne Pipeline, aber nicht triviale Apps enthalten meist mehrere Pipelines für verschiedene Zwecke.
5. [Einen Berechnungs-/Render-Durchlauf ausführen](#eine_rendering-pass_ausführen): Dies umfasst eine Reihe von Teilschritten:
   1. Erstellen Sie einen Befehlsencoder, der eine Reihe von Befehlen kodieren kann, die zur Ausführung an die GPU übergeben werden.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Berechnungs-/Render-Befehle ausgeführt werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchem/n Puffer(n) die erforderlichen Daten abgerufen werden sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Schließen Sie die Befehlsliste ab und kapseln Sie sie in einen Befehls-Puffer.
   5. Übergeben Sie den Befehls-Puffer über die Befehlswarteschlange des logischen Geräts an die GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen die Möglichkeit zu geben, zu erkunden, was erforderlich ist. Später werden wir auch ein [grundlegendes Rechen-Pipeline](#grundlegende_rechen-pipeline)-Beispiel untersuchen, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen soliden blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenchunk, der eine Position und eine Farbe enthält, positioniert den Vertex entsprechend der gegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt den Vertex entsprechend der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-String, aber Sie können ihn überall speichern, wo er leicht als Text abgerufen werden kann, um in Ihr WebGPU-Programm eingespeist zu werden. Eine weitere gängige Praxis ist es, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit {{domxref("Node.textContent")}} abzurufen. Der richtige MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code WebGPU zugänglich zu machen, müssen Sie ihn in einem {{domxref("GPUShaderModule")}} speichern, indem Sie einen Aufruf von {{domxref("GPUDevice.createShaderModule()")}} durchführen und Ihren Shader-Code als Eigenschaft innerhalb eines Deskriptor-Objekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Den Canvas-Kontext abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz auf ein sichtbares `<canvas>`-Element und rufen {{domxref("HTMLCanvasElement.getContext()")}} mit einem Parameter von `webgpu` auf, um dessen GPU-Kontext (eine {{domxref("GPUCanvasContext")}}-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von {{domxref("GPUCanvasContext.configure()")}}, indem wir ihm ein Optionsobjekt übergeben, das das {{domxref("GPUDevice")}} enthält, von dem die Rendering-Informationen stammen, das Format, das die Texturen haben werden, und den Alphamodus, der beim Rendern halbtransparenter Texturen verwendet wird.

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
> Die bewährte Methode zur Bestimmung des Texturformats besteht darin, die {{domxref("GPU.getPreferredCanvasFormat()")}}-Methode zu verwenden; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecksdaten hineinschreiben

Als nächstes stellen wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jeden Dreieck-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen {{domxref("GPUBuffer")}} bekommen. Hinter den Kulissen wird dieser Puffer-Typ in einem Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochgeschwindigkeitsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen auf dem Hostsystem, wie dem Browser, zugegriffen werden.

Der {{domxref("GPUBuffer")}} wird durch einen Aufruf von {{domxref("GPUDevice.createBuffer()")}} erstellt. Wir geben ihm eine Größe an, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, und `VERTEX`- und `COPY_DST`-Nutzungsflaggen, um anzugeben, dass der Puffer als Vertex-Puffer und Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // machen Sie ihn groß genug, um Vertizes zu speichern
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten den Zugriff auf unsere Daten im `GPUBuffer` mit einer Mapping-Operation handhaben, wie wir es im [Compute-Pipeline-Beispiel](#grundlegende_rechen-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische {{domxref("GPUQueue.writeBuffer()")}}-Komfortmethode, die als Parameter den Puffer zum Schreiben, die Datenquelle zum Schreiben, einen Offset-Wert für jedes und die Größe der zu schreibenden Daten nimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser ermittelt dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Jetzt, da wir unsere Daten in einen Puffer gebracht haben, ist der nächste Teil der Einrichtung, unsere Pipeline zu erstellen, um für das Rendering bereit zu sein.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt genau das, was wir zuvor in unserem `vertices`-Array und unserer Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (was dem WGSL-Typ `vec4<f32>` entspricht), und die Farbdaten beginnen mit einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt den Abstand an, was die Anzahl der Bytes angibt, die jeden Vertex bilden, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

```js
const vertexBuffers = [
  {
    attributes: [
      {
        shaderLocation: 0, // Position
        offset: 0,
        format: "float32x4",
      },
      {
        shaderLocation: 1, // Farbe
        offset: 16,
        format: "float32x4",
      },
    ],
    arrayStride: 32,
    stepMode: "vertex",
  },
];
```

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen spezifizieren wir das {{domxref("GPUShaderModule")}}, in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe fungiert.

Außerdem stellen wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt bereit, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe geben wir ein Array von Farbzielzuständen an, die das spezifizierte Rendering-Format angeben (dies passt zu dem Format, das zuvor in unserer Canvas-Kontextkonfiguration angegeben wurde).

Wir spezifizieren auch einen `primitive`-Zustand, der in diesem Fall nur angibt, welchen Primitive-Typ wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines {{domxref("GPUPipelineLayout")}}-Objekts annehmen, das mit {{domxref("GPUDevice.createPipelineLayout()")}} erstellt wird (siehe ein Beispiel in unserer [grundlegenden Rechne-Pipeline](#grundlegende_rechen-pipeline)), was der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus am effizientesten ausgeführt wird. Hier jedoch spezifizieren wir den `auto`-Wert, der die Pipeline dazu veranlasst, ein implizites Bindgruppen-Layout basierend auf den im Shader-Code definierten Bindungen zu generieren.

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

Zum Schluss können wir eine {{domxref("GPURenderPipeline")}} basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter zu einem Aufruf der Methode {{domxref("GPUDevice.createRenderPipeline()")}} übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Eine Rendering-Pass ausführen

Jetzt, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um alle zu späteren Anweisungen an die GPU zu kodierenden Befehle zu kodieren, müssen Sie eine {{domxref("GPUCommandEncoder")}}-Instanz erstellen, was durch einen Aufruf von {{domxref("GPUDevice.createCommandEncoder()")}} geschieht.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine {{domxref("GPURenderPassEncoder")}}-Instanz mit einem Aufruf von {{domxref("GPUCommandEncoder.beginRenderPass()")}} erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter, dessen einziges obligatorisches Element ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht zum Rendern; wir erstellen eine neue Ansicht aus dem `<canvas>` über {{domxref("GPUTexture.createView", "context.getCurrentTexture().createView()")}}.
2. Dass die Ansicht nach dem Laden und vor dem Zeichnen auf eine bestimmte Farbe "gelöscht" werden soll. Dies ist, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Rendering-Passes für dieses Farb-Anhang gespeichert werden soll.

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

1. {{domxref("GPURenderPassEncoder.setPipeline()")}} wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline zu spezifizieren, die für den Rendering-Pass verwendet werden soll.
2. {{domxref("GPURenderPassEncoder.setVertexBuffer()")}} wird mit unserem `vertexBuffer`-Objekt aufgerufen, um es als Datenquelle zu verwenden, die zur Pipeline für das Rendering übergeben werden. Der erste Parameter ist der Slot, für den der Vertex-Puffer gesetzt werden soll, und verweist auf den Index des Elements im `vertexBuffers`-Array, welches das Layout dieses Puffers beschreibt.
3. {{domxref("GPURenderPassEncoder.draw()")}} setzt das Zeichnen in Gang. Im `vertexBuffer` sind Daten für drei Vertices enthalten, daher haben wir einen Vertex-Anzahlwert von `3` gesetzt, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Sequenz der Befehle fertig zu kodieren und an die GPU zu übermitteln, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode {{domxref("GPURenderPassEncoder.end()")}} auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode {{domxref("GPUCommandEncoder.finish()")}} auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in einem {{domxref("GPUCommandBuffer")}}-Objekt zu kapseln.
3. Wir übermitteln den {{domxref("GPUCommandBuffer")}} an die Befehlswarteschlange (dargestellt durch eine {{domxref("GPUQueue")}}-Instanz) des Geräts, um ihn an die GPU zu senden. Die Warteschlange des Geräts ist über die {{domxref("GPUDevice.queue")}}-Eigenschaft verfügbar, und ein Array von {{domxref("GPUCommandBuffer")}}-Instanzen kann über einen {{domxref("GPUQueue.submit()")}}-Aufruf der Warteschlange hinzugefügt werden.

Diese drei Schritte können mit den folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Rechen-Pipeline

In unserem [grundlegenden Rechen-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) bringen wir die GPU dazu, einige Werte zu berechnen, speichern diese in einem Ausgabepuffer, kopieren die Daten in einen Staging-Puffer und führen dann ein Mapping dieses Staging-Puffers durch, sodass die Daten herausgelesen und in JavaScript geloggt werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine {{domxref("GPUDevice")}}-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein {{domxref("GPUShaderModule")}} über einen Aufruf von {{domxref("GPUDevice.createShaderModule()")}}. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

```js
// Globale Puffergröße definieren
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
  // Vermeiden Sie den Zugriff auf den Puffer außerhalb der Grenzen
  if (global_id.x >= ${BUFFER_SIZE}) {
    return;
  }

  output[global_id.x] =
    f32(global_id.x) * 1000. + f32(local_id.x);
}
`;
```

### Puffer erstellen, um unsere Daten zu verarbeiten

In diesem Beispiel erstellen wir zwei {{domxref("GPUBuffer")}}-Instanzen, um unsere Daten zu bearbeiten: einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir den Inhalt von `output` kopieren, der gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` ist als Speicherpuffer spezifiziert, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` ist als Puffer spezifiziert, der zum Lesen durch JavaScript gemappt werden kann und das Ziel einer Kopieroperation sein wird.

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

### Erstellen eines Layouts für die Bindgruppe

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindgruppe zur Verwendung in der Pipeline. Dies beinhaltet zunächst das Erstellen einer {{domxref("GPUBindGroupLayout")}} (über einen Aufruf von {{domxref("GPUDevice.createBindGroupLayout()")}}), die die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage verwendet, an die sich Bindgruppen halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), der in der Berechnungsstufe der Pipeline verwendet werden kann und der Zweck des Puffers auf `storage` festgelegt ist.

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

Als nächstes erstellen wir eine {{domxref("GPUBindGroup")}} durch einen Aufruf von {{domxref("GPUDevice.createBindGroup()")}}. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Layout der Bindgruppe angibt, auf dem diese Bindgruppe basieren soll, und die Details der Variable, die an den im Layout definierten Slot gebunden werden soll. In diesem Fall deklarieren wir Bindung 0 und spezifizieren, dass der `output`-Puffer, den wir zuvor definiert haben, an ihn gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es beim Erstellen einer Bindgruppe zu verwenden, indem Sie die {{domxref("GPUComputePipeline.getBindGroupLayout()")}}-Methode aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe {{domxref("GPURenderPipeline.getBindGroupLayout()")}}.

### Eine Compute-Pipeline erstellen

Mit allem, was oben eingerichtet wurde, können wir jetzt eine Compute-Pipeline erstellen, indem wir {{domxref("GPUDevice.createComputePipeline()")}} aufrufen und ein Pipeline-Deskriptor-Objekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben das Compute-Shader, indem wir angeben, in welchem Modul der Code gefunden werden kann und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir in diesem Fall ein Layout basierend auf dem `bindGroupLayout` erstellen, das wir zuvor über einen {{domxref("GPUDevice.createPipelineLayout()")}}-Aufruf definiert haben.

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

Ein Unterschied hier zur Render-Pipeline-Konfiguration besteht darin, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Compute-Pass ausführen

Das Ausführen eines Compute-Passes ist im Aufbau dem Ausführen eines Rendering-Passes ähnlich, mit einigen unterschiedlichen Befehlen. Zunächst wird der Pass-Encoder mithilfe von {{domxref("GPUCommandEncoder.beginComputePass()")}} erstellt.

Beim Ausgeben der Befehle spezifizieren wir die Pipeline, die auf die gleiche Weise verwendet werden soll wie zuvor mit {{domxref("GPUComputePassEncoder.setPipeline()")}}. Wir verwenden dann jedoch {{domxref("GPUComputePassEncoder.setBindGroup()")}}, um festzulegen, dass wir unsere `bindGroup` verwenden möchten, um die Daten zu bestimmen, die in der Berechnung verwendet werden sollen, und {{domxref("GPUComputePassEncoder.dispatchWorkgroups()")}}, um die Anzahl der GPU-Arbeitsgruppen festzulegen, die zur Durchführung der Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mithilfe von {{domxref("GPURenderPassEncoder.end()")}}.

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### Die Ergebnisse an JavaScript zurücklesen

Bevor die kodierten Befehle zur Ausführung mit {{domxref("GPUQueue.submit()")}} an die GPU übermittelt werden, kopieren wir mit {{domxref("GPUCommandEncoder.copyBufferToBuffer()")}} den Inhalt des `output`-Buffers in den `stagingBuffer`-Puffer.

```js
// Kopiere den Ausgabepuffer in den Staging-Puffer
commandEncoder.copyBufferToBuffer(
  output,
  0, // Quelloffset
  stagingBuffer,
  0, // Zieloffset
  BUFFER_SIZE,
);

// Beenden des Frames, indem das Array von Befehlsbuffern zur Ausführung in die Befehlswarteschlange übergeben wird
device.queue.submit([commandEncoder.finish()]);
```

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die {{domxref("GPUBuffer.mapAsync()")}}-Methode, um die Daten in den Zwischenspeicher zu mappen, eine Referenz auf den gemappten Bereich mithilfe von {{domxref("GPUBuffer.getMappedRange()")}} abzurufen, die Daten in JavaScript zu kopieren und sie dann in der Konsole zu loggen. Wir entfernen auch das Mapping des `stagingBuffer`, sobald wir es nicht mehr benötigen.

```js
// Mapping des Staging-Buffers, um die Ergebnisse zurück nach JS zu lesen
await stagingBuffer.mapAsync(
  GPUMapMode.READ,
  0, // Offset
  BUFFER_SIZE, // Länge
);

const copyArrayBuffer = stagingBuffer.getMappedRange(0, BUFFER_SIZE);
const data = copyArrayBuffer.slice();
stagingBuffer.unmap();
console.log(new Float32Array(data));
```

## GPU-Fehlerbehandlung

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der sich auf den Rückgabewert eines ungültig gemachten Aufrufs verlässt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede {{domxref("GPUDevice")}}-Instanz pflegt ihren eigenen Fehlerbereich-Stack. Dieser Stack ist anfänglich leer, aber Sie können den Fehlerfangbereich auf den Stack legen, indem Sie {{domxref("GPUDevice.pushErrorScope()")}} aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit dem Erfassen von Fehlern fertig sind, können Sie die Erfassung durch Aufrufen von {{domxref("GPUDevice.popErrorScope()")}} beenden. Dies poppt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ({{domxref("GPUInternalError")}}, {{domxref("GPUOutOfMemoryError")}} oder {{domxref("GPUValidationError")}}) aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validierungs"-Abschnitten, wo es angebracht ist, die Kriterien auflisten, um Fehler zu vermeiden. Siehe zum Beispiel den [Validierungsabschnitt von `GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschlossen, lediglich die Fehlkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es macht keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollen, dass Sie die korrekte Deskriptorobjektstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwicklergesteuert sind. Einige der Fehlkriterien basieren rein auf internen Besonderheiten und sind für Webentwickler nicht wirklich relevant.

Sie finden weitere Informationen zur Fehlerbehandlung in WebGPU im Erklärungsdokument — siehe [Objektgültigkeit und Zerstörungsschritte](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche praktische Beispiele und Ratschläge.

> [!NOTE]
> Die historische Methode zur Fehlerbehandlung in WebGL besteht darin, eine {{domxref("WebGLRenderingContext.getError", "getError()")}}-Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da sie Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Hin- und Rückfahrt zur GPU und erfordert die Fertigstellung aller zuvor ausgegebenen Operationen. Ihr Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code durchlaufen können. Die Entwickler von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt der API

- {{domxref("Navigator.gpu")}} / {{domxref("WorkerNavigator.gpu")}}
  - : Der Einstiegspunkt der API — gibt das {{domxref("GPU")}}-Objekt für den aktuellen Kontext zurück.
- {{domxref("GPU")}}
  - : Der Ausgangspunkt zur Nutzung von WebGPU. Es kann verwendet werden, um einen {{domxref("GPUAdapter")}} zurückzugeben.
- {{domxref("GPUAdapter")}}
  - : Stellt einen GPU-Adapter dar. Von hier aus können Sie ein {{domxref("GPUDevice")}}, Adapterinformationen, Funktionen und Grenzen anfordern.
- {{domxref("GPUAdapterInfo")}}
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPUDevices

- {{domxref("GPUDevice")}}
  - : Stellt ein logisches GPU-Gerät dar. Über diese Hauptschnittstelle wird auf die Mehrheit der WebGPU-Funktionalitäten zugegriffen.
- {{domxref("GPUSupportedFeatures")}}
  - : Ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalität beschreibt, die von einem {{domxref("GPUAdapter")}} oder {{domxref("GPUDevice")}} unterstützt wird.
- {{domxref("GPUSupportedLimits")}}
  - : Beschreibt die Grenzen, die von einem {{domxref("GPUAdapter")}} oder {{domxref("GPUDevice")}} unterstützt werden.

### Konfiguration eines Rendering-`<canvas>`

- {{domxref("HTMLCanvasElement.getContext()")}} — der `"webgpu"` `contextType`
  - : Beim Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` wird eine {{domxref("GPUCanvasContext")}}-Objektinstanz zurückgegeben, die dann mit {{domxref("GPUCanvasContext.configure()")}} konfiguriert werden kann.
- {{domxref("GPUCanvasContext")}}
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Darstellung von Pipeline-Ressourcen

- {{domxref("GPUBuffer")}}
  - : Stellt einen Speicherblock dar, der zum Speichern von Rohdaten zur Verwendung in GPU-Vorgängen genutzt werden kann.
- {{domxref("GPUExternalTexture")}}
  - : Ein Wrapper-Objekt, das einen {{domxref("HTMLVideoElement")}}-Schnappschuss enthält, der als Textur in GPU-Rendering-Vorgängen verwendet werden kann.
- {{domxref("GPUSampler")}}
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- {{domxref("GPUShaderModule")}}
  - : Eine Referenz zu einem internen Shader-Modulobjekt, einem Container für WGSL-Shader-Code, der an die GPU zur Ausführung durch eine Pipeline übermittelt werden kann.
- {{domxref("GPUTexture")}}
  - : Ein Container, der 1D-, 2D- oder 3D-Datenarrays zum Speichern verwendet, wie Bilder, zur Verwendung in GPU-Rendering-Vorgängen.
- {{domxref("GPUTextureView")}}
  - : Eine Ansicht auf einen Teil der Texturunterressourcen, die durch eine bestimmte {{domxref("GPUTexture")}} definiert sind.

### Darstellung von Pipelines

- {{domxref("GPUBindGroup")}}
  - : Basierend auf einer {{domxref("GPUBindGroupLayout")}} definiert eine `GPUBindGroup`, wie eine Gruppe verwalteter Ressourcen in Shader-Stufen verwendet wird.
- {{domxref("GPUBindGroupLayout")}}
  - : Definiert die Struktur und den Zweck von verbundenen GPU-Ressourcen wie Puffer, die in einer Pipeline genutzt werden und dient als Vorlage beim Erstellen von {{domxref("GPUBindGroup")}}s.
- {{domxref("GPUComputePipeline")}}
  - : Steuert die Compute-Shader-Stufe und kann in einer {{domxref("GPUComputePassEncoder")}} genutzt werden.
- {{domxref("GPUPipelineLayout")}}
  - : Definiert die {{domxref("GPUBindGroupLayout")}}s, die von einer Pipeline verwendet werden. {{domxref("GPUBindGroup")}}s, die mit der Pipeline beim Codieren von Befehlen verwendet werden, müssen kompatible {{domxref("GPUBindGroupLayout")}}s haben.
- {{domxref("GPURenderPipeline")}}
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einer {{domxref("GPURenderPassEncoder")}} oder {{domxref("GPURenderBundleEncoder")}} genutzt werden.

### Befehle zur Ausführung auf der GPU kodieren und übermitteln

- {{domxref("GPUCommandBuffer")}}
  - : Stellt ein aufgenommenes List von GPU-Befehlen dar, die zur Ausführung an eine {{domxref("GPUQueue")}} übermittelt werden können.
- {{domxref("GPUCommandEncoder")}}
  - : Stellt einen Befehls-Encoder dar, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- {{domxref("GPUComputePassEncoder")}}
  - : Kodiert Befehle, die mit der Steuerung der Compute-Shader-Stufe in Verbindung stehen, wie sie von einer {{domxref("GPUComputePipeline")}} ausgegeben werden. Teil der gesamten Kodierungsaktivität eines {{domxref("GPUCommandEncoder")}}.
- {{domxref("GPUQueue")}}
  - : Steuert die Ausführung der kodierten Befehle auf der GPU.
- {{domxref("GPURenderBundle")}}
  - : Ein Container für voraufgezeichnete Bündel von Befehlen (siehe {{domxref("GPURenderBundleEncoder")}}).
- {{domxref("GPURenderBundleEncoder")}}
  - : Wird verwendet, um Bündel von Befehlen voraufzuzeichnen. Diese können in {{domxref("GPURenderPassEncoder")}}s über die Methode {{domxref("GPURenderPassEncoder.executeBundles", "executeBundles()")}} so oft wie nötig erneut verwendet werden.
- {{domxref("GPURenderPassEncoder")}}
  - : Kodiert Befehle, die mit der Steuerung der Vertex- und Fragment-Shader-Stufen in Verbindung stehen, wie sie von einer {{domxref("GPURenderPipeline")}} ausgegeben werden. Teil der gesamten Kodierungsaktivität eines {{domxref("GPUCommandEncoder")}}.

### Abfragen von Rendering-Durchläufen durchführen

- {{domxref("GPUQuerySet")}}
  - : Wird verwendet, um die Ergebnisse von Abfragen zu erfassen, wie z.B. Okklusions- oder Zeitstempelabfragen.

### Fehler debuggen

- {{domxref("GPUCompilationInfo")}}
  - : Ein Array von {{domxref("GPUCompilationMessage")}}-Objekten, die vom GPU-Shadermodul-Compiler generiert werden, um bei der Diagnose von Problemen mit Shader-Code zu helfen.
- {{domxref("GPUCompilationMessage")}}
  - : Stellt eine einzelne informative, warnende oder fehlerhafte Nachricht dar, die vom GPU-Shadermodul-Compiler generiert wurde.
- {{domxref("GPUDeviceLostInfo")}}
  - : Wird zurückgegeben, wenn das {{domxref("GPUDevice.lost")}} {{jsxref("Promise")}} aufgelöst wird und Informationen darüber bietet, warum das Gerät verloren gegangen ist.
- {{domxref("GPUError")}}
  - : Die Basisschnittstelle für Fehler, die durch {{domxref("GPUDevice.popErrorScope")}} und das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis aufgetreten sind.
- {{domxref("GPUInternalError")}}
  - : Einer der Fehlertypen, der durch {{domxref("GPUDevice.popErrorScope")}} und das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis der {{domxref("GPUDevice")}} aufgetreten ist. Zeigt an, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt wurden.
- {{domxref("GPUOutOfMemoryError")}}
  - : Einer der Fehlertypen, der durch {{domxref("GPUDevice.popErrorScope")}} und das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis der {{domxref("GPUDevice")}} aufgetreten ist. Zeigt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- {{domxref("GPUPipelineError")}}
  - : Beschreibt einen Pipelinefehler. Der Wert, der erhalten wird, wenn ein {{jsxref("Promise")}}, das durch einen Aufruf von {{domxref("GPUDevice.createComputePipelineAsync()")}} oder {{domxref("GPUDevice.createRenderPipelineAsync()")}} zurückgegeben wird, abgelehnt wird.
- {{domxref("GPUUncapturedErrorEvent")}}
  - : Der Ereignisobjekttyp für das {{domxref("GPUDevice")}}-Ereignis {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}.
- {{domxref("GPUValidationError")}}
  - : Einer der Fehlertypen, der durch {{domxref("GPUDevice.popErrorScope")}} und das {{domxref("GPUDevice.uncapturederror_event", "uncapturederror")}}-Ereignis der {{domxref("GPUDevice")}} aufgetreten ist. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

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
- [WebGPU-Erklärungsdokument](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, kein Canvas](https://surma.dev/things/webgpu/)
