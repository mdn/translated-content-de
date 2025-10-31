---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
short-title: Verwendung von Benutzereigenschaften
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

**Benutzereigenschaften** (manchmal als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen, die im gesamten Dokument wiederverwendet werden sollen. Sie werden mit der {{cssxref("@property")}} At-Regel oder durch [Benutzereigenschafts-Syntax](/de/docs/Web/CSS/Reference/Properties/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Auf Benutzereigenschaften wird über die CSS-{{cssxref("var", "var()")}} Funktion (z. B. **`color: var(--primary-color);`**) zugegriffen.

Komplexe Websites verfügen über sehr große Mengen an CSS, was oft zu einer Vielzahl wiederholter CSS-Werte führt. Zum Beispiel ist es häufig, dieselbe Farbe an hunderten verschiedenen Stellen in Stylesheets zu sehen. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Mit Benutzereigenschaften kann ein Wert an einer Stelle definiert und dann an mehreren anderen Stellen referenziert werden, was die Arbeit erleichtert. Ein weiterer Vorteil ist Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als der hexadezimale Farbcode `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzereigenschaften, die [durch zwei Bindestriche (`--`)](/de/docs/Web/CSS/Reference/Properties/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert vom übergeordneten Element. Die {{cssxref("@property")}} At-Regel ermöglicht eine bessere Kontrolle über die Benutzereigenschaft und erlaubt es, festzulegen, ob diese ihren Wert vom übergeordneten Element erbt, welchen Anfangswert sie hat und welche Typbeschränkungen gelten sollten.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}} Funktion in jedem Teil eines Wertes in jeder Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von Benutzereigenschaften

In CSS können Sie eine Benutzereigenschaft deklarieren, indem Sie zwei Bindestriche als Präfix für den Eigenschaftsnamen verwenden oder die {{cssxref("@property")}} At-Regel verwenden.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfixes von zwei Bindestrichen (`--`)

Eine Benutzereigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der ein [gültiger CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb eines Regelsatzes geschrieben.
Das folgende Beispiel zeigt, wie man eine Benutzereigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/named-color) Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz gegebene Selektor (z. B. [`<section>`](/de/docs/Web/HTML/Reference/Elements/section) Elemente im obigen Beispiel) definiert den Geltungsbereich, in dem die Benutzereigenschaft verwendet werden kann.
Aus diesem Grund ist es eine häufige Praxis, Benutzereigenschaften auf pseudo-Klasse {{cssxref(":root")}} zu definieren, sodass sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss nicht immer der Fall sein: Manchmal hat man einen guten Grund, den Anwendungsbereich seiner Benutzereigenschaften zu begrenzen.

> [!NOTE]
> Benutzereigenschaftennamen sind case-sensitive — `--my-color` wird als separate Benutzereigenschaft zu `--My-color` behandelt.

### Verwendung der `@property` At-Regel

Die {{cssxref("@property")}} At-Regel erlaubt es Ihnen, die Definition einer Benutzereigenschaft mit der Möglichkeit, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und Vererbung zu steuern, ausführlicher zu gestalten.
Das folgende Beispiel erstellt eine Benutzereigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Benutzereigenschaften lieber in JavaScript statt direkt in CSS festlegen möchten, gibt es eine entsprechende API für diesen Zweck.
Sie können nachlesen, wie dies funktioniert, auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API).

### Referenzieren von Benutzereigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Benutzereigenschaft wählen, verwenden Sie sie, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}} Funktion anstelle eines Standard-Eigenschaftswertes referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Benutzereigenschaften

Beginnen wir mit etwas HTML, dem wir einige Stile hinzufügen möchten.
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

Wir werden das folgende CSS verwenden, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln werden unten nicht angezeigt, damit wir uns auf die Farben konzentrieren können).
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

Es besteht die Möglichkeit, Benutzereigenschaften zu verwenden, um repetitive Werte in diesen Regeln zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container` Bereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile wie folgt aus:

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

## Verwenden der :root Pseudo-Klasse

Für einige CSS-Deklarationen ist es möglich, diese weiter oben in der Kaskade zu deklarieren und CSS-Vererbung dieses Problem lösen zu lassen. Für nicht-triviale Projekte ist dies nicht immer möglich. Durch die Deklaration einer Benutzereigenschaft auf der {{cssxref(":root")}} Pseudo-Klasse und ihrer Nutzung, wo immer sie im gesamten Dokument benötigt wird, kann ein CSS-Autor den Wiederholungsbedarf reduzieren:

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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine einzige kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: teal;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Benutzereigenschaften

Eine Benutzereigenschaft, die mit zwei Bindestrichen `--` statt `@property` definiert wird, erbt immer den Wert ihres übergeordneten Elements.
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

{{embedlivesample("dash-custom-property-inheritance", 100%, 280px)}}

Die Ergebnisse von `var(--box-color)` hängen von der Vererbung ab und sind wie folgt:

- `class="one"`: _ungültiger Wert_, der der Standardwert einer so definierten Benutzereigenschaft ist
- `class="two"`: `teal`
- `class="three"`: `pink`
- `class="four"`: `teal` (vom übergeordneten Element geerbt)

Ein Aspekt von Benutzereigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird dort berechnet, wo er benötigt wird, nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, dass Sie den Wert in der Regel eines Geschwisterelements abrufen können.
Die Eigenschaft wird nur für den passenden Selektor und seine Nachkommene gesetzt.

### Verwendung von `@property` zur Steuerung der Vererbung

Die `@property` At-Regel erlaubt es Ihnen ausdrücklich anzugeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine Benutzereigenschaft mit der `@property` At-Regel.
Die Vererbung ist deaktiviert, es ist ein [`<color>`](/de/docs/Web/CSS/color_value) Datentyp definiert, und ein Anfangswert von `teal`.

Das übergeordnete Element setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hätte, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppelschriftsyntax definiert wurde).

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

Da `inherits: false;` in der At-Regel gesetzt ist und ein Wert für die `--box-color` Eigenschaft nicht im `.child` Bereich deklariert ist, wird der Anfangswert von `teal` statt `green`, der vom übergeordneten Element geerbt worden wäre, verwendet:

{{embedlivesample("at-property-inheritance", 100%, 250px)}}

## Fallback-Werte für Benutzereigenschaften

Sie können Fallback-Werte für Benutzereigenschaften mit der `var()` Funktion und dem `initial-value` der `@property` At-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-Benutzereigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definition von Fallbacks in der `var()` Funktion

Unter Verwendung der [`var()`](/de/docs/Web/CSS/var) Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die gegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Benutzereigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Benutzereigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter, wobei alles, was dem ersten Komma folgt, als zweiter Parameter zugewiesen wird. Wenn der zweite Parameter ungültig ist, schlägt das Fallback fehl. Zum Beispiel:

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

Das Einbeziehen einer Benutzereigenschaft als Fallback, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`) zu sehen, ist der richtige Weg, um mit `var()` mehr als ein Fallback bereitzustellen.
Sie sollten sich jedoch des Performance-Einflusses dieser Methode bewusst sein, da es mehr Zeit kostet, durch die verschachtelten Variablen zu parsen.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt es, wie bei Benutzereigenschaften, Kommas einzuschließen. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des initialen Wertes von `@property`

Neben der Verwendung von `var()` kann der in der `@property` At-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore peenk -->

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `teal` unter Verwendung der `@property` At-Regel.
Im Regelsatz nach der At-Regel möchten wir `--box-color` auf `pink` setzen, allerdings gibt es einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, in dem wir `2rem` für die Benutzereigenschaft verwendet haben, die einen gültigen [`<color>` Wert](/de/docs/Web/CSS/color_value) erwartet.
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

## Ungültige Benutzereigenschaften

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes gültiger Werte liegt, gilt sie als _ungültig_.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (zum Beispiel ein Wert von `16px` für die {{cssxref("color")}} Eigenschaft), verwirft er die Deklaration, und Elemente erhalten die Werte zugewiesen, die sie hätten, wenn die Deklaration nicht existiert hätte.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen und die vorherige Regel `color: blue` wird stattdessen angewendet:

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

Wenn jedoch die Werte von Benutzereigenschaften geparst werden, weiß der Browser noch nicht, wo sie verwendet werden, daher muss er fast alle Werte als _gültig_ betrachten.
Leider können diese gültigen Werte über die `var()` Funktionsnotation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Anweisungen führen, die das Konzept von _gültig zur Berechnungszeit_ hervorrufen.

Wenn der Browser auf einen ungültigen `var()` Ersatz trifft, wird der [anfängliche](/de/docs/Web/CSS/CSS_cascade/Value_processing#initial_value) oder [geerbte](/de/docs/Web/CSS/CSS_cascade/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genauso wie das letzte, außer dass wir eine Benutzereigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}.
Nach der Ersetzung macht die Eigenschaft keinen Sinn, daher behandelt der Browser diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein übergeordnetes Element mit der `color` Eigenschaft. Also gehen wir zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **standardmäßigen Anfangswert**, der schwarz ist.

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

Für solche Fälle kann die `@property` At-Regel unerwartete Ergebnisse verhindern, indem sie erlaubt, den Anfangswert der Eigenschaft zu definieren:

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

- [Syntax für Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("@property")}} At-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
