---
title: Aufbau einer grundlegenden Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Game-Engines, die von Entwicklern genutzt wird. Wie bei jeder anderen 3D-Bibliothek bietet sie eingebaute Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller zu implementieren. In diesem Artikel führen wir Sie durch die grundlegenden Schritte der Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTMLs und dem Schreiben des JavaScript-Codes.

Zuerst werden wir versuchen, eine einfache Demo zu erstellen — ein Würfel, der auf dem Bildschirm dargestellt wird. Wenn Sie bereits unsere _Grundlegende Demo aufbauen_ [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) durchgearbeitet haben (oder wenn Sie andere 3D-Bibliotheken kennen), werden Sie feststellen, dass Babylon.js auf ähnlichen Konzepten basiert: Kamera, Licht und Objekte.

## Umgebungseinrichtung

Um mit der Entwicklung mit Babylon.js zu beginnen, brauchen Sie nicht viel. Sie sollten folgende Schritte durchführen:

- Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden, wie den neuesten Firefox oder Chrome.
- Erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern.
- Speichern Sie eine Kopie der [neuesten Babylon.js-Engine](https://cdn.babylonjs.com/babylon.js) in Ihrem Verzeichnis.
- Öffnen Sie die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab — es ist nützlich, darauf zu verweisen.

## HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden:

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
    <script src="babylon.js"></script>
    <canvas id="render-canvas"></canvas>
    <script>
      const canvas = document.getElementById("render-canvas");
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

Sie enthält grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}} Elements (das Babylon.js verwenden wird, um den Inhalt darzustellen) so einzustellen, dass es den gesamten verfügbaren Viewport-Bereich ausfüllt. Das erste {{htmlelement("script")}} Element bindet die Babylon.js-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten Element schreiben. Es ist bereits eine Hilfsvariable enthalten, die einen Verweis auf das `<canvas>`-Element speichern wird.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Zuerst müssen wir eine Babylon.js-Engine-Instanz erstellen (und ihr das `<canvas>`-Element übergeben, auf dem sie rendern soll), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das globale Objekt `BABYLON` enthält alle in der Engine verfügbaren Babylon.js-Funktionen.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem alle Spielinhalte angezeigt werden. Während wir neue Objekte in der Demo erstellen, werden wir sie alle zur Szene hinzufügen, damit sie auf dem Bildschirm sichtbar sind. Lassen Sie uns eine Szene erstellen, indem Sie die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

So wird die Szene erstellt, und die zweite Zeile legt die Hintergrundfarbe auf ein helles Grau fest.

## Erstellen einer Rendering-Schleife

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor dem schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion bei jedem Frame wiederholt auszuführen — die Schleife wird unendlich weiter rendern, bis sie gestoppt wird.

## Erstellen einer Kamera

Nun, da der Setup-Code vorhanden ist, müssen wir darüber nachdenken, die standardmäßigen Szenenkomponenten zu implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile Ihrem Code unterhalb der Szenenerstellung und der Zeile, in der wir den `clearColor` definiert haben, hinzu:

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die grundlegendste und universellste Kamera. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen von Ihnen gewünschten Namen, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, der Sie sie hinzufügen möchten.

> [!NOTE]
> Sie haben wahrscheinlich die `BABYLON.Vector3()`-Methode bemerkt, die hier verwendet wird — diese definiert eine 3D-Position in der Szene. Babylon.js wird mit einer vollständigen Mathematikbibliothek für das Handling von Vektoren, Farben, Matrizen usw. geliefert.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist das `PointLight`, das wie eine Taschenlampe funktioniert — ein Scheinwerfer, der in eine bestimmte Richtung leuchtet. Fügen Sie die folgende Zeile unterhalb Ihrer Kamera-Definition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind dem vorher definierten Kamera sehr ähnlich: der Name des Lichts, eine Position im 3D-Raum und die Szene, der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene richtig rendert, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Beginnen wir damit, die Geometrie für eine Box-Form zu definieren — fügen Sie den folgenden neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit, wie die Engine geometrische Formen erzeugt, sodass Material später leicht darauf angewendet werden kann. In diesem Fall erstellen wir eine Box mit der Methode `Mesh.CreateBox`, mit einem eigenen Namen, einer Größe von 2, und einer Deklaration, zu welcher Szene wir sie hinzufügen möchten.

> [!NOTE]
> Die Größen- oder Positionswerte (z.B. für die Boxgröße) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene geeignet erachten — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

Wenn Sie jetzt speichern und aktualisieren, sieht Ihr Objekt wie ein Quadrat aus, weil es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie auf der Szene bewegen können, wie wir wollen, zum Beispiel durch Drehen und Skalieren. Lassen Sie uns der Box ein wenig Rotation hinzufügen, damit wir mehr als eine Fläche sehen können — fügen Sie diese Zeilen erneut unter dem vorherigen Code hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht im Moment schwarz aus, weil wir kein Material definiert haben, das auf ihre Flächen angewendet wird. Lassen Sie uns das als Nächstes angehen.

## Material

Material ist das, was das Objekt überzieht — die Farben oder die Textur auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für den Moment sollte das Standardmaterial für uns ausreichend sein. Fügen Sie diese Zeilen unterhalb der vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` nimmt zwei Parameter: einen Namen und die Szene, der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — diejenige, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher als gedacht, oder? So sollte es aussehen:

![Blauer Babylon.js 3D-Würfel auf grauem Hintergrund.](cube.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9zoeo5sy/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/cube.html).

## Weitere Formen

Wir haben bereits eine Box in der Szene; nun versuchen wir, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies erzeugt einen Torus und fügt ihn zur Szene hinzu; die Parameter sind: Name, Durchmesser, Dicke, Tesselierung (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn um die `x`-Achse, damit er besser gesehen werden kann. Lassen Sie uns nun ein Material hinzufügen:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Box-Element ähnlich — wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Einen Zylinder und sein Material zu erstellen, erfolgt fast genau wie beim Torus. Fügen Sie diesen Code erneut am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;
const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Parameter des Zylinders sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tesselierung, Höhenunterteilungen und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts neben dem Würfel positioniert, ein wenig gedreht, damit seine 3D-Form gesehen werden kann, und erhält ein gelbes Material.

So sollte die Szene jetzt aussehen:

![Hellgrauer Torus, blauer Würfel und gelber Zylinder, erstellt mit Babylon.js auf grauem Hintergrund.](shapes.png)

Das funktioniert, aber es ist etwas langweilig. In einem Spiel passiert normalerweise etwas — man sieht Animationen und dergleichen — versuchen wir also, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um tatsächliche Animationen zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife am Ende unseres Codes ändern, damit sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und inkrementieren Sie sie bei jedem Frame innerhalb der Schleife, wie folgt:

```js
let t = 0;
function renderLoop() {
  scene.render();
  t -= 0.01;
  // animation code goes here
}
engine.runRenderLoop(renderLoop);
```

Die Variable `t` wird bei jedem gerenderten Frame inkrementiert.

### Rotation

Eine Rotation anzuwenden ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Sie wird die Box entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es wurde eine kleine Anpassung vorgenommen, um die Animation schön aussehen und sich gut anfühlen zu lassen. Sie können mit den Werten experimentieren und sehen, wie sie die Animation beeinflussen.

### Bewegung

Indem wir die Position des Zylinders direkt ändern, können wir ihn auf der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse nach oben und unten schweben.

## Fazit

Hier ist der vollständige Code, zusammen mit einem anschaubaren Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/8r66fdvp/","","350")}}

Sie können es auch [auf GitHub sehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie selbst lokal damit experimentieren möchten. Jetzt kennen Sie die Grundlagen der Babylon.js-Engine; frohes Experimentieren!
