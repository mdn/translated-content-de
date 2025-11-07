---
title: Verwenden von CSS-Custom-Properties (Variablen)
short-title: Verwendung von Custom-Properties
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

**Custom-Properties** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte repräsentieren, um sie im gesamten Dokument wiederzuverwenden. Sie werden mit der {{cssxref("@property")}} Regel oder durch [Custom-Property-Syntax](/de/docs/Web/CSS/Reference/Properties/--*) (z.B. **`--primary-color: blue;`**) festgelegt. Auf Custom-Properties wird mit der CSS-Funktion {{cssxref("var", "var()")}} zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Webseiten enthalten oft sehr große Mengen an CSS, was häufig zu vielen sich wiederholenden CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in den Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert ein Suchen und Ersetzen über alle Regeln und CSS-Dateien. Custom-Properties erlauben es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Arbeit erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Custom-Properties, die [mit zwei Bindestrichen (`--`) definiert](/de/docs/Web/CSS/Reference/Properties/--*) wurden, unterliegen der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert von ihrem Elternteil.
Die {{cssxref("@property")}} Regel ermöglicht mehr Kontrolle über die Custom-Property und lässt Sie angeben, ob sie ihren Wert von einem Elternteil erbt, welcher Anfangswert gilt und welche Typbeschränkungen angewendet werden sollten.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die Funktion {{cssxref("var", "var()")}} in jedem Teil eines Werts in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} jedoch nicht für Eigenschaftsnamen, Selektoren oder etwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie sie nicht in einer Media Query oder Container Query verwenden können.

## Deklaration von Custom-Properties

In CSS können Sie eine Custom-Property mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch die {{cssxref("@property")}} Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie diese beiden Methoden verwendet werden.

### Verwendung eines Präfixes von zwei Bindestrichen (`--`)

Eine Custom-Property, die mit zwei Bindestrichen vorangestellt ist, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelwerkes geschrieben.
Das folgende Beispiel zeigt, wie man eine Custom-Property `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelwerk gegebene Selektor (Elemente vom Typ [`<section>`](/de/docs/Web/HTML/Reference/Elements/section) im obigen Beispiel) definiert den Anwendungsbereich, in dem die Custom-Property verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, Custom-Properties auf der {{cssxref(":root")}} Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Vielleicht haben Sie einen guten Grund, den Anwendungsbereich Ihrer Custom-Properties zu begrenzen.

> [!NOTE]
> Custom-Property-Namen sind case-sensitive — `--my-color` wird als eine andere Custom-Property behandelt als `--My-color`.

### Verwendung der `@property` Regel

Die {{cssxref("@property")}} Regel ermöglicht Ihnen, ausdrucksvoller bei der Definition einer Custom-Property zu sein, indem Sie der Eigenschaft einen Typ zuordnen, Standardwerte festlegen und die Vererbung steuern.
Das folgende Beispiel erstellt eine Custom-Property namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Custom-Properties lieber in JavaScript statt direkt in CSS definieren oder verwenden möchten, gibt es eine entsprechende API zu diesem Zweck.
Wie dies funktioniert, können Sie auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen.

### Referenzierung von Custom-Properties mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Custom-Property wählen, verwenden Sie sie, indem Sie die Property in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Custom-Properties

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können).
Je nach Klassen geben wir Elementen Hintergrundfarben `teal` oder `pink`:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, Custom-Properties zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen.
Nachdem `--main-bg-color` im `.container`-Bereich definiert wurde und sein Wert an mehreren Stellen referenziert wird, sehen die aktualisierten Stile folgendermaßen aus:

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

## Verwendung der :root Pseudo-Klasse

Bei einigen CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und CSS-Vererbung das Problem lösen zu lassen. Für nicht-triviale Projekte ist dies nicht immer möglich. Durch die Deklaration einer Custom-Property auf der {{cssxref(":root")}} Pseudo-Klasse und deren Verwendung an benötigten Stellen im gesamten Dokument, kann ein CSS-Autor die Notwendigkeit von Wiederholungen reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Custom-Properties

Eine mit zwei Bindestrichen `--` statt `@property` definierte Custom-Property erbt immer den Wert ihres Elternteils.
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

Die Ergebnisse von `var(--box-color)` in Abhängigkeit von der Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Custom-Property ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Elternteil übernommen)

Ein Aspekt von Custom-Properties, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und in anderen Bereichen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie den Wert einer Eigenschaft nicht setzen und erwarten, dass Sie den Wert in der Regel eines Geschwisters der Nachkommen abrufen können.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen festgelegt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` Regel ermöglicht es Ihnen, explizit festzulegen, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine Custom-Property mithilfe der `@property` Regel.
Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp definiert, und es gibt einen Anfangswert von `teal`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und nutzt `--box-color` als Wert für seine Hintergrundfarbe.
Das Kind-Element verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der doppelten Bindestrich-Syntax definiert wurde).

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

Da `inherits: false;` in der Regel gesetzt ist und ein Wert für die `--box-color` Eigenschaft nicht im `.child`-Bereich deklariert ist, wird der Anfangswert von `teal` anstelle von `green` verwendet, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Custom-Properties

Sie können Fallback-Werte für Custom-Properties mit der `var()` Funktion und dem `initial-value` der `@property` Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Custom-Properties nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Custom-Properties unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Fallbacks in der `var()` Funktion definieren

Mit der [`var()`](/de/docs/Web/CSS/Reference/Values/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; Dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Custom-Property. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Custom-Property ungültig ist.
Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugeordnet wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einbeziehen einer Custom-Property als Fallback, wie im zweiten obenstehenden Beispiel (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Leistung dieser Methode bewusst sein, da es mehr Zeit braucht, durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie die der Custom-Properties, Kommas. Beispielsweise definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Anfangswert

Neben der Verwendung von `var()` kann auch der `initial-value`, der in der `@property` Regel definiert ist, als Fallback-Mechanismus verwendet werden.
Dieses Konzept haben wir bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` mithilfe der `@property` Regel.
Im Regelwerk, das auf die Regel folgt, möchten wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen.
Gleiches gilt für das dritte `<div>`, in dem wir `2rem` für die Custom-Property verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, daher wird der Anfangswert von `teal` angewendet:

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

## Ungültige Custom-Properties

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes gültiger Werte liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft (z.B. einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft) stößt, verwirft er die Deklaration und Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde.
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

Wenn jedoch die Werte von Custom-Properties analysiert werden, weiß der Browser noch nicht, wo sie verwendet werden, daher muss er fast alle Werte als _gültig_ betrachten.
Leider können diese gültigen Werte mittels der `var()` funktionalen Notation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Deklarationen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()` Substitution trifft, wird der [Standard-](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist wie das letzte, außer dass wir eine Custom-Property verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, sodass der Browser diese Situation in zwei Schritten behandelt:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbt werden kann. Das ist der Fall, aber dieses `<p>` hat kein übergeordnetes Element mit einer festgelegten `color` Eigenschaft. Also gehen wir zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **Standard-Anfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` Regel unerwartete Ergebnisse verhindern, indem der Anfangswert der Eigenschaft festgelegt wird:

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

Um die Werte von Custom-Properties in JavaScript zu verwenden, ist es genau wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Custom-Property-Syntax](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@property")}} Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Custom-Properties für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
