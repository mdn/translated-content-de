---
title: Grundlegende Nutzung von canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Lassen Sie uns dieses Tutorial beginnen, indem wir uns das {{HTMLElement("canvas")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie Sie einen 2D-Canvas-Kontext einrichten und ein erstes Beispiel in Ihrem Browser zeichnen können.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, mit dem einzigen offensichtlichen Unterschied, dass es die Attribute `src` und `alt` nicht hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height). Diese sind beide optional und können auch über [DOM](/de/docs/Glossar/DOM)-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird das Canvas-Element zunächst **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann durch [CSS](/de/docs/Glossar/CSS) beliebig skaliert werden, aber während des Renderings wird das Bild so skaliert, dass es seiner Layoutgröße entspricht: Wenn die CSS-Größe nicht das Verhältnis des ursprünglichen Canvas respektiert, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht mit CSS zu arbeiten.

Das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie zum Beispiel [`class`](/de/docs/Web/HTML/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifizierung im Skript wesentlich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}} …). Diese Regeln beeinflussen jedoch nicht das tatsächliche Zeichnen auf dem Canvas. Wir werden später in einem [speziellen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen, wie dies gemacht wird. Wenn keine Stilregeln auf das Canvas angewendet werden, ist es zunächst vollständig transparent.

### Barrierefreie Inhalte

Das `<canvas>`-Element muss, ähnlich wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}}, und {{HTMLElement("picture")}}-Elemente, zugänglich gemacht werden, indem Sie einen Fallback-Text zur Verfügung stellen, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie vorgesehen erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und Alternativtexte bereitstellen, die für den Medientyp angemessen sind.

Das Bereitstellen von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit Screenreader, Spinnen und andere automatische Bots darauf zugreifen können. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts oder ein statisches Bild des dynamisch gerenderten Inhalts bereitstellen. Dies kann so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Nützlicher Fallback-Text oder sub-DOM fügt einem ansonsten nicht zugänglichen Element Barrierefreiheit hinzu.

### Erforderliches `</canvas>`-Tag

Als Konsequenz der Weise, wie Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element im Gegensatz zum {{HTMLElement("img")}}-Element das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, wird der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentativ ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine zeichenfeste Oberfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die zum Erstellen und Manipulieren der angezeigten Inhalte verwendet werden. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können verschiedene Arten des Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, der den Typ des Kontexts angibt. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element repräsentiert, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie über seine Methode `getContext()` auf den Zeichenkontext zugreifen.

## Unterstützung prüfen

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können die Unterstützung auch programmatisch überprüfen, indem sie das Vorhandensein der Methode `getContext()` testen. Unser Code-Snippet von oben wird zu etwas wie diesem:

```js
const canvas = document.getElementById("tutorial");

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
> Es ist keine gute Praxis, ein Skript in HTML einzubetten. Wir tun es hier, um das Beispiel knapp zu halten.

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies wird durch das Hören auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis im Dokument erreicht. Diese Funktion, oder eine ähnliche, könnte auch durch die Verwendung von [`setTimeout()`](/de/docs/Web/API/SetTimeout), [`setInterval()`](/de/docs/Web/API/SetInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

So würde eine Vorlage in Aktion aussehen. Wie hier gezeigt, ist sie zunächst leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Um zu beginnen, lassen Sie uns ein einfaches Beispiel ansehen, das zwei sich überschneidende Rechtecke zeichnet, von denen eines Transparenz aufweist. Wir werden in späteren Beispielen genauer erkunden, wie dies funktioniert.

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
