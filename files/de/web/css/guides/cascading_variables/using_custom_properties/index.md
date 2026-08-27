---
title: Verwendung von CSS-Benutzerdefinierten Eigenschaften (Variablen)
short-title: Verwendung benutzerdefinierter Eigenschaften
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: 56f3d7018159127dbe92842413fb45d0aa7e8193
---

**Benutzerdefinierte Eigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind vom CSS-Autor definierte Einheiten, die spezifische Werte darstellen, die in einem Dokument wiederverwendet werden. Sie werden mit der {{cssxref("@property")}}-At-Regel oder durch die [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) (z.B. **`--primary-color: blue;`**) festgelegt. Benutzerdefinierte Eigenschaften werden mit der CSS-Funktion {{cssxref("var()")}} aufgerufen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben sehr große Mengen an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an hunderten von verschiedenen Stellen in Stylesheets zu sehen. Eine Farbe zu ändern, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung in allen Regeln und CSS-Dateien. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, so dass die Arbeit damit einfacher wird. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als die hexadezimale Farbe `#00ff00`, insbesondere wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`) definiert werden](/de/docs/Web/CSS/Reference/Properties/--*), unterliegen dem [Kaskaden-Prinzip](/de/docs/Web/CSS/Guides/Cascade/Introduction) und erben ihren Wert von ihrem Elternteil.
Die {{cssxref("@property")}}-At-Regel ermöglicht eine bessere Kontrolle über die benutzerdefinierte Eigenschaft und lässt Sie festlegen, ob sie ihren Wert von einem Elternteil erbt, welchen Anfangswert sie hat und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht in Media Queries und Container Queries.
> Sie können die Funktion {{cssxref("var()")}} in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft deklarieren, indem Sie zwei Bindestriche als Präfix für den Eigenschaftsnamen verwenden oder die {{cssxref("@property")}}-At-Regel nutzen.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Mit einem Präfix von zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der ein beliebiger [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird diese innerhalb eines Regelsatzes geschrieben.
Das folgende Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt und den Wert `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor (z.B. [`<section>`](/de/docs/Web/HTML/Reference/Elements/section)-Elemente im obigen Beispiel) definiert den Bereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es eine gängige Praxis, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, so dass sie global referenziert werden kann:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss nicht immer der Fall sein: Sie haben möglicherweise einen guten Grund, den Anwendungsbereich Ihrer benutzerdefinierten Eigenschaften zu begrenzen.

> [!NOTE]
> Namen benutzerdefinierter Eigenschaften sind groß- und kleinschreibungsempfindlich — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft im Vergleich zu `--My-color` behandelt.

### Verwendung der `@property`-At-Regel

Die {{cssxref("@property")}}-At-Regel ermöglicht es Ihnen, die Definition einer benutzerdefinierten Eigenschaft ausdrücklicher zu gestalten, indem Sie die Möglichkeit haben, einen Typ mit der Eigenschaft zu assoziieren, Standardwerte festzulegen und die Vererbung zu steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen {{cssxref("&lt;color&gt;")}} erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript definieren oder verwenden möchten, anstatt direkt in CSS, gibt es eine entsprechende API für diesen Zweck.
Sie können lesen, wie dies auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) funktioniert.

### Referenzieren von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie wählen, um eine benutzerdefinierte Eigenschaft zu definieren, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var()")}}-Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Lassen Sie uns mit etwas HTML beginnen, auf das wir einige Stile anwenden möchten.
Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige mit verschachtelten Elementen:

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
Abhängig von ihren Klassen geben wir Elementen `teal` oder `pink` Hintergrundfarben:

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

Es gibt eine Gelegenheit, benutzerdefinierte Eigenschaften zu verwenden, um repetitive Werte über diese Regeln hinweg zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container`-Bereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und CSS-Vererbung das Problem lösen zu lassen. Für nicht-triviale Projekte ist dies jedoch nicht immer möglich. Durch das Deklarieren einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}}-Pseudoklasse und deren Verwendung bei Bedarf im gesamten Dokument kann ein CSS-Autor die Notwendigkeit für Wiederholungen reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, erlaubt jedoch eine kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

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

Die Ergebnisse von `var(--box-color)` je nach Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom Elternteil geerbt)

Ein Aspekt der benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel kann man nicht den Wert einer Eigenschaft setzen und erwarten, den Wert in der Regel eines Geschwisters oder Nachfahrens abzurufen.
Die Eigenschaft wird nur für den übereinstimmenden Selektor und dessen Nachfahren gesetzt.

### Verwendung von `@property`, um die Vererbung zu steuern

Die `@property`-At-Regel lässt Sie ausdrücklich angeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft mit der `@property`-At-Regel.
Die Vererbung ist deaktiviert, es ist ein {{cssxref("&lt;color&gt;")}}-Datentyp definiert, und ein Anfangswert von `teal`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelstrich-Syntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die Eigenschaft `--box-color` nicht im `.child`-Bereich deklariert ist, wird der Anfangswert von `teal` anstelle von `green` verwendet, das vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Rückfallwerte für benutzerdefinierte Eigenschaften

Sie können Rückfallwerte für benutzerdefinierte Eigenschaften mithilfe der `var()`-Funktion und des Anfangswerts der `@property`-At-Regel definieren.

> [!NOTE]
> Rückfallwerte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Rückfallwert in diesem Fall nicht hilft.
> Rückfälle decken den Fall ab, in dem der Browser CSS-Benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Rückfallwerten in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/Reference/Values/var)-Funktion können Sie mehrere **Rückfallwerte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [Benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

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

Einen benutzerdefinierten Eigenschaft als Rückfallwert zu verwenden, wie im zweiten obigen Beispiel gezeigt (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Rückfall mit `var()` bereitzustellen.
Sie sollten sich jedoch der Auswirkungen auf die Leistung dieser Methode bewusst sein, da es mehr Zeit in Anspruch nimmt, durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Rückfalls, ähnlich wie bei benutzerdefinierten Eigenschaften, erlaubt Kommas. Zum Beispiel, `var(--foo, red, blue)` definiert einen Rückfall von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Rückfallwert betrachtet.

### Rückfälle mit dem `@property`-Initialwert

Neben der Verwendung von `var()` kann der in der `@property`-At-Regel definierte `initial-value` als Rückfallmechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Im folgenden Beispiel wird ein Anfangswert von `--box-color` auf `teal` mithilfe der `@property`-At-Regel festgelegt.
Im Regelsatz nach der At-Regel möchten wir `--box-color` auf `pink` setzen, aber es gibt einen Tippfehler im Eigenschaftsnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [\<color>-Wert](/de/docs/Web/CSS/Reference/Values/color_value) erwartet.
Sowohl `2rem` als auch `peenk` sind ungültige Farbwerte, daher wird der Anfangswert von `teal` angewendet:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes gültiger Werte liegt, wird er als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel ein Wert von `16px` für die {{cssxref("color")}}-Eigenschaft), verwirft er die Deklaration, und die Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige `color: blue`-Regel wird stattdessen angewendet:

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

Wenn die Werte benutzerdefinierter Eigenschaften geparst werden, weiß der Browser jedoch noch nicht, wo sie verwendet werden, daher muss er fast alle Werte als _gültig_ ansehen.
Leider können diese gültigen Werte über die `var()`-Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept des _gültigen Wertes zur berechneten Zeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Ersetzung stößt, wird der [anfängliche](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/Guides/Cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist ähnlich wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` durch `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Ersetzung macht die Eigenschaft keinen Sinn, weshalb der Browser diese Situation in zwei Schritten handhabt:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein Elternteil mit gesetzter `color`-Eigenschaft. Also gehen wir zu Schritt zwei über.
2. Setzen Sie den Wert auf seinen **Standardanfangswert**, der schwarz ist.

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

In solchen Fällen kann die `@property`-At-Regel unerwartete Ergebnisse verhindern, indem Sie den Anfangswert der Eigenschaft definieren:

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

Um die Werte von benutzerdefinierten Eigenschaften in JavaScript zu verwenden, geschieht dies wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- {{cssxref("@property")}}-At-Regel
- [`var()`](/de/docs/Web/CSS/Reference/Values/var)
- [CSS benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/Guides/Cascading_variables) Modul
- [Syntax für benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
