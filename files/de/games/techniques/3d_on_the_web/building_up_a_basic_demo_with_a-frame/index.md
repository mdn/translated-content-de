---
title: Aufbau einer grundlegenden Demo mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 6d2000984203c51f1aad49107ebcebe14d3c1238
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) Erlebnisse in Webbrowsern zu erstellen.
Um dies zu erleichtern, bietet Mozillas [A-Frame](https://aframe.io/) Framework eine Markup-Sprache, die es Webentwicklern ermöglicht, 3D-VR-Landschaften mit einem vertrauten Ansatz zu erstellen und die Prinzipien der Spielentwicklungscodierung zu befolgen.
Dies ist nützlich für das schnelle und erfolgreiche Erstellen von Prototypen und Demos, ohne dass viel JavaScript oder GLSL geschrieben werden muss.
Dieser Artikel erklärt, wie Sie mit A-Frame loslegen und eine einfache Demo erstellen können.

> [!NOTE]
> Dieses Handbuch wurde zuletzt im November 2024 aktualisiert und ist mit der A-Frame Version `1.6.0` kompatibel.

## Überblick auf hoher Ebene

A-Frame läuft auf den meisten Umgebungen, wie z.B. Desktop, Mobile (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorgefertigte Komponenten zur Verwendung in Anwendungen — Modelle, Videoplayer, Skyboxen, Geometrien, Steuerungen, Animationen, Cursor, etc. Es basiert auf dem [Entity-Component-System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spielentwicklungswelt bekannt ist, aber es richtet sich an Webentwickler mit einer vertrauten Markup-Struktur, die mit JavaScript manipuliert werden kann. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungseinrichtung

Um mit der Entwicklung mit A-Frame zu beginnen, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden.
Eine Option ist, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame-Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis.
Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Egal für welche Variante Sie sich entscheiden, stellen Sie sicher, dass Sie die [A-Frame-Dokumentation](https://aframe.io/docs/) irgendwo geöffnet haben, während Sie arbeiten, als Referenz.

### HTML-Starter für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE erstellen, finden Sie hier die HTML-Struktur, um zu starten:

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

Dies enthält einige Basisinformationen wie das Dokument `charset` und den {{htmlelement("title")}}. Das {{htmlelement("script")}}-Element bindet das A-Frame-Framework in die Seite ein; wir werden unseren Beispielcode innerhalb des {{htmlelement("body")}}-Elements schreiben.

### Initialisierung einer Szene in A-Frame

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen neuer Objekte in der Demo fügen wir sie alle der Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt.
Eine Entity kann jedes Element sein — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber auch eine Kamera, eine Licht- oder Tonquelle.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>`-Element innerhalb des `<body>`-Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>`-Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position in der 3D-Szene und die Rotation des Würfels.
Die Distanzwerte (z.B. für die y-Position des Würfels) sind einheitslos und können grundsätzlich alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall werden wir eine einfache Farbe verwenden, aber es könnte auch ein Bild sein, etc. Herumzuschauen würde den Eindruck erwecken, sich in einem offenen Himmel, einer Holzhütte — wo immer Sie möchten — zu befinden! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>` Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame-Formbeispiel

An diesem Punkt, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie den Würfel bereits auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund sehen:

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

A-Frame kümmert sich um alles, was Sie brauchen:

- Eine Standardlichtquelle und eine Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus verwenden, um sich umzusehen und die Tastatur für die Bewegung. Versuchen Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten.
- Es gibt einen "Enter VR mode" Button in der unteren rechten Ecke des Bildschirms, um Ihnen zu ermöglichen, in den Vollbild- und Stereoskopmodus zu wechseln, wenn Sie die nötige VR-Hardware eingerichtet und bereit haben.

### Spezifizieren einer Kamera

Eine Kamera-Entity kann erstellt werden, indem ein [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Element zur Szene hinzugefügt wird. Wir können die Position der Kamera explizit festlegen und sie ein wenig vom Zentrum der Szene zurückbewegen, damit wir die Formen sehen können. Fügen Sie dies direkt vor dem schließenden `</a-scene>` Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, indem wir die `cursor-*` Attribute verwenden (standardmäßig ist er unsichtbar.) — wir haben seine Skalierung so eingestellt, dass er leichter sichtbar ist, seine Farbe und etwas Opazität, sodass er die Objekte dahinter nicht komplett verdeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind direktional und ambient. Der erste Typ ist ein direktionales Licht, das irgendwo in der Szene platziert ist, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu — dies verwendet das Standard `<a-light>` Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das direktionale Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` eingestellt und es befindet sich an der Position `-1 1 2`. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen einiger erweiterter Geometrie

Wir haben bereits einen Würfel in der Szene; nun versuchen wir, mehr Formen hinzuzufügen. Wir sind nicht auf die standardmäßigen Entitäten wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte erweiterte Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unter den vorherigen Code hinzu:

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

Unsere Entität hat eine [torus primitive](https://aframe.io/docs/components/geometry.html#Torus), die ihre Form darstellt. Wir übergeben einige Anfangsvariablen an diese Form: den Radius der Außenkante des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs der Rohrfläche. Rotation und Position sind auf die gleiche Weise festgelegt, wie wir es zuvor gesehen haben.

### Definieren eines Materials

Der Torus ist nun in der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Erscheinungsbild der Entität zu definieren. Bearbeiten Sie das `<a-entity>`, das den Torus definiert, sodass es wie folgt aussieht:

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

Im neuen `material` Attribut legen wir die `color` des Materials fest, dann seine `roughness` (ein raueres Material wird reflektiertes Licht in mehr Richtungen streuen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript

Es ist auch möglich, die Szene mit Entitäten zu füllen, die mit JavaScript erstellt wurden, also lassen Sie uns es verwenden, um eine dritte Form, einen Zylinder, hinzuzufügen. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>` Elements hinzu, direkt nach dem `<a-scene>` Element, und dann fügen Sie den folgenden JavaScript Code darin hinzu:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Wir erhalten zuerst eine Referenz zur Szenenhandler, dann erstellen wir das Zylinderelement als A-Frame-Entity. Danach geht es nur darum, die richtigen Attribute festzulegen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder der Szene hinzu. Das war's — Sie haben drei verschiedene Formen mit A-Frame erstellt!
Es ist beeindruckend, in der Lage zu sein, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript zu erstellen.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion einer [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die `animation` Komponente, die unten zu sehen ist, als Eigenschaft zum `<a-box>` Element hinzu, wie gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei anderen Entitäten können Sie Schlüsselmerkmale für die Animation definieren. Wir werden das `rotation` Attribut von `20 0 0` zu `20 360 0` animieren, sodass es eine volle Drehung macht. Die Animationsrichtung ist so eingestellt, dass sie sich abwechselt, sodass die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer ist auf 4 Sekunden eingestellt und sie wird unbegrenzt wiederholt. Die Animation verwendet `easing`, mit [tween.js](https://github.com/tweenjs/tween.js/), das intern implementiert ist.

### Skalierung

Wir können auch Animationen zu Entitäten mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, auf ähnliche Weise. Fügen Sie die folgende `animation` Komponente zu Ihrem Torus hinzu:

```html
<a-entity
  geometry="primitive: torus; radius: 1; radiusTubular: 0.1; segmentsTubular: 12;"
  material="color: #EAEFF2; roughness: 0.1; metalness: 0.5;"
  rotation="10 0 0"
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; direction: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, standardmäßige Skalierung ist `1 1 1` und wir werden es auf `1 0.5 1` animieren, sodass die `y` Achse von `1` auf `0.5` skaliert wird. Das `easing`, das wir verwenden werden, ist `linear`. Indem wir die Richtung auf `alternate` setzen, wird die Skala auf `0.5` animiert und dann innerhalb von 2 Sekunden zurück auf `1` animiert. Auch hier wird die Animation unbegrenzt wiederholt.

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

Wir verwenden die Funktion `render()`, um die Position des Zylinders bei jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und zu sehen, wie es die Bewegung beeinflusst.

## A-Frame-Beispiel mit Animation

Alles wird korrekt gerendert und animiert — herzlichen Glückwunsch zum Erstellen Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

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

<script>
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
</script>
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

{{embedlivesample("a-frame-animation", "", "400px")}}

## Zusammenfassung

A-Frame richtet sich an Webentwickler, indem es einfach zu verwendende Webmarkup und alle Vorteile bietet, die dies mit sich bringt, wie beispielsweise die JavaScript-Manipulation. Es ist einfach zu starten, bietet aber auch eine leistungsstarke API für fortgeschrittene Konzepte sowie den Umgang mit browserübergreifenden Unterschieden. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame-Website](https://aframe.io/)
- [Einführung in A-Frame 0.1.0 Artikel](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame-Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame-Gamepad-Steuerungen-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
