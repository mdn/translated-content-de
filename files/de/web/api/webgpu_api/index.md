---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortgeschrittenere GPU-Funktionen.

## Konzepte und Nutzung

Man kann zu Recht sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, als es erstmals um 2011 erschien. WebGL ist eine JavaScript-Portierung der Grafikbibliothek [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/), die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts weiterzugeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element darzustellen.

WebGL und die [GLSL](<https://wikis.khronos.org/opengl/Core_Language_(GLSL)>) Sprache, die zur Erstellung von WebGL-Shader-Code verwendet wird, sind komplex. Daher wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu erleichtern. Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungswerkzeuge, VR- und AR-Erfahrungen und mehr zu erstellen.

WebGL weist jedoch einige grundlegende Probleme auf, die angesprochen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs erschienen — die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [Vulkan der Khronos Group](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und somit auch WebGL) geplant, also werden diese neuen Funktionen nicht hinzugefügt. WebGPU hingegen wird fortlaufend neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf einer Leinwand. Es bewältigt allgemeine GPU-Berechnungen (GPGPU) nicht gut. Diese Berechnungen werden jedoch für viele verschiedene Anwendungsfälle immer wichtiger, beispielsweise für solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen stellen immer höhere Anforderungen, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch in Bezug auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme, indem es eine aktualisierte, allgemeine Architektur bietet, die mit modernen GPU-APIs kompatibel ist und sich mehr "webby" anfühlt. Es unterstützt das grafische Rendering, bietet aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite signifikant kostengünstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Simulation der Tiefenschärfe. Darüber hinaus kann es teure Berechnungen wie das Entfernen von verdeckten Teilen und das Transformieren von Hautmodell direkt auf der GPU handhaben.

## Allgemeines Modell

Zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt, gibt es mehrere Abstraktionsebenen. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte verfügen über GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Es gibt verschiedene Arten von GPUs:
  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die auf ihrer eigenen Platine, getrennt von der CPU, leben.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm nimmt an, dass ein Gerät nur eine GPU hat.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen erlaubt, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU zur Verfügung hat, obwohl das obige Diagramm ein Gerät mit nur einer nativen API/Treiber annimmt.
- Die WebGPU-Implementierung eines Browsers verwaltet die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System verfügbar sind, in Ihrem Code.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Webanwendung auf GPU-Funktionen in einer partitionierten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Funktionen bereitstellen. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, einschließlich potenziell vieler Webanwendungen. Jede Webanwendung muss in der Lage sein, WebGPU isoliert zu nutzen, aus Sicherheits- und logischen Gründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Grundlage, von der aus eine Webanwendung auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionen aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter)-Methode auf einen Adapter zu. Diese Methode nimmt ein optionales Einstellungsobjekt an, mit dem Sie z.B. einen Hochleistungs- oder einen energiesparenden Adapter anfordern können. Wenn dies nicht eingeschlossen wird, stellt das Gerät Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode nimmt ebenfalls ein Optionsobjekt (als Deskriptor bezeichnet) an, das verwendet werden kann, um die genauen Funktionen und Grenzen anzugeben, die das logische Gerät haben soll. Wenn dies nicht eingeschlossen wird, hat das bereitgestellte Gerät eine angemessene allgemeine Spezifikation, die für die meisten Zwecke ausreichend ist.

Zusammen mit einigen Feature-Detektionsprüfungen könnte der obige Prozess wie folgt erreicht werden:

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

Eine Pipeline ist eine logische Struktur, die programmierbare Stadien enthält, die ausgeführt werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines handhaben:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, kann aber auch Grafiken offline rendern. Sie hat zwei Hauptstadien:
  - Ein Vertex-Stadium, in dem ein Vertex-Shader Positionierungsdaten in die GPU einspeist und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann in Primitiven wie Dreiecken (den grundlegenden Bausteinen von gerenderten Grafiken) zusammengefügt und von der GPU rasterisiert, um zu ermitteln, welche Pixel jedes auf der Zeichnungsfläche abdecken soll.

  - Ein Fragment-Stadium, in dem ein Fragment-Shader die Farbe für jedes von den vom Vertex-Shader produzierten Primitiven abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe virtueller Lichter bereitstellen.

- Eine Berechnungspipeline dient allgemeinen Berechnungen. Eine Berechnungspipeline enthält ein einziges Berechnungsstadium, in dem ein Berechnungsshader allgemeine Daten aufnimmt, sie parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können jede Art von Daten enthalten.

Die erwähnten Shader sind Anweisungssets, die von der GPU verarbeitet werden. WebGPU-Shader sind in einer niedrigen, Rust-ähnlichen Sprache namens [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie eine WebGPU-App architektonisch aufgebaut werden kann, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Canvas-Kontext abrufen und konfigurieren](#canvas-kontext_abrufen_und_konfigurieren): Erhalten Sie den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn so, dass er Informationen darüber erhält, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht nötig, wenn Ihre App keine grafische Ausgabe hat, wie z.B. eine, die nur Berechnungspipelines nutzt.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#erstellen_eines_buffers_und_schreiben_unserer_dreiecksdaten_hinein): Die Daten, die Sie von Ihren Pipelines verarbeitet haben möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, damit Ihre App darauf zugreifen kann.
4. [Pipelines erstellen](#renderpipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und dann erstellen Sie daraus Pipelines. Unsere Grunddemos enthalten nur eine einzige Pipeline, aber nicht triviale Apps werden in der Regel mehrere Pipelines für unterschiedliche Zwecke enthalten.
5. [Eine Berechnungs-/Renderpass ausführen](#ein_rendering-pass_ausführen): Dies umfasst eine Reihe von Unterabschnitten:
   1. Erstellen Sie einen Befehlsencoder, der einen Satz von Befehlen kodieren kann, die an die GPU übergeben werden, um sie auszuführen.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Berechnungs-/Renderbefehle ausgegeben werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, welche Puffer die erforderlichen Daten bereitstellen sollen, wie viele Zeichenoperationen ausgeführt werden sollen (bei Renderpipelines) usw.
   4. Vervollständigen Sie die Befehlsliste und kapseln Sie sie in einen Befehlsbuffer ein.
   5. Übergeben Sie den Befehlsbuffer zur Ausführung an die GPU über die Befehlsschlange des logischen Geräts.

In den folgenden Abschnitten werden wir ein einfaches Renderpipeline-Demo untersuchen, um Ihnen zu ermöglichen, zu erkunden, was es erfordert. Später werden wir auch ein [einfaches Berechnungspipeline](#grundlegende_berechnungspipeline)-Beispiel prüfen und untersuchen, wie es sich von der Renderpipeline unterscheidet.

## Grundlegende Renderpipeline

In unserem [grundlegenden Renderdemo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen einfarbigen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Das Vertex-Shader-Stadium (`@vertex`-Block) akzeptiert ein Datenstück, das eine Position und eine Farbe enthält, positioniert das Vertex gemäß der angegebenen Position, interpoliert die Farbe und gibt die Daten dann an das Fragment-Shader-Stadium weiter. Das Fragment-Shader-Stadium (`@fragment`-Block) akzeptiert die Daten vom Vertex-Shader-Stadium und färbt das Vertex entsprechend der angegebenen Farbe ein.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-String, aber Sie können ihn überall dort speichern, wo er leicht als Text abgerufen werden kann, um in Ihr WebGPU-Programm eingespeist zu werden. Ein weiteres gängiges Verfahren ist das Speichern von Shaders in einem {{htmlelement("script")}}-Element und das Abrufen des Inhalts mit [`Node.textContent`](/de/docs/Web/API/Node/textContent). Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) platzieren und Ihren Shader-Code als Eigenschaft in einem Deskriptorobjekt übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Canvas-Kontext abrufen und konfigurieren

In einer Renderpipeline müssen wir einen Ort angeben, an den die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz auf ein `<canvas>`-Element auf dem Bildschirm und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um seinen GPU-Kontext (eine Instanz von [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) und übergeben ihm ein Optionsobjekt, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) angibt, von dem die Rendering-Informationen kommen werden, das Format, das die Texturen haben werden, und den Alphamodus, der beim Rendern von halbtransparenten Texturen verwendet wird.

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
> Die beste Methode zur Bestimmung des Texturformats ist die Verwendung der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat); dies wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Erstellen eines Buffers und Schreiben unserer Dreiecksdaten hinein

Als Nächstes werden wir unser WebGPU-Programm mit unseren Daten in einer Form versorgen, die es nutzen kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jedes Dreieck-Vertex enthält — X, Y, Z, W für Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) erhalten. Hinter den Kulissen wird dieser Pufferbereich im Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsdatenverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher durch Prozesse, die auf dem Hosts-System laufen, wie der Browser, nicht zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit es alle Daten enthalten kann, sowie `VERTEX`- und `COPY_DST`-Nutzungsflags, um anzuzeigen, dass der Puffer als Vertex-Puffer und das Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Getten unserer Daten in den `GPUBuffer` mit einer Mapping-Operation durchführen, wie wir es im [Berechnungspipeline-Beispiel](#grundlegende_berechnungspipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer), die als Parameter den zu schreibenden Puffer, die Datenquelle, von der geschrieben wird, einen Offsetwert für jeden und die zu schreibende Datenmenge (wir haben die gesamte Länge des Arrays angegeben) annimmt. Der Browser findet dann den effizientesten Weg, die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Renderpipeline definieren und erstellen

Jetzt, wo wir unsere Daten in einen Puffer überführt haben, ist der nächste Teil der Einrichtung das Erstellen unserer Pipeline, um sie für das Rendering bereit zu machen.

Zuallererst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir bereits in unserem `vertices`-Array und dem Vertex-Shader-Stadium gesehen haben — jedes Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format (das dem WGSL-Typ `vec4<f32>` entspricht) formatiert, und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedes Vertex. `arrayStride` gibt die Streckung an, d.h. die Anzahl der Bytes, die jedes Vertex ausmacht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als Nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stadien angibt. Für beide Shader-Stadien spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem der relevante Code zu finden ist (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jedes Stadium dient.

Darüber hinaus geben wir im Fall des Vertex-Shader-Stadiums unser `vertexBuffers`-Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unseres Fragment-Shader-Stadiums geben wir ein Array von Farbziel-Zuständen an, die das angegebene Rendering-Format angeben (dies entspricht dem im Kontext unserer Leinwandkonfiguration zuvor angegebenen Format).

Wir geben auch ein `primitive`-Objekt an, das in diesem Fall nur den Typ des zu zeichnenden Primitivs angibt, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [grundlegenden Berechnungspipeline](#grundlegende_berechnungspipeline) sehen), die es der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus am effizientesten ausgeführt wird. Wir geben jedoch den Wert `auto` an, welcher die Pipeline dazu veranlasst, basierend auf den in den Shader-Code definierten Bindungen ein implizites Bindgruppenlayout zu generieren.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter in einem Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Ein Rendering-Pass ausführen

Nachdem jetzt die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Render-Pass laufen lassen und etwas auf unser `<canvas>` zeichnen. Um beliebige Befehle zum späteren Ausführen an die GPU zu kodieren, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, was durch einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter an, dessen einzige obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall geben wir an:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht zu einer festgelegten Farbe "gelöscht" werden soll, sobald sie geladen und bevor mit der Zeichnung begonnen wird. Das ist der Grund für den blauen Hintergrund hinter dem Dreieck.
3. Dass der Wert des aktuellen Rendering-Pass für diesen Farbanhang gespeichert werden soll.

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

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um zu spezifizieren, welche Pipeline für den Rendering-Pass verwendet werden soll.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline weitergegeben wird, damit diese rendern kann. Der erste Parameter ist der Slot, für den der Vertex-Puffer gesetzt werden soll, und ist ein Verweis auf den Index des Elements im `vertexBuffers`-Array, welches das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, daher setzen wir einen Vertexanzahl-Wert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Befehlsfolge abzuschließen und sie an die GPU auszugeben, sind noch drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Befehlsliste des Render-Passes zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufnahme der ausgegebenen Befehlsreihe abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz zu kapseln.
3. Wir übergeben den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlsschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um ihn an die GPU zu senden. Die Warteschlange des Geräts ist über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) in die Warteschlange eingefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Berechnungspipeline

In unserem [grundlegenden Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, in einem Ausgabe-Buffer speichern, die Daten in einen Staging-Buffer kopieren und diesen dann mappe`, sodass die Daten nach JavaScript gelesen und in der Konsole protokolliert werden können.

Die Anwendung folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shader-Code nur ein Shader-Stadium hat, ein `@compute`-Stadium:

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

### Erstellen von Buffern zur Verwaltung unserer Daten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verwalten: einen `output`-Buffer, um die von der GPU berechneten Ergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, auf den wir die `output`-Inhalte kopieren, der gemappt werden kann, damit JavaScript auf die Werte zugreifen kann.

- `output` wird als Speicher-Buffer spezifiziert, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` wird als Buffer spezifiziert, der zur Lesung durch JavaScript gemappt werden kann und das Ziel einer Kopieroperation sein wird.

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

### Erstellen eines Bindgruppenlayouts

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindgruppe, die für die Pipeline verwendet werden soll. Dies geschieht dadurch, dass wir zuerst ein [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)) erstellen, die die Struktur und den Zweck von GPU-Ressourcen wie Buffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindgruppen verwendet, an die sie sich halten müssen. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicherbuffer, der an den Bindungsslot 0 (dies entspricht der entsprechenden Bindungsnummer in unserem Shader-Code — `@binding(0)`) gebunden wird, der im Compute-Stadium der Pipeline verwendet werden kann, und der Zweck des Buffers wird als `storage` definiert.

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

Als Nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Aufruf ein Deskriptorobjekt, das das Bindegruppenlayout spezifiziert, auf dem diese Bindgruppe basieren soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden soll. In diesem Fall deklarieren wir Bindeplatz 0 und geben an, dass der zuvor definierte `output`-Buffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es beim Erstellen einer Bindgruppe zu verwenden, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Renderpipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Erstellen einer Berechnungspipeline

Mit all dem oben genannten können wir jetzt eine Berechnungspipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ihm ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert auf ähnliche Weise wie das Erstellen einer Renderpipeline. Wir beschreiben den Berechnungsshader und geben an, in welchem Modul man den Code findet und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir in diesem Fall ein Layout basierend auf dem zuvor definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellen.

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

Ein Unterschied zur Render-Pipeline-Anordnung hier ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Ausführen eines Berechnungspasses

Das Ausführen eines Berechnungspasses ähnelt im Aufbau dem Ausführen eines Rendering-Passes, jedoch mit einigen anderen Befehlen. Zu Beginn wird das Pass-Encoder mithilfe von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle spezifizieren wir die Pipeline, die auf die gleiche Weise wie zuvor verwendet werden soll, mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline). Anschließend verwenden wir jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um zu spezifizieren, dass wir unsere `bindGroup` verwenden möchten, um die Daten anzugeben, die bei der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die zur Berechnung verwendet werden sollen.

Wir signalisieren dann das Ende der Befehlsliste des Render-Passes mithilfe von [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Lesen der Ergebnisse zurück in JavaScript

Bevor die kodierten Befehle zur Ausführung mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die GPU übergeben werden, kopieren wir den Inhalt des `output`-Buffers in den `stagingBuffer`-Buffer mithilfe von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenspeicher zu mappen`, eine Referenz auf den gemappten Bereich mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu übernehmen, die Daten in JavaScript zu kopieren und sie dann in die Konsole zu protokollieren. Wir heben auch die Zuordnung des `stagingBuffer` auf, sobald wir damit fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein anderer Aufruf gemacht wird, der von der Rückgabe eines ungültigen Aufrufs abhängt, wird dieses Objekt ebenfalls als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerscopen-Stack. Dieser Stack ist anfangs leer, aber Sie können beginnen, einen Fehlerscope auf den Stack zu drücken, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Fehlererfassung fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies nimmt den Scope vom Stack und gibt ein {{jsxref("Promise")}} zurück, das entweder zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError), oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) aufgelöst wird, welches den ersten im Scope erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen sollen zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validation"-Sektionen, wo sie angemessen sind, die Kriterien auflisten, die erfüllt sein müssen, um Fehler zu vermeiden. Sehen Sie beispielsweise den [`GPUDevice.createBindGroup()`]-Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir beschlossen, nur Fehlerkriterien aufzulisten, die:

- Nicht-offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler produzieren. Es macht keinen Sinn, Ihnen zu sagen, dass Sie sicherstellen sollen, dass Sie die richtige Deskriptor-Struktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Entwickler-kontrolliert. Einige der Fehlerkriterien basieren rein auf Interna und sind für Webentwickler nicht wirklich relevant.

Weitere Informationen zur Fehlerbehandlung in WebGPU finden Sie im Erklärer — siehe [Objektgültigkeit und Zerstörtheit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche Beispiele und Ratschläge aus der realen Welt.

> [!NOTE]
> Die historische Methode der Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert einen Roundtrip zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code durchfallen können. Die Ersteller von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Startpunkt für die Nutzung von WebGPU. Er kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die auf die Mehrheit der WebGPU-Funktionen zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützen Grenzen.

### Konfigurieren eines Render-CANVAS

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"`-`contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"`-`contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements.

### Darstellung von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der zum Speichern von Rohdaten verwendet werden kann, die in GPU-Operationen verwendet werden sollen.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das ein Snapshot eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Textur-Ressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modul-Objekt, ein Container für WGSL-Shader-Code, der von einer Pipeline zur Ausführung an die GPU übermittelt werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der 1D-, 2D- oder 3D-Datenarrays speichert, wie z.B. Bilder, die in GPU-Rendering-Operationen verwendet werden sollen.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige Untermengen der Textur-Subressourcen, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert sind.

### Darstellung von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen zur gemeinsamen Bindung und wie diese Ressourcen in Shader-Stadien verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck von verwandten GPU-Ressourcen wie Buffern, die in einer Pipeline verwendet werden sollen, und wird bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s als Vorlage verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert das Berechnungsshader-Stadium und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die in einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die bei der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Stadien und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Kodierung und Übermittlung von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) zur Ausführung übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlsencoder, der zum Kodieren von Befehlen verwendet wird, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die sich auf die Kontrolle des Berechnungsshader-Stadiums beziehen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Kontrolliert die Ausführung von kodierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel vorzuriemen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles)-Methode so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die sich auf die Kontrolle der Vertex- und Fragment-Shader-Stadien beziehen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen von Rendering-Pässen ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen zu Pässen zu protokollieren, z.B. Okklusions- oder Zeitstempelabfragen.

### Debuggen von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die von dem GPU-Shader-Modul-Compiler generiert wurden, um Probleme mit dem Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber bereitstellt, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis bereitgestellt wird.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis bereitgestellt werden. Weist darauf hin, dass eine Operation aus einem system- oder implementationsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Anforderungen der Validierung erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis bereitgestellt werden. Weist darauf hin, dass nicht genug freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Fehl. Der Wert, der empfangen wird, wenn ein {{jsxref("Promise")}}, das von einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegeben wird, abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis bereitgestellt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsanforderungen der WebGPU API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar.

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
- [WebGPU-Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
