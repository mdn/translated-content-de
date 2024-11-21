---
title: Verwenden von CSS-Custom-Properties (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: 9818785aef0243e1a969ae9a4d4f5293cdef3527
---

{{CSSRef}}

**Custom Properties** (manchmal auch als **CSS-Variablen** oder **Kaskadierungsvariablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden und spezifische Werte darstellen, die im gesamten Dokument wiederverwendet werden können. Sie werden entweder mit dem {{cssxref("@property")}}-At-Regel oder durch die [Custom Property Syntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) festgelegt. Auf Custom Properties wird mit der CSS-{{cssxref("var", "var()")}}-Funktion zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Webseiten haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien. Mit Custom Properties kann ein Wert an einer Stelle definiert und dann an mehreren anderen Stellen referenziert werden, was die Arbeit erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Custom Properties, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}}-At-Regel ermöglicht mehr Kontrolle über die Custom Property und lässt Sie festlegen, ob sie ihren Wert von einem Elternteil erbt, was der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Medienabfragen und Containerabfragen.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Werts in jeder Eigenschaft auf einem Element verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder etwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Medienabfrage oder Containerabfrage verwenden können.

## Deklarieren von Custom Properties

In CSS können Sie eine Custom Property mittels zweier Bindestriche als Präfix für den Eigenschaftsnamen oder durch die {{cssxref("@property")}}-At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwenden eines Präfixes aus zwei Bindestrichen (`--`)

Eine Custom Property, die mit zwei Bindestrichen beginnt, sieht folgendermaßen aus: `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn/CSS/Building_blocks/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelwerks geschrieben.
Das folgende Beispiel zeigt, wie eine Custom Property `--main-bg-color` erstellt wird und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelwerk gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Element/section)-Elemente im obigen Beispiel) definiert den Bereich, in dem die Custom Property verwendet werden kann.
Aus diesem Grund ist es gängige Praxis, Custom Properties auf der {{cssxref(":root")}}-Pseudo-Klasse zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Vielleicht haben Sie einen guten Grund, den Anwendungsbereich Ihrer Custom Properties zu beschränken.

> [!NOTE]
> Custom Property Namen sind case-sensitive — `--my-color` wird als separate Custom Property zu `--My-color` behandelt.

### Verwenden der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel erlaubt Ihnen, die Definition einer Custom Property mit der Möglichkeit, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und Vererbung zu kontrollieren, ausdrücklicher zu gestalten.
Das folgende Beispiel erstellt eine Custom Property namens `--logo-color`, die ein [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Custom Properties lieber in JavaScript definieren oder verwenden möchten, gibt es eine entsprechende API für diesen Zweck.
Sie können auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) nachlesen, wie dies funktioniert.

### Referenzieren von Custom Properties mit `var()`

Unabhängig von der Methode, die Sie zur Definition einer Custom Property wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines standardmäßigen Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Custom Properties

Beginnen wir mit etwas HTML, dem wir einige Stile zuweisen möchten.
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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht gezeigt, damit wir uns auf Farben konzentrieren können).
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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, Custom Properties zu verwenden, um wiederkehrende Werte in diesen Regeln zu ersetzen.
Nachdem `--main-bg-color` im `.container`-Scope definiert und der Wert an mehreren Stellen referenziert wurde, sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und das CSS-Vererbungsprinzip zur Lösung dieses Problems zu nutzen. Bei nicht-trivialen Projekten ist dies jedoch nicht immer möglich. Durch die Deklaration einer Custom Property auf der {{cssxref(":root")}}-Pseudo-Klasse und deren Verwendung, wo immer sie im gesamten Dokument benötigt wird, kann ein CSS-Autor die Notwendigkeit der Wiederholung reduzieren:

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

Dies führt zu demselben Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Custom Properties

Eine Custom Property, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres Elternteils.
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

- `class="one"`: _ungültiger Wert_, was der Standardwert einer so definierten Custom Property ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (vom Elternteil geerbt)

Ein Aspekt von Custom Properties, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie den Wert einer Eigenschaft nicht festlegen und erwarten, ihn in einer Regel des Nachkommen eines Geschwisters abzurufen.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property` zur Kontrolle der Vererbung

Die `@property`-At-Regel ermöglicht es Ihnen, explizit anzugeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine Custom Property mit der `@property`-At-Regel.
Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp definiert und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelbindestrich-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color` Eigenschaft nicht innerhalb des `.child`-Scopedefiniert ist, wird der anfängliche Wert von `cornflowerblue` anstelle von `green` verwendet, der ansonsten vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Custom Properties

Sie können Fallback-Werte für Custom Properties mit der `var()`-Funktion und dem `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Custom-Properties nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Custom-Properties unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definieren von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Custom Property. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Custom Property ungültig ist.
Die Funktion nimmt zwei Parameter entgegen, und alles, was dem ersten Komma folgt, wird als zweiter Parameter zugewiesen. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

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

Das Einfügen einer Custom Property als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist die korrekte Art, mit `var()` mehr als einen Fallback bereitzustellen.
Sie sollten sich jedoch des Leistungseinflusses dieser Methode bewusst sein, da es mehr Zeit benötigt, die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks, ähnlich wie die von [Custom Properties](https://www.w3.org/TR/css-variables/#custom-property), erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Initialwert

Neben der Verwendung von `var()` kann der `initial-value`, der in der `@property`-At-Regel definiert ist, als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` mithilfe der `@property`-At-Regel.
In dem auf die At-Regel folgenden Regelwerk möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die Custom Property verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet.
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

## Ungültige Custom Properties

Jede CSS-Eigenschaft kann einem definierten [Menge an Werten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihrer Menge gültiger Werte liegt, wird dies als _ungültig_ betrachtet.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft) findet, verwirft er die Deklaration, und den Elementen werden die Werte zugewiesen, die sie gehabt hätten, wenn die Deklaration nicht existiert hätte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn jedoch die Werte von Custom Properties geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss.
Leider können diese gültigen Werte durch die `var()`-funktionale Notation in einem Kontext verwendet werden, in dem sie keinen Sinn ergeben.
Eigenschaften und Custom Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution stößt, wird der [initiale](/de/docs/Web/CSS/initial_value) oder [geerbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das vorherige, außer dass wir eine Custom Property verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Ersetzung ergibt die Eigenschaft keinen Sinn, daher handhabt der Browser diese Situation in zwei Schritten:

1. Überprüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil mit festgelegter `color`-Eigenschaft. Also gehen wir zum nächsten Schritt über.
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

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem sie den anfänglichen Wert der Eigenschaft definiert:

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

- [Custom Property Syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Custom Properties für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
