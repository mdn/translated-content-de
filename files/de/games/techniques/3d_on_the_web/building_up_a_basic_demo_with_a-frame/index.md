---
title: Aufbau einer einfachen Demo mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen es uns bereits, virtuelle Realität (VR) und erweiterte Realität (AR) in Webbrowsern zu erstellen, aber die Community wartet noch auf Werkzeuge und Bibliotheken, um dies zu erleichtern. Mozillas [A-Frame](https://aframe.io/) Framework bietet eine Markupsprache, die es uns erlaubt, 3D VR-Landschaften mit einem Webentwicklern vertrauten System zu erstellen, das den Prinzipien der Spieleentwicklung folgt; dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame beginnen und wie man damit eine einfache Demo erstellt.

## Überblick auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie zum Beispiel auf dem Desktop, mobil (iOS und Android) und auf Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorgefertigte Komponenten zur Nutzung in Anwendungen – Modelle, Videoplayer, Skyboxes, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity Component System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungswelt bekannt ist, sich jedoch an Webentwickler mit einer vertrauten Markup-Struktur richtet, die mit JavaScript manipulierbar ist. Das Endergebnis sind 3D-Weberfahrungen, die standardmäßig VR-fähig sind.

## Einrichtung der Umgebung

Beginnen wir damit, eine Umgebung einzurichten, um etwas mit A-Frame zu erstellen. Wir werden dann eine Demo erstellen und ausführen. Sie sollten damit beginnen:

- Sicherstellen, dass Sie einen modernen Browser mit guter WebGL-Unterstützung verwenden (und WebVR-Unterstützung, wenn Sie über die entsprechende VR-Hardware verfügen), wie z.B. den neuesten Firefox oder Chrome – laden Sie sich [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder Chrome (v54 oder höher) herunter.
- (Optional) Ein VR-Gerät wie Oculus Rift oder Google Cardboard einrichten.
- Erstellen Sie ein neues Verzeichnis, um Ihr Projekt darin zu speichern.
- Speichern Sie eine Kopie der neuesten [A-Frame JavaScript-Bibliotheksdatei](https://github.com/aframevr/aframe/tree/master/dist) in Ihrem Verzeichnis (siehe das GitHub-Repository für die neuesten stabilen und Entwicklerversionen).
- Öffnen Sie die [A-Frame-Dokumentation](https://aframe.io/docs/) in einem separaten Tab – es ist nützlich, darauf zu verweisen.

## HTML-Struktur

Der erste Schritt besteht darin, ein HTML-Dokument zu erstellen – erstellen Sie innerhalb Ihres Projektverzeichnisses eine neue `index.html`-Datei und speichern Sie den folgenden HTML-Code darin:

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

Dies enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}}-Element bindet das A-Frame-Framework auf der Seite ein; wir werden unseren Beispielcode innerhalb des {{htmlelement("body")}}-Elements platzieren.

### Initialisierung der Szene

Eine Szene ist der Ort, an dem alles passiert. Wenn neue Objekte in der Demo erstellt werden, fügen wir sie alle der Szene hinzu, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt.

> [!NOTE]
> Ein Entity ist jedes Element – es kann ein Objekt wie ein Würfel, Zylinder oder Kegel sein, aber es kann auch eine Kamera, Licht oder Schallquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>`-Element innerhalb des `<body>`-Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Hinzufügen eines Würfels

Das Hinzufügen des Würfels zur Szene erfolgt durch das Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>`-Elements. Fügen Sie es jetzt hinzu:

```html
<a-box color="#0095DD" position="0 1 0" rotation="20 40 0"></a-box>
```

Es enthält einige Parameter, die bereits definiert sind: `color`, `position` und `rotation` – diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Rotation des Würfels.

> [!NOTE]
> Die Entfernungswerte (z.B. für die y-Position des Würfels) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene für geeignet halten – Millimeter, Meter, Fuß oder Meilen – es liegt bei Ihnen.

### Hinzufügen eines Hintergrunds: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, dargestellt durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element. In unserem Fall werden wir eine einfache Farbe verwenden, aber es könnte auch ein Bild sein usw. Das Umsehen gibt den Eindruck, sich im Freien am Himmel, in einer Holzhütte oder wo auch immer Sie wollen zu befinden! Fügen Sie den folgenden HTML-Code vor dem `<a-box>`-Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

An diesem Punkt, wenn Sie den Code speichern und Ihren Browser aktualisieren, können Sie den Würfel bereits auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund sehen:

![Eine Illustration einer 3D-Darstellung eines blauen Würfels auf einem hellgrauen Hintergrund.](cube.png)

Hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/m85148b4/","","350")}}

Sie können ihn auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/cube.html).

A-Frame kümmert sich um alles, was Sie brauchen:

- Eine Standardlichtquelle und Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus verwenden, um sich umzusehen, und die Tastatur, um sich zu bewegen
  (versuchen Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd>, und <kbd>D</kbd> Tasten).

- Es gibt sogar einen "Enter VR mode"-Button in der unteren rechten Ecke des Bildschirms, um in den Vollbildmodus zu wechseln und stereoskopisches Bildsehen zu ermöglichen, wenn Sie die notwendigen VR-Hardware eingerichtet und betriebsbereit haben.

### Spezifizieren einer Kamera

Eine Kamera-Entity kann erstellt werden, indem ein [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Element zur Szene hinzugefügt wird. Wir können die Position der Kamera explizit setzen und ein wenig zurück vom Mittelpunkt der Szene verschieben, damit wir die Formen sehen können. Fügen Sie dies kurz vor dem schließenden `</a-scene>`-Element hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, indem wir die `cursor-*` Attribute verwenden (standardmäßig ist er unsichtbar.) – wir haben seine Skala so eingestellt, dass er leichter sichtbar ist, seine Farbe und etwas Transparenz, damit er die dahinter liegenden Objekte nicht vollständig verdeckt.

### Hinzufügen von Lichtern

Die grundlegenden Lichttypen in A-Frame sind direktional und Umgebungslicht. Der erste Typ ist ein direktionales Licht, das irgendwo auf der Szene platziert ist, während der zweite Typ das Licht vom ersten Typ reflektiert, sodass es natürlicher aussieht; dies kann global festgelegt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu – dies nutzt das Standard `<a-light>` Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das direktionale Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` gesetzt und es befindet sich an der Position `-1 1 2`. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Hinzufügen von fortgeschrittener Geometrie

Wir haben bereits einen Würfel auf der Szene; jetzt versuchen wir, weitere Formen hinzuzufügen. Wir sind nicht auf die Standard-Entities wie `<a-box>` beschränkt – mit `<a-entity>` können wir benutzerdefinierte, fortgeschrittene Formen erstellen. Versuchen wir, einen Torus hinzuzufügen – fügen Sie dieses Element unter dem vorherigen Code hinzu:

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

Unser Entity hat eine [torus primitive](https://aframe.io/docs/components/geometry.html#Torus), die seine Form darstellt. Wir übergeben einige Anfangsvariablen an diese Form: den Radius der äußeren Kante des Torus, den Radius des Rohrs und die Anzahl der Segmente entlang des Umfangs des Rohrquerschnitts. Rotation und Position sind auf die gleiche Weise gesetzt, die wir zuvor gesehen haben.

### Definieren eines Materials

Der Torus ist jetzt in der Szene sichtbar, aber seine Farbe sieht nicht sehr gut aus – das liegt daran, dass wir ein [material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Erscheinungsbild der Entity zu definieren. Bearbeiten Sie das `<a-entity>` des Torus, damit es wie folgt aussieht:

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

Im neuen `material` Attribut haben wir die `color` des Materials eingerichtet, dann seine `roughness` (ein raueres Material streut reflektiertes Licht in mehr Richtungen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Hinzufügen von JavaScript

Es ist auch möglich, die Szene mit mittels JavaScript erstellten Entities zu füllen, also fügen wir damit auch eine dritte Form hinzu, einen Zylinder. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>`-Elements, direkt nach dem `<a-scene>` Element hinzu, und fügen Sie dann den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Zuerst holen wir uns eine Referenz auf die Szenenverarbeitung, dann erstellen wir das Zylinderelement als A-Frame-Entity. Danach geht es darum, die richtigen Attribute zu setzen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder der Szene hinzu. Das war's – Sie haben drei verschiedene Formen mit A-Frame erstellt! So sieht es aktuell aus:

![Eine Illustration der 3D-Darstellung von drei verschiedenen geometrischen Formen auf einem grauen Hintergrund: Die erste ist ein dunklerer grauer Torus, die zweite ist ein blauer Würfel und die letzte ist ein gelber Zylinder.](shapes.png)

Es ist beeindruckend, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript erstellen zu können.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen auf der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die unten zu sehende `animation` Komponente dem `<a-box>` Element als Eigenschaft hinzu, wie gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei allen anderen Entities können Sie Schlüsselinformationen für die Animation definieren. Wir werden das `rotation` Attribut von `20 0 0` zu `20 360 0` animieren, damit es eine ganze Umdrehung macht. Die Animationsrichtung ist auf alternate gesetzt, damit die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer beträgt 4 Sekunden und sie wird unendlich oft wiederholt. Die Animation verwendet `easing` für das Easing, wobei intern [tween.js](https://github.com/tweenjs/tween.js/) implementiert ist.

### Skalierung

Wir können auch Animationen für Entities mit benutzerdefinierter Geometrie wie den Torus auf ähnliche Weise hinzufügen. Fügen Sie die folgende `animation` Komponente Ihrem Torus hinzu:

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

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, standardmäßige Skalierung ist `1 1 1`, und wir werden sie auf `1 0.5 1` animieren, sodass die `y` Achse von `1` auf `0.5` skaliert wird. Das `easing` das wir verwenden werden, ist linear. Durch die Einstellung der Richtung auf `alternate` wird die Skalierung auf `0.5` animiert und dann auf `1` über 2 Sekunden zurück animiert. Auch hier wird die Animation unendlich oft wiederholt.

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

Wir verwenden die `render()` Funktion, um die Position des Zylinders in jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und sehen Sie, wie sich das auf die Bewegung auswirkt.

## Fazit

Alles wird korrekt gerendert und animiert – Glückwunsch zum Aufbau Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/lowperry/xmo62ku0/5/","","350")}}

Wenn Sie ein VR-Gerät zur Verfügung haben, ist es jetzt ein guter Zeitpunkt, Ihre Szene damit auszuprobieren.

> [!NOTE]
> Sie können ihn auch auf [GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/shapes.html).

Das war einfacher, als Sie dachten, oder? A-Frame richtet sich an Webentwickler, indem es leicht zu verwendendes Web-Markup und all die damit verbundenen Vorteile bietet, wie z.B. JavaScript-Manipulation. Es ist leicht zu beginnen, bietet jedoch auch eine leistungsstarke API für fortgeschrittene Konzepte und bewältigt Unterschiede zwischen Browsern und Ähnliches. Die Community wächst, ebenso wie die Anzahl der unterstützten VR-Geräte – es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame-Website](https://aframe.io/)
- [Artikel: Introducing A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physics Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad Controls Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
