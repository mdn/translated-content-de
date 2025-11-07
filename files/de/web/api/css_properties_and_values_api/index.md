---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties und Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Umgebung von APIs — ermöglicht es Entwicklern, ihre [CSS-eigenen Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) explizit zu definieren, wodurch eine Überprüfung des Eigenschaftstyps, Standardwerte sowie Eigenschaften, die ihren Wert erben oder nicht, ermöglicht werden.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS-eigene Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) analysieren soll. Greifen Sie auf diese Schnittstelle über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) zu.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS-eigene Eigenschaften](/de/docs/Web/CSS/Reference/Properties/--*) analysieren soll. Greifen Sie auf diese Schnittstelle über {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) in [CSS](/de/docs/Web/CSS) zu.

## Beispiele

Das folgende Beispiel registriert eine [eigene Eigenschaft](/de/docs/Web/CSS/Reference/Properties/--*) namens `--my-color` unter Verwendung von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript). `--my-color` wird die CSS-Farbsyntax verwenden, einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) unter Verwendung der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) erfolgen:

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

- [Die Nutzung der CSS properties and values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
