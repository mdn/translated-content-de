---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
short-title: Verwendung von Benutzereigenschaften
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

**Benutzereigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die bestimmte Werte repräsentieren, um sie im gesamten Dokument wiederzuverwenden. Sie werden mittels des {{cssxref("@property")}} At-Regel oder durch [Benutzereigenschaftssyntax](/de/docs/Web/CSS/Reference/Properties/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Benutzereigenschaften werden mit der CSS {{cssxref("var", "var()")}} Funktion aufgerufen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Beispielsweise sieht man häufig, dass dieselbe Farbe an Hunderten verschiedener Stellen in Stylesheets verwendet wird. Eine Farbe, die an vielen Stellen dupliziert wurde, zu ändern, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Benutzereigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen darauf zu verweisen, was die Arbeit erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` leichter zu verstehen als die Hexadezimalfarbe `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzereigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) definiert wurden, unterliegen der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}} At-Regel erlaubt mehr Kontrolle über die Benutzereigenschaft und ermöglicht es anzugeben, ob sie ihren Wert von einem Elternteil erbt, was der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media-Queries und Container-Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder alles andere außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media-Query oder Container-Query verwenden können.

## Deklaration von Benutzereigenschaften

Im CSS können Sie eine Benutzereigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch die {{cssxref("@property")}} At-Regel deklarieren. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfixes von zwei Bindestrichen (`--`)

Eine mit zwei Bindestrichen vorangestellte Benutzereigenschaft beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`), und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelnblocks geschrieben. Das folgende Beispiel zeigt, wie man eine Benutzereigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/Reference/Values/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelnblock gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Umfang, in dem die Benutzereigenschaft verwendet werden kann. Daher ist es üblich, Benutzereigenschaften auf der {{cssxref(":root")}} Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Möglicherweise haben Sie einen guten Grund, den Umfang Ihrer Benutzereigenschaften zu begrenzen.

> [!NOTE]
> Benutzereigenschaftsnamen sind case-sensitive — `--my-color` wird als separate Benutzereigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht es Ihnen, ausdrucksvoller bei der Definition einer Benutzereigenschaft zu sein, indem Sie die Möglichkeit haben, einen Datentyp mit der Eigenschaft zu verknüpfen, Standardwerte zu setzen und die Vererbung zu steuern. Das folgende Beispiel erstellt eine Benutzereigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Benutzereigenschaften in JavaScript anstelle von direkt in CSS definieren oder damit arbeiten möchten, gibt es eine entsprechende API zu diesem Zweck. Sie können nachlesen, wie das funktioniert, auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API).

### Referenzieren von Benutzereigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Benutzereigenschaft verwenden, nutzen Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standardwerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Benutzereigenschaften

Beginnen wir mit etwas HTML, für das wir einige Stile anwenden möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige davon mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht angezeigt, damit wir uns auf Farben konzentrieren können). Je nach ihrer Klasse geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

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

Das ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, Benutzereigenschaften zu verwenden, um sich wiederholende Werte über diese Regeln zu ersetzen. Nachdem `--main-bg-color` im `.container`-Bereich definiert und der Wert an mehreren Stellen referenziert wurde, sehen die aktualisierten Stile wie folgt aus:

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

Für einige CSS-Deklarationen ist es möglich, dies höher in der Kaskade zu deklarieren und das CSS-Erbe das Problem lösen zu lassen. Bei nicht-trivialen Projekten ist dies nicht immer möglich. Durch die Deklaration einer Benutzereigenschaft auf der {{cssxref(":root")}} Pseudoklasse und deren Nutzung dort, wo sie im ganzen Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit von Wiederholungen reduzieren:

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

## Vererbung von Benutzereigenschaften

Eine mit zwei Bindestrichen `--` anstelle von `@property` definierte Benutzereigenschaft erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel demonstriert:

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

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Benutzereigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Elternteil geerbt)

Ein Aspekt von Benutzereigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in der Regel eines Nachkommen eines Geschwisters abzurufen. Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property`, um die Vererbung zu steuern

Die `@property` At-Regel lässt Sie explizit angeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine Benutzereigenschaft mit der `@property` At-Regel. Die Vererbung ist deaktiviert, es wurde ein [`<color>`](/de/docs/Web/CSS/Reference/Values/color_value) Datentyp definiert und ein Anfangswert von `teal`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe. Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelstrichsyntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und kein Wert für die `--box-color` Eigenschaft innerhalb des `.child` Bereichs erklärt ist, wird der Anfangswert `teal` anstelle von `green` verwendet, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Benutzereigenschaften

Sie können Fallback-Werte für Benutzereigenschaften mit der `var()` Funktion und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft. Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Festlegen von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/Reference/Values/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Benutzereigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Benutzereigenschaft ungültig ist. Die Funktion akzeptiert zwei Parameter, wobei alles, was dem ersten Komma folgt, als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einschließen einer Benutzereigenschaft als Fallback, wie im zweiten obigen Beispiel gezeigt (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Leistungsauswirkungen dieser Methode bewusst sein, da es mehr Zeit in Anspruch nimmt, um die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt wie die der Benutzereigenschaften Kommata. Beispielsweise definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property` Initialwerts

Abgesehen von der Verwendung von `var()`, kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden. In der Tat haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` unter Verwendung der `@property` At-Regel. Im auf die At-Regel folgenden Regelnblock wollen wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen. Das gleiche gilt für das dritte `<div>`, wo wir `2rem` für die Benutzereigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet. Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, daher wird der Anfangswert `teal` verwendet:

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

## Ungültige Benutzereigenschaften

Jede CSS-Eigenschaft kann eine definierte [Menge von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihrer Menge gültiger Werte liegt, wird dies als _ungültig_ betrachtet.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft) vorfindet, verwirft er die Deklaration und Elemente erhalten die Werte, die sie gehabt hätten, wenn die Deklaration nicht existieren würde. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue` Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte von Benutzereigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss. Leider können diese gültigen Werte, über die `var()` Funktionalnotation, in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn machen. Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()` Ersetzung trifft, wird der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genau wie das letzte, außer dass wir eine Benutzereigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung ergibt die Eigenschaft keinen Sinn, sodass der Browser diese Situation in zwei Schritten behandelt:

1. Überprüft, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein Elternteil mit eingestellter `color` Eigenschaft. Deshalb gehen wir zum nächsten Schritt über.
2. Setzt den Wert auf seinen **standardmäßigen Anfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie den Anfangswert der Eigenschaft definiert:

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

- [Benutzereigenschaftssyntax](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
