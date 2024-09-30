---
title: Ein einfache Demo mit der PlayCanvas-Engine aufbauen
slug: Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/engine
l10n:
  sourceCommit: b0d4232c133f19213742db2286d2c293ce71f674
---

{{GamesSidebar}}

Für moderne Browser entwickelt, ist **PlayCanvas** eine voll ausgestattete 3D-Game-Engine mit Ressourcenmanagement, einem Entity- und Komponentensystem, fortgeschrittener Grafikbearbeitung, Kollisions- und Physik-Engine (gebaut mit [ammo.js](https://github.com/kripken/ammo.js/)), Audio und Funktionen zur Steuerungseingabe von verschiedenen Geräten (einschließlich Gamepads).

Das ist eine beeindruckende Liste von Funktionen — lassen Sie uns einige davon in Aktion sehen.

![PlayCanvas engine repository auf GitHub.](playcanvas-github.png)

Wir werden zuerst versuchen, eine einfache Demo zusammenzustellen — ein Würfel, der auf dem Bildschirm gerendert wird. Wenn Sie bereits unseren Artikel [Ein einfache Demo mit Three.js aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_Three.js) durchgearbeitet haben (oder mit anderen 3D-Bibliotheken vertraut sind), werden Sie feststellen, dass PlayCanvas auf ähnlichen Konzepten basiert: Kamera, Licht und Objekte.

## Umgebung einrichten

Um mit der Entwicklung mit PlayCanvas zu beginnen, benötigen Sie nicht viel. Sie sollten beginnen mit:

- Sicherstellen, dass Sie einen modernen Browser mit guter [WebGL](/de/docs/Web/API/WebGL_API) Unterstützung verwenden, wie zum Beispiel die neueste Version von Firefox oder Chrome.
- Ein Verzeichnis erstellen, um Ihre Experimente zu speichern.
- Eine Kopie der [neuesten PlayCanvas-Engine](https://code.playcanvas.com/playcanvas-latest.js) in Ihrem Verzeichnis speichern.
- Die [PlayCanvas-Dokumentation](https://developer.playcanvas.com/en/user-manual/) in einem separaten Tab öffnen — sie ist nützlich zum Nachschlagen.

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

Sie enthält einige grundlegende Informationen wie das Dokument {{htmlelement("title")}} und etwas CSS, um die Breite und Höhe des {{htmlelement("canvas")}}-Elements, das PlayCanvas verwenden wird, auf 100% zu setzen, sodass es den gesamten verfügbaren Ansichtsfensterraum füllt. Das erste {{htmlelement("script")}}-Element inkludiert die PlayCanvas-Bibliothek auf der Seite; wir werden unseren Beispielcode im zweiten schreiben. Es ist bereits eine Hilfsvariable enthalten, die eine Referenz auf das {{htmlelement("canvas")}}-Element speichert.

Kopieren Sie diesen Code in eine neue Textdatei und speichern Sie sie in Ihrem Arbeitsverzeichnis unter dem Namen `index.html`, bevor Sie weiterlesen.

## PlayCanvas-Anwendung

Um mit der Entwicklung unseres Spiels zu beginnen, müssen wir zunächst die PlayCanvas-Anwendung erstellen (unter Verwendung des gegebenen {{htmlelement("canvas")}}-Elements) und dann die Update-Schleife starten. Fügen Sie den folgenden Code am Ende Ihres zweiten {{htmlelement("script")}}-Elements hinzu:

```js
const app = new pc.Application(canvas);
app.start();
```

Das globale `pc`-Objekt enthält alle in der Engine verfügbaren PlayCanvas-Funktionen.

Als Nächstes setzen wir das Canvas so, dass es das Fenster füllt, und ändern automatisch seine Auflösung, sodass sie derselben Größe entspricht wie das Canvas. Fügen Sie erneut die folgenden Zeilen am Ende Ihres Skripts hinzu.

```js
app.setCanvasFillMode(pc.FILLMODE_FILL_WINDOW);
app.setCanvasResolution(pc.RESOLUTION_AUTO);
```

## Kamera

Nun, da der Einrichtungscode vorhanden ist, müssen wir über die Implementierung der Standardszenenkomponenten nachdenken: Kamera, Lichter und Objekte. Beginnen wir mit der Kamera — fügen Sie diese Zeilen zu Ihrem Code hinzu, unterhalb der vorherigen.

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
> Eine Entity ist jedes Objekt, das in der Szene verwendet wird — es kann sich um ein Objekt wie eine Box, einen Zylinder oder einen Kegel handeln, aber es kann auch eine Kamera, eine Lichtquelle oder eine Tonquelle sein.

Dann fügt es eine `camera`-Komponente mit dem hellgrauen `clearColor` hinzu — die Farbe wird als Hintergrund sichtbar sein. Als Nächstes wird das `camera`-Objekt an die Wurzel unserer Anwendung hinzugefügt und so positioniert, dass es 7 Einheiten von der Mitte der Szene auf der `z`-Achse entfernt ist. Dies erlaubt uns, etwas Platz zu schaffen, um die Objekte zu visualisieren, die wir später erstellen werden.

> [!NOTE]
> Die Entfernungswerte (z.B. für die Kameraposition `z`) sind einheitslos und können im Grunde alles sein, was Sie für Ihre Szene als geeignet erachten — Millimeter, Meter, Fuß oder Meilen — es liegt an Ihnen.

Versuchen Sie, die Datei zu speichern und sie in Ihrem Browser zu laden. Sie sollten jetzt ein graues Fenster sehen. Herzlichen Glückwunsch!

## Geometrie

Da die Szene jetzt richtig gerendert wird, können wir beginnen, 3D-Formen hinzuzufügen. Um die Entwicklung zu beschleunigen, bietet PlayCanvas eine Reihe von vordefinierten Primitiven, die Sie verwenden können, um Formen sofort mit einer einzigen Codezeile zu erstellen. Es gibt Würfel, Kugeln, Zylinder und kompliziertere Formen. Das Zeichnen aller für eine gegebene Form erforderlichen Teile wird von der Engine übernommen, sodass wir uns auf die Erstellung des höheren Codes konzentrieren können. Beginnen wir damit, die Geometrie für eine Würfelform zu definieren — fügen Sie den folgenden neuen Code unterhalb Ihrer vorherigen Ergänzungen hinzu:

```js
const box = new pc.Entity();
box.addComponent("model", { type: "box" });
app.root.addChild(box);
box.rotate(10, 15, 0);
```

Es wird eine `Entity` mit der `box`-Modellkomponente erstellt und der Wurzel der Anwendung, unserer Szene, hinzugefügt. Wir drehen die Box auch ein wenig, um zu zeigen, dass es sich tatsächlich um einen 3D-Würfel handelt und nicht um ein Quadrat.

Der Würfel ist sichtbar, aber er ist vollständig. Um ihn besser aussehen zu lassen, müssen wir etwas Licht darauf scheinen lassen.

## Lichter

Die grundlegenden Lichtarten in PlayCanvas sind direktionale und Umgebungslichter. Die erste Art ist ein direktionales Licht, das irgendwo in der Szene platziert ist, während die zweite Art das Licht von der ersten Art reflektiert, sodass es natürlicher aussieht; dies kann global festgelegt werden. Fügen Sie erneut den neuen Code unterhalb Ihrer bisherigen Ergänzungen hinzu.

```js
const light = new pc.Entity();
light.addComponent("light");
app.root.addChild(light);
light.rotate(45, 0, 0);
```

Es wird eine Licht-`Entity`-Komponente erstellt und der Szene hinzugefügt. Wir können das Licht auf der `x`-Achse drehen, damit es auf mehr als eine Seite des Würfels scheint. Es ist Zeit, das Umgebungslicht hinzuzufügen:

```js
app.scene.ambientLight = new pc.Color(0.2, 0.2, 0.2);
```

Der obige Code weist der gesamten Szene ein dunkelgraues Umgebungslicht zu. Die Box sieht jetzt besser aus, könnte aber noch besser aussehen, wenn sie noch Farben bekommt - dafür müssen wir ein Material für sie erstellen.

## Material

Dieses Beispiel verwendet ein älteres [Material](https://developer.playcanvas.com/user-manual/assets/types/material/) namens "Phong Material" (unterstützt ab PlayCanvas Engine v1.65.0).
Um `PhongMaterial` zu verwenden, fügen Sie die folgenden Zeilen unterhalb des vorherigen Codes hinzu:

```js
const boxMaterial = new pc.PhongMaterial();
boxMaterial.diffuse.set(0, 0.58, 0.86);
boxMaterial.update();
box.model.model.meshInstances[0].material = boxMaterial;
```

Durch die Streuung des Lichts auf dem Objekt können wir ihm seine eigene Farbe verleihen — wir wählen ein schönes vertrautes Blau.

> [!NOTE]
> In PlayCanvas werden die Farbkanalwerte als Fließkommazahlen im Bereich `0-1` angegeben, anstelle von ganzen Zahlen von `0-255`, wie Sie es möglicherweise vom Web gewohnt sind.

Nachdem das Material erstellt und seine Farbe festgelegt ist, muss es aktualisiert werden, damit unsere Änderungen angewendet werden. Dann müssen wir nur noch das Material der `box` auf das neu erstellte `boxMaterial` setzen.

Herzlichen Glückwunsch, Sie haben Ihr erstes Objekt in einer 3D-Umgebung mit PlayCanvas erstellt! Es war einfacher, als Sie dachten, oder? So sollte es aussehen:

![Blauer Würfel auf grauem Hintergrund, gerendert mit PlayCanvas.](cube-playcanvas.png)

Und hier ist der Code, den wir bisher erstellt haben:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/cqs6pg3x/","","350")}}

Sie können es auch [auf GitHub überprüfen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/cube.html).

## Weitere Formen

Jetzt werden wir weitere Formen zur Szene hinzufügen. Lassen Sie uns den Würfel 2 Einheiten nach links verschieben, um Platz für einige Freunde zu schaffen — fügen Sie die folgende Zeile direkt unterhalb des vorherigen Codes hinzu:

```js
box.translate(-2, 0, 0);
```

Jetzt lassen Sie uns eine neue Form hinzufügen — wie wäre es mit einem Zylinder?

### Zylinder

Fügen Sie die folgenden Zeilen am Ende Ihres JavaScript-Codes hinzu:

```js
const cylinder = new pc.Entity();
cylinder.addComponent("model", { type: "cylinder" });
app.root.addChild(cylinder);
cylinder.rotate(15, 0, 0);
```

Das sieht sehr ähnlich dem Code aus, den wir für die Erstellung eines Würfels verwendet haben, aber anstatt der `box`-Komponente fügen wir einen `cylinder` hinzu. Er wird auch um die `x`-Achse gedreht, um zu zeigen, dass es sich tatsächlich um eine 3D-Form handelt. Um dem Zylinder eine Farbe zu geben, sagen wir Gelb, müssen wir wie zuvor das Material dafür erstellen. Fügen Sie die folgenden Zeilen hinzu:

```js
const cylinderMaterial = new pc.PhongMaterial();
cylinderMaterial.diffuse.set(1, 0.58, 0);
cylinderMaterial.update();
cylinder.model.model.meshInstances[0].material = cylinderMaterial;
```

### Kegel

Das Erstellen eines Kegels und seines Materials erfolgt fast genau so wie bei dem Zylinder. Fügen Sie folgenden Code erneut am Ende Ihres Skripts hinzu:

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

Der obige Code erstellt einen neuen `Kegel`, fügt ihn zur `app` hinzu und verschiebt ihn um 2 Einheiten nach rechts, sodass er nicht mit dem Zylinder überlappt. Dann wird das Material erstellt, eine graue Farbe zugewiesen und dem Kegel-`Entity` zugewiesen.

So sollte es jetzt aussehen:

![Formen: Blauer Würfel, gelber Zylinder und grauer Kegel auf einem hellgrauen Hintergrund, gerendert mit PlayCanvas.](shapes-playcanvas.png)

Das funktioniert, aber es ist ein bisschen langweilig. In einem Spiel passiert normalerweise etwas — wir sehen Animationen und dergleichen — versuchen wir also, den Formen ein wenig Leben einzuhauchen, indem wir sie animieren.

## Animation

Wir haben bereits `translate` oder `rotate` verwendet, um die Position der Formen anzupassen; wir könnten auch ihre Positionen direkt mit `setPosition` ändern oder sie skalieren. Um eine echte Animation zu zeigen, müssen wir diese Werte innerhalb der Rendering-Schleife ändern, sodass sie bei jedem Frame aktualisiert werden. Es gibt ein spezielles `update`-Ereignis, das wir dafür nutzen können — fügen Sie folgende Codezeilen direkt unterhalb der vorherigen Ergänzungen hinzu:

```js
let timer = 0;
app.on("update", (deltaTime) => {
  timer += deltaTime;
  // code executed on every frame
});
```

Der Callback nimmt das `deltaTime` als Parameter, sodass wir die relative Zeit haben, die seit dem vorherigen Aufruf dieses Updates vergangen ist. Für zeitbasierte Animationen verwenden wir eine `timer`-Variable, die die Zeit speichert, die seit dem Start der App vergangen ist, indem wir bei jedem Update das `deltaTime` zu ihr hinzufügen.

### Rotation

Das Rotieren ist ziemlich einfach — alles, was Sie tun müssen, ist, bei jedem Frame einen definierten Wert zur gegebenen Drehungsrichtung hinzuzufügen. Fügen Sie diese Codezeile innerhalb der `app.on("update")`-Rückruffunktion hinzu, direkt nach der Addition des `deltaTime` zur `timer`-Variable:

```js
box.rotate(deltaTime * 10, deltaTime * 20, deltaTime * 30);
```

Es wird die `box` bei jedem Frame um `deltaTime*10` auf der `x`-Achse, `deltaTime*20` auf der `y`-Achse und `deltaTime*30` auf der `z`-Achse drehen — und uns so eine flüssige Animation geben.

### Skalierung

Wir können auch ein gegebenes Objekt skalieren — es gibt eine Funktion dafür, die `setLocalScale` heißt. Fügen Sie Folgendes erneut in den Callback hinzu:

```js
cylinder.setLocalScale(1, Math.abs(Math.sin(timer)), 1);
```

Hier verwenden wir `Math.sin`, um den Zylinder in einem Zyklus zu skalieren, größer und kleiner wieder. Wir umschließen den `y`-Skalierwert in `Math.abs`, um die absoluten Werte (größer oder gleich 0) zu übergeben; `sin` schwankt zwischen -1 und 1, und für negative Werte kann die Zylinderskalierung unerwartet erscheinen (in diesem Fall wirkt sie halb schwarz).

Jetzt zum Bewegungsaspekt.

### Bewegung

Neben Rotation und Skalierung können wir Objekte auch in der Szene bewegen. Fügen Sie folgenden Code hinzu, um dies zu erreichen.

```js
cone.setPosition(2, Math.sin(timer * 2), 0);
```

Dies wird den `cone` auf und ab bewegen, indem der `sin`-Wert bei jedem Frame auf die `y`-Achse angewendet wird, mit ein wenig Anpassung, um es cooler aussehen zu lassen. Versuchen Sie, den Wert zu ändern, um zu sehen, wie es die Animation beeinflusst.

## Fazit

Hier ist der endgültige Code-Listing, zusammen mit einem anschaubaren Live-Beispiel:

{{JSFiddleEmbed("https://jsfiddle.net/end3r/auvcLoc4/","","350")}}

Sie können es auch [auf GitHub ansehen](https://github.com/end3r/MDN-Games-3D/blob/gh-pages/PlayCanvas/shapes.html) und [das Repository forkieren](https://github.com/end3r/MDN-Games-3D/), falls Sie selbst lokal damit experimentieren möchten. Nun kennen Sie die Grundlagen der PlayCanvas-Engine; viel Spaß beim Experimentieren!

## Zusammenfassung

Jetzt können Sie den Artikel über den [PlayCanvas-Editor](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas/editor) weiterlesen, zur Seite [Ein einfache Demo mit PlayCanvas aufbauen](/de/docs/Games/Techniques/3D_on_the_web/Building_up_a_basic_demo_with_PlayCanvas) zurückkehren oder eine Ebene höher zur Hauptseite [3D-Spiele im Web](/de/docs/Games/Techniques/3D_on_the_web) zurückkehren.
