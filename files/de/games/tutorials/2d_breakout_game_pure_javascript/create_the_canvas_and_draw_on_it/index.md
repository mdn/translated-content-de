---
title: Erstellen Sie das Canvas und Zeichnen darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 36decb5c06d8c61ea011824b4c4446b04a4cf3a7
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **erste Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit dem Schreiben der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin zu rendern. Dies kann mit HTML und dem {{htmlelement("canvas")}}-Element erfolgen.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code ein:

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Gamedev Canvas Workshop</title>
    <style>
      * {
        padding: 0;
        margin: 0;
      }
      canvas {
        background: #eeeeee;
        display: block;
        margin: 0 auto;
      }
    </style>
  </head>
  <body>
    <canvas id="myCanvas" width="480" height="320"></canvas>

    <script>
      // JavaScript code goes here
    </script>
  </body>
</html>
```

Wir haben ein definiertes `charset`, {{htmlelement("title")}} und einige grundlegende CSS im Header. Der Body enthält {{htmlelement("canvas")}}- und {{htmlelement("script")}}-Elemente - wir werden das Spiel im ersten rendern und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat die `id` `myCanvas`, damit wir leicht eine Referenz darauf erhalten können, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben, wird zwischen den öffnenden `<script>`- und den schließenden `</script>`-Tags eingefügt.

## Canvas-Grundlagen

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element rendern zu können, müssen wir zuerst in JavaScript eine Referenz darauf erhalten. Fügen Sie das Folgende unter Ihrem öffnenden `<script>`-Tag hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variablen `canvas`. Danach erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern - das eigentliche Werkzeug, das wir zum Zeichnen auf dem Canvas verwenden können.

Schauen wir uns ein Beispiel an, das ein rotes Quadrat auf das Canvas druckt. Fügen Sie dies unter Ihren vorherigen JavaScript-Zeilen hinzu und laden Sie Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): die ersten beiden Werte geben die Koordinaten der linken oberen Ecke des Rechtecks auf dem Canvas an, während die zweiten beiden die Breite und Höhe des Rechtecks angeben. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von der oberen Seite gemalt und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) verwendet wird, um das Quadrat zu bemalen, in unserem Fall rot.

Wir beschränken uns nicht auf Rechtecke – hier ist ein Codebeispiel für die Ausgabe eines grünen Kreises. Versuchen Sie, dies am Ende Ihres JavaScripts hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen können, verwenden wir erneut die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Dazwischen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter entgegen:

- `x`- und `y`-Koordinaten des Mittelpunkts des Bogens
- Bogenradius
- Startwinkel und Endwinkel (Winkel, ab dem gezeichnet wird, in Bogenmaß)
- Zeichnungsrichtung (`false` für im Uhrzeigersinn, das Standardverhalten, oder `true` für gegen den Uhrzeigersinn). Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als zuvor. Das liegt daran, dass wie bei CSS die Farbe als Hexadezimalwert, als Farbwort, mit der Funktion `rgb()` oder mit einer der anderen verfügbaren Farbmethoden angegeben werden kann.

Anstelle von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) und dem Füllen der Formen mit Farben können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur den äußeren Rand zu färben. Versuchen Sie auch, diesen Code zu Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code zeichnet ein blau umrandetes, leeres Rechteck. Dank des Alphakanals in der `rgb()`-Funktion ist die blaue Farbe halbtransparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, der live ausgeführt wird:

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
```

```css
canvas {
  background: #eeeeee;
}
```

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 0.5)";
ctx.stroke();
ctx.closePath();
```

{{embedlivesample("compare_your_code", 600, 340)}}

> [!NOTE]
> Versuchen Sie, die Größe und Farbe der gegebenen Formen zu ändern.

## Nächste Schritte

Da wir nun das grundlegende HTML eingerichtet und ein wenig über Canvas gelernt haben, lassen Sie uns mit dem zweiten Kapitel fortfahren und herausfinden, wie wir [den Ball in unserem Spiel bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball) können.

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
