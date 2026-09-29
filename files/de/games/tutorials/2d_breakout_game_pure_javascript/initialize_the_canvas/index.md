---
title: Canvas initialisieren
slug: Games/Tutorials/2D_breakout_game_pure_JavaScript/Initialize_the_canvas
l10n:
  sourceCommit: 69937a446786abf5a58d4214b4192597d0b3cdc6
---

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 11 im [Tutorial zum Erstellen eines Breakout-Spiels mit reinem JavaScript](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript). Bevor wir die Spielfunktionen programmieren, benötigen wir eine grundlegende Struktur, in der das Spiel dargestellt wird. Dazu verwenden wir das Element {{htmlelement("canvas")}}.

## Das HTML des Spiels

Das Spiel wird vollständig auf dem Element {{htmlelement("canvas")}} dargestellt. Erstellen Sie mit einem Texteditor Ihrer Wahl ein neues HTML-Dokument, speichern Sie es an einem geeigneten Ort als `index.html` und fügen Sie den folgenden Code ein:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Breakout game</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
    </style>
    <script src="js/script.js" defer></script>
  </head>
  <body>
    <canvas id="game-canvas" width="480" height="320"></canvas>
  </body>
</html>
```

Erstellen Sie anschließend am selben Ort wie die Datei `index.html` ein Verzeichnis namens `js` und darin eine Datei namens `script.js`. In dieser Datei schreiben wir den JavaScript-Code, der das Spiel steuert. Zunächst sollte sie Folgendes enthalten:

```js
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

## Was wir bisher haben

Im Kopfbereich unseres Dokuments befinden sich ein `charset`, ein {{htmlelement("title")}}, etwas grundlegendes CSS zum Zurücksetzen der Standardwerte für `margin` und `padding` sowie ein {{htmlelement("script")}}-Element, das auf den JavaScript-Code verweist, mit dem wir das Spiel darstellen und steuern werden.

Auf dem Element {{htmlelement("canvas")}} wird das Spiel dargestellt. Anfangs ist es leer und nimmt 480 × 320 Pixel ein. Mit [`HTMLCanvasElement.getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext) erhalten wir den [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D), mit dem wir zweidimensionale Formen auf dem Canvas zeichnen können. Damit füllen wir die gesamte Canvas-Fläche in einem sehr hellen Grau.

## Skalierung

Derzeit nimmt der Canvas eine feste Fläche auf dem Bildschirm ein. Auf einem großen Bildschirm, etwa einem Laptop, sitzt er in einer kleinen Ecke. Auf einem kleinen Bildschirm, etwa einem Smartphone – wobei es dafür wirklich sehr klein sein müsste –, ragt er über den Bildschirm hinaus. Damit das Spiel auf jede Bildschirmgröße passt, können wir den Canvas responsiv gestalten. So müssen wir uns später nicht mehr darum kümmern. Wir vergrößern oder verkleinern den Canvas so, dass:

1. sein Seitenverhältnis erhalten bleibt,
2. entweder seine Breite der Fensterbreite oder seine Höhe der Fensterhöhe entspricht und
3. die jeweils andere Abmessung nicht über den Fensterrand hinausragt.

Dazu fügen wir dem `<style>`-Element in `index.html` das folgende CSS hinzu:

```css
body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

Der Canvas hat ein Seitenverhältnis von 480 / 320, also 3:2. Damit er in das Fenster passt, darf seine Breite weder die Fensterbreite (`100vw`) noch das 1,5-Fache der Fensterhöhe (`150vh`) überschreiten. Die CSS-Funktion {{CSSxRef("min()")}} wählt den kleineren dieser beiden Werte. Mit `height: auto` ergibt sich die Höhe aus dem Seitenverhältnis des Canvas, sodass beide Abmessungen innerhalb des Fensters bleiben. Der Body ist mindestens so hoch wie das Fenster und zentriert den Canvas mit `place-items: center` sowohl horizontal als auch vertikal.

Dieses CSS ändert die angezeigte Größe des Canvas. Seine HTML-Attribute `width` und `height` belassen den Zeichenbereich dagegen bei 480 × 320 Pixeln. Wir können daher in unserem JavaScript unabhängig von der Fenstergröße dieselben Koordinaten verwenden. Der Browser skaliert das resultierende Bild auf die angezeigte Größe.

## Anwendung ausführen

Sie können die Datei `index.html` direkt öffnen, um die Anwendung auszuführen. Wir empfehlen jedoch einen lokalen Webserver, falls wir später externe Ressourcen laden möchten, die andernfalls durch die [Same-Origin-Policy](/de/docs/Web/Security/Defenses/Same-origin_policy) des Browsers blockiert würden.

Lesen Sie die [Anleitungen zum Einrichten eines lokalen Servers](/de/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server) und wählen Sie eine beliebige Möglichkeit. Wenn Sie beispielsweise den Python-HTTP-Server verwenden möchten, öffnen Sie ein Terminal, wechseln Sie in das Verzeichnis mit Ihrer Datei `index.html` und führen Sie den folgenden Befehl aus:

```bash
python3 -m http.server
```

Dadurch wird ein einfacher HTTP-Server auf Port 8000 gestartet. Öffnen Sie anschließend Ihren Webbrowser und rufen Sie `http://localhost:8000/index.html` auf.

## Vergleichen Sie Ihren Code

So sollte Ihr bisheriger Stand aussehen – hier als laufendes Beispiel. Um den Quellcode anzusehen, klicken Sie auf die Schaltfläche „Play“.

Außer dem hellgrauen Canvas-Hintergrund ist hier noch nichts zu sehen.

```html hidden
<canvas id="game-canvas" width="480" height="320"></canvas>
```

```css hidden
* {
  padding: 0;
  margin: 0;
}

body {
  min-height: 100vh;
  display: grid;
  place-items: center;
}

canvas {
  display: block;
  width: min(100vw, 150vh);
  height: auto;
}
```

```js hidden
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "#eeeeee";
ctx.fillRect(0, 0, canvas.width, canvas.height);
```

{{EmbedLiveSample("compare your code", "", 480, , , , , "allow-modals")}}

## Nächste Schritte

Nachdem wir das grundlegende HTML eingerichtet haben, fahren wir mit der zweiten Lektion fort. Dort lernen wir, wie wir [einen Ball darstellen und bewegen](/de/docs/Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_breakout_game_pure_JavaScript", "Games/Tutorials/2D_breakout_game_pure_JavaScript/Move_the_ball")}}
