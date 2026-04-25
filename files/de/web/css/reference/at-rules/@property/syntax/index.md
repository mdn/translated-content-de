---
title: "`syntax` CSS-Attribut-Deskriptor"
short-title: syntax
slug: Web/CSS/Reference/At-rules/@property/syntax
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`syntax`**-Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) definiert die erlaubten Wertetypen für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/Reference/Properties/--*).
Er kontrolliert, wie der spezifizierte Wert der Eigenschaft verarbeitet wird, um den [berechneten Wert](/de/docs/Web/CSS/Guides/Cascade/Property_value_processing#computed_value) abzuleiten.
Es handelt sich um einen erforderlichen Deskriptor; wenn er fehlt oder ungültig ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

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

Ein String (bekannt als Syntax-String), der die erlaubten Werte definiert.
Es kann eines der Folgenden sein:

- Einer oder mehrere Syntax-Komponentennamen, die sein können:
  - Datentypnamen (geschrieben mit spitzen Klammern, wie `<color>` oder `<length>`)
  - Schlüsselwörter (geschrieben ohne spitze Klammern, wie `auto` oder `none`)
- Die universelle Syntax `*`, die jeden gültigen CSS-Wert akzeptiert.
  Sie kann nicht multipliziert oder mit anderen Syntaxkomponenten kombiniert werden.

Die Syntax-Komponentennamen können allein verwendet oder in unterschiedlicher Weise multipliziert und kombiniert werden:

- Die `+` (durch Leerzeichen getrennt) und `#` (durch Kommas getrennt) Multiplikatoren geben an, dass eine Liste von Werten erwartet wird.
  Zum Beispiel bedeutet `<color>#`, dass eine durch Kommas getrennte Liste von `<color>`-Werten als Syntax erwartet wird.

- Der vertikale Strich (`|`) Kombinator kann "oder"-Bedingungen für die erwartete Syntax erzeugen.
  Zum Beispiel akzeptiert `<length> | auto` entweder `<length>` oder `auto`, und `<color># | <integer>#` erwartet eine durch Kommas getrennte Liste von `<color>`-Werten oder eine durch Kommas getrennte Liste von `<integer>`-Werten.

Die folgenden Syntax-Komponentennamen werden unterstützt:

- `"<angle>"`
  - : Akzeptiert jeden gültigen {{cssxref("angle")}}-Wert.
- `"<color>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;color&gt;")}}-Wert.
- `"<custom-ident>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;custom-ident&gt;")}}-Wert.
- `"<image>"`
  - : Akzeptiert jeden gültigen {{cssxref("image")}}-Wert.
- `"<integer>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;integer&gt;")}}-Wert.
- `"<length>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}-Wert.
- `"<length-percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;length&gt;")}}- oder {{cssxref("&lt;percentage&gt;")}}-Wert und jeden gültigen {{cssxref("calc()")}}-Ausdruck, der `<length>` und `<percentage>`-Werte kombiniert.
- `"<number>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;number&gt;")}}-Wert.
- `"<percentage>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;percentage&gt;")}}-Wert.
- `"<resolution>"`
  - : Akzeptiert jeden gültigen {{cssxref("resolution")}}-Wert.
- `"<string>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;string&gt;")}}-Wert.
- `"<time>"`
  - : Akzeptiert jeden gültigen {{cssxref("&lt;time&gt;")}}-Wert.
- `"<transform-function>"`
  - : Akzeptiert jede gültige {{cssxref("&lt;transform-function&gt;")}}-Funktion.
- `"<transform-list>"`
  - : Akzeptiert eine Liste gültiger {{cssxref("&lt;transform-function&gt;")}}-Werte. Es ist äquivalent zu `"<transform-function>+"`.
- `"<url>"`
  - : Akzeptiert jeden gültigen {{cssxref("url_value", "&lt;url&gt;")}}-Wert.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Registrierung einer benutzerdefinierten Eigenschaft mit Typprüfung

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
- [Registrierung von CSS Custom Properties](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
