---
title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben und wird von den folgenden CSS-Features verwendet:

- Die Funktion {{cssxref("attr()")}}, um den Datentyp anzugeben, in den ein Attributwert geparst werden soll.
- Die Regel {{cssxref("@function")}}, um die erlaubten Datentypen für die Parameter und Ergebnisse von [benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) festzulegen.

> [!NOTE]
> Der Wert des Deskriptors {{cssxref("@property/syntax", "syntax")}} der Regel {{cssxref("@property")}} verwendet dieselbe `<syntax>`, um die erlaubten Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren, jedoch nimmt dieser immer die Form eines Strings an.

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

Der `<syntax>` Parameter ist ein Ausdruck, der den Datentyp definiert. Dieser kann folgende Formen annehmen:

- `<ident>`
  - : Ein CSS-Schlüsselwortwert, ohne spitze Klammern geschrieben.

- `<syntax-type>`
  - : Ein Typname, in spitzen Klammern geschrieben, der einen CSS-Datentyp darstellt. Die folgenden Datentypen werden unterstützt:
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
      - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte. Es ist gleichbedeutend mit `"<transform-function>+"` und darf nicht von einem `+` oder `#` Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>` Werte mit den folgenden Tokens kombinieren:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Komma getrennte Liste von Werten wird erwartet.

Zusätzlich kann das `|` Token als Separator verwendet werden, wenn mehrere Werte oder Kombinationen von `<ident>` und `<syntax-type>` Werten für die erwartete Syntax angegeben werden.

### Rückgabewert

Eine Datentyp-Definition.

## Beschreibung

Die `type()` Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als Teilmenge der allgemeinen Wertedefinitionssyntax betrachtet werden, die zur Definition der Menge gültiger Werte für jede CSS-Eigenschaft und Funktion verwendet wird.

Am häufigsten wird `type()` verwendet, um einen einzelnen Datentyp anzugeben. Das nächste Beispiel verwendet die {{cssxref("attr()")}} Funktion, um die {{cssxref("background-color")}} Eigenschaft gleich dem Wert einer benutzerdefinierten `data-background` Funktion zu setzen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color&gt;")}} angegeben.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwortanforderung angeben (zum Beispiel `type(blue)`), aber dies wäre zu einschränkend.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Angabe mehrerer erlaubter Typen

Sie können das `|` Token als Separator verwenden, wenn Sie eine Reihe erlaubter Datentypen, Schlüsselwörter oder eine Kombination aus beiden angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}} Regel verwendet werden kann, um eine [benutzerdefinierte Funktion](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions) zu definieren, die zwei Farbparameter übernimmt und den ersten zurückgibt, es sei denn, die Ansichtsbreite ist kleiner als `700px`, in welchem Fall es den zweiten zurückgibt. Der erste darf `red` oder `green` sein, während der zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Im Fall von `@function` Datentypen können Sie die `type()` Funktion weglassen und einfach den Wert einschließen in Fällen, in denen nur ein Datentyp oder Schlüsselwort angegeben ist. Dies ist der Fall bei der `blue` Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()` Funktion.

### Angabe von Listen von Typen

Die `+` und `#` Tokens können an einen `<syntax-type>` angehängt werden, um anzugeben, dass Sie eine durch Leerzeichen oder Kommata getrennte Liste erwarten. Zum Beispiel:

- Ein `<color>+` Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>` Werten, zum Beispiel `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#` Parameter erwartet eine durch Komma getrennte Liste von `<length>` Werten, zum Beispiel `30px, 1em, 15vw`.

Sie können mehrere Tokens mit `|` als Separator kombinieren. Zum Beispiel `<color># | <integer>#` würde eine durch Komma getrennte Liste von `<color>` Werten oder eine durch Komma getrennte Liste von `<integer>` Werten erwarten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie können mehrere andere Beispiele in der Dokumentation zu {{cssxref("attr()")}} und {{cssxref("@function")}} finden.

### Grundlegende Definition eines `@function` Datentyps

Dieses Beispiel definiert eine benutzerdefinierte CSS-Funktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit einigem Textinhalt.

```html live-sample___basic-data-type
<section>What you gonna say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifikation einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als ein oder mehrere durch Leerzeichen getrennte `<string>` Werte angegeben ist. Es gibt die Stringwerte mit einem angehängten Leerzeichen und einem Herz-Emoji zurück.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Wir spezifizieren dann einige grundlegende Stile für das `<section>` Element und verwenden die `--combine-strings()` Funktion, um den Wert der {{cssxref("content")}} Eigenschaft festzulegen und zwei durch Leerzeichen getrennte Strings als Argument einzuschließen.

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

- {{cssxref("@function")}} Regel
- {{cssxref("attr()")}} Funktion
- [Verwendung von benutzerdefinierten CSS-Funktionen](/de/docs/Web/CSS/CSS_custom_functions_and_mixins/Using_custom_functions)
