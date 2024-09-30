---
title: CSS Properties and Values API
slug: Web/API/CSS_Properties_and_Values_API
l10n:
  sourceCommit: a4675b9077ae32f989c7ecac94f454db2653c4fc
---

{{DefaultAPISidebar("CSS Properties and Values API")}}

Die **CSS Properties and Values API** — Teil der [CSS Houdini](/de/docs/Web/API/Houdini_APIs) Gruppe von APIs — ermöglicht es Entwicklern, ihre [CSS benutzerdefinierten Eigenschaften](/de/docs/Web/CSS/--*) explizit zu definieren, einschließlich Prüfung des Eigenschaftstyps, Standardwerten und Eigenschaften, die ihren Wert erben oder nicht.

## Schnittstellen

- [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static)
  - : Definiert, wie ein Browser [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) parsen soll. Diese Schnittstelle ist über [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript) zugänglich.
- {{cssxref('@property')}}
  - : Definiert, wie ein Browser [CSS benutzerdefinierte Eigenschaften](/de/docs/Web/CSS/--*) parsen soll. Diese Schnittstelle ist über die {{cssxref('@property')}} [at-rule](/de/docs/Web/CSS/At-rule) in [CSS](/de/docs/Web/CSS) zugänglich.

## Beispiele

Das folgende Beispiel registriert eine [benutzerdefinierte Eigenschaft](/de/docs/Web/CSS/--*) namens `--my-color` mit [`CSS.registerProperty`](/de/docs/Web/API/CSS/registerProperty_static) in [JavaScript](/de/docs/Web/JavaScript). `--my-color` verwendet die CSS-Farbsyntax, hat einen Standardwert von `#c0ffee` und wird seinen Wert nicht erben:

```js
window.CSS.registerProperty({
  name: "--my-color",
  syntax: "<color>",
  inherits: false,
  initialValue: "#c0ffee",
});
```

Die gleiche Registrierung kann in [CSS](/de/docs/Web/CSS) unter Verwendung der {{cssxref('@property')}} [at-rule](/de/docs/Web/CSS/At-rule) erfolgen:

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
