---
title: syntax
slug: Web/CSS/Reference/At-rules/@property/syntax
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Der **`syntax`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) definiert die erlaubten Wertetypen für die registrierte [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*). Er steuert, wie der angegebene Wert der Eigenschaft verarbeitet wird, um den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/Value_processing#computed_value) abzuleiten. Es ist ein erforderlicher Deskriptor; fehlt er oder ist er ungültig, so ist die gesamte `@property` Regel ungültig und wird ignoriert.

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

Ein String (bekannt als Syntax-String), der die zulässigen Werte definiert. Er kann eines der folgenden sein:

- Ein oder mehrere Syntaxkomponenten-Namen, die sein können:
  - Datentypnamen (in spitzen Klammern geschrieben, wie `<color>` oder `<length>`)
  - Schlüsselwörter (ohne spitze Klammern geschrieben, wie `auto` oder `none`)
- Die universelle Syntax `*`, welche jeden gültigen CSS-Wert akzeptiert. Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Syntaxkomponenten-Namen können allein verwendet oder in unterschiedlicher Weise multipliziert und kombiniert werden:

- Die Multiplikatoren `+` (durch Leerzeichen getrennt) und `#` (durch Kommas getrennt) zeigen an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine durch Kommas getrennte Liste von `<color>`-Werten die erwartete Syntax ist.

- Der vertikale Strich (`|`) Kombinator kann "oder"-Bedingungen für die erwartete Syntax erstellen. Zum Beispiel akzeptiert `<length> | auto` `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Kommas getrennte Liste von `<color>`-Werten oder eine durch Kommas getrennte Liste von `<integer>`-Werten.

Die folgenden Syntaxkomponenten-Namen werden unterstützt:

- `"<angle>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;angle&gt;")}} Wert.
- `"<color>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}} Wert.
- `"<custom-ident>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}} Wert.
- `"<image>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;image&gt;")}} Wert.
- `"<integer>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}} Wert.
- `"<length>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} Wert.
- `"<length-percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert und jede gültige {{cssxref("calc", "calc()")}}-Ausdruckskombination von `<length>` und `<percentage>` Werten.
- `"<number>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}} Wert.
- `"<percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}} Wert.
- `"<resolution>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;resolution&gt;")}} Wert.
- `"<string>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}} Wert.
- `"<time>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}} Wert.
- `"<transform-function>"`
  - : Akzeptiert jede gültige {{cssxref("&lt;transform-function&gt;")}} Wert.
- `"<transform-list>"`
  - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte. Es ist gleichwertig mit `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formatierte Syntax

{{csssyntax}}

## Beispiele

### Registrierung einer benutzerdefinierten Eigenschaft mit Typprüfung

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` definiert werden kann, die nur `<color>` Werte erlaubt:

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
- [CSS-Eigenschaften und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
