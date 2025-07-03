---
title: Aufbau einer grundlegenden Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 73a73bc44e12181c778910f3b7d73962e0dd9a29
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Spiel-Engines, die von Entwicklern genutzt wird. Wie bei jeder anderen 3D-Bibliothek bietet sie integrierte Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTMLs und des Schreibens des JavaScript-Codes.

Wir werden zunächst eine einfache Demo erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere Serie _Building up a basic demo_ [Reihe](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass Babylon.js mit ähnlichen Konzepten arbeitet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit Babylon.js Version `7.34.1`.

## Einrichtungs-Entwicklung

Um mit Babylon.js zu entwickeln, benötigen Sie nicht viel.
Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden.
Es ist nützlich, die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab offen zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten Babylon.js Engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) in diesem Verzeichnis.
Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, hier ist die HTML-Struktur, um zu starten:

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

Es enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}} und einige CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das von Babylon.js verwendet wird, um den Inhalt zu rendern) auf den gesamten verfügbaren Ansichtsbereich zu setzen. Das erste {{htmlelement("script")}}-Element fügt die Babylon.js-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten Element schreiben. Es gibt bereits eine Variable, die eine Referenz auf das `<canvas>`-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisieren der Babylon.js-Engine

Wir müssen zuerst eine Babylon.js-Engine-Instanz erstellen (indem wir ihr das `<canvas>`-Element übergeben, auf dem sie rendern soll), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das `BABYLON`-Globale Objekt enthält alle verfügbaren Babylon.js-Funktionen in der Engine.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem alle Spielinhalte angezeigt werden. Während wir neue Objekte in der Demo erstellen, werden wir sie der Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf hellgrau.

## Erstellen einer Rendering-Schleife

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die Methode `runRenderLoop()` der Engine, um die Funktion `renderLoop()` bei jedem Frame wiederholt auszuführen — die Schleife wird unbegrenzt weiter rendern, bis sie gestoppt wird.

## Erstellen einer Kamera

Jetzt, da der Setup-Code vorhanden ist, müssen wir über die Implementierung der standardmäßigen Szenenkomponenten nachdenken: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile Ihrem Code unterhalb der Szenenerstellung und der Zeile hinzu, in der wir die `clearColor` definiert haben.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

In Babylon.js sind viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) verfügbar; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, zu der Sie sie hinzufügen möchten.

Möglicherweise haben Sie die Verwendung der Methode `BABYLON.Vector3()` bemerkt — diese definiert eine 3D-Position in der Szene. Babylon.js wird mit einer vollständigen Mathematikbibliothek geliefert, um Vektoren, Farben, Matrizen usw. zu handhaben.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist das `PointLight`, das wie eine Taschenlampe funktioniert — ein Spotlicht in eine bestimmte Richtung leuchtend. Fügen Sie die folgende Zeile unter Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zu der zuvor definierten Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene ordnungsgemäß gerendert wird, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, stellt Babylon.js eine Reihe von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set) zur Verfügung, die man verwenden kann, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Lassen Sie uns mit der Definition der Geometrie für eine Box-Form beginnen — fügen Sie den folgenden neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist die Art und Weise, wie die Engine geometrische Formen erstellt, damit Material (Texturen) später leicht auf sie angewendet werden kann. In diesem Fall erstellen wir eine Box mit der Methode `Mesh.CreateBox` mit ihrem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir sie hinzufügen wollen.

Die Größen- oder Positionswerte (z.B. für die Boxgröße) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — es liegt bei Ihnen.

Wenn Sie jetzt speichern und aktualisieren, sieht Ihr Objekt wie ein Quadrat aus, weil es der Kamera zugewandt ist. Das Gute an Objekten ist, dass wir sie in der Szene so bewegen können, wie wir wollen, zum Beispiel durch Drehen und Skalieren. Lassen Sie uns eine kleine Rotation auf die Box anwenden, damit wir mehr als eine Seite sehen können — fügen Sie diese Zeilen unter der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht im Moment schwarz aus, weil wir noch kein Material definiert haben, das auf ihre Flächen angewendet werden soll. Lassen Sie uns das als nächstes angehen.

## Material

Material ist das, was das Objekt bedeckt — die Farben oder Texturen auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für den Anfang sollte das Standardmaterial ausreichen. Fügen Sie diese Zeilen unter den vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, zu der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — diejenige, die für uns sichtbar sein wird. Wir können die integrierte Funktion `Color3` verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Beispiel für Babylon.js-Formen

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war leichter als Sie dachten, oder?
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

## Weitere Formen

Wir haben bereits eine Box auf der Szene; nun lassen Sie uns versuchen, weitere Formen hinzuzufügen.

### Torus

Versuchen wir es, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und der Szene hinzufügen; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der es hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn auf der `x`-Achse, damit er besser gesehen werden kann. Nun fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Box-Element ähnlich aus — wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und seines Materials erfolgt fast genau so wie bei dem Torus. Fügen Sie den folgenden Code erneut am unteren Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tessellation, Höhenunterteilungen und die Szene, zu der es hinzugefügt wird. Er wird dann rechts vom Würfel positioniert, etwas gedreht, damit seine 3D-Form sichtbar wird, und erhält ein gelbes Material.

Das ist guter Fortschritt, aber wir können es spannender gestalten! In einem Spiel passiert normalerweise etwas — wir können Animationen und dergleichen sehen — lassen Sie uns also versuchen, diesen Formen Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife am Ende unseres Codes ändern, damit sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und verringern Sie sie bei jedem Frame innerhalb der Schleife, so:

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

Das Anwenden von Rotation ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Es wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt eine kleine Anpassung, um die Animation schön aussehen und sich gut anfühlen zu lassen. Sie können mit den Werten experimentieren und sehen, wie sich dies auf die Animation auswirkt.

### Bewegung

Indem wir die Position des Zylinders direkt ändern, können wir ihn in der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse auf- und abwärts schweben.

## Babylon.js-Beispiel mit Animation

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
