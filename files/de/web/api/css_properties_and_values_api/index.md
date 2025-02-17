---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: a850ca867a8b380a53320bab6870fb7335f22d52
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS-Eigenschaften- und Werte-API** — Teil des [CSS Houdini](/de/docs/Web/API/Houdini_APIs) API-Frameworks — erlaubt Entwicklern, ihre [CSS-Benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren. Dies ermöglicht Typprüfungen für Eigenschaften, Standardwerte sowie Eigenschaften, die ihre Werte erben oder nicht erben.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) parsen soll. Diese Schnittstelle wird über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) aufgerufen.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS-Benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) parsen soll. Diese Schnittstelle wird über die {{cssxref('@property')}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) in [CSS](/de/docs/Web/CSS) verwendet.

## Beispiele

Im Folgenden wird eine [Benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-color` mit [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) registriert. `--my-color` nutzt die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und erbt ihren Wert nicht:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) unter Verwendung der {{cssxref('@property')}}-[At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rule) durchgeführt werden:

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

- [Die Verwendung der CSS-Eigenschaften- und Werte-API](/de/docs/Web/API/CSS_Properties_and_Values_API/guide)
- [CSS-Mal-API](/de/docs/Web/API/CSS_Painting_API)
- [CSS Typed Object Model](/de/docs/Web/API/CSS_Typed_OM_API)
- [Houdini APIs](/de/docs/Web/API/Houdini_APIs)
