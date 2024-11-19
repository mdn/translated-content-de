---
title: syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: 6834ad69f8844894e0578ea06375e3e1e1e17e73
---

{{CSSRef}}

Der **`syntax`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) definiert die zulässigen Werttypen für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/--*). Er steuert, wie der angegebene Wert der Eigenschaft verarbeitet wird, um den {{cssxref("computed_value","berechneten Wert")}} zu ermitteln. Es handelt sich um einen erforderlichen Deskriptor; wenn er fehlt oder ungültig ist, ist die gesamte `@property` Regel ungültig und wird ignoriert.

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

Ein String (bekannt als Syntax-String), der die erlaubten Werte definiert. Er kann eine der folgenden Formen annehmen:

- Einer oder mehrere Syntaxkomponenten-Namen, die sein können:
  - Datentypnamen (geschrieben mit spitzen Klammern, wie `<color>` oder `<length>`)
  - Schlüsselwörter (geschrieben ohne spitze Klammern, wie `auto` oder `none`)
- Die universelle Syntax `*`, die jeden gültigen CSS-Wert akzeptiert. Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Syntaxkomponenten-Namen können allein verwendet oder auf unterschiedliche Weise multipliziert und kombiniert werden:

- Die Multiplikatoren `+` (mit Leerzeichen getrennt) und `#` (mit Komma getrennt) geben an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine durch Kommas getrennte Liste von `<color>` Werten die erwartete Syntax ist.

- Der vertikale Strich (`|`) Kombinator kann "oder"-Bedingungen für die erwartete Syntax erstellen. Zum Beispiel akzeptiert `<length> | auto` `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Kommas getrennte Liste von `<color>` Werten oder eine durch Kommas getrennte Liste von `<integer>` Werten.

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
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert sowie jeden gültigen {{cssxref("calc", "calc()")}} Ausdruck, der `<length>` und `<percentage>` Werte kombiniert.
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
  - : Akzeptiert jeden gültigen {{cssxref("&lt;transform-function&gt;")}} Wert.
- `"<transform-list>"`
  - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}} Werte. Es ist äquivalent zu `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Eigenschaft mit Typprüfung registrieren

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` definiert wird, die nur `<color>` Werte zulässt:

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
