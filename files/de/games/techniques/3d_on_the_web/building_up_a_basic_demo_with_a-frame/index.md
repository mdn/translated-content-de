---
title: Aufbau einer grundlegenden Demo mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) Erlebnisse innerhalb von Webbrowsern zu schaffen.
Um dies zu vereinfachen, bietet Mozillas [A-Frame](https://aframe.io/) Framework eine Markup-Sprache, die es Webentwicklern ermöglicht, 3D-VR-Landschaften mit einem vertrauten Ansatz zu erstellen, der den Prinzipien der Spieleentwicklung folgt.
Das ist nützlich für den schnellen und erfolgreichen Aufbau von Prototypen und Demos, ohne dass viel JavaScript oder GLSL geschrieben werden muss.
Dieser Artikel erklärt, wie Sie mit A-Frame loslegen und wie Sie damit eine einfache Demo erstellen können.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit A-Frame Version `1.6.0`.

## Übersicht auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie z.B. Desktop, Mobil (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame baut auf [WebGL](/de/docs/Web/API/WebGL_API) auf und bietet vorgefertigte Komponenten zur Verwendung in Anwendungen — Modelle, Videoplayer, Skyboxen, Geometrien, Steuerungen, Animationen, Cursor, etc. Es basiert auf dem [entity component system](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklung bekannt ist, aber es richtet sich an Webentwickler mit einer vertrauten Markup-Struktur, die mit JavaScript manipulierbar ist. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungsumgebung

Um mit der Entwicklung mit A-Frame zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.
Eine Möglichkeit ist, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis.
Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Egal, wie Sie beginnen, stellen Sie sicher, dass Sie die [A-Frame Dokumentation](https://aframe.io/docs/) irgendwo geöffnet haben, während Sie arbeiten, um als Referenz darauf zugreifen zu können.

### HTML-Starter für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur, um zu beginnen:

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

Dies enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}} Element fügt das A-Frame Framework in die Seite ein; wir werden unseren Beispielcode innerhalb des {{htmlelement("body")}} Elements schreiben.

### Eine Szene in A-Frame initialisieren

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen neuer Objekte in der Demo fügen wir sie alle zur Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt.
Ein Entity ist jedes Element — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, Licht oder Schallquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>` Element innerhalb des `<body>` Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>` Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Rotation des Würfels.
Die Entfernungswerte (z.B. für die y-Position des Würfels) sind einheitenlos und können im Grunde alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, repräsentiert durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall verwenden wir eine einfache Farbe, aber es könnte auch ein Bild sein, etc. Umsehen würde den Eindruck erwecken, sich in einem offenen Himmel, einer Holzscheune — wo auch immer Sie möchten! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>` Element ein:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame Formbeispiel

Zu diesem Zeitpunkt, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie bereits den Würfel auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund sehen:

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

A-Frame kümmert sich darum, alles einzurichten, was Sie brauchen:

- Eine Standard-Lichtquelle und Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus verwenden, um sich umzusehen, und die Tastatur für die Bewegung.
  Versuchen Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>.
- Es gibt einen "Enter VR mode" Knopf unten rechts auf dem Bildschirm, um Ihnen zu ermöglichen, in den Vollbildmodus mit stereoskopischem Bildansicht zu wechseln, wenn Sie die notwendige VR-Hardware eingerichtet und bereit haben.

### Eine Kamera spezifizieren

Ein Kamera-Entity kann durch das Hinzufügen eines [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Elements zur Szene erstellt werden. Wir können die Position der Kamera explizit setzen und sie ein wenig vom Szenenzentrum wegbewegen, sodass wir die Formen sehen können. Fügen Sie dies direkt vor dem schließenden `</a-scene>` Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, indem wir die `cursor-*` Attribute verwenden (standardmäßig ist er unsichtbar.) — wir haben seine Skalierung so eingestellt, dass er leichter sichtbar ist, seine Farbe und einige Opazität, damit er die Objekte dahinter nicht vollständig verdeckt.

### Hinzufügen von Licht

Die grundlegenden Lichtarten in A-Frame sind richtungsgebunden und ambient. Die erste Art ist ein Richtungslight, das irgendwo in der Szene platziert wird, während die zweite Art das Licht der ersten Art reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie den neuen Code unter Ihren vorherigen Hinzufügungen hinzu — dies verwendet das Standard `<a-light>` Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das Richtungslicht hat eine weiße Farbe, seine Intensität ist auf `0.5` eingestellt und es befindet sich an der Position `-1 1 2`. Das Ambient-Licht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von etwas fortgeschrittener Geometrie

Wir haben bereits einen Würfel in der Szene; jetzt versuchen wir, mehr Formen hinzuzufügen. Wir sind nicht auf die Standard-Entities wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte, fortgeschrittene Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unter dem vorherigen Code ein:

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

Unser Entity hat eine [torus primitive](https://aframe.io/docs/components/geometry.html#Torus), die seine Form darstellt. Wir übergeben diesem Shape einige Anfangsvariablen: den Radius der Außenkante des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs der Schlauchfläche. Rotation und Position sind auf die gleiche Weise eingestellt, wie wir sie früher gesehen haben.

### Ein Material definieren

Der Torus ist nun in der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Aussehen des Entities zu definieren. Bearbeiten Sie das `<a-entity>`, das den Torus definiert, um folgendermaßen auszusehen:

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

Im neu hinzugefügten `material` Attribut richten wir die `color` des Materials ein, dann seine `roughness` (ein raueres Material wird reflektiertes Licht in mehr Richtungen streuen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript zur Mischung

Es ist auch möglich, die Szene mit mittels JavaScript erstellten Entities zu bevölkern, also lassen Sie uns es verwenden, um eine dritte Form hinzuzufügen, einen Zylinder. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>` Elements hinzu, direkt nach dem `<a-scene>` Element, und fügen Sie dann den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Wir erhalten zuerst eine Referenz zum Szenen-Handler, dann erstellen wir das Zylinderelement als ein A-Frame-Entity. Danach geht es nur noch darum, die richtigen Attribute festzulegen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder zur Szene hinzu. Das war's — Sie haben drei verschiedene Formen mit A-Frame erstellt!
Es ist beeindruckend, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript erstellen zu können.

## Animation

Wir haben bereits `rotation` und `position` benutzt, um die Formen in der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion einer [animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns hilft, Elemente zu animieren. Fügen Sie die unten gesehene `animation` Komponente dem `<a-box>` Element als Eigenschaft hinzu, wie gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei allen anderen Entities können Sie Schlüsselerigenschaften für die Animation definieren. Wir werden das `rotation` Attribut von `20 0 0` zu `20 360 0` animieren, damit es eine volle Drehung macht. Die Animationsrichtung ist so eingestellt, dass sie sich abwechselt, sodass die Animation vorwärts abgespielt wird und dann zurück. Die Dauer ist auf 4 Sekunden festgelegt und sie wird unendlich wiederholt. Die Animation verwendet `easing` für das Abmildern, wobei [tween.js](https://github.com/tweenjs/tween.js/) intern implementiert wird.

### Skalierung

Wir können auch Animationen zu Entities mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, auf die gleiche Weise. Fügen Sie die folgende `animation` Komponente Ihrem Torus hinzu:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, Standard-Skalierung ist `1 1 1`, und wir werden sie auf `1 0.5 1` animieren, sodass die `y` Achse von `1` zu `0.5` skaliert wird. Das von uns verwendete Easing ist `linear`. Durch das Setzen der Richtung auf `alternate` wird die Skala auf `0.5` animiert, und dann wieder auf `1` in 2 Sekunden. Auch hier wird die Animation unendlich wiederholt.

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

Wir verwenden die `render()` Funktion, um die Position des Zylinders in jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und sehen Sie, wie sich dies auf die Bewegung auswirkt.

## A-Frame Beispiel mit Animation

Alles wird richtig gerendert und animiert — Glückwunsch zum Aufbau Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

```html live-sample___a-frame-animation
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
<a-scene>
  <a-sky color="#DDDDDD"></a-sky>

  <a-light
    type="directional"
    color="#FFF"
    intensity="0.5"
    position="-1 1 2"></a-light>
  <a-light type="ambient" color="#FFF"></a-light>

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

A-Frame richtet sich an Webentwickler, indem es eine einfach zu verwendende Web-Markup bietet und all die Vorteile, die es mit sich bringt, wie JavaScript-Manipulation. Es ist einfach zu starten, bietet aber auch eine leistungsstarke API für fortschrittliche Konzepte und den Umgang mit browserübergreifenden Unterschieden. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Webseite](https://aframe.io/)
- [Einführung in den Artikel A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Steuerungs-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
