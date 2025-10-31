---
title: Verwenden der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{DefaultAPISidebar("CSS Painting API")}}

Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ist darauf ausgelegt, Entwicklern zu ermöglichen, programmatisch Bilder zu definieren, die dann überall verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS {{cssxref("background-image")}}, {{cssxref("border-image")}}, {{cssxref("mask-image")}} usw.

Um ein Bild programmatisch zu erstellen, das durch ein CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie eine Paint Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie die Worklet
3. Verwenden Sie die CSS-Funktion {{cssxref('image/paint', 'paint()')}}

Um diese Schritte näher auszuführen, beginnen wir damit, einen halb-hervorgehobenen Hintergrund zu erstellen, wie bei diesem Header:

![Text mit der Aufschrift 'Mein cooler Header' mit einem soliden gelben Hintergrundbildblock unten links auf zwei Dritteln des Headers](mycoolheader.png)

> [!NOTE]
> Siehe [CSS Painting API Beispiel](https://mdn.github.io/dom-examples/css-painting/) für ein vollständiges funktionsfähiges Demo zusammen mit dem [Quellcode](https://github.com/mdn/dom-examples/tree/main/css-painting).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unsere [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Sie nimmt zwei Parameter. Der erste ist der Name, den wir der Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()`-Funktion verwenden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die die ganze Magie bewirkt, indem sie die Kontextoptionen und was auf die zweidimensionale Leinwand, die unser Bild sein wird, zu malen ist, definiert.

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

In diesem Klassbeispiel haben wir eine einzelne Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die `paint()`-Funktion verwendet, um auf unsere Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden später mehr dazu sehen), der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Unterset des [HTML Canvas API](/de/docs/Web/API/Canvas_API); die verfügbare Version für Houdini (genannt `PaintRenderingContext2D`) ist ein weiterer Unterset, der die meisten der im vollen Canvas API verfügbaren Funktionen enthält, mit dem [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles` APIs.

Wir definieren den [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achsen-Ursprung, y-Achsen-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten vom linken und 15 Einheiten vom oberen Rand der Content-Box.

Wir können die CSS-Eigenschaften {{cssxref("background-size")}} und {{cssxref("background-position")}} verwenden, um dieses Hintergrundbild zu ändern oder neu zu positionieren, aber dies ist die Standardgröße und Platzierung des gelben Kastens, den wir in unserem Paint Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen schauen Sie sich die Dokumentation zum {{HTMLElement("canvas")}} an. Wir fügen später in diesem Tutorial auch etwas Komplexität hinzu.

## Registrieren der Worklet

Um die Paint Worklet zu verwenden, müssen wir sie mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS aufnehmen, wobei der CSS-Selektor einem DOM-Knoten in unserem HTML entsprechen muss.

Die Einrichtung und das Design unserer Paint Worklet erfolgte im oben gezeigten externen Skript. Wir müssen diese [`worklet`](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der Methode `addModule()` der Paint Worklet in einem `<script>` innerhalb des Haupt-HTML oder in einer externen JavaScript-Datei geschehen, die von dem Dokument verlinkt wird.

## Verwendung der Paint Worklet

In unserem Beispiel ist die Paint Worklet zusammen mit der Haupt-Skriptdatei gespeichert. Um sie zu verwenden, registrieren wir sie zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren der Paint Worklet in CSS

Sobald wir eine registrierte Paint Worklet haben, können wir sie in CSS verwenden. Verwenden Sie die CSS `paint()`-Funktion wie bei jedem anderen `<image>`-Typ, indem Sie denselben Zeichenketten-Identifikator nutzen, den wir in der `registerPaint()`-Funktion der Paint Worklet verwendet haben.

```css
.fancy {
  background-image: paint(header-highlight);
}
```

### Zusammensetzen

Wir können dann die stilvolle Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird wie das oben gezeigte Bild in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Obwohl Sie nicht mit dem Skript der Worklet spielen können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir einen 20x200 Einheiten großen Kasten erstellt, der 15 Einheiten vom oberen Rand des Elements gemalt wird, egal wie groß das Element ist. Wenn der Text klein ist, sieht der gelbe Kasten wie eine riesige Unterstreichung aus. Wenn der Text groß ist, könnte der Kasten wie eine Bar über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das 3. Beispiel hat `width: 50%`; auf das Blockelement gesetzt, sodass das Element schmaler und damit das Hintergrundbild schmaler wird.

### Die Paint Worklet

Der Code dafür sieht wie folgt aus:

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

Dieses Codebeispiel hat zwei Unterschiede zu unserem ersten Beispiel:

1. Wir haben ein zweites Argument hinzugefügt, das die Paint-Größe ist.
2. Wir haben die Abmessungen und die Positionierung unseres Rechtecks geändert, um relativ zur Größe des Element-Boxmodells statt absolute Werte zu sein.

Wir können den zweiten Parameter in die `paint()`-Funktion übergeben, um Zugriff auf die Breite und Höhe des Elements über die `.width` und `.height` Eigenschaften zu erhalten.

Unser Header hat jetzt eine Hervorhebung, die sich entsprechend seiner Größe ändert.

### Verwendung der Paint Worklet

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Obwohl Sie nicht mit dem Skript der Worklet spielen können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu ändern.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im folgenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße bekommen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zu dem Zugriff auf die Größe des Elements kann die Worklet auch Zugriff auf CSS-Benutzereigenschaften und reguläre CSS-Eigenschaften haben.

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

Die drei Parameter der `paint()`-Funktion umfassen den Zeichnungskontext, die Paint-Größe und die Eigenschaften. Um Zugriff auf Eigenschaften zu haben, fügen wir die statische Methode `inputProperties()` hinzu, die Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und gibt ein {{jsxref("Array", "Array", "", 1)}} von Eigenschaftsnamen zurück. Wir werden im letzten Abschnitt auf [`inputArguments`](#parameter_übergeben) eingehen.

Lassen Sie uns eine Liste von Elementen mit einem Hintergrundbild erstellen, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und Farbe des Hintergrundbildes ändert sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--box-color` und `--width-subtractor`.

### Die Paint Worklet

In unserer Worklet können wir auf diese benutzerdefinierten Eigenschaften verweisen.

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

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften abzurufen, die auf einem Element gesetzt sind, das `boxbg` angewendet hat, und diese dann in unserer `paint()`-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element betreffen, nicht nur benutzerdefinierte Eigenschaften.

### Verwendung der Paint Worklet

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

In unserem `<script>` registrieren wir die Worklet:

```js
CSS.paintWorklet.addModule("boxbg.js");
```

#### Ergebnis

Obwohl Sie nicht mit dem Skript der Worklet spielen können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und Breite des Hintergrundbildes zu verändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Komplexität hinzufügen

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf einige verschiedene Arten mit bestehenden CSS-Eigenschaften nachbilden könnten, z.B. durch das Positionieren von dekorativem [generiertem Inhalt](/de/docs/Learn_web_development/Howto/Solve_CSS_problems/Generated_content) mit `::before`, oder durch Einschließen von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API jedoch so interessant und leistungsstark macht, ist, dass sie es ermöglicht, komplexe Bilder zu erstellen und Variablen zu übergeben, die automatisch skaliert werden.

Lassen Sie uns ein komplexeres Paint-Beispiel ansehen.

### Die Paint Worklet

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

### Verwendung der Paint Worklet

Wir können dann ein wenig HTML erstellen, das dieses Bild als Hintergründe akzeptiert:

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

Und wir registrieren unsere Worklet

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Obwohl Sie die Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML spielen. Vielleicht versuchen Sie {{cssxref("scale")}} und {{cssxref("rotate")}} auf die Header anzuwenden?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten einen anderen, ziemlich komplexen linearen Verlauf für jede unterschiedliche Farbe, die Sie erstellen möchten, deklarieren. Mit der CSS Paint API kann eine Worklet wiederverwendet werden, mit verschiedenen Farben, die in diesem Fall übergeben werden.

## Parameter übergeben

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Flag für experimentelle Webplattform-Features in Chrome oder Edge durch Besuch von `about://flags` aktiviert wird.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte Eigenschaften und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund umranden, anstatt ihn zu füllen — lassen Sie uns ein zusätzliches Argument für diesen Fall übergeben.

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

Wir können auch angeben, dass wir einen bestimmten Argumenttyp wünschen.

Angenommen, wir fügen ein zweites Argument hinzu, wie viele Pixel breit wir den Strich haben möchten:

```css
li {
  background-image: paint(hollow-highlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten abrufen (`get`), können wir speziell nach einer `<length>` Einheit fragen.

```js
class Worklet {
  // …
  static get inputArguments() {
    return ["*", "<length>"];
  }
  // …
}
```

In diesem Fall haben wir speziell nach dem `<length>` Attribut gefragt. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die Typed OM CSSStyleValue-Klasse (und Unterklassen) verwenden, indem wir das Werttyp-Stichwort verwenden, wenn wir es in der `registerPaint()`-Funktion abrufen.

Jetzt können wir auf die Eigenschaften `type` und `value` zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt abrufen können. (Zugegebenermaßen nimmt `ctx.lineWidth` eine Fließkommazahl als Wert anstatt eines Werts mit Längeneinheiten, aber der Beispielhaftigkeit halber…)

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

Es lohnt sich, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieser Worklet und den hier dargestellten Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften auf der Stilkarte) sind global — sie können anderswo innerhalb unseres CSS (und JS) verwendet werden.

Sie könnten zum Beispiel eine `--main-color` haben, die nützlich wäre, um die Farbe innerhalb einer `paint()`-Funktion einzustellen, aber auch zum Einstellen von Farben anderswo im CSS. Wenn Sie es speziell für Paint ändern wollten, könnte es sich als schwierig erweisen. Hier kommt die Funktion für benutzerdefinierte Argumente in nützlich. Ein weiterer Weg, darüber nachzudenken, ist, dass Argumente dazu dienen, was gezeichnet wird, zu steuern, während Eigenschaften dazu dienen, das Styling zu steuern.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten und das grüne ist ausgefüllt.](hollowfilled.png)

Jetzt können wir beginnen, die Vorteile dieser API wirklich zu sehen, wenn wir eine Vielzahl von Zeichenparametern aus unserem CSS über sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()`-Funktionsargumente steuern können, dann können wir wirklich beginnen, wiederverwendbare und hochkontrollierbare Styling-Funktionen zu erstellen.

### Die Paint Worklet

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

### Verwendung der Paint Worklet

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

In unserem `<script>` registrieren wir die Worklet:

```js
CSS.paintWorklet.addModule("hollow.js");
```

{{EmbedGHLiveSample("dom-examples/css-painting/hollow-highlight", 400, 400)}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
