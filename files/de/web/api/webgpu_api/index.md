---
title: WebGPU API
slug: Web/API/WebGPU_API
l10n:
  sourceCommit: d1fd21c87a4917e56dab84fc0b1d321ebb22874e
---

{{DefaultAPISidebar("WebGPU API")}}{{securecontext_header}}

Die **WebGPU API** ermöglicht es Webentwicklern, die GPU (Graphics Processing Unit) des zugrunde liegenden Systems zu nutzen, um Hochleistungsberechnungen durchzuführen und komplexe Bilder zu zeichnen, die im Browser gerendert werden können.

WebGPU ist der Nachfolger von [WebGL](/de/docs/Web/API/WebGL_API) und bietet eine bessere Kompatibilität mit modernen GPUs, Unterstützung für allgemeine GPU-Berechnungen, schnellere Operationen und Zugriff auf fortschrittlichere GPU-Funktionen.

## Konzepte und Verwendung

Man kann sagen, dass [WebGL](/de/docs/Web/API/WebGL_API) das Web in Bezug auf grafische Fähigkeiten revolutioniert hat, nachdem es erstmals um 2011 erschienen ist. WebGL ist eine JavaScript-Portierung der [OpenGL ES 2.0](https://registry.khronos.org/OpenGL-Refpages/es2.0/) Grafikbibliothek, die es Webseiten ermöglicht, Rendering-Berechnungen direkt an die GPU des Geräts zu übergeben, um sie mit sehr hohen Geschwindigkeiten zu verarbeiten und das Ergebnis in einem {{htmlelement("canvas")}}-Element darzustellen.

WebGL und die Sprache [GLSL](<https://wikis.khronos.org/opengl/Core_Language_(GLSL)>) zur Erstellung von WebGL-Shader-Code sind komplex, deshalb wurden mehrere WebGL-Bibliotheken erstellt, um das Schreiben von WebGL-Anwendungen zu vereinfachen. Beliebte Beispiele sind [Three.js](https://threejs.org/), [Babylon.js](https://www.babylonjs.com/) und [PlayCanvas](https://playcanvas.com/). Entwickler haben diese Werkzeuge verwendet, um immersive webbasierte 3D-Spiele, Musikvideos, Trainings- und Modellierungstools, VR- und AR-Erlebnisse und mehr zu erstellen.

Allerdings weist WebGL einige grundlegende Probleme auf, die behoben werden mussten:

- Seit der Veröffentlichung von WebGL ist eine neue Generation nativer GPU-APIs erschienen — die bekanntesten sind [Microsofts Direct3D 12](https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics), [Apples Metal](https://developer.apple.com/metal/) und [The Khronos Group's Vulkan](https://www.vulkan.org/) — die eine Vielzahl neuer Funktionen bieten. Für OpenGL (und damit WebGL) sind keine weiteren Updates geplant, sodass es keine dieser neuen Funktionen erhalten wird. WebGPU hingegen wird in Zukunft neue Funktionen erhalten.
- WebGL basiert vollständig auf dem Anwendungsfall des Zeichnens von Grafiken und deren Darstellung in einem Canvas. Es ist nicht gut geeignet für allgemeine GPU-Berechnungen (GPGPU). GPGPU-Berechnungen werden für viele verschiedene Anwendungsfälle immer wichtiger, beispielsweise für solche, die auf maschinellen Lernmodellen basieren.
- 3D-Grafikanwendungen werden zunehmend anspruchsvoller, sowohl in Bezug auf die Anzahl der Objekte, die gleichzeitig gerendert werden sollen, als auch auf die Nutzung neuer Rendering-Funktionen.

WebGPU adressiert diese Probleme und bietet eine aktualisierte, allgemeine Architektur, die mit modernen GPU-APIs kompatibel ist und sich "webfreundlicher" anfühlt. Es unterstützt Grafik-Rendering, aber hat auch erstklassige Unterstützung für GPGPU-Berechnungen. Das Rendering einzelner Objekte ist auf der CPU-Seite erheblich günstiger, und es unterstützt moderne GPU-Rendering-Funktionen wie berechnungsbasierte Partikel und Nachbearbeitungsfilter wie Farbeffekte, Schärfung und Tiefenschärfesimulation. Darüber hinaus kann es teure Berechnungen wie Culling und die Transformation von skinned Models direkt auf der GPU verarbeiten.

## Allgemeines Modell

Es gibt mehrere Abstraktionsschichten zwischen einer Geräte-GPU und einem Webbrowser, der die WebGPU-API ausführt. Es ist nützlich, diese zu verstehen, wenn Sie beginnen, WebGPU zu erlernen:

![Ein einfaches Stapeldiagramm, das die Position der verschiedenen Elemente einer WebGPU-Architektur auf einem Gerät zeigt](basic-webgpu-stack.png)

- Physische Geräte haben GPUs. Die meisten Geräte haben nur eine GPU, aber einige haben mehr als eine. Verschiedene GPU-Typen sind verfügbar:
  - Integrierte GPUs, die auf derselben Platine wie die CPU leben und deren Speicher teilen.
  - Diskrete GPUs, die auf ihrer eigenen Platine getrennt von der CPU leben.
  - Software-"GPUs", die auf der CPU implementiert sind.

  > [!NOTE]
  > Das obige Diagramm geht von einem Gerät mit nur einer GPU aus.

- Eine native GPU-API, die Teil des Betriebssystems ist (zum Beispiel Metal auf macOS), ist eine Programmierschnittstelle, die es nativen Anwendungen ermöglicht, die Fähigkeiten der GPU zu nutzen. API-Anweisungen werden über einen Treiber an die GPU gesendet (und Antworten empfangen). Es ist möglich, dass ein System mehrere native OS-APIs und Treiber zur Kommunikation mit der GPU zur Verfügung hat, obwohl das obige Diagramm von einem Gerät mit nur einer nativen API/Treiber ausgeht.
- Die WebGPU-Implementierung eines Browsers kümmert sich um die Kommunikation mit der GPU über einen nativen GPU-API-Treiber. Ein WebGPU-Adapter stellt in Ihrem Code effektiv eine physische GPU und einen Treiber dar, die im zugrunde liegenden System verfügbar sind.
- Ein logisches Gerät ist eine Abstraktion, durch die eine einzelne Webanwendung auf GPU-Fähigkeiten in einer voneinander getrennten Weise zugreifen kann. Logische Geräte müssen Multiplexing-Fähigkeiten bereitstellen. Eine GPU eines physischen Geräts wird von vielen Anwendungen und Prozessen gleichzeitig genutzt, möglicherweise auch von vielen Webanwendungen. Jede Webanwendung muss in der Lage sein, aus Sicherheits- und Logikgründen isoliert auf WebGPU zuzugreifen.

## Zugriff auf ein Gerät

Ein logisches Gerät — dargestellt durch eine [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Objektinstanz — ist die Grundlage, von der aus eine Webanwendung auf alle WebGPU-Funktionen zugreift. Der Zugriff auf ein Gerät erfolgt folgendermaßen:

1. Die Eigenschaft [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) (oder [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu), wenn Sie WebGPU-Funktionalität aus einem Worker heraus verwenden) gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
2. Sie greifen über die Methode [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter) auf einen Adapter zu. Diese Methode akzeptiert ein optionales Einstellungsobjekt, mit dem Sie zum Beispiel einen [Kompatibilitätsmodus](#webgpu-kompatibilitätsmodus), einen hochleistungsfähigen oder energieeffizienten Adapter anfordern können. Wenn dies nicht enthalten ist, bietet das Gerät Zugriff auf den Standardadapter, der für die meisten Zwecke ausreichend ist.
3. Ein Gerät kann über [`GPUAdapter.requestDevice()`](/de/docs/Web/API/GPUAdapter/requestDevice) angefordert werden. Diese Methode akzeptiert auch ein Optionsobjekt (als Deskriptor bezeichnet), das verwendet werden kann, um die genauen Eigenschaften und Grenzen anzugeben, die das logische Gerät haben soll. Wenn dies nicht enthalten ist, wird das bereitgestellte Gerät eine vernünftige allgemeine Spezifikation haben, die für die meisten Zwecke ausreichend ist.

Mit einigen Feature-Erkennungstests könnte der obige Prozess wie folgt erreicht werden:

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

Standardmäßig unterstützt ein `GPUAdapter` alle grundlegenden WebGPU-Funktionen und -Limits, was es Anwendungen ermöglicht, Geräte mit modernen Plattform-Grafik-APIs zu unterstützen. Dies wird als "core" WebGPU bezeichnet.

Es ist möglich, WebGPU in den "Kompatibilitätsmodus" zu versetzen, der festlegt, dass der `GPUAdapter` einen eingeschränkten Teil der WebGPU-API unterstützt, die auf älteren Grafik-APIs wie OpenGL ES 3.1 und Direct3D 11 ausgeführt werden kann. Dies geschieht, indem Sie einen [`featureLevel`](/de/docs/Web/API/GPU/requestAdapter#featurelevel)-Wert von `compatibility` in Ihrem [`GPU.requestAdapter()`](/de/docs/Web/API/GPU/requestAdapter)-Anruf angeben:

```js
const adapter = await navigator.gpu.requestAdapter({
  featureLevel: "compatibility",
});
```

Die genauen Einschränkungen des Kompatibilitätsmodus sind im [WebGPU Compatibility Mode](https://webgpufundamentals.org/webgpu/lessons/webgpu-compatibility-mode.html) detailliert. Eingeschränkte Anwendungen sind immer noch gültige WebGPU-Core-Anwendungen, da sie einen Teil des Core-WebGPU unterstützen und daher in allen Browsern laufen, die Core-WebGPU unterstützen, auch wenn sie den Kompatibilitätsmodus nicht ausdrücklich unterstützen.

Ein `GPUAdapter` oder `GPUDevice`, das Core-WebGPU unterstützt, wird das `core-features-and-limits` Merkmal zur Verfügung haben (siehe [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)). Um zu prüfen, ob eine WebGPU-App sich im Core- oder Kompatibilitätsmodus befindet, prüfen Sie, ob das `core-features-and-limits` Merkmal unterstützt wird, zum Beispiel:

```js
const isCore = device.features.has("core-features-and-limits");
```

Siehe auch [Verwendung des Kompatibilitätsmodus nur bei Bedarf](/de/docs/Web/API/GPU/requestAdapter#using_compatibility_mode_only_if_necessary).

## Pipelines und Shader: WebGPU-App-Struktur

Eine Pipeline ist eine logische Struktur, die programmierbare Stufen enthält, die abgeschlossen werden, um die Arbeit Ihres Programms zu erledigen. WebGPU kann derzeit zwei Arten von Pipelines handhaben:

- Eine Render-Pipeline rendert Grafiken, typischerweise in einem {{htmlelement("canvas")}}-Element, aber sie könnte auch Grafiken im Hintergrund rendern. Sie hat zwei Hauptstufen:
  - Eine Vertex-Stufe, in der ein Vertex-Shader Positionsdaten, die in die GPU eingespeist werden, übernimmt und verwendet, um eine Reihe von Vertices im 3D-Raum zu positionieren, indem spezifizierte Effekte wie Drehung, Translation oder Perspektive angewendet werden. Die Vertices werden dann in Primitive wie Dreiecke (das grundlegende Bauelement gerenderter Grafiken) zusammengefasst und von der GPU rasterisiert, um herauszufinden, welche Pixel jedes auf der Zeichenfläche abdecken soll.

  - Eine Fragment-Stufe, in der ein Fragment-Shader die Farbe für jedes Pixel berechnet, das von den Primitiven abgedeckt wird, die vom Vertex-Shader erzeugt werden. Diese Berechnungen verwenden häufig Eingaben wie Bilder (in Form von Texturen), die Oberflächendetails und die Position und Farbe von virtuellen Lichtern bieten.

- Eine Berechnungs-Pipeline ist für allgemeine Berechnungen. Eine Berechnungs-Pipeline enthält eine einzelne Berechnungsstufe, in der ein Berechnungs-Shader allgemeine Daten übernimmt, sie parallel über eine angegebene Anzahl von Arbeitsgruppen verarbeitet und das Ergebnis in einem oder mehreren Buffern zurückgibt. Die Buffer können jede Art von Daten enthalten.

Die oben genannten Shader sind eine Reihe von Anweisungen, die von der GPU verarbeitet werden. WebGPU-Shader werden in einer Low-Level-Rust-ähnlichen Sprache namens [WebGPU Shading Language](https://gpuweb.github.io/gpuweb/wgsl/) (WGSL) geschrieben.

Es gibt mehrere verschiedene Möglichkeiten, wie Sie eine WebGPU-App designen könnten, aber der Prozess wird wahrscheinlich die folgenden Schritte enthalten:

1. [Erstellen von Shader-Modulen](#erstellen_von_shader-modulen): Schreiben Sie Ihren Shader-Code in WGSL und verpacken Sie ihn in ein oder mehrere Shader-Module.
2. [Holen und Konfigurieren des Canvas-Kontexts](#den_canvas-kontext_holen_und_konfigurieren): Holen Sie sich den `webgpu`-Kontext eines `<canvas>`-Elements und konfigurieren Sie es, um Informationen darüber zu erhalten, welche Grafiken von Ihrem GPU-logischen Gerät gerendert werden sollen. Dieser Schritt ist nicht erforderlich, wenn Ihre App keine grafische Ausgabe hat, z. B. eine, die nur Berechnungs-Pipelines verwendet.
3. [Erstellen von Ressourcen mit Ihren Daten](#einen_buffer_erstellen_und_unsere_dreiecksdaten_hineinschreiben): Die Daten, die Sie von Ihren Pipelines verarbeiten lassen möchten, müssen in GPU-Buffern oder -Texturen gespeichert werden, auf die von Ihrer App zugegriffen werden kann.
4. [Erstellen von Pipelines](#die_render-pipeline_definieren_und_erstellen): Definieren Sie Pipeline-Deskriptoren, die die gewünschten Pipelines im Detail beschreiben, einschließlich der erforderlichen Datenstruktur, Bindungen, Shader und Ressourcenlayouts, und erstellen Sie dann Pipelines daraus. Unsere grundlegenden Demos enthalten nur eine einzige Pipeline, aber nicht triviale Apps enthalten normalerweise mehrere Pipelines für verschiedene Zwecke.
5. [Ausführen eines Berechnungs-/Rendering-Passes](#einen_rendering-durchgang_ausführen): Dies umfasst eine Reihe von Teilschritten:
   1. Erstellen Sie einen Befehlscodierer, der eine Reihe von Befehlen kodieren kann, die zur Ausführung an die GPU übergeben werden sollen.
   2. Erstellen Sie ein Pass-Codierer-Objekt, auf dem Berechnungs-/Render-Befehle ausgeführt werden.
   3. Führen Sie Befehle aus, um anzugeben, welche Pipelines verwendet werden sollen, aus welchen Buffer(n) die erforderlichen Daten stammen sollen, wie viele Zeichenoperationen durchgeführt werden sollen (im Falle von Render-Pipelines) usw.
   4. Finalisieren Sie die Befehlsliste und kapseln Sie sie in einem Befehlsbuffer ein.
   5. Übertragen Sie den Befehlsbuffer über die Befehlswarteschlange des logischen Geräts zur GPU.

In den folgenden Abschnitten werden wir ein grundlegendes Render-Pipeline-Demo untersuchen, um Ihnen zu ermöglichen, zu erkunden, was es erfordert. Später werden wir auch ein [grundlegendes Berechnungs-Pipeline-Beispiel](#basis-berechnungs-pipeline) untersuchen, um zu sehen, wie es sich von der Render-Pipeline unterscheidet.

## Basis-Render-Pipeline

In unserem [Basis-Render-Demo](https://mdn.github.io/dom-examples/webgpu-render-demo/) geben wir einem `<canvas>`-Element einen einheitlich blauen Hintergrund und zeichnen ein Dreieck darauf.

### Erstellen von Shader-Modulen

Wir verwenden den folgenden Shader-Code. Die Vertex-Shader-Stufe (`@vertex`-Block) akzeptiert einen Datenblock, der eine Position und eine Farbe enthält, positioniert den Vertex gemäß der angegebenen Position, interpoliert die Farbe und gibt die Daten an die Fragment-Shader-Stufe weiter. Die Fragment-Shader-Stufe (`@fragment`-Block) akzeptiert die Daten von der Vertex-Shader-Stufe und färbt den Vertex gemäß der vorgegebenen Farbe.

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
> In unseren Demos speichern wir unseren Shader-Code in einem Template Literal, aber Sie können ihn überall speichern, von wo aus er leicht als Text abgerufen werden kann, um ihn in Ihr WebGPU-Programm einzuspeisen. Ein weiterer häufiger Ansatz ist, Shader in einem {{htmlelement("script")}}-Element zu speichern und den Inhalt mit [`Node.textContent`](/de/docs/Web/API/Node/textContent) abzurufen. Der korrekte MIME-Typ für WGSL ist `text/wgsl`.

Um Ihren Shader-Code für WebGPU verfügbar zu machen, müssen Sie ihn in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf einfügen, wobei Sie Ihren Shader-Code als Eigenschaft in einem Deskriptionsobjekt übergeben. Beispiel:

```js
const shaderModule = device.createShaderModule({
  code: shaders,
});
```

### Den Canvas-Kontext holen und konfigurieren

In einer Render-Pipeline müssen wir angeben, wohin die Grafiken gerendert werden sollen. In diesem Fall erhalten wir eine Referenz zu einem onscreen `<canvas>`-Element und rufen [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) mit einem Parameter von `webgpu` auf, um dessen GPU-Kontext (eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Instanz) zurückzugeben.

Von dort aus konfigurieren wir den Kontext durch einen Aufruf von [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) und übergeben ihm ein Optionsobjekt, das das [`GPUDevice`](/de/docs/Web/API/GPUDevice) enthält, von dem die Rendering-Informationen stammen, das Format, das die Texturen haben werden, und den Alphamodus, der beim Rendern von halbtransparenten Texturen verwendet werden soll.

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
> Es ist eine bewährte Praxis, das Texturformat mit der Methode [`GPU.getPreferredCanvasFormat()`](/de/docs/Web/API/GPU/getPreferredCanvasFormat) zu bestimmen; diese wählt das effizienteste Format (entweder `bgra8unorm` oder `rgba8unorm`) für das Gerät des Benutzers aus.

### Einen Buffer erstellen und unsere Dreiecksdaten hineinschreiben

Als Nächstes werden wir unserem WebGPU-Programm unsere Daten in einer Form liefern, die es verwenden kann. Unsere Daten werden zunächst in einem {{jsxref("Float32Array")}} bereitgestellt, das 8 Datenpunkte für jede Dreiecksecke enthält — X, Y, Z, W für die Position und R, G, B, A für die Farbe.

```js
const vertices = new Float32Array([
  0.0, 0.6, 0, 1, 1, 0, 0, 1, -0.5, -0.6, 0, 1, 0, 1, 0, 1, 0.5, -0.6, 0, 1, 0,
  0, 1, 1,
]);
```

Wir haben jedoch ein Problem hier. Wir müssen unsere Daten in einen [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) bekommen. Hinter den Kulissen wird dieser Buffer-Typ im Speicher gespeichert, der eng mit den GPU-Kernen integriert ist, um die gewünschte Hochleistung-Verarbeitung zu ermöglichen. Als Nebeneffekt kann auf diesen Speicher nicht von Prozessen auf dem Host-System, wie dem Browser, zugegriffen werden.

Der [`GPUBuffer`](/de/docs/Web/API/GPUBuffer) wird über einen Aufruf von [`GPUDevice.createBuffer()`](/de/docs/Web/API/GPUDevice/createBuffer) erstellt. Wir geben ihm eine Größe, die der Länge des `vertices`-Arrays entspricht, damit er alle Daten enthalten kann, und `VERTEX` und `COPY_DST` Nutzungsflaggen an, um anzuzeigen, dass der Buffer als Vertex-Buffer und das Ziel von Kopieroperationen verwendet wird.

```js
const vertexBuffer = device.createBuffer({
  size: vertices.byteLength, // make it big enough to store vertices in
  usage: GPUBufferUsage.VERTEX | GPUBufferUsage.COPY_DST,
});
```

Wir könnten den Transfer unserer Daten in den `GPUBuffer` mit einer Mapping-Operation behandeln, wie wir im [Berechnungs-Pipeline-Beispiel](#basis-berechnungs-pipeline) verwenden, um Daten von der GPU zurück zu JavaScript zu lesen. In diesem Fall verwenden wir jedoch die bequeme Methode [`GPUQueue.writeBuffer()`](/de/docs/Web/API/GPUQueue/writeBuffer), die als Parameter den Buffer zum Beschreiben, die Ausgangsquelle, von der geschrieben werden soll, einen Offset-Wert für jeden und die zu schreibende Datenmenge (wir haben angegeben, die gesamte Array-Länge) nimmt. Der Browser entscheidet dann, wie die Daten am effizientesten geschrieben werden sollen.

```js
device.queue.writeBuffer(vertexBuffer, 0, vertices, 0, vertices.length);
```

### Die Render-Pipeline definieren und erstellen

Nachdem wir nun unsere Daten in einen Buffer erhalten haben, ist der nächste Teil der Einrichtung, tatsächlich unsere Pipeline zu erstellen, damit sie zum Rendern verwendet werden kann.

Zum Beginn erstellen wir ein Objekt, das das erforderliche Layout unserer Vertex-Daten beschreibt. Dies beschreibt perfekt, was wir früher in unserem `vertices`-Array und der Vertex-Shader-Stufe gesehen haben — jeder Vertex hat Positions- und Farbdaten. Beide sind im `float32x4`-Format (was dem WGSL `vec4<f32>`-Typ entspricht) formatiert, und die Farbdaten beginnen bei einem Offset von 16 Bytes in jedem Vertex. `arrayStride` gibt die Stride an, also die Anzahl der Bytes, aus denen jeder Vertex besteht, und `stepMode` gibt an, dass die Daten pro Vertex abgerufen werden sollten.

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

Anschließend erstellen wir ein Deskriptionsobjekt, das die Konfiguration unserer Render-Pipeline-Stufen spezifiziert. Für beide Shader-Stufen geben wir das [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) an, in dem sich der relevante Code befindet (`shaderModule`) und den Namen der Funktion, die als Einstiegspunkt für jede Stufe dient.

Zusätzlich geben wir im Fall der Vertex-Shader-Stufe unser `vertexBuffers`-Objekt an, um den erwarteten Zustand unserer Vertex-Daten bereitzustellen. Und im Fall unserer Fragment-Shader-Stufe geben wir ein Array von Farbzielen an, die das angegebene Rendering-Format angeben (dies entspricht dem Format, das früher in unserer Canvas-Konfigurationskonfiguration angegeben wurde).

Wir spezifizieren auch ein `primitive`-Objekt, das in diesem Fall einfach den Typ des primitiven anzeigt, den wir zeichnen werden, und ein `layout` von `auto`. Die `layout`-Eigenschaft definiert das Layout (Struktur, Zweck und Typ) aller GPU-Ressourcen (Puffer, Texturen usw.), die während der Ausführung der Pipeline verwendet werden. In komplexeren Apps würde dies die Form eines [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout) annehmen, das mit [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout) erstellt wurde (Sie können ein Beispiel in unserem [Basis-Berechnungs-Pipeline](#basis-berechnungs-pipeline) sehen). Dieser ermöglicht es der GPU, herauszufinden, wie die Pipeline am effektivsten im Voraus ausgeführt werden kann. Wir spezifizieren jedoch den `auto`-Wert, der dazu führt, dass die Pipeline ein implizites Bindungsgruppenlayout auf der Grundlage aller in dem Shader-Code definierten Bindungen generiert.

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

Schließlich können wir eine [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) basierend auf unserem `pipelineDescriptor`-Objekt erstellen, indem wir sie als Parameter an eine [`GPUDevice.createRenderPipeline()`](/de/docs/Web/API/GPUDevice/createRenderPipeline)-Methodenanruf übergeben.

```js
const renderPipeline = device.createRenderPipeline(pipelineDescriptor);
```

### Einen Rendering-Durchgang ausführen

Jetzt, da die gesamte Einrichtung abgeschlossen ist, können wir tatsächlich einen Rendering-Durchgang ausführen und etwas auf unseren `<canvas>` zeichnen. Um Befehle zu kodieren, die später an die GPU ausgegeben werden, müssen Sie eine [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)-Instanz erstellen, was durch einen Aufruf von [`GPUDevice.createCommandEncoder()`](/de/docs/Web/API/GPUDevice/createCommandEncoder) erfolgt.

```js
const commandEncoder = device.createCommandEncoder();
```

Als Nächstes starten wir den Rendering-Durchgang, indem wir eine [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)-Instanz mit einem [`GPUCommandEncoder.beginRenderPass()`](/de/docs/Web/API/GPUCommandEncoder/beginRenderPass)-Aufruf erstellen. Diese Methode benötigt ein Deskriptionsobjekt als Parameter, dessen einzige obligatorische Eigenschaft ein `colorAttachments`-Array ist. In diesem Fall spezifizieren wir:

1. Eine Ansicht zur Darstellung; wir erstellen eine neue Ansicht aus dem `<canvas>` über [`context.getCurrentTexture().createView()`](/de/docs/Web/API/GPUTexture/createView).
2. Dass die Ansicht "geleert" werden soll, bevor mit dem Zeichnen begonnen wird. Dies ist, was den blauen Hintergrund hinter dem Dreieck bewirkt.
3. Dass der Wert des aktuellen Rendering-Durchgangs für diesen Farbeinsatz gespeichert werden soll.

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

1. [`GPURenderPassEncoder.setPipeline()`](/de/docs/Web/API/GPURenderPassEncoder/setPipeline) wird mit unserem `renderPipeline`-Objekt als Parameter aufgerufen, um die für den Rendering-Durchgang zu verwendende Pipeline festzulegen.
2. [`GPURenderPassEncoder.setVertexBuffer()`](/de/docs/Web/API/GPURenderPassEncoder/setVertexBuffer) wird mit unserem `vertexBuffer`-Objekt als Parameter aufgerufen, um als Datenquelle zu fungieren, um sie an die Pipeline zu übergeben, die gerendert werden soll. Der erste Parameter ist der Slot, um den Vertex-Buffer festzulegen, und ist ein Verweis auf den Index des Elements im `vertexBuffers`-Array, das das Layout dieser Buffe beschreibt.
3. [`GPURenderPassEncoder.draw()`](/de/docs/Web/API/GPURenderPassEncoder/draw) beginnt mit dem Zeichnen. Es gibt Daten für drei Vertices innerhalb unseres `vertexBuffer`, sodass wir einen Vertex-Zählwert von `3` setzen, um sie alle zu zeichnen.

```js
passEncoder.setPipeline(renderPipeline);
passEncoder.setVertexBuffer(0, vertexBuffer);
passEncoder.draw(3);
```

Um die Sequenz der Befehle abzuschließen und sie an die GPU zu übermitteln, sind noch drei Schritte erforderlich.

1. Wir rufen die Methode [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end) auf, um das Ende der Render-Pass-Befehlsliste anzuzeigen.
2. Wir rufen die Methode [`GPUCommandEncoder.finish()`](/de/docs/Web/API/GPUCommandEncoder/finish) auf, um die Aufnahme der ausgegebenen Befehlssequenz abzuschließen und sie in ein [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Objektinstanz zu kapseln.
3. Wir übermitteln den [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer) an die Befehlswarteschlange des Geräts (dargestellt durch eine [`GPUQueue`](/de/docs/Web/API/GPUQueue)-Instanz), um sie an die GPU zu senden. Die Warteschlange des Geräts ist über die Eigenschaft [`GPUDevice.queue`](/de/docs/Web/API/GPUDevice/queue) verfügbar, und ein Array von [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)-Instanzen kann über einen [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit)-Aufruf zur Warteschlange hinzugefügt werden.

Diese drei Schritte können mit den folgenden zwei Zeilen erreicht werden:

```js
passEncoder.end();

device.queue.submit([commandEncoder.finish()]);
```

## Basis-Berechnungs-Pipeline

In unserem [Basis-Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/), lassen wir die GPU einige Werte berechnen, speichern sie in einem Ausgabebuffer, kopieren die Daten in einen Zwischenpuffer und verwenden dann diesen Zwischenpuffer, damit die Daten zurück nach JavaScript gelesen werden und in der Konsole geloggt werden können.

Die App folgt einer ähnlichen Struktur wie das Basis-Rendering-Demo. Wir erstellen einen [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Verweis auf die gleiche Weise wie zuvor und kapseln unseren Shader-Code in ein [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule) über einen [`GPUDevice.createShaderModule()`](/de/docs/Web/API/GPUDevice/createShaderModule)-Aufruf. Der Unterschied hier ist, dass unser Shader-Code nur eine Shader-Stufe hat, eine `@compute`-Stufe:

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

### Buffer erstellen, um unsere Daten zu handhaben

In diesem Beispiel erstellen wir zwei [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)-Instanzen, um unsere Daten zu handhaben, einen `output` Buffer, um die Berechnungsergebnisse der GPU mit hoher Geschwindigkeit zu schreiben, und einen `stagingBuffer`, in den wir den Inhalt von `output` kopieren werden, der zur Abbildung verwendet werden kann, um JavaScript den Zugriff auf die Werte zu ermöglichen.

- `output` ist als Speicherbuffer angegeben, der die Quelle einer Kopieroperation sein wird.
- `stagingBuffer` ist als Buffer angegeben, der zur Abbildung für das Lesen durch JavaScript verwendet werden kann und als Ziel einer Kopieroperation dienen wird.

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

### Eine Bindungsgruppen-Layout erstellen

Wenn die Pipeline erstellt wird, geben wir eine Bindungsgruppe an, die für die Pipeline verwendet werden soll. Dies beinhaltet zuerst die Erstellung eines [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) (über einen Aufruf von [`GPUDevice.createBindGroupLayout()`](/de/docs/Web/API/GPUDevice/createBindGroupLayout)), die die Struktur und den Zweck von GPU-Ressourcen wie Buffern definiert, die in dieser Pipeline verwendet werden. Dieses Layout wird als Vorlage für die Einhaltung von Bindungsgruppen verwendet. In diesem Fall geben wir der Pipeline Zugriff auf einen einzigen Speicherbuffer, der mit dem Bindungsslot 0 verbunden ist (dies entspricht der relevanten Bindungsnummer in unserem Shader-Code — `@binding(0)`), kann in der Berechnungsstufe der Pipeline verwendet werden, und mit dem Zweck des Buffers als `storage` definiert.

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

Als nächstes erstellen wir eine [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup) durch einen Aufruf von [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup). Wir übergeben diesem Methodenaufruf ein Deskriptionsobjekt, das das Bindungsgruppenlayout angibt, auf dem diese Bindungsgruppe basieren soll, und die Details der Variablen, die an den im Layout definierten Slot gebunden werden sollen. In diesem Fall deklarieren wir Bindung 0 und geben an, dass der zuvor definierte `output` Buffer daran gebunden werden soll.

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
> Sie könnten ein implizites Layout verwenden, indem Sie die Methode [`GPUComputePipeline.getBindGroupLayout()`](/de/docs/Web/API/GPUComputePipeline/getBindGroupLayout) aufrufen. Es gibt auch eine Version für Render-Pipelines: siehe [`GPURenderPipeline.getBindGroupLayout()`](/de/docs/Web/API/GPURenderPipeline/getBindGroupLayout).

### Eine Berechnungs-Pipeline erstellen

Mit dem oben genannten können wir nun eine Berechnungs-Pipeline erstellen, indem wir [`GPUDevice.createComputePipeline()`](/de/docs/Web/API/GPUDevice/createComputePipeline) aufrufen und ein Pipeline-Deskriptionsobjekt übergeben. Dies funktioniert ähnlich wie das Erstellen einer Render-Pipeline. Wir beschreiben den Berechnungs-Shader, geben an, in welchem Modul sich der Code befindet und was der Einstiegspunkt ist. Wir spezifizieren auch ein `layout` für die Pipeline, indem wir ein Layout erstellen, das auf dem früher definierten `bindGroupLayout` basiert, durch einen Aufruf von [`GPUDevice.createPipelineLayout()`](/de/docs/Web/API/GPUDevice/createPipelineLayout).

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

### Einen Berechnungsdurchgang ausführen

Ein Berechnungsdurchgang ist in der Struktur einem Rendering-Durchgang ähnlich, mit einigen abweichenden Befehlen. Zu Beginn wird der Pass-Codierer mit [`GPUCommandEncoder.beginComputePass()`](/de/docs/Web/API/GPUCommandEncoder/beginComputePass) erstellt.

Wenn die Befehle ausgegeben werden, spezifizieren wir die zu verwendende Pipeline auf gleiche Weise wie zuvor mit [`GPUComputePassEncoder.setPipeline()`](/de/docs/Web/API/GPUComputePassEncoder/setPipeline). Dann verwenden wir jedoch [`GPUComputePassEncoder.setBindGroup()`](/de/docs/Web/API/GPUComputePassEncoder/setBindGroup), um anzugeben, dass wir unsere `bindGroup` verwenden möchten, um die zu verwendenden Daten in der Berechnung zu spezifizieren, und [`GPUComputePassEncoder.dispatchWorkgroups()`](/de/docs/Web/API/GPUComputePassEncoder/dispatchWorkgroups), um die Anzahl der GPU-Arbeitsgruppen zu spezifizieren, die verwendet werden sollen, um die Berechnungen auszuführen.

Wir signalisieren dann das Ende der Render-Pass-Befehlsliste mit [`GPURenderPassEncoder.end()`](/de/docs/Web/API/GPURenderPassEncoder/end).

```js
passEncoder.setPipeline(computePipeline);
passEncoder.setBindGroup(0, bindGroup);
passEncoder.dispatchWorkgroups(Math.ceil(NUM_ELEMENTS / 64));

passEncoder.end();
```

### Die Ergebnisse zurück nach JavaScript lesen

Bevor die kodierten Befehle zur Ausführung mit [`GPUQueue.submit()`](/de/docs/Web/API/GPUQueue/submit) an die GPU übermittelt werden, kopieren wir den Inhalt des `output`-Buffers in den `stagingBuffer`-Buffer mit [`GPUCommandEncoder.copyBufferToBuffer()`](/de/docs/Web/API/GPUCommandEncoder/copyBufferToBuffer).

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

Sobald die Ausgabedaten im `stagingBuffer` verfügbar sind, verwenden wir die [`GPUBuffer.mapAsync()`](/de/docs/Web/API/GPUBuffer/mapAsync)-Methode, um die Daten zur Zwischenspeicherung zuzuweisen, greifen auf die zugewiesene Reichweite mit [`GPUBuffer.getMappedRange()`](/de/docs/Web/API/GPUBuffer/getMappedRange) zu, kopieren die Daten in JavaScript, und protokollieren sie in die Konsole. Wir weisen auch den `stagingBuffer` erneut zu, sobald wir damit fertig sind.

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

WebGPU-Aufrufe werden asynchron im GPU-Prozess geprüft. Wenn Fehler gefunden werden, wird der problematische Aufruf auf der GPU-Seite als ungültig markiert. Wenn ein weiterer Aufruf gemacht wird, der von dem Rückgabewert eines ungültig markierten Aufrufs abhängt, wird auch dieses Objekt als ungültig markiert, und so weiter. Aus diesem Grund werden Fehler in WebGPU als "ansteckend" bezeichnet.

Jede [`GPUDevice`](/de/docs/Web/API/GPUDevice)-Instanz pflegt ihren eigenen Fehlerbereichsstapel. Dieser Stapel ist zunächst leer, aber Sie können damit beginnen, einen Fehlerbereich in den Stapel zu schieben, indem Sie [`GPUDevice.pushErrorScope()`](/de/docs/Web/API/GPUDevice/pushErrorScope) aufrufen, um Fehler eines bestimmten Typs zu erfassen.

Sobald Sie mit dem Erfassen von Fehlern fertig sind, können Sie das Erfassen beenden, indem Sie [`GPUDevice.popErrorScope()`](/de/docs/Web/API/GPUDevice/popErrorScope) aufrufen. Dies entfernt den Bereich vom Stapel und gibt ein {{jsxref("Promise")}} zurück, das zu einem Objekt ([`GPUInternalError`](/de/docs/Web/API/GPUInternalError), [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError) oder [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)) aufgelöst wird, das den ersten im Bereich erfassten Fehler beschreibt, oder `null`, wenn keine Fehler erfasst wurden.

Wir haben versucht, nützliche Informationen bereitzustellen, die Ihnen helfen, zu verstehen, warum Fehler in Ihrem WebGPU-Code auftreten, in "Validierungs"-Abschnitten, wo dies angebracht ist, die Kriterien auflisten, um Fehler zu vermeiden. Siehe beispielsweise den Validierungsabschnitt [`GPUDevice.createBindGroup()`](/de/docs/Web/API/GPUDevice/createBindGroup#validation). Einige dieser Informationen sind komplex; anstatt die Spezifikation zu wiederholen, haben wir uns entschieden, Fehlerkriterien aufzulisten, die:

- Nicht offensichtlich sind, zum Beispiel Kombinationen von Deskriptor-Eigenschaften, die Validierungsfehler erzeugen. Es macht keinen Sinn, Ihnen zu sagen, dass Sie die richtige Deskriptor-Objektstruktur verwenden sollen. Das ist sowohl offensichtlich als auch vage.
- Vom Entwickler kontrolliert sind. Einige der Fehlerkriterien basieren rein auf internen Faktoren und sind für Webentwickler nicht wirklich relevant.

Sie finden weitere Informationen zur WebGPU-Fehlerbehandlung im Erklärer – siehe [Objektgültigkeit und zerstörte Objekte](https://gpuweb.github.io/gpuweb/explainer/#invalid-and-destroyed) und [Fehler](https://gpuweb.github.io/gpuweb/explainer/#errors). [WebGPU Fehlerbehandlungs-Best Practices](https://toji.dev/webgpu-best-practices/error-handling) bietet nützliche Beispiele aus der Praxis und Ratschläge.

> [!NOTE]
> Der historische Weg zur Fehlerbehandlung in WebGL ist die Bereitstellung einer [`getError()`](/de/docs/Web/API/WebGLRenderingContext/getError)-Methode, um Fehlerinformationen zurückzugeben. Dies stellt ein Problem dar, da es Fehler synchron zurückgibt, was schlecht für die Leistung ist — jeder Aufruf erfordert eine Rundreise zur GPU und erfordert das Abschließen aller vorher ausgegebenen Operationen. Sein Zustandsmodell ist auch flach, was bedeutet, dass Fehler zwischen nicht zusammenhängendem Code durchsickern können. Die Entwickler von WebGPU waren entschlossen, dies zu verbessern.

## Schnittstellen

### Einstiegspunkt für die API

- [`Navigator.gpu`](/de/docs/Web/API/Navigator/gpu) / [`WorkerNavigator.gpu`](/de/docs/Web/API/WorkerNavigator/gpu)
  - : Der Einstiegspunkt für die API — gibt das [`GPU`](/de/docs/Web/API/GPU)-Objekt für den aktuellen Kontext zurück.
- [`GPU`](/de/docs/Web/API/GPU)
  - : Der Ausgangspunkt für die Nutzung von WebGPU. Es kann verwendet werden, um einen [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) zu erhalten.
- [`GPUAdapter`](/de/docs/Web/API/GPUAdapter)
  - : Stellt einen GPU-Adapter dar. Aus diesem können Sie einen [`GPUDevice`](/de/docs/Web/API/GPUDevice), Adapterinformationen, Funktionen und Limits anfordern.
- [`GPUAdapterInfo`](/de/docs/Web/API/GPUAdapterInfo)
  - : Enthält identifizierende Informationen über einen Adapter.

### Konfigurieren von GPU-Geräten

- [`GPUDevice`](/de/docs/Web/API/GPUDevice)
  - : Stellt ein logisches GPU-Gerät dar. Dies ist die Hauptschnittstelle, über die der Großteil der WebGPU-Funktionalität zugegriffen wird.
- [`GPUSupportedFeatures`](/de/docs/Web/API/GPUSupportedFeatures)
  - : Ein [setähnliches](/de/docs/Web/JavaScript/Reference/Global_Objects/Set) Objekt, das zusätzliche Funktionalität beschreibt, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt wird.
- [`GPUSupportedLimits`](/de/docs/Web/API/GPUSupportedLimits)
  - : Beschreibt die Limits, die von einem [`GPUAdapter`](/de/docs/Web/API/GPUAdapter) oder [`GPUDevice`](/de/docs/Web/API/GPUDevice) unterstützt werden.

### Konfigurieren eines Rendering-`<canvas>`

- [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) — der `"webgpu"` `contextType`
  - : Das Aufrufen von `getContext()` mit dem `"webgpu"`-`contextType` gibt eine [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)-Objektinstanz zurück, die dann mit [`GPUCanvasContext.configure()`](/de/docs/Web/API/GPUCanvasContext/configure) konfiguriert werden kann.
- [`GPUCanvasContext`](/de/docs/Web/API/GPUCanvasContext)
  - : Stellt den WebGPU-Rendering-Kontext eines {{htmlelement("canvas")}}-Elements dar.

### Darstellung von Pipeline-Ressourcen

- [`GPUBuffer`](/de/docs/Web/API/GPUBuffer)
  - : Stellt einen Speicherblock dar, der zum Speichern von Rohdaten verwendet werden kann, um in GPU-Operationen verwendet zu werden.
- [`GPUExternalTexture`](/de/docs/Web/API/GPUExternalTexture)
  - : Ein Wrapper-Objekt, das ein Snapshot eines [`HTMLVideoElement`](/de/docs/Web/API/HTMLVideoElement) enthält, das als Textur in GPU-Rendering-Operationen verwendet werden kann.
- [`GPUSampler`](/de/docs/Web/API/GPUSampler)
  - : Steuert, wie Shader Texturressourcendaten transformieren und filtern.
- [`GPUShaderModule`](/de/docs/Web/API/GPUShaderModule)
  - : Eine Referenz zu einem internen Shader-Modulobjekt, ein Container für WGSL-Shader-Code, der zur Ausführung durch eine Pipeline an die GPU übermittelt werden kann.
- [`GPUTexture`](/de/docs/Web/API/GPUTexture)
  - : Ein Container, der verwendet wird, um 1D-, 2D- oder 3D-Datenarrays zu speichern, wie Bilder, die in GPU-Rendering-Operationen verwendet werden.
- [`GPUTextureView`](/de/docs/Web/API/GPUTextureView)
  - : Eine Ansicht auf einen Teilbereich der Texturunterressourcen, die durch eine bestimmte [`GPUTexture`](/de/docs/Web/API/GPUTexture) definiert sind.

### Darstellung von Pipelines

- [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)
  - : Basierend auf einem [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout) definiert eine `GPUBindGroup` eine Gruppe von Ressourcen, die in einer Gruppe gebunden werden sollen, und wie diese Ressourcen in Shader-Stufen verwendet werden.
- [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)
  - : Definiert die Struktur und den Zweck verwandter GPU-Ressourcen wie Buffer, die in einer Pipeline verwendet werden, und wird als Vorlage beim Erstellen von [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s verwendet.
- [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline)
  - : Steuert die Berechnungs-Shader-Stufe und kann in einem [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder) verwendet werden.
- [`GPUPipelineLayout`](/de/docs/Web/API/GPUPipelineLayout)
  - : Definiert die [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s, die von einer Pipeline verwendet werden. [`GPUBindGroup`](/de/docs/Web/API/GPUBindGroup)s, die mit der Pipeline während der Befehlscodierung verwendet werden, müssen kompatible [`GPUBindGroupLayout`](/de/docs/Web/API/GPUBindGroupLayout)s haben.
- [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline)
  - : Steuert die Vertex- und Fragment-Shader-Stufen und kann in einem [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder) oder [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder) verwendet werden.

### Befehle an die GPU kodieren und übermitteln

- [`GPUCommandBuffer`](/de/docs/Web/API/GPUCommandBuffer)
  - : Stellt eine aufgezeichnete Liste von GPU-Befehlen dar, die zur Ausführung an eine [`GPUQueue`](/de/docs/Web/API/GPUQueue) übermittelt werden können.
- [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder)
  - : Stellt einen Befehlscodierer dar, der verwendet wird, um Befehle zu kodieren, die an die GPU ausgegeben werden sollen.
- [`GPUComputePassEncoder`](/de/docs/Web/API/GPUComputePassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Berechnungs-Shader-Stufe, wie von einer [`GPUComputePipeline`](/de/docs/Web/API/GPUComputePipeline) ausgegeben. Teil der gesamten Codieraktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).
- [`GPUQueue`](/de/docs/Web/API/GPUQueue)
  - : Steuert die Ausführung kodierter Befehle auf der GPU.
- [`GPURenderBundle`](/de/docs/Web/API/GPURenderBundle)
  - : Ein Container für voraufgezeichnete Befehlsbündel (siehe [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)).
- [`GPURenderBundleEncoder`](/de/docs/Web/API/GPURenderBundleEncoder)
  - : Wird verwendet, um Befehlsbündel voraufzuzeichnen. Diese können in [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)s über die Methode [`executeBundles()`](/de/docs/Web/API/GPURenderPassEncoder/executeBundles) so oft wie nötig wiederverwendet werden.
- [`GPURenderPassEncoder`](/de/docs/Web/API/GPURenderPassEncoder)
  - : Kodiert Befehle im Zusammenhang mit der Steuerung der Vertex- und Fragment-Shader-Stufen, wie von einer [`GPURenderPipeline`](/de/docs/Web/API/GPURenderPipeline) ausgegeben. Teil der gesamten Codieraktivität eines [`GPUCommandEncoder`](/de/docs/Web/API/GPUCommandEncoder).

### Abfragen von Rendering-Pässen ausführen

- [`GPUQuerySet`](/de/docs/Web/API/GPUQuerySet)
  - : Wird verwendet, um die Ergebnisse von Abfragen zu Pässen aufzuzeichnen, wie Okklusions- oder Zeitstempelabfragen.

### Fehlerdebugging

- [`GPUCompilationInfo`](/de/docs/Web/API/GPUCompilationInfo)
  - : Ein Array von [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)-Objekten, die vom GPU-Shader-Modul-Compiler generiert werden, um Probleme mit Shader-Code zu diagnostizieren.
- [`GPUCompilationMessage`](/de/docs/Web/API/GPUCompilationMessage)
  - : Stellt eine einzelne informative, warnende oder Fehlermeldung dar, die vom GPU-Shader-Modul-Compiler generiert wurde.
- [`GPUDeviceLostInfo`](/de/docs/Web/API/GPUDeviceLostInfo)
  - : Wird zurückgegeben, wenn das [`GPUDevice.lost`](/de/docs/Web/API/GPUDevice/lost) {{jsxref("Promise")}} aufgelöst wird und Informationen darüber liefert, warum das Gerät verloren ging.
- [`GPUError`](/de/docs/Web/API/GPUError)
  - : Die Basisschnittstelle für Fehler, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden.
- [`GPUInternalError`](/de/docs/Web/API/GPUInternalError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Weist darauf hin, dass eine Operation aus einem system- oder implementierungsspezifischen Grund fehlschlug, auch wenn alle Validierungsanforderungen erfüllt waren.
- [`GPUOutOfMemoryError`](/de/docs/Web/API/GPUOutOfMemoryError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Weist darauf hin, dass nicht genügend freier Speicherplatz vorhanden war, um die angeforderte Operation abzuschließen.
- [`GPUPipelineError`](/de/docs/Web/API/GPUPipelineError)
  - : Beschreibt einen Pipeline-Fehler. Der Wert, der empfangen wird, wenn ein durch eine {{jsxref("Promise")}} zurückgegebener [`GPUDevice.createComputePipelineAsync()`](/de/docs/Web/API/GPUDevice/createComputePipelineAsync) oder [`GPUDevice.createRenderPipelineAsync()`](/de/docs/Web/API/GPUDevice/createRenderPipelineAsync) Auftrag abgelehnt wird.
- [`GPUUncapturedErrorEvent`](/de/docs/Web/API/GPUUncapturedErrorEvent)
  - : Der Ereignisobjekttyp für das [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis.
- [`GPUValidationError`](/de/docs/Web/API/GPUValidationError)
  - : Einer der Fehlertypen, die von [`GPUDevice.popErrorScope`](/de/docs/Web/API/GPUDevice/popErrorScope) und dem [`GPUDevice`](/de/docs/Web/API/GPUDevice) [`uncapturederror`](/de/docs/Web/API/GPUDevice/uncapturederror_event)-Ereignis angezeigt werden. Beschreibt einen Anwendungsfehler, der angibt, dass eine Operation nicht die Validierungskriterien der WebGPU-API erfüllt hat.

## Sicherheitsanforderungen

Die gesamte API ist nur in einem [sicheren Kontext](/de/docs/Web/Security/Defenses/Secure_Contexts) verfügbar.

## Beispiele

- [Basis-Berechnungs-Demo](https://mdn.github.io/dom-examples/webgpu-compute-demo/)
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
