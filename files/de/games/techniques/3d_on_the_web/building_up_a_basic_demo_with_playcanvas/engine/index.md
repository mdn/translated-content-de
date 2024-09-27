---
title: Aufbau einer einfachen Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Entwickelt für moderne Browser, ist **PlayCanvas** eine voll ausgestattete 3D-Spiele-Engine mit Funktionen wie Ressourcenladen, einem Entitäts- und Komponentensystem, fortschrittlicher Grafikmanipulation, Kollisions- und Physik-Engine (erstellt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Möglichkeiten zur Steuerungseingabe von verschiedenen Geräten (einschließlich Gamepads).

Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen.

![PlayCanvas-Engine-Repository auf GitHub.](playcanvas-github.png)

Wir werden zunächst versuchen, eine einfache Demo zu erstellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie bemerken, dass PlayCanvas mit ähnlichen Konzepten arbeitet: Kamera, Licht und Objekte.

## Einrichtungsumgebung

Zum Entwickeln mit PlayCanvas benötigen Sie nicht viel. Sie sollten mit Folgendem beginnen:

- Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie den neuesten Firefox oder Chrome.
- Erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern.
- Speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in Ihrem Verzeichnis.
- Öffnen Sie die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab — es ist nützlich, darauf zu verweisen.

## HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden.

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: PlayCanvas demo</title>
    <style>
      body {
        margin: 0;
        padding: 0;
      }
      canvas {
        width: 100%;
        height: 100%;
      }
    </style>
  </head>
  <body>
    <script src="playcanvas-latest.js"></script>
    <canvas id="application-canvas"></canvas>
    <script>
      const canvas = document.getElementById("application-canvas");
      /* all our JavaScript code goes here */
    </script>
  </body>
</html>
```

Sie enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}}, und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements, das PlayCanvas verwenden wird, auf 100% zu setzen, sodass es den gesamten verfügbaren Anzeigebereich ausfüllt. Das erste {{htmlelement("script")}}-Element bindet die PlayCanvas-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es gibt eine bereits enthaltene Hilfsvariable, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichert.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie diese in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zunächst die PlayCanvas-Anwendung erstellen (unter Verwendung des angegebenen {{htmlelement("canvas")}}-Elements) und dann die Aktualisierungsschleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc`-globale Objekt enthält alle PlayCanvas-Funktionen, die in der Engine verfügbar sind.

Als Nächstes setzen wir das Canvas, um das Fenster auszufüllen, und ändern automatisch seine Auflösung, um dieselbe wie die Canvas-Größe zu sein. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Nun, da der Einrichtungscode vorhanden ist, müssen wir über die Implementierung der Standard-Szenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen zu Ihrem Code hinzu, unterhalb der vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt ein neues `Entity`.

> [!NOTE]
> Eine Entität ist jedes Objekt, das in der Szene verwendet wird — es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber es kann auch eine Kamera, eine Licht- oder Klangquelle sein.

Dann fügt er eine `camera`-Komponente hinzu mit der hellgrauen `clearColor` — die Farbe wird als Hintergrund sichtbar sein. Anschließend wird das `camera`-Objekt zur Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es sich 7 Einheiten vom Zentrum der Szene auf der `z`-Achse entfernt befindet. Dies ermöglicht es uns, etwas Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

> [!NOTE]
> Die Distanzwerte (z.B. für die Kamera-z-Position) sind einheitslos und können im Grunde genommen alles sein, was Sie für Ihre Szene für geeignet halten — Millimeter, Meter, Fuß oder Meilen — das bleibt Ihnen überlassen.

Versuchen Sie, die Datei zu speichern und in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da die Szene richtig gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Primitiven, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller Teile einer gegebenen Form wird von der Engine übernommen, sodass wir uns auf die hochstufige Codierung konzentrieren können. Beginnen wir mit der Definition der Geometrie für eine Würfelform — fügen Sie den folgenden neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box`-Modellkomponente erstellen und dieser zur Wurzel der Anwendung, unserer Szene, hinzufügen. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und keinen Quadrat handelt.

Der Würfel ist sichtbar, aber er ist vollkommen. Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind gerichtet und Umgebung. Der erste Typ ist ein gerichtetes Licht, das irgendwo in der Szene platziert ist, während der zweite das Licht des ersten Typs reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unter Ihren vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht`Entity`-Komponente erstellen und dieser zur Szene hinzufügen. Wir können das Licht auf der `x`-Achse drehen, um es auf mehr als eine Seite des Würfels scheinen zu lassen. Jetzt ist es Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Die Box sieht jetzt besser aus, aber sie könnte einige Farben bekommen, um noch besser auszusehen - dafür müssen wir Material erstellen.

## Material

Dieses Beispiel verwendet ein älteres [Material](https://developer.playcanvas.com/user-manual/assets/types/material/) namens "Phong Material" (unterstützt seit PlayCanvas Engine v1.65.0).
Um `PhongMaterial` zu verwenden, fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const boxMaterial = new pc.PhongMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch die Streuung des Lichts auf dem Objekt können wir ihm seine eigene Farbe verleihen — wir wählen ein schönes, vertrautes Blau.

> [!NOTE]
> In PlayCanvas werden die Farbkanalwerte als Gleitkommazahlen im Bereich `0-1` bereitgestellt, anstelle von Ganzzahlen von `0-255`, wie Sie es vielleicht gewohnt sind, im Web zu verwenden.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das `box`-Material auf das neu erstellte `boxMaterial` setzen.

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder? So sollte es aussehen:

![Blauer Würfel auf grauem Hintergrund, gerendert mit PlayCanvas.](cube-playcanvas.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cqs6pg3x/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/cube.html).

## Mehr Formen

Jetzt werden wir der Szene mehr Formen hinzufügen. Versetzen wir den Würfel um 2 Einheiten nach links, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

```js
box.translate(-2, 0, 0);
```

Jetzt fügen wir eine neue Form hinzu — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Dieser sieht dem Code ähnlich, den wir für das Erstellen eines Würfels verwendet haben, aber anstelle der `box`-Komponente fügen wir einen `cylinder` hinzu. Es wird auch um die `x`-Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um dem Zylinder eine Farbe zu geben, sagen wir Gelb, müssen wir wie zuvor das Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.PhongMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials verläuft fast genau auf die gleiche Weise wie beim Zylinder. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

```js
const cone = new pc.Entity();
cone.addComponent("model", { type: "cone" });
app.root.addChild(cone);
cone.translate(2, 0, 0);

const coneMaterial = new pc.PhongMaterial();
coneMaterial.diffuse.set(0.9, 0.9, 0.9);
coneMaterial.update();
cone.model.model.meshInstances[0].material = coneMaterial;
```

Der obige Code erstellt einen neuen `cone`, fügt ihn dem `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, damit er sich nicht mit dem Zylinder überschneidet. Anschließend wird das Material erstellt, eine graue Farbe gegeben und dem Kegel`Entity` zugewiesen.

So sollte es jetzt aussehen:

![Formen: blauer Würfel, gelber Zylinder und grauer Kegel auf einem hellgrauen Hintergrund, gerendert mit PlayCanvas.](shapes-playcanvas.png)

Das funktioniert, aber es ist etwas langweilig. In einem Spiel passiert normalerweise etwas — wir sehen Animationen und ähnliches — also versuchen wir, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten auch ihre Positionen direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, sodass sie bei jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür verwenden können — fügen Sie den folgenden Code direkt unter die vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Rückruf nimmt das `deltaTime` als Parameter an, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App vergangene Zeit speichert, indem sie bei jedem Update das `deltaTime` addiert.

### Drehung

Das Drehen ist ziemlich einfach — alles, was Sie tun müssen, ist, bei jedem Frame einen definierten Wert zur gegebenen Richtung der Drehung hinzuzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")`-Rückruffunktion hinzu, direkt nachdem Sie `deltaTime` zur `timer`-Variable hinzugefügt haben:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` bei jedem Frame um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse drehen — das ergibt eine flüssige Animation.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren — es gibt eine Funktion dafür namens `setLocalScale`. Fügen Sie den folgenden Code erneut in den Rückruf ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus größer und kleiner zu skalieren. Wir umschließen den `y`-Skalierungswert in `Math.abs`, um die absoluten Werte zu übertragen (größer oder gleich 0); `sin` schwankt zwischen -1 und 0, und bei negativen Werten kann das Skalieren des Zylinders unerwartet gerendert werden (in diesem Fall sieht es die Hälfte der Zeit schwarz aus).

Nun zum Bewegungsteil.

### Bewegung

Neben der Drehung und Skalierung können wir auch Objekte in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` nach oben und unten bewegen, indem es den `sin`-Wert auf die `y`-Achse bei jedem Frame anwendet, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie er die Animation beeinflusst.

## Fazit

Hier ist das abschließende Codebeispiel sowie ein anschauliches Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/auvcLoc4/","","350")}}

Sie können es auch [auf GitHub sehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie damit auf Ihrem lokalen Rechner experimentieren möchten. Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!

## Zusammenfassung

Jetzt können Sie den Artikel zum [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) lesen, zur Seite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
