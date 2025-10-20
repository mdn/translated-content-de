---
title: type()
slug: Web/CSS/type
l10n:
  sourceCommit: bb55d1b729e6d8fd2eea3f1f9b402f6788a6d1d9
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben und wird von den folgenden CSS-Funktionen verwendet:

- Die {{cssxref("attr()")}} Funktion, um den Datentyp anzugeben, in den der Attributwert geparst werden soll.
- Die {{cssxref("@function")}} At-Regel, um die zulässigen Datentypen für [CSS benutzerdefinierte Funktion](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) Parameter und Ergebnisse anzugeben.

> [!NOTE]
> Der {{cssxref("@property")}} At-Regel {{cssxref("@property/syntax", "syntax")}} Deskriptorwert verwendet das gleiche `<syntax>`, um die zulässigen Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) zu definieren, jedoch nimmt dies immer die Form eines Strings an.

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

Die Syntax der `type()` Funktion ist wie folgt:

```plain
type(<syntax>)
```

Der `<syntax>` Parameter ist ein Ausdruck, der den Datentyp definiert. Dieser kann die folgenden Formen annehmen:

- `<ident>`
  - : Ein CSS-Schlüsselwortwert, ohne spitze Klammern geschrieben.

- `<syntax-type>`
  - : Ein Typname, in spitzen Klammern geschrieben, der einen CSS-Datentyp repräsentiert. Die folgenden Datentypen werden unterstützt:
    - `<angle>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;angle&gt;")}} Wert.
    - `<color>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}} Wert.
    - `<custom-ident>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}} Wert.
    - `<image>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;image&gt;")}} Wert.
    - `<integer>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}} Wert.
    - `<length>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} Wert.
    - `<length-percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert und jeden gültigen {{cssxref("calc", "calc()")}} Ausdruck, der `<length>` und `<percentage>` Werte kombiniert.
    - `<number>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}} Wert.
    - `<percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}} Wert.
    - `<resolution>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;resolution&gt;")}} Wert.
    - `<string>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}} Wert.
    - `<time>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}} Wert.
    - `<transform-function>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;transform-function&gt;")}} Wert.
    - `<transform-list>`
      - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte. Es ist äquivalent zu `"<transform-function>+"`, und darf nicht von einem `+` oder `#` Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>` Werte mit den folgenden Tokens kombinieren:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Komma getrennte Liste von Werten wird erwartet.

Zusätzlich kann das `|` Token als Trennzeichen verwendet werden, wenn mehrere Werte oder Kombinationen von `<ident>` und `<syntax-type>` Werten für die erwartete Syntax angegeben werden.

### Rückgabewert

Eine Datentypdefinition.

## Beschreibung

Die `type()` Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als Teilmenge der allgemeinen Wertedefinitionssyntax betrachtet werden, die verwendet wird, um die Menge gültiger Werte für jede CSS-Eigenschaft und Funktion zu definieren.

Am häufigsten wird `type()` verwendet, um einen einzelnen Datentyp anzugeben. Das folgende Beispiel verwendet die {{cssxref("attr()")}} Funktion, um die {{cssxref("background-color")}} Eigenschaft gleich dem Wert einer benutzerdefinierten `data-background` Funktion festzulegen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color>")}} angegeben.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwortanforderung angeben (zum Beispiel `type(blue)`), aber das wäre zu beschränkend.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Mehrere zulässige Typen angeben

Sie können das `|` Token als Trennzeichen verwenden, wenn Sie eine Reihe von zulässigen Datentypen, Schlüsselwörtern oder eine Kombination aus beidem angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}} At-Regel verwendet werden kann, um eine [benutzerdefinierte Funktion](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) zu definieren, die zwei Farbparameter übernimmt und die erste Farbe zurückgibt, es sei denn, die Viewport-Breite ist weniger als `700px`, in welchem Fall sie die zweite zurückgibt. Die erste darf `red` oder `green` sein, während die zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Im Falle von `@function` Datentypen können Sie die `type()` Funktion weglassen und einfach den Wert einfügen, wenn nur ein Datentyp oder Schlüsselwort angegeben wird. Dies ist der Fall bei der `blue` Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()` Funktion.

### Auflistungen von Typen angeben

Die `+` und `#` Tokens können an einen `<syntax-type>` angehängt werden, um anzugeben, dass Sie eine durch Leerzeichen oder Komma getrennte Liste erwarten. Zum Beispiel:

- Ein `<color>+` Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>` Werten, zum Beispiel `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#` Parameter erwartet eine durch Komma getrennte Liste von `<length>` Werten, zum Beispiel `30px, 1em, 15vw`.

Sie können mehrere Tokens kombinieren, indem Sie `|` als Trennzeichen verwenden. Zum Beispiel würde `<color># | <integer>#` eine durch Komma getrennte Liste von `<color>` Werten oder eine durch Komma getrennte Liste von `<integer>` Werten erwarten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Weitere Beispiele finden Sie in der Dokumentation zu {{cssxref("attr()")}} und {{cssxref("@function")}}.

### Grundlegende `@function` Datentypdefinition

Dieses Beispiel definiert eine CSS benutzerdefinierte Funktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit etwas Textinhalt.

```html live-sample___basic-data-type
<section>What you gonna say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifikation einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als ein oder mehrere durch Leerzeichen getrennte `<string>` Werte angegeben ist. Sie gibt die String-Werte mit einem Leerzeichen und einem Herz-Emoji am Ende zurück.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Wir spezifizieren dann einige grundlegende Styles für das `<section>` Element und verwenden die `--combine-strings()` Funktion, um den Wert seiner {{cssxref("content")}} Eigenschaft festzulegen, einschließlich zweier durch Leerzeichen getrennter Strings als Argument.

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
- [Verwendung von CSS benutzerdefinierten Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
