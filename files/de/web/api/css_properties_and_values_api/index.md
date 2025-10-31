---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: 55326f330a6ae829494c7606b1bd47b2c0f9d888
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Gruppe — ermöglicht Entwicklern, ihre [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, was eine Überprüfung des Property-Typs, Standardwerte und Eigenschaften ermöglicht, die ihren Wert erben oder nicht.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) parsen soll. Greifen Sie auf diese Schnittstelle über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) zu.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS-Custom-Properties](/de/docs/Web/CSS/Reference/Properties/--*) parsen soll. Greifen Sie auf diese Schnittstelle über das {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) in [CSS](/de/docs/Web/CSS) zu.

## Beispiele

Das folgende Beispiel registriert eine [Custom-Property](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-color` mithilfe von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript). `--my-color` wird die CSS-Farbsyntax verwenden, einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) erfolgen:

```css
@property --my-color {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- [Verwendung der CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
