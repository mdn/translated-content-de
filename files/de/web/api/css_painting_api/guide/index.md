---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("CSS Painting API")}}
Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ermöglicht es Entwicklern, programmgesteuert Bilder zu definieren, die überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie z.B. CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um programmgesteuert ein Bild zu erstellen, das von einem CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint-Worklet mit der Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint)
2. Registrieren Sie das Worklet
3. Integrieren Sie die `{{cssxref("image/paint","paint()")}}`-CSS-Funktion

Um diese Schritte zu erläutern, beginnen wir mit der Erstellung eines halb hervorzuhebenden Hintergrunds, wie bei dieser Überschrift:

![Text 'My Cool Header' mit einem soliden gelben Hintergrundbildblock unten links auf zwei Dritteln der Überschrift](mycoolheader.png)

> [!NOTE]
> Der vollständige Quellcode für alle Beispiele in diesem Artikel ist unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting) zu finden, und die Beispiele laufen live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die Funktion [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint), um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Diese Funktion nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben - dieser wird als Parameter der `paint()`-Funktion in unserem CSS verwendet, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die den gesamten Zauber bewirkt, indem sie die Kontextoptionen und das zu malende Bild auf der zweidimensionalen Leinwand definiert, die unser Bild sein wird.

```js
registerPaint(
  "headerHighlight",
  class {
    /*
       definieren, ob Alphatransparenz erlaubt ist; Alpha
       ist standardmäßig auf true gesetzt. Wenn auf false gesetzt, werden alle
       auf der Leinwand verwendeten Farben vollständig undurchsichtig sein
    */
    static get contextOptions() {
      return { alpha: true };
    }

    /*
        ctx ist der 2D-Zeichnungskontext
        ein Teilmenge der HTML-Canvas-API.
    */
    paint(ctx) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, 15, 200, 20); /* Reihenfolge: x, y, w, h */
    }
  },
);
```

In diesem Klassenbeispiel haben wir eine einzige Kontextoption mit der Funktion `contextOptions()` definiert: Wir haben ein einfaches Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die `paint()`-Funktion verwendet, um auf unserer Leinwand zu malen.

Eine `paint()`-Funktion kann drei Argumente annehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (wir werden später mehr dazu erfahren), der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Teil der [HTML-Canvas-API](/de/docs/Web/API/Canvas_API); die in Houdini verfügbare Version (genannt `PaintRenderingContext2D`) ist eine weitere Teilmenge, die die meisten der in der vollständigen Canvas-API verfügbaren Funktionen enthält, mit Ausnahme der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der APIs `CanvasImageData`, `CanvasUserInterface`, `CanvasText` und `CanvasTextDrawingStyles`.

Wir definieren die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was einen Gelbton darstellt, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge: x-Achse-Ursprung, y-Achse-Ursprung, Breite und Höhe. `fillRect(0, 15, 200, 20)` erstellt ein Rechteck, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten vom linken und 15 Einheiten vom oberen Rand des Inhaltskastens entfernt positioniert.

Wir können die CSS-Eigenschaften [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) verwenden, um dieses Hintergrundbild neu zu skalieren oder neu zu positionieren, aber dies ist die Standardgröße und Platzierung des gelben Kastens, den wir in unserem Paint-Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen, schauen Sie sich die [Canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas) an. Später in diesem Tutorial fügen wir noch eine kleine Komplexität hinzu.

## Worklet registrieren

Um das Paint-Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einbinden, wobei sichergestellt wird, dass der CSS-Selektor einem DOM-Knoten in unserem HTML entspricht.

Die Einrichtung und das Design unseres Paint-Worklets fand im obigen externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

```js
CSS.paintWorklet.addModule("nameOfPaintWorkletFile.js");
```

Dies kann mit der `addModule()`-Methode des Paint-Worklets in einem `<script>` innerhalb des Haupt-HTMLs oder in einer externen JavaScript-Datei, die vom Dokument verlinkt ist, erfolgen.

## Verwendung des Paint-Worklets

In unserem Beispiel wird das Paint-Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zuerst:

```js
CSS.paintWorklet.addModule("header-highlight.js");
```

### Referenzieren des Paint-Worklets in CSS

Sobald wir ein registriertes Paint-Worklet haben, können wir es in CSS verwenden. Nutzen Sie die CSS-`paint()`-Funktion wie bei jedem anderen `<image>`-Typ, wobei Sie denselben String-Identifikator verwenden, den wir in der `registerPaint()`-Funktion des Paint-Worklets verwendet haben.

```css
.fancy {
  background-image: paint(headerHighlight);
}
```

### Zusammensetzen

Wir können dann die fancy-Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

```html
<h1 class="fancy">My Cool Header</h1>
```

Das folgende Beispiel wird in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), wie das obige Bild aussehen.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie die `background-size` und `background-position` ändern, um die Größe und den Standort des Hintergrundbilds zu ändern.

## PaintSize

Im obigen Beispiel haben wir ein 20x200-Einheiten-Feld erstellt, das 15 Einheiten vom oberen Rand des Elements gemalt wurde, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht der gelbe Kasten wie eine riesige Unterstreichung aus. Wenn der Text groß ist, könnte der Kasten wie ein Balken über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre – wir können die `paintSize`-Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

Im obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das dritte Beispiel hat `width: 50%`; auf das Blockelement gesetzt, was das Element schmaler und damit das Hintergrundbild schmaler macht.

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
    ctx ist der 2D-Zeichnungskontext
    size ist das paintSize, die Dimensionen (Höhe und Breite) des zu malenden Kastens
  */
    paint(ctx, size) {
      ctx.fillStyle = "hsl(55 90% 60% / 100%)";
      ctx.fillRect(0, size.height / 3, size.width * 0.4, size.height * 0.6);
    }
  },
);
```

Dieses Codebeispiel weist zwei Unterschiede zu unserem ersten Beispiel auf:

1. Wir haben ein zweites Argument hinzugefügt, das die Malgröße ist.
2. Wir haben die Dimensionen und die Positionierung unseres Rechtecks geändert, um relativ zur Größe des Elementkastens anstelle von absoluten Werten zu sein.

Wir können das zweite Parameter in die `paint()`-Funktion übergeben, um Zugriff auf die Breite und die Höhe des Elements über die `.width` und `.height` Eigenschaften zu erhalten.

Unser Header hat jetzt ein Highlight, das sich je nach Größe ändert.

### Verwendung des Paint-Worklets

#### HTML

```html
<h1 class="fancy">Largest Header</h1>
<h6 class="fancy">Smallest Header</h6>
<h3 class="fancy half">50% width header</h3>
```

#### CSS

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbilds zu ändern.

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

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im Beispiel unten gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Anpassungseigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch Zugriff auf CSS-Anpassungseigenschaften und reguläre CSS-Eigenschaften haben.

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
      // Farbcode hier einfügen.
    }
  },
);
```

Die drei Parameter der `paint()`-Funktion umfassen den Zeichnungskontext, die Malgröße und die Eigenschaften. Um auf die Eigenschaften zugreifen zu können, schließen wir die `inputProperties()`-Methode ein, die Live-Zugriff auf CSS-Eigenschaften bietet, einschließlich regulären Eigenschaften und [Anpassungseigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), und gibt ein {{jsxref("Array", "Array")}} von Eigenschaftsnamen zurück. Wir werden `inputArguments` im letzten Abschnitt betrachten.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten wechselt.

![Die Breite und Farbe des Hintergrundbilds ändert sich basierend auf den Anpassungseigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint-Worklet

In unserem Worklet können wir auf diese Anpassungseigenschaften zugreifen.

```js
registerPaint(
  "boxbg",
  class {
    static get contextOptions() {
      return { alpha: true };
    }

    /*
     Verwenden Sie diese Funktion, um alle Anpassungseigenschaften (oder regulären Eigenschaften, wie z.B. 'height')
     für das Element abzurufen, geben Sie sie im angegebenen Array zurück
  */
    static get inputProperties() {
      return ["--boxColor", "--widthSubtractor"];
    }

    paint(ctx, size, props) {
      /*
       ctx -> Zeichnungskontext
       size -> paintSize: Breite und Höhe
       props -> Eigenschaften: get() Methode
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

Wir haben die Methode `inputProperties()` in der `registerPaint()`-Klasse verwendet, um die Werte von zwei Anpassungseigenschaften zu erhalten, die auf einem Element gesetzt sind, das `boxbg` angewendet hat, und diese dann in unserer paint()-Funktion verwendet. Die Methode `inputProperties()` kann alle Eigenschaften zurückgeben, die das Element betreffen, nicht nur Anpassungseigenschaften.

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

Während Sie nicht mit dem Skript des Worklets spielen können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbilds zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Komplexität hinzufügen

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Arten mit vorhandenen CSS-Eigenschaften nachbilden könnten, z.B. durch Positionierung von dekorativem [generierten Inhalt](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before,` oder durch Einbeziehung von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;`. Was die CSS Painting API so interessant und leistungsfähig macht, ist, dass Sie komplexe Bilder erstellen können, variablen übergeben, die automatisch neu skaliert werden.

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
      /* Legen Sie fest, wo das Highlight beginnen soll und die Dimensionen */
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

      /* Erstellen Sie die Striche */
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

Wir können dann ein wenig HTML erstellen, das dieses Bild als Hintergrund akzeptiert:

```html
<h1 class="fancy">Largest Header</h1>
<h3 class="fancy">Medium size header</h3>
<h6 class="fancy">Smallest Header</h6>
```

Wir geben jedem Header einen anderen Wert für die [Anpassungseigenschaft](/de/docs/Web/CSS/CSS_cascading_variables) `--highColor`

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

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und dem HTML experimentieren. Vielleicht versuchen Sie, [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) für die Überschriften zu verwenden?

Sie könnten versuchen, die obigen Hintergrundbilder ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede gewünschte Farbe ein anderes, ziemlich komplexes lineares Gradienten deklarieren. Mit der CSS Paint API kann ein Worklet mehrmals verwendet werden, mit verschiedenen übergebenen Farben in diesem Fall.

## Übergabe von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass das "Experimental Web Platform features"-Flag in Chrome oder Edge durch Aufrufen von `about://flags` aktiviert wird.

Mit der CSS Paint API haben wir nicht nur Zugriff auf Anpassungseigenschaften und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()`-Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion in CSS aufrufen. Sagen wir, wir möchten unseren Hintergrund manchmal umranden, anstatt ihn auszufüllen — lassen Sie uns ein zusätzliches Argument für diesen Fall übergeben.

```css
li {
  background-image: paint(hollowHighlights, stroke);
}
```

Jetzt können wir die Methode `inputArguments()` in der `registerPaint()`-Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir zu unserer `paint()`-Funktion hinzugefügt haben.

```js
static get inputArguments() { return ['*']; }
```

Dann haben wir Zugriff auf dieses Argument.

```js
paint(ctx, size, props, args) {

  // Verwenden Sie unsere benutzerdefinierten Argumente
  const hasStroke = args[0].toString();

  // wenn das Stroke-Argument 'stroke' ist, nicht ausfüllen
  if (hasStroke === 'stroke') {
    ctx.fillStyle = 'transparent';
    ctx.strokeStyle = color;
  }
  // …
}
```

Wir können auch angeben, dass wir einen bestimmten Typ von Argument wünschen.

Angenommen, wir fügen ein zweites Argument hinzu, wie viele Pixel breit wir den Strich haben möchten:

```css
li {
  background-image: paint(hollowHighlights, stroke, 10px);
}
```

Wenn wir unsere Liste von Argumentwerten `get`, können wir speziell nach einer `<length>`-Einheit fragen.

```js
static get inputArguments() { return ['*', '<length>']; }
```

In diesem Fall haben wir speziell nach dem Attribut `<length>` gefragt. Das erste Element im zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die Klassen des Typen OM `CSSStyleValue` (und Unterklassen) aufrufen, indem wir das Wertearten-Schlüsselwort verwenden, wenn wir es in der `registerPaint()`-Funktion abrufen.

Nun können wir auf die Eigenschaften `type` und `value` zugreifen, was bedeutet, dass wir die Anzahl der Pixel und einen Zahlentyp direkt aus dem Kasten erhalten können. (Zu beachten ist, dass `ctx.lineWidth` zwar einen Float als Wert annimmt, anstatt eines Werts mit Längeneinheiten, aber zum Beispiel…)

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

Es ist zu beachten, dass es einen Unterschied zwischen der Verwendung von Anpassungseigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier dargestellten Argumenten gibt. Anpassungseigenschaften (und in der Tat alle Eigenschaften auf der Stilkarte) sind global — sie können anderswo innerhalb unseres CSS (und JS) verwendet werden.

Zum Beispiel könnte man eine `--mainColor` haben, die sinnvoll zum Setzen der Farbe innerhalb einer `paint()`-Funktion wäre, aber auch zur Einstellung von Farben an anderer Stelle in Ihrem CSS verwendet werden kann. Wenn Sie es speziell für Paint ändern möchten, könnte es schwierig sein. Hier kommt die Funktion der benutzerdefinierten Argumente ins Spiel. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente dazu bestimmt sind, das zu steuern, was Sie tatsächlich zeichnen, während Eigenschaften dazu bestimmt sind, das Styling zu steuern.

![Die Listenpunkte haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne ist gefüllt.](hollowfilled.png)

Jetzt können wir wirklich beginnen, die Vorteile dieser API zu erkennen: Wenn wir eine Vielzahl von Zeichnungsparametern aus unserem CSS sowohl über Anpassungseigenschaften als auch über zusätzliche `paint()`-Funktionsargumente steuern können, dann können wir wirklich beginnen, wiederverwendbare und hochgradig kontrollierbare Styling-Funktionen zu erstellen.

### Das Paint-Worklet

```js
registerPaint(
  "hollowHighlights",
  class {
    static get inputProperties() {
      return ["--boxColor"];
    }
    // Eingabeargumente, die an die `paint`-Funktion übergeben werden können
    static get inputArguments() {
      return ["*", "<length>"];
    }

    static get contextOptions() {
      return { alpha: true };
    }

    paint(ctx, size, props, args) {
      // ctx   -> Zeichnungskontext
      // size  -> Größe des zu malenden Kastens
      // props -> Liste der benutzerdefinierten Eigenschaften, die dem Element zur Verfügung stehen
      // args  -> Liste der Argumente, die beim Aufrufen der paint() Funktion im CSS gesetzt wurden

      // wo das Highlight starten und die Dimensionen
      const x = 0;
      const y = size.height * 0.3;
      const blockWidth = size.width * 0.33;
      const blockHeight = size.height * 0.85;

      // die in der paint() Funktion im CSS übergebenen Werte
      const color = props.get("--boxColor");
      const strokeType = args[0].toString();
      const strokeWidth = parseInt(args[1]);

      // den Strichbreite setzen
      ctx.lineWidth = strokeWidth ?? 1.0;
      // den Fülltyp setzen
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

      // Kasten
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(blockWidth, y);
      ctx.lineTo(blockWidth + blockHeight, blockHeight);
      ctx.lineTo(x, blockHeight);
      ctx.lineTo(x, y);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();
      // Striche
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

Wir können verschiedene Farben, Strichbreiten einstellen und entscheiden, ob das Hintergrundbild ausgefüllt oder hohl sein soll:

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
