---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Pakets — erlaubt es Entwicklern, ihre [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren und ermöglicht damit Typüberprüfungen von Eigenschaften, Standardwerte und die Option, ob Eigenschaften ihren Wert erben oder nicht.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) parsen soll. Diese Schnittstelle kann über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) aufgerufen werden.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS Custom Properties](/de/docs/Web/CSS/Reference/Properties/--*) parsen soll. Diese Schnittstelle kann über {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) in [CSS](/de/docs/Web/CSS) aufgerufen werden.

## Beispiele

Das folgende Beispiel registriert eine [Custom Property](/de/docs/Web/CSS/Reference/Properties/--*) mit dem Namen `--my-color` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript). `--my-color` wird die CSS-Farbsyntax verwenden, einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/Guides/Syntax/At-rules) erfolgen:

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
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
