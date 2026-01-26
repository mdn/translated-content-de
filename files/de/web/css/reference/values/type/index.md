---
title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben, und wird von den folgenden CSS-Funktionen verwendet:

- Die {{cssxref("attr()")}}-Funktion, um den Datentyp anzugeben, in den ein Attributwert geparst werden soll.
- Die {{cssxref("@function")}}-At-Regel, um die zulässigen Datentypen für [CSS-Benutzerdefinierte Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) Parameter und Ergebnisse festzulegen.

> [!NOTE]
> Der Wert des {{cssxref("@property")}} At-Regel {{cssxref("@property/syntax", "syntax")}} Deskriptors verwendet denselben `<syntax>`, um die zulässigen Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren, jedoch wird dies immer in Form eines Strings angegeben.

## Syntax

```css
/* Single value */
type(<color>)
type(auto)

/* "|" combinator for multiple types */
type(<length> | <percentage>)

/* Space-separated list of values */
type(<color>+)

/* Comma-separated list of values */
type(<length>#)

/* Multiple keywords */
type(red | blue | green)

/* Combination of data type and keyword */
type(<percentage> | auto)

/* Universal syntax value */
type(*)
```

### Parameter

Die Syntax der `type()`-Funktion ist wie folgt:

```plain
type(<syntax>)
```

Der `<syntax>`-Parameter ist ein Ausdruck, der den Datentyp definiert. Dies kann folgende Formen annehmen:

- `<ident>`
  - : Ein CSS-Schlüsselwortwert, ohne Winkelklammern geschrieben.

- `<syntax-type>`
  - : Ein Typ-Name, in Winkelklammern geschrieben, der einen CSS-Datentyp repräsentiert. Die folgenden Datentypen werden unterstützt:
    - `<angle>`
      - : Akzeptiert jeden gültigen {{cssxref("angle")}}-Wert.
    - `<color>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}-Wert.
    - `<custom-ident>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}}-Wert.
    - `<image>`
      - : Akzeptiert jeden gültigen {{cssxref("image")}}-Wert.
    - `<integer>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}}-Wert.
    - `<length>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}-Wert.
    - `<length-percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Wert und jeden gültigen {{cssxref("calc()")}}-Ausdruck, der `<length>`- und `<percentage>`-Werte kombiniert.
    - `<number>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}}-Wert.
    - `<percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}}-Wert.
    - `<resolution>`
      - : Akzeptiert jeden gültigen {{cssxref("resolution")}}-Wert.
    - `<string>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}}-Wert.
    - `<time>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}}-Wert.
    - `<transform-function>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;transform-function&gt;")}}-Wert.
    - `<transform-list>`
      - : Akzeptiert eine Liste von gültigen {{cssxref("&lt;transform-function&gt;")}}-Werten. Es ist äquivalent zu `"<transform-function>+"` und darf nicht von einem `+` oder `#`-Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}}-Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>`-Werte mit den folgenden Tokens kombinieren:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Kommas getrennte Liste von Werten wird erwartet.

Zusätzlich kann das `|`-Token als Trennzeichen verwendet werden, wenn mehrere Werte oder eine Kombination aus `<ident>` und `<syntax-type>`-Werten für die erwartete Syntax angegeben werden.

### Rückgabewert

Eine Datentypdefinition.

## Beschreibung

Die `type()`-Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als eine Teilmenge der allgemeinen Wertedefinitionssyntax betrachtet werden, die verwendet wird, um die Menge der gültigen Werte für jede CSS-Eigenschaft und Funktion zu definieren.

In den meisten Fällen werden Sie `type()` verwenden, um einen einzelnen Datentyp anzugeben. Das nächste Beispiel verwendet die Funktion {{cssxref("attr()")}}, um die CSS-Eigenschaft {{cssxref("background-color")}} gleich dem Wert einer benutzerdefinierten `data-background`-Funktion zu setzen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color>")}} festgelegt.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwortanforderung angeben (zum Beispiel `type(blue)`), aber dies wäre zu einschränkend.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Mehrere zulässige Typen angeben

Sie können das `|`-Token als Trennzeichen verwenden, wenn Sie eine Reihe von zulässigen Datentypen, Schlüsselwörtern oder eine Kombination aus beiden angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}}-At-Regel zur Definition einer [benutzerdefinierten Funktion](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) verwendet werden kann, die zwei Farbparameter akzeptiert und den ersten zurückgibt, es sei denn, die Ansichtsfensterbreite ist kleiner als `700px`, in diesem Fall wird der zweite zurückgegeben. Der erste darf `red` oder `green` sein, während der zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Bei den `@function`-Datentypen können Sie die `type()`-Funktion weglassen und den Wert in Fällen einschließen, in denen nur ein Datentyp oder Schlüsselwort angegeben ist. Dies ist der Fall bei der `blue`-Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()`-Funktion.

### Listen von Typen angeben

Die `+`- und `#`-Tokens können an einen `<syntax-type>` angehängt werden, um anzugeben, dass Sie eine durch Leerzeichen oder Kommata getrennte Liste erwarten. Zum Beispiel:

- Ein `<color>+`-Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>`-Werten, zum Beispiel `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#`-Parameter erwartet eine durch Kommas getrennte Liste von `<length>`-Werten, zum Beispiel `30px, 1em, 15vw`.

Sie können mehrere Tokens mit `|` als Trennzeichen kombinieren. Zum Beispiel würde `<color># | <integer>#` eine durch Kommata getrennte Liste von `<color>`-Werten oder eine durch Kommata getrennte Liste von `<integer>`-Werten erwarten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden mehrere weitere Beispiele in der {{cssxref("attr()")}} und {{cssxref("@function")}} Dokumentation.

### Grundlegende `@function`-Datentypdefinition

Dieses Beispiel definiert eine benutzerdefinierte CSS-Funktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}}-Element mit etwas Textinhalt.

```html live-sample___basic-data-type
<section>What you gonna say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifizierung einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als ein oder mehrere durch Leerzeichen getrennte `<string>`-Werte angegeben ist. Es werden die Zeichenfolgenwerte mit einem Leerzeichen und einem Herz-Emoji am Ende zurückgegeben.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Wir geben dann einige grundlegende Stile für das `<section>`-Element an und verwenden die `--combine-strings()`-Funktion, um den Wert der {{cssxref("content")}}-Eigenschaft zu spezifizieren, einschließlich zweier durch Leerzeichen getrennter Strings als Argument.

```css live-sample___basic-data-type
section {
  font-family: system-ui;
  background-color: lime;
  padding: 20px;
}

section::after {
  content: --combine-strings("hello" "goodbye");
}
```

#### Ergebnis

{{ EmbedLiveSample('basic-data-type', '100%', '70') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}} At-Regel
- {{cssxref("attr()")}} Funktion
- [Verwendung benutzerdefinierter CSS-Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
