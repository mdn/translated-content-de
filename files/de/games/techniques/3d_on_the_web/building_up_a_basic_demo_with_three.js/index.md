---
title: Erstellen einer einfachen Demo mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 40ed53eb3e3513d7a9da90253238f9770b47b7dd
---

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält standardmäßige Elemente wie Formen, die in einem Koordinatensystem angeordnet sind, eine Kamera, um sie zu betrachten, Lichter und Materialien, um sie ansprechender aussehen zu lassen, Animationen, um sie lebendig erscheinen zu lassen, usw. **Three.js**, wie jede andere 3D-Bibliothek, bietet integrierte Hilfsfunktionen, um Ihnen zu helfen, gängige 3D-Funktionen schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Grundlagen der Nutzung von Three.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML, der grundlegenden Objekte von Three und wie Sie eine einfache Demo erstellen.

Three ist eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API) Bibliotheken, obwohl wir nicht sagen, dass sie besser ist als jede andere WebGL-Bibliothek, und Sie sollten sich freier fühlen, andere Bibliotheken auszuprobieren.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im August 2026 aktualisiert und ist mit Three.js Version `r185` kompatibel.

## Entwicklungssetup

Um mit der Entwicklung mit Three.js zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.

In Ihrem Code können Sie Three.js [über ein CDN oder mit Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation). Wenn Sie es von einem CDN einbinden, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";
</script>
```

Ein Node.js-Setup mit Three.js als Abhängigkeit ist praktisch, wenn Sie gegen bestimmte Three.js-Versionen entwickeln möchten, und es kann die Zusammenarbeit und den Einsatz beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternativ können Sie die [neueste Three.js-Bibliothek](https://github.com/mrdoob/three.js/archive/master.zip) herunterladen und die minimierte Version von Three.js aus dem unkomprimierten Archiv in `build/three.webgpu.js` in Ihr Projekt kopieren.
Beachten Sie, dass die Archive Quelldateien enthalten, was die Downloadgröße auf etwa 360 MB erhöht.

Für welche Methode Sie sich auch entscheiden, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) irgendwo als Referenz geöffnet haben, während Sie arbeiten.

### HTML-Starter für Three.js

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur, um zu beginnen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Three.js demo</title>
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
  </head>
  <body>
    <script type="importmap">
      {
        "imports": {
          "three": "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.webgpu.js",
          "three/webgpu": "https://cdn.jsdelivr.net/npm/three@0.185.0/build/three.webgpu.js"
        }
      }
    </script>
    <script type="module">
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

Es enthält grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements auf 100 % zu setzen, sodass es den gesamten verfügbaren Viewport-Bereich ausfüllt. Das erste {{htmlelement("script")}}-Element bindet die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es gibt bereits zwei Hilfsvariablen, die die `width` und `height` des Fensters speichern.

Kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige Renderer: WebGL ist der Standard, und andere umfassen WebGPU, Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders rendern wird als die CSS-Implementierung. Trotz der Vielfalt der Mittel zum Erreichen des Ziels wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird. Beispielsweise verwendet der WebGPU-Renderer standardmäßig ein WebGPU-Backend und als Fallback ein WebGL 2-Backend.

Der folgende Code erstellt einen neuen WebGPU-Renderer, legt seine Größe fest, um den gesamten verfügbaren Raum auf dem Bildschirm zu füllen, und fügt die DOM-Struktur in die Seite ein.
Vielleicht haben Sie den `antialias`-Parameter in der ersten Zeile bemerkt – dies rendert die Kanten von Formen glatter. Die `setClearColor()`-Methode setzt unseren Hintergrund auf eine hellgraue Farbe anstelle der standardmäßigen schwarzen Farbe.

```js
import * as THREE from "three/webgpu";

const renderer = new THREE.WebGPURenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

await renderer.init();
```

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert.
Wenn wir im Demo neue Objekte erstellen, fügen wir sie alle in eine Szene ein, um sie auf dem Bildschirm sichtbar zu machen.
In Three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns es erstellen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen noch eine Kamera hinzufügen, um unsere Arbeit zu betrachten — stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen platzieren die Kamera im 3D-Koordinatensystem und richten sie auf unsere Szene aus:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu, unter denen, die zuvor hinzugefügt wurden.

Es gibt andere Kameratypen (Cube, Orthographic), aber die einfachste ist Perspective. Um sie zu initialisieren, müssen wir ihren Sichtfeldwinkel und das Seitenverhältnis einstellen: Ersteres wird verwendet, um festzulegen, wie viel gesehen wird, und Letzteres ist wichtig, damit die Objekte auf dem Bildschirm die richtigen Proportionen haben, wenn sie gerendert werden, und nicht verzerrt aussehen. Lassen Sie uns die Werte erläutern, die wir für den obigen Code festlegen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto größer der Teil der Szene, den die Kamera zeigen wird. Stellen Sie sich eine normale Kameraansicht im Vergleich zu einem Fischaugeneffekt vor, der es ermöglicht, viel mehr zu sehen. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters gesetzt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis festlegen — zum Beispiel 16 ⁄ 9, was das Seitenverhältnis eines Breitbild-Fernsehers ist. Der Standardwert ist 1.
- Die `z`-Position, mit dem Wert von 50 Einheiten, ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, sodass die Objekte in der Szene betrachtet werden können. 50 erscheint angemessen. Es ist nicht zu nah oder zu weit, und die Größen der Objekte ermöglichen es ihnen, in der Szene zu bleiben, innerhalb des gegebenen Sichtfeldes. Die `x`- und `y`-Werte, wenn nicht spezifiziert, bleiben auf 0.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie beeinflussen, was Sie in der Szene sehen.
Die Entfernungswerte (z.B. für die Kamera z-Position) sind einheitenlos und können alles sein, was Sie für Ihre Szene geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt an Ihnen.

## Szene rendern

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir noch alles rendern. Unsere `render()`-Funktion wird diese Aufgabe übernehmen, mit ein wenig Unterstützung von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), welche die Szene kontinuierlich auf jedem Frame neu rendert:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie auf, um die Schleife zu starten, danach läuft sie kontinuierlich.

Fügen Sie erneut diesen neuen Code unter Ihren vorherigen hinzu. Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da unsere Szene ordnungsgemäß gerendert wird, können wir mit dem Hinzufügen von 3D-Formen beginnen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe von vordefinierten Primitiven, die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Würfel, Kugeln, Zylinder und kompliziertere Formen sind verfügbar. Details wie das Zeichnen der erforderlichen Scheitelpunkte und Flächen für eine gegebene Form werden von Three.js verwaltet, sodass wir uns auf die höherstufige Programmierung konzentrieren können. Lassen Sie uns beginnen, indem wir die Geometrie für eine Würfelform definieren, und fügen Sie das Folgende direkt über der `render()`-Funktion hinzu:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten groß ist. Die Geometrie allein reicht jedoch nicht aus; wir benötigen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Einige vordefinierte Materialien können verwendet werden: Basic, Phong, Lambert. Lassen Sie uns später mit den letzten beiden spielen, aber für jetzt sollte das Basic ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dieses nimmt eine Form und fügt das angegebene Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie erneut diese Zeile unter der hinzu, die Sie zuvor hinzugefügt haben.

## Hinzufügen des Würfels zur Szene

Wir haben jetzt einen Würfel erstellt, indem wir die zuvor definierte Geometrie und das Material verwendet haben. Das letzte, was zu tun bleibt, ist, den Würfel in unserer Szene zu platzieren. Fügen Sie diese Zeile unter der vorherigen hinzu:

```js
scene.add(cube);
```

Wenn Sie die Datei speichern und Ihren Webbrowser aktualisieren, sieht unser Objekt jetzt wie ein Quadrat aus, weil es zur Kamera gerichtet ist. Das Gute an Objekten ist, dass wir sie in der Szene nach Belieben bewegen können. Zum Beispiel, indem wir sie drehen und skalieren. Lassen Sie uns eine kleine Drehung auf den Würfel anwenden, damit wir mehr als eine Fläche sehen können. Noch einmal, fügen wir unseren Code unter den vorherigen hinzu:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js Formbeispiel

Wenn Sie bisher alles ohne Probleme befolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit Three.js erstellt!
Herzlichen Glückwunsch.
Ihr Code sollte wie das folgende Live-Beispiel aussehen.
Sie können "Abspielen" klicken, um den Code im MDN Playground anzuzeigen und zu bearbeiten:

```html hidden live-sample___three-js-intro
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0xdddddd, 1);
  document.body.appendChild(renderer.domElement);

  await renderer.init();

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
  camera.position.z = 50;
  scene.add(camera);

  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
  const cube = new THREE.Mesh(boxGeometry, basicMaterial);
  scene.add(cube);
  cube.rotation.set(0.4, 0.2, 0);

  function render() {
    requestAnimationFrame(render);
    renderer.render(scene, camera);
  }
  render();
</script>
```

```css hidden live-sample___three-js-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-intro", "", "400px")}}

## Mehr Formen und Materialien

Jetzt werden wir der Szene mehr Formen hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Lassen Sie uns den Würfel nach links verschieben, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen hinzu:

```js
cube.position.x = -25;
```

Nun zu weiteren Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der in das Phong-Material gewickelt ist? Versuchen Sie, die folgenden Zeilen hinzuzufügen, direkt unter den Zeilen, die den Würfel definieren.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Diese Zeilen werden eine Torus-Geometrie hinzufügen; die Parameter der `TorusGeometry()`-Methode definieren die Parameter: `Radius`, `Rohrdurchmesser`, `Anzahl der radialen Segmente` und `Anzahl der röhrenartigen Segmente`. Das Phong-Material sollte glänzender aussehen als das einfache Basis-Material der Box, obwohl unser Torus im Moment einfach nur schwarz aussehen wird.
Das Hinzufügen einer Drehung gibt dem Torus eine anfängliche Tiefe, sodass er nicht flach aussieht.

Wir können unterhaltsamere vordefinierte Formen auswählen. Lassen Sie uns etwas mehr spielen. Fügen Sie die folgenden Zeilen hinzu, unter denen, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Diesmal erstellen wir ein Dodekaeder, eine Form mit zwölf ebenen Flächen. Der Parameter von `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich wie Phong, aber es sollte weniger glänzend sein. Erneut ist es im Moment schwarz. Wir bewegen das Objekt nach rechts, damit es nicht an der gleichen Position wie Box oder Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit einfach nur schwarz aus. Um sowohl die Phong- als auch die Lambert-Materialien ordnungsgemäß sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen in Three.js. Das einfachste ist `PointLight`, das wie eine Taschenlampe arbeitet und einen Scheinwerfer in eine definierte Richtung scheint. Fügen Sie die folgenden Zeilen hinzu, unter Ihre Formdefinitionen:

```js
const light = new THREE.PointLight(0xffffff, 5000);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren ein weißes Punktlicht, setzen seine Position weg vom Zentrum der Szene, damit es einige Teile der Formen beleuchten kann, und fügen es schließlich der Szene hinzu. Jetzt funktioniert alles wie es sollte; alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichtarten lesen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie mit deren Platzierung in unserer Szene, um zu sehen, wie sie diese beeinflussen.

Das ist ein guter Fortschritt, aber wir können es noch aufregender machen! In einem Spiel passiert normalerweise etwas. Wir könnten Animationen und dergleichen sehen. Versuchen wir also, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits die Drehung verwendet, um die Position des Würfels anzupassen. Wir können die Formen auch skalieren oder ihre Positionen ändern. Um eine Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, damit sie bei jedem Frame aktualisiert werden.

### Drehung

Das Drehen ist einfach. Sie fügen in jedem Frame einen Wert zu einer gegebenen Drehrichtung hinzu. Fügen Sie diese Codezeile direkt nach dem `requestAnimationFrame()`-Aufruf innerhalb der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel in jedem Frame um ein kleines Stück, damit die Animation reibungslos aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Bei Anwendung eines konstanten Wertes würden wir es wachsen lassen oder nur einmal verkleinern. Lassen Sie uns die Sache interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t` zum Zählen der vergangenen Zeit. Fügen Sie es direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert bei jedem Frame der Animation um einen gegebenen konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt nach dem `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, was zu einem ziemlich interessanten Ergebnis führt. Dies skaliert den Torus und wiederholt den Vorgang, da `sin` eine periodische Funktion ist. Wir umhüllen den Skalenwert in `Math.abs`, um die absoluten Werte zu übergeben, die größer oder gleich 0 sind. Da sin zwischen -1 und 1 ist, könnten negative Werte unseren Torus seltsam erscheinen lassen. In diesem Fall sieht er die Hälfte der Zeit schwarz aus.

### Bewegung

Neben der Drehung und Skalierung können wir Objekte zusätzlich in der Szene bewegen. Fügen Sie das Folgende direkt unter unseren `requestAnimationFrame()`-Aufruf hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird das Dodekaeder auf und ab bewegen, indem der `sin()`-Wert auf die y-Achse bei jedem Frame angewendet wird, mit einer kleinen Anpassung, damit es cooler aussieht. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Three.js Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
Sie können "Abspielen" klicken, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___three-js-animation
<script type="module">
  import * as THREE from "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.185.0/three.webgpu.js";

  const WIDTH = window.innerWidth;
  const HEIGHT = window.innerHeight;

  const renderer = new THREE.WebGPURenderer({ antialias: true });
  renderer.setSize(WIDTH, HEIGHT);
  renderer.setClearColor(0xdddddd, 1);
  document.body.appendChild(renderer.domElement);

  await renderer.init();

  const scene = new THREE.Scene();

  const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT, 0.1, 10000);
  camera.position.z = 50;
  scene.add(camera);

  const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
  const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
  const cube = new THREE.Mesh(boxGeometry, basicMaterial);
  cube.position.x = -25;
  cube.rotation.set(0.4, 0.2, 0);
  scene.add(cube);

  const torusGeometry = new THREE.TorusGeometry(7, 1, 16, 32);
  const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
  const torus = new THREE.Mesh(torusGeometry, phongMaterial);
  torus.rotation.set(0.5, 0.5, 0);
  scene.add(torus);

  const strangeGeometry = new THREE.DodecahedronGeometry(7);
  const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
  const dodecahedron = new THREE.Mesh(strangeGeometry, lambertMaterial);
  dodecahedron.position.x = 25;
  scene.add(dodecahedron);

  const light = new THREE.PointLight(0xffffff, 5000);
  light.position.set(-10, 15, 50);
  scene.add(light);

  let t = 0;
  function render() {
    t += 0.01;
    requestAnimationFrame(render);
    cube.rotation.y += 0.01;
    torus.scale.y = Math.abs(Math.sin(t));
    dodecahedron.position.y = -7 * Math.sin(t * 2);
    renderer.render(scene, camera);
  }
  render();
</script>
```

```css hidden live-sample___three-js-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("three-js-animation", "", "400px")}}

## Zusammenfassung

Nun kennen Sie die Grundlagen von Three.js; viel Spaß beim Experimentieren!
Sie können die Dokumentation zu [3D-Games im Web](/de/docs/Games/Techniques/3D_on_the_web) weiterlesen, wenn Sie mehr erfahren möchten.
Sie könnten auch WebGL und WebGPU lernen, um ein besseres Verständnis davon zu bekommen, was darunter geschieht.
Siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) und [WebGPU-Dokumentation](/de/docs/Web/API/WebGPU_API) für weitere Informationen.
