---
title: Verwenden von benutzerdefinierten CSS-Eigenschaften (Variablen)
short-title: Verwenden von benutzerdefinierten Eigenschaften
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 03482f82cba9c871042bbf4972b754f65eb3cb90
---

**Benutzerdefinierte Eigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden, um spezifische Werte darzustellen, die im gesamten Dokument wiederverwendet werden. Sie werden mit dem {{cssxref("@property")}}-Regelsatz oder durch [benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Benutzerdefinierte Eigenschaften werden mit der CSS-Funktion {{cssxref("var", "var()")}} aufgerufen (z. B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an hunderten verschiedenen Stellen in Stylesheets zu verwenden. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, um die Arbeit zu erleichtern. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, insbesondere wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`) definiert werden](/de/docs/Web/CSS/--*), unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem übergeordneten Element. Der {{cssxref("@property")}}-Regelsatz bietet mehr Kontrolle über die benutzerdefinierte Eigenschaft und ermöglicht es Ihnen anzugeben, ob der Wert von einem übergeordneten Element geerbt wird, was der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes für jede Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder anderes außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft entweder durch zwei Bindestriche als Präfix für den Eigenschaftsnamen oder durch Verwendung der {{cssxref("@property")}}-Regel deklarieren. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwenden eines Präfixes von zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben. Das folgende Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der Selector, der dem Regelset gegeben wird ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel), definiert den Bereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann. Aus diesem Grund ist es gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}}-Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Es kann gute Gründe geben, den Bereich Ihrer benutzerdefinierten Eigenschaften einzuschränken.

> [!NOTE]
> Namen von benutzerdefinierten Eigenschaften sind case-sensitive — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwenden der `@property`-Regel

Die {{cssxref("@property")}}-Regel ermöglicht es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksstärker zu sein, indem Sie einen Typ mit der Eigenschaft verknüpfen, Standardwerte festlegen und die Vererbung steuern können. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) Wert erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie in JavaScript anstelle von direkt in CSS mit benutzerdefinierten Eigenschaften arbeiten möchten, gibt es eine entsprechende API für diesen Zweck. Sie können nachlesen, wie dies funktioniert, indem Sie die Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) aufrufen.

### Referenzieren benutzerdefinierter Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie durch Referenzierung der Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu gestalten (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können). Abhängig von ihren Klassen geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

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

Dies führt zu folgendem Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt eine Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte über diese Regeln hinweg zu ersetzen. Nachdem wir `--main-bg-color` im `.container`-Bereich definiert und seinen Wert an mehreren Stellen referenziert haben, sehen die aktualisierten Stile so aus:

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

## Verwenden der :root-Pseudoklasse

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problem lösen zu lassen. Für nicht triviale Projekte ist dies nicht immer möglich. Indem eine benutzerdefinierte Eigenschaft auf der {{cssxref(":root")}}-Pseudoklasse deklariert und nach Bedarf im gesamten Dokument verwendet wird, kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel und ermöglicht dennoch eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung benutzerdefinierter Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` statt mit `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel demonstriert:

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

Die Ergebnisse von `var(--box-color)` in Bezug auf Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, der der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Elternteil geerbt)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Beispielsweise kann man nicht erwarten, den Wert einer Eigenschaft zu setzen und den Wert in einer Regel eines Geschwisterkindes eines Nachfahren abzurufen. Die Eigenschaft ist nur für den passenden Selektor und seine Nachkommen festgelegt.

### Verwenden von `@property` zur Steuerung der Vererbung

Die `@property`-Regel ermöglicht es Ihnen, explizit anzugeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property`-Regel. Die Vererbung ist deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp ist definiert und ein Anfangswert von `teal`.

Das übergeordnete Element setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelschema-Syntax definiert wäre).

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

Da `inherits: false;` in der Regel festgelegt ist und ein Wert für die `--box-color`-Eigenschaft nicht innerhalb des `.child`-Bereichs deklariert ist, wird der Anfangswert von `teal` statt `green`, der vom Elternteil geerbt worden wäre, verwendet:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mithilfe der `var()`-Funktion und des `initial-value` der `@property`-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht zur Behebung von Kompatibilitätsproblemen verwendet, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft. Fallbacks decken den Fall ab, dass der Browser CSS-Benutzereigenschaften unterstützt und einen anderen Wert verwenden kann, falls die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert aufweist.

### Definieren von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist. Die Funktion akzeptiert zwei Parameter und weist alles, was auf das erste Komma folgt, als zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einbeziehen einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Auswirkungen auf die Leistung dieser Methode bewusst sein, da es länger dauert, die verschachtelten Variablen zu durchsuchen.

> [!NOTE]
> Die Syntax des Fallbacks, wie die der benutzerdefinierten Eigenschaften, erlaubt Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property`-Anfangswert

Neben der Verwendung von `var()` kann der in der `@property`-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel legt einen Anfangswert von `--box-color` auf `teal` mit der `@property`-Regel fest. Im Regelset, das der Regel folgt, möchten wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen. Das gleiche gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet. Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, daher wird der Anfangswert von `teal` verwendet:

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

## Ungültige benutzerdefinierte Eigenschaften

Jede CSS-Eigenschaft kann einer definierten [Wertemenge](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes von gültigen Werten liegt, wird dies als _ungültig_ angesehen.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft (zum Beispiel ein Wert von `16px` für die {{cssxref("color")}}-Eigenschaft) stößt, verwirft er die Deklaration, und Elemente erhalten die Werte, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte benutzerdefinierter Eigenschaften analysiert werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss. Leider können diese gültigen Werte über die `var()`-funktionale Notation in einem Kontext verwendet werden, in dem sie keinen Sinn ergeben. Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution stößt, wird dann der [Standard-](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Substitution ergibt die Eigenschaft keinen Sinn mehr, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} erbbar ist. Das ist sie, aber dieses `<p>` hat kein übergeordnetes Element mit der festgelegten `color`-Eigenschaft. So geht es weiter zum nächsten Schritt.
2. Setzen Sie den Wert auf seinen **standardmäßigen Anfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property`-Regel unerwartete Ergebnisse verhindern, indem sie es ermöglicht, den Anfangswert der Eigenschaft zu definieren:

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

- [Benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
