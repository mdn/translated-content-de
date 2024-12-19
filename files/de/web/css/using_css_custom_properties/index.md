---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{CSSRef}}

**Benutzereigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen, die in einem Dokument wiederverwendet werden sollen. Sie werden mit dem {{cssxref("@property")}}-At-Regel oder durch [Benutzereigenschafts-Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) festgelegt. Benutzereigenschaften werden über die CSS-{{cssxref("var", "var()")}}-Funktion aufgerufen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Suche und das Ersetzen in allen Regeln und CSS-Dateien. Benutzereigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Handhabung erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Beispielsweise ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzereigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert von ihrem Elternteil.
Das {{cssxref("@property")}}-At-Regel bietet mehr Kontrolle über die Benutzereigenschaft und erlaubt Ihnen zu spezifizieren, ob sie ihren Wert von einem Elternteil erbt, was der Initialwert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie sie nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von Benutzereigenschaften

In CSS können Sie eine Benutzereigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder mit der {{cssxref("@property")}}-At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden können.

### Verwendung eines Präfixes mit zwei Bindestrichen (`--`)

Eine Benutzereigenschaft mit dem Präfix von zwei Bindestrichen beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben.
Das folgende Beispiel zeigt, wie eine Benutzereigenschaft `--main-bg-color` erstellt wird und wie ein [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwendet wird:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor (`<section>`-Elemente im obigen Beispiel) definiert den Bereich, in dem die Benutzereigenschaft verwendet werden kann.
Aus diesem Grund ist es gängige Praxis, Benutzereigenschaften auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Umfang Ihrer Benutzereigenschaften zu begrenzen.

> [!NOTE]
> Benutzereigenschaftsnamen sind case-sensitiv — `--my-color` wird als eine andere Benutzereigenschaft als `--My-color` behandelt.

### Verwendung des `@property`-At-Regels

Das {{cssxref("@property")}}-At-Regel ermöglicht es Ihnen, bei der Definition einer Benutzereigenschaft ausdrucksstärker zu sein, indem Sie eine Typ-Zuordnung mit der Eigenschaft verknüpfen, Standardwerte festlegen und die Vererbung steuern können.
Das folgende Beispiel erstellt eine Benutzereigenschaft namens `--logo-color`, die ein [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Benutzereigenschaften in JavaScript anstelle von direkt in CSS definieren oder verwenden möchten, gibt es eine entsprechende API zu diesem Zweck.
Sie können in der [Seite über CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen, wie dies funktioniert.

### Referenzierung von Benutzereigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine Benutzereigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Benutzereigenschaften

Lasst uns mit etwas HTML beginnen, dem wir einige Stile zuweisen möchten.
Es gibt ein `<div>`, das als Container dient und einige Kindelemente enthält, einige mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um ein paar verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können).
Je nach ihrer Klasse geben wir den Elementen `cornflowerblue` oder `aquamarine` Hintergrundfarben:

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

Dies erzeugt das folgende Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, Benutzereigenschaften zu nutzen, um wiederkehrende Werte über diese Regeln hinweg zu ersetzen.
Nachdem `--main-bg-color` im `.container`-Bereich definiert wurde und der Wert an mehreren Stellen referenziert wird, sehen die aktualisierten Stile so aus:

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

## Verwendung der :root-Pseudoklasse

Für einige CSS-Deklarationen ist es möglich, dies höher in der Kaskade zu deklarieren und die CSS-Vererbung das Problem lösen zu lassen. Für nicht triviale Projekte ist dies nicht immer möglich. Durch das Deklarieren einer Benutzereigenschaft auf der {{cssxref(":root")}}-Pseudoklasse und deren Verwendung, wo sie im Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

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

## Vererbung von Benutzereigenschaften

Eine Benutzereigenschaft, die mit zwei Bindestrichen `--` statt `@property` definiert wird, erbt immer den Wert ihres Elternteils.
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

Die Ergebnisse von `var(--box-color)` je nach Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer so definierten Benutzereigenschaft ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (geerbt von seinem Elternteil)

Ein Aspekt von Benutzereigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in einer Regel eines Geschwisters oder Nachkommen abzurufen.
Die Eigenschaft wird nur für den passenden Selektor und dessen Nachkommen festgelegt.

### Verwendung von `@property` zur Steuerung der Vererbung

Das `@property`-At-Regel ermöglicht es Ihnen, explizit festzulegen, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine Benutzereigenschaft mit dem `@property`-At-Regel.
Die Vererbung ist deaktiviert, ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp ist definiert, und ein Initialwert von `cornflowerblue` ist festgelegt.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kind-Element verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn Vererbung aktiviert wäre (oder wenn es mit der Doppelstrich-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel festgelegt ist und ein Wert für die `--box-color` Eigenschaft nicht innerhalb des `.child`-Bereichs deklariert ist, wird der Initialwert von `cornflowerblue` verwendet, anstelle des von dem Elternteil geerbten `green`:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Benutzereigenschaften

Sie können Fallback-Werte für Benutzereigenschaften mittels der `var()`-Funktion und dem `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks behandeln den Fall, in dem der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definieren von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Benutzereigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Benutzereigenschaft ungültig ist.
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

Die Einbeziehung einer Benutzereigenschaft als Fallback, wie im zweiten obigen Beispiel (`var(--my-var, var(--my-background, pink))`) zu sehen, ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Leistungsfolgen dieser Methode bewusst sein, da es mehr Zeit benötigt, um die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt Kommas, wie die der [Benutzereigenschaften](https://www.w3.org/TR/css-variables/#custom-property). Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property` Initialwerts

Abgesehen von der Verwendung von `var()` kann der in der `@property`-At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
In der Tat haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel legt einen Initialwert von `--box-color` auf `cornflowerblue` mit dem `@property`-At-Regel fest.
Im Regelset nach dem At-Regel möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Das gleiche gilt für das dritte `<div>`, wo wir `2rem` für die Benutzereigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/color_value) erwartet.
Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, daher wird der Initialwert von `cornflowerblue` angewendet:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihrer Menge gültiger Werte liegt, wird sie als _ungültig_ betrachtet.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (z.B. einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft) entdeckt, verwirft er die Deklaration, und den Elementen werden die Werte zugewiesen, die sie hätten, wenn die Deklaration nicht existieren würde.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige Regel `color: blue` wird stattdessen angewendet:

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

Wenn jedoch die Werte von Benutzereigenschaften analysiert werden, weiß der Browser noch nicht, wo sie verwendet werden, daher muss er nahezu alle Werte als _gültig_ betrachten.
Leider können diese gültigen Werte über die `var()` funktionale Notation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, die zum Konzept von _gültig zur Berechnungszeit_ führen.

Wenn der Browser auf eine ungültige `var()` Substitution trifft, wird der [initiale](/de/docs/Web/CSS/initial_value) oder [geerbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist das gleiche wie das letzte, außer dass wir eine Benutzereigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution macht die Eigenschaft keinen Sinn, sodass der Browser diese Situation in zwei Schritten handhabt:

1. Prüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil mit gesetzter `color` Eigenschaft. Also gehen wir zum nächsten Schritt.
2. Setzen Sie den Wert auf seinen **standardmäßigen Initialwert**, der schwarz ist.

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

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem der initiale Wert der Eigenschaft festgelegt wird:

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

Um die Werte von Benutzereigenschaften in JavaScript zu verwenden, ist es genau wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Syntax der Benutzereigenschaft](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
