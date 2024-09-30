---
title: Ein einfaches Demo mit Babylon.js erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Babylon.js
l10n:
  sourceCommit: cb132bc83b660e51be8959de5336c00b08030104
---

{{GamesSidebar}}

[Babylon.js](https://www.babylonjs.com/) ist eine der beliebtesten 3D-Game-Engines, die von Entwicklern genutzt werden. Wie jede andere 3D-Bibliothek bietet sie integrierte Funktionen, die Ihnen helfen, gängige 3D-Funktionalitäten schneller umzusetzen. In diesem Artikel führen wir Sie durch die grundlegenden Schritte zur Nutzung von Babylon.js, einschließlich der Einrichtung einer Entwicklungsumgebung, der Strukturierung des notwendigen HTMLs und der Erstellung des JavaScript-Codes.

Zunächst werden wir versuchen, ein einfaches Demo zu erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unsere _Ein einfaches Demo erstellen_- [Serie](/de/docs/Games/Techniques/3D_on_the_web) mit [Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js), [PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) oder [A-Frame](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame) (oder Sie sind mit anderen 3D-Bibliotheken vertraut) durchgegangen sind, werden Sie feststellen, dass Babylon.js auf ähnlichen Konzepten basiert: Kamera, Licht und Objekte.

## Einrichtung der Umgebung

Um mit der Entwicklung mit Babylon.js zu beginnen, benötigen Sie nicht viel. Sie sollten mit Folgendem beginnen:

- Sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden, wie z.B. den neuesten Firefox oder Chrome.
- Ein Verzeichnis erstellen, um Ihre Experimente zu speichern.
- Eine Kopie der [neuesten Babylon.js-Engine](https://cdn.babylonjs.com/babylon.js) in Ihrem Verzeichnis speichern.
- Die [Babylon.js-Dokumentation](https://doc.babylonjs.com/) in einem separaten Tab öffnen — es ist hilfreich, darauf zurückzugreifen.

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

Sie enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements festzulegen (das von Babylon.js verwendet wird, um den Inhalt zu rendern), so dass es den gesamten verfügbaren Viewport-Bereich ausfüllt. Das erste {{htmlelement("script")}}-Element enthält die Babylon.js-Bibliothek auf der Seite; wir werden unseren Beispielcode im zweiten schreiben. Es gibt eine bereits enthaltene Hilfsvariable, die eine Referenz auf das `<canvas>`-Element speichert.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis als `index.html`.

## Initialisierung der Babylon.js-Engine

Wir müssen zunächst eine Instanz der Babylon.js-Engine erstellen (die das `<canvas>`-Element zum Rendern verwendet), bevor wir mit der Entwicklung unseres Spiels beginnen. Fügen Sie den folgenden Code am Ende Ihres zweiten `<script>`-Elements hinzu:

```js
const engine = new BABYLON.Engine(canvas);
```

Das `BABYLON`-globale Objekt enthält alle in der Engine verfügbaren Babylon.js-Funktionen.

## Erstellung einer Szene

Eine Szene ist der Ort, an dem alle Spielinhalte angezeigt werden. Während Sie neue Objekte im Demo erstellen, fügen wir sie alle der Szene hinzu, damit sie auf dem Bildschirm sichtbar werden. Erstellen wir eine Szene, indem wir die folgenden Zeilen direkt unter unserem vorherigen Code hinzufügen:

```js
const scene = new BABYLON.Scene(engine);
scene.clearColor = new BABYLON.Color3(0.8, 0.8, 0.8);
```

Somit ist die Szene erstellt, und die zweite Zeile setzt die Hintergrundfarbe auf Hellgrau.

## Erstellen einer Rendering-Schleife

Damit die Szene tatsächlich sichtbar wird, müssen wir sie rendern. Fügen Sie diese Zeilen am Ende des `<script>`-Elements hinzu, direkt vor der schließenden `</script>`.

```js
function renderLoop() {
  scene.render();
}
engine.runRenderLoop(renderLoop);
```

Wir verwenden die `runRenderLoop()`-Methode der Engine, um die `renderLoop()`-Funktion bei jedem Frame wiederholt auszuführen — die Schleife wird unbegrenzt weiter rendern, bis sie gestoppt wird.

## Erstellung einer Kamera

Nun, da der Setup-Code vorhanden ist, müssen wir darüber nachdenken, die standardmäßigen Szenenkomponenten zu implementieren: Kamera, Licht und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeile zu Ihrem Code unter der Szenenerstellung und der Zeile hinzu, in der wir die `clearColor` definiert haben.

```js
const camera = new BABYLON.FreeCamera(
  "camera",
  new BABYLON.Vector3(0, 0, -10),
  scene,
);
```

Es gibt viele [Kameras](https://doc.babylonjs.com/features/featuresDeepDive/cameras) in Babylon.js; `FreeCamera` ist die grundlegendste und universellste. Um sie zu initialisieren, müssen Sie ihr drei Parameter übergeben: einen beliebigen Namen, den Sie für sie verwenden möchten, die Koordinaten, an denen sie im 3D-Raum positioniert sein soll, und die Szene, der Sie sie hinzufügen möchten.

> [!NOTE]
> Sie haben wahrscheinlich die Methode `BABYLON.Vector3()` in Verwendung hier bemerkt — diese definiert eine 3D-Position in der Szene. Babylon.js wird mit einer kompletten Mathematik-Bibliothek für die Handhabung von Vektoren, Farben, Matrizen usw. ausgeliefert.

## Es werde Licht

Es gibt verschiedene [Lichtquellen](https://doc.babylonjs.com/features/featuresDeepDive/lights/lights_introduction#types-of-lights) in Babylon.js. Die grundlegendste ist das `PointLight`, das wie eine Taschenlampe funktioniert — einen Scheinwerfer in eine bestimmte Richtung strahlen lässt. Fügen Sie die folgende Zeile unter Ihrer Kameradefinition hinzu:

```js
const light = new BABYLON.PointLight(
  "light",
  new BABYLON.Vector3(10, 10, 0),
  scene,
);
```

Die Parameter sind sehr ähnlich zu der zuvor definierten Kamera: den Namen des Lichts, eine Position im 3D-Raum und die Szene, zu der das Licht hinzugefügt wird.

## Geometrie

Jetzt, da die Szene ordnungsgemäß gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet Babylon.js eine Menge [vordefinierter Primitiven](https://doc.babylonjs.com/features/featuresDeepDive/mesh/creation/set), die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Beginnen wir damit, die Geometrie für eine Box-Form zu definieren — fügen Sie den folgenden neuen Code unter Ihren bisherigen Ergänzungen hinzu:

```js
const box = BABYLON.Mesh.CreateBox("box", 2, scene);
```

Ein Mesh ist eine Möglichkeit, wie die Engine geometrische Formen erstellt, so dass später Material leicht darauf angewendet werden kann. In diesem Fall erstellen wir eine Box mit der `Mesh.CreateBox`-Methode mit ihrem eigenen Namen, einer Größe von 2 und einer Deklaration, zu welcher Szene wir sie hinzufügen möchten.

> [!NOTE]
> Die Werte für Größe oder Position (z.B. für die Boxgröße) sind einheitslos und können im Wesentlichen alles sein, was Sie für Ihre Szene für geeignet halten — Millimeter, Meter, Füße oder Meilen — es liegt an Ihnen.

Wenn Sie jetzt speichern und aktualisieren, wird Ihr Objekt wie ein Quadrat aussehen, weil es zur Kamera zeigt. Das Gute an Objekten ist, dass wir sie in der Szene nach Belieben bewegen können, zum Beispiel, indem wir sie drehen und skalieren. Lassen Sie uns der Box eine kleine Rotation hinzufügen, sodass wir mehr als eine Seite sehen können — fügen Sie erneut diese Zeilen unter der vorherigen hinzu:

```js
box.rotation.x = -0.2;
box.rotation.y = -0.4;
```

Die Box sieht im Moment schwarz aus, weil wir noch kein Material definiert haben, das auf ihre Seiten angewendet werden soll. Lassen Sie uns das als nächstes angehen.

## Material

Material ist das, was das Objekt bedeckt — die Farben oder Texturen auf seiner Oberfläche. In unserem Fall werden wir eine einfache blaue Farbe verwenden, um unsere Box zu bemalen. Es gibt viele Arten von [Materialien](https://doc.babylonjs.com/toolsAndResources/assetLibraries/materialsLibrary), die verwendet werden können, aber für den Moment sollte das Standardmaterial für uns ausreichen. Fügen Sie diese Zeilen unter den vorherigen hinzu:

```js
const boxMaterial = new BABYLON.StandardMaterial("material", scene);
boxMaterial.emissiveColor = new BABYLON.Color3(0, 0.58, 0.86);
box.material = boxMaterial;
```

Das `StandardMaterial` benötigt zwei Parameter: einen Namen und die Szene, der Sie es hinzufügen möchten. Die zweite Zeile definiert eine `emissiveColor` — die, die für uns sichtbar sein wird. Wir können die eingebaute `Color3`-Funktion verwenden, um sie zu definieren. Die dritte Zeile weist das neu erstellte Material unserer Box zu.

Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit Babylon.js erstellt! Es war einfacher, als Sie dachten, oder? So sollte es aussehen:

![Blauer Babylon.js 3D-Würfel auf grauem Hintergrund.](cube.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/9zoeo5sy/","","350")}}

Sie können es auch auf [GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/cube.html).

## Weitere Formen

Wir haben bereits eine Box in der Szene; versuchen wir nun, weitere Formen hinzuzufügen.

### Torus

Versuchen wir, einen Torus hinzuzufügen — fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const torus = BABYLON.Mesh.CreateTorus("torus", 2, 0.5, 15, scene);
torus.position.x = -5;
torus.rotation.x = 1.5;
```

Dies wird einen Torus erstellen und ihn zur Szene hinzufügen; die Parameter sind: Name, Durchmesser, Dicke, Tessellation (Anzahl der Segmente) und die Szene, zu der er hinzugefügt werden soll. Wir positionieren ihn auch etwas nach links und drehen ihn auf der `x`-Achse, damit er besser sichtbar ist. Jetzt fügen wir ein Material hinzu:

```js
const torusMaterial = new BABYLON.StandardMaterial("material", scene);
torusMaterial.emissiveColor = new BABYLON.Color3(0.4, 0.4, 0.4);
torus.material = torusMaterial;
```

Es sieht ähnlich aus wie beim Box-Element — wir erstellen das Standardmaterial, geben ihm eine graue Farbe und weisen es dem Torus zu.

### Zylinder

Das Erstellen eines Zylinders und seines Materials erfolgt fast genau so wie beim Torus. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

```js
const cylinder = BABYLON.Mesh.CreateCylinder("cylinder", 2, 2, 2, 12, 1, scene);
cylinder.position.x = 5;
cylinder.rotation.x = -0.2;
const cylinderMaterial = new BABYLON.StandardMaterial("material", scene);
cylinderMaterial.emissiveColor = new BABYLON.Color3(1, 0.58, 0);
cylinder.material = cylinderMaterial;
```

Die Zylinderparameter sind: Name, Höhe, Durchmesser am oberen Ende, Durchmesser am unteren Ende, Tessellation, Höhenteilung und die Szene, zu der er hinzugefügt werden soll. Er wird dann rechts vom Würfel positioniert, ein wenig gedreht, so dass seine 3D-Form gesehen werden kann, und erhält ein gelbes Material.

So sollte die Szene jetzt aussehen:

![Leicht grauer Torus, blauer Würfel und gelber Zylinder, erstellt mit Babylon.js auf grauem Hintergrund.](shapes.png)

Das funktioniert, aber es ist ein bisschen langweilig. In einem Spiel passiert normalerweise etwas — wir sehen Animationen und dergleichen — also versuchen wir, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `position` und `rotation` verwendet, um die Position der Formen anzupassen; wir könnten sie auch skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir Änderungen an diesen Werten innerhalb der Render-Schleife am Ende unseres Codes vornehmen, sodass sie bei jedem Frame aktualisiert werden. Definieren Sie eine Hilfsvariable — `t` — die wir für Animationen verwenden, direkt vor dem `renderLoop`, und verringern Sie sie bei jedem Frame innerhalb der Schleife, so:

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

### Drehung

Eine Drehung anzuwenden ist so einfach wie das Hinzufügen dieser Zeile am Ende der `renderLoop`-Funktion:

```js
box.rotation.y = t * 2;
```

Es wird den Würfel entlang der `y`-Achse drehen.

### Skalierung

Fügen Sie diese Zeile unter der vorherigen hinzu, um den Torus zu skalieren:

```js
torus.scaling.z = Math.abs(Math.sin(t * 2)) + 0.5;
```

Es gibt eine kleine Anpassung, um die Animation schön aussehen und sich gut anfühlen zu lassen. Sie können mit den Werten experimentieren und sehen, wie sich dies auf die Animation auswirkt.

### Bewegung

Durch das direkte Ändern der Position des Zylinders können wir ihn auf der Szene bewegen — fügen Sie diese Zeile unter der vorherigen hinzu:

```js
cylinder.position.y = Math.sin(t * 3);
```

Der Zylinder wird dank der `Math.sin()`-Funktion auf der `y`-Achse auf und ab schweben.

## Fazit

Hier ist die endgültige Codeaufstellung, zusammen mit einem anschaubaren Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/8r66fdvp/","","350")}}

Sie können es auch auf [GitHub sehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/Babylon.js/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie damit selbst lokal experimentieren möchten. Jetzt kennen Sie die Grundlagen der Babylon.js-Engine; viel Spaß beim Experimentieren!
