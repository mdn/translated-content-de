---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 1eabc08d295e60d7d8eab6bce858d2fb0833be2b
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist dafür ausgelegt, Entwicklern zu ermöglichen, Bilder programmatisch zu definieren, die dann überall verwendet werden können, wo ein CSS-Bild eingefügt werden kann, wie z.B. bei CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}} usw.

Um ein Bild programmatisch zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchgehen:

1. Ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) definieren
2. Das Worklet registrieren
3. Die {{cssxref('image/paint', 'paint()')}} CSS-Funktion einfügen

Um diese Schritte näher zu erläutern, beginnen wir mit der Erstellung eines halb-hervorgehobenen Hintergrunds, wie bei diesem Header:

![Text mit der Aufschrift 'My Cool Header' mit einem soliden gelben Hintergrundbildblock unten links in zwei Dritteln des Headers](mycoolheader.png)

> [!NOTE]
> Ein vollständiges funktionsfähiges Demo zusammen mit dem [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting) finden Sie im [CSS Painting API Beispiel](https://mdn.github.io/dom-examples/css-painting/).

## CSS-Paint-Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint-Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter an. Der erste ist der Name, den wir dem Worklet geben — dieser Name wird im CSS als Parameter der `paint()` Funktion verwendet, wenn wir diesen Stil auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die alle Magie vollbringt, die Kontextoptionen definiert und was auf die zweidimensionale Leinwand gemalt werden soll, die unser Bild sein wird.

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

In diesem Klassenbeispiel haben wir eine einzelne Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die Funktion `paint()` verwendet, um auf unserer Leinwand zu malen.

Eine `paint()` Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden uns später mehr damit beschäftigen), häufig als `ctx` bezeichnet. Der 2D-Rendering-Kontext ist ein Teil der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die für Houdini verfügbare Version (genannt `PaintRenderingContext2D`) ist ein weiteres Subset, das die meisten Funktionen der vollständigen Canvas API enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs.

Wir definieren die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck in dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achsen-Ursprung, y-Achsen-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, positioniert 0 Einheiten vom linken Rand und 15 Einheiten vom oberen Rand der Inhaltsbox entfernt.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu ändern oder neu zu positionieren, aber dies ist die Standardgröße und -platzierung der gelben Box, die wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen schauen Sie sich die Dokumentation zu {{HTMLElement("canvas")}} an. Wir fügen später in diesem Tutorial noch etwas Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einfügen, sicherstellen, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt

Das Setup und Design unseres Paint-Worklets fand im oben gezeigten externen Skript statt. Wir müssen dieses [`worklet`](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der Methode `addModule()` des Paint-Worklets in einem `<script>` innerhalb des Haupt-HTMLs oder in einer externen JavaScript-Datei, die aus dem Dokument verlinkt ist, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel wird das Paint-Worklet neben der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzierung des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()` wie bei jedem anderen `<image>`-Typ, indem Sie denselben Zeichenfolgenbezeichner verwenden, den wir in der `registerPaint()` Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Alles zusammenfügen

Dann können wir die schicke Klasse zu jedem Element auf der Seite hinzufügen, um eine gelbe Box als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird wie das obige Bild in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Obwohl Sie das Skript des Worklets nicht bearbeiten können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu ändern.

## PaintSize

Im obigen Beispiel haben wir eine 20x200 Einheiten-Box erstellt, die 15 Einheiten vom oberen Rand des Elements gemalt wird, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht die gelbe Box wie eine riesige Unterstreichung aus. Wenn der Text groß ist, könnte die Box wie ein Balken über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50 % der Höhe und 60 % der Breite des Elements](mycoolheadersized.png)

In dem obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%`; auf dem Block-Niveau-Element gesetzt, wodurch das Element schmaler und damit das Hintergrundbild schmaler wird.

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

1. Wir haben ein zweites Argument hinzugefügt, nämlich die Paint-Größe.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks so geändert, dass sie relativ zur Größe des Element-Box sind, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter in die `paint()` Funktion übergeben, um Zugang zur Breite und zur Höhe des Elements über die `.width` und `.height` Eigenschaften zu erhalten.

Unser Header hat jetzt ein Highlight, das sich entsprechend seiner Größe verändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Obwohl Sie das Skript des Worklets nicht bearbeiten können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes anzupassen.

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

Die drei Parameter der `paint()` Funktion umfassen den Zeichnungskontext, die Paint-Größe und die Eigenschaften. Um auf Eigenschaften zugreifen zu können, fügen wir die statische `inputProperties()` Methode hinzu, die Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und ein {{jsxref("Array", "array", "", 1)}} von Eigenschaftsnamen zurückgibt. Wir werden uns [`inputArguments`](#übergabe_von_parametern) im letzten Abschnitt ansehen.

Lassen Sie uns eine Liste von Elementen mit einem Hintergrundbild erstellen, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und die Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

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

Wir haben die `inputProperties()` Methode in der `registerPaint()` Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften abzurufen, die auf ein Element angewendet werden, das `boxbg` verwendet, und dann diese innerhalb unserer `paint()` Funktion verwendet. Die `inputProperties()` Methode kann alle Eigenschaften zurückgeben, die das Element betreffen, nicht nur benutzerdefinierte Eigenschaften.

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

Obwohl Sie das Skript des Worklets nicht bearbeiten können, können Sie die Werte der benutzerdefinierten Eigenschaft in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf einige unterschiedliche Arten mit bestehenden CSS-Eigenschaften nachbilden könnten, z.B. durch Positionierung einiger dekorativer [erstellter Inhalte](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before` oder indem Sie `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` einschließen. Was die CSS Painting API so interessant und mächtig macht, ist, dass Sie komplexe Bilder erstellen können, die Variablen übergeben und sich automatisch neu skalieren.

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

Dann können wir ein wenig HTML erstellen, das dieses Bild als Hintergründe akzeptiert:

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

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML spielen. Vielleicht versuchen Sie, {{cssxref("scale")}} und {{cssxref("rotate")}} auf den Kopfzeilen zu verwenden?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten einen anderen, ziemlich komplexen linearen Verlauf für jede Farbe, die Sie erstellen möchten, deklarieren. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall unterschiedliche Farben übergeben werden.

## Übergabe von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass die Experimentellen Web-Plattform-Funktionen in Chrome oder Edge aktiviert sind, indem Sie `about://flags` aufrufen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte Eigenschaften und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()` Funktion übergeben.

Wir können diese zusätzlichen Argumente übergeben, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund umranden, anstatt ihn auszufüllen — lassen Sie uns ein zusätzliches Argument für diesen Anlass übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die `inputArguments()` Methode in der `registerPaint()` Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()` Funktion hinzugefügt haben.

```js
class Worklet {
  static get inputArguments() {
    return ["*"];
  }
  // …
}
```

Wir haben dann Zugriff auf dieses Argument.

```js
class Worklet {
  // …
  paint(ctx, size, props, args) {
    // use our custom arguments
    const hasStroke = args[0].toString();

    // if stroke arg is 'stroke', don't fill
    if (hasStroke === "stroke") {
      ctx.fillStyle = "transparent";
      ctx.strokeStyle = color;
    }
    // …
  }
  // …
}
```

Wir können auch angeben, dass wir einen bestimmten Argumenttyp benötigen.

Angenommen, wir fügen ein zweites Argument hinzu, das angibt, wie viele Pixel breit wir den Umriss haben möchten:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten abrufen, können wir speziell nach einer `<length>` Einheit fragen.

```js
class Worklet {
  // …
  static get inputArguments() {
    return ["*", "<length>"];
  }
  // …
}
```

In diesem Fall haben wir speziell das `<length>` Attribut angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z.B. eine Einheit, können wir auf die CSSStyleValue-Klasse des Typed OM (und Unterklassen) zugreifen, indem wir das Schlüsselwort des Wertetyps verwenden, wenn wir es in der `registerPaint()` Funktion abrufen.

Jetzt können wir auf die Typ- und Werteigenschaften zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt aus der Box erhalten können. (Zugegeben, `ctx.lineWidth` nimmt einen Fließkommawert anstelle eines Wertes mit Längeneinheiten, aber zum Beispiel's willen…)

```js
class Worklet {
  // …
  paint(ctx, size, props, args) {
    const strokeWidth = args[1];

    if (strokeWidth.unit === "px") {
      ctx.lineWidth = strokeWidth.value;
    } else {
      ctx.lineWidth = 1.0;
    }

    // …
  }
  // …
}
```

Es ist erwähnenswert, den Unterschied zwischen der Verwendung benutzerdefinierter Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und der hier festgelegten Argumente. Benutzerdefinierte Eigenschaften (und in der Tat alle Eigenschaften auf der Stilmap) sind global — sie können an anderer Stelle innerhalb unseres CSS (und JS) verwendet werden.

Sie könnten beispielsweise eine `--mainColor` haben, die nützlich ist, um die Farbe innerhalb einer `paint()` Funktion festzulegen, aber auch an anderer Stelle in Ihrem CSS verwendet werden kann. Wenn Sie sie speziell für Paint ändern möchten, könnte sich dies als schwierig erweisen. Hier kommt die benutzerdefinierte Argumentfunktion praktisch zur Hand. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente festgelegt sind, um zu steuern, was Sie tatsächlich zeichnen, während Eigenschaften festgelegt sind, um das Styling zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder rosa, lila oder grün ist, mit unterschiedlichen Umrissbreiten und das grüne wird gefüllt.](hollowfilled.png)

Nun können wir wirklich beginnen, den Nutzen dieser API zu sehen, wenn wir eine Vielzahl von Zeichnungsparametern über unser CSS durch sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()` Funktionsargumente steuern können, dann können wir wirklich beginnen, wiederverwendbare und hochgradig steuerbare Styling-Funktionen zu erstellen.

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
      const strokeWidth = parseInt(args[1], 10);

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

Wir können verschiedene Farben, Umrissbreiten festlegen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

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
