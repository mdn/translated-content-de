---
title: Grundlegende Nutzung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: e4e57ab3ccb5f93319f8fe13848d4895d3e1e771
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}} {{Glossary("HTML", "HTML")}}-Element selbst ansehen. Am Ende dieser Seite wissen Sie, wie Sie einen Canvas-2D-Kontext einrichten und ein erstes Beispiel in Ihrem Browser gezeichnet haben.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}} wie das {{HTMLElement("img")}}-Element aus, mit dem einzigen klaren Unterschied, dass es die Attribute `src` und `alt` nicht hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch über {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, ist der Canvas zunächst **300 Pixel** breit und **150 Pixel** hoch. Das Element kann mittels {{Glossary("CSS", "CSS")}} beliebig dimensioniert werden, aber während des Renderings wird das Bild so skaliert, dass es in seine Layoutgröße passt: Wenn die CSS-Dimensionierung nicht das Verhältnis des ursprünglichen Canvas respektiert, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht CSS zu verwenden.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), das auf jedes HTML-Element angewendet werden kann (wie zum Beispiel [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` zu vergeben, da dies die Identifizierung in einem Skript wesentlich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht die tatsächliche Zeichnung im Canvas. Wie dies geschieht, werden wir in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen. Wenn keine Stilregeln auf das Canvas angewendet werden, ist es anfänglich vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss, wie die Elemente {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}, zugänglich gemacht werden, indem ein Fallback-Text bereitgestellt wird, der angezeigt wird, wenn die Medien nicht geladen werden oder der Benutzer sie nicht wie vorgesehen erleben kann. Sie sollten stets Fallback-Inhalte, Untertitel und alternativen Text bereitstellen, passend zum Medientyp.

Fallback-Inhalte bereitzustellen ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit Screenreader, Spider und andere automatische Bots darauf zugreifen können. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts anzeigen. Das könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft nicht den Benutzern, die das Canvas überhaupt nicht lesen können. Nützlichen Fallback-Text oder ein untergeordnetes DOM bereitzustellen, trägt zur Zugänglichkeit eines ansonsten nicht zugänglichen Elements bei.

### Erforderliches `</canvas>`-Tag

Als Konsequenz der Art und Weise, wie Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element **erforderlich** das schließende Tag (`</canvas>`), im Gegensatz zum {{HTMLElement("img")}}-Element. Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die überhaupt Canvas unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentational ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine feststehende Zeichenfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die zum Erstellen und Manipulieren des angezeigten Inhalts verwendet werden. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Arten der Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist anfänglich leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie mit der `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Prüfung auf Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmgesteuert auf Unterstützung prüfen, indem sie das Vorhandensein der `getContext()`-Methode testen. Unser obiger Codeausschnitt sieht dann so aus:

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
> Es ist nicht gute Praxis, ein Skript in HTML einzubetten. Wir tun dies hier, um das Beispiel knapp zu halten.

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies wird durch das Anhören des [`load`](/de/docs/Web/API/Window/load_event)-Ereignisses am Dokument erreicht. Diese Funktion, oder eine ähnliche, könnte auch mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

So würde eine Vorlage in Aktion aussehen. Wie hier gezeigt, ist sie anfänglich leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Um zu beginnen, schauen wir uns ein Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alpha-Transparenz hat. Wir werden in späteren Beispielen genauer untersuchen, wie dies funktioniert.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Canvas experiment</title>
  </head>
  <body>
    <canvas id="canvas" width="150" height="150"></canvas>
    <script>
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
