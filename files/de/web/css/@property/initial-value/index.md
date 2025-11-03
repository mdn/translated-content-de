---
title: initial-value
slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: e80d1c14678b9b7ad3c6844aeae22b70974846aa
---

Der **`initial-value`** Deskriptor der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) gibt den Anfangswert für die registrierte [CSS-Custom-Property](/de/docs/Web/CSS/Reference/Properties/--*) an.
Es ist ein erforderlicher Deskriptor, es sei denn, der Wert des {{cssxref("@property/syntax", "syntax")}} Deskriptors ist die universelle Syntax (`*`).
Falls erforderlich, aber fehlend oder ungültig, ist die gesamte `@property` Regel ungültig und wird ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 16px;
```

### Werte

Ein Wert, der dem Typ entspricht, der im {{cssxref("@property/syntax", "syntax")}} Deskriptor angegeben ist.
Zum Beispiel, wenn `syntax` `<color>` ist, muss der `initial-value` ein gültiger {{cssxref("color")}} Wert sein.

Wenn der Wert des `syntax` Deskriptors nicht die universelle Syntaxdefinition ist, muss der `initial-value` Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert haben. Das bedeutet, dass der Wert in einen berechneten Wert umgewandelt werden kann, ohne dass er von anderen Werten abhängig ist, außer von "globalen" Definitionen, die unabhängig von CSS sind. Zum Beispiel, `10px` ist rechnerisch unabhängig – es ändert sich nicht, wenn es in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, weil `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des Elternteils abhängig ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Einen Anfangswert für eine benutzerdefinierte Eigenschaft festlegen

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` mit einem Anfangsfarbwert von `#c0ffee` definiert wird. Dieser Anfangswert wird verwendet, wenn die Eigenschaft nicht vererbt wird (`inherits: false`) und kein anderer Wert auf dem Element gesetzt ist.

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
