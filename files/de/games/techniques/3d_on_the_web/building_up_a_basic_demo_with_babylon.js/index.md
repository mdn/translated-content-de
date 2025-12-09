---
title: Aufbau einer einfachen Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 1a0be468b9e7c88a09ea3438a81341c4f6a619a6
---

[Babylon.js](https://www.babylonjs.com/) ist eine der bekanntesten 3D-Spiel-Engines, die von Entwicklern genutzt wird. Wie jede andere 3D-Bibliothek bietet sie eingebaute Funktionen, um Ihnen bei der Implementierung von üblicher 3D-Funktionalität schneller zu helfen. In diesem Artikel führen wir Sie durch die Grundlagen der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und der Programmierung des JavaScript-Codes.

Wir werden zuerst eine grundlegende Demo erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere _Aufbau einer einfachen Demo_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) durchgearbeitet haben (oder Sie sind mit anderen 3D-Bibliotheken vertraut), werden Sie bemerken, dass Babylon.js mit ähnlichen Konzepten arbeitet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit Babylon.js Version `7.34.1` kompatibel.

## Entwicklungseinrichtung

Um mit Babylon.js zu entwickeln, benötigen Sie nicht viel. Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Es ist nützlich, die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab offen zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten Babylon.js Engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) in diesem Verzeichnis. Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, hier ist die HTML-Struktur für den Start:

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: Babylon.js demo</title>
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
    <!--  The local copy of Babylon.js -->
    <script src="babylon.js"></script>
    <!--  or loaded via CDN: -->
    <!-- <script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script> -->

    <canvas id="render-canvas"></canvas>

    <script>
      const canvas = document.getElementById("render-canvas");
      /* All of our JavaScript code goes here */
    </script>
  </body>
</html>
```

Es enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das Babylon.js zum Rendern des Inhalts verwenden wird) für den gesamten verfügbaren Ansichtsbereich zu füllen. Das erste {{htmlelement("script")}}-Element fügt die Babylon.js-Bibliothek auf der Seite hinzu; wir werden unseren Beispielcode im zweiten schreiben. Es gibt eine Variable, die bereits enthalten ist und die eine Referenz auf das `<canvas>`-Element speichern wird.

Wenn Sie in einer IDE arbeiten, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js Engine

Wir müssen zuerst eine Babylon.js-Engine-Instanz erstellen (indem wir ihr das `<canvas>`-Element übergeben, auf dem gerendert werden soll), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das globale Objekt `BABYLON` enthält alle Babylon.js-Funktionen, die in der Engine verfügbar sind.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem der gesamte Spielinhalt angezeigt wird. Beim Erstellen neuer Objekte in der Demo werden wir sie alle der Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unseren vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf Hellgrau.

## Erstellen einer Rendering-Schleife

Damit die Szene tatsächlich sichtbar wird, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion wiederholt in jedem Frame auszuführen — die Schleife wird unendlich rendern, bis sie angewiesen wird, zu stoppen.

## Erstellen einer Kamera

Nun, da der Setup-Code an Ort und Stelle ist, müssen wir über die Implementierung der Standard-Szenenkomponenten nachdenken: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile Ihrem Code unterhalb der Szeneerstellung und der Zeile, in der wir die `clearColor` definiert haben, hinzu.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras), die in Babylon.js verfügbar sind; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: jeden Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, der Sie sie hinzufügen möchten.

Vielleicht haben Sie die Verwendung der Methode `BABYLON.Vector3()` bemerkt — diese definiert eine 3D-Position auf der Szene. Babylon.js ist mit einer vollständigen Mathematikbibliothek ausgestattet, die zur Handhabung von Vektoren, Farben, Matrizen usw. dient.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights), die in Babylon.js verfügbar sind. Die einfachste ist das `PointLight`, das wie eine Taschenlampe funktioniert — einen Scheinwerfer in eine bestimmte Richtung leuchtet. Fügen Sie die folgende Zeile unterhalb Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zur zuvor definierten Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Nun, da die Szene ordnungsgemäß gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen mit nur einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Lassen Sie uns mit der Definition der Geometrie für eine Boxform beginnen — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit für die Engine, geometrische Formen zu erstellen, sodass Material (Texturen) später leicht darauf angewendet werden kann. In diesem Fall erstellen wir eine Box mit der Methode `Mesh.CreateBox` mit einem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir sie hinzufügen möchten.

Die Größen- oder Positionswerte (z. B. für die Boxgröße) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

Wenn Sie jetzt speichern und aktualisieren, wird Ihr Objekt wie ein Quadrat aussehen, da es zur Kamera hin ausgerichtet ist. Das Gute an Objekten ist, dass wir sie in der Szene so bewegen können, wie wir möchten, z. B. drehen und skalieren. Lassen Sie uns der Box eine kleine Drehung hinzufügen, damit wir mehr als eine Seite sehen können — fügen Sie diese Zeilen erneut unter der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht momentan schwarz aus, da wir noch kein Material auf ihre Flächen angewendet haben. Lassen Sie uns das als Nächstes regeln.

## Material

Material ist das, was das Objekt bedeckt — die Farben oder Texturen auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für den Moment sollte das Standardmaterial ausreichen. Fügen Sie diese Zeilen unterhalb der vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, zu der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — diejenige, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Babylon.js Formenbeispiel

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war weniger schmerzhaft, als Sie dachten, oder?
Hier ist, was wir bisher in einem Live-Beispiel erstellt haben.
Sie können "Play" anklicken, um den Code im MDN-Playground zu bearbeiten:

```html hidden live-sample___babylon-js-intro
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js hidden live-sample___babylon-js-intro
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas);
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);

const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);

const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

function renderLoop() {
  scene.render();
}

engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-intro
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("babylon-js-intro", "", "400px")}}

## Weitere Formen

Wir haben bereits eine Box in der Szene; versuchen wir nun, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unterhalb des vorherigen Codes hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies erstellt einen Torus und fügt ihn der Szene hinzu; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt wird. Wir positionieren ihn auch ein wenig nach links und drehen ihn auf der `x`-Achse, damit er besser sichtbar ist. Nun fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht ähnlich wie das Boxelement aus — wir erstellen das Standardmaterial, geben ihm eine gräuliche Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und dessen Material erfolgt fast genau so, wie wir es für den Torus gemacht haben. Fügen Sie den folgenden Code wieder am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tessellation, Höhenunterteilungen und die Szene, zu der er hinzugefügt wird. Er wird dann rechts neben dem Würfel positioniert, ein wenig gedreht, damit seine 3D-Form zu sehen ist, und mit einem gelben Material versehen.

Dies ist ein guter Fortschritt, aber wir können es aufregender machen! In einem Spiel passiert normalerweise etwas — wir können Animationen und dergleichen sehen — also lassen Sie uns versuchen, diesen Formen etwas Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine echte Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife am Ende unseres Codes ändern, damit sie in jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und dekrementieren Sie sie in jedem Frame innerhalb der Schleife, so:

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

Die `t`-Variable wird in jedem gerenderten Frame inkrementiert.

### Rotation

Das Anwenden der Rotation erfordert das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Es wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt ein kleines bisschen Anpassung, um die Animation schön aussehen und fühlen zu lassen. Sie können mit den Werten experimentieren und sehen, wie dies die Animation beeinflusst.

### Bewegung

Durch Ändern der Position des Zylinders direkt können wir ihn in der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der Funktion `Math.sin()` auf der `y`-Achse auf- und absteigen.

## Babylon.js Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
Sie können "Play" anklicken, um das Beispiel im MDN-Playground zu bearbeiten:

```html hidden live-sample___babylon-js-animation
<canvas id="render-canvas"></canvas>
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

```js live-sample___babylon-js-animation
const canvas = document.getElementById("render-canvas");
const engine = new BABYLON.Engine(canvas, true, {
  preserveDrawingBuffer: false,
  alpha: true,
});

const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);

const box = BABYLON.Mesh.CreateBox("box", 2, scene);
box.rotation.x = -0.2;
box.rotation.y = -0.4;

const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;

const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;

const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;

const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;

let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  box.rotation.y = t * 2;
  torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
  cylinder.position.y = Math.sin(t * 3);
}
engine.runRenderLoop(renderLoop);
```

```css hidden live-sample___babylon-js-animation
canvas {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
  color: rgb(204 204 204);
}
```

{{embedlivesample("babylon-js-animation", "", "400px")}}
