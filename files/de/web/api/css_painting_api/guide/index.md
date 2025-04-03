---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist dazu gedacht, Entwicklern die Möglichkeit zu geben, programmatisch definierte Bilder zu erstellen, die überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}} usw.

Um ein Bild programmatisch zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint).
2. Registrieren Sie das Worklet.
3. Fügen Sie die {{cssxref('image/paint', 'paint()')}} CSS-Funktion hinzu.

Um diese Schritte zu veranschaulichen, beginnen wir mit der Erstellung eines halb-hervorgehobenen Hintergrunds, wie auf diesem Header:

![Text mit der Überschrift 'My Cool Header' mit einem soliden gelben Hintergrundblock unten links auf zwei Dritteln der Überschrift](mycoolheader.png)

> [!NOTE]
> Siehe [CSS Painting API Beispiel](https://mdn.github.io/dom-examples/css-painting/) für ein vollständiges funktionierendes Demo zusammen mit dem [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()` Funktion verwenden werden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die die Magie ausführt, indem sie die Kontextoptionen definiert und festlegt, was auf die zweidimensionale Leinwand gezeichnet werden soll, die unser Bild darstellen wird.

```js
registerPaint(
  "headerHighlight",
  class {
    /*
     * define if alpha transparency is allowed alpha
     * is set to true by default. If set to false, all
     * colors used on the canvas will be fully opaque
     */
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     * ctx is the 2D drawing context
     * a subset of the HTML Canvas API.
     */
    paint(ctx) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, 15, 200, 20); /* order: x, y, w, h */
    }
  },
);
```

In diesem Klassenbeispiel haben wir eine einzelne Kontextoption mit der `contextOptions()` Funktion definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die `paint()` Funktion verwendet, um auf unsere Leinwand zu zeichnen.

Eine `paint()` Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden später darauf zurückkommen), der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D Rendering Context ist ein Teil der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die Houdini-Version (genannt `PaintRenderingContext2D`) ist ein weiterer Teil, der die meisten der in der vollständigen Canvas API verfügbaren Features mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs enthält.

Wir definieren den [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achse-Ursprung, y-Achse-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, positioniert 0 Einheiten vom linken Rand und 15 Einheiten vom oberen Rand der Inhaltsbox.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu skalieren oder neu zu positionieren, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für mehr Optionen schauen Sie sich die {{HTMLElement("canvas")}} Dokumentation an. Wir fügen später in diesem Tutorial ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet nutzen zu können, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und es in unser CSS einfügen, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Der Aufbau und das Design unseres Paint-Worklets fanden im oben gezeigten externen Skript statt. Wir müssen dieses [`worklet`](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()` Methode des Paint-Worklets in einem `<script>` innerhalb des Haupt-HTML oder in einer externen JavaScript-Datei, die mit dem Dokument verknüpft ist, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel ist das Paint-Worklet neben der Hauptskriptdatei gespeichert. Um es zu nutzen, registrieren wir es zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Das Paint-Worklet in CSS referenzieren

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS `paint()` Funktion wie bei jedem anderen `<image>`-Typ, wobei Sie denselben String-Identifier verwenden, den wir in der `registerPaint()` Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Zusammensetzen

Wir können dann die schicke Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird in den [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), so aussehen wie das Bild oben.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu ändern.

## PaintSize

Im obigen Beispiel haben wir einen 20x200 Einheiten großen Kasten erstellt, der 15 Einheiten vom oberen Rand des Elements gemalt ist, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht der gelbe Kasten wie ein großer Unterstrich aus. Wenn der Text groß ist, könnte der Kasten wie ein Balken über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Im 3. Beispiel hat das Blockelement die Einstellung `width: 50%`, wodurch das Element schmaler wird und somit das Hintergrundbild schmaler ist.

### Das Paint-Worklet

Der Code dafür sieht folgendermaßen aus:

```js
registerPaint(
  "headerHighlight",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     * ctx is the 2D drawing context
     * size is the paintSize, the dimensions (height and width) of the box being painted
     */
    paint(ctx, size) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
  },
);
```

Dieses Codebeispiel hat zwei Unterschiede zu unserem ersten Beispiel:

1. Wir haben ein zweites Argument hinzugefügt, das die Paint-Größe ist.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks geändert, um relativ zur Größe des Elementboxmodells zu sein, anstatt absolute Werte zu nutzen.

Wir können den zweiten Parameter in die `paint()`-Funktion übergeben, um Zugang zu der Breite und der Höhe des Elements über die Eigenschaften `.width` und `.height` zu erhalten.

Unser Header hat jetzt ein Highlight, das sich je nach Größe ändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu ändern.

```css
.fancy {
  background-image: paint(headerHighlight);
}
.half {
  width: 50%;
}
```

#### JavaScript

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

#### Ergebnis

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im folgenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch Zugriff auf benutzerdefinierte CSS-Eigenschaften und reguläre CSS-Eigenschaften haben.

```js
registerPaint(
  "cssPaintFunctionName",
  class {
    static get inputProperties() {
      return ["PropertyName1", "--customPropertyName2"];
    }
    static get inputArguments() {
      return ["<color>"];
    }
    static get contextOptions() {
      return { alpha: true };
    }

    paint(drawingContext, elementSize, styleMap) {
      // Paint code goes here.
    }
  },
);
```

Die drei Parameter der `paint()` Funktion umfassen den Zeichnungskontext, die Paint-Größe und die Eigenschaften. Um Eigenschaftenzugriff zu ermöglichen, fügen wir die statische Methode `inputProperties()` ein, die Zugriff auf CSS-Eigenschaften, einschließlich regulärer und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), erhält und ein {{jsxref("Array", "Array", "", 1)}} von Eigenschaftsnamen zurückgibt. Wir werden [`inputArguments`](#parameter_übergeben) im letzten Abschnitt betrachten.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten rotiert.

![Die Breite und Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, werden wir zwei benutzerdefinierte CSS-Eigenschaften definieren, `--boxColor` und `--widthSubtractor`.

### Das Paint-Worklet

In unserem Worklet können wir auf diese benutzerdefinierten Eigenschaften verweisen.

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     * use this function to retrieve any custom properties (or regular properties, such as 'height')
     * defined for the element, return them in the specified array
     */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
       * ctx -> drawing context
       * size -> paintSize: width and height
       * props -> properties: get() method
       */
      ctx.fillStyle = props.get("--boxColor");
      ctx.fillRect(
        0,
        size.height / 3,
        size.width * 0.4 - props.get("--widthSubtractor"),
        size.height * 0.6,
      );
    }
  },
);
```

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften abzurufen, die auf einem Element gesetzt sind, auf das `boxbg` angewendet wird, und haben diese dann in unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften des Elements zurückgeben, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Paint-Worklets

#### HTML

```html
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item</li>
</ul>
```

#### CSS

In unserem CSS definieren wir die benutzerdefinierten Eigenschaften `--boxColor` und `--widthSubtractor`.

```css
li {
  background-image: paint(boxbg);
  --boxColor: hsl(55 90% 60% / 100%);
}

li:nth-of-type(3n) {
  --boxColor: hsl(155 90% 60% / 100%);
  --widthSubtractor: 20;
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(255 90% 60% / 100%);
  --widthSubtractor: 40;
}
```

#### JavaScript

In unserem `<script>` registrieren wir das Worklet:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Komplexität hinzufügen

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Weise mit bestehenden CSS-Eigenschaften nachstellen könnten, z.B. durch Positionieren von dekorativen [generierten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before`, oder durch Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, Variablen übergeben, die sich automatisch anpassen.

Schauen wir uns ein komplexeres Paint-Beispiel an.

### Das Paint-Worklet

```js
registerPaint(
  "headerHighlight",
  class {
    static get inputProperties() {
      return ["--highColor"];
    }
    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props) {
      /* set where to start the highlight & dimensions */
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const highlightHeight = size.height * 0.85;
      const color = props.get("--highColor");

      ctx.fillStyle = color;

      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + highlightHeight, highlightHeight);
      ctx.lineTo(x, highlightHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();

      /* create the dashes */
      for (let start = 0; start < 8; start += 2) {
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(
          blockWidth + start * 10 + 20 + highlightHeight,
          highlightHeight,
        );
        ctx.lineTo(
          blockWidth + start * 10 + 10 + highlightHeight,
          highlightHeight,
        );
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
      }
    } // paint
  },
);
```

### Verwendung des Paint-Worklets

Nun können wir ein wenig HTML erstellen, das dieses Bild als Hintergründe akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables) `--highColor`.

```css
.fancy {
  background-image: paint(headerHighlight);
}
h1 {
  --highColor: hsl(155 90% 60% / 70%);
}
h3 {
  --highColor: hsl(255 90% 60% / 50%);
}
h6 {
  --highColor: hsl(355 90% 60% / 30%);
}
```

Und wir registrieren unser Worklet.

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Vielleicht versuchen Sie, {{cssxref("scale")}} und {{cssxref("rotate")}} auf den Headern anzuwenden?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten einen anderen, ziemlich komplexen linearen Farbverlauf für jede Farbe deklarieren, die Sie erstellen möchten. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, mit unterschiedlichen Farben, die in diesem Fall übergeben werden.

## Parameter übergeben

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Experimental Web Platform features'-Flag in Chrome oder Edge aktiviert ist, indem Sie `about://flags` besuchen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()` Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund umranden, anstatt ihn auszufüllen — lassen Sie uns ein zusätzliches Argument für diesen Anlass übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()`-Funktion hinzugefügt haben.

```js
static get inputArguments() { return ['*']; }
```

Dann haben wir Zugriff auf dieses Argument.

```js
paint(ctx, size, props, args) {

  // use our custom arguments
  const hasStroke = args[0].toString();

  // if stroke arg is 'stroke', don't fill
  if (hasStroke === 'stroke') {
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = color;
  }
  // …
}
```

Wir können auch angeben, dass wir einen bestimmten Argumenttyp wünschen.

Angenommen, wir fügen ein zweites Argument hinzu, wie viele Pixel breit der Umriss sein soll:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste der Argumentwerte `get`, können wir speziell nach einer `<length>`-Einheit fragen.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell nach dem `<length>`-Attribut gefragt. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z.B. eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) durch das Verwenden des Werttypschlüsselwortes aufrufen, wenn wir es in der `registerPaint()` Funktion abrufen.

Jetzt können wir auf die Eigenschaften `type` und `value` zugreifen, was bedeutet, dass wir die Anzahl der Pixel und eine Zahl direkt aus der Box bekommen können. (Zugegebenermaßen nimmt `ctx.lineWidth` einen Float als Wert, anstelle eines Werts mit Längeneinheiten, aber der Vollständigkeit halber…)

```js
paint(ctx, size, props, args) {

  const strokeWidth = args[1];

  if (strokeWidth.unit === 'px') {
    ctx.lineWidth = strokeWidth.value;
  } else {
    ctx.lineWidth = 1.0;
  }

  // …
}
```

Es lohnt sich, den Unterschied zu beachten, zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier dargelegten Argumenten. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften auf der Style-Map) sind global — sie können woanders innerhalb unseres CSS (und JS) verwendet werden.

Sie könnten beispielsweise eine `--mainColor` haben, die nützlich sein wird, um die Farbe innerhalb einer `paint()`-Funktion festzulegen, aber auch zur Einstellung von Farben an anderer Stelle in Ihrem CSS verwendet werden kann. Wenn Sie es speziell für Paint ändern wollten, könnte sich das als schwierig erweisen. Hier kommt die benutzerdefinierte Argumentfunktion ins Spiel. Eine andere Sichtweise besteht darin, dass Argumente festgelegt werden, um zu steuern, was Sie tatsächlich zeichnen, während Eigenschaften festgelegt werden, um die Gestaltung zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, violett oder grün ist, mit unterschiedlichen Strichbreiten, wobei der grüne gefüllt ist.](hollowfilled.png)

Jetzt können wir wirklich beginnen, die Vorteile dieser API zu erkennen, wenn wir eine Vielzahl von Zeichenparametern von unserem CSS aus steuern können, sowohl durch benutzerdefinierte Eigenschaften als auch durch zusätzliche `paint()`-Funktionsargumente, dann können wir wirklich beginnen, wiederverwendbare und hochsteuerbare Styling-Funktionen aufzubauen.

### Das Paint-Worklet

```js
registerPaint(
  "hollowHighlights",
  class {
    static get inputProperties() {
      return ["--boxColor"];
    }
    // Input arguments that can be passed to the `paint` function
    static get inputArguments() {
      return ["*", "<length>"];
    }

    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props, args) {
      // ctx   -> drawing context
      // size  -> size of the box being painted
      // props -> list of custom properties available to the element
      // args  -> list of arguments set when calling the paint() function in the CSS

      // where to start the highlight & dimensions
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const blockHeight = size.height * 0.85;

      // the values passed in the paint() function in the CSS
      const color = props.get("--boxColor");
      const strokeType = args[0].toString();
      const strokeWidth = parseInt(args[1]);

      // set the stroke width
      ctx.lineWidth = strokeWidth ?? 1.0;
      // set the fill type
      if (strokeType === "stroke") {
        ctx.fillStyle = "transparent";
        ctx.strokeStyle = color;
      } else if (strokeType === "filled") {
        ctx.fillStyle = color;
        ctx.strokeStyle = color;
      } else {
        ctx.fillStyle = "none";
        ctx.strokeStyle = "none";
      }

      // block
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + blockHeight, blockHeight);
      ctx.lineTo(x, blockHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // dashes
      for (let i = 0; i < 4; i++) {
        let start = i * 2;
        ctx.beginPath();
        ctx.moveTo(blockWidth + start * 10 + 10, y);
        ctx.lineTo(blockWidth + start * 10 + 20, y);
        ctx.lineTo(blockWidth + start * 10 + 20 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10 + blockHeight, blockHeight);
        ctx.lineTo(blockWidth + start * 10 + 10, y);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
      }
    } // paint
  },
);
```

### Verwendung des Paint-Worklets

Wir können verschiedene Farben, Strichbreiten einstellen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

```css
li {
  --boxColor: hsl(155 90% 60% / 50%);
  background-image: paint(hollowHighlights, stroke, 5px);
}

li:nth-of-type(3n) {
  --boxColor: hsl(255 90% 60% / 50%);
  background-image: paint(hollowHighlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --boxColor: hsl(355 90% 60% / 50%);
  background-image: paint(hollowHighlights, stroke, 1px);
}
```

```html hidden
<ul>
  <li>item 1</li>
  <li>item 2</li>
  <li>item 3</li>
  <li>item 4</li>
  <li>item 5</li>
  <li>item 6</li>
  <li>item 7</li>
  <li>item 8</li>
  <li>item 9</li>
  <li>item 10</li>
  <li>item 11</li>
  <li>item 12</li>
  <li>item 13</li>
  <li>item 14</li>
  <li>item 15</li>
  <li>item 16</li>
  <li>item 17</li>
  <li>item</li>
</ul>
```

In unserem `<script>` registrieren wir das Worklet:

```js
CSS.paintWorklet.addModule("hollow.js");
```

{{EmbedGHLiveSample("dom-examples/css-painting/hollow-highlight", 400, 400)}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
