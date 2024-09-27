---
title: Verwendung der CSS Painting API
slug: Web/API/CSS_Painting_API/Guide
l10n:
  sourceCommit: c7edf2734fccb185c5e93ee114ea3d5edc0177b5
---

{{DefaultAPISidebar("CSS Painting API")}}
Die [CSS Paint API](/de/docs/Web/API/CSS_Painting_API) ermöglicht es Entwicklern, programmgesteuert Bilder zu definieren, die überall dort verwendet werden können, wo ein CSS-Bild aufgerufen werden kann, wie zum Beispiel CSS [`background-image`](/de/docs/Web/CSS/background-image), [`border-image`](/de/docs/Web/CSS/border-image-source), [`mask-image`](/de/docs/Web/CSS/mask-image) usw.

Um programmgesteuert ein Bild zu erstellen, das durch ein CSS-Stylesheet verwendet wird, müssen wir einige Schritte durchlaufen:

1. Definieren Sie ein Paint Worklet mithilfe der [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) Funktion.
2. Registrieren Sie das Worklet.
3. Fügen Sie die `{{cssxref("image/paint","paint()")}}` CSS-Funktion ein.

Um diese Schritte näher zu erläutern, beginnen wir mit der Erstellung eines halb-hervorgehobenen Hintergrunds, wie in diesem Header:

![Text, der 'My Cool Header' liest, mit einem soliden gelben Hintergrundbildblock auf den unteren zwei Dritteln des Headers](mycoolheader.png)

> [!NOTE]
> Den vollständigen Quellcode für alle Beispiele in diesem Artikel finden Sie unter [https://github.com/mdn/dom-examples/tree/main/css-painting](https://github.com/mdn/dom-examples/tree/main/css-painting), und die Beispiele laufen live unter [https://mdn.github.io/dom-examples/css-painting/](https://mdn.github.io/dom-examples/css-painting/).

## CSS Paint Worklet

In einer externen Skriptdatei verwenden wir die [`registerPaint()`](/de/docs/Web/API/PaintWorkletGlobalScope/registerPaint) Funktion, um unser [CSS Paint Worklet](/de/docs/Web/API/Worklet) zu benennen. Es nimmt zwei Parameter entgegen. Der erste ist der Name, den wir dem Worklet geben — dies ist der Name, den wir in unserem CSS als Parameter der `paint()` Funktion verwenden, wenn wir dieses Styling auf ein Element anwenden möchten. Der zweite Parameter ist die Klasse, die den gesamten Zauber vollbringt, indem sie die Kontextoptionen und das zu malende Objekt auf die zweidimensionale Leinwand definiert, die unser Bild sein wird.

In diesem Klassenbeispiel haben wir eine einzige Kontextoption mit der `contextOptions()` Funktion definiert: Wir haben ein einfaches Objekt zurückgegeben, das angibt, dass Alphatransparenz erlaubt ist.

Wir haben dann die `paint()` Funktion verwendet, um auf unsere Leinwand zu malen.

Eine `paint()` Funktion kann drei Argumente übernehmen. Hier haben wir ein Argument bereitgestellt: den Rendering-Kontext (später werden wir noch mehr betrachten), der oft mit dem Variablennamen `ctx` bezeichnet wird. Der 2D-Rendering-Kontext ist ein Teil der [HTML Canvas API](/de/docs/Web/API/Canvas_API); die Version, die Houdini zur Verfügung steht (genannt `PaintRenderingContext2D`), ist ein noch kleinerer Teil, der die meisten der im vollständigen Canvas API verfügbaren Funktionen enthält, mit der [Ausnahme](https://drafts.css-houdini.org/css-paint-api-1/#2d-rendering-context) der APIs `CanvasImageData`, `CanvasUserInterface`, `CanvasText`, und `CanvasTextDrawingStyles`.

Wir definieren die [`fillStyle`](/de/docs/Web/API/CanvasRenderingContext2D/fillStyle) als `hsl(55 90% 60% / 100%)`, was ein Gelbton ist, und rufen dann `fillRect()` auf, um ein Rechteck dieser Farbe zu erstellen. Die Parameter von [`fillRect()`](/de/docs/Web/API/CanvasRenderingContext2D/fillRect) sind in der Reihenfolge der Ursprung der x-Achse, Ursprung der y-Achse, Breite und Höhe. `fillRect(0, 15, 200, 20)` führt zur Erstellung eines Rechtecks, das 200 Einheiten breit und 20 Einheiten hoch ist, 0 Einheiten von links und 15 Einheiten von oben der Inhaltbox positioniert.

Wir können die CSS-Eigenschaften [`background-size`](/de/docs/Web/CSS/background-size) und [`background-position`](/de/docs/Web/CSS/background-position) verwenden, um diese Hintergrundgrafik zu vergrößern oder zu verschieben, aber dies ist die standardmäßige Größe und Platzierung des gelben Kastens, den wir in unserem Paint Worklet erstellt haben.

Wir haben versucht, das Beispiel einfach zu halten. Für weitere Optionen sehen Sie sich die [canvas-Dokumentation](/de/docs/Web/HTML/Element/canvas) an. Wir fügen später in diesem Tutorial ein wenig Komplexität hinzu.

## Registrierung des Worklets

Um das Paint Worklet zu verwenden, müssen wir es mit [`addModule()`](/de/docs/Web/API/Worklet/addModule) registrieren und in unser CSS einfügen, wobei sichergestellt wird, dass der CSS-Selektor mit einem DOM-Knoten in unserem HTML übereinstimmt.

Die Einrichtung und das Design unseres Paint Worklets fanden im oben gezeigten externen Skript statt. Wir müssen dieses [Worklet](/de/docs/Web/API/Worklet) aus unserem Hauptskript registrieren.

Dies kann durch Verwendung der `addModule()` Methode des Paint Worklets in einem `<script>` innerhalb des Haupt-HTML oder in einer externen JavaScript-Datei, die vom Dokument verlinkt ist, geschehen.

## Verwendung des Paint Worklets

In unserem Beispiel wird das Paint Worklet zusammen mit der Hauptskriptdatei gespeichert. Um es zu verwenden, registrieren wir es zuerst:

### Referenzieren des Paint Worklets in CSS

Sobald wir ein registriertes Paint Worklet haben, können wir es in CSS verwenden. Verwenden Sie die CSS `paint()` Funktion, wie wir es bei jedem anderen `<image>` Typ tun würden, mit demselben Zeichenfolgenbezeichner, den wir in der `registerPaint()` Funktion des Paint Worklets verwendet haben.

### Zusammenstellen

Wir können dann die Fancy-Klasse zu jedem Element auf der Seite hinzufügen, um einen gelben Kasten als Hintergrund hinzuzufügen:

Das folgende Beispiel sieht in [Browsern, die die CSS Painting API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility) aus wie das obige Bild.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-fixed-size/", 120, 120)}}

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `background-size` und `background-position` ändern, um die Größe und Position des Hintergrundbildes zu verändern.

## PaintSize

Im obigen Beispiel haben wir eine 20x200-Einheiten-Box erstellt, die 15 Einheiten vom oberen Rand des Elements gemalt wurde, unabhängig von der Größe des Elements. Wenn der Text klein ist, sieht der gelbe Kasten wie ein riesiges Unterstreichung aus. Wenn der Text riesig ist, könnte der Kasten wie eine Leiste über den ersten drei Buchstaben aussehen. Es wäre besser, wenn das Hintergrundbild relativ zur Größe des Elements wäre — wir können die `paintSize` Eigenschaft des Elements verwenden, um sicherzustellen, dass das Hintergrundbild proportional zur Größe des Boxmodells des Elements ist.

![Der Hintergrund ist 50% der Höhe und 60% der Breite des Elements](mycoolheadersized.png)

In dem obigen Bild ist der Hintergrund proportional zur Größe des Elements. Das 3. Beispiel hat `width: 50%`; auf das Blockelement gesetzt, wodurch das Element schmaler und damit das Hintergrundbild schmaler wird.

### Das Paint Worklet

Der Code dazu sieht so aus:

Dieser Codebeispiel weist zwei Unterschiede zu unserem ersten Beispiel auf:

1. Wir haben ein zweites Argument eingeführt, das die Größe des Paints angibt.
2. Wir haben die Dimensionen und Positionierung unseres Rechtecks verändert, um relativ zur Größe des Elementkastens zu sein, anstatt absolute Werte zu verwenden.

Wir können den zweiten Parameter in die `paint()` Funktion einfügen, um Zugriff auf die Breite und Höhe des Elements über die Eigenschaften `.width` und `.height` zu erhalten.

Unser Header hat jetzt ein Highlight, das sich entsprechend seiner Größe ändert.

### Nutzung des Paint Worklets

#### HTML

#### CSS

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die `font-size` und `width` des Elements ändern, um die Größe des Hintergrundbildes zu verändern.

#### JavaScript

#### Ergebnis

In [Browsern, die die CSS Paint API unterstützen](/de/docs/Web/API/CSS/paintWorklet_static#browser_compatibility), sollten die Elemente im folgenden Beispiel gelbe Hintergründe proportional zu ihrer Schriftgröße erhalten.

{{EmbedGHLiveSample("dom-examples/css-painting/half-highlight-paintsize", 200, 200)}}

## Benutzerdefinierte Eigenschaften

Zusätzlich zum Zugriff auf die Größe des Elements kann das Worklet auch auf benutzerdefinierte CSS-Eigenschaften und reguläre CSS-Eigenschaften zugreifen.

Die drei Parameter der `paint()` Funktion umfassen den Zeichnungskontext, die Größe des Paints und die Eigenschaften. Um auf die Eigenschaften zugreifen zu können, fügen wir die statische `inputProperties()` Methode hinzu, die Zugriff auf CSS-Eigenschaften, einschließlich regulärer Eigenschaften und [benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/CSS_cascading_variables), bietet und ein {{jsxref("Array", "Array")}} von Eigenschaftsnamen zurückgibt. Wir werden `inputArguments` im letzten Abschnitt betrachten.

Erstellen wir eine Liste von Elementen mit einem Hintergrundbild, das zwischen drei verschiedenen Farben und drei Breiten rotiert.

![Die Breite und Farbe des Hintergrundbildes ändert sich basierend auf den benutzerdefinierten Eigenschaften](boxbg.png)

Um dies zu erreichen, definieren wir zwei benutzerdefinierte CSS-Eigenschaften, `--boxColor` und `--widthSubtractor`.

### Das Paint Worklet

In unserem Worklet können wir auf diese benutzerdefinierten Eigenschaften verweisen.

Wir haben die `inputProperties()` Methode in der `registerPaint()` Klasse verwendet, um die Werte von zwei benutzerdefinierten Eigenschaften zu erhalten, die auf ein Element angewendet werden, das `boxbg` hat, und dann diese innerhalb unserer `paint()` Funktion verwendet. Die `inputProperties()` Methode kann alle Eigenschaften zurückgeben, die das Element beeinflussen, nicht nur benutzerdefinierte Eigenschaften.

### Nutzung des Paint Worklets

#### HTML

#### CSS

In unserem CSS definieren wir die benutzerdefinierten Eigenschaften `--boxColor` und `--widthSubtractor`.

#### JavaScript

In unserem `<script>` registrieren wir das Worklet:

#### Ergebnis

Während Sie das Skript des Worklets nicht bearbeiten können, können Sie die Werte der benutzerdefinierten Eigenschaften in den DevTools ändern, um die Farben und die Breite des Hintergrundbilds zu ändern.

{{EmbedGHLiveSample("dom-examples/css-painting/custom-properties/", '100%', 400)}}

## Komplexität hinzufügen

Die obigen Beispiele mögen nicht sehr aufregend erscheinen, da Sie sie auf verschiedene Weisen mit bestehenden CSS-Eigenschaften nachbilden könnten, z.B. durch das Positionieren von dekorativem [generierten Inhalt](/de/docs/Learn/CSS/Howto/Generated_content) mit `::before,` oder durch die Einbindung von `background: linear-gradient(yellow, yellow) 0 15px / 200px 20px no-repeat;` Was die CSS Painting API so interessant und mächtig macht, ist, dass Sie komplexe Bilder erstellen können, die Variablen verwenden und sich automatisch anpassen können.

Werfen wir einen Blick auf ein komplizierteres Paintexemplar.

### Das Paint Worklet

### Nutzung des Paint Worklets

Wir können dann ein wenig HTML erstellen, das dieses Bild als Hintergrundbilder akzeptieren wird:

Wir geben jedem Header einen anderen Wert für die [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/CSS_cascading_variables) `--highColor`

Und wir registrieren unser Worklet

Das Ergebnis sieht so aus:

{{EmbedGHLiveSample("dom-examples/css-painting/fancy-header-highlight/", 200, 200)}}

Während Sie das Worklet selbst nicht bearbeiten können, können Sie mit dem CSS und HTML herumspielen. Vielleicht versuchen Sie [`float`](/de/docs/Web/CSS/float) und [`clear`](/de/docs/Web/CSS/clear) bei den Headern?

Sie könnten versuchen, die Hintergrundbilder oben ohne die CSS Paint API zu erstellen. Es ist machbar, aber Sie müssten für jede unterschiedliche Farbe, die Sie erstellen möchten, einen anderen, ziemlich komplexen linearen Verlauf deklarieren. Mit der CSS Paint API kann ein Worklet wiederverwendet werden, mit verschiedenen Farben, die in diesem Fall übergeben werden.

## Übergeben von Parametern

> [!NOTE]
> Das folgende Beispiel erfordert, dass das Experimental Web Platform Features-Flag in Chrome oder Edge aktiviert wird, indem Sie `about://flags` besuchen.

Mit der CSS Paint API haben wir nicht nur Zugriff auf benutzerdefinierte Eigenschaften und reguläre Eigenschaften, sondern wir können auch benutzerdefinierte Argumente an die `paint()` Funktion übergeben.

Wir können diese zusätzlichen Argumente hinzufügen, wenn wir die Funktion im CSS aufrufen. Angenommen, wir möchten manchmal unseren Hintergrund stricheln anstatt füllen — lassen Sie uns ein zusätzliches Argument für diesen Anlass übergeben.

Jetzt können wir die `inputArguments()` Methode in der `registerPaint()` Klasse verwenden, um auf das benutzerdefinierte Argument zuzugreifen, das wir unserer `paint()` Funktion hinzugefügt haben.

Dann haben wir Zugriff auf dieses Argument.

Wir können auch angeben, dass wir einen bestimmten Argumenttyp wünschen.

Angenommen, wir fügen ein zweites Argument hinzu, das angibt, wie viele Pixel breit wir den Strich wünschen:

Wenn wir unsere Liste von Argumentwerten `abrufen`, können wir speziell nach einer `<length>` Einheit fragen.

In diesem Fall haben wir speziell das `<length>` Attribut angefordert. Das erste Element in dem zurückgegebenen Array wird ein [`CSSUnparsedValue`](/de/docs/Web/API/CSSUnparsedValue) sein. Das zweite wird ein [`CSSStyleValue`](/de/docs/Web/API/CSSStyleValue) sein.

Wenn das benutzerdefinierte Argument ein CSS-Wert ist, zum Beispiel eine Einheit, können wir die Typed OM CSSStyleValue Klasse (und Unterklassen) durch den Verwendung des Werttyp-Schlüsselwortes auslösen, wenn wir es in der `registerPaint()` Funktion abrufen.

Jetzt können wir auf die Typ- und Wert-Eigenschaften zugreifen, was bedeutet, dass wir die Anzahl der Pixel und ein Zahlentyp direkt aus der Box erhalten können. (Zugegeben, `ctx.lineWidth` nimmt einen Float als Wert anstelle eines Wertes mit Längeneinheiten, aber zum Beispiel...)

Es ist erwähnenswert, den Unterschied zwischen der Verwendung von benutzerdefinierten Eigenschaften zur Steuerung verschiedener Teile dieses Worklets und den hier dargelegten Argumenten zu beachten. Benutzerdefinierte Eigenschaften (und tatsächlich alle Eigenschaften auf der Stilkarte) sind global — sie können auch anderswo in unserem CSS (und JS) verwendet werden.

Sie könnten beispielsweise eine `--mainColor` haben, die nützlich sein kann, um die Farbe innerhalb einer `paint()` Funktion festzulegen, aber auch für die Festlegung von Farben anderswo in Ihrem CSS verwendet werden kann. Wenn Sie es nur für Paint ändern möchten, könnte es sich als schwierig erweisen. Hier kommt die benutzerdefinierte Argumentfunktion ins Spiel. Eine andere Möglichkeit, darüber nachzudenken, ist, dass Argumente zum Steuern dessen vorgesehen sind, was Sie tatsächlich zeichnen, während Eigenschaften zum Steuern des Stylings vorgesehen sind.

![Die Listenelemente haben ein Hintergrundbild, das entweder pink, lila oder grün ist, mit unterschiedlichen Strichbreiten, und das grüne ist gefüllt.](hollowfilled.png)

Jetzt können wir wirklich die Vorteile dieser API sehen, wenn wir eine Vielzahl von Zeichnungsparametern über unser CSS durch sowohl benutzerdefinierte Eigenschaften als auch zusätzliche `paint()` Funktionsargumente steuern können, dann können wir wirklich beginnen, wiederverwendbare und hochgradig steuerbare Stylingfunktionen zu erstellen.

### Das Paint Worklet

### Nutzung des Paint Worklets

Wir können verschiedene Farben, Strichbreiten festlegen und wählen, ob das Hintergrundbild gefüllt oder hohl sein soll:

In unserem `<script>` registrieren wir das Worklet:

{{EmbedGHLiveSample("dom-examples/css-painting/hollow-highlight", 400, 400)}}

## Siehe auch

- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model API](/de/docs/Web/API/CSS_Typed_OM_API)
