---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 7e485799ece786b3f565b6017380d483084f3efa
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU-API** ermöglicht Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um leistungsstarke Berechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API), bietet eine bessere Kompatibilität mit modernen GPUs, unterstützt universelle GPU-Berechnungen, schnellere Operationen und den Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) die webbasierte Grafik erheblich revolutionierte, als es um 2011 erstmals erschien. WebGL ist eine JavaScript-Portierung der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Gerätes zu übergeben, um diese mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shadercode verwendet wird, sind komplex, daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Apps zu erleichtern: Populäre Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu entwickeln.

WebGL hat jedoch einige grundlegende Probleme, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL sind neue Generationen von nativen GPU-APIs entstanden — die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Features bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass diese keine neuen Features erhalten wird. WebGPU hingegen wird fortlaufend neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einer Leinwand. Es verarbeitet universelle GPU-Berechnungen (GPGPU) nicht sehr gut. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, beispielsweise für solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafik-Apps werden zunehmend anspruchsvoller, sowohl was die Anzahl der gleichzeitig zu rendernden Objekte angeht als auch die Nutzung neuer Rendering-Features.

WebGPU adressiert diese Probleme und bietet eine aktualisierte universelle Architektur, die mit modernen GPU-APIs kompatibel ist und sich mehr "webby" anfühlt. Es unterstützt die Grafikdarstellung, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Die Darstellung einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie rechenbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfen und Tiefenschärfesimulation. Darüber hinaus kann es teure Berechnungen wie Culling und transformierte Modelle direkt auf der GPU verarbeiten.

## Allgemeines Modell

Es gibt mehrere Abstraktionsschichten zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Schaubild, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Es sind unterschiedliche GPU-Typen verfügbar:
  - Integrierte GPUs, die sich auf demselben Board wie die CPU befinden und sich deren Speicher teilen.
  - Diskrete GPUs, die sich auf einem eigenen Board befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht davon aus, dass ein Gerät nur über eine GPU verfügt.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und -Treiber zur Kommunikation mit der GPU verfügbar hat, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/einem Treiber ausgeht.
- Eine Implementierung von WebGPU in einem Browser behandelt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System verfügbar sind, in Ihrem Code.
- Ein logisches Gerät ist eine Abstraktion, über die eine Web-App auf GPU-Funktionen auf eine modularisierte Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bieten. Eine physische Geräte-GPU wird gleichzeitig von vielen Anwendungen und Prozessen genutzt, möglicherweise auch von vielen Web-Apps. Jede Web-App muss in der Lage sein, auf WebGPU isoliert zuzugreifen, aus Sicherheits- und Logikgründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — ist die Basis, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie die WebGPU-Funktionalität aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, beispielsweise einen Hochleistungs- oder Energiesparadapter anzufordern. Wenn dieses nicht enthalten ist, wird das Gerät den Standardadapter bereitstellen, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert auch ein Optionsobjekt (als Descriptor bezeichnet), mit dem Sie die genauen Funktionen und Grenzen angeben können, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige universelle Spezifikation haben, die für die meisten Zwecke gut genug ist.

Mit einigen Funktionsüberprüfungen könnte der obige Prozess wie folgt erreicht werden:

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

## Pipelines und Shader: Struktur der WebGPU-App

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines handhaben:

- Eine Renderpipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken außerhalb des Bildschirms rendern. Sie hat zwei Hauptphasen:
  - Eine Vertex-Phase, in der ein Vertex-Shader die Positionsdaten, die der GPU zugeführt werden, verwendet und sie nutzt, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem die angegebenen Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann in Primitiven, wie Dreiecken (dem grundlegenden Baustein von gerenderten Grafiken), zusammengefügt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes einzelne auf der Zeichenleinwand abdecken sollte.

  - Eine Fragment-Phase, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den vom Vertex-Shader erzeugten Primitiven abgedeckt wird. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Berechnungspipeline dient für allgemeine Berechnungen. Eine Berechnungspipeline enthält eine einzelne Berechnungsstufe, in der ein Berechnungs-Shader allgemeine Daten nimmt, sie parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die oben genannten Shader sind eine Reihe von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level, Rust-ähnlichen Sprache namens [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-App gestalten können, aber der Prozess wird wahrscheinlich die folgenden Schritte umfassen:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in ein oder mehrere Shader-Module.
2. [Kontext der Leinwand abrufen und konfigurieren](#kontext_der_leinwand_abrufen_und_konfigurieren): Holen Sie den `webgpu` Kontext eines `<canvas>` Elements und konfigurieren Sie ihn so, dass er Informationen darüber erhält, welche Grafiken von Ihrem GPU-Logikgerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, wie z. B. eine, die nur Berechnungspipelines verwendet.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#einen_puffer_erstellen_und_unsere_dreiecksdaten_darin_schreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Puffern oder -Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#definieren_und_erstellen_der_render-pipeline): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindings, Shader und Ressourcen-Layouts, und erstellen Sie dann Pipelines aus ihnen. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht-triviale Apps enthalten in der Regel mehrere Pipelines für verschiedene Zwecke.
5. [Eine Berechnungs-/Rendering-Pass ausführen](#ausführen_eines_rendering-passes): Dies beinhaltet eine Reihe von Unteraufgaben:
   1. Erstellen Sie einen Befehlscodierer, der eine Reihe von Befehlen für die Ausführung an die GPU enkodieren kann.
   2. Erstellen Sie ein Schleifen-Codierer-Objekt, auf dem Berechnungs-/Rendering-Befehle ausgegeben werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchem/welchen Puffer(n) die erforderlichen Daten bezogen werden sollen, wie viele Zeichnungsoperationen ausgeführt werden sollen (im Falle von Rendering-Pipelines) usw.
   4. Schließen Sie die Befehlsliste ab und kapseln Sie sie in einem Befehlspuffer.
   5. Übermitteln Sie den Befehlspuffer über die Befehlsschlange des logischen Geräts an die GPU.

In den nachfolgenden Abschnitten werden wir ein einfaches Render-Pipeline-Demo untersuchen, um zu erkunden, was es erfordert. Später werden wir auch ein Beispiel für eine [einfache Berechnungspipeline](#einfache_berechnungspipeline) untersuchen und untersuchen, wie es sich von der Render-Pipeline unterscheidet.

## Einfache Render-Pipeline

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>` Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenblock, der eine Position und eine Farbe enthält, positioniert den Scheitelpunkt entsprechend der angegebenen Position, interpoliert die Farbe und gibt die Daten an die Fragment-Shader-Stufe weiter. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt den Scheitelpunkt entsprechend der angegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template Literal, aber Sie können ihn überall speichern, wo er leicht abgerufen werden kann, um als Text in Ihr WebGPU-Programm eingefügt zu werden. Beispielsweise ist es auch eine gängige Praxis, Shader in einem {{htmlelement("script")}} Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in einen [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) einfügen, wobei Ihr Shader-Code als Eigenschaft eines Deskriptorobjekts übergeben wird. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Kontext der Leinwand abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafiken gerendert werden sollen. In diesem Fall holen wir eine Referenz auf ein onscreen `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), wobei wir ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, aus dem die Rendering-Informationen stammen, das Format der Texturen und den Alphamodus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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

### Einen Puffer erstellen und unsere Dreiecksdaten darin schreiben

Als nächstes werden wir unser WebGPU-Programm mit unseren Daten versorgen, in einer Form, die es verwenden kann. Unsere Daten werden zunächst in einer {{jsxref("Float32Array")}} bereitgestellt, die 8 Datenpunkte für jeden Dreiecks-Scheitelpunkt enthält — X, Y, Z, W für die Position, und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird dieser Puffer-Speichertyp sehr eng mit den Kernen der GPU integriert gespeichert, um die gewünschte hohe Leistungsfähigkeit zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen auf dem Host-System, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit alle Daten enthalten sein können, sowie `VERTEX` und `COPY_DST` Nutzungsflaggen, um anzuzeigen, dass der Puffer als Vertex-Puffer und als Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Einbringen unserer Daten in den `GPUBuffer` über eine Mapping-Operation handhaben, wie wir es in dem [Beispiel der Berechnungs-Pipeline](#einfache_berechnungspipeline) verwenden, um Daten von der GPU zurück in JavaScript zu lesen. In diesem Fall werden wir jedoch die bequeme Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) verwenden, die als Parameter den Puffer zum Schreiben, die Datenquelle zum Schreiben, einen Offset-Wert für jeden und die zu schreibende Datenmenge nimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser berechnet dann den effizientesten Weg, um die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Definieren und erstellen der Render-Pipeline

Jetzt, wo wir unsere Daten in einem Puffer haben, besteht der nächste Teil der Einrichtung darin, unsere Pipeline zu erstellen, die für das Rendering verwendet werden soll.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dieses beschreibt perfekt, was wir bereits in unserem `vertices`-Array und in der Vertex-Shader-Stufe gesehen haben — jeder Scheitelpunkt hat Positions- und Farbdaten. Beide sind im `float32x4`-Format formatiert (was dem WGSL-Typ `vec4<f32>` entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jeden Vertex. `arrayStride` gibt die Schrittweite an, was die Anzahl der Bytes darstellt, die jeden Vertex ausmachen, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Zusätzlich stellen wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt zur Verfügung, um den erwarteten Zustand unserer Vertex-Daten zu liefern. Im Fall der Fragment-Shader-Stufe stellen wir ein Array von Farbzielzuständen bereit, das das vorgegebene Rendering-Format angibt (dies stimmt mit dem Format überein, das wir zuvor in unserer Leinwand-Kontextkonfiguration angegeben haben).

Wir geben auch ein `primitive`-Objekt an, das in diesem Fall lediglich den Typ des Primitives angibt, den wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen, usw.) verwendet werden während der Durchführung der Pipeline. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mithilfe von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [einfachen Berechnungs-Pipeline](#einfache_berechnungspipeline) sehen), das es der GPU ermöglicht, herauszufinden, wie sie die Pipeline am effizientesten im Voraus ausführt. Wir jedoch spezifizieren den `auto`-Wert, der dazu führt, dass die Pipeline ein implizites Bindungsguppenlayout basierend auf den in den Shader-Code-Definitionen erstellten Bindungen generiert.

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

### Ausführen eines Rendering-Passes

Jetzt, wo die gesamte Einrichtung erledigt ist, können wir tatsächlich einen Rendering-Pass durchführen und etwas auf unser `<canvas>` zeichnen. Um bestimmte Kommandos zu kodieren, die später an die GPU ausgestellt werden sollen, müssen Sie eine neue Instanz von [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) erstellen, was über einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) gemacht wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine Instanz von [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter, dessen einzig zwingend notwendige Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall geben wir an:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht von der `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht bei der Ladezeit "gelöscht" und auf eine bestimmte Farbe eingestellt werden soll, bevor Zeichnungen stattfinden. Dies ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
3. Dass der Wert des aktuellen Rendering-Passes für dieses Farbanhangement gespeichert werden soll.

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

Jetzt können wir die Methoden des Rendering-Pass-Codierers aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline anzugeben, die für den Rendering-Pass verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu agieren, die an die Pipeline übergeben werden soll, um gerendert zu werden. Der erste Parameter ist der Slot, um den Vertex-Puffer festzulegen und bezieht sich auf den Index des Elements im `vertexBuffers`-Array, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Scheitelpunkte innerhalb unseres `vertexBuffer`, also setzen wir einen Vertex-Anzahlwert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Kommandosequenz zu beenden und sie an die GPU zu übermitteln, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Kommandoliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufnahme der ausgestellten Kommandosequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objekt zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Gerätekontrollschlange (repräsentiert durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) Instanz), um an die GPU gesendet zu werden. Die Gerätekontrollschlange ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Instanzen kann der Schlange über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) Aufruf hinzugefügt werden.

Diese drei Schritte können mit den folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Einfache Berechnungspipeline

In unserem [einfachen Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, diese in einen Ausgabepuffer speichern, die Daten in einen Übergangspuffer kopieren und dann diesen Übergangspuffer so abbilden, dass die Daten an JavaScript übergeben und in die Konsole geloggt werden können.

Die App folgt einer ähnlichen Struktur wie das einfache Rendering-Demo. Wir erstellen einen Verweis auf ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) ebenso wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Instanzen, um unsere Daten zu verarbeiten: Einen `output`-Puffer, um die Berechnungsergebnisse der GPU mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir die Inhalte von `output` kopieren, der abgebildet werden kann, um JavaScript Zugriff auf die Werte zu ermöglichen.

- `output` wird als ein Speicherpuffer angegeben, der die Quelle einer Kopieoperation sein wird.
- `stagingBuffer` wird als Puffer angegeben, der zur Ansicht für das Lesen durch JavaScript abgebildet werden kann und das Ziel einer Kopieoperation sein wird.

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

### Ein Bindungsgruppenlayout erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindungsgruppe an, die für die Pipeline verwendet werden soll. Dies umfasst das Erstellen eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck von GPU-Ressourcen wie Puffer definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage verwendet, an die sich Bindungsgruppen halten. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherpuffer, der an Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), nutzbar in der Berechnungsstufe der Pipeline, und mit dem Puffer, dessen Zweck als `storage` definiert wird.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindungsgruppenlayout angibt, auf dem diese Bindungsgruppe basieren soll, und die Details der Variablen, die an den in dem Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der `output`-Puffer, den wir zuvor definiert haben, daran gebunden werden soll.

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
> Sie können ein implizites Layout abrufen, das beim Erstellen einer Bindungsgruppe verwendet werden kann, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungspipeline erstellen

Da das oben Genannte vorhanden ist, können wir nun eine Berechnungspipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert auf ähnliche Weise wie die Erstellung einer Render-Pipeline. Wir beschreiben den Berechnungs-Shader, geben an, in welchem Modul der Code gefunden werden soll und was der Einstiegspunkt ist. Wir geben auch ein `layout` für die Pipeline an und in diesem Fall ein Layout basierend auf dem Bindungsgruppenlayout, das wir zuvor definiert haben, indem wir [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) aufrufen.

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

Ein Unterschied zu dem Render-Pipeline-Layout hier ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Eine Berechnungs-Pass ausführen

Eine Berechnungspass auszuführen, hat eine ähnliche Struktur wie ein Renderpass auszuführen, mit einigen unterschiedlichen Kommandos. Zum Start wird der Pass-Codierer mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausstellen der Befehle geben wir auf die gleiche Weise wie zuvor die Pipeline an, die verwendet werden soll, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten anzugeben, die bei der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen zu spezifizieren, die für die Ausführung der Berechnungen verwendet werden sollen.

Dann signalisieren wir das Ende der Render-Pass-Kommandoliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse an JavaScript zurücklesen

Bevor die kodierten Befehle zur Ausführung mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die GPU übermittelt werden, kopieren wir den Inhalt des `output`-Puffer in den `stagingBuffer`-Puffer mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenspeicher zu mappen, eine Referenz auf den abgebildeten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) abzurufen, die Daten in JavaScript zu kopieren und dann in die Konsole zu loggen. Wir heben die Abbildung des `stagingBuffer` auf, sobald sie fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der von dem Rückgabewert eines ungültigen Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz unterhält ihren eigenen Fehlerbereichs-Stack. Dieser Stack ist zu Beginn leer, aber Sie können beginnen, einen Fehlerbereich zu diesem Stack zu pushen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Erfassung von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich aus dem Stack und gibt ein {{jsxref("Promise")}} zurück, das sich mit einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) beschreibt, das den ersten erfassten Fehler im Bereich beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in den "Validierung"-Sektionen, wo dies angebracht ist, die Kriterien auflisten, die zu erfüllen sind, um Fehler zu vermeiden. Siehe beispielsweise den Abschnitt zur Validierung von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, z. B. Kombinationen von Eigenschaften aus Deskriptoren, die zu Validierungsfehlern führen. Es gibt keinen Punkt, Ihnen zu sagen, dass Sie sicherstellen müssen, dass Sie die richtige Deskriptorobjekt-Struktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert werden können. Einige der Fehlerkriterien basieren rein auf internen Dingen und sind für Webentwickler nicht wirklich relevant.

Sie können weitere Informationen zur Fehlerbehandlung in WebGPU in der Erklärung finden – siehe [Objektgültigkeit und Zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Fehlehandhabung Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche reale Beispiele und Ratschläge.

> [!NOTE]
> Die historische Methode der Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da sie Fehler synchron zurückgibt, was schlecht für die Leistung ist – jeder Aufruf erfordert eine Round-Trip-Zeit zur GPU und erfordert, dass alle zuvor ausgestellten Operationen abgeschlossen sind. Ihr Zustandsmodell ist ebenfalls flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code durchsickern können. Die Schöpfer von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Limits anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen zu einem Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität abgerufen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder einem [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Limits, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder einem [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfigurieren einer Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Repräsentation von Pipelineressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um Rohdaten zu speichern, die in GPU-Operationen verwendet werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Snapshot enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Ein Verweis auf ein internes Shader-Modul-Objekt, ein Container für WGSL-Shader-Code, der zur Ausführung an die GPU über eine Pipeline gesendet werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container zur Speicherung von 1D-, 2D- oder 3D-Datenarrays, z. B. von Bildern, die in GPU-Rendering-Operationen verwendet werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der von einem bestimmten [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Texturunterressourcen.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) wird die `GPUBindGroup` verwendet, um eine Sammlung von Ressourcen zusammenzufassen und wie diese Ressourcen in Shader-Stufen genutzt werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und wird als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) genutzt.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungs-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), die mit der Pipeline während der Kommandokodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder einem [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU kodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) zur Ausführung übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlscodierer, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgestellt werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die im Zusammenhang mit der Steuerung der Berechnungs-Shader-Stufe stehen, wie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben. Teil der Gesamtkodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Kontrolliert die Ausführung von kodierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Bündel von Befehlen (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Bündel von Befehlen vorab zu speichern. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)n über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle in Bezug auf die Steuerung der Vertex- und Fragment-Shader-Stufen, wie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben. Teil der Gesamtkodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Anfragen auf Rendering-Pässen ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Anfragen auf Pässen zu speichern, wie Verschleierungs- oder Zeitstempelanfragen.

### Fehler debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, das vom GPU-Shader-Modul-Compiler erzeugt wurde, um bei der Fehlerdiagnose von Shader-Code-Problemen zu helfen.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne Informations-, Warn- oder Fehlermeldung dar, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} erfüllt wird und Informationen darüber liefert, warum das Gerät verloren gegangen ist.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis gemeldet werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis gemeldet werden. Weist darauf hin, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Anforderungen zur Validierung erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis gemeldet werden. Weist darauf hin, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der empfangen wird, wenn ein von einem [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebener {{jsxref("Promise")}} abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis gemeldet werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungseinschränkungen der WebGPU-API nicht erfüllt hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Einfaches Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beste Praktiken für WebGPU](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, keines der Leinwand](https://surma.dev/things/webgpu/)
