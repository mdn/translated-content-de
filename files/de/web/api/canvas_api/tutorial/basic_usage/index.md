---
title: Grundlegende Nutzung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial mit einem Blick auf das {{HTMLElement("canvas")}}-{{Glossary("HTML")}}-Element selbst. Am Ende dieser Seite werden Sie wissen, wie man einen Canvas-2D-Kontext einrichtet und ein erstes Beispiel in Ihrem Browser gezeichnet hat.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element wie ein {{HTMLElement("img")}}-Element aus, mit dem einzigen klaren Unterschied, dass es die Attribute `src` und `alt` nicht besitzt. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height). Diese sind beide optional und können auch über {{Glossary("DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird das Canvas anfangs **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann beliebig durch {{Glossary("CSS")}} skaliert werden, aber beim Rendern wird das Bild an seine Layout-Größe angepasst: Wenn die CSS-Größenanpassung das Verhältnis des ursprünglichen Canvas nicht respektiert, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht über CSS.

Das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie z.B. [`class`](/de/docs/Web/HTML/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifikation in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht das tatsächliche Zeichnen auf dem Canvas. Wie dies gemacht wird, sehen wir in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials. Wenn dem Canvas keine Stylingregeln zugewiesen sind, wird es anfangs völlig transparent sein.

### Zugänglicher Inhalt

Das `<canvas>`-Element, ähnlich den {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elementen, muss zugänglich gemacht werden, indem ein Fallback-Text bereitgestellt wird, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie vorgesehen erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und Alternativtexte bereitstellen, wie es für den Medientyp angemessen ist.

Das Bereitstellen von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt in das `<canvas>`-Element ein, damit er von Screenreadern, Suchmaschinen und anderen automatisierten Bots abgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts anzeigen. Das könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="Ein Uhr" />
</canvas>
```

Den Benutzer aufzufordern, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Das Bereitstellen nützlicher Fallback-Texte oder untergeordneter DOM-Elemente erhöht die Zugänglichkeit eines ansonsten nicht zugänglichen Elements.

### Erforderliches `</canvas>`-Tag

Als Folge der Methode zur Bereitstellung von Fallback-Inhalten, im Gegensatz zum {{HTMLElement("img")}}-Element, **erfordert** das {{HTMLElement("canvas")}}-Element das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentational ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine festgelegte Zeichenfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die zur Erstellung und Manipulation des angezeigten Inhalts verwendet werden. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können verschiedene Arten des Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext, der auf [OpenGL ES](https://www.khronos.org/opengles/) basiert.

Das Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens {{domxref("HTMLCanvasElement.getContext", "getContext()")}}, die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, weist man `"2d"` zu, um ein {{domxref("CanvasRenderingContext2D")}} zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode {{domxref("document.getElementById()")}} aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie auf den Zeichenkontext mit seiner `getContext()`-Methode zugreifen.

## Überprüfung der Unterstützung

In Browsern, die {{HTMLElement("canvas")}} nicht unterstützen, wird der Fallback-Inhalt angezeigt. Skripte können auch programmatisch überprüfen, ob Unterstützung vorhanden ist, indem getestet wird, ob die Methode `getContext()` vorhanden ist. Unser obiger Code-Snippet wird dann so aussehen:

```js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // Zeichnungscode hier
} else {
  // Code für nicht unterstütztes Canvas hier
}
```

## Ein Grundgerüst-Template

Hier ist ein minimalistisches Template, das wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript innerhalb von HTML einzubetten. Wir tun es hier, um das Beispiel prägnant zu halten.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="utf-8" />
    <title>Canvas-Tutorial</title>
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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite das Laden beendet hat; dies wird durch Abhören des {{domxref("Window/load_event", "load")}}-Ereignisses auf dem Dokument getan. Diese Funktion, oder eine ähnliche, könnte auch durch {{domxref("setTimeout()")}}, {{domxref("setInterval()")}} oder jeden anderen Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

So würde ein Template im Einsatz aussehen. Wie hier gezeigt, ist es anfangs leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Beginnen wir mit einem einfachen Beispiel, das zwei sich überschneidende Rechtecke zeichnet, von denen eines Alpha-Transparenz besitzt. Wir werden in späteren Beispielen genauer erkunden, wie dies funktioniert.

```html
<!doctype html>
<html lang="en-US">
  <head>
    <meta charset="UTF-8" />
    <title>Canvas-Experiment</title>
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

Dieses Beispiel sieht so aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
