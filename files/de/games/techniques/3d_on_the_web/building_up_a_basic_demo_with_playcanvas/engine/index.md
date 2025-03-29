---
title: Aufbau einer grundlegenden Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: a52689c74c6c89f45c54447bb148e54ed320db62
---

{{GamesSidebar}}

Entwickelt für moderne Browser, ist **PlayCanvas** eine voll ausgestattete 3D-Game-Engine mit Ressourcen-Loading, einem Entitäten- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (gebaut mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Einrichtungen zur Handhabung von Steuerungseingaben von verschiedenen Geräten (einschließlich Gamepads).
Das ist eine ziemlich beeindruckende Liste von Funktionen - lassen Sie uns einige davon in Aktion sehen.

Wir bauen zuerst eine einfache Demo auf - einen Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Aufbau einer grundlegenden Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas ähnliche Konzepte hat: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit PlayCanvas Version `2.2.2`.

## Entwicklungsumgebung

Um mit PlayCanvas zu entwickeln, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.
Es ist nützlich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis.
Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, hier ist die HTML-Struktur, um zu beginnen:

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

Sie enthält Informationen wie den Dokument {{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}} Elements (das PlayCanvas verwenden wird) auf 100% zu setzen, sodass es den gesamten verfügbaren Ansichtsbereich ausfüllt. Das erste {{htmlelement("script")}} Element bindet die PlayCanvas-Bibliothek in die Seite ein; wir schreiben unseren Beispielcode im zweiten. Eine Variable ist bereits enthalten, die eine Referenz zum {{htmlelement("canvas")}} Element speichern wird.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (unter Verwendung des gegebenen {{htmlelement("canvas")}} Elements) und dann die Update-Schleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}} Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc` globale Objekt enthält alle PlayCanvas-Funktionen, die in der Engine verfügbar sind.

Als Nächstes stellen wir das Canvas ein, um das Fenster auszufüllen, und ändern automatisch seine Auflösung, damit sie mit der Canvas-Größe übereinstimmt. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Da der Setup-Code jetzt vorhanden ist, müssen wir über die Implementierung der Standard-Szenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera - fügen Sie diese Zeilen unter den vorherigen in Ihren Code ein.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code wird ein neues `Entity` erstellen.
Eine Entität ist jedes Objekt, das in der Szene verwendet wird - es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, eine Lichtquelle oder eine Schallquelle sein.

Dann fügt es eine `camera` Komponente mit der hellgrauen `clearColor` hinzu - die Farbe wird als Hintergrund sichtbar sein. Anschließend wird das `camera` Objekt zum Root unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten vom Zentrum der Szene auf der `z` Achse entfernt ist. Dadurch bekommen wir etwas Platz, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Distanzwerte (z.B. für die z-Position der Kamera) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten - Millimeter, Meter, Füße oder Meilen - das liegt bei Ihnen.

Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen.

## Geometrie

Da die Szene ordnungsgemäß gerendert wird, können wir mit dem Hinzufügen von 3D-Formen beginnen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Formen, die Sie verwenden können, um sofort in einer einzigen Codezeile Formen zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller für eine gegebene Form erforderlichen Elemente wird von der Engine erledigt, sodass wir uns auf die hochrangige Codierung konzentrieren können. Beginnen wir mit der Definition der Geometrie für eine Würfelform - fügen Sie den folgenden neuen Code unter Ihren vorherigen Hinzufügungen ein:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box` Modellkomponente erstellt und zum Root der Anwendung, unserer Szene, hinzugefügt. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und nicht um ein Quadrat handelt.

Der Würfel ist sichtbar, aber völlig dunkel.
Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf werfen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind Richtungslicht und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert ist, während der zweite das Licht vom ersten Typ reflektiert, sodass es natürlicher aussieht; dies kann global festgelegt werden. Erneut fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine `Entity`-Komponente für das Licht erstellt und zur Szene hinzugefügt. Wir können das Licht auf der `x` Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Es ist Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Die Box sieht jetzt besser aus, könnte aber einige Farben erhalten, um noch besser auszusehen - dafür müssen wir Material dafür erstellen.

## Material

Dieses Beispiel verwendet ein Material namens [Standardmaterial](https://api.playcanvas.com/engine/classes/StandardMaterial.html), welches das Hauptmaterial ist, das am häufigsten für das Rendern verwendet wird.
Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Indem wir das Licht auf dem Objekt zerstreuen, können wir ihm seine eigene Farbe geben - wir wählen ein schönes vertrautes Blau.
In PlayCanvas werden die Farbkanalwerte als Fließkommazahlen im Bereich `0-1` bereitgestellt, anstatt als Ganzzahlen von `0-255`, wie Sie es möglicherweise gewohnt sind, im Web zu verwenden.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das Material der `box` auf das neu erstellte `boxMaterial` setzen.

## PlayCanvas Form Beispiel

Wenn Sie bisher alles ohne Probleme befolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mithilfe von PlayCanvas erstellt! Es war einfacher, als Sie dachten, nicht wahr?
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

## Weitere Formen

Jetzt werden wir der Szene mehr Formen hinzufügen. Verschieben wir den Würfel 2 Einheiten nach links, um Platz für einige Freunde zu machen — fügen Sie die folgende Zeile direkt unter den vorherigen Code hinzu:

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

Dies sieht sehr ähnlich aus wie der Code, den wir zum Erstellen eines Würfels verwendet haben, aber anstelle der `box` Komponente fügen wir einen `cylinder` hinzu. Es ist auch um die `x` Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um dem Zylinder eine Farbe zu geben, sagen wir gelb, müssen wir das Material dafür erstellen, wie zuvor. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Die Erstellung eines Kegels und seines Materials erfolgt fast genauso wie beim Zylinder. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

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

Der obige Code wird einen neuen `cone` erstellen, ihn zum `app` hinzufügen und um 2 Einheiten nach rechts verschieben, damit er sich nicht mit dem Zylinder überlappt. Dann wird das Material erstellt, eine graue Farbe zugewiesen und dem `cone` zugewiesen.

Das ist guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas — wir können Animationen und dergleichen sehen — also versuchen wir, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten ihre Positionen auch direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, damit sie bei jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür verwenden können — fügen Sie den folgenden Code direkt unter den vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback nimmt die `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates verstrichen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App verstrichene Zeit speichert, indem sie dem `deltaTime` bei jedem Update hinzugefügt wird.

### Rotation

Das Drehen ist ziemlich einfach — alles, was Sie tun müssen, ist, bei jedem Frame einen definierten Wert zur gegebenen Rotationsrichtung hinzuzufügen. Fügen Sie diese Codezeile in die `app.on("update")` Callback-Funktion ein, direkt nach der Addition der `deltaTime` zur Variable `timer`:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` bei jedem Frame um `deltaTime*10` auf der `x` Achse, `deltaTime*20` auf der `y` Achse und `deltaTime*30` auf der `z` Achse drehen - das ergibt eine geschmeidige Animation.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren — dafür gibt es eine Funktion namens `setLocalScale`. Fügen Sie das Folgende ebenfalls in den Callback ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und kleiner werden zu lassen. Wir umhüllen den `y` Skalenwert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und für negative Werte kann die Zylinderskalierung unerwartet gerendert werden (in diesem Fall sieht es die Hälfte der Zeit schwarz aus).

Nun zum Bewegungsteil.

### Bewegung

Neben der Drehung und Skalierung können wir Objekte auch in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` auf und ab bewegen, indem der `sin` Wert auf die `y` Achse bei jedem Frame angewendet wird, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie er die Animation beeinflusst.

## PlayCanvas Beispiel mit Animation

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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!
Sie können den Artikel zum [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Aufbau einer grundlegenden Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
