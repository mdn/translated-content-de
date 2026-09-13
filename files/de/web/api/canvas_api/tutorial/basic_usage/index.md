---
title: Grundlegende Verwendung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 6f1b699dd8891431bbfe0bc3bb803f929fa6032e
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie Sie einen Canvas-2D-Kontext einrichten und ein erstes Beispiel in Ihrem Browser zeichnen.

## Das `<canvas>`-Element

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element dem {{HTMLElement("img")}}-Element ähnlich, mit dem einzigen deutlichen Unterschied, dass es keine `src`- und `alt`-Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch mithilfe von {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) festgelegt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, ist der Canvas standardmäßig **300 Pixel** breit und **150 Pixel** hoch. Das Element kann beliebig per {{Glossary("CSS", "CSS")}} dimensioniert werden, aber während des Renderns wird das Bild so skaliert, dass es seiner Layoutgröße entspricht: Wenn die CSS-Größenverhältnisse das anfängliche Canvas-Verhältnis nicht respektieren, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht mit CSS.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie z. B. [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da es dadurch viel einfacher wird, es in einem Skript zu identifizieren.

Das `<canvas>`-Element kann wie jedes normale Bild gestaltet werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht die eigentliche Zeichnung auf dem Canvas. Wir werden sehen, wie dies in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials gemacht wird. Wenn keine stilistischen Regeln auf den Canvas angewendet werden, ist er anfangs vollständig transparent.

### Barrierefreier Inhalt

Das `<canvas>`-Element muss ebenso wie die Elemente {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}} barrierefrei gemacht werden, indem Ersatztext bereitgestellt wird, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie beabsichtigt erleben kann. Sie sollten immer Ersatzinhalte, Untertitel und alternativen Text bereitstellen, die für den Medientyp geeignet sind.

Das Bereitstellen von Ersatzinhalt ist sehr einfach: Fügen Sie einfach den alternativen Inhalt in das `<canvas>`-Element ein, damit Bildschirmleser, Suchmaschinen und andere automatische Bots darauf zugreifen können. Browser ignorieren standardmäßig den Inhalt im Container und rendern den Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts verwenden. Dies könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Den Benutzer darauf hinzuweisen, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft Nutzern nicht, die den Canvas überhaupt nicht lesen können. Das Bereitstellen von nützlichem Ersatztext oder zusätzlichem DOM verbessert die Zugänglichkeit eines ansonsten nicht zugänglichen Elements.

### Erforderliches `</canvas>`-Tag

Aufgrund der Art und Weise, wie Ersatz bereitgestellt wird, erfordert das {{HTMLElement("canvas")}}-Element **im Gegensatz** zum {{HTMLElement("img")}}-Element das abschließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Ersatzinhalt betrachtet und nicht angezeigt werden.

Wenn kein Ersatzinhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn der Canvas rein darstellend ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine Zeichenfläche mit fester Größe, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Arten des Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Der Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie über seine `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Prüfung auf Unterstützung

Der Ersatzinhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmgesteuert auf Unterstützung prüfen, indem sie das Vorhandensein der `getContext()`-Methode testen. Unser obiger Code-Schnipsel wird zu etwa Folgendem:

```js
const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Eine Skelettvorlage

Hier ist eine minimalistische Vorlage, die wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript in HTML einzubetten. Wir machen es hier, um das Beispiel knapp zu halten.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Canvas tutorial</title>
    <style>
      canvas {
        border: 1px solid black;
      }
    </style>
  </head>
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script>
      function draw() {
        const canvas = document.getElementById("canvas");
        const ctx = canvas.getContext("2d");
      }
      draw();
    </script>
  </body>
</html>
```

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies geschieht, indem das Skript nach dem Hauptinhalt des Dokuments platziert wird. Diese Funktion, oder eine ähnliche, könnte auch mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder dem [`load`](/de/docs/Web/API/Window/load_event)-Event-Handler aufgerufen werden, solange die Seite zuerst geladen wurde.

An diesem Punkt sollte dieses Dokument leer gerendert werden.

## Ein einfaches Beispiel

Um zu beginnen, schauen wir uns ein Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines Alpha-Transparenz hat. Wir werden später in weiteren Beispielen genauer untersuchen, wie dies funktioniert. Aktualisieren Sie den Inhalt Ihres `script`-Elements wie folgt:

```html hidden
<canvas id="my-canvas" width="150" height="150"></canvas>
```

```css hidden
canvas {
  border: 1px solid black;
}
```

```js
function draw() {
  const canvas = document.getElementById("my-canvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);
}
draw();
```

Dieses Beispiel sieht so aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
