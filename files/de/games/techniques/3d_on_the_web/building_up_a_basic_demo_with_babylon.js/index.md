---
title: Aufbau einer grundlegenden Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Spiel-Engines, die von Entwicklern verwendet wird. Wie jede andere 3D-Bibliothek bietet sie integrierte Funktionen, um Ihnen zu helfen, gängige 3D-Funktionen schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Nutzung von Babylon.js, einschließlich des Einrichtens einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTML und des Schreibens des JavaScript-Codes.

Wir werden zunächst eine grundlegende Demo erstellen – ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere _Building up a basic demo_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) (oder Sie mit anderen 3D-Bibliotheken vertraut sind) durchgearbeitet haben, werden Sie feststellen, dass Babylon.js mit ähnlichen Konzepten arbeitet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit Babylon.js-Version `7.34.1` kompatibel.

## Entwicklungsumgebung

Um mit Babylon.js zu entwickeln, benötigen Sie nicht viel.
Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.
Es ist nützlich, die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern und speichern eine Kopie der [neuesten Babylon.js-Engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) in diesem Verzeichnis. Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, damit es in Ihrem Code verfügbar ist.

### HTML-Starter für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, finden Sie hier die HTML-Struktur, um loszulegen:

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

Es enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das von Babylon.js verwendet wird, um den Inhalt zu rendern) auf den gesamten verfügbaren Viewport-Bereich einzustellen. Das erste {{htmlelement("script")}}-Element fügt die Babylon.js-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es ist bereits eine Variable enthalten, die eine Referenz auf das `<canvas>`-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Wir müssen zuerst eine Babylon.js-Engine-Instanz erstellen (indem wir ihr das `<canvas>`-Element zum Rendern übergeben), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das globale Objekt `BABYLON` enthält alle Babylon.js-Funktionen, die in der Engine verfügbar sind.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem alle Spielinhalte angezeigt werden. Beim Erstellen neuer Objekte in der Demo werden wir sie alle zur Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf hellgrau.

## Erstellen einer Rendering-Schleife

Damit die Szene tatsächlich sichtbar wird, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements ein, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion wiederholt bei jedem Frame auszuführen – die Schleife wird unbegrenzt weiter gerendert, bis sie gestoppt wird.

## Erstellen einer Kamera

Nun, da der Setup-Code vorhanden ist, müssen wir die Standard-Szenenkomponenten implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera – fügen Sie diese Zeile zu Ihrem Code unterhalb der Szeneerstellung und der Zeile hinzu, in der wir `clearColor` definiert haben.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die einfachste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, zu der Sie sie hinzufügen möchten.

Sie haben vielleicht die `BABYLON.Vector3()`-Methode bemerkt, die hier verwendet wird – dies definiert eine 3D-Position in der Szene. Babylon.js wird mit einer vollständigen Mathematikbibliothek für den Umgang mit Vektoren, Farben, Matrizen usw. geliefert.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die einfachste ist das `PointLight`, das wie eine Taschenlampe funktioniert – es beleuchtet einen bestimmten Bereich. Fügen Sie die folgende Zeile unterhalb der Definition Ihrer Kamera hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich wie die für die vorher definierte Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, der das Licht hinzugefügt wird.

## Geometrie

Nun, da die Szene korrekt gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Beginnen wir mit der Definition der Geometrie für eine Box-Form – fügen Sie den folgenden neuen Code unter Ihren bisherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit wie die Engine geometrische Formen erstellt, so dass Materialien (Texturen) später leicht darauf angewendet werden können. In diesem Fall erstellen wir eine Box mithilfe der `Mesh.CreateBox`-Methode mit ihrem eigenen Namen, einer Größe von 2 und einer Angabe, welche Szene wir hinzufügen möchten.

Die Größen- oder Positionswerte (z.B. für die Boxgröße) sind einheitenlos und können im Wesentlichen alles sein, was Sie für Ihre Szene geeignet halten – Millimeter, Meter, Fuß oder Meilen – es liegt an Ihnen.

Wenn Sie jetzt speichern und aktualisieren, wird Ihr Objekt wie ein Quadrat aussehen, da es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene nach Belieben bewegen können, z.B. durch Drehen und Skalieren. Lassen Sie uns der Box eine kleine Drehung hinzufügen, damit wir mehr als eine Seite sehen können – fügen Sie erneut diese Zeilen unter der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht momentan schwarz aus, da wir kein Material für ihre Flächen definiert haben. Lassen Sie uns das als nächstes erledigen.

## Material

Material ist das, was das Objekt bedeckt - die Farben oder Texturen auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für jetzt sollte das Standardmaterial für uns ausreichen. Fügen Sie diese Zeilen unterhalb der vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, zu der es hinzugefügt werden soll. Die zweite Zeile definiert eine `emissiveColor` - die, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Babylon.js Formen Beispiel

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher als Sie dachten, oder?
Hier ist, was wir bisher in einem Live-Beispiel erstellt haben.
Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten:

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

## Mehr Formen

Wir haben bereits eine Box auf der Szene; probieren wir nun, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen – fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und zur Szene hinzufügen; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch etwas nach links und drehen ihn auf der `x`-Achse, damit er besser sichtbar ist. Jetzt fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Box-Element ähnlich – wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und seines Materials erfolgt fast genauso wie beim Torus. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tessellation, Höhe-Unterteilungen und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts von der Cube positioniert, etwas gedreht, sodass seine 3D-Form sichtbar ist, und mit einem gelben Material versehen.

Das ist guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas – man sieht Animationen und dergleichen – also versuchen wir, diesen Formen durch die Animation Leben einzuhauchen.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife am Ende unseres Codes ändern, damit sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable – `t` – die wir für Animationen verwenden, direkt vor dem `renderLoop`, und dekrementieren Sie sie bei jedem Frame innerhalb der Schleife, so:

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

Die `t`-Variable wird bei jedem gerenderten Frame inkrementiert.

### Rotation

Eine Rotation anzuwenden ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Es wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt ein kleines bisschen Anpassung, um die Animation schön aussehen und sich gut anfühlen zu lassen. Sie können mit den Werten experimentieren und sehen, wie es die Animation beeinflusst.

### Bewegung

Indem wir die Position des Zylinders direkt ändern, können wir ihn auf der Szene bewegen – fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse auf- und absteigen.

## Babylon.js Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen.
Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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
