---
title: Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{CSSRef}}

**Benutzerdefinierte Eigenschaften** (manchmal auch **CSS-Variablen** oder **kaskadierende Variablen** genannt) sind Entitäten, die von CSS-Autoren definiert werden und spezifische Werte darstellen, die in einem Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}}-At-Regel oder durch [benutzerdefinierte Eigenschaften-Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Benutzerdefinierte Eigenschaften werden mit der CSS-Funktion {{cssxref("var", "var()")}} (z.B. **`color: var(--primary-color);`**) aufgerufen.

Komplexe Websites enthalten oft große Mengen an CSS, was häufig zu vielen wiederholten CSS-Werten führt. Beispiel: Es ist üblich, die gleiche Farbe in Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung in allen Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften erlauben es, einen Wert an einem Ort zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Arbeit erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als der hexadezimale Farbcode `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert von ihrem übergeordneten Element.
Die {{cssxref("@property")}}-At-Regel ermöglicht mehr Kontrolle über die benutzerdefinierte Eigenschaft und lässt Sie festlegen, ob diese ihren Wert von einem Elternteil erbt, welcher der Ausgangswert ist, und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes für jede Eigenschaft an einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden. Das bedeutet, dass sie nicht in einer Media Query oder Container Query verwendet werden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch die {{cssxref("@property")}}-At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie man diese beiden Methoden verwendet.

### Verwenden eines Präfixes von zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft mit einem Präfix von zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben.
Das folgende Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section)-Elemente im obigen Beispiel) definiert den Geltungsbereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Möglicherweise haben Sie einen guten Grund, den Geltungsbereich Ihrer benutzerdefinierten Eigenschaften einzuschränken.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind groß- und kleinschreibungssensitiv — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwenden der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel erlaubt es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksstärker zu sein, mit der Möglichkeit, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu kontrollieren.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die erwartet, eine [`<color>`](/de/docs/Web/CSS/color_value) zu sein:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle von direkt in CSS definieren oder verwenden möchten, gibt es eine entsprechende API dafür.
Sie können lesen, wie dies auf der [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)-Seite funktioniert.

### Referenzieren von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, dem wir einige Stile zuweisen möchten.
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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht gezeigt, damit wir uns auf Farben konzentrieren können).
Je nach ihren Klassen geben wir Elementen `cornflowerblue`- oder `aquamarine`-Hintergrundfarben:

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

Dies führt zu folgendem Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um wiederholte Werte in diesen Regeln zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container`-Geltungsbereich und der Bezugnahme auf dessen Wert an mehreren Stellen sehen die aktualisierten Stile so aus:

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

## Verwenden der :root-Pseudoklasse

Für einige CSS-Deklarationen ist es möglich, diese weiter oben in der Kaskade zu deklarieren und CSS-Vererbung dieses Problem lösen zu lassen. Bei nicht-trivialen Projekten ist dies nicht immer möglich. Durch Deklarieren einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}}-Pseudoklasse und deren Nutzung an benötigten Stellen im Dokument kann ein CSS-Autor die Notwendigkeit zur Wiederholung verringern:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, übernimmt immer den Wert ihres Elternteils.
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

- `class="one"`: _ungültiger Wert_, der Standardwert einer benutzerdefinierten Eigenschaft, die auf diese Weise definiert wird
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (vom Elternteil vererbt)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Sie können beispielsweise nicht den Wert einer Eigenschaft festlegen und erwarten, dass dieser Wert in der Regel eines Geschwistersview wird.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwenden von `@property`, um die Vererbung zu kontrollieren

Die `@property`-At-Regel lässt Sie explizit angeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property`-At-Regel.
Die Vererbung ist deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp ist definiert und ein Anfangswert von `cornflowerblue` ist festgelegt.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn Vererbung aktiviert wäre (oder wenn es mit der Doppeldash-Syntax definiert war).

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

Da `inherits: false;` in der At-Regel gesetzt ist und kein Wert für die `--box-color`-Eigenschaft im `.child`-Geltungsbereich deklariert ist, wird der Anfangswert von `cornflowerblue` anstatt `green` verwendet, der vom Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()`-Funktion und dem `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Definieren von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter und weist alles, was dem ersten Komma folgt, als zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Einen Fallback-Wert in einer benutzerdefinierten Eigenschaft einzuschließen, wie im zweiten Beispiel oben gezeigt (`var(--my-var, var(--my-background, pink))`), ist der korrekte Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Performance dieser Methode bewusst sein, da das Durchlaufen der verschachtelten Variablen mehr Zeit in Anspruch nimmt.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie die von [benutzerdefinierten Eigenschaften](https://www.w3.org/TR/css-variables/#custom-property), Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` – alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property` Ausgangswerts

Abgesehen von der Verwendung von `var()` kann der `initial-value`, der in der `@property`-At-Regel definiert ist, als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel legt einen Anfangswert von `--box-color` auf `cornflowerblue` mit der `@property`-At-Regel fest.
In dem Regelset, das der At-Regel folgt, möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Das Gleiche gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die erwartet, einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) zu haben.
Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, daher wird der Anfangswert von `cornflowerblue` angewendet:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb seines Satzes von gültigen Werten liegt, wird dieser als _ungültig_ angesehen.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft trifft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft), verwirft er die Deklaration, und den Elementen werden die Werte zugewiesen, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn die Werte von benutzerdefinierten Eigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss.
Leider können diese gültigen Werte in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben, über die `var()`-Funktionalität.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution trifft, dann wird der [initiale](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, nur verwenden wir eine benutzerdefinierte Eigenschaft.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution macht die Eigenschaft keinen Sinn, daher bearbeitet der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Das ist sie, aber dieses `<p>` hat kein Elternteil mit gesetzter `color`-Eigenschaft. Also gehen wir zum nächsten Schritt über.
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

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem der Ausgangswert der Eigenschaft definiert wird:

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

- [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
