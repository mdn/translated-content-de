---
title: "@font-palette-values"
slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 19e70cf926d456d6ce51df56c2f88c60080058ec
---

{{CSSRef}}

Die **`@font-palette-values`** [CSS](/de/docs/Web/CSS) [At-Regel](/de/docs/Web/CSS/At-rule) ermöglicht es Ihnen, die Standardwerte der vom Schriftartenersteller erstellten [font-palette](/de/docs/Web/CSS/font-palette) anzupassen.

## Syntax

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

Das [&lt;dashed-ident&gt;](/de/docs/Web/CSS/dashed-ident) ist ein benutzerdefinierter Bezeichner, der, obwohl er wie eine [CSS Custom Property](/de/docs/Web/CSS/Using_CSS_custom_properties) aussieht, anders funktioniert und nicht in einer [CSS var() Funktion](/de/docs/Web/CSS/var) eingeschlossen ist.

### Deskriptoren

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Spezifiziert den Namen oder Index der vom Schriftartenersteller erstellten Basis-Palette, die verwendet werden soll.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Gibt den Namen der Schriftfamilie an, auf die diese Palette angewendet werden kann. Ein `font-family`-Name ist erforderlich, damit die `@font-palette-values`-Regel gültig ist.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Gibt die Farben in der Basis-Palette an, die überschrieben werden sollen.

## Formale Syntax

{{csssyntax}}

## Beispiele

### Farben in einer vorhandenen Palette überschreiben

Dieses Beispiel zeigt, wie Sie einige oder alle Farben in einer Farb-Schriftart ändern können.

#### HTML

```html
<p>default colors</p>
<p class="alternate">alternate colors</p>
```

#### CSS

```css
@import url(https://fonts.googleapis.com/css2?family=Bungee+Spice);
p {
  font-family: "Bungee Spice";
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

Beim Überschreiben von Farben der normalen oder der Basis-Palette an Index 0 müssen Sie nicht angeben, welche Basis-Palette verwendet werden soll. Dies sollte nur geschehen, wenn eine andere Basis-Palette überschrieben wird. Wenn Sie alle Farben überschreiben, ist es auch nicht notwendig, die zu verwendende Basis-Palette anzugeben.

{{EmbedLiveSample("Overriding colors in an existing palette")}}

## Spezifikationen

{{Specifications}}

## Browser-Kompatibilität

{{Compat}}

## Siehe auch

- {{cssxref("font-palette", "font-palette")}} Eigenschaft
- {{cssxref("@font-palette-values/font-family", "font-family")}} Deskriptor
- {{cssxref("@font-palette-values/base-palette", "base-palette")}} Deskriptor
- {{cssxref("@font-palette-values/override-colors", "override-colors")}} Deskriptor
- [`CSSFontPaletteValuesRule`](/de/docs/Web/API/CSSFontPaletteValuesRule)
