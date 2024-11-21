---
title: Grundlegende Verwendung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}}-Element selbst ansehen. Am Ende dieser Seite wissen Sie, wie man einen 2D-Kontext eines Canvas einrichtet und ein erstes Beispiel in Ihrem Browser zeichnet.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, mit dem einzigen Unterschied, dass es keine `src`- und `alt`-Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Element/canvas#width) und [`height`](/de/docs/Web/HTML/Element/canvas#height). Diese sind beide optional und können auch mithilfe von {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, ist das Canvas anfänglich **300 Pixel** breit und **150 Pixel** hoch. Das Element kann mittels {{Glossary("CSS", "CSS")}} beliebig skaliert werden, aber beim Rendern wird das Bild skaliert, um in seine Layoutgröße zu passen: Wenn die CSS-Skalierung das Verhältnis des ursprünglichen Canvas nicht respektiert, wird es verzerrt erscheinen.

> [!NOTE]
> Wenn Ihre Darstellungen verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht CSS dafür zu verwenden.

Das [`id`](/de/docs/Web/HTML/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie zum Beispiel [`class`](/de/docs/Web/HTML/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` anzugeben, da dies das Identifizieren in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht das eigentliche Zeichnen auf dem Canvas. Wie dies gemacht wird, werden wir in einem [speziellen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen. Wenn keine Styling-Regeln auf das Canvas angewendet werden, ist es anfänglich vollständig transparent.

### Barrierefreier Inhalt

Das `<canvas>`-Element muss ähnlich wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elemente barrierefrei gemacht werden, indem Fallback-Text bereitgestellt wird, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie beabsichtigt erleben kann. Sie sollten immer geeigneten Fallback-Inhalt, Untertitel und Alternativtext bereitstellen.

Fallback-Inhalte bereitzustellen ist sehr einfach: Setzen Sie einfach den alternativen Inhalt in das `<canvas>`-Element ein, damit er von Screenreadern, Suchmaschinen und anderen automatisierten Bots genutzt werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts oder ein statisches Bild des dynamisch gerenderten Inhalts bereitstellen. Das könnte folgendermaßen aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Dem Benutzer zu sagen, er solle einen anderen Browser verwenden, der Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Das Bereitstellen nützlicher Fallback-Texte oder ergänzender DOM-Inhalte erhöht die Zugänglichkeit eines ansonsten nicht barrierefreien Elements.

### Erforderliches `</canvas>`-Tag

Aufgrund der Art und Weise, wie Fallbacks bereitgestellt werden, **erfordert** das {{HTMLElement("canvas")}}-Element im Gegensatz zum {{HTMLElement("img")}}-Element das schließende Tag (`</canvas>`). Ist dieses Tag nicht vorhanden, wird der Rest des Dokuments als Fallback-Inhalt angesehen und nicht angezeigt.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` mit allen Browsern kompatibel, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentativ ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine zeichenfeste Oberfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können andere Arten von Rendering bieten; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist zunächst leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element hat eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Kontexttyp. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft mit der Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt. Sobald Sie den Elementknoten haben, können Sie mit seiner `getContext()`-Methode auf den Zeichnungskontext zugreifen.

## Überprüfung auf Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmatisch auf Unterstützung prüfen, indem sie testen, ob die Methode `getContext()` vorhanden ist. Unser obiger Code-Schnipsel wird dann etwa so aussehen:

```js
const canvas = document.getElementById("tutorial");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Ein Grundgerüst-Template

Hier ist ein minimalistisches Template, das wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript innerhalb von HTML einzubetten. Wir tun es hier, um das Beispiel knapp zu halten.

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies geschieht durch das Lauschen auf das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis im Dokument. Diese Funktion, oder eine ähnliche, könnte auch mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder einem anderen Ereignishandler aufgerufen werden, solange die Seite zuerst geladen wurde.

So würde ein Template in Aktion aussehen. Wie hier gezeigt, ist es anfänglich leer.

{{EmbedLiveSample("A_skeleton_template", "", "160")}}

## Ein einfaches Beispiel

Zu Beginn werfen wir einen Blick auf ein Beispiel, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alpha-Transparenz aufweist. Wir werden in späteren Beispielen im Detail erkunden, wie dies funktioniert.

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
