---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 5f226b6f08c5cff7f96b7cc49a164fdc43d11a0c
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU-API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf weiterentwickelte GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web bezüglich seiner grafischen Fähigkeiten revolutionierte, nachdem es um 2011 erstmals auftauchte. WebGL ist eine JavaScript-Portierung der Grafikbibliothek [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/), die es Webseiten ermöglicht, Berechnungen für das Rendering direkt an die GPU des Geräts zu übergeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element darzustellen.

WebGL und die Sprache [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>), die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

Allerdings hat WebGL einige grundlegende Probleme, die behoben werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs erschienen – die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) – die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und daher auch für WebGL) geplant, daher wird es keine dieser neuen Funktionen erhalten. WebGPU hingegen wird in Zukunft neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einer Leinwand. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht gut verarbeiten. GPGPU-Berechnungen werden zunehmend wichtiger für viele verschiedene Anwendungsfälle, zum Beispiel die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der Objekte, die gleichzeitig gerendert werden sollen, als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte allgemeine Architektur bereitstellt, die mit modernen GPU-APIs kompatibel ist und sich mehr wie "Web" anfühlt. Es unterstützt Grafik-Rendering, hat aber auch eine erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger und es unterstützt moderne GPU-Rendering-Funktionen wie auf Berechnungen basierende Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Tiefenschärfesimulation. Darüber hinaus kann es teure Berechnungen wie Ausblendung und Transformation von animierten Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einem Geräte-GPU und einem Webbrowser, der die WebGPU-API verwendet. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein grundlegendes Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Es gibt verschiedene GPU-Typen:

  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die auf ihrer eigenen Platine leben, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Befehle werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native Betriebssystem-APIs und Treiber hat, um mit der GPU zu kommunizieren, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert in Ihrem Code effektiv eine physische GPU und einen verfügbaren Treiber auf dem zugrunde liegenden System.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzige Web-App die GPU-Funktionen auf eine unterteilte Weise nutzen kann. Logische Geräte müssen Fähigkeiten zur Multiplexierung bereitstellen. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, darunter möglicherweise viele Web-Apps. Jede Web-App muss in der Lage sein, isoliert auf WebGPU zuzugreifen, sowohl aus Sicherheits- als auch aus logischen Gründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Basis, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität innerhalb eines Workers verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen auf einen Adapter über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie zum Beispiel einen Hochleistungs- oder Niedrigenergie-Adapter anfordern können. Wenn dies nicht enthalten ist, wird das Gerät Zugriff auf den Standardadapter bereitstellen, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Beschränkungen festlegen können, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine angemessene allgemein-zweckmäßige Spezifikation haben, die für die meisten Zwecke ausreichend ist.

In Kombination mit einigen Feature-Erkennungschecks könnte der obige Prozess wie folgt erreicht werden:

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

## Pipelines und Shader: WebGPU-Anwendungsstruktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die ausgeführt werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, kann aber auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader die an die GPU übergebenen Positionsdaten nimmt und sie verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann in Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel auf der Zeichenleinwand jedes davon abdecken sollte.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den Primitiven abgedeckt wird, die vom Vertex-Shader produziert werden. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Berechnungs-Pipeline ist für allgemeine Berechnungen. Eine Berechnungs-Pipeline enthält eine einzige Berechnungsstufe, in der ein Berechnungs-Shader allgemeine Daten verarbeitet, sie parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können Daten jeder Art enthalten.

Die oben genannten Shader sind Sets von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer low-level, Rust-ähnlichen Sprache namens [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt verschiedene Möglichkeiten, wie Sie eine WebGPU-App gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Kontext der Leinwand erhalten und konfigurieren](#kontext_der_leinwand_erhalten_und_konfigurieren): Holen Sie den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn so, dass er Informationen darüber empfängt, welche Grafiken von Ihrem logischen GPU-Gerät gerendert werden sollen. Dieser Schritt ist nicht notwendig, wenn Ihre App keine grafische Ausgabe hat, wie z.B. eine, die nur Berechnungs-Pipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#einen_puffer_erstellen_und_unsere_dreiecksdaten_in_diesen_schreiben): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht-triviale Anwendungen enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Eine Berechnungs-/Renderpass ausführen](#einen_render-pass_ausführen): Dies beinhaltet eine Reihe von Teilaufgaben:
   1. Erstellen Sie einen Befehlscodierer, der eine Reihe von Befehlen codieren kann, die an die GPU zur Ausführung gesendet werden sollen.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Berechnungs-/Renderbefehle ausgegeben werden.
   3. Führen Sie Befehle aus, um zu spezifizieren, welche Pipelines verwendet werden sollen, aus welchem/n Puffer/n die benötigten Daten stammen, wie viele Zeichenvorgänge ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einem Befehlspuffer.
   5. Übergeben Sie den Befehlspuffer an die GPU über die Befehlsschlange des logischen Geräts.

In den folgenden Abschnitten untersuchen wir ein Grundrender-Pipeline-Demo, um Ihnen die Erkundung dessen zu ermöglichen, was es erfordert. Später werden wir auch ein [grundlegendes Berechnungs-Pipeline](#grundlegende_berechnungs-pipeline)-Beispiel untersuchen, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [Grundrender-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert ein Datenstück, das eine Position und eine Farbe enthält, positioniert das Vertex entsprechend der angegebenen Position, interpoliert die Farbe und gibt die Daten an die Fragment-Shader-Stufe weiter. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten aus der Vertex-Shader-Stufe und färbt das Vertex entsprechend der angegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code innerhalb eines Vorlagen-Strings, aber Sie können ihn überall speichern, von wo aus er leicht als Text abgerufen und in Ihr WebGPU-Programm eingespeist werden kann. Zum Beispiel ist es eine weitere gängige Praxis, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf einfügen, wobei Sie Ihren Shader-Code als Eigenschaft in einem Deskriptor-Objekt übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Kontext der Leinwand erhalten und konfigurieren

In einer Render-Pipeline müssen wir angeben, wohin die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem `<canvas>`-Element auf dem Bildschirm und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei wir ihm ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) angibt, von dem die Renderinformationen stammen, das Format der Texturen und den Alpha-Modus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats ist die Verwendung der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat); diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecksdaten in diesen schreiben

Als Nächstes stellen wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, der 8 Datenpunkte für jedes Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird diese Art von Puffer in einem Speicher gespeichert, der sehr eng mit den GPU-Kernen integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen auf dem Hostsystem, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, und `VERTEX`- und `COPY_DST`-Nutzungs-Flags an, um darauf hinzuweisen, dass der Puffer als Vertex-Puffer verwendet wird und das Ziel von Kopiervorgängen ist.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Einbringen unserer Daten in den `GPUBuffer` mit einer Mapping-Operation handhaben, wie wir es im [Berechnungs-Pipeline-Beispiel](#grundlegende_berechnungs-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall werden wir jedoch die praktische Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) verwenden, die die Parameter des Buffers enthält, in den geschrieben werden soll, die Datenquelle, aus der geschrieben werden soll, einen Offsetwert für jeden und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays angegeben). Der Browser ermittelt dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Jetzt, da wir unsere Daten in einem Puffer haben, besteht der nächste Teil des Setups darin, unsere Pipeline zu erstellen, die bereit ist, für das Rendering verwendet zu werden.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir zuvor in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben – jedes Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (was dem WGSL-`vec4<f32>`-Typ entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die Schrittweite an, d.h. die Anzahl der Bytes, aus denen jedes Vertex besteht, und `stepMode` gibt an, dass die Daten pro-Vertex abgerufen werden sollen.

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

Als Nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Zusätzlich liefern wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt, um den erwarteten Zustand der Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe liefern wir ein Array von Farbzielzuständen, die das angegebene Renderformat angeben (dies entspricht dem Format, das wir zuvor in unserer Leinwand-Kontext-Konfiguration angegeben haben).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall nur den Typ des zu zeichnenden Primitivs angibt, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [Basic compute pipeline](#grundlegende_berechnungs-pipeline) sehen), das es der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus am effizientesten ausgeführt werden kann. Wir geben jedoch den `auto`-Wert an, wodurch die Pipeline ein implizites Bindungsgruppen-Layout basierend auf allen in dem Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir sie als Parameter an einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methodenaufruf übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Render-Pass ausführen

Jetzt, da das gesamte Setup abgeschlossen ist, können wir tatsächlich einen Render-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um Befehle zu codieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, die über einen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder)-Aufruf erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Render-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, dessen einzige Pflicht-Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht von der `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht beim Laden und bevor ein Zeichnen stattfindet, auf eine angegebene Farbe "geklärt" werden soll. Das ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Render-Passes für dieses Farb-Attachment gespeichert werden soll.

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

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline zu spezifizieren, die für den Render-Pass verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline für das Rendering übergeben wird. Der erste Parameter ist der Steckplatz, um den Vertex-Puffer festzulegen, und ist eine Referenz auf den Index des Elements in dem `vertexBuffers`-Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, daher setzen wir einen Vertex-Zählwert von `3`, um alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Codierung der Befehlssequenz abzuschließen und sie an die GPU auszugeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objekt zu kapseln.
3. Wir übergeben den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) der Befehlswarteschlange des Geräts (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um an die GPU gesendet zu werden. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf zur Warteschlange hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Berechnungs-Pipeline

In unserem [Grundlegenden Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, in einem Ausgabepuffer speichern, die Daten in einen Zwischenpuffer kopieren und diesen Zwischenpuffer so abbilden, dass die Daten an JavaScript zurückgegeben und in der Konsole ausgegeben werden können.

Die Anwendung folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf ein. Der Unterschied besteht hier darin, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verarbeiten, einen `output`-Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir den `output`-Inhalt kopieren, der abgebildet werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherpuffer spezifiziert, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der von JavaScript zum Lesen abgebildet werden kann, und wird das Ziel eines Kopiervorgangs sein.

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

### Eine Bindungsgruppe erstellen

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindungsgruppe für die Pipeline. Dies beinhaltet zuerst das Erstellen einer [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindungsgruppen verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, gebunden an den Bindungsschlitz 0 (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), nutzbar in der Berechnungsstufe der Pipeline, und mit dem Pufferzweck, der als `storage` definiert ist.

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

Als Nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bind-Group-Layout angibt, auf dem diese Bind-Group basiert, und die Details der zu bindenden Variablen an den im Layout definierten Slot. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der zuvor definierte `output`-Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, das bei der Erstellung einer Bindungsgruppe verwendet werden soll, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungs-Pipeline erstellen

Mit dem oben beschriebenen Beispiel können wir nun eine Berechnungs-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen, wobei wir ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie die Erstellung einer Render-Pipeline. Wir beschreiben den Berechnungs-Shader und geben an, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, in diesem Fall basierend auf dem zuvor definierten `bindGroupLayout`, erstellt über einen [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout)-Aufruf.

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

Ein Unterschied zum Render-Pipeline-Layout besteht darin, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Berechnungs-Pass ausführen

Das Ausführen eines Berechnungs-Passes ist in seiner Struktur ähnlich wie das Ausführen eines Render-Passes, mit einigen unterschiedlichen Befehlen. Zu Beginn wird der Pass-Encoder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle geben wir die Pipeline auf die gleiche Weise wie zuvor an, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Dann jedoch verwenden wir [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten für die Berechnung zu bestimmen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die für die Durchführung der Berechnungen verwendet werden sollen.

Dann signalisieren wir das Ende der Render-Pass-Befehlsl打由 using [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück an JavaScript lesen

Bevor die codierten Befehle zur Ausführung an die GPU über [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) gesendet werden, kopieren wir die Inhalte des `output`-Buffers in den `stagingBuffer`-Buffer über [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenspeicher zuzuordnen, erhalten eine Referenz auf den zugeordneten Bereich mithilfe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), kopieren die Daten in JavaScript und geben sie dann in der Konsole aus. Wir entpacken auch den `stagingBuffer`, sobald wir ihn nicht mehr benötigen.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der sich auf den Rückgabewert eines als ungültig markierten Aufrufs verlässt, wird dieses Objekt ebenfalls als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz verwaltet ihren eigenen Fehlerbereichs-Stack. Dieser Stapel ist zunächst leer, aber Sie können mit dem Erfassen von Fehlern eines bestimmten Typs beginnen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich aus dem Stapel und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, Ihnen hilfreiche Informationen zur Verfügung zu stellen, um zu verstehen, warum in Ihrem WebGPU-Code Fehler auftreten, und zwar in den Abschnitten "Validierung", wo es angebracht ist. Diese enthalten Kriterien, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den Abschnitt [`GPUDevice.createBindGroup()` Validierung](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, z.B. Kombinationen von Deskriptoreigenschaften, die Validierungsfehler verursachen. Es hat keinen Sinn, Ihnen zu sagen, dass Sie die richtige Struktur des Deskriptor-Objekts verwenden sollten. Das ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert werden. Einige der Fehlerkriterien basieren rein auf internen Bedingungen und sind für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen über die WebGPU-Fehlerbehandlung im Erklärer finden — siehe [Objektgültigkeit und Zerstörung](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bieten nützliche, praxisbezogene Beispiele und Ratschläge.

> [!NOTE]
> Der historische Weg, um Fehler in WebGL zu behandeln, ist die Bereitstellung einer Methode [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError), um Fehlerinformationen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Rundreise zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchdringen können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Startpunkt zur Verwendung von WebGPU. Kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Beschränkungen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen zu einem Adapter.

### Konfiguration von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalität zugänglich ist.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [mengenartiges](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzen.

### Konfiguration eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Pipeline-Ressourcen repräsentieren

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um rohe Daten für GPU-Operationen zu speichern.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen Schnappschuss eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modulobjekt, ein Container für WGSL-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU übermittelt werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der 1D-, 2D- oder 3D-Datenarrays, wie Bilder, zur Verwendung in GPU-Rendering-Operationen speichert.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der von einer bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Textur-Subressourcen.

### Pipelines repräsentieren

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen gebunden werden sollen, und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen, wie Puffer, die in einer Pipeline verwendet werden, und dient als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungsstufe des Shaders und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlscodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)-Spezifikationen haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU codieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehls-Encoder, der verwendet wird, um Befehle zu codieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die sich auf die Steuerung der Berechnungsstufe des Shaders beziehen, ausgegeben von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline). Teil der Gesamtcodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Kontrolliert die Ausführung von codierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode wiederverwendet werden, so oft wie erforderlich.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die sich auf die Steuerung der Vertex- und Fragment-Shader-Stufen beziehen, ausgegeben von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline). Teil der Gesamtcodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen auf Rendering-Pässen ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen auf Übergeben aufzuzeichnen, wie z.B. Okklusions- oder Zeitstempel-Abfragen.

### Fehler debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, das von dem Shader-Modul-Compiler der GPU generiert wird, um Probleme im Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die von dem Shader-Modul-Compiler der GPU generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber bereitstellt, warum das Gerät verloren gegangen ist.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt werden. Zeigt an, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt werden. Zeigt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Fehlschlagen. Der Wert, der empfangen wird, wenn ein {{jsxref("Promise")}}, das von einem [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync)- oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync)-Methodenaufruf zurückgegeben wird, abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Objekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die durch [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis aufgedeckt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU-API nicht bestanden hat.

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
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
