---
title: Verwendung von CSS-Benutzereigenschaften (Variablen)
slug: Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties
l10n:
  sourceCommit: a075805de90029b65fa5cfcc8ea43737728320f5
---

{{CSSRef}}

**Benutzereigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind von CSS-Autoren definierte Entitäten, die spezifische Werte darstellen und im gesamten Dokument wiederverwendet werden können. Sie werden mithilfe des {{cssxref("@property")}}-Regelsatzes oder durch die [Benutzereigenschafts-Syntax](/de/docs/Web/CSS/--*) (z. B. **`--primary-color: blue;`**) festgelegt. Der Zugriff auf Benutzereigenschaften erfolgt mit der CSS-Funktion {{cssxref("var", "var()")}} (z. B. **`color: var(--primary-color);`**).

Komplexe Websites besitzen häufig sehr umfangreiche CSS-Dateien, was oft zu einer Menge von wiederholten CSS-Werten führt. Zum Beispiel sieht man häufig dieselbe Farbe in Hunderten verschiedener Stellen in Stylesheets verwendet. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Benutzereigenschaften ermöglichen es, Werte an einem Ort zu definieren und an mehreren anderen Stellen zu referenzieren, wodurch die Arbeit erleichtert wird. Ein weiterer Vorteil ist die bessere Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter zu verstehen als der hexadezimale Farbwert `#00ff00`, besonders wenn die Farbe in verschiedenen Kontexten verwendet wird.

Benutzereigenschaften, die [mithilfe von zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/CSS_cascade/Cascade) und erben ihren Wert vom übergeordneten Element. Der {{cssxref("@property")}}-Regelsatz bietet mehr Kontrolle über die Benutzereigenschaft und ermöglicht es, anzugeben, ob sie ihren Wert vom Elternteil erben soll, was der Standardwert ist, und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries oder Container Queries.  
> Sie können die Funktion {{cssxref("var", "var()")}} in jedem Teil eines Wertes für jede Eigenschaft eines Elements verwenden.  
> Sie können jedoch {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder andere Dinge außer Eigenschaftswerten verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Benutzereigenschaften deklarieren

In CSS können Sie eine Benutzereigenschaft deklarieren, indem Sie dem Eigenschaftsnamen zwei Bindestriche als Präfix hinzufügen oder den Regelsatz {{cssxref("@property")}} verwenden.  
Die folgenden Abschnitte erläutern, wie Sie diese beiden Methoden anwenden können.

### Verwendung eines Präfixes mit zwei Bindestrichen (`--`)

Eine mit zwei Bindestrichen präfixierte Benutzereigenschaft beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z. B. `--my-property`) und einem Eigenschaftswert, der jeden [gültigen CSS-Wert](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) enthalten kann.  
Wie jede andere Eigenschaft wird diese innerhalb eines Regelsatzes geschrieben.  

Das folgende Beispiel zeigt, wie eine Benutzereigenschaft `--main-bg-color` erstellt wird, wobei ein [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwendet wird:

```css
section {
  --main-bg-color: brown;
}
```

Der dem Regelsatz zugewiesene Selektor (im obigen Beispiel [`<section>`](/de/docs/Web/HTML/Element/section)-Elemente) definiert den Gültigkeitsbereich, in dem die Benutzereigenschaft verwendet werden kann.  
Aus diesem Grund ist es gängige Praxis, Benutzereigenschaften auf der {{cssxref(":root")}} Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Das muss jedoch nicht immer der Fall sein: Sie könnten möglicherweise einen guten Grund dafür haben, den Gültigkeitsbereich Ihrer Benutzereigenschaften einzuschränken.

> [!NOTE]
> Die Namen von Benutzereigenschaften sind groß-/klein-schreibungssensitiv — `--my-color` wird als separate Benutzereigenschaft zu `--My-color` behandelt.

### Verwendung des `@property`-Regelsatzes

Der {{cssxref("@property")}}-Regelsatz ermöglicht eine detailliertere Definition einer Benutzereigenschaft mit der Möglichkeit, eine Typzuweisung mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern.  

Im folgenden Beispiel wird eine Benutzereigenschaft `--logo-color` erstellt, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie Benutzereigenschaften stattdessen in JavaScript anstelle von CSS direkt definieren oder verwenden möchten, gibt es eine entsprechende API, die Sie dafür nutzen können.  
Auf der Seite [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API) können Sie nachlesen, wie dies funktioniert.

### Referenzierung von Benutzereigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer Benutzereigenschaft wählen, werden diese verwendet, indem die Eigenschaft in der {{cssxref("var", "var()")}}-Funktion als Ersatz für einen Standardwert referenziert wird:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit Benutzereigenschaften

Beginnen wir mit etwas HTML, auf das wir einige Stile anwenden möchten.  
Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, von denen einige verschachtelt sind:

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

Wir verwenden das folgende CSS, um verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layoutregeln sind unten nicht gezeigt, damit wir uns auf die Farben konzentrieren können).  
Abhängig von ihren Klassen geben wir den Elementen die Hintergrundfarben `cornflowerblue` oder `aquamarine`:

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

Dies ergibt folgendes Ergebnis:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es bietet sich an, Benutzereigenschaften zu verwenden, um wiederholte Werte in diesen Regeln zu ersetzen. Nach dem Definieren von `--main-bg-color` im `.container`-Gültigkeitsbereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile so aus:

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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und das CSS-Vererbungsverhalten für die Lösung dieses Problems einzusetzen.  
Für nicht triviale Projekte ist dies jedoch nicht immer möglich.  
Ein CSS-Autor kann durch das Deklarieren einer Benutzereigenschaft auf der {{cssxref(":root")}}-Pseudoklasse und deren Verwendung an den erforderlichen Stellen des Dokuments die Notwendigkeit von Wiederholungen reduzieren:

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

Dies führt zum selben Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine einzige kanonische Deklaration des gewünschten Eigenschaftswerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von Benutzereigenschaften

Eine Benutzereigenschaft, die mit zwei Bindestrichen `--` anstelle von `@property` definiert wird, erbt immer den Wert ihres übergeordneten Elements.  
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

Die Ergebnisse von `var(--box-color)` in Abhängigkeit von der Vererbung sind:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten Benutzereigenschaft ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (vererbt von ihrem Elternteil)

Ein Aspekt von Benutzereigenschaften, den die obigen Beispiele zeigen, ist, dass sie sich nicht exakt wie Variablen in anderen Programmiersprachen verhalten.  
Der Wert wird berechnet, wo er benötigt wird, und nicht gespeichert und an anderen Stellen eines Stylesheets wiederverwendet.  
Zum Beispiel können Sie nicht erwarten, einen Wert abzurufen, der in einer Regel eines Geschwister-Elements definiert wurde.  
Die Eigenschaft wird nur für den passenden Selektor und dessen Nachkommen gesetzt.

### Nutzung von `@property` zur Steuerung der Vererbung

Der `@property`-Regelsatz erlaubt ausdrücklich anzugeben, ob die Eigenschaft vererbt wird oder nicht.  
Das folgende Beispiel erstellt eine Benutzereigenschaft mit dem `@property`-Regelsatz. Die Vererbung ist deaktiviert, es wurde ein [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp festgelegt und ein Standardwert von `cornflowerblue` definiert.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.  
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hätte, wenn die Vererbung aktiviert wäre (oder wenn es mit der Schreibweise der doppelten Bindestriche definiert wurde).

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

Da `inherits: false;` im Regelsatz festgelegt ist und kein Wert für die Eigenschaft `--box-color` im `.child`-Gültigkeitsbereich deklariert ist, wird der Standardwert `cornflowerblue` anstelle von `green` verwendet, das sonst vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für Benutzereigenschaften

Sie können Fallback-Werte für Benutzereigenschaften mithilfe der `var()`-Funktion und des Standardwertes in der `@property`-Regelsatz-Deklaration definieren.

> [!NOTE]
> Fallback-Werte werden nicht genutzt, um Kompatibilitätsprobleme zu lösen, wenn CSS-Benutzereigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht funktioniert.  
> Fallbacks decken den Fall ab, dass der Browser CSS-Benutzereigenschaften unterstützt und einen anderen Wert verwenden kann, wenn die gewünschte Variable noch nicht definiert oder ungültig ist.

### Fallbacks in der `var()`-Funktion definieren

Mit der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist. Das kann nützlich sein, wenn Sie mit [Custom Elements](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der Benutzereigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte Benutzereigenschaft ungültig ist.  
Die Funktion akzeptiert zwei Parameter, wobei alles, was auf das erste Komma folgt, als zweiter Parameter betrachtet wird. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Beispiel:

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

Das Einbeziehen einer Benutzereigenschaft als Fallback, wie im zweiten obigen Beispiel (`var(--my-var, var(--my-background, pink))`), ist der korrekte Weg, um mehr als einen Fallback mit `var()` bereitzustellen.  
Sie sollten jedoch die Leistungsbelastung dieser Methode beachten, da das Parsen der geschachtelten Variablen mehr Zeit in Anspruch nimmt.

> [!NOTE]
> Die Syntax des Fallbacks, wie die der [Benutzereigenschaften](https://www.w3.org/TR/css-variables/#custom-property), erlaubt Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks mit dem `@property`-Standardwert

Abgesehen von der Verwendung von `var()` kann der im `@property`-Regelsatz definierte Standardwert als Fallback-Mechanismus verwendet werden.  
Tatsächlich haben wir dies bereits im Abschnitt [`@property`-Vererbung](#using_property_to_control_inheritance) gesehen.

<!-- cSpell:ignore aqumarine -->

Im folgenden Beispiel wird ein Standardwert `cornflowerblue` für `--box-color` mit dem `@property`-Regelsatz festgelegt.  
Im Regelsatz nach dem `@property`-Regelsatz wollen wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen. Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die Benutzereigenschaft verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet.  
Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, sodass der Standardwert `cornflowerblue` angewendet wird:

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

Jede CSS-Eigenschaft kann eine definierte [Menge von Werten](/de/docs/Learn_web_development/Core/Styling_basics/Values_and_units) zugeordnet werden.  
Wenn Sie versuchen, einer Eigenschaft einen Wert außerhalb ihres gültigen Wertebereichs zuzuweisen, wird dieser als _ungültig_ betrachtet.

Wenn der Browser auf einen ungültigen Wert für eine reguläre CSS-Eigenschaft stößt (z. B. ein Wert von `16px` für die Eigenschaft {{cssxref("color")}}), verwirft er die Deklaration, und die Elemente erhalten die Werte, die sie gehabt hätten, wenn die Deklaration nicht existierte.  
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird verworfen, und die vorherige Regel `color: blue` wird stattdessen angewendet:

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

Wenn jedoch die Werte von Benutzereigenschaften geparst werden, kann der Browser noch nicht wissen, wo sie verwendet werden, sodass er nahezu alle Werte als _gültig_ betrachten muss.  
Unglücklicherweise können diese gültigen Werte mithilfe der `var()`-funktionalen Notation in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben. Eigenschaften und Benutzervariablen können zu ungültigen CSS-Anweisungen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution stößt, wird der [Standardswert](/de/docs/Web/CSS/CSS_cascade/initial_value) oder der [geerbte Wert](/de/docs/Web/CSS/CSS_cascade/Inheritance) der Eigenschaft verwendet.  
Dieses Beispiel ähnelt dem letzten, außer dass wir eine Benutzereigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` anstelle von `var(--text-color)`, aber `16px` ist kein gültiger Eigenschaftswert für {{cssxref("color")}}. Nach der Substitution macht die Eigenschaft keinen Sinn mehr, und der Browser behandelt diese Situation in zwei Schritten:

1. Überprüfen Sie, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist es, aber dieses `<p>` hat kein übergeordnetes Element mit der `color`-Eigenschaft. Daher fahren wir mit dem nächsten Schritt fort.  
2. Setzen Sie den Wert auf den **Standardwert**, der bei der Farbe schwarz ist.

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

Für solche Fälle kann der `@property`-Regelsatz unerwartete Ergebnisse verhindern, indem ein Standardwert der Eigenschaft definiert wird:

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

Um die Werte von Benutzereigenschaften in JavaScript zu verwenden, wird dies genauso gehandhabt wie bei Standard-Eigenschaften.

```js
// get variable from inline style
element.style.getPropertyValue("--my-var");

// get variable from wherever
getComputedStyle(element).getPropertyValue("--my-var");

// set variable on inline style
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Benutzereigenschafts-Syntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-Regelsatz
- [`var()`](/de/docs/Web/CSS/var)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Benutzereigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables)-Modul
