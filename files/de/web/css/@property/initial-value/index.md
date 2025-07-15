---
title: "`initial-value`"
slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Der **`initial-value`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) gibt den Anfangswert für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/--*) an. Es ist ein erforderlicher Deskriptor, es sei denn, der Wert des {{cssxref("@property/syntax", "syntax")}} Deskriptors ist die universelle Syntax (`*`). Wenn er erforderlich ist, aber fehlt oder ungültig ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 2rem;
```

### Werte

Ein Wert, der dem Typ entspricht, der im {{cssxref("@property/syntax", "syntax")}} Deskriptor angegeben ist. Wenn `Syntax` zum Beispiel `<color>` ist, dann muss der `initial-value` ein gültiger {{cssxref("color")}}-Wert sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Anfangswert für eine benutzerdefinierte Eigenschaft festlegen

Dieses Beispiel zeigt, wie man eine benutzerdefinierte Eigenschaft `--my-color` mit einem anfänglichen Farbwert von `#c0ffee` definiert. Dieser Anfangswert wird verwendet, wenn die Eigenschaft nicht vererbt wird (`inherits: false`) und kein anderer Wert auf dem Element gesetzt ist.

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

- Andere {{cssxref("@property")}}-Deskriptoren: {{cssxref("@property/inherits","inherits")}} und {{cssxref("@property/syntax", "syntax")}}
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
