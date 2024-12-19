---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{DefaultAPISidebar("CSS Painting API")}}
Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) wurde entwickelt, um Entwicklern zu ermöglichen, programmatisch Bilder zu definieren, die überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z. B. CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um programmatisch ein Bild zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie das Worklet
3. Integrieren Sie die `{{cssxref("image/paint","paint()")}}` CSS-Funktion

Um diese Schritte zu erläutern, beginnen wir mit der Erstellung eines halb-hervorgehobenen Hintergrunds, wie bei diesem Header:

![Text mit der Aufschrift 'My Cool Header' mit einem soliden gelben Hintergrundbildblock auf dem unteren linken Drittel des Headers](mycoolheader.png)

> [!NOTE]
> Der vollständige Quellcode für alle Beispiele in diesem Artikel ist unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting) zu finden, und die Beispiele sind live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/) verfügbar.

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben – dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden werden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die alle magischen Funktionen definiert, die Kontextoptionen und was auf die zweidimensionale Leinwand gemalt werden soll, die unser Bild sein wird.

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

In diesem Klassenbeispiel haben wir eine einzige Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die Funktion `paint()` verwendet, um auf unsere Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden uns später noch ein paar weitere ansehen), der oft durch den Variablennamen `ctx` bezieht. Der 2D-Rendering-Kontext ist ein Unterset der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die Version, die Houdini zur Verfügung steht (genannt `PaintRenderingContext2D`), ist ein weiterer Unterset, der die meisten der in der vollständigen Canvas-API verfügbaren Funktionen enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs.

Wir definieren die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge Ursprung der x-Achse, Ursprung der y-Achse, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, das 0 Einheiten vom linken Rand und 15 Einheiten vom oberen Rand des Inhaltsfeldes positioniert ist.

Wir können die CSS-Eigenschaften [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) verwenden, um dieses Hintergrundbild in der Größe zu ändern oder zu verschieben, aber dies ist die Standardgröße und Platzierung des gelben Kästchens, das wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen schauen Sie in die [Canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas). Wir fügen später in diesem Tutorial noch ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einfügen, wobei sichergestellt wird, dass der CSS-Selektor einem DOM-Knoten in unserem HTML entspricht.

Die Einrichtung und Gestaltung unseres Paint-Worklets fand im oben gezeigten externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) von unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()`-Methode des Paint-Worklets in einem `<script>` innerhalb des Haupt-HTMLs oder in einer externen JavaScript-Datei geschehen, die vom Dokument verlinkt ist.

## Verwendung des Paint-Worklets

In unserem Beispiel ist das Paint-Worklet zusammen mit der Haupt-Skriptdatei gespeichert. Um es zu verwenden, registrieren wir es zunächst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()` wie bei jedem anderen `<image>`-Typ, wobei Sie denselben String-Identifier verwenden, den wir in der `registerPaint()`-Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Alles zusammenführen

Wir können dann die fancy-Klasse jedem Element auf der Seite hinzufügen, um ein gelbes Kästchen als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel sieht in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), wie das Bild oben aus.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes anzupassen.

## PaintSize

Im obigen Beispiel haben wir ein 20x200 Einheit großes Kästchen erstellt, das 15 Einheiten vom oberen Rand des Elements gemalt wird, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht das gelbe Kästchen wie eine riesige Unterstreichung aus. Wenn der Text riesig ist, könnte das Kästchen wie ein Balken über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre – wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50 % der Höhe und 60 % der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%`; auf das Blockelement gesetzt, wodurch das Element schmaler wird und dadurch das Hintergrundbild schmaler wird.

### Das Paint-Worklet

Der Code dafür sieht so aus:

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

Dieses Codebeispiel weist zwei Unterschiede zu unserem ersten Beispiel auf:

1. Wir haben ein zweites Argument eingefügt, das die Paint-Größe ist.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks so geändert, dass sie relativ zur Größe des Element-Boxs sind, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter an die `paint()`-Funktion übergeben, um Zugriff auf die Breite und die Höhe des Elements zu erhalten, über die `.width` und `.height`-Eigenschaften.

Unser Header hat jetzt ein Highlight, das sich entsprechend seiner Größe ändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes anzupassen.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollen die Elemente im folgenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch auf CSS-benutzerdefinierte Eigenschaften und reguläre CSS-Eigenschaften zugreifen.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichnungskontext, die Paint-Größe und die Eigenschaften. Um auf Eigenschaften zugreifen zu können, fügen wir die statische Methode `inputProperties()` hinzu, die einen Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und ein {{jsxref("Array", "Array")}} von Eigenschaftsname zurückgibt. Wir werden einen Blick auf `inputArguments` im letzten Abschnitt werfen.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, die sich zwischen drei verschiedenen Farben und drei Breiten dreht.

![Die Breite und die Farbe des Hintergrundbilds ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

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

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf einem Element gesetzt sind, auf das `boxbg` angewendet wird, und sie dann innerhalb unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

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

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die Werte der benutzerdefinierten Eigenschaften in DevTools ändern, um die Farben und die Breite des Hintergrundbildes anzupassen.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele erscheinen vielleicht nicht sehr aufregend, da Sie sie auf verschiedene Weise mit bestehenden CSS-Eigenschaften nachbilden könnten, z. B. durch Positionierung einiger dekorativer [generierter Inhalte](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before`, oder durch Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsstark macht, ist, dass Sie komplexe Bilder erstellen können, die automatisch Größenänderungen übernehmen, indem Sie Variablen übergeben.

Sehen wir uns ein komplexeres Malbeispiel an.

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

Wir können dann ein wenig HTML erstellen, das dieses Bild als Hintergründe akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables) `--highColor`

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

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Versuchen Sie vielleicht [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) bei den Headers?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede Farbe, die Sie erstellen möchten, einen anderen, ziemlich komplexen Linearen Farbverlauf deklarieren. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall unterschiedliche Farben übergeben werden.

## Übergabe von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert das Aktivieren der "Experimentelle Webplattform-Features"-Flag in Chrome oder Edge, indem Sie `about://flags` besuchen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte Eigenschaften und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente übergeben, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund umranden anstatt ihn auszufüllen – lassen Sie uns ein zusätzliches Argument für diesen Fall übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Nun können wir in der `registerPaint()`-Klasse die Methode `inputArguments()` verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()`-Funktion hinzugefügt haben.

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

Angenommen, wir fügen ein zweites Argument hinzu, wie viele Pixel die Umrandung breit sein soll:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste der Argumentwerte abrufen, können wir speziell eine `<length>` Einheit anfordern.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell das `<length>` Attribut angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) aufrufen, indem wir das Werttyp-Schlüsselwort verwenden, wenn wir es in der `registerPaint()`-Funktion abrufen.

Jetzt können wir auf die Eigenschaften `type` und `value` zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Numerischen Typ direkt aus der Box abrufen können. (Zugegeben, `ctx.lineWidth` nimmt einen float als Wert entgegen und nicht einen Längeneinheiten-Wert, aber der Beispiels halber...)

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

Es ist erwähnenswert, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier festgelegten Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und in der Tat alle Eigenschaften der Stil-Landkarte) sind global – sie können auch andernorts in unserem CSS (und JS) verwendet werden.

Sie können zum Beispiel einen `--mainColor` haben, der nützlich sein wird, um die Farbe innerhalb einer `paint()`-Funktion zu setzen, aber auch an anderer Stelle in Ihrem CSS verwendet werden kann. Wenn Sie ihn speziell für Paint ändern möchten, könnte es sich als schwierig erweisen. Hier kommen benutzerdefinierte Argumente ins Spiel. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente festgelegt sind, um zu steuern, was Sie tatsächlich zeichnen, während Eigenschaften festgelegt sind, um das Styling zu kontrollieren.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlicher Strichstärke, und das grüne wird gefüllt.](hollowfilled.png)

Jetzt beginnen wir wirklich, die Vorteile dieser API zu erkennen: Wenn wir eine Vielzahl von Zeichenparametern durch unser CSS sowohl über benutzerdefinierte Eigenschaften als auch über zusätzliche `paint()`-Funktionsargumente steuern können, können wir wirklich wiederverwendbare und hochgradig kontrollierbare Stylingfunktionen erstellen.

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

Wir können verschiedene Farben, Strichstärken festlegen und wählen, ob das Hintergrundbild ausgefüllt oder hohl sein soll:

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
