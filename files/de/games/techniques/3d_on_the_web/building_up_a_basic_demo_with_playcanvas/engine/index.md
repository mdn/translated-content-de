---
title: Erstellen Sie eine einfache Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{GamesSidebar}}

Speziell für moderne Browser entwickelt, ist **PlayCanvas** eine vollständig ausgestattete 3D-Spiel-Engine mit Funktionen wie Ressourcen-Management, einem Entitäten- und Komponentensystem, fortschrittlicher Grafikbearbeitung, Kollisions- und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio-Unterstützung und Erkennung von Steuereingaben von verschiedenen Geräten (einschließlich Gamepads).
Das ist eine beeindruckende Liste von Funktionen — schauen wir uns einige davon in Aktion an.

Zuerst bauen wir eine einfache Demo – ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren [Leitfaden „Erstellen einer einfachen Demo mit Three.js“](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie bemerken, dass PlayCanvas ähnliche Konzepte verwendet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit PlayCanvas Version `2.2.2`.

## Entwicklungsumgebung

Um mit der Entwicklung in PlayCanvas zu beginnen, stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.
Es ist hilfreich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und sichern Sie eine Kopie der [aktuellen PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in diesem Verzeichnis.
Alternativ können Sie PlayCanvas von einem CDN laden:

```html
<script src="https://cdn.jsdelivr.net/npm/playcanvas@2.2.2/build/playcanvas.min.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, finden Sie hier die HTML-Struktur für den Einstieg:

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

Es enthält Informationen wie das Dokumenten-{{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das PlayCanvas verwenden wird) auf 100 % festzulegen, sodass es den gesamten verfügbaren Anzeigebereich ausfüllt. Das erste {{htmlelement("script")}}-Element bindet die PlayCanvas-Bibliothek auf der Seite ein; wir werden unseren Beispielcode in das zweite schreiben. Eine Variable ist bereits enthalten, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichern wird.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (verwenden Sie das gegebene {{htmlelement("canvas")}}-Element) und dann die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das globale `pc`-Objekt enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als nächstes stellen wir das Canvas so ein, dass es das Fenster ausfüllt und automatisch seine Auflösung an die Größe des Canvas anpasst. Fügen Sie erneut die folgenden Zeilen unten in Ihrem Skript hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Jetzt, da der Setup-Code vorhanden ist, müssen wir über die Implementierung der Standard-Szenekomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen zu Ihrem Code hinzu, unterhalb der vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`.
Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, eine Licht- oder eine Tonquelle sein.

Dann fügt es eine `camera`-Komponente mit der hellgrauen `clearColor` hinzu — die Farbe wird als Hintergrund sichtbar sein. Anschließend wird das `camera`-Objekt zur Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es sich 7 Einheiten vom Zentrum der Szene auf der `z`-Achse befindet. Dies ermöglicht uns, etwas Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

Die Entfernungswerte (z.B. für die Kamera-z-Position) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene für angemessen halten — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen.

## Geometrie

Da die Szene jetzt richtig gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Menge vordefinierter Primitives, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller für die gegebene Form erforderlichen Details wird von der Engine übernommen, sodass wir uns auf die High-Level-Codierung konzentrieren können. Beginnen wir mit der Definition der Geometrie für eine Würfelform – fügen Sie den folgenden neuen Code unterhalb Ihrer bisherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es erstellt eine `Entity` mit der `box`-Modellkomponente und fügt sie der Wurzel der Anwendung, unserer Szene, hinzu. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel handelt und nicht um ein Quadrat.

Der Würfel ist sichtbar, aber er ist vollständig dunkel.
Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind richtungsweisend und Umgebung. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert wird, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unter Ihren bisherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es erstellt eine Licht-`Entity`-Komponente und fügt sie der Szene hinzu. Wir können das Licht auf der `x`-Achse drehen, um es auf mehr als eine Seite des Würfels scheinen zu lassen. Es ist Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Der Würfel sieht jetzt besser aus, aber er könnte etwas Farbe vertragen, um noch besser auszusehen — dafür müssen wir ein Material dafür erstellen.

## Material

In diesem Beispiel wird ein Material namens [Standard Material](https://api.playcanvas.com/engine/classes/StandardMaterial.html) verwendet, welches das Haupt- und am häufigsten verwendete Material für das Rendering ist.
Fügen Sie die folgenden Zeilen zu Ihrem Code hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch die Diffusion des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben — wir wählen ein schönes, vertrautes Blau.
In PlayCanvas werden die Farbkanalwerte als Fließkommazahlen im Bereich `0-1` angegeben, anstatt wie Sie es vielleicht im Web gewohnt sind, als Ganzzahlen von `0-255`.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch dem `box`-Material das neu erstellte `boxMaterial` zuweisen.

## PlayCanvas Form Beispiel

Wenn Sie bisher alles ohne Probleme befolgt haben, haben Sie Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder?
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

Jetzt fügen wir der Szene mehr Formen hinzu. Wir verschieben den Würfel 2 Einheiten nach links, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

```js
box.translate(-2, 0, 0);
```

Jetzt fügen wir eine neue Form hinzu — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Das sieht dem Code, den wir zum Erstellen eines Würfels verwendet haben, sehr ähnlich, aber anstatt der `box`-Komponente fügen wir einen `cylinder` hinzu. Er wird auch um die `x`-Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um dem Zylinder eine Farbe zu geben, sagen wir gelb, müssen wir das Material dafür erstellen, wie zuvor. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt auf fast die gleiche Weise, wie wir es für den Zylinder getan haben. Fügen Sie den folgenden Code wieder am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn zur `app` hinzu und bewegt ihn um 2 Einheiten nach rechts, sodass er nicht den Zylinder überlappt. Anschließend wird das Material erstellt, mit einer grauen Farbe versehen und dem Kegel-`Entity` zugeordnet.

Das ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas – wir sehen Animationen und so weiter – also versuchen wir, den Formen etwas Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten auch ihre Positionen direkt mit `setPosition` ändern oder sie skalieren. Um eine echte Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, damit sie bei jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür verwenden können — fügen Sie den folgenden Code direkt unter den vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Rückruf nimmt `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem letzten Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App vergangene Zeit speichert, indem sie `deltaTime` bei jedem Update hinzufügt.

### Rotation

Das Drehen ist ziemlich einfach — alles, was Sie tun müssen, ist, bei jedem Frame einen definierten Wert zur gegebenen Drehrichtung hinzuzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")`-Rückruffunktion hinzu, direkt nachdem Sie `deltaTime` zur `timer`-Variable hinzugefügt haben:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es rotiert das `box`-Element um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse, bei jedem Frame — was uns eine geschmeidige Animation gibt.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren — es gibt eine Funktion dafür namens `setLocalScale`. Fügen Sie das Folgende erneut in den Rückruf ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus zu skalieren, größer und kleiner. Wir umschließen den `y`-Skalierungswert mit `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und bei negativen Werten kann die Zylinderskalierung unerwartet rendern (in diesem Fall sieht er die halbe Zeit schwarz aus).

Jetzt zum Bewegungsteil.

### Bewegung

Neben der Rotation und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` auf- und abwärts bewegen, indem der `sin`-Wert auf die `y`-Achse bei jedem Frame angewendet wird, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie dies die Animation beeinflusst.

## PlayCanvas-Beispiel mit Animation

Hier ist der finale Code mit animierten Formen.
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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!
Sie können den Artikel [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Erstellen einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) navigieren.
