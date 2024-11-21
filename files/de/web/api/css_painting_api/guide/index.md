---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 93b34fcdb9cf91ff44f5dfe7f4dcd13e961962da
---

{{DefaultAPISidebar("CSS Painting API")}} Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist dazu konzipiert, Entwicklern zu ermöglichen, programmatisch Bilder zu definieren, die dann überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um ein bild, das von einem CSS-Stylesheet verwendet wird, programmatisch zu erstellen, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie das Worklet
3. Integrieren Sie die `{{cssxref("image/paint","paint()")}}` CSS-Funktion

Um diese Schritte näher zu erläutern, beginnen wir mit der Erstellung eines halb hervorgehobenen Hintergrunds, wie in diesem Header:

![Text mit der Aufschrift "My Cool Header" mit einem soliden gelben Hintergrundbildblock am unteren linken Drittel des Headers](mycoolheader.png)

> [!NOTE]
> Der komplette Quellcode für alle Beispiele in diesem Artikel ist unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting) zu finden, und die Beispiele laufen live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unserem [CSS Paint Worklet](/de/docs/Web/API/Worklet) einen Namen zu geben. Es nimmt zwei Parameter an. Der erste ist der Name, den wir dem Worklet geben — dieser Name wird in unserem CSS als Parameter der Funktion `paint()` verwendet, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die die Magie vollbringt, indem sie die Kontextoptionen und das zu zeichnende Bild auf der zweidimensionalen Leinwand definiert.

```js
registerPaint(
  "headerHighlight",
  class {
    /*
       define if alpha transparency is allowed alpha
       is set to true by default. If set to false, all
       colors used on the canvas will be fully opaque
    */
    static get contextOptions() {
      return { alpha: true };
    }

    /*
        ctx is the 2D drawing context
        a subset of the HTML Canvas API.
    */
    paint(ctx) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, 15, 200, 20); /* order: x, y, w, h */
    }
  },
);
```

In diesem Klassenbeispiel haben wir eine einzelne Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein Objekt zurückgegeben, das besagt, dass Alpha-Transparenz erlaubt ist.

Wir haben dann die `paint()`-Funktion verwendet, um auf unserer Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden später mehr dazu sehen), der oft durch den Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Unterbereich der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die für Houdini verfügbare Version (genannt `PaintRenderingContext2D`) ist ein weiterer Unterbereich, der die meisten Funktionen der vollständigen Canvas-API enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText`, und `CanvasTextDrawingStyles`-APIs.

Wir definieren die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein gelber Farbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achsen-Ursprung, y-Achsen-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten vom linken und 15 Einheiten vom oberen Rand des Inhaltsbereichs positioniert.

Wir können die CSS-Eigenschaften [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) verwenden, um dieses Hintergrundbild neu zu dimensionieren oder zu positionieren, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen schauen Sie sich die [Canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas) an. Etwas später in diesem Tutorial fügen wir noch ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einfügen, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Die Einrichtung und Gestaltung unseres Paint-Worklets fand im oben gezeigten externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) von unserem Hauptskript aus registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der Methode `addModule()` des Paint-Worklets in einem `<script>` im Haupt-HTML oder in einer externen JavaScript-Datei, die vom Dokument verlinkt wird, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel wird das Paint-Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zunächst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzierung des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()` wie jedes andere `<image>`-Element und nutzen Sie den gleichen Zeichenfolgenbezeichner, den wir in der `registerPaint()`-Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Zusammenfügen

Dann können wir die fancy-Klasse zu jedem beliebigen Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), wie im oberen Bild dargestellt, angezeigt.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbilds zu verändern.

## PaintSize

Im obigen Beispiel haben wir ein 20x200 Einheiten großes Rechteck erstellt, 15 Einheiten vom oberen Rand des Elements gemalt, das unabhängig von der Größe des Elements gleich bleibt. Wenn der Text klein ist, sieht der gelbe Kasten aus wie eine große Unterstreichung. Wenn der Text groß ist, sieht der Kasten vielleicht aus wie ein Balken über den ersten drei Buchstaben. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Box-Modells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%`; auf das Block-Level-Element gesetzt, wodurch das Element und damit das Hintergrundbild schmaler wird.

### Das Paint-Worklet

Der Code, um dies zu erreichen, sieht so aus:

```js
registerPaint(
  "headerHighlight",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
    ctx is the 2D drawing context
    size is the paintSize, the dimensions (height and width) of the box being painted
  */
    paint(ctx, size) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
  },
);
```

Dieses Codebeispiel unterscheidet sich von unserem ersten Beispiel in zwei Punkten:

1. Wir haben ein zweites Argument hinzugefügt, welches die Paintgröße darstellt.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks geändert, sodass diese relativ zur Größe des Elementenrahmens anstelle absoluter Werte gesetzt sind.

Wir können den zweiten Parameter in die `paint()`-Funktion übergeben, um Zugriff auf die Breite und die Höhe des Elements über die `.width`- und `.height`-Eigenschaften zu erhalten.

Unser Header hat nun eine Hervorhebung, die sich abhängig von der Größe verändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbilds zu verändern.

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

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch Zugriff auf CSS-Benutzerdefinierte Eigenschaften und reguläre CSS-Eigenschaften haben.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichenkontext, die Paintgröße und die Eigenschaften. Um auf Eigenschaften zugreifen zu können, fügen wir die statische Methode `inputProperties()` hinzu, die Live-Zugriff auf CSS-Eigenschaften einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables) bietet und eine {{jsxref("Array", "array")}} von Eigenschaftsnamen zurückgibt. Wir werden `inputArguments` im letzten Abschnitt betrachten.

Lassen Sie uns eine Liste von Elementen mit einem Hintergrundbild erstellen, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und Farbe des Hintergrundbilds ändert sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint-Worklet

In unserem Worklet können wir diese benutzerdefinierten Eigenschaften referenzieren.

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     use this function to retrieve any custom properties (or regular properties, such as 'height')
     defined for the element, return them in the specified array
  */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
       ctx -> drawing context
       size -> paintSize: width and height
       props -> properties: get() method
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

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf ein Element angewendet wurden, das `boxbg` hat, und dann diese innerhalb unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

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

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und Breite des Hintergrundbilds zu verändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele mögen nicht sehr spannend erscheinen, da Sie sie auf ein paar verschiedene Arten mit bestehenden CSS-Eigenschaften nachbauen könnten, z.B. durch das Positionieren von dekorativen [generierten Inhalten](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before` oder das Hinzufügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, indem Sie Variablen übergeben, die sich automatisch in der Größe ändern.

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

Wir können dann ein kleines HTML erstellen, das dieses Bild als Hintergrund akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die benutzerdefinierte Eigenschaft `--highColor` [custom property](/de/docs/Web/CSS/CSS_cascading_variables)

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

Und wir registrieren unser Worklet

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Vielleicht versuchen Sie es mit [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) auf den Headers?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Das ist machbar, aber Sie müssten einen anderen, ziemlich komplexen linearen Verlauf für jede unterschiedliche Farbe deklarieren, die Sie erstellen möchten. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall unterschiedliche Farben übergeben werden.

## Übergeben von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass die Experimentellen Webplatform-Funktionen in Chrome oder Edge durch Besuchen von `about://flags` aktiviert werden.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte Eigenschaften und reguläre Eigenschaften, wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Nehmen wir an, wir möchten manchmal unseren Hintergrund umranden anstatt ihn zu füllen — lassen Sie uns ein zusätzliches Argument für diesen Anlass übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()`-Funktion hinzugefügt haben.

```js
static get inputArguments() { return ['*']; }
```

Wir haben dann Zugriff auf dieses Argument.

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

Angenommen, wir fügen ein zweites Argument hinzu, das angibt, wie viele Pixel breit der Strich sein soll:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten abrufen, können wir speziell nach einer `<length>`-Einheit fragen.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell das `<length>`-Argument angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) verwenden, indem wir das Wertetyp-Schlüsselwort verwenden, wenn wir es in der Funktion `registerPaint()` abrufen.

Jetzt können wir auf die Eigenschaftstypen und -werte zugreifen, was bedeutet, dass wir die Anzahl der Pixel rechts aus der Box bekommen können. (Zugegebenermaßen nimmt `ctx.lineWidth` einen Gleitkommawert anstelle eines Wertes mit Längeneinheiten an, aber um des Beispiels willen…)

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

Es ist bemerkenswert, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier festgelegten Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und in der Tat alle Eigenschaften auf der Stilkarte) sind global — sie können anderswo in Ihrem CSS (und JS) verwendet werden.

Sie könnten zum Beispiel eine `--mainColor` haben, die für das Festlegen der Farbe innerhalb einer `paint()`-Funktion nützlich ist, aber auch zum Festlegen von Farben anderswo in Ihrem CSS verwendet werden könnte. Wenn Sie es speziell für Paint ändern möchten, könnte es schwierig sein. Hier kommt die Funktion für benutzerdefinierte Argumente ins Spiel. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente für die Steuerung dessen, was Sie tatsächlich zeichnen, festgelegt sind, während Eigenschaften für die Steuerung von Styling festgelegt sind.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne ausgefüllt.](hollowfilled.png)

Jetzt können wir wirklich anfangen, die Vorteile dieser API zu sehen, wenn wir eine Vielzahl von Zeichenparametern aus unserem CSS über sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()`-Funktionsargumente steuern können, dann können wir wirklich wiederverwendbare und hochgradig kontrollierbare Stilfunktionen erstellen.

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

Wir können verschiedene Farben, Strichbreiten festlegen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

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
