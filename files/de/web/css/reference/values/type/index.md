---
title: type()
slug: Web/CSS/Reference/Values/type
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{seecompattable}}

Die **`type()`** [CSS](/de/docs/Web/CSS) [Funktion](/de/docs/Web/CSS/Reference/Values/Functions) ermöglicht es Ihnen, einen bestimmten Datentyp anzugeben, und wird von den folgenden CSS-Funktionen verwendet:

- Die {{cssxref("attr()")}} Funktion, um den Datentyp anzugeben, in den ein Attributwert geparst werden soll.
- Die {{cssxref("@function")}} At-Regel, um die erlaubten Datentypen für Parameter und Ergebnisse von [CSS- benutzerspezifische Funktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) zu definieren.

> [!NOTE]
> Der {{cssxref("@property")}} At-Regel {{cssxref("@property/syntax", "syntax")}} Descriptor-Wert verwendet denselben `<syntax>`, um die erlaubten Datentypen für registrierte [benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) zu definieren, nimmt jedoch immer die Form eines Strings an.

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
      - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte. Dies entspricht dem `"<transform-function>+"` und darf nicht von einem `+` oder `#` Token gefolgt werden.
    - `<url>`
      - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

- `*`
  - : Die universelle Syntax.

Sie können `<syntax-type>` Werte mit den folgenden Token kombinieren:

- `+`
  - : Eine durch Leerzeichen getrennte Liste von Werten wird erwartet.
- `#`
  - : Eine durch Kommas getrennte Liste von Werten wird erwartet.

Zusätzlich kann das `|` Token als Separator verwendet werden, wenn mehrere Werte oder Kombinationen von `<ident>` und `<syntax-type>` Werten für die erwartete Syntax angegeben werden.

### Rückgabewert

Eine Datendefinitionsdefinition.

## Beschreibung

Die `type()` Funktion wird verwendet, wenn Sie einen Datentyp definieren müssen. Sie kann als Untermenge der gesamten Wertedefinitionssyntax betrachtet werden, die zum Definieren der Menge gültiger Werte für jede CSS-Eigenschaft und Funktion verwendet wird.

Am häufigsten sehen Sie `type()` verwendet, um einen einzelnen Datentyp anzugeben. Das nächste Beispiel verwendet die {{cssxref("attr()")}} Funktion, um die {{cssxref("background-color")}} Eigenschaft gleich dem Wert einer benutzerdefinierten `data-background` Funktion zu setzen. Der erforderliche Datentyp für den Wert wurde als {{cssxref("&lt;color&gt;")}} angegeben.

```css
background-color: attr(data-background type(<color>), red);
```

Sie könnten auch eine genaue Schlüsselwortanforderung angeben (z. B. `type(blue)`), aber das würde zu einschränkend sein.

Die Angabe von `type(*)` erlaubt jeden gültigen CSS-Wert. Dies ist die universelle Syntax, die nicht vervielfacht oder mit anderen Syntaxkomponenten kombiniert werden kann.

### Mehrere zugelassene Typen angeben

Sie können das `|` Token als Trennzeichen verwenden, wenn Sie eine Reihe von zulässigen Datentypen, Schlüsselwörtern oder eine Kombination aus beiden angeben. Zum Beispiel:

- `type(<length> | <percentage>)`
- `type(red | green)`
- `type(<length> | auto)`

Das folgende Beispiel zeigt, wie eine {{cssxref("@function")}} At-Regel verwendet werden kann, um eine [benutzerdefinierte Funktion](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions) zu definieren, die zwei Farbparameter nimmt und den ersten zurückgibt, es sei denn, die Ansichtsbreite ist kleiner als `700px`, in welchem Fall sie den zweiten zurückgibt. Der erste darf `red` oder `green` sein, während der zweite `blue` sein muss.

```css
@function --color-choice(--color1 type(red | green), --color2 blue) {
  result: var(--color1);
  @media (width < 700px) {
    result: var(--color2);
  }
}
```

> [!NOTE]
> Im Fall von `@function` Datentypen können Sie die `type()` Funktion weglassen und nur den Wert angeben, wenn nur ein Datentyp oder Schlüsselwort angegeben ist. Dies ist der Fall bei der `blue` Typdefinition in der vorherigen benutzerdefinierten Funktion. Dies funktioniert nicht mit der `attr()` Funktion.

### Listen von Typen angeben

Die `+` und `#` Token können an einen `<syntax-type>` angehängt werden, um anzugeben, dass Sie eine durch Leerzeichen getrennte Liste oder eine durch Kommas getrennte Liste erwarten. Zum Beispiel:

- Ein `<color>+` Parameter erwartet eine durch Leerzeichen getrennte Liste von `<color>` Werten, z. B. `red blue #a60000 rgb(234 45 100)`.
- Ein `<length>#` Parameter erwartet eine durch Kommas getrennte Liste von `<length>` Werten, z. B. `30px, 1em, 15vw`.

Sie können mehrere Token unter Verwendung von `|` als Separator kombinieren. Zum Beispiel, `<color># | <integer>#` würde eine durch Kommas getrennte Liste von `<color>` Werten oder eine durch Kommas getrennte Liste von `<integer>` Werten erwarten.

## Formale Syntax

{{csssyntax}}

## Beispiele

Sie finden mehrere weitere Beispiele in der {{cssxref("attr()")}} und {{cssxref("@function")}} Dokumentation.

### Grundlegende `@function` Datentypdefinition

Dieses Beispiel definiert eine CSS-benutzerdefinierte Funktion, die mehrere Strings kombiniert.

#### HTML

Das HTML enthält ein einzelnes {{htmlelement("section")}} Element mit etwas Textinhalt.

```html live-sample___basic-data-type
<section>What you gonna say?</section>
```

#### CSS

Im CSS beginnen wir mit der Spezifizierung einer `@function` namens `--combine-strings`. Diese hat einen Parameter namens `--strings`, dessen Datentyp als einer oder mehrere durch Leerzeichen getrennte `<string>` Werte angegeben wird. Sie gibt die Stringwerte mit einem angehängten Leerzeichen und einem Herz-Emoji zurück.

```css-nolint live-sample___basic-data-type
@function --combine-strings(--strings type(<string>+)) {
  result: var(--strings) " ❤️";
}
```

Wir geben dann einige grundlegende Styles für das `<section>` Element an und verwenden die `--combine-strings()` Funktion, um den Wert seiner {{cssxref("content")}} Eigenschaft zu spezifizieren, einschließlich zwei durch Leerzeichen getrennter Strings als Argument.

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
- [Verwendung von CSS-Benutzerfunktionen](/de/docs/Web/CSS/Guides/Custom_functions_and_mixins/Using_custom_functions)
