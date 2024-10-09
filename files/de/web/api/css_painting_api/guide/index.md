---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: f3c4fc42e8817d0b8f703cf83957c33cd5342019
---

{{DefaultAPISidebar("CSS Painting API")}}
Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist so konzipiert, dass Entwickler programmatisch Bilder definieren können, die dann überall verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, z. B. CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um ein programmatisch erstelltes Bild in einem CSS-Stylesheet zu verwenden, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint).
2. Registrieren Sie das Worklet.
3. Beziehen Sie die `{{cssxref("image/paint","paint()")}}` CSS-Funktion ein.

Um diese Schritte zu erläutern, beginnen wir damit, einen halb hervorgehobenen Hintergrund zu erstellen, wie auf diesem Header:

![Text, der 'My Cool Header' mit einem soliden gelben Hintergrundbildblock am unteren linken Drittel des Headers liest](mycoolheader.png)

> [!NOTE]
> Der komplette Quellcode für alle Beispiele in diesem Artikel ist zu finden unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting), und die Beispiele laufen live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden, wenn wir dieses Styling auf ein Element anwenden wollen. Der zweite Parameter ist die Klasse, die den ganzen Zauber vollbringt, die Kontextoptionen definiert und was auf die zweidimensionale Leinwand gemalt werden soll, die unser Bild sein wird.

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

In diesem Klassenbeispiel haben wir eine einzelne Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein einfaches Objekt zurückgegeben, das besagt, dass Alpha-Transparenz erlaubt ist.

Wir haben dann die Funktion `paint()` verwendet, um auf unsere Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente haben. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext, der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Unterset des [HTML Canvas API](/de/docs/Web/API/Canvas_API); die für Houdini verfügbare Version (die `PaintRenderingContext2D` genannt wird) ist ein weiterer Unterset, der die meisten der im vollständigen Canvas API verfügbaren Funktionen enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs.

Wir definieren [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achsen-Ursprung, y-Achsen-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten vom linken und 15 Einheiten vom oberen Rand des Content-Box-Position ist.

Wir können die CSS [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) Eigenschaften nutzen, um dieses Hintergrundbild zu vergrößern oder zu verschieben, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen sehen Sie sich die [Canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas) an. Wir fügen später in diesem Tutorial ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS aufnehmen, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Die Einrichtung und das Design unseres Paint-Worklets fand im oben gezeigten externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()`-Methode des Paint-Worklets in einem `<script>` innerhalb des Haupt-HTML oder in einer externen JavaScript-Datei, die aus dem Dokument verlinkt ist, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel ist das Paint-Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zunächst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS `paint()`-Funktion wie jedes andere `<image>`-Typ, indem Sie denselben String-Identifikator verwenden, den wir in der `registerPaint()`-Funktion des Paint-Worklets verwendet haben.

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

Das folgende Beispiel wird in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), wie das obige Bild aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht verändern können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir einen 20x200 Einheiten großen Kasten erstellt, der 15 Einheiten vom oberen Rand des Elements bemalt ist, und zwar unabhängig von der Größe des Elements. Ist der Text klein, sieht der gelbe Kasten aus wie ein großes Unterstrich. Ist der Text groß, könnte der Kasten wie eine Leiste über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%`; auf dem Block-Level-Element gesetzt, wodurch das Element schmaler wird und somit auch das Hintergrundbild schmaler.

### Das Paint-Worklet

Der Code dazu sieht so aus:

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

In diesem Codebeispiel gibt es zwei Unterschiede zu unserem ersten Beispiel:

1. Wir haben ein zweites Argument hinzugefügt, nämlich die Paint-Größe.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks so geändert, dass sie relativ zur Größe des Elementkastens und nicht absolute Werte sind.

Wir können den zweiten Parameter in die `paint()`-Funktion einfügen, um Zugriff auf die Breite und Höhe des Elements zu erhalten, über die `.width`- und `.height`-Eigenschaften.

Unser Header hat jetzt ein Highlight, das sich je nach Größe ändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht verändern können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu verändern.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im untenstehenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichenkontext, die Paint-Größe und die Eigenschaften. Um auf die Eigenschaften zugreifen zu können, fügen wir die statische `inputProperties()`-Methode hinzu, die Live-Zugriff auf CSS-Eigenschaften, einschließlich regulärer Eigenschaften und [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), bietet und ein {{jsxref("Array", "Array")}} von Eigenschaftsnamen zurückgibt. Wir werden `inputArguments` im letzten Abschnitt betrachten.

Lassen Sie uns eine Liste von Elementen mit einem Hintergrundbild erstellen, das zwischen drei verschiedenen Farben und drei Breiten rotiert.

![Die Breite und Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

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

Wir haben die `inputProperties()`-Methode in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf einem Element gesetzt sind, auf das `boxbg` angewendet wird, und diese dann in unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element betreffen, nicht nur benutzerdefinierte Eigenschaften.

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

Während Sie das Skript des Worklets nicht verändern können, können Sie die Werte der benutzerdefinierten Eigenschaften in den Entwicklerwerkzeugen ändern, um die Farben und die Breite des Hintergrundbildes zu verändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Arten mit bestehenden CSS-Eigenschaften nachbilden könnten, z. B. durch das Positionieren einiger dekorativer [generierter Inhalte](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before,` oder das Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, die Variablen übergeben, die sich automatisch anpassen.

Lassen Sie uns einen genaueren Blick auf ein komplexeres Paint-Beispiel werfen.

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

Und wir registrieren unser Worklet

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Vielleicht versuchen Sie es mit [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) auf den Headings?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten verschiedene, ziemlich komplexe lineare Farbverläufe für jede Farbe deklarieren, die Sie erstellen möchten. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall verschiedene Farben übergeben werden.

## Übergabe von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Flag für experimentelle Webplattform-Funktionen in Chrome oder Edge durch Besuch von `about://flags` aktiviert wird.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund statt ihn zu füllen umranden — lassen Sie uns ein zusätzliches Argument für diesen Fall übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument, das wir zu unserer `paint()`-Funktion hinzugefügt haben, zuzugreifen.

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

Wir können auch festlegen, dass wir einen bestimmten Argumenttyp wünschen.

Nehmen wir an, wir fügen ein zweites Argument hinzu, mit der Anzahl der Pixel Breite, die wir für die Umrandung wünschen:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste der Argumentwerte `get` holen, können wir speziell eine `<length>`-Einheit anfordern.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell das `<length>`-Attribut angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z. B. eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) verwenden, indem wir das Wertetyp-Schlüsselwort verwenden, wenn wir es in der `registerPaint()`-Funktion abrufen.

Jetzt können wir auf die Typ- und Werteigenschaften zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt aus der Box erhalten können. (Zugegeben, `ctx.lineWidth` nimmt einen Float als Wert anstelle eines Werts mit Längeneinheiten, aber der Beispielhaftigkeit halber …)

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

Es lohnt sich, den Unterschied zwischen der Verwendung benutzerdefinierter Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und der hier aufgeführten Argumente zu beachten. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften auf der Stilkarte) sind global — sie können an anderer Stelle in unserem CSS (und JS) verwendet werden.

Sie könnten beispielsweise eine `--mainColor` haben, die nützlich wäre, um die Farbe innerhalb einer `paint()`-Funktion einzustellen, aber auch verwendet werden kann, um Farben an anderer Stelle in Ihrem CSS festzulegen. Wenn Sie sie speziell für Paint ändern wollten, könnte das schwierig werden. Hier kommt die Funktion für benutzerdefinierte Argumente zum Einsatz. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente zur Steuerung dessen, was Sie tatsächlich zeichnen, gesetzt werden, während Eigenschaften zur Steuerung des Stylings gesetzt werden.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, wobei das grüne gefüllt ist.](hollowfilled.png)

Jetzt können wir wirklich beginnen, die Vorteile dieser API zu erkennen. Wenn wir eine Vielzahl von Zeichenparametern von unserem CSS aus über sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()`-Funktionsargumente kontrollieren können, dann können wir wirklich anfangen, wiederverwendbare und hochgradig kontrollierbare Stilfunktionen zu erstellen.

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
