---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: 19b8981ede1bc5dad6e0eb7f5f7c2a0ee0c296f1
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf umfassendere GPU-Funktionen.

## Konzepte und Verwendung

Es ist fair zu sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es erstmals um 2011 erschienen ist. WebGL ist ein JavaScript-Port der Grafikbibliothek [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/), der es Webseiten ermöglicht, Renderberechnungen direkt an die GPU des Geräts zu übergeben, um diese mit sehr hoher Geschwindigkeit zu verarbeiten und das Ergebnis in ein {{htmlelement("canvas")}}-Element zu rendern.

WebGL und die zum Schreiben von WebGL-Shader-Code verwendete Sprache [GLSL](<https://wikis.khronos.org/opengl/Core_Language_(GLSL)>) sind komplex, weshalb mehrere WebGL-Bibliotheken erstellt wurden, um das Schreiben von WebGL-Anwendungen zu erleichtern: Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Tools genutzt, um immersive webbasierte 3D-Spiele, Musikvideos, Schulungs- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

WebGL hat jedoch einige grundlegende Probleme, die behoben werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation von nativen GPU-APIs erschienen — die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Fülle neuer Funktionen bieten. Es gibt keine weiteren Updates für OpenGL (und damit WebGL) mehr, sodass es keine dieser neuen Funktionen erhält. Für WebGPU werden hingegen in Zukunft neue Funktionen hinzugefügt.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Rendering in einem Canvas. Es kann allgemeine GPU-Berechnungen (GPGPU) nicht gut verarbeiten. GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, zum Beispiel für solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden immer anspruchsvoller, sowohl hinsichtlich der Anzahl der gleichzeitig zu rendernden Objekte als auch der Nutzung neuer Rendering-Funktionen.

WebGPU geht auf diese Probleme ein und bietet eine aktualisierte, allgemeine Architektur, die mit modernen GPU-APIs kompatibel und "weborientierter" ist. Es unterstützt sowohl die grafische Darstellung als auch GPGPU-Berechnungen als erstklassige Funktionalität. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich günstiger, und es werden moderne GPU-Rendering-Funktionen unterstützt, wie partikelbasierte Rechnungen und Nachbearbeitungsfilter wie Farbeffekte, Schärfen und Tiefenschärfesimulation. Zudem kann es aufwändige Berechnungen wie Culling und Transformation von skinierten Modellen direkt auf der GPU durchführen.

## Allgemeines Modell

Es gibt mehrere Abstraktionsebenen zwischen einem Geräte-GPU und einem Webbrowser, der die WebGPU API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu lernen:

![Ein grundlegendes Stapeldiagramm zeigt die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät](basic-webgpu-stack.png)

- Physische Geräte verfügen über GPUs. Die meisten Geräte haben nur eine GPU, einige jedoch mehrere. Verschiedene GPU-Typen sind verfügbar:
  - Integrierte GPUs, die sich auf derselben Platine wie die CPU befinden und deren Speicher teilen.
  - Diskrete GPUs, die sich auf ihrer eigenen Platine befinden, getrennt von der CPU.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (zum Beispiel Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Befehle werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU zur Verfügung hat, obwohl das obige Diagramm von einem Gerät mit nur einem nativen API/Treiber ausgeht.
- Eine WebGPU-Implementierung des Browsers verarbeitet die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter repräsentiert in Ihrem Code effektiv eine physische GPU und einen Treiber, die im zugrunde liegenden System verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, über die eine einzelne Web-App auf GPU-Funktionen auf compartmentalisierte Weise zugreifen kann. Logische Geräte müssen Multiplexfähigkeiten bereitstellen. Die GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von vielen Web-Apps. Jede Web-App muss aus Sicherheits- und Logikgründen in der Lage sein, isoliert auf WebGPU zuzugreifen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Grundlage, von der aus eine Web-App auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt wie folgt:

1. Die [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu)-Eigenschaft (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität aus einem Worker heraus nutzen) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, das es Ihnen ermöglicht, beispielsweise einen [Kompatibilitätsmodus](#webgpu-kompatibilitätsmodus), einen Hochleistungs- oder Energiesparadapter anzufordern. Wenn dies nicht enthalten ist, stellt das Gerät Zugriff auf den Standardadapter bereit, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert ebenfalls ein options-Objekt (als Descriptor bezeichnet), das verwendet werden kann, um die genauen Funktionen und Einschränkungen anzugeben, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, verfügt das bereitgestellte Gerät über eine vernünftige allgemeine Spezifikation, die für die meisten Zwecke ausreicht.

Zusammen mit einigen Funktionsüberprüfungen könnte der obige Prozess wie folgt erreicht werden:

```js
async function init() {
  if (!navigator.gpu) {
    throw Error("WebGPU not supported.");
  }

  let adapter;
  try {
    adapter = await navigator.gpu.requestAdapter();
  } catch (error) {
    console.error(error);
  }
  if (!adapter) {
    throw Error("Couldn't request WebGPU adapter.");
  }

  const device = await adapter.requestDevice();

  // …
}
```

### WebGPU-Kompatibilitätsmodus

Standardmäßig unterstützt ein `GPUAdapter` alle Core-WebGPU-Funktionen und -Grenzen, was es Anwendungen ermöglicht, Geräte mit modernen Plattform-Grafik-APIs zu unterstützen. Dies wird als "core" WebGPU bezeichnet.

Es ist möglich, WebGPU in den "Kompatibilitätsmodus" zu versetzen, was bedeutet, dass der `GPUAdapter` eine eingeschränkte Teilmenge der WebGPU API unterstützt, die in älteren Grafik-APIs wie OpenGL ES 3.1 und Direct3D 11 ausführbar ist. Dies wird erreicht, indem ein [`featureLevel`](/de/docs/Web/API/GPU/requestAdapter#featurelevel) Wert von `compatibility` in Ihrem Call an [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) angegeben wird:

```js
const adapter = await navigator.gpu.requestAdapter({
  featureLevel: "compatibility",
});
```

Die genauen Einschränkungen des Kompatibilitätsmodus sind im [WebGPU-Kompatibilitätsmodus](https://webgpufundamentals.org/webgpu/lessons/webgpu-compatibility-mode.html) detailliert beschrieben.
Eingeschränkte Anwendungen sind dennoch gültige Anwendungen des WebGPU-Kerns, da sie eine Teilmenge des Kern-WebGPU unterstützen und daher auf allen Browsern mit WebGPU-Kernunterstützung laufen, selbst wenn sie den Kompatibilitätsmodus nicht explizit unterstützen.

Ein `GPUAdapter` oder `GPUDevice`, das den WebGPU-Kern unterstützt, verfügt über das `core-features-and-limits`-Feature (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Um zu testen, ob eine WebGPU-App im Kern- oder Kompatibilitätsmodus ist, überprüfen Sie, ob das `core-features-and-limits`-Feature unterstützt wird. Beispielsweise:

```js
const isCore = device.features.has("core-features-and-limits");
```

Siehe auch [Verwendung des Kompatibilitätsmodus nur bei Bedarf](/de/docs/Web/API/GPU/requestAdapter#using_compatibility_mode_only_if_necessary).

## Pipelines und Shader: WebGPU-App-Struktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden müssen, um die Arbeit Ihres Programms zu erledigen. WebGPU ist derzeit in der Lage, zwei Arten von Pipelines zu verwalten:

- Eine Render-Pipeline rendert Grafiken, typischerweise in ein {{htmlelement("canvas")}}-Element, kann aber auch Grafiken offscreen rendern. Sie hat zwei Hauptstufen:
  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionierungsdaten empfängt, die in die GPU eingespeist werden, und diese verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Rotation, Translation oder Perspektive angewendet werden. Die Vertices werden dann zu Primitiven wie Dreiecken zusammengefügt (das grundlegende Baustein gerenderter Grafiken) und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes abdecken sollte.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes von den durch den Vertex-Shader produzierten Primitiven abgedeckte Pixel berechnet. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails bereitstellen, sowie die Position und Farbe virtueller Lichtquellen.

- Eine Computepipeline ist für allgemeine Berechnungen. Eine Computepipeline enthält eine einzelne Computestufe, in der ein Compute-Shader allgemeine Daten verarbeitet, diese parallel über eine bestimmte Anzahl von Arbeitsgruppen bearbeitet und dann das Ergebnis in einem oder mehreren Buffers zurückgibt. Die Buffers können Daten jeder Art enthalten.

Die oben genannten Shader sind Sammlungen von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Rust-ähnlichen Sprache namens [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-App architektonisch gestalten könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Shader-Module erstellen](#shader-module_erstellen): Schreiben Sie Ihren Shadercode in WGSL und packen Sie ihn in ein oder mehrere Shader-Module.
2. [Canvas-Kontext abrufen und konfigurieren](#canvas-kontext_abrufen_und_konfigurieren): Holen Sie sich den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie es so, dass es Informationen darüber empfängt, welche Grafiken von Ihrem GPU-Logikgerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, wie z.B. eine, die nur Computepipelines verwendet.
3. [Ressourcen mit Ihren Daten erstellen](#ein_buffer_erstellen_und_unsere_dreiecksdaten_darin_schreiben): Die Daten, die von Ihren Pipelines verarbeitet werden sollen, müssen in GPU-Buffern oder -Texturen gespeichert werden, auf die von Ihrer App zugegriffen werden kann.
4. [Pipelines erstellen](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere einfachen Demos enthalten nur eine einzelne Pipeline, aber nicht-triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Einen Rechen-/Rendering-Pass ausführen](#einen_rendering-pass_ausführen): Dies umfasst eine Reihe von Unterpunkten:
   1. Erstellen Sie einen Befehls-Encoder, der eine Reihe von Befehlen kodieren kann, die an die GPU zur Ausführung übergeben werden sollen.
   2. Erstellen Sie ein Pass-Encoder-Objekt, auf dem Rechen-/Render-Befehle ausgeführt werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, welche Buffer(s) die erforderlichen Daten enthalten sollen, wie viele Zeichenoperationen ausgeführt werden sollen (im Fall von Render-Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einen Befehls-Buffer ein.
   5. Übermitteln Sie den Befehls-Buffer an die GPU über die Befehlsschlange des logischen Geräts.

In den folgenden Abschnitten werden wir ein einfaches Render-Pipeline-Demo untersuchen, um Ihnen die Möglichkeit zu geben, zu erkunden, was es erfordert. Später werden wir auch ein [einfaches Compute-Pipeline-Demo](#grundlegende_compute-pipeline) betrachten, bei dem wir sehen, wie es sich von der Render-Pipeline unterscheidet.

## Grundlegende Render-Pipeline

In unserem [einfachen Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen festen blauen Hintergrund und zeichnen ein Dreieck darauf.

### Shader-Module erstellen

Wir verwenden den folgenden Shadercode. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenblock, der eine Position und eine Farbe enthält, positioniert den Vertex gemäß der angegebenen Position, interpoliert die Farbe und übergibt die Daten an die Fragment-Shader-Stufe. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt den Vertex gemäß der angegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shadercode in einem Template Literal, aber Sie können ihn überall speichern, von wo aus er leicht als Text abgerufen und in Ihr WebGPU-Programm eingespeist werden kann. Zum Beispiel ist es eine weitere häufige Praxis, Shader innerhalb eines {{htmlelement("script")}}-Elements zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte Mimetyp für WGSL ist `text/wgsl`.

Um Ihren Shadercode für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) einfügen, indem Sie einen Aufruf an [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule) durchführen und Ihren Shadercode als Eigenschaft innerhalb eines Deskriptorobjekts übergeben. Zum Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Canvas-Kontext abrufen und konfigurieren

In einer Render-Pipeline müssen wir einen Ort angeben, an den die Grafiken gerendert werden sollen. In diesem Fall erhalten wir einen Verweis auf ein sichtbares `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um dessen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext mit einem Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure), indem wir ein Optionsobjekt übergeben, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen kommen werden, das Format, das die Texturen haben werden, und den Alpha-Modus, der beim Rendern halbtransparenter Texturen verwendet werden soll.

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
> Die beste Praxis zur Bestimmung des Texturformats besteht darin, die Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zu verwenden; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Nutzers.

### Ein Buffer erstellen und unsere Dreiecksdaten darin schreiben

Als nächstes stellen wir unserem WebGPU-Programm unsere Daten in einer Form zur Verfügung, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jeden Dreiecksvertex enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird diese Art von Buffer im Speicher gespeichert, der sehr eng mit den Kernen der GPU integriert ist, um die gewünschte Hochleistungsverarbeitung zu ermöglichen. Als Nebeneffekt kann dieser Speicher nicht von Prozessen auf dem Host-System, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird durch einen Aufruf an [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit es alle Daten enthalten kann, und `VERTEX`- und `COPY_DST`-Nutzungsflags an, um anzugeben, dass der Buffer als Vertexbuffer und das Ziel von Kopiervorgängen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten das Einbringen unserer Daten in den `GPUBuffer` mit einer Mapping-Operation handhaben, wie wir es im [Compute-Pipeline-Demo](#grundlegende_compute-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die praktische [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer)-Convenience-Methode, die als Parameter den Buffer zum Schreiben, die Datenquelle, die geschrieben werden sollen, einen Offset-Wert für jeden und die Größe der zu schreibenden Daten erhält (wir haben die gesamte Länge des Arrays angegeben). Der Browser arbeitet dann den effizientesten Weg aus, um das Schreiben der Daten zu erledigen.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Nachdem wir unsere Daten in einen Buffer bekommen haben, ist der nächste Teil der Einrichtung, unsere Pipeline tatsächlich zu erstellen, damit sie zum Rendern verwendet werden kann.

Zunächst erstellen wir ein Objekt, das das erforderliche Layout unserer Vertexdaten beschreibt. Dies beschreibt perfekt, was wir zuvor in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Position-, und Farbdaten. Beide sind im `float32x4`-Format formatiert (was auf den WGSL `vec4<f32>`-Typ abbildet), und die Farbdaten beginnen mit einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die "Schrittweite" an, also die Anzahl der Bytes, die jeden Vertex ausmachen, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollen.

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

Als nächstes erstellen wir ein Deskriptorobjekt, das die Konfiguration unserer Render-Pipeline-Stufen festlegt. Für beide Shader-Stufen spezifizieren wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule), in dem der relevante Code gefunden werden kann (`shaderModule`), und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Darüber hinaus stellen wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt bereit, um den erwarteten Zustand unserer Vertexdaten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe bereitstellen wir ein Array von Farbenzielzuständen, die das spezifizierte Rendering-Format angeben (dies entspricht dem in unserer Canvas-Kontext-Konfiguration früher festgelegten Format).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall nur den Typ des Primitiven angibt, das wir zeichnen werden, und wir spezifizieren ein `layout` von `auto`. Die Eigenschaft `layout` definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Buffers, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)-Objekts annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (Sie können ein Beispiel in unserer [Grundlegenden Compute-Pipeline](#grundlegende_compute-pipeline) sehen), das es der GPU ermöglicht, die Pipeline vorab am effizientesten auszuführen. Wir geben jedoch den Wert `auto` an, der die Pipeline ein implizites Bindungslayout basierend auf jedem in den Shadercode definiertem Bindung zu erstellen.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir es als Parameter an einen anruf an [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline) übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Pass ausführen

Nun, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Pass ausführen und etwas auf unser `<canvas>` zeichnen. Um irgendwelche Befehle zu kodieren, die später an die GPU ausgegeben werden sollen, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, die durch einen Aufruf [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als nächstes starten wir den Rendering-Pass, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem Aufruf zu [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass) erstellen. Diese Methode nimmt ein Deskriptionsobjekt als Parameter, dessen einzige obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall geben wir an:

1. Eine Texturansicht, in die gerendert werden soll; wir erstellen eine neue Ansicht über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView) aus dem `<canvas>`.
2. Dass die Ansicht auf eine bestimmte Farbe "geklärt" werden soll, sobald sie geladen wird und bevor irgendwelche Zeichnungen durchgeführt werden. Das ist es, was den blauen Hintergrund hinter dem Dreieck verursacht.
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

Wir können jetzt Methoden des Rendering-Pass-Encoders aufrufen, um unser Dreieck zu zeichnen:

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird aufgerufen, indem unser `renderPipeline`-Objekt als Parameter übergeben wird, um die Pipeline für den Rendering-Pass festzulegen.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird aufgerufen, indem unser `vertexBuffer`-Objekt als Parameter übergeben wird, um als Datenquelle zu dienen, die an die Pipeline übergeben werden soll, um zu rendern. Der erste Parameter ist der Slot, um den Vertexbuffer festzulegen, und ist ein Verweis auf den Index des Elements im `vertexBuffers`-Array, das dieses Bufferlayout beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) setzt das Zeichnen in Bewegung. Es gibt Daten für drei Vertices in unserem `vertexBuffer`, sodass wir eine Vertexanzahl von `3` festlegen, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Codierung der Befehlssequenz abzuschließen und sie an die GPU zu übergeben, sind drei weitere Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Renderpass-Befehlsliste zu signalisieren.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufzeichnung der ausgegebenen Befehlssequenz abzuschließen und sie in einem [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlsschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), die dann an die GPU gesendet wird. Die Geräteschlange ist über die [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue)-Eigenschaft verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen Aufruf von [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) der Schlange hinzugefügt werden.

Diese drei Schritte können mit den folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Grundlegende Compute-Pipeline

In unserem [einfachen Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/) lassen wir die GPU einige Werte berechnen, diese in einem Ausgabepuffer speichern, die Daten in einen Zwischenpuffer kopieren, diesen Zwischenpuffer mappen, sodass die Daten in JavaScript gelesen und in der Konsole protokolliert werden können.

Die App folgt einer ähnlichen Struktur wie das grundlegende Rendering-Demo. Wir erstellen einen [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Verweis auf dieselbe Weise wie zuvor und umschließen unseren Shadercode in einem [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) durch einen Aufruf von [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule). Der Unterschied hier ist, dass unser Shadercode nur eine Shaderstufe hat, eine `@compute`-Stufe:

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

### Buffer erstellen, um unsere Daten zu verwalten

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu verwalten: einen `output`-Buffer, um die GPU-Berechnungsergebnisse mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir die Inhalte des `output` kopieren, der gemappt werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` wird als Speicherbuffer spezifiziert, der die Quelle eines Kopiervorgangs ist.
- `stagingBuffer` wird als Buffer spezifiziert, der für das Lesen durch JavaScript gemappt werden kann, und als Ziel eines Kopiervorgangs verwendet.

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

### Ein Bindungsgruppen-Layout erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindungsgruppe an, die für die Pipeline verwendet wird. Dies beinhaltet zunächst die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), der die Struktur und den Zweck von GPU-Ressourcen wie Buffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für Bindungsgruppen verwendet, an die man sich halten muss. In diesem Fall geben wir der Pipeline den Zugriff auf einen einzelnen Speicherbuffer, der an den Bindungsslot 0 gebunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shadercode — `@binding(0)`), nutzbar in der Computestufe der Pipeline und mit dem Zweck des Buffers als `storage`.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup), indem wir [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup) aufrufen. Wir übergeben diesem Methodenaufruf ein Deskriptorobjekt, das das Bindungsgruppen-Layout spezifiziert, auf dem diese Bindungsgruppe basieren soll, und die Details der Variable, die an den im Layout definierten Slot gebunden werden soll. In diesem Fall deklarieren wir Bindung 0 und spezifizieren, dass der zuvor definierte `output`-Buffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout abrufen, um es beim Erstellen einer Bindungsgruppe zu verwenden, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Compute-Pipeline erstellen

Mit dem oben Gesagten können wir nun eine Compute-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptorobjekt übergeben. Dies funktioniert ähnlich wie die Erstellung einer Render-Pipeline. Wir beschreiben den Compute-Shader, indem wir angeben, in welchem Modul der Code gefunden werden kann und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, in diesem Fall erstellen wir ein Layout basierend auf dem `bindGroupLayout`, das wir zuvor durch einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) definiert haben.

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

Ein Unterschied hier zum Render-Pipeline-Layout besteht darin, dass wir keinen primitiven Typ angeben, da wir nichts zeichnen.

### Einen Compute-Pass ausführen

Das Ausführen eines Compute-Passes ähnelt im Aufbau dem Ausführen eines Rendering-Passes, mit einigen unterschiedlichen Befehlen. Zunächst wird der Pass-Encoder mithilfe von [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Bei der Ausgabe der Befehle spezifizieren wir die Pipeline, die in gleicher Weise wie zuvor verwendet werden soll, mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline). Wir verwenden dann jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die Daten zu spezifizieren, die in der Berechnung verwendet werden sollen, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen anzugeben, die zur Durchführung der Berechnungen verwendet werden sollen.

Wir signalisieren dann das Ende der Renderpass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück zu JavaScript lesen

Bevor wir die codierten Befehle zur Ausführung mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die GPU übermitteln, kopieren wir den Inhalt des `output`-Buffers mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer) in den `stagingBuffer`.

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die Methode [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync), um die Daten in den Zwischenpeicher zu mappen, holen uns dann einen Verweis auf den gemappten Bereich mittels [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange), kopieren die Daten in JavaScript und protokollieren sie dann in der Konsole. Außerdem demappen wir den `stagingBuffer`, sobald wir fertig sind.

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

WebGPU-Aufrufe werden im GPU-Prozess asynchron validiert. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein anderer Aufruf gemacht wird, der von dem Rückgabewert eines ungültig markierten Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerbereichs-Stack. Dieser Stack ist zunächst leer, aber Sie können beginnen, einen Fehlerbereich an den Stack zu pushen, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Wenn Sie mit der Fehlererfassung fertig sind, können Sie die Erfassung beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich aus dem Stack und gibt ein {{jsxref("Promise")}} zurück, das sich zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) auflöst, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, um Ihnen zu helfen, zu verstehen, warum in Ihrem WebGPU-Code Fehler auftreten, in "Validierungs"-Abschnitten, wo es angebracht ist, die Kriterien aufzulisten, die zu erfüllen sind, um Fehler zu vermeiden. Siehe zum Beispiel den [Validierungsabschnitt zu `GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir beschlossen, nur Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler produzieren. Es bringt nichts, Ihnen mitzuteilen, dass Sie sicherstellen sollen, dass Sie die richtige Deskriptor-Objektstruktur verwenden. Das ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert sind. Einige der Fehlerkriterien basieren rein auf Interna und sind für Webentwickler nicht wirklich relevant.

Sie können mehr Informationen über die Fehlerbehandlung in WebGPU im Erklärer finden — siehe [Objektgültigkeit und Zerstörung](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [Beste Praktiken zur WebGPU-Fehlerbehandlung](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche reale Beispiele und Ratschläge.

> [!NOTE]
> Die historische Art und Weise, Fehler in WebGL zu behandeln, besteht darin, eine Methode [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError) bereitzustellen, um Fehlerinformationen zurückzugeben. Das ist problematisch, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Hin- und Rückfahrt zur GPU und verlangt, dass alle zuvor ausgegebenen Operationen abgeschlossen werden. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht verwandtem Code durchlecken können. Die Entwickler von WebGPU waren entschlossen, diese Situation zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt zur Nutzung von WebGPU. Kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zurückzugeben.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Repräsentiert einen GPU-Adapter. Von hier aus können Sie ein [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Limits anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfiguration von GPUDevices

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Repräsentiert ein logisches GPU-Gerät. Dies ist die Hauptschnittstelle, über die auf den Großteil der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setlike](/de/docs/Web/JavaScript/Reference/Global_Objects/Set)-Objekt, das zusätzliche Funktionalität beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt wird.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützten Limits.

### Konfiguration eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"` `contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Repräsentiert den WebGPU-Renderingkontext eines {{htmlelement("canvas")}}-Elements.

### Repräsentation von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Repräsentiert einen Speicherblock, der verwendet werden kann, um Rohdaten zu speichern, die in GPU-Operationen verwendet werden sollen.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das ein [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement)-Schnappschuss enthält, der als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Kontrolliert, wie Shader Textur-Ressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz auf ein internes Shader-Modul-Objekt, einen Container für WGSL-Shadercode, der zur Ausführung durch eine Pipeline an die GPU übergeben werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der zum Speichern von 1D-, 2D- oder 3D-Datenarrays, wie Bilder, zum Gebrauch in GPU-Rendering-Operationen verwendet wird.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf eine Teilmenge der durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definierten Textur-Ressourcen.

### Repräsentation von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout), definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die gemeinsam gebunden und genutzt werden und wie diese Ressourcen in Shaderstufen eingesetzt werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffers, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Kontrolliert die Compute-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlskodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Kontrolliert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU kodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Repräsentiert eine aufgezeichnete Liste von GPU-Befehlen, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Repräsentiert einen Befehls-Encoder, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle, die das Steuern der Compute-Shader-Stufe betreffen, wie sie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung kodierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für vorab aufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Bündel von Befehlen vorab aufzuzeichnen. Diese können so oft wie erforderlich in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle, die das Steuern der Vertex- und Fragment-Shader-Stufen betreffen, wie sie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben werden. Teil der gesamten Kodierungsaktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen von Rendering-Passes ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen in Passes zu erfassen, wie Occlusion- oder Zeitstempelabfragen.

### Fehler debuggen

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, das vom GPU-Shadermodul-Compiler generiert wurde, um bei der Diagnose von Problemen mit Shadercode zu helfen.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Repräsentiert eine einzelne Informations-, Warn- oder Fehlermeldung, die vom GPU-Shadermodul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost)-{{jsxref("Promise")}} sich auflöst und Informationen darüber bereitstellt, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basis-Schnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis an die Oberfläche kommen.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis an die Oberfläche kommen. Gibt an, dass ein Vorgang aus einem system- oder implementierungsspezifischen Grund fehlgeschlagen ist, auch wenn alle Validierungsanforderungen erfüllt wurden.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis an die Oberfläche kommen. Gibt an, dass nicht genügend freier Speicher verfügbar war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der empfangene Wert, wenn ein von [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) zurückgegebenes {{jsxref("Promise")}} abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Eine der Fehlerarten, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis an die Oberfläche kommen. Beschreibt einen Anwendungsfehler, der anzeigt, dass ein Vorgang die Validierungseinschränkungen der WebGPU API nicht bestanden hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar.

## Beispiele

- [Einfaches Compute-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
- [Einfaches Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/)
- [WebGPU-Beispiele](https://webgpu.github.io/webgpu-samples/)

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Beste Praktiken zu WebGPU](https://toji.dev/webgpu-best-practices/)
- [WebGPU Erklärer](https://gpuweb.github.io/gpuweb/explainer/)
- [WebGPU — Alle Kerne, keine Leinwand](https://surma.dev/things/webgpu/)
