---
title: GLSL Shaders
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Shader verwenden GLSL (OpenGL Shading Language), eine spezielle OpenGL-Shadingsprache mit einer Syntax ähnlich der von C. GLSL wird direkt von der Grafik-Pipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://www.khronos.org/opengl/wiki/Shader), aber zwei werden häufig verwendet, um Grafiken im Web zu erzeugen: Vertex-Shader und Fragment- (Pixel-)Shader. Vertex-Shader transformieren Formpositionen in 3D-Zeichenkoordinaten. Fragment-Shader berechnen die Darstellungen der Farben und anderer Attribute einer Form.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist stark typisiert und es gibt viel Mathematik, die Vektoren und Matrizen beinhaltet. Es kann sehr schnell sehr kompliziert werden. In diesem Artikel erstellen wir ein einfaches Code-Beispiel, das einen Würfel rendert. Um den Hintergrundcode zu beschleunigen, verwenden wir die Three.js-API.

Wie Sie sich vielleicht aus dem Artikel zur [Grundlagen-Theorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertices können und haben in der Regel zusätzliche Eigenschaften. Das 3D-Koordinatensystem definiert den Raum und die Vertices helfen, Formen in diesem Raum zu definieren.

## Shader-Typen

Ein Shader ist im Wesentlichen eine Funktion, die benötigt wird, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Graphics Processing Unit), die für solche Operationen optimiert ist. Die Verwendung einer GPU zur Bearbeitung von Shadern entlastet die CPU von einigen der Rechenaufgaben. Dadurch kann sich die CPU auf andere Aufgaben konzentrieren, wie z.B. das Ausführen von Code.

### Vertex-Shader

Vertex-Shader manipulieren Koordinaten in einem 3D-Raum und werden einmal pro Vertex aufgerufen. Der Zweck des Vertex-Shaders besteht darin, die `gl_Position`-Variable einzurichten – dies ist eine spezielle, globale und eingebaute GLSL-Variable. `gl_Position` wird verwendet, um die Position des aktuellen Vertex zu speichern.

Die Funktion `void main()` ist eine standardmäßige Methode zur Definition der `gl_Position`-Variable. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader liefert eine Variable, die angibt, wie die Position eines Vertex im 3D-Raum auf einem 2D-Bildschirm projiziert werden soll.

### Fragment-Shader

Fragment- (oder Textur-)Shader definieren RGBA- (Rot, Grün, Blau, Alpha) Farben für jedes zu verarbeitende Pixel – ein einziger Fragment-Shader wird einmal pro Pixel aufgerufen. Der Zweck des Fragment-Shaders besteht darin, die `gl_FragColor`-Variable einzurichten. `gl_FragColor` ist eine eingebaute GLSL-Variable wie `gl_Position`.

Die Berechnungen ergeben eine Variable, die die Information über die RGBA-Farbe enthält.

## Demo

Lassen Sie uns eine einfache Demo erstellen, um diese Shader in Aktion zu erklären. Lesen Sie zuerst das [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Denken Sie daran, dass Sie keine Three.js oder eine andere Bibliothek verwenden müssen, um Ihre Shader zu schreiben – reines [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) reicht mehr als aus. Wir haben hier Three.js verwendet, um den Hintergrundcode viel einfacher und verständlicher zu gestalten, damit Sie sich nur auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren viele Dinge für Sie – wenn Sie ein solches Beispiel in reinem WebGL erstellen wollten, müssten Sie eine Menge zusätzlichen Code schreiben, um es tatsächlich zum Laufen zu bringen.

### Umgebungseinrichtung

Um mit den WebGL-Shadern zu starten, folgen Sie den Schritten zur Umgebungseinrichtung im [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), damit Three.js wie erwartet funktioniert.

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

Sie enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}} und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite einfügen wird, um die volle Größe des Ansichtsfensters zu haben. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} fügt die Three.js-Bibliothek in die Seite ein; wir werden unseren Code in drei Skript-Tags im {{htmlelement("body")}}-Tag schreiben:

1. Das erste wird den Vertex-Shader enthalten.
2. Das zweite wird den Fragment-Shader enthalten.
3. Das dritte wird den eigentlichen JavaScript-Code enthalten, der die Szene erzeugt.

Kopieren Sie diesen Code vor dem Weiterlesen in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`. In dieser Datei erstellen wir eine Szene mit einem einfachen Würfel, um zu erklären, wie die Shader funktionieren.

### Der Quellcode des Würfels

Anstatt alles von Grund auf neu zu erstellen, können wir den Quellcode des Würfels aus dem [Building up a basic demo with Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wiederverwenden. Die meisten Komponenten wie Renderer, Kamera und Lichter bleiben gleich, aber anstelle des Basis-Materials werden wir die Farbe und Position des Würfels mit Shadern festlegen.

Gehen Sie zur [cube.html-Datei auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem zweiten {{htmlelement("script")}}-Element und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern und laden Sie `index.html` in Ihrem Browser — Sie sollten einen blauen Würfel sehen.

### Der Vertex-Shader-Code

Fahren wir fort, indem wir einen einfachen Vertex-Shader schreiben — fügen Sie den untenstehenden Code in das erste `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Das resultierende `gl_Position` wird berechnet, indem die Modell-Ansicht und die Projektionsmatrizen mit jedem Vektor multipliziert werden, um die endgültige Vertex-Position in jedem Fall zu erhalten.

> [!NOTE]
> Sie können mehr über _Modell_, _Ansicht_ und _Projektionstransformationen_ aus dem [Vertex-Processing-Absatz](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing) erfahren, und Sie können auch die Links am Ende dieses Artikels nutzen, um mehr darüber zu lernen.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt, und der Vektor wird mit der neuen 3D-Position übergeben, was dazu führt, dass sich der ursprüngliche Würfel um 10 Einheiten entlang der `x`-Achse und um 5 Einheiten entlang der `z`-Achse bewegt, übersetzt über einen Shader. Wir können den vierten Parameter ignorieren und ihn mit dem Standardwert `1.0` belassen; dieser wird verwendet, um das Clipping der Vertex-Position im 3D-Raum zu manipulieren, aber in unserem Fall brauchen wir das nicht.

### Der Textur-Shader-Code

Nun fügen wir den Textur-Shader zum Code hinzu — fügen Sie den untenstehenden Code in das zweite `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Dies setzt eine RGBA-Farbe, um die aktuelle hellblaue nachzubilden — die ersten drei Float-Werte (im Bereich von `0.0` bis `1.0`) repräsentieren die roten, grünen und blauen Kanäle, während der vierte die Alpha-Transparenz ist (im Bereich von `0.0` — vollständig transparent — bis 1.0 — vollständig opak).

### Anwenden der Shader

Um die neu erstellten Shader tatsächlich auf den Würfel anzuwenden, kommentieren Sie zuerst die `basicMaterial`-Definition aus:

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

Dieses Shader-Material übernimmt den Code aus den Skripten und wendet ihn auf das Objekt an, dem das Material zugewiesen ist.

Dann müssen wir in der Zeile, die den Würfel definiert, das `basicMaterial` durch das neu erstellte `shaderMaterial` ersetzen:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert und führt die an das Mesh angehängten Shader aus, denen dieses Material gegeben wird. In unserem Fall wird der Würfel sowohl Vertex- als auch Textur-Shader angewendet haben. Das war's – Sie haben gerade den einfachsten möglichen Shader erstellt, herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Three.js Blauwürfel-Demo](cube.png)

Er sieht genau so aus wie die Three.js-Würfel-Demo, aber die leicht unterschiedliche Position und die gleiche blaue Farbe werden beide unter Verwendung des Shaders erzielt.

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

Dieser Artikel hat die Grundlagen von Shadern vermittelt. Unser Beispiel tut nicht viel, aber es gibt viele weitere coole Dinge, die Sie mit Shadern machen können – schauen Sie sich einige wirklich coole auf [ShaderToy](https://www.shadertoy.com/) an, um Inspiration und Lernmaterial von ihren Quellen zu erhalten.

## Siehe auch

- [Learning WebGL](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — für allgemeines WebGL-Wissen
- [WebGL Shaders and GLSL at WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — für spezifische Informationen zu GLSL
