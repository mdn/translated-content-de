---
title: Verwendung von CSS-Custom-Properties (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**Custom Properties** (manchmal als **CSS-Variablen** oder **Kaskadenvariablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden und bestimmte Werte darstellen, die in einem Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}}-At-Regel oder durch [Custom Property-Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Auf Custom Properties wird mit der CSS-Funktion {{cssxref("var", "var()")}} zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites verwenden große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an Hunderten verschiedenen Stellen in Stylesheets zu sehen. Eine solche Farbe zu ändern, wenn sie an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Custom Properties ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, sodass es einfacher ist, damit zu arbeiten. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` verständlicher als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Custom Properties, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}}-At-Regel bietet mehr Kontrolle über die Custom Property und ermöglicht es Ihnen festzulegen, ob sie ihren Wert von einem Elternteil erbt, was der Ausgangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Werts in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von Custom Properties

In CSS können Sie eine Custom Property deklarieren, indem Sie der Property einen Präfix von zwei Bindestrichen voranstellen oder indem Sie die {{cssxref("@property")}}-At-Regel verwenden. Die folgenden Abschnitte beschreiben, wie man diese beiden Methoden verwendet.

### Verwendung eines Präfixes aus zwei Bindestrichen (`--`)

Eine Custom Property, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein beliebiger [gültiger CSS-Wert](/de/docs/Learn/CSS/Building_blocks/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben. Das folgende Beispiel zeigt, wie man eine Custom Property `--main-bg-color` erstellt und einen [benannten Farbwert](/de/docs/Web/CSS/named-color) von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der Selektor, der dem Regelset zugewiesen wird (im obigen Beispiel `<section>`-Elemente), definiert den Bereich, in dem die Custom Property verwendet werden kann. Aus diesem Grund ist es eine gängige Praxis, Custom Properties auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Vielleicht haben Sie einen guten Grund, den Geltungsbereich Ihrer Custom Properties zu begrenzen.

> [!NOTE]
> Custom Property-Namen sind case-sensitiv — `--my-color` wird als separate Custom Property zu `--My-color` behandelt.

### Verwendung der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel ermöglicht es Ihnen, mit der Definition einer Custom Property ausdrucksvoller zu sein, indem Sie in der Lage sind, der Eigenschaft einen Typ zuzuweisen, Standardwerte festzulegen und die Vererbung zu kontrollieren. Das folgende Beispiel erstellt eine Custom Property namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Custom Properties in JavaScript anstatt direkt in CSS definieren oder bearbeiten möchten, gibt es dafür eine entsprechende API. Sie können nachlesen, wie das auf der Seite über die [CSS-Properties und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzieren von Custom Properties mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine Custom Property zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standardwertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Custom Properties

Beginnen wir mit etwas HTML, auf das wir einige Stile anwenden möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige mit verschachtelten Elementen:

```html
<div class="container">
  <div class="one">
    <p>One</p>
  </div>
  <div class="two">
    <p>Two</p>
    <div class="three">
      <p>Three</p>
    </div>
  </div>
  <input class="four" placeholder="Four" />
  <textarea class="five">Five</textarea>
</div>
```

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können). Je nach Klasse geben wir den Elementen `cornflowerblue` oder `aquamarine` Hintergrundfarben:

```css hidden
/* Set fonts, borders and padding */
body {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* For each class, set some colors */
.one {
  background-color: cornflowerblue;
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: cornflowerblue;
}
.four {
  background-color: cornflowerblue;
}
.five {
  background-color: cornflowerblue;
}
```

Das ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es besteht die Möglichkeit, Custom Properties zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen. Nachdem `--main-bg-color` im `.container`-Bereich definiert und sein Wert an mehreren Stellen referenziert wurde, sehen die aktualisierten Stile so aus:

```css
/* Define --main-bg-color here */
.container {
  --main-bg-color: cornflowerblue;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

## Verwendung der :root Pseudoklasse

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problems lösen zu lassen. Bei nicht-trivialen Projekten ist dies nicht immer möglich. Durch die Deklaration einer Custom Property auf der {{cssxref(":root")}}-Pseudoklasse und ihre Verwendung an den benötigten Stellen im Dokument kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

```css
/* Define --main-bg-color here */
:root {
  --main-bg-color: cornflowerblue;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}
.two {
  color: black;
  background-color: aquamarine;
}
.three {
  background-color: var(--main-bg-color);
}
.four {
  background-color: var(--main-bg-color);
}
.five {
  background-color: var(--main-bg-color);
}
```

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, aber ermöglicht eine einzige kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Custom Properties

Eine Custom Property, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel gezeigt:

```html live-sample___dash-custom-property-inheritance
<div class="one">
  <p>One</p>
  <div class="two">
    <p>Two</p>
    <div class="three"><p>Three</p></div>
    <div class="four"><p>Four</p></div>
  </div>
</div>
```

```css hidden live-sample___dash-custom-property-inheritance
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.one {
  height: 250px;
}

.two {
  height: 80%;
}

.three {
  height: 40%;
}

.four {
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--box-color);
}

.two {
  --box-color: cornflowerblue;
}

.three {
  --box-color: aquamarine;
}
```

{{embedlivesample("dash-custom-property-inheritance", "100%", "280px")}}

Die Ergebnisse von `var(--box-color)` hängen von der Vererbung ab und sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Custom Property ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (vom Elternteil vererbt)

Ein Aspekt von Custom Properties, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in der Regel eines Geschwisters oder Nachkommen zu erhalten. Die Eigenschaft wird nur für den passenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property`-At-Regel erlaubt es Ihnen, explizit anzugeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine Custom Property unter Verwendung der `@property`-At-Regel. Die Vererbung ist deaktiviert, eine [`<color>`](/de/docs/Web/CSS/color_value)-Datentypdefinition ist eingerichtet und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelt-Bindestrich-Syntax definiert wäre).

```html live-sample___at-property-inheritance
<div class="parent">
  <p>Parent element</p>
  <div class="child">
    <p>Child element with inheritance disabled for --box-color.</p>
  </div>
</div>
```

```css hidden live-sample___at-property-inheritance
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css live-sample___at-property-inheritance
@property --box-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

.parent {
  --box-color: green;
  background-color: var(--box-color);
}

.child {
  width: 80%;
  height: 40%;
  background-color: var(--box-color);
}
```

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color`-Property nicht innerhalb des `.child`-Bereichs deklariert ist, wird der Anfangswert `cornflowerblue` verwendet und nicht `green`, das vom Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Custom Properties

Sie können Fallback-Werte für Custom Properties mithilfe der `var()`-Funktion und des `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Custom-Properties nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht helfen würde. Fallbacks decken den Fall ab, in dem der Browser CSS-Custom-Properties unterstützt und einen anderen Wert verwenden kann, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Definieren von Fallbacks in der `var()`-Funktion

Unter Verwendung der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Custom Property. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Custom Property ungültig ist. Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

```css
.one {
  /* Red if --my-var is not defined */
  color: var(--my-var, red);
}

.two {
  /* pink if --my-var and --my-background are not defined */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Invalid: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

Einbinden eines Custom Properties als Fallback, wie im zweiten Beispiel oben gezeigt (`var(--my-var, var(--my-background, pink))`), ist der korrekte Weg, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Leistungsauswirkungen dieser Methode bewusst sein, da es mehr Zeit in Anspruch nimmt, die verschachtelten Variablen zu analysieren.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie die von [Custom Properties](https://www.w3.org/TR/css-variables/#custom-property), Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property`-Anfangswertes

Abgesehen von der Verwendung von `var()` kann der in der `@property`-At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

Im folgenden Beispiel wird ein Anfangswert von `--box-color` auf `cornflowerblue` mit der `@property`-At-Regel gesetzt. Im Regelset nach der At-Regel wollen wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen. Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die Custom Property verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet. Beide `2rem` und `aqumarine` sind ungültige Farbwerte, sodass der Anfangswert `cornflowerblue` angewendet wird:

```css live-sample___at-property-initial-value
@property --box-color {
  syntax: "<color>";
  initial-value: cornflowerblue;
  inherits: false;
}

.one {
  --box-color: aquamarine;
  background-color: var(--box-color);
}

.two {
  --box-color: aqumarine;
  background-color: var(--box-color);
}

.three {
  --box-color: 2rem;
  background-color: var(--box-color);
}
```

```css hidden live-sample___at-property-initial-value
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
.one {
  color: black;
}
```

```html hidden live-sample___at-property-initial-value
<div class="one">
  <p>One</p>
</div>
<div class="two">
  <p>Two.</p>
</div>
<div class="three">
  <p>Three.</p>
</div>
```

{{embedlivesample("at-property-initial-value", "100%", "150px")}}

## Ungültige Custom Properties

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert außerhalb ihres gültigen Wertepools zuzuweisen, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft), verwirft er die Deklaration, und die Elemente werden mit den Werten zugewiesen, die sie hätten, wenn die Deklaration nicht existierte. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

```html live-sample___invalid-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-property
p {
  color: blue;
}

p {
  /* oops, not a valid color */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

Wenn jedoch die Werte von Custom Properties geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss. Leider können diese gültigen Werte mittels der `var()`-Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben. Eigenschaften und Custom Variables können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültiger Berechnung zum Zeitpunkt der Berechnung_ führt.

Wenn der Browser auf einen ungültigen `var()`-Ersatz trifft, wird der [initiale](/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genau wie das letzte, außer dass wir eine Custom Property verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung ergibt die Eigenschaft keinen Sinn., sodass der Browser diese Situation in zwei Schritten behandelt:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein Elternteil mit der gesetzten `color`-Eigenschaft. Also gehen wir zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **standardmäßigen Anfangswert**, der schwarz ist.

```html live-sample___invalid-custom-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property
:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property', 100, 50)}}

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem sie den Anfangswert der Eigenschaft definiert:

```html live-sample___invalid-custom-property-fallbacks
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: cornflowerblue;
}

:root {
  --text-color: 16px;
}

p {
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property-fallbacks', 100, 50)}}

## Werte in JavaScript

Die Verwendung der Werte von Custom Properties in JavaScript ist genauso wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Custom Property-Syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
