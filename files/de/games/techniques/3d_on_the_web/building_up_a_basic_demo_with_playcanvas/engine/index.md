---
title: Eine grundlegende Demo mit der PlayCanvas-Engine erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 964ab8ae30c5ce0a343cc6d0f28c1b94389bae89
---

**PlayCanvas** wurde für moderne Browser entwickelt und ist eine vollständig ausgestattete 3D-Game-Engine mit Ressourcenladen, einem Entity- und Component-System, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio sowie Funktionen zur Verarbeitung von Steuereingaben verschiedener Geräte (einschließlich Gamepads).
Das ist eine beeindruckende Liste von Funktionen — sehen wir uns einige davon in Aktion an.

Zuerst erstellen wir eine grundlegende Demo — einen auf dem Bildschirm gerenderten Würfel. Wenn Sie bereits unseren Artikel [Eine grundlegende Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte verwendet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit PlayCanvas Version `2.2.2` kompatibel.

## Entwicklungsumgebung

Um mit PlayCanvas zu entwickeln, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.
Es ist hilfreich, während der Arbeit die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu haben.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis zum Speichern Ihrer Experimente und speichern Sie eine Kopie der [aktuellen PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis.
Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, damit es in Ihrem Code verfügbar ist.

### HTML-Startvorlage für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, können Sie mit folgender HTML-Struktur beginnen:

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

Sie enthält Informationen wie den {{htmlelement("title")}} des Dokuments sowie CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das PlayCanvas verwenden wird) auf 100 % festzulegen, sodass es den gesamten verfügbaren Viewport-Bereich ausfüllt. Das erste {{htmlelement("script")}}-Element bindet die PlayCanvas-Bibliothek in die Seite ein; im zweiten schreiben wir unseren Beispielcode. Eine Variable ist bereits enthalten, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie als `index.html` in Ihrem Arbeitsverzeichnis.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zunächst die PlayCanvas-Anwendung erstellen (unter Verwendung des angegebenen {{htmlelement("canvas")}}-Elements) und anschließend die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das globale Objekt `pc` enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als Nächstes legen wir fest, dass das Canvas das Fenster ausfüllt, und ändern seine Auflösung automatisch so, dass sie der Canvas-Größe entspricht. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Nachdem der Einrichtungscode vorhanden ist, müssen wir die Standardkomponenten der Szene implementieren: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen unterhalb der vorherigen zu Ihrem Code hinzu.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`.
Eine Entity ist jedes in der Szene verwendete Objekt — sie kann ein Objekt wie ein Kasten, Zylinder oder Kegel sein, aber auch eine Kamera, ein Licht oder eine Klangquelle.

Anschließend wird ihr eine `camera`-Komponente mit der hellgrauen `clearColor` hinzugefügt — die Farbe wird als Hintergrund sichtbar sein. Danach wird das Objekt `camera` zum Root unserer Anwendung hinzugefügt und auf der `z`-Achse 7 Einheiten vom Mittelpunkt der Szene entfernt positioniert. Dadurch schaffen wir Platz, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Entfernungswerte (beispielsweise für die z-Position der Kamera) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene passend finden — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu laden. Sie sollten nun ein graues Fenster sehen.

## Geometrie

Da die Szene nun korrekt gerendert wird, können wir ihr 3D-Formen hinzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Primitiven, mit denen Sie Formen sofort in einer einzigen Codezeile erstellen können. Es stehen Würfel, Kugeln, Zylinder und komplexere Formen zur Verfügung. Das Zeichnen aller Bestandteile einer bestimmten Form übernimmt die Engine, sodass wir uns auf die übergeordnete Programmierung konzentrieren können. Beginnen wir mit der Definition der Geometrie für einen Würfel — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Dadurch wird eine `Entity` mit der Modellkomponente `box` erstellt und zum Root der Anwendung, unserer Szene, hinzugefügt. Außerdem drehen wir den Kasten etwas, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und nicht um ein Quadrat handelt.

Der Würfel ist sichtbar, aber vollständig dunkel.
Damit er besser aussieht, müssen wir ihn beleuchten.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind gerichtetes und Umgebungslicht. Der erste Typ ist ein gerichtetes Licht, das irgendwo in der Szene platziert wird, während der zweite Typ das Licht des ersten Typs reflektiert, damit es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Dadurch wird eine Licht-`Entity`-Komponente erstellt und zur Szene hinzugefügt. Wir können das Licht auf der `x`-Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Nun ist es Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Der Kasten sieht jetzt besser aus, aber mit etwas Farbe könnte er noch besser aussehen — dafür müssen wir ein Material für ihn erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standard material](https://api.playcanvas.com/engine/classes/StandardMaterial.html), das allgemeine Hauptmaterial, das am häufigsten für das Rendering verwendet wird.
Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch das Streuen des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben — wir wählen ein schönes, vertrautes Blau.
In PlayCanvas werden die Farbkanalwerte als Gleitkommazahlen im Bereich `0-1` angegeben, statt als Ganzzahlen von `0-255`, wie Sie sie möglicherweise aus dem Web gewohnt sind.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen übernommen werden. Anschließend müssen wir nur noch das Material von `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas-Formbeispiel

Wenn Sie bisher alles ohne Probleme nachvollzogen haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher als gedacht, oder?
Ihr Code sollte wie das folgende Live-Beispiel aussehen.
Sie können auf „Play“ klicken, um den Code im MDN Playground anzuzeigen und zu bearbeiten:

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

Nun fügen wir der Szene weitere Formen hinzu. Verschieben wir den Würfel um 2 Einheiten nach links, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unterhalb des vorherigen Codes hinzu:

```js
box.translate(-2, 0, 0);
```

Fügen wir nun eine neue Form hinzu — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Dies sieht dem Code zum Erstellen eines Würfels sehr ähnlich, aber anstelle der Komponente `box` fügen wir einen `cylinder` hinzu. Er wird außerdem um die `x`-Achse gedreht, um zu zeigen, dass er tatsächlich eine 3D-Form ist. Damit der Zylinder eine Farbe erhält, beispielsweise Gelb, müssen wir wie zuvor das Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt fast genau so wie beim Zylinder. Fügen Sie erneut den folgenden Code am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn zu `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, damit er den Zylinder nicht überlappt. Anschließend wird das Material erstellt, erhält eine graue Farbe und wird der `Entity` des Kegels zugewiesen.

Das ist ein guter Fortschritt, aber wir können es noch spannender machen! In einem Spiel geschieht normalerweise etwas — wir sehen Animationen und Ähnliches — versuchen wir also, diesen Formen durch Animation etwas Leben einzuhauchen.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten ihre Positionen auch direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, damit sie in jedem Frame aktualisiert werden. Dafür gibt es ein spezielles `update`-Ereignis — fügen Sie den folgenden Code direkt unterhalb der vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback erhält `deltaTime` als Parameter, sodass uns die relative Zeit zur Verfügung steht, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine Variable `timer`, die durch das Hinzufügen von `deltaTime` bei jedem Update die seit dem Start der Anwendung vergangene Zeit speichert.

### Rotation

Das Drehen ist recht einfach — Sie müssen in jedem Frame lediglich einen festgelegten Wert zur gewünschten Drehrichtung hinzufügen. Fügen Sie diese Codezeile innerhalb der Callback-Funktion `app.on("update")` direkt nach dem Hinzufügen von `deltaTime` zur Variablen `timer` ein:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Dadurch wird `box` in jedem Frame auf der `x`-Achse um `deltaTime*10`, auf der `y`-Achse um `deltaTime*20` und auf der `z`-Achse um `deltaTime*30` gedreht — das ergibt eine flüssige Animation.

### Skalierung

Wir können auch ein bestimmtes Objekt skalieren — dafür gibt es die Funktion `setLocalScale`. Fügen Sie Folgendes ebenfalls in den Callback ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder zyklisch größer und wieder kleiner zu skalieren. Wir kapseln den Skalierungswert für `y` in `Math.abs`, um die Absolutwerte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und bei negativen Werten kann die Skalierung des Zylinders unerwartet gerendert werden (in diesem Fall sieht er die Hälfte der Zeit schwarz aus).

Kommen wir nun zur Bewegung.

### Verschieben

Neben Rotation und Skalierung können wir Objekte auch in der Szene verschieben. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dadurch wird der `cone` in jedem Frame auf der `y`-Achse durch Anwenden des `sin`-Werts nach oben und unten bewegt, mit einer kleinen Anpassung, damit es besser aussieht. Versuchen Sie, den Wert zu ändern, um zu sehen, wie sich dies auf die Animation auswirkt.

## PlayCanvas-Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
Sie können auf „Play“ klicken, um das Beispiel im MDN Playground zu bearbeiten:

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

Nun kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!
Sie können den Artikel [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Eine grundlegende Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
