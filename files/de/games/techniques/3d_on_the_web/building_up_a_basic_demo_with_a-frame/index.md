---
title: Grundlegendes Demo mit A-Frame erstellen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: 4319d57835c493db5e4ec4c4b7b98dfba53d01eb
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) Erlebnisse in Webbrowsern zu erstellen. Um dies zu erleichtern, bietet Mozillas [A-Frame](https://aframe.io/) Framework eine Markup-Sprache, die es Webentwicklern ermöglicht, 3D-VR-Landschaften mit einem vertrauten Ansatz zu erstellen und dabei Prinzipien der Spieleentwicklung zu befolgen. Dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie man mit A-Frame anfängt und es nutzt, um ein einfaches Demo aufzubauen.

> [!NOTE]
> Dieser Leitfaden wurde zuletzt im November 2024 aktualisiert und ist mit A-Frame Version `1.6.0` kompatibel.

## Überblick auf hoher Ebene

A-Frame läuft auf den meisten Umgebungen, wie zum Beispiel Desktop, Mobilgeräten (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame baut auf [WebGL](/de/docs/Web/API/WebGL_API) auf und bietet vorgefertigte Komponenten, die in Anwendungen verwendet werden können — Modelle, Videoplayer, Himmelboxen, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity Component System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungswelt bekannt ist, richtet sich jedoch an Webentwickler mit einer vertrauten Markup-Struktur, die mit JavaScript manipuliert werden kann. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-fähig sind.

## Entwicklungsumgebung

Um mit A-Frame zu entwickeln, sollten Sie sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden. Eine Möglichkeit ist, ein VR-Gerät wie Oculus Rift oder Google Cardboard für die Experimente einzurichten.

Wenn Sie lokal in einer IDE entwickeln, erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern, und speichern Sie eine Kopie der [neuesten A-Frame Engine](https://aframe.io/docs/1.6.0/introduction/installation.html) in diesem Verzeichnis. Alternativ können Sie A-Frame von einem CDN laden:

```html
<script src="https://aframe.io/releases/1.6.0/aframe.min.js"></script>
```

Unabhängig davon, für welchen Weg Sie sich entscheiden, stellen Sie sicher, dass Sie die [A-Frame Dokumentation](https://aframe.io/docs/) geöffnet haben, während Sie arbeiten, um sie als Referenz zu verwenden.

### HTML-Grundstruktur für A-Frame

Wenn Sie Ihr Projekt lokal in einer IDE aufbauen, finden Sie hier die HTML-Struktur, um zu beginnen:

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

Diese enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}}-Element bindet das A-Frame-Framework in die Seite ein; wir werden unser Beispielcode im {{htmlelement("body")}}-Element schreiben.

### Eine Szene in A-Frame initialisieren

Eine Szene ist der Ort, an dem alles passiert. Wenn wir neue Objekte im Demo erstellen, fügen wir sie alle der Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt. Eine Entität ist jedes Element — es kann ein Objekt wie ein Würfel, Zylinder oder Kegel sein, aber es kann auch eine Kamera, Licht oder Klangquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>` Element innerhalb des `<body>` Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>` Elements. Fügen Sie es jetzt hinzu:

```html
<a-box position="0.5 0.5 -3" rotation="0 10 0" color="#4CC3D9"></a-box>
```

Es enthält bereits einige definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Rotation des Würfels. Die Abstandsangaben (z. B. für die y-Position des Würfels) sind einheitslos und können im Grunde genommen alles sein, was Sie für Ihre Szene geeignet halten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

### Hinzufügen eines Hintergrunds: Himmelbox

Eine Himmelbox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall verwenden wir eine einfache Farbe, aber es könnte auch ein Bild sein, usw. Beim Umschauen würde man den Eindruck haben, in einem offenen Himmel zu sein, einer Scheune aus Holz — wo auch immer Sie wollen! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>` Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

## A-Frame Form-Beispiel

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

A-Frame kümmert sich um alles, was Sie brauchen:

- Eine Standard-Lichtquelle und Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus zum Umschauen und die Tastatur für die Bewegung verwenden. Versuchen Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>.
- Es gibt eine Schaltfläche "VR-Modus betreten" in der unteren rechten Ecke des Bildschirms, mit der Sie bei vorhandenem VR-Setup- und Hardware in den Vollbildmodus mit stereoskopischer Bildansicht wechseln können.

### Eine Kamera spezifizieren

Eine Kamera-Entität kann durch Hinzufügen eines [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Elements zur Szene erstellt werden. Wir können die Position der Kamera explizit festlegen und sie ein wenig vom Zentrum der Szene zurückbewegen, sodass wir die Formen sehen können. Fügen Sie dies direkt vor dem schließenden `</a-scene>` Tag hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch für die angegebene Kamera einen Cursor definiert, der mit den `cursor-*` Attributen (standardmäßig ist er unsichtbar) eingerichtet wird — wir haben seine Skalierung so eingestellt, dass er leichter sichtbar wird, seine Farbe und eine gewisse Opazität, damit er die dahinterliegenden Objekte nicht vollständig verdeckt.

### Lichter hinzufügen

Die grundlegenden Lichttypen in A-Frame sind richtungs- und Umgebungslicht. Der erste Typ ist ein gerichtetes Licht, das irgendwo auf der Szene platziert wird, während der zweite das Licht vom ersten Typ widerspiegelt, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie den neuen Code unter Ihren bisherigen Ergänzungen hinzu — dies verwendet das Standard`<a-light>` Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das gerichtete Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` eingestellt und es befindet sich an der Position `-1 1 2`. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von fortgeschrittener Geometrie

Wir haben bereits einen Würfel auf der Szene; lassen Sie uns nun versuchen, mehr Formen hinzuzufügen. Wir sind nicht auf die Standardeinheiten wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte fortgeschrittene Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unter dem vorherigen Code hinzu:

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

Unsere Entität hat eine [Torus primitive](https://aframe.io/docs/components/geometry.html#Torus), die ihre Form darstellt. Wir übergeben dieser Form einige Anfangsvariablen: den Radius der äußeren Kante des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs des Rohrgesichts. Die Drehung und Position werden auf die gleiche Weise wie zuvor festgelegt.

### Ein Material definieren

Der Torus ist nun auf der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — dies liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Erscheinungsbild der Entität zu definieren. Bearbeiten Sie das `<a-entity>` Element, das den Torus definiert, damit es wie das folgende aussieht:

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

Im neuen `material` Attribut legen wir die `color` des Materials fest, dann seine `roughness` (ein raueres Material streut reflektiertes Licht in mehr Richtungen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript

Es ist auch möglich, die Szene mit JavaScript zu bevölkern. Lassen Sie uns damit eine dritte Form hinzufügen, einen Zylinder. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>` Elements hinzu, direkt nach dem `<a-scene>` Element, und fügen Sie den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Wir erhalten zuerst eine Referenz zum Szenen-Handler, dann erstellen wir das Zylinder-Element als A-Frame-Entität. Anschließend geht es darum, die richtigen Attribute festzulegen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder der Szene hinzu. Das war's - Sie haben drei verschiedene Formen mit A-Frame erstellt! Es ist beeindruckend, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript erstellen zu können.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die unten gezeigte `animation` Komponente als Eigenschaft zum `<a-box>` Element hinzu:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei anderen Entitäten können Sie Schlüsseleigenschaften für die Animation definieren. Wir animieren das `rotation` Attribut von `20 0 0` zu `20 360 0`, sodass es eine vollständige Drehung durchführt. Die Animationsrichtung ist auf alternieren eingestellt, sodass die Animation vorwärts abgespielt und dann zurück abgespielt wird. Die Dauer ist auf 4 Sekunden eingestellt und wird unendlich wiederholt. Die Animation verwendet `easing` zum Abgleichen, wobei [tween.js](https://github.com/tweenjs/tween.js/) intern implementiert wird.

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

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, Standard-Skala ist `1 1 1`, und wir werden sie auf `1 0.5 1` animieren, sodass die `y` Achse von `1` auf `0.5` skaliert wird. Das Abgleichen, das wir verwenden, ist `linear`. Durch die Einstellung, die Richtung zu `alternate` wird die Skalierung auf `0.5` animiert und dann in 2 Sekunden wieder auf `1` animiert. Auch hier wird die Animation unendlich wiederholt.

### Verschiebung

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

Wir verwenden die `render()` Funktion, um die Position des Zylinders in jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und sehen Sie, wie es die Bewegung beeinflusst.

## A-Frame Beispiel mit Animation

Alles wird korrekt gerendet und animiert — herzlichen Glückwunsch zum Aufbau Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

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
    cylinder.setAttribute("position", "3 " + (Math.sin(t * 2) + 1) + " 0");
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

A-Frame richtet sich an Webentwickler, indem es einfach zu verwendende Web-Markup und all die Vorteile bietet, die das mit sich bringt, wie JavaScript-Manipulation. Es ist einfach zu beginnen, bietet aber auch eine leistungsstarke API für fortgeschrittene Konzepte und den Umgang mit browserübergreifenden Unterschieden. Es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Website](https://aframe.io/)
- [Introducing A-Frame 0.1.0 Artikel](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Steuerungen Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
