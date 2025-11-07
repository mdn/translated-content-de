---
title: inherits
slug: Web/CSS/Reference/At-rules/@property/inherits
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`inherits`** [CSS](/de/docs/Web/CSS) Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) steuert, ob die registrierte [CSS benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) standardmäßig vererbt wird oder nicht.
Es ist ein erforderlicher Deskriptor; fehlt er oder ist er ungültig, ist die gesamte `@property` Regel ungültig und wird ignoriert.

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

### Einstellen des Verhaltens der Vererbung einer benutzerdefinierten Eigenschaft

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
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
