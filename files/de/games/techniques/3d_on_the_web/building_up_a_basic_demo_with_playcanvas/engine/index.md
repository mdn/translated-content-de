---
title: Aufbau einer grundlegenden Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 28f5f3b9b463fa842fa686ccc73c9e1d9b06282b
---

Entwickelt für moderne Browser, ist **PlayCanvas** eine vollständig ausgestattete 3D-Spiel-Engine mit Ressourcenladen, einem Entitäts- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Funktionen zur Handhabung von Steuerungseingaben von verschiedenen Geräten (einschließlich Gamepads).
Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen.

Wir bauen zunächst eine grundlegende Demo — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte hat: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit PlayCanvas Version `2.2.2` kompatibel.

## Entwicklungsumgebung

Um mit PlayCanvas zu entwickeln, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.
Es ist nützlich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis.
Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

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

Es enthält Informationen wie den Dokument-{{htmlelement("title")}} und einige CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das PlayCanvas verwenden wird) auf 100% zu setzen, sodass es den gesamten verfügbaren Anzeigeraum ausfüllt. Das erste {{htmlelement("script")}}-Element bindet die PlayCanvas-Bibliothek auf der Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es ist bereits eine Variable enthalten, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (unter Verwendung des angegebenen {{htmlelement("canvas")}}-Elements) und dann die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc`-globale Objekt enthält alle verfügbaren PlayCanvas-Funktionen in der Engine.

Als Nächstes werden wir das Canvas so einstellen, dass es das Fenster füllt und seine Auflösung automatisch auf die gleiche Größe wie das Canvas ändert. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Scripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Da der Einrichtungscode vorhanden ist, müssen wir über die Implementierung der standardmäßigen Szenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen Ihrem Code hinzu, unterhalb der vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt ein neues `Entity`.
Eine Entität ist jedes in der Szene verwendete Objekt — es kann sich um ein Objekt wie eine Box, Zylinder oder einen Kegel handeln, aber es kann auch eine Kamera, Licht oder eine Tonquelle sein.

Dann wird eine `camera`-Komponente mit der hellgrauen `clearColor` hinzugefügt — die Farbe wird als Hintergrund sichtbar sein. Anschließend wird das `camera`-Objekt an die Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten von der Mitte der Szene auf der `z`-Achse entfernt ist. Dies ermöglicht es uns, etwas Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Distanzwerte (z.B. für die Kamera-z-Position) sind einheitenlos und können im Wesentlichen alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu laden. Sie sollten nun ein graues Fenster sehen.

## Geometrie

Jetzt, da die Szene richtig gerendert wird, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, stellt PlayCanvas eine Reihe vordefinierter Primitiven bereit, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller Elemente der gegebenen Form wird von der Engine übernommen, sodass wir uns auf das High-Level-Coding konzentrieren können. Beginnen wir mit der Definition der Geometrie für eine Würfelform — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box`-Modellkomponente erstellen und sie zur Wurzel der Anwendung, unserer Szene, hinzufügen. Wir drehen den Würfel auch ein wenig, um zu zeigen, dass er tatsächlich ein 3D-Würfel und kein Quadrat ist.

Der Würfel ist sichtbar, aber er ist komplett dunkel.
Damit er besser aussieht, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind richtungsweisend und umgebend. Der erste Typ ist ein richtungsweisendes Licht, das irgendwo in der Szene platziert wird, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global gesetzt werden. Fügen Sie erneut den neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht-`Entity`-Komponente erstellen und zur Szene hinzufügen. Wir können das Licht auf der `x`-Achse drehen, um es auf mehr als eine Seite des Würfels scheinen zu lassen. Es ist Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Der Kasten sieht nun besser aus, könnte aber noch besser aussehen, wenn wir ihm einige Farben geben — dafür müssen wir ein Material für ihn erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standardmaterial](https://api.playcanvas.com/engine/classes/StandardMaterial.html), das Hauptmaterial, das am häufigsten für das Rendering verwendet wird.
Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch das Diffundieren des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben — wir wählen ein schönes vertrautes Blau.
In PlayCanvas werden die Farbkanalwerte als Gleitkommazahlen im Bereich von `0-1` angegeben, anstelle von Ganzzahlen von `0-255`, wie Sie es vielleicht gewohnt sind, im Web zu verwenden.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen übernommen werden. Dann müssen wir nur noch das Material des `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas-Form-Beispiel

Wenn Sie bisher alles ohne Probleme verfolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder?
Ihr Code sollte wie das folgende Live-Beispiel aussehen.
Sie können auf "Play" klicken, um den Code im MDN Playground anzusehen und zu bearbeiten:

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

Nun fügen wir der Szene weitere Formen hinzu. Lassen Sie uns den Würfel um 2 Einheiten nach links verschieben, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

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

Dies sieht dem Code, den wir zum Erstellen eines Würfels verwendet haben, sehr ähnlich, aber anstelle der `box`-Komponente fügen wir einen `cylinder` hinzu. Es wird auch um die `x`-Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um dem Zylinder eine Farbe zu geben, sagen wir Gelb, müssen wir das Material dafür wie zuvor erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt auf fast genau die gleiche Weise wie beim Zylinder. Fügen Sie den folgenden Code erneut am Ende Ihres Scripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, damit er sich nicht mit dem Zylinder überschneidet. Dann wird das Material erstellt, ihm eine graue Farbe gegeben und dem Kegel-`Entity` zugewiesen.

Dies ist ein guter Fortschritt, aber wir können es spannender gestalten! In einem Spiel passiert normalerweise etwas — wir sehen Animationen und dergleichen — also versuchen wir, diesen Formen etwas Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten auch ihre Positionen direkt mit `setPosition` ändern oder sie skalieren. Um die eigentliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, sodass sie in jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür nutzen können — fügen Sie den folgenden Code direkt unter den vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Rückruf nimmt `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieser Aktualisierung vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App vergangene Zeit speichert, indem sie `deltaTime` bei jeder Aktualisierung hinzufügt.

### Drehung

Drehen ist recht einfach — alles was Sie tun müssen, ist, einen definierten Wert zur Rotationsrichtung in jedem Frame hinzuzufügen. Fügen Sie diese Codezeile in die `app.on("update")`-Rückruffunktion ein, direkt nach der Addition von `deltaTime` zur `timer`-Variable:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird den `box` um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse in jedem Frame rotieren — was uns eine flüssige Animation gibt.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren — es gibt eine Funktion dafür namens `setLocalScale`. Fügen Sie die folgende Zeile erneut in den Rückruf ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und kleiner zu skalieren. Wir umwickeln den `y`-Skalierungswert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variieren zwischen -1 und 0, und für negative Werte kann die Zylinderskalierung unerwartet gerendert werden (in diesem Fall sieht es die Hälfte der Zeit schwarz aus.)

Nun zum Bewegungsteil.

### Bewegung

Neben der Drehung und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` auf und ab bewegen, indem der `sin`-Wert auf die `y`-Achse in jedem Frame angewendet wird, mit einer kleinen Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie sich dies auf die Animation auswirkt.

## PlayCanvas-Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!
Sie können den Artikel [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiter lesen, zurück zur Seite [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) gehen oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) gehen.
