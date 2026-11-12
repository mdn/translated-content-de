---
title: GLSL-Shader
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: 7484d45816002fbf082a59c5d95c38a1eb2b2e4b
---

Shader verwenden GLSL (OpenGL Shading Language), eine spezielle Sprache mit einer C-ähnlichen Syntax. GLSL wird direkt in der Grafikpipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://wikis.khronos.org/opengl/Shader), aber zwei werden häufig verwendet, um Grafiken im Web zu erstellen: Vertex-Shader und Fragment-Shader (Pixel-Shader). Vertex-Shader wandeln die Positionen von Formen in 3D-Zeichenkoordinaten um. Fragment-Shader berechnen die Darstellung der Farben und anderer Eigenschaften einer Form.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist streng typisiert und erfordert viele mathematische Berechnungen mit Vektoren und Matrizen. Das kann sehr schnell sehr kompliziert werden. In diesem Artikel erstellen wir ein einfaches Codebeispiel, das einen Würfel rendert. Um den Aufwand für den übrigen Code zu reduzieren, verwenden wir die Three.js-API.

Wie Sie sich vielleicht aus dem Artikel über die [Grundlagen der Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertices können zusätzliche Eigenschaften haben, und das ist in der Regel auch der Fall. Das 3D-Koordinatensystem definiert den Raum, und die Vertices helfen dabei, Formen in diesem Raum zu definieren.

## Shader-Typen

Ein Shader ist im Wesentlichen eine Funktion, die benötigt wird, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Grafikprozessor), die für solche Operationen optimiert ist. Wenn die GPU Shader verarbeitet, entlastet das die CPU von einem Teil der rechenintensiven Arbeit. So kann die CPU ihre Rechenleistung für andere Aufgaben einsetzen, etwa für die Ausführung von Code.

### Vertex-Shader

Vertex-Shader verändern Koordinaten im 3D-Raum und werden einmal pro Vertex aufgerufen. Der Vertex-Shader hat die Aufgabe, die Variable `gl_Position` festzulegen. Dies ist eine spezielle, globale und integrierte GLSL-Variable. `gl_Position` speichert die Position des aktuellen Vertex.

Die Funktion `void main()` ist die übliche Stelle, um `gl_Position` festzulegen. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader liefert eine Variable, die angibt, wie die Position eines Vertex im 3D-Raum auf einen 2D-Bildschirm projiziert wird.

### Fragment-Shader

Fragment-Shader (oder Textur-Shader) definieren RGBA-Farben (Rot, Grün, Blau, Alpha) für jedes verarbeitete Pixel. Ein Fragment-Shader wird einmal pro Pixel aufgerufen. Der Fragment-Shader hat die Aufgabe, die Variable `gl_FragColor` festzulegen. Wie `gl_Position` ist auch `gl_FragColor` eine integrierte GLSL-Variable.

Die Berechnungen ergeben eine Variable mit den Informationen zur RGBA-Farbe.

## Demo

Erstellen wir eine einfache Demo, um zu zeigen, wie diese Shader funktionieren. Lesen Sie zunächst das [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Sie müssen weder Three.js noch eine andere Bibliothek verwenden, um Shader zu schreiben – reines [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) reicht völlig aus. Wir verwenden hier Three.js, um den übrigen Code deutlich einfacher und verständlicher zu machen, sodass Sie sich auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren viele Details. Wenn Sie ein solches Beispiel mit reinem WebGL erstellen wollten, müssten Sie viel zusätzlichen Code schreiben, damit es funktioniert.

### Entwicklungsumgebung einrichten

Um mit WebGL-Shadern zu beginnen, folgen Sie den Schritten zum Einrichten der Entwicklungsumgebung im Artikel [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), damit Three.js wie erwartet funktioniert.

### HTML-Struktur

Wir verwenden die folgende HTML-Struktur:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Shaders demo</title>
    <style>
      html,
      body,
      canvas {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        font-size: 0;
      }
    </style>
    <script src="three.min.js"></script>
  </head>
  <body>
    <script id="vertexShader" type="x-shader/x-vertex">
      // vertex shader's code goes here
    </script>
    <script id="fragmentShader" type="x-shader/x-fragment">
      // fragment shader's code goes here
    </script>
    <script>
      // scene setup goes here
    </script>
  </body>
</html>
```

Sie enthält einige grundlegende Angaben wie das {{htmlelement("title")}} des Dokuments sowie CSS, das `width` und `height` des {{htmlelement("canvas")}}-Elements festlegt. Three.js fügt dieses Element in die Seite ein; es soll den gesamten Viewport ausfüllen. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} bindet die Three.js-Bibliothek in die Seite ein. Unseren Code schreiben wir in drei Script-Tags im {{htmlelement("body")}}-Tag:

1. Das erste enthält den Vertex-Shader.
2. Das zweite enthält den Fragment-Shader.
3. Das dritte enthält den eigentlichen JavaScript-Code, der die Szene erzeugt.

Kopieren Sie diesen Code zunächst in eine neue Textdatei und speichern Sie sie als `index.html` in Ihrem Arbeitsverzeichnis. In dieser Datei erstellen wir eine Szene mit einem einfachen Würfel, um zu erklären, wie die Shader funktionieren.

### Quellcode des Würfels

Statt alles von Grund auf neu zu erstellen, können wir den Quellcode des Würfels aus [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wiederverwenden. Die meisten Komponenten, darunter Renderer, Kamera und Lichtquellen, bleiben gleich. Anstelle des einfachen Materials legen wir jedoch Farbe und Position des Würfels mithilfe von Shadern fest.

Öffnen Sie die [Datei cube.html auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem zweiten {{htmlelement("script")}}-Element und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern Sie `index.html` und öffnen Sie die Datei in Ihrem Browser – Sie sollten einen blauen Würfel sehen.

### Code des Vertex-Shaders

Schreiben wir nun einen einfachen Vertex-Shader. Fügen Sie den folgenden Code in das erste `<script>`-Tag im Body ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Die resultierende `gl_Position` wird berechnet, indem die Model-View-Matrix und die Projektionsmatrix mit dem jeweiligen Vektor multipliziert werden. So ergibt sich die endgültige Position des Vertex.

> [!NOTE]
> Weitere Informationen zu _Model-_, _View-_ und _Projektions-Transformationen_ finden Sie im Abschnitt zur [Vertex-Verarbeitung](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing). Auch die Links am Ende dieses Artikels bieten weiterführende Informationen.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt. Der übergebene Vektor enthält die neue 3D-Position. Dadurch wird der ursprüngliche Würfel mithilfe eines Shaders um 10 Einheiten entlang der `x`-Achse und um 5 Einheiten entlang der `z`-Achse verschoben. Den vierten Parameter können wir ignorieren und beim Standardwert `1.0` belassen. Er wird verwendet, um das Clipping der Vertex-Position im 3D-Raum zu beeinflussen, wird hier aber nicht benötigt.

### Code des Textur-Shaders

Fügen wir nun den Textur-Shader hinzu. Schreiben Sie den folgenden Code in das zweite `<script>`-Tag im Body:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Damit wird eine RGBA-Farbe festgelegt, die das aktuelle Hellblau nachbildet. Die ersten drei Gleitkommawerte (jeweils zwischen `0.0` und `1.0`) stehen für die Rot-, Grün- und Blaukanäle. Der vierte Wert gibt die Alpha-Transparenz an (von `0.0` – vollständig transparent – bis 1.0 – vollständig opak).

### Shader anwenden

Um die neu erstellten Shader auf den Würfel anzuwenden, kommentieren Sie zuerst die Definition von `basicMaterial` aus:

```js
// const basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

Erstellen Sie anschließend das [`shaderMaterial`](https://threejs.org/docs/#Reference/Materials/ShaderMaterial):

```js
const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
```

Dieses Shader-Material übernimmt den Code aus den Scripts und wendet ihn auf das Objekt an, dem das Material zugewiesen ist.

Ersetzen Sie dann in der Zeile, die den Würfel definiert, `basicMaterial` durch das neu erstellte `shaderMaterial`:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert die Shader, die dem Mesh mit diesem Material zugeordnet sind, und führt sie aus. In unserem Fall werden sowohl der Vertex-Shader als auch der Textur-Shader auf den Würfel angewendet. Das war’s – Sie haben gerade einen möglichst einfachen Shader erstellt. Herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Demo eines blauen Würfels mit Three.js](cube.png)

Er sieht genauso aus wie in der Three.js-Würfeldemo. Sowohl die leicht veränderte Position als auch die gleiche blaue Farbe werden hier jedoch mithilfe der Shader erreicht.

## Vollständiger Code

### HTML

```html
<script src="https://end3r.github.io/MDN-Games-3D/Shaders/js/three.min.js"></script>
<script id="vertexShader" type="x-shader/x-vertex">
  void main() {
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
  }
</script>
<script id="fragmentShader" type="x-shader/x-fragment">
  void main() {
      gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
  }
</script>
```

### CSS

```css
body {
  margin: 0;
  padding: 0;
  font-size: 0;
}
canvas {
  width: 100%;
  height: 100%;
}
```

### JavaScript

```js
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);

const boxGeometry = new THREE.BoxGeometry(10, 10, 10);

const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});

const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

### Ergebnis

{{ EmbedLiveSample('Final_code', '100%', '400') }}

## Fazit

In diesem Artikel haben Sie die Grundlagen von Shadern kennengelernt. Unser Beispiel macht noch nicht viel, aber mit Shadern lassen sich viele weitere interessante Dinge umsetzen. Auf [ShaderToy](https://www.shadertoy.com/) finden Sie beeindruckende Beispiele, die Sie als Inspiration nutzen und deren Quellcode Sie studieren können.

## Siehe auch

- [WebGL lernen](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) – für allgemeines Wissen über WebGL
- [WebGL-Shader und GLSL bei WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) – für Informationen speziell zu GLSL
