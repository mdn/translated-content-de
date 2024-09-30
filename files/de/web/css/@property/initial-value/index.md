---
title: initial-value
slug: Web/CSS/@property/initial-value
l10n:
  sourceCommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{CSSRef}}

Der **`initial-value`** [CSS](/de/docs/Web/CSS) Deskriptor ist erforderlich, wenn der {{cssxref("@property")}} [At-Regel](/de/docs/Web/CSS/At-rule) verwendet wird, es sei denn, die Syntax akzeptiert jeden gültigen Token-Stream. Er legt den Anfangswert für die Eigenschaft fest.

Der gewählte Wert als `initial-value` muss gemäß der Syntaxdefinition korrekt geparst werden. Wenn die Syntax also `<color>` ist, muss der initiale Wert ein gültiger {{cssxref("color")}}-Wert sein.

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

Ein String mit einem Wert, der ein korrekter Wert für die gewählte `syntax` ist.

## Formale Definition

{{cssinfo}}

## Formale Syntax

{{csssyntax}}

## Beispiele

Fügen Sie der `--my-color` [benutzerdefinierten Eigenschaft](/de/docs/Web/CSS/--*) einen Typüberprüfung hinzu, als Farbe, wobei der Anfangswert eine gültige Farbe ist:

Verwendung der [CSS](/de/docs/Web/CSS) {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule):

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

- [CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
