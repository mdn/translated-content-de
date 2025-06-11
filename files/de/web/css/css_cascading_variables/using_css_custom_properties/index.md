---
title: Verwenden von CSS benutzerdefinierten Eigenschaften (Variablen)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 636b90011532e3fd2cf9333aaf1754fdc8de7938
---

{{CSSRef}}

**Benutzerdefinierte Eigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden, um bestimmte Werte zu repräsentieren, die im gesamten Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}} At-Regel oder durch [benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Auf benutzerdefinierte Eigenschaften wird mit der CSS {{cssxref("var", "var()")}} Funktion zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites verfügen über sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Es ist beispielsweise üblich, dass dieselbe Farbe an Hunderten verschiedener Stellen in Stylesheets verwendet wird. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, sodass die Arbeit damit erleichtert wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` einfacher zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`) definiert werden](/de/docs/Web/CSS/--*), unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}} At-Regel ermöglicht mehr Kontrolle über die benutzerdefinierte Eigenschaft und erlaubt es Ihnen, zu spezifizieren, ob sie ihren Wert von einem Elternteil erbt, was der Anfangswert ist und welche Typbeschränkungen gelten sollten.

> [!NOTE]
> Variablen funktionieren nicht in Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Werts in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder alles andere als Eigenschaftswerte verwenden, was bedeutet, dass Sie sie nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft deklarieren, indem Sie zwei Bindestriche als Präfix für den Eigenschaftsnamen verwenden oder die {{cssxref("@property")}} At-Regel verwenden. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwenden eines Präfixes mit zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft mit einem Präfix von zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsatzes geschrieben. Das folgende Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Geltungsbereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann. Aus diesem Grund ist es gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}} Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss jedoch nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Geltungsbereich Ihrer benutzerdefinierten Eigenschaften zu begrenzen.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind case-sensitive — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksvoller zu sein, indem Sie die Möglichkeit haben, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die ein [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle direkt in CSS definieren oder damit arbeiten möchten, gibt es eine entsprechende API für diesen Zweck. Sie können darüber, wie dies funktioniert, auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) lesen.

### Referenzieren benutzerdefinierter Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, dem wir einige Stile zuweisen möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kinderelemente enthält, einige mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu gestalten (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können). Je nach ihren Klassen geben wir den Elementen `cornflowerblue` oder `aquamarine` Hintergrundfarben:

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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es besteht die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen. Nachdem Sie `--main-bg-color` im `.container` Geltungsbereich definiert und seinen Wert an mehreren Stellen referenziert haben, sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problem lösen zu lassen. Bei nicht trivialen Projekten ist dies jedoch nicht immer möglich. Durch die Deklaration einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}} Pseudoklasse und deren Verwendung, wo sie im gesamten Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

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

Dies führt zum selben Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, falls Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mithilfe von zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel demonstriert:

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

Die Ergebnisse von `var(--box-color)` in Abhängigkeit von der Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (geerbt von seinem Elternteil)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele veranschaulichen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Zum Beispiel können Sie nicht erwarten, dass Sie den Wert einer Eigenschaft setzen und in der Regel eines Nachkommen eines Geschwisters des Knotens abrufen können. Die Eigenschaft wird nur für den passenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` At-Regel ermöglicht es Ihnen ausdrücklich anzugeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der At-Regel `@property`. Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp definiert und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls`background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelpunktsyntax definiert wäre).

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

Da `inherits: false;` in der At-Regel festgelegt ist und ein Wert für die `--box-color` Eigenschaft nicht innerhalb des `.child` Geltungsbereichs deklariert ist, wird der Anfangswert von `cornflowerblue` anstelle von `green` verwendet, der von dem Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mithilfe der `var()` Funktion und des `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback in diesem Fall nicht helfen wird. Fallbacks decken den Fall ab, bei dem der Browser CSS benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definieren von Fallbacks in der `var()` Funktion

Mithilfe der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersetzungswert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist. Die Funktion akzeptiert zwei Parameter und weist alles, was dem ersten Komma folgt, als zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einbeziehen einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben gezeigt (`var(--my-var, var(--my-background, pink))`), ist der korrekte Weg, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Leistungsauswirkungen dieser Methode bewusst sein, da das Parsen durch die verschachtelten Variablen mehr Zeit in Anspruch nimmt.

> [!NOTE]
> Die Syntax des Fallbacks, wie die der benutzerdefinierten Eigenschaften, erlaubt Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert angesehen.

### Fallbacks mit dem `@property` Anfangswert

Abgesehen von der Verwendung von `var()`, kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property` inheritance](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` mithilfe der `@property` At-Regel. Im Regelsatz, der der At-Regel folgt, möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen. Das Gleiche gilt für das dritte `<div>`, in dem wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/color_value) erwartet. Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, daher wird der Anfangswert von `cornflowerblue` angewendet:

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

## Ungültige benutzerdefinierte Eigenschaften

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres gültigen Wertesatzes liegt, wird er als _ungültig_ angesehen.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration, und Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue` Regel wird stattdessen angewendet:

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

Beim Parsen der Werte benutzerdefinierter Eigenschaften weiß der Browser jedoch noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ ansehen muss. Leider können diese gültigen Werte mithilfe der `var()` Funktionalnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben. Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zu dem Konzept _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Ersetzung stößt, wird der [Anfangs-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung macht die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist, aber dieses `<p>` hat keinen Elternteil mit der festgelegten `color`-Eigenschaft. Also gehen wir zum nächsten Schritt über.
2. Den Wert auf den **Standard-Anfangswert** setzen, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie ermöglicht, den Anfangswert der Eigenschaft zu definieren:

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

Um die Werte benutzerdefinierter Eigenschaften in JavaScript zu verwenden, ist es genau wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Custom property syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
