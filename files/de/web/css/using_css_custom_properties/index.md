---
title: Verwendung von CSS-Custom-Properties (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{CSSRef}}

**Custom Properties** (manchmal auch **CSS-Variablen** oder **kaskadierende Variablen** genannt) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen, die im gesamten Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}}-At-Regel oder durch [Custom-Property-Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Der Zugriff auf Custom Properties erfolgt über die CSS-{{cssxref("var", "var()")}}-Funktion (z.B. **`color: var(--primary-color);`**).

Komplexe Websites verfügen über sehr große Mengen an CSS, was häufig zu vielen sich wiederholenden CSS-Werten führt. Zum Beispiel ist es üblich, dass die gleiche Farbe an Hunderten von verschiedenen Stellen in Stylesheets verwendet wird. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung in allen Regeln und CSS-Dateien. Custom Properties ermöglichen es, einen Wert an einer Stelle zu definieren und ihn dann an mehreren anderen Stellen zu referenzieren, wodurch die Arbeit erleichtert wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Custom Properties, die [mithilfe von zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert vom übergeordneten Element. Die {{cssxref("@property")}}-At-Regel ermöglicht eine genauere Kontrolle über die Custom Property und erlaubt es, festzulegen, ob sie ihren Wert vom Elternteil erbt, welchen Anfangswert sie hat und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder alles außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklaration von Custom Properties

In CSS können Sie eine Custom Property mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder mithilfe der {{cssxref("@property")}}-At-Regel deklarieren. Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwenden eines Präfixes von zwei Bindestrichen (`--`)

Eine Custom Property, die mit zwei Bindestrichen versehen ist, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn/CSS/Building_blocks/Values_and_units) sein kann. Wie jede andere Eigenschaft wird dies innerhalb eines Regelsets geschrieben. Das folgende Beispiel zeigt, wie eine Custom Property `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelset gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Element/section)-Elemente im obigen Beispiel) definiert den Bereich, in dem die Custom Property verwendet werden kann. Aus diesem Grund ist es üblich, Custom Properties auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, sodass sie global referenziert werden kann:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss jedoch nicht immer der Fall sein: Vielleicht haben Sie einen guten Grund, die Reichweite Ihrer Custom Properties zu begrenzen.

> [!NOTE]
> Custom Property-Namen sind case-sensitive — `--my-color` wird als separate Custom Property von `--My-color` behandelt.

### Verwendung der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel ermöglicht es Ihnen, die Definition einer Custom Property präziser zu gestalten, indem Sie eine Typzuordnung mit der Eigenschaft ermöglichen, Standardwerte festlegen und die Vererbung steuern. Das folgende Beispiel erstellt eine Custom Property mit dem Namen `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Custom Properties nicht direkt in CSS, sondern in JavaScript definieren oder verwenden möchten, gibt es eine entsprechende API zu diesem Zweck. Sie können auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen, wie das funktioniert.

### Referenzieren von Custom Properties mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Custom Property wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Custom Properties

Beginnen wir mit etwas HTML, dem wir einige Stile zuweisen möchten. Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, darunter einige mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht angezeigt, damit wir uns auf die Farben konzentrieren können). Abhängig von ihren Klassen vergeben wir den Elementen Hintergrundfarben von `cornflowerblue` oder `aquamarine`:

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

Es besteht die Möglichkeit, Custom Properties zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen. Nach der Definition von `--main-bg-color` im `.container`-Bereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und das CSS-Erbe dieses Problem lösen zu lassen. Für nicht triviale Projekte ist dies nicht immer möglich. Indem man eine Custom Property auf der {{cssxref(":root")}}-Pseudoklasse deklariert und sie dort verwendet, wo sie im gesamten Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit von Wiederholungen verringern:

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

Dies führt zum gleichen Ergebnis wie im vorherigen Beispiel, erlaubt aber eine einzige kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was äußerst nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Custom Properties

Eine Custom Property, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils. Dies wird im folgenden Beispiel demonstriert:

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

Die Ergebnisse von `var(--box-color)`, abhängig von der Vererbung, sind wie folgt:

- `class="one"`: _Ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Custom Property ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (von seinem Elternteil geerbt)

Ein Aspekt von Custom Properties, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten. Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet. Beispielsweise können Sie den Wert einer Eigenschaft nicht setzen und erwarten, ihn in der Regel eines Nachfahren eines Geschwisters abzurufen. Die Eigenschaft ist nur für den passenden Selektor und seine Nachkommen festgelegt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property`-At-Regel lässt Sie explizit angeben, ob die Eigenschaft vererbt wird oder nicht. Das folgende Beispiel erstellt eine Custom Property mithilfe der `@property`-At-Regel. Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp definiert, und ein Anfangswert von `cornflowerblue` ist festgelegt.

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color`-Eigenschaft nicht im `.child`-Bereich deklariert ist, wird der Anfangswert von `cornflowerblue` anstelle von `green` verwendet, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Custom Properties

Sie können Fallback-Werte für Custom Properties mit der `var()`-Funktion und dem `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Custom-Properties nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft. Fallbacks decken den Fall ab, in dem der Browser CSS-Custom-Properties unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Festlegen von Fallbacks in der `var()`-Funktion

Mithilfe der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Custom Property. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Custom Property ungültig ist. Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugeordnet wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Beispiel:

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

Das Einschließen einer Custom Property als Fallback, wie im zweiten Beispiel oben zu sehen (`var(--my-var, var(--my-background, pink))`), ist die richtige Methode, um mehr als einen Fallback mit `var()` bereitzustellen. Sie sollten sich jedoch der Auswirkungen dieser Methode auf die Performance bewusst sein, da es mehr Zeit in Anspruch nimmt, die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks, wie die von [Custom Properties](https://www.w3.org/TR/css-variables/#custom-property), erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property`-Anfangswert

Neben der Verwendung von `var()` kann das `initial-value`, das in der `@property`-At-Regel definiert ist, als Fallback-Mechanismus verwendet werden. Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` mithilfe der `@property`-At-Regel. Im Regelset, das auf die At-Regel folgt, möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen. Das Gleiche gilt für das dritte `<div>`, wo wir `2rem` für die Custom Property verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet. Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, daher wird der Anfangswert von `cornflowerblue` angewendet:

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

## Ungültige Custom Properties

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) zugewiesen werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes gültiger Werte liegt, wird er als _ungültig_ angesehen.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (z. B. einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft) antrifft, verwirft er die Deklaration, und den Elementen werden die Werte zugewiesen, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte. Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte von Custom Properties geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, und muss daher fast alle Werte als _gültig_ betrachten. Leider können diese gültigen Werte in einem Zusammenhang, in dem sie keinen Sinn ergeben, verwendet werden, was zu ungültigen CSS-Anweisungen führen kann und zum Konzept des _bei Berechnungszeitpunkt gültig_ wird.

Wenn der Browser auf eine ungültige `var()`-Substitution trifft, wird der [anfängliche](/de/docs/Web/CSS/initial_value) oder [vererbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet. Dieses Beispiel ist genau wie das letzte, außer dass wir eine Custom Property verwenden.

Der Browser ersetzt den Wert von `--text-color` durch `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Ersetzung macht die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} erbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil mit der festgelegten `color`-Eigenschaft. Gehen Sie also zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **Standardanfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem sie den Anfangswert der Eigenschaft definiert:

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

Um die Werte von Custom Properties in JavaScript zu verwenden, ist es wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Custom-Property-Syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul
