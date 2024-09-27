---
title: Eine einfache Demo mit A-Frame aufbauen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) Erlebnisse in Webbrowsern zu erstellen. Dennoch wartet die Gemeinschaft noch auf Werkzeuge und Bibliotheken, die dies einfacher machen. Mozillas [A-Frame](https://aframe.io/) Framework bietet eine Markupsprache, mit der wir 3D-VR-Landschaften aufbauen können, die ein System verwenden, das Webentwicklern vertraut ist und den Prinzipien des Game Development Codings folgt. Dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame loslegen und eine einfache Demo erstellen können.

## Überblick auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie zum Beispiel auf Desktop, Mobilgeräten (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorgefertigte Komponenten für die Nutzung in Anwendungen — Modelle, Videoplayer, Skyboxes, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity Component System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Game Development Welt bekannt ist, richtet sich aber an Webentwickler mit einer vertrauten Markup-Struktur, die mit JavaScript manipulierbar ist. Das Endergebnis sind 3D-Web-Erfahrungen, die standardmäßig VR-fähig sind.

## Einrichtungsumgebung

Beginnen wir mit der Einrichtung einer Umgebung, um etwas mit A-Frame zu erstellen. Dann bauen wir eine Demo und führen sie aus. Sie sollten:

- Sicherstellen, dass Sie einen modernen Browser mit guter WebGL-Unterstützung (und WebVR-Unterstützung, falls Sie über verfügbare VR-Hardware verfügen) wie den neuesten Firefox oder Chrome verwenden — laden Sie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder Chrome (v54 oder höher) herunter.
- (Optional) Ein VR-Gerät wie Oculus Rift oder Google Cardboard einrichten.
- Ein neues Verzeichnis anlegen, um Ihr Projekt darin zu speichern.
- Eine Kopie der neuesten [A-Frame JavaScript-Bibliotheksdatei](https://github.com/aframevr/aframe/tree/master/dist) in Ihr Verzeichnis speichern (überprüfen Sie das GitHub-Repository auf die neuesten stabilen und Dev-Builds).
- Die [A-Frame-Dokumentation](https://aframe.io/docs/) in einem separaten Tab öffnen — sie ist nützlich zum Nachschlagen.

## HTML-Struktur

Der erste Schritt besteht darin, ein HTML-Dokument zu erstellen — erstellen Sie in Ihrem Projektverzeichnis eine neue Datei `index.html` und speichern Sie den folgenden HTML-Code darin:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: A-Frame demo</title>
    <script src="aframe.min.js"></script>
  </head>
  <body>
    <!-- HTML goes here -->
  </body>
</html>
```

Dies enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}}-Element bindet das A-Frame-Framework in die Seite ein; wir schreiben unseren Beispielcode innerhalb des {{htmlelement("body")}}-Elements.

### Die Szene initialisieren

Eine Szene ist der Ort, an dem alles passiert. Beim Erstellen neuer Objekte in der Demo werden wir alle zur Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt.

> [!NOTE]
> Eine Entity ist jedes Element — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, eine Lichtquelle oder ein Geräusch sein.

Erstellen wir die Szene, indem wir ein `<a-scene>`-Element innerhalb des `<body>`-Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Einen Würfel hinzufügen

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>`-Elements. Fügen Sie es jetzt hinzu:

```html
<a-box color="#0095DD" position="0 1 0" rotation="20 40 0"></a-box>
```

Es enthält ein paar bereits definierte Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Rotation des Würfels.

> [!NOTE]
> Die Entfernungswerte (z.B. für die y-Position des Würfels) sind einheitenlos und können im Grunde alles sein, was für Ihre Szene geeignet erscheint — Millimeter, Meter, Fuß oder Meilen — es liegt bei Ihnen.

### Einen Hintergrund hinzufügen: Sky box

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall werden wir eine einfache Farbe verwenden, aber es könnte auch ein Bild sein, usw. Beim Herumschauen würde man den Eindruck bekommen, im offenen Himmel, einer Holzhütte — wo auch immer Sie möchten — zu sein! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>`-Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

An dieser Stelle, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie den Würfel auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund bereits sehen:

![Eine Illustration einer 3D-Darstellung eines blauen Würfels, der auf einem helleren grauen Hintergrund angezeigt wird.](cube.png)

Hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/m85148b4/","","350")}}

Sie können sich das auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/cube.html).

A-Frame kümmert sich darum, alles einzurichten, was Sie brauchen:

- Eine Standard-Lichtquelle und Kamera sind enthalten, damit der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus zum Umsehen und die Tastatur zur Bewegung verwenden
  (probieren Sie die Tasten <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd>).

- Es gibt sogar einen "Enter VR mode"-Button in der unteren rechten Ecke des Bildschirms, der es Ihnen ermöglicht, in den Vollbildmodus mit stereoskopischer Bildanzeige zu wechseln, wenn Sie die notwendige VR-Hardware eingerichtet und betriebsbereit haben.

### Eine Kamera angeben

Eine Kamera-Entity kann erstellt werden, indem ein [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Element zur Szene hinzugefügt wird. Wir können die Position der Kamera explizit festlegen und sie etwas vom Zentrum der Szene zurückbewegen, damit wir die Formen sehen können. Fügen Sie dies kurz vor dem schließenden `</a-scene>`-Element hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, der `cursor-*` Attribute verwendet (standardmäßig ist er unsichtbar.) — wir haben seine Skalierung festgelegt, damit er leichter sichtbar ist, seine Farbe und etwas Opazität, damit er die dahinterliegenden Objekte nicht vollständig verdeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind Richtungslicht und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert wird, während der zweite das Licht des ersten Typs reflektiert, damit es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu — dies verwendet das Standard-`<a-light>`-Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das Richtungslicht hat eine weiße Farbe, seine Intensität ist auf `0.5` gesetzt, und es ist an der Position `-1 1 2` platziert. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen fortgeschrittener Geometrie

Wir haben bereits einen Würfel in der Szene; jetzt versuchen wir, weitere Formen hinzuzufügen. Wir sind nicht auf die Standardeinheiten wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte fortgeschrittene Formen erstellen. Versuchen wir einen Torus hinzuzufügen — fügen Sie dieses Element unter dem vorherigen Code hinzu:

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

Unsere Entity hat eine [Torus-Primitiv](https://aframe.io/docs/components/geometry.html#Torus), die ihre Form repräsentiert. Wir richten einige Anfangsvariablen für diese Form ein: den Radius des äußeren Randes des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfanges des Rohrgesichts. Drehung und Position werden auf die gleiche Weise festgelegt, wie wir es zuvor gesehen haben.

### Ein Material definieren

Der Torus ist jetzt auf der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus — das liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Aussehen der Entity zu definieren. Bearbeiten Sie das `<a-entity>`, das den Torus definiert, um wie folgt auszusehen:

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

Im neuen `material`-Attribut legen wir die `color` des Materials fest, dann seine `roughness` (ein raueres Material wird reflektiertes Licht in mehr Richtungen verteilen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Etwas JavaScript hinzufügen

Es ist auch möglich, die Szene mit über JavaScript erstellten Entitäten zu füllen. Lassen Sie uns es verwenden, um eine dritte Form, einen Zylinder, hinzuzufügen. Fügen Sie ein neues {{htmlelement("script")}}-Element am Ende des `<body>`-Elements ein, direkt nach dem `<a-scene>`-Element, und fügen Sie den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Zuerst holen wir uns eine Referenz auf den Szenen-Handler und dann erstellen wir das Zylinderelement als A-Frame-Entity. Danach geht es nur noch darum, die richtigen Attribute zu setzen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder zur Szene hinzu. Damit haben Sie drei verschiedene Formen mit A-Frame erstellt! So sieht es jetzt aus:

![Eine Illustration einer 3D-Darstellung von drei verschiedenen geometrischen Formen, die auf einem grauen Hintergrund angezeigt werden: die erste ist ein dunklerer grauer Torus, die zweite ein blauer Würfel und die letzte ein gelber Zylinder.](shapes.png)

Es ist beeindruckend, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript erstellen zu können.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion einer [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die unten gezeigte `animation` Komponente zum `<a-box>`-Element als Eigenschaft hinzu, wie gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei jedem anderen Entity können Sie Schlüsseleigenschaften für die Animation definieren. Wir werden das `rotation`-Attribut von `20 0 0` zu `20 360 0` animieren, also wird es eine vollständige Umdrehung machen. Die Animationsrichtung ist auf alternieren gesetzt, sodass die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer ist auf 4 Sekunden festgelegt, und sie wird unendlich oft wiederholt. Die Animation verwendet `easing` für die Dämpfung, wobei [tween.js](https://github.com/tweenjs/tween.js/) intern implementiert wird.

### Skalierung

Wir können auch Animationen zu Entities mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, und zwar auf ähnliche Weise. Fügen Sie die folgende `animation` Komponente Ihrem Torus hinzu:

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
  position="-3 1 0"
  animation="property: scale; to: 1 0.5 1; dir: alternate; dur: 2000; loop: true; easing: linear;">
</a-entity>
```

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die initiale, Standard-Skalierung ist `1 1 1`, und wir werden sie zu `1 0.5 1` animieren, sodass die `y`-Achse von `1` zu `0.5` skaliert wird. Das `easing`, das wir verwenden werden, ist `linear`. Indem wir die Richtung auf `alternate` setzen, wird die Skalierung zu `0.5` animiert und dann in 2 Sekunden wieder zu `1` zurück animiert. Wiederum wird die Animation unendlich oft wiederholt.

### Bewegung

Wir könnten `animation` verwenden, um die Position der dritten Form zu ändern oder stattdessen JavaScript verwenden. Fügen Sie diesen Code am Ende des `<script>`-Tags hinzu:

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

Wir verwenden die Funktion `render()`, um die Position des Zylinders bei jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y`-Achse zu ändern, und sehen Sie, wie sich die Bewegung auswirkt.

## Fazit

Alles wird ordnungsgemäß gerendert und animiert — herzlichen Glückwunsch, dass Sie Ihre erste A-Frame-Szene erstellt haben! So sieht die endgültige Version aus und funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/lowperry/xmo62ku0/5/","","350")}}

Wenn Sie ein VR-Gerät zur Verfügung haben, ist es jetzt ein guter Zeitpunkt, Ihre Szene auch damit auszuprobieren.

> [!NOTE]
> Sie können sich das auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/shapes.html).

Das war einfacher, als Sie dachten, oder? A-Frame richtet sich an Webentwickler, indem es einfach zu verwendendes Webmarkup bietet und alle Vorteile, die dies mit sich bringt, wie die JavaScript-Manipulation. Es ist einfach zu starten, bietet aber auch eine leistungsstarke API für fortgeschrittene Konzepte und befasst sich mit browserübergreifenden Unterschieden und dergleichen. Die Gemeinschaft wächst, ebenso wie die Anzahl der unterstützten VR-Geräte — es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame-Website](https://aframe.io/)
- [Artikel zur Einführung von A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Steuerungs-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
