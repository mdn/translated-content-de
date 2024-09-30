---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: b065c09b79d18abf0f04778c9307e1c312b8c6f9
---

{{DefaultAPISidebar("WebGPU API")}}{{SeeCompatTable}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklerinnen und -entwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API), bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) die Möglichkeiten des Web in Bezug auf Grafikfähigkeiten revolutioniert hat, nachdem es um 2011 erstmals erschienen ist. WebGL ist ein JavaScript-Port der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zur Verarbeitung mit sehr hohen Geschwindigkeiten zu übergeben und das Ergebnis in einem {{htmlelement("canvas")}} Element zu rendern.

WebGL und die [GLSL](<https://www.khronos.org/opengl/wiki/Core_Language_(GLSL)>) Sprache, die zum Schreiben von WebGL-Shader-Code verwendet wird, sind komplex, sodass mehrere WebGL-Bibliotheken erstellt wurden, um WebGL-Apps einfacher schreiben zu können: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwicklerinnen und Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erfahrungen und mehr zu bauen.

WebGL hat jedoch einige grundlegende Probleme, die angegangen werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs erschienen - die beliebtesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) - die eine Vielzahl neuer Funktionen bieten. Es sind keine weiteren Updates für OpenGL (und damit WebGL) geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird künftig neue Funktionen hinzugefügt bekommen.
- WebGL basiert vollständig auf der Verwendung von Grafikzeichnung und deren Rendering auf einer Canvas. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht sehr gut verarbeiten. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle, zum Beispiel auf Maschinenlernmodellen basierende, immer wichtiger.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der Objekte, die gleichzeitig gerendert werden sollen, als auch auf die Verwendung neuer Rendering-Funktionen.

WebGPU löst diese Probleme, indem es eine aktualisierte allgemeine Architektur bietet, die mit modernen GPU-APIs kompatibel ist und sich "webbiger" anfühlt. Es unterstützt Grafikrendering, hat aber auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite deutlich günstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Post-Processing-Filter wie Farbeffekte, Schärfen und Tiefenschärfen-Simulation. Darüber hinaus kann es teure Berechnungen wie Culling und Transformation von geskinnten Modellen direkt auf der GPU verarbeiten.

## Allgemeines Modell

Zwischen einer Geräte-GPU und einem Browser, der die WebGPU API ausführt, gibt es mehrere Abstraktionsschichten. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein einfaches Schaubild zeigt die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:

  - Integrierte GPUs, die sich auf demselben Board wie die CPU befinden und deren Speicher teilen.
  - Dedizierte GPUs, die auf ihrem eigenen Board unabhängig von der CPU leben.
  - Software-"GPUs", implementiert auf der CPU.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (z.B. Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und -Treiber zur Kommunikation mit der GPU hat, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/einem Treiber ausgeht.
- Eine Browser-WebGPU-Implementierung übernimmt die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt effektiv eine physische GPU und einen Treiber dar, der im zugrunde liegenden System in Ihrem Code verfügbar ist.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App in einer kapselnden Weise auf GPU-Funktionen zugreifen kann. Logische Geräte müssen Multiplexing-Funktionen bereitstellen. Eine GPU des physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von vielen Web-Apps. Jede Web-App muss isolierten Zugang zu WebGPU erhalten können, aus Sicherheits- und logischen Gründen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Objektinstanz — ist die Basis, von der aus eine Web-App Zugriff auf alle WebGPU-Funktionen erhält. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionen innerhalb eines Workers verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) Methode auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, z.B. einen leistungsstarken oder energiearmen Adapter anzufordern. Wenn dies nicht eingeschlossen ist, stellt das Gerät Zugriff auf den Standardadapter zur Verfügung, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein Optionsobjekt (ein sogenannter Deskriptor), das dazu verwendet werden kann, die genauen Funktionen und Grenzen zu spezifizieren, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das gelieferte Gerät über eine vernünftige allgemeine Spezifikation verfügen, die für die meisten Zwecke ausreichend ist.

Mit einigen Funktionsprüfungen zusammengefügt, könnte der oben beschriebene Prozess wie folgt erreicht werden:

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

Eine Pipeline ist eine logische Struktur, die programmierbare Phasen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. Derzeit kann WebGPU zwei Typen von Pipelines verarbeiten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}} Element, aber sie könnte auch Grafiken im Offscreen rendern. Sie hat zwei Hauptstadien:

  - Ein Vertex-Stadium, in dem ein Vertex-Shader Positionierungsdaten entgegennimmt, die in die GPU eingespeist werden, und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken (dem grundlegenden Baustein von gerenderten Grafiken) zusammengesetzt und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Zeichnungs-Canvas abdecken soll.

  - Ein Fragment-Stadium, in dem ein Fragment-Shader die Farbe jedes vom Vertex-Shader produzierten Primitivs abgedeckten Pixels berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails bereitstellen, und die Position und Farbe virtueller Lichter.

- Eine Compute-Pipeline ist für allgemeine Berechnungen. Eine Compute-Pipeline enthält ein einzelnes Compute-Stadium, in dem ein Compute-Shader allgemeine Daten entgegennimmt, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis dann in einem oder mehreren Puffern zurückgibt. Die Puffer können jedes beliebige Datentyp enthalten.

Die oben erwähnten Shader sind Anweisungssets, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Niedrig-Level-Sprache geschrieben, die Rust-ähnlich ist - [WebGPU Shader Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL).

Es gibt mehrere Möglichkeiten, wie Sie eine WebGPU-App strukturieren könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte umfassen:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in einem oder mehreren Shader-Modulen.
2. [Canvas-Kontext abrufen und konfigurieren](#canvas-kontext_abrufen_und_konfigurieren): Holen Sie sich den `webgpu` Kontext eines `<canvas>` Elements und konfigurieren Sie ihn, um Informationen darüber zu erhalten, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, wie z.B. eine, die nur Compute-Pipelines verwendet.
3. [Ressourcen erstellen, die Ihre Daten enthalten](#erstellen_eines_puffers_und_schreiben_unserer_dreieck-daten_darin): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Puffern oder Texturen gespeichert werden, um von Ihrer App darauf zugegriffen zu werden.
4. [Pipelines erstellen](#definieren_und_erstellen_der_render-pipeline): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie daraus Pipelines. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Ausführen eines Berechnungs-/Rendering-Passes](#ausführen_eines_rendering-passes): Dies umfasst eine Reihe von Unterschritten:
   1. Erstellen Sie einen Command-Encoder, der eine Reihe von Befehlen enkodieren kann, die an die GPU übergeben werden, um ausgeführt zu werden.
   2. Erstellen Sie ein Pass Encoder Objekt, auf dem Berechnungs-/Renderbefehle ausgegeben werden.
   3. Führen Sie Befehle aus, um die zu verwendenden Pipelines anzugeben, aus welchem Puffer(n) die erforderlichen Daten abgerufen werden sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Render Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einem Command-Buffer.
   5. Übermitteln Sie den Command-Buffer über die Befehlsschlange des logischen Geräts an die GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Demo einer Render-Pipeline untersuchen, um Ihnen die Möglichkeit zu geben, zu erkunden, was dafür erforderlich ist. Später werden wir auch ein [grundlegendes Compute-Pipeline](#grundlegende_compute_pipeline) Beispiel untersuchen und darauf eingehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [grundlegenden Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>` Element einen durchgehend blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Phase (`@vertex` Block) akzeptiert einen Teil von Daten, der eine Position und eine Farbe enthält, positioniert den Vertex gemäß der angegebenen Position, interpoliert die Farbe und gibt die Daten an die Fragment-Shader-Phase weiter. Die Fragment-Shader-Phase (`@fragment` Block) akzeptiert die Daten aus der Vertex-Shader-Phase und färbt den Vertex gemäß der angegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template-Literal, aber Sie können ihn überall speichern, von wo aus er einfach als Text abgerufen und in Ihr WebGPU-Programm eingespeist werden kann. Beispielsweise eine andere übliche Praxis besteht darin, Shader in einem {{htmlelement("script")}} Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der richtige Mime-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code in WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) Aufruf setzen, indem Sie Ihren Shader-Code als Eigenschaft in einem Deskriptorobjekt übergeben. Beispielsweise:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Canvas-Kontext abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an dem die Grafiken gerendert werden sollen. In diesem Fall holen wir eine Referenz auf ein Onscreen-`<canvas>` Element und rufen dann [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit dem Parameter `webgpu` auf, um den GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ihm ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen stammen werden, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats besteht darin, die [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) Methode zu verwenden; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Erstellen eines Puffers und Schreiben unserer Dreieck-Daten darin

Als Nächstes versehen wir unser WebGPU-Programm mit unseren Daten in einer für es nutzbaren Form. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jeden Dreiecks-Vertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Allerdings haben wir hier ein Problem. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Im Hintergrund wird dieser Puffer direkt in einem sehr eng mit den Kernen der GPU integrierten Speicher gespeichert, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher von Prozessen, die im Hostsystem laufen, wie dem Browser, nicht zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe gleich der Länge des `vertices` Arrays, damit es alle Daten enthalten kann, und `VERTEX` und `COPY_DST` Nutzungs-Flags, um anzugeben, dass der Puffer als Vertex-Puffer und Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten den Zugriff auf unsere Daten im `GPUBuffer` mit einem Mapping-Vorgang erledigen, wie wir es im [Compute-Pipeline Beispiel](#grundlegende_compute_pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer) Convenience-Methode, die als Parameter den Puffer, in den geschrieben werden soll, die Datenquelle, von der geschrieben werden soll, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten entgegennimmt (wir haben die gesamte Länge des Arrays angegeben). Der Browser berechnet dann den effizientesten Weg, die Daten zu schreiben.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Definieren und Erstellen der Render-Pipeline

Jetzt, wo wir unsere Daten in einem Puffer haben, ist der nächste Teil der Einrichtung, tatsächlich unsere Pipeline zu erstellen, die bereit für das Rendering verwendet zu werden.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir zuvor in unserem `vertices` Array und der Vertex-Shader-Phase gesehen haben - jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4` Format formatiert (das dem WGSL `vec4<f32>` Typ entspricht), und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die Schrittweite an, die Anzahl der Bytes, aus der jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als Nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stadien spezifiziert. Für beide Shader-Phasen spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Phase dient.

Darüber hinaus geben wir im Fall der Vertex-Shader-Phase unser `vertexBuffers` Objekt zu, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall der Fragment-Shader-Phase stellen wir ein Array von Farbezielzuständen bereit, die das spezifizierte Rendering-Format angeben (dies entspricht dem Format, das zuvor in unserer Canvas-Kontextkonfiguration spezifiziert wurde).

Wir spezifizieren auch einen `primitive` Zustand, der in diesem Fall nur den Typ des zu zeichnenden Primitivs angibt, und ein `layout` von `auto`. Die `layout` Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wird (Sie können ein Beispiel in unserer [Basic Compute Pipeline](#grundlegende_compute_pipeline) sehen), das der GPU ermöglicht, herauszufinden, wie die Pipeline im Voraus am effizientesten ausgeführt werden kann. Hier jedoch geben wir den `auto` Wert an, der die Pipeline dazu veranlasst, auf der Grundlage aller in den Shader-Code definierten Bindungen ein implizites Bindungsgruppenlayout zu generieren.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor` Objekt erstellen, indem wir es als Parameter in einen [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) Methodenaufruf übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Ausführen eines Rendering-Passes

Nun, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um Befehle zu kodieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder) Instanz erstellen, was durch einen [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) Aufruf durchgeführt wird.

```js
const commandEncoder = device.createCommandEncoder();
```

Als Nächstes beginnen wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) Aufruf erstellen. Diese Methode nimmt ein Deskriptorobjekt als Parameter, dessen einzig zwingende Eigenschaft ein `colorAttachments` Array ist. In diesem Fall spezifizieren wir:

1. Eine Texturansicht zum Rendern; wir erstellen eine neue Ansicht vom `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht beim Laden gelöscht und auf eine angegebene Farbe gesetzt werden soll, bevor irgendeine Zeichnung stattfindet. Dies bewirkt den blauen Hintergrund hinter dem Dreieck.
3. Dass der Wert des aktuellen Rendering-Passes für diesen Farbezielanhang gespeichert werden soll.

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

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline` Objekt als Parameter aufgerufen, um die zu verwendende Pipeline für den Rendering-Pass zu spezifizieren.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer` Objekt als Parameter aufgerufen, um als Datenquelle zu dienen, die an die Pipeline zum Rendern übergeben wird. Der erste Parameter ist der Slot, um den Vertex-Puffer für den Index des Elements im `vertexBuffers` Array zu setzen, das das Layout dieses Puffers beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Bewegung. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, daher setzen wir einen Vertex-Zählwert von `3`, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Sequenz der Befehle abzuschließen und an die GPU auszugeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) Methode auf, um das Ende der Render-Pass-Befehlsliste zu signalisieren.
2. Wir rufen die [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) Methode auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Objektinstanz zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) Instanz), um an die GPU gesendet zu werden. Die Warteschlange des Geräts ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) Instanzen kann der Warteschlange über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) Aufruf hinzugefügt werden.

Diese drei Schritte können über die folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute Pipeline

In unserem [grundlegenden Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, die in einem Ausgabepuffer gespeichert werden, kopieren die Daten in einen stagingBuffer und mappen diesen stagingBuffer, damit die Daten ausgelesen und in der Konsole ausgegeben werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen eine [`GPUDevice`](/de/docs/Web/API/GPUDevice) Referenz wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) durch einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) Aufruf. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Phase hat, eine `@compute` Phase:

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

### Erstellen von Puffern zur Handhabung unserer Daten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) Instanzen zur Handhabung unserer Daten, einen `output` Puffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, zu dem wir den Inhalt von `output` kopieren werden und der gemappt werden kann, damit JavaScript die Werte zugreifen kann.

- `output` wird als Speicherpuffer spezifiziert, der die Quelle eines Kopiervorgangs sein wird.
- `stagingBuffer` wird als Puffer spezifiziert, der zum Lesen durch JavaScript gemappt werden kann und das Ziel eines Kopiervorgangs sein wird.

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

### Erstellen eines Bindungsgruppenlayouts

Wenn die Pipeline erstellt wird, spezifizieren wir eine Bindungsgruppe, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst das Erstellen eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (durch einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), das die Struktur und den Zweck von GPU-Ressourcen wie Puffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindungsgruppen verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzigen Speicherpuffer, der an den Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), nutzbar im Computationsstadium der Pipeline, und mit dem Zweck des Puffers als `storage`.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindungsgruppenlayout spezifiziert, auf dem diese Bindungsgruppe basieren soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir Bindung 0 und spezifizieren, dass der zuvor definierte `output` Puffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es beim Erstellen einer Bindungsgruppe zu nutzen, indem Sie die [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) Methode aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Erstellen einer Compute-Pipeline

Mit all dem oben genannten können wir nun eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipelinesdeskriptorobjekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben den Compute-Shader, indem wir angeben, in welchem Modul der Code zu finden ist und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir ein Layout basierend auf dem zuvor definierten `bindGroupLayout` über einen [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) Aufruf erstellen.

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

Ein Unterschied hier zum Layout der Render-Pipeline besteht darin, dass wir keinen Primitivtyp angeben, da wir nichts zeichnen.

### Ausführen eines Compute-Passes

Das Ausführen eines Compute-Passes ist in der Struktur dem Ausführen eines Rendering-Passes ähnlich, mit einigen unterschiedlichen Befehlen. Zum Start wird der Pass-Encoder mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Beim Ausgeben der Befehle spezifizieren wir die Pipeline, um sie in der gleichen Weise wie zuvor zu verwenden, indem wir [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline) verwenden. Wir verwenden jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten zur Verwendung bei der Berechnung anzugeben, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die zur Durchführung der Berechnungen verwendet werden sollen.

Anschließend signalisieren wir das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(BUFFER_SIZE / 64));

passEncoder.end();
```

### Ergebnisse an JavaScript zurücklesen

Bevor wir die kodierten Befehle zur Ausführung an die GPU übermitteln, indem wir [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) verwenden, kopieren wir die Inhalte des `output` Puffers auf den `stagingBuffer` Puffer mithilfe von [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync) Methode, um die Daten in den Zwischen-Speicher zu mappen, eine Referenz auf den gemappten Bereich zu holen, indem wir [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) verwenden, die Daten in JavaScript kopieren und sie dann an die Konsole ausgeben. Wir entmappen den `stagingBuffer`, sobald wir damit fertig sind.

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

## GPU Fehlerbehandlung

WebGPU-Aufrufe werden asynchron im GPU-Prozess validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der sich auf den Rückgabewert eines ungültig gemachten Aufrufs stützt, wird dieses Objekt auch als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice) Instanz unterhält ihren eigenen Fehlerbereichs-Stack. Dieser Stack ist zunächst leer, aber Sie können einen Fehlerbereich setzen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit dem Erfassen von Fehlern fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt auflöst ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)), das den ersten in dem Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validierung"-Abschnitten, wo es angebracht ist, die Kriterien auflisten, die erfüllt werden müssen, um Fehler zu vermeiden. Siehe beispielsweise den [`GPUDevice.createBindGroup()` Validierungsabschnitt](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, beispielsweise Kombinationen von Deskriptoreigenschaften, die Validierungsfehler erzeugen. Es hat keinen Sinn, Ihnen zu sagen sicherzustellen, dass der richtige Struktur des Deskriptorobjekts verwendet wird. Das ist sowohl offensichtlich als auch vage.
- Entwicklerkontrolliert sind. Einige der Fehlerkriterien basieren rein auf internen und sind nicht wirklich für Web-Entwickler relevant.

Weitere Informationen zur Fehlerbehandlung in WebGPU finden Sie im Erklärer — siehe [Objekt-Gültigkeit und zerstört-heit](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Errors](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Error Handling Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bieten nützliche praxisnahe Beispiele und Ratschläge.

> [!NOTE]
> Die historische Methode zur Fehlerbehandlung in WebGL besteht darin, eine [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) Methode bereitzustellen, um Fehlerinformationen zurückzugeben. Dies ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist - jeder Aufruf erfordert eine Rundreise zur GPU und erfordert, dass alle zuvor ausgegebenen Operationen abgeschlossen werden. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchsickern können. Die Erschaffer von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU) Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Startpunkt zur Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Grenzen anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält Identifikationsinformationen über einen Adapter.

### Konfigurieren von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalitäten beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Grenzen, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfigurieren eines Rendering `<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Der Aufruf von `getContext()` mit dem `"webgpu"` `contextType` gibt ein [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext) Objektinstanz zurück, das dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}} Elements dar.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der zur Speicherung von Rohdaten für GPU-Operationen verwendet werden kann.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das ein Snapshot von einem [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modulobjekt, ein Container für WGSL Shader-Code, der der GPU zur Ausführung durch eine Pipeline eingespeist werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays zu speichern, wie Bilder, die in GPU-Rendering-Operationen verwendet werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einige Teilmengen der Textur-Subressourcen, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert sind.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die zusammen gebunden werden und wie diese Ressourcen in Shader-Phasen genutzt werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Puffer, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert die Compute-Shader-Phase und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die während der Befehlskodierung mit der Pipeline verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Phasen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Kodierung und Einreichung von Befehlen zur GPU

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgezeichnete Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehl-Encoder dar, der zum Enkodieren von Befehlen verwendet wird, die an die GPU ausgestellt werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Encodiert Befehle, die sich auf die Kontrolle der Compute-Shader-Phase beziehen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgestellt werden. Teil der Gesamtaktivität des Enkodierens eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : kontrolliert die Ausführung von kodierten Befehlen auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel vorab aufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) Methode beliebig oft wieder verwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Encodiert Befehle, die sich auf die Kontrolle der Vertex- und Fragment-Shader-Phasen beziehen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)ausgestellt werden. Teil der Gesamtaktivität des Enkodierens eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Ausführen von Abfragen in Rendering-Pässen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen bei Pässen, wie Okklusions- oder Zeitstempelabfragen, aufzuzeichnen.

### Debugging von Fehlern

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage) Objekten, generiert vom GPU-Shader-Modul-Compiler, um Probleme mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne Informations-, Warnungs- oder Fehlermeldung dar, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber gibt, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Event sichtbar gemacht werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Event sichtbar gemacht werden. Zeigt an, dass eine Operation aus system- oder implementierungsspezifischen Gründen fehlgeschlagen ist, selbst wenn alle Validierungsanforderungen erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Event sichtbar gemacht werden. Zeigt an, dass nicht genügend freier Speicher vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt ein Pipeline-Versagen. Der Wert, den man erhält, wenn ein von einem [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebenes {{jsxref("Promise")}} zurückgewiesen wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Event.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Arten von Fehlern, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event) Event sichtbar gemacht werden. Beschreibt einen Anwendungsfehler, der darauf hinweist, dass eine Operation die Validierungseinschränkungen der WebGPU API nicht erfüllt hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Secure_Contexts) verfügbar.

## Beispiele

- [Basic Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Basic Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [WebGPU Best Practices](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, kein Canvas](https://surma.dev/things/webgpu/)
