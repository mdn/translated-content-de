---
title: Erstellen Sie das Canvas und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 2530db14de9ac226cf06f84540fa0101e804ca9b
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 10 des [Gamedev Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit dem Schreiben der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin darzustellen. Dies lässt sich mit HTML und dem {{htmlelement("canvas")}}-Element realisieren.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie in Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code hinzu:

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

Wir haben ein `charset` definiert, {{htmlelement("title")}} und ein wenig grundlegendes CSS im Header. Der Body enthält {{htmlelement("canvas")}}- und {{htmlelement("script")}}-Elemente — wir werden das Spiel im ersten rendern und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat eine `id` von `myCanvas`, damit wir es leicht referenzieren können, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben, wird zwischen den öffnenden `<script>` und schließenden `</script>`-Tags stehen.

## Grundlagen des Canvas

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element darstellen zu können, müssen wir zunächst eine Referenz darauf in JavaScript erhalten. Fügen Sie das folgende unterhalb Ihres öffnenden `<script>`-Tags hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variablen `canvas`. Dann erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern — das eigentliche Werkzeug, mit dem wir auf dem Canvas malen können.

Sehen wir uns ein Beispiel für einen Code an, der ein rotes Quadrat auf das Canvas druckt. Fügen Sie dies unter Ihren vorherigen JavaScript-Zeilen hinzu und laden Sie dann Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): die ersten beiden Werte geben die Koordinaten der oberen linken Ecke des Rechtecks auf dem Canvas an, während die zweiten beiden die Breite und Höhe des Rechtecks spezifizieren. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von oben entfernt gemalt und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) verwendet wird, um das Quadrat zu malen, in unserem Fall rot.

Wir sind nicht auf Rechtecke beschränkt — hier ist ein Code, um einen grünen Kreis zu zeichnen. Versuchen Sie, dies am Ende Ihres JavaScripts hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen, verwenden wir erneut die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Zwischen ihnen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter an:

- `x` und `y` Koordinaten des Mittelpunkts des Bogens
- Radius des Bogens
- Start- und Endwinkel (in welchem Winkel der Kreis gezeichnet werden soll, in Radiant)
- Zeichnungsrichtung (`false` für im Uhrzeigersinn, der Standard, oder `true` für gegen den Uhrzeigersinn). Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als vorher. Dies liegt daran, dass, genau wie bei CSS, die Farbe als Hexadezimalwert, ein Farbstichwort, die Funktion `rgb()` oder eine der anderen verfügbaren Farbmethoden angegeben werden kann.

Anstelle von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zur Füllung der Formen mit Farben, können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur den äußeren Strich zu färben. Versuchen Sie, diesen Code ebenfalls zu Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code druckt ein blau umrandetes leeres Rechteck. Dank des Alpha-Kanals in der `rgb()`-Funktion ist die blaue Farbe halbtransparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live ausgeführt:

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
> Versuchen Sie, die Größe und Farbe der vorgegebenen Formen zu ändern.

## Nächste Schritte

Nun haben wir das grundlegende HTML eingerichtet und ein wenig über Canvas gelernt. Lassen Sie uns mit dem zweiten Kapitel fortfahren und herausfinden, wie wir den [Ball in unserem Spiel bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
