---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist darauf ausgelegt, Entwicklern zu ermöglichen, Bilder programmatisch zu definieren, die dann überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie beispielsweise bei CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}} usw.

Um programmatisch ein Bild zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint Worklet mit der [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) Funktion
2. Registrieren Sie das Worklet
3. Fügen Sie die {{cssxref('image/paint', 'paint()')}} CSS-Funktion hinzu

Um diese Schritte zu veranschaulichen, beginnen wir damit, einen halb hervorgehobenen Hintergrund zu erstellen, wie bei dieser Überschrift:

![Text mit der Aufschrift „My Cool Header“ mit einem soliden gelben Hintergrundbildblock am unteren linken Drittel der Überschrift](mycoolheader.png)

> [!NOTE]
> Sehen Sie sich das [Beispiel zur CSS Painting API](https://mdn.github.io/dom-examples/css-painting/) für eine vollständig funktionierende Demo sowie den [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting) an.

## CSS-Paint-Worklet

In einer externen Skriptdatei verwenden wir die [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) Funktion, um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Sie nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die alle Magie definiert, die Kontextoptionen und das, was auf die zweidimensionale Leinwand gemalt wird, die unser Bild sein wird.

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

In diesem Klassenbeispiel haben wir eine einzelne Kontextoption mit der `contextOptions()` Funktion definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alpha-Transparenz erlaubt ist.

Wir haben dann die `paint()` Funktion verwendet, um auf unserer Leinwand zu malen.

Eine `paint()` Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden uns in Kürze weitere ansehen), der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Teil der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die Houdini zur Verfügung stehende Version (genannt `PaintRenderingContext2D`) ist ein weiterer Teil, der die meisten in der vollständigen Canvas API verfügbaren Funktionen mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der APIs `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` enthält.

Wir definieren [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in Ordnung: x-Achsen-Ursprung, y-Achsen-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist und 0 Einheiten von links und 15 Einheiten von oben in der Box des Inhalts entfernt positioniert ist.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu skalieren oder neu zu positionieren, aber dies ist die Standardgröße und -platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für mehr Optionen schauen Sie sich die Dokumentation zu {{HTMLElement("canvas")}} an. Wir fügen auch später in diesem Tutorial ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint-Worklet zu verwenden, müssen wir es mithilfe von [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einbinden, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Das Setup und Design unseres Paint-Worklets fand im oben gezeigten externen Skript statt. Wir müssen dieses [`worklet`](/de/docs/Web/API/Worklet) von unserem Hauptskript aus registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()` Methode des Paint-Worklets in einem `<script>` im Haupt-HTML oder in einer externen JavaScript-Datei, die aus dem Dokument verlinkt ist, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel wird das Paint-Worklet neben der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS-Funktion `paint()` wie jedes andere `<image>`-Typ, mit demselben String-Identifikator, den wir in der `registerPaint()` Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(header-highlight);
}
```

### Zusammenfügen

Wir können dann die fancy-Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel sieht in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), so aus wie das oben dargestellte Bild.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir einen 20x200 Einheiten großen Kasten erstellt, der 15 Einheiten von oben auf das Element gemalt wird. Es ist unabhängig von der Größe des Elements gleich. Wenn der Text klein ist, sieht der gelbe Kasten wie ein riesiger Unterstrich aus. Wenn der Text groß ist, sieht der Kasten möglicherweise wie ein Balken über den ersten drei Buchstaben aus. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre. Wir können die Eigenschaft `paintSize` des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50 % der Höhe und 60 % der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das 3. Beispiel hat `width: 50%`; auf das Blockelement gesetzt, wodurch das Element schmaler und somit das Hintergrundbild schmaler wird.

### Das Paint-Worklet

Der Code, um dies zu erreichen, sieht folgendermaßen aus:

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

Dieses Code-Beispiel hat zwei Unterschiede zu unserem ersten Beispiel:

1. Wir haben ein zweites Argument hinzugefügt, nämlich die Größe des Elements.
2. Wir haben die Dimensionen und die Positionierung unseres Rechtecks so geändert, dass sie relativ zur Größe der Box-Elemente sind, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter in die `paint()` Funktion übergeben, um Zugriff auf die Breite und Höhe des Elements zu erhalten, über die `.width` und `.height` Eigenschaften.

Unsere Überschrift hat nun ein Highlight, das sich entsprechend ihrer Größe ändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu verändern.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im untenstehenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch auf CSS-Benutzereigenschaften und reguläre CSS-Eigenschaften zugreifen.

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

Die drei Parameter der `paint()` Funktion umfassen den Zeichenkontext, die Größe des Malens und die Eigenschaften. Um Zugriff auf Eigenschaften zu haben, fügen wir die statische `inputProperties()` Methode hinzu, die einen Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulärer und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und ein {{jsxref("Array", "Array", "", 1)}} mit Eigenschaftsnamen zurückgibt. Wir werden uns `inputArguments` im letzten Abschnitt ansehen.

Lassen Sie uns eine Liste von Elementen mit einem Hintergrundbild erstellen, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und Farbe des Hintergrundbildes ändern sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--box-color` und `--width-subtractor`.

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

Wir haben die Methode `inputProperties()` in der `registerPaint()` Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf ein Element angewendet werden, das `boxbg` hat, und sie dann in unserer `paint()` Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

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

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbildes zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Komplexität hinzufügen

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Weise mit bestehenden CSS-Eigenschaften nachbilden könnten, z. B. durch Positionierung eines dekorativen [generierten Inhalts](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before`, oder durch Einfügen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und mächtig macht, ist, dass Sie komplexe Bilder erstellen können, Variablen übergeben, die automatisch in ihrer Größe angepasst werden.

Lassen Sie uns einen Blick auf ein komplexeres Paint-Beispiel werfen.

### Das Paint-Worklet

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

### Verwendung des Paint-Worklets

Wir können dann ein kleines HTML erstellen, das dieses Bild als Hintergrund akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables) `--high-color`.

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

Und wir registrieren unser Worklet

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML spielen. Vielleicht versuchen Sie, {{cssxref("scale")}} und {{cssxref("rotate")}} auf den Headers anzuwenden?

Sie könnten versuchen, die Hintergrundbilder oben ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede verschiedene Farbe, die Sie erstellen möchten, einen unterschiedlichen, ziemlich komplexen linearen Verlauf deklarieren. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, mit verschiedenen in diesem Fall übergebenen Farben.

## Übergabe von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Experimentelle Web-Platform-Features-Flag in Chrome oder Edge aktiviert wird, indem Sie `about://flags` aufrufen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()` Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten unseren Hintergrund manchmal umranden, anstatt ihn zu füllen — lassen Sie uns ein zusätzliches Argument für diesen Fall übergeben.

```css
li {
  background-image: paint(hollow-highlights, stroke);
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

Wir können auch angeben, dass wir einen bestimmten Typ von Argument wollen.

Angenommen, wir fügen ein zweites Argument hinzu, das angibt, wie viele Pixel breit wir den Strich haben möchten:

```css
li {
  background-image: paint(hollow-highlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten `get`, können wir speziell nach einer `<length>` Einheit fragen.

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

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, z. B. eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) aufrufen, indem wir das Schlüsselwort des Wertetyps verwenden, wenn wir es in der `registerPaint()` Funktion abrufen.

Jetzt können wir auf die Eigenschaften des Typs und des Werts zugreifen, was bedeutet, dass wir direkt die Anzahl der Pixel und einen Zahlentyp erhalten können. (Zugegeben, `ctx.lineWidth` nimmt einen float als Wert an, anstatt eines Wertes mit Längeneinheiten, aber der Beispiel möchte dies verdeutlichen…)

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

Es ist erwähnenswert, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Kontrolle verschiedener Teile dieses Worklets und den hier dargelegten Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und in der Tat alle Eigenschaften auf der Weise, wie ein Stil angewandt wird) sind global — sie können anderswo innerhalb unseres CSS (und JS) verwendet werden.

Sie haben vielleicht zum Beispiel eine `--main-color`, die nützlich wäre, um die Farbe innerhalb einer `paint()` Funktion festzulegen, aber auch verwendet werden kann, um Farben anderswo in Ihrem CSS festzulegen. Wenn Sie es speziell für Paint ändern wollten, könnte es sich als schwierig erweisen. Dies ist der Punkt, an dem das benutzerdefinierte Argument-Feature nützlich wird. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente zum Kontrollieren dessen, was Sie tatsächlich zeichnen, festgelegt werden, während Eigenschaften zum Kontrollieren des Stylings festgelegt werden.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne ist gefüllt.](hollowfilled.png)

Jetzt können wir wirklich die Vorteile dieser API sehen. Wenn wir eine Vielzahl von Zeichenparametern aus unserem CSS durch beide benutzerdefinierten Eigenschaften und zusätzliche `paint()` Funktionsargumente steuern können, können wir wirklich anfangen, wiederverwendbare und hochkontrollierbare Stilfunktionen zu erstellen.

### Das Paint-Worklet

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

### Verwendung des Paint-Worklets

Wir können verschiedene Farben, Strichbreiten festlegen und auswählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

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
