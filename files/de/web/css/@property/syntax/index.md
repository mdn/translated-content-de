---
title: syntax
slug: Web/CSS/@property/syntax
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **`syntax`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) definiert die erlaubten Wertetypen für die registrierte [CSS Custom Property](/de/docs/Web/CSS/--*).
Er steuert, wie der angegebene Wert der Eigenschaft verarbeitet wird, um den {{cssxref("computed_value", "berechneten Wert")}} zu erhalten.
Es handelt sich um einen obligatorischen Deskriptor; wenn er fehlt oder ungültig ist, wird die gesamte `@property`-Regel als ungültig betrachtet und ignoriert.

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

Ein String (als Syntax-String bezeichnet), der die erlaubten Werte definiert.
Es kann einer der folgenden Fälle sein:

- Einer oder mehrere Namen von Syntaxkomponenten, die sein können:
  - Datentypnamen (geschrieben in spitzen Klammern, z. B. `<color>` oder `<length>`)
  - Schlüsselwörter (geschrieben ohne spitze Klammern, z. B. `auto` oder `none`)
- Die universelle Syntax `*`, die jeden gültigen CSS-Wert akzeptiert.
  Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Namen der Syntaxkomponenten können allein verwendet oder in verschiedenen Formen multipliziert und kombiniert werden:

- Die Multiplikatoren `+` (durch Leerzeichen getrennt) und `#` (durch Kommas getrennt) geben an, dass eine Liste von Werten erwartet wird.
  Zum Beispiel bedeutet `<color>#`, dass eine kommagetrennte Liste von `<color>`-Werten die erwartete Syntax ist.

- Der vertikale Strich (`|`) als Kombinator kann "oder"-Bedingungen für die erwartete Syntax erstellen.
  Zum Beispiel akzeptiert `<length> | auto` entweder `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine kommagetrennte Liste von `<color>`-Werten oder eine kommagetrennte Liste von `<integer>`-Werten.

Die folgenden Namen von Syntaxkomponenten werden unterstützt:

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
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Wert sowie jede gültige {{cssxref("calc", "calc()")}}-Ausdruckskombination aus `<length>`- und `<percentage>`-Werten.
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
  - : Akzeptiert jeden gültigen {{cssxref("&lt;transform-function&gt;")}}-Wert.
- `"<transform-list>"`
  - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}}-Werte. Dies ist gleichbedeutend mit `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Registrieren einer benutzerdefinierten Eigenschaft mit Typüberprüfung

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

- Andere {{cssxref("@property")}} Deskriptoren: {{cssxref("@property/inherits", "inherits")}} und {{cssxref("@property/initial-value", "initial-value")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
