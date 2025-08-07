---
title: Erstellen Sie das Canvas und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 451c6b58988664128473a881871707c5ec9737f2
---

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie finden den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html).

Bevor wir mit der Funktionalität des Spiels beginnen können, müssen wir eine grundlegende Struktur schaffen, um das Spiel darin zu rendern. Dies kann mithilfe von HTML und dem {{htmlelement("canvas")}}-Element erfolgen.

## Das HTML des Spiels

Die Struktur des HTML-Dokuments ist ziemlich minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element gerendert wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code ein:

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

Wir haben ein definiertes `charset`, {{htmlelement("title")}} und etwas grundlegendes CSS im Header. Der Body enthält die {{htmlelement("canvas")}} und {{htmlelement("script")}} Elemente — wir werden das Spiel im ersten rendern und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat eine `id` von `myCanvas`, um es uns zu ermöglichen, leicht eine Referenz darauf zu erhalten, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben, wird zwischen dem öffnenden `<script>`- und dem schließenden `</script>`-Tag eingefügt.

## Canvas-Grundlagen

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element rendern zu können, müssen wir zuerst mit JavaScript eine Referenz darauf erhalten. Fügen Sie das Folgende unterhalb Ihres öffnenden `<script>`-Tags hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variablen `canvas`. Dann erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern — das eigentliche Werkzeug, das wir zum Malen auf dem Canvas verwenden können.

Sehen wir uns ein Beispiel für einen Code an, der ein rotes Quadrat auf das Canvas druckt. Fügen Sie dies unter Ihren vorherigen JavaScript-Zeilen hinzu und laden Sie Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "red";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): Die ersten beiden Werte geben die Koordinaten der oberen linken Ecke des Rechtecks auf dem Canvas an, während die zweiten beiden die Breite und die Höhe des Rechtecks angeben. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von der Oberseite entfernt gemalt und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) verwendet wird, um das Quadrat zu malen, in unserem Fall rot.

Wir sind nicht auf Rechtecke beschränkt — hier ist ein Code, um einen grünen Kreis zu drucken. Versuchen Sie, diesen an das Ende Ihres JavaScript-Codes hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen, verwenden wir erneut die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Dazwischen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter entgegen:

- `x`- und `y`-Koordinaten des Zentrums des Bogens
- Bogensradius
- Start- und Endwinkel (welcher Winkel zum Starten und Beenden der Kreiszeichnung, in Radiant)
- Richtung der Zeichnung (`false` für im Uhrzeigersinn, der Standard, oder `true` für gegen den Uhrzeigersinn). Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als zuvor. Dies liegt daran, dass wie bei CSS Farbe als Hexadezimalwert, als Farb-Schlüsselwort, durch die Funktion `rgb()` oder durch eine der anderen verfügbaren Farbmethoden angegeben werden kann.

Statt mit [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) Formen mit Farben zu füllen, können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur die äußere Umrandung zu färben. Versuchen Sie, auch diesen Code zu Ihrem JavaScript hinzuzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code druckt ein blau umrandetes, leeres Rechteck. Dank des Alphakanals in der Funktion `rgb()` ist die blaue Farbe halbtransparent.

## Vergleichen Sie Ihren Code

Hier ist der vollständige Quellcode der ersten Lektion, der live läuft:

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
> Versuchen Sie, die Größe und die Farbe der gegebenen Formen zu ändern.

## Nächste Schritte

Jetzt, da wir das grundlegende HTML eingerichtet und ein wenig über Canvas gelernt haben, fahren wir mit dem zweiten Kapitel fort und lernen, wie man den [Ball in unserem Spiel bewegt](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball).

{{PreviousNext("Games/Tutorials/2D_Breakout_game_pure_JavaScript", "Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
