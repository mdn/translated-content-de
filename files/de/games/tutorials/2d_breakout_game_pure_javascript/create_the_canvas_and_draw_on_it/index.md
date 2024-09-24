---
title: Erstellen Sie das Canvas und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **erste Schritt** von insgesamt 10 im [Gamedev Canvas-Tutorial](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit der Funktionalität des Spiels beginnen können, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin darzustellen. Dies kann mit HTML und dem {{htmlelement("canvas")}}-Element erfolgen.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element dargestellt wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code hinzu:

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

Wir haben ein `charset` definiert, einen {{htmlelement("title")}} und einige grundlegende CSS im Header. Der Body enthält {{htmlelement("canvas")}} und {{htmlelement("script")}}-Elemente — wir werden das Spiel im ersten darstellen und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat die `id` `myCanvas`, damit wir leicht eine Referenz darauf erhalten können, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben, wird zwischen den öffnenden `<script>`- und schließenden `</script>`-Tags platziert.

## Grundlagen des Canvas

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element darstellen zu können, müssen wir zuerst eine Referenz darauf in JavaScript erhalten. Fügen Sie das folgende unterhalb Ihres öffnenden `<script>`-Tags hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variablen `canvas`. Dann erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern — das tatsächliche Werkzeug, mit dem wir auf dem Canvas zeichnen können.

Sehen wir uns ein Beispiel an, das ein rotes Quadrat auf dem Canvas druckt. Fügen Sie dies unterhalb Ihrer vorherigen JavaScript-Zeilen hinzu und laden Sie dann Ihr `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}- und {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}-Methoden. Wir definieren ein Rechteck mit {{domxref("CanvasRenderingContext2D.rect()","rect()")}}: die ersten beiden Werte spezifizieren die Koordinaten der oberen linken Ecke des Rechtecks auf dem Canvas, während die zweiten beiden die Breite und Höhe des Rechtecks angeben. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von der Oberseite gemalt, und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}-Eigenschaft speichert eine Farbe, die von der {{domxref("CanvasRenderingContext2D.fill()","fill()")}}-Methode verwendet wird, um das Quadrat rot zu malen.

Wir sind nicht auf Rechtecke beschränkt — hier ist ein Codebeispiel zum Zeichnen eines grünen Kreises. Versuchen Sie, dies an das Ende Ihres JavaScripts hinzuzufügen, speichern und aktualisieren Sie:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen, verwenden wir erneut die {{domxref("CanvasRenderingContext2D.beginPath()","beginPath()")}}- und {{domxref("CanvasRenderingContext2D.closePath()","closePath()")}}-Methoden. Dazwischen ist der wichtigste Teil der obigen Codezeilen die {{domxref("CanvasRenderingContext2D.arc()","arc()")}}-Methode. Sie benötigt sechs Parameter:

- `x`- und `y`-Koordinaten des Kreismittelpunkts
- Radius des Bogens
- Startwinkel und Endwinkel (der Winkel, um den Kreis zu beginnen und zu beenden, in Radiant)
- Zeichnungsrichtung (`false` für im Uhrzeigersinn, die Standardeinstellung, oder `true` für gegen den Uhrzeigersinn.) Dieser letzte Parameter ist optional.

Die {{domxref("CanvasRenderingContext2D.fillStyle","fillStyle")}}-Eigenschaft sieht anders aus als zuvor. Das liegt daran, dass, genau wie bei CSS, die Farbe als ein Hexadezimalwert, ein Farbstichwort, die `rgb()`-Funktion oder eine der anderen verfügbaren Farbmethoden angegeben werden kann.

Anstelle von {{domxref("CanvasRenderingContext2D.fill()","fill()")}} und dem Füllen der Formen mit Farben, können wir {{domxref("CanvasRenderingContext2D.stroke()","stroke()")}} verwenden, um nur den äußeren Rand zu färben. Versuchen Sie auch, diesen Code zu Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code zeichnet ein blau umrandetes, leeres Rechteck. Dank des Alpha-Kanals in der `rgb()`-Funktion ist die blaue Farbe halbtransparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, live ausgeführt:

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

Jetzt, da wir das grundlegende HTML eingerichtet haben und ein wenig über Canvas gelernt haben, fahren wir mit dem zweiten Kapitel fort und arbeiten daran, [den Ball in unserem Spiel zu bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
