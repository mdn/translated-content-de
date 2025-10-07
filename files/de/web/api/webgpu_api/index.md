---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugang zu fortschrittlicheren GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es um 2011 erstmals erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die [GLSL](<https://wikis.khronos.org/opengl/Core_Language_(GLSL)>) Sprache, die zur Erstellung von WebGL-Shader-Code verwendet wird, sind komplex. Daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools verwendet, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erfahrungen und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die gelöst werden mussten:

- Seit der Freigabe von WebGL sind eine neue Generation von nativen GPU-APIs aufgetaucht - die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) - die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Aktualisierungen für OpenGL (und daher WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf dem Anwendungsfall, Grafiken zu zeichnen und auf einer Leinwand darzustellen. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut verarbeiten. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle, beispielsweise solche, die auf maschinellem Lernen basieren, immer wichtiger.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch in Bezug auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme und bietet eine aktualisierte allgemeine Architektur, die mit modernen GPU-APIs kompatibel ist und sich mehr "webbasiert" anfühlt. Es unterstützt Grafikrending, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Post-Processing-Filter wie Farbeffekte, Schärfung und Tiefenschärfen-Simulation. Darüber hinaus kann es aufwendige Berechnungen wie Culling und Transformationen von animierten Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, sich mit WebGPU vertraut zu machen:

![Ein grundlegendes Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:
  - Integrierte GPUs, die sich auf der gleichen Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal unter macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native Betriebssystem-APIs und Treiber hat, die zur Kommunikation mit der GPU verfügbar sind, obwohl das obige Diagramm davon ausgeht, dass ein Gerät nur über eine native API/Treiber verfügt.
- Die WebGPU-Implementierung eines Browsers kümmert sich um die Kommunikation mit der GPU über einen Treiber der nativen GPU-API. Ein WebGPU-Adapter repräsentiert in Ihrem Code effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über welche eine einzelne Webanwendung auf GPU-Fähigkeiten in einer abgeschotteten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Die GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen verwendet, darunter möglicherweise viele Webanwendungen. Jede Webanwendung muss WebGPU isoliert für Sicherheits- und Logikgründe nutzen können.

## Zugriff auf ein Gerät

Ein logisches Gerät — repräsentiert durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — ist die Grundlage, über die eine Webanwendung auf alle WebGPU-Funktionalitäten zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalitäten innerhalb eines Workers verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, z.B. einen Hochleistungs- oder Niedrigenergie-Adapter anzufordern. Wenn dies nicht enthalten ist, stellt das Gerät den Standardadapter zur Verfügung, der für die meisten Zwecke gut genug ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionen-Objekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Grenzen festlegen können, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige allgemeine Spezifikation haben, die für die meisten Zwecke gut genug ist.

In Verbindung mit einigen Feature-Erkennungsprüfungen könnte der oben beschriebene Prozess wie folgt erreicht werden:

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

Eine Pipeline ist eine logische Struktur, die programmierbare Phasen enthält, die durchlaufen werden, um die Arbeit Ihres Programms zu erledigen. Derzeit kann WebGPU zwei Arten von Pipelines verarbeiten:

- Eine Renderpipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}, aber sie könnte auch Grafiken im Offscreen-Modus rendern. Sie hat zwei Hauptphasen:
  - Eine Vertex-Phase, in der ein Vertex-Shader Positionsdaten, die in die GPU gespeist werden, aufnimmt und sie verwendet, um eine Reihe von Vertexpunkten im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertexpunkte werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Zeichenleinwand abdecken soll.

  - Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes von den vom Vertex-Shader erzeugten Primitiven bedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails bereitstellen, sowie die Position und Farbe virtueller Lichter.

- Eine Berechnungspipeline ist für allgemeine Berechnungen gedacht. Eine Berechnungspipeline enthält eine einzelne Berechnungsphase, in der ein Berechnungsshader allgemeine Daten aufnimmt, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis dann in einem oder mehreren Puffern zurückgibt. Die Puffer können beliebige Daten enthalten.

Die oben genannten Shader sind eine Reihe von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Sprache im Rust-Stil geschrieben, die als [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) bezeichnet wird.

Es gibt verschiedene Möglichkeiten, eine WebGPU-App zu strukturieren, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und packen Sie ihn in ein oder mehrere Shader-Module.
2. [Den Canvas-Kontext abrufen und konfigurieren](#den_canvas-kontext_abrufen_und_konfigurieren): Holen Sie sich den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie es so, dass Informationen darüber, welche Grafiken von Ihrem logischen GPU-Gerät gerendert werden sollen, empfangen werden. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, z.B. eine, die nur Berechnungspipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#einen_puffer_erstellen_und_unsere_dreiecksdaten_hinein_schreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#die_renderpipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für unterschiedliche Zwecke.
5. [Ein Berechnungs-/Renderpass durchführen](#einen_rendering-pass_ausführen): Dies beinhaltet eine Reihe von Unterstufen:
   1. Erstellen Sie einen Kommando-Coder, der eine Reihe von Befehlen kodieren kann, die an die GPU ausgeführt werden sollen.
   2. Erstellen Sie ein Pass-Coder-Objekt, auf dem Berechnungs-/Renderbefehle ausgegeben werden.
   3. Führen Sie Befehle aus, um festzulegen, welche Pipelines verwendet werden sollen, aus welchen Puffer(n) die erforderlichen Daten stammen sollen, wie viele Zeichenoperationen (im Fall von Renderpipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einen Kommandopuffer.
   5. Übermitteln Sie den Kommandopuffer über die Befehlsschlange des logischen Geräts an die GPU.

In den unten stehenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, damit Sie erkunden können, was es erfordert. Später werden wir auch ein [grundlegendes Berechnungspipeline](#grundlegende_berechnungspipeline) Beispiel untersuchen und sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Renderpipeline

In unserem [grundlegenden Renderdemo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen soliden blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Phase (`@vertex` Block) nimmt ein Stück Daten auf, das eine Position und eine Farbe enthält, positioniert das Vertex gemäß der angegebenen Position, interpoliert die Farbe und gibt die Daten dann an die Fragment-Shader-Phase weiter. Die Fragment-Shader-Phase (`@fragment` Block) nimmt die Daten von der Vertex-Shader-Phase entgegen und färbt das Vertex gemäß der angegebenen Farbe ein.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-String, aber Sie können ihn überall speichern, von wo aus er leicht als Text abgerufen werden kann, der in Ihr WebGPU-Programm eingespeist werden soll. Ein weiterer häufiger Ansatz ist es, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) einfügen, wobei Ihr Shader-Code als Eigenschaft innerhalb eines Deskriptor-Objekts übergeben wird. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Den Canvas-Kontext abrufen und konfigurieren

In einer Renderpipeline müssen wir einen Ort angeben, an den wir die Grafiken rendern möchten. In diesem Fall erhalten wir eine Referenz auf ein On-Screen`<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um dessen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei ein Optionen-Objekt übergeben wird, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen stammen werden, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) Methode; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers.

### Einen Puffer erstellen und unsere Dreiecksdaten hinein schreiben

Als nächstes versorgen wir unser WebGPU-Programm mit unseren Daten in einer Form, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jedes Dreiecks-Vertex enthält - X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) erhalten. Hinter den Kulissen wird dieser Puffer-Typ in einem Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen, die auf dem Wirtssystem laufen, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des Arrays `vertices` entspricht, damit er alle Daten enthalten kann, und die Nutzungsflags `VERTEX` und `COPY_DST`, um anzuzeigen, dass der Puffer als Vertex-Puffer und als Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten unsere Daten mit einer Mapping-Operation in den `GPUBuffer` übertragen, wie wir dies im Beispiel der [Berechnungspipeline](#grundlegende_berechnungspipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) Methode, die als Parameter den Puffer zum Schreiben, die Datenquelle zum Schreiben, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten nimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser berechnet dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Renderpipeline definieren und erstellen

Nachdem wir unsere Daten in einen Puffer erhalten haben, besteht der nächste Teil des Setups darin, tatsächlich unsere Pipeline zu erstellen, um sie zum Rendern zu verwenden.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir früher in unserem `vertices`-Array und der Vertex-Shader-Phase gesehen haben - jedes Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (dies entspricht dem WGSL-Typ `vec4<f32>`), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die Schrittweite an, d.h. die Anzahl der Bytes, die jedes Vertex ausmacht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptor-Objekt, das die Konfiguration unserer Render-Pipeline-Phasen spezifiert. Für beide Shader-Phasen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code zu finden ist (`shaderModule`), sowie den Namen der Funktion, die als Einstiegspunkt für jede Phase fungiert.

Darüber hinaus stellen wir im Fall der Vertex-Shader-Phase unser `vertexBuffers`-Objekt zur Verfügung, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Phase stellen wir ein Array von Farb-Zielzuständen bereit, das das angegebene Rendering-Format angibt (dies stimmt mit dem Format überein, das wir zuvor in unserem Canvas-Kontext-Setup konfiguriert haben).

Wir geben auch ein `primitive`-Objekt an, das in diesem Fall nur den Typ des Primitivs angibt, das wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies in Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts erfolgen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (Sie können ein Beispiel in unserer [grundlegenden Berechnungspipeline](#grundlegende_berechnungspipeline) sehen), mit dem die GPU im Voraus herausfinden kann, wie man die Pipeline effizient ausführt. Wir geben jedoch den Wert `auto` an, der dazu führt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir sie als Parameter an eine Methode von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Pass ausführen

Jetzt, da das gesamte Setup abgeschlossen ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unsere `<canvas>` zeichnen. Um jeden Befehl zu kodieren, der später an die GPU übermittelt werden soll, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, welche mit einem Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erstellt wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter, dessen einzige zwingende Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht von der `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht auf eine bestimmte Farbe "geleert" werden soll, sobald sie geladen wird und bevor irgendeine Zeichnung stattfindet. Dies ist es, was den blauen Hintergrund hinter dem Dreieck erzeugt.
3. Dass der Wert des aktuellen Rendering-Passes für diese Farb-Anhang gespeichert werden soll.

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

Nun können wir Methoden des Rendering-Pass-Coders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline für den Rendering-Pass festzulegen.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline übergeben werden soll, um gerendert zu werden. Der erste Parameter ist der Slot, um den Vertex-Puffer festzulegen, und bezieht sich auf den Index des Elements im `vertexBuffers`-Array, der das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) startet das Zeichnen. Es gibt Daten für drei Vertexpunkte in unserem `vertexBuffer`, also setzen wir einen Vertex-Zählwert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Befehlsequenz zu vervollständigen und sie an die GPU zu übermitteln, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Renderpass-Kommandoliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der übermittelten Befehlsequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlsschlange des Geräts (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um an die GPU gesendet zu werden. Die Befehlsschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) der Warteschlange hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Berechnungspipeline

In unserem [grundlegenden Berechnungsdemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, sie in einem Ausgabe-Puffer speichern, die Daten in einen Staging-Puffer kopieren und dann diesen Staging-Puffer abbilden, damit die Daten in JavaScript gelesen und in der Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) ein. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Phase hat, eine `@compute`-Stufe:

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

### Erstellen von Puffern, um unsere Daten zu verarbeiten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten, einen `output`-Puffer, um die Berechnungsergebnisse der GPU schnell zu schreiben, und einen `stagingBuffer`, in den wir die Inhalte des `output`-Puffers kopieren werden, der abgebildet werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

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

### Eine Bind-Group-Layout erstellen

Wenn die Pipeline erstellt wird, wird eine Bind-Group für die Pipeline festgelegt. Dies umfasst zunächst die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage verwendet, an die Bind-Gruppen sich halten. In diesem Fall gewähren wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an den Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code - `@binding(0)`), der in der Berechnungsphase der Pipeline verwendet werden kann, und mit dem Zweck des Puffers als `speicher`.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bind-Group-Layout angibt, auf dem diese Bind-Group basieren soll, und die Details der Variable, die an den im Layout definierten Slot gebunden werden soll. In diesem Fall deklarieren wir die Bindung 0 und geben an, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout zurückerhalten, das beim Erstellen einer Bind-Group zu verwenden ist, indem Sie die [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) Methode aufrufen. Es gibt auch eine Version für Renderpipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungspipeline erstellen

Mit dem bisher Gesagten können wir jetzt eine Berechnungspipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Renderpipeline. Wir beschreiben den Berechnungsshader, indem wir angeben, in welchem Modul sich der Code befindet und was der Einstiegspunkt ist. Wir geben auch ein `layout` für die Pipeline an, indem wir ein Layout basierend auf dem zuvor definierten `bindGroupLayout` erstellen.

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

Ein Unterschied hier zum Renderpipeline-Layout ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Ein Berechnungspass ausführen

Das Ausführen eines Berechnungspasses ist ähnlich strukturiert wie das Ausführen eines Rendering-Passes, jedoch mit einigen anderen Befehlen. Zu Beginn wird der Pass-Coder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle geben wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) an. Wir verwenden jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die für die Berechnung zu verwendenden Daten anzugeben, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups) zu spezifizieren, wie viele GPU-Arbeitsgruppen für die Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Renderpass-Kommandoliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück an JavaScript lesen

Bevor die codierten Befehle mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Ausführung an die GPU übermittelt werden, kopieren wir den Inhalt des `output`-Puffers in den `stagingBuffer`-Puffer mit Hilfe von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` zur Verfügung stehen, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenspeicher zuzuordnen, greifen auf den zugeordneten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu, kopieren die Daten in JavaScript und protokollieren sie dann in der Konsole. Wir heben auch die Zuordnung des `stagingBuffer` auf, sobald wir damit fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der vom Rückgabewert eines ungültigen Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerbereichs-Stack. Dieser Stack ist anfangs leer, aber Sie können beginnen, einen Fehlerbereich in den Stack zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Fehlererfassung fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Diese Methode entfernt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, Ihnen nützliche Informationen zur Verfügung zu stellen, um zu verstehen, warum in Ihrem WebGPU-Code Fehler auftreten, in den Abschnitten "Validierung", wo dies angebracht ist, die Kriterien zum Vermeiden von Fehlern auflisten. Siehe zum Beispiel den Abschnitt [`GPUDevice.createBindGroup()` Validierung](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschlossen, nur Fehlerkriterien aufzulisten, die sind:

- Nicht offensichtlich, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es hat keinen Sinn, Ihnen zu sagen, dass Sie die korrekte Deskriptor-Objektstruktur verwenden sollen. Das ist sowohl offensichtlich als auch vage.
- Entwicklerkontrolliert. Einige der Fehlerkriterien basieren ausschließlich auf internen Mechanismen und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur Fehlerbehandlung in WebGPU finden Sie im Erklärer – siehe [Objektgültigkeit und zerstörte Zustand](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [Best Practices zur Fehlerbehandlung in WebGPU](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche Praxisbeispiele und Ratschläge.

> [!NOTE]
> Die historische Methode zur Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, die Fehlerinformationen synchron zurückgibt. Dies ist problematisch, da es Fehlerinformationen synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Hin- und Herfahrt zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen werden. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code austreten können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapter-Informationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfiguration von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalitäten zugänglich ist.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzen.

### Konfiguration eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"`-`contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objekt zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Block von Speicher, der verwendet werden kann, um Rohdaten zu speichern, die in GPU-Operationen verwendet werden können.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen Schnappschuss eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modul-Objekt, einen Container für WGSL-Shader-Code, der zur Ausführung von einer Pipeline an die GPU übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays wie Bilder zu speichern, um in GPU-Rendering-Operationen verwendet zu werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der vom spezifischen [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturunterressourcen.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen gebunden werden und wie diese Ressourcen in Shader-Phasen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungsshader-Phase und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlscodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Phasen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Codierung und Übermittlung von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) zur Ausführung übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehls-Coder, der zum Kodieren von Befehlen verwendet wird, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die die Berechnungsshader-Phase steuern, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung kodierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgenommene Bündel von Befehlen (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Bündel von Befehlen vorzuzusenden. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) verwendet werden, so oft wie nötig.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die die Vertex- und Fragment-Shader-Phasen steuern, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungstätigkeit eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Durchführung von Abfragen bei Rendering-Pässen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen bei Pässen aufzuzeichnen, wie zum Beispiel Okklusions- oder Zeitstempel-Abfragen.

### Debugging von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die vom GPU-Shader-Modul-Compiler generiert wurden, um Probleme mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn die [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost)-{{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis gemeldet werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis gemeldet werden. Deutet darauf hin, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, auch wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis gemeldet werden. Gibt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der zurückgegeben wird, wenn eine {{jsxref("Promise")}} von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis gemeldet werden. Beschreibt einen Anwendungsfehler, der darauf hindeutet, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht erfüllte.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Grundlegendes Berechnungsdemo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
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
