---
title: "@font-palette-values"
slug: Web/CSS/Reference/At-rules/@font-palette-values
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Die **`@font-palette-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/CSS_syntax/At-rules) ermöglicht es Ihnen, die Standardwerte der vom Schriftgestalter erstellten [font-palette](/de/docs/Web/CSS/Reference/Properties/font-palette) anzupassen.

## Syntax

```css
@font-palette-values --identifier {
  font-family: "Bixa";
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/Reference/Values/dashed-ident) ist eine benutzerdefinierte Kennung, die zwar wie eine [CSS-Benutzerdefinierte-Variable](/de/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties) aussieht, sich jedoch anders verhält und nicht in eine [CSS var() Funktion](/de/docs/Web/CSS/Reference/Values/var) eingebettet ist.

### Beschreibungen

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Gibt den Namen oder Index der vom Schriftgestalter erstellten Grundpalette an, die verwendet werden soll.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann. Ein `font-family`-Name ist erforderlich, damit die `@font-palette-values`-Regel gültig ist.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Gibt die Farben in der Grundpalette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben in einer vorhandenen Palette überschreiben

Dieses Beispiel zeigt, wie Sie einige oder alle Farben in einer Farbfont ändern können.

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";
p {
  font-family: "Bungee Spice", fantasy;
  font-size: 2rem;
}
@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}
.alternate {
  font-palette: --Alternate;
}
```

#### Ergebnis

Wenn Sie Farben der normalen oder Grundpalette bei Index 0 überschreiben, müssen Sie nicht deklarieren, welche Grundpalette verwendet werden soll. Dies sollte nur geschehen, wenn eine andere Grundpalette überschrieben wird. Wenn Sie alle Farben überschreiben, gibt es ebenfalls keine Notwendigkeit, die zu verwendende Grundpalette zu spezifizieren.

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette", "font-palette")}} Eigenschaft
- {{cssxref("@font-palette-values/font-family", "font-family")}} Beschreibung
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Beschreibung
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Beschreibung
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)
