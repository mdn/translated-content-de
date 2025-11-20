---
title: Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)
short-title: Verwendung von benutzerdefinierten Eigenschaften
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: ca5d9f9e63b460fc0c9e15ac57d9739e10e4ea0d
---

**Benutzerdefinierte Eigenschaften** (manchmal als **CSS-Variablen** oder **Cascading-Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die bestimmte Werte repräsentieren, die im gesamten Dokument wiederverwendet werden sollen. Sie werden mit dem {{cssxref("@property")}} At-Regel oder mit der [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Benutzerdefinierte Eigenschaften werden mit der CSS-Funktion {{cssxref("var", "var()")}} aufgerufen (z. B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an Hunderten verschiedener Stellen in Stylesheets zu sehen. Eine Farbe, die an vielen Stellen dupliziert wurde, zu ändern, erfordert eine Suche und Ersetzung in allen Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einem Ort zu definieren und dann an mehreren anderen Stellen darauf zu verweisen, um einfacher damit zu arbeiten. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, insbesondere wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mithilfe von zwei Strichen (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) definiert werden, unterliegen dem [Kaskadenprinzip](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert vom übergeordneten Element.
Die {{cssxref("@property")}} At-Regel bietet mehr Kontrolle über die benutzerdefinierte Eigenschaft und ermöglicht es, anzugeben, ob sie ihren Wert von einem übergeordneten Element erbt, was der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Werts in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklaration von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Strichen als Präfix für den Eigenschaftsnamen deklarieren oder mit der {{cssxref("@property")}} At-Regel.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfix mit zwei Strichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Strichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der ein beliebiger [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben.
Das folgende Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor (in dem obigen Beispiel [`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente) definiert den Gültigkeitsbereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}} Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Gültigkeitsbereich Ihrer benutzerdefinierten Eigenschaften einzuschränken.

> [!NOTE]
> Namen benutzerdefinierter Eigenschaften sind case-sensitiv — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel erlaubt es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksstärker zu sein, indem Sie die Möglichkeit haben, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften lieber in JavaScript statt direkt in CSS definieren oder verwenden möchten, gibt es eine entsprechende API zu diesem Zweck.
Sie können nachlesen, wie das auf der Seite zur [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzierung von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, das wir mit einigen Stilen versehen möchten.
Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente umfasst, einige mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden weiter unten nicht angezeigt, um uns auf die Farben zu konzentrieren).
Je nach ihren Klassen geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

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

Dies führt zum folgenden Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um wiederholte Werte über diese Regeln zu ersetzen.
Nachdem Sie `--main-bg-color` im `.container` Bereich definiert und seinen Wert an mehreren Stellen referenziert haben, sehen die aktualisierten Stile folgendermaßen aus:

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

Für einige CSS-Deklarationen ist es möglich, dies höher in der Kaskade zu deklarieren und die CSS-Vererbung dieses Problem lösen zu lassen. Bei nicht trivialen Projekten ist dies nicht immer möglich. Durch die Deklaration einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}} Pseudo-Klasse und ihre Verwendung dort, wo sie im Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit von Wiederholungen reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, erlaubt jedoch eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Strichen `--` statt `@property` definiert wird, erbt immer den Wert ihres übergeordneten Elements.
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

Die Ergebnisse von `var(--box-color)` je nach Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Vater geerbt)

Ein Aspekt benutzerdefinierter Eigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Sie können beispielsweise nicht den Wert einer Eigenschaft festlegen und erwarten, dass Sie den Wert in einer Regel eines Geschwister-Descendants abrufen können.
Die Eigenschaft wird nur für den passenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property`, um die Vererbung zu kontrollieren

Die `@property` At-Regel ermöglicht es Ihnen ausdrücklich anzugeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, es gibt einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp definiert und einen Anfangswert von `teal`.

Das übergeordnete Element setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert war (oder wenn es mit der Doppelpunkte-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und kein Wert für die `--box-color` Eigenschaft innerhalb des `.child` Bereichs deklariert ist, wird der Anfangswert von `teal` verwendet statt `green`, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()` Funktion und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, dass der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()` Funktion

Verwenden der [`var()`](/de/docs/Web/CSS/Reference/Values/var) Funktion, Sie können mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einbeziehen einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben gezeigt (`var(--my-var, var(--my-background, pink))`), ist die korrekte Art, mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Performance dieser Methode bewusst sein, da es mehr Zeit benötigt, um die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie die der benutzerdefinierten Eigenschaften, Kommata. Zum Beispiel: `var(--foo, red, blue)` definiert ein Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem Anfangswert der `@property`

Abgesehen von der Verwendung von `var()`, kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` mit der `@property` At-Regel.
Im Regelset, das der At-Regel folgt, wollen wir `--box-color` auf `pink` setzen, aber es gibt ein Tippfehler im Wertnamen.
Das Gleiche gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, sodass der Anfangswert von `teal` angewendet wird:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb des Satzes gültiger Werte liegt, wird dies als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration und Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde.
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

Wenn jedoch die Werte benutzerdefinierter Eigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden. Daher müssen fast alle Werte als _gültig_ angesehen werden.
Leider können diese gültigen Werte, über die `var()` Funktionsnotation, in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept der _Gültigkeit zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()` Substitution stößt, wird dann der [Anfangs-](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein übergeordnetes Element mit der `color` Eigenschaft gesetzt. Also gehen wir zum nächsten Schritt über.
2. Setzen des Wertes auf seinen **Standartanfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie es ermöglicht, den Anfangswert der Eigenschaft zu definieren:

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

Um die Werte benutzerdefinierter Eigenschaften in JavaScript zu verwenden, ist es genauso wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
- [Syntax benutzerdefinierter Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
