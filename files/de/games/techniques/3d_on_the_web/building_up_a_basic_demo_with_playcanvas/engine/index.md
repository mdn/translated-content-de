---
title: Aufbau einer einfachen Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 4319d57835c493db5e4ec4c4b7b98dfba53d01eb
---

{{GamesSidebar}}

Entwickelt für moderne Browser ist **PlayCanvas** eine voll ausgestattete 3D-Spiel-Engine mit Ressourcen-Loading, einem Entitäts- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Handhabung von Steuereingaben von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen.

Wir bauen zuerst eine grundlegende Demo auf — ein Würfel wird auf dem Bildschirm gerendert. Wenn Sie bereits unseren [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) Artikel durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte besitzt: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit PlayCanvas Version `2.2.2` kompatibel.

## Entwicklungsumgebung

Um mit PlayCanvas zu beginnen, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Es ist nützlich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu haben, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neueste PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis. Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML Startvorlage für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, finden Sie hier die HTML-Struktur, um zu beginnen:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: PlayCanvas demo</title>
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
    <!--  The local copy of PlayCanvas -->
    <script src="playcanvas-latest.js"></script>
    <!--  or loaded via CDN: -->
    <!-- <script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script> -->

    <canvas id="application-canvas"></canvas>
    <script>
      const canvas = document.getElementById("application-canvas");
      /* All of our JavaScript code goes here */
    </script>
  </body>
</html>
```

Es enthält Informationen wie den Dokument-{{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}} Elements (das PlayCanvas verwenden wird) auf 100% einzustellen, sodass es den gesamten verfügbaren Ansichtsbereich ausfüllt. Das erste {{htmlelement("script")}} Element bindet die PlayCanvas-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es ist bereits eine Variable enthalten, die eine Referenz auf das {{htmlelement("canvas")}} Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (unter Verwendung des gegebenen {{htmlelement("canvas")}} Elements) und dann die Update-Schleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}} Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das globale Objekt `pc` enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als nächstes setzen wir das Canvas, damit es das Fenster ausfüllt, und passen automatisch seine Auflösung an die Größe des Canvas an. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Jetzt, da der Setup-Code bereit ist, müssen wir über die Implementierung der Standard-Szenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen Ihrem Code hinzu, unterhalb der vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`. Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie ein Kasten, Zylinder oder Kegel sein, aber es kann auch eine Kamera, eine Licht- oder Schallquelle sein.

Dann fügt es eine `camera` Komponente mit dem hellgrauen `clearColor` hinzu — die Farbe wird als Hintergrund sichtbar sein. Als Nächstes wird das `camera` Objekt zur Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten von der Mitte der Szene auf der `z` Achse entfernt ist. Dadurch schaffen wir etwas Platz, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Entfernungswerte (z.B. für die Kamera z-Position) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene für geeignet halten — Millimeter, Meter, Fuß oder Meilen — das liegt an Ihnen.

Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu laden. Sie sollten nun ein graues Fenster sehen.

## Geometrie

Jetzt, da die Szene richtig rendert, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Menge vordefinierter Primitiven, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller Formen wird von der Engine übernommen, sodass wir uns auf die Programmierung auf höherer Ebene konzentrieren können. Beginnen wir damit, die Geometrie für eine Würfelform zu definieren — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box` Modellkomponente erstellen und zur Wurzel der Anwendung, unserer Szene, hinzufügen. Wir drehen den Würfel auch etwas, um zu zeigen, dass es tatsächlich ein 3D-Würfel und kein Quadrat ist.

Der Würfel ist sichtbar, aber er ist komplett dunkel. Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind Richtungslicht und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert wird, während das zweite den Lichtschein des ersten Typs reflektiert, sodass es natürlicher aussieht; das kann global eingestellt werden. Fügen Sie erneut den neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht-`Entity` Komponente erstellen und zur Szene hinzufügen. Wir können das Licht auf der `x` Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Es ist an der Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Der Kasten sieht jetzt besser aus, könnte jedoch noch etwas Farbe bekommen, um noch besser auszusehen - dafür müssen wir Material dafür erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standardmaterial](https://api.playcanvas.com/classes/Engine.StandardMaterial.html), welches das Hauptmaterial ist, das am häufigsten für das Rendering verwendet wird. Fügen Sie die folgenden Zeilen Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch das Diffundieren des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben — wir wählen ein schönes vertrautes Blau. In PlayCanvas werden die Farbkanalwerte als Fließkommazahlen im Bereich `0-1` angegeben, anstatt als Ganzzahlen von `0-255`, wie Sie es möglicherweise gewohnt sind, im Web zu verwenden.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das Material des `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas Formbeispiel

Wenn Sie bisher alles ohne Probleme gefolgt sind, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie gedacht haben, nicht wahr? Ihr Code sollte wie das folgende Live-Beispiel aussehen. Sie können auf "Play" klicken, um den Code im MDN Playground anzuzeigen und zu bearbeiten:

```html hidden live-sample___play-canvas-intro
<canvas id="application-canvas"></canvas>
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

```js hidden live-sample___play-canvas-intro
const canvas = document.getElementById("application-canvas");

// Start and init Application
const app = new pc.Application(canvas);
app.start();
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Create camera
const camera = new pc.Entity();
camera.addComponent("camera", { clearColor: new pc.Color(0.8, 0.8, 0.8) });
app.root.addChild(camera);
camera.setPosition(0, 0, 7);

// Create cube
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);

// Create light
const light = new pc.Entity();
light.addComponent("light");
light.rotate(45, 0, 0);
app.root.addChild(light);
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

// Create cube's material
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;

window.addEventListener("resize", function () {
  app.resizeCanvas(canvas.width, canvas.height);
});
```

```css hidden live-sample___play-canvas-intro
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("play-canvas-intro", "", "400px")}}

## Mehr Formen

Jetzt werden wir der Szene mehr Formen hinzufügen. Lassen Sie uns den Würfel um 2 Einheiten nach links verschieben, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

```js
box.translate(-2, 0, 0);
```

Nun fügen wir eine neue Form hinzu — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Dies sieht sehr ähnlich wie der Code aus, den wir zum Erstellen eines Würfels verwendet haben, aber anstatt der `box` Komponente fügen wir einen `cylinder` hinzu. Es wird auch um die `x` Achse gedreht, um zu zeigen, dass es tatsächlich eine 3D-Form ist. Um dem Zylinder eine Farbe zu geben, sagen wir Gelb, müssen wir das Material dafür erstellen, wie zuvor. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt fast genauso wie beim Zylinder. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

```js
const cone = new pc.Entity();
cone.addComponent("model", { type: "cone" });
app.root.addChild(cone);
cone.translate(2, 0, 0);

const coneMaterial = new pc.StandardMaterial();
coneMaterial.diffuse.set(0.9, 0.9, 0.9);
coneMaterial.update();
cone.model.model.meshInstances[0].material = coneMaterial;
```

Der obige Code wird einen neuen `cone` erstellen, ihn zur `app` hinzufügen und ihn um 2 Einheiten nach rechts bewegen, damit er sich nicht mit dem Zylinder überschneidet. Dann wird das Material erstellt, eine graue Farbe gegeben und dem Kegel `Entity` zugewiesen.

Das ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas — wir können Animationen und dergleichen sehen — lassen Sie uns versuchen, diesen Formen etwas Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten ihre Positionen auch direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, damit sie bei jedem Frame aktualisiert werden. Es gibt ein spezielles `update` Ereignis, das wir dafür verwenden können — fügen Sie den folgenden Code direkt unter den vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback nimmt `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer` Variable, die die seit dem Start der App vergangene Zeit speichert, indem wir bei jedem Update die `deltaTime` zu ihr hinzufügen.

### Rotation

Das Rotieren ist ziemlich einfach — alles, was Sie tun müssen, ist, einen definierten Wert zur angegebenen Richtung der Rotation bei jedem Frame hinzuzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")` Callback-Funktion hinzu, direkt nach dem Hinzufügen der `deltaTime` zur `timer` Variablen:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` um `deltaTime*10` auf der `x` Achse, `deltaTime*20` auf der `y` Achse und `deltaTime*30` auf der `z` Achse in jedem Frame rotieren — uns eine glatte Animation gebend.

### Skalierung

Wir können ein gegebenes Objekt auch skalieren — dafür gibt es eine Funktion namens `setLocalScale`. Fügen Sie das Folgende, erneut in den Callback, hinzu:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und kleiner werden zu lassen. Wir umschließen den `y` Skalierungswert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und für negative Werte kann die Zylinder-Skalierung unerwartet (in diesem Fall halb schwarz) aussehen.

Jetzt zum Bewegungsteil.

### Bewegung

Neben Rotation und Skalierung können wir Objekte auch durch die Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` auf und ab bewegen, indem der `sin` Wert auf die `y` Achse bei jedem Frame angewendet wird, mit etwas Anpassung, um es cooler aussehen zu lassen. Versuchen Sie den Wert zu ändern, um zu sehen, wie es die Animation beeinflusst.

## PlayCanvas Beispiel mit Animation

Hier ist der finale Code mit animierten Formen. Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___play-canvas-animation
<canvas id="application-canvas"></canvas>
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

```js hidden live-sample___play-canvas-animation
const canvas = document.getElementById("application-canvas");

// Start and init Application
const app = new pc.Application(canvas);
app.start();
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

// Create camera
const camera = new pc.Entity();
camera.addComponent("camera", { clearColor: new pc.Color(0.8, 0.8, 0.8) });
app.root.addChild(camera);
camera.setPosition(0, 0, 7);

// Create cube
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);

// Create light
const light = new pc.Entity();
light.addComponent("light");
light.rotate(45, 0, 0);
app.root.addChild(light);
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

// Create cube's material
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
box.translate(-2, 0, 0);

// Create cylinder
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);

// Create cylinder's material
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;

// Create cone
const cone = new pc.Entity();
cone.addComponent("model", { type: "cone" });
app.root.addChild(cone);
cone.translate(2, 0, 0);

// Create cone's material
const coneMaterial = new pc.StandardMaterial();
coneMaterial.diffuse.set(0.9, 0.9, 0.9);
coneMaterial.update();
cone.model.model.meshInstances[0].material = coneMaterial;

// Animate shapes
let timer = 0;
app.on("update", function (deltaTime) {
  timer += deltaTime;
  box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 3);
  cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
  cone.setPosition(2, Math.sin(timer * 2), 0);
});
```

```css hidden live-sample___play-canvas-animation
body,
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("play-canvas-animation", "", "400px")}}

## Zusammenfassung

Jetzt kennen Sie die Grundlagen der PlayCanvas Engine; viel Spaß beim Experimentieren!
Sie können den Artikel [PlayCanvas editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D Games on the Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
