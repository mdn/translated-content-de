---
title: CSS-Eigenschaften- und Werte-API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS-Eigenschaften- und Werte-API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Familie von APIs — ermöglicht es Entwicklern, ihre [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, was eine Überprüfung des Eigenschaftstyps, Standardwerte und Eigenschaften erlaubt, die ihre Werte erben oder nicht.

## Schnittstellen

- {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}}
  - : Definiert, wie ein Browser [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) analysieren sollte. Greifen Sie auf diese Schnittstelle über {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} in [JavaScript](/de/docs/Web/JavaScript) zu.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS-Benutzereigenschaften](/de/docs/Web/CSS/--*) analysieren sollte. Greifen Sie auf diese Schnittstelle über die {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule) in [CSS](/de/docs/Web/CSS) zu.

## Beispiele

Das Folgende wird eine [Benutzereigenschaft](/de/docs/Web/CSS/--*) namens `--my-color` registrieren, indem {{domxref('CSS/registerProperty_static', 'CSS.registerProperty')}} in [JavaScript](/de/docs/Web/JavaScript) verwendet wird. `--my-color` wird die CSS-Farbsyntax verwenden, einen Standardwert von `#c0ffee` haben und seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) mit der {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule) erfolgen:

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

- [Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
