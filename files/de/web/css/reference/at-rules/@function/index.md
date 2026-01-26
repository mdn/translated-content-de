---
title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 6ad108adad746bd7ed79b5b32d8d3e05e5ec685a
---

{{SeeCompatTable}}

Die **`@function`** [CSS](/de/docs/Web/CSS) [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht das Definieren von [CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions). Nach der Definition kann eine Benutzerfunktion mit der {{cssxref("&lt;dashed-function>")}}-Syntax (zum Beispiel `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswerts aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die verschiedenen Teile der `@function`-Syntax sind wie folgt:

- `--function-name`
  - : Der identifizierende Name der Funktion, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und einem gültigen, benutzerdefinierten Identifier folgt. Er ist groß- und kleinschreibungssensitiv.
- `<function-parameter>#?` {{optional_inline}}
  - : Null oder mehr Funktionsparameterdefinitionen. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein [CSS-Benutzereigenschaft](/de/docs/Web/CSS/Reference/Properties/--*)-Name zur Identifizierung des Parameters, ein {{cssxref("dashed-ident")}}, der mit `--` beginnt und einem gültigen, benutzerdefinierten Identifier folgt. Er ist groß- und kleinschreibungssensitiv. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, die lokal auf den Funktionskörper beschränkt sind.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, die die akzeptierten Datentyp(en) für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert angibt, der dem Parameter zugewiesen wird, wenn er beim Funktionsaufruf nicht spezifiziert wird. Dieser Wert muss, falls angegeben, gemäß dem `<css-type>` gültig sein. Der Standardwert wird durch einen Doppelpunkt (`:`) von den anderen Teilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, vorangestellt mit dem Schlüsselwort `returns`, die die akzeptierten Rückgabetyp(en) für den Parameter definiert. Wenn dies nicht angegeben ist, ist jeder Datentyp für den Parameter gültig (entspricht der Angabe `returns type(*)`), wobei beachtet werden sollte, dass die Funktion ungültig ist, wenn der Rückgabetyp nicht mit dem durch den `result`-Deskriptor erzeugten Typ übereinstimmt.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Rules, die den Körper der Funktion definieren, der ihre Logik enthält. Eingeschlossene Deklarationen können umfassen:
    - CSS-Benutzereigenschaften, die lokal auf den Funktionskörper beschränkt sind.
    - Der `result`-Deskriptor, entweder direkt innerhalb der `@function`-At-Rule oder innerhalb einer verschachtelten At-Rule.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das Ergebnis der zurückgegebenen CSS-Benutzerfunktion definiert. Der im Wert enthaltene Ausdruck wird ausgewertet und das Ergebnis wird zurückgegeben.

## Beschreibung

CSS-Benutzerfunktionen ermöglichen das Definieren wiederverwendbarer Logikabschnitte, die abhängig von den als Eingabe akzeptierten Parametern und der im Funktionskörper definierten Logik unterschiedliche Werte zurückgeben.

Eine typische CSS-Funktion sieht so aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion hat den Namen `--transparent` und nimmt zwei Benutzereigenschaften als Parameter, `--color` und `--alpha`, die lokal im Funktionskörper verwendet werden können. Der Körper enthält eine einzelne Zeile, die ein `result`-Deskriptor ist, der den von der Funktion zurückgegebenen Wert definiert. Der Wert des `result`-Deskriptors verwendet die [relative CSS-Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den Eingabewert `--color` in eine {{cssxref("color_value/oklch")}}-Farbe mit dem in der Eingabe `--alpha` angegebenen Alphakanalwert zu konvertieren.

Sie können diese Funktion dann überall dort aufrufen, wo Sie eine halbtransparente Version einer vorhandenen Farbe erzeugen möchten, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird durch Verwendung der {{cssxref("&lt;dashed-function>")}}-Syntax aufgerufen, bei der es sich um den Funktionsnamen mit Klammern am Ende handelt. Die gewünschten Argumentwerte werden innerhalb der Klammern angegeben.

> [!NOTE]
> Wenn mehreren CSS-Funktionen derselbe Name gegeben wird, gewinnt die Funktion in der stärkeren Kaskade {{cssxref("@layer")}}. Wenn alle in derselben Ebene sind, gewinnt die Funktion, die zuletzt in der Quellenreihenfolge definiert wurde.

### Datentypen angeben

Es ist möglich, Datentypen für die Funktionsparameter und Rückgabetypen anzugeben. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Nun produziert die Funktion nur dann einen gültigen Wert, wenn die Eingabeargumente jeweils eine {{cssxref("&lt;color&gt;")}} und eine {{cssxref("&lt;number&gt;")}} sind und das `result` eine {{cssxref("&lt;color&gt;")}} ist. Wenn nicht, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

dann wird der Wert zur Berechnungszeit ungültig (da das angegebene `--alpha`-Argument ein `<percentage>` ist und keine `<number>`, wie erwartet) und die `background-color` wird schließlich auf `transparent` gesetzt.

Sie können mehrere akzeptierte Datentypen mit einer {{cssxref("type()")}}-Funktion mit dem Symbol `|` als Trennzeichen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Aufruf der Funktion `--transparent(var(--base-color), 50%)` jetzt gültig.

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
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und ein Standardwert in dieser Parameterdefinition angegeben ist, wird der ungültige Wert ignoriert und der Standardwert verwendet.

### Argumente mit Kommata als Argumente übergeben

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()`, dass eine kommagetrennte Liste von Längen und eine einzelne Länge als Argumente übergeben werden. Sie verwendet die CSS-{{cssxref("max()")}}-Funktion, um zu bestimmen, welche der Listenlängen die größte ist, addiert sie zur einzelnen Länge und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine kommagetrennte Liste sein, die als drei separate Argumente fehlinterpretiert werden könnte. Um dieses Problem zu umgehen, können Sie den Wert in geschweifte Klammern einbetten, wenn Sie ihn in den Funktionsaufruf übergeben:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen einbinden

Wie wir bereits gesehen haben, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die dann innerhalb des Funktionskörpers verfügbar sind.

Sie können auch benutzerdefinierte Eigenschaften im Funktionskörper angeben, die als lokal begrenzte Konstanten fungieren. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`, die einen {{cssxref("animation")}}-Kurz notation-Wert zurückgibt, bei dem die Dauer und die Easing-Werte immer gleich sind und nur der Animationsname und die Anzahl variiert werden.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

Diese Art der Verwendung ermöglicht es Ihnen, eine einfachere, ausdrucksstärkere Syntax für Animationen zu schreiben, vorausgesetzt, dass Sie wissen, dass Sie die Dauer und die Easing-Funktion immer gleich haben möchten:

```css
animation: --anim-1s(bounce, 2);
```

Es ist auch erwähnenswert, dass Sie eine benutzerdefinierte Funktion von einer anderen Funktion aus aufrufen können. In solchen Fällen kann eine benutzerdefinierte Funktion auf lokale Variablen und Funktionsparameter von Funktionen im höheren Aufrufstack zugreifen. Hier stehen der Parameter und die lokale benutzerdefinierte Eigenschaft der äußeren Funktion im Bereich der inneren Funktion zur Verfügung:

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

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, überschreiben Funktionsparameter benutzerdefinierte Eigenschaften, die auf demselben Element definiert sind, und lokal definierte benutzerdefinierte Eigenschaften im Funktionskörper überschreiben beide. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die `--a`-Eigenschaft von der benutzerdefinierten Eigenschaft der `div`-Regel, die `--b`-Eigenschaft vom Funktionsparameter und die `--c`-lokale benutzerdefinierte Eigenschaft.

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

### Komplexe Logik einbinden

Sie können komplexere Logik in Funktionen einbinden, indem Sie Konstrukte wie {{cssxref("@media")}}-At-Rules und {{cssxref("if()")}}-Funktionen verwenden. Zum Beispiel nimmt die nächste Funktion zwei Argumente, eines für ein Layout mit schmalem Bildschirm und eines für ein Layout mit breitem Bildschirm. Sie gibt letztere standardmäßig zurück, kehrt jedoch zur ersteren zurück, wenn die Ansichtbreite weniger als `700px` breit ist, was mit einer Media-Abfrage erkannt wird.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren einfügen, um unterschiedliche Ergebnisse für verschiedene logische Ergebnisse auszudrücken.

> [!NOTE]
> CSS-Funktionen verhalten sich bezüglich der Konfliktauflösung genauso wie der Rest von CSS — zuletzt in der Quellenreihenfolge gewinnt. Daher ist in der obigen Funktion das `result` `var(--wide)`, es sei denn, der Medienabfragetest gibt `true` zurück, in welchem Fall es durch `var(--narrow)` überschrieben wird.
>
> Es gibt keine frühzeitigen Rückgaben in CSS-Funktionen wie in JavaScript-Funktionen. In der obigen Funktion wäre, wenn die Media-Abfrage zuerst geschrieben worden wäre, vor der einzigen `result`-Zeile, das `result` immer `var(--wide)`, weil es `var(--narrow)` überschreiben würde, wenn der Media-Abfragetest `true` zurückgibt.

Wir könnten die CSS-Benutzerfunktion umschreiben, um stattdessen eine `if()`-Funktion zu verwenden:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Für weitere Beispiele siehe unseren [Leitfaden zur Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

### Grundlegende `@function`-Verwendung

Dieses Beispiel zeigt eine grundlegende Funktion, die den Wert verdoppelt, der an sie übergeben wird.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit einigen Textinhalten:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Stilen definieren wir zuerst die CSS-Benutzerfunktion. Die Funktion heißt `--double` und akzeptiert einen einzelnen Parameter von beliebigem Typ, den wir `--value` genannt haben. Im Funktionskörper fügen wir einen `result`-Deskriptor ein, der die {{cssxref("calc()")}}-Funktion verwendet, um das übergebene Argument zu verdoppeln:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Als Nächstes definieren wir eine benutzerdefinierte Eigenschaft `--base-spacing` mit einem Wert von `10px`. Wir weisen diesen Wert dem {{cssxref("border-radius")}} zu, verdoppeln ihn jedoch für den {{cssxref("padding")}}-Wert mit der benutzerdefinierten Funktion `--double()`.

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

- [CSS-Benutzereigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- {{cssxref("&lt;dashed-function>")}} Datentyp
- [`type()`](/de/docs/Web/CSS/Reference/Values/type) Funktion
- [Leitfaden zur Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- [CSS-Benutzerfunktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins) Modul
