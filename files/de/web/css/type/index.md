---
title: type()
slug: Web/CSS/type
l10n:
  sourceCommit: b5a6d8bc5fd751032f70b88e7ec1ec61339937de
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben und wird von den folgenden CSS-Funktionen verwendet:

- Die {{cssxref("attr()")}} Funktion, um anzugeben, in welchen Datentyp ein Attributwert konvertiert werden soll.
- Die {{cssxref("@function")}} at-rule, um die erlaubten Datentypen für Parameter und Ergebnisse von [benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) anzugeben.

> [!NOTE]
> Der Wert des {{cssxref("@property")}} at-rule {{cssxref("@property/syntax", "syntax")}} Descriptors verwendet die gleiche `<syntax>`, um die erlaubten Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) zu definieren, aber dies nimmt immer die Form eines Strings an.

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
      - : Akzeptiert eine Liste von gültigen {{cssxref("&lt;transform-function&gt;")}} Werten. Es ist gleichwertig zu `"<transform-function>+"`, und darf nicht von einem `+` oder `#` Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>` Werte kombinieren, indem Sie die folgenden Tokens verwenden:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Kommas getrennte Liste von Werten wird erwartet.

Zusätzlich kann das `|` Token als Trennzeichen verwendet werden, wenn mehrere Werte angegeben oder `<ident>` und `<syntax-type>` Werte für die erwartete Syntax kombiniert werden.

### Rückgabewert

Eine Datentypdefinition.

## Beschreibung

Die `type()` Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als eine Teilmenge der allgemeinen Wertedefinitionssyntax betrachtet werden, die verwendet wird, um die Menge gültiger Werte für jede CSS-Eigenschaft und Funktion zu definieren.

Am häufigsten wird `type()` verwendet, um einen einzelnen Datentyp anzugeben. Das nächste Beispiel verwendet die {{cssxref("attr()")}} Funktion, um die {{cssxref("background-color")}} Eigenschaft gleich dem Wert einer benutzerdefinierten `data-background` Funktion zu setzen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color>")}} spezifiziert.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwort-Anforderung angeben (zum Beispiel `type(blue)`), aber dies wäre zu einschränkend.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht vervielfacht oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Spezifizierung mehrerer erlaubter Typen

Sie können das `|` Token als Trennzeichen verwenden, wenn Sie eine Reihe von erlaubten Datentypen, Schlüsselwörtern oder eine Kombination aus beidem angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}} at-rule verwendet werden kann, um eine [benutzerdefinierte Funktion](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) zu definieren, die zwei Farbparameter nimmt und den ersten zurückgibt, es sei denn, die Ansichtsfensterbreite ist kleiner als `700px`, in diesem Fall wird der zweite zurückgegeben. Der erste darf `red` oder `green` sein, während der zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Bei `@function` Datentypen können Sie die `type()` Funktion weglassen und einfach den Wert angeben, wenn nur ein Datentyp oder Schlüsselwort spezifiziert ist. Dies ist der Fall bei der `blue` Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()` Funktion.

### Spezifizierung von Listen von Typen

Die `+` und `#` Tokens können einem `<syntax-type>` angehängt werden, um anzugeben, dass Sie eine durch Leerzeichen getrennte Liste oder eine durch Kommas getrennte Liste erwarten. Zum Beispiel:

- Ein `<color>+` Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>` Werten, zum Beispiel `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#` Parameter erwartet eine durch Kommas getrennte Liste von `<length>` Werten, zum Beispiel `30px, 1em, 15vw`.

Sie können mehrere Tokens kombinieren, indem Sie `|` als Trennzeichen verwenden. Zum Beispiel würde `<color># | <integer>#` eine durch Kommas getrennte Liste von `<color>` Werten oder eine durch Kommas getrennte Liste von `<integer>` Werten erwarten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können weitere Beispiele in der Dokumentation zu {{cssxref("attr()")}} und {{cssxref("@function")}} finden.

### Grundlegende `@function` Datentypdefinition

Dieses Beispiel definiert eine benutzerdefinierte CSS-Funktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit etwas Textinhalt.

```html live-sample___basic-data-type
<section>What you goin' ta say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifikation einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als eine oder mehrere durch Leerzeichen getrennte `<string>` Werte spezifiziert ist. Es gibt die Stringwerte mit einem angehängten Leerzeichen und einem Herz-Emoji zurück.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Wir geben dann einige grundlegende Stile für das `<section>` Element an und verwenden die `--combine-strings()` Funktion, um den Wert ihrer {{cssxref("content")}} Eigenschaft zu spezifizieren, einschließlich zweier durch Leerzeichen getrennter Strings als Argument.

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

- {{cssxref("@function")}} at-rule
- {{cssxref("attr()")}} Funktion
- [Verwendung von benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
