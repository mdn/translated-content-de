---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 759102220c07fb140b3e06971cd5981d8f0f134f
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugang zu fortschrittlicheren GPU-Funktionen.

## Konzepte und Nutzung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es um 2011 erschien. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts weiterzugeben, um sie mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die zum Schreiben von WebGL-Shader-Code verwendete Sprache [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) sind komplex, weshalb mehrere WebGL-Bibliotheken erstellt wurden, um das Schreiben von WebGL-Apps zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools verwendet, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungswerkzeuge, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die adressiert werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation von nativen GPU-APIs erschienen — die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird in Zukunft neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering auf eine Leinwand. Es bewältigt allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, zum Beispiel für maschinelles Lernen basierende Modelle.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der gleichzeitig zu rendernden Objekte als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU löst diese Probleme, indem es eine aktualisierte, allgemeine Architektur bietet, die mit modernen GPU-APIs kompatibel ist und sich "web-freundlicher" anfühlt. Es unterstützt das Rendern von Grafiken, bietet aber auch erstklassige Unterstützung für allgemeine GPGPU-Berechnungen. Das Rendern einzelner Objekte ist auf der CPU-Seite erheblich kostengünstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Tiefenschärfesimulation. Zudem kann es teure Berechnungen wie das Culling und Transformationen von gehauteten Modellen direkt auf der GPU handhaben.

## Allgemeines Modell

Es gibt mehrere Abstraktionsschichten zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte besitzen GPUs. Die meisten Geräte haben nur eine GPU, einige jedoch mehr als eine. Es sind verschiedene GPU-Typen verfügbar:

  - Integrierte GPUs, die auf derselben Platine wie die CPU leben und deren Speicher teilen.
  - Diskrete GPUs, die auf einer eigenen Platine leben, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z. B. Metal unter macOS), ist eine Programmierschnittstelle, die nativen Anwendungen den Zugriff auf die Fähigkeiten der GPU ermöglicht. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). In einem System können mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU verfügbar sein, obwohl das obige Diagramm ein Gerät mit nur einer nativen API/einem Treiber annimmt.
- Die WebGPU-Implementierung eines Browsers bearbeitet die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt in Ihrem Code effektiv eine physische GPU und einen Treiber dar, der auf dem zugrunde liegenden System verfügbar ist.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App in einer gegliederten Weise auf GPU-Funktionen zugreifen kann. Logische Geräte sind erforderlich, um Multiplexfähigkeiten bereitzustellen. Die GPU eines physischen Geräts wird gleichzeitig von vielen Anwendungen und Prozessen verwendet, einschließlich potenziell vieler Web-Apps. Jede Web-App muss in der Lage sein, isoliert auf WebGPU zuzugreifen, aus Sicherheits- und Logikgründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz — ist die Grundlage, von der aus eine Web-App auf alle WebGPU-Funktionalitäten zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie die WebGPU-Funktionalität aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Auf einen Adapter greifen Sie über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie beispielsweise einen leistungsstarken oder energieeffizienten Adapter anfordern können. Wenn dies nicht enthalten ist, stellt das Gerät den Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreicht.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionen-Objekt (als Deskriptor bezeichnet), mit dem Sie die genauen Funktionen und Limits spezifizieren können, die das logische Gerät besitzen soll. Wenn dies nicht enthalten ist, hat das bereitgestellte Gerät eine vernünftige, allgemein nutzbare Spezifikation, die für die meisten Zwecke ausreicht.

Mit einigen Feature-Erkennungsprüfungen könnte der obige Prozess folgendermaßen erreicht werden:

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

Eine Pipeline ist eine logische Struktur, die aus programmierbaren Stufen besteht, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines handhaben:

- Eine Render-Pipeline rendert Grafiken, typischerweise in einem {{htmlelement("canvas")}}-Element, kann aber auch Grafiken offscreen rendern. Sie hat zwei Hauptstufen:

  - Eine Vertex-Stufe, in der ein Vertex-Shader die in die GPU eingespeisten Positionsdaten verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein gerenderter Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Zeichenfläche abdecken soll.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes von den vom Vertex-Shader erzeugten Primitiven abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails bereitstellen, sowie die Position und Farbe von virtuellen Lichtern.

- Eine Compute-Pipeline ist für allgemeine Berechnungen. Eine Compute-Pipeline enthält eine Einzelstufe für Berechnungen, in der ein Compute-Shader allgemeine Daten übernimmt, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und dann das Ergebnis in einem oder mehreren Puffern zurückgibt. Die Puffer können beliebige Daten enthalten.

Die oben genannten Shader sind Anweisungssets, die von der GPU verarbeitet werden. WebGPU-Shader sind in einer Low-Level-Sprache geschrieben, die Rust-ähnlich ist und [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) genannt wird.

Es gibt verschiedene Möglichkeiten, eine WebGPU-App zu strukturieren, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und packen Sie ihn in ein oder mehrere Shader-Module.
2. [Kontext der Zeichenfläche abrufen und konfigurieren](#kontext_der_zeichenfläche_abrufen_und_konfigurieren): Holen Sie sich den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie ihn so, dass er Informationen darüber erhält, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keinen grafischen Output hat, wie eine App, die nur Compute-Pipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#einen_puffer_erstellen_und_unsere_dreiecks-daten_hineinschreiben): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder -Texturen gespeichert werden, um von Ihrer App darauf zugegriffen zu werden.
4. [Pipelines erstellen](#render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines auf dieser Grundlage. Unsere Basisdemos enthalten nur eine einzige Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Einen Rechen-/Renderdurchgang ausführen](#einen_rendering-durchgang_ausführen): Dies umfasst eine Reihe von Unterpunkten:
   1. Erstellen Sie einen Kommando-Encoder, der eine Reihe von Kommandos kodieren kann, die an die GPU zur Ausführung übergeben werden soll.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Rechen-/Renderkommandos ausgegeben werden.
   3. Führen Sie Kommandos aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchen Puffern die erforderlichen Daten stammen sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Schließen Sie die Kommandoliste ab und kapseln Sie sie in einem Kommandopuffer ein.
   5. Reichen Sie den Kommandopuffer über die Kommando-Warteschlange des logischen Geräts an die GPU ein.

In den folgenden Abschnitten werden wir ein einfaches Demo der Render-Pipeline untersuchen, um Ihnen zu ermöglichen, zu sehen, was es erfordert. Später untersuchen wir auch ein Beispiel der [Basis-Compute-Pipeline](#basis-compute-pipeline), um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Basis-Render-Pipeline

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Phase (`@vertex`-Block) akzeptiert ein Datenelement, das eine Position und eine Farbe enthält, positioniert das Vertex entsprechend der gegebenen Position, interpoliert die Farbe und gibt die Daten zur Fragment-Shader-Phase weiter. Die Fragment-Shader-Phase (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Phase und färbt das Vertex entsprechend der gegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code innerhalb eines Template-Literals, aber Sie können ihn überall speichern, von wo er einfach als Text abgerufen und in Ihr WebGPU-Programm eingespeist werden kann. Ein weiteres gängiges Vorgehen ist es, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mithilfe von [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte Mime-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) stecken, indem Sie Ihren Shader-Code als Eigenschaft in einem Deskriptor-Objekt übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Kontext der Zeichenfläche abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem sichtbaren `<canvas>`-Element, dann rufen wir [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um dessen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ihm ein Optionen-Objekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen kommen werden, das Format der Texturen und den Alphamodus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Die beste Praxis für die Bestimmung des Texturformats ist die Verwendung der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat); sie wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Puffer erstellen und unsere Dreiecks-Daten hineinschreiben

Als nächstes stellen wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jedes Dreieck-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bringen. Hinter den Kulissen wird dieser Buffer-Typ im Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen auf dem Hostsystem, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit es alle Daten enthalten kann, und `VERTEX`- und `COPY_DST`-Nutzungsflags, um anzugeben, dass der Buffer als Vertex-Buffer verwendet wird und Ziel von Kopiervorgängen ist.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten unsere Daten mittels einer Mapping-Operation in den `GPUBuffer` bringen, wie wir es im Beispiel der [Compute-Pipeline](#basis-compute-pipeline) verwenden, um Daten von der GPU nach JavaScript zurückzulesen. In diesem Fall verwenden wir jedoch die praktische Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer), die als Parameter den Puffer aufnimmt, in den geschrieben werden soll, die Datenquelle, von der geschrieben werden soll, einen Offset-Wert für beide und die Größe der zu schreibenden Daten (wir haben die gesamte Länge des Arrays angegeben). Der Browser arbeitet dann die effizienteste Möglichkeit aus, die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Render-Pipeline definieren und erstellen

Nachdem wir unsere Daten in einen Buffer gebracht haben, besteht der nächste Teil der Einrichtung darin, tatsächlich unsere Pipeline zu erstellen, die zum Rendern bereit ist.

Zuerst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt das, was wir zuvor gesehen haben, sowohl im `vertices`-Array als auch in der Vertex-Shader-Phase — jedes Vertex hat Position- und Farbdatensätze. Beide sind im `float32x4`-Format formatiert (was dem WGSL `vec4<f32>`-Typ entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jede Vertex. `arrayStride` gibt das Intervall in Bytes an, aus denen jede Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollten.

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

Als nächstes erstellen wir ein Deskriptor-Objekt, das die Konfiguration unserer Render-Pipeline-Phasen angibt. Für beide Shader-Phasen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem sich der relevante Code befindet (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Phase fungiert.

Darüber hinaus geben wir im Fall der Vertex-Shader-Phase unser `vertexBuffers`-Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall der Fragment-Shader-Phase geben wir ein Array von Farbzielzuständen an, die das angegebene Rendering-Format anzeigen (dies stimmt mit dem zuvor in unserer Zeichenflächenkontext-Konfiguration angegebenen Format überein).

Wir spezifizieren auch ein `primitive` Objekt, das in diesem Fall nur den Typ Primitive angibt, das wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller von der Pipeline verwendeten GPU-Ressourcen (Adapter, Buffer usw.) während der Ausführung. In komplexeren Apps würde dies in Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekts geschehen, erstellt mittels [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) (Sie können ein Beispiel in unserem [Basic compute pipeline](#basis-compute-pipeline) sehen), was der GPU erlaubt, im Voraus herauszufinden, wie die Pipeline effizient ausgeführt werden kann. Wir spezifizieren jedoch den Wert `auto`, was bewirkt, dass die Pipeline ein implizites Bind-Group-Layout basierend auf den im Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter in einen Aufruf von [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Durchgang ausführen

Nachdem alle Vorbereitungen getroffen sind, können wir einen Rendering-Durchgang ausführen und etwas auf unserem `<canvas>` zeichnen. Um beliebige Kommandos zu kodieren, die später an die GPU ausgegeben werden, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Instanz erstellen, was über einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) geschieht.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir mit einem Aufruf von [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Instanz erstellen. Diese Methode nimmt ein Deskriptor-Objekt als Parameter an, dessen einzige zwingende Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht auf eine angegebene Farbe "gelöscht" werden soll, sobald sie geladen ist und bevor ein Zeichnen stattfindet. Dies bewirkt den blauen Hintergrund hinter dem Dreieck.
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

Nun können wir Methoden des Rendering-Pass-Encoders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die Pipeline für den Rendering-Pass festzulegen.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle, die an die Pipeline zum Rendern übergeben werden soll, zu dienen. Der erste Parameter ist der Slot, für den der Vertex-Buffer festgelegt werden soll, und er verweist auf den Index des Elements im `vertexBuffers`-Array, der das Layout dieses Buffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Gang. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, also setzen wir den Vertex-Count-Wert auf `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Kodierung der Sequenz von Befehlen abzuschließen und diese an die GPU zu übermitteln, sind noch drei Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Renderpass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objektinstanz zu kapseln.
3. Wir reichen den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlsschlange des Geräts ein (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) Instanz), um zur GPU gesendet zu werden. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) zur Warteschlange hinzugefügt werden.

Diese drei Schritte können durch die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Basis-Compute-Pipeline

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, diese in einem Ausgabe-Buffer speichern, die Daten auf einen Staging-Buffer kopieren, dann diesen Staging-Buffer so abbilden, dass die Daten nach JavaScript zurückgelesen und in die Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das einfache Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Referenz auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) ein. Der Unterschied hier besteht darin, dass unser Shader-Code nur eine Shader-Phase hat, eine `@compute`-Phase:

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

### Puffer erstellen, um unsere Daten zu verwalten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Instanzen, um unsere Daten zu verwalten, einen `output`-Buffer, in den die GPU die Berechnungsergebnisse mit hoher Geschwindigkeit schreibt, und einen `stagingBuffer`, auf den wir den Inhalt von `output` kopieren, wodurch es gemappt werden kann, damit JavaScript auf die Werte zugreifen kann.

- `output` wird als Speicher-Buffer spezifiziert, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der für JavaScript map-bar organisiert werden kann, und das Ziel eines Kopiervorgangs sein wird.

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

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bind-Group, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), der die Struktur und den Zweck von GPU-Ressourcen wie Buffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für die Einhaltung von Bind-Groups verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzelnen Speicher-Buffer, der mit dem Bindungsslot 0 verbunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), die im Compute-Stage der Pipeline verwendet werden kann, und der Zweck des Buffers ist als `storage` definiert.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptor-Objekt, das das Bind-Group-Layout spezifiziert, auf dem diese Bind-Group basiert, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir Bindung 0 und spezifizieren, dass der zuvor definierte `output`-Buffer an ihn gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, das verwendet werden kann, wenn Sie eine Bind-Group erstellen, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Compute-Pipeline erstellen

Mit dem Vorangegangenen können wir jetzt eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen, dem ein Pipeline-Deskriptor-Objekt übergeben wird. Dies funktioniert ähnlich wie beim Erstellen einer Render-Pipeline. Wir beschreiben den Compute-Shader, geben an, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir geben auch ein `layout` für die Pipeline an, indem wir eine layout basierend auf dem zuvor definierten `bindGroupLayout` über einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellen.

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

Ein Unterschied hier gegenüber dem Layout der Render-Pipeline ist, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Ein Berechnungspass ausführen

Das Ausführen eines Compute-Passes ist in der Struktur dem Ausführen eines Rendering-Passes ähnlich, mit einigen unterschiedlichen Befehlen. Zum Start wird der Pass-Encoder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle geben wir die zu verwendende Pipeline auf die gleiche Weise wie zuvor an, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden dann jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden wollen, um die Daten anzugeben, die in der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Workgroups anzugeben, die zur Durchführung der Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Renderpass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse nach JavaScript zurücklesen

Bevor wir die kodierten Befehle zur Ausführung an die GPU übermitteln, verwenden wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit), um den Inhalt des `output`-Buffers mittels [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer) in den `stagingBuffer` zu kopieren.

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) Methode, um die Daten in einem Zwischenspeicher zu mappen, eine Referenz auf den gemappten Bereich mithilfe von [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu erhalten, die Daten nach JavaScript zu kopieren und dann in die Konsole zu loggen. Wir heben die Zuordnung des `stagingBuffer` auch auf, nachdem wir damit fertig sind.

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

## GPU Fehlerbehandlung

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf erfolgt, der von der Rückgabe eines ungültigen Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz unterhält einen eigenen Fehlerbereichsstack. Dieser Stack ist anfangs leer, aber Sie können beginnen, einen Fehlerbereich auf den Stack zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit der Fehlererfassung fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das sich in ein Objekt auflöst ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen, zu verstehen, warum in Ihrem WebGPU-Code Fehler auftreten, in den "Validierung"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe zum Beispiel den Abschnitt [`GPUDevice.createBindGroup()` Validation section](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es gibt keinen Sinn darin, Ihnen zu sagen, dass Sie sicherstellen müssen, dass Sie die korrekte Deskriptorobjektstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert werden. Einige der Fehlkriterien basieren rein auf internen Aspekten und sind für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen zur WebGPU-Fehlerhandhabung im Erklärer finden — siehe [Objektgültigkeit und Zerstörbarkeit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Fehlermanagement Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche praktische Beispiele und Ratschläge.

> [!NOTE]
> Die herkömmliche Methode zur Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) Methode bereitzustellen, die Fehlerinformationen zurückgibt. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Hin- und Rückfahrt zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen sind. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code austreten können. Die Entwickler von WebGPU wollten dies verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt der API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Anfangspunkt für die Verwendung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Von diesem können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice) anfordern, Adapterinfo, Funktionen und Grenzwerte.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Beinhaltet Identifizierungsinformationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die die Mehrheit der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionen beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Grenzwerte.

### Konfigurieren einer Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Darstellung von Pipelines-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der zur Speicherung von Rohdaten verwendet werden kann, um in GPU-Operationen verwendet zu werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das einen [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Snapshot enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modul-Objekt, einen Container für WGSL-Shader-Code, der zur Ausführung von einer Pipeline an die GPU übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container zur Speicherung von 1D-, 2D- oder 3D-Datenarrays wie Bildern, die in GPU-Rendering-Operationen verwendet werden sollen.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teil der Textur-Unterressourcen, definiert durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture).

### Darstellung von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen in einer Gruppe gebunden werden sollen und wie diese Ressourcen in Shader-Phasen genutzt werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffer, die in einer Pipeline verwendet werden, und wird als Vorlage bei der Erstellung von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuerung der Compute-Shader-Phase und kann in einer [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die von einer Pipeline verwendeten [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlskodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Phasen und kann in einer [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder einer [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Kodierung und Übermittlung von Befehlen an die GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehlscodierer, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Compute-Shader-Phase, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der Gesamtkodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung von kodierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel voraufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s verwendet werden mittels der Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) und können so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die die Steuerung der Vertex- und Fragment-Shader-Phasen betreffen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der Gesamtkodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen von Rendering-Pässen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen zu Pässen aufzuzeichnen, wie Abfragen zur Verdeckung oder Zeiterfassung.

### Debugging von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Objekten, generiert vom GPU-Shader-Modul-Compiler, um Probleme im Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne Informations-, Warn- oder Fehlermeldung dar, die vom GPU-Shader-Modul-Compiler generiert wird.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn die [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber bereitgestellt werden, warum das Gerät verloren gegangen ist.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis erkannt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis erkannt werden. Weist darauf hin, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis erkannt werden. Weist darauf hin, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der empfangen wird, wenn ein {{jsxref("Promise")}} zurückgegeben von einem Aufruf von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Ereignis erkannt werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungsbeschränkungen der WebGPU API nicht bestanden hat.

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

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — All of the cores, none of the canvas](https://surma.dev/things/webgpu/)
