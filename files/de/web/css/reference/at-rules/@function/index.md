---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht die Definition von [CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Sobald eine benutzerdefinierte Funktion definiert ist, kann sie mit der Syntax {{cssxref("&lt;dashed-function>")}} (zum Beispiel, `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswertes aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist groß- und kleinschreibungsempfindlich.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein [CSS benutzerdefiniertes Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) Name zur Identifizierung des Parameters, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist groß- und kleinschreibungsempfindlich. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}} Funktion, die die akzeptierten Datentypen für den Parameter definiert. Wenn dies nicht angegeben ist, wird jeder Datentyp als gültig für den Parameter angesehen (ebenso wie die Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er nicht beim Aufruf der Funktion angegeben wird. Dieser Wert muss gemäß dem `<css-type>`, falls angegeben, gültig sein. Der Standardwert wird durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}} Funktion, vorangestellt durch das Schlüsselwort `returns`, die die akzeptierten Rückgabetypen für den Parameter definiert. Wenn dies nicht angegeben ist, wird jeder Datentyp als gültig für den Parameter angesehen (ebenso wie die Angabe von `returns type(*)`), wobei zu beachten ist, dass die Funktion ungültig wird, wenn der Rückgabewert nicht dem Typ entspricht, der durch den `result` Deskriptor erzeugt wird.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Funktionskörper definieren und die Logik enthalten. Eingeschlossene Deklarationen können enthalten:
    - CSS benutzerdefinierte Eigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result` Deskriptor, entweder direkt innerhalb der `@function` At-Regel oder innerhalb einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS benutzerdefinierten Funktion zurückgegeben wird. Der Ausdruck im Wert wird ausgewertet und das Ergebnis zurückgegeben.

## Beschreibung

CSS benutzerdefinierte Funktionen ermöglichen es Ihnen, wiederverwendbare Logikabschnitte zu definieren, die je nach den als Eingaben akzeptierten Parametern und der innerhalb des Funktionskörpers definierten Logik unterschiedliche Werte zurückgeben.

Eine typische CSS-Funktion sieht so aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter an, `--color` und `--alpha`, die lokal im Funktionskörper verwendet werden können. Der Körper enthält eine einzige Zeile, die ein `result` Deskriptor ist, der den Wert definiert, der von der Funktion zurückgegeben wird. Der Wert des `result` Deskriptors verwendet die [CSS relative Farbensyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch) Farbe mit dem im Eingabewert `--alpha` angegebenen Alphakanalwert zu konvertieren.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird durch die Verwendung der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, das ist der Funktionsname mit Klammern am Ende. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Schicht sind, gewinnt die zuletzt in der Quellreihenfolge definierte Funktion.

### Festlegen von Datentypen

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen festzulegen. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt erzeugt die Funktion nur dann einen gültigen Wert, wenn die Eingabewerte ein {{cssxref("&lt;color>")}} und ein {{cssxref("&lt;number>")}} sind, und der `result` ein {{cssxref("&lt;color>")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und nicht eine `<number>` ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mit einer {{cssxref("type()")}} Funktion mit dem `|` Symbol als Separator angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` nun gültig.

### Angabe von Standardwerten

Sie können auch Standardwerte für Parameter am Ende ihrer Definition nach einem Doppelpunkt angeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des Parameters `--alpha` ist nun `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Funktionsaufruf weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und stattdessen der Standardwert verwendet.

### Übergabe von Werten, die Kommas enthalten, als Argumente

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass ihr eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS {{cssxref("max()")}} Funktion, um zu bestimmen, welches der Listen von Längen am größten ist, addiert sie zur einzelnen Länge, und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die als drei separate Argumente missverstanden werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern einschließen, wenn Sie ihn in den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Einbeziehung benutzerdefinierter Eigenschaften in Funktionen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann im Funktionskörper verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften im Funktionskörper angeben, die als lokal-gescopedte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Shortcode-Wert zurückgibt, bei dem die Dauer- und Überblendenwerte immer gleich bleiben, und nur der Animationsname und die Zählung variiert werden.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Nutzung ermöglicht es Ihnen, eine einfachere, ausdrucksstärkere Syntax für Animationen zu schreiben, vorausgesetzt, Sie wissen, dass Sie immer dieselbe Dauer und Überblendenfunktion verwenden wollen:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion von einer anderen aus aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von Funktionen höher im Aufrufstack zugreifen. Hier wird der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft im Gültigkeitsbereich der inneren Funktion verfügbar sein:

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

Zusätzlich werden benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, verfügbar sein:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers überschreiben beides. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die Eigenschaft `--a` aus der benutzerdefinierten Eigenschaft der `div`-Regel, die Eigenschaft `--b` aus dem Funktionsparameter und die lokal definierte benutzerdefinierte Eigenschaft `--c`.

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

### Einbeziehung komplexer Logik

Sie können komplexere Logik in Funktionen mit Konstrukten wie {{cssxref("@media")}} At-Regeln und {{cssxref("if()")}} Funktionen einbeziehen. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit großem Bildschirm. Sie gibt standardmäßig letzteres zurück, gibt aber ersteres zurück, wenn die Viewport-Breite weniger als `700px` breit ist, wie durch eine Medienabfrage erkannt wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result` Deskriptoren einbeziehen, um unterschiedliche Ergebnisse für verschiedene Logikausgänge auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich genauso wie der Rest von CSS in Bezug auf Konfliktlösung — die zuletzt in der Quellreihenfolge gewinnt. Daher ist im oben genannten Funktion der `result` `var(--wide)`, es sei denn, der Medientest ergibt wahr, in welchem Fall er von `var(--narrow)` überschrieben wird.
>
> Es gibt keine frühen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der oben genannten Funktion, wenn die Medienabfrage zuerst geschrieben wurde, bevor die einzelne `result`-Zeile, wäre der `result` immer `var(--wide)`, weil es `var(--narrow)` überschreiben würde, in den Fällen, in denen der Medientest wahr ergibt.

Wir könnten die CSS benutzerdefinierte Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formalsyntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele siehe unseren [Using CSS custom functions](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) Leitfaden.

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine grundlegende Funktion, die den Wert verdoppelt, der in sie übergeben wird.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit einigen Textinhalten:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zunächst die CSS benutzerdefinierte Funktion. Die Funktion heißt `--double` und akzeptiert einen einzigen Parameter vom beliebigen Typ, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result` Deskriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als Nächstes definieren wir eine benutzerdefinierte Eigenschaft `--base-spacing` mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}} Wert zu, verdoppeln sie dann aber für den {{cssxref("padding")}} Wert mit der `--double()` benutzerdefinierten Funktion.

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

- [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type) Funktion
- [Using CSS custom functions](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins) Modul
