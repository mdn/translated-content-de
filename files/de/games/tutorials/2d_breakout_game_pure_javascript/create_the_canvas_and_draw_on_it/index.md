---
title: Erstellen Sie das Canvas und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 21addd31954b2629ab3e186dacdf7edca813dc7d
---

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, finden Sie unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit der Funktionalität des Spiels beginnen können, müssen wir eine Grundstruktur erstellen, um das Spiel darin zu rendern. Dies kann mithilfe von HTML und dem {{htmlelement("canvas")}}-Element geschehen.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist recht minimal, da das Spiel vollständig im {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code hinzu:

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

Wir haben einen `charset` definiert, einen {{htmlelement("title")}} und etwas grundlegendes CSS im Kopfbereich. Der Body enthält die {{htmlelement("canvas")}} und {{htmlelement("script")}}-Elemente – wir werden das Spiel im ersten rendern und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat eine `id` von `myCanvas`, damit wir es leicht referenzieren können, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben, wird zwischen den öffnenden `<script>` und schließenden `</script>`-Tags gesetzt.

## Grundlagen des Canvas

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element rendern zu können, müssen wir zuerst eine Referenz darauf in JavaScript erhalten. Fügen Sie das Folgende unter Ihrem öffnenden `<script>`-Tag hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der `canvas`-Variable. Dann erstellen wir die `ctx`-Variable, um den 2D-Rendering-Kontext zu speichern – das tatsächliche Werkzeug, das wir verwenden können, um auf dem Canvas zu malen.

Sehen wir uns ein Beispielcode an, das ein rotes Quadrat auf dem Canvas druckt. Fügen Sie dies unter Ihren vorherigen JavaScript-Zeilen hinzu und laden Sie Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): die ersten beiden Werte geben die Koordinaten der oberen linken Ecke des Rechtecks auf dem Canvas an, während die zweiten beiden die Breite und Höhe des Rechtecks angeben. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von der Oberseite gemalt und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) verwendet wird, um das Quadrat zu malen, in unserem Fall rot.

Wir sind nicht auf Rechtecke beschränkt – hier ist ein Code, um einen grünen Kreis zu drucken. Versuchen Sie, dies am Ende Ihres JavaScript hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen können, verwenden wir erneut die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Dazwischen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter an:

- `x`- und `y`-Koordinaten des Mittelpunkts des Bogens
- Bogenradius
- Startwinkel und Endwinkel (welcher Winkel zum Starten und Beenden des Zeichnens des Kreises, in Radiant)
- Zeichnungsrichtung (`false` für im Uhrzeigersinn, die Standardeinstellung, oder `true` für gegen den Uhrzeigersinn.) Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als zuvor. Dies liegt daran, dass Farben, genau wie im CSS, als Hexadezimalwert, Farbenschlüsselwort, mit der `rgb()`-Funktion oder einer der anderen verfügbaren Farbmethoden angegeben werden können.

Anstatt [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zu verwenden und die Formen mit Farben zu füllen, können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur den äußeren Rand zu färben. Versuchen Sie auch diesen Code Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code druckt ein blaugefärbtes leeres Rechteck. Dank des Alphakanals in der `rgb()`-Funktion ist die blaue Farbe halbtransparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, die live läuft:

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

Jetzt, da wir das grundlegende HTML eingerichtet haben und etwas über das Canvas gelernt haben, lassen Sie uns mit dem zweiten Kapitel fortfahren und herausfinden, wie wir den [Ball in unserem Spiel bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
