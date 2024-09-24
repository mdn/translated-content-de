---
title: GLSL-Shader
slug: Games/Techniques/3D_on_the_web/GLSL_Shaders
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Shader verwenden GLSL (OpenGL Shading Language), eine spezielle OpenGL-Shadersprache mit einer Syntax, die C ähnelt. GLSL wird direkt von der Grafikpipeline ausgeführt. Es gibt [verschiedene Arten von Shadern](https://www.khronos.org/opengl/wiki/Shader), aber zwei werden häufig verwendet, um Grafik im Web zu erstellen: Vertex-Shader und Fragment-Shader (Pixel-Shader). Vertex-Shader transformieren die Positionen von Formen in 3D-Zeichenkoordinaten. Fragment-Shader berechnen die Darstellung der Farben und anderer Attribute einer Form.

GLSL ist nicht so intuitiv wie JavaScript. GLSL ist stark typisiert und es gibt viel Mathematik mit Vektoren und Matrizen. Es kann sehr schnell sehr kompliziert werden. In diesem Artikel werden wir ein einfaches Codebeispiel erstellen, das einen Würfel rendert. Um den Hintergrundcode zu beschleunigen, werden wir die Three.js-API verwenden.

Wie Sie sich vielleicht aus dem Artikel zur [Grundlagentheorie](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory) erinnern, ist ein Vertex ein Punkt in einem 3D-Koordinatensystem. Vertices können und haben normalerweise zusätzliche Eigenschaften. Das 3D-Koordinatensystem definiert den Raum und die Vertices helfen, Formen in diesem Raum zu definieren.

## Shadertypen

Ein Shader ist im Wesentlichen eine Funktion, die erforderlich ist, um etwas auf dem Bildschirm zu zeichnen. Shader laufen auf einer [GPU](https://en.wikipedia.org/wiki/GPU) (Grafikprozessoreinheit), die für solche Operationen optimiert ist. Die Verwendung einer GPU zur Verarbeitung von Shadern entlastet die CPU von einigen der numerischen Berechnungen. Dies ermöglicht es der CPU, ihre Verarbeitungskapazität auf andere Aufgaben zu konzentrieren, wie das Ausführen von Code.

### Vertex-Shader

Vertex-Shader manipulieren Koordinaten in einem 3D-Raum und werden einmal pro Vertex aufgerufen. Der Zweck des Vertex-Shaders ist es, die Variable `gl_Position` einzurichten – dies ist eine spezielle, globale und eingebaute GLSL-Variable. `gl_Position` wird verwendet, um die Position des aktuellen Vertex zu speichern.

Die Funktion `void main()` ist eine standardmäßige Möglichkeit, die Variable `gl_Position` zu definieren. Alles innerhalb von `void main()` wird vom Vertex-Shader ausgeführt. Ein Vertex-Shader liefert eine Variable, die enthält, wie die Position eines Vertex im 3D-Raum auf einen 2D-Bildschirm projiziert wird.

### Fragment-Shader

Fragment- (oder Textur-)Shader definieren RGBA- (rot, grün, blau, alpha) Farben für jedes Pixel, das verarbeitet wird — ein einzelner Fragment-Shader wird einmal pro Pixel aufgerufen. Der Zweck des Fragment-Shaders ist es, die Variable `gl_FragColor` einzurichten. `gl_FragColor` ist eine eingebaute GLSL-Variable wie `gl_Position`.

Die Berechnungen resultieren in einer Variable, die die Informationen über die RGBA-Farbe enthält.

## Demo

Lassen Sie uns eine einfache Demo erstellen, um diese Shader in Aktion zu erklären. Lesen Sie unbedingt zuerst das [Three.js-Tutorial](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), um das Konzept der Szene, ihrer Objekte und Materialien zu verstehen.

> [!NOTE]
> Denken Sie daran, dass Sie Ihre Shader nicht mit Three.js oder einer anderen Bibliothek schreiben müssen — reines [WebGL](/de/docs/Web/API/WebGL_API) (Web Graphics Library) ist mehr als ausreichend. Wir haben hier Three.js verwendet, um den Hintergrundcode viel einfacher und verständlicher zu machen, sodass Sie sich auf den Shader-Code konzentrieren können. Three.js und andere 3D-Bibliotheken abstrahieren vieles für Sie — wenn Sie ein solches Beispiel in reinem WebGL erstellen wollten, müssten Sie viel zusätzlichen Code schreiben, um es tatsächlich zum Laufen zu bringen.

### Umgebungseinrichtung

Um mit den WebGL-Shadern zu beginnen, folgen Sie den Schritten zur Umgebungseinrichtung, die im [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) beschrieben sind, damit Three.js wie erwartet funktioniert.

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

Es enthält einige grundlegende Informationen wie das Dokumenten-{{htmlelement("title")}}, und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite einfügt, um die volle Größe des Viewports einzunehmen. Das {{htmlelement("script")}}-Element im {{htmlelement("head")}} enthält die Three.js-Bibliothek auf der Seite; wir werden unseren Code in drei Script-Tags im {{htmlelement("body")}}-Tag schreiben:

1. Das erste enthält den Vertex-Shader.
2. Das zweite enthält den Fragment-Shader.
3. Das dritte enthält den eigentlichen JavaScript-Code, der die Szene erzeugt.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`. Wir werden in dieser Datei eine Szene mit einem einfachen Würfel erstellen, um zu erklären, wie die Shader funktionieren.

### Quellcode des Würfels

Anstatt alles von Grund auf neu zu erstellen, können wir den Quellcode des Würfels aus dem [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) wiederverwenden. Die meisten Komponenten wie Renderer, Kamera und Lichter bleiben gleich, aber anstelle des Basismaterials werden wir die Farbe und die Position des Würfels mit Shadern festlegen.

Gehen Sie zur [cube.html-Datei auf GitHub](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html), kopieren Sie den gesamten JavaScript-Code aus dem zweiten {{htmlelement("script")}}-Element und fügen Sie ihn in das dritte `<script>`-Element des aktuellen Beispiels ein. Speichern Sie `index.html` und laden Sie es in Ihrem Browser — Sie sollten einen blauen Würfel sehen.

### Der Vertex-Shader-Code

Fahren Sie fort, indem Sie einen einfachen Vertex-Shader schreiben — fügen Sie den untenstehenden Code in das erste `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position.x+10.0, position.y, position.z+5.0, 1.0);
}
```

Die resultierende `gl_Position` wird berechnet, indem die Modell-Ansichts- und die Projektionsmatrizen mit jedem Vektor multipliziert werden, um die endgültige Vertex-Position in jedem Fall zu erhalten.

> [!NOTE]
> Sie können mehr über _Modell-,_ _Ansichts-_ und _Projektionsumwandlungen_ im Absatz zur [Vertex-Verarbeitung](/de/docs/Games/Techniques/3D_on_the_web/Basic_theory#vertex_processing) erfahren und am Ende dieses Artikels weitere Links dazu finden.

Sowohl `projectionMatrix` als auch `modelViewMatrix` werden von Three.js bereitgestellt, und der Vektor wird mit der neuen 3D-Position übergeben, was dazu führt, dass der ursprüngliche Würfel 10 Einheiten entlang der `x`-Achse und 5 Einheiten entlang der `z`-Achse verschoben wird, und zwar über einen Shader übersetzt. Wir können den vierten Parameter ignorieren und bei dem Standardwert `1.0` belassen; dieser wird verwendet, um das Clipping der Vertex-Position im 3D-Raum zu manipulieren, aber wir benötigen ihn in unserem Fall nicht.

### Der Texturshader-Code

Jetzt fügen wir den Texturshader dem Code hinzu — fügen Sie den untenstehenden Code in das zweite `<script>`-Tag des Körpers ein:

```glsl
void main() {
  gl_FragColor = vec4(0.0, 0.58, 0.86, 1.0);
}
```

Dies setzt eine RGBA-Farbe, um die aktuelle hellblaue Farbe nachzubilden — die ersten drei Fließkommazahlen (im Bereich von `0.0` bis `1.0`) repräsentieren die roten, grünen und blauen Kanäle, während die vierte die Alphatransparenz ist (im Bereich von `0.0` — vollständig transparent — bis 1.0 — vollständig deckend).

### Anwendung der Shader

Um die neu erstellten Shader tatsächlich auf den Würfel anzuwenden, kommentieren Sie zuerst die Definition des `basicMaterial` aus:

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

Dann müssen wir in der Zeile, die den Würfel definiert, das `basicMaterial` durch das neu erstellte `shaderMaterial` ersetzen:

```js
// const cube = new THREE.Mesh(boxGeometry, basicMaterial);
const cube = new THREE.Mesh(boxGeometry, shaderMaterial);
```

Three.js kompiliert und führt die Shader aus, die dem Mesh zugeordnet sind, dem dieses Material gegeben wird. In unserem Fall wird der Würfel sowohl Vertex- als auch Texturshader angewendet. Das war's — Sie haben gerade den einfachst möglichen Shader erstellt, herzlichen Glückwunsch! So sollte der Würfel aussehen:

![Three.js Blue Cube Demo](cube.png)

Er sieht genauso aus wie die Three.js-Würfeldemo, aber die leicht unterschiedliche Position und die gleiche blaue Farbe werden beide mithilfe des Shaders erreicht.

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

Dieser Artikel hat die Grundlagen von Shadern vermittelt. Unser Beispiel macht nicht viel, aber es gibt viele weitere coole Dinge, die Sie mit Shadern machen können — schauen Sie sich einige wirklich coole auf [ShaderToy](https://www.shadertoy.com/) an, um Inspiration zu erhalten und von ihren Quellen zu lernen.

## Siehe auch

- [Learning WebGL](https://web.archive.org/web/20180624211158/http://learningwebgl.com/blog/?page_id=1217) — für allgemeines WebGL-Wissen
- [WebGL Shaders and GLSL at WebGL Fundamentals](https://webglfundamentals.org/webgl/lessons/webgl-shaders-and-glsl.html) — für spezifische Informationen zu GLSL
