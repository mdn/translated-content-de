---
title: inherits
slug: Web/CSS/@property/inherits
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`inherits`** [CSS](/de/docs/Web/CSS) Deskriptor ist erforderlich, wenn Sie die {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwenden und steuert, ob die durch `@property` angegebene Registrierung der benutzerdefinierten Eigenschaft standardmäßig geerbt wird.

## Syntax

```css
@property --property-name {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}

@property --property-name {
  syntax: "<color>";
  inherits: true;
  initial-value: #c0ffee;
}
```

## Werte

- `true`
  - : Die Eigenschaft wird standardmäßig geerbt.
- `false`
  - : Die Eigenschaft wird standardmäßig nicht geerbt.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Fügen Sie der `--my-color` [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) eine Typprüfung als Farbe hinzu, einen Standardwert und verhindern Sie, dass sie ihren Wert erbt:

Verwendung der [CSS](/de/docs/Web/CSS) {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule):

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Verwendung von [JavaScript](/de/docs/Web/JavaScript) {{domxref('CSS.registerProperty_static', 'CSS.registerProperty()')}}:

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

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
