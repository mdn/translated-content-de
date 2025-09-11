---
title: Grundlegende Nutzung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie man einen 2D-Kontext für das Canvas einrichtet und ein erstes Beispiel in Ihrem Browser gezeichnet hat.

## Das `<canvas>`-Element

```html
<canvas id="canvas" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}}-Element aus wie das {{HTMLElement("img")}}-Element, wobei der einzige offensichtliche Unterschied darin besteht, dass es keine `src`- und `alt`-Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch über {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) festgelegt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, ist das Canvas zunächst **300 Pixel** breit und **150 Pixel** hoch. Das Element kann willkürlich durch {{Glossary("CSS", "CSS")}} skaliert werden, aber während des Renderings wird das Bild an seine Layout-Größe angepasst: Wenn die CSS-Größenanpassung das Verhältnis des ursprünglichen Canvas nicht respektiert, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Renderings verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht CSS zu verwenden.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie zum Beispiel [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` bereitzustellen, da dies das Identifizieren in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie jedes normale Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}} …). Diese Regeln beeinflussen jedoch nicht das tatsächliche Zeichnen auf dem Canvas. Wie dies geschieht, werden wir in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials sehen. Wenn keine Stilregeln auf das Canvas angewendet werden, ist es zunächst vollständig transparent.

### Zugänglicher Inhalt

Das `<canvas>`-Element muss wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elemente durch Bereitstellung von Fallback-Text zugänglich gemacht werden, der angezeigt wird, wenn die Medien nicht geladen werden oder der Benutzer sie nicht wie beabsichtigt erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und alternativen Text bereitstellen, die für den Medientyp angemessen sind.

Die Bereitstellung von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit er von Bildschirmlesegeräten, Spidern und anderen automatisierten Bots abgerufen werden kann. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers und rendern das Canvas normal, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel könnten wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts. Dies könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Den Benutzer aufzufordern, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft nicht Benutzern, die das Canvas überhaupt nicht lesen können. Nützlichen Fallback-Text oder ein alternatives DOM zur Verfügung zu stellen, fügt einem ansonsten nicht zugänglichen Element Zugänglichkeit hinzu.

### Erforderliches `</canvas>`-Tag

Als Konsequenz der Art und Weise, wie Fallback bereitgestellt wird, benötigt das {{HTMLElement("canvas")}}-Element **im Gegensatz** zum {{HTMLElement("img")}}-Element das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentativ ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine festgelegte Zeichenfläche, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können unterschiedliche Arten des Renderings bieten; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist zunächst leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen abzurufen. `getContext()` nimmt einen Parameter, den Typ des Kontextes. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, geben Sie `"2d"` an, um ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie über die Methode `getContext()` auf den Zeichenkontext zugreifen.

## Überprüfung auf Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können auch programmatisch auf Unterstützung prüfen, indem sie auf das Vorhandensein der Methode `getContext()` testen. Unser obiger Code-Schnipsel wird zu etwas wie diesem:

```js
const canvas = document.getElementById("canvas");

if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  // drawing code here
} else {
  // canvas-unsupported code here
}
```

## Ein Skeleton-Template

Hier ist ein minimalistisches Template, das wir als Ausgangspunkt für spätere Beispiele verwenden werden.

> [!NOTE]
> Es ist keine gute Praxis, ein Skript in HTML einzubetten. Wir tun dies hier, um das Beispiel prägnant zu halten.

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
      draw();
    </script>
  </body>
</html>
```

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite fertig geladen ist; dies wird erreicht, indem das Skript nach dem Hauptinhalt des Bodys platziert wird. Diese Funktion oder eine ähnliche kann auch mit [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder dem [`load`](/de/docs/Web/API/Window/load_event) Event-Handler aufgerufen werden, solange die Seite zuerst geladen wurde.

An diesem Punkt sollte dieses Dokument leer gerendert werden.

## Ein einfaches Beispiel

Zu Beginn werfen wir einen Blick auf ein Beispiel, das zwei sich überschneidende Rechtecke zeichnet, von denen eines eine Alphatransparenz aufweist. Wir werden in späteren Beispielen genauer erkunden, wie dies funktioniert. Aktualisieren Sie den Inhalt Ihres `script`-Elements auf Folgendes:

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
