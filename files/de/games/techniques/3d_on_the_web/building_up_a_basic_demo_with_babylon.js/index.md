---
title: Aufbau einer grundlegenden Demo mit Babylon.js
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Game-Engines, die von Entwicklern verwendet wird. Wie jede andere 3D-Bibliothek bietet sie eingebaute Funktionen, um Ihnen bei der Implementierung gängiger 3D-Funktionalitäten schneller zu helfen. In diesem Artikel führen wir Sie durch die grundlegende Verwendung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des erforderlichen HTMLs und des Schreibens des JavaScript-Codes.

Wir versuchen zuerst, eine einfache Demo zu erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere Serie _Aufbau einer grundlegenden Demo_ mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) (oder wenn Sie mit anderen 3D-Bibliotheken vertraut sind) durchgearbeitet haben, werden Sie feststellen, dass Babylon.js auf ähnlichen Konzepten basiert: Kamera, Licht und Objekte.

## Einrichtung der Umgebung

Um mit Babylon.js zu entwickeln, benötigen Sie nicht viel. Sie sollten damit beginnen:

- Sicherzustellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie die neueste Version von Firefox oder Chrome.
- Ein Verzeichnis zu erstellen, um Ihre Experimente zu speichern.
- Eine Kopie der [neuesten Babylon.js-Engine](https://cdn.babylonjs.com/babylon.js) in Ihrem Verzeichnis zu speichern.
- Die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab zu öffnen – sie ist nützlich zum Nachschlagen.

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

Sie enthält einige grundlegende Informationen wie das Dokument{{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements (welches Babylon.js verwenden wird, um den Inhalt darauf zu rendern) auf den gesamten verfügbaren Ansichtsbereich auszufüllen. Das erste {{htmlelement("script")}}-Element bindet die Babylon.js-Bibliothek in die Seite ein; in der zweiten werden wir unseren Beispielcode schreiben. Es gibt bereits eine Hilfsvariable, die eine Referenz auf das `<canvas>`-Element speichert.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Wir müssen zunächst eine Instanz der Babylon.js-Engine erstellen (indem wir ihr das `<canvas>`-Element übergeben, auf dem gerendert werden soll), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das globale Objekt `BABYLON` enthält alle in der Engine verfügbaren Babylon.js-Funktionen.

## Erstellen einer Szene

Eine Szene ist der Ort, an dem der gesamte Spielinhalt angezeigt wird. Während wir neue Objekte in der Demo erstellen, werden wir sie alle der Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. Lassen Sie uns eine Szene erstellen, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

So wird die Szene erstellt, und die zweite Zeile setzt die Hintergrundfarbe auf hellgrau.

## Erstellen einer Rendering-Schleife

Um die Szene tatsächlich sichtbar zu machen, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements ein, kurz vor dem abschließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion bei jedem Frame wiederholt auszuführen — die Schleife wird weiterhin unendlich rendern, bis sie gestoppt wird.

## Erstellen einer Kamera

Nun, da der Einrichtungs-Code vorhanden ist, müssen wir darüber nachdenken, die Standardkomponenten der Szene zu implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile zu Ihrem Code unterhalb der Szenen-Erstellung und der Zeile, in der wir `clearColor` definiert haben, hinzu:

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die einfachste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen Sie sie im 3D-Raum positionieren möchten, und die Szene, zu der Sie sie hinzufügen möchten.

> [!NOTE]
> Sie haben wahrscheinlich die Methode `BABYLON.Vector3()` in Benutzung bemerkt — diese definiert eine 3D-Position in der Szene. Babylon.js wird mit einer vollständigen mathematischen Bibliothek zum Handhaben von Vektoren, Farben, Matrizen usw. geliefert.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die einfachste ist `PointLight`, die wie eine Taschenlampe funktioniert — sie strahlt ein Spotlight in eine bestimmte Richtung. Fügen Sie die folgende Zeile unterhalb Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zu der zuvor definierten Kamera: der Name des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Nun, da die Szene korrekt gerendert wird, können wir damit beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Reihe von [vordefinierten Primitives](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort in einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Beginnen wir damit, die Geometrie für eine Kastenform zu definieren — fügen Sie den folgenden neuen Code unter Ihren bisherigen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit, wie die Engine geometrische Formen erstellt, damit später leicht Material auf sie angewendet werden kann. In diesem Fall erstellen wir einen Kasten mit der Methode `Mesh.CreateBox` mit seinem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir ihn hinzufügen möchten.

> [!NOTE]
> Die Größen- oder Positionswerte (z. B. für die Kastenform) sind einheitlich, und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Füße oder Meilen — das liegt ganz bei Ihnen.

Wenn Sie nun speichern und aktualisieren, sieht Ihr Objekt wie ein Quadrat aus, weil es zur Kamera blickt. Das Gute an Objekten ist, dass wir sie in der Szene beliebig bewegen können, zum Beispiel durch Drehen und Skalieren. Lassen Sie uns der Box eine kleine Rotation hinzufügen, damit wir mehr als eine Seite sehen können — fügen Sie diese Zeilen erneut unter den vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Derzeit sieht der Würfel schwarz aus, weil wir noch kein Material auf seinen Flächen definiert haben. Lassen Sie uns das als Nächstes beheben.

## Material

Das Material ist das, was das Objekt bedeckt — die Farben oder die Textur auf seiner Oberfläche. In unserem Fall verwenden wir eine einfache blaue Farbe, um unseren Würfel zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die man verwenden kann, aber für den Moment sollte das Standardmaterial für uns ausreichen. Fügen Sie diese Zeilen unter die vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` nimmt zwei Parameter: einen Namen und die Szene, zu der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — diejenige, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserem Würfel zu.

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher, als Sie dachten, oder? So sollte es aussehen:

![Blauer Babylon.js 3D-Würfel auf grauem Hintergrund.](cube.png)

Und hier ist der bisher erstellte Code:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9zoeo5sy/","","350")}}

Sie können es sich auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/cube.html).

## Weitere Formen

Wir haben bereits einen Kasten in der Szene; jetzt versuchen wir, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unterhalb des vorherigen Codes hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies erzeugt einen Torus und fügt ihn der Szene hinzu; die Parameter sind: Name, Durchmesser, Dicke, Tesellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch ein wenig nach links und drehen ihn auf der `x`-Achse, damit er besser zu sehen ist. Fügen wir nun ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht dem Boxelement ähnlich – wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Einen Zylinder und sein Material zu erstellen, erfolgt fast genauso wie beim Torus. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;
const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinder-Parameter sind: Name, Höhe, Durchmesser oben, Durchmesser unten, Tesellation, Höhenunterteilungen und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts vom Würfel positioniert, etwas gedreht, damit seine 3D-Form zu sehen ist, und erhält ein gelbes Material.

So sollte die Szene jetzt aussehen:

![Hellgrauer Torus, blauer Würfel und gelber Zylinder erstellt mit Babylon.js auf grauem Hintergrund.](shapes.png)

Das funktioniert, ist aber ein wenig langweilig. In einem Spiel passiert normalerweise etwas — wir sehen Animationen und Ähnliches — also versuchen wir, diesen Formen etwas Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte in der Rendering-Schleife am Ende unseres Codes ändern, damit sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariabel — `t` — die wir für Animationen verwenden werden, direkt vor der `renderLoop`, und verringern Sie sie bei jedem Frame in der Schleife, wie folgt:

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

Rotation anzuwenden ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Sie wird den Würfel entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt ein wenig Anpassung, damit die Animation gut aussieht und sich gut anfühlt. Sie können mit den Werten experimentieren und sehen, wie sich dies auf die Animation auswirkt.

### Bewegung

Indem wir die Position des Zylinders direkt ändern, können wir ihn auf der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse auf und ab schweben.

## Fazit

Hier ist das endgültige Codebeispiel, zusammen mit einem anzeigbaren Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/8r66fdvp/","","350")}}

Sie können es sich auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie selbst lokal damit spielen möchten. Nun kennen Sie die Grundlagen der Babylon.js-Engine; viel Spaß beim Experimentieren!
