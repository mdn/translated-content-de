---
title: Aufbau einer grundlegenden Demo mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält Standardelemente wie Formen in einem Koordinatensystem, eine Kamera, um sie tatsächlich zu sehen, Lichter und Materialien, um das Aussehen zu verbessern, Animationen, um es lebendig zu machen, usw. **Three.js**, wie jede andere 3D-Bibliothek, bietet integrierte Hilfsfunktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Verwendung von Three, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTMLs, der grundlegenden Objekte von Three und wie man eine einfache Demo erstellt.

> [!NOTE]
> Wir haben Three gewählt, weil es eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API) Bibliotheken ist und der Einstieg leicht fällt. Wir möchten nicht sagen, dass es besser ist als andere verfügbare WebGL-Bibliotheken, und Sie können gerne eine andere Bibliothek ausprobieren, wie z.B. [CopperLicht](https://www.ambiera.com/copperlicht/index.html) oder [PlayCanvas](https://playcanvas.com/).

## Einrichtung der Umgebung

Um mit der Entwicklung mit Three.js zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie die neueste Version von Firefox oder Chrome.

Sie können die [neueste Three.js Bibliothek](https://codeload.github.com/mrdoob/three.js/zip/refs/heads/master) herunterladen und die minifizierte Version von Three.js aus dem unkomprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren.
Beachten Sie, dass die Archive Quelldateien enthalten, wodurch die Downloadgröße ungefähr 350MB beträgt.

Alternativ können Sie Three.js [über ein CDN importieren oder Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation).
Ein Node.js-Setup mit Three.js als Abhängigkeit ist praktisch, wenn Sie Versionen verfolgen möchten, und es kann die Zusammenarbeit und Bereitstellung beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # Für die Entwicklung
npx vite
```

Egal für welche Methode Sie sich entscheiden, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) zur Hand haben, während Sie arbeiten, um sie als Referenz zu verwenden.

## HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Spiele: Three.js Demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <script src="three.min.js"></script>
    <script>
      const WIDTH = window.innerWidth;
      const HEIGHT = window.innerHeight;
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

Es enthält einige grundlegende Informationen wie das Dokumenten-{{htmlelement("title")}}, und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements, das Three.js auf der Seite einfügen wird, auf 100% zu setzen, um den gesamten verfügbaren Viewport zu füllen. Das erste {{htmlelement("script")}}-Element bindet die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es gibt zwei bereits enthaltene Hilfsvariablen, die die `width` und `height` des Fensters speichern.

Bevor Sie weiter lesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders aussehen wird als die CSS-Implementierung. Ungeachtet der verschiedenen Ansätze, das Ziel zu erreichen, wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, falls eine gewünschte Technologie vom Browser nicht unterstützt wird.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Wir erstellen einen neuen WebGL-Renderer, setzen seine Größe, um den gesamten verfügbaren Platz auf dem Bildschirm zu nutzen, und fügen die DOM-Struktur auf der Seite hinzu. Sie haben möglicherweise den `antialias`-Parameter in der ersten Zeile bemerkt – dieser rendert die Kanten von Formen glatter. Die Methode `setClearColor()` setzt unseren Hintergrund auf eine hellgraue Farbe, anstatt der standardmäßig schwarzen.

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Wenn neue Objekte in der Demo erstellt werden, fügen wir sie alle innerhalb der Szene hinzu, um auf dem Bildschirm sichtbar zu werden. In three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns das erstellen, indem wir die folgende Zeile unter unseren bisherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die Methode `.add()` verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen immer noch eine Kamera hinzufügen, um unser Werk zu sehen – stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen platzieren die Kamera im 3D-Koordinatensystem und richten sie auf unsere Szene aus, damit wir endlich etwas sehen können:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen unter denen hinzu, die Sie zuvor hinzugefügt haben.

Es gibt andere Kameratypen (Cube, Orthographic), aber die einfachste ist Perspective. Um sie zu initialisieren, müssen wir ihr Sichtfeld und Seitenverhältnis festlegen: Erstere wird verwendet, um festzulegen, wie viel gesehen wird, und letztere ist wichtig, damit die Objekte auf dem Bildschirm beim Rendern die richtigen Proportionen haben und nicht gestreckt aussehen. Lassen Sie uns die Werte erklären, die wir für den obigen Code setzen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr zeigt die Kamera von der Szene. Stellen Sie sich ein normales Kamerabild vor, im Vergleich zu einem Fischaugen-Effekt, der viel mehr zeigt. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters gesetzt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis setzen – zum Beispiel 16 ⁄ 9, was dem Seitenverhältnis eines Breitbildfernsehers entspricht. Der Standardwert ist 1.
- Die `z`-Position mit dem Wert von 50 Einheiten ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. In diesem Fall bewegen wir die Kamera zurück, damit die Objekte in der Szene angezeigt werden können. 50 scheint passend. Es ist nicht zu nah oder zu weit, und die Objekte sind so groß, dass sie im gegebenen Sichtfeld auf der Szene bleiben. Die `x`- und `y`-Werte, falls nicht angegeben, werden auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie das Erscheinungsbild der Szene verändern.

> [!NOTE]
> Die Distanzwerte (z.B. für die Kamera-z-Position) sind einheitslos und können alles sein, was Sie für Ihre Szene geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt an Ihnen.

## Szene rendern

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir noch alles rendern. Unsere `render()`-Funktion erledigt diese Aufgabe mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), wodurch die Szene ständig in jedem Frame neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die Funktion `render` aufgerufen und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie zum ersten Mal auf, um die Schleife zu starten, danach wird sie unbegrenzt verwendet.

Erneut fügen Sie diesen neuen Code unter Ihren bisherigen Ergänzungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da unsere Szene richtig gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vordefinierter Primitiven, die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Einzelheiten wie das Zeichnen der erforderlichen Ecken und Flächen für eine gegebene Form werden von der Three-Bibliothek behandelt, sodass wir uns auf das Programmieren auf höherer Ebene konzentrieren können. Beginnen wir damit, die Geometrie für eine Würfelform zu definieren, indem wir die folgende Zeile direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten misst. Die Geometrie alleine ist aber nicht genug, wir brauchen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unseren Würfel zu bemalen. Es gibt eine Anzahl vordefinierter Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den letzten beiden spielen, aber vorerst sollte das Basic-Material ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

Fügen Sie diese Zeile unter der zuvor hinzugefügten hinzu.

Unser Material ist jetzt bereit, was folgt?

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dieses nimmt eine Form an und fügt das angegebene Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Erneut, fügen Sie diese Zeile unter der zuvor hinzugefügten hinzu.

## Hinzufügen des Würfels zur Szene

Wir haben jetzt einen Würfel erstellt, unter Verwendung der zuvor definierten Geometrie und des Materials. Das letzte, was zu tun ist, ist den Würfel zu unserer Szene hinzuzufügen. Fügen Sie diese Zeile unter der vorherigen hinzu:

```js
scene.add(cube);
```

Wenn Sie speichern und Ihren Webbrowser aktualisieren, sieht unser Objekt jetzt wie ein Quadrat aus, weil es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene bewegen können, wie wir es möchten. Zum Beispiel durch Rotieren und Skalieren nach Belieben. Lassen Sie uns eine kleine Rotation auf den Würfel anwenden, damit wir mehr als eine Fläche sehen können. Wiederum fügen Sie unseren Code unter der vorherigen hinzu:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Herzlichen Glückwunsch, Sie haben ein Objekt in einer 3D-Umgebung erstellt! Das war vielleicht einfacher, als Sie zuerst gedacht hatten? So sollte es aussehen:

![Blauer Würfel auf grauem Hintergrund, gerendert mit Three.js.](cube.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Sie können es auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## Weitere Formen und Materialien

Jetzt werden wir mehr Formen zur Szene hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Verschieben wir den Würfel nach links, um Platz für einige Freunde zu schaffen. Diese Zeile direkt unter der vorherigen hinzufügen:

```js
cube.position.x = -25;
```

Jetzt zu weiteren Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der in das Phong-Material gehüllt ist? Versuchen Sie, die folgenden Zeilen direkt unter den Zeilen, die den Würfel definieren, hinzuzufügen.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```

Diese Zeilen fügen eine Torusgeometrie hinzu; die Parameter der Methode `TorusGeometry()` definieren den `Radius`, den `Rohrdurchmesser`, die Anzahl der `Radialsegmente` und die `Tubularsegmente`. Das Phong-Material sollte glänzender wirken als das einfache Basic-Material der Box, allerdings wirkt unser Torus derzeit einfach nur schwarz.

Wir können weitere interessante vordefinierte Formen auswählen. Lassen Sie uns weiterspielen. Fügen Sie die folgenden Zeilen unter denen hinzu, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Diesmal erstellen wir ein Dodekaeder, eine Form mit zwölf ebenen Flächen. Der Parameter `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich wie Phong, jedoch sollte weniger glänzend sein. Wieder ist es derzeit schwarz. Wir bewegen das Objekt nach rechts, damit es sich nicht in der gleichen Position wie Box oder Torus befindet.

Wie bereits erwähnt, sehen die neuen Objekte derzeit einfach nur schwarz aus. Um sowohl das Phong- als auch das Lambert-Material richtig sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen in Three.js. Das einfachste ist `PointLight`, das wie eine Taschenlampe funktioniert und einen Lichtfleck in eine definierte Richtung strahlt. Fügen Sie die folgenden Zeilen unter den Formdefinitionen hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen weißen Lichtpunkt, setzen seine Position ein wenig entfernt vom Zentrum der Szene, damit er einige Teile der Formen beleuchten kann, und fügen ihn schließlich der Szene hinzu. Nun funktioniert alles wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichttypen wie Ambient, Directional, Hemisphere oder Spot überprüfen. Experimentieren Sie mit ihrer Platzierung auf unserer Szene, um zu sehen, wie sie sie beeinflussen.

![Formen: blauer Würfel, dunkelgelber Torus und dunkelgraues Dodekaeder auf grauem Hintergrund, gerendert mit Three.js.](shapes.png)

Dies sieht allerdings etwas langweilig aus. In einem Spiel passiert normalerweise etwas. Man könnte Animationen und ähnliches sehen. Lassen Sie uns versuchen, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits Rotation verwendet, um die Position des Würfels zu justieren. Wir können auch die Formen skalieren oder ihre Positionen ändern. Um eine Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, damit sie in jedem Frame aktualisiert werden.

### Rotation

Das Rotieren ist einfach. Sie fügen bei jedem Frame einer gegebenen Drehrichtung einen Wert hinzu. Fügen Sie diese Zeile Code direkt nach dem `requestAnimationFrame()`-Aufruf innerhalb der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel in jedem Frame ein wenig, sodass die Animation flüssig aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Indem wir einen konstanten Wert anwenden, würden wir es einmalig wachsen oder schrumpfen lassen. Lassen Sie uns die Dinge interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t`, um die verstrichene Zeit zu zählen. Fügen Sie sie direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert um einen konstanten Wert bei jedem Frame der Animation erhöhen. Fügen Sie die folgenden Zeilen direkt unter dem `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, um zu einem recht interessanten Ergebnis zu kommen. Dies skaliert den Torus und wiederholt den Vorgang, da `sin` eine periodische Funktion ist. Wir packen den Skalierungswert in `Math.abs`, um die absoluten Werte zu erhalten, die größer oder gleich 0 sind. Da `sin` zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht er die Hälfte der Zeit schwarz aus.

Jetzt gehen wir zur Bewegung über.

### Bewegung

Abgesehen von Drehung und Skalierung können wir zusätzlich Objekte innerhalb der Szene bewegen. Fügen Sie das Folgende ebenfalls direkt unter unserem `requestAnimationFrame()`-Aufruf hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird das Dodekaeder auf und ab bewegen, indem es den `sin()`-Wert bei jedem Frame entlang der y-Achse anwendet, zusammen mit ein paar Anpassungen, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Fazit

Hier ist der endgültige Code:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Sie können ihn auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie lokal damit spielen möchten. Jetzt, da Sie die Grundlagen von Three.js verstanden haben, können Sie zur übergeordneten Seite zurückkehren, [3D im Web](/de/docs/Games/Techniques/3D_on_the_web).

Sie könnten auch versuchen, reines WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert. Sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) an.
