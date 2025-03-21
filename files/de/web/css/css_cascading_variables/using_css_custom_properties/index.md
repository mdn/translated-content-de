---
title: Verwenden von benutzerdefinierten CSS-Eigenschaften (Variablen)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

**Benutzerdefinierte Eigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden, um spezifische Werte zu repräsentieren, die in einem Dokument wiederverwendet werden sollen. Sie werden mit dem {{cssxref("@property")}} At-Regel oder durch die [Benutzerdefinierte Eigenschafts-Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Benutzerdefinierte Eigenschaften werden mit der CSS {{cssxref("var", "var()")}} Funktion abgerufen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen sich wiederholenden CSS-Werten führt. Beispielsweise ist es üblich, dass dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets verwendet wird. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suchen-und-Ersetzen-Aktion über alle Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften erlauben es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Handhabung erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` leichter zu verstehen als der hexadezimale Farbwert `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem Elternteil.
Die {{cssxref("@property")}} At-Regel ermöglicht eine größere Kontrolle über die benutzerdefinierte Eigenschaft und lässt Sie angeben, ob sie ihren Wert von einem Elternteil erbt, was der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes innerhalb einer Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft deklarieren, indem Sie der Eigenschaftsname zwei Bindestriche als Präfix voranstellen oder indem Sie die {{cssxref("@property")}} At-Regel verwenden.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwenden eines Präfixes von zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft mit einem Präfix von zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird diese innerhalb eines Regelsatzes geschrieben.
Das folgende Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Element/section) Elemente im obigen Beispiel) definiert den Bereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es übliche Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}} Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Sie könnten einen guten Grund haben, den Bereich Ihrer benutzerdefinierten Eigenschaften zu begrenzen.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind case-sensitiv — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwenden der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel erlaubt es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksvoller zu sein, indem Sie einen Typ mit der Eigenschaft assoziieren, Standardwerte festlegen und die Vererbung steuern können.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die ein [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle direkt in CSS definieren oder damit arbeiten möchten, gibt es eine entsprechende API zu diesem Zweck.
Sie können auf der Seite [CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen, wie das funktioniert.

### Referenzieren von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine benutzerdefinierte Eigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, das wir stilistisch anpassen möchten.
Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige mit geschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige unterschiedliche Elemente basierend auf ihren Klassen zu gestalten (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf Farben konzentrieren können).
Abhängig von ihren Klassen geben wir Elementen `cornflowerblue` oder `aquamarine` Hintergrundfarben:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es besteht die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container` Bereich und dem Verweis auf seinen Wert an mehreren Stellen sehen die aktualisierten Stile so aus:

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

## Verwendung der :root Pseudo-Klasse

Für einige CSS-Deklarationen ist es möglich, dies weiter oben in der Kaskade zu deklarieren und CSS-Vererbung dieses Problem lösen zu lassen. Bei nicht trivialen Projekten ist dies nicht immer möglich. Durch das Deklarieren einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}} Pseudo-Klasse und deren Verwendung dort, wo es im Dokument benötigt wird, kann ein CSS-Autor den Bedarf an Wiederholung verringern:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, erlaubt aber eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später über das gesamte Projekt hinweg ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert ist, erbt immer den Wert ihres Elternteils.
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

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, dass Sie den Wert in der Regel eines Nachfahren eines Geschwisters abrufen können.
Die Eigenschaft ist nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwenden von `@property`, um die Vererbung zu steuern

Die `@property` At-Regel lässt Sie ausdrücklich angeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp ist definiert, und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn sie mit der Syntax der doppelten Bindestriche definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist, und ein Wert für die `--box-color` Eigenschaft nicht im `.child` Bereich deklariert ist, wird der Anfangswert von `cornflowerblue` verwendet anstelle von `green`, das von den Eltern geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()` Funktion und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS benutzerdefinierte Eigenschaften unterstützt und einen anderen Wert verwenden kann, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Definieren von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann beim Arbeiten mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) nützlich sein.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
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

Die Einbeziehung einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch bewusst sein, dass diese Methode Auswirkungen auf die Leistung hat, da es mehr Zeit braucht, um durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks, ähnlich der von [benutzerdefinierten Eigenschaften](https://www.w3.org/TR/css-variables/#custom-property), erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Anfangswert

Abgesehen von der Verwendung von `var()`, kann der `initial-value`, der in der `@property` At-Regel definiert ist, als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` mithilfe der `@property` At-Regel.
Im Regelsatz, der auf die At-Regel folgt, möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet.
Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, sodass der Anfangswert von `cornflowerblue` angewendet wird:

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

Jeder CSS-Eigenschaft kann eine definierte [Werte-Menge](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb seiner Menge gültiger Werte liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (z.B. ein Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration und Elemente werden den Werten zugewiesen, die sie hätten, wenn die Deklaration nicht existierte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue` Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte von benutzerdefinierten Eigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss.
Leider können diese gültigen Werte durch die `var()` Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur berechneten Zeit_ führt.

Wenn der Browser auf eine ungültige `var()` Substitution stößt, dann wird der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial-value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, also verarbeitet der Browser diese Situation in zwei Schritten:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil, der die `color` Eigenschaft gesetzt hat. Daher gehen wir zum nächsten Schritt über.
2. Setzen des Wertes auf den **Standardanfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie erlaubt, den Anfangswert der Eigenschaft zu definieren:

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

Um die Werte von benutzerdefinierten Eigenschaften in JavaScript zu verwenden, ist es genauso wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Benutzerdefinierte Eigenschafts-Syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
