---
title: Aufbau eines grundlegenden Demos mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält Standardgegenstände wie Formen, die in einem Koordinatensystem verortet sind, eine Kamera, um sie zu betrachten, Lichter und Materialien, um sie besser aussehen zu lassen, Animationen, um sie lebendig erscheinen zu lassen, usw. **Three.js** bietet, wie jede andere 3D-Bibliothek, integrierte Hilfsfunktionen, um Ihnen zu helfen, gängige 3D-Funktionalität schneller zu implementieren. In diesem Artikel führen wir Sie durch die wirklich grundlegenden Anwendungen von Three.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML, der grundlegenden Objekte von Three und wie man ein einfaches Demo aufbaut.

Three ist eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API)-Bibliotheken, obwohl wir nicht behaupten, dass sie besser ist als jede andere WebGL-Bibliothek; Sie sollten gerne andere Bibliotheken ausprobieren.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit Three.js Version `r79`.

## Entwicklungseinrichtung

Um mit Three.js zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.

In Ihrem Code können Sie Three.js [über ein CDN oder Node.js](https://threejs.org/docs/#manual/en/introduction/Installation) importieren. Wenn Sie es von einem CDN einfügen, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

Eine Node.js-Einrichtung mit Three.js als Abhängigkeit ist praktisch, wenn Sie gegen bestimmte Versionen von Three.js entwickeln und es die Zusammenarbeit und Bereitstellung beschleunigen kann:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternativ können Sie die [neueste Three.js-Bibliothek](https://github.com/mrdoob/three.js/archive/master.zip) herunterladen und die minimierte Version von Three.js aus dem unkomprimierten Archiv bei `build/three.module.min.js` in Ihr Projekt kopieren. Beachten Sie, dass die Archive Quelldateien enthalten, wodurch die Downloadgröße etwa 350 MB beträgt.

Egal wie Sie beginnen, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) geöffnet haben, während Sie daran arbeiten, um nachschlagen zu können.

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
    <script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

Es enthält einige grundlegende Informationen wie das Dokument-{{htmlelement("title")}} und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements, das Three.js auf der Seite einfügen wird, auf 100% zu setzen, um den gesamten verfügbaren Ansichtsbereich zu füllen. Das erste {{htmlelement("script")}}-Element fügt die Three.js-Bibliothek auf der Seite ein, und wir schreiben unseren Beispielcode in das zweite Element. Es sind bereits zwei Hilfsvariablen enthalten, die die `width` und `height` des Fensters speichern.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung sich von der CSS-Implementierung unterscheidet. Trotz der Vielzahl der Wege, wie sie das Ziel erreichen, wird die Erfahrung für den Benutzer gleich aussehen. Durch diesen Ansatz kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird.

Der folgende Code erstellt einen neuen WebGL-Renderer, setzt seine Größe so, dass der gesamte verfügbare Platz auf dem Bildschirm ausgefüllt wird, und fügt die DOM-Struktur der Seite hinzu. Vielleicht haben Sie den `antialias`-Parameter in der ersten Zeile bemerkt – dies macht die Kanten von Formen glatter. Die Methode `setClearColor()` setzt unseren Hintergrund auf eine hellgraue Farbe, anstatt auf die standardmäßig schwarze.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Wenn wir neue Objekte im Demo erstellen, fügen wir sie alle in eine Szene ein, um sie auf dem Bildschirm sichtbar zu machen. In Three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns es erzeugen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen noch eine Kamera hinzufügen, um unsere Arbeit zu betrachten – stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen setzen die Kamera an Ort und Stelle im 3D-Koordinatensystem und richten sie in die Richtung unserer Szene aus:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu, unterhalb der zuvor hinzugefügten.

Es gibt andere Kameratypen (Cube, Orthographic), aber die einfachste ist die Perspektivkamera. Um sie zu initialisieren, müssen wir ihren Sichtfeldwinkel und das Seitenverhältnis einstellen: Erstere wird verwendet, um festzulegen, wie viel gesehen wird, und Letzteres ist wichtig, damit die Objekte auf dem Bildschirm in den richtigen Proportionen gerendert werden und nicht gestreckt aussehen. Erklären wir die Werte, die wir für den obigen Code setzen:

- Der Wert, den wir für das Sichtfeld setzen, 70, ist etwas, womit wir experimentieren können: Je höher der Wert, desto mehr von der Szene zeigt die Kamera. Stellen Sie sich eine normale Kamerasicht vor, im Vergleich zu einem Fisheye-Effekt, der viel mehr erlaubt zu sehen. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters gesetzt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis einstellen – zum Beispiel 16⁄9, das das Seitenverhältnis eines Breitbildfernsehers ist. Der Standardwert ist 1.
- Die `z`-Position, mit dem Wert von 50 Einheiten, ist der Abstand zwischen der Kamera und dem Szenenzentrum auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene betrachtet werden können. 50 fühlt sich dafür richtig an. Es ist nicht zu nah oder zu weit entfernt, und die Größen der Objekte erlauben es ihnen, in der Szene zu bleiben, im gegebenen Sichtfeld. Die `x` und `y`-Werte, falls nicht spezifiziert, werden standardmäßig auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie das beeinflussen, was Sie in der Szene sehen. Die Distanzwerte (z.B. für die Kamera z-Position) sind einheitslos und können alles sein, was Sie für Ihre Szene geeignet halten: Millimeter, Meter, Fuß oder Meilen. Das liegt bei Ihnen.

## Darstellung der Szene

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir immer noch alles rendern. Unsere `render()`-Funktion wird diese Aufgabe übernehmen, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), was bewirkt, dass die Szene kontinuierlich in jedem Bild neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

In jedem neuen Bild wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie zum ersten Mal auf, um die Schleife zu starten, danach wird sie unaufhörlich verwendet.

Fügen Sie erneut diesen neuen Code unter Ihre vorherigen Ergänzungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten nun ein graues Fenster sehen. Glückwunsch!

## Geometrie

Jetzt, da unsere Szene korrekt gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vordefinierter Primitiven, die Sie verwenden können, um Formen in einer einzigen Codezeile sofort zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Details wie das Zeichnen erforderlicher Scheitelpunkte und Flächen für eine gegebene Form werden vom Three-Framework gehandhabt, sodass wir uns auf höherstufiges Codieren konzentrieren können. Beginnen wir damit, die Geometrie für eine Würfelform zu definieren, indem wir das Folgende direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten misst. Die Geometrie allein ist jedoch nicht genug, wir benötigen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unseren Kasten zu bemalen. Es gibt eine Reihe von vordefinierten Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den letzten beiden spielen, aber für jetzt sollte das Basic-Material ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dies nimmt eine Form und fügt das angegebene Material jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie erneut diese Zeile unter der hinzu, die Sie zuvor hinzugefügt haben.

## Hinzufügen des Würfels zur Szene

Wir haben nun einen Würfel erstellt, unter Verwendung der vorher definierten Geometrie und des Materials. Das Letzte, was zu tun ist, ist den Würfel in unsere Szene zu platzieren. Fügen Sie diese Zeile unter der vorherigen hinzu:

```js
scene.add(cube);
```

Wenn Sie die Datei speichern und Ihren Webbrowser neu laden, sieht unser Objekt nun wie ein Quadrat aus, weil es direkt zur Kamera schaut. Das Gute an Objekten ist, dass wir sie in der Szene nach Belieben verschieben können. Zum Beispiel können wir sie rotieren und skalieren, wie wir es möchten. Lassen Sie uns dem Würfel eine kleine Drehung geben, damit wir mehr als eine Seite sehen können. Erneut hinzufügen unseres Codes unter der vorherigen:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js Form-Beispiel

Wenn Sie alles bisher problemlos gefolgt sind, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit Three.js erstellt! Glückwünsche. Ihr Code sollte ähnlich dem folgenden Live-Beispiel aussehen. Sie können auf "Play" klicken, um den Code im MDN Playground zu betrachten und zu bearbeiten:

```html hidden live-sample___three-js-intro
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js hidden live-sample___three-js-intro
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
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
scene.add(cube);
cube.rotation.set(0.4, 0.2, 0);

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
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

Jetzt fügen wir noch mehr Formen zur Szene hinzu und erkunden andere Formen, Materialien, Beleuchtung und mehr. Lassen wir den Würfel nach links bewegen, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen hinzu:

```js
cube.position.x = -25;
```

Nun zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, eingehüllt in das Phong-Material? Versuchen Sie, die folgenden Zeilen direkt unter den Zeilen, die den Würfel definieren, hinzuzufügen.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Diese Zeilen fügen eine Torus-Geometrie hinzu; die Parameter der Methode `TorusGeometry()` definieren und die Parameter sind `Radius`, `Rohrdurchmesser`, `radiale Segmentanzahl` und `tubulare Segmentanzahl`. Das Phong-Material sollte glänzender aussehen als das einfache Basic-Material des Würfels, allerdings sieht unser Torus gerade schwarz aus. Eine Rotation hinzuzufügen, gibt dem Torus eine anfängliche Tiefe, sodass er nicht flach aussieht.

Wir können uns für noch witzigere vordefinierte Formen entscheiden. Lassen Sie uns noch mehr spielen. Fügen Sie die folgenden Zeilen unterhalb derjenigen, die den Torus definieren, hinzu:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Diesmal erstellen wir ein Dodekaeder, eine Form, die zwölf flache Flächen enthält. Der Parameter für `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich wie Phong, aber es sollte weniger glänzend sein. Wieder ist es gerade schwarz. Wir bewegen das Objekt nach rechts, sodass es sich nicht an derselben Position befindet wie der Würfel oder der Torus.

Wie oben erwähnt, sehen die neuen Objekte zurzeit einfach schwarz aus. Um sowohl das Phong- als auch das Lambert-Material korrekt sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen in Three.js. Das einfachste ist `PointLight`, das wie eine Taschenlampe funktioniert, die in eine bestimmte Richtung leuchtet. Fügen Sie die folgenden Zeilen unter Ihren Formdefinitionen hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren ein weißes Punktlicht, setzen seine Position ein wenig abseits des Zentrums der Szene, sodass es einige Teile der Formen erleuchten kann, und fügen es schließlich der Szene hinzu. Nun funktioniert alles, wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichttypen prüfen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie, sie auf unserer Szene zu platzieren, um zu sehen, wie sie sie beeinflussen.

Das ist guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas. Wir könnten Animationen und dergleichen sehen. Versuchen wir, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits die Rotation verwendet, um die Position des Würfels anzupassen. Wir können auch die Formen skalieren oder ihre Positionen ändern. Um Animationen zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, sodass sie in jedem Frame aktualisiert werden.

### Rotation

Rotieren ist einfach. Man fügt in jedem Frame einem gegebenen Drehrichtung einen Wert hinzu. Fügen Sie diese Codezeile direkt nach dem `requestAnimationFrame()`-Aufruf innerhalb der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel in jedem Frame um ein kleines Stück, damit die Animation flüssig aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Würden wir einen konstanten Wert anwenden, würden wir es einmal wachsen oder schrumpfen lassen. Lassen Sie es uns interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t`, um die verstrichene Zeit zu zählen. Fügen Sie es direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert in jedem Frame der Animation um einen gegebenen konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt nach dem `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, um am Ende ein recht interessantes Ergebnis zu erzielen. Damit wird der Torus skaliert und der Prozess wiederholt, da `sin` eine periodische Funktion ist. Wir verpacken den Skalierungswert in `Math.abs`, um die absoluten Werte weiterzugeben, die größer oder gleich 0 sind. Da `sin` zwischen -1 und 1 ist, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht er die Hälfte der Zeit schwarz aus.

### Bewegung

Zusätzlich zur Rotation und Skalierung können wir Objekte in der Szene bewegen. Fügen Sie das Folgende hinzu, wieder direkt unter unserer `requestAnimationFrame()`-Aufruf:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird den Dodekaeder auf und ab bewegen, indem der `sin()`-Wert in jedem Frame auf die y-Achse angewendet wird, sowie eine kleine Anpassung, damit es cooler aussieht. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Three.js-Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen. Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___three-js-animation
<script src="https://cdn.jsdelivr.net/npm/three-js@79.0.0/three.min.js"></script>
```

```js live-sample___three-js-animation
const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);

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

const light = new THREE.PointLight(0xffffff);
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

Nun kennen Sie die Grundlagen von Three.js; viel Spaß beim Experimentieren! Sie können weiterhin die Dokumentation zu [3D-Spielen im Web](/de/docs/Games/Techniques/3D_on_the_web) lesen, wenn Sie mehr lernen möchten. Sie könnten auch versuchen, WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert. Siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) für mehr Informationen.
