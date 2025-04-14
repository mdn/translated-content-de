---
title: GLSL-Shader
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: f2d013a0ee574275c95b93a4fc72a547a58df7f4
---

{{GamesSidebar}}

Shader verwenden GLSL (OpenGL Shading Language), eine spezielle OpenGL-Shadersprache mit einer Syntax, die C ähnlich ist. GLSL wird direkt von der Grafik-Pipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://www.khronos.org/opengl/wiki/Shader), aber zwei werden häufig verwendet, um Grafiken im Web zu erstellen: Vertex-Shader und Fragment(Pixel)-Shader. Vertex-Shader transformieren Formenpositionen in 3D-Zeichenkoordinaten. Fragment-Shader berechnen die Wiedergabe der Farben und anderer Attribute einer Form.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist stark typisiert und es gibt viel Mathematik, die Vektoren und Matrizen beinhaltet. Es kann sehr schnell sehr kompliziert werden. In diesem Artikel werden wir ein einfaches Codebeispiel erstellen, das einen Würfel rendert. Um den Hintergrundcode zu beschleunigen, verwenden wir die Three.js API.

Wie Sie sich vielleicht aus dem Artikel zur [grundlegenden Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertizes können und haben normalerweise zusätzliche Eigenschaften. Das 3D-Koordinatensystem definiert den Raum und die Vertizes helfen dabei, Formen in diesem Raum zu definieren.

## Shader-Typen

Ein Shader ist im Wesentlichen eine Funktion, die benötigt wird, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Grafikprozessor), die für solche Operationen optimiert ist. Die Verwendung einer GPU zur Verarbeitung von Shadern entlastet die CPU von einigen der Rechenaufgaben. Dadurch kann die CPU ihre Verarbeitungsleistung auf andere Aufgaben konzentrieren, wie z. B. das Ausführen von Code.

### Vertex-Shader

Vertex-Shader manipulieren Koordinaten in einem 3D-Raum und werden einmal pro Vertex aufgerufen. Der Zweck des Vertex-Shaders besteht darin, die Variable `gl_Position` festzulegen – dies ist eine spezielle, globale und eingebaute GLSL-Variable. `gl_Position` wird verwendet, um die Position des aktuellen Vertex zu speichern.

Die Funktion `void main()` ist eine standardmäßige Methode zur Definition der `gl_Position`-Variable. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader erzeugt eine Variable, die enthält, wie die Position eines Vertex im 3D-Raum auf einen 2D-Bildschirm projiziert wird.

### Fragment-Shader

Fragment- (oder Textur-) Shader definieren RGBA- (Rot, Grün, Blau, Alpha) Farben für jedes Pixel, das verarbeitet wird – ein einzelner Fragment-Shader wird einmal pro Pixel aufgerufen. Der Zweck des Fragment-Shaders besteht darin, die Variable `gl_FragColor` festzulegen. `gl_FragColor` ist eine eingebaute GLSL-Variable wie `gl_Position`.

Die Berechnungen ergeben eine Variable, die die Informationen über die RGBA-Farbe enthält.

## Demo

Erstellen wir eine einfache Demo, um diese Shader in Aktion zu erklären. Lesen Sie unbedingt zuerst das [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Denken Sie daran, dass Sie nicht Three.js oder eine andere Bibliothek verwenden müssen, um Ihre Shader zu schreiben – reines [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) reicht völlig aus. Wir haben hier Three.js verwendet, um den Hintergrundcode viel einfacher und klarer verständlich zu machen, sodass Sie sich nur auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren viele Dinge für Sie – wenn Sie ein solches Beispiel in rohem WebGL erstellen wollten, müssten Sie eine Menge zusätzlichen Code schreiben, damit es tatsächlich funktioniert.

### Einrichtung der Umgebung

Um mit den WebGL-Shadern zu beginnen, folgen Sie den Schritten zur Umgebungs-Einrichtung im [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), sodass Three.js wie erwartet funktioniert.

### HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Shaders demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
        font-size: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
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

Diese enthält einige grundlegende Informationen, wie das Dokument {{htmlelement("title")}}, und einige CSS-Angaben, um die `width` und `height` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js in die Seite einfügen wird, um volle Größe des Viewports einzunehmen. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} umfasst die Three.js-Bibliothek auf der Seite; wir schreiben unseren Code in drei Skript-Tags im {{htmlelement("body")}}-Tag:

1. Das erste enthält den Vertex-Shader.
2. Das zweite enthält den Fragment-Shader.
3. Das dritte enthält den eigentlichen JavaScript-Code, der die Szene generiert.

Kopieren Sie diesen Code, bevor Sie weiterlesen, in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`. Wir erstellen in dieser Datei eine Szene mit einem einfachen Würfel, um zu erklären, wie die Shader funktionieren.

### Der Quellcode des Würfels

Anstatt alles von Grund auf neu zu erstellen, können wir den Quellcode des Würfels aus dem [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wiederverwenden. Die meisten Komponenten wie der Renderer, die Kamera und das Licht bleiben gleich, aber anstatt des grundlegenden Materials werden wir die Farbe und Position des Würfels mit Shadern festlegen.

Gehen Sie zur [cube.html-Datei auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem inneren des zweiten {{htmlelement("script")}}-Elements und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern und laden Sie `index.html` in Ihrem Browser — Sie sollten einen blauen Würfel sehen.

### Der Vertex-Shader-Code

Fahren wir fort, indem wir einen einfachen Vertex-Shader schreiben — fügen Sie den untenstehenden Code in das erste `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Die resultierende `gl_Position` wird berechnet, indem die Modell-View- und die Projektionsmatrizen mit jedem Vektor multipliziert werden, um die endgültige Vertex-Position in jedem Fall zu erhalten.

> [!NOTE]
> Sie können mehr über _Modell-, \_Ansichts-_ und _Projektionstransformationen_ im [Vertexverarbeitungs-Abschnitt](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing) erfahren, und am Ende dieses Artikels finden Sie auch Links, um mehr darüber zu lernen.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt und der Vektor wird mit der neuen 3D-Position übergeben, was dazu führt, dass sich der ursprüngliche Würfel 10 Einheiten entlang der `x`-Achse und 5 Einheiten entlang der `z`-Achse bewegt, übersetzt über einen Shader. Wir können den vierten Parameter ignorieren und mit dem Standardwert `1.0` belassen; dieser wird verwendet, um das Clipping der Vertex-Position im 3D-Raum zu manipulieren, was wir in unserem Fall nicht benötigen.

### Der Textur-Shader-Code

Jetzt fügen wir dem Code den Textur-Shader hinzu — fügen Sie den untenstehenden Code in das zweite `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Dies wird eine RGBA-Farbe festlegen, um das derzeitige hellblaue wiederzugeben — die ersten drei Fließkommawerte (von `0.0` bis `1.0`) repräsentieren die Rot-, Grün- und Blaukanäle, während der vierte die Alphatransparenz darstellt (von `0.0` — vollständig transparent — bis 1.0 — vollständig undurchsichtig).

### Anwendung der Shader

Um die neu erstellten Shader tatsächlich auf den Würfel anzuwenden, kommentieren Sie zuerst die `basicMaterial`-Definition aus:

```js
// const basicMaterial = new THREE.MeshBasicMaterial({color: 0x0095DD});
```

Erstellen Sie dann das [`shaderMaterial`](https://threejs.org/docs/#Reference/Materials/ShaderMaterial):

```js
const shaderMaterial = new THREE.ShaderMaterial({
  vertexShader: document.getElementById("vertexShader").textContent,
  fragmentShader: document.getElementById("fragmentShader").textContent,
});
```

Dieses Shader-Material nimmt den Code aus den Skripten und wendet ihn auf das Objekt an, dem das Material zugewiesen ist.

In der Zeile, die den Würfel definiert, müssen wir dann das `basicMaterial` durch das neu erstellte `shaderMaterial` ersetzen:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert und führt die Shader aus, die an das Mesh angehängt sind, dem dieses Material zugeordnet ist. In unserem Fall werden auf den Würfel sowohl Vertex- als auch Texturshader angewendet. Das war's — Sie haben gerade den einfachsten möglichen Shader erstellt, herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Three.js blaues Würfel-Demo](cube.png)

Er sieht genau wie das Three.js-Würfel-Demo aus, aber die leicht unterschiedliche Position und die gleiche blaue Farbe wurden beide mit dem Shader erzielt.

## Endgültiger Code

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

Dieser Artikel hat die Grundlagen von Shadern vermittelt. Unser Beispiel macht nicht viel, aber es gibt viele coole Dinge, die Sie mit Shadern anstellen können — schauen Sie sich einige wirklich coole Beispiele auf [ShaderToy](https://www.shadertoy.com/) an, um Inspiration zu bekommen und aus ihren Quellen zu lernen.

## Siehe auch

- [Learning WebGL](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — für allgemeines WebGL-Wissen
- [WebGL Shaders and GLSL at WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — für spezifische GLSL-Informationen
