---
title: "`inherits` CSS At-Regel-Deskriptor"
short-title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`inherits`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert, ob die registrierte [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) standardmäßig vererbt wird oder nicht. Es handelt sich um einen erforderlichen Deskriptor; fehlt er oder ist er ungültig, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

## Syntax

```css
/* Custom property does not inherit values */
inherits: false;

/* Custom property inherits values */
inherits: true;
```

### Werte

- `true`
  - : Die Eigenschaft wird standardmäßig vererbt.
- `false`
  - : Die Eigenschaft wird standardmäßig nicht vererbt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einstellen des Vererbungsverhaltens einer benutzerdefinierten Eigenschaft

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` definiert wird, die ihren Wert nicht von ihren Elternelementen erbt:

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

- Andere {{cssxref("@property")}} Deskriptoren: {{cssxref("@property/initial-value", "initial-value")}} und {{cssxref("@property/syntax","syntax")}}
- [Registrierung von benutzerdefinierten CSS-Eigenschaften](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS-Mal-API](/de/docs/Web/API/CSS_Painting_API)
- [CSS-Typed-Object-Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
