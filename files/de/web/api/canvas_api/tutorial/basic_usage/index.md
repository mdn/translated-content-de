---
title: Grundlegende Nutzung von canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 1b4e6d1156e8471d38deeea1567c35ef412c5f42
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Lassen Sie uns dieses Tutorial beginnen, indem wir uns das {{HTMLElement("canvas")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie Sie einen 2D-Kontext für das Canvas einrichten und ein erstes Beispiel in Ihrem Browser gezeichnet haben.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element dem {{HTMLElement("img")}}-Element ähnlich, mit dem einzigen klaren Unterschied, dass es keine `src` und `alt` Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height). Diese sind beide optional und können auch mit {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width` und `height` Attribute angegeben sind, ist das Canvas anfangs **300 Pixel** breit und **150 Pixel** hoch. Das Element kann beliebig mit {{Glossary("CSS", "CSS")}} skaliert werden, aber während der Darstellung wird das Bild so skaliert, dass es seine Layoutgröße erfüllt: Wenn die CSS-Größe das Verhältnis des initialen Canvas nicht respektiert, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width` und `height` Attribute explizit in den `<canvas>` Attributen anzugeben und nicht CSS zu verwenden.

Das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie beispielsweise [`class`](/de/docs/Web/HTML/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` bereitzustellen, da dies die Identifizierung in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht das eigentliche Zeichnen auf dem Canvas. Wie dies gemacht wird, erfahren wir in einem [dedizierten Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials. Wenn keine Styling-Regeln auf das Canvas angewendet werden, ist es anfangs vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss, ähnlich wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elemente, durch Bereitstellung eines Fallback-Texts zugänglich gemacht werden, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie vorgesehen erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und alternativen Text bereitstellen, die für den Medientyp geeignet sind.

Die Bereitstellung eines Fallback-Inhalts ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit er von Bildschirmlesegeräten, Suchmaschinen und anderen automatisierten Bots aufgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und stellen das Canvas normal dar, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts. Dies könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, er solle einen anderen Browser verwenden, der das Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Nützliche Fallback-Texte oder zusätzliche DOMs verbessern die Zugänglichkeit eines ansonsten nicht zugänglichen Elements.

### Erforderliches `</canvas>`-Tag

Aufgrund der Art und Weise, wie Fallbacks bereitgestellt werden, erfordert das {{HTMLElement("canvas")}}-Element **im Gegensatz** zum {{HTMLElement("img")}}-Element das abschließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die das Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentativ ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erzeugt eine Zeichenfläche fester Größe, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu bearbeiten. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Arten des Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zunächst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen abzurufen. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um einen [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie über seine `getContext()`-Methode auf den Zeichenkontext zugreifen.

## Überprüfung der Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können die Unterstützung auch programmgesteuert überprüfen, indem sie das Vorhandensein der `getContext()`-Methode testen. Unser obiger Code-Schnipsel wird so etwas wie:

```js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Eine Grundstruktur

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies wird durch das Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis am Dokument erreicht. Diese Funktion oder eine ähnliche könnte auch mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite zuvor geladen wurde.

So würde eine Vorlage in Aktion aussehen. Wie hier gezeigt, ist sie anfangs leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Um zu beginnen, schauen wir uns ein einfaches Beispiel an, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alpha-Transparenz aufweist. Wir werden später im Detail erkunden, wie das funktioniert.

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

Dieses Beispiel sieht so aus:

{{EmbedLiveSample("A_simple_example", "", "160")}}

{{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}
