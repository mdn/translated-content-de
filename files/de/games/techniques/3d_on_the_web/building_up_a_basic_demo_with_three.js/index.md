---
title: Aufbau einer einfachen Demo mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Eine typische 3D-Szene in einem Spiel - selbst die einfachste - enthält Standardobjekte wie Formen, die in einem Koordinatensystem angeordnet sind, eine Kamera, um es zu betrachten, Lichter und Materialien, um es besser aussehen zu lassen, Animationen, um es lebendig erscheinen zu lassen usw. **Three.js**, wie jede andere 3D-Bibliothek, bietet eingebaute Hilfsfunktionen, um gängige 3D-Funktionen schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Schritte der Nutzung von Three.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML, der grundlegenden Objekte von Three und wie Sie eine einfache Demo erstellen.

Three ist eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API)-Bibliotheken und es ist einfach, damit zu beginnen.
Wir sagen nicht, dass es besser als jede andere WebGL-Bibliothek ist, und Sie können gerne auch andere Bibliotheken ausprobieren.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit Three.js Version `r79`.

## Entwicklungsumgebung

Um mit der Entwicklung mit Three.js zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.

In Ihrem Code können Sie Three.js [über eine CDN oder mit Node.js](https://threejs.org/docs/#manual/en/introduction/Installation) importieren.
Wenn Sie es von einer CDN einbinden, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r79/three.min.js"></script>
```

Ein Node.js-Setup mit installiertem Three.js als Abhängigkeit ist praktisch, wenn Sie gegen spezifische Three.js-Versionen entwickeln möchten und es kann die Zusammenarbeit und Bereitstellung beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Alternativ können Sie die [neueste Three.js-Bibliothek](https://github.com/mrdoob/three.js/archive/master.zip) herunterladen und die minimierte Version von Three.js aus dem nicht komprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren. Beachten Sie, dass die Archive Quelldateien enthalten, was die Downloadgröße auf ungefähr 350MB erhöht.

Egal, welchen Weg Sie wählen, um zu beginnen, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) offen haben, während Sie arbeiten, um nachzuschlagen.

### HTML-Starter für Three.js

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, hier ist die HTML-Struktur, um loszulegen:

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

Es enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}} und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements festzulegen, das Three.js auf der Seite zu 100% einfügen wird, um den gesamten verfügbaren Ansichtsportraum auszufüllen. Das erste {{htmlelement("script")}}-Element fügt die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es gibt bereits zwei Hilfsvariablen, die die `width` und `height` des Fensters speichern.

Bevor Sie weiter lesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt ein paar verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders arbeitet als die CSS-Implementierung. Trotz der Vielfalt an Möglichkeiten, das Ziel zu erreichen, wird das Erlebnis für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird.

Der folgende Code erstellt einen neuen WebGL-Renderer, stellt seine Größe ein, um den gesamten verfügbaren Raum auf dem Bildschirm auszufüllen, und fügt die DOM-Struktur der Seite hinzu. Vielleicht ist Ihnen der `antialias`-Parameter in der ersten Zeile aufgefallen - dieser rendert die Kanten von Formen glatter. Die Methode `setClearColor()` setzt unseren Hintergrund auf eine hellgraue Farbe, anstatt der standardmäßigen schwarzen.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter den JavaScript-Kommentaren.

## Szene

Eine Szene ist der Ort, an dem alles passiert.
Wenn neue Objekte in der Demo erstellt werden, fügen wir sie alle in eine Szene ein, um sie auf dem Bildschirm sichtbar zu machen.
In Three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns es erstellen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen noch eine Kamera hinzufügen, um unser Werk zu betrachten - stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen positionieren die Kamera im 3D-Koordinatensystem und richten sie auf unsere Szene aus:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu, unter denen, die zuvor hinzugefügt wurden.

Es gibt andere verfügbare Kameratypen (Cube, Orthographic), aber die einfachste ist die Perspektivkamera. Um sie zu initialisieren, müssen wir ihr Sichtfeld und das Seitenverhältnis einstellen: Ersteres wird verwendet, um festzulegen, wie viel gesehen wird, und Letzteres ist wichtig, damit die Objekte auf dem Bildschirm die richtigen Proportionen haben, wenn sie gerendert werden, und nicht gestreckt wirken. Lassen Sie uns die Werte erklären, die wir für den obigen Code einstellen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr von der Szene wird die Kamera zeigen. Stellen Sie sich eine normale Kameraperspektive im Vergleich zu einem Fischaugen-Effekt vor, der viel mehr sehen lässt. Der Standardwert ist 50.
- Das Seitenverhältnis ist auf die aktuelle Breite und Höhe des Fensters eingestellt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis einstellen - zum Beispiel 16 ⁄ 9, was dem Seitenverhältnis eines Breitbildfernsehers entspricht. Der Standardwert ist 1.
- Die `z`-Position mit einem Wert von 50 Einheiten ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene sichtbar werden. 50 fühlt sich genau richtig an. Es ist weder zu nah noch zu weit, und die Größen der Objekte erlauben es ihnen, in der Szene zu bleiben, innerhalb des gegebenen Sichtfeldes. Die `x`- und `y`-Werte, falls nicht angegeben, werden standardmäßig auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie das, was Sie in der Szene sehen, ändern.
Die Entfernungswerte (z.B. für die Kameraposition z) sind einheitlich, und können alles sein, was Sie für Ihre Szene für geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt an Ihnen.

## Die Szene rendern

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir noch alles rendern. Unsere `render()`-Funktion wird diese Aufgabe erledigen, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), das dafür sorgt, dass die Szene konstant in jedem Frame neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die Funktion `render` aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie zum ersten Mal auf, um die Schleife zu starten, wonach sie unbegrenzt verwendet wird.

Fügen Sie diesen neuen Code erneut unter Ihre vorherigen Ergänzungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da unsere Szene ordnungsgemäß gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vorgefertigter Primitiven, die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Details wie das Zeichnen erforderlicher Eckpunkte und Flächen für eine gegebene Form werden vom Three-Framework behandelt, sodass wir uns auf das Codieren auf höherer Ebene konzentrieren können. Lassen Sie uns beginnen, indem wir die Geometrie einer Würfelform definieren, indem wir das Folgende direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten misst. Die Geometrie allein ist jedoch nicht ausreichend, wir benötigen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt eine Reihe vorgefertigter Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den beiden letzten spielen, aber für jetzt sollte das Basic-Material ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

## Mesh

Um ein Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dieses nimmt eine Form und fügt das angegebene Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Erneut fügen Sie diese Zeile unter der zuvor hinzugefügten hinzu.

## Hinzufügen des Würfels zur Szene

Wir haben nun einen Würfel erstellt, unter Verwendung der zuvor definierten Geometrie und des Materials. Das Letzte, was zu tun ist, ist, den Würfel in unserer Szene zu platzieren. Fügen Sie diese Zeile unter der vorherigen hinzu:

```js
scene.add(cube);
```

Wenn Sie speichern und Ihren Webbrowser aktualisieren, wird unser Objekt jetzt wie ein Quadrat aussehen, da es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene bewegen können, wie wir wollen. Zum Beispiel durch Drehen und Skalieren nach Belieben. Lassen Sie uns dem Würfel eine kleine Drehung geben, damit wir mehr als nur eine Fläche sehen können. Erneut ergänzen wir unseren Code unter dem vorhergehenden:

```js
cube.rotation.set(0.4, 0.2, 0);
```

## Three.js-Formenbeispiel

Wenn Sie bisher alles ohne Probleme befolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung unter Verwendung von Three.js erstellt!
Es war einfacher, als Sie dachten, richtig?
Ihr Code sollte dem folgenden Live-Beispiel ähneln.
Sie können auf "Play" klicken, um den Code im MDN Playground anzusehen und zu bearbeiten:

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

Jetzt zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, eingewickelt in das Phong-Material? Versuchen Sie, die folgenden Zeilen direkt unter den Zeilen zu definieren, die den Würfel definieren.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
torus.rotation.set(0.5, 0.5, 0);
scene.add(torus);
```

Diese Zeilen werden eine Torus-Geometrie hinzufügen; die Parameter der Methode `TorusGeometry()` definieren den `Radius`, den `Durchmesser des Rohrs`, die `Anzahl der radialen Segmente` und die `Anzahl der Rohrsegmente`. Das Phong-Material sollte glänzender als das einfache Basic-Material der Box aussehen, obwohl unser Torus jetzt nur schwarz aussieht.
Das Hinzufügen einer Drehung verleiht dem Torus eine anfängliche Tiefe, sodass er nicht flach aussieht.

Wir können mehr unterhaltsame vordefinierte Formen wählen. Lassen Sie uns ein wenig mehr spielen. Fügen Sie die folgenden Zeilen hinzu, unter denen, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Dieses Mal erstellen wir einen Dodekaeder, eine Form mit zwölf flachen Flächen. Der Parameter zu `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich wie Phong, jedoch sollte es weniger glänzend sein. Wieder ist es derzeit schwarz. Wir bewegen das Objekt nach rechts, sodass es nicht an derselben Position wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit nur schwarz aus. Um sowohl das Phong- als auch das Lambert-Material richtig sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Beleuchtung

Es gibt verschiedene Arten von Lichtquellen in Three.js. Die grundlegendste ist `PointLight`, die wie eine Taschenlampe arbeitet und einen Scheinwerfer in eine definierte Richtung lenkt. Fügen Sie die folgenden Zeilen hinzu, unterhalb Ihrer Formdefinitionen:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen weißen Lichtpunkt, legen seine Position etwas vom Zentrum der Szene entfernt, damit er einige Teile der Formen beleuchten kann, und fügen ihn schließlich der Szene hinzu. Jetzt funktioniert alles so, wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Arten von Lichtern wie Ambient, Directional, Hemisphere oder Spot überprüfen. Experimentieren Sie, diese in unserer Szene zu platzieren, um zu sehen, wie sie es beeinflussen.

Dies ist ein guter Fortschritt, aber wir können es aufregender machen! In einem Spiel passiert normalerweise etwas. Wir könnten Animationen sehen und dergleichen. Lassen Sie uns also versuchen, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits die Rotation verwendet, um die Position des Würfels anzupassen. Wir können auch die Formen skalieren oder ihre Positionen ändern. Um Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, sodass sie bei jedem Frame aktualisiert werden.

### Drehung

Die Drehung ist einfach. Sie fügen bei jedem Frame einen Wert in eine gegebene Rotationsrichtung hinzu. Fügen Sie diese Codezeile direkt nach dem `requestAnimationFrame()`-Aufruf in der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel bei jedem Frame um ein kleines Stück, sodass die Animation glatt aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Durch die Anwendung eines konstanten Wertes würden wir es nur einmal wachsen oder schrumpfen lassen. Lassen Sie uns die Dinge interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t`, um die vergangene Zeit zu zählen. Fügen Sie diese direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert bei jedem Frame der Animation um einen bestimmten konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt unter dem `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, was zu einem ziemlich interessanten Ergebnis führt. Dies skaliert den Torus, indem es den Prozess wiederholt, da `sin` eine periodische Funktion ist. Wir umgeben den Skalenwert mit `Math.abs`, um die absoluten Werte weiterzugeben, die größer oder gleich 0 sind. Da sin zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht es halb so aus, als ob es schwarz ist.

### Verschiebung

Abgesehen von der Rotation und Skalierung können wir Objekte zudem in der Szene bewegen. Fügen Sie das Folgende erneut direkt unter unserer `requestAnimationFrame()`-Invocation hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird den Dodekaeder auf und ab bewegen, indem er den `sin()`-Wert auf die y-Achse bei jedem Frame anwendet und eine kleine Anpassung vornimmt, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sich dies auf die Animationen auswirkt.

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
Sie können die [3D-Games im Web](/de/docs/Games/Techniques/3D_on_the_web)-Dokumentation weiter lesen, wenn Sie mehr erfahren möchten.
Sie könnten auch versuchen, WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert.
Sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) für weitere Informationen an.
