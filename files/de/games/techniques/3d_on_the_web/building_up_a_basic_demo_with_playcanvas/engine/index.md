---
title: Aufbau einer grundlegenden Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

Entwickelt für moderne Browser, ist **PlayCanvas** eine voll ausgestattete 3D-Spiel-Engine mit Ressourcen-Loading, einem Entity- und Komponentensystem, fortgeschrittener Grafikmanipulation, Kollisions- und Physik-Engine (aufgebaut mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Behandlung von Steuerungseingaben von verschiedenen Geräten (einschließlich Gamepads). Das ist eine beeindruckende Liste von Funktionen – sehen wir uns einige davon in Aktion an.

Wir bauen zunächst eine grundlegende Demo auf – ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits an unserem Artikel [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) gearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte hat: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit PlayCanvas Version `2.2.2`.

## Entwicklungssetup

Um mit PlayCanvas zu entwickeln, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden. Es ist nützlich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu haben, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis. Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur, um zu beginnen:

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

Es enthält Informationen wie den Dokument-{{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das PlayCanvas verwenden wird) auf 100% zu setzen, sodass es den gesamten verfügbaren Ansichtsbereich füllt. Das erste {{htmlelement("script")}}-Element schließt die PlayCanvas-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es ist bereits eine Variable enthalten, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichern wird.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um unser Spiel zu entwickeln, müssen wir zuerst die PlayCanvas-Anwendung erstellen (unter Verwendung des angegebenen {{htmlelement("canvas")}}-Elements) und dann die Aktualisierungsschleife starten. Fügen Sie den folgenden Code an das Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc` globale Objekt enthält alle PlayCanvas-Funktionen, die in der Engine verfügbar sind.

Als nächstes stellen wir das Canvas so ein, dass es das Fenster füllt, und ändern automatisch dessen Auflösung, um mit der Canvas-Größe übereinzustimmen. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Nun, da der Setup-Code vorhanden ist, müssen wir darüber nachdenken, die standardmäßigen Szenenkomponenten zu implementieren: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera – fügen Sie diese Zeilen zu Ihrem Code hinzu, unterhalb der vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`. Eine Entity ist jedes Objekt, das in der Szene verwendet wird – es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, eine Lichtquelle oder eine Tonquelle sein.

Dann wird eine `camera`-Komponente mit der hellgrauen `clearColor` hinzugefügt – die Farbe wird als Hintergrund sichtbar sein. Anschließend wird das `camera`-Objekt an die Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten vom Zentrum der Szene auf der `z`-Achse entfernt ist. Dies ermöglicht uns ein wenig Platz, um die später zu erstellenden Objekte zu visualisieren.

Die Entfernungswerte (z.B. für die Kamera-z-Position) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten – Millimeter, Meter, Fuß oder Meilen – das bleibt Ihnen überlassen.

Speichern Sie die Datei und laden Sie sie in Ihrem Browser. Sie sollten nun ein graues Fenster sehen.

## Geometrie

Jetzt, da die Szene ordnungsgemäß gerendert wird, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Primitiven, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Die Engine kümmert sich um das Zeichnen aller erforderlichen Formen, sodass wir uns auf das Programmieren auf höherer Ebene konzentrieren können. Beginnen wir damit, die Geometrie für eine Würfelform zu definieren – fügen Sie den folgenden neuen Code unterhalb Ihrer bisherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box`-Modellkomponente erstellen und diese der Wurzel der Anwendung, unserer Szene, hinzufügen. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und nicht um ein Quadrat handelt.

Der Würfel ist sichtbar, aber er ist völlig dunkel. Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichtarten in PlayCanvas sind richtungsweisend und Umgebung. Der erste Typ ist Licht in eine bestimmte Richtung, das irgendwo in der Szene platziert wird, während der zweite Typ das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unterhalb Ihrer bisherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht-`Entity`-Komponente erstellen und sie der Szene hinzufügen. Wir können das Licht auf der `x`-Achse drehen, um es auf mehr als eine Seite des Würfels scheinen zu lassen. Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist ein dunkelgraues Umgebungslicht für die gesamte Szene zu. Die Box sieht jetzt besser aus, könnte aber mit etwas Farbe noch besser aussehen – dafür müssen wir ein Material dafür erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standardmaterial](https://api.playcanvas.com/engine/classes/StandardMaterial.html), das Hauptmaterial, das am häufigsten zum Rendern verwendet wird. Fügen Sie folgende Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Indem wir das Licht auf dem Objekt streuen, können wir ihm seine eigene Farbe geben – wir wählen ein schönes bekanntes Blau. In PlayCanvas werden die Farbkanalwerte als Gleitkommazahlen im Bereich von `0-1` angegeben, anstatt wie auf dem Web oft in der Skala `0-255`.

Nachdem das Material erstellt und seine Farbe gesetzt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das Material des `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas-Formbeispiel

Wenn Sie bisher alles ohne Probleme befolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder? Ihr Code sollte wie das folgende Live-Beispiel aussehen. Sie können auf "Play" klicken, um den Code im MDN Playground zu sehen und zu bearbeiten:

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

window.addEventListener("resize", () => {
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

Jetzt werden wir der Szene weitere Formen hinzufügen. Lassen Sie uns den Würfel 2 Einheiten nach links verschieben, um Platz für einige Freunde zu schaffen – fügen Sie die folgende Zeile direkt unterhalb des vorherigen Codes hinzu:

```js
box.translate(-2, 0, 0);
```

Jetzt fügen wir eine neue Form hinzu – wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Das sieht dem Code, den wir zur Erstellung eines Würfels verwendet haben, sehr ähnlich, aber anstelle der `box`-Komponente fügen wir einen `cylinder` hinzu. Auch er wird um die `x`-Achse gedreht, um zu zeigen, dass er tatsächlich eine 3D-Form ist. Um dem Zylinder eine Farbe zu geben, sagen wir Gelb, müssen wir das Material dafür erstellen, wie zuvor. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Die Erstellung eines Kegels und seines Materials erfolgt fast genau so wie bei dem Zylinder. Fügen Sie den folgenden Code wiederum am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn dem `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, damit er sich nicht mit dem Zylinder überschneidet. Dann wird das Material erstellt, mit einer grauen Farbe versehen und dem Kegel-`Entity` zugewiesen.

Das ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas – wir sehen Animationen und dergleichen – lassen Sie uns versuchen, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten ihre Positionen auch direkt mit `setPosition` ändern oder sie skalieren. Um tatsächliche Animationen zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, sodass sie bei jedem Bild aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür verwenden können – fügen Sie den folgenden Code direkt unterhalb der vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback nimmt `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App vergangene Zeit speichert, indem sie `deltaTime` bei jedem Update addiert.

### Rotation

Das Rotieren ist ziemlich einfach – Sie müssen nur bei jedem Frame einen definierten Wert zur gegebenen Drehrichtung hinzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")`-Callback-Funktion hinzu, direkt nach der Addition der `deltaTime` zur `timer`-Variable:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Der `box` wird bei jedem Frame um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse gedreht – was uns eine sanfte Animation gibt.

### Skalierung

Wir können auch ein Objekt skalieren – dafür gibt es eine Funktion namens `setLocalScale`. Fügen Sie Folgendes ebenfalls in den Callback ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und wieder kleiner zu skalieren. Wir verpacken den `y`-Skalierungswert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und für negative Werte kann die Zylinderskalierung unerwartet gerendert werden (in diesem Fall sieht es die Hälfte der Zeit schwarz aus).

Jetzt zum Bewegungsteil.

### Bewegung

Neben der Rotation und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` rauf und runter bewegen, indem der `sin`-Wert bei jedem Frame auf die `y`-Achse angewendet wird, mit ein wenig Anpassung, damit es cooler aussieht. Versuchen Sie, den Wert zu ändern, um zu sehen, wie es die Animation beeinflusst.

## PlayCanvas-Beispiel mit Animation

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
app.on("update", (deltaTime) => {
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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren! Sie können den Artikel über den [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren, oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
