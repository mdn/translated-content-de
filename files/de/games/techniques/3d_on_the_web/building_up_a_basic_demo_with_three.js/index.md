---
title: Ein einfaches Demo mit Three.js erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: d7143e171b5f18fb37a686a7d4947db417fd74f3
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel — selbst die einfachste — enthält Standardobjekte wie Formen, die sich in einem Koordinatensystem befinden, eine Kamera, um sie tatsächlich zu sehen, Lichter und Materialien, um sie besser aussehen zu lassen, Animationen, um sie lebendig wirken zu lassen, usw. **Three.js**, wie jede andere 3D-Bibliothek, bietet eingebaute Hilfsfunktionen, die Ihnen helfen, häufige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Grundlagen der Nutzung von Three, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML, der grundlegenden Objekte von Three und wie man ein einfaches Demo aufbauen kann.

> [!NOTE]
> Wir haben Three gewählt, weil es eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API)-Bibliotheken ist und es einfach ist, den Einstieg zu finden. Wir wollen nicht behaupten, dass es besser ist als jede andere verfügbare WebGL-Bibliothek, und Sie sollten sich frei fühlen, eine andere Bibliothek auszuprobieren, wie [CopperLicht](https://www.ambiera.com/copperlicht/index.html) oder [PlayCanvas](https://playcanvas.com/).

## Einrichtung der Umgebung

Um mit der Entwicklung mit Three.js zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie die neueste Version von Firefox oder Chrome.

Sie können die [neueste Three.js-Bibliothek](https://codeload.github.com/mrdoob/three.js/zip/refs/heads/master) herunterladen und die minimierte Version von Three.js aus dem unkomprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren. Beachten Sie, dass die Archive Quelldateien enthalten, was die Downloadgröße auf ungefähr 350MB bringt.

Alternativ können Sie Three.js [über ein CDN importieren oder Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation). Ein Node.js-Setup mit Three.js als Abhängigkeit ist praktisch, wenn Sie Versionen verfolgen möchten, und es kann die Zusammenarbeit und Bereitstellung beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Unabhängig davon, wie Sie beginnen, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) zur Hand haben, während Sie arbeiten, um Referenzen zu haben.

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

Sie enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}}, und ein wenig CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements auf 100% zu setzen, sodass Three.js es auf der Seite einfügt, um den gesamten verfügbaren Ansichtsbereich auszufüllen. Das erste {{htmlelement("script")}}-Element fügt die Three.js-Bibliothek in die Seite ein, und wir werden unseren Beispielcode im zweiten schreiben. Es gibt zwei bereits enthaltene Hilfsvariablen, die `width` und `height` des Fensters speichern.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt einige verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders funktionieren wird als die CSS-Implementierung. Trotz der Vielzahl von Möglichkeiten, die sie erreichen, wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie nicht vom Browser unterstützt wird.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Wir erstellen einen neuen WebGL-Renderer, passen seine Größe an, um den gesamten verfügbaren Platz auf dem Bildschirm auszufüllen, und fügen die DOM-Struktur der Seite hinzu. Sie haben möglicherweise den `antialias`-Parameter in der ersten Zeile bemerkt — dieser rendert die Kanten von Formen glatter. Die `setClearColor()`-Methode setzt unseren Hintergrund auf eine hellgraue Farbe, anstatt der standardmäßigen schwarzen.

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element direkt unter dem JavaScript-Kommentar ein.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Wenn wir neue Objekte im Demo erstellen, fügen wir sie alle in die Szene ein, um auf dem Bildschirm sichtbar zu werden. In Three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns es erstellen, indem wir die folgende Zeile unter unsere vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die Methode `.add()` verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen immer noch eine Kamera hinzufügen, um unsere Arbeit zu betrachten — stellen Sie sich ein Filmset ohne Kameras vor. Die folgenden Zeilen bringen die Kamera an den richtigen Platz im 3D-Koordinatensystem und richten sie in die Richtung unserer Szene aus, sodass wir endlich etwas sehen können:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen Ihrem Code hinzu, unter denen, die zuvor hinzugefügt wurden.

Es gibt andere verfügbare Kameratypen (Cube, Orthographic), aber die einfachste ist Perspective. Um sie zu initialisieren, müssen wir das Sichtfeld und das Seitenverhältnis einstellen: Ersteres wird verwendet, um festzulegen, wie viel zu sehen ist, und Letzteres ist wichtig, damit die Objekte auf dem Bildschirm die richtigen Proportionen haben und nicht verzerrt aussehen. Lassen Sie uns die Werte erklären, die wir für den obigen Code einstellen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto mehr Szene wird die Kamera zeigen. Stellen Sie sich eine normale Kameraansicht vor, im Vergleich zu einem Fischeye-Effekt, der viel mehr sehen lässt. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters gesetzt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis setzen - zum Beispiel 16 ⁄ 9, das Seitenverhältnis eines Breitbild-Fernsehers. Der Standardwert ist 1.
- Die `z`-Position mit dem Wert von 50 Einheiten ist der Abstand zwischen der Kamera und dem Zentrum der Szene auf der `z`-Achse. Hier bewegen wir die Kamera zurück, damit die Objekte in der Szene sichtbar werden. 50 scheint ungefähr richtig zu sein. Es ist nicht zu nah, oder zu weit entfernt, und die Größen der Objekte erlauben ihnen, in der Szene zu bleiben, innerhalb des gegebenen Sichtfelds. Die `x` und `y`-Werte, wenn nicht angegeben, werden standardmäßig auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie ändern, was Sie in der Szene sehen.

> [!NOTE]
> Die Abstandsangaben (z.B. für die z-Position der Kamera) sind einheitenlos und können alles sein, was Sie für Ihre Szene passend finden: Millimeter, Meter, Füße oder Meilen. Es liegt an Ihnen.

## Rendering der Szene

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir immer noch alles rendern. Unsere `render()`-Funktion wird diese Aufgabe übernehmen, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), die bewirkt, dass die Szene auf jedem Rahmen immer wieder neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

In jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie das erste Mal auf, um die Schleife zu starten, nach der sie unendlich genutzt wird.

Fügen Sie diesen neuen Code erneut unter Ihre vorherigen Ergänzungen hinzu. Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Glückwunsch!

## Geometrie

Da unsere Szene jetzt korrekt gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vordefinierter Primitiven, die Sie verwenden können, um Formen sofort mit nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Details, wie das Zeichnen benötigter Ecken und Flächen für eine gegebene Form, werden vom Three-Framework behandelt, sodass wir uns auf höherstufiges Codieren konzentrieren können. Beginnen wir, indem wir die Geometrie für eine Würfelform definieren und das Folgende direkt über die `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten groß ist. Die Geometrie allein reicht jedoch nicht aus, wir benötigen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt eine Reihe vordefinierter Materialien, die verwendet werden können: Basic, Phong, Lambert. Lass uns später mit den letzten beiden spielen, aber jetzt sollte das Basic ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

Fügen Sie diese Zeile unter der zuvor hinzugefügten ein.

Unser Material ist jetzt bereit, was kommt als Nächstes?

## Mesh

Um das Material auf eine Geometrie anzuwenden, wird ein Mesh verwendet. Dieses nimmt eine Form an und fügt jedem Gesicht das angegebene Material hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Erneut fügen Sie diese Zeile unter der vorher hinzugefügten ein.

## Den Würfel zur Szene hinzufügen

Wir haben nun einen Würfel erstellt, unter Verwendung der zuvor definierten Geometrie und des Materials. Das Letzte, was zu tun bleibt, ist, den Würfel unserer Szene hinzuzufügen. Fügen Sie diese Zeile unter der vorherigen ein:

```js
scene.add(cube);
```

Wenn Sie die Datei speichern und Ihren Webbrowser aktualisieren, wird unser Objekt jetzt wie ein Quadrat aussehen, da es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene nach Belieben bewegen können. Zum Beispiel, indem wir sie drehen und skalieren, wie wir möchten. Lassen Sie uns eine kleine Drehung auf den Würfel anwenden, damit wir mehr als eine Seite sehen können. Erneut fügen Sie unseren Code unter den vorher hinzugefügten ein:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Glückwunsch, Sie haben ein Objekt in einer 3D-Umgebung erstellt! War das vielleicht einfacher als Sie dachten? So sollte es aussehen:

![Blauer Würfel auf einem grauen Hintergrund, gerendert mit Three.js.](cube.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Sie können es auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## Mehr Formen und Materialien

Nun werden wir der Szene weitere Formen hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Lassen Sie uns den Würfel nach links verschieben, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen ein:

```js
cube.position.x = -25;
```

Nun zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, der im Phong-Material gewickelt ist? Versuchen Sie, die folgenden Zeilen direkt unter den Zeilen zu definieren:

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```

Diese Zeilen fügen eine Torus-Geometrie hinzu; die Parameter der `TorusGeometry()`-Methode definieren und die Parameter sind `Radius`, `Rohrdurchmesser`, `radiale Segmentanzahl` und `tubular Segmentanzahl`. Das Phong-Material sollte glänzender aussehen als das einfache Basic-Material der Box, obwohl unser Torus im Moment nur schwarz aussieht.

Wir können uns für lustigere, vordefinierte Formen entscheiden. Lass uns noch mehr spielen. Fügen Sie die folgenden Zeilen, unter denen die den Torus definieren, hinzu:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Dieses Mal erstellen wir ein Dodekaeder, eine Form mit zwölf flachen Flächen. Das `DodecahedronGeometry()`-Parameter definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich dem von Phong, sollte aber weniger glänzend sein. Auch hier ist es für den Moment schwarz. Wir verschieben das Objekt nach rechts, so dass es nicht an derselben Stelle wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit nur schwarz aus. Damit sowohl die Phong- als auch die Lambert-Materialien richtig sichtbar sind, müssen wir eine Lichtquelle einführen.

## Lichter

Es gibt verschiedene Lichtquellen, die in Three.js verfügbar sind. Die einfachste ist `PointLight`, die wie eine Taschenlampe funktioniert und ein Spotlight in eine bestimmte Richtung wirft. Fügen Sie die folgenden Zeilen, unter Ihren Formen-Definitionen, hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen Punkt weißes Licht, setzen seine Position ein wenig vom Zentrum der Szene weg, so dass es einige Teile der Formen beleuchten kann, und fügen es schließlich zur Szene hinzu. Jetzt funktioniert alles wie es sollte und alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Arten von Lichtern überprüfen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie, sie auf unserer Szene zu platzieren, um zu sehen, wie sie sie beeinflussen.

![Formen: blauer Würfel, dunkelgelber Torus und dunkelgraues Dodekaeder auf einem grauen Hintergrund, gerendert mit Three.js.](shapes.png)

Das sieht jedoch ein wenig langweilig aus. In einem Spiel geschieht gewöhnlich etwas. Wir könnten Animationen und dergleichen sehen. Also lasst uns versuchen, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits Rotation verwendet, um die Position des Würfels anzupassen. Wir können die Formen auch skalieren oder ihre Positionen ändern. Um Animationen zu zeigen, müssen wir Änderungen an diesen Werten innerhalb der Render-Schleife vornehmen, so dass sie mit jedem Frame aktualisiert werden.

### Rotation

Das Drehen ist einfach. Sie fügen bei jedem Frame einen Wert zu einer gegebenen Rotationsrichtung hinzu. Fügen Sie diese Codezeile direkt nach der `requestAnimationFrame()`-Aufruf innerhalb der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dadurch wird der Würfel bei jedem Frame ein wenig gedreht, sodass die Animation glatt aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Durch Anwenden eines konstanten Wertes würden wir es einmalig wachsen oder schrumpfen lassen. Machen wir die Sache interessanter. Zuerst implementieren wir eine Hilfsvariable, namens `t`, zum Zählen der verstrichenen Zeit. Fügen Sie es direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert bei jedem Frame der Animation um einen gegebenen konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt nach der `requestAnimationFrame()`-Aufruf hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin` und erhalten ein ziemlich interessantes Ergebnis. Dies skaliert den Torus, wobei der Vorgang wiederholt wird, da `sin` eine periodische Funktion ist. Wir umgeben den Skalenwert mit `Math.abs`, um die absoluten Werte zu übergeben, die größer oder gleich 0 sind. Da sin zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht es die Hälfte der Zeit schwarz aus.

Nun, zur Bewegung.

### Bewegung

Neben Rotation und Skalierung können wir Objekte zusätzlich in der Szene bewegen. Fügen Sie das Folgende erneut direkt nach unserer `requestAnimationFrame()`-Aufruf hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Das wird das Dodekaeder hoch und runter bewegen, indem bei jeder Achse der Animation der `sin()`-Wert auf die y-Achse und ein wenig Anpassung angewendet werden, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Fazit

Hier ist der endgültige Code:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) und das [Repository forkieren](https://github.com/end3r/MDN-Games-3D/), wenn Sie lokal damit herumspielen möchten. Jetzt, da Sie die Grundlagen von Three.js verstehen, können Sie auf die übergeordnete Seite [3D im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückspringen.

Sie könnten auch versuchen, Roh-WebGL zu lernen, um ein besseres Verständnis davon zu bekommen, was darunter passiert. Sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) an.
