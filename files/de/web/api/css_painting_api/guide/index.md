---
title: Verwenden der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 2b26cc6e576d23f68fdf992767da81de9707965e
---

{{DefaultAPISidebar("CSS Painting API")}}
Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist darauf ausgelegt, Entwicklern die Möglichkeit zu geben, programmgesteuert Bilder zu definieren, die dann überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, z. B. CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um ein Bild, das durch ein CSS-Stylesheet verwendet wird, programmgesteuert zu erstellen, müssen wir einige Schritte durchgehen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint).
2. Registrieren Sie das Worklet.
3. Integrieren Sie die `{{cssxref("image/paint","paint()")}}` CSS-Funktion.

Um diese Schritte näher zu erläutern, beginnen wir damit, einen Hintergrund mit halbem Highlight zu erstellen, wie in diesem Header:

![Text mit der Überschrift 'My Cool Header' mit einem soliden gelben Hintergrundbildblock im unteren linken Drittel des Headers](mycoolheader.png)

> [!NOTE]
> Der vollständige Quellcode für alle Beispiele in diesem Artikel finden Sie unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting), und die Beispiele laufen live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/).

## CSS-Paint-Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS-Paint-Worklet](/de/docs/Web/API/Worklet) zu benennen. Sie nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden werden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die die gesamte Magie bewirkt, indem sie die Kontextoptionen definiert und festlegt, was auf die zweidimensionale Leinwand gemalt werden soll, die unser Bild ist.

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

In diesem Klassenbeispiel haben wir eine einzige Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein einfaches Objekt zurückgegeben, das angibt, dass Alpha-Transparenz erlaubt ist.

Wir haben dann die Funktion `paint()` verwendet, um auf unsere Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente entgegennehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext, oft als `ctx` bezeichnet. Der 2D-Rendering-Kontext ist ein Teil der [HTML-Canvas-API](/de/docs/Web/API/Canvas_API); die für Houdini verfügbare Version (genannt `PaintRenderingContext2D`) ist ein weiterer Unterbereich, der die meisten der im vollständigen Canvas-API verfügbaren Funktionen mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`-, `CanvasUserInterface`-, `CanvasText`- und `CanvasTextDrawingStyles`-APIs enthält.

Wir definieren den [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck mit dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind, in der Reihenfolge, Ursprung der x-Achse, Ursprung der y-Achse, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist und 0 Einheiten von links und 15 Einheiten von oben im Inhaltsbereich positioniert ist.

Wir können die CSS-Eigenschaften [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) verwenden, um dieses Hintergrundbild zu verkleinern oder zu verschieben, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Weitere Optionen finden Sie in der [Canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas). Wir fügen später in diesem Tutorial auch ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS aufnehmen, wobei darauf geachtet wird, dass der CSS-Selektor einem DOM-Knoten in unserem HTML entspricht.

Die Einrichtung und das Design unseres Paint-Worklets fand in dem oben gezeigten externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) von unserem Hauptskript aus registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()`-Methode des Paint-Worklets in einem `<script>` innerhalb der Haupt-HTML oder in einer externen JavaScript-Datei erfolgen, die aus dem Dokument verlinkt ist.

## Verwendung des Paint-Worklets

In unserem Beispiel wird das Paint-Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Verweis auf das Paint-Worklet in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()`, wie wir es mit jedem anderen `<image>`-Typ tun würden, mit demselben Zeichenfolgenbezeichner, den wir in der `registerPaint()`-Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Zusammensetzen

Wir können dann die stilvolle Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel sieht in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), so aus wie das Bild oben.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht ändern können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir einen 20x200 Einheiten großen Kasten erstellt, der 15 Einheiten von der Oberseite des Elements gemalt wird, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht der gelbe Kasten wie eine riesige Unterstreichung aus. Wenn der Text riesig ist, könnte der Kasten wie eine Leiste über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50 % der Höhe und 60 % der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%` auf dem Blockelement gesetzt, was das Element schmaler und daher das Hintergrundbild schmaler macht.

### Das Paint-Worklet

Der dazugehörige Code sieht wie folgt aus:

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

Dieses Codebeispiel hat zwei Unterschiede zu unserem ersten Beispiel:

1. Wir haben ein zweites Argument hinzugefügt, das die Paint-Größe ist.
2. Wir haben die Dimensionen und Positionierung unseres Rechtecks so geändert, dass sie relativ zur Größe des Elementkastens sind, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter in die `paint()`-Funktion übergeben, um Zugriff auf die Breite und Höhe des Elements zu erhalten, über die Eigenschaften `.width` und `.height`.

Unser Header hat nun ein Highlight, das sich seiner Größe anpasst.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht ändern können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu verändern.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die folgenden Elemente im Beispiel unten gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch Zugriff auf CSS-Benutzereigenschaften und reguläre CSS-Eigenschaften haben.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichenkontext, die Paint-Größe und die Eigenschaften. Damit auf die Eigenschaften zugegriffen werden kann, integrieren wir die statische `inputProperties()`-Methode, die einen Live-Zugriff auf CSS-Eigenschaften ermöglicht, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und gibt ein {{jsxref("Array", "Array")}} zurück. Wir werden uns `inputArguments` im letzten Abschnitt ansehen.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das sich zwischen drei verschiedenen Farben und drei Breiten dreht.

![Die Breite und Farbe des Hintergrundbilds ändert sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint-Worklet

In unserem Worklet können wir auf diese benutzerdefinierten Eigenschaften Bezug nehmen.

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

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften abzurufen, die auf ein Element gesetzt sind, dem `boxbg` zugewiesen ist, und haben diese dann innerhalb unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

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

Während Sie das Skript des Worklets nicht ändern können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Mehr Komplexität hinzufügen

Die obigen Beispiele mögen vielleicht nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Weise mit vorhandenen CSS-Eigenschaften nachbilden könnten, z. B. indem Sie etwas dekorative [generierte Inhalte](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before` positionieren oder `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` einschließen. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, Variablen übergeben und diese automatisch in der Größe anpassen.

Sehen wir uns ein komplexeres Beispiel für ein Paint-Worklet an.

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

Wir können dann etwas HTML erstellen, das dieses Bild als Hintergrund akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die benutzerdefinierte Eigenschaft `--highColor`.

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

Das Ergebnis sieht folgendermaßen aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML spielen. Probieren Sie vielleicht [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) an den Überschriften aus?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Painting API zu erstellen. Es ist machbar, aber Sie müssten für jede unterschiedliche Farbe, die Sie erstellen möchten, ein anderes, ziemlich komplexes lineares Gradientenmuster deklarieren. Mit der CSS Painting API kann ein Worklet wiederverwendet werden, wobei in diesem Fall unterschiedliche Farben übergeben werden.

## Parameterübermittlung

> [!NOTE]
> Das folgende Beispiel erfordert, dass die Funktion „Experimentelle Webplattform“ in Chrome oder Edge aktiviert ist, indem Sie `about://flags` aufrufen.

Mit der CSS Painting API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente angeben, wenn wir die Funktion im CSS aufrufen. Angenommen, wir wollen manchmal statt einer Füllung eine Umrandung für unseren Hintergrund vornehmen — wir übergeben ein zusätzliches Argument für diesen Anlass.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die `inputArguments()`-Methode in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()`-Funktion hinzugefügt haben.

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

Wir können auch festlegen, dass wir einen bestimmten Typ von Argument wünschen.

Angenommen, wir fügen ein zweites Argument hinzu, mit wie vielen Pixel Breite wir die Umrandung haben möchten:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten abrufen, können wir speziell nach einer `<length>`-Einheit fragen.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell nach dem `<length>`-Attribut gefragt. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die getypte OM CSSStyleValue-Klasse (und Unterklassen) aufrufen, indem wir das Wertetyp-Schlüsselwort verwenden, wenn wir es in der `registerPaint()`-Funktion abrufen.

Jetzt haben wir Zugriff auf die Typ- und Werteeigenschaften, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt erhalten können. (Zu beachten ist, dass `ctx.lineWidth` zwar einen Float als Wert nimmt, anstatt einen Wert mit Längeneinheiten, aber aus Beispielsgründen…)

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

Es lohnt sich, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier beschriebenen Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften auf der Stilkarte) sind global — sie können anderswo innerhalb unseres CSS (und JS) verwendet werden.

Sie können beispielsweise eine `--mainColor`-Eigenschaft haben, die nützlich ist, um die Farbe in einer `paint()`-Funktion festzulegen, aber auch verwendet werden kann, um Farben anderswo in Ihrem CSS festzulegen. Wenn Sie sie speziell für Paint ändern möchten, könnte sich dies als schwierig erweisen. Hier kommt die benutzerdefinierte Argumentfunktion ins Spiel. Eine andere Möglichkeit, darüber nachzudenken, besteht darin, dass Argumente dazu da sind, zu kontrollieren, was Sie tatsächlich zeichnen, während Eigenschaften dazu da sind, das Styling zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder rosa, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne wird gefüllt.](hollowfilled.png)

Jetzt können wir wirklich anfangen, die Vorteile dieser API zu sehen: Wenn wir eine Vielzahl von Zeichenparametern von unserem CSS aus durch sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()`-Funktionsargumente steuern können, dann können wir wirklich wiederverwendbare und hochgradig kontrollierbare Stilfunktionen erstellen.

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
