---
title: Syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: 95edea913e7f0726243aff3f47b85cfd6f02d995
---

{{CSSRef}}

Der **`syntax`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert die erlaubten Wertetypen für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/--*). Er steuert, wie der angegebene Wert der Eigenschaft verarbeitet wird, um den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed-value) abzuleiten. Es handelt sich um einen erforderlichen Deskriptor; wenn er fehlt oder ungültig ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

## Syntax

```css
/* A data type name */
syntax: "<color>";

/* A '|' combinator for multiple data types */
syntax: "<length> | <percentage>";

/* Space-separated list of values */
syntax: "<color>+";

/* Comma-separated list of values */
syntax: "<length>#";

/* Keywords */
syntax: "small | medium | large";

/* Combination of data type and keyword */
syntax: "<length> | auto";

/* Universal syntax value */
syntax: "*";
```

### Werte

Ein String (bekannt als Syntax-String), der die erlaubten Werte definiert. Es kann eines der folgenden sein:

- Ein oder mehrere Syntaxkomponentennamen, die Folgendes sein können:
  - Datentypnamen (geschrieben in spitzen Klammern, wie `<color>` oder `<length>`)
  - Schlüsselwörter (geschrieben ohne spitze Klammern, wie `auto` oder `none`)
- Die universelle Syntax `*`, die jeden gültigen CSS-Wert akzeptiert. Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Syntaxkomponentennamen können allein oder multipliziert und in verschiedenen Weisen kombiniert verwendet werden:

- Die Multiplikatoren `+` (Leerzeichen-separated) und `#` (Komma-separated) geben an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine kommagetrennte Liste von `<color>`-Werten die erwartete Syntax ist.

- Der vertikale Strich (`|`) als Kombinator kann "oder"-Bedingungen für die erwartete Syntax erstellen. Zum Beispiel akzeptiert `<length> | auto` entweder `<length>` oder `auto`, und `<color># | <integer>#` erwartet entweder eine kommagetrennte Liste von `<color>`-Werten oder eine kommagetrennte Liste von `<integer>`-Werten.

Die folgenden Syntaxkomponentennamen werden unterstützt:

- `"<angle>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;angle&gt;")}}-Wert.
- `"<color>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}-Wert.
- `"<custom-ident>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}}-Wert.
- `"<image>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;image&gt;")}}-Wert.
- `"<integer>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}}-Wert.
- `"<length>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}-Wert.
- `"<length-percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Wert und jeden gültigen {{cssxref("calc", "calc()")}}-Ausdruck, der `<length>`- und `<percentage>`-Werte kombiniert.
- `"<number>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}}-Wert.
- `"<percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}}-Wert.
- `"<resolution>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;resolution&gt;")}}-Wert.
- `"<string>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}}-Wert.
- `"<time>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}}-Wert.
- `"<transform-function>"`
  - : Akzeptiert jede gültige {{cssxref("&lt;transform-function&gt;")}}-Wert.
- `"<transform-list>"`
  - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}}-Werte. Es entspricht `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Registrieren einer benutzerdefinierten Eigenschaft mit Typprüfung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` definiert wird, die nur `<color>`-Werte erlaubt:

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Verwendung von [JavaScript](/de/docs/Web/JavaScript) [`CSS.registerProperty()`](/de/docs/Web/API/CSS/registerProperty_static):

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- Andere {{cssxref("@property")}} Deskriptoren: {{cssxref("@property/inherits","inherits")}} und {{cssxref("@property/initial-value", "initial-value")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
