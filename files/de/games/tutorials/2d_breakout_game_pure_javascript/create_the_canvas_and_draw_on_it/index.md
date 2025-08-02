---
title: Erstellen Sie die Leinwand und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 4483da6501d1c735a0e1ac1e95775e2fe1766dc3
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 10 des [Gamedev-Canvas-Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit dem Schreiben der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur schaffen, um das Spiel darzustellen. Dies kann mit HTML und dem {{htmlelement("canvas")}}-Element geschehen.

## Das HTML des Spiels

Die HTML-Dokumentstruktur ist ziemlich minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem geeigneten Ort und fügen Sie den folgenden Code hinzu:

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
        background: #eee;
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

Wir haben einen `charset` definiert, ein {{htmlelement("title")}} und etwas grundlegendes CSS im Header. Der Körper enthält die {{htmlelement("canvas")}}- und {{htmlelement("script")}}-Elemente — im ersten wird das Spiel gerendert, im zweiten schreiben wir den JavaScript-Code, der es steuert. Das {{htmlelement("canvas")}}-Element hat eine `id` von `myCanvas`, um uns zu ermöglichen, leicht eine Referenz darauf zu erhalten, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben werden, wird zwischen den öffnenden `<script>`- und den schließenden `</script>`-Tags platziert.

## Grundlagen der Leinwand

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element rendern zu können, müssen wir zuerst in JavaScript eine Referenz darauf erhalten. Fügen Sie das folgende unter Ihrem öffnenden `<script>`-Tag hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variablen `canvas`. Dann erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern — das eigentliche Werkzeug, mit dem wir auf der Leinwand malen können.

Lassen Sie uns ein Beispiel für einen Codeabschnitt sehen, der ein rotes Quadrat auf die Leinwand malt. Fügen Sie dies unterhalb Ihrer vorherigen JavaScript-Zeilen hinzu und laden Sie Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen stehen zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit der Methode [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): die ersten beiden Werte geben die Koordinaten der oberen linken Ecke des Rechtecks auf der Leinwand an, während die zweiten beiden die Breite und Höhe des Rechtecks angeben. In unserem Fall wird das Rechteck 20 Pixel vom linken Rand und 40 Pixel vom oberen Rand gezeichnet und ist 50 Pixel breit und hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) verwendet wird, um das Quadrat zu malen, in unserem Fall Rot.

Wir sind nicht auf Rechtecke beschränkt — hier ist ein Codeabschnitt zum Ausdrucken eines grünen Kreises. Versuchen Sie, dies an das Ende Ihres JavaScripts hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen können, verwenden wir die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath) wieder. Dazwischen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter:

- `x`- und `y`-Koordinaten des Kreismittelpunkts
- Radius des Kreises
- Anfangswinkel und Endwinkel (welcher Winkel zum Zeichnen des Kreises, in Radianten, begonnen und beendet wird)
- Zeichenrichtung (`false` für im Uhrzeigersinn, der Standard, oder `true` für gegen den Uhrzeigersinn). Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als vorher. Dies liegt daran, dass die Farbe, genau wie in CSS, als Hexadezimalwert, als Farbname, mit der `rgb()`-Funktion oder einer der anderen verfügbaren Farbmethoden angegeben werden kann.

Anstelle von [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zum Füllen der Formen mit Farben, können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur den äußeren Rand zu färben. Versuchen Sie, diesen Code auch Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code druckt ein blau umrandetes leeres Rechteck. Dank des Alphakanals in der `rgb()`-Funktion ist die blaue Farbe halb transparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live laufend:

```html
<canvas id="myCanvas" width="480" height="320"></canvas>
```

```css
canvas {
  background: #eee;
}
```

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
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

Nun, da wir das grundlegende HTML eingerichtet und ein wenig über die Leinwand gelernt haben, lassen Sie uns mit dem zweiten Kapitel fortfahren und herausfinden, wie wir [den Ball in unserem Spiel bewegen können](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
