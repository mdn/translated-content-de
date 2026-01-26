---
title: Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)
short-title: Verwendung benutzerdefinierter Eigenschaften
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

**Benutzerdefinierte Eigenschaften** (manchmal auch **CSS-Variablen** oder **kaskadierende Variablen** genannt) sind Entitäten, die von CSS-Autoren definiert werden und spezifische Werte darstellen, die im gesamten Dokument wiederverwendet werden sollen. Sie werden mit der {{cssxref("@property")}} At-Regel oder durch [benutzerdefinierte Eigenschaften-Syntax](/de/docs/Web/CSS/Reference/Properties/--*) (z.B. **`--primary-color: blue;`**) festgelegt. Benutzerdefinierte Eigenschaften werden mit der CSS {{cssxref("var()")}} Funktion (z.B. **`color: var(--primary-color);`**) abgerufen.

Komplexe Websites haben sehr große Mengen an CSS, was häufig zu einer Vielzahl von wiederholten CSS-Werten führt. Beispielsweise ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu sehen. Wenn eine Farbe, die an vielen Stellen dupliziert ist, geändert werden muss, erfordert dies eine Suche und ein Ersetzen in allen Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einem Ort zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Handhabung erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`) definiert wurden](/de/docs/Web/CSS/Reference/Properties/--*), unterliegen der [Kaskade](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert von ihrem Elternteil. Die {{cssxref("@property")}} At-Regel bietet mehr Kontrolle über die benutzerdefinierte Eigenschaft und lässt Sie angeben, ob sie den Wert von einem Elternteil erbt, welchen Anfangswert sie hat und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Medienabfragen und Container-Abfragen.
> Sie können die {{cssxref("var()")}} Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var()")}} nicht für Eigenschaftsnamen, Selektoren oder alles andere als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Medienabfrage oder Container-Abfrage verwenden können.

## Deklarieren benutzerdefinierter Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch die {{cssxref("@property")}} At-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie diese beiden Methoden verwendet werden.

### Verwendung eines Präfixes aus zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird sie innerhalb einer Eigenschaftsregel geschrieben.
Das folgende Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt wird, die den {{cssxref("named-color")}} Wert `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelwerk zugewiesene Selektor ([`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Bereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}} Pseudo-Klasse zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss jedoch nicht immer der Fall sein: Möglicherweise haben Sie einen guten Grund, den Geltungsbereich Ihrer benutzerdefinierten Eigenschaften zu beschränken.

> [!NOTE]
> Benutzerdefinierte Eigenschaftsnamen sind case-sensitive — `--my-color` wird als eine andere benutzerdefinierte Eigenschaft wie `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel ermöglicht es, die Definition einer benutzerdefinierten Eigenschaft ausdrücklicher zu gestalten, indem Sie der Eigenschaft einen Typ zuordnen, Standardwerte festlegen und die Vererbung steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die auf ein {{cssxref("&lt;color&gt;")}} erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle direkt in CSS definieren oder verwenden möchten, gibt es hierfür eine entsprechende API.
Sie können darüber lesen, wie dies auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzieren benutzerdefinierter Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine benutzerdefinierte Eigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var()")}} Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Beginnen wir mit etwas HTML, dem wir einige Stile hinzufügen möchten.
Es gibt ein `<div>`, das als Container dient und einige Kindelemente, einige mit verschachtelten Elementen, enthält:

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

Wir verwenden den folgenden CSS, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können).
Abhängig von ihren Klassen geben wir den Elementen `teal` oder `pink` Hintergrundfarben:

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

Dies ergibt das folgende Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es besteht die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um sich wiederholende Werte in diesen Regeln zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container` Bereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und CSS-Vererbung dieses Problem lösen zu lassen. Für nicht-triviale Projekte ist dies jedoch nicht immer möglich. Indem man eine benutzerdefinierte Eigenschaft auf der {{cssxref(":root")}} Pseudo-Klasse deklariert und sie bei Bedarf im gesamten Dokument verwendet, kann ein CSS-Autor die Notwendigkeit für Wiederholungen verringern:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine einzige kanonische Deklaration des gewünschten Eigenschaftswertes (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert seines Elternteils.
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

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Elternteil geerbt)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele veranschaulichen, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, wird nicht gespeichert und an anderer Stelle in einem Stylesheet wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in der Regel eines Geschwisterkindes oder eines Nachfahren abzurufen.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und seine Nachkommen gesetzt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` At-Regel lässt Sie explizit angeben, ob die Eigenschaft erbt oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, es ist ein {{cssxref("&lt;color&gt;")}} Datentyp definiert und ein Anfangswert von `teal`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppel-Bindestrich-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color` Eigenschaft nicht innerhalb des `.child` Bereichs deklariert ist, wird der Anfangswert von `teal` anstelle von `green` verwendet, der sonst vom Elternteil vererbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften unter Verwendung der `var()` Funktion und des `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()` Funktion

Mit der [`var()`](/de/docs/Web/CSS/Reference/Values/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument für die Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument für die Funktion ist ein optionaler Fallback-Wert, der als Ersetzungswert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
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

Das Einschließen einer benutzerdefinierten Eigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Leistung dieser Methode bewusst sein, da es mehr Zeit kostet, die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie auch benutzerdefinierte Eigenschaften, Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property` Initialwert

Abgesehen von der Verwendung von `var()`, kann der `initial-value`, der in der `@property` At-Regel definiert ist, als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel legt einen Anfangswert für `--box-color` auf `teal` fest, indem die `@property` At-Regel verwendet wird.
Im Regelwerk, das der At-Regel folgt, wollen wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Wertnamen. Das Gleiche gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbewerte, daher wird der Anfangswert `teal` angewendet:

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

Jede CSS-Eigenschaft kann einer definierten [Menge von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugeordnet werden. Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihrer Menge gültiger Werte liegt, wird dies als _ungültig_ betrachtet.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft antrifft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration und den Elementen werden die Werte zugewiesen, die sie hätte, hätte diese Deklaration nicht existiert.
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

Jedoch, wenn die Werte von benutzerdefinierten Eigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, sodass er fast alle Werte als _gültig_ betrachten muss.
Leider können diese gültigen Werte über die `var()` funktionale Notation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()` Substitution stößt, wird der [initiale](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Substitution ergibt die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat keinen Elternteil mit der gesetzten `color` Eigenschaft. Also gehen wir zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **Standard-Initialwert**, der schwarz ist.

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

In solchen Fällen kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie erlaubt, den Anfangswert der Eigenschaft zu definieren:

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

- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS-Benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
- [Benutzerdefinierte Eigenschaften-Syntax](/de/docs/Web/CSS/Reference/Properties/--*)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
