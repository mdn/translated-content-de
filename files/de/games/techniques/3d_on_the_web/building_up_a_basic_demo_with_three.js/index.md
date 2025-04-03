---
title: Aufbau eines grundlegenden Demos mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält Standardgegenstände wie Formen, die in einem Koordinatensystem platziert sind, eine Kamera zur Betrachtung, Lichter und Materialien, um das Aussehen zu verbessern, sowie Animationen, um es lebendig wirken zu lassen. **Three.js** bietet, wie jede andere 3D-Bibliothek, integrierte Hilfsfunktionen, um Ihnen zu helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel werden wir Sie durch die grundlegende Verwendung von Three.js führen, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML, der grundlegenden Objekte von Three und wie man ein einfaches Demo erstellt.

Three ist eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API)-Bibliotheken und der Einstieg ist einfach.
Wir behaupten nicht, dass sie besser als jede andere WebGL-Bibliothek ist, und Sie können gerne andere Bibliotheken ausprobieren.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit der Three.js-Version `r79` kompatibel.

## Entwicklungsumgebung

Um mit Three.js zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.

In Ihrem Code können Sie Three.js [über ein CDN oder Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation).
Wenn Sie es von einem CDN einbinden, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

Eine Node.js-Einrichtung mit Three.js als Abhängigkeit ist praktisch, wenn Sie gegen spezifische Three.js-Versionen entwickeln wollen und es kann die Zusammenarbeit und Bereitstellung beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternativ können Sie die [neueste Three.js-Bibliothek](https://github.com/mrdoob/three.js/archive/master.zip) herunterladen und die minimierte Version von Three.js aus dem unkomprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren. Denken Sie daran, dass die Archive Quelldateien enthalten, was die Downloadgröße auf etwa 350MB bringt.

Unabhängig davon, wie Sie beginnen möchten, sollten Sie die [Three.js-Dokumentation](https://threejs.org/docs/) griffbereit haben, während Sie arbeiten, um als Referenz zu dienen.

### HTML-Starter für Three.js

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, ist hier die HTML-Struktur, um loszulegen:

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

Es enthält grundlegende Informationen wie das Dokument {{htmlelement("title")}} und einige CSS-Anweisungen, um die `width` und `height` des {{htmlelement("canvas")}}-Elements, das Three.js auf der Seite einfügt, auf 100% zu setzen, um den gesamten verfügbaren Ansichtsbereich auszufüllen. Das erste {{htmlelement("script")}}-Element bindet die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es sind bereits zwei Hilfsvariablen enthalten, die die `width` und `height` des Fensters speichern.

Bevor Sie weiter lesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Tool, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, und weitere sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, also wird die WebGL-Implementierung anders umgesetzt als die CSS-Implementierung. Trotz der unterschiedlichen Methoden zur Erreichung des Ziels wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie nicht vom Browser unterstützt wird.

Der folgende Code erstellt einen neuen WebGL-Renderer, setzt seine Größe so, dass er den gesamten verfügbaren Bildschirmraum ausfüllt, und fügt die DOM-Struktur der Seite hinzu. Sie haben vielleicht den `antialias`-Parameter in der ersten Zeile bemerkt – dieser rendert die Kanten von Formen glatter. Die `setClearColor()`-Methode setzt unseren Hintergrund auf eine hellgraue Farbe, anstelle der standardmäßig schwarzen.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen neuer Objekte im Demo fügen wir sie alle in eine Szene ein, um sie auf dem Bildschirm sichtbar zu machen. In three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie es uns erstellen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber uns fehlt noch eine Kamera, um unser Werk zu betrachten – stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen bringen die Kamera im 3D-Koordinatensystem in Position und richten sie in Richtung unserer Szene aus:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen in Ihren Code ein, unter denen, die Sie zuvor hinzugefügt haben.

Es gibt andere Arten von Kameras (Cube, Orthographic), aber die einfachste ist die Perspektivkamera. Um sie zu initialisieren, müssen wir ihr Sichtfeld und das Seitenverhältnis festlegen: Ersteres dient dazu, festzulegen, wie viel gesehen wird, und letzteres ist wichtig, damit die Objekte auf dem Bildschirm bei der Wiedergabe die richtigen Proportionen haben und nicht gestreckt aussehen. Lassen Sie uns die Werte erklären, die wir oben einstellen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr von der Szene wird die Kamera zeigen. Stellen Sie sich eine normale Kamerasicht im Gegensatz zu einem Fischaugeneffekt vor, der viel mehr sehen lässt. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters eingestellt, so dass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis einstellen – zum Beispiel 16 ⁄ 9, das das Seitenverhältnis eines Breitbildfernsehers ist. Der Standardwert ist 1.
- Die `z`-Position, mit einem Wert von 50 Einheiten, ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene gesehen werden können. 50 fühlt sich genau richtig an. Es ist nicht zu nah oder zu weit, und die Größen der Objekte ermöglichen es ihnen, sich innerhalb des gegebenen Sichtfeldes in der Szene aufzuhalten. Die `x`- und `y`-Werte werden, falls nicht angegeben, standardmäßig auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie die Sicht in der Szene verändern.
Die Entfernungswerte (z.B. für die Kamera-z-Position) sind einheitslos und können alles sein, was Sie für Ihre Szene als geeignet erachten: Millimeter, Meter, Füße oder Meilen. Es liegt bei Ihnen.

## Rendering der Szene

Alles ist bereit, aber wir können noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir noch alles rendern. Unsere `render()`-Funktion übernimmt diese Aufgabe, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), was bewirkt, dass die Szene bei jedem Frame ständig neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie das erste Mal auf, um die Schleife zu starten, nach der sie unendlich oft genutzt wird.

Fügen Sie erneut diesen neuen Code unter Ihren vorherigen Hinzufügungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten nun ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Da unsere Szene nun korrekt rendert, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe von vordefinierten Primitiven, die Sie verwenden können, um Formen sofort mit nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Details wie das Zeichnen der benötigten Scheitelpunkte und Flächen für eine gegebene Form werden vom Three-Framework gehandhabt, sodass wir uns auf höherstufiges Codieren konzentrieren können. Lassen Sie uns mit der Definition der Geometrie eines Würfels beginnen, indem wir folgendes direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel mit den Abmessungen 10 x 10 x 10 Einheiten. Die Geometrie allein ist jedoch nicht ausreichend, wir benötigen außerdem ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt mehrere vordefinierte Materialien, die verwendet werden können: Basic, Phong, Lambert. Später werden wir mit den letzten beiden spielen, aber vorerst sollte das Basic-Material ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dieses nimmt eine Form und fügt das angegebene Material jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie erneut diese Zeile unter die hinzu, die Sie zuvor hinzugefügt haben.

## Hinzufügen des Würfels zur Szene

Wir haben nun einen Würfel erstellt, indem wir die zuvor definierten Geometrien und Materialien verwendet haben. Das letzte, was zu tun bleibt, ist, den Würfel in unsere Szene zu platzieren. Fügen Sie diese Zeile unter die vorherige hinzu:

```js
scene.add(cube);
```

Wenn Sie nun speichern und Ihren Webbrowser aktualisieren, wird unser Objekt wie ein Quadrat aussehen, da es zur Kamera zeigt. Das Gute an Objekten ist jedoch, dass wir sie in der Szene beliebig bewegen können. Zum Beispiel durch Drehen und Skalieren, wie wir möchten. Lassen Sie uns dem Würfel eine kleine Drehung verleihen, damit mehr als eine Fläche sichtbar wird. Fügen Sie erneut unseren Code unter den vorherigen hinzu:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js Form-Beispiel

Wenn Sie allem bisher ohne Probleme gefolgt sind, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit Three.js erstellt!
Es war einfacher als gedacht, oder?
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

## Weitere Formen und Materialien

Jetzt werden wir weitere Formen zur Szene hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Bewegen wir den Würfel nach links, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen hinzu:

```js
cube.position.x = -25;
```

Nun zu weiteren Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der im Phong-Material eingehüllt ist? Versuchen Sie, die folgenden Zeilen hinzuzufügen, direkt unter den Zeilen, die den Würfel definieren.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Diese Zeilen fügen eine Torus-Geometrie hinzu; die Parameter der `TorusGeometry()`-Methode definieren und die Parameter sind `radius`, `Rohrradius`, `radialer Segmentanzahl` und `tubularer Segmentanzahl`. Das Phong-Material sollte glänzender aussehen als das einfache Basic-Material des Box, obwohl unser Torus momentan einfach schwarz aussehen wird. Eine Drehung verleiht dem Torus eine anfängliche Tiefe, sodass er nicht flach aussieht.

Wir können mehr Spaß mit vordefinierten Formen haben. Lassen Sie uns weiter spielen. Fügen Sie die folgenden Zeilen unter denen hinzu, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Dieses Mal erstellen wir ein Dodekaeder, eine Form mit zwölf flachen Flächen. Der Parameter von `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, das ähnlich wie Phong ist, aber weniger glänzend sein sollte. Wieder ist es momentan schwarz. Wir verschieben das Objekt nach rechts, sodass es nicht an derselben Position wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit einfach schwarz aus. Um sowohl das Phong- als auch das Lambert-Material sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen in Three.js. Die grundlegendste ist `PointLight`, die wie eine Taschenlampe funktioniert und in eine definierte Richtung strahlt. Fügen Sie die folgenden Zeilen unter Ihren Formdefinitionen hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen weißen Lichtpunkt, setzen seine Position ein wenig vom Zentrum der Szene entfernt, sodass er einige Teile der Formen beleuchtet, und fügen ihn schließlich der Szene hinzu. Jetzt funktioniert alles wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichttypen wie Ambient, Directional, Hemisphere oder Spot überprüfen. Experimentieren Sie mit ihrer Platzierung auf unserer Szene, um zu sehen, wie sie diese beeinflussen.

Dies ist ein guter Fortschritt, aber wir können es spannender gestalten! In einem Spiel passiert normalerweise etwas. Wir könnten Animationen und dergleichen sehen. Lassen Sie uns also versuchen, diesen Formen Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits Rotation verwendet, um die Position des Würfels anzupassen. Wir können die Formen auch skalieren oder ihre Positionen ändern. Um Animationen zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, sodass sie bei jedem Frame aktualisiert werden.

### Rotation

Drehen ist einfach. Sie fügen bei jedem Frame einen Wert zu einer bestimmten Rotationsrichtung hinzu. Fügen Sie diese Codezeile direkt nach der `requestAnimationFrame()`-Aufruf in der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dieser rotiert den Würfel bei jedem Frame ein wenig, sodass die Animation glatt aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Mit einem konstanten Wert würde es nur einmal wachsen oder schrumpfen. Lassen Sie uns die Sache interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t`, um die verstrichene Zeit zu zählen. Fügen Sie sie direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert bei jedem Frame der Animation um einen gegebenen konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt unter der `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, was ein ziemlich interessantes Ergebnis liefert. Dieses skaliert den Torus und wiederholt den Prozess, da `sin` eine periodische Funktion ist. Wir umgeben den Skalierungswert mit `Math.abs`, um nur absolute Werte größer oder gleich 0 zu übergeben. Da sin zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht es die Hälfte der Zeit schwarz aus.

### Bewegung

Neben Drehung und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie das folgende direkt unter unserer `requestAnimationFrame()`-Aufruf hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dieses bewegt das Dodekaeder auf jeder Achse der y-Achse auf und ab, indem der `sin()`-Wert jeder Achse auf jeden Frame angewendet wird, und eine kleine Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Three.js-Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
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

Nun kennen Sie die Grundlagen von Three.js; viel Spaß beim Experimentieren!
Sie können die Dokumentation [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) weiter lesen, wenn Sie mehr erfahren möchten.
Sie könnten auch versuchen, WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert.
Siehe unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) für weitere Informationen.
