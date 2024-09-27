---
title: Erstellen Sie das Canvas und zeichnen Sie darauf
slug: Games/Tutorials/2D_Breakout_game_pure_JavaScript/Create_the_Canvas_and_draw_on_it
l10n:
  sourceCommit: 729754108952e0bac9fb6268fcdf24a63b3cbbf3
---

{{GamesSidebar}}

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}

Dies ist der **1. Schritt** von 10 des [Gamedev Canvas Tutorials](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript). Sie können den Quellcode, wie er nach Abschluss dieser Lektion aussehen sollte, unter [Gamedev-Canvas-workshop/lesson1.html](https://github.com/end3r/Gamedev-Canvas-workshop/blob/gh-pages/lesson01.html) finden.

Bevor wir mit der Implementierung der Spielfunktionalität beginnen können, müssen wir eine grundlegende Struktur erstellen, um das Spiel darin darzustellen. Dies kann mithilfe von HTML und dem {{htmlelement("canvas")}}-Element geschehen.

## HTML des Spiels

Die HTML-Dokumentstruktur ist ziemlich minimal, da das Spiel vollständig auf dem {{htmlelement("canvas")}}-Element dargestellt wird. Erstellen Sie mit Ihrem bevorzugten Texteditor ein neues HTML-Dokument, speichern Sie es als `index.html` an einem sinnvollen Ort und fügen Sie den folgenden Code hinzu:

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

Wir haben ein `charset` definiert, {{htmlelement("title")}} und ein wenig grundlegendes CSS im Header. Der Body enthält {{htmlelement("canvas")}}- und {{htmlelement("script")}}-Elemente — wir werden das Spiel im ersten Element darstellen und den JavaScript-Code, der es steuert, im zweiten schreiben. Das {{htmlelement("canvas")}}-Element hat eine `id` von `myCanvas`, damit wir leicht eine Referenz darauf erhalten können, und es ist 480 Pixel breit und 320 Pixel hoch. Der gesamte JavaScript-Code, den wir in diesem Tutorial schreiben werden, wird zwischen den öffnenden `<script>`- und schließenden `</script>`-Tags eingefügt.

## Canvas-Grundlagen

Um tatsächlich Grafiken auf dem {{htmlelement("canvas")}}-Element darstellen zu können, müssen wir zuerst eine Referenz darauf in JavaScript erhalten. Fügen Sie das Folgende unter Ihrem öffnenden `<script>`-Tag hinzu.

```js
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
```

Hier speichern wir eine Referenz auf das {{htmlelement("canvas")}}-Element in der Variable `canvas`. Dann erstellen wir die Variable `ctx`, um den 2D-Rendering-Kontext zu speichern — das eigentliche Werkzeug, das wir zum Zeichnen auf dem Canvas verwenden können.

Lassen Sie uns ein Beispiel für einen Code sehen, der ein rotes Quadrat auf dem Canvas ausgibt. Fügen Sie dies unter Ihren vorherigen Zeilen JavaScript hinzu und laden Sie dann Ihre `index.html` in einem Browser, um es auszuprobieren.

```js
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = "#FF0000";
ctx.fill();
ctx.closePath();
```

Alle Anweisungen befinden sich zwischen den Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath). Wir definieren ein Rechteck mit [`rect()`](/de/docs/Web/API/CanvasRenderingContext2D/rect): Die ersten beiden Werte geben die Koordinaten der oberen linken Ecke des Rechtecks auf dem Canvas an, während die zweiten beiden die Breite und Höhe des Rechtecks festlegen. In unserem Fall wird das Rechteck 20 Pixel von der linken Seite des Bildschirms und 40 Pixel von der oberen Seite entfernt gezeichnet und ist 50 Pixel breit und 50 Pixel hoch, was es zu einem perfekten Quadrat macht. Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) speichert eine Farbe, die von der Methode [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zum Färben des Quadrats verwendet wird, in unserem Fall rot.

Wir sind nicht auf Rechtecke beschränkt — hier ist ein Code für das Zeichnen eines grünen Kreises. Versuchen Sie, diesen am Ende Ihres JavaScripts hinzuzufügen, zu speichern und zu aktualisieren:

```js
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI * 2, false);
ctx.fillStyle = "green";
ctx.fill();
ctx.closePath();
```

Wie Sie sehen, verwenden wir die Methoden [`beginPath()`](/de/docs/Web/API/CanvasRenderingContext2D/beginPath) und [`closePath()`](/de/docs/Web/API/CanvasRenderingContext2D/closePath) erneut. Dazwischen ist der wichtigste Teil des obigen Codes die Methode [`arc()`](/de/docs/Web/API/CanvasRenderingContext2D/arc). Sie nimmt sechs Parameter entgegen:

- `x`- und `y`-Koordinaten des Mittelpunkts des Bogens
- Bogenradius
- Startwinkel und Endwinkel (welchen Winkelbeginn und -ende für das Zeichnen des Kreises, in Radiant)
- Zeichenrichtung (`false` für im Uhrzeigersinn, die Standardeinstellung, oder `true` für gegen den Uhrzeigersinn). Dieser letzte Parameter ist optional.

Die Eigenschaft [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) sieht anders aus als zuvor. Dies liegt daran, dass Farbe, genau wie bei CSS, als Hexadezimalwert, als Farbwort, als `rgb()`-Funktion oder mit einer der anderen verfügbaren Farbmethode angegeben werden kann.

Anstatt die Formen mit Farben mit [`fill()`](/de/docs/Web/API/CanvasRenderingContext2D/fill) zu füllen, können wir [`stroke()`](/de/docs/Web/API/CanvasRenderingContext2D/stroke) verwenden, um nur die äußere Kontur zu färben. Versuchen Sie, diesen Code auch in Ihr JavaScript einzufügen:

```js
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = "rgb(0 0 255 / 50%)";
ctx.stroke();
ctx.closePath();
```

Der obige Code druckt ein blaugezeichnetes leeres Rechteck. Dank des Alpha-Kanals in der `rgb()`-Funktion ist die blaue Farbe halbtransparent.

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

Jetzt, da wir das grundlegende HTML eingerichtet und ein wenig über das Canvas gelernt haben, wollen wir mit dem zweiten Kapitel fortfahren und herausfinden, wie wir den [Ball in unserem Spiel bewegen](/de/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript/Move_the_ball) können.

{{PreviousNext("Games/Workflows/2D_Breakout_game_pure_JavaScript", "Games/Workflows/2D_Breakout_game_pure_JavaScript/Move_the_ball")}}
