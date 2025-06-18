---
title: Grundlegende Verwendung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 43700a5e5496c5971f6619e2d01d6ca8f9a31101
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Lassen Sie uns dieses Tutorial beginnen, indem wir uns das {{HTMLElement("canvas")}} {{Glossary("HTML", "HTML")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie Sie einen 2D-Canvas-Kontext einrichten und ein erstes Beispiel in Ihrem Browser gezeichnet haben.

## Das `<canvas>`-Element

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, mit dem einzigen klaren Unterschied, dass es keine `src`- und `alt`-Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch mithilfe von {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, ist das Canvas zunächst **300 Pixel** breit und **150 Pixel** hoch. Das Element kann nach Belieben mit {{Glossary("CSS", "CSS")}} dimensioniert werden, aber während der Wiedergabe wird das Bild so skaliert, dass es in seine Layoutgröße passt: Wenn die CSS-Größenanpassung das Verhältnis des ursprünglichen Canvas nicht respektiert, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Renderings verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht mithilfe von CSS.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie zum Beispiel [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifizierung in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht die tatsächliche Zeichnung auf dem Canvas. Wie dies gemacht wird, werden wir in einem [eigens dafür vorgesehenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen. Wenn keine Styling-Regeln auf das Canvas angewendet werden, ist es zunächst vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss, wie die Elemente {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}, zugänglich gemacht werden, indem ein Fallback-Text bereitgestellt wird, der angezeigt wird, wenn die Medien nicht geladen werden oder der Benutzer nicht in der Lage ist, sie wie beabsichtigt zu erleben. Sie sollten immer Fallback-Inhalte, Untertitel und alternative Texte bereitstellen, die für den jeweiligen Medientyp geeignet sind.

Die Bereitstellung von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt in das `<canvas>`-Element ein, damit dieser von Bildschirmlesegeräten, Suchmaschinen und anderen automatisierten Bots aufgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts. Dies könnte in etwa so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Nutzer zu sagen, er solle einen anderen Browser verwenden, der Canvas unterstützt, hilft Nutzern nicht, die das Canvas überhaupt nicht lesen können. Die Bereitstellung nützlicher Fallback-Texte oder eines zusätzlichen DOM trägt zur Zugänglichkeit eines ansonsten nicht barrierefreien Elements bei.

### Erforderlicher `</canvas>`-Tag

Als Konsequenz der Art und Weise, wie Fallback bereitgestellt wird, erfordert das {{HTMLElement("canvas")}}-Element im Gegensatz zum {{HTMLElement("img")}}-Element den schließenden Tag (`</canvas>`). Wenn dieser Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein darstellend ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine Zeichenfläche mit fester Größe, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die zum Erstellen und Manipulieren der angezeigten Inhalte verwendet werden. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Renderarten bieten; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext, der auf [OpenGL ES](https://www.khronos.org/opengles/) basiert.

Das Canvas ist zunächst leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` benötigt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die [`document.getElementById()`](/de/docs/Web/API/Document/getElementById)-Methode aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie mit seiner `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Überprüfung der Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können die Unterstützung auch programmatisch überprüfen, indem getestet wird, ob die `getContext()`-Methode vorhanden ist. Unser obiger Code-Schnipsel wird zu etwas wie diesem:

```js
const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Eine einfache Vorlage

Hier ist eine minimalistische Vorlage, die wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript innerhalb von HTML einzubetten. Wir tun es hier, um das Beispiel kurz zu halten.

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
        if (canvas.getContext) {
          const ctx = canvas.getContext("2d");
        }
      }
      window.addEventListener("load", draw);
    </script>
  </body>
</html>
```

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies wird erreicht, indem das Skript nach dem Hauptinhalt des Körpers eingefügt wird. Diese Funktion, oder eine ähnliche, könnte auch durch das Verwenden von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

An diesem Punkt sollte dieses Dokument leer angezeigt werden.

## Ein einfaches Beispiel

Um zu beginnen, sehen wir uns ein Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alpha-Transparenz hat. Wir werden in späteren Beispielen genauer untersuchen, wie dies funktioniert. Aktualisieren Sie den Inhalt Ihres `script`-Elements auf Folgendes:

```html hidden
<canvas id="canvas" width="150" height="150"></canvas>
```

```css hidden
canvas {
  border: 1px solid black;
}
```

```js
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
```

Dieses Beispiel sieht so aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
