---
title: Grundlegende Nutzung von Canvas
slug: Web/API/Canvas_API/Tutorial/Basic_usage
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{DefaultAPISidebar("Canvas API")}} {{PreviousNext("Web/API/Canvas_API/Tutorial", "Web/API/Canvas_API/Tutorial/Drawing_shapes")}}

Beginnen wir dieses Tutorial, indem wir uns das {{HTMLElement("canvas")}} {{Glossary("HTML", "HTML")}}-Element selbst ansehen. Am Ende dieser Seite werden Sie wissen, wie man einen 2D-Canvas-Kontext einrichtet und ein erstes Beispiel in Ihrem Browser gezeichnet hat.

## Das `<canvas>`-Element

```html
<canvas id="tutorial" width="150" height="150"></canvas>
```

Auf den ersten Blick sieht ein {{HTMLElement("canvas")}} einem {{HTMLElement("img")}}-Element ähnlich, mit dem einzigen klaren Unterschied, dass es nicht die `src`- und `alt`-Attribute hat. Tatsächlich hat das `<canvas>`-Element nur zwei Attribute, [`width`](/de/docs/Web/HTML/Reference/Elements/canvas#width) und [`height`](/de/docs/Web/HTML/Reference/Elements/canvas#height). Diese sind beide optional und können auch über {{Glossary("DOM", "DOM")}}-[Eigenschaften](/de/docs/Web/API/HTMLCanvasElement) gesetzt werden. Wenn keine `width`- und `height`-Attribute angegeben sind, wird der Canvas anfänglich **300 Pixel** breit und **150 Pixel** hoch sein. Das Element kann beliebig mittels {{Glossary("CSS", "CSS")}} skaliert werden, aber während des Renderings wird das Bild auf seine Layout-Größe skaliert: Wenn die CSS-Größe das Verhältnis des ursprünglichen Canvas nicht respektiert, erscheint es verzerrt.

> [!NOTE]
> Wenn Ihre Renderings verzerrt erscheinen, versuchen Sie, Ihre `width`- und `height`-Attribute explizit in den `<canvas>`-Attributen anzugeben und nicht durch CSS.

Das [`id`](/de/docs/Web/HTML/Reference/Global_attributes/id)-Attribut ist nicht spezifisch für das `<canvas>`-Element, sondern eines der [globalen HTML-Attribute](/de/docs/Web/HTML/Reference/Global_attributes), die auf jedes HTML-Element angewendet werden können (wie z.B. [`class`](/de/docs/Web/HTML/Reference/Global_attributes/class)). Es ist immer eine gute Idee, eine `id` zur Verfügung zu stellen, da dies das Identifizieren in einem Skript erheblich erleichtert.

Das `<canvas>`-Element kann wie ein normales Bild gestylt werden ({{cssxref("margin")}}, {{cssxref("border")}}, {{cssxref("background")}}…). Diese Regeln beeinflussen jedoch nicht das tatsächliche Zeichnen auf dem Canvas. Wir werden sehen, wie dies in einem [eigenen Kapitel](/de/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors) dieses Tutorials gemacht wird. Wenn keine Styling-Regeln auf das Canvas angewendet werden, wird es anfangs vollständig transparent sein.

### Barrierefreier Inhalt

Das `<canvas>`-Element muss, wie die {{HTMLElement("img")}}, {{HTMLElement("video")}}, {{HTMLElement("audio")}} und {{HTMLElement("picture")}}-Elemente, barrierefrei gemacht werden, indem ein Fallback-Text bereitgestellt wird, der angezeigt wird, wenn das Medium nicht geladen wird oder der Benutzer es nicht wie vorgesehen erleben kann. Sie sollten immer Fallback-Inhalte, Untertitel und Alternativtexte entsprechend dem Medientyp bereitstellen.

Das Bereitstellen von Fallback-Inhalten ist sehr einfach: Fügen Sie einfach den alternativen Inhalt innerhalb des `<canvas>`-Elements ein, damit Screenreader, Spider und andere automatisierte Bots darauf zugreifen können. Browser ignorieren standardmäßig den Inhalt innerhalb des Containers, indem sie das Canvas normal rendern, es sei denn, `<canvas>` wird nicht unterstützt.

Zum Beispiel können wir eine Textbeschreibung des Canvas-Inhalts bereitstellen oder ein statisches Bild des dynamisch gerenderten Inhalts bereitstellen. Das könnte so aussehen:

```html
<canvas id="stockGraph" width="150" height="150">
  current stock price: $3.15 + 0.15
</canvas>

<canvas id="clock" width="150" height="150">
  <img src="images/clock.png" width="150" height="150" alt="A clock" />
</canvas>
```

Den Benutzer aufzufordern, einen anderen Browser zu verwenden, der Canvas unterstützt, hilft Benutzern nicht, die das Canvas überhaupt nicht lesen können. Das Bereitstellen eines nützlichen Fallback-Texts oder eines untergeordneten DOM fügt einem ansonsten nicht barrierefreien Element Barrierefreiheit hinzu.

### Erforderliches `</canvas>`-Tag

Aufgrund der Art und Weise, wie Fallback bereitgestellt wird, im Gegensatz zu dem {{HTMLElement("img")}}-Element, erfordert das {{HTMLElement("canvas")}}-Element das schließende Tag (`</canvas>`). Wenn dieses Tag nicht vorhanden ist, würde der Rest des Dokuments als Fallback-Inhalt betrachtet und nicht angezeigt werden.

Wenn kein Fallback-Inhalt benötigt wird, ist ein einfaches `<canvas id="foo" role="presentation" …></canvas>` vollständig kompatibel mit allen Browsern, die Canvas überhaupt unterstützen. Dies sollte nur verwendet werden, wenn das Canvas rein präsentationell ist.

## Der Rendering-Kontext

Das {{HTMLElement("canvas")}}-Element erstellt eine Zeichenfläche fester Größe, die einen oder mehrere **Rendering-Kontexte** bereitstellt, die verwendet werden, um den angezeigten Inhalt zu erstellen und zu manipulieren. In diesem Tutorial konzentrieren wir uns auf den 2D-Rendering-Kontext. Andere Kontexte können verschiedene Arten von Renderings bereitstellen; zum Beispiel verwendet [WebGL](/de/docs/Web/API/WebGL_API) einen 3D-Kontext basierend auf [OpenGL ES](https://www.khronos.org/opengles/).

Das Canvas ist anfangs leer. Um etwas anzuzeigen, muss ein Skript zuerst auf den Rendering-Kontext zugreifen und darauf zeichnen. Das {{HTMLElement("canvas")}}-Element verfügt über eine Methode namens [`getContext()`](/de/docs/Web/API/HTMLCanvasElement/getContext), die verwendet wird, um den Rendering-Kontext und seine Zeichenfunktionen zu erhalten. `getContext()` nimmt einen Parameter, den Typ des Kontexts. Für 2D-Grafiken, wie sie in diesem Tutorial behandelt werden, spezifizieren Sie `"2d"`, um ein [`CanvasRenderingContext2D`](/de/docs/Web/API/CanvasRenderingContext2D) zu erhalten.

```js
const canvas = document.getElementById("tutorial");
const ctx = canvas.getContext("2d");
```

Die erste Zeile im Skript ruft den Knoten im DOM ab, der das {{HTMLElement("canvas")}}-Element darstellt, indem die Methode [`document.getElementById()`](/de/docs/Web/API/Document/getElementById) aufgerufen wird. Sobald Sie den Elementknoten haben, können Sie den Zeichenkontext über seine `getContext()`-Methode aufrufen.

## Überprüfung der Unterstützung

Der Fallback-Inhalt wird in Browsern angezeigt, die {{HTMLElement("canvas")}} nicht unterstützen. Skripte können die Unterstützung auch programmatisch prüfen, indem sie das Vorhandensein der `getContext()`-Methode überprüfen. Unser obiges Code-Snippet wird so etwas wie dies:

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

Das Skript enthält eine Funktion namens `draw()`, die ausgeführt wird, sobald die Seite vollständig geladen ist; dies geschieht, indem das [`load`](/de/docs/Web/API/Window/load_event)-Ereignis auf das Dokument gehört wird. Diese Funktion, oder eine ähnliche Funktion, könnte auch unter Verwendung von [`setTimeout()`](/de/docs/Web/API/Window/setTimeout), [`setInterval()`](/de/docs/Web/API/Window/setInterval) oder jedem anderen Ereignishandler aufgerufen werden, solange die Seite zuvor geladen wurde.

An diesem Punkt sollte dieses Dokument leer gerendert werden.

## Ein einfaches Beispiel

Zu Beginn werfen wir einen Blick auf ein Beispiel, das zwei sich überschneidende Rechtecke zeichnet, von denen eines Alphatransparenz hat. Wir werden genauer untersuchen, wie das funktioniert, in späteren Beispielen. Aktualisieren Sie den Inhalt Ihres `script`-Elements zu folgendem:

```html hidden
<canvas id="tutorial" width="150" height="150"></canvas>
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
