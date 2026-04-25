---
title: "`@function` CSS at-rule"
short-title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: e328268bb418551ab451881845881b5837c9da83
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht das Definieren von [benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Sobald eine benutzerdefinierte Funktion definiert ist, kann sie mit der {{cssxref("&lt;dashed-function>")}}-Syntax (zum Beispiel `--my-function(30px, 3)`) in jedem Eigenschaftswert aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der Name der Funktion, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Parameterdefinitionen für die Funktion. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein Name einer [benutzerdefinierten CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*), um den Parameter zu identifizieren, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Er ist case-sensitiv. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die den akzeptierten Datentyp(en) für den Parameter definiert. Falls dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (das gleiche wie `type(*)` anzugeben).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er bei Funktionsaufruf nicht angegeben ist. Dieser Wert muss gemäß dem `<css-type>` gültig sein, falls angegeben. Der Standardwert wird durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die durch das Schlüsselwort `returns` vorangestellt ist und den akzeptierten Rückgabedatentyp(en) für den Parameter definiert. Falls dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (das gleiche wie `returns type(*)` anzugeben), obwohl zu beachten ist, dass die Funktion ungültig ist, wenn der Rückgabedatentyp nicht mit dem vom `result`-Deskriptor erzeugten Typ übereinstimmt.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Funktionskörper definieren, welcher die Logik enthält. Eingeschlossene Deklarationen können einschließen:
    - Benutzerdefinierte CSS-Eigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Den `result`-Deskriptor, entweder direkt innerhalb der `@function`-Regel oder innerhalb einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der benutzerdefinierten CSS-Funktion zurückgegeben wird. Der Ausdruck im Wert wird ausgewertet, und das Ergebnis wird zurückgegeben.

## Beschreibung

Benutzerdefinierte CSS-Funktionen ermöglichen es, wiederverwendbare Logikabschnitte zu definieren, die je nach den beim Eingang angenommenen Parametern und der innerhalb des Funktionskörpers definierten Logik unterschiedliche Werte zurückgeben.

Eine typische CSS-Funktion sieht folgendermaßen aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, die lokal im Funktionskörper verwendet werden können. Der Körper enthält eine einzelne Zeile, die ein `result`-Deskriptor ist und den Wert definiert, der von der Funktion zurückgegeben wird. Der Wert des `result`-Deskriptors verwendet die [CSS-relative Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den Eingangs-`--color`-Wert in eine {{cssxref("color_value/oklch")}}-Farbe mit dem im Eingangs-`--alpha`-Wert angegebenen Alphakanalwert zu konvertieren.

Sie können diese Funktion dann überall aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, beispielsweise:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird durch die Verwendung der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, die der Funktionsname mit Klammern am Ende ist. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn sie alle in derselben Schicht sind, gewinnt die zuletzt in der Quellreihenfolge definierte Funktion.

### Datentypen angeben

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen anzugeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Jetzt erzeugt die Funktion nur dann einen gültigen Wert, wenn die Eingangsargumente eine {{cssxref("&lt;color&gt;")}} und eine {{cssxref("&lt;number&gt;")}} sind und das `result` eine {{cssxref("&lt;color&gt;")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (da das angegebene `--alpha`-Argument ein `<percentage>` und nicht ein `<number>` wie erwartet ist) und die `background-color` wird letztlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mit einer {{cssxref("type()")}}-Funktion und dem `|`-Symbol als Trenner angeben, zum Beispiel:

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
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert wird stattdessen verwendet.

### Werte, die Kommata enthalten, als Argumente übergeben

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()` eine kommaseparierte Liste von Längen und ein einziges Längenmaß als Argumente. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welches der Liste von Längen das größte ist, addiert es zu dem einzelnen Längenmaß und gibt dann das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommaseparierte Liste sein, die als drei separate Argumente missinterpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern setzen, wenn Sie ihn in den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen einschließen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann im Funktionskörper verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften im Funktionskörper angeben, die als lokal begrenzte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurzhandwert zurückgibt, bei dem die Dauer und die Ease-Funktion immer gleich sind und nur der Animationsname und die Wiederholungsanzahl variieren.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Verwendung ermöglicht es Ihnen, leichter verständliche Syntax für Animationen zu schreiben, vorausgesetzt, Sie möchten immer, dass die Dauer und die Ease-Funktion gleich sind:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion innerhalb einer anderen aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von Funktionen zugreifen, die weiter oben im Aufrufstapel liegen. Hier sind der Parameter der äußeren Funktion und die lokale benutzerdefinierte Eigenschaft im Bereich der inneren Funktion verfügbar:

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

Zusätzlich werden benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, ihr zur Verfügung stehen:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers überschreiben beides. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft aus der benutzerdefinierten Eigenschaft der `div`-Regel, die `--b`-Eigenschaft aus dem Funktionsparameter und die `--c`-lokale benutzerdefinierte Eigenschaft.

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

Sie können komplexere Logik in Funktionen mittels Konstrukten wie {{cssxref("@media")}}-At-Regeln und {{cssxref("if()")}}-Funktionen einbinden. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Standardmäßig wird das letztere zurückgegeben, aber wenn die Ansichtsfensterbreite weniger als `700px` beträgt, wird das erstere aufgrund einer Medienabfrage zurückgegeben.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren verwenden, um unterschiedliche Ergebnisse für verschiedene Logikerrgebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich in Hinsicht auf Konfliktlösung genauso wie der Rest von CSS — das letzte in der Quellreihenfolge gewinnt. Daher ist im obigen Beispiel das `result` `var(--wide)`, es sei denn, der Test der Medienabfrage ergibt `true`, in welchem Fall es von `var(--narrow)` überschrieben wird.
>
> Es gibt keine frühen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der obigen Funktion, wenn die Medienabfrage zuerst, vor der einzelnen `result`-Zeile geschrieben wurde, wäre das `result` immer `var(--wide)`, da es `var(--narrow)` in Fällen überschreiben würde, in denen der Test der Medienabfrage `true` ergibt.

Wir könnten die benutzerdefinierte CSS-Funktion umschreiben, um eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele siehe unseren [Leitfaden zur Verwendung benutzerdefinierter CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

### Grundlagen der `@function`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit etwas Textinhalt:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die benutzerdefinierte CSS-Funktion. Die Funktion heißt `--double` und akzeptiert einen einzigen Parameter beliebigen Typs, den wir `--value` genannt haben. Im Funktionskörper haben wir einen `result`-Deskriptor, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als nächstes definieren wir eine `--base-spacing`-benutzerdefinierte Eigenschaft mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}}-Wert zu, aber verdoppeln sie für den {{cssxref("padding")}}-Wert mithilfe der `--double()`-benutzerdefinierten Funktion.

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
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type) Funktion
- [Leitfaden zur Verwendung benutzerdefinierter CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS-Benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins) Modul
