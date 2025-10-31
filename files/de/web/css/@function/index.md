---
title: "@function"
slug: Web/CSS/@function
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) ermöglicht es, [CSS-Benutzerdefinierte Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) zu definieren. Eine definierte benutzerdefinierte Funktion kann innerhalb eines jeglichen Eigenschaftswerts mit der {{cssxref("&lt;dashed-function>")}} Syntax aufgerufen werden (zum Beispiel, `--my-function(30px, 3)`).

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function` Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), der mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es wird Groß-/Kleinschreibung unterschieden.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein [CSS-Benutzerdefiniertes Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) Name zur Identifizierung des Parameters, ein [`<dashed-ident>`](/de/docs/Web/CSS/dashed-ident), das mit `--` beginnt und von einem gültigen, benutzerdefinierten Bezeichner gefolgt wird. Es wird Groß-/Kleinschreibung unterschieden. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper begrenzt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}} Funktion, die die akzeptierten Datentypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Aufruf der Funktion nicht angegeben ist. Dieser Wert muss entsprechend dem `<css-type>` gültig sein, falls angegeben. Der Standardwert ist von den anderen Teilen der Parameterdefinition mit einem Doppelpunkt (`:`) getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}} Funktion, vorangestellt mit dem Schlüsselwort `returns`, die die akzeptierten Rückgabetypen für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter weiterhin gültig (wie bei der Angabe von `returns type(*)`), obwohl dabei zu beachten ist, dass die Funktion ungültig wird, wenn der Rückgabetyp nicht mit dem Typ übereinstimmt, der vom `result` Descriptor erzeugt wird.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Körper der Funktion definieren und ihre Logik enthalten. Eingeschlossene Deklarationen können umfassen:
    - CSS-Benutzerdefinierte Eigenschaften, die lokal auf den Funktionskörper begrenzt sind.
    - Der `result` Descriptor, entweder direkt innerhalb der `@function` At-Regel oder in einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis definiert, das von der CSS-Benutzerdefinierten Funktion zurückgegeben wird. Der Ausdruck, der im Wert enthalten ist, wird ausgewertet und das Ergebnis zurückgegeben.

## Beschreibung

CSS-Benutzerdefinierte Funktionen erlauben es Ihnen, wiederverwendbare Logikabschnitte zu definieren, die unterschiedliche Werte zurückgeben, je nachdem, welche Parameter sie als Eingaben akzeptieren und welche Logik innerhalb des Funktionskörpers definiert ist.

Eine typische CSS-Funktion sieht folgendermaßen aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter, `--color` und `--alpha`, die lokal innerhalb des Funktionskörpers verwendet werden können. Der Körper enthält eine einzige Zeile, die ein `result` Descriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result` Descriptors verwendet die [CSS relative Farbsyntax](/de/docs/Web/CSS/CSS_colors/Relative_colors), um den Eingabewert `--color` in eine [`oklch()`](/de/docs/Web/CSS/color_value/oklch) Farbe mit dem in der Eingabe `--alpha` angegebenen Alphawert umzuwandeln.

Sie können dann diese Funktion überall aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird mit der {{cssxref("&lt;dashed-function>")}} Syntax aufgerufen, was dem Funktionsnamen mit Klammern am Ende entspricht. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn sich alle im selben Layer befinden, gewinnt die zuletzt in der Quellreihenfolge definierte Funktion.

### Datentypen spezifizieren

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabewerte zu spezifizieren. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Nun erzeugt die Funktion nur einen gültigen Wert, wenn die Eingabeargumente ein {{cssxref("&lt;color>")}} und eine {{cssxref("&lt;number>")}} sind und das `result` ist ein {{cssxref("&lt;color>")}}. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert zur Berechnungszeit ungültig (da das angegebene `--alpha` Argument ein `<percentage>` und nicht die erwartete `<number>` ist) und die `background-color` wird letztendlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mit einer {{cssxref("type()")}} Funktion angeben, wobei das `|` Symbol als Trennzeichen dient, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` nun gültig.

### Standardwerte spezifizieren

Sie können auch Standardwerte für Parameter angeben, nach einem Doppelpunkt am Ende ihrer Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des `--alpha` Parameters ist nun `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie das zweite Argument beim Funktionsaufruf weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wird ein ungültiger Wert als Funktionsargument übergeben und ein Standardwert in dieser Parameterdefinition angegeben, wird der ungültige Wert ignoriert und der Standardwert statt dessen verwendet.

### Kommas enthaltende Werte als Argumente übergeben

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass ihr eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS {{cssxref("max()")}} Funktion, um zu bestimmen, welche der Längen in der Liste die größte ist, fügt diese der einzelnen Länge hinzu und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die als drei separate Argumente falsch interpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert beim Übergeben in den Funktionsaufruf in geschweifte Klammern setzen:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen einbeziehen

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann im Funktionskörper zur Verfügung stehen.

Sie können auch benutzerdefinierte Eigenschaften im Funktionskörper spezifizieren, die als lokal begrenzte Konstanten wirken. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}} Kurzschreibwert zurückgibt, bei dem die Dauer- und Easingwerte immer gleich sind, und nur der Animationsname und -anzahl variiert werden.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Nutzung ermöglicht es Ihnen, eine einfachere, ausdrucksstärkere Syntax für Animationen zu schreiben, vorausgesetzt, Sie wissen, dass Sie die Dauer- und Easing-Funktion immer gleich haben möchten:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion von innerhalb einer anderen aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von Funktionen in höheren Ebenen des Aufrufstapels zugreifen. Hier stehen der Parameter und die lokale benutzerdefinierte Eigenschaft der äußeren Funktion innerhalb des Geltungsbereichs der inneren Funktion zur Verfügung:

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

Außerdem stehen benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, dieser zur Verfügung:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften im Funktionskörper überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a` Eigenschaft aus der benutzerdefinierten Eigenschaft der `div` Regel, die `--b` Eigenschaft aus dem Funktionsparameter und die `--c` lokal definierte benutzerdefinierte Eigenschaft.

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

Sie können komplexere Logik in Funktionen mithilfe von Konstrukten wie {{cssxref("@media")}} At-Regeln und {{cssxref("if()")}} Funktionen einbeziehen. Zum Beispiel nimmt die nächste Funktion zwei Argumente entgegen, eines für ein Layout mit schmaler Bildschirmbreite und eines für ein Layout mit breiter Bildschirmbreite. Standardmäßig wird letztere zurückgegeben, es sei denn, die Viewport-Breite ist weniger als `700px` breit, wie durch einen Medienabfrage-Selektor festgestellt.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result` Deskriptoren hinzufügen, um unterschiedliche Ergebnisse für verschiedene Logikausgänge auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich in Bezug auf die Konfliktlösung genauso wie der Rest von CSS - letzter in der Quellreihenfolge gewinnt. Daher ist im obigen Beispiel das `result` `var(--wide)`, es sei denn, der Medienabfrage-Test ergibt true, in diesem Fall wird es von `var(--narrow)` überschrieben.
>
> Es gibt keine frühzeitigen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der oben genannten Funktion, wenn die Medienabfrage zuerst geschrieben würde, vor der einzelnen `result` Zeile, wäre das `result` immer `var(--wide)`, da es `var(--narrow)` überschreiben würde, wenn der Medienabfragetest true zurückgibt.

Wir könnten die CSS-Benutzerdefinierte Funktion so umschreiben, dass eine `if()` Funktion verwendet wird:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für mehr Beispiele, siehe unseren [Leitfaden zur Verwendung von CSS-Benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions).

### Grundlegende `@function`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}} Element mit einigen Textinhalten:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zuerst die CSS-Benutzerdefinierte Funktion. Die Funktion wird `--double` genannt und akzeptiert einen einzigen Parameter beliebigen Typs, den wir `--value` genannt haben. Innerhalb des Funktionskörpers fügen wir einen `result` Deskriptor ein, der die {{cssxref("calc()")}} Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als nächstes definieren wir eine benutzerdefinierte Eigenschaft `--base-spacing` mit einem Wert von `10px`. Wir weisen diese Eigenschaft dem {{cssxref("border-radius")}} Wert zu, verdoppeln sie aber dann für den {{cssxref("padding")}} Wert mithilfe der `--double()` benutzerdefinierten Funktion.

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
- Datentyp {{cssxref("&lt;dashed-function>")}}
- [`type()`](/de/docs/Web/CSS/type) Funktion
- [Verwendung von CSS-Benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
- [CSS-Benutzerdefinierte Funktionen und Mixins](/de/docs/Web/CSS/CSS_custom_functions_and_mixins) Modul
