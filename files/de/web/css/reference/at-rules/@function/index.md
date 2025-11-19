---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 1dcf976e9b654679c762568812562b1a2361c755
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht das Definieren von [CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Einmal definiert, kann eine Benutzerfunktion mit der {{cssxref("&lt;dashed-function>")}}-Syntax (zum Beispiel `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswerts aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitive.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) Name zur Identifizierung des Parameters, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitive. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die die akzeptierten Datentypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Aufruf der Funktion nicht angegeben wird. Dieser Wert muss gemäß dem `<css-type>` gültig sein, wenn angegeben. Der Standardwert wird durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, der/die durch das Schlüsselwort `returns` vorangestellt ist und die akzeptierten Rückgabetypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `returns type(*)`), obwohl zu beachten ist, dass die Funktion ungültig wird, wenn der Rückgabetyp nicht mit dem Typ übereinstimmt, der durch den `result`-Deskriptor erzeugt wird.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Körper der Funktion definieren und deren Logik enthalten. Eingeschlossene Deklarationen können beinhalten:
    - CSS-Benutzerdefinierte Eigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result`-Deskriptor, entweder direkt innerhalb der `@function`-At-Regel oder innerhalb einer geschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS-Benutzerfunktion zurückgegeben wird. Der in den Wert enthaltene Ausdruck wird ausgewertet und das Ergebnis zurückgegeben.

## Beschreibung

CSS-Benutzerfunktionen ermöglichen es, wiederverwendbare Logikabschnitte zu definieren, die je nach den akzeptierten Eingabeparametern und der innerhalb des Funktionskörpers definierten Logik unterschiedliche Werte zurückgeben.

Eine typische CSS-Funktion sieht folgendermaßen aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, auf, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält eine einzelne Zeile, die ein `result`-Deskriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result`-Deskriptors verwendet [CSS-relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit dem im Eingabewert `--alpha` angegebenen Alphakanalwert zu konvertieren.

Sie können diese Funktion dann überall dort aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, bei der es sich um den Funktionsnamen mit Klammern am Ende handelt. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die Funktion, die zuletzt in der Quellreihenfolge definiert ist.

### Datentypen spezifizieren

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen zu spezifizieren. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Nun produziert die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind, und das `result` ist ein {{cssxref("&lt;color>")}}. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

dann wird der Wert zur Berechnungszeit ungültig (da das angegebene `--alpha`-Argument ein `<percentage>` und keine `<number>` wie erwartet ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mit einer {{cssxref("type()")}}-Funktion und dem `|`-Symbol als Trennzeichen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` jetzt gültig.

### Standardwerte angeben

Sie können auch Standardwerte für Parameter angeben, nach einem Doppelpunkt am Ende ihrer Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des `--alpha`-Parameters ist jetzt `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Aufruf der Funktion weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert stattdessen verwendet.

### Übergabe von Komma-enthaltenden Werten als Argumente

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welche der Listenlängen die größte ist, addiert sie zur Einzellänge und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die fälschlicherweise als drei separate Argumente interpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert beim Übergeben in den Funktionsaufruf in geschweifte Klammern einschließen:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen einbeziehen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann innerhalb des Funktionskörpers verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers angeben, die als lokalbereichige Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Shorthand-Wert zurückgibt, bei dem die Dauer- und Entspannungswerte immer gleich sind, und nur der Animationsname und die Anzahl variieren.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Verwendung ermöglicht es Ihnen, eine einfachere, ausdrucksstärkere Syntax für Animationen zu schreiben, vorausgesetzt, Sie möchten, dass die Dauer- und Entspannungsfunktion immer gleich sind:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion innerhalb einer anderen aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von höher gesetzten Funktionen im Aufruf-Stack zugreifen. Hier sind der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft im Gültigkeitsbereich der inneren Funktion verfügbar:

```css
@function --outer(--outer-arg) {
  --outer-local: 2;
  result: --inner();
}

@function --inner() returns <number> {
  result: calc(var(--outer-arg) + var(--outer-local));
}

div {
  z-index: --outer(1); /* 3 */
}
```

Darüber hinaus sind benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, für diese verfügbar:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft gleichen Namens an mehreren Orten definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokalbereichige benutzerdefinierte Eigenschaften, die innerhalb des Funktionskörpers definiert sind, überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft von der benutzerdefinierten Eigenschaft der `div`-Regel, die `--b`-Eigenschaft vom Funktionsparameter und die `--c` lokale benutzerdefinierte Eigenschaft.

```css
@function --add-a-b-c(--b, --c) {
  --c: 300;
  result: calc(var(--a) + var(--b) + var(--c));
}

div {
  --a: 1;
  --b: 2;
  --c: 3;
  z-index: --add-a-b-c(20, 30); /* 321 */
}
```

### Einschließen von komplexer Logik

Sie können komplexere Logik in Funktionen einschließen, indem Sie Konstrukte wie {{cssxref("@media")}}-At-Regeln und {{cssxref("if()")}}-Funktionen verwenden. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Sie gibt standardmäßig das letztere zurück, gibt jedoch das erstere zurück, wenn die Viewportbreite weniger als `700px` beträgt, wie mittels einer Medienabfrage erkannt wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren enthalten, um unterschiedliche Ergebnisse für unterschiedliche logische Ergebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich in Bezug auf Konfliktlösung wie der Rest von CSS – zuletzt in der Quellreihenfolge gewinnt. Daher ist im obigen Beispiel das `result` `var(--wide)`, es sei denn, der Medienabfragetest ist wahr, in welchem Fall es durch `var(--narrow)` überschrieben wird.
>
> Es gibt keine Früh-Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. Im obigen Beispiel, wenn die Medienabfrage zuerst geschrieben wurde, vor der einzigen `result`-Zeile, wäre das `result` immer `var(--wide)` , da es `var(--narrow)` in Fällen überschreiben würde, in denen der Medienabfragetest wahr ist.

Wir könnten die CSS-Benutzerfunktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie in unserem [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)-Leitfaden.

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine grundlegende Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das Textinhalt enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS-Benutzerfunktion. Die Funktion heißt `--double` und akzeptiert einen einzigen Parameter eines beliebigen Typs, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result`-Deskriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Dann definieren wir eine benutzerdefinierte Eigenschaft `--base-spacing` mit einem Wert von `10px`. Wir ordnen diese Eigenschaft dem Wert {{cssxref("border-radius")}} zu, verdoppeln sie jedoch für den {{cssxref("padding")}}-Wert mit der `--double()`-Benutzerfunktion.

```css hidden live-sample___basic-example
html,
body {
  height: 100%;
}

body {
  margin: 0;
  display: grid;
  place-items: center;
  font-family: system-ui;
}
```

```css live-sample___basic-example
p {
  --base-spacing: 10px;
  border-radius: var(--base-spacing);
  padding: --double(var(--base-spacing));
  width: 50%;
  background-color: wheat;
}
```

#### Ergebnis

{{ EmbedLiveSample('basic-example', '100%', '150px') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}}-Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type)-Funktion
- [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS-Benutzerfunktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins)-Modul
