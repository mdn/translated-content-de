---
title: "`type()` CSS-Funktion"
short-title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben. Sie wird von den folgenden CSS-Funktionen verwendet:

- Die {{cssxref("attr()")}} Funktion, um den Datentyp anzugeben, in den ein Attributwert geparst werden soll.
- Die {{cssxref("@function")}} Regel, um die erlaubten Datentypen für Parameter und Ergebnisse von [CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) zu spezifizieren.

> [!NOTE]
> Der {{cssxref("@property")}} Regelwert für die {{cssxref("@property/syntax", "syntax")}}-Beschreibung verwendet die gleiche `<syntax>`, um die erlaubten Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren. Dies erfolgt jedoch immer in Form eines Strings.

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

Die Syntax der `type()` Funktion lautet wie folgt:

```plain
type(<syntax>)
```

Der `<syntax>` Parameter ist ein Ausdruck, der den Datentyp definiert. Dieser kann folgende Formen annehmen:

- `<ident>`
  - : Ein CSS-Schlüsselwortwert, ohne spitze Klammern geschrieben.

- `<syntax-type>`
  - : Ein Typname, in spitzen Klammern geschrieben, der einen CSS-Datentyp repräsentiert. Die folgenden Datentypen werden unterstützt:
    - `<angle>`
      - : Akzeptiert jeden gültigen {{cssxref("angle")}} Wert.
    - `<color>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}} Wert.
    - `<custom-ident>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}} Wert.
    - `<image>`
      - : Akzeptiert jeden gültigen {{cssxref("image")}} Wert.
    - `<integer>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}} Wert.
    - `<length>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} Wert.
    - `<length-percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert sowie jede gültige {{cssxref("calc()")}} Ausdruckskombination aus `<length>` und `<percentage>` Werten.
    - `<number>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}} Wert.
    - `<percentage>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}} Wert.
    - `<resolution>`
      - : Akzeptiert jeden gültigen {{cssxref("resolution")}} Wert.
    - `<string>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}} Wert.
    - `<time>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}} Wert.
    - `<transform-function>`
      - : Akzeptiert jeden gültigen {{cssxref("&lt;transform-function&gt;")}} Wert.
    - `<transform-list>`
      - : Akzeptiert eine Liste von gültigen {{cssxref("&lt;transform-function&gt;")}} Werten. Es entspricht `"<transform-function>+"` und darf nicht von einem `+` oder `#` Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>` Werte mit den folgenden Token kombinieren:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Kommata getrennte Liste von Werten wird erwartet.

Darüber hinaus kann das `|` Token als Trennzeichen verwendet werden, wenn mehrere Werte angegeben oder `<ident>` und `<syntax-type>` Werte für die erwartete Syntax kombiniert werden.

### Rückgabewert

Eine Datentypdefinition.

## Beschreibung

Die `type()` Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als Untermenge der allgemeinen Wertedefinitionssyntax betrachtet werden, die verwendet wird, um das Set von gültigen Werten für jede CSS-Eigenschaft und -Funktion zu definieren.

Am häufigsten wird `type()` verwendet, um einen einzelnen Datentyp zu spezifizieren. Im nächsten Beispiel wird die {{cssxref("attr()")}} Funktion verwendet, um die {{cssxref("background-color")}} Eigenschaft gleich dem Wert einer benutzerdefinierten `data-background` Funktion zu setzen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color>")}} angegeben.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwortanforderung angeben (zum Beispiel `type(blue)`), aber das wäre zu einschränkend.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht vervielfacht oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Angabe mehrerer zulässiger Typen

Sie können das `|` Token als Trennzeichen verwenden, wenn Sie eine Reihe zulässiger Datentypen, Schlüsselwörter oder eine Kombination aus beidem angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}} Regel verwendet werden kann, um eine [benutzerdefinierte Funktion](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) zu definieren, die zwei Farbparameter annimmt und den ersten zurückgibt, es sei denn, die Ansichtsbreite ist kleiner als `700px`, in diesem Fall wird der zweite zurückgegeben. Der erste darf `red` oder `green` sein, während der zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Im Fall von `@function` Datentypen können Sie die `type()` Funktion weglassen und nur den Wert einfügen, wenn nur ein Datentyp oder Schlüsselwort angegeben ist. Dies ist der Fall bei der `blue` Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()` Funktion.

### Angabe von Listen von Typen

Die `+` und `#` Token können an einen `<syntax-type>` angehängt werden, um anzugeben, dass eine durch Leerzeichen getrennte Liste oder eine durch Kommata getrennte Liste erwartet wird. Zum Beispiel:

- Ein `<color>+` Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>` Werten, zum Beispiel `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#` Parameter erwartet eine durch Kommata getrennte Liste von `<length>` Werten, zum Beispiel `30px, 1em, 15vw`.

Sie können mehrere Token kombinieren, indem Sie `|` als Trennzeichen verwenden. Zum Beispiel, `<color># | <integer>#` erwartet eine durch Kommata getrennte Liste von `<color>` Werten oder eine durch Kommata getrennte Liste von `<integer>` Werten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden mehrere andere Beispiele in der Dokumentation zu {{cssxref("attr()")}} und {{cssxref("@function")}}.

### Grundlegende `@function` Datentypdefinition

Dieses Beispiel definiert eine CSS-Benutzerfunktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit einigem Textinhalt.

```html live-sample___basic-data-type
<section>What you gonna say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifikation einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als eine oder mehrere durch Leerzeichen getrennte `<string>` Werte angegeben ist. Es gibt die String-Werte mit einem Leerzeichen und einem Herz-Emoji am Ende zurück.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Dann spezifizieren wir einige grundlegende Stile für das `<section>` Element und verwenden die Funktion `--combine-strings()`, um den Wert seiner {{cssxref("content")}} Eigenschaft anzugeben, einschließlich zwei durch Leerzeichen getrennter Strings als Argument.

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

#### Resultat

{{ EmbedLiveSample('basic-data-type', '100%', '70') }}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("@function")}} at-rule
- {{cssxref("attr()")}} function
- [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
