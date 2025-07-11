---
title: Aufbau einer einfachen Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Entwickelt für moderne Browser ist **PlayCanvas** eine funktionsreiche 3D-Spiel-Engine mit Funktionen wie Ressourcenladen, einem Entitäts- und Komponenten-System, fortgeschrittener Grafikmanipulation, Kollisions- und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio sowie Möglichkeiten zur Verarbeitung von Eingabesteuerungen verschiedener Geräte (einschließlich Gamepads). Das ist eine beachtliche Liste von Funktionen – sehen wir uns einige davon in Aktion an.

Wir erstellen zunächst eine einfache Demo – ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte beinhaltet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit PlayCanvas Version `2.2.2` kompatibel.

## Entwicklungsumgebung

Um mit PlayCanvas zu entwickeln, vergewissern Sie sich, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden. Es ist nützlich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis. Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier die HTML-Struktur zum Einstieg:

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

Es enthält Informationen wie das Dokument {{htmlelement("title")}} und einige CSS, um die Breite und Höhe des {{htmlelement("canvas")}} Elements (das PlayCanvas verwenden wird) auf 100% zu setzen, damit es den gesamten verfügbaren Viewport füllt. Das erste {{htmlelement("script")}} Element fügt die PlayCanvas-Bibliothek zur Seite hinzu; unseren Beispielcode werden wir im zweiten schreiben. Es ist bereits eine Variable enthalten, die eine Referenz auf das {{htmlelement("canvas")}} Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (unter Verwendung des gegebenen {{htmlelement("canvas")}} Elements) und dann die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}} Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc` globale Objekt enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als nächstes setzen wir das Canvas so, dass es das Fenster ausfüllt und seine Auflösung automatisch auf die Größe des Canvas ändert. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Nachdem der Setup-Code eingerichtet ist, müssen wir über die Implementierung der Standardszenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera – fügen Sie diese Zeilen unterhalb der vorherigen zu Ihrem Code hinzu.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`. Eine Entität ist jedes in der Szene verwendete Objekt – es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es könnte auch eine Kamera, eine Licht- oder Tonquelle sein.

Dann fügt es eine `camera` Komponente mit dem hellgrauen `clearColor` hinzu – die Farbe wird als Hintergrund sichtbar sein. Als nächstes wird das `camera` Objekt zur Wurzel unserer Anwendung hinzugefügt und auf der `z` Achse 7 Einheiten vom Zentrum der Szene entfernt positioniert. Dies erlaubt uns, etwas Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Entfernungswerte (z.B. für die Kamera-z-Position) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten – Millimeter, Meter, Fuß oder Meilen – es liegt an Ihnen.

Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen.

## Geometrie

Jetzt, da die Szene ordnungsgemäß gerendert wird, können wir 3D-Formen hinzufügen. Um die Entwicklung zu beschleunigen, stellt PlayCanvas eine Reihe vordefinierter Primitives zur Verfügung, die Sie verwenden können, um Formen sofort mit nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Das Zeichnen aller Teile einer bestimmten Form wird von der Engine übernommen, sodass wir uns auf das High-Level-Coding konzentrieren können. Starten wir damit, die Geometrie für eine Würfelform zu definieren – fügen Sie den folgenden neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box` Modellkomponente erstellt und zur Wurzel der Anwendung, unserer Szene, hinzugefügt. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und nicht um ein Quadrat handelt.

Der Würfel ist sichtbar, aber er ist komplett dunkel. Um ihn besser aussehen zu lassen, müssen wir Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind Richtungslicht und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert wird, während der zweite das Licht vom ersten Typ reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unter Ihre vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht `Entity` Komponente erstellt und zur Szene hinzugefügt. Wir können das Licht auf der `x` Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Es ist an der Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist dem gesamten Szenario ein dunkles graues Umgebungslicht zu. Der Würfel sieht jetzt besser aus, könnte aber noch ein bisschen farbenfroher aussehen – dafür müssen wir ein Material dafür erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standardmaterial](https://api.playcanvas.com/engine/classes/StandardMaterial.html), das Hauptmaterial für allgemeine Zwecke, das am häufigsten für das Rendering verwendet wird. Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch die Diffusion des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben – wir wählen ein schönes vertrautes Blau. In PlayCanvas werden die Farbkanalwerte als Gleitkommazahlen im Bereich von `0-1` angegeben, anstelle von Ganzzahlen von `0-255`, wie Sie es vielleicht im Web gewohnt sind.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur das Material der `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas-Formenbeispiel

Wenn Sie alles bisher ohne Probleme gefolgt sind, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher als Sie gedacht haben, oder? Ihr Code sollte wie das folgende Live-Beispiel aussehen. Sie können auf "Play" klicken, um den Code im MDN Playground zu betrachten und zu bearbeiten:

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

## Weitere Formen

Jetzt werden wir weitere Formen zu der Szene hinzufügen. Lassen Sie uns den Würfel 2 Einheiten nach links bewegen, um Platz für einige Freunde zu schaffen – fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

```js
box.translate(-2, 0, 0);
```

Jetzt lassen Sie uns eine neue Form hinzufügen – wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Dies sieht dem Code, den wir zum Erstellen eines Würfels verwendet haben, sehr ähnlich, aber anstelle der `box` Komponente fügen wir ein `cylinder` hinzu. Es wird auch um die `x` Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um den Zylinder gelb zu färben, müssen wir, wie zuvor, das Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt fast genau so, wie wir es für den Zylinder gemacht haben. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn in die `app` ein und bewegt ihn um 2 Einheiten nach rechts, damit er sich nicht mit dem Zylinder überschneidet. Dann wird das Material erstellt, mit einer grauen Farbe versehen und dem Kegel `Entity` zugewiesen.

Dies ist guter Fortschritt, aber wir können es spannender gestalten! In einem Spiel passiert normalerweise etwas – wir sehen Animationen und dergleichen – lassen Sie uns versuchen, diesen Formen mit Animationen etwas Leben einzuhauchen.

## Animation

Wir verwenden bereits `translate` oder `rotate`, um die Position der Formen anzupassen; wir könnten ihre Positionen auch direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, damit sie in jedem Frame aktualisiert werden. Es gibt ein spezielles `update` Ereignis, das wir dafür verwenden können – fügen Sie den folgenden Code direkt unter den vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback nimmt `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer` Variable, die die seit dem Start der App verstrichene Zeit speichert, indem sie in jedem Update `deltaTime` hinzufügt.

### Rotation

Rotieren ist ziemlich einfach – Sie müssen nur einen definierten Wert zur gegebenen Rotationsrichtung in jedem Frame hinzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")` Callback-Funktion hinzu, direkt nach der Hinzufügung der `deltaTime` zur `timer` Variable:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` um `deltaTime*10` auf der `x` Achse, `deltaTime*20` auf der `y` Achse und `deltaTime*30` auf der `z` Achse bei jedem Frame drehen – was uns eine flüssige Animation gibt.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren – es gibt eine Funktion dafür namens `setLocalScale`. Fügen Sie das folgende erneut in den Callback ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und kleiner zu skalieren. Wir fassen den `y` Skalenwert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und für negative Werte kann das Skalieren des Zylinders unerwartet rendern (in diesem Fall sieht es halb so oft schwarz aus).

Jetzt zum Bewegungsteil.

### Bewegung

Neben der Rotation und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` nach oben und unten bewegen, indem in jedem Frame der `sin` Wert auf die `y` Achse angewendet wird, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie er die Animation beeinflusst.

## PlayCanvas-Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen. Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren! Sie können den Artikel über den [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder ein Level höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
