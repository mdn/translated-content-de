---
title: GLSL-Shader
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Shader verwenden GLSL (OpenGL Shading Language), eine spezielle OpenGL Shading Language mit einer C-ähnlichen Syntax. GLSL wird direkt durch die Grafikpipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://www.khronos.org/opengl/wiki/Shader), aber zwei werden häufig verwendet, um Grafiken im Web zu erstellen: Vertex-Shader und Fragment-(Pixel)-Shader. Vertex-Shader transformieren Formpositionen in 3D-Zeichenkoordinaten. Fragment-Shader berechnen die Darstellungen der Farben und anderer Attribute einer Form.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist streng typisiert und es gibt viel Mathematik mit Vektoren und Matrizen. Es kann sehr schnell sehr kompliziert werden. In diesem Artikel werden wir ein einfaches Codebeispiel entwickeln, das einen Würfel rendert. Um den Hintergrundcode zu beschleunigen, verwenden wir die Three.js-API.

Wie Sie sich vielleicht aus dem Artikel [Grundlagen der Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertices können und haben normalerweise zusätzliche Eigenschaften. Das 3D-Koordinatensystem definiert den Raum, und die Vertices helfen, die Formen in diesem Raum zu definieren.

## Shader-Typen

Ein Shader ist im Wesentlichen eine Funktion, die benötigt wird, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Graphics Processing Unit), die für solche Operationen optimiert ist. Die Verwendung einer GPU zum Umgang mit Shadern entlastet die CPU von einigen Berechnungen. Dies ermöglicht es der CPU, ihre Rechenleistung auf andere Aufgaben zu konzentrieren, wie die Ausführung von Code.

### Vertex-Shader

Vertex-Shader manipulieren Koordinaten in einem 3D-Raum und werden einmal pro Vertex aufgerufen. Der Zweck des Vertex-Shaders ist es, die `gl_Position`-Variable einzurichten — dies ist eine spezielle, globale und eingebaute GLSL-Variable. `gl_Position` wird verwendet, um die Position des aktuellen Vertex zu speichern.

Die Funktion `void main()` ist eine standardmäßige Methode zur Definition der `gl_Position`-Variable. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader liefert eine Variable, die beschreibt, wie die Position eines Vertex im 3D-Raum auf einen 2D-Bildschirm projiziert wird.

### Fragment-Shader

Fragment-(oder Texture)-Shader definieren RGBA-(rot, grün, blau, alpha)-Farben für jedes bearbeitete Pixel — ein einzelner Fragment-Shader wird einmal pro Pixel aufgerufen. Der Zweck des Fragment-Shaders ist es, die `gl_FragColor`-Variable einzurichten. `gl_FragColor` ist eine eingebaute GLSL-Variable, ähnlich wie `gl_Position`.

Die Berechnungen ergeben eine Variable, die die Informationen über die RGBA-Farbe enthält.

## Demo

Lassen Sie uns eine einfache Demo erstellen, um diese Shader in Aktion zu erklären. Stellen Sie sicher, dass Sie zuerst das [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) lesen, um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Denken Sie daran, dass Sie nicht Three.js oder eine andere Bibliothek verwenden müssen, um Ihre Shader zu schreiben — pure [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) ist mehr als genug. Wir haben hier Three.js verwendet, um den Hintergrundcode viel einfacher und verständlicher zu machen, sodass Sie sich nur auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren viele Dinge für Sie — wenn Sie ein solches Beispiel in rohem WebGL erstellen wollten, müssten Sie viel zusätzlichen Code schreiben, um es tatsächlich zum Laufen zu bringen.

### Einrichtungsumgebung

Um mit WebGL-Shadern zu beginnen, folgen Sie den Einrichtungsschritten, die im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, damit Sie sicher sein können, dass Three.js wie erwartet funktioniert.

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

Sie enthält einige grundlegende Informationen wie das Dokument-{{htmlelement("title")}}, und etwas CSS, um die `Breite` und `Höhe` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite einfügt, um die volle Größe des Viewports zu haben. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} schließt die Three.js-Bibliothek auf der Seite ein; wir werden unseren Code in drei Skripttags im {{htmlelement("body")}}-Tag schreiben:

1. Das erste enthält den Vertex-Shader.
2. Das zweite enthält den Fragment-Shader.
3. Das dritte enthält den tatsächlichen JavaScript-Code, der die Szene erzeugt.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`. In dieser Datei werden wir eine Szene mit einem einfachen Würfel erstellen, um zu erklären, wie die Shader funktionieren.

### Der Quellcode des Würfels

Anstatt alles von Grund auf neu zu erstellen, können wir den Quellcode des Würfels aus dem [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wiederverwenden. Die meisten Komponenten wie der Renderer, die Kamera und die Lichter bleiben gleich, aber anstelle des grundlegenden Materials werden wir die Farbe und Position des Würfels mithilfe von Shadern festlegen.

Gehen Sie zur [cube.html-Datei auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem zweiten {{htmlelement("script")}}-Element und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern und laden Sie `index.html` in Ihrem Browser — Sie sollten einen blauen Würfel sehen.

### Der Vertex-Shader-Code

Lassen Sie uns mit der Entwicklung eines einfachen Vertex-Shaders fortfahren — fügen Sie den folgenden Code in das erste `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Die resultierende `gl_Position` wird berechnet, indem die Modell-Ansichts- und die Projektionsmatrizen mit jedem Vektor multipliziert werden, um die endgültige Vertex-Position in jedem Fall zu erhalten.

> [!NOTE]
> Sie können mehr über _Modell_-, _Ansichts_- und _Projektions-Transformationen_ im [Absatz zur Vertexverarbeitung](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing) erfahren, und Sie können auch die Links am Ende dieses Artikels konsultieren, um mehr darüber zu lernen.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt, und der Vektor wird mit der neuen 3D-Position übergeben, was dazu führt, dass der ursprüngliche Würfel 10 Einheiten entlang der `x`-Achse und 5 Einheiten entlang der `z`-Achse verschoben wird, diese Verschiebung erfolgt über einen Shader. Wir können den vierten Parameter ignorieren und ihn mit dem Standardwert `1.0` belassen; dies wird verwendet, um das Clipping der Vertex-Position im 3D-Raum zu manipulieren, aber wir benötigen es in unserem Fall nicht.

### Der Textur-Shader-Code

Jetzt fügen wir den Textur-Shader dem Code hinzu — fügen Sie den folgenden Code in das zweite `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Dies wird eine RGBA-Farbe setzen, um die aktuelle hellblaue Farbe zu reproduzieren — die ersten drei Gleitkommawerte (im Bereich von `0.0` bis `1.0`) repräsentieren die Rot-, Grün- und Blaukanäle, während der vierte die Alpha-Transparenz ist (im Bereich von `0.0` — vollständig transparent — bis 1.0 — vollständig opak).

### Anwenden der Shader

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

Dieses Shader-Material verwendet den Code aus den Skripts und wendet ihn auf das Objekt an, dem das Material zugewiesen ist.

Im nächsten Schritt müssen wir in der Zeile, die den Würfel definiert, das `basicMaterial` durch das neu erstellte `shaderMaterial` ersetzen:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert und führt die Shader aus, die an das Mesh angehängt sind, dem dieses Material zugewiesen ist. In unserem Fall wird der Würfel sowohl mit Vertex- als auch mit Textur-Shadern versehen. Das war’s — Sie haben gerade den einfachsten möglichen Shader erstellt, herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Three.js blue cube demo](cube.png)

Er sieht genauso aus wie die Three.js-Würfel-Demo, aber die leicht unterschiedliche Position und die gleiche blaue Farbe werden beide unter Verwendung des Shaders erreicht.

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

Dieser Artikel hat die Grundlagen von Shadern gelehrt. Unser Beispiel tut nicht viel, aber es gibt viele coole Dinge, die Sie mit Shadern machen können — schauen Sie sich einige wirklich coole auf [ShaderToy](https://www.shadertoy.com/) zur Inspiration an und um von deren Quellen zu lernen.

## Siehe auch

- [Learning WebGL](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — für allgemeine WebGL-Kenntnisse
- [WebGL Shaders and GLSL at WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — für spezifische Informationen zu GLSL
