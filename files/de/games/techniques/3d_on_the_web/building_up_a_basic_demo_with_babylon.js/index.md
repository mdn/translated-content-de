---
title: Aufbau eines einfachen Demos mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Engines, die von Entwicklern genutzt wird. Wie jede andere 3D-Bibliothek bietet sie integrierte Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die Grundlagen der Verwendung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTML und dem Schreiben des JavaScript-Codes.

Wir werden zuerst ein einfaches Demo erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie unsere _Aufbau eines einfachen Demos_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) (oder wenn Sie mit anderen 3D-Bibliotheken vertraut sind) durchgearbeitet haben, werden Sie feststellen, dass Babylon.js ähnliche Konzepte verwendet: Kamera, Licht und Objekte.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit Babylon.js Version `7.34.1`.

## Entwicklungseinrichtung

Um mit der Entwicklung mit Babylon.js zu beginnen, benötigen Sie nicht viel. Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Es ist nützlich, die [Babylon.js Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab offen zu halten, während Sie arbeiten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [aktuellen Babylon.js Engine](https://doc.babylonjs.com/setup/frameworkPackages/frameworkVers/) in diesem Verzeichnis. Alternativ können Sie Babylon.js von einem CDN laden:

```html
<script src="https://cdn.babylonjs.com/v7.34.1/babylon.js"></script>
```

Wenn Sie nicht lokal entwickeln möchten, können Sie einen Online-Editor wie [CodePen](https://codepen.io/) oder [JSFiddle](https://jsfiddle.net/) verwenden. Mit diesen Editoren können Sie `https://cdn.babylonjs.com/v7.34.1/babylon.js` als JavaScript-Quelle hinzufügen, sodass sie in Ihrem Code verfügbar ist.

### HTML-Starter für Babylon.js

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, ist hier die HTML-Struktur, um loszulegen:

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

Sie enthält einige grundlegende Informationen wie den Dokument-{{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (welches Babylon.js verwenden wird, um den Inhalt darauf zu rendern) so einzustellen, dass es den gesamten verfügbaren Viewport ausfüllt. Das erste {{htmlelement("script")}} enthält die Babylon.js-Bibliothek auf der Seite; unseren Beispielcode werden wir im zweiten schreiben. Es gibt bereits eine Variable, die eine Referenz auf das `<canvas>`-Element speichert.

Wenn Sie in einer IDE entwickeln, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis unter dem Namen `index.html`.

## Initialisieren der Babylon.js Engine

Wir müssen zunächst eine Instanz der Babylon.js Engine erstellen (und ihr das `<canvas>`-Element übergeben, um darauf zu rendern), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das Globale Objekt `BABYLON` enthält alle Babylon.js-Funktionen, die in der Engine verfügbar sind.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem der gesamte Spielinhalt angezeigt wird. Wenn wir neue Objekte im Demo erstellen, werden wir sie alle der Szene hinzufügen, damit sie auf dem Bildschirm sichtbar sind. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Die Szene wird erstellt und die zweite Zeile setzt die Hintergrundfarbe auf hellgrau.

## Erstellen einer Renderschleife

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()` Methode der Engine, um die `renderLoop()` Funktion wiederholt bei jedem Frame auszuführen — die Schleife wird unendlich weiter rendern, bis sie das Stopp-Signal erhält.

## Erstellen einer Kamera

Jetzt, da der Setup-Code vorhanden ist, müssen wir überlegen, wie die standardmäßigen Szenenelemente implementiert werden: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile zu Ihrem Code unterhalb der Szenenerstellung und der Zeile, in der wir `clearColor` definiert haben, hinzu:

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, der Sie sie hinzufügen möchten.

Sie haben vielleicht die `BABYLON.Vector3()` Methode bemerkt, die hier verwendet wird — sie definiert eine 3D-Position in der Szene. Babylon.js wird mit einer vollständigen Mathematik-Bibliothek geliefert, um Vektoren, Farben, Matrizen usw. zu handhaben.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist das `PointLight`, das wie eine Taschenlampe wirkt — es leuchtet in eine bestimmte Richtung. Fügen Sie die folgende Zeile unterhalb Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich wie bei der vorher definierten Kamera: der Name des Lichtes, eine Position im 3D-Raum und die Szene, der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene ordnungsgemäß gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, stellt Babylon.js eine Anzahl von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set) bereit, die Sie verwenden können, um Formen in nur einer Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und komplexere Formen. Beginnen wir mit der Definition der Geometrie für eine Box-Form — fügen Sie diesen neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Methode, mit der die Engine geometrische Formen erstellt, sodass Material (Texturen) später leicht darauf angewendet werden kann. In diesem Fall erstellen wir eine Box mithilfe der `Mesh.CreateBox` Methode mit ihrem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir sie hinzufügen möchten.

Die Größen- oder Positionswerte (z.B. für die Würfelgröße) sind ohne Einheit und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

Wenn Sie jetzt speichern und aktualisieren, sieht Ihr Objekt aus wie ein Quadrat, weil es der Kamera zugewandt ist. Das Gute an Objekten ist, dass wir sie auf der Szene bewegen können, wie wir wollen, z.B. drehen und skalieren. Lassen Sie uns eine kleine Drehung in die Box einfügen, damit wir mehr als eine Fläche sehen können — fügen Sie diese Zeilen erneut unterhalb der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht momentan schwarz aus, weil wir noch kein Material definiert haben, das auf ihre Flächen angewendet werden soll. Lassen Sie uns das als nächstes angehen.

## Material

Material ist das, was das Objekt bedeckt — die Farben oder die Textur auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für jetzt sollte uns das Standardmaterial genügen. Fügen Sie diese Zeilen unterhalb der vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, zu der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — diejenige, die für uns sichtbar sein wird. Wir können die eingebaute `Color3` Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

## Babylon.js Formenbeispiel

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher, als Sie gedacht hatten, oder? Hier ist, was wir bisher in einem Live-Beispiel erstellt haben. Sie können auf "Play" klicken, um den Code im MDN Playground zu bearbeiten:

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

Wir haben bereits eine Box auf der Szene; versuchen wir nun, mehr Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unter dem vorherigen Code ein:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und in die Szene einfügen; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn auf der `x`-Achse, damit er besser sichtbar ist. Nun fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Box-Element ähnlich — wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und seines Materials erfolgt fast genauso wie wir es beim Torus gemacht haben. Fügen Sie den folgenden Code, erneut am Ende Ihres Skripts, hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;

const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tessellation, Höhenunterteilungen und die Szene, der er hinzugefügt werden soll. Er wird dann rechts vom Würfel positioniert, ein bisschen gedreht, sodass seine 3D-Form sichtbar ist, und mit einem gelben Material versehen.

Das ist ein guter Fortschritt, aber wir können es spannender machen! In einem Spiel passiert normalerweise etwas — wir sehen Animationen und dergleichen — also lassen Sie uns versuchen, diesen Formen Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen zu justieren; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Renderschleife am Ende unseres Codes ändern, damit sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und verringern Sie sie bei jedem Frame innerhalb der Schleife, wie folgt:

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

Das Anwenden der Rotation ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop` Funktion:

```js
box.rotation.y = t * 2;
```

Es wird die Box entlang der `y`-Achse rotieren.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt ein kleines bisschen Anpassung, um die Animation optisch ansprechend zu machen. Sie können mit den Werten experimentieren und sehen, wie es die Animation beeinflusst.

### Bewegung

Durch das direkte Ändern der Position des Zylinders können wir ihn auf der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird auf der `y`-Achse dank der `Math.sin()` Funktion auf und ab schweben.

## Babylon.js Beispiel mit Animation

Hier ist der endgültige Code mit animierten Formen. Sie können auf "Play" klicken, um das Beispiel im MDN Playground zu bearbeiten:

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
