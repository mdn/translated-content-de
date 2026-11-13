---
title: "`@function` CSS at-rule"
short-title: "@function"
slug: Web/CSS/Reference/At-rules/@function
l10n:
  sourceCommit: 25abd448c8a088e9f333360dea0adbe8143e6b86
---

Die **`@function`**-[CSS](/de/docs/Web/CSS)-[At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) ermöglicht es, [benutzerdefinierte CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) zu definieren. Nach ihrer Definition kann eine benutzerdefinierte Funktion mithilfe der Syntax {{cssxref("&lt;dashed-function>")}} (zum Beispiel `--my-function(30px, 3)`) innerhalb eines beliebigen Eigenschaftswerts aufgerufen werden.

## Syntax

```css
@function --function-name(<function-parameter>#?) [returns <css-type>]? {
  <declaration-rule-list>
}

<function-parameter> = --param-name <css-type>? [ : <default-value> ]?
```

Die Bestandteile der `@function`-Syntax sind:

- `--function-name`
  - : Der Name, der die Funktion identifiziert: ein {{cssxref("dashed-ident")}}, das mit `--` beginnt und auf das ein gültiger, benutzerdefinierter Bezeichner folgt. Die Groß- und Kleinschreibung wird beachtet.
- `<function-parameter>#?` {{optional_inline}}
  - : Keine oder mehrere Definitionen von Funktionsparametern. Mehrere Parameterdefinitionen werden durch Kommas getrennt. Jeder Parameter besteht aus:
    - `--param-name`
      - : Ein Name für eine [benutzerdefinierte CSS-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*), der den Parameter identifiziert: ein {{cssxref("dashed-ident")}}, das mit `--` beginnt und auf das ein gültiger, benutzerdefinierter Bezeichner folgt. Die Groß- und Kleinschreibung wird beachtet. Funktionsparameter können als benutzerdefinierte Eigenschaften betrachtet werden, deren Gültigkeitsbereich auf den Funktionskörper beschränkt ist.
    - `<css-type>` {{optional_inline}}
      - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, der beziehungsweise die die zulässigen Datentypen für den Parameter festlegt. Wird nichts angegeben, ist jeder Datentyp für den Parameter zulässig (entspricht der Angabe von `type(*)`).
    - `<default-value>` {{optional_inline}}
      - : Ein CSS-Wert, der den Standardwert für den Parameter festlegt, falls beim Funktionsaufruf kein Wert angegeben wird. Wenn ein `<css-type>` angegeben ist, muss der Standardwert diesem entsprechen. Der Standardwert wird durch einen Doppelpunkt (`:`) von den übrigen Bestandteilen der Parameterdefinition getrennt.
- `[returns <css-type>]?` {{optional_inline}}
  - : Ein CSS-Datentyp oder eine {{cssxref("type()")}}-Funktion, dem beziehungsweise der das Schlüsselwort `returns` vorangestellt ist und der beziehungsweise die die zulässigen Rückgabetypen festlegt. Wird nichts angegeben, ist jeder Datentyp als Rückgabetyp zulässig (entspricht der Angabe von `returns type(*)`). Beachten Sie jedoch, dass die Funktion ungültig ist, wenn der Rückgabetyp nicht mit dem vom `result`-Deskriptor erzeugten Typ übereinstimmt.
- `<declaration-rule-list>`
  - : Eine oder mehrere CSS-Deklarationen oder At-Regeln, die den Funktionskörper und damit seine Logik definieren. Die Deklarationen können Folgendes umfassen:
    - Benutzerdefinierte CSS-Eigenschaften, deren Gültigkeitsbereich auf den Funktionskörper beschränkt ist.
    - Den `result`-Deskriptor, entweder direkt innerhalb der `@function`-At-Regel oder innerhalb einer verschachtelten At-Regel.

### Deskriptoren

- `result`
  - : Ein gültiger Eigenschaftswert, der das von der benutzerdefinierten CSS-Funktion zurückgegebene Ergebnis festlegt. Der im Wert enthaltene Ausdruck wird ausgewertet und das Ergebnis zurückgegeben.

## Beschreibung

Mit benutzerdefinierten CSS-Funktionen können Sie wiederverwendbare Logik definieren, die abhängig von den übergebenen Parametern und der Logik im Funktionskörper unterschiedliche Werte zurückgibt.

Eine typische CSS-Funktion sieht so aus:

```css
@function --transparent(--color, --alpha) {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion heißt `--transparent` und nimmt zwei benutzerdefinierte Eigenschaften als Parameter entgegen: `--color` und `--alpha`. Diese können lokal innerhalb des Funktionskörpers verwendet werden. Der Funktionskörper besteht aus einer einzigen Zeile: einem `result`-Deskriptor, der den Rückgabewert der Funktion festlegt. Der Wert des `result`-Deskriptors verwendet die [relative CSS-Farbsyntax](/de/docs/Web/CSS/Guides/Colors/Using_relative_colors), um den übergebenen `--color`-Wert in eine {{cssxref("color_value/oklch")}}-Farbe umzuwandeln, deren Alphakanal den übergebenen `--alpha`-Wert erhält.

Sie können diese Funktion überall dort aufrufen, wo Sie eine halbtransparente Variante einer vorhandenen Farbe benötigen, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 0.8);
}
```

Die Funktion wird mit der Syntax {{cssxref("&lt;dashed-function>")}} aufgerufen: dem Funktionsnamen mit anschließenden Klammern. Die gewünschten Argumentwerte stehen innerhalb der Klammern.

> [!NOTE]
> Wenn mehrere CSS-Funktionen denselben Namen haben, hat die Funktion in der stärkeren {{cssxref("@layer")}} der Kaskade Vorrang. Befinden sich alle in derselben Ebene, hat die in der Quellreihenfolge zuletzt definierte Funktion Vorrang.

### Datentypen festlegen

Sie können Datentypen für Funktionsparameter und Rückgabewerte festlegen. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Die Funktion erzeugt nun nur dann einen gültigen Wert, wenn die übergebenen Argumente ein {{cssxref("&lt;color&gt;")}} beziehungsweise ein {{cssxref("&lt;number&gt;")}} sind und `result` ein {{cssxref("&lt;color&gt;")}} ist. Andernfalls, zum Beispiel:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color), 50%);
}
```

wird der Wert bei der Berechnung ungültig (weil das angegebene `--alpha`-Argument ein `<percentage>` und nicht wie erwartet ein `<number>` ist). `background-color` wird dann auf `transparent` gesetzt.

Mit einer {{cssxref("type()")}}-Funktion und dem Symbol `|` als Trennzeichen können Sie mehrere zulässige Datentypen angeben, zum Beispiel:

```css
@function --transparent(--color <color>, --alpha type(<number> | <percentage>))
  returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Mit dieser Anpassung ist der Funktionsaufruf `--transparent(var(--base-color), 50%)` nun gültig.

### Standardwerte festlegen

Sie können für Parameter auch Standardwerte angeben. Diese stehen nach einem Doppelpunkt am Ende der jeweiligen Definition. Zum Beispiel:

```css
@function --transparent(--color <color>, --alpha <number>: 0.8) returns <color> {
  result: oklch(from var(--color) l c h / var(--alpha));
}
```

Der Standardwert des Parameters `--alpha` ist nun `0.8`. Wenn Sie diesen Wert verwenden möchten, können Sie beim Aufruf der Funktion das zweite Argument weglassen:

```css
section {
  --base-color: #faa6ff;
  background-color: --transparent(var(--base-color));
}
```

> [!NOTE]
> Wenn ein ungültiger Wert als Funktionsargument übergeben wird und in der betreffenden Parameterdefinition ein Standardwert festgelegt ist, wird der ungültige Wert ignoriert und stattdessen der Standardwert verwendet.

### Werte mit Kommas als Argumente übergeben

Im nächsten Beispiel erwartet die Funktion `--max-plus-x()` als Argumente eine durch Kommas getrennte Liste von Längen und eine einzelne Länge. Sie verwendet die CSS-Funktion {{cssxref("max()")}}, um die größte Länge aus der Liste zu bestimmen, addiert die einzelne Länge dazu und gibt das Ergebnis zurück.

```css
@function --max-plus-x(--list <length>#, --x <length>) {
  result: calc(max(var(--list)) + var(--x));
}
```

Das erste Argument muss eine durch Kommas getrennte Liste sein, die fälschlicherweise als drei separate Argumente interpretiert werden könnte. Um dies zu vermeiden, können Sie den Wert beim Funktionsaufruf in geschweifte Klammern setzen:

```css
div {
  width: --max-plus-x({1px, 7px, 2px}, 3px); /* 10px */
}
```

### Benutzerdefinierte Eigenschaften innerhalb von Funktionen verwenden

Wie bereits gezeigt, werden Funktionsparameter als benutzerdefinierte Eigenschaften definiert, die anschließend im Funktionskörper verfügbar sind.

Sie können auch innerhalb des Funktionskörpers benutzerdefinierte Eigenschaften festlegen, die als lokale Konstanten dienen. Im folgenden Beispiel definieren wir eine Funktion namens `--anim-1s()`. Sie gibt einen {{cssxref("animation")}}-Kurzschreibwert zurück, bei dem Dauer und Easing immer gleich bleiben und nur Animationsname und Anzahl variieren.

```css
@function --anim-1s(--animation, --count) {
  --duration: 1s;
  --easing: linear;
  result: var(--animation) var(--duration) var(--count) var(--easing);
}
```

So können Sie Animationen mit einer einfacheren und aussagekräftigeren Syntax schreiben, sofern Dauer und Easing-Funktion immer gleich sein sollen:

```css
animation: --anim-1s(bounce, 2);
```

Eine benutzerdefinierte Funktion kann auch aus einer anderen benutzerdefinierten Funktion heraus aufgerufen werden. In diesem Fall kann sie auf lokale Variablen und Funktionsparameter von Funktionen zugreifen, die im Aufrufstapel weiter oben stehen. Hier sind der Parameter und die lokale benutzerdefinierte Eigenschaft der äußeren Funktion im Gültigkeitsbereich der inneren Funktion verfügbar:

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

Außerdem sind benutzerdefinierte Eigenschaften, die für dasselbe Element definiert sind, auf dem die benutzerdefinierte Funktion aufgerufen wird, für die Funktion verfügbar:

```css
@function --double-z() returns <number> {
  result: calc(var(--z) * 2);
}

div {
  --z: 3;
  z-index: --double-z(); /* 6 */
}
```

Wenn eine benutzerdefinierte Eigenschaft mit demselben Namen an mehreren Stellen definiert ist, haben Funktionsparameter Vorrang vor benutzerdefinierten Eigenschaften auf demselben Element. Lokale benutzerdefinierte Eigenschaften innerhalb des Funktionskörpers haben Vorrang vor beiden. Im folgenden Beispiel verwendet die Funktion `--add-a-b-c()` die Eigenschaft `--a` aus der benutzerdefinierten Eigenschaft der `div`-Regel, die Eigenschaft `--b` aus dem Funktionsparameter und die lokale benutzerdefinierte Eigenschaft `--c`.

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

### Komplexe Logik verwenden

Mit Konstrukten wie {{cssxref("@media")}}-At-Regeln und {{cssxref("if()")}}-Funktionen können Sie komplexere Logik in Funktionen verwenden. Die nächste Funktion nimmt beispielsweise zwei Argumente entgegen: eines für ein Layout auf schmalen Bildschirmen und eines für ein Layout auf breiten Bildschirmen. Standardmäßig gibt sie das zweite zurück. Ist der Viewport laut einer Media Query jedoch schmaler als `700px`, gibt sie das erste zurück.

```css
@function --narrow-wide(--narrow, --wide) {
  result: var(--wide);
  @media (width < 700px) {
    result: var(--narrow);
  }
}
```

Sie können mehrere `result`-Deskriptoren verwenden, um unterschiedliche Ergebnisse für verschiedene Bedingungen festzulegen.

> [!NOTE]
> Bei CSS-Funktionen werden Konflikte wie im übrigen CSS aufgelöst: Die letzte Angabe in der Quellreihenfolge hat Vorrang. In der obigen Funktion ist `result` daher `var(--wide)`, sofern die Media Query nicht zutrifft. Trifft sie zu, wird der Wert durch `var(--narrow)` überschrieben.
>
> Anders als JavaScript-Funktionen haben CSS-Funktionen keine vorzeitigen Rückgaben. Stünde die Media Query in der obigen Funktion vor der einzelnen `result`-Zeile, wäre `result` immer `var(--wide)`: Bei zutreffender Media Query würde dieser Wert `var(--narrow)` überschreiben.

Wir könnten die benutzerdefinierte CSS-Funktion stattdessen mit einer `if()`-Funktion schreiben:

```css
@function --narrow-wide(--narrow, --wide) {
  result: if(media(width < 700px): var(--narrow) ; else: var(--wide));
}
```

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie in unserem Leitfaden [Benutzerdefinierte CSS-Funktionen verwenden](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions).

### Grundlegende Verwendung von `@function`

Dieses Beispiel zeigt eine einfache Funktion, die den übergebenen Wert verdoppelt.

#### HTML

Das Markup enthält ein {{htmlelement("p")}}-Element mit Text:

```html live-sample___basic-example
<p>Some content</p>
```

#### CSS

In unseren Styles definieren wir zunächst die benutzerdefinierte CSS-Funktion. Sie heißt `--double` und nimmt einen einzelnen Parameter eines beliebigen Typs entgegen, den wir `--value` genannt haben. Im Funktionskörper verwenden wir einen `result`-Deskriptor, der das übergebene Argument mithilfe der {{cssxref("calc()")}}-Funktion verdoppelt:

```css live-sample___basic-example
@function --double(--value) {
  result: calc(var(--value) * 2);
}
```

Anschließend definieren wir die benutzerdefinierte Eigenschaft `--base-spacing` mit dem Wert `10px`. Wir verwenden diese Eigenschaft als Wert für {{cssxref("border-radius")}}, verdoppeln sie aber mithilfe der benutzerdefinierten Funktion `--double()` für den Wert von {{cssxref("padding")}}.

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

- [Benutzerdefinierte CSS-Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*)
- Datentyp {{cssxref("&lt;dashed-function>")}}
- Funktion [`type()`](/de/docs/Web/CSS/Reference/Values/type)
- [Benutzerdefinierte CSS-Funktionen verwenden](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
- Modul [Benutzerdefinierte CSS-Funktionen und Mixins](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins)
