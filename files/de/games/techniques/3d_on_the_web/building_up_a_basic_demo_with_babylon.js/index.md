---
title: Aufbau einer grundlegenden Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 4319d57835c493db5e4ec4c4b7b98dfba53d01eb
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Game-Engines, die von Entwicklern genutzt wird. Wie jede andere 3D-Bibliothek bietet sie eingebaute Funktionen, die Ihnen helfen, gängige 3D-Funktionen schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und dem Schreiben des JavaScript-Codes.

Wir werden zunächst eine grundlegende Demo erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere _Aufbau einer grundlegenden Demo_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) durchgearbeitet haben (oder wenn Sie mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass Babylon.js ähnliche Konzepte verwendet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit Babylon.js Version `7.34.1` kompatibel.

## Entwicklungseinrichtung

Um mit Babylon.js zu entwickeln, benötigen Sie nicht viel.
Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.
Es ist nützlich, die [Babylon.js Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab geöffnet zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten Babylon.js-Engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) in diesem Verzeichnis.
Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/), [JSFiddle](https://jsfiddle.net/) oder [Glitch](https://glitch.com/) verwenden.
Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, sodass es in Ihrem Code verfügbar ist.

### HTML-Starter für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, ist hier die HTML-Struktur, um zu beginnen:

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

Es enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (das Babylon.js verwenden wird, um den Inhalt darauf zu rendern) so einzustellen, dass es den gesamten verfügbaren Anzeigebereich ausfüllt. Das erste {{htmlelement("script")}}-Element fügt die Babylon.js-Bibliothek in die Seite ein; den Beispielcode schreiben wir im zweiten Element. Es gibt bereits eine Variable, die eine Referenz auf das `<canvas>`-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Wir müssen zuerst eine Babylon.js-Engine-Instanz erstellen (indem wir ihr das `<canvas>`-Element übergeben, auf dem sie rendern soll), bevor wir mit der Spieleentwicklung beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das `BABYLON`-globale Objekt enthält alle in der Engine verfügbaren Babylon.js-Funktionen.

## Erstellung einer Szene

Eine Szene ist der Ort, an dem der gesamte Spielinhalt angezeigt wird. Während wir neue Objekte in der Demo erstellen, werden wir sie alle zur Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem Sie die folgenden Zeilen direkt unter unserem vorhergehenden Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf Hellgrau.

## Erstellung eines Rendering-Loops

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion wiederholt in jedem Frame auszuführen — die Schleife wird unendlich weiter rendern, bis sie gestoppt wird.

## Erstellung einer Kamera

Jetzt, da der Einrichtungs-Code vorhanden ist, müssen wir darüber nachdenken, die standardmäßigen Szenenkomponenten zu implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile zu Ihrem Code unterhalb der Szenenerstellung und der Zeile, in der wir die `clearColor` definiert haben, hinzu:

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, der Sie sie hinzufügen möchten.

Sie werden die Verwendung der `BABYLON.Vector3()`-Methode bemerkt haben – diese definiert eine 3D-Position auf der Szene. Babylon.js wird mit einer kompletten Mathematik-Bibliothek für die Handhabung von Vektoren, Farben, Matrizen usw. geliefert.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist das `PointLight`, das wie eine Taschenlampe funktioniert — es strahlt ein Spotlight in eine gegebene Richtung. Fügen Sie die folgende Zeile unterhalb Ihrer Kamera-Definition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zu der zuvor definierten Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene korrekt gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort mit nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Beginnen wir mit der Definition der Geometrie für eine Boxform — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist die Art und Weise, wie die Engine geometrische Formen erstellt, sodass später Material (Texturen) leicht auf sie angewendet werden kann. In diesem Fall erstellen wir eine Box mit der Methode `Mesh.CreateBox`, mit ihrem eigenen Namen, einer Größe von 2 und einer Erklärung, zu welcher Szene wir sie hinzufügen möchten.

Die Größen- oder Positionswerte (z.B. für die Boxgröße) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene für geeignet halten — Millimeter, Meter, Fuß, oder Meilen — das liegt ganz bei Ihnen.

Wenn Sie jetzt speichern und aktualisieren, wird Ihr Objekt wie ein Quadrat aussehen, da es der Kamera zugewandt ist. Das Gute an Objekten ist, dass wir sie auf der Szene verschieben können, wie wir wollen, zum Beispiel durch Drehen und Skalieren. Lassen Sie uns der Box eine kleine Rotation hinzufügen, damit wir mehr als eine Ansicht sehen können — fügen Sie diese Zeilen erneut unter den vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht im Moment schwarz aus, weil wir noch kein Material definiert haben, das wir auf seine Flächen anwenden. Kümmern wir uns als Nächstes darum.

## Material

Material ist das, was das Objekt bedeckt — die Farben oder die Textur auf seiner Oberfläche. In unserem Fall verwenden wir eine einfache blaue Farbe, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber vorerst sollte das Standardmaterial für uns ausreichen. Fügen Sie diese Zeilen unter den vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — die Farbe, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Babylon.js Formen Beispiel

Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher, als Sie dachten, richtig?
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

const renderLoop = function () {
  scene.render();
};

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

Wir haben bereits eine Box in der Szene; lassen Sie uns nun versuchen, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unterhalb des vorherigen Codes hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und zur Szene hinzufügen; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn um die `x`-Achse, damit er besser sichtbar ist. Nun fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Box-Element ähnlich — wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und seines Materials erfolgt fast genau so, wie wir es beim Torus getan haben. Fügen Sie den folgenden Code wiederum am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tessellation, Höhenunterteilungen und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts vom Würfel positioniert, ein wenig gedreht, damit seine 3D-Form sichtbar ist, und ihm wird ein gelbes Material gegeben.

Das ist ein guter Fortschritt, aber wir können es noch spannender machen! In einem Spiel passiert normalerweise etwas — wir können Animationen und dergleichen sehen — lassen Sie uns also versuchen, diesen Formen durch Animationen Leben einzuhauchen.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife am Ende unseres Codes ändern, damit sie in jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und ziehen Sie sie in jeder Frame innerhalb der Schleife ab, so:

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

Die Anwendung der Rotation ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Es wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen ein, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt ein wenig Anpassung, um die Animation angenehm aussehen zu lassen. Sie können mit den Werten experimentieren und sehen, wie sie die Animation beeinflussen.

### Verschiebung

Indem wir die Position des Zylinders direkt ändern, können wir ihn in der Szene bewegen — fügen Sie diese Zeile unter der vorherigen ein:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird auf der `y`-Achse dank der `Math.sin()`-Funktion auf und ab schweben.

## Babylon.js Beispiel mit Animation

Hier ist der finale Code mit animierten Formen.
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
const renderLoop = function () {
  scene.render();
  t -= 0.01;
  box.rotation.y = t * 2;
  torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
  cylinder.position.y = Math.sin(t * 3);
};
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
