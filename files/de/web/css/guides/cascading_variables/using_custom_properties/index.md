---
title: Verwendung von benutzerdefinierten CSS-Eigenschaften (Variablen)
short-title: Verwendung von benutzerdefinierten Eigenschaften
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: 81f8fcd666952c1782653a3675347c392cc997ca
---

**Benutzerdefinierte Eigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die bestimmte Werte repräsentieren, die in einem Dokument wiederverwendet werden sollen. Sie werden mit der {{cssxref("@property")}} Regel oder durch [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Auf benutzerdefinierte Eigenschaften wird mit der CSS-{{cssxref("var", "var()")}}-Funktion zugegriffen (z. B. **`color: var(--primary-color);`**).

Komplexe Webseiten haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an hunderten verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Mit benutzerdefinierten Eigenschaften kann ein Wert an einer Stelle definiert und dann an mehreren anderen Stellen referenziert werden, was die Handhabung erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als der hexadezimale Farbwert `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}}-Regel ermöglicht mehr Kontrolle über die benutzerdefinierte Eigenschaft und lässt Sie festlegen, ob sie ihren Wert vom Elternteil erbt, was der Initialwert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht in Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklaration benutzerdefinierter Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft deklarieren, indem Sie dem Eigenschaftsnamen zwei Bindestriche als Präfix hinzufügen oder die {{cssxref("@property")}}-Regel verwenden. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfixes von zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`), und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsatzes geschrieben. Das folgende Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Umfang, in dem die benutzerdefinierte Eigenschaft verwendet werden kann. Aus diesem Grund ist es gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Sie können gute Gründe haben, den Anwendungsbereich Ihrer benutzerdefinierten Eigenschaften zu begrenzen.

> [!NOTE]
> Namen von benutzerdefinierten Eigenschaften sind groß- und kleinschreibungssensitiv — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft gegenüber `--My-color` behandelt.

### Verwendung der `@property`-Regel

Die {{cssxref("@property")}}-Regel erlaubt es Ihnen, expressiver mit der Definition einer benutzerdefinierten Eigenschaft zu sein, mit der Möglichkeit, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu kontrollieren. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Wert erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript definieren oder mit ihnen arbeiten möchten, anstatt direkt in CSS, gibt es eine entsprechende API für diesen Zweck. Sie können darüber lesen, wie dies auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzierung von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, das wir mit einigen Stilen versehen möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, von denen einige verschachtelte Elemente aufweisen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln sind unten nicht gezeigt, damit wir uns auf Farben konzentrieren können). Je nach ihren Klassen geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

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

Es gibt die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen. Nachdem wir `--main-bg-color` im `.container`-Bereich definiert und seinen Wert an mehreren Stellen referenziert haben, sehen die aktualisierten Stile so aus:

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

## Verwendung der :root-Pseudoklasse

Für einige CSS-Erklärungen ist es möglich, dies höher in der Kaskade zu deklarieren und CSS-Vererbung das Problem lösen zu lassen. Bei nicht trivialen Projekten ist dies nicht immer möglich. Indem eine benutzerdefinierte Eigenschaft auf der {{cssxref(":root")}}-Pseudoklasse deklariert und bei Bedarf im gesamten Dokument verwendet wird, kann ein CSS-Autor den Bedarf an Wiederholung reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` anstatt `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel demonstriert:

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

- `class="one"`: _ungültiger Wert_, was der Standardwert einer benutzerdefinierten Eigenschaft ist, die auf diese Weise definiert wird
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom übergeordneten Element geerbt)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Beispielsweise können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in einer Regel weiter unten im Dokument zu erhalten. Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property` zur Kontrolle der Vererbung

Die `@property`-Regel lässt Sie explizit angeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property`-Regel. Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp definiert, und ein Anfangswert von `teal`.

Das übergeordnete Element setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelpunktsyntax definiert wäre).

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

Da `inherits: false;` in der Regel gesetzt ist, und ein Wert für die `--box-color`-Eigenschaft im `.child`-Bereich nicht deklariert ist, wird der Anfangswert von `teal` anstelle von `green` verwendet, der vom übergeordneten Element geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()`-Funktion und dem `initial-value` der `@property`-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht helfen würde.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzerdefinierte Eigenschaften unterstützt und einen anderen Wert verwenden kann, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersetzungswert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist. Die Funktion akzeptiert zwei Parameter, wobei alles, was dem ersten Komma folgt, als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Ein Einschließen einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`) zu sehen, ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Leistungsproblematik dieser Methode bewusst sein, da das Durchlaufen der verschachtelten Variablen mehr Zeit in Anspruch nimmt.

> [!NOTE]
> Die Syntax des Fallbacks, wie die der benutzerdefinierten Eigenschaften, erlaubt Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property`-Startwertes

Abgesehen von der Verwendung von `var()` kann der `initial-value`, der in der `@property`-Regel definiert ist, als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` unter Verwendung der `@property`-Regel. Im Regelsatz, der der Regel folgt, möchten wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen. Gleiches gilt für das dritte `<div>`, bei dem wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet. Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, sodass der Anfangswert von `teal` angewendet wird:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes gültiger Werte liegt, wird sie als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine normale CSS-Eigenschaft stößt (zum Beispiel ein Wert von `16px` für die {{cssxref("color")}}-Eigenschaft), verwirft er die Deklaration, und den Elementen werden die Werte zugewiesen, die sie hätten, wenn die Deklaration nicht existierte. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte benutzerdefinierter Eigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, daher muss er nahezu alle Werte als _gültig_ betrachten. Leider können diese gültigen Werte in einem Kontext, in dem sie möglicherweise keinen Sinn ergeben, über die `var()`-Funktionalität verwendet werden. Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept der _Gültigkeit zur berechneten Zeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Ersetzung stößt, dann wird der [Anfangswert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [vererbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genauso wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` durch `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung ergibt die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Prüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil, bei dem die `color`-Eigenschaft gesetzt ist. Daher gehen wir zum nächsten Schritt über.
2. Den Wert auf seinen **Standardanfangswert** setzen, der schwarz ist.

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

Um die Werte benutzerdefinierter Eigenschaften in JavaScript zu verwenden, ist es wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@property")}}-Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
