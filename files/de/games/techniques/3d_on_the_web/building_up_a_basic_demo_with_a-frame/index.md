---
title: Aufbau eines einfachen Demos mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) Erlebnisse in Webbrowsern zu erstellen. Um dies zu erleichtern, bietet Mozillas [A-Frame](https://aframe.io/) Framework eine Markup-Sprache, die es Webentwicklern ermöglicht, 3D-VR-Landschaften unter Anwendung eines vertrauten Ansatzes zu erstellen, der den Prinzipien der Spieleentwicklung folgt. Dies ist nützlich für das schnelle und erfolgreiche Erstellen von Prototypen und Demos, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame in Gang kommen und wie Sie damit ein einfaches Demo erstellen.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit A-Frame Version `1.6.0` kompatibel.

## Überblick auf hoher Ebene

A-Frame läuft auf den meisten Umgebungen, wie Desktop, Mobilgeräte (iOS und Android) und Geräte wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorkonfigurierte Komponenten zur Verwendung in Anwendungen — Modelle, Videoplayer, Skyboxes, Geometrien, Steuerungen, Animationen, Cursor etc. Es basiert auf dem [Entity-Component-System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungswelt bekannt ist, richtet sich jedoch an Webentwickler mit einer vertrauten Markupstruktur, die mit JavaScript manipuliert werden kann. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungssetup

Um mit der Entwicklung mit A-Frame zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Eine Option ist, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis. Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Für welchen Weg Sie sich auch entscheiden, stellen Sie sicher, dass Sie die [A-Frame-Dokumentation](https://aframe.io/docs/) irgendwo offen haben, während Sie arbeiten, um als Referenz zu dienen.

### HTML-Grundgerüst für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, ist hier die HTML-Struktur, um zu beginnen:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: A-Frame demo</title>
    <script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
  </head>
  <body>
    <!-- HTML goes here -->
  </body>
</html>
```

Dies enthält einige grundlegende Informationen wie das Dokumenten `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}} Element fügt das A-Frame-Framework auf der Seite ein; Wir werden unseren Beispielcode im {{htmlelement("body")}} Element schreiben.

### Eine Szene in A-Frame initialisieren

Eine Szene ist der Ort, an dem alles passiert. Wenn wir neue Objekte im Demo erstellen, fügen wir sie alle der Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene-Entität](https://aframe.io/docs/core/scene.html) dargestellt. Eine Entität ist jedes Element — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, Licht oder eine Tonquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>` Element innerhalb des `<body>` Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>` Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Rotation des Würfels. Die Entfernungswerte (z.B. für die Würfel-y-Position) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen — es liegt bei Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall verwenden wir eine einfache Farbe, aber es könnte auch ein Bild sein usw. Umherzublicken würde den Eindruck geben, in einem offenen Himmel, einer Holzhütte — wo auch immer Sie möchten — zu sein! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>` Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame-Formenbeispiel

An diesem Punkt, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie den Würfel auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund bereits sehen:

```html live-sample___a-frame-intro
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>
  <a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
</a-scene>
```

```css hidden live-sample___a-frame-intro
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

{{embedlivesample("a-frame-intro", "", "400px")}}

A-Frame kümmert sich um alles, was Sie benötigen:

- Eine Standard-Lichtquelle und Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus zum Umschauen und die Tastatur zur Bewegung verwenden. Versuchen Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>.
- Es gibt eine "Enter VR mode" Schaltfläche in der unteren rechten Ecke des Bildschirms, um in den Vollbildmodus mit stereoskopischer Bildansicht zu wechseln, wenn Sie die notwendige VR-Hardware eingerichtet und bereit haben.

### Spezifizierung einer Kamera

Eine Kameraentität kann durch Hinzufügen eines [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Elements zur Szene erstellt werden. Wir können die Position der Kamera explizit setzen und sie ein wenig von der Mitte der Szene zurückbewegen, sodass wir die Formen sehen können. Fügen Sie dies kurz vor dem schließenden `</a-scene>` Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, mit den `cursor-*` Attributen (standardmäßig ist er unsichtbar) — wir haben seine Größe so eingestellt, dass er leichter sichtbar ist, seine Farbe und eine Opazität, damit er die Objekte dahinter nicht vollständig verdeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind gerichtet und umgebend. Der erste Typ ist ein gerichtetes Licht, das irgendwo in der Szene platziert ist, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global gesetzt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu — dies verwendet das Standard `<a-light>` Element:

```html
<a-light type="directional" color="white" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="white"></a-light>
```

Das gerichtete Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` gesetzt, und es ist an der Position `-1 1 2` platziert. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von fortgeschrittener Geometrie

Wir haben bereits einen Würfel auf der Szene; lassen Sie uns nun versuchen, mehr Formen hinzuzufügen. Wir sind nicht auf die Standard-Entitäten wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte fortgeschrittene Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unter dem vorherigen Code hinzu:

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

Unsere Entität hat eine [Torus-Primitive](https://aframe.io/docs/components/geometry.html#Torus), die ihre Form darstellt. Wir übergeben einige Anfangsvariablen an diese Form: den Radius des Außenrandes des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs der Rohrfläche. Rotation und Position werden auf dieselbe Weise gesetzt, wie wir es zuvor gesehen haben.

### Definition eines Materials

Der Torus ist nun auf der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Erscheinungsbild der Entität zu definieren. Bearbeiten Sie das `<a-entity>`, das den Torus definiert, um wie folgt auszusehen:

```html
<a-entity
  geometry="
    primitive: torus;
    radius: 1;
    radiusTubular: 0.1;
    segmentsTubular: 12;"
  material="
    color: #EAEFF2;
    roughness: 0.1;
    metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0">
</a-entity>
```

Im neuen `material` Attribut setzen wir die `color` des Materials, dann seine `roughness` (ein raues Material streut reflektiertes Licht in mehr Richtungen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript

Es ist möglich, die Szene auch mit JavaScript zu bevölkern, daher fügen wir es hinzu, um eine dritte Form hinzuzufügen, einen Zylinder. Fügen Sie am Ende des `<body>` Elements ein neues {{htmlelement("script")}} Element hinzu, direkt nach dem `<a-scene>` Element, und fügen Sie dann den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Zuerst holen wir uns eine Referenz zum Szenen-Handler, dann erstellen wir das Zylinderelement als A-Frame-Entität. Danach geht es darum, die richtigen Attribute zu setzen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder zur Szene hinzu. Das war's — Sie haben drei verschiedene Formen mit A-Frame erstellt! Es ist beeindruckend, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript erstellen zu können.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die `animation` Komponente, die unten gezeigt wird, als Eigenschaft zum `<a-box>` Element hinzu:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei jeder anderen Entität können Sie Schlüsselattribute für die Animation definieren. Wir animieren das `rotation` Attribut von `20 0 0` zu `20 360 0`, sodass es sich einmal vollständig dreht. Die Animationsrichtung ist auf wechseln gesetzt, sodass die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer ist auf 4 Sekunden eingestellt und wird unendlich oft wiederholt. Die Animation verwendet `easing` für die Anpassung, wobei [tween.js](https://github.com/tweenjs/tween.js/) intern implementiert ist.

### Skalierung

Wir können auch Animationen zu Entitäten mit benutzerdefinierter Geometrie wie dem Torus auf ähnliche Weise hinzufügen. Fügen Sie die folgende `animation` Komponente Ihrem Torus hinzu:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Der anfängliche, Standardmaßstab ist `1 1 1`, und wir werden ihn zu `1 0.5 1` animieren, sodass die `y`-Achse von `1` auf `0.5` skaliert wird. Das `easing`, das wir verwenden werden, ist `linear`. Indem wir die Richtung auf `alternate` setzen, wird die Skalierung zu `0.5` und dann während 2 Sekunden zurück zu `1` animiert. Auch hier wird die Animation unendlich oft wiederholt.

### Bewegung

Wir könnten die `animation` verwenden, um die Position der dritten Form zu ändern, oder wir könnten stattdessen JavaScript verwenden. Fügen Sie diesen Code am Ende des `<script>` Tags hinzu:

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

Wir verwenden die `render()` Funktion, um die Position des Zylinders in jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y`-Achse zu ändern und sehen Sie, wie es die Bewegung beeinflusst.

## A-Frame-Beispiel mit Animation

Alles wird korrekt gerendert und animiert — Herzlichen Glückwunsch zum Aufbau Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

```html live-sample___a-frame-animation
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>

  <a-light
    type="directional"
    color="white"
    intensity="0.5"
    position="-1 1 2"></a-light>
  <a-light type="ambient" color="white"></a-light>

  <a-camera position="0 1 4">
    <a-cursor color="#0095DD" opacity="0.5" scale="2 2 2"> </a-cursor>
  </a-camera>

  <a-box
    color="#0095DD"
    rotation="20 40 0"
    position="0 1 0"
    animation="property: rotation; from: 20 0 0; to: 20 360 0; 
      dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
  </a-box>

  <a-entity
    geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
    material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
    rotation="10 0 0"
    position="-3 1 0"
    animation="property: scale; to: 1 0.5 1; direction: alternate; 
      dur: 2000; loop: true; easing: linear;">
  </a-entity>
</a-scene>
```

```css hidden live-sample___a-frame-animation
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  font-size: 0;
}
```

```js live-sample___a-frame-animation
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

{{embedlivesample("a-frame-animation", "", "400px")}}

## Zusammenfassung

A-Frame richtet sich an Webentwickler, indem es leicht zu verwendende Web-Markup-Sprache und all die Vorteile, die dies mit sich bringt, wie JavaScript-Manipulation, bietet. Es ist einfach, damit anzufangen, bietet aber auch eine leistungsstarke API für fortgeschrittene Konzepte sowie die Bewältigung von Unterschieden zwischen Browsern. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Webseite](https://aframe.io/)
- [Artikel zur Einführung von A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physics Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad Controls Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
