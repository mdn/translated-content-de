---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht das Definieren von [CSS-Custom-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Einmal definiert, kann eine Custom-Funktion mit der Syntax {{cssxref("&lt;dashed-function>")}} aufgerufen werden (zum Beispiel `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswerts.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es ist case-sensitiv.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameter-Definitionen. Mehrere Parameter-Definitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein Name einer [CSS-Custom-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) zur Identifizierung des Parameters, ein [`<dashed-ident>`](/de/docs/Web/CSS/Reference/Values/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es ist case-sensitiv. Funktionsparameter können als Custom-Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die den akzeptierten Datentyp/die akzeptierten Datentypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Aufruf der Funktion nicht angegeben wird. Dieser Wert muss gemäß dem `<css-type>` gültig sein, falls angegeben. Der Standardwert ist von den anderen Teilen der Parameterdefinition durch einen Doppelpunkt (`:`) getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, der/die dem Schlüsselwort `returns` vorangestellt ist und die akzeptierten Rückgabetypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `returns type(*)`), obwohl zu beachten ist, dass die Funktion ungültig ist, wenn der Rückgabetyp nicht mit dem vom `result`-Deskriptor erzeugten Typ übereinstimmt.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Körper der Funktion definieren, der ihre Logik enthält. Eingeschlossene Deklarationen können Folgendes umfassen:
    - CSS-Custom-Eigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result`-Deskriptor, entweder direkt innerhalb der `@function`-At-Regel oder innerhalb einer geschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS-Custom-Funktion zurückgegeben wird. Der Ausdruck, der im Wert enthalten ist, wird ausgewertet und das Ergebnis wird zurückgegeben.

## Beschreibung

CSS-Custom-Funktionen ermöglichen es Ihnen, wiederverwendbare Logikabschnitte zu definieren, die je nach den als Eingaben akzeptierten Parametern und der im Funktionskörper definierten Logik unterschiedliche Werte zurückgeben.

Eine typische CSS-Funktion sieht folgendermaßen aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei Custom-Eigenschaften als Parameter, `--color` und `--alpha`, die lokal im Funktionskörper verwendet werden können. Der Körper enthält eine einzige Zeile, die ein `result`-Deskriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result`-Deskriptors verwendet die [CSS-Relative-Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den Eingabewert von `--color` in eine [`oklch()`](/de/docs/Web/CSS/Reference/Values/color_value/oklch)-Farbe mit dem Alpha-Kanalwert umzuwandeln, der im Eingabewert `--alpha` angegeben ist.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird mit der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, was der Funktionsname mit Klammern am Ende ist. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die zuletzt im Quelltext definierte Funktion.

### Datentypen spezifizieren

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen zu spezifizieren. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt erzeugt die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente jeweils eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` eine {{cssxref("&lt;color>")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungswertzeit ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und keine `<number>` ist, wie erwartet) und die `background-color` wird am Ende auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen angeben, indem Sie eine {{cssxref("type()")}}-Funktion mit dem `|`-Symbol als Trennzeichen verwenden, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` jetzt gültig.

### Standardwerte spezifizieren

Sie können auch Standardwerte für Parameter angeben, die nach einem Doppelpunkt am Ende ihrer Definition angegeben werden. Zum Beispiel:

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

### Argumente mit Kommas enthaltenden Werten übergeben

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass ihr eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-Funktion {{cssxref("max()")}}, um zu bestimmen, welche der Längen in der Liste am größten ist, addiert sie zur einzelnen Länge und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die als drei separate Argumente fehlinterpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern einschließen, wenn Sie ihn an den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Custom-Eigenschaften innerhalb von Funktionen einschließen

Wie wir bereits gesehen haben, werden Funktionsparameter als Custom-Eigenschaften definiert, die dann im Funktionskörper verfügbar sind.

Sie können auch Custom-Eigenschaften im Funktionskörper angeben, die als lokal beschränkte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurzformwert zurückgibt, bei dem die Dauer- und Easing-Werte immer gleich sind und nur der Animationsname und -anzahl variiert werden.

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

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion innerhalb einer anderen aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion lokale Variablen und Funktionsparameter von Funktionen höher im Aufrufstapel zugreifen. Hier sind der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft im Scope der inneren Funktion verfügbar:

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

Darüber hinaus sind benutzerdefinierte Eigenschaften, die am selben Element definiert sind, an dem die benutzerdefinierte Funktion aufgerufen wird, für diese verfügbar:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die am selben Element definiert sind, und lokale benutzerdefinierte Eigenschaften, die im Funktionskörper definiert sind, überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft aus der benutzerdefinierten Eigenschaft der `div`-Regel, die `--b`-Eigenschaft aus dem Funktionsparameter und die lokal definierte benutzerdefinierte Eigenschaft `--c`.

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

### Komplexe Logik einschließen

Sie können komplexere Logik in Funktionen mit Konstrukten wie {{cssxref("@media")}}-At-Regeln und {{cssxref("if()")}}-Funktionen einschließen. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Sie gibt letzteres standardmäßig zurück, aber ersteres, wenn die Breite des Ansichtsfensters weniger als `700px` beträgt, erkannt durch eine Medienabfrage.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren einfügen, um unterschiedliche Ergebnisse für unterschiedliche Logikergebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich genauso wie der Rest von CSS in Bezug auf die Konfliktlösung — das letzte in der Quellreihenfolge gewinnt. Daher ist im obigen Beispiel das `result` `var(--wide)`, es sei denn, der Medientest gibt true zurück, in welchem Fall es durch `var(--narrow)` überschrieben wird.
>
> Es gibt keine frühen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der obigen Funktion, wenn die Medienabfrage zuerst geschrieben wurde, vor der einzelnen `result`-Zeile, wäre das `result` immer `var(--wide)`, weil es `var(--narrow)` in Fällen überschreiben würde, in denen der Medientest true zurückgibt.

Wir könnten die CSS-Custom-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele sehen Sie sich unseren [Leitfaden zur Verwendung von CSS-Custom-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) an.

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine grundlegende Funktion, die den ihr übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das einige Textinhalte enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die CSS-Custom-Funktion. Die Funktion wird `--double` genannt und akzeptiert einen einzelnen Parameter eines beliebigen Typs, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result`-Deskriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als nächstes definieren wir eine benutzerdefinierte Eigenschaft `--base-spacing` mit dem Wert `10px`. Wir weisen diesen Wert dem {{cssxref("border-radius")}}-Wert zu, verdoppeln ihn aber für den {{cssxref("padding")}}-Wert mithilfe der benutzerdefinierten Funktion `--double()`.

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

- [CSS-Custom-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type) Funktion
- [Verwendung von CSS-Custom-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [Modul für CSS-Custom-Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins)
