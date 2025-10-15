---
title: "@function"
slug: Web/CSS/@function
l10n:
  sourceCommit: 792888cd76b95a986a38d6a48bece464731dda51
---

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht die Definition von [benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions). Sobald eine benutzerdefinierte Funktion definiert ist, kann sie mit der {{cssxref("&lt;dashed-function>")}}-Syntax (zum Beispiel, `--my-function(30px, 3)`) innerhalb jedes Eigenschaftswertes aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es wird zwischen Groß- und Kleinschreibung unterschieden.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein [benutzerdefinierter CSS-Eigenschaftsname](/de/docs/Web/CSS/--*) zum Identifizieren des Parameters, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es wird zwischen Groß- und Kleinschreibung unterschieden. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal im Funktionskörper verfügbar sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die die akzeptierten Datentype(n) für den Parameter definiert. Wenn dies nicht spezifiziert ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen werden soll, wenn er beim Aufruf der Funktion nicht angegeben wird. Dieser Wert muss gemäß dem angegebenen `<css-type>` gültig sein. Der Standardwert wird durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, vorangestellt mit dem Schlüsselwort `returns`, welches die akzeptierten Rückgabetype(n) für den Parameter definiert. Wenn dies nicht spezifiziert ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `returns type(*)`), obwohl zu beachten ist, dass die Funktion ungültig sein wird, wenn der Rückgabewert nicht dem von der `result`-Deskriptor produzierten Typ entspricht.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Funktionskörper definieren und die Logik enthalten. Eingeschlossene Deklarationen können Folgendes umfassen:
    - Benutzerdefinierte CSS-Eigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result`-Deskriptor, entweder direkt innerhalb der `@function`-Regel, oder innerhalb einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der benutzerdefinierten CSS-Funktion zurückgegeben wird. Der Ausdruck im Wert wird ausgewertet und das Ergebnis zurückgegeben.

## Beschreibung

Benutzerdefinierte CSS-Funktionen ermöglichen es Ihnen, wiederverwendbare Logikabschnitte zu definieren, die unterschiedliche Werte zurückgeben, abhängig von den Eingabeparametern und der im Funktionskörper definierten Logik.

Eine typische CSS-Funktion sieht so aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, die lokal im Funktionskörper verwendet werden können. Der Körper enthält eine einzige Zeile, die ein `result`-Deskriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result`-Deskriptors verwendet die [CSS-Relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch)-Farbe mit dem in der Eingabe `--alpha` angegebenen Alphakanalwert umzuwandeln.

Sie können diese Funktion dann verwenden, wann immer Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird durch Verwendung der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, was der Funktionsname mit Klammern am Ende ist. Die gewünschten Argumentwerte werden in den Klammern angegeben.

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn sie alle in derselben Ebene sind, gewinnt die zuletzt in der Quellreihenfolge definierte Funktion.

### Datentypen angeben

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen anzugeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Nun gibt die Funktion nur einen gültigen Wert zurück, wenn die Eingabeargumente eine {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind, und der `result` ist eine {{cssxref("&lt;color>")}}. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

dann wird der Wert zur Laufzeit des berechneten Wertes ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und keine `<number>` wie erwartet ist) und die `background-color` wird schließlich auf `transparent` gesetzt.

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

Der Standardwert des `--alpha`-Parameters ist jetzt `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Aufrufen der Funktion weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und in der Parameterdefinition ein Standardwert angegeben ist, wird der ungültige Wert ignoriert und der Standardwert verwendet.

### Übergeben von kommagetrennten Werten als Argumente

Im folgenden Beispiel erwartet die Funktion `--max-plus-x()`, dass eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welcher der Längen der größte ist, addiert ihn zur einzelnen Länge und gibt das Ergebnis zurück.

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

### Einschließen von benutzerdefinierten Eigenschaften in Funktionen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann innerhalb des Funktionskörpers verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers angeben, die als lokal begrenzte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurzschreibwert zurückgibt, bei dem die Dauer und die Abklingfunktion immer gleich sind und nur der Animationsname und die Anzahl variieren.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Verwendung ermöglicht es Ihnen, einfacher und ausdrucksstärker Syntax für Animationen zu schreiben, vorausgesetzt, Sie wissen, dass Sie immer die gleiche Dauer und Abklingfunktion wünschen:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion innerhalb einer anderen aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von Funktionen zugreifen, die weiter oben im Aufrufstapel stehen. Hier sind der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft innerhalb des Bereichs der inneren Funktion verfügbar:

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

Außerdem sind benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, für sie verfügbar:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften im Funktionskörper überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft von der benutzerdefinierten Eigenschaft in der `div`-Regel, die `--b`-Eigenschaft aus dem Funktionsparameter und die lokale benutzerdefinierte Eigenschaft `--c`.

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

Sie können komplexere Logik in Funktionen mit Konstrukten wie {{cssxref("@media")}}-Regeln und {{cssxref("if()")}}-Funktionen einfügen. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Sie gibt standardmäßig Letzteres zurück, gibt jedoch Ersteres zurück, wenn die Viewport-Breite weniger als `700px` breit ist, wie durch eine Medienabfrage erkannt wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren hinzufügen, um unterschiedliche Ergebnisse für verschiedene logische Ergebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich in Bezug auf die Konliktlösung genauso wie der Rest von CSS – letzter im Quelltext gewinnt. Deshalb ist das Ergebnis in der obigen Funktion `var(--wide)`, es sei denn, der Test der Medienabfrage gibt wahr zurück, in diesem Fall wird es von `var(--narrow)` überschrieben.
>
> Es gibt in CSS-Funktionen keine frühzeitigen Rückgaben wie bei JavaScript-Funktionen. In der obigen Funktion, wenn die Medienabfrage zuerst, vor der einzigen `result`-Zeile, geschrieben wäre, wäre das `result` immer `var(--wide)`, weil es `var(--narrow)` in Fällen, in denen der Medienabfragetest wahr zurückgibt, überschreiben würde.

Wir könnten die benutzerdefinierte CSS-Funktion umschreiben, um stattdessen eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele, siehe unseren [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)-Leitfaden.

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine grundlegende Funktion, die den Wert verdoppelt, der an sie übergeben wird.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element, das etwas Textinhalt enthält:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die benutzerdefinierte CSS-Funktion. Die Funktion wird `--double` genannt und akzeptiert einen einzelnen Parameter eines beliebigen Typs, den wir `--value` genannt haben. Innerhalb des Funktionskörpers fügen wir einen `result`-Deskriptor hinzu, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als Nächstes definieren wir eine `--base-spacing`-benutzerdefinierte Eigenschaft mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}}-Wert zu, verdoppeln ihn jedoch für den {{cssxref("padding")}}-Wert mit der `--double()`-benutzerdefinierten Funktion.

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

- [Benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/--*)
- {{cssxref("&lt;dashed-function>")}}-Datentyp
- [`type()`](/de/docs/Web/CSS/type)-Funktion
- [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS-Benutzerfunktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins)-Modul
