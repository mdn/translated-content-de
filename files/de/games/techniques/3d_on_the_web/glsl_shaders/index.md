---
title: GLSL-Shader
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: 3cbd2b2b2eb0be9425949c20ca5d398645f7c0e9
---

Shader nutzen GLSL (OpenGL Shading Language), eine spezielle OpenGL Shading-Sprache mit einer Syntax, die C ähnelt. GLSL wird direkt von der Grafik-Pipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://wikis.khronos.org/opengl/Shader), aber zwei werden häufig verwendet, um Grafiken im Web zu erstellen: Vertex-Shader und Fragment- (Pixel-) Shader. Vertex-Shader transformieren die Positionen von Formen in 3D-Zeichenkoordinaten. Fragment-Shader berechnen die Renderings einer Form mit Farben und anderen Attributen.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist stark typisiert und es gibt viel Mathematik mit Vektoren und Matrizen. Es kann sehr schnell sehr kompliziert werden. In diesem Artikel werden wir ein einfaches Codebeispiel erstellen, das einen Würfel rendert. Um den Hintergrundcode zu beschleunigen, werden wir die Three.js-API verwenden.

Wie Sie sich aus dem Artikel [Grundlegende Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern können, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertices können und haben in der Regel zusätzliche Eigenschaften. Das 3D-Koordinatensystem definiert den Raum und die Vertices helfen dabei, Formen in diesem Raum zu definieren.

## Shader-Typen

Ein Shader ist im Wesentlichen eine Funktion, die erforderlich ist, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Grafikprozessor), die für solche Operationen optimiert ist. Die Nutzung eines GPUs zur Verarbeitung von Shadern entlastet die CPU von einigen der Berechnungen. Das ermöglicht es der CPU, ihre Rechenleistung auf andere Aufgaben zu konzentrieren, wie z.B. das Ausführen von Code.

### Vertex-Shader

Vertex-Shader manipulieren Koordinaten in einem 3D-Raum und werden einmal pro Vertex aufgerufen. Der Zweck des Vertex-Shaders besteht darin, die Variable `gl_Position` einzurichten — das ist eine spezielle, globale und eingebaute GLSL-Variable. `gl_Position` wird verwendet, um die Position des aktuellen Vertex zu speichern.

Die Funktion `void main()` ist eine Standardmethode, um die Variable `gl_Position` zu definieren. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader liefert eine Variable, die angibt, wie die Position eines Vertex im 3D-Raum auf einen 2D-Bildschirm projiziert wird.

### Fragment-Shader

Fragment- (oder Textur-) Shader definieren RGBA- (Rot, Grün, Blau, Alpha) Farben für jedes zu verarbeitende Pixel — ein einzelner Fragment-Shader wird einmal pro Pixel aufgerufen. Der Zweck des Fragment-Shaders besteht darin, die Variable `gl_FragColor` einzurichten. `gl_FragColor` ist eine eingebaute GLSL-Variable ähnlich wie `gl_Position`.

Die Berechnungen resultieren in einer Variable, die Informationen über die RGBA-Farbe enthält.

## Demo

Erstellen wir eine einfache Demo, um diese Shader in Aktion zu erklären. Achten Sie darauf, zuerst das [Three.js Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) zu lesen, um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Denken Sie daran, dass Sie nicht Three.js oder irgendeine andere Bibliothek verwenden müssen, um Ihre Shader zu schreiben — reines [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) reicht vollkommen aus. Wir haben hier Three.js verwendet, um den Hintergrundcode viel einfacher und verständlicher zu machen, so dass Sie sich einfach auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren viele Dinge für Sie — wenn Sie ein solches Beispiel in reinem WebGL erstellen wollten, müssten Sie eine Menge zusätzlichen Code schreiben, um es tatsächlich zum Laufen zu bringen.

### Einrichtungsumgebung

Um mit den WebGL-Shadern zu beginnen, folgen Sie den Schritten zur Einrichtung der Umgebung, die im [Bau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, so dass Three.js wie erwartet funktioniert.

### HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden.

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

Es enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die `Breite` und `Höhe` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite einfügt, um die volle Größe des Ansichtsfensters zu erreichen. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} fügt die Three.js-Bibliothek in die Seite ein; wir werden unseren Code in drei Skript-Tags im {{htmlelement("body")}}-Tag schreiben:

1. Das erste wird den Vertex-Shader enthalten.
2. Das zweite wird den Fragment-Shader enthalten.
3. Das dritte wird den eigentlichen JavaScript-Code enthalten, der die Szene generiert.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`. Wir werden in dieser Datei eine Szene mit einem einfachen Würfel erstellen, um zu erklären, wie die Shader funktionieren.

### Der Code des Würfels

Anstatt alles von Grund auf neu zu erstellen, können wir den [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) Quellcode des Würfels wiederverwenden. Die meisten Komponenten wie Renderer, Kamera und Lichter bleiben gleich, aber anstelle des Basismaterials werden wir die Farbe und Position des Würfels mithilfe von Shadern festlegen.

Gehen Sie zur [cube.html Datei auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem zweiten {{htmlelement("script")}}-Element und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern und laden Sie `index.html` in Ihrem Browser — Sie sollten einen blauen Würfel sehen.

### Der Vertex-Shader-Code

Fahren wir fort, indem wir einen einfachen Vertex-Shader schreiben — fügen Sie den folgenden Code in das erste `<script>`-Tag des Body ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Die resultierende `gl_Position` wird berechnet, indem die Modellansichts- und die Projektionsmatrix jeweils mit dem Vektor multipliziert werden, um die endgültige Position des Vertex zu erhalten.

> [!NOTE]
> Sie können mehr über _Model_, _View_ und _Projektionstransformationen_ aus dem [Vertex-Processing-Absatz](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing) erfahren, und Sie können auch die Links am Ende dieses Artikels nutzen, um mehr darüber zu lernen.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt und der Vektor wird mit der neuen 3D-Position übergeben, was dazu führt, dass der ursprüngliche Würfel 10 Einheiten entlang der `x`-Achse und 5 Einheiten entlang der `z`-Achse bewegt wird, übersetzt durch einen Shader. Wir können den vierten Parameter ignorieren und ihn mit dem Standardwert `1.0` belassen; dieser wird verwendet, um das Abschneiden der Vertex-Position im 3D-Raum zu manipulieren, aber in unserem Fall benötigen wir das nicht.

### Der Textur-Shader-Code

Nun fügen wir den Textur-Shader zum Code hinzu — fügen Sie den folgenden Code in das zweite `<script>`-Tag des Body ein:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Dies wird eine RGBA-Farbe festlegen, um den aktuellen hellblauen Farbton zu reproduzieren — die ersten drei Float-Werte (im Bereich von `0.0` bis `1.0`) repräsentieren die Rot-, Grün- und Blau-Kanäle, während der vierte die Alpha-Transparenz (im Bereich von `0.0` — vollständig transparent — bis 1.0 — vollständig undurchsichtig) darstellt.

### Anwendung der Shader

Um die neu erstellten Shader tatsächlich auf den Würfel anzuwenden, kommentieren Sie zuerst die Definition von `basicMaterial` aus:

```js
// const basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

Dann erstellen Sie das [`shaderMaterial`](https://threejs.org/docs/#Reference/Materials/ShaderMaterial):

```js
const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
```

Dieses Shader-Material nimmt den Code aus den Skripts und wendet ihn auf das Objekt an, dem das Material zugewiesen ist.

Dann müssen wir in der Zeile, die den Würfel definiert, das `basicMaterial` durch das neu erstellte `shaderMaterial` ersetzen:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert und führt die an das Mesh angehängten Shader aus, dem dieses Material zugewiesen ist. In unserem Fall wird der Würfel sowohl Vertex- als auch Textur-Shader angewendet bekommen. Das war's — Sie haben gerade den einfachsten möglichen Shader erstellt, herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Three.js blauwe Würfel-Demo](cube.png)

Er sieht genau wie die Three.js-Würfel-Demo aus, aber die leicht andere Position und die gleiche blaue Farbe werden beide mit dem Shader erreicht.

## Finaler Code

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

### Ergebnis

{{ EmbedLiveSample('Final_code', '100%', '400') }}

## Fazit

Dieser Artikel hat die absoluten Grundlagen von Shadern vermittelt. Unser Beispiel macht nicht viel, aber es gibt viele andere coole Dinge, die Sie mit Shadern machen können — sehen Sie sich einige wirklich beeindruckende auf [ShaderToy](https://www.shadertoy.com/) an, um Inspiration zu bekommen und aus deren Quellen zu lernen.

## Siehe auch

- [Learning WebGL](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — für allgemeine WebGL-Kenntnisse
- [WebGL Shaders und GLSL bei WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — für spezifische Informationen zu GLSL
