---
title: Verwenden der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 3c13d9a0c239ed31ae861486393952bc03e0b5bd
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) wurde entwickelt, um Entwicklern zu ermöglichen, Bilder programmatisch zu definieren, die dann überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}}, usw.

Um programmatisch ein Bild zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie das Worklet
3. Verwenden Sie die CSS-Funktion {{cssxref('image/paint', 'paint()')}}

Um diese Schritte näher zu erläutern, beginnen wir mit der Erstellung eines halb hervorgehobenen Hintergrunds, wie in diesem Header:

![Text mit der Aufschrift "Mein Cooler Header" mit einem soliden gelben Hintergrundbildblock am unteren linken Drittel des Headers](mycoolheader.png)

> [!NOTE]
> Siehe [CSS Painting API Beispiel](https://mdn.github.io/dom-examples/css-painting/) für eine vollständige funktionierende Demo zusammen mit dem [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der Funktion `paint()` verwenden werden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die die Magie vollbringt, indem sie die Kontextoptionen und das zu malende Bild auf der zweidimensionalen Leinwand definiert, das unser Bild sein wird.

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

In diesem Klassenbeispiel haben wir mit der Funktion `contextOptions()` eine einzelne Kontextoption definiert: Wir haben ein Objekt zurückgegeben, das erklärt, dass Alpha-Transparenz erlaubt ist.

Wir haben dann die `paint()` Funktion verwendet, um auf unsere Leinwand zu malen.

Eine `paint()` Funktion kann drei Argumente annehmen. Hier haben wir ein Argument angegeben: den Rendering-Kontext (wir werden uns später mehr ansehen), der oft durch den Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Teil der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die für Houdini verfügbare Version (genannt `PaintRenderingContext2D`) ist ein weiterer Teil, der die meisten der im vollständigen Canvas API verfügbaren Funktionen enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der APIs `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles`.

Wir definieren den [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind, in der Reihenfolge, Ursprung der x-Achse, Ursprung der y-Achse, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten von links und 15 Einheiten von der Oberseite des Inhaltskastens positioniert.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu skalieren oder zu verlagern, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für mehr Optionen schauen Sie in die Dokumentation von {{HTMLElement("canvas")}}. Wir fügen später in diesem Tutorial auch ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einbinden, wobei sichergestellt wird, dass der CSS-Selektor einem DOM-Knoten in unserem HTML entspricht.

Die Einrichtung und das Design unseres Paint Worklets fanden im oben gezeigten externen Script statt. Wir müssen dieses [`worklet`](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der Methode `addModule()` des Paint Worklets in einem `<script>` im Haupt-HTML oder in einer externen JavaScript-Datei, die vom Dokument verlinkt ist, erfolgen.

## Verwendung des Paint Worklets

In unserem Beispiel ist das Paint Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zunächst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren Sie das Paint Worklet in CSS

Sobald wir ein registriertes Paint Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()` wie jede andere `<image>`-Art, mit dem gleichen String-Identifikator, den wir in der `registerPaint()` Funktion des Paint Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Zusammensetzen

Wir können dann die fancy Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird wie das Bild oben in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht verändern können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir einen Kasten mit den Maßen 20x200 Einheiten erstellt, der 15 Einheiten von der Oberseite des Elements entfernt gemalt wird, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht der gelbe Kasten wie ein riesiger Unterstrich aus. Wenn der Text groß ist, könnte der Kasten wie eine Leiste über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das 3. Beispiel hat `width: 50%`; auf dem Block-Level-Element gesetzt, macht das Element schmaler und damit das Hintergrundbild schmaler.

### Das Paint Worklet

Der Code, um dies zu tun, sieht folgendermaßen aus:

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
2. Wir haben die Dimensionen und die Positionierung unseres Rechtecks geändert, um relativ zur Größe des Elementkastens zu sein, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter in die `paint()` Funktion übergeben, um Zugang zur Breite und Höhe des Elements über die `.width` und `.height` Eigenschaften zu erhalten.

Unser Header hat jetzt ein Highlight, das sich entsprechend seiner Größe ändert.

### Verwendung des Paint Worklets

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im folgenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Neben dem Zugriff auf die Größe des Elements kann das Worklet auch auf CSS-Benutzereigenschaften und reguläre CSS-Eigenschaften zugreifen.

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

Die drei Parameter der `paint()` Funktion umfassen den Zeichenkontext, die Paint-Größe und die Eigenschaften. Um auf die Eigenschaften zugreifen zu können, fügen wir die statische `inputProperties()` Methode hinzu, die Zugriff auf CSS-Eigenschaften in Echtzeit bietet, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und ein {{jsxref("Array", "Array", "", 1)}} von Eigenschaftsnamen zurückgibt. Wir werden uns im letzten Abschnitt mit [`inputArguments`](#parameter_weitergeben) befassen.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten rotiert.

![Die Breite und Farbe des Hintergrundbildes ändert sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint Worklet

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

Wir haben die Methode `inputProperties()` in der `registerPaint()` Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf ein Element gesetzt sind, das `boxbg` angewendet hat, und diese dann in unserer `paint()` Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung des Paint Worklets

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

Während Sie das Skript des Worklets nicht verändern können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Arten mit bestehenden CSS-Eigenschaften nachbilden könnten, z.B. durch das Positionieren von dekorativen [generierten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before` oder durch das Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, die automatisch Größen anpassen, indem Variablen übergeben werden.

Werfen wir einen Blick auf ein komplexeres Paint-Beispiel.

### Das Paint Worklet

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

### Verwendung des Paint Worklets

Wir können dann ein kleines HTML erstellen, das dieses Bild als Hintergründe akzeptiert:

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Versuchen Sie vielleicht {{cssxref("scale")}} und {{cssxref("rotate")}} an den Headern?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede Farbe, die Sie erstellen möchten, einen anderen, ziemlich komplexen linearen Verlauf deklarieren. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall verschiedene Farben übergeben werden.

## Parameter weitergeben

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Flag für experimentelle Webplattform-Funktionen in Chrome oder Edge aktiviert ist, indem Sie `about://flags` besuchen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()` Funktion übergeben.

Diese zusätzlichen Argumente können wir hinzufügen, wenn wir die Funktion im CSS aufrufen. Nehmen wir an, wir möchten manchmal unseren Hintergrund umranden statt ihn auszufüllen — für diesen Fall übergeben wir ein zusätzliches Argument.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()` Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir zu unserer `paint()` Funktion hinzugefügt haben.

```js
class Worklet {
  static get inputArguments() {
    return ["*"];
  }
  // …
}
```

Wir haben dann Zugang zu diesem Argument.

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

Wir können auch angeben, dass wir einen bestimmten Argumenttyp möchten.

Nehmen wir an, wir fügen ein zweites Argument mit der Anzahl der Pixel, die wir als Umrissbreite haben möchten, hinzu:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten abrufen, können wir spezifisch nach einer `<length>`-Einheit fragen.

```js
class Worklet {
  // …
  static get inputArguments() {
    return ["*", "<length>"];
  }
  // …
}
```

In diesem Fall haben wir spezifisch das `<length>` Attribut angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z.B. eine Einheit, können wir die CSSStyleValue-Klasse (und Unterklassen) der typisierten OM verwenden, indem wir das Typ-Schlüsselwort verwenden, wenn wir es in der `registerPaint()` Funktion abrufen.

Jetzt haben wir Zugriff auf die Typ- und Werteigenschaften, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt aus der Box erhalten können. (Zugegeben, `ctx.lineWidth` nimmt einen Fließkommawert anstelle eines Wertes mit Längeneinheiten, aber um das Beispiel zu zeigen…)

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

Es ist erwähnenswert, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier beschriebenen Argumenten zu erkennen. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften in der Stilkarte) sind global — sie können anderswo in unserem CSS (und JS) verwendet werden.

Sie können zum Beispiel eine `--mainColor` haben, die nützlich sein wird, um die Farbe innerhalb einer `paint()` Funktion zu setzen, die aber auch verwendet werden kann, um Farben anderswo in Ihrem CSS zu setzen. Wenn Sie sie speziell für paint ändern wollten, könnte sich das als schwierig erweisen. Hierbei erweist sich die Funktion der benutzerdefinierten Argumente als nützlich. Eine andere Betrachtungsweise ist, dass Argumente gesetzt werden, um zu steuern, was Sie tatsächlich zeichnen, während Eigenschaften gesetzt werden, um das Styling zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Umrissbreiten, und das grüne ist gefüllt.](hollowfilled.png)

Jetzt können wir wirklich anfangen, die Vorteile dieser API zu sehen. Wenn wir eine Vielzahl von Zeichenparametern von unserem CSS durch sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()` Funktionsargumente steuern können, dann können wir wirklich beginnen, wiederverwendbare und hochgradig kontrollierbare Styling-Funktionen zu erstellen.

### Das Paint Worklet

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

### Verwendung des Paint Worklets

Wir können verschiedene Farben, Umrissbreiten setzen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

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
