---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rules) ermöglicht das Definieren von [CSS Custom Functions](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions). Einmal definiert, kann eine Custom Function mit der Syntax {{cssxref("&lt;dashed-function>")}} (z. B. `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswerts aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt und gefolgt wird von einem gültigen, benutzerdefinierten Bezeichner. Er ist case-sensitiv.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein Name einer [CSS Custom Property](/de/docs/Web/CSS/Reference/Properties/--*), um den Parameter zu identifizieren, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), der mit `--` beginnt und gefolgt wird von einem gültigen, benutzerdefinierten Bezeichner. Er ist case-sensitiv. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die die akzeptierten Datentyp(en) für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Funktionsaufruf nicht angegeben wird. Dieser Wert muss gemäß dem `<css-type>` gültig sein, falls angegeben. Der Standardwert wird mit einem Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, der/die vom Schlüsselwort `returns` vorangestellt ist und die akzeptierten Rückgabetyp(en) für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `returns type(*)`), obwohl der Funktion ungültig ist, wenn der Rückgabetyp nicht mit dem vom `result`-Deskriptor erzeugten Typ übereinstimmt.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Rules, die den Funktionskörper definieren und ihre Logik enthalten. Eingeschlossene Deklarationen können enthalten:
    - CSS Custom Properties, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result`-Deskriptor, der entweder direkt innerhalb der `@function`-At-Rule oder innerhalb einer verschachtelten At-Rule enthalten ist.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS Custom Function zurückgegeben wird. Der Ausdruck, der im Wert enthalten ist, wird ausgewertet, und das Ergebnis wird zurückgegeben.

## Beschreibung

CSS Custom Functions ermöglichen das Definieren wiederverwendbarer Logikabschnitte, die unterschiedliche Werte zurückgeben, abhängig von den Parametern, die sie als Eingaben akzeptieren, und der in ihrem Funktionskörper definierten Logik.

Eine typische CSS-Funktion sieht wie folgt aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei Custom Properties als Parameter, `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält eine einzige Zeile, die ein `result`-Deskriptor ist, der den Wert definiert, der von der Funktion zurückgegeben wird. Der Wert des `result`-Deskriptors verwendet die [relative Farbsyntax von CSS](/de/docs/Web/CSS/CSS_colors/Relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit dem Alphakanal-Wert zu konvertieren, der im Eingabewert `--alpha` angegeben ist.

Sie können diese Funktion dann überall aufrufen, um eine halbtransparente Version einer bestehenden Farbe zu erzeugen, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird aufgerufen, indem Sie die {{cssxref("&lt;dashed-function>")}}-Syntax verwenden, was der Funktionsname mit Klammern am Ende ist. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die zuletzt in der Quellenreihenfolge definierte Funktion.

### Definieren von Datentypen

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen anzugeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt liefert die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind, und das `result` ist ein {{cssxref("&lt;color>")}}. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungswertzeit ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und nicht eine `<number>` wie erwartet ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mithilfe einer {{cssxref("type()")}}-Funktion mit dem `|`-Symbol als Trennzeichen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` jetzt gültig.

### Definieren von Standardwerten

Sie können auch Standardwerte für Parameter angeben, nach einem Doppelpunkt am Ende ihrer Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des `--alpha`-Parameters ist nun `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Funktionsaufruf weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert, und der Standardwert wird stattdessen verwendet.

### Übergeben von Werten mit Kommas als Argumente

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass eine kommaseparierte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welche der Längen der Liste die größte ist, addiert sie zur einzelnen Länge und gibt dann das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommaseparierte Liste sein, die fälschlicherweise als drei separate Argumente interpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern einwickeln, wenn Sie ihn in den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Einschließen von Custom Properties in Funktionen

Wie wir bereits gesehen haben, werden Funktionsparameter als Custom Properties definiert, die dann innerhalb des Funktionskörpers verfügbar sind.

Sie können auch Custom Properties innerhalb des Funktionskörpers angeben, die als lokal begrenzte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurznotationwert zurückgibt, bei dem die Dauer- und Easing-Werte immer gleich sind und nur der Animationsname und -anzahl variiert werden.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Nutzung ermöglicht es Ihnen, einen einfacher zu lesenden und ausdrucksstärkeren Syntax für Animationen zu schreiben, vorausgesetzt, Sie möchten immer die gleiche Dauer und Easing-Funktion:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine Custom Function von innerhalb einer anderen aufrufen können. In solchen Fällen kann eine Custom Function auf lokale Variablen und Funktionsparameter von Funktionen zugreifen, die höher im Aufrufstapel stehen. Hier werden der Parameter der äußeren Funktion und die lokale Custom Property innerhalb des Bereichs der inneren Funktion verfügbar sein:

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

Darüber hinaus sind Custom Properties, die auf demselben Element definiert sind, auf dem die Custom Function aufgerufen wird, für diese verfügbar:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine Custom Property mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter die Custom Properties, die auf demselben Element definiert sind, und lokale Custom Properties, die innerhalb des Funktionskörpers definiert sind, überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft aus der Custom Property der `div`-Regel, die `--b`-Eigenschaft aus dem Funktionsparameter und die lokale Custom Property `--c`.

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

### Einschließen komplexer Logik

Sie können in Funktionen komplexere Logik mit Konstrukten wie {{cssxref("@media")}}-At-Rules und {{cssxref("if()")}}-Funktionen einschließen. Im nächsten Beispiel nimmt die Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Sie gibt standardmäßig das letztere zurück, gibt aber das erstere zurück, wenn die Viewportbreite weniger als `700px` beträgt, wie durch eine Media Query festgestellt.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren einschließen, um unterschiedliche Ergebnisse für unterschiedliche Logikausgänge auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich in Bezug auf Konfliktlösung genauso wie der Rest von CSS – zuletzt in der Quellenreihenfolge gewinnt. Daher ist im obigen Beispiel das `result` `var(--wide)`, es sei denn, der Media Query-Test gibt true zurück, in welchem Fall es durch `var(--narrow)` überschrieben wird.
>
> Es gibt keine vorzeitigen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der obigen Funktion, wenn die Media Query zuerst geschrieben würde, vor der einzelnen `result`-Zeile, wäre das `result` immer `var(--wide)`, weil es `var(--narrow)` in Fällen überschreiben würde, in denen der Media Query-Test true zurückgibt.

Wir könnten die CSS-Custom-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele siehe unseren [Leitfaden zur Verwendung von CSS Custom Functions](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende `@function`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit etwas Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS-Custom-Funktion. Die Funktion heißt `--double` und akzeptiert einen einzelnen Parameter beliebigen Typs, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result`-Deskriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Dann definieren wir eine `--base-spacing`-Custom Property mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}}-Wert zu, verdoppeln sie jedoch für den {{cssxref("padding")}}-Wert mithilfe der `--double()`-Custom-Funktion.

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

- [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type)-Funktion
- [Verwendung von CSS Custom Functions](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS Custom Functions und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins)-Modul
