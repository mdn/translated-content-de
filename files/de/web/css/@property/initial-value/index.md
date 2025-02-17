---
title: initial-value
slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{CSSRef}}

Der **`initial-value`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) gibt den Initialwert für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/--*) an. 
Es handelt sich um einen erforderlichen Deskriptor, es sei denn, der Wert des {{cssxref("@property/syntax", "syntax")}} Deskriptors ist die universelle Syntax (`*`). 
Falls erforderlich, aber fehlend oder ungültig, wird die gesamte `@property`-Regel als ungültig betrachtet und ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 2rem;
```

### Werte

Ein Wert, der dem in dem {{cssxref("@property/syntax", "syntax")}} Deskriptor angegebenen Typ entspricht. 
Wenn beispielsweise `syntax` `<color>` ist, muss der `initial-value` ein gültiger {{cssxref("color")}}-Wert sein.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Initialwerts für eine benutzerdefinierte Eigenschaft

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` mit einem anfänglichen Farbwert von `#c0ffee` definiert wird. Dieser Initialwert wird verwendet, wenn die Eigenschaft nicht vererbt wird (`inherits: false`) und kein anderer Wert auf dem Element gesetzt ist.

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
