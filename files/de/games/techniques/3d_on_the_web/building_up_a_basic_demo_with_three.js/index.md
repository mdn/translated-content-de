---
title: Erstellen einer grundlegenden Demo mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält Standardobjekte wie Formen, die in einem Koordinatensystem positioniert sind, eine Kamera, um sie tatsächlich zu sehen, Lichter und Materialien, um sie besser aussehen zu lassen, Animationen, die sie lebendig wirken lassen, usw. **Three.js**, wie jede andere 3D-Bibliothek, bietet integrierte Hilfsfunktionen, die Ihnen helfen, die gängige 3D-Funktionalität schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Schritte zur Verwendung von Three, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML, der fundamentalen Objekte von Three und wie man eine grundlegende Demo erstellt.

> [!NOTE]
> Wir haben Three gewählt, weil es eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API) Bibliotheken ist und es einfach ist, damit zu beginnen. Wir wollen nicht behaupten, dass es besser ist als jede andere verfügbare WebGL-Bibliothek, und Sie sollten sich frei fühlen, eine andere Bibliothek wie [CopperLicht](https://www.ambiera.com/copperlicht/index.html) oder [PlayCanvas](https://playcanvas.com/) auszuprobieren.

## Einrichtung der Umgebung

Um mit Three.js zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden, wie den neuesten Firefox oder Chrome.

Sie können die [aktuellste Three.js Bibliothek](https://codeload.github.com/mrdoob/three.js/zip/refs/heads/master) herunterladen und die minimierte Version von Three.js aus dem ungepackten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren. Beachten Sie, dass die Archive Quelldateien enthalten, was die Downloadgröße auf ungefähr 350MB erhöht.

Alternativ können Sie Three.js [über ein CDN oder mit Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation). Eine Node.js-Installation mit Three.js als Abhängigkeit ist praktisch, wenn Sie Versionen verfolgen möchten und es kann die Zusammenarbeit und den Einsatz beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Egal, wie Sie beginnen, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) griffbereit haben, während Sie daran arbeiten.

## HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Three.js demo</title>
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

Sie enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}} und ein wenig CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements, das Three.js auf der Seite einfügen wird, auf 100% zu setzen, um den gesamten verfügbaren Anzeigebereich auszufüllen. Das erste {{htmlelement("script")}}-Element bindet die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es gibt bereits zwei Hilfsvariablen, die die `width` und `height` des Fensters speichern.

Bevor Sie weiter lesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie im Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders als die CSS-Variante funktioniert. Trotz der verschiedenen Ansätze sieht die Erfahrung für den Benutzer gleich aus. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Wir erstellen einen neuen WebGL-Renderer, setzen seine Größe auf den gesamten verfügbaren Platz auf dem Bildschirm und fügen die DOM-Struktur der Seite hinzu. Vielleicht haben Sie den `antialias`-Parameter in der ersten Zeile bemerkt – dieser rendert die Kanten von Formen glatter. Die `setClearColor()`-Methode setzt unseren Hintergrund auf eine hellgraue Farbe anstelle des standardmäßigen schwarzen.

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen neuer Objekte in der Demo fügen wir alle in die Szene ein, um auf dem Bildschirm sichtbar zu werden. In three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns diese erstellen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen noch eine Kamera hinzufügen, um unsere Arbeit zu betrachten – stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen platzieren die Kamera im 3D-Koordinatensystem und richten sie auf unsere Szene aus, damit wir endlich etwas sehen können:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu, unter den zuvor hinzugefügten.

Es gibt andere verfügbare Kameratypen (Cube, Orthographic), aber die einfachste ist die Perspective. Um sie zu initialisieren, müssen wir das Sichtfeld und das Seitenverhältnis festlegen: Ersteres wird verwendet, um festzulegen, wie viel gesehen wird, und Letzteres ist wichtig, damit die Objekte auf dem Bildschirm beim Rendern die richtigen Proportionen haben und nicht gestreckt aussehen. Lassen Sie uns die Werte erläutern, die wir für den obigen Code festlegen:

- Der Wert, den wir für das Sichtfeld setzen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr von der Szene zeigt die Kamera. Stellen Sie sich eine normale Kamerasicht vor, im Vergleich zu einem Fischeye-Effekt, der viel mehr sehen lässt. Der Standardwert ist 50.
- Das Seitenverhältnis ist auf die aktuelle Breite und Höhe des Fensters eingestellt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis festlegen – zum Beispiel 16 ⁄ 9, das Seitenverhältnis eines Breitbild-TVs. Der Standardwert ist 1.
- Die `z`-Position, mit dem Wert von 50 Einheiten, ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene betrachtet werden können. 50 fühlt sich etwa richtig an. Es ist nicht zu nah, oder zu weit, und die Größen der Objekte erlauben ihnen, auf der Szene zu bleiben, innerhalb des gegebenen Sichtfelds. Die `x`- und `y`-Werte werden, wenn nicht angegeben, zu 0 standardmäßig gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie das beeinflussen, was Sie in der Szene sehen.

> [!NOTE]
> Die Abstandsangaben (z.B. für die Kamera-z-Position) sind einheitenlos und können für Ihre Szene alles sein, was Sie für geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt an Ihnen.

## Rendering der Szene

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir dennoch alles rendern. Unsere `render()`-Funktion übernimmt diese Aufgabe, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), das bewirkt, dass die Szene ständig bei jedem Frame neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie das erste Mal auf, um die Schleife zu starten, danach wird sie unbegrenzt verwendet.

Fügen Sie diesen neuen Code wieder unter Ihre vorherigen Ergänzungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, wo unsere Szene richtig gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vorgefertigter Primitiven, die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Details wie das Zeichnen notwendiger Vertices und Flächen für eine gegebene Form werden vom Three-Framework behandelt, sodass wir uns auf die Programmierung auf höherer Ebene konzentrieren können. Beginnen wir mit der Definition der Geometrie für einen Würfel, indem wir das Folgende direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten groß ist. Die Geometrie allein reicht jedoch nicht aus, wir brauchen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt überzieht, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt eine Reihe von vordefinierten Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den letzten beiden experimentieren, aber für jetzt sollte das Basic ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

Fügen Sie diese Zeile unter den bereits hinzugefügten ein.

Unser Material ist jetzt bereit, was kommt als nächstes?

## Mesh

Um das Material auf eine Geometrie zu übertragen, wird ein Mesh verwendet. Dies nimmt eine Form an und fügt das angegebene Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie diese Zeile wieder unter die vorher hinzugefügte ein.

## Hinzufügen des Würfels zur Szene

Wir haben nun einen Würfel erstellt, mit der vorher definierten Geometrie und Material. Das Letzte, was zu tun ist, ist den Würfel in unsere Szene zu platzieren. Fügen Sie diese Zeile unter die vorherige ein:

```js
scene.add(cube);
```

Wenn Sie speichern und Ihren Webbrowser aktualisieren, sieht unser Objekt jetzt wie ein Quadrat aus, weil es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene bewegen können, wie wir wollen. Zum Beispiel können wir sie drehen und skalieren. Lassen Sie uns eine kleine Rotation auf den Würfel anwenden, damit wir mehr als eine Fläche sehen können. Fügen Sie unseren Code wieder unter die vorherigen ein:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Herzlichen Glückwunsch, Sie haben ein Objekt in einer 3D-Umgebung erstellt! War das vielleicht einfacher, als Sie zunächst dachten? So sollte es aussehen:

![Blauer Würfel auf grauem Hintergrund, gerendert mit Three.js.](cube.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## Mehr Formen und Materialien

Jetzt fügen wir der Szene weitere Formen hinzu und erkunden andere Formen, Materialien, Beleuchtung und mehr. Verschieben wir den Würfel nach links, um Platz für einige Freunde zu machen. Fügen Sie die folgende Zeile direkt unter der vorherigen ein:

```js
cube.position.x = -25;
```

Nun zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der mit dem Phong-Material umwickelt ist? Versuchen Sie, die folgenden Zeilen direkt unter den Linien, die den Würfel definieren, hinzuzufügen.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```

Diese Zeilen fügen eine Torusgeometrie hinzu; die Parameter der `TorusGeometry()`-Methode definieren, und die Parameter sind `Radius`, `Rohrdurchmesser`, `radialer Segmentanzahl` und `tubulärer Segmentanzahl`. Das Phong-Material sollte glänzender als das einfache Basic-Material der Box aussehen, obwohl unser Torus im Moment schwarz aussehen wird.

Wir können mehr lustige vordefinierte Formen wählen. Lasst uns noch ein bisschen mehr spielen. Fügen Sie die folgenden Zeilen unter denjenigen hinzu, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Diesmal erstellen wir einen Dodekaeder, eine Form mit zwölf flachen Flächen. Der Parameter `DodecahedronGeometry()` definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, das Phong ähnlich ist, aber weniger glänzend sein sollte. Wieder ist es momentan schwarz. Wir verschieben das Objekt nach rechts, damit es nicht an derselben Position wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit nur schwarz aus. Um sowohl Phong- als auch Lambert-Materialien richtig sichtbar zu machen, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Arten von Lichtquellen in Three.js. Das einfachste ist `PointLight`, das wie eine Taschenlampe funktioniert und einen Lichtstrahl in eine definierte Richtung lenkt. Fügen Sie die folgenden Zeilen unter Ihren Formdefinitionen hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen weißen Lichtpunkt, setzen seine Position etwas vom Zentrum der Szene weg, damit er einige Teile der Formen beleuchten kann, und fügen ihn dann der Szene hinzu. Jetzt funktioniert alles wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Lichttypen lesen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie damit, sie Ihrer Szene hinzuzufügen, um zu sehen, wie sie diese beeinflussen.

![Formen: blauer Würfel, dunkelgelber Torus und dunkelgrauer Dodekaeder auf grauem Hintergrund, gerendert mit Three.js.](shapes.png)

Das sieht jedoch ein wenig langweilig aus. In einem Spiel passiert normalerweise etwas. Wir könnten Animationen und dergleichen sehen. Also lassen Sie uns versuchen, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits die Rotation verwendet, um die Position des Würfels anzupassen. Wir können die Formen auch skalieren oder ihre Positionen ändern. Um Animationen zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, damit sie bei jedem Frame aktualisiert werden.

### Drehung

Das Drehen ist unkompliziert. Sie fügen bei jedem Frame einen Wert in eine gegebene Drehrichtung hinzu. Fügen Sie diese Codezeile direkt nach dem `requestAnimationFrame()`-Aufruf in der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel bei jedem Frame um ein kleines Stück, sodass die Animation reibungslos aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Wenn wir einen konstanten Wert anwenden, würden wir es einmalig wachsen oder schrumpfen lassen. Lassen Sie uns die Sache interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t` zum Zählen der verstrichenen Zeit. Fügen Sie diese direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Jetzt erhöhen wir den Wert bei jedem Frame der Animation um einen gegebenen konstanten Wert. Fügen Sie die folgenden Zeilen direkt nach dem `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin` und erzielen damit ein ziemlich interessantes Ergebnis. Dies skaliert den Torus, wobei der Prozess wiederholt wird, da `sin` eine periodische Funktion ist. Wir umwickeln den Skalierungswert in `Math.abs`, um die absoluten Werte, die größer oder gleich 0 sind, zu übergeben. Da `sin` zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht er die Hälfte der Zeit schwarz aus.

Nun, zum Bewegen.

### Bewegung

Neben der Rotation und Skalierung können wir Objekte zusätzlich in der Szene bewegen. Fügen Sie das folgende, erneut direkt unter unserem `requestAnimationFrame()`-Aufruf hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird den Dodekaeder auf- und abwärts bewegen, indem es bei jedem Frame den `sin()`-Wert auf die y-Achse anwendet und ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Fazit

Hier ist der endgültige Code:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie lokal damit spielen möchten. Jetzt verstehen Sie die Grundlagen von Three.js, und Sie können zur übergeordneten Seite [3D im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.

Vielleicht möchten Sie auch rohes WebGL lernen, um ein besseres Verständnis davon zu bekommen, was im Hintergrund passiert. Sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) an.
