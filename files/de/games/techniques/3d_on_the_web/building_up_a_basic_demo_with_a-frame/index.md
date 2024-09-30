---
title: Erstellen einer einfachen Demo mit A-Frame
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_A-Frame
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Die [WebXR](/de/docs/Games/Techniques/3D_on_the_web/WebXR) und [WebGL](/de/docs/Web/API/WebGL_API) APIs ermöglichen uns bereits, Virtual Reality (VR) und Augmented Reality (AR) Erlebnisse in Webbrowsern zu erstellen, aber die Gemeinschaft wartet immer noch auf Werkzeuge und Bibliotheken, die dies erleichtern. Mozillas [A-Frame](https://aframe.io/) Framework bietet eine Markup-Sprache, mit der wir 3D-VR-Landschaften mit einem System erstellen können, das Webentwicklern vertraut ist und den Prinzipien der Spieleentwicklung folgt; dies ist nützlich, um schnell und erfolgreich Prototypen und Demos zu erstellen, ohne viel JavaScript oder GLSL schreiben zu müssen. Dieser Artikel erklärt, wie Sie mit A-Frame starten und eine einfache Demo erstellen können.

## Überblick auf hoher Ebene

A-Frame läuft in den meisten Umgebungen, wie Desktop, Mobil (iOS und Android) und Geräten wie Oculus Rift, Gear VR und HTC Vive.

A-Frame basiert auf [WebGL](/de/docs/Web/API/WebGL_API) und bietet vorgefertigte Komponenten zur Verwendung in Anwendungen — Modelle, Videoplayer, Skyboxen, Geometrien, Steuerungen, Animationen, Cursor usw. Es basiert auf dem [Entity-Component-System](https://en.wikipedia.org/wiki/Entity_component_system), das in der Spieleentwicklungswelt bekannt ist, richtet sich jedoch an Webentwickler mit einer vertrauten Markup-Struktur, die mit JavaScript manipulierbar ist. Das Endergebnis sind 3D-Web-Erlebnisse, die standardmäßig VR-unterstützt sind.

## Einrichtungsumgebung

Lassen Sie uns beginnen, indem wir eine Umgebung einrichten, um etwas mit A-Frame zu erstellen. Wir werden dann eine Demo erstellen und sie ausführen. Sie sollten mit folgenden Schritten beginnen:

- Stellen Sie sicher, dass Sie einen modernen Browser mit guter WebGL-Unterstützung verwenden (und WebVR-Unterstützung, wenn Sie verfügbare VR-Hardware haben) wie den neuesten Firefox oder Chrome — laden Sie [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/) oder Chrome (v54 oder höher) herunter.
- (Optional) richten Sie ein VR-Gerät wie Oculus Rift oder Google Cardboard ein.
- Erstellen Sie ein neues Verzeichnis, um Ihr Projekt darin zu speichern.
- Speichern Sie eine Kopie der neuesten [A-Frame JavaScript-Bibliotheksdatei](https://github.com/aframevr/aframe/tree/master/dist) in Ihrem Verzeichnis (überprüfen Sie das GitHub-Repository für die neuesten stabilen und Dev-Builds).
- Öffnen Sie die [A-Frame-Dokumentation](https://aframe.io/docs/) in einem separaten Tab — sie ist nützlich zum Nachschlagen.

## HTML-Struktur

Der erste Schritt besteht darin, ein HTML-Dokument zu erstellen — erstellen Sie in Ihrem Projektverzeichnis eine neue `index.html` Datei und speichern Sie den folgenden HTML-Code darin:

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

Dies enthält einige grundlegende Informationen wie das Dokument `charset` und {{htmlelement("title")}}. Das {{htmlelement("script")}} Element bindet das A-Frame-Framework in die Seite ein; wir werden unseren Beispielcode im {{htmlelement("body")}} Element schreiben.

### Die Szene initialisieren

Eine Szene ist der Ort, an dem alles passiert. Wenn wir im Demo neue Objekte erstellen, werden wir sie alle zur Szene hinzufügen, um sie auf dem Bildschirm sichtbar zu machen. In A-Frame wird die Szene durch eine [Scene entity](https://aframe.io/docs/core/scene.html) dargestellt.

> [!NOTE]
> Ein Entity ist jedes Element — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, Licht oder Schallquelle sein.

Lassen Sie uns die Szene erstellen, indem wir ein `<a-scene>` Element innerhalb des `<body>` Elements hinzufügen:

```html
<a-scene></a-scene>
```

### Einen Würfel hinzufügen

Das Hinzufügen des Würfels zur Szene erfolgt durch Hinzufügen eines einfachen [`<a-box>`](https://aframe.io/docs/primitives/a-box.html) Elements innerhalb des `<a-scene>` Elements. Fügen Sie es jetzt hinzu:

```html
<a-box color="#0095DD" position="0 1 0" rotation="20 40 0"></a-box>
```

Es enthält bereits einige Parameter: `color`, `position` und `rotation` — diese sind ziemlich offensichtlich und definieren die Grundfarbe des Würfels, die Position innerhalb der 3D-Szene und die Drehung des Würfels.

> [!NOTE]
> Die Distanzwerte (z.B. für die y-Position des Würfels) haben keine Einheit und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen – es liegt an Ihnen.

### Einen Hintergrund hinzufügen: Skybox

Eine Skybox ist ein Hintergrund für die 3D-Welt, der durch ein [`<a-sky>`](https://aframe.io/docs/primitives/a-sky.html) Element dargestellt wird. In unserem Fall verwenden wir eine einfache Farbe, aber es könnte auch ein Bild sein, usw. Beim Herumschauen würde es den Eindruck erwecken, dass man sich im offenen Himmel, einer Holzhütte – wo auch immer Sie möchten – befindet! Fügen Sie den folgenden HTML-Code vor dem `<a-cube>` Element hinzu:

```html
<a-sky color="#DDDDDD"></a-sky>
```

An diesem Punkt können Sie, wenn Sie den Code speichern und Ihren Browser aktualisieren, den Würfel bereits auf dem Bildschirm mit unserem benutzerdefinierten Hintergrund sehen:

![Eine Illustration einer 3D-Darstellung eines blauen Würfels, der auf einem helleren grauen Hintergrund angezeigt wird.](cube.png)

Hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/m85148b4/","","350")}}

Sie können ihn auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/cube.html).

A-Frame kümmert sich um alles, was Sie brauchen:

- Eine Standardlichtquelle und Kamera sind enthalten, sodass der Würfel sichtbar ist.
- Die Steuerungen funktionieren bereits: Sie können die Maus zum Umschauen und die Tastatur zur Bewegung verwenden
  (probieren Sie die <kbd>W</kbd>, <kbd>A</kbd>, <kbd>S</kbd> und <kbd>D</kbd> Tasten).

- Es gibt sogar einen "Enter VR mode" Button in der unteren rechten Ecke des Bildschirms, der es Ihnen erlaubt, in den Vollbildmodus, stereoskopische Bildanzeige zu wechseln, wenn Sie die notwendige VR-Hardware eingerichtet haben.

### Eine Kamera spezifizieren

Eine Kameraentity kann erstellt werden, indem ein [`<a-camera>`](https://aframe.io/docs/primitives/a-camera.html) Element zur Szene hinzugefügt wird. Wir können die Position der Kamera explizit setzen und sie ein wenig von der Mitte der Szene wegbewegen, damit wir die Formen sehen können. Fügen Sie dies direkt vor dem schließenden `</a-scene>` Element hinzu:

```html
<a-camera
  position="0 1 4"
  cursor-visible="true"
  cursor-scale="2"
  cursor-color="#0095DD"
  cursor-opacity="0.5">
</a-camera>
```

Wir haben auch einen Cursor für die gegebene Kamera definiert, indem wir die `cursor-*` Attribute verwenden (standardmäßig ist er unsichtbar) — wir haben seine Skalierung gesetzt, damit er leichter sichtbar wird, seine Farbe und etwas Deckkraft, damit er die Objekte dahinter nicht vollständig verdeckt.

### Lichter hinzufügen

Die grundlegenden Lichtertypen in A-Frame sind direktional und Umgebungslicht. Der erste Typ ist ein direktionales Licht, das irgendwo in der Szene platziert wird, während der zweite das Licht des ersten Typs widerspiegelt, sodass es natürlicher aussieht; dies kann global festgelegt werden. Fügen Sie den neuen Code unter Ihren vorherigen Ergänzungen hinzu – dies nutzt das standardmäßige `<a-light>` Element:

```html
<a-light type="directional" color="#FFF" intensity="0.5" position="-1 1 2">
</a-light>
<a-light type="ambient" color="#FFF"></a-light>
```

Das direktionale Licht hat eine weiße Farbe, seine Intensität ist auf `0.5` gesetzt, und es ist an Position `-1 1 2` platziert. Das Umgebungslicht benötigt nur eine Farbe, die ebenfalls weiß ist.

### Etwas fortgeschrittene Geometrie hinzufügen

Wir haben bereits einen Würfel in der Szene; jetzt versuchen wir es mit weiteren Formen. Wir sind nicht auf die standardmäßigen Entitäten wie `<a-cube>` beschränkt — mit `<a-entity>` können wir benutzerdefinierte fortgeschrittene Formen erstellen. Lassen Sie uns versuchen, einen Torus hinzuzufügen — fügen Sie dieses Element unter dem vorherigen Code hinzu:

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

Unser Entity hat eine [Torus-Primitive](https://aframe.io/docs/components/geometry.html#Torus), die ihre Form repräsentiert. Wir geben einige Anfangsvariablen an diese Form weiter: den Radius der Außenkante des Torus, den Radius des Rohrsegments und die Anzahl der Segmente entlang des Umfangs der Rohrfläche jeweils. Die Drehung und Position werden auf die gleiche Weise gesetzt, wie wir sie zuvor gesehen haben.

### Ein Material definieren

Der Torus ist jetzt sichtbar in der Szene, aber seine Farbe sieht nicht sehr gut aus — dies liegt daran, dass wir ein [Material](https://aframe.io/docs/components/material.html) erstellen müssen, um das Aussehen des Entitäts zu definieren. Ändern Sie das `<a-entity>` zur Definition des Torus, sodass es wie folgt aussieht:

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

Im neuen `material` Attribut setzen wir die `color` des Materials, dann seine `roughness` (ein raues Material wird reflektiertes Licht in mehr Richtungen zerstreuen als ein glattes Material) und `metalness` (wie metallisch das Material ist).

## Etwas JavaScript einbringen

Es ist auch möglich, die Szene mit mittels JavaScript erstellten Entitäten zu bevölkern, also verwenden wir dies, um eine dritte Form, einen Zylinder, hinzuzufügen. Fügen Sie ein neues {{htmlelement("script")}} Element am Ende des `<body>` Elements ein, direkt nach dem `<a-scene>` Element, und fügen Sie dann den folgenden JavaScript-Code darin ein:

```js
const scene = document.querySelector("a-scene");
const cylinder = document.createElement("a-cylinder");
cylinder.setAttribute("color", "#FF9500");
cylinder.setAttribute("height", "2");
cylinder.setAttribute("radius", "0.75");
cylinder.setAttribute("position", "3 1 0");
scene.appendChild(cylinder);
```

Wir erhalten zuerst eine Referenz auf den Szenen-Handler, dann erstellen wir das Zylinderelement als A-Frame Entity. Danach geht es nur darum, die richtigen Attribute zu setzen: `color`, `height`, `radius` und `position`. Die letzte Zeile fügt den neu erstellten Zylinder zur Szene hinzu. Das war's — Sie haben drei verschiedene Formen mit A-Frame erstellt! So sieht es jetzt aus:

![Eine Illustration der 3D-Darstellung von drei verschiedenen geometrischen Formen, die auf einem grauen Hintergrund angezeigt werden: die erste ist ein dunklerer grauer Torus, die zweite ein blauer Würfel und die letzte ein gelber Zylinder.](shapes.png)

Es ist beeindruckend, in der Lage zu sein, eine solche Szene mit nur wenigen Zeilen HTML und JavaScript zu erstellen.

## Animation

Wir haben bereits `rotation` und `position` verwendet, um die Formen in der Szene zu bewegen, und wir können sie auch skalieren. Diese Attribute können manipuliert werden, um die Illusion von [Animation](https://aframe.io/docs/1.6.0/components/animation.html) zu erzeugen.

### Rotation

Es gibt eine spezielle [`animation`](https://aframe.io/docs/1.6.0/components/animation.html) Komponente, die uns helfen kann, Elemente zu animieren. Fügen Sie die hier gezeigte `animation` Komponente als Eigenschaft zum `<a-box>` Element hinzu, wie gezeigt:

```html
<a-box
  color="#0095DD"
  rotation="20 40 0"
  position="0 1 0"
  animation="property: rotation; from: 20 0 0; to: 20 360 0; dir: alternate; loop: true; dur: 4000; easing: easeInOutQuad;">
</a-box>
```

Wie bei allen anderen Entitäten können Sie wichtige Eigenschaften für die Animation definieren. Wir werden das `rotation` Attribut von `20 0 0` zu `20 360 0` animieren, sodass es eine vollständige Drehung macht. Die Animationsrichtung ist auf Alternieren gesetzt, sodass die Animation vorwärts und dann rückwärts abgespielt wird. Die Dauer ist auf 4 Sekunden festgelegt und wird unendlich wiederholt. Die Animation verwendet `easing` für das Abmildern mit [tween.js](https://github.com/tweenjs/tween.js/) intern implementiert.

### Skalieren

Wir können auch Animation zu Entitäten mit benutzerdefinierter Geometrie wie dem Torus hinzufügen, auf die gleiche Weise. Fügen Sie die folgende `animation` Komponente zu Ihrem Torus hinzu:

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

Das Attribut, das wir für den Torus animieren möchten, ist `scale`. Die anfängliche, Standard-Skala ist `1 1 1`, und wir werden sie auf `1 0.5 1` animieren, also wird die `y` Achse von `1` auf `0.5` skaliert. Die Abmilderung, die wir verwenden, ist `linear`. Durch das Setzen der Richtung auf `alternate` wird die Skala auf `0.5` animiert und dann während 2 Sekunden zurück auf `1` animiert. Auch hier wird die Animation unendlich wiederholt.

### Bewegung

Wir könnten die `animation` verwenden, um die Position der dritten Form zu ändern, oder wir könnten stattdessen JavaScript verwenden. Fügen Sie diesen Code am Ende des `<script>` Tag hinzu:

```js
let t = 0;
function render() {
  t += 0.01;
  requestAnimationFrame(render);
  cylinder.setAttribute("position", `3 ${Math.sin(t * 2) + 1} 0`);
}
render();
```

Wir verwenden die `render()` Funktion, um die Position des Zylinders bei jedem Frame zu aktualisieren. Versuchen Sie, die angegebenen Werte auf der `y` Achse zu ändern und zu sehen, wie sich dies auf die Bewegung auswirkt.

## Fazit

Alles wird richtig gerendert und animiert — Glückwunsch zur Erstellung Ihrer ersten A-Frame-Szene! So sieht die endgültige Version aus und funktioniert:

{{JSFiddleEmbed("https://jsfiddle.net/lowperry/xmo62ku0/5/","","350")}}

Wenn Sie ein VR-Gerät zur Verfügung haben, ist jetzt ein guter Zeitpunkt, Ihre Szene damit auszuprobieren.

> [!NOTE]
> Sie können es auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/A-Frame/shapes.html).

War einfacher als gedacht, oder? A-Frame richtet sich an Webentwickler, indem es einfach zu verwendendes Web-Markup anbietet und alle damit verbundenen Vorteile, wie die Manipulation von JavaScript. Es ist leicht zu beginnen, bietet jedoch auch eine leistungsstarke API für fortgeschrittene Konzepte, wie den Umgang mit unterschiedlichen Browsern und ähnliches. Die Gemeinschaft wächst, ebenso wie die Anzahl der unterstützten VR-Geräte — es ist eine großartige Zeit, um mit solchen Frameworks zu experimentieren.

## Siehe auch

- [A-Frame Website](https://aframe.io/)
- [Artikel über die Einführung von A-Frame 0.1.0](https://aframe.io/blog/2015/12/16/introducing-aframe/)
- [A-Frame Physik-Plugin](https://github.com/ngokevin/aframe-physics-components)
- [A-Frame Gamepad-Kontroll-Plugin](https://github.com/donmccurdy/aframe-gamepad-controls)
