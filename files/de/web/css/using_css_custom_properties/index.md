---
title: Verwenden von benutzerdefinierten CSS-Eigenschaften (Variablen)
slug: Web/CSS/Using_CSS_custom_properties
l10n:
  sourceCommit: bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{CSSRef}}

**Benutzerdefinierte Eigenschaften** (manchmal auch als **CSS-Variablen** oder **kaskadierende Variablen** bezeichnet) sind Entitäten, die von CSS-Autoren definiert werden und bestimmte Werte darstellen, die in einem Dokument wiederverwendet werden können. Sie werden mit der {{cssxref("@property")}}-Regel oder durch [benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*) (z.B. **`--primary-color: blue;`**) gesetzt. Auf benutzerdefinierte Eigenschaften wird mit der CSS-{{cssxref("var", "var()")}}-Funktion zugegriffen (z.B. **`color: var(--primary-color);`**).

Komplexe Websites haben eine sehr große Menge an CSS, was oft zu vielen wiederholten CSS-Werten führt. Zum Beispiel ist es üblich, dieselbe Farbe an Hunderten von verschiedenen Stellen in Stylesheets zu verwenden. Das Ändern einer Farbe, die an vielen Stellen dupliziert wurde, erfordert eine Suche und Ersetzung über alle Regeln und CSS-Dateien hinweg. Benutzerdefinierte Eigenschaften ermöglichen es, einen Wert an einer Stelle zu definieren und dann an mehreren anderen Stellen zu referenzieren, was die Arbeit erleichtert. Ein weiterer Vorteil ist die Lesbarkeit und Semantik. Zum Beispiel ist `--main-text-color` leichter verständlich als die hexadezimale Farbe `#00ff00`, besonders wenn die Farbe in unterschiedlichen Kontexten verwendet wird.

Benutzerdefinierte Eigenschaften, die [mit zwei Bindestrichen (`--`)](/de/docs/Web/CSS/--*) definiert werden, unterliegen der [Kaskade](/de/docs/Web/CSS/Cascade) und erben ihren Wert von ihrem Elternteil.
Die {{cssxref("@property")}}-Regel ermöglicht eine bessere Kontrolle über die benutzerdefinierte Eigenschaft und erlaubt es Ihnen festzulegen, ob sie ihren Wert von einem Elternteil erbt, welchen Anfangswert sie hat und welche Typbeschränkungen gelten sollen.

> [!NOTE]
> Variablen funktionieren nicht innerhalb von Media Queries und Container Queries.
> Sie können die {{cssxref("var", "var()")}}-Funktion in jedem Teil eines Wertes für jede Eigenschaft eines Elements verwenden.
> Sie können {{cssxref("var", "var()")}} nicht für Eigenschaftsnamen, Selektoren oder irgendetwas anderes als Eigenschaftswerte verwenden, was bedeutet, dass Sie es nicht in einer Media Query oder Container Query verwenden können.

## Deklarieren von benutzerdefinierten Eigenschaften

In CSS können Sie eine benutzerdefinierte Eigenschaft mit zwei Bindestrichen als Präfix für den Eigenschaftsnamen oder durch Verwendung der {{cssxref("@property")}}-Regel deklarieren.
Die folgenden Abschnitte beschreiben, wie Sie diese beiden Methoden verwenden.

### Verwendung eines Präfixes aus zwei Bindestrichen (`--`)

Eine benutzerdefinierte Eigenschaft, die mit zwei Bindestrichen beginnt, beginnt mit `--`, gefolgt vom Eigenschaftsnamen (z.B. `--my-property`) und einem Eigenschaftswert, der jeder [gültige CSS-Wert](/de/docs/Learn/CSS/Building_blocks/Values_and_units) sein kann.
Wie jede andere Eigenschaft wird dies innerhalb einer Regel zugewiesen.
Das folgende Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--main-bg-color` erstellt und einen [`<named-color>`](/de/docs/Web/CSS/named-color)-Wert von `brown` verwendet:

```css
section {
  --main-bg-color: brown;
}
```

Der der Regel zugefügte Selektor (im obigen Beispiel [`<section>`](/de/docs/Web/HTML/Element/section)-Elemente) definiert den Geltungsbereich, in dem die benutzerdefinierte Eigenschaft verwendet werden kann.
Aus diesem Grund ist es üblich, benutzerdefinierte Eigenschaften auf der {{cssxref(":root")}}-Pseudoklasse zu definieren, damit sie global referenziert werden können:

```css
:root {
  --main-bg-color: brown;
}
```

Dies muss jedoch nicht immer der Fall sein: Vielleicht haben Sie berechtigte Gründe, den Geltungsbereich Ihrer benutzerdefinierten Eigenschaften einzuschränken.

> [!NOTE]
> Namen von benutzerdefinierten Eigenschaften sind case-sensitiv — `--my-color` wird als eine separate benutzerdefinierte Eigenschaft zu `--My-color` behandelt.

### Verwenden der `@property`-Regel

Die {{cssxref("@property")}}-Regel ermöglicht es Ihnen, die Definition einer benutzerdefinierten Eigenschaft ausdrücklicher zu gestalten, indem Sie die Möglichkeit haben, einen Typ mit der Eigenschaft zu verknüpfen, Standardwerte festzulegen und die Vererbung zu steuern.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft namens `--logo-color`, die einen [`<color>`](/de/docs/Web/CSS/color_value) erwartet:

```css
@property --logo-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Wenn Sie benutzerdefinierte Eigenschaften in JavaScript anstelle direkt in CSS definieren oder damit arbeiten möchten, gibt es dafür eine entsprechende API.
Sie können mehr darüber erfahren, wie dies funktioniert, indem Sie die [Seite zur API für CSS-Eigenschaften und -Werte](/de/docs/Web/API/CSS_Properties_and_Values_API) lesen.

### Referenzieren von benutzerdefinierten Eigenschaften mit `var()`

Unabhängig davon, welche Methode Sie zur Definition einer benutzerdefinierten Eigenschaft wählen, verwenden Sie diese, indem Sie die Eigenschaft in einer {{cssxref("var", "var()")}}-Funktion anstelle eines Standard-Eigenschaftswerts referenzieren:

```css
details {
  background-color: var(--main-bg-color);
}
```

## Erste Schritte mit benutzerdefinierten Eigenschaften

Lassen Sie uns mit einigen HTML-Elementen beginnen, auf die wir einige Stile anwenden möchten.
Es gibt ein `<div>`, das als Container fungiert und einige Kindelemente enthält, einige davon mit verschachtelten Elementen:

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

Wir verwenden das folgende CSS, um einige verschiedene Elemente basierend auf ihren Klassen zu stylen (einige Layout-Regeln werden unten nicht angezeigt, damit wir uns auf die Farben konzentrieren können).
Abhängig von ihren Klassen geben wir den Elementen die Hintergrundfarben `cornflowerblue` oder `aquamarine`:

```css hidden
/* Setze Schriftarten, Rahmen und Abstände */
body {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px schwarz solid;
  padding: 4px;
  margin: 4px;
}

.container {
  display: grid;
  gap: 10px;
}
```

```css
/* Setze für jede Klasse einige Farben */
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

Dies ergibt das folgende Resultat:

{{EmbedLiveSample("First_steps_with_custom_properties",600,360)}}

Es besteht die Möglichkeit, benutzerdefinierte Eigenschaften zu verwenden, um wiederholte Werte in diesen Regeln zu ersetzen.
Nach der Definition von `--main-bg-color` im `.container`-Bereich und der Referenzierung seines Wertes an mehreren Stellen sehen die aktualisierten Stile so aus:

```css
/* Definiere --main-bg-color hier */
.container {
  --main-bg-color: cornflowerblue;
}

/* Setze für jede Klasse einige Farben */
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

Für einige CSS-Deklarationen ist es möglich, diese höher in der Kaskade zu deklarieren und die CSS-Vererbung das Problem lösen zu lassen. Für nicht triviale Projekte ist dies nicht immer möglich. Durch das Deklarieren einer benutzerdefinierten Eigenschaft auf der {{cssxref(":root")}}-Pseudoklasse und das Verwenden dieser Eigenschaft, wo immer sie benötigt wird, kann ein CSS-Autor die Notwendigkeit für Wiederholungen reduzieren:

```css
/* Definiere --main-bg-color hier */
:root {
  --main-bg-color: cornflowerblue;
}

/* Setze für jede Klasse einige Farben */
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

Dies führt zum gleichen Ergebnis wie das vorherige Beispiel, ermöglicht jedoch eine einzige kanonische Deklaration des gewünschten Eigenschaftenwerts (`--main-bg-color: cornflowerblue;`), was sehr nützlich ist, wenn Sie den Wert später im gesamten Projekt ändern möchten.

## Vererbung von benutzerdefinierten Eigenschaften

Eine mit zwei Bindestrichen `--` anstelle von `@property` definierte benutzerdefinierte Eigenschaft erbt immer den Wert ihres Elternteils.
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

Die Ergebnisse von `var(--box-color)` unter Berücksichtigung der Vererbung sind wie folgt:

- `class="one"`: _ungültiger Wert_, was der Standardwert einer auf diese Weise definierten benutzerdefinierten Eigenschaft ist
- `class="two"`: `cornflowerblue`
- `class="three"`: `aquamarine`
- `class="four"`: `cornflowerblue` (geerbt von seinem Elternteil)

Ein Aspekt von benutzerdefinierten Eigenschaften, den die obigen Beispiele demonstrieren, ist, dass sie sich nicht genau wie Variablen in anderen Programmiersprachen verhalten.
Der Wert wird in dem Moment berechnet, in dem er benötigt wird, und nicht an anderen Stellen eines Stylesheets gespeichert und wiederverwendet.
Zum Beispiel können Sie nicht den Wert einer Eigenschaft setzen und erwarten, ihn in einer Regel eines Geschwisters oder eines Nachfahren abzurufen.
Die Eigenschaft wird nur für den passenden Selektor und seine Nachfahren gesetzt.

### Verwendung von `@property`, um die Vererbung zu steuern

Die `@property`-Regel ermöglicht es Ihnen, explizit anzugeben, ob die Eigenschaft vererbt wird oder nicht.
Das folgende Beispiel erstellt eine benutzerdefinierte Eigenschaft unter Verwendung der `@property`-Regel.
Die Vererbung ist deaktiviert, es wird ein [`<color>`](/de/docs/Web/CSS/color_value)-Datentyp definiert und ein Anfangswert von `cornflowerblue`.

Das Elternelement setzt `--box-color` auf einen Wert von `green` und verwendet `--box-color` als Wert für seine Hintergrundfarbe.
Das Kindelement verwendet ebenfalls `background-color: var(--box-color)`, und wir würden erwarten, dass es die Farbe `green` hat, wenn die Vererbung aktiviert wäre (oder wenn es mit der Doppeldash-Syntax definiert wurde).

```html live-sample___at-property-inheritance
<div class="parent">
  <p>Elternelement</p>
  <div class="child">
    <p>Kindelement mit deaktivierter Vererbung für --box-color.</p>
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

Da `inherits: false;` in der Regel gesetzt ist und innerhalb des `.child`-Bereichs kein Wert für die `--box-color`-Eigenschaft deklariert ist, wird der Anfangswert von `cornflowerblue` anstelle von `green` verwendet, der vom Elternteil geerbt worden wäre:

{{embedlivesample("at-property-inheritance", "100%", "250px")}}

## Fallback-Werte für benutzerdefinierte Eigenschaften

Sie können Fallback-Werte für benutzerdefinierte Eigenschaften mit der `var()`-Funktion und dem `initial-value` der `@property`-Regel definieren.

> [!NOTE]
> Fallback-Werte werden nicht verwendet, um Kompatibilitätsprobleme zu beheben, wenn CSS-benutzerdefinierte Eigenschaften nicht unterstützt werden, da der Fallback-Wert in diesem Fall nicht hilft.
> Fallbacks decken den Fall ab, in dem der Browser CSS-benutzerdefinierte Eigenschaften unterstützt und in der Lage ist, einen anderen Wert zu verwenden, wenn die gewünschte Variable noch nicht definiert ist oder einen ungültigen Wert hat.

### Definieren von Fallbacks in der `var()`-Funktion

Mit der [`var()`](/de/docs/Web/CSS/var)-Funktion können Sie mehrere **Fallback-Werte** definieren, wenn die angegebene Variable noch nicht definiert ist; dies kann nützlich sein, wenn Sie mit [benutzerdefinierten Elementen](/de/docs/Web/API/Web_components/Using_custom_elements) und [Shadow DOM](/de/docs/Web/API/Web_components/Using_shadow_DOM) arbeiten.

Das erste Argument der Funktion ist der Name der benutzerdefinierten Eigenschaft. Das zweite Argument der Funktion ist ein optionaler Fallback-Wert, der als Ersatzwert verwendet wird, wenn die referenzierte benutzerdefinierte Eigenschaft ungültig ist.
Die Funktion akzeptiert zwei Parameter und weist alles, was dem ersten Komma folgt, als zweiten Parameter zu. Wenn der zweite Parameter ungültig ist, schlägt der Fallback fehl. Zum Beispiel:

```css
.one {
  /* Rot, wenn --my-var nicht definiert ist */
  color: var(--my-var, red);
}

.two {
  /* pink, wenn --my-var und --my-background nicht definiert sind */
  color: var(--my-var, var(--my-background, pink));
}

.three {
  /* Ungültig: "--my-background, pink" */
  color: var(--my-var, --my-background, pink);
}
```

Einen benutzerdefinierten Eigenschaft als Fallback einzuschließen, wie im zweiten Beispiel oben (`var(--my-var, var(--my-background, pink))`), ist der richtige Weg, um mehr als einen Fallback mit `var()` bereitzustellen.
Sie sollten sich jedoch der Leistungsauswirkungen dieser Methode bewusst sein, da sie mehr Zeit zum Parsen der verschachtelten Variablen benötigt.

> [!NOTE]
> Die Syntax des Fallbacks erlaubt, wie die von [benutzerdefinierten Eigenschaften](https://www.w3.org/TR/css-variables/#custom-property), Kommata. Zum Beispiel definiert `var(--foo, red, blue)` einen Fallback von `red, blue` — alles zwischen dem ersten Komma und dem Ende der Funktion wird als Fallback-Wert betrachtet.

### Fallbacks unter Verwendung des `@property`-Anfangswerts

Zusätzlich zur Verwendung von `var()` kann der in der `@property`-Regel definierte `initial-value` als Fallback-Mechanismus verwendet werden.
Tatsächlich haben wir dies bereits im Abschnitt [`@property` Vererbung](#using_property_to_control_inheritance) gesehen.

Das folgende Beispiel setzt einen Anfangswert von `--box-color` auf `cornflowerblue` unter Verwendung der `@property`-Regel.
In der Regel, die der Regel folgt, möchten wir `--box-color` auf `aquamarine` setzen, aber es gibt einen Tippfehler im Wertnamen.
Dasselbe gilt für das dritte `<div>`, wo wir `2rem` für die benutzerdefinierte Eigenschaft verwendet haben, die einen gültigen [`<color>`-Wert](/de/docs/Web/CSS/color_value) erwartet.
Sowohl `2rem` als auch `aqumarine` sind ungültige Farbwerte, daher wird der Anfangswert `cornflowerblue` angewendet:

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

Jede CSS-Eigenschaft kann einem definierten [Satz von Werten](/de/docs/Learn/CSS/Building_blocks/Values_and_units) zugewiesen werden.
Wenn Sie versuchen, einer Eigenschaft einen Wert zuzuweisen, der außerhalb ihres Satzes von gültigen Werten liegt, wird er als _ungültig_ angesehen.

Wenn der Browser einen ungültigen Wert für eine reguläre CSS-Eigenschaft (zum Beispiel einen Wert von `16px` für die {{cssxref("color")}}-Eigenschaft) sieht, ignoriert er die Deklaration, und Elemente erhalten die Werte, die sie hätten, wenn die Deklaration nicht existieren würde.
Im folgenden Beispiel sehen wir, was passiert, wenn eine reguläre CSS-Deklaration ungültig ist; `color: 16px;` wird ignoriert und die vorherige `color: blue`-Regel wird stattdessen angewendet:

```html live-sample___invalid-property
<p>Dieser Absatz ist anfänglich schwarz.</p>
```

```css live-sample___invalid-property
p {
  color: blue;
}

p {
  /* ups, nicht gültige Farbe */
  color: 16px;
}
```

{{EmbedLiveSample('invalid-property', 100, 50)}}

Wenn der Browser jedoch die Werte von benutzerdefinierten Eigenschaften parst, weiß er noch nicht, wo sie verwendet werden, daher muss er fast alle Werte als _gültig_ betrachten.
Leider können diese gültigen Werte, mittels der `var()`-Funktionalität, in einem Kontext verwendet werden, in dem sie möglicherweise keinen Sinn ergeben.
Eigenschaften und benutzerdefinierte Variablen können zu ungültigen CSS-Aussagen führen, was zum Konzept von _gültig zur Berechnungszeit_ führt.

Wenn der Browser auf eine ungültige `var()`-Substitution stößt, wird dann der [Initialwert](/de/docs/Web/CSS/initial_value) oder der [geerbte](/de/docs/Web/CSS/Inheritance) Wert der Eigenschaft verwendet.
Dieses Beispiel ist genau wie das letzte, außer dass wir eine benutzerdefinierte Eigenschaft verwenden.

Der Browser ersetzt den Wert von `--text-color` an der Stelle von `var(--text-color)`, aber `16px` ist kein gültiger Wert für die {{cssxref("color")}}-Eigenschaft.
Nach dem Ersetzen ergibt die Eigenschaft keinen Sinn mehr, daher behandelt der Browser diese Situation in zwei Schritten:

1. Prüfen, ob die Eigenschaft {{cssxref("color")}} vererbbar ist. Sie ist vererbbar, aber dieses `<p>` hat keinen Elternteil, bei dem die `color`-Eigenschaft gesetzt ist. Also gehen wir zum nächsten Schritt über.
2. Setzen Sie den Wert auf seinen **Standardanfangswert**, der schwarz ist.

```html live-sample___invalid-custom-property
<p>Dieser Absatz ist anfänglich schwarz.</p>
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

Für solche Fälle kann die `@property`-Regel unerwartete Ergebnisse verhindern, indem sie den Anfangswert der Eigenschaft erlaubt zu definieren:

```html live-sample___invalid-custom-property-fallbacks
<p>Dieser Absatz ist anfänglich schwarz.</p>
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

Um die Werte von benutzerdefinierten Eigenschaften in JavaScript zu verwenden, ist es genauso wie bei Standard-Eigenschaften.

```js
// Variable aus Inline-Stil abrufen
element.style.getPropertyValue("--my-var");

// Variable von überall abrufen
getComputedStyle(element).getPropertyValue("--my-var");

// Variable auf Inline-Stil setzen
element.style.setProperty("--my-var", jsVar + 4);
```

## Siehe auch

- [Benutzerdefinierte Eigenschaftssyntax](/de/docs/Web/CSS/--*)
- {{cssxref("@property")}}-Regel
- [`var()`](/de/docs/Web/CSS/var)
- [CSS-Eigenschaften-und-Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-benutzerdefinierte Eigenschaften für kaskadierende Variablen](/de/docs/Web/CSS/CSS_cascading_variables) Modul
