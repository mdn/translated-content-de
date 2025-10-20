---
title: "@function"
slug: Web/CSS/@function
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{SeeCompatTable}}

Die **`@function`**- [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht das Definieren von [CSS Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions). Sobald eine Custom-Funktion definiert ist, kann sie mittels der {{cssxref("&lt;dashed-function>")}}-Syntax (zum Beispiel `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswertes aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und einem gültigen, benutzerdefinierten Bezeichner folgt. Er ist case-sensitive.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameter-Definitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Der Name einer [CSS-Custom-Property](/de/docs/Web/CSS/--*), um den Parameter zu identifizieren, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und einem gültigen, benutzerdefinierten Bezeichner folgt. Er ist case-sensitive. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die die akzeptierten Datentypen für den Parameter definiert. Wenn dies nicht angegeben wird, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Funktionsaufruf nicht angegeben ist. Dieser Wert muss gültig gemäß dem `<css-type>` sein, falls angegeben. Der Standardwert ist durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, der/die durch das Schlüsselwort `returns` vorangestellt wird und die akzeptierten Rückgabetypen für den Parameter definiert. Wenn dies nicht angegeben wird, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `returns type(*)`), obwohl zu beachten ist, dass die Funktion ungültig wird, wenn der Rückgabetyp nicht dem vom `result`-Descriptor produzierten Typ entspricht.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Körper der Funktion definieren und ihre Logik enthalten. Eingeschlossene Deklarationen können beinhalten:
    - CSS-Custom-Properties, die lokal auf den Funktionskörper beschränkt sind.
    - Den `result`-Descriptor, entweder direkt innerhalb der `@function`-At-Regel oder innerhalb einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS-Custom-Funktion zurückgegeben wird. Der in dem Wert enthaltene Ausdruck wird ausgewertet und das Ergebnis wird zurückgegeben.

## Beschreibung

CSS-Custom-Funktionen ermöglichen es Ihnen, wiederverwendbare Logikabschnitte zu definieren, die unterschiedliche Werte zurückgeben, je nach den Parametern, die sie als Eingaben akzeptieren und der Logik, die innerhalb des Funktionskörpers definiert ist.

Eine typische CSS-Funktion sieht folgendermaßen aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei Custom-Properties als Parameter, `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält eine einzelne Zeile, die ein `result`-Descriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result`-Descriptors verwendet die [CSS-Relative-Color-Syntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe mit dem in `--alpha` angegebenen Alphakanalwert umzuwandeln.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer bestehenden Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird durch die Verwendung der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, dies ist der Funktionsname mit Klammern am Ende. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion mit der stärkeren Cascade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die Funktion, die zuletzt in der Quellreihenfolge definiert wurde.

### Datentypen angeben

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen anzugeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt liefert die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` ein {{cssxref("&lt;color>")}} ist. Falls nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und keine `<number>` ist, wie erwartet) und die `background-color` wird letztendlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen angeben, indem Sie eine {{cssxref("type()")}}-Funktion mit dem `|`-Symbol als Trennzeichen verwenden, zum Beispiel:

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

Der Standardwert des `--alpha`-Parameters ist jetzt `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Funktionsaufruf weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert verwendet.

### Werte, die Kommas enthalten, als Argumente übergeben

Im folgenden Beispiel erwartet die Funktion `--max-plus-x()`, dass ihr eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welche der Längen aus der Liste die größte ist, addiert diese zur einzelnen Länge und gibt dann das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die fälschlicherweise als drei separate Argumente interpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern setzen, wenn Sie ihn in den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen einbeziehen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann innerhalb des Funktionskörpers verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers spezifizieren, die als lokal geschoppte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurzschreibwert zurückgibt, bei dem die Dauer- und die Easing-Werte immer gleich sind und nur der Animationsname und die Anzahl variieren.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Nutzung ermöglicht es Ihnen, eine einfachere, ausdrucksstärkere Syntax für Animationen zu schreiben, vorausgesetzt, Sie wissen, dass Sie die Dauer- und Easing-Funktion immer gleich halten möchten:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion von einer anderen benutzerdefinierten Funktion aus aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von höher in der Aufrufkette aufrufen. Hier ist der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft im Bereich der inneren Funktion verfügbar:

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

Zusätzlich werden benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, verfügbar gemacht:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft aus der benutzerdefinierten Eigenschaft der `div`-Regel, die `--b`-Eigenschaft aus dem Funktionsparameter und die `--c`-lokale benutzerdefinierte Eigenschaft.

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

### Komplexe Logik einbeziehen

Sie können komplexere Logik in Funktionen einbeziehen, indem Sie Konstrukte wie {{cssxref("@media")}}-At-Regeln und {{cssxref("if()")}}-Funktionen verwenden. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout auf schmalem Bildschirm und eines für ein Layout auf breitem Bildschirm. Standardmäßig wird letzteres zurückgegeben, aber ersteres wird zurückgegeben, wenn die Viewport-Breite weniger als `700px` breit ist, was mittels einer Medienabfrage festgestellt wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren einfügen, um verschiedene Ergebnisse für verschiedene Logik-Ergebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich genauso wie der Rest von CSS bei der Konfliktlösung — das zuletzt in der Quellreihenfolge gewinnt. Daher ist in der obigen Funktion das `result` `var(--wide)`, es sei denn, der Medientest gibt true zurück, in diesem Fall wird es durch `var(--narrow)` überschrieben.
>
> Es gibt in CSS-Funktionen keine frühen Rückgaben wie in JavaScript-Funktionen. In der obigen Funktion wäre, wenn die Medienabfrage zuerst vor der einzelnen `result`-Zeile geschrieben stünde, das `result` immer `var(--wide)`, da es `var(--narrow)` in Fällen überschreiben würde, in denen die Medienabfrage true zurückgibt.

Wir könnten die CSS-Custom-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele, siehe unseren [Leitfaden zum Verwenden von CSS-Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine grundlegende Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zunächst die CSS-Custom-Funktion. Die Funktion heißt `--double` und akzeptiert einen einzelnen Parameter beliebigen Typs, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result`-Descriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als nächstes definieren wir eine `--base-spacing`-benutzerdefinierte Eigenschaft mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}}-Wert zu, verdoppeln sie dann aber für den {{cssxref("padding")}}-Wert mithilfe der `--double()`-Custom-Funktion.

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

- [CSS-Custom-Properties](/de/docs/Web/CSS/--*)
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/type) Funktion
- [Leitfaden zum Verwenden von CSS-Custom-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [Modul für CSS-Custom-Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins)
