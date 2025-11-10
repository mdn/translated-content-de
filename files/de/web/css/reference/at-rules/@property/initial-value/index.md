---
title: initial-value
slug: Web/CSS/Reference/At-rules/@property/initial-value
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Der **`initial-value`**-Deskriptor der {{cssxref("@property")}} [at-rule](/de/docs/Web/CSS/Guides/Syntax/At-rules) spezifiziert den Anfangswert für die registrierte [CSS-Custom-Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*).
Er ist ein erforderlicher Deskriptor, es sei denn, der Wert des {{cssxref("@property/syntax", "syntax")}}-Deskriptors ist die universelle Syntax (`*`).
Falls er erforderlich, aber fehlend oder ungültig ist, ist die gesamte `@property`-Regel ungültig und wird ignoriert.

## Syntax

```css
/* Set initial color value */
initial-value: rebeccapurple;

/* Set initial length value */
initial-value: 16px;
```

### Werte

Ein Wert, der dem im {{cssxref("@property/syntax", "syntax")}}-Deskriptor angegebenen Typ entspricht.
Wenn `syntax` beispielsweise `<color>` ist, muss der `initial-value` ein gültiger {{cssxref("color")}}-Wert sein.

Wenn der Wert des `syntax`-Deskriptors nicht die Definition der universellen Syntax ist, muss der `initial-value`-Deskriptor einen [rechnerisch unabhängigen](https://drafts.css-houdini.org/css-properties-values-api-1/#computationally-independent) Wert aufweisen. Das bedeutet, der Wert kann in einen berechneten Wert umgewandelt werden, ohne von anderen Werten abhängig zu sein, außer für "globale" Definitionen, die von CSS unabhängig sind. Beispielsweise ist `10px` rechnerisch unabhängig – er ändert sich nicht, wenn er in einen berechneten Wert umgewandelt wird. `2in` ist ebenfalls gültig, da `1in` immer `96px` entspricht. `3em` ist jedoch nicht gültig, da der Wert eines `em` von der {{cssxref("font-size")}} des Elternteils abhängig ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

### Festlegen eines Anfangswertes für eine benutzerdefinierte Eigenschaft

Dieses Beispiel zeigt, wie eine benutzerdefinierte Eigenschaft `--my-color` mit einem Anfangswert der Farbe `#c0ffee` definiert wird. Dieser Anfangswert wird verwendet, wenn die Eigenschaft nicht vererbt wird (`inherits: false`) und kein anderer Wert für das Element festgelegt ist.

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
