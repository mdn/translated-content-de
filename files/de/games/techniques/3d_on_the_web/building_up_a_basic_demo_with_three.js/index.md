---
title: Aufbau eines einfachen Demos mit Three.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{GamesSidebar}}

Eine typische 3D-Szene in einem Spiel – selbst die einfachste – enthält standardmäßige Elemente wie Formen, die in einem Koordinatensystem positioniert sind, eine Kamera, um sie tatsächlich zu sehen, Lichter und Materialien, um das Erscheinungsbild zu verbessern, Animationen, um es lebendig zu machen, etc. **Three.js** bietet, wie jede andere 3D-Bibliothek auch, integrierte Hilfsfunktionen, um Ihnen zu helfen, gängige 3D-Funktionalität schneller zu implementieren. In diesem Artikel führen wir Sie durch die wirklichen Grundlagen der Verwendung von Three, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTMLs, der grundlegenden Objekte von Three und wie man ein einfaches Demo aufbaut.

> [!NOTE]
> Wir haben Three gewählt, da es eine der beliebtesten [WebGL](/de/docs/Web/API/WebGL_API)-Bibliotheken ist und der Einstieg leicht fällt. Wir wollen damit nicht behaupten, dass es besser ist als jede andere verfügbare WebGL-Bibliothek. Sie sollten sich frei fühlen, auch andere Bibliotheken, wie [CopperLicht](https://www.ambiera.com/copperlicht/index.html) oder [PlayCanvas](https://playcanvas.com/), auszuprobieren.

## Einrichtung der Entwicklungsumgebung

Um mit der Entwicklung mit Three.js zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie die neueste Version von Firefox oder Chrome.

Sie können die [neueste Three.js-Bibliothek](https://codeload.github.com/mrdoob/three.js/zip/refs/heads/master) herunterladen und die minimierte Version von Three.js aus dem nicht komprimierten Archiv unter `build/three.module.min.js` in Ihr Projekt kopieren. Beachten Sie, dass die Archive Quelldateien enthalten, was die Downloadgröße auf etwa 350 MB bringt.

Alternativ können Sie Three.js [über ein CDN importieren oder Node.js verwenden](https://threejs.org/docs/#manual/en/introduction/Installation). Eine Node.js-Einrichtung mit Three.js als Abhängigkeit ist praktisch, wenn Sie Versionen verfolgen möchten, und sie kann die Zusammenarbeit und den Einsatz beschleunigen:

```bash
npm install --save three
npm install --save-dev vite # For development
npx vite
```

Egal, wie Sie beginnen, stellen Sie sicher, dass Sie die [Three.js-Dokumentation](https://threejs.org/docs/) zur Hand haben, während Sie arbeiten.

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

Es enthält einige Basisinformationen wie das Dokumenten-{{htmlelement("title")}}, und etwas CSS, um die `width` und `height` des {{htmlelement("canvas")}}-Elements, das Three.js auf der Seite einfügen wird, auf 100% zu setzen, um den gesamten verfügbaren Anzeigebereich auszufüllen. Das erste {{htmlelement("script")}}-Element bindet die Three.js-Bibliothek auf der Seite ein und wir werden unseren Beispielcode im zweiten schreiben. Es gibt zwei Hilfsvariablen, die bereits enthalten sind und die Breite und Höhe des Fensters speichern.

Kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`, bevor Sie weiterlesen.

## Renderer

Ein Renderer ist ein Werkzeug, das Szenen direkt in Ihrem Browser anzeigt. Es gibt ein paar verschiedene Renderer: WebGL ist der Standard, und andere, die Sie verwenden können, sind Canvas, SVG, CSS und DOM. Sie unterscheiden sich darin, wie alles gerendert wird, sodass die WebGL-Implementierung anders implementiert wird als die von CSS. Trotz der Vielzahl der Möglichkeiten, das Ziel zu erreichen, wird die Erfahrung für den Benutzer gleich aussehen. Dank dieses Ansatzes kann ein Fallback verwendet werden, wenn eine gewünschte Technologie vom Browser nicht unterstützt wird.

```js
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xdddddd, 1);
document.body.appendChild(renderer.domElement);
```

Wir erstellen einen neuen WebGL-Renderer, setzen dessen Größe auf die gesamte verfügbare Bildschirmfläche und hängen die DOM-Struktur an die Seite an. Ihnen ist vielleicht der `antialias`-Parameter in der ersten Zeile aufgefallen – dieser rendert die Ränder der Formen glatter. Die `setClearColor()`-Methode setzt unseren Hintergrund auf eine hellgraue Farbe, statt auf den standardmäßig schwarzen Hintergrund.

Fügen Sie diesen Code in unser zweites {{htmlelement("script")}}-Element ein, direkt unter dem JavaScript-Kommentar.

## Szene

Eine Szene ist der Ort, an dem alles passiert. Wenn neue Objekte im Demo erstellt werden, fügen wir sie alle in die Szene ein, damit sie auf dem Bildschirm sichtbar werden. In Three.js wird die Szene durch ein `Scene`-Objekt dargestellt. Lassen Sie uns dies erstellen, indem wir die folgende Zeile unter unseren vorherigen Zeilen hinzufügen:

```js
const scene = new THREE.Scene();
```

Später werden wir die `.add()`-Methode verwenden, um Objekte zu dieser Szene hinzuzufügen.

## Kamera

Wir haben die gerenderte Szene, aber wir müssen noch eine Kamera hinzufügen, um unser Werk zu betrachten – stellen Sie sich einen Filmset ohne Kameras vor. Die folgenden Zeilen positionieren die Kamera im 3D-Koordinatensystem und richten sie in Richtung unserer Szene aus, damit wir endlich etwas sehen können:

```js
const camera = new THREE.PerspectiveCamera(70, WIDTH / HEIGHT);
camera.position.z = 50;
scene.add(camera);
```

Fügen Sie die obigen Zeilen zu Ihrem Code hinzu, unter denen, die Sie zuvor hinzugefügt haben.

Es gibt andere Arten von Kameras (Cube, Orthographic), aber die einfachste ist die Perspektive. Um sie zu initialisieren, müssen wir ihr Sichtfeld und ihr Seitenverhältnis festlegen: Das erstere wird verwendet, um festzulegen, wie viel gesehen wird, und das letztere ist wichtig, damit die Objekte auf dem Bildschirm beim Rendern die richtigen Proportionen haben und nicht gestreckt aussehen. Lassen Sie uns die Werte erklären, die wir für den obigen Code festlegen:

- Der Wert, den wir für das Sichtfeld festlegen, 70, ist etwas, mit dem wir experimentieren können: Je höher der Wert, desto größer der Bereich der Szene, den die Kamera zeigt. Stellen Sie sich einen normalen Kamerablick vor, im Vergleich zu einem Fisheye-Effekt, der es ermöglicht, viel mehr zu sehen. Der Standardwert ist 50.
- Das Seitenverhältnis wird auf die aktuelle Breite und Höhe des Fensters gesetzt, sodass es dynamisch angepasst wird. Wir könnten ein festes Verhältnis setzen – zum Beispiel 16 ⁄ 9, das ist das Seitenverhältnis eines Breitbildfernsehers. Der Standardwert ist 1.
- Die `z`-Position mit dem Wert von 50 Einheiten ist der Abstand zwischen der Kamera und dem Mittelpunkt der Szene auf der `z`-Achse. Hier ziehen wir die Kamera zurück, damit die Objekte in der Szene sichtbar sind. 50 fühlt sich richtig an. Es ist weder zu nah noch zu weit, und die Größen der Objekte erlauben es ihnen, in der Szene zu bleiben, im gegebenen Sichtfeld. Die `x`- und `y`-Werte, wenn sie nicht angegeben sind, werden standardmäßig auf 0 gesetzt.

Sie sollten mit diesen Werten experimentieren und sehen, wie sie beeinflussen, was Sie in der Szene sehen.

> [!NOTE]
> Die Abstandsangaben (z.B. für die Kamera-z-Position) sind einheitenlos und können alles sein, was Sie für Ihre Szene für geeignet halten: Millimeter, Meter, Fuß oder Meilen. Es liegt an Ihnen.

## Rendering der Szene

Alles ist bereit, aber wir können immer noch nichts sehen. Obwohl wir den Renderer eingerichtet haben, müssen wir immer noch alles rendern. Unsere `render()`-Funktion wird diese Aufgabe übernehmen, mit ein wenig Hilfe von [`requestAnimationFrame()`](/de/docs/Web/API/Window/requestAnimationFrame), was bewirkt, dass die Szene ständig in jedem Frame neu gerendert wird:

```js
function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}
render();
```

Bei jedem neuen Frame wird die `render`-Funktion aufgerufen, und der `renderer` rendert die `scene` und die `camera`. Direkt nach der Funktionsdeklaration rufen wir sie zum ersten Mal auf, um die Schleife zu starten, danach wird sie unbegrenzt verwendet.

Fügen Sie diesen neuen Code unter Ihren vorherigen Hinzufügungen hinzu. Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu öffnen. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt wird unsere Szene richtig gerendert und wir können beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Three.js eine Reihe vorgefertigter primitiver Formen, die Sie in einer einzigen Codezeile nutzen können, um Formen sofort zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Details wie das Zeichnen der erforderlichen Scheitelpunkte und Flächen für eine gegebene Form werden vom Three-Framework behandelt, sodass wir uns auf das Codieren auf höherer Ebene konzentrieren können. Beginnen wir, indem wir die Geometrie für eine Würfelform definieren, indem wir das Folgende direkt über der `render()`-Funktion hinzufügen:

```js
const boxGeometry = new THREE.BoxGeometry(10, 10, 10);
```

In diesem Fall definieren wir einen einfachen Würfel, der 10 x 10 x 10 Einheiten groß ist. Die Geometrie allein reicht jedoch nicht aus, wir brauchen auch ein Material, das für unsere Form verwendet wird.

## Material

Ein Material ist das, was ein Objekt bedeckt, die Farben oder Texturen auf seiner Oberfläche. In unserem Fall wählen wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt eine Reihe von vordefinierten Materialien, die verwendet werden können: Basic, Phong, Lambert. Lassen Sie uns später mit den letzten beiden spielen, aber für jetzt sollte das Basis-Material ausreichen:

```js
const basicMaterial = new THREE.MeshBasicMaterial({ color: 0x0095dd });
```

Fügen Sie diese Zeile unter der zuvor hinzugefügten ein.

Unser Material ist nun bereit, was kommt als nächstes?

## Masche

Um das Material auf eine Geometrie anzuwenden, wird eine Masche verwendet. Diese übernimmt eine Form und fügt das spezifizierte Material zu jeder Fläche hinzu:

```js
const cube = new THREE.Mesh(boxGeometry, basicMaterial);
```

Fügen Sie diese Zeile erneut unter der zuvor hinzugefügten ein.

## Hinzufügen des Würfels zur Szene

Wir haben jetzt einen Würfel erstellt, unter Verwendung der zuvor definierten Geometrie und des Materials. Das Letzte, was zu tun ist, ist den Würfel zu unserer Szene hinzuzufügen. Fügen Sie diese Zeile unter der vorherigen ein:

```js
scene.add(cube);
```

Wenn Sie die Datei speichern und Ihren Webbrowser aktualisieren, sieht unser Objekt jetzt wie ein Quadrat aus, weil es zur Kamera hin ausgerichtet ist. Das Gute an Objekten ist, dass wir sie in der Szene verschieben können, wie wir möchten. Zum Beispiel in der Rotation und Skalierung, wie es uns gefällt. Lassen Sie uns eine kleine Rotation auf den Würfel anwenden, damit wir mehr als eine Fläche sehen. Erneut, fügen Sie unseren Code unter dem vorherigen hinzu:

```js
cube.rotation.set(0.4, 0.2, 0);
```

Herzlichen Glückwunsch, Sie haben ein Objekt in einer 3D-Umgebung erstellt! War es vielleicht einfacher als Sie dachten? So sollte es aussehen:

![Blauer Würfel auf einem grauen Hintergrund, gerendert mit Three.js.](cube.png)

Und hier ist der bisher erstellte Code:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/bwup75fa/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/cube.html).

## Mehr Formen und Materialien

Jetzt werden wir der Szene weitere Formen hinzufügen und andere Formen, Materialien, Beleuchtung und mehr erkunden. Verschieben wir den Würfel nach links, um Platz für einige Freunde zu schaffen. Fügen Sie die folgende Zeile direkt unter der vorherigen hinzu:

```js
cube.position.x = -25;
```

Nun zu mehr Formen und Materialien. Was könnte passieren, wenn Sie einen Torus hinzufügen, eingewickelt im Phong-Material? Versuchen Sie, die folgenden Zeilen direkt unter den Zeilen, die den Würfel definieren, hinzuzufügen.

```js
const torusGeometry = new THREE.TorusGeometry(7, 1, 6, 12);
const phongMaterial = new THREE.MeshPhongMaterial({ color: 0xff9500 });
const torus = new THREE.Mesh(torusGeometry, phongMaterial);
scene.add(torus);
```

Diese Zeilen werden eine Torus-Geometrie hinzufügen; die `TorusGeometry()`-Methode definiert die Parameter, und die Parameter sind `Radius`, `Rohrdurchmesser`, `radiale Segmentanzahl` und `tubulare Segmentanzahl`. Das Phong-Material sollte glänzender aussehen als das einfache Basic-Material der Box, jedoch wird unser Torus momentan nur schwarz aussehen.

Wir können mehr Spaß mit vorgefertigten Formen haben. Lassen Sie uns weiter spielen. Fügen Sie die folgenden Zeilen unten denen hinzu, die den Torus definieren:

```js
const dodecahedronGeometry = new THREE.DodecahedronGeometry(7);
const lambertMaterial = new THREE.MeshLambertMaterial({ color: 0xeaeff2 });
const dodecahedron = new THREE.Mesh(dodecahedronGeometry, lambertMaterial);
dodecahedron.position.x = 25;
scene.add(dodecahedron);
```

Dieses Mal erstellen wir ein Dodekaeder, eine Form mit zwölf flachen Flächen. Der `DodecahedronGeometry()`-Parameter definiert die Größe des Objekts. Wir verwenden ein Lambert-Material, ähnlich wie Phong, aber es sollte weniger glänzend sein. Wieder ist es momentan schwarz. Wir verschieben das Objekt nach rechts, sodass es nicht an der gleichen Position wie die Box oder der Torus ist.

Wie oben erwähnt, sehen die neuen Objekte derzeit nur schwarz aus. Damit sowohl die Phong- als auch die Lambert-Materialien richtig sichtbar sind, müssen wir eine Lichtquelle einführen.

## Lichter

Es stehen verschiedene Arten von Lichtquellen in Three.js zur Verfügung. Die einfachste ist `PointLight`, die wie eine Taschenlampe funktioniert und einen Lichtpunkt in eine definierte Richtung ausstrahlt. Fügen Sie die folgenden Zeilen unter Ihren Formdefinitionen hinzu:

```js
const light = new THREE.PointLight(0xffffff);
light.position.set(-10, 15, 50);
scene.add(light);
```

Wir definieren einen weißen Lichtpunkt, setzen seine Position ein wenig weg vom Mittelpunkt der Szene, damit er einige Teile der Formen ausleuchten kann, und fügen ihn schließlich der Szene hinzu. Jetzt funktioniert alles, wie es sollte, alle drei Formen sind sichtbar. Sie sollten die Dokumentation für andere Arten von Lichtern überprüfen, wie Ambient, Directional, Hemisphere oder Spot. Experimentieren Sie, indem Sie sie in unserer Szene platzieren, um zu sehen, wie sie sie beeinflussen.

![Formen: blauer Würfel, dunkler gelber Torus und dunkelgrauer Dodekaeder auf einem grauen Hintergrund, gerendert mit Three.js.](shapes.png)

Das sieht jedoch ein wenig langweilig aus. In einem Spiel passiert normalerweise etwas. Wir könnten Animationen und dergleichen sehen. Versuchen wir also, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren!

## Animation

Wir haben bereits Drehungen verwendet, um die Position des Würfels anzupassen. Wir können auch die Formen skalieren oder ihre Positionen ändern. Um Animation zu zeigen, müssen wir diese Werte innerhalb der Renderloop ändern, sodass sie in jedem Frame aktualisiert werden.

### Drehung

Drehen ist einfach. Sie fügen in jedem Frame einen Wert in eine gegebene Rotationsrichtung hinzu. Fügen Sie diese Codezeile direkt nach dem Aufruf von `requestAnimationFrame()` in der `render`-Funktion hinzu:

```js
cube.rotation.y += 0.01;
```

Dies dreht den Würfel in jedem Frame ein kleines bisschen, sodass die Animation glatt aussieht.

### Skalierung

Wir können auch ein Objekt skalieren. Wenn wir einen konstanten Wert anwenden, würden wir es einmalig wachsen lassen oder schrumpfen. Lassen Sie uns die Dinge interessanter machen. Zuerst implementieren wir eine Hilfsvariable namens `t` zur Zählung der vergangenen Zeit. Fügen Sie sie direkt vor der `render()`-Funktion hinzu:

```js
let t = 0;
```

Nun lassen Sie uns den Wert in jedem Frame der Animation um einen bestimmten konstanten Wert erhöhen. Fügen Sie die folgenden Zeilen direkt unter dem Aufruf von `requestAnimationFrame()` hinzu:

```js
t += 0.01;
torus.scale.y = Math.abs(Math.sin(t));
```

Wir verwenden `Math.sin`, um ein ziemlich interessantes Ergebnis zu erzielen. Dies skaliert den Torus und wiederholt den Vorgang, da `sin` eine periodische Funktion ist. Wir hüllen den Skalenwert in `Math.abs`, um die absoluten Werte weiterzugeben, die größer oder gleich 0 sind. Da sin zwischen -1 und 1 liegt, könnten negative Werte den Torus auf unerwartete Weise rendern. In diesem Fall sieht es die Hälfte der Zeit schwarz aus.

Nun, zum Thema Bewegung.

### Bewegung

Zusätzlich zur Drehung und Skalierung können wir Objekte im Raum verschieben. Fügen Sie das Folgende erneut direkt unter dem Aufruf von `requestAnimationFrame()` hinzu:

```js
dodecahedron.position.y = -7 * Math.sin(t * 2);
```

Dies wird den Dodekaeder auf- und abbewegen, indem es den `sin()`-Wert auf die y-Achse in jedem Frame anwendet, und eine kleine Anpassung vornehmen, um es cooler aussehen zu lassen. Versuchen Sie, diese Werte zu ändern, um zu sehen, wie sie die Animationen beeinflussen.

## Schlussfolgerung

Hier ist der endgültige Code:

{{JSFiddleEmbed("https://jsfiddle.net/rybr720u/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Three.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie lokal damit spielen möchten. Jetzt, da Sie die Grundlagen von Three.js verstehen, können Sie zur Elternseite zurückkehren, [3D im Web](/de/docs/Games/Techniques/3D_on_the_web).

Sie könnten auch versuchen, rohes WebGL zu lernen, um ein besseres Verständnis dafür zu bekommen, was darunter passiert. Sehen Sie sich unsere [WebGL-Dokumentation](/de/docs/Web/API/WebGL_API) an.
