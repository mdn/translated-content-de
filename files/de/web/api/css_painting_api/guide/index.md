---
title: Verwenden der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) wurde entwickelt, um Entwicklern zu ermöglichen, programmgesteuert Bilder zu definieren, die dann überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}} usw.

Um programmgesteuert ein Bild zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchgehen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie das Worklet
3. Integrieren Sie die {{cssxref('image/paint', 'paint()')}} CSS-Funktion

Um diese Schritte näher zu erläutern, beginnen wir damit, einen halb-hervorgehobenen Hintergrund zu erstellen, ähnlich wie bei diesem Header:

![Text "My Cool Header" mit einem soliden gelben Hintergrundbildblock unten links auf zwei Dritteln des Headers](mycoolheader.png)

> [!NOTE]
> Sehen Sie sich das [Beispiel der CSS Painting API](https://mdn.github.io/dom-examples/css-painting/) für eine vollständige funktionierende Demo zusammen mit dem [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting) an.

## CSS Paint Worklet

In einer externen Scriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unserem [CSS Paint Worklet](/de/docs/Web/API/Worklet) einen Namen zu geben. Sie nimmt zwei Parameter an. Der erste ist der Name, den wir dem Worklet geben – dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden, wenn wir diesen Stil auf ein Element anwenden wollen. Der zweite Parameter ist die Klasse, die alle magischen Aktionen ausführt, indem sie die Kontextoptionen definiert und das zeichnet, was auf die zweidimensionale Leinwand gemalt werden soll, die unser Bild sein wird.

```js
registerPaint(
  "header-highlight",
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

In diesem Klassenbeispiel haben wir eine einzige Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die Funktion `paint()` verwendet, um auf unsere Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Renderkontext (wir werden später mehr dazu erfahren), der oft durch den Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Teil der [HTML-Canvas-API](/de/docs/Web/API/Canvas_API); die verfügbare Version für Houdini (genannt `PaintRenderingContext2D`) ist ein weiterer Teil, der die meisten der im vollständigen Canvas-API verfügbaren Funktionen enthält, jedoch ohne die [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs.

Wir definieren den [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck in dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: Ursprung der X-Achse, Ursprung der Y-Achse, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, positioniert 0 Einheiten vom linken Rand und 15 Einheiten von der Oberseite des Inhaltskastens entfernt.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu skalieren oder zu verschieben, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen schauen Sie sich die Dokumentation zu {{HTMLElement("canvas")}} an. Wir fügen später in diesem Tutorial noch ein wenig Komplexität hinzu.

## Registrieren des Worklets

Um das Paint Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einfügen, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Die Einrichtung und das Design unseres Paint Worklets haben im oben gezeigten externen Skript stattgefunden. Wir müssen dieses [`worklet`](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der Methode `addModule()` des Paint Worklets innerhalb eines `<script>` im Haupt-HTML oder in einer externen JavaScript-Datei, die aus dem Dokument verknüpft ist, durchgeführt werden.

## Verwenden des Paint Worklets

In unserem Beispiel wird das Paint Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zunächst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren des Paint Worklets in CSS

Sobald wir ein registriertes Paint Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS `paint()`-Funktion, wie wir es mit jedem anderen `<image>`-Typ machen würden, unter Verwendung des gleichen Zeichenfolgenbezeichners, den wir in der `registerPaint()`-Funktion des Paint Worklets verwendet haben.

```css
.fancy {
  background-image: paint(header-highlight);
}
```

### Zusammenfügen

Wir können dann die stilvolle Klasse zu jedem Element auf der Seite hinzufügen, um eine gelbe Box als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), wie das Bild oben aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Obwohl Sie das Skript des Worklets nicht ändern können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbilds zu ändern.

## PaintSize

Im obigen Beispiel haben wir eine 20x200 Einheit große Box erstellt, die 15 Einheiten vom oberen Rand des Elements gemalt wird, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht die gelbe Box wie eine große Unterstreichung aus. Wenn der Text groß ist, könnte die Box wie ein Balken oberhalb der ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre – wir können die `paintSize` Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das 3. Beispiel hat `width: 50%`; auf dem Blockniveaulement eingestellt, das Element schmaler macht und dadurch das Hintergrundbild schmaler.

### Das Paint Worklet

Der Code dafür sieht folgendermaßen aus:

```js
registerPaint(
  "header-highlight",
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

Dieses Codebeispiel weist zwei Unterschiede zu unserem ersten Beispiel auf:

1. Wir haben ein zweites Argument hinzugefügt, das die Paint-Größe ist.
2. Wir haben die Dimensionen und die Positionierung unseres Rechtecks geändert, so dass es relativ zur Größe des Boxmodells des Elements, anstatt absoluter Werte, ist.

Wir können das zweite Parameter an die `paint()`-Funktion übergeben, um Zugriff auf die Breite und die Höhe des Elements über die Eigenschaften `.width` und `.height` zu erhalten.

Unser Header hat jetzt ein Highlight, das sich je nach Größe ändert.

### Verwendung des Paint Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht ändern können, können Sie die Eigenschaft `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbilds zu verändern.

```css
.fancy {
  background-image: paint(header-highlight);
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

Zusätzlich zur Zugriff auf die Größe des Elements kann das Worklet auch Zugriff auf benutzerdefinierte CSS-Eigenschaften und reguläre CSS-Eigenschaften haben.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichenkontext, die Paint-Größe und die Eigenschaften. Um auf die Eigenschaften zugreifen zu können, fügen wir die statische Methode `inputProperties()` ein, die Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/Guides/Cascading_variables), und einen {{jsxref("Array", "Array", "", 1)}} von Eigenschaftsnamen zurückgibt. Wir werden [`inputArguments`](#parameter_übergeben) im letzten Abschnitt betrachten.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und Farbe des Hintergrundbilds ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--box-color` und `--width-subtractor`.

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
      return ["--box-color", "--width-subtractor"];
    }

    paint(ctx, size, props) {
      /*
       * ctx -> drawing context
       * size -> paintSize: width and height
       * props -> properties: get() method
       */
      ctx.fillStyle = props.get("--box-color");
      ctx.fillRect(
        0,
        size.height / 3,
        size.width * 0.4 - props.get("--width-subtractor"),
        size.height * 0.6,
      );
    }
  },
);
```

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf ein Element gesetzt sind, das `boxbg` zugewiesen hat, und haben diese dann innerhalb unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

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

In unserem CSS definieren wir die benutzerdefinierten Eigenschaften `--box-color` und `--width-subtractor`.

```css
li {
  background-image: paint(boxbg);
  --box-color: hsl(55 90% 60% / 100%);
}

li:nth-of-type(3n) {
  --box-color: hsl(155 90% 60% / 100%);
  --width-subtractor: 20;
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(255 90% 60% / 100%);
  --width-subtractor: 40;
}
```

#### JavaScript

In unserem `<script>` registrieren wir das Worklet:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Obwohl Sie das Skript des Worklets nicht ändern können, können Sie die Werte der benutzerdefinierten Eigenschaft in den DevTools ändern, um die Farben und die Breite des Hintergrundbilds zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Hinzufügen von Komplexität

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Weisen mit bestehenden CSS-Eigenschaften nachbilden könnten, z.B. durch das Positionieren von dekorativen [erzeugten Inhalten](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before` oder durch Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, indem Sie Variablen übergeben, die sich automatisch anpassen.

Schauen wir uns ein komplexeres Malbeispiel an.

### Das Paint Worklet

```js
registerPaint(
  "header-highlight",
  class {
    static get inputProperties() {
      return ["--high-color"];
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
      const color = props.get("--high-color");

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

Wir können dann ein kleines HTML erstellen, das diese Bilder als Hintergründe akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die [`--high-color`](/de/docs/Web/CSS/Guides/Cascading_variables) [benutzerdefinierte Eigenschaft].

```css
.fancy {
  background-image: paint(header-highlight);
}
h1 {
  --high-color: hsl(155 90% 60% / 70%);
}
h3 {
  --high-color: hsl(255 90% 60% / 50%);
}
h6 {
  --high-color: hsl(355 90% 60% / 30%);
}
```

Und wir registrieren unser Worklet.

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht wie folgt aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Obwohl Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML spielen. Vielleicht versuchen Sie {{cssxref("scale")}} und {{cssxref("rotate")}} auf die Header anzuwenden?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede Farbvorgabe, die Sie erstellen möchten, einen unterschiedlichen, ziemlich komplexen linearen Verlauf angeben. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, wobei in diesem Fall verschiedene Farben übergeben werden.

## Parameter übergeben

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Experimental Web Platform Features-Flag in Chrome oder Edge aktiviert ist, indem Sie `about://flags` besuchen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Nehmen wir an, wir möchten manchmal unseren Hintergrund statt zu füllen, umranden – lassen Sie uns für diesen Anlass ein zusätzliches Argument übergeben.

```css
li {
  background-image: paint(hollow-highlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()`-Funktion hinzugefügt haben.

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

Wir können auch angeben, dass wir einen bestimmten Typ von Argument möchten.

Nehmen wir an, wir fügen ein zweites Argument hinzu, das angibt, wie viele Pixel breit wir den Strich haben möchten:

```css
li {
  background-image: paint(hollow-highlights, stroke, 10px);
}
```

Wenn wir unsere Liste der Argumentwerte `get`en, können wir speziell nach einer `<length>`-Einheit fragen.

```js
class Worklet {
  // …
  static get inputArguments() {
    return ["*", "<length>"];
  }
  // …
}
```

In diesem Fall haben wir speziell das `<length>`-Attribut angefordert. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z.B. eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) verwenden, indem wir das Werttyp-Schlüsselwort verwenden, wenn wir es in der RegisterPaint-Funktion abrufen.

Jetzt können wir auf die Typ- und Werteigenschaften zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt aus der Box erhalten können. (Zugegebenermaßen nimmt `ctx.lineWidth` einen Float als Wert statt eines Wertes mit Längeneinheiten, aber für ein Beispiel…)

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

Es ist erwähnenswert, dass es einen Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier aufgeführten Argumenten gibt. Benutzerdefinierte Eigenschaften (und in der Tat alle Eigenschaften auf der Stilkarte) sind global – sie können auch an anderer Stelle in unserem CSS (und JS) verwendet werden.

Sie können zum Beispiel eine `--main-color` haben, die nützlich ist, um die Farbe innerhalb einer `paint()`-Funktion zu setzen, aber kann auch verwendet werden, um Farben an anderer Stelle in Ihrem CSS zu setzen. Wenn Sie es speziell für `paint()` ändern möchten, könnte sich das als schwierig erweisen. Hier kommt die Funktion der benutzerdefinierten Argumente ins Spiel. Eine andere Möglichkeit darüber nachzudenken ist, dass Argumente dazu verwendet werden, um das, was Sie tatsächlich zeichnen, zu steuern, während Eigenschaften dazu verwendet werden, das Styling zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne ist gefüllt.](hollowfilled.png)

Jetzt können wir wirklich beginnen, die Vorteile dieser API zu sehen. Wenn wir eine Vielzahl von Zeichenparametern von unserem CSS durch sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()`-Funktionsargumente steuern können, dann können wir wirklich wiederverwendbare und hochgradig steuerbare Stilfunktionen erstellen.

### Das Paint Worklet

```js
registerPaint(
  "hollow-highlights",
  class {
    static get inputProperties() {
      return ["--box-color"];
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
      const color = props.get("--box-color");
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

### Verwendung des Paint Worklets

Wir können verschiedene Farben, Strichbreiten einstellen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

```css
li {
  --box-color: hsl(155 90% 60% / 50%);
  background-image: paint(hollow-highlights, stroke, 5px);
}

li:nth-of-type(3n) {
  --box-color: hsl(255 90% 60% / 50%);
  background-image: paint(hollow-highlights, filled, 3px);
}

li:nth-of-type(3n + 1) {
  --box-color: hsl(355 90% 60% / 50%);
  background-image: paint(hollow-highlights, stroke, 1px);
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
