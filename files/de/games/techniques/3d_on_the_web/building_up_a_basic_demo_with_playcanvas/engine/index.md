---
title: Aufbau einer einfachen Demo mit der PlayCanvas-Engine
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Entwickelt für moderne Browser, ist **PlayCanvas** eine voll ausgestattete 3D-Spiel-Engine mit Ressourcenladung, einem Entitäts- und Komponentensystem, fortgeschrittener Grafikmanipulation, Kollision und Physik-Engine (entwickelt mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Möglichkeiten zur Handhabung von Steuereingaben von verschiedenen Geräten (einschließlich Gamepads).

Das ist eine beeindruckende Liste von Funktionen – lassen Sie uns einige davon in Aktion sehen.

![PlayCanvas-Engine-Repository auf GitHub.](playcanvas-github.png)

Wir werden zuerst versuchen, eine einfache Demo zusammenzustellen – ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits den Artikel [Aufbau einer einfachen Demo mit Three.js](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas auf ähnlichen Konzepten basiert: Kamera, Licht und Objekte.

## Umgebungseinrichtung

Um mit der Entwicklung in PlayCanvas zu beginnen, benötigen Sie nicht viel. Sie sollten mit Folgendem beginnen:

- Stellen Sie sicher, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API)-Unterstützung verwenden, wie die neueste Version von Firefox oder Chrome.
- Erstellen Sie ein Verzeichnis, um Ihre Experimente zu speichern.
- Speichern Sie eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in Ihrem Verzeichnis.
- Öffnen Sie die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab – sie ist nützlich, darauf zu verweisen.

## HTML-Struktur

Hier ist die HTML-Struktur, die wir verwenden werden.

```html
<!doctype html>
<html lang="en-GB">
  <head>
    <meta charset="utf-8" />
    <title>MDN Games: PlayCanvas Demo</title>
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

Es enthält grundlegende Informationen wie das Dokument {{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements, das PlayCanvas verwendet, auf 100% zu setzen, sodass es den gesamten verfügbaren Ansichtsbereich ausfüllt. Das erste {{htmlelement("script")}}-Element schließt die PlayCanvas-Bibliothek in die Seite ein; wir werden unseren Beispielcode im zweiten schreiben. Es gibt bereits eine Hilfsvariable, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichert.

Bevor Sie weiterlesen, kopieren Sie diesen Code in eine neue Textdatei und speichern Sie ihn in Ihrem Arbeitsverzeichnis als `index.html`.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zuerst die PlayCanvas-Anwendung erstellen (mit dem angegebenen {{htmlelement("canvas")}}-Element) und dann die Update-Schleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das `pc`-Globale-Objekt enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als Nächstes werden wir den Canvas auf das Fenster anpassen und automatisch seine Auflösung auf die gleiche wie die Canvas-Größe ändern. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Jetzt, da der Einrichtungscode vorhanden ist, müssen wir über die Implementierung der standardmäßigen Szenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera – fügen Sie diese Zeilen Ihrem Code hinzu, unter den vorherigen.

```js
const camera = new pc.Entity();
camera.addComponent("camera", {
  clearColor: new pc.Color(0.8, 0.8, 0.8),
});

app.root.addChild(camera);
camera.setPosition(0, 0, 7);
```

Der obige Code erstellt eine neue `Entity`.

> [!NOTE]
> Eine Entität ist jedes Objekt, das in der Szene verwendet wird - es kann ein Objekt wie eine Box, ein Zylinder oder ein Kegel sein, aber auch eine Kamera, eine Lichtquelle oder eine Tonquelle.

Dann fügt es eine `camera`-Komponente hinzu, mit der hellgrauen `clearColor` – die Farbe wird als Hintergrund sichtbar sein. Als Nächstes wird das `camera`-Objekt der Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten entfernt von der Mitte der Szene auf der `z`-Achse ist. Dies ermöglicht es uns, Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

> [!NOTE]
> Die Distanzwerte (z. B. für die z-Position der Kamera) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten – Millimeter, Meter, Fuß oder Meilen – das liegt bei Ihnen.

Versuchen Sie die Datei zu speichern und in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Jetzt, da die Szene richtig gerendert wird, können wir anfangen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe vordefinierter Primitiven an, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen für eine gegebene Form wird von der Engine übernommen, sodass wir uns auf das High-Level-Coding konzentrieren können. Beginnen wir mit der Definition der Geometrie für eine Würfelform – fügen Sie den folgenden neuen Code unter Ihren vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box`-Model-Komponente erstellt und zur Wurzel der Anwendung, unserer Szene, hinzugefügt. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel und nicht um ein Quadrat handelt.

Der Würfel ist sichtbar, aber er ist komplett. Damit er besser aussieht, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichttypen in PlayCanvas sind Richtungslicht und Umgebungslicht. Der erste Typ ist ein Richtungslicht, das irgendwo in der Szene platziert wird, während der zweite den Lichtschein vom ersten Typ reflektiert, sodass es natürlicher aussieht; dies kann global eingestellt werden. Fügen Sie erneut den neuen Code unter Ihren vorherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht-`Entity`-Komponente erstellt und zur Szene hinzugefügt. Wir können das Licht auf der `x`-Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Es ist Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Die Box sieht jetzt besser aus, könnte aber einige Farben bekommen, um noch besser auszusehen – dafür müssen wir ein Material für sie erstellen.

## Material

Dieses Beispiel verwendet ein älteres [Material](https://developer.playcanvas.com/user-manual/assets/types/material/) namens "Phong Material" (unterstützt seit PlayCanvas Engine v1.65.0).
Um `PhongMaterial` zu verwenden, fügen Sie die folgenden Zeilen unter dem vorherigen Code hinzu:

```js
const boxMaterial = new pc.PhongMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch das Streuen des Lichts auf dem Objekt können wir ihm seine eigene Farbe geben – wir wählen ein schönes, vertrautes Blau.

> [!NOTE]
> In PlayCanvas werden die Farbkanalwerte als Gleitkommawerte im Bereich `0-1` angegeben, anstelle von Ganzzahlen von `0-255`, wie Sie es vielleicht gewohnt sind, im Web zu verwenden.

Nachdem das Material erstellt und seine Farbe festgelegt wurde, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das Material der `box` auf das neu erstellte `boxMaterial` setzen.

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder? So sollte es aussehen:

![Blauer Würfel auf einem grauen Hintergrund gerendert mit PlayCanvas.](cube-playcanvas.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cqs6pg3x/","","350")}}

Sie können es auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/cube.html).

## Mehr Formen

Jetzt fügen wir der Szene mehr Formen hinzu. Lassen Sie uns den Würfel um 2 Einheiten nach links verschieben, um Platz für einige Freunde zu schaffen – fügen Sie die folgende Zeile direkt unter dem vorherigen Code hinzu:

```js
box.translate(-2, 0, 0);
```

Nun lassen Sie uns eine neue Form hinzufügen — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Dies sieht dem Code, den wir zum Erstellen eines Würfels verwendet haben, sehr ähnlich, aber anstelle der `box`-Komponente fügen wir einen `cylinder` hinzu. Es wird auch um die `x`-Achse gedreht, um zu zeigen, dass es tatsächlich eine 3D-Form ist. Um dem Zylinder eine Farbe zu geben, sagen wir gelb, müssen wir wieder ein Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.PhongMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Material ist fast genau dasselbe, wie wir es für den Zylinder gemacht haben. Fügen Sie den folgenden Code erneut am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `cone`, fügt ihn der `app` hinzu und bewegt ihn um 2 Einheiten nach rechts, sodass er nicht mit dem Zylinder überlappt. Dann wird das Material erstellt, eine graue Farbe zugewiesen und der Konus-`Entity` zugeordnet.

So sollte es jetzt aussehen:

![Formen: blauer Würfel, gelber Zylinder und grauer Kegel auf einem hellgrauen Hintergrund gerendert mit PlayCanvas.](shapes-playcanvas.png)

Das funktioniert, aber es ist ein bisschen langweilig. In einem Spiel passiert normalerweise etwas – wir sehen Animationen und dergleichen – also versuchen wir, diesen Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` benutzt, um die Position der Formen anzupassen; wir könnten auch ihre Positionen direkt mit `setPosition` ändern oder sie skalieren. Um eine tatsächliche Animation zu zeigen, müssen wir diese Werte innerhalb der Render-Schleife ändern, sodass sie in jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür verwenden können – fügen Sie den folgenden Code direkt unter die vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Rückruf nimmt das `deltaTime` als Parameter entgegen, sodass wir die relativ vergangene Zeit seit dem vorherigen Aufruf dieses Updates haben. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die seit dem Start der App vergangene Zeit speichert, indem das `deltaTime` in jedem Update hinzugefügt wird.

### Drehung

Das Drehen ist ziemlich einfach – alles, was Sie tun müssen, ist, in jedem Frame einen definierten Wert zu der gegebenen Drehrichtung hinzuzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")`-Rückruffunktion hinzu, direkt nach der Addition der `deltaTime` zur `timer`-Variable:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse in jedem Frame drehen – was uns eine sanfte Animation gibt.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren – es gibt eine Funktion dafür namens `setLocalScale`. Fügen Sie das Folgende erneut in den Rückruf ein:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder zyklisch zu skalieren, größer und dann wieder kleiner. Wir schließen den `y`-Skalierungswert in `Math.abs` ein, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` variiert zwischen -1 und 0, und bei negativen Werten kann die Zylinderskalierung unerwartet gerendert werden (in diesem Fall sieht sie die Hälfte der Zeit schwarz aus).

Nun zum Bewegungsteil.

### Bewegung

Neben der Drehung und Skalierung können wir Objekte auch in der Szene bewegen. Fügen Sie den folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies bewegt den `cone` auf und ab, indem der `sin`-Wert auf der `y`-Achse in jedem Frame angewendet wird, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie das die Animation beeinflusst.

## Fazit

Hier ist das endgültige Codeverzeichnis sowie ein anzeigbares Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/auvcLoc4/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/shapes.html) und [das Repository forken](https://github.com/end3r/MDN-Games-3D/), wenn Sie selbst lokal damit spielen möchten. Jetzt kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!

## Zusammenfassung

Jetzt können Sie den Artikel zum [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Aufbau einer einfachen Demo mit PlayCanvas](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
