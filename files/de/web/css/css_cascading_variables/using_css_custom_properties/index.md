---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
short-title: Verwendung benutzerdefinierter Eigenschaften
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: df4d489a68324f1da2469f5f118df8c36c9659d4
---

{{CSSRef}}

**Benutzereigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen, die in einem Dokument wiederverwendet werden sollen. Sie werden mit der {{cssxref("@property")}} At-Regel oder durch die [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Benutzerdefinierte Eigenschaften werden mit der CSS {{cssxref("var", "var()")}} Funktion aufgerufen (z. B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was häufig zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und ihn dann an mehreren anderen Stellen zu referenzieren, sodass die Arbeit damit erleichtert wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` einfacher zu verstehen als die Hexadezimalfarbe `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzereigenschaften, die [mit zwei Bindestrichen (`--`) definiert werden](/de/docs/Web/CSS/--*), unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und übernehmen ihren Wert vom Elternteil.
Die {{cssxref("@property")}} At-Regel ermöglicht mehr Kontrolle über die benutzerdefinierte Eigenschaft und erlaubt es Ihnen zu spezifizieren, ob sie ihren Wert von einem Elternteil erbt, was der initiale Wert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht in Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklaration benutzerdefinierter Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch die Verwendung der {{cssxref("@property")}} At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfixes aus zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft mit dem Präfix aus zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der jeden [gültigen CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) darstellen kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben.
Das folgende Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor (z. B. [`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Bereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es üblich, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}} Pseudoklasse zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss jedoch nicht immer der Fall sein: Es gibt möglicherweise gute Gründe, den Bereich Ihrer benutzerdefinierten Eigenschaften zu begrenzen.

> [!NOTE]
> Namen für benutzerdefinierte Eigenschaften sind case-sensitive — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht es Ihnen, die Definition einer benutzerdefinierten Eigenschaft ausdrucksstärker zu gestalten, indem sie die Möglichkeit bietet, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript statt direkt in CSS definieren oder bearbeiten möchten, gibt es für diesen Zweck eine entsprechende API.
Wie das funktioniert, erfahren Sie auf der Seite zur [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API).

### Referenzierung benutzerdefinierter Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie durch Referenzierung der Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines standardmäßigen Eigenschaftswerts:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, das wir mit einigen Stilen versehen möchten.
Es gibt ein `<div>`, das als Container dient und einige Kindelemente umfasst, von denen einige verschachtelte Elemente haben:

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

Wir verwenden das folgende CSS, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden hier nicht angezeigt, damit wir uns auf die Farben konzentrieren können).
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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen.
Nachdem `--main-bg-color` im Bereich der `.container` definiert und dessen Wert an mehreren Stellen referenziert wird, sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, dies höher in der Kaskade zu deklarieren und CSS-Vererbung dieses Problem lösen zu lassen. Für nicht-triviale Projekte ist dies nicht immer möglich. Durch die Deklaration einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}} Pseudoklasse und deren Verwendung dort, wo sie im Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorhergehende Beispiel, erlaubt jedoch eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils.
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

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (geerbt von ihrem Elternteil)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in einer Regel eines Geschwisterelements zu erhalten.
Die Eigenschaft ist nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property`, um die Vererbung zu steuern

Die `@property` At-Regel lässt Sie explizit festlegen, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp ist definiert und ein Anfangswert von `teal` ist festgelegt.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet auch `background-color: var(--box-color)`, und man würde erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert ist (oder wenn es mit der Doppelt-Bindestrich-Syntax definiert wird).

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

Weil `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color` Eigenschaft nicht im `.child` Bereich deklariert ist, wird der Anfangswert `teal` verwendet statt `green`, das vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()` Funktion und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht zur Behebung von Kompatibilitätsproblemen verwendet, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert hierbei nicht helfen würde.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, falls die gewünschte Variable noch nicht definiert oder ungültig ist.

### Definition von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter und weist alles nach dem ersten Komma dem zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Die Verwendung einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` zu versehen.
Sie sollten sich jedoch der Leistungsbelastung dieser Methode bewusst sein, da es mehr Zeit in Anspruch nimmt, die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt wie die von benutzerdefinierten Eigenschaften Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Anfangswert

Abgesehen von der Verwendung von `var()` kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` mithilfe der `@property` At-Regel.
Im Regelset, das auf die At-Regel folgt, möchten wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, sodass der Anfangswert `teal` angewendet wird:

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

Jedem CSS-Eigenschaft kann eine definierte [Menge von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb der gültigen Werte liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft) erkennt, verwirft er die Deklaration und Elementen werden die Werte zugewiesen, die sie hätten, wenn die Deklaration nicht existierte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige Regel `color: blue` wird stattdessen angewendet:

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

Wenn jedoch die Werte benutzerdefinierter Eigenschaften analysiert werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachtet.
Leider können diese gültigen Werte in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept _dieser gültig zur Berechnungszeit_ führt.

Wenn der Browser eine ungültige `var()` Substitution erkennt, wird der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` durch `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, sodass der Browser diese Situation in zwei Schritten behandelt:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil, bei dem die `color` Eigenschaft gesetzt ist. Also fahren wir mit dem nächsten Schritt fort.
2. Setzen Sie den Wert auf den **Standard-Anfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie ermöglicht, den Anfangswert der Eigenschaft festzulegen:

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

Um die Werte benutzerdefinierter Eigenschaften in JavaScript zu verwenden, ist es genau wie bei standardmäßigen Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Syntax für benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
