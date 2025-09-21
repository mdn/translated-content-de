---
title: Grundlegende Verwendung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: b4d7275e992575d765bd1f504c28c0a64e1d0632
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}}-{{Glossary("HTML", "HTML")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie Sie einen Canvas-2D-Kontext einrichten und ein erstes Beispiel in Ihrem Browser gezeichnet haben.

## Das `<canvas>`-Element

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, mit dem einzigen klaren Unterschied, dass es nicht die `src` und `alt` Attribute besitzt. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch mithilfe von {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) eingestellt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird das Canvas zunächst **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann beliebig per {{Glossary("CSS", "CSS")}} skaliert werden, aber während der Darstellung wird das Bild so skaliert, dass es die Layoutgröße passt: Wenn die CSS-Größenanpassung das Verhältnis des ursprünglichen Canvas nicht respektiert, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Renderings verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht CSS zu verwenden.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern gehört zu den [globalen HTML-Attributen](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie z.B. [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifizierung in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}...). Diese Regeln beeinflussen jedoch nicht die tatsächliche Zeichnung auf dem Canvas. Wie das gemacht wird, sehen wir in einem [dedizierten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials. Wenn keine Styling-Regeln auf das Canvas angewendet werden, ist es zunächst vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elemente barrierefrei gemacht werden, indem Fallback-Text bereitgestellt wird, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie vorgesehen erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und alternativen Text bereitstellen, die für den Medientyp geeignet sind.

Fallback-Inhalte bereitzustellen, ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit er von Screenreadern, Suchmaschinen und anderen automatisierten Bots abgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts bereitstellen. Dies könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Den User anzuweisen, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft denjenigen nicht, die das Canvas überhaupt nicht lesen können. Nützlicher Fallback-Text oder ein untergeordnetes DOM-Element erhöht die Zugänglichkeit eines sonst nicht zugänglichen Elements.

### Erforderlicher `</canvas>`-Tag

Als Folge der Art und Weise, wie Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element **im Gegensatz zum {{HTMLElement("img")}}-Element** das abschließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein dekorativ ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine festgelegte Zeichenfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Arten von Rendering bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext, der auf [OpenGL ES](https://www.khronos.org/opengles/) basiert.

Das Canvas ist zunächst leer. Um etwas anzuzeigen, muss ein Skript zuerst den Rendering-Kontext abrufen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie den Zeichenkontext mit seiner `getContext()`-Methode abrufen.

## Unterstützung prüfen

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmatisch die Unterstützung prüfen, indem sie auf das Vorhandensein der `getContext()`-Methode testen. Unser oben stehender Code-Snippet wird zu etwas wie diesem:

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
> Es ist keine gute Praxis, ein Skript in HTML einzubetten. Wir tun dies hier, um das Beispiel kurz zu halten.

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies geschieht, indem das Skript nach dem Hauptinhalt des Dokuments platziert wird. Diese Funktion oder eine ähnliche könnte auch mithilfe von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder dem [`load`](/de/docs/Web/API/Window/load_event)-Ereignis-Handler aufgerufen werden, solange die Seite zuerst geladen wurde.

An diesem Punkt sollte dieses Dokument leer angezeigt werden.

## Ein einfaches Beispiel

Um zu beginnen, schauen wir uns ein Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alphatransparenz hat. Wir werden später detaillierter darauf eingehen, wie dies funktioniert. Aktualisieren Sie den Inhalt Ihres `script`-Elements zu diesem:

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
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "rgb(200 0 0)";
  ctx.fillRect(10, 10, 50, 50);

  ctx.fillStyle = "rgb(0 0 200 / 50%)";
  ctx.fillRect(30, 30, 50, 50);
}
draw();
```

Dieses Beispiel sieht folgendermaßen aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
