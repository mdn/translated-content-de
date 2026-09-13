---
title: Erstellen eines grundlegenden Demos mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 6030ef1aadf967b80e2c79c3d3463cccc8ea0c95
---

Die APIs [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) ermöglichen es bereits, Virtual Reality (VR) und Augmented Reality (AR) Erlebnisse in Webbrowsern zu erstellen. Um dies zu erleichtern, bietet das [A-Frame](https://aframe.io/) Framework von Mozilla eine Markup-Sprache, die es Webentwicklern erlaubt, 3D-VR-Landschaften mit einem vertrauten Ansatz zu erstellen und dabei Entwicklungsprinzipien aus der Spieleentwicklung zu befolgen. Dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame loslegen und es nutzen können, um ein einfaches Demo zu erstellen.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit A-Frame Version `1.6.0` kompatibel.

## Überblick auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie zum Beispiel auf Desktop- und mobilen Geräten (iOS und Android) sowie auf Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame baut auf [WebGL](/de/docs/Web/API/WebGL_API) auf und bietet vorgefertigte Komponenten zum Einsatz in Anwendungen — Modelle, Videoplayer, Skyboxen, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity-Component-System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungswelt bekannt ist, richtet sich jedoch mit einer vertrauten Markup-Struktur an Webentwickler, die mit JavaScript manipuliert werden kann. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungssetup

Um mit der Entwicklung mit A-Frame zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Eine Option ist, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis. Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Egal, wie Sie beginnen, stellen Sie sicher, dass Sie die [A-Frame Dokumentation](https://aframe.io/docs/) irgendwo geöffnet haben, während Sie arbeiten, um darauf zurückzugreifen.

### HTML-Starter für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur, um loszulegen:

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

Diese enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das Element {{htmlelement("script")}} fügt das A-Frame-Framework in die Seite ein; wir werden unseren Beispielcode im Element {{htmlelement("body")}} schreiben.

### Initialisieren einer Szene in A-Frame

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen von neuen Objekten im Demo fügen wir sie alle zur Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Szenen-Entity](https://aframe.io/docs/core/scene.html) dargestellt. Eine Entity kann jedes Element sein — sie kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber auch eine Kamera, Licht oder Schallquelle.

Erstellen Sie die Szene, indem Sie ein `<a-scene>`-Element innerhalb des `<body>`-Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html)-Elements innerhalb des `<a-scene>`-Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position in der 3D-Szene und die Rotation des Würfels. Die Distanzwerte (z.B. für die y-Position des Würfels) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html)-Element. In unserem Fall verwenden wir eine einfache Farbe, aber es könnte auch ein Bild sein usw. Herumzuschauen würde den Eindruck vermitteln, sich unter einem offenen Himmel, in einer Holzhütte — wo auch immer Sie möchten — zu befinden! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>`-Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame Form Beispiel

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

- Eine Standard-Lichtquelle und Kamera sind enthalten, so dass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus verwenden, um sich umzuschauen und die Tastatur, um sich zu bewegen. Probieren Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>.
- Es gibt einen "Enter VR Mode"-Button in der unteren rechten Ecke des Bildschirms, um in den Vollbildmodus zu wechseln und stereoskopische Bildansichten anzuzeigen, wenn Sie die erforderliche VR-Hardware eingerichtet haben.

### Eine Kamera spezifizieren

Eine Kameraentity kann erstellt werden, indem ein [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html)-Element zur Szene hinzugefügt wird. Wir können die Position der Kamera explizit setzen und sie ein wenig vom Zentrum der Szene zurückschieben, damit wir die Formen sehen können. Fügen Sie dies direkt vor dem schließenden `</a-scene>`-Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, wobei wir die `cursor-*` Attribute verwenden (standardmäßig ist er unsichtbar.) — wir haben seine Skalierung so eingestellt, dass er leichter sichtbar ist, seine Farbe und etwas Transparenz, damit er die Objekte dahinter nicht komplett bedeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind Richtungs- und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert ist, während der zweite Typ das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global festgelegt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu — dies verwendet das Standard-`<a-light>`-Element:

```html
<a-light type="directional" color="white" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="white"></a-light>
```

Das Richtungslicht hat eine weiße Farbe, seine Intensität ist auf `0.5` eingestellt, und es ist bei Position `-1 1 2` platziert. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von fortgeschrittener Geometrie

Wir haben bereits einen Würfel in der Szene; nun versuchen wir, weitere Formen hinzuzufügen. Wir sind nicht auf die Standard-Entities wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte, fortgeschrittene Formen erstellen. Lasst uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unterhalb des vorherigen Codes hinzu:

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

Unsere Entity hat ein [Torus-Primitive](https://aframe.io/docs/components/geometry.html#Torus), das seine Form darstellt. Wir übergeben einige Anfangsvariablen an diese Form: den Radius des äußeren Rands des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs der Rohrfläche. Rotation und Position werden auf dieselbe Weise gesetzt, wie wir es schon früher gesehen haben.

### Definieren eines Materials

Der Torus ist nun auf der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Erscheinungsbild der Entity zu definieren. Bearbeiten Sie die `<a-entity>`, die den Torus definiert, damit es wie folgt aussieht:

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

Im neuen `material`-Attribut legen wir die `color` des Materials fest, dann seine `roughness` (ein raueres Material streut reflektiertes Licht in mehr Richtungen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript zum Mix

Es ist möglich, die Szene auch mit Entities zu füllen, die mit JavaScript erstellt wurden, also nutzen wir es, um eine dritte Form, einen Zylinder, hinzuzufügen. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>`-Elements hinzu, direkt nach dem `<a-scene>`-Element, und fügen Sie dann den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Zuerst erhalten wir einen Verweis auf den Szene-Handler, dann erstellen wir das Zylinderelement als A-Frame-Entity. Danach dreht sich alles darum, die richtigen Attribute zu setzen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder der Szene hinzu. Das war's — Sie haben drei verschiedene Formen mit A-Frame erstellt! Es ist beeindruckend, in der Lage zu sein, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript zu erstellen.

## Animation

Wir haben bereits `rotation` und `position` genutzt, um die Formen in der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns dabei helfen kann, Elemente zu animieren. Fügen Sie die `animation` Komponente zum `<a-box>` Element hinzu, wie unten gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei den anderen Entities können Sie Schlüsselattribute für die Animation definieren. Wir werden das `rotation` Attribut von `20 0 0` zu `20 360 0` animieren, sodass es eine volle Drehung macht. Die Animationsrichtung ist auf alternierend gesetzt, sodass die Animation vorwärts und dann rückwärts gespielt wird. Die Dauer ist auf 4 Sekunden eingestellt und wird unendlich oft wiederholt. Die Animation verwendet `easing` zum Easing, wobei intern [tween.js](https://github.com/tweenjs/tween.js/) implementiert wird.

### Skalierung

Wir können auch Animation zu Entities mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, auf die gleiche Weise. Fügen Sie die folgende `animation` Komponente zu Ihrem Torus hinzu:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren wollen, ist `scale`. Die anfängliche, standardmäßige Skalierung ist `1 1 1`, und wir werden es zu `1 0.5 1` animieren, sodass die `y`-Achse von `1` zu `0.5` skaliert wird. Das Easing, das wir verwenden werden, ist `linear`. Durch das Setzen der Richtung auf `alternate` wird die Skalierung zu `0.5` animiert und dann in 2 Sekunden zurück auf `1` animiert. Auch hier wird die Animation unendlich oft wiederholt.

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

Wir verwenden die `render()` Funktion, um die Position des Zylinders bei jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y`-Achse zu ändern und zu sehen, wie es die Bewegung beeinflusst.

## A-Frame Beispiel mit Animation

Alles wird korrekt gerendert und animiert — herzlichen Glückwunsch zum Erstellen Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

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

A-Frame richtet sich an Webentwickler, indem es Web-Markup mit Vorteilen wie der JavaScript-Manipulation bietet. Es stellt eine leistungsfähige API für fortgeschrittene Konzepte dar und behandelt auch Unterschiede zwischen den Browsern. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Website](https://aframe.io/)
- [Einführung in A-Frame 0.1.0 Artikel](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Steuerungs-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
