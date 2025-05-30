---
title: Aufbau eines grundlegenden Demos mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 14acf1aa7885157debdf1b6111f4bd10c064ec60
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eines der beliebtesten 3D-Game-Engines, die von Entwicklern genutzt werden. Wie bei jeder anderen 3D-Bibliothek bietet es integrierte Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, dem Aufbau der erforderlichen HTML-Struktur und dem Schreiben des JavaScript-Codes.

Wir werden zunächst ein einfaches Demo erstellen – einen Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere _Grundlegendes Demo aufbauen_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass Babylon.js mit ähnlichen Konzepten arbeitet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit Babylon.js Version `7.34.1`.

## Entwicklungseinrichtung

Um mit Babylon.js zu beginnen, benötigen Sie nicht viel. Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden. Es ist nützlich, die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab geöffnet zu lassen, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie des [neuesten Babylon.js-Engines](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) darin. Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, damit es in Ihrem Code verfügbar ist.

### HTML-Vorlage für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, hier ist die HTML-Struktur, um anzufangen:

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

Es enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das von Babylon.js verwendet wird, um den Inhalt darauf zu rendern) auf den gesamten verfügbaren Anzeigebereich einzustellen. Das erste {{htmlelement("script")}}-Element schließt die Babylon.js-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es gibt bereits eine Variable, die eine Referenz zum `<canvas>`-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Wir müssen zuerst eine Babylon.js-Engine-Instanz erstellen (indem wir ihr das `<canvas>`-Element zum Rendern übergeben), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das globale Objekt `BABYLON` enthält alle in der Engine verfügbaren Babylon.js-Funktionen.

## Erstellung einer Szene

Eine Szene ist der Ort, an dem alle Spielinhalte angezeigt werden. Beim Erstellen neuer Objekte im Demo werden wir sie alle in die Szene einfügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf Hellgrau.

## Erstellung einer Rendering-Schleife

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements ein, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion wiederholt bei jedem Frame auszuführen – die Schleife rendert ununterbrochen, bis sie aufgefordert wird, anzuhalten.

## Erstellung einer Kamera

Jetzt, da der Setup-Code vorhanden ist, müssen wir darüber nachdenken, wie wir die Standard-Szenenkomponenten implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera – fügen Sie diese Zeile in Ihren Code unterhalb der Szenenerstellung und der Zeile, in der wir die `clearColor` definiert haben, ein.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, zu der Sie sie hinzufügen möchten.

Sie haben möglicherweise die `BABYLON.Vector3()`-Methode bemerkt, die hier verwendet wird – diese definiert eine 3D-Position auf der Szene. Babylon.js wird mit einer vollständigen Mathematikbibliothek geliefert, die Vektoren, Farben, Matrizen etc. behandelt.

## Und es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist `PointLight`, die wie eine Taschenlampe funktioniert – wie ein Scheinwerfer in eine bestimmte Richtung leuchtet. Fügen Sie die folgende Zeile unterhalb Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zu der zuvor definierten Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene korrekt gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitiveformen](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Beginnen wir mit der Definition der Geometrie für eine Boxform – fügen Sie den folgenden neuen Code unter Ihre bisherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit, wie die Engine geometrische Formen erstellt, sodass später Texturen leicht darauf angewendet werden können. In diesem Fall erstellen wir eine Box mit der Methode `Mesh.CreateBox` mit einem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir sie hinzufügen möchten.

Die Größen- oder Positionswerte (z.B. für die Boxgröße) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene für geeignet halten – Millimeter, Meter, Füße oder Meilen – das bleibt Ihnen überlassen.

Wenn Sie jetzt speichern und aktualisieren, sieht Ihr Objekt wie ein Quadrat aus, da es in Richtung der Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene beliebig bewegen können, zum Beispiel durch Drehen und Skalieren. Lassen Sie uns eine kleine Drehung auf die Box anwenden, damit wir mehr als eine Seite sehen können – fügen Sie erneut diese Zeilen unter der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht im Moment schwarz aus, da wir noch keine Materialien definiert haben, die auf ihre Oberflächen angewendet werden. Lassen Sie uns das als nächstes angehen.

## Material

Material ist das, was das Objekt bedeckt – die Farben oder Texturen auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für den Moment sollte das Standardmaterial für uns ausreichen. Fügen Sie diese Zeilen unterhalb der vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, in die Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` – die für uns sichtbare Farbe. Wir können die eingebaute Funktion `Color3` verwenden, um diese zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Babylon.js Formenbeispiel

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher, als Sie dachten, nicht wahr? Hier ist, was wir bisher in einem Live-Beispiel erstellt haben. Sie können "Play" klicken, um den Code im MDN Playground zu bearbeiten:

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

Wir haben bereits eine Box auf der Szene; jetzt lassen Sie uns versuchen, mehr Formen hinzuzufügen.

### Torus

Lassen Sie uns versuchen, einen Torus hinzuzufügen – fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und ihn zur Szene hinzufügen; die Parameter sind: Name, Durchmesser, Dicke, Tesselation (Anzahl der Segmente) und die Szene, in die er hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn auf der `x`-Achse, damit er besser sichtbar ist. Jetzt lassen Sie uns ein Material hinzufügen:

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

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tesselation, Höhenunterteilungen und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts vom Würfel positioniert, etwas gedreht, damit seine 3D-Form sichtbar ist, und mit einem gelben Material versehen.

Das ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas – wir können Animationen und dergleichen sehen – also lassen Sie uns versuchen, diesen Formen Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um tatsächliche Animationen zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife am Ende unseres Codes ändern, sodass sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und reduzieren Sie sie in jedem Frame in der Schleife, so:

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

Die Variable `t` wird bei jedem gerenderten Frame erhöht.

### Rotation

Die Anwendung der Rotation ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Sie wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt eine kleine Anpassung, um die Animation gut und ansprechend aussehen zu lassen. Sie können mit den Werten experimentieren und sehen, wie sie die Animation beeinflussen.

### Bewegung

Durch direktes Ändern der Position des Zylinders können wir ihn in der Szene bewegen – fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse auf und ab schweben.

## Babylon.js Beispiel mit Animation

Hier ist der abschließende Code mit animierten Formen. Sie können "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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
  color: rgba(204, 204, 204, 1);
}
```

{{embedlivesample("babylon-js-animation", "", "400px")}}
