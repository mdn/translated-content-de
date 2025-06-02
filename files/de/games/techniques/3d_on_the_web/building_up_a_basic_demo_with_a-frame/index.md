---
title: Aufbau einer einfachen Demo mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: fc52eb81b630ca02c16addc346924295bdb5aaa8
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen bereits das Erstellen von Virtual Reality (VR) und Augmented Reality (AR)-Erlebnissen in Webbrowsern. Um dies zu erleichtern, bietet Mozillas [A-Frame](https://aframe.io/) Framework eine Markup-Sprache, die es Webentwicklern ermöglicht, 3D-VR-Landschaften mit einem vertrauten Ansatz zu erstellen und die Grundsätze der Spieleentwicklung zu befolgen. Dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame anfangen und es verwenden, um eine einfache Demo aufzubauen.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist kompatibel mit A-Frame Version `1.6.0`.

## Überblick auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie Desktop, Mobile (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorgefertigte Komponenten zur Verwendung in Anwendungen - Modelle, Videoplayer, Skyboxes, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity-Komponenten-System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungsbranche bekannt ist, richtet sich aber an Webentwickler mit einer vertrauten Markupstruktur, die mit JavaScript manipuliert werden kann. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungsumgebung

Um mit A-Frame zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden. Eine Möglichkeit besteht darin, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame-Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis. Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Egal, für welchen Weg Sie sich entscheiden, stellen Sie sicher, dass Sie die [A-Frame-Dokumentation](https://aframe.io/docs/) geöffnet haben, während Sie arbeiten, um sie als Referenz zu verwenden.

### HTML-Starter für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, hier ist die HTML-Struktur zum Starten:

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

Dies enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}}-Element bindet das A-Frame-Framework in die Seite ein; wir werden unseren Beispielcode innerhalb des {{htmlelement("body")}}-Elements schreiben.

### Initialisieren einer Szene in A-Frame

Eine Szene ist der Ort, an dem alles passiert. Wenn wir neue Objekte in der Demo erstellen, werden wir sie alle zur Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Szenen-Entität](https://aframe.io/docs/core/scene.html) dargestellt. Eine Entität ist jedes Element - es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, Lichtquelle oder Klangquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>`-Element innerhalb des `<body>`-Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html)-Elements innerhalb des `<a-scene>`-Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position in der 3D-Szene und die Rotation des Würfels. Die Abstandsangaben (z.B. für die y-Position des Würfels) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen — das liegt bei Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html)-Element. In unserem Fall werden wir eine einfache Farbe verwenden, aber es könnte auch ein Bild sein, etc. Beim Herumschauen würde man den Eindruck bekommen, sich im offenen Himmel, einer Holzhütte - wo auch immer Sie möchten - zu befinden! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>`-Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame-Formenbeispiel

An diesem Punkt, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie bereits den Würfel auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund sehen:

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

A-Frame kümmert sich darum, alles einrichten, was Sie brauchen:

- Eine Standard-Lichtquelle und eine Kamera sind enthalten, damit der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus zum Herumschauen und die Tastatur zur Bewegung verwenden.
  Probieren Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten.
- Es gibt einen "Enter VR mode"-Button in der unteren rechten Ecke des Bildschirms, um den Wechsel zum Vollbild- und stereoskopischen Bildansicht zu ermöglichen, sofern Sie die notwendige VR-Hardware eingerichtet und bereit haben.

### Festlegen einer Kamera

Eine Kamera-Entität kann durch Hinzufügen eines [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html)-Elements zur Szene erstellt werden. Wir können die Position der Kamera explizit festlegen und sie ein wenig vom Zentrum der Szene zurückversetzen, sodass wir die Formen sehen können. Fügen Sie dies kurz vor dem schließenden `</a-scene>`-Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, unter Verwendung der `cursor-*` Attribute (standardmäßig ist er unsichtbar). — Wir haben seine Skalierung so eingestellt, dass er leichter sichtbar ist, seine Farbe und etwas Opazität, damit er die dahinterliegenden Objekte nicht vollständig verdeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind gerichtet und Umgebung. Der erste Typ ist ein gerichtetes Licht, das irgendwo in der Szene platziert wird, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie den neuen Code unter Ihren bisherigen Ergänzungen hinzu — dies verwendet das Standard-`<a-light>`-Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das gerichtete Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` eingestellt, und es ist an Position `-1 1 2` platziert. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von etwas fortgeschrittener Geometrie

Wir haben bereits einen Würfel in der Szene; jetzt lassen Sie uns versuchen, mehr Formen hinzuzufügen. Wir sind nicht auf die Standardeinheiten wie `<a-cube>` beschränkt — durch die Verwendung von `<a-entity>` können wir benutzerdefinierte fortgeschrittene Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unterhalb des vorherigen Codes hinzu:

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

Unsere Entität hat eine [Torus-Primitiv](https://aframe.io/docs/components/geometry.html#Torus), die seine Form repräsentiert. Wir übergeben einige Startvariablen an diese Form: den Radius des Außenrands des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs der Rohrfläche jeweils. Rotation und Position werden auf die gleiche Weise wie zuvor eingestellt.

### Definieren eines Materials

Der Torus ist jetzt auf der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Aussehen der Entität zu definieren. Bearbeiten Sie das `<a-entity>`, das den Torus definiert, sodass es wie folgt aussieht:

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

Im neuen `material` Attribut richten wir die `color` des Materials ein, dann seine `roughness` (ein raues Material wird das reflektierte Licht in mehr Richtungen als ein glattes Material streuen) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript

Es ist möglich, die Szene auch mit in JavaScript erstellten Entitäten zu füllen, also verwenden wir es, um eine dritte Form, einen Zylinder, hinzuzufügen. Fügen Sie ein neues {{htmlelement("script")}}-Element am Ende des `<body>`-Elements hinzu, direkt nach dem `<a-scene>`-Element, und dann den folgenden JavaScript-Code darin:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Wir erhalten zuerst eine Referenz zum Szenen-Handler, dann erstellen wir das Zylinder-Element als A-Frame-Entität. Danach geht es darum, die richtigen Attribute festzulegen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder zur Szene hinzu. Das war's - Sie haben drei verschiedene Formen mit A-Frame erstellt! Es ist beeindruckend, in der Lage zu sein, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript zu erstellen.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die `animation` Komponente, wie unten gezeigt, als Eigenschaft zum `<a-box>`-Element hinzu:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei anderen Entitäten können Sie Schlüsseleigenschaften für die Animation definieren. Wir animieren das `rotation` Attribut von `20 0 0` zu `20 360 0`, sodass es eine volle Drehung macht. Die Animationsrichtung ist auf alternierend eingestellt, sodass die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer ist auf 4 Sekunden eingestellt und sie wird unendlich wiederholt. Die Animation verwendet `easing` für das "Easing", wobei intern [tween.js](https://github.com/tweenjs/tween.js/) implementiert wird.

### Skalierung

Wir können auch Animation zu Entitäten mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, auf ähnliche Weise. Fügen Sie die folgende `animation` Komponente zu Ihrem Torus hinzu:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, Standard-Skalierung ist `1 1 1`, und wir werden es zu `1 0.5 1` animieren, sodass die `y` Achse von `1` zu `0.5` skaliert wird. Das `easing`, das wir verwenden werden, ist `linear`. Durch die Einstellung der Richtung auf `alternierend` wird die Skalierung auf `0.5` animiert und dann während 2 Sekunden wieder auf `1` animiert. Auch hier wird die Animation unendlich oft wiederholt.

### Bewegung

Wir könnten das `animation` verwenden, um die Position der dritten Form zu ändern, oder wir könnten stattdessen JavaScript verwenden. Fügen Sie diesen Code am Ende des `<script>`-Tags hinzu:

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

Wir verwenden die `render()` Funktion, um die Position des Zylinders bei jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und sehen, wie es die Bewegung beeinflusst.

## A-Frame-Beispiel mit Animation

Alles wird korrekt gerendert und animiert - herzlichen Glückwunsch zum Aufbau Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

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

A-Frame richtet sich an Webentwickler, indem es leicht zu verwendendes Web-Markup und alle Vorteile bietet, die das mit sich bringt, wie die Manipulation von JavaScript. Es ist leicht anzufangen, bietet aber auch eine leistungsstarke API für fortgeschrittene Konzepte sowie den Umgang mit browserübergreifenden Unterschieden. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Website](https://aframe.io/)
- [Artikel über die Einführung von A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Steuerungs-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
