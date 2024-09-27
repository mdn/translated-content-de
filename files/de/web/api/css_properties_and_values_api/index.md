---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Überbaus — ermöglicht es Entwicklern, ihre [CSS- benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, was die Prüfung von Eigenschaftstypen, Standardwerte und Eigenschaften erleichtert, die ihre Werte erben oder nicht erben.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS- benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) interpretieren soll. Greifen Sie über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) auf diese Schnittstelle zu.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS- benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) interpretieren soll. Greifen Sie über {{cssxref('@property')}} [At-Regel](/de/docs/Web/CSS/At-rule) in [CSS](/de/docs/Web/CSS) auf diese Schnittstelle zu.

## Beispiele

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-color` mithilfe von [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript). `--my-color` wird die CSS-Farbsyntax verwenden, es wird einen Standardwert von `#c0ffee` haben, und es wird seinen Wert nicht erben:

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

- [Verwendung der CSS Properties and Values API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS Painting API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini-APIs](/de/docs/Web/API/Houdini_APIs)
