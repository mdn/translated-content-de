---
title: initial-value
slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: 6834ad69f8844894e0578ea06375e3e1e1e17e73
---

{{CSSRef}}

Der **`initial-value`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) legt den Anfangswert für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/--*) fest.
Er ist ein erforderlicher Deskriptor, es sei denn, der Wert des Deskriptors {{cssxref("@property/syntax", "syntax")}} ist die universelle Syntax (`*`).
Wenn er erforderlich ist, aber fehlt oder ungültig ist, ist die gesamte `@property` Regel ungültig und wird ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 2rem;
```

### Werte

Ein Wert, der dem im Deskriptor {{cssxref("@property/syntax", "syntax")}} angegebenen Typ entspricht.
Wenn beispielsweise `syntax` `<color>` ist, muss der `initial-value` ein gültiger {{cssxref("color")}} Wert sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Anfangswerts für eine benutzerdefinierte Eigenschaft

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` mit einem anfänglichen Farbwert von `#c0ffee` definiert wird. Dieser Anfangswert wird verwendet, wenn die Eigenschaft nicht vererbt wird (`inherits: false`) und kein anderer Wert am Element gesetzt ist.

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

- Andere {{cssxref("@property")}} Deskriptoren: {{cssxref("@property/inherits","inherits")}} und {{cssxref("@property/syntax", "syntax")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
