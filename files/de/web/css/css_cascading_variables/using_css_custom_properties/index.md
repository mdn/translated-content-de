---
title: Verwendung von CSS-Custom-Properties (Variablen)
short-title: Verwendung von Custom Properties
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**Custom Properties** (manchmal als **CSS-Variablen** oder **Cascading Variables** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen, die in einem Dokument wiederverwendet werden können. Sie werden mit dem {{cssxref("@property")}} At-Regel oder durch die [Custom Property-Syntax](/de/docs/Web/CSS/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Auf Custom Properties wird mit der CSS {{cssxref("var", "var()")}} Funktion zugegriffen (z. B. **`color: var(--primary-color);`**).

Komplexe Websites haben oft sehr umfangreiche Mengen an CSS, was häufig zu vielen wiederholten CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe, die an vielen Stellen dupliziert wurde, zu ändern, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien. Custom Properties ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, sodass die Arbeit erleichtert wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, insbesondere wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Custom Properties, die [mit zwei Bindestrichen (`--`) definiert werden](/de/docs/Web/CSS/--*), unterliegen dem [Cascading](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem Elternteil.
Die {{cssxref("@property")}} At-Regel ermöglicht mehr Kontrolle über die Custom Property und erlaubt es Ihnen zu spezifizieren, ob diese ihren Wert von einem Elternteil erbt, was der anfängliche Wert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes für jedes Element auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder sonstiges außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query nutzen können.

## Deklaration von Custom Properties

In CSS können Sie eine Custom Property deklarieren, indem sie zwei Bindestriche als Präfix für den Eigenschaftsnamen verwenden oder die {{cssxref("@property")}} At-Regel nutzen.
Die folgenden Abschnitte beschreiben, wie diese beiden Methoden verwendet werden.

### Verwenden eines Präfixes mit zwei Bindestrichen (`--`)

Eine mit zwei Bindestrichen beginnende Custom Property beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der jeden [gültigen CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) haben kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben.
Das folgende Beispiel zeigt, wie eine Custom Property `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Geltungsbereich, in dem die Custom Property verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, Custom Properties auf der {{cssxref(":root")}} Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Es kann gute Gründe geben, den Geltungsbereich Ihrer Custom Properties einzuschränken.

> [!NOTE]
> Custom Property-Namen sind case-sensitiv — `--my-color` wird als separate Custom Property zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht Ihnen, bei der Definition einer Custom Property ausdrücklicher zu sein, indem Sie die Möglichkeit bieten, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern.
Das folgende Beispiel erstellt eine Custom Property namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Custom Properties in JavaScript anstelle von direkt in CSS definieren oder damit arbeiten möchten, gibt es eine entsprechende API für diesen Zweck.
Sie können auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen, wie das funktioniert.

### Referenzieren von Custom Properties mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Custom Property wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Custom Properties

Beginnen wir mit etwas HTML, auf das wir einige Stile anwenden möchten.
Es gibt ein `<div>`, das als Container fungiert und einige Kind-Elemente enthält, einige mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige unterschiedliche Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können).
Abhängig von ihren Klassen geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

```css hidden
/* Set fonts, borders and padding */
body,
textarea,
::placeholder {
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
  background-color: teal;
}

.two {
  color: black;
  background-color: pink;
}

.three {
  color: white;
  background-color: teal;
}

.four {
  background-color: teal;
}

.five {
  background-color: teal;
}
```

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, Custom Properties zu verwenden, um sich wiederholende Werte über diese Regeln zu ersetzen.
Nachdem `--main-bg-color` im `.container` Geltungsbereich definiert und sein Wert mehrmals referenziert wurde, sieht das aktualisierte Stylesheet so aus:

```css
/* Define --main-bg-color here */
.container {
  --main-bg-color: teal;
}

/* For each class, set some colors */
.one {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: pink;
}

.three {
  color: white;
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

Bei einigen CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problem lösen zu lassen. Für nicht triviale Projekte ist dies nicht immer möglich. Durch das Deklarieren einer Custom Property auf der {{cssxref(":root")}} Pseudoklasse und ihre Verwendung wo nötig im gesamten Dokument, kann ein CSS-Autor den Bedarf an Wiederholungen reduzieren:

```css
/* Define --main-bg-color here */
:root {
  --main-bg-color: teal;
}

/* For each class, set some colors */
.one,
.three,
.four,
.five {
  background-color: var(--main-bg-color);
}

.two {
  color: black;
  background-color: pink;
}
```

Dies führt zum selben Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Custom Properties

Eine mit zwei Bindestrichen `--` anstelle von `@property` definierte Custom Property erbt immer den Wert ihres Elternteils.
Dies wird im folgenden Beispiel demonstriert:

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
  color: white;
  height: 80%;
}

.three {
  color: black;
  height: 40%;
}

.four {
  color: white;
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--box-color);
}

.two {
  --box-color: teal;
}

.three {
  --box-color: pink;
}
```

{{embedlivesample("dash-custom-property-inheritance", "100%", "280px")}}

Die Ergebnisse von `var(--box-color)`, abhängig von der Vererbung, sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Custom Property ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (von ihrem Elternteil geerbt)

Ein Aspekt von Custom Properties, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie den Wert einer Eigenschaft nicht setzen und erwarten, dass Sie den Wert in einer Regel eines Geschwisters oder eines Nachfahren desselben verwenden können.
Die Eigenschaft wird nur für den passenden Selektor und seine Nachkommen festgelegt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` At-Regel lässt Sie explizit festlegen, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine Custom Property mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, es gibt einen definierten [`<color>`](/de/docs/Web/CSS/color_value) Datentyp und einen anfänglichen Wert von `teal`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kind-Element verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Double-Dash-Syntax definiert wurde).

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
  initial-value: teal;
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

Da `inherits: false;` in der At-Regel festgelegt ist und kein Wert für die `--box-color` Eigenschaft im `.child` Geltungsbereich deklariert ist, wird der anfängliche Wert von `teal` anstelle von `green` verwendet, das vom Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Custom Properties

Sie können Fallback-Werte für Custom Properties mit der Funktion `var()` und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Custom-Properties nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Custom-Properties unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Custom Property. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Custom Property ungültig ist.
Die Funktion akzeptiert zwei Parameter und weist alles nach dem ersten Komma als zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Einbeziehen einer Custom Property als Fallback, wie im zweiten obigen Beispiel gezeigt (`var(--my-var, var(--my-background, pink))`), ist der korrekte Weg, um mehr als einen Fallback mit `var()` zu bieten.
Sie sollten sich jedoch der Auswirkungen auf die Leistung dieses Verfahrens bewusst sein, da es mehr Zeit benötigt, um durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, ebenso wie die der Custom Properties, Kommata. Zum Beispiel, `var(--foo, red, blue)` definiert einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Initialwert

Neben der Verwendung von `var()`, kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen anfänglichen Wert für `--box-color` von `teal` mit der `@property` At-Regel.
Im Regelset, das der At-Regel folgt, wollen wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die Custom Property verwendet haben, die einen gültigen [\<color> Wert](/de/docs/Web/CSS/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, daher wird der anfängliche Wert von `teal` angewendet:

```css live-sample___at-property-initial-value
@property --box-color {
  syntax: "<color>";
  initial-value: teal;
  inherits: false;
}

.one {
  --box-color: pink;
  background-color: var(--box-color);
}

.two {
  --box-color: peenk;
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

Jede CSS-Eigenschaft kann einer definierten [Menge von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihrer Menge gültiger Werte liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration und die Elemente werden mit den Werten zugewiesen, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue` Regel wird stattdessen angewendet:

```html live-sample___invalid-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-property
p {
  font-weight: bold;
  color: blue;
}

p {
  /* oops, not a valid color */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

Wenn die Werte von Custom Properties analysiert werden, weiß der Browser jedoch noch nicht, wo sie verwendet werden, daher muss er fast alle Werte als _gültig_ betrachten.
Leider können diese gültigen Werte in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben, durch die `var()` funktionale Notation.
Eigenschaften und Custom-Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept der _Validität bei Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()` Substitution stößt, wird der [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das vorherige, außer dass wir eine Custom Property verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, sodass der Browser diese Situation in zwei Schritten behandelt:

1. Prüfen, ob die Eigenschaft {{cssxref("color")}} ererbbar ist. Das ist sie, aber dieses `<p>` hat keinen Elternteil, der die `color` Eigenschaft gesetzt hat. Also gehen wir zum nächsten Schritt über.
2. Den Wert auf seinen **standardmäßigen Anfangswert**, der schwarz ist, setzen.

```html live-sample___invalid-custom-property
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property
:root {
  --text-color: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property', 100, 50)}}

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie ermöglicht, den Anfangswert der Eigenschaft zu definieren:

```html live-sample___invalid-custom-property-fallbacks
<p>This paragraph is initially black.</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --text-color {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}

:root {
  --text-color: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--text-color);
}
```

{{EmbedLiveSample('invalid-custom-property-fallbacks', 100, 50)}}

## Werte in JavaScript

Um die Werte von Custom Properties in JavaScript zu verwenden, ist es genauso wie bei Standard-Eigenschaften.

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
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Custom-Properties für Cascading Variables](/de/docs/Web/CSS/CSS_cascading_variables) Modul
