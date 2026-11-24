---
title: Eine einfache Demo mit der PlayCanvas-Engine erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: d86a376c3e6e4761d747314a015fa6afe121600f
---

**PlayCanvas** wurde für moderne Browser entwickelt und ist eine voll ausgestattete 3D-Spiele-Engine, die mit [WebGL 2](/de/docs/Web/API/WebGL_API) oder [WebGPU](/de/docs/Web/API/WebGPU_API) rendert.
Sie bietet das Laden von Ressourcen, ein Entity- und Component-System, fortgeschrittene Grafikfunktionen, eine Physik-Engine (auf Basis von [ammo.js](https://github.com/kripken/ammo.js/)), Audio sowie Möglichkeiten zur Verarbeitung von Eingaben verschiedener Geräte (einschließlich Gamepads).
Das ist eine beeindruckende Liste von Funktionen – sehen wir uns einige davon in Aktion an.

Zuerst erstellen wir eine einfache Demo: einen Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Eine einfache Demo mit Three.js erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben oder mit anderen 3D-Bibliotheken vertraut sind, werden Sie feststellen, dass PlayCanvas ähnliche Konzepte verwendet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2026 aktualisiert und ist mit PlayCanvas Version `2.24.2` kompatibel.

## Entwicklungsumgebung einrichten

Um mit PlayCanvas zu entwickeln, sollten Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.
Es ist hilfreich, die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/user-manual/) während der Arbeit in einem separaten Tab geöffnet zu lassen.

Die PlayCanvas-Engine wird als ES-Modul veröffentlicht. Sie können sie von einem CDN importieren oder mit npm installieren.
Wenn Sie sie über ein CDN einbinden, können Sie die folgende URL in Ihrem HTML verwenden:

```html
<script type="module">
  import * as pc from "https://cdn.jsdelivr.net/npm/playcanvas@2.24.2/build/playcanvas.mjs";
</script>
```

Eine Node.js-Umgebung, in der PlayCanvas als Abhängigkeit installiert ist, ist praktisch, wenn Sie mit bestimmten PlayCanvas-Versionen entwickeln möchten. Außerdem können Sie damit Ihren Code mithilfe eines Build-Tools für die Produktion bündeln:

```bash
npm install --save playcanvas
npm install --save-dev vite # For development
npx vite
```

Für welchen Weg Sie sich auch entscheiden: Sie müssen Ihre Seite über einen lokalen Webserver laden, etwa den, den `npx vite` startet, statt die Datei direkt zu öffnen.
Weitere Möglichkeiten zur Einrichtung finden Sie unter [Using the Engine Standalone](https://developer.playcanvas.com/user-manual/engine/standalone/) in der PlayCanvas-Dokumentation.

### HTML-Grundgerüst für PlayCanvas

Wenn Sie Ihr Projekt lokal in einer IDE entwickeln, können Sie mit der folgenden HTML-Struktur beginnen:

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
    <canvas id="application-canvas"></canvas>
    <script type="importmap">
      {
        "imports": {
          "playcanvas": "https://cdn.jsdelivr.net/npm/playcanvas@2.24.2/build/playcanvas.mjs"
        }
      }
    </script>
    <script type="module">
      import * as pc from "playcanvas";

      const canvas = document.getElementById("application-canvas");
      /* All of our JavaScript code goes here */
    </script>
  </body>
</html>
```

Sie enthält Informationen wie den {{htmlelement("title")}} des Dokuments sowie CSS, das die Breite und Höhe des {{htmlelement("canvas")}}-Elements, in das PlayCanvas rendert, auf 100 % setzt. So füllt es den gesamten verfügbaren Viewport aus.
Die [Import Map](/de/docs/Web/HTML/Reference/Elements/script/type/importmap) teilt dem Browser mit, wo er das Modul `playcanvas` laden soll, damit wir es über seinen Namen importieren können. Wenn Sie PlayCanvas mit npm installiert haben und Vite verwenden, können Sie die Import Map entfernen.
Wir schreiben unseren Beispielcode in das Modulskript, das alle Exporte der Engine in ein `pc`-Objekt importiert.
Eine Variable ist bereits enthalten. Sie speichert eine Referenz auf das {{htmlelement("canvas")}}-Element.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (mit dem vorhandenen {{htmlelement("canvas")}}-Element) und anschließend die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres Modulskripts hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc`-Objekt enthält alle Klassen, Funktionen und Konstanten, die in der Engine verfügbar sind.

Als Nächstes sorgen wir dafür, dass das Canvas das Fenster ausfüllt und seine Auflösung automatisch an seine Größe angepasst wird.
PlayCanvas reagiert nicht selbst auf Größenänderungen des Fensters. Deshalb müssen wir `resizeCanvas()` jedes Mal aufrufen, wenn sich die Fenstergröße ändert.
Fügen Sie die folgenden Zeilen ebenfalls am Ende Ihres Skripts hinzu:

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);

window.addEventListener("resize", () => app.resizeCanvas());
```

### Mit WebGPU rendern

Standardmäßig rendert `pc.Application` mit WebGL 2.
Wenn Sie in Browsern, die WebGPU unterstützen, WebGPU verwenden möchten, erstellen Sie zuerst das Grafikgerät und übergeben Sie es an die Anwendung:

```js
const device = await pc.createGraphicsDevice(canvas, {
  deviceTypes: [pc.DEVICETYPE_WEBGPU],
});
const app = new pc.Application(canvas, { graphicsDevice: device });
```

Wenn WebGPU nicht verfügbar ist, wechselt PlayCanvas automatisch zu WebGL 2.
Der Rest dieses Tutorials funktioniert mit beiden Grafik-APIs auf dieselbe Weise.

## Kamera

Nachdem der Einrichtungscode steht, kümmern wir uns um die üblichen Bestandteile einer Szene: Kamera, Lichtquellen und Objekte. Beginnen wir mit der Kamera. Fügen Sie die folgenden Zeilen unter dem bisherigen Code ein.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`.
Eine Entity ist ein beliebiges Objekt in der Szene. Das kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber auch eine Kamera, eine Lichtquelle oder eine Tonquelle.
Was eine Entity tut, hängt davon ab, welche Komponenten ihr hinzugefügt werden.

Als Nächstes fügen wir eine `camera`-Komponente mit einem hellgrauen `clearColor` hinzu. Diese Farbe ist als Hintergrund sichtbar. Anschließend wird das `camera`-Objekt dem Wurzelelement unserer Anwendung hinzugefügt und auf der `z`-Achse 7 Einheiten vom Zentrum der Szene entfernt positioniert. So schaffen wir Platz, um die Objekte darzustellen, die wir später erstellen.

Die Abstände (etwa für die z-Position der Kamera) haben keine festgelegte Einheit. Sie können dafür grundsätzlich jede Einheit verwenden, die für Ihre Szene geeignet ist – Millimeter, Meter, Fuß oder Meilen.

Speichern Sie die Datei und laden Sie sie in Ihrem Browser. Sie sollten nun ein graues Fenster sehen.

## Geometrie

Da die Szene jetzt korrekt gerendert wird, können wir ihr 3D-Formen hinzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Grundformen, mit denen Sie Formen mit einer einzigen Codezeile erstellen können. Verfügbar sind Boxen, Kugeln, Zylinder, Kegel, Kapseln, Ebenen und Tori. Die Engine übernimmt das Zeichnen der jeweiligen Form, sodass wir uns auf den übergeordneten Code konzentrieren können. Beginnen wir mit der Geometrie für einen Würfel. Fügen Sie den folgenden Code unter Ihren bisherigen Ergänzungen ein:

```js
const box = new pc.Entity();
box.addComponent("render", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Dadurch wird eine `Entity` mit einer `render`-Komponente vom Typ `box` erstellt und dem Wurzelelement der Anwendung – unserer Szene – hinzugefügt. Außerdem drehen wir die Box ein wenig, damit erkennbar ist, dass sie ein 3D-Würfel und kein Quadrat ist.

Der Würfel ist sichtbar, aber völlig dunkel.
Damit er besser aussieht, müssen wir ihn beleuchten.

## Lichtquellen

PlayCanvas unterstützt gerichtete Lichtquellen, Omni- bzw. Punktlichtquellen und Spotlights sowie ein Umgebungslicht für die gesamte Szene.
Eine gerichtete Lichtquelle strahlt wie Sonnenlicht in einer Richtung über die gesamte Szene. Das Umgebungslicht beleuchtet dagegen alle Oberflächen gleichermaßen, damit die von der gerichteten Lichtquelle abgewandten Seiten der Objekte nicht vollständig schwarz aussehen. Fügen Sie den folgenden Code wieder unter Ihren bisherigen Ergänzungen ein.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Dadurch wird eine Licht-`Entity` erstellt und der Szene hinzugefügt. Eine `light`-Komponente ist standardmäßig gerichtet. Wir können die Lichtquelle um die `x`-Achse drehen, damit sie mehr als eine Seite des Würfels beleuchtet. Nun fügen wir das Umgebungslicht hinzu:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code legt ein dunkelgraues Umgebungslicht für die gesamte Szene fest. Die Box sieht jetzt besser aus, aber mit etwas Farbe würde sie noch besser aussehen. Dafür müssen wir ein Material erstellen.

## Material

Dieses Beispiel verwendet das [Standard material](https://api.playcanvas.com/engine/classes/StandardMaterial.html). Es ist das wichtigste universell einsetzbare, physikalisch basierte Material und wird am häufigsten zum Rendern verwendet.
Fügen Sie Ihrem Code die folgenden Zeilen hinzu:

```js
const boxMaterial = new pc.StandardMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.render.material = boxMaterial;
```

Indem wir das Licht am Objekt diffus reflektieren lassen, geben wir ihm eine eigene Farbe – ein schönes, vertrautes Blau.
In PlayCanvas werden die Werte der Farbkanäle als Fließkommazahlen im Bereich `0-1` angegeben, statt als Ganzzahlen im Bereich `0-255`, wie Sie es möglicherweise aus dem Web kennen.

Nachdem wir das Material erstellt und seine Farbe festgelegt haben, aktualisieren wir es, damit unsere Änderungen übernommen werden. Schließlich setzen wir `material` für die Render-Komponente von `box` auf das neu erstellte `boxMaterial`.

## Beispiel für eine Form mit PlayCanvas

Wenn Sie bis hierher alles ohne Probleme nachvollzogen haben, haben Sie mit PlayCanvas Ihr erstes Objekt in einer 3D-Umgebung erstellt! Das war einfacher als gedacht, oder?
Ihr Code sollte wie das folgende interaktive Beispiel aussehen.
Sie können auf „Play“ klicken, um den Code im MDN Playground anzusehen und zu bearbeiten:

```html hidden live-sample___play-canvas-intro
<canvas id="application-canvas"></canvas>
<script type="module">
  import * as pc from "https://cdn.jsdelivr.net/npm/playcanvas@2.24.2/build/playcanvas.mjs";

  const canvas = document.getElementById("application-canvas");

  // Start and init Application
  const app = new pc.Application(canvas);
  app.start();
  app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(pc.RESOLUTION_AUTO);
  window.addEventListener("resize", () => app.resizeCanvas());

  // Create camera
  const camera = new pc.Entity();
  camera.addComponent("camera", { clearColor: new pc.Color(0.8, 0.8, 0.8) });
  app.root.addChild(camera);
  camera.setPosition(0, 0, 7);

  // Create cube
  const box = new pc.Entity();
  box.addComponent("render", { type: "box" });
  app.root.addChild(box);
  box.rotate(10, 15, 0);

  // Create light
  const light = new pc.Entity();
  light.addComponent("light");
  app.root.addChild(light);
  light.rotate(45, 0, 0);
  app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

  // Create cube's material
  const boxMaterial = new pc.StandardMaterial();
  boxMaterial.diffuse.set(0, 0.58, 0.86);
  boxMaterial.update();
  box.render.material = boxMaterial;
</script>
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

Jetzt fügen wir der Szene weitere Formen hinzu. Verschieben wir den Würfel um 2 Einheiten nach links, um Platz für weitere Objekte zu schaffen. Fügen Sie die folgende Zeile direkt unter dem bisherigen Code ein:

```js
box.translate(-2, 0, 0);
```

Fügen wir nun eine neue Form hinzu – wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("render", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Das sieht dem Code, mit dem wir den Würfel erstellt haben, sehr ähnlich. Statt des Typs `box` hat die Render-Komponente jedoch den Typ `cylinder`. Außerdem wird der Zylinder um die `x`-Achse gedreht, damit seine 3D-Form erkennbar ist. Damit der Zylinder eine Farbe bekommt, beispielsweise Gelb, müssen wir wie zuvor ein Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.StandardMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.render.material = cylinderMaterial;
```

### Kegel

Einen Kegel und sein Material erstellen wir fast genauso wie beim Zylinder. Fügen Sie den folgenden Code wieder am Ende Ihres Skripts hinzu:

```js
const cone = new pc.Entity();
cone.addComponent("render", { type: "cone" });
app.root.addChild(cone);
cone.translate(2, 0, 0);

const coneMaterial = new pc.StandardMaterial();
coneMaterial.diffuse.set(0.9, 0.9, 0.9);
coneMaterial.update();
cone.render.material = coneMaterial;
```

Der obige Code erstellt einen neuen `cone`, fügt ihn zu `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, damit er den Zylinder nicht überlappt. Anschließend wird das Material erstellt, grau eingefärbt und der Kegel-`Entity` zugewiesen.

Das ist ein guter Fortschritt, aber wir können die Szene noch interessanter gestalten! In einem Spiel passiert normalerweise etwas – zum Beispiel sehen wir Animationen. Versuchen wir also, diese Formen durch Animationen zum Leben zu erwecken.

## Animation

Wir haben bereits `translate` und `rotate` verwendet, um die Position beziehungsweise Ausrichtung der Formen anzupassen. Wir könnten ihre Positionen auch direkt mit `setPosition()` ändern oder sie skalieren. Für eine Animation müssen wir diese Werte innerhalb der Render-Schleife ändern, damit sie bei jedem Frame aktualisiert werden. Dafür gibt es ein spezielles `update`-Event. Fügen Sie den folgenden Code direkt unter Ihren bisherigen Ergänzungen ein:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Die Callback-Funktion erhält `deltaTime` als Parameter. Dieser Wert gibt die Zeit (in Sekunden) an, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der Anwendung verstrichene Zeit speichert. Dazu addieren wir bei jedem Update `deltaTime`.

### Drehung

Eine Drehung ist einfach: Sie müssen lediglich bei jedem Frame einen festgelegten Wert zur jeweiligen Drehrichtung hinzufügen. Fügen Sie die folgende Codezeile in die Callback-Funktion von `app.on("update")` ein, direkt nachdem `deltaTime` zur `timer`-Variable addiert wurde:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Dadurch wird `box` bei jedem Frame um `deltaTime*10` Grad um die `x`-Achse, um `deltaTime*20` Grad um die `y`-Achse und um `deltaTime*30` Grad um die `z`-Achse gedreht. So entsteht eine flüssige Animation.

### Skalierung

Wir können ein Objekt auch skalieren. Dafür gibt es die Funktion `setLocalScale()`. Fügen Sie Folgendes ebenfalls in die Callback-Funktion ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin()`, um den Zylinder zyklisch größer und wieder kleiner zu skalieren. Den Skalierungswert für die `y`-Achse übergeben wir an `Math.abs()`, um seinen Absolutwert zu erhalten – also einen Wert größer oder gleich 0. Das ist nötig, weil `sin` zwischen -1 und 1 schwankt und die Skalierung des Zylinders bei negativen Werten unerwartet dargestellt werden kann (in diesem Fall erscheint er die Hälfte der Zeit schwarz).

### Bewegung

Neben dem Drehen und Skalieren können wir Objekte auch durch die Szene bewegen. Fügen Sie dazu den folgenden Code hinzu.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dadurch bewegt sich `cone` auf und ab: Der `sin`-Wert wird bei jedem Frame auf die `y`-Achse angewendet und ein wenig angepasst, damit die Bewegung interessanter aussieht. Ändern Sie den Wert und beobachten Sie, wie sich das auf die Animation auswirkt.

## PlayCanvas-Beispiel mit Animation

Hier ist der vollständige Code mit animierten Formen.
Sie können auf „Play“ klicken, um das Beispiel im MDN Playground zu bearbeiten:

```html hidden live-sample___play-canvas-animation
<canvas id="application-canvas"></canvas>
<script type="module">
  import * as pc from "https://cdn.jsdelivr.net/npm/playcanvas@2.24.2/build/playcanvas.mjs";

  const canvas = document.getElementById("application-canvas");

  // Start and init Application
  const app = new pc.Application(canvas);
  app.start();
  app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
  app.setCanvasResolution(pc.RESOLUTION_AUTO);
  window.addEventListener("resize", () => app.resizeCanvas());

  // Create camera
  const camera = new pc.Entity();
  camera.addComponent("camera", { clearColor: new pc.Color(0.8, 0.8, 0.8) });
  app.root.addChild(camera);
  camera.setPosition(0, 0, 7);

  // Create cube
  const box = new pc.Entity();
  box.addComponent("render", { type: "box" });
  app.root.addChild(box);
  box.rotate(10, 15, 0);

  // Create light
  const light = new pc.Entity();
  light.addComponent("light");
  app.root.addChild(light);
  light.rotate(45, 0, 0);
  app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);

  // Create cube's material
  const boxMaterial = new pc.StandardMaterial();
  boxMaterial.diffuse.set(0, 0.58, 0.86);
  boxMaterial.update();
  box.render.material = boxMaterial;
  box.translate(-2, 0, 0);

  // Create cylinder
  const cylinder = new pc.Entity();
  cylinder.addComponent("render", { type: "cylinder" });
  app.root.addChild(cylinder);
  cylinder.rotate(15, 0, 0);

  // Create cylinder's material
  const cylinderMaterial = new pc.StandardMaterial();
  cylinderMaterial.diffuse.set(1, 0.58, 0);
  cylinderMaterial.update();
  cylinder.render.material = cylinderMaterial;

  // Create cone
  const cone = new pc.Entity();
  cone.addComponent("render", { type: "cone" });
  app.root.addChild(cone);
  cone.translate(2, 0, 0);

  // Create cone's material
  const coneMaterial = new pc.StandardMaterial();
  coneMaterial.diffuse.set(0.9, 0.9, 0.9);
  coneMaterial.update();
  cone.render.material = coneMaterial;

  // Animate shapes
  let timer = 0;
  app.on("update", (deltaTime) => {
    timer += deltaTime;
    box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
    cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
    cone.setPosition(2, Math.sin(timer * 2), 0);
  });
</script>
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

Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine – viel Spaß beim Experimentieren!
Wenn Sie sehen möchten, was die Engine noch kann, werfen Sie einen Blick auf die [PlayCanvas-Engine-Beispiele](https://playcanvas.com/examples). Jedes davon enthält den Quellcode.
Sie können mit dem Artikel zum [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) fortfahren, zur Seite [Eine einfache Demo mit PlayCanvas erstellen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) wechseln.
