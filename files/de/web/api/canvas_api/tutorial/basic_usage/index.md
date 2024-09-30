---
title: Grundlegende Nutzung von canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}} [HTML](/de/docs/Glossary/HTML)-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie man einen Canvas-2D-Kontext einrichtet und ein erstes Beispiel in Ihrem Browser zeichnet.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element ähnlich wie das {{HTMLElement("img")}}-Element aus, mit dem einzigen offensichtlichen Unterschied, dass es keine `src`- und `alt`-Attribute hat. In der Tat hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height). Beide sind optional und können auch über [DOM](/de/docs/Glossary/DOM)-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird das Canvas anfangs **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann durch [CSS](/de/docs/Glossary/CSS) beliebig dimensioniert werden, aber während der Darstellung wird das Bild an seine Layoutgröße skaliert: Wenn die CSS-Größen die Proportionen des ursprünglichen Canvas nicht respektieren, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht CSS zu verwenden.

Das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eine der [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes), die auf jedes HTML-Element, wie z.B. [`class`](/de/docs/Web/HTML/Global_attributes/class), angewendet werden können. Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifizierung in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie ein normales Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht das eigentliche Zeichnen auf dem Canvas. Wie dies gemacht wird, wird in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials erläutert. Wenn keine Stylingregeln auf das Canvas angewendet werden, ist es anfangs vollständig transparent.

### Barrierefreier Inhalt

Das `<canvas>`-Element muss, wie die Elemente {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}, barrierefrei gestaltet werden, indem Ersatztext bereitgestellt wird, der angezeigt wird, wenn die Medien nicht geladen werden oder der Benutzer sie nicht wie vorgesehen erleben kann. Sie sollten immer Ersatzinhalt, Untertitel und alternativen Text bereitstellen, je nach Medientyp.

Das Bereitstellen von Ersatzinhalt ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit er von Screenreadern, Spidern und anderen automatisierten Bots aufgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts angeben. Dies könnte folgendermaßen aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Nützlicher Ersatztext oder Unter-DOM-Inhalte hinzufügen, erhöht die Barrierefreiheit eines ansonsten nicht barrierefreien Elements.

### Erforderliches `</canvas>`-Tag

Aufgrund der Art und Weise, wie der Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element im Gegensatz zum {{HTMLElement("img")}}-Element **zwingend** das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte jedoch nur verwendet werden, wenn das Canvas rein dekorativer Natur ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine Zeichenfläche fester Größe, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erzeugen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können verschiedene Arten des Renderings bieten; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext, der auf [OpenGL ES](https://www.khronos.org/opengles/) basiert.

Das Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichnungsfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie in diesem Tutorial behandelt, gibt man `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft das Knoten im DOM ab, das das {{HTMLElement("canvas")}}-Element darstellt, indem es die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufruft. Sobald Sie den Elementknoten haben, können Sie mit der `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Überprüfung auf Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die das {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmatisch durch Testen auf das Vorhandensein der `getContext()`-Methode auf Unterstützung prüfen. Unser Code-Schnipsel von oben sieht dann etwa so aus:

```js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Eine Skelett-Vorlage

Hier ist eine minimalistische Vorlage, die wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript in HTML einzubetten. Wir tun es hier, um das Beispiel übersichtlich zu halten.

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
    <canvas id="tutorial" width="150" height="150"></canvas>
    <script>
      function draw() {
        const canvas = document.getElementById("tutorial");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
        }
      }
      window.addEventListener("load", draw);
    </script>
  </body>
</html>
```

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite geladen ist; dies wird erreicht, indem das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis im Dokument überwacht wird. Diese Funktion oder eine ähnliche kann auch mit [`setTimeout()`](/de/docs/Web/API/SetTimeout), [`setInterval()`](/de/docs/Web/API/SetInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

Hier ist, wie eine Vorlage in Aktion aussehen würde. Wie hier gezeigt, ist sie anfangs leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Um zu beginnen, schauen wir uns ein einfaches Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alphatransparenz hat. Wir werden in späteren Beispielen genauer betrachten, wie dies funktioniert.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Canvas experiment</title>
  </head>
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script type="application/javascript">
      function draw() {
        const canvas = document.getElementById("canvas");
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");

          ctx.fillStyle = "rgb(200 0 0)";
          ctx.fillRect(10, 10, 50, 50);

          ctx.fillStyle = "rgb(0 0 200 / 50%)";
          ctx.fillRect(30, 30, 50, 50);
        }
      }
      draw();
    </script>
  </body>
</html>
```

Dieses Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
