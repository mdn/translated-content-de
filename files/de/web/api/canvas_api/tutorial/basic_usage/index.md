---
title: Grundlegende Nutzung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Lassen Sie uns dieses Tutorial beginnen, indem wir uns das {{HTMLElement("canvas")}}-{{Glossary("HTML", "HTML")}}-Element selbst ansehen. Am Ende dieser Seite wissen Sie, wie Sie einen Canvas-2D-Kontext einrichten und ein erstes Beispiel in Ihrem Browser zeichnen.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, mit dem einzigen offensichtlichen Unterschied, dass es keine `src`- und `alt`-Attribute besitzt. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch über {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird der Canvas anfänglich **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann willkürlich durch {{Glossary("CSS", "CSS")}} skaliert werden, aber während des Renderings wird das Bild angepasst, um in seine Layout-Größe zu passen: Wenn die CSS-Größe das Verhältnis des ursprünglichen Canvas nicht respektiert, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht mit CSS.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class) zum Beispiel). Es ist immer eine gute Idee, eine `id` anzugeben, da dies die Identifizierung des Elements in einem Skript wesentlich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln haben jedoch keinen Einfluss auf die eigentliche Zeichnung auf dem Canvas. Wie dies geschieht, werden wir in einem [dedizierten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen. Wenn keine Styling-Regeln auf den Canvas angewendet werden, ist er anfänglich vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss, wie die Elemente {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}, zugänglich gemacht werden, indem ein Fallback-Text bereitgestellt wird, der angezeigt wird, wenn die Medien nicht geladen werden oder der Benutzer sie nicht wie beabsichtigt erleben kann. Sie sollten immer Fallback-Inhalte, Beschriftungen und alternativen Text bereitstellen, die für den Medientyp geeignet sind.

Das Bereitstellen von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit Bildschirmlesegeräte, Spider und andere automatisierte Bots darauf zugreifen können. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern den Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts zur Verfügung stellen. Dies könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, er solle einen anderen Browser verwenden, der Canvas unterstützt, nützt Benutzern nichts, die den Canvas gar nicht lesen können. Nützlicher Fallback-Text oder ein Sub-DOM trägt zur Barrierefreiheit bei einem ansonsten nicht zugänglichen Element bei.

### Erforderliches `</canvas>`-Tag

Infolge der Art und Weise, wie Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element im Gegensatz zum {{HTMLElement("img")}}-Element **zwingend** das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas unterstützen. Dies sollte nur verwendet werden, wenn der Canvas rein präsentational ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine zeichenfeste Zeichenfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die zum Erstellen und Manipulieren des angezeigten Inhalts verwendet werden. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können andere Arten des Renderings bieten; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Der Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die zum Abrufen des Rendering-Kontexts und seiner Zeichenfunktionen verwendet wird. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft die Knoten im DOM ab, die das {{HTMLElement("canvas")}}-Element darstellen, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie über seine `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Prüfung auf Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmatisch auf Unterstützung prüfen, indem sie auf das Vorhandensein der `getContext()`-Methode testen. Unser oben gezeigtes Code-Snippet wird dann etwa so aussehen:

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies geschieht durch das Hören auf das [`load`](/de/docs/Web/API/Window/load_event) Ereignis im Dokument. Diese Funktion oder eine ähnliche könnte auch durch Benutzung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite vorher geladen wurde.

So würde eine Vorlage in Aktion aussehen. Wie hier gezeigt, ist sie anfangs leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Um zu beginnen, lassen Sie uns ein Beispiel betrachten, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alpha-Transparenz besitzt. Wir werden untersuchen, wie dies in späteren Beispielen genauer funktioniert.

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
