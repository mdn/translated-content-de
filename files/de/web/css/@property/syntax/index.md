---
title: Syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: ad896488bf8fac04fc6fa144c441fdbfd880737c
---

{{CSSRef}}

Der **`syntax`** Deskriptor der {{cssxref("@property")}} [at-rule](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert die zulässigen Wertetypen für die registrierte [CSS-Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*). Er steuert, wie der angegebene Wert der Eigenschaft verarbeitet wird, um den [berechneten Wert](/de/docs/Web/CSS/CSS_cascade/computed_value) zu bestimmen. Es ist ein erforderlicher Deskriptor; fehlt er oder ist er ungültig, ist die gesamte `@property` Regel ungültig und wird ignoriert.

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

Ein Zeichenfolgenwert (bekannt als Syntax-String), der die zulässigen Werte definiert. Er kann einer der folgenden sein:

- Ein oder mehrere Syntaxkomponentennamen, die sein können:
  - Datentypennamen (geschrieben in spitzen Klammern, wie `<color>` oder `<length>`)
  - Schlüsselwörter (geschrieben ohne spitze Klammern, wie `auto` oder `none`)
- Die universelle Syntax `*`, die jeden gültigen CSS-Wert akzeptiert. Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Syntaxkomponentennamen können allein stehen oder multipliziert und auf verschiedene Weise kombiniert werden:

- Die `+` (durch Leerzeichen getrennt) und `#` (durch Komma getrennt) Multiplikatoren zeigen an, dass eine Liste von Werten erwartet wird. Zum Beispiel bedeutet `<color>#`, dass eine durch Komma getrennte Liste von `<color>` Werten die erwartete Syntax ist.

- Der vertikale Strich (`|`) Kombinator kann "oder"-Bedingungen für die erwartete Syntax erstellen. Zum Beispiel akzeptiert `<length> | auto` `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Komma getrennte Liste von `<color>` Werten oder eine durch Komma getrennte Liste von `<integer>` Werten.

Die folgenden Syntaxkomponentennamen werden unterstützt:

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
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}} oder {{cssxref("&lt;percentage&gt;")}} Wert und jeden gültigen {{cssxref("calc", "calc()")}} Ausdruck, der `<length>` und `<percentage>` Werte kombiniert.
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
  - : Akzeptiert eine Liste von gültigen {{cssxref("&lt;transform-function&gt;")}} Werten. Es ist äquivalent zu `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}} Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Eine benutzerdefinierte Eigenschaft mit Typüberprüfung registrieren

Dieses Beispiel zeigt, wie Sie eine benutzerdefinierte Eigenschaft `--my-color` definieren, die nur `<color>` Werte zulässt:

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
