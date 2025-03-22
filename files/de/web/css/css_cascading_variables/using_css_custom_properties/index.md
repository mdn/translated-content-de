---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{CSSRef}}

**Benutzereigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden und spezifische Werte repräsentieren, die in einem Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}} At-Regel oder durch [Benutzereigenschaftssyntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Benutzereigenschaften werden mit der CSS-Funktion {{cssxref("var", "var()")}} (z.B. **`color: var(--primary-color);`**) aufgerufen.

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe, die an vielen Stellen dupliziert wurde, zu ändern, erfordert ein Suchen und Ersetzen über alle Regeln und CSS-Dateien hinweg. Benutzereigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, sodass das Arbeiten damit erleichtert wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzereigenschaften, die [unter Verwendung von zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem Elternelement. Die {{cssxref("@property")}} At-Regel ermöglicht eine genauere Steuerung der Benutzereigenschaft und lässt Sie festlegen, ob sie ihren Wert von einem Elternelement erbt, was der anfängliche Wert ist und welche Typbeschränkungen gelten sollten.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von Benutzereigenschaften

In CSS können Sie eine Benutzereigenschaft deklarieren, indem Sie zwei Bindestriche als Präfix für den Eigenschaftsnamen verwenden oder durch die Verwendung der {{cssxref("@property")}} At-Regel. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden einsetzen können.

### Verwendung eines Präfixes mit zwei Bindestrichen (`--`)

Eine Benutzereigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeden [gültigen CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) darstellen kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben. Das folgende Beispiel zeigt, wie man eine Benutzereigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der Selektor, der dem Regelset zugewiesen ist (z.B. [`<section>`](/de/docs/Web/HTML/Element/section) Elemente im obigen Beispiel), definiert den Bereich, in dem die Benutzereigenschaft verwendet werden kann. Aus diesem Grund ist es eine gängige Praxis, Benutzereigenschaften auf der {{cssxref(":root")}} Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Bereich Ihrer Benutzereigenschaften zu begrenzen.

> [!NOTE]
> Benutzereigenschaftsnamen sind case-sensitive — `--my-color` wird als separate Benutzereigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht es Ihnen, mit der Definition einer Benutzereigenschaft ausdrucksstärker zu sein, indem Sie die Möglichkeit haben, einen Typ mit der Eigenschaft zu assoziieren, Standardwerte festzulegen und die Vererbung zu steuern. Das folgende Beispiel erstellt eine Benutzereigenschaft namens `--logo-color`, die eine [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Benutzereigenschaften in JavaScript anstelle von direkt in CSS definieren oder verwenden möchten, gibt es eine entsprechende API zu diesem Zweck. Sie können darüber, wie dies funktioniert, auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) lesen.

### Referenzierung von Benutzereigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine Benutzereigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Benutzereigenschaften

Beginnen wir mit etwas HTML, das wir mit einigen Stilen versehen möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige davon mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um verschiedene Elemente basierend auf ihren Klassen zu gestalten (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können). Je nach ihren Klassen geben wir Elementen Hintergrundfarben in `cornflowerblue` oder `aquamarine`:

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

Es besteht die Möglichkeit, Benutzereigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen. Nachdem `--main-bg-color` im `.container`-Bereich definiert und sein Wert an mehreren Stellen referenziert wurde, sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese weiter oben in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problems lösen zu lassen. Bei nicht-trivialen Projekten ist dies jedoch nicht immer möglich. Durch die Deklaration einer Benutzereigenschaft auf der {{cssxref(":root")}} Pseudoklasse und durch ihre Verwendung, wo immer nötig, im gesamten Dokument, kann ein CSS-Autor die Notwendigkeit zur Wiederholung reduzieren:

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

Das führt zum selben Ergebnis wie das vorherige Beispiel, erlaubt aber eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Benutzereigenschaften

Eine Benutzereigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel dargestellt:

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

Die Ergebnisse von `var(--box-color)` abhängend von der Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, welcher der Standardwert einer so definierten Benutzereigenschaft ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (vom Elternteil geerbt)

Ein Aspekt von Benutzereigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und in anderen Bereichen eines Stylesheets wiederverwendet. Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in der Regel eines Geschwisterelements eines Nachfahren wiederzugewinnen. Die Eigenschaft wird nur für den passenden Selektor und seine Nachfahren festgesetzt.

### Die Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` At-Regel lässt Sie explizit angeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine Benutzereigenschaft unter Verwendung der `@property` At-Regel. Die Vererbung wird deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp wird festgelegt und ein anfänglicher Wert von `cornflowerblue` wird gesetzt.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelpunktsyntax definiert wäre).

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

Da `inherits: false;` in der At-Regel gesetzt ist und innerhalb des `.child`-Bereichs kein Wert für die Eigenschaft `--box-color` deklariert ist, wird der Initialwert `cornflowerblue` anstelle von `green` verwendet, der vom Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Benutzereigenschaften

Sie können Fallback-Werte für Benutzereigenschaften unter Verwendung der `var()` Funktion und des `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht zur Behebung von Kompatibilitätsproblemen verwendet, falls CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht helfen wird. Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn man mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeitet.

Das erste Argument der Funktion ist der Name der Benutzereigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Substitutionswert verwendet wird, wenn die referenzierte Benutzereigenschaft ungültig ist. Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Einen Fallback für Benutzereigenschaften wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`) zu inkludieren, ist die korrekte Weise, mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Leistungsauswirkungen dieser Methode bewusst sein, da es mehr Zeit benötigt, um durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks, wie die von [Benutzereigenschaften](https://www.w3.org/TR/css-variables/#custom-property), erlaubt Kommata. Beispielsweise definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Initialwert

Abgesehen von der Verwendung von `var()` kann der `initial-value`, der in der `@property` At-Regel definiert ist, als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel setzt einen Initialwert von `--box-color` auf `cornflowerblue` unter Verwendung der `@property` At-Regel. Im Regelset, das der At-Regel folgt, wollen wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen. Das gleiche gilt für das dritte `<div>`, wo wir `2rem` für die Benutzereigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/color_value) erwartet. Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, so dass der Initialwert `cornflowerblue` angewendet wird:

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

## Ungültige Benutzereigenschaften

Jede CSS-Eigenschaft kann eine definierte [Gruppe von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen bekommen. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb dieser Gruppe gültiger Werte liegt, wird sie als _ungültig_ betrachtet.

Wenn dem Browser ein ungültiger Wert für eine reguläre CSS-Eigenschaft begegnet (zum Beispiel ein Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration, und die Elemente erhalten die Werte, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue` Regel wird stattdessen angewendet:

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

Wenn die Werte von Benutzereigenschaften jedoch analysiert werden, weiß der Browser noch nicht, wo sie verwendet werden, daher müssen fast alle Werte als _gültig_ betrachtet werden. Leider können diese gültigen Werte über die `var()` Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben. Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, die zum Konzept von _gültig zur berechneten Zeit_ führen.

Wenn der Browser auf eine ungültige `var()`-Ersetzung trifft, wird dann der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genauso wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung ergibt die Eigenschaft keinen Sinn, daher handelt der Browser diese Situation in zwei Schritten ab:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist, aber dieses `<p>` hat kein übergeordnetes Element mit der festgelegten `color` Eigenschaft. Also gehen wir zum nächsten Schritt über.
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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie den Anfangswert der Eigenschaft definiert:

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

Um die Werte von Benutzereigenschaften in JavaScript zu verwenden, ist es genauso wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Benutzereigenschaftssyntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
