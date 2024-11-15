---
title: Aufbau eines einfachen Demos mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 4319d57835c493db5e4ec4c4b7b98dfba53d01eb
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält Standardobjekte wie Formen, die in einem Koordinatensystem platziert sind, eine Kamera, um sie zu betrachten, Lichter und Materialien, um sie besser aussehen zu lassen, Animationen, um sie lebendig erscheinen zu lassen, usw. **Three.js** bietet wie jede andere 3D-Bibliothek integrierte Hilfsfunktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Schritte zur Verwendung von Three.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML, der grundlegenden Objekte von Three und wie man ein einfaches Demo erstellt.

Three ist eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API) Bibliotheken und der Einstieg ist leicht.
Wir sagen nicht, dass es besser ist als andere WebGL-Bibliotheken, und Sie sollten sich frei fühlen, auch andere Bibliotheken auszuprobieren.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit Three.js Version `r79` kompatibel.

## Entwicklungseinrichtung

Um mit Three.js zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.

In Ihrem Code können Sie Three.js [über ein CDN oder Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation).
Wenn Sie es von einem CDN einfügen, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

Ein Node.js-Setup mit Three.js, das als Abhängigkeit installiert ist, ist praktisch, wenn Sie gegen bestimmte Three.js-Versionen entwickeln möchten und es kann die Zusammenarbeit und Bereitstellung beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternativ können Sie die [neueste Three.js-Bibliothek](https://github.com/mrdoob/three.js/archive/master.zip) herunterladen und die minifizierte Version von Three.js aus dem unkomprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren.
Beachten Sie, dass die Archive Quelldateien enthalten, wodurch die Downloadgröße etwa 350MB beträgt.

Welche Methode Sie auch wählen, um zu starten, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) an einem Ort geöffnet haben, während Sie arbeiten, um darauf zu verweisen.

### HTML-Starter für Three.js

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur, um zu starten:

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

Es enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}}, und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite einfügen wird, um 100% zu füllen, um den gesamten verfügbaren Viewport-Bereich auszufüllen. Das erste {{htmlelement("script")}}-Element umfasst die Three.js-Bibliothek auf der Seite, und wir werden unseren Beispielcode im zweiten schreiben. Es sind zwei Hilfsvariablen enthalten, die die `width` und `height` des Fensters speichern.

Bevor Sie weiter lesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich, wie alles gerendert wird, daher wird die WebGL-Implementierung anders umgesetzt als die CSS-Implementierung. Trotz der Vielzahl an Möglichkeiten, das Ziel zu erreichen, wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird.

Der folgende Code erstellt einen neuen WebGL-Renderer, setzt seine Größe auf den gesamten verfügbaren Platz auf dem Bildschirm und fügt die DOM-Struktur auf der Seite hinzu.
Sie haben vielleicht den `antialias`-Parameter in der ersten Zeile bemerkt – dies rendert die Kanten der Formen glatter. Die Methode `setClearColor()` setzt unseren Hintergrund auf eine hellgraue Farbe, anstatt der standardmäßigen schwarzen.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element, direkt unter dem JavaScript-Kommentar, ein.

## Szene

Eine Szene ist der Ort, an dem alles passiert.
Wenn neue Objekte im Demo erstellt werden, fügen wir sie alle in eine Szene ein, um sie auf dem Bildschirm sichtbar zu machen.
In three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns diese erstellen, indem wir die folgende Zeile unter unsere vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen auch eine Kamera hinzufügen, um unsere Arbeit zu betrachten – stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen platzieren die Kamera im 3D-Koordinatensystem und richten sie in Richtung unserer Szene aus:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code, unter den zuvor hinzugefügten, hinzu.

Es gibt andere Arten von Kameras (Würfel, Orthographisch), aber die einfachste ist die Perspektive. Um sie zu initialisieren, müssen wir ihr Sichtfeld und das Seitenverhältnis einstellen: Ersteres wird verwendet, um festzulegen, wie viel zu sehen ist, und letzteres ist wichtig, damit die Objekte auf dem Bildschirm beim Rendern die richtigen Proportionen haben und nicht gestreckt aussehen. Lassen Sie uns die Werte erklären, die wir für den obigen Code einstellen:

- Der für das Sichtfeld festgelegte Wert, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr von der Szene wird die Kamera zeigen. Stellen Sie sich einen normalen Kamerablick vor, gegenüber einem Fisheye-Effekt, der erlaubt, viel mehr zu sehen. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters eingestellt, so dass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis festlegen – z.B. 16 ⁄ 9, das das Seitenverhältnis eines Breitbild-Fernsehers ist. Der Standardwert ist 1.
- Die `z`-Position, mit dem Wert von 50 Einheiten, ist der Abstand zwischen der Kamera und dem Mittelpunkt der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene betrachtet werden können. 50 fühlt sich richtig an. Es ist nicht zu nah, oder zu weit, und die Größen der Objekte erlauben es, in der Szene, innerhalb des gegebenen Sichtfelds zu bleiben. Die `x`- und `y`-Werte, wenn nicht spezifiziert, werden auf 0 standardmäßig eingestellt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie ändern, was Sie in der Szene sehen.
Die Entfernungswerte (z.B. für die Kamera-z-Position) sind einheitslos und können alles sein, was Sie für Ihre Szene geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt ganz bei Ihnen.

## Rendern der Szene

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir noch alles rendern. Unsere `render()`-Funktion wird diesen Job erledigen, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), das dafür sorgt, dass die Szene ständig bei jedem Frame neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie das erste Mal auf, um die Schleife zu starten, danach wird sie unendlich verwendet.

Fügen Sie wieder diesen neuen Code unter Ihre vorherigen Ergänzungen hinzu. Versuchen Sie die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da unsere Szene ordnungsgemäß gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vordefinierter Primitives, die Sie verwenden können, um sofort Formen mit nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Details wie das Zeichnen der erforderlichen Scheitelpunkte und Flächen für eine gegebene Form werden vom Three-Framework behandelt, sodass wir uns auf höherstufiges Codieren konzentrieren können. Lassen Sie uns damit beginnen, indem wir die Geometrie für eine Würfelform definieren und das Folgende direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten groß ist. Die Geometrie allein ist jedoch nicht genug, wir benötigen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt überzieht, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt eine Reihe vordefinierter Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den beiden letzten spielen, aber für jetzt sollte das Basic ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Es nimmt eine Form und fügt das angegebene Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie diese Zeile unter der ein, die Sie zuvor hinzugefügt hatten.

## Hinzufügen des Würfels zur Szene

Wir haben jetzt einen Würfel erstellt, mithilfe der zuvor definierten Geometrie und des Materials. Das Letzte, was zu tun bleibt, ist, den Würfel in unsere Szene zu platzieren. Fügen Sie diese Zeile unter der vorherigen hinzu:

```js
scene.add(cube);
```

Wenn Sie speichern und Ihren Webbrowser aktualisieren, sieht unser Objekt jetzt wie ein Quadrat aus, weil es direkt zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene verschieben können, wie wir wollen. Zum Beispiel nach Bedarf drehen und skalieren. Lassen Sie uns eine kleine Drehung auf den Würfel anwenden, damit wir mehr als eine Fläche sehen können. Fügen Sie wiederum unseren Code unter dem vorherigen hinzu:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Beispiel für eine Three.js-Form

Wenn Sie bisher allem ohne Probleme gefolgt sind, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit Three.js erstellt!
Es war einfacher, als Sie dachten, richtig?
Ihr Code sollte wie das folgende Live-Beispiel aussehen.
Sie können auf "Play" klicken, um den Code im MDN Playground anzuzeigen und zu bearbeiten:

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

Jetzt werden wir mehr Formen zur Szene hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Lassen Sie uns den Würfel nach links verschieben, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen hinzu:

```js
cube.position.x = -25;
```

Nun zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der in das Phong-Material eingewickelt ist? Versuchen Sie, die folgenden Zeilen, direkt unter den Zeilen, die den Würfel definieren, hinzuzufügen.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Diese Zeilen fügen eine Torusgeometrie hinzu; die Parameter der `TorusGeometry()`-Methode definieren, und die Parameter sind `Radius`, `Rohrdurchmesser`, `Radialsegmentzahl` und `Rohrsegmentzahl`. Das Phong-Material sollte glänzender aussehen als das einfache Basic-Material der Box, obwohl unser Torus derzeit nur schwarz aussehen wird.
Ein Hinzufügen einer Drehung verleiht dem Torus eine anfängliche Tiefe, sodass er nicht flach aussieht.

Wir können aus mehr intuitiven vordefinierten Formen wählen. Lassen Sie uns noch etwas mehr spielen. Fügen Sie die folgenden Zeilen, unter denen, die den Torus definieren, hinzu:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Dieses Mal erstellen wir ein Dodekaeder, eine Form mit zwölf flachen Flächen. Der Parameter für `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich dem Phong, aber es sollte weniger glänzend sein. Wieder ist es aktuell schwarz. Wir bewegen das Objekt nach rechts, damit es nicht an der selben Position wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit nur schwarz aus. Um sowohl das Phong- als auch das Lambert-Material richtig sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen, die in Three.js verfügbar sind. Die einfachste ist `PointLight`, die wie eine Taschenlampe funktioniert und in eine festgelegte Richtung leuchtet. Fügen Sie die folgenden Zeilen, unter Ihren Formdefinitionen, hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren ein weißes Licht, setzen seine Position etwas abseits vom Mittelpunkt der Szene, damit es einige Teile der Formen beleuchten kann, und fügen es schließlich der Szene hinzu. Jetzt funktioniert alles wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichtarten überprüfen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie damit, sie in unserer Szene zu platzieren, um zu sehen, wie sie es beeinflussen.

Dies ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas. Wir könnten Animationen sehen usw. Lassen Sie uns versuchen, diesen Formen etwas Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits Rotation verwendet, um die Position des Würfels anzupassen. Wir können auch die Formen skalieren oder ihre Positionen ändern. Um Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, damit sie bei jedem Frame aktualisiert werden.

### Rotation

Das Drehen ist unkompliziert. Sie addieren einen Wert zu einer gegebenen Rotationsrichtung bei jedem Frame. Fügen Sie diese Codezeile, direkt nach dem Aufruf von `requestAnimationFrame()` innerhalb der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel bei jedem Frame, um ein kleines Stück, damit die Animation glatt aussieht.

### Skalierung

Wir können ein Objekt auch skalieren. Durch Anwenden eines konstanten Werts würde es einmal wachsen oder schrumpfen lassen. Lassen Sie uns die Dinge interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t` zum Zählen der vergangenen Zeit. Fügen Sie sie direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert bei jedem Frame der Animation um einen gegebenen konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen, direkt unter dem Aufruf von `requestAnimationFrame()`, hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin` und erzielen ein ziemlich interessantes Ergebnis. Dies skaliert den Torus und wiederholt den Prozess, da `sin` eine periodische Funktion ist. Wir umgeben den Skalierungswert mit `Math.abs`, um die absoluten Werte zu übergeben, die größer oder gleich 0 sind. Da sin zwischen -1 und 1 liegt, könnten negative Werte den Torus in unerwarteter Weise rendern. In diesem Fall sieht es halbzeitlich schwarz aus.

### Bewegung

Neben der Rotation und Skalierung können wir Objekte auch um die Szene bewegen. Fügen Sie das Folgende, wieder direkt unter unserem Aufruf von `requestAnimationFrame()`, hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird das Dodekaeder nach oben und unten bewegen, indem der Wert von `sin()` auf die y-Achse bei jedem Frame angewendet wird, und eine kleine Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie es die Animationen beeinflusst.

## Three.js-Beispiel mit Animation

Hier ist der finale Code mit animierten Formen.
Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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

Nun kennen Sie die Grundlagen von Three.js; fröhliches Experimentieren!
Sie können die [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web)-Dokumentation weiterlesen, wenn Sie mehr lernen möchten.
Sie könnten auch versuchen, WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert.
Siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) für mehr Informationen.
