---
title: "`initial-value` CSS-@regel-Deskriptor"
short-title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Der **`initial-value`**-Deskriptor der {{cssxref("@property")}} [@regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) spezifiziert den Initialwert für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/Reference/Properties/--*).
Es ist ein erforderlicher Deskriptor, es sei denn, der Wert des Deskriptors {{cssxref("@property/syntax", "syntax")}} ist die universelle Syntax (`*`).
Wenn er erforderlich, aber fehlend oder ungültig ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 16px;
```

### Werte

Ein Wert, der dem im Deskriptor {{cssxref("@property/syntax", "syntax")}} spezifizierten Typ entspricht.
Zum Beispiel, wenn `syntax` `<color>` ist, dann muss der `initial-value` ein gültiger {{cssxref("color")}}-Wert sein.

Wenn der Wert des `syntax`-Deskriptors nicht die universelle Syntaxdefinition ist, muss der `initial-value`-Deskriptor einen [computationally independent](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne von anderen Werten abhängig zu sein, außer von "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel ist `10px` computationally independent—es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des Elternteils abhängig ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Initialwerts für eine benutzerdefinierte Eigenschaft

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` mit einem anfänglichen Farbwert von `#c0ffee` definiert wird. Dieser Initialwert wird verwendet, wenn die Eigenschaft nicht geerbt wird (`inherits: false`) und kein anderer Wert auf dem Element gesetzt ist.

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
- [Registrierung von CSS-Custom-Properties](/de/docs/Web/CSS/Guides/Properties_and_values_API/Registering_properties)
- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
