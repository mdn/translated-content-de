---
title: Verwendung von CSS benutzerdefinierten Eigenschaften (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**Benutzerdefinierte Eigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die bestimmte Werte repräsentieren, die im gesamten Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}}-At-Regel oder durch [benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Auf benutzerdefinierte Eigenschaften wird mit der CSS-{{cssxref("var", "var()")}}-Funktion zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an hunderten verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Such- und Ersetzungsaktion über alle Regeln und CSS-Dateien hinweg. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Handhabung erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter verständlich als der hexadezimale Farbwert `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert von ihrem Elternteil.
Mit der {{cssxref("@property")}}-At-Regel können Sie mehr Kontrolle über die benutzerdefinierte Eigenschaft ausüben und festlegen, ob sie ihren Wert vom Elternteil erbt, welches der Anfangswert ist und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes außer Eigenschaftswerten verwenden, was bedeutet, dass Sie sie nicht in einer Media Query oder Container Query verwenden können.

## Deklaration von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder mit der {{cssxref("@property")}}-At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden können.

### Verwendung eines Präfixes mit zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein beliebiger [gültiger CSS-Wert](/de/docs/Learn/CSS/Building_blocks/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird diese innerhalb eines Regelsatzes geschrieben.
Das folgende Beispiel zeigt, wie Sie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellen und einen [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwenden:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor ([`<section>`](/de/docs/Web/HTML/Element/section)-Elemente im obigen Beispiel) definiert den Geltungsbereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es eine übliche Praxis, benutzerdefinierte Eigenschaften in der {{cssxref(":root")}}-Pseudo-Klasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss jedoch nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Geltungsbereich Ihrer benutzerdefinierten Eigenschaften zu beschränken.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind groß- und kleinschreibungssensitiv — `--my-color` wird als separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwendung der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel ermöglicht es Ihnen, bei der Definition einer benutzerdefinierten Eigenschaft ausdrucksstärker zu sein, indem Sie der Eigenschaft einen Typ zuordnen, Standardwerte setzen und die Vererbung steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle von direkt in CSS definieren oder verwenden möchten, gibt es dafür eine entsprechende API.
Sie können darüber lesen, wie dies auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzieren von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine benutzerdefinierte Eigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, das wir mit Stil versehen möchten.
Es gibt ein `<div>`, das als Container fungiert und einige untergeordnete Elemente enthält, einige davon mit verschachtelten Elementen:

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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln sind unten nicht gezeigt, damit wir uns auf Farben konzentrieren können).
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

Dies führt zu folgendem Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es gibt die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um wiederholte Werte in diesen Regeln zu ersetzen.
Nachdem `--main-bg-color` im `.container`-Geltungsbereich definiert wurde und sein Wert an mehreren Stellen referenziert wird, sehen die aktualisierten Styles wie folgt aus:

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

Für einige CSS-Deklarationen ist es möglich, diese weiter oben in der Kaskade zu deklarieren und CSS-Vererbung das Problem lösen zu lassen. Für nicht triviale Projekte ist dies jedoch nicht immer möglich. Durch die Deklaration einer benutzerdefinierten Eigenschaft in der {{cssxref(":root")}}-Pseudo-Klasse und deren Verwendung, wo immer im Dokument benötigt, kann ein CSS-Autor die Notwendigkeit von Wiederholungen reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht aber eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

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
- `class="four"`: `cornflowerblue` (vom Elternteil geerbt)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in einer Regel für Nachkommen eines Geschwisters abzurufen.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property`, um die Vererbung zu steuern

Die `@property`-At-Regel ermöglicht es Ihnen, ausdrücklich festzulegen, ob die Eigenschaft erbt oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property`-At-Regel.
Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp definiert und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das untergeordnete Element verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelstrich-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color`-Eigenschaft nicht innerhalb des `.child`-Geltungsbereichs deklariert ist, wird der Anfangswert von `cornflowerblue` anstelle von `green` verwendet, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Rückfallwerte für benutzerdefinierte Eigenschaften

Sie können Rückfallwerte für benutzerdefinierte Eigenschaften mithilfe der `var()`-Funktion und des `initial-value` der `@property`-At-Regel definieren.

> [!NOTE]
> Rückfallwerte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Rückfallwert in diesem Fall nicht hilft.
> Rückfallwerte decken den Fall ab, in dem der Browser CSS-benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Festlegung von Rückfällen in der Funktion `var()`

Unter Verwendung der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Rückfallwerte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Rückfallwert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter, wobei alles nach dem ersten Komma als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt der Rückfall fehl. Zum Beispiel:

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

Das Einfügen einer benutzerdefinierten Eigenschaft als Rückfall, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`) zu sehen, ist der korrekte Weg, um mehr als einen Rückfall mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Leistung dieser Methode bewusst sein, da es mehr Zeit in Anspruch nimmt, die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Rückfalls erlaubt, wie die der [benutzerdefinierten Eigenschaften](https://www.w3.org/TR/css-variables/#custom-property), Kommas. Zum Beispiel definiert `var(--foo, red, blue)` einen Rückfall von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Rückfallwert betrachtet.

### Rückfälle mit dem `@property`-Anfangswert

Abgesehen von der Verwendung von `var()`, kann der `initial-value`, der in der `@property`-At-Regel definiert ist, als Rückfallmechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` unter Verwendung der `@property`-At-Regel.
Im Regelsatz nach der At-Regel möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Das gleiche gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>`](/de/docs/Web/CSS/color_value) Wert erwartet.
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

Jede CSS-Eigenschaft kann einem definierten [Wertesatz](/de/docs/Learn/CSS/Building_blocks/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres gültigen Wertesatzes liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft), verwirft er die Deklaration und die Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde.
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

Wenn die Werte benutzerdefinierter Eigenschaften jedoch geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er nahezu alle Werte als _gültig_ betrachten muss.
Leider können diese gültigen Werte über die `var()`-Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept der _Gültigkeit zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution stößt, dann wird der [anfängliche](/de/docs/Web/CSS/initial_value) oder [geerbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution macht die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein übergeordnetes Element mit einer festgelegten `color`-Eigenschaft. Also gehen wir zum nächsten Schritt über.
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

Für solche Fälle kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem sie erlaubt, den Anfangswert der Eigenschaft zu definieren:

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

Um die Werte benutzerdefinierter Eigenschaften in JavaScript zu verwenden, geht es genauso wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
